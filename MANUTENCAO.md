# Manual de Manutenção — Painel CLEAR

Manual prático de atualização do painel **https://caiodesouzacastro.github.io/painel-clear/** para quem nunca usou GitHub.

Esse documento ensina como **atualizar dados**, **trocar textos**, **adicionar estatísticas**, **mover o painel para outra conta** e **resolver os erros mais comuns**.

> 💡 Você não precisa instalar nada no computador. Tudo é feito no navegador, dentro do site do GitHub.

---

## 📑 Índice

1. [Conceitos básicos (leia primeiro)](#1-conceitos-básicos-leia-primeiro)
2. [Como o painel é organizado](#2-como-o-painel-é-organizado)
3. [Editando arquivos no GitHub — o passo a passo padrão](#3-editando-arquivos-no-github--o-passo-a-passo-padrão)
4. [Atualizar o valor de uma estatística](#4-atualizar-o-valor-de-uma-estatística)
5. [Atualizar a série histórica](#5-atualizar-a-série-histórica)
6. [Atualizar recortes (por UF, sexo, raça etc)](#6-atualizar-recortes-por-uf-sexo-raça-etc)
7. [Adicionar uma estatística nova dentro de um tema existente](#7-adicionar-uma-estatística-nova-dentro-de-um-tema-existente)
8. [Adicionar um tema novo](#8-adicionar-um-tema-novo)
9. [Adicionar uma área nova](#9-adicionar-uma-área-nova)
10. [Trocar textos do cabeçalho ou rodapé](#10-trocar-textos-do-cabeçalho-ou-rodapé)
11. [Atualizar os links das publicações CLEAR](#11-atualizar-os-links-das-publicações-clear)
12. [Mover o painel para outra conta do GitHub](#12-mover-o-painel-para-outra-conta-do-github)
13. [Erros comuns e como resolver](#13-erros-comuns-e-como-resolver)
14. [Quando o painel quebra: como restaurar](#14-quando-o-painel-quebra-como-restaurar)
15. [Quando pedir ajuda técnica](#15-quando-pedir-ajuda-técnica)
16. [Mapas por UF e coleta via API](#16-mapas-por-uf-e-coleta-via-api)
17. [Finanças municipais: download consolidado do FINBRA (Siconfi)](#17-finanças-municipais-download-consolidado-do-finbra-siconfi)
18. [Atenção primária: SISAB e CNES](#18-atenção-primária-sisab-e-cnes)

---

## 1. Conceitos básicos (leia primeiro)

### O que é o GitHub?

GitHub é um **drive online de arquivos**, parecido com Google Drive, mas com duas diferenças importantes:

1. Guarda **histórico** de tudo que você muda — dá para voltar atrás se der errado.
2. Pode **publicar** uma pasta como site na internet, de graça.

O nosso painel é uma pasta hospedada no GitHub. Cada arquivo que está na pasta aparece no ar quando alguém acessa o endereço.

### Conta atual do painel

- **Usuário GitHub:** `caiodesouzacastro`
- **Repositório** (nome da pasta): `painel-clear`
- **Endereço da pasta:** https://github.com/caiodesouzacastro/painel-clear
- **Site publicado:** https://caiodesouzacastro.github.io/painel-clear/

### Vocabulário rápido

| Termo do GitHub | Tradução prática |
|---|---|
| Repositório (repo) | Pasta de arquivos |
| Commit | Salvar uma alteração |
| Branch | Versão paralela (vamos usar só uma: `main`) |
| Pull request | Pedido de fusão de versões (não vamos usar) |
| README | Arquivo de explicação do projeto |
| GitHub Pages | Serviço que publica a pasta como site |

### Tempo de propagação

Depois de qualquer mudança que você salve, o site demora **1 a 2 minutos** para atualizar.

> ⚠️ Se você atualizou e o site não mudou, **espere 2 minutos** e abra em **janela anônima** (`Ctrl+Shift+N` no Chrome / `Ctrl+Shift+P` no Firefox). Senão você vai ver a versão antiga que ficou guardada no navegador.

---

## 2. Como o painel é organizado

Quando você abre o repositório, vê esta estrutura:

```
painel-clear/
├── index.html              ← o site em si (cuidado ao mexer)
├── README.md               ← apresentação do projeto
├── CONTRIBUTING.md         ← regras de contribuição
├── MANUTENCAO.md           ← este manual
└── data/                   ← AQUI ficam os dados (mexe sem medo)
    ├── manifesto.json      ← lista de áreas + versão
    ├── seguranca.json      ← área Segurança Pública
    ├── educacao.json       ← área Educação
    ├── saude.json          ← área Saúde
    ├── assistencia.json    ← área Assistência Social
    ├── saneamento.json     ← área Saneamento e Território
    ├── trabalho.json       ← área Mercado de Trabalho
    ├── ambiente.json       ← área Meio Ambiente
    ├── habitacao.json      ← área Habitação
    └── financas.json       ← área Finanças Municipais
```

### Hierarquia conceitual

```
Área (1 arquivo .json)
└── Tema (objeto dentro do arquivo)
    └── Indicador (item dentro de um tema)
```

Exemplo:

```
saude.json (área: Saúde)
├── Tema: Mortalidade materno-infantil
│   ├── Indicador: Mortalidade Infantil
│   └── Indicador: Mortalidade Materna
├── Tema: Imunização
│   ├── Indicador: Cobertura Vacinal
│   └── Indicador: Cobertura BCG
└── Tema: Atenção Primária
    ├── Indicador: Cobertura ESF
    └── Indicador: Pré-natal adequado
```

### O que são arquivos `.json`?

São arquivos de texto comum, com uma estrutura organizada por chaves e colchetes. Você vai encontrar coisas assim:

```json
{
  "valor": 21.2,
  "unidade": "por 100 mil hab",
  "tendencia": "queda"
}
```

**As 5 regras de ouro do JSON** (memorize bem):

1. **Sempre** abre com `{` e fecha com `}`. Listas usam `[` e `]`.
2. **Cada item** dentro de `{}` ou `[]` é separado por **vírgula**.
3. O **último** item NÃO leva vírgula no final.
4. **Texto** vai entre aspas: `"queda"`. **Números** não levam aspas: `21.2`.
5. **Decimais** usam ponto: `21.2` (não `21,2`).

> ❌ Quebra o JSON: `{"valor": 21,2}` (vírgula no decimal)
> ❌ Quebra o JSON: `{"valor": 21.2,}` (vírgula sobrando no fim)
> ✅ Correto: `{"valor": 21.2}`

Se você quebrar o JSON, o painel não carrega. Existe um jeito de testar antes de subir — está na seção 13.

---

## 3. Editando arquivos no GitHub — o passo a passo padrão

Este é o **procedimento padrão** que você vai usar para qualquer alteração. Decora bem porque vai usar sempre.

### Passo a passo

1. Vai em **https://github.com/caiodesouzacastro/painel-clear**
2. Clica na pasta **`data/`**
3. Clica no arquivo que você quer editar (ex: `saude.json`)
4. No canto superior direito do arquivo, clica no ícone do **lápis** ✏️ ("Edit this file")
5. Faz a alteração que precisa fazer
6. Rola até o final da página
7. Em **"Commit changes"**, no campo de texto, escreve uma mensagem dizendo o que mudou. Ex: `Atualiza valor da Mortalidade Infantil para dados de 2024`
8. Clica no botão verde **"Commit changes"**

**Pronto.** Sua alteração foi salva. Espera 2 minutos, abre em janela anônima e confere.

### Onde ver o histórico

O GitHub guarda tudo que muda automaticamente. Se quiser ver a história ou reverter algo:

1. Na página inicial do repositório, clica em **"Commits"** (em cima, perto da contagem de commits)
2. Vê a lista de tudo que foi mudado, com data e mensagem
3. Clica em qualquer commit pra ver exatamente o que mudou
4. Para reverter, clica nos 3 pontinhos `...` do commit e escolhe "Revert"

---

## 4. Atualizar o valor de uma estatística

Suponha que saiu o IDEB 2025 e você quer atualizar o valor.

### Passo a passo

1. Abre `data/educacao.json` no GitHub e clica no lápis ✏️
2. Procura (Ctrl+F) por `"id": "ideb"`
3. Você vai ver um bloco assim:

```json
{
  "id": "ideb",
  "titulo": "Qualidade da Educação Básica",
  "indicador": "IDEB — Índice de Desenvolvimento da Educação Básica (rede pública, anos iniciais EF)",
  "valor": 5.7,
  "unidade": "anos iniciais do EF",
  "destaque": "Estagnação pós-pandemia",
  "totalAbsoluto": "Anos finais EF: 5,1 — Ensino Médio: 4,5",
  "tendencia": "estavel",
```

4. Os campos mais comuns para atualizar:

| Campo | O que é | Exemplo de mudança |
|---|---|---|
| `valor` | Número grande que aparece no card | `5.7` → `5.9` |
| `unidade` | Texto pequeno embaixo do valor | `"anos iniciais do EF"` → `"anos iniciais do EF (rede pública)"` |
| `destaque` | Frase em itálico azul | `"Estagnação pós-pandemia"` → `"Recuperação consistente"` |
| `totalAbsoluto` | Informação complementar | `"Anos finais EF: 5,1 — Ensino Médio: 4,5"` |
| `tendencia` | Setinha colorida no card | `"queda"`, `"alta"` ou `"estavel"` (sem acento!) |

5. Faz a alteração, rola até o final, escreve a mensagem de commit (`Atualiza IDEB para dados 2025`) e clica em **Commit changes**.

### Importante sobre o campo `tendencia`

Só aceita estes 3 valores **exatamente assim**, em letras minúsculas, sem acento:
- `"queda"` (setinha verde ↓)
- `"alta"` (setinha amarela ↑)
- `"estavel"` (setinha cinza →)

`"Queda"` (com maiúscula), `"estável"` (com acento) ou qualquer variação NÃO funciona.

### Atualizar a data da última atualização

Toda vez que mudar valores oficiais, vale atualizar também a data da fonte. Procure por `"ultimaAtualizacao"` no mesma estatística:

```json
  "fonte": {
    "nome": "INEP — Índice de Desenvolvimento da Educação Básica",
    "produtor": "Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira",
    "periodicidade": "Bienal",
    "ultimaAtualizacao": "Agosto/2024 (dados de 2023)",   ← MUDAR ESSA LINHA
    "url": "..."
  },
```

Troca para: `"ultimaAtualizacao": "Agosto/2026 (dados de 2025)"`.

---

## 5. Atualizar a série histórica

Quando sai um dado novo do ano, adicione um ponto na série.

### Passo a passo

Continuando o exemplo do IDEB. Você vai encontrar:

```json
      "serie": [
        {"ano": 2007, "valor": 4.2},
        {"ano": 2009, "valor": 4.6},
        {"ano": 2011, "valor": 5.0},
        {"ano": 2013, "valor": 5.2},
        {"ano": 2015, "valor": 5.5},
        {"ano": 2017, "valor": 5.8},
        {"ano": 2019, "valor": 5.9},
        {"ano": 2021, "valor": 5.8},
        {"ano": 2023, "valor": 5.7}
      ],
```

Pra adicionar 2025:

1. Coloca uma **vírgula** no fim da linha de 2023:

```json
        {"ano": 2023, "valor": 5.7},
```

2. Adiciona a nova linha **sem vírgula no final** (porque agora é o último item):

```json
        {"ano": 2023, "valor": 5.7},
        {"ano": 2025, "valor": 5.9}
      ],
```

> ⚠️ **Lembra da regra**: o último item NUNCA leva vírgula no final.

3. Commit e pronto.

### Quando trocar números antigos

Se o IBGE/INEP/etc revisar dados antigos (acontece), basta alterar o valor da linha correspondente. Ex: `{"ano": 2021, "valor": 5.8}` → `{"ano": 2021, "valor": 5.85}`.

---

## 6. Atualizar recortes (por UF, sexo, raça etc)

Recortes são aqueles cortes por UF, sexo, raça etc. que aparecem como sub-abas no modal de cada estatística.

### Estrutura

Cada estatística tem (opcionalmente) uma seção `recortes`:

```json
      "recortes": [
        {
          "id": "etapa",
          "dimensao": "Por etapa de ensino",
          "titulo": "IDEB 2023 por etapa (rede pública)",
          "valores": [
            {"rotulo": "Anos iniciais EF", "valor": 5.7, "max": 10},
            {"rotulo": "Anos finais EF", "valor": 5.1, "max": 10},
            {"rotulo": "Ensino Médio", "valor": 4.5, "max": 10}
          ]
        },
        {
          "id": "uf",
          "dimensao": "Por UF",
          "titulo": "IDEB 2023 nos anos iniciais EF — selecionadas",
          "valores": [
            ...
          ]
        }
      ],
```

### O que faz cada campo

| Campo | O que é |
|---|---|
| `id` | Nome interno do recorte (sem espaço, só letras minúsculas e hífen) |
| `dimensao` | Nome que aparece na sub-aba (curto, ex: `"Por UF"`) |
| `titulo` | Frase descritiva que aparece em cima das barras |
| `valores` | Lista das categorias e seus números |
| `rotulo` | Nome da categoria (ex: `"Roraima"`) |
| `valor` | Número que vai no fim da barra |
| `max` | Limite da barra (a barra mais comprida vai até 100% desse `max`) |

### Como escolher o `max`

O `max` define a escala da barra. Regra prática:
- Pega o maior valor da lista
- Arredonda pra cima até um número redondo
- Exemplo: maior valor é 57,4 → `max: 60`. Maior valor é 1.842 → `max: 2000`.

Todos os itens do mesmo recorte devem ter o **mesmo `max`** (senão as barras ficam descalibradas).

### Adicionar uma categoria nova

Ex: adicionar Goiás na lista de UFs do IDEB.

1. Vai no recorte que quer
2. Põe vírgula no último item atual:

```json
            {"rotulo": "Amapá", "valor": 5.0, "max": 7},
```

3. Adiciona a nova linha (sem vírgula no final, ela é a última agora):

```json
            {"rotulo": "Amapá", "valor": 5.0, "max": 7},
            {"rotulo": "Goiás", "valor": 5.5, "max": 7}
          ]
```

---

## 7. Adicionar uma estatística nova dentro de um tema existente

### Estrutura mínima de uma estatística

```json
{
  "id": "novo-indicador",
  "titulo": "Título Curto do Indicador",
  "indicador": "Descrição completa do que mede esse indicador",
  "valor": 42.5,
  "unidade": "% da população (2025)",
  "destaque": "Frase em itálico que aparece no card",
  "totalAbsoluto": "Informação adicional",
  "tendencia": "queda",
  "serie": [
    {"ano": 2020, "valor": 48.0},
    {"ano": 2022, "valor": 45.0},
    {"ano": 2024, "valor": 42.5}
  ],
  "rotuloSerieY": "% da população",
  "fonte": {
    "nome": "Nome completo da fonte original",
    "produtor": "Instituição responsável",
    "periodicidade": "Anual",
    "ultimaAtualizacao": "Junho/2025 (dados de 2024)",
    "url": "https://endereco-da-fonte.com.br"
  },
  "notaMetodologica": "Texto explicando como o indicador é calculado e suas limitações."
}
```

Todos esses campos são **obrigatórios**, exceto:
- `totalAbsoluto` (pode omitir)
- `tendencia` (pode omitir — não aparece a setinha)
- `recortes` (pode omitir — não aparece a seção)

### Passo a passo

Suponha que quer adicionar uma 3ª estatística no tema "Mortalidade materno-infantil" da saúde.

1. Abre `data/saude.json` e clica no lápis ✏️
2. Procura `"id": "mortalidade-materno-infantil"`
3. Você vai ver uma estrutura assim:

```json
{
  "id": "mortalidade-materno-infantil",
  "tema": "Mortalidade materno-infantil",
  "descricao": "Óbitos infantis e maternos no Brasil",
  "indicadores": [
    {
      "id": "mortalidade-infantil",
      ...
    },
    {
      "id": "mortalidade-materna",
      ...
    }
  ]
},
```

4. Encontra o **fim da última estatística** do array (a chave `}` que fecha a última estatística, antes do `]`)
5. Adiciona uma **vírgula** depois dessa chave `}`
6. Adiciona o nova estatística inteiro

Vai ficar assim:

```json
    {
      "id": "mortalidade-materna",
      ...
    },
    {
      "id": "mortalidade-neonatal",
      "titulo": "Mortalidade Neonatal",
      "indicador": "Óbitos de bebês de 0 a 27 dias por mil nascidos vivos",
      "valor": 8.7,
      ...
    }
  ]
},
```

7. Commit.

> 💡 **Dica:** copie uma estatística parecido que já existe no painel, cole no mesmo arquivo e ajuste os valores. É mais rápido do que digitar tudo do zero, e diminui chance de erro de digitação no JSON.

### Atualizar a contagem no cabeçalho

Quando você adiciona estatísticas, o número que aparece no topo do painel ("43 estatísticas") fica desatualizado. Para acertar:

1. Abre `index.html` na raiz do repositório, clica no lápis
2. Procura por `meta-indicadores`
3. Vai encontrar:

```html
      <div class="header-meta-item">Indicadores<strong id="meta-indicadores">43</strong></div>
```

4. Aumenta o número (43 → 44 se adicionou 1) e commit.

> Nota: o painel **recalcula automaticamente** os números quando carrega os dados. Mas se ficarem errados nos arquivos, vão piscar feio quando o site abre.

---

## 8. Adicionar um tema novo

Tema é um agrupamento de estatísticas dentro de uma área.

### Estrutura de um tema

```json
{
  "id": "novo-tema",
  "tema": "Nome do Tema",
  "descricao": "Descrição curta que aparece no modal",
  "indicadores": [
    {
      "id": "primeiro-indicador",
      ...indicador completo...
    }
  ]
}
```

### Passo a passo

Suponha que quer adicionar um tema novo "Educação Superior" dentro da área Educação.

1. Abre `data/educacao.json` e clica no lápis ✏️
2. Encontra o array `temas`:

```json
  "temas": [
    {
      "id": "aprendizagem",
      ...
    },
    {
      "id": "fluxo-conclusao",
      ...
    },
    {
      "id": "alfabetizacao",
      ...
    }
  ]
```

3. Coloca vírgula depois do último `}` (o que fecha o tema "alfabetizacao")
4. Adiciona o tema novo:

```json
    {
      "id": "alfabetizacao",
      ...
    },
    {
      "id": "ensino-superior",
      "tema": "Ensino Superior",
      "descricao": "Acesso e qualidade na graduação",
      "indicadores": [
        {
          "id": "matriculas-superior",
          ...indicador completo, com todos os campos da seção 7...
        }
      ]
    }
  ]
```

5. Commit.

Lembre-se de atualizar também a contagem no `index.html` (procure por `meta-temas`).

---

## 9. Adicionar uma área nova

Suponha que quer adicionar uma nova área "Cultura". É o caso **mais trabalhoso**, exige 2 arquivos: criar `cultura.json` e atualizar `manifesto.json`.

### Passo 1 — Criar o arquivo da área

1. Vai em **https://github.com/caiodesouzacastro/painel-clear**
2. Entra na pasta `data/`
3. Clica em **"Add file"** → **"Create new file"** (no canto superior direito)
4. Em **"Name your file"**, escreve: `cultura.json`
5. No corpo do arquivo, cola esta estrutura base e ajuste os textos:

```json
{
  "id": "cultura",
  "area": "Cultura",
  "ordem": 10,
  "capituloGuia": "Capítulo XX — Cultura",
  "fontesRelacionadas": [
    "Sistema Nacional de Informações e Indicadores Culturais (SNIIC)",
    "IBGE — Sistema de Informações e Indicadores Culturais",
    "Lei Aldir Blanc"
  ],
  "temas": [
    {
      "id": "financiamento",
      "tema": "Financiamento à cultura",
      "descricao": "Recursos públicos e privados destinados à cultura",
      "indicadores": [
        {
          "id": "gasto-publico-cultura",
          "titulo": "Gasto público com cultura",
          "indicador": "Despesa total das três esferas com cultura",
          "valor": 0.1,
          "unidade": "% do PIB",
          "destaque": "Bem abaixo da média latino-americana",
          "tendencia": "estavel",
          "serie": [
            {"ano": 2020, "valor": 0.09},
            {"ano": 2024, "valor": 0.10}
          ],
          "rotuloSerieY": "% do PIB",
          "fonte": {
            "nome": "...",
            "produtor": "...",
            "periodicidade": "...",
            "ultimaAtualizacao": "...",
            "url": "..."
          },
          "notaMetodologica": "..."
        }
      ]
    }
  ]
}
```

6. Rola até o final, escreve a mensagem de commit (`Adiciona área Cultura`) e clica em **Commit new file**.

### Passo 2 — Atualizar o manifesto

O `manifesto.json` é a lista de áreas que o painel carrega. Se você criar um arquivo de área mas não cadastrar ele aqui, **não aparece no painel**.

1. Abre `data/manifesto.json` e clica no lápis ✏️
2. Você vai ver:

```json
{
  "meta": { ... },
  "areas": [
    "seguranca.json",
    "educacao.json",
    "saude.json",
    "assistencia.json",
    "saneamento.json",
    "trabalho.json",
    "ambiente.json",
    "habitacao.json",
    "financas.json"
  ],
  "temas": [
    "seguranca.json",
    ...
    "financas.json"
  ],
  ...
}
```

3. Adiciona `cultura.json` ao final de **AMBAS** as listas (`areas` e `temas`):

```json
  "areas": [
    "seguranca.json",
    ...
    "financas.json",
    "cultura.json"
  ],
  "temas": [
    "seguranca.json",
    ...
    "financas.json",
    "cultura.json"
  ],
```

> Atenção: o `financas.json` agora **leva vírgula** porque não é mais o último.

4. Commit.

### Passo 3 — Atualizar a contagem no cabeçalho

1. Abre `index.html` na raiz do repositório, clica no lápis
2. Procura (Ctrl+F): `meta-areas`
3. Vai encontrar:

```html
      <div class="header-meta-item">Áreas<strong id="meta-areas">9</strong></div>
      <div class="header-meta-item">Temas<strong id="meta-temas">28</strong></div>
      <div class="header-meta-item">Indicadores<strong id="meta-indicadores">43</strong></div>
```

4. Aumenta os números conforme o que adicionou. Se adicionou 1 área, 1 tema e 1 estatística, fica:

```html
      <div class="header-meta-item">Áreas<strong id="meta-areas">10</strong></div>
      <div class="header-meta-item">Temas<strong id="meta-temas">29</strong></div>
      <div class="header-meta-item">Indicadores<strong id="meta-indicadores">44</strong></div>
```

5. Commit.

---

## 10. Trocar textos do cabeçalho ou rodapé

Os textos institucionais ficam no `index.html`.

### Procurando o texto

1. Abre `index.html` na raiz do repositório, clica no lápis ✏️
2. Use **Ctrl+F** para procurar o trecho específico
3. Lugares comuns:

| O que quer mudar | Procure por |
|---|---|
| Título principal "Estatísticas para a avaliação..." | `<h1 class="title">` |
| Subtítulo abaixo do título | `<p class="subtitle">` |
| Texto da série ("SÉRIE · AVALIAÇÃO NA PRÁTICA") | `series-tag` |
| Texto das publicações no fundo | `pub-eyebrow` |
| Rodapé "FGV CLEAR — Centro de Aprendizado..." | `footer-inner` |

4. Faz a alteração, commit.

> ⚠️ Cuidado para **não apagar as tags HTML** (`<h1>`, `<p>`, etc). Mude apenas o texto entre as tags.

**Exemplo:** para mudar o título principal:

❌ Errado (apagou as tags):
```
Indicadores para a Avaliação das Políticas Públicas
```

✅ Certo (manteve as tags):
```html
<h1 class="title">Indicadores para a Avaliação<br>de <em>políticas públicas</em> no Brasil</h1>
```

---

## 11. Atualizar os links das publicações CLEAR

Quando o Guia de Fontes de Dados ganhar URL definitiva, ou quando outras publicações forem atualizadas:

1. Abre `data/manifesto.json` e clica no lápis ✏️
2. Encontra a seção `"links"`:

```json
  "links": {
    "clear": "https://fgvclear.org",
    "guia": "https://fgvclear.org/publicacoes/guia-fontes-de-dados",
    "guiaPdf": "https://fgvclear.org/wp-content/uploads/guia-fontes-de-dados.pdf",
    "serie": "https://fgvclear.org/publicacoes/avaliacao-na-pratica",
    "publicacoes": "https://fgvclear.org/publicacoes",
    "cursos": "https://fgvclear.org/cursos"
  }
```

3. Troca os URLs entre aspas pelos definitivos.
4. Commit.

---

## 12. Mover o painel para outra conta do GitHub

Cenário: você quer transferir o painel para a conta institucional do CLEAR (ex: `fgvclear`).

Existem **3 caminhos** possíveis. Escolha conforme o seu caso:

### Caminho A — Transferência completa (recomendado)

Mantém o histórico completo de commits. A conta atual perde acesso ao repositório, e a nova conta ganha.

1. Vai em **https://github.com/caiodesouzacastro/painel-clear/settings**
2. Rola até o final da página, na seção vermelha **"Danger Zone"**
3. Clica em **"Transfer ownership"** (Transferir propriedade)
4. Em **"New owner"**, digita o nome da nova conta (ex: `fgvclear`)
5. Em **"Type the repository name to confirm"**, digita: `painel-clear`
6. Confirma

> A pessoa dona da conta nova recebe um e-mail e precisa **aceitar a transferência**.

**Depois de transferir, você precisa:**
- O site antigo (`caiodesouzacastro.github.io/painel-clear`) deixa de existir
- O novo endereço será `fgvclear.github.io/painel-clear`
- Ativar o GitHub Pages na nova conta (passos abaixo no Caminho B, passo 4)

### Caminho B — Cópia (fork)

Cria uma cópia na nova conta. A original continua existindo também.

1. Logado na nova conta (ex: `fgvclear`), vai em **https://github.com/caiodesouzacastro/painel-clear**
2. Canto superior direito: clica em **"Fork"**
3. Confirma com **"Create fork"**
4. Pra ativar o site novo:
   - Vai em **Settings** do repositório novo
   - Menu esquerdo: **Pages**
   - Em **"Source"**, escolhe **"Deploy from a branch"**
   - Em **"Branch"**, escolhe `main` e pasta `/ (root)`
   - Clica em **Save**
   - Espera 2 minutos. O novo endereço será `fgvclear.github.io/painel-clear`

### Caminho C — Repositório novo, do zero

Use só se quiser **mudar o nome** do repositório (ex: `painel-clear` → `indicadores-publicos`).

1. Logado na nova conta, clica em **"+"** (canto superior direito) → **"New repository"**
2. **Owner:** a nova conta
3. **Repository name:** o nome que quiser
4. **Public** (precisa ser público pro GitHub Pages funcionar de graça)
5. Marca **"Add a README file"**
6. Clica em **Create repository**
7. Agora você precisa copiar todos os arquivos:
   - Volta no repositório antigo (`caiodesouzacastro/painel-clear`)
   - Clica em **"Code"** (botão verde) → **"Download ZIP"**
   - Descompacta no seu computador
   - Volta no repositório novo, clica em **"Add file"** → **"Upload files"**
   - Arrasta todos os arquivos (mantendo a estrutura de pastas)
   - Commit
8. Ative o GitHub Pages como descrito no Caminho B, passo 4

---

## 13. Erros comuns e como resolver

### Erro: "Erro ao carregar dados" no painel

**Causa mais comum:** algum JSON ficou inválido (vírgula errada, aspas faltando, etc.)

**Como resolver:**
1. Abra um validador online de JSON, como **https://jsonlint.com**
2. Vai em `data/` no GitHub
3. Abre o arquivo que você editou mais recentemente
4. Clica em **"Raw"** (botão no canto superior direito)
5. Copia tudo (Ctrl+A, Ctrl+C)
6. Cola no JSONLint e clica em **"Validate JSON"**
7. Se aparecer erro vermelho, ele mostra qual linha está errada
8. Volta no GitHub, corrige a linha indicada, commit

### Erro: O site não atualiza após eu salvar

**Causa mais comum:** cache do navegador

**Como resolver:**
1. Espera 2 minutos depois do commit
2. Abre o site em **janela anônima** (`Ctrl+Shift+N` no Chrome / `Ctrl+Shift+P` no Firefox)
3. Ou força recarregar: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

### Erro: A versão no cabeçalho aparece errada

O número da versão fica em **dois lugares** que precisam ser sincronizados:
- `data/manifesto.json` → campo `"versao"`
- `index.html` → procurar por `meta-versao`

Atualize os dois quando subir uma versão nova.

### Erro: Estatística nova não aparece no painel

Possíveis causas:
1. **JSON quebrado** — valide no JSONLint (ver acima)
2. **Você esqueceu de salvar** — confira no histórico de commits se a mudança aparece lá
3. **Estatística criada em arquivo errado** — confira se o arquivo da área certa foi modificado

### Erro: A área nova não aparece nos filtros

Você adicionou o arquivo `cultura.json` mas não atualizou o `manifesto.json`. Veja a seção 9, passo 2.

### Erro: A barra do recorte aparece muito pequena ou muito grande

O `max` está descalibrado. Pegue o maior valor da lista e arredonde pra cima. Todos os itens do mesmo recorte devem ter o **mesmo `max`**.

### Erro: Setinha de tendência não aparece

Você escreveu `"tendencia"` com valor errado. Só aceita:
- `"queda"` (verde)
- `"alta"` (amarelo)
- `"estavel"` (cinza — atenção: **sem acento**)

### Erro: Gráfico aparece sem linhas

A `serie` está vazia, ou tem só 1 ponto. Precisa de ao menos 2 pontos para desenhar uma linha.

---

## 14. Quando o painel quebra: como restaurar

Se você fez uma alteração e o painel saiu do ar (mostra erro ou tela em branco), **calma** — o GitHub guardou tudo. Você pode voltar atrás.

### Voltar para a versão anterior (1 arquivo só)

1. Vai em **https://github.com/caiodesouzacastro/painel-clear/commits/main**
2. Encontra o commit anterior à sua alteração (geralmente o penúltimo da lista)
3. Clica no nome do commit
4. Aparece a lista dos arquivos que mudaram nesse commit
5. Clica no arquivo que você quer restaurar
6. Clica em **"View file"** (canto superior direito)
7. Clica nos 3 pontinhos `...` → **"View raw"**
8. Copia tudo
9. Volta na versão atual do arquivo no GitHub
10. Cola o conteúdo antigo
11. Commit com mensagem: `Reverte alteração que quebrou o painel`

### Voltar o repositório inteiro para o estado anterior

Atalho rápido (cuidado: desfaz **tudo** que aconteceu depois):

1. Vai em **https://github.com/caiodesouzacastro/painel-clear/commits/main**
2. Encontra o commit que estava funcionando bem
3. Clica nos 3 pontinhos `...` desse commit → **"Revert"**

O GitHub vai criar um novo commit que desfaz tudo que veio depois.

### Restaurar de um backup local

Sempre que fizer mudanças grandes, faça um backup antes:

1. Vai na página principal do repositório
2. Clica em **"Code"** (botão verde) → **"Download ZIP"**
3. Guarda o ZIP no seu computador com a data no nome (ex: `painel-clear_backup_2026-05-20.zip`)

Se precisar restaurar:
1. Descompacta o ZIP
2. No GitHub, deleta os arquivos atuais um por um (ou use o método da seção 12, Caminho C)
3. Sobe os arquivos do backup via **"Add file"** → **"Upload files"**

---

## 15. Quando pedir ajuda técnica

Esse manual cobre 95% das situações de manutenção do painel. Mas existem casos em que você vai precisar de alguém com conhecimento técnico mais profundo:

### Pode resolver sozinho (com este manual)
- Atualizar valores de estatísticas existentes
- Adicionar pontos na série histórica
- Trocar textos
- Adicionar/editar recortes
- Adicionar estatísticas, temas e áreas
- Mover o painel para outra conta
- Restaurar a partir de erros simples

### Precisa de ajuda técnica
- O painel quebrou e você não consegue identificar onde
- Mudar a aparência (cores, fontes, layout)
- Adicionar funcionalidades novas (filtros adicionais, comparações entre estatísticas, mapas)
- Integrar com APIs externas (atualização automática de dados)
- Mudar a estrutura dos JSONs ou o JavaScript do `index.html`
- Bugs em navegadores específicos

### Onde pedir ajuda

- **Equipe técnica do FGV CLEAR** (interna)
- **Issues do GitHub:** crie uma issue em https://github.com/caiodesouzacastro/painel-clear/issues descrevendo o problema e o que você tentou
- **Comunidade Stack Overflow** (em inglês) — boa para erros de JSON e HTML

---

## Anexo — Modelo completo de estatística (copiar e adaptar)

Use este modelo quando for adicionar uma estatística nova. Substitua os valores entre `< >`:

```json
{
  "id": "<id-do-indicador-sem-espacos>",
  "titulo": "<Título Curto>",
  "indicador": "<Descrição do que mede o indicador>",
  "valor": <numero>,
  "unidade": "<unidade do valor (ex: %, R$ bilhões, por 100 mil hab)>",
  "destaque": "<Frase em itálico que aparece no card>",
  "totalAbsoluto": "<Informação adicional opcional>",
  "tendencia": "<queda | alta | estavel>",
  "serie": [
    {"ano": <ano1>, "valor": <valor1>},
    {"ano": <ano2>, "valor": <valor2>}
  ],
  "rotuloSerieY": "<Rótulo do eixo Y do gráfico>",
  "recortes": [
    {
      "id": "<id-do-recorte>",
      "dimensao": "<Por X>",
      "titulo": "<Título descritivo do recorte>",
      "valores": [
        {"rotulo": "<categoria1>", "valor": <numero>, "max": <numero>},
        {"rotulo": "<categoria2>", "valor": <numero>, "max": <numero>}
      ]
    }
  ],
  "fonte": {
    "nome": "<Nome completo da fonte>",
    "produtor": "<Instituição responsável>",
    "periodicidade": "<Anual | Mensal | etc>",
    "ultimaAtualizacao": "<Mês/Ano (referente a dados de Y)>",
    "url": "<https://...>"
  },
  "notaMetodologica": "<Texto explicando metodologia e limitações>"
}
```

---

*Manual atualizado em maio de 2026 — versão 1.0*

---

## 16. Mapas por UF e coleta via API

Desde outubro de 2026, **as 9 áreas têm mapa por UF**. Como funciona, de onde vem
cada número e como reproduzir a coleta está documentado em **[MAPAS-E-APIS.md](MAPAS-E-APIS.md)**.

Resumo prático:

- Uma estatística vira mapa **automaticamente** quando tem um recorte `"id": "uf"` com
  **20+ estados**. Não há nada a "ligar" — basta ter o recorte.
- Vários mapas são coletados **direto de API** (sem digitar à mão): desocupação e
  renda (IBGE/SIDRA), coleta de lixo (Censo 2022, SIDRA tabela 6892), mortalidade
  infantil (arquivo da Projeção IBGE), receita estadual per capita (SICONFI/Tesouro),
  casa própria e aluguel (PNAD Contínua, SIDRA 6821) e favelas (Censo 2022, SIDRA
  9890 e 9929).
  Os endpoints exatos estão em `MAPAS-E-APIS.md`.
- IDEB, PRODES e déficit habitacional vêm de arquivos para download (planilhas do
  INEP; notas técnicas e arquivos de taxas do INPE/TerraBrasilis; planilha da FJP).
  O Atlas da Violência (homicídios e homicídios de mulheres) depende de conferência
  manual em PDF; use os prompts de `PROMPTS-IA.md`.
- Desde outubro de 2026 há **20 mapas**. Os novos: ISS per capita, dependência de
  transferências e despesa com pessoal (FINBRA, seção 17), equipes de Saúde da
  Família (CNES, pelo TabNet) e os quatro de habitação (abaixo). Os mapas de
  dependência e de despesa com pessoal ficam com o DF sem cor, porque o DF não tem
  municípios.

### Mapas de habitação

Desde outubro de 2026 a habitação tem quatro mapas:

- **`domicilios-proprios`** e **`aluguel`**: PNAD Contínua anual, tabela 6821 do SIDRA
  no nível UF (variável 9784). Casa própria = soma de "já pago" e "ainda pagando".
  Atualize o recorte por UF junto com o valor nacional, a cada ano novo da PNAD.
- **`deficit-habitacional`**: déficit relativo da Fundação João Pinheiro (% dos
  domicílios), da planilha da edição mais recente. Não use o absoluto: ele deixa São
  Paulo sozinho no topo do mapa.
- **`favelas`** (criada em outubro de 2026, tema "Posse e ocupação"): domicílios em
  favelas e comunidades urbanas ÷ total de domicílios, Censo 2022 (tabelas 9890 e
  9929). Só muda com o próximo Censo.

Consultas e valores de conferência em `MAPAS-E-APIS.md`. Não use a tabela 10345 como
denominador: ela cobre só setores selecionados de municípios com favelas.

---

## 17. Finanças municipais: download consolidado do FINBRA (Siconfi)

Três estatísticas da área de finanças somam dados de **todos os municípios**:
`iss`, `dependencia` e `despesa-pessoal`. Desde outubro de 2026 elas são calculadas
com o **download consolidado do FINBRA**, um arquivo por exercício com os 5.570
municípios. Não use a API do Siconfi para isso: ela exige uma consulta por município,
tem limite documentado de **1 requisição por segundo** e bloqueia o acesso (HTTP 429)
quando o limite é passado. Coletar oito anos pela API levaria mais de um dia.

### O que baixar

O download tem um CAPTCHA no botão "Consultar", então precisa ser feito por uma
pessoa. São dois tipos de arquivo:

1. **Contas Anuais** (para `iss` e `dependencia`), um por exercício:
   https://siconfi.tesouro.gov.br/siconfi/pages/public/consulta_finbra/finbra_list.jsf
   - Exercício: o ano; Escopo: **Municípios**;
     Tabela: **Receitas Orçamentárias (Anexo I-C)**.
2. **RGF, despesa com pessoal** (para `despesa-pessoal`), dois por exercício:
   https://siconfi.tesouro.gov.br/siconfi/pages/public/consulta_finbra_rgf/finbra_rgf_list.jsf
   - Exercício: o ano; Escopo: **Municípios**; Poder: **Executivo**;
     Anexo: **Anexo 01**; Tabela: **DTP e Apuração do Cumprimento do Limite Legal**.
   - Baixe **Quadrimestral, 3º quadrimestre** e também **Semestral, 2º semestre**.
     Os municípios com menos de 50 mil habitantes podem publicar o RGF por semestre;
     sem o segundo arquivo faltam cerca de 2.300 municípios.
   - A tabela "Despesas com pessoal" do mesmo anexo **não serve**: ela não traz a RCL.

### Como conferir os arquivos

- Os nomes dos zips não dizem o ano nem o período, e o navegador numera os repetidos
  ("(1)", "(2)"...). **Identifique cada arquivo pelo cabeçalho do CSV**: as primeiras
  linhas trazem "Exercício", "Período" (no RGF), "Escopo" e "Tabela". Se o mesmo
  exercício e período vier duas vezes, use o mais recente.
- Os CSVs vêm em Latin-1, separados por ponto e vírgula, com vírgula decimal.
- Confira a cobertura: cada ano deve ter perto de 5.570 municípios (os que faltam são
  os que não entregaram). No RGF, some os municípios do 3º quadrimestre e do
  2º semestre; ninguém aparece nos dois.
- O Distrito Federal não está no escopo Municípios. Para o ISS ele entra à parte, pela
  DCA dele na API (`id_ente=53`), uma consulta por ano.

### Como cada estatística é calculada

- **`iss`**: soma do ISSQN dos municípios mais o DF, na receita bruta realizada
  (coluna "Receitas Brutas Realizadas"), em R$ correntes. A conta é
  `RO1.1.1.8.02.3.0` até 2021 e `RO1.1.1.4.51.1.0` de 2022 em diante.
- **`dependencia`**: soma das transferências correntes (`RO1.7.0.0.00.0.0`) dividida
  pela soma das receitas correntes (`RO1.0.0.0.00.0.0`) do conjunto dos municípios,
  na receita bruta. É a conta do Boletim de Finanças dos Entes Subnacionais da STN
  (65,8% em 2024).
- **`despesa-pessoal`**: média simples, entre os municípios, do percentual declarado da
  despesa total com pessoal do Executivo sobre a RCL ajustada (`DespesaComPessoalTotal`,
  coluna "% sobre a RCL Ajustada"). Ficam fora os percentuais acima de 100% ou negativos
  (erro de declaração), na média, nos recortes, no mapa e nas contagens por faixa da LRF.
  Registre na nota quantos saíram em cada ano.
- Mapas por UF: ISS per capita (ISS dos municípios da UF ÷ população da UF; o DF entra
  com a DCA dele), dependência (mesma conta, por UF) e despesa com pessoal (média dos
  municípios de cada UF). Receitas detalhadas em `MAPAS-E-APIS.md`.
- Os recortes por porte usam a estimativa de população do IBGE do ano. Os scripts
  usados na revisão de outubro de 2026 e o passo a passo estão descritos em
  `REVISAO-OUTUBRO-2026.md`.

---

## 18. Atenção primária: SISAB e CNES

O tema "Atenção primária" (área saúde) tem duas estatísticas que se completam:

- **`esf`** (cobertura da Estratégia Saúde da Família): série oficial do Ministério da
  Saúde de 2015 a 2020. O Ministério encerrou essa série em dezembro de 2020; não há
  ano novo para acrescentar.
- **`equipes-esf`**: equipes de Saúde da Família por 100 mil habitantes, desde 2010
  (dezembro). Atualização anual: no TabNet do CNES, dezembro do ano novo, somando o
  código 70 e os códigos antigos de eSF (lista em `MAPAS-E-APIS.md`), dividido pela
  estimativa de população do IBGE do ano (SIDRA 6579).
- Em `equipes-esf`, a população é a das projeções do IBGE (revisão 2024), uma série única
  compatível com o Censo 2022; ela coincide com as estimativas oficiais de 2024 e 2025.
  Não misture estimativas antigas (base Censo 2010) com o Censo 2022: isso cria um salto
  falso em 2022.
- **`cobertura-cadastro-aps`** (pessoas cadastradas em equipes de Saúde da Família e de
  Atenção Primária, em % da população) foi criada e retirada em 20/10/2026. A série
  oficial de cadastros (relatório de cobertura do PNS, pela API do SISAB) acabou em abril
  de 2024, e o Siaps conta cadastros com outra regra desde 2025, que não emenda com ela.
  Os valores calculados (2020 a 2023, Brasil, regiões e UFs) estão em
  `REVISAO-OUTUBRO-2026.md`, e a receita de coleta em `MAPAS-E-APIS.md`, para uso futuro.
