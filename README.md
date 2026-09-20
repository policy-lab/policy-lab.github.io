# Painel CLEAR — Estatísticas para Avaliação de Políticas Públicas

Painel institucional do **FGV CLEAR** (Centro de Aprendizado e Pesquisa em Avaliação e Resultados) que reúne estatísticas-chave de fontes oficiais brasileiras em segurança, educação, saúde, assistência social, saneamento, mercado de trabalho, meio ambiente, habitação e finanças municipais.

🌐 **Site no ar:** https://policy-lab.github.io/

📘 Acompanha o *Guia de Fontes de Dados para Avaliação de Políticas Públicas* — 7º volume da série **Avaliação na Prática**.

---

## O que tem no painel

- **9 áreas** de política pública
- **30 temas** organizados hierarquicamente
- **45 estatísticas** com séries históricas e recortes (por UF, sexo, raça, idade, faixa de renda, etc.)
- **Mapas coropléticos por UF em 8 das 9 áreas**, vários coletados direto de APIs oficiais (IBGE/SIDRA, SICONFI/Tesouro) — ver [MAPAS-E-APIS.md](MAPAS-E-APIS.md)
- Fontes oficiais (IBGE, INEP, DataSUS, Atlas da Violência, Tesouro Nacional, ANA, INPE, e outras)
- Download de dados em CSV
- Links permanentes para cada estatística

## Como o painel é organizado

Área (9) → Tema (30) → Estatística (45)
───────────── ────────────────────── ─────────────────
Saúde → Mortalidade infantil → TMI Brasil
→ Imunização → Cobertura BCG
→ Atenção Primária → Cobertura ESF
→ Pré-natal adequado


Cada área = 1 arquivo JSON dentro da pasta `data/`.

## Como atualizar o painel

Veja o **[Manual de Manutenção](MANUTENCAO.md)** — explica passo a passo como atualizar estatísticas, adicionar dados, mover o painel para outra conta GitHub, e resolver erros comuns. Escrito para quem nunca usou GitHub.

## Estrutura do repositório

policy-lab.github.io/
├── index.html ← o site
├── README.md ← este arquivo
├── MANUTENCAO.md ← manual de atualização
├── MAPAS-E-APIS.md ← mapas por UF e suas fontes/APIs
├── CALENDARIO.md ← quando revisar cada fonte (ritmo trimestral)
├── PROMPTS-IA.md ← prompts prontos para atualizar com ajuda de IA
├── CONTRIBUTING.md ← regras de contribuição
└── data/ ← dados do painel
├── manifesto.json ← lista de áreas + metadados
├── seguranca.json
├── educacao.json
├── saude.json
├── assistencia.json
├── saneamento.json
├── trabalho.json
├── ambiente.json
├── habitacao.json
└── financas.json


## Tecnologia

Site estático em HTML + CSS + JavaScript puro — sem frameworks, sem servidor, sem banco de dados. Hospedado via GitHub Pages. Atualizações são feitas editando arquivos JSON diretamente no GitHub.

## Sobre os dados

As estatísticas vêm de fontes oficiais brasileiras, com referência completa em cada estatística (produtor, periodicidade, última atualização, URL). Alguns recortes específicos (por UF, raça, etc.) usam valores aproximados quando o dado oficial detalhado não está publicamente disponível — essas aproximações estão sinalizadas nas notas metodológicas.

> ⚠️ **Antes da divulgação institucional**: a equipe CLEAR deve auditar os valores aproximados contra as fontes primárias.

## Versão atual

**v4.3** — Junho de 2026

Novidades desta versão: mapas coropléticos por UF em 8 das 9 áreas, vários com
coleta automática via APIs oficiais (IBGE/SIDRA e SICONFI/Tesouro). Habitação
segue sem mapa à espera de dado por UF do Censo 2022 no SIDRA (ver MAPAS-E-APIS.md).

Histórico de versões disponível em [Releases](https://github.com/policy-lab/policy-lab.github.io/releases) e na lista de commits.

## Licença

Este painel é parte do projeto do FGV CLEAR. Os dados são públicos e provenientes de fontes oficiais brasileiras. Para uso institucional ou citação, mencione: *FGV CLEAR — Painel de Estatísticas para Avaliação de Políticas Públicas, [ano].*

## Contato

- **FGV CLEAR** — https://fgvclear.org
- **Repositório** — https://github.com/policy-lab/policy-lab.github.io
