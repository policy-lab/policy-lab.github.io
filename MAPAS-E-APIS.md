# Mapas por UF e suas fontes (coleta via API)

Este documento registra **todos os mapas coropléticos por UF** do painel, a
**métrica** de cada um e a **fonte/endpoint de API** usado para coletar o dado.
Serve para dois fins: (1) auditar de onde veio cada número e (2) reproduzir a
coleta a qualquer momento (inclusive de forma automática — ver `CALENDARIO.md`
e a seção *Automação* no fim).

> **Como o painel decide desenhar um mapa:** se uma estatística tem um recorte com
> `"id": "uf"` e **20 ou mais estados**, o painel renderiza o mapa automaticamente.
> Um recorte com `"mapa": true` vira mapa parcial com qualquer número de estados
> (é o caso dos biomas, Amazônia e Cerrado).
> Entradas que não são UF (ex.: `"Brasil (média)"`) ficam na lista lateral, sem cor.

Estado atual: **20 mapas nas 9 áreas.** Os quatro de habitação entraram em outubro de
2026 (receitas no fim).

Última conferência dos mapas: revisão de outubro de 2026 (ver `REVISAO-OUTUBRO-2026.md`).

---

## Quadro-resumo

| Área | Estatística (id) | Métrica do mapa | Fonte | Coleta |
|---|---|---|---|---|
| Segurança | `homicidios` | Taxa de homicídios /100 mil (2024) | Atlas da Violência 2026 (Ipea/FBSP), Tabela 2.1 | Manual (PDF) |
| Segurança | `feminicidios` | Homicídios de mulheres /100 mil (2024) | Atlas da Violência 2026 (Ipea/FBSP), Tabela 5.2 | Manual (PDF) |
| Trabalho | `desocupacao` | Taxa de desocupação %, média anual (2025) | IBGE/PNAD Contínua, SIDRA 4562 | **API** |
| Saúde | `mortalidade-infantil` | Óbitos <1 ano /1.000 nasc. (2023) | IBGE, Projeção da População 2024 | **API** (arquivo FTP) |
| Meio ambiente | `amazonia` | Desmatamento PRODES, km² (2026, estimativa; mapa parcial, 9 UFs) | INPE, nota técnica e TerraBrasilis | Planilha/JSON |
| Meio ambiente | `cerrado` | Desmatamento PRODES, km² (2026; mapa parcial) | INPE, nota técnica e TerraBrasilis | Planilha/JSON |
| Educação | `ideb` | IDEB anos iniciais, rede total (2025) | INEP, planilhas de resultados do IDEB | Planilha |
| Educação | `ideb-finais` | IDEB anos finais, rede total (2025) | INEP, planilhas de resultados do IDEB | Planilha |
| Educação | `ideb-medio` | IDEB ensino médio, rede total (2025) | INEP, planilhas de resultados do IDEB | Planilha |
| Saneamento | `lixo` | Domicílios com coleta de lixo % (Censo 2022) | IBGE, Censo 2022, SIDRA 6892 | **API** |
| Finanças | `receita-estadual-pc` | Receita corrente estadual per capita R$ (2025) | SICONFI/Tesouro Nacional | **API** |
| Finanças | `iss` | ISS per capita R$ (2025): ISS bruto dos municípios da UF (no DF, a DCA do DF) ÷ população IBGE 2025 | Siconfi, FINBRA Contas Anuais (Anexo I-C); IBGE, SIDRA 6579 | Download consolidado |
| Finanças | `dependencia` | Transferências correntes ÷ receitas correntes do conjunto dos municípios da UF, % (2025; 26 UFs, o DF fica sem cor) | Siconfi, FINBRA Contas Anuais (Anexo I-C) | Download consolidado |
| Finanças | `despesa-pessoal` | Média dos municípios da UF da despesa com pessoal do Executivo, % da RCL ajustada (2025; 26 UFs) | Siconfi, FINBRA RGF (Anexo 01) | Download consolidado |
| Saúde | `equipes-esf` | Equipes de Saúde da Família por 100 mil hab. (dez/2025) | CNES/DATASUS (TabNet); IBGE, SIDRA 6579 | Consulta TabNet |
| Assistência | `renda-media-uf` | Rendimento médio mensal 14+ R$ (Censo 2022) | IBGE, Censo 2022, SIDRA 10299 | **API** |
| Habitação | `domicilios-proprios` | Domicílios próprios (já pagos e ainda pagando), % (2025) | IBGE/PNAD Contínua, SIDRA 6821 | **API** |
| Habitação | `aluguel` | Domicílios alugados, % (2025) | IBGE/PNAD Contínua, SIDRA 6821 | **API** |
| Habitação | `deficit-habitacional` | Déficit habitacional relativo, % dos domicílios (2024) | Fundação João Pinheiro, planilha do Déficit Habitacional 2024 | Planilha |
| Habitação | `favelas` | Domicílios em favelas e comunidades urbanas, % (Censo 2022) | IBGE, Censo 2022, SIDRA 9890 e 9929 | **API** |

"**API**" = dá para coletar 100% por requisição automática. "Planilha" = a fonte
publica um arquivo para download (XLSX, ZIP ou JSON) com o dado por UF; dá para
automatizar, mas o layout pode mudar a cada edição. "Manual" = a fonte publica em
PDF; o número é conferido e atualizado à mão (ou com ajuda de IA, ver `PROMPTS-IA.md`).
"Download consolidado" = um arquivo por exercício com todos os municípios, baixado por
uma pessoa no site do Siconfi (o botão tem CAPTCHA); o passo a passo está em
`MANUTENCAO.md`, seção 17. "Consulta TabNet" = tabela gerada no TabNet do DATASUS
(consulta pública de leitura, sem login).

---

## Receitas de coleta (os mapas via API)

Todos os comandos abaixo são requisições HTTP públicas, sem token.

### Trabalho — desocupação por UF (PNAD Contínua / SIDRA)
```
https://apisidra.ibge.gov.br/values/t/4562/n3/all/v/4099/p/2025
```
- Tabela 4562 (PNAD Contínua anual), variável 4099 (taxa de desocupação), nível N3 (UF).
- Trocar `p/2025` pelo ano mais recente disponível.

### Saneamento: coleta de lixo por UF (Censo 2022 / SIDRA)
```
https://apisidra.ibge.gov.br/values/t/6892/n3/all/v/1000381/p/2022/c67/2520
```
- Tabela 6892 (domicílios particulares permanentes ocupados, por destino do lixo).
- Variável 1000381 = **percentual** do total de domicílios; classe `c67/2520` = "Coletado".
- Para o valor do Brasil, troque `n3/all` por `n1/all` (Brasil: 91,71%).
- **Não use a tabela 10345.** Ela é da Pesquisa Urbanística do Entorno, cobre só
  setores selecionados de municípios com favelas, e a variável 1013548 é o percentual
  dos domicílios **em favelas**. Até outubro de 2026 o mapa usava essa tabela por
  engano (Brasil aparecia com 96,8% em vez de 91,7%).

### Assistência — renda média por UF (Censo 2022 / SIDRA)
```
https://apisidra.ibge.gov.br/values/t/10299/n3/all/v/13502/p/2022/c2/6794/c629/32385/c58/95253
```
- Variável 13502 = rendimento médio mensal das pessoas de 14+; classes em "Total"
  (sexo 6794, condição 32385, idade 95253).

### Finanças — receita estadual per capita (SICONFI / Tesouro)
Duas etapas. Primeiro a lista de entes (traz população por estado):
```
https://apidatalake.tesouro.gov.br/ords/siconfi/tt/entes
```
Depois, para **cada** um dos 27 governos estaduais (código IBGE de 2 dígitos:
11=RO … 35=SP … 53=DF), a Declaração de Contas Anuais:
```
https://apidatalake.tesouro.gov.br/ords/siconfi/tt/dca?an_exercicio=2025&no_anexo=DCA-Anexo%20I-C&id_ente=35
```
- Pegar a conta `RO1.0.0.0.00.0.0` ("Receitas Correntes"), coluna "Receitas Brutas
  Realizadas", e **dividir pela população** do estado (campo `populacao` em `/entes`).
- Atenção: no `/entes`, entes estaduais vêm com `uf = "BR"`; identifique o estado
  pelo **código IBGE** de 2 dígitos com `esfera = "E"`. O DF é `cod_ibge = 53` com
  `esfera = "D"`.
- O `/entes` devolve sempre o cadastro vigente (ignora o exercício). Os valores de 2024
  e 2025 do painel usam essa mesma população nos dois anos, então a variação reflete
  só a receita.
- Antes de usar um exercício novo, confira se as 27 DCAs foram entregues:
  `https://apidatalake.tesouro.gov.br/ords/siconfi/tt/extrato_entregas?id_ente=35&an_referencia=2025`.

### Saúde: mortalidade infantil por UF (Projeção IBGE)
- Arquivo: `https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx`
- Coluna `TMI_T` (taxa de mortalidade infantil, ambos os sexos), por UF e ano.
- O mapa usa 2023, último ano de referência da projeção. Os anos seguintes do arquivo
  são projetados e não devem entrar como dado observado.

### Educação: IDEB por UF (planilhas do INEP)
- Arquivos: `https://download.inep.gov.br/ideb/resultados/divulgacao_regioes_ufs_ideb_2025.zip`
  (UFs e regiões) e `https://download.inep.gov.br/ideb/resultados/divulgacao_brasil_ideb_2025.zip` (Brasil).
- Abas "UF e Regiões (AI)", "(AF)" e "(EM)"; usar as linhas cuja coluna "Rede"
  começa com "Total" (vem com notas, como "Total (3)(4)") e a coluna `VL_OBSERVADO_2025`.
- As três estatísticas de IDEB usam a **rede total** (pública e privada) em valor,
  série e recortes.
- A planilha abrevia três UFs: "R. G. do Norte", "R. G. do Sul" e "M. G. do Sul".
- No arquivo Brasil de 2025, a aba de anos finais não traz `VL_OBSERVADO_2023`; o
  valor sai de `VL_NOTA_MEDIA_2023 × VL_INDICADOR_REND_2023` (rede total: 5,0).

### Finanças municipais: ISS, dependência e despesa com pessoal por UF (FINBRA)
- Arquivos: FINBRA do Siconfi, Contas Anuais (Receitas Orçamentárias, Anexo I-C) e RGF
  (Anexo 01, Poder Executivo, tabela "DTP e Apuração do Cumprimento do Limite Legal",
  3º quadrimestre e 2º semestre). Como baixar e conferir: `MANUTENCAO.md`, seção 17.
- A UF de cada município sai dos dois primeiros dígitos do código IBGE.
- **ISS per capita:** soma da conta `RO1.1.1.4.51.1.0` ("Receitas Brutas Realizadas") dos
  municípios da UF, dividida pela população estimada da UF:
  `https://apisidra.ibge.gov.br/values/t/6579/n3/all/v/9324/p/2025`.
  O DF entra com a DCA dele na API (`id_ente=53`).
- **Dependência:** soma de `RO1.7.0.0.00.0.0` ÷ soma de `RO1.0.0.0.00.0.0`, receita bruta,
  municípios da UF. O DF não tem municípios e fica sem cor no mapa.
- **Despesa com pessoal:** média simples, entre os municípios da UF, do "% sobre a RCL
  Ajustada" de `DespesaComPessoalTotal`, sem as declarações acima de 100% ou negativas.

### Saúde: equipes de Saúde da Família por UF (CNES/TabNet)
- Consulta: http://tabnet.datasus.gov.br/cgi/deftohtm.exe?cnes/cnv/equipebr.def
  ("CNES - Equipes de Saúde - Brasil"). Linha "Unidade da Federação" (ou "Região"),
  coluna "Tipo da Equipe", conteúdo "Quantidade", período dez/AAAA (arquivo `epbrAAMM`).
- Somar os tipos de eSF: código **70** (eSF, desde maio de 2020) e os códigos antigos
  01 a 03, 12 a 15, 24 a 39 (ainda há algumas equipes neles). Antes de maio de 2020 só
  existem os códigos antigos. Tabela de tipos: Portaria SAES/MS nº 37/2021,
  https://bvsms.saude.gov.br/bvs/saudelegis/saes/2021/prt0037_21_01_2021.html.
- Dividir pela população estimada da UF no ano (SIDRA 6579, acima) e multiplicar por
  100 mil. Para a série antes de 2024, usar as projeções do IBGE revisão 2024
  (`https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx`,
  coluna POP_T), que coincidem com as estimativas de 2024 e 2025.
- Conferência: o microdado do FTP (`ftp://ftp.datasus.gov.br/dissemin/publicos/CNES/200508_/Dados/EP/EP{UF}{AAMM}.dbc`)
  dá o mesmo total do TabNet (57.330 equipes em dez/2025).

### Saúde: cadastros na APS por UF (SISAB; estatística retirada, receita guardada)
A estatística `cobertura-cadastro-aps` foi retirada do painel em 20/10/2026: a série oficial
de cadastros acabou em abril de 2024, e a regra do Siaps de 2025 não emenda com ela. Hoje
não há mapa. A receita fica para uso futuro; os valores calculados (2020 a 2023) estão em
`REVISAO-OUTUBRO-2026.md`, seção "Terceira rodada".
```
https://relatorioaps-prd.saude.gov.br/cobertura/pns?unidadeGeografica=UF&nuCompInicio=202312&nuCompFim=202312
```
- É a API do relatório público "Cobertura da Atenção Primária (PNS 2020 - 2023)"
  (https://relatorioaps.saude.gov.br/cobertura/pns). Troque `UF` por `BRASIL` ou `REGIAO`.
- Numerador: campo `qtTotalCadastroApsPaga` (pessoas com cadastro individual em eSF e eAP
  financiadas), competência de dezembro. Não use o campo `vlCobertura`: ele limita os
  cadastros à população de cada município e usa a estimativa de 2021.
- Denominador: população das projeções do IBGE, revisão 2024 (coluna POP_T, sigla da UF):
  https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx
- A série vai de dez/2020 a abr/2024; de mai/2024 em diante a API devolve zeros (fim da
  capitação, Portaria GM/MS 3.493/2024). O Siaps conta cadastros com outra regra desde
  jan/2025 (Nota Técnica 30/2025), não comparável: não emende as duas séries.
- Algumas UFs passam de 100% (cadastros duplicados ou desatualizados). Mantenha o valor e
  registre na nota.

### Meio ambiente: PRODES por UF (INPE)
- Amazônia: taxas por UF e ano em
  `https://terrabrasilis.dpi.inpe.br/app/prodes/dashboard/deforestation/files/rates2026.json`
  (nomes das UFs em `.../files/config/loinames/prodes_legal_amazon.json`). O nome do
  arquivo muda a cada ciclo.
- Cerrado: `https://terrabrasilis.dpi.inpe.br/app/prodes/dashboard/deforestation/files/data/prodes_cerrado.json`.
- Conferir com a nota técnica do INPE do ciclo. Na Amazônia, o número de outubro é
  estimativa; a taxa consolidada sai no 1º semestre do ano seguinte.

---

## Habitação: casa própria, aluguel, déficit e favelas por UF

Os quatro mapas de habitação entraram em outubro de 2026.

### Casa própria e aluguel por UF (PNAD Contínua, SIDRA 6821)
```
https://apisidra.ibge.gov.br/values/t/6821/n3/all/v/9784/p/2025/c63/all
```
- Variável 9784 = distribuição percentual dos domicílios (PNAD Contínua anual, 1ª visita).
- Classe `c63`: 4342 = próprio, já pago; 4343 = próprio, ainda pagando; 1055 = alugado;
  2519 = cedido; 1058 = outra condição; 95826 = total. No SIDRA, "-" quer dizer zero.
- `domicilios-proprios`: soma de 4342 e 4343 em cada UF. `aluguel`: categoria 1055.
- Conferência com a variável 162 (domicílios, em mil):
  `https://apisidra.ibge.gov.br/values/t/6821/n1/all/n3/all/v/162/p/2025/c63/all`.
  A soma das 27 UFs dá 67,02% de próprios e 23,81% de alugados, os mesmos do Brasil.
  No mapa, use os percentuais da variável 9784: os absolutos vêm arredondados em mil e,
  nas UFs pequenas, mudam o percentual em até 0,4 ponto.
- Valores de 2025: próprios de Maranhão (80,5) a Distrito Federal (55,3); alugados de
  Distrito Federal (34,5) a Piauí (11,7).
- Alternativa não usada: a condição de ocupação do Censo 2022 (tabela 9929, variável
  1000381; Brasil com 71,25% de próprios e 22,23% de alugados). O painel usa a PNAD
  Contínua, que é anual e é a mesma fonte do valor nacional.

### Déficit habitacional relativo por UF (Fundação João Pinheiro)
- Planilha "Estimativas Déficit Habitacional no Brasil 2024", aba `Deficit_habitacional`,
  coluna "Déficit Habitacional Relativo" (déficit ÷ total de domicílios particulares
  ocupados da aba `Total_domicilios_ocupados`):
  https://docs.google.com/spreadsheets/d/1AwlL17JBmASv8Jurnkb6zhfXc0fzGQwp/export?format=xlsx
  (link na página https://fjp.mg.gov.br/deficit-habitacional-no-brasil/).
- A aba mistura regiões, UFs e regiões metropolitanas (linhas "RM ..." e "RIDE ...");
  use só as 27 UFs.
- Use o relativo, não o absoluto: com o absoluto, São Paulo (1,25 milhão) fica sozinho
  na faixa mais alta do mapa e 21 UFs na mais baixa.
- Valores de 2024: Amapá (16,0) a Rio Grande do Sul (5,0); Brasil 7,4.

### Domicílios em favelas e comunidades urbanas por UF (Censo 2022)
```
https://apisidra.ibge.gov.br/values/t/9890/n1/all/n2/all/n3/all/v/9913/p/2022/c125/2932
https://apisidra.ibge.gov.br/values/t/9929/n1/all/n2/all/n3/all/v/381/p/2022/c63/95826/c1986/73103/c1988/73108
```
- Numerador: domicílios particulares permanentes ocupados em favelas e comunidades
  urbanas (9890, variável 9913, tipo de domicílio Total). Denominador: domicílios
  particulares permanentes ocupados (9929, variável 381, condição de ocupação Total e as
  outras duas classificações no total).
- Não use a variável 1009913 da 9890: o percentual dela é sobre o total da própria
  tabela, só com domicílios em favelas. **Não use a tabela 10345 como denominador**:
  ela cobre só setores selecionados de municípios com favelas.
- Na 9929, a soma das 27 UFs fica 2 domicílios abaixo do Brasil (72.461.369 contra
  72.461.371); o percentual não muda.
- Valores: Amazonas 36,3; Amapá 23,3; Rio de Janeiro 12,9; Mato Grosso do Sul 0,5;
  Brasil 7,7 (5.557.379 de 72.461.371 domicílios).
- Totais do card: 12.348 favelas e comunidades urbanas (tabela 9883, variável 9910) e
  16.390.790 moradores (tabela 9888, variável 9612).

---

## Automação (relatório trimestral)

A revisão recomendada é **trimestral** (ver `CALENDARIO.md`). Dos mapas acima, os
marcados "**API**" (desocupação, mortalidade infantil, lixo, renda, receita estadual,
casa própria, aluguel e favelas) podem ser **re-coletados automaticamente**. Os de
"Planilha" (IDEB, PRODES e déficit habitacional) também,
desde que o script confira o layout do arquivo a cada edição. O Atlas da Violência
(homicídios e homicídios de mulheres) segue dependendo de conferência humana, porque
a fonte publica em PDF. Os mapas de finanças municipais (ISS, dependência e despesa com
pessoal) dependem do download consolidado do FINBRA, que uma pessoa precisa fazer por
causa do CAPTCHA; o cálculo a partir dos arquivos pode ser automático. As equipes de
Saúde da Família vêm de consulta ao TabNet, que também pode ser automatizada com poucas
consultas espaçadas.

O caminho de automação é um **GitHub Action agendado** que roda um script de coleta,
atualiza os JSONs das estatísticas "API" e gera um **relatório do que mudou**. A
proposta detalhada (e a decisão entre *publicar direto* ou *abrir um Pull Request para
você revisar*) está descrita junto com a entrega — ver conversa/`CALENDARIO.md`.
