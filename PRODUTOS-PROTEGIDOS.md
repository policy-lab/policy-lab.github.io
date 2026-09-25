# Produtos protegidos por senha

Tudo neste site é público, exceto o conteúdo das pastas abaixo, que está **criptografado**:

```
/checklist-ma/   /tdms-municipais/   /mini-guia-ma/   /radar/   /ia/*
```

Cada `index.html` dessas pastas é uma tela de senha com o conteúdo cifrado (AES) dentro. Sem a senha, o arquivo não revela nada.

## Regras

1. **Nunca edite esses `index.html` direto.** Eles são gerados. Para mudar um produto, edite a versão em claro (fora deste repositório) e gere de novo.
2. **Nunca suba a versão em claro para este repositório.** Ele é público: qualquer arquivo sem criptografia fica visível no GitHub.
3. A senha **não** fica escrita em nenhum arquivo deste repositório.
4. Imagens, PDFs e JSONs dessas pastas (`assets/`) **não** são criptografados. Quem souber o endereço exato consegue abrir. Não coloque nelas nada sigiloso.

## Como regerar (com Node instalado)

Na pasta com as versões em claro e o arquivo `.staticrypt.json` (que guarda o *salt*; mantenha o mesmo para o "lembrar senha" valer entre produtos):

```bash
npx staticrypt@3 produto/index.html -p "SENHA" -d saida/produto --remember 30 -t senha-template.html --template-title "Nome do produto"
```

Para trocar a senha, regenere **todas** as páginas com a nova senha.

## Cabeçalho e rodapé

Todos os produtos usam `/assets/css/pl-chrome.css`, que reproduz o cabeçalho e o rodapé do Painel de estatísticas.
