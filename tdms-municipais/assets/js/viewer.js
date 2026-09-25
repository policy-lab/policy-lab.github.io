// Viewer com zoom + pan para TdMs. Comportamento tipo Google Maps:
// - Scroll/pinch = zoom in/out (centrado no cursor/dedos)
// - Drag = pan
// - Double-click = zoom in 2x
// - Tela cheia = expande pra viewport inteira
// - Tabs = troca entre versão simplificada e completa

(function () {
  'use strict';

  function initViewer(canvasEl, options) {
    if (!canvasEl) return null;

    const imgWrap = canvasEl.querySelector('.viewer-img-wrap');
    const img = canvasEl.querySelector('.viewer-img');
    if (!imgWrap || !img) return null;

    const state = {
      scale: 1,
      x: 0,
      y: 0,
      minScale: 0.3,
      maxScale: 6,
      dragging: false,
      lastX: 0,
      lastY: 0,
      naturalReady: false,
    };

    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    function apply() {
      imgWrap.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
      const zoomEl = canvasEl.querySelector('[data-zoom-level]');
      if (zoomEl) zoomEl.textContent = Math.round(state.scale * 100) + '%';
    }

    function fitToCanvas() {
      // Espera a imagem carregar pra pegar dimensões naturais
      const cw = canvasEl.clientWidth;
      const ch = canvasEl.clientHeight;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;
      const scale = Math.min(cw / iw, ch / ih) * 0.98;
      state.scale = scale;
      state.minScale = scale * 0.5;
      state.maxScale = scale * 12;
      // Centralizar
      state.x = (cw - iw * scale) / 2;
      state.y = (ch - ih * scale) / 2;
      apply();
    }

    function zoomAtPoint(delta, cx, cy) {
      const newScale = clamp(state.scale * (1 + delta), state.minScale, state.maxScale);
      const ratio = newScale / state.scale;
      // Ajusta x,y pra manter o ponto sob o cursor fixo
      state.x = cx - (cx - state.x) * ratio;
      state.y = cy - (cy - state.y) * ratio;
      state.scale = newScale;
      apply();
    }

    // --- Eventos ---
    canvasEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = canvasEl.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const delta = e.deltaY > 0 ? -0.12 : 0.12;
      zoomAtPoint(delta, cx, cy);
    }, { passive: false });

    canvasEl.addEventListener('dblclick', (e) => {
      const rect = canvasEl.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      zoomAtPoint(0.8, cx, cy);
    });

    canvasEl.addEventListener('mousedown', (e) => {
      state.dragging = true;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - state.lastX;
      const dy = e.clientY - state.lastY;
      state.x += dx;
      state.y += dy;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      apply();
    });

    window.addEventListener('mouseup', () => { state.dragging = false; });

    // Touch básico (1 dedo = pan; pinch = zoom)
    let pinchDist = 0;
    canvasEl.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        state.dragging = true;
        state.lastX = e.touches[0].clientX;
        state.lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        state.dragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchDist = Math.hypot(dx, dy);
      }
    }, { passive: true });

    canvasEl.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && state.dragging) {
        const dx = e.touches[0].clientX - state.lastX;
        const dy = e.touches[0].clientY - state.lastY;
        state.x += dx;
        state.y += dy;
        state.lastX = e.touches[0].clientX;
        state.lastY = e.touches[0].clientY;
        apply();
      } else if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        if (pinchDist) {
          const delta = (dist - pinchDist) / pinchDist;
          const rect = canvasEl.getBoundingClientRect();
          const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
          const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
          zoomAtPoint(delta, cx, cy);
        }
        pinchDist = dist;
      }
    }, { passive: false });

    canvasEl.addEventListener('touchend', () => {
      state.dragging = false;
      pinchDist = 0;
    });

    // Controles
    canvasEl.querySelectorAll('[data-zoom-in]').forEach(b => b.addEventListener('click', () => {
      const rect = canvasEl.getBoundingClientRect();
      zoomAtPoint(0.25, rect.width / 2, rect.height / 2);
    }));
    canvasEl.querySelectorAll('[data-zoom-out]').forEach(b => b.addEventListener('click', () => {
      const rect = canvasEl.getBoundingClientRect();
      zoomAtPoint(-0.2, rect.width / 2, rect.height / 2);
    }));
    canvasEl.querySelectorAll('[data-zoom-fit]').forEach(b => b.addEventListener('click', fitToCanvas));
    canvasEl.querySelectorAll('[data-fullscreen]').forEach(b => b.addEventListener('click', () => {
      canvasEl.classList.toggle('is-fullscreen');
      // Reajusta após próximo frame
      requestAnimationFrame(fitToCanvas);
    }));

    // ESC sai do fullscreen
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && canvasEl.classList.contains('is-fullscreen')) {
        canvasEl.classList.remove('is-fullscreen');
        requestAnimationFrame(fitToCanvas);
      }
    });

    // Quando a imagem carrega, ajusta
    if (img.complete && img.naturalWidth) {
      fitToCanvas();
    } else {
      img.addEventListener('load', fitToCanvas);
    }

    // Resize
    window.addEventListener('resize', () => {
      // Mantém scale, mas se quiser reset on resize, descomentar:
      // fitToCanvas();
    });

    return {
      setImage: function (src) {
        img.src = src;
        img.addEventListener('load', fitToCanvas, { once: true });
      },
      fit: fitToCanvas,
    };
  }

  // Tabs simplificada/completa
  function initTabs(viewer) {
    const tabs = document.querySelectorAll('[data-viewer-tab]');
    const downloadJpgBtn = document.querySelector('[data-download-jpg]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const src = tab.dataset.src;
        const hdSrc = tab.dataset.hdSrc;
        if (src && viewer) viewer.setImage(src);
        if (hdSrc && downloadJpgBtn) downloadJpgBtn.href = hdSrc;
      });
    });
  }

  // Auto-init
  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.viewer-canvas');
    if (canvas) {
      const v = initViewer(canvas);
      initTabs(v);
    }
  });
})();
