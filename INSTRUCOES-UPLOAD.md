# Como publicar esta atualização (passo a passo)

Você não precisa instalar nada. Tudo é feito no navegador, no site do GitHub.

## O que tem neste pacote

- `index.html` — o site (já com o botão **Gerar relatório** e versão 4.3)
- `data/` — os dados das 9 áreas + `manifesto.json`
- Documentação: `README.md`, `MANUTENCAO.md`, `MAPAS-E-APIS.md` (novo),
  `CALENDARIO.md`, `PROMPTS-IA.md`, `CONTRIBUTING.md`

> A pasta `assets/` (logos) **não mudou** e já está no GitHub — não precisa subir.
> Subir arquivos no GitHub **não apaga** os que já estão lá; só adiciona/substitui.

## Passo a passo

1. Acesse o repositório: **https://github.com/caiodesouzacastro/painel-clear**
2. Clique em **Add file → Upload files** (botão no canto superior direito da lista de arquivos).
3. **Arraste o `index.html`** e **todos os arquivos `.md`** (README, MANUTENCAO,
   MAPAS-E-APIS, CALENDARIO, PROMPTS-IA, CONTRIBUTING) para a área de upload.
4. Para os dados: entre na pasta **`data/`** do repositório, clique de novo em
   **Add file → Upload files** e **arraste todos os arquivos de dentro da pasta
   `data/` deste pacote** (os 9 `.json` das áreas + `manifesto.json`).
   - *Dica:* dá para subir tudo de uma vez na raiz se você arrastar mantendo a
     estrutura de pastas; mas o jeito mais seguro é separar: raiz primeiro, `data/` depois.
5. Em baixo, no campo de mensagem (*commit*), escreva algo como
   **"v4.3 — mapas por UF via API + gerador de relatório"** e clique em
   **Commit changes**.
6. Espere de 1 a 3 minutos (o GitHub Pages republica sozinho).
7. Abra **https://caiodesouzacastro.github.io/painel-clear/** numa **janela anônima**
   (Ctrl+Shift+N) para furar o cache e conferir.

## O que conferir depois de subir

- O cabeçalho mostra **v4.3 · 9 áreas · 30 temas · 47 estatísticas**.
- Há um botão **"↧ Gerar relatório"** no topo. Clique → escolha "Painel completo"
  → **Imprimir / Salvar PDF** e **Baixar Markdown** devem funcionar.
- Abra algumas estatísticas e veja a aba **"Por UF"** com o **mapa** (segurança,
  trabalho, saúde, educação, saneamento, finanças, assistência, meio ambiente).
- Habitação continua **sem** mapa (esperado — falta dado por UF em fonte aberta).

## Se algo sair errado

O GitHub guarda histórico. Em **Commits**, você consegue ver e reverter qualquer
mudança. O passo a passo completo de recuperação está no `MANUTENCAO.md`, seção 14.
