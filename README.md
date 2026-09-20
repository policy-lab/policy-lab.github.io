# FGV Policy Lab

Site com as ferramentas abertas do **FGV Policy Lab**, centro de pesquisa aplicada da FGV EESP dedicado ao desenho, à avaliação e ao debate sobre políticas públicas no Brasil. O **FGV CLEAR** é uma das iniciativas do centro.

🌐 **No ar:** https://policy-lab.github.io/

## O que tem aqui

| Projeto | Endereço | Estado |
|---|---|---|
| Painel de estatísticas | https://policy-lab.github.io/painel/ | No ar |
| Checklists de avaliação | — | Em construção |

---

# Painel de estatísticas

Reúne estatísticas-chave de fontes oficiais brasileiras em segurança, educação, saúde, assistência social, saneamento, mercado de trabalho, meio ambiente, habitação e finanças municipais.

📘 Acompanha o *Guia de Fontes de Dados para Avaliação de Políticas Públicas* — 7º volume da série **Avaliação na Prática**.

## O que tem no painel

- **9 áreas** de política pública
- **30 temas** organizados hierarquicamente
- **45 estatísticas** com séries históricas e recortes (por UF, sexo, raça, idade, faixa de renda, etc.)
- **Mapas coropléticos por UF em 8 das 9 áreas**, vários coletados direto de APIs oficiais (IBGE/SIDRA, SICONFI/Tesouro) — ver [MAPAS-E-APIS.md](MAPAS-E-APIS.md)
- Fontes oficiais (IBGE, INEP, DataSUS, Atlas da Violência, Tesouro Nacional, ANA, INPE, e outras)
- Download de dados em CSV
- Links permanentes para cada estatística

## Como o painel é organizado

```
Área (9)        →   Tema (30)              →   Estatística (45)
─────────────       ──────────────────────     ─────────────────
Saúde           →   Mortalidade infantil   →   TMI Brasil
                →   Imunização             →   Cobertura BCG
                →   Atenção Primária       →   Cobertura ESF
                                            →   Pré-natal adequado
```

Cada área = 1 arquivo JSON dentro da pasta `painel/data/`.

## Como atualizar o painel

Veja o **[Manual de Manutenção](MANUTENCAO.md)** — explica passo a passo como atualizar estatísticas, adicionar dados e resolver erros comuns. Escrito para quem nunca usou GitHub.

## Estrutura do repositório

```
policy-lab.github.io/
├── index.html              ← portal (página inicial do site)
├── README.md               ← este arquivo
├── MANUTENCAO.md           ← manual de atualização
├── MAPAS-E-APIS.md         ← mapas por UF e suas fontes/APIs
├── CALENDARIO.md           ← quando revisar cada fonte (ritmo trimestral)
├── PROMPTS-IA.md           ← prompts prontos para atualizar com ajuda de IA
├── CONTRIBUTING.md         ← regras de contribuição
├── assets/                 ← logos e imagens, compartilhados pelo site
│   └── img/
└── painel/                 ← painel de estatísticas
    ├── index.html          ← o painel
    └── data/               ← dados do painel
        ├── manifesto.json  ← lista de áreas + metadados
        ├── seguranca.json
        ├── educacao.json
        ├── saude.json
        ├── assistencia.json
        ├── saneamento.json
        ├── trabalho.json
        ├── ambiente.json
        ├── habitacao.json
        └── financas.json
```

## Como adicionar um projeto novo ao site

1. Crie uma pasta na raiz com o nome curto do projeto (`checklists/`, por exemplo).
2. Coloque o `index.html` dele dentro dessa pasta. Ele fica em `policy-lab.github.io/checklists/`.
3. Para usar os logos compartilhados, referencie `../assets/img/`.
4. Adicione um bloco `.project` no `index.html` da raiz, com o link para a pasta nova.

## Tecnologia

Sites estáticos em HTML + CSS + JavaScript puro — sem frameworks, sem servidor, sem banco de dados. Hospedado via GitHub Pages. Atualizações são feitas editando arquivos diretamente no GitHub.

## Sobre os dados

As estatísticas vêm de fontes oficiais brasileiras, com referência completa em cada estatística (produtor, periodicidade, última atualização, URL). Alguns recortes específicos (por UF, raça, etc.) usam valores aproximados quando o dado oficial detalhado não está publicamente disponível — essas aproximações estão sinalizadas nas notas metodológicas.

> ⚠️ **Antes da divulgação institucional**: a equipe do centro deve auditar os valores aproximados contra as fontes primárias.

## Versão atual do painel

**v4.3** — Junho de 2026

Novidades desta versão: mapas coropléticos por UF em 8 das 9 áreas, vários com
coleta automática via APIs oficiais (IBGE/SIDRA e SICONFI/Tesouro). Habitação
segue sem mapa à espera de dado por UF do Censo 2022 no SIDRA (ver MAPAS-E-APIS.md).

Histórico de versões disponível em [Releases](https://github.com/policy-lab/policy-lab.github.io/releases) e na lista de commits.

## Licença

Este site é do FGV Policy Lab (FGV EESP). Os dados são públicos e provenientes de fontes oficiais brasileiras. Para uso institucional ou citação, mencione: *FGV Policy Lab — Painel de Estatísticas para Avaliação de Políticas Públicas, [ano].*

## Contato

- **FGV Policy Lab** — https://eesp.fgv.br/centro-de-estudos/fgv-policy-lab
- **FGV CLEAR** — https://fgvclear.org
- **Repositório** — https://github.com/policy-lab/policy-lab.github.io
