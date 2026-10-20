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

Estado atual: **8 das 9 áreas têm mapa.** Só **habitação** ainda não tem: o dado do
Censo 2022 por UF já está no SIDRA, mas a estatística nova ainda não foi criada
(detalhes no fim).

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
| Assistência | `renda-media-uf` | Rendimento médio mensal 14+ R$ (Censo 2022) | IBGE, Censo 2022, SIDRA 10299 | **API** |
| Habitação | (sem estatística) | *(dado disponível, estatística não criada; ver abaixo)* | IBGE, Censo 2022 | **API** |

"**API**" = dá para coletar 100% por requisição automática. "Planilha" = a fonte
publica um arquivo para download (XLSX, ZIP ou JSON) com o dado por UF; dá para
automatizar, mas o layout pode mudar a cada edição. "Manual" = a fonte publica em
PDF; o número é conferido e atualizado à mão (ou com ajuda de IA, ver `PROMPTS-IA.md`).

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

### Meio ambiente: PRODES por UF (INPE)
- Amazônia: taxas por UF e ano em
  `https://terrabrasilis.dpi.inpe.br/app/prodes/dashboard/deforestation/files/rates2026.json`
  (nomes das UFs em `.../files/config/loinames/prodes_legal_amazon.json`). O nome do
  arquivo muda a cada ciclo.
- Cerrado: `https://terrabrasilis.dpi.inpe.br/app/prodes/dashboard/deforestation/files/data/prodes_cerrado.json`.
- Conferir com a nota técnica do INPE do ciclo. Na Amazônia, o número de outubro é
  estimativa; a taxa consolidada sai no 1º semestre do ano seguinte.

---

## Habitação: o dado existe, falta criar a estatística

A habitação é a única área sem mapa. Desde a revisão de outubro de 2026 isso **não é
mais limitação de dado**: o IBGE já publicou no SIDRA, para o Censo 2022 e por UF, os
dois temas que faltavam. Falta decidir qual estatística criar (com recorte `uf`); o
mapa aparece sozinho quando ela existir.

**Condição de ocupação (próprio, alugado, cedido):** tabela 9929, com o percentual pronto.
```
https://apisidra.ibge.gov.br/values/t/9929/n3/all/v/1000381/p/2022/c63/73554,1055/c1986/73103/c1988/73108
```
- Variável 1000381 = percentual do total de domicílios particulares permanentes ocupados.
- Classe `c63`: 73554 = próprio de algum morador (já pago ou ainda pagando);
  1055 = alugado; 73553 = cedido; 95826 = total.
- Fixar as outras classificações no total: `c1986/73103` e `c1988/73108`.
- Valores de conferência: Brasil próprio 71,25% e alugado 22,23%; São Paulo próprio 67,41%.

**Favelas e comunidades urbanas:** domicílios na tabela 9890, divididos pelo total de
domicílios da tabela 9929.
```
https://apisidra.ibge.gov.br/values/t/9890/n3/all/v/9913/p/2022/c125/2932
https://apisidra.ibge.gov.br/values/t/9929/n3/all/v/381/p/2022/c63/95826/c1986/73103/c1988/73108
```
- Valores de conferência: Amazonas 36,3%; Rio de Janeiro 12,9%; Brasil 7,7%.
- **Não use a tabela 10345 como denominador**: ela cobre só setores selecionados de
  municípios com favelas.

Outra opção é o **déficit habitacional** por UF da Fundação João Pinheiro, que vem na
planilha da edição com dados de 2024 (27 UFs, valores absolutos e relativos).

---

## Automação (relatório trimestral)

A revisão recomendada é **trimestral** (ver `CALENDARIO.md`). Dos mapas acima, os
marcados "**API**" (desocupação, mortalidade infantil, lixo, renda, receita estadual)
podem ser **re-coletados automaticamente**. Os de "Planilha" (IDEB e PRODES) também,
desde que o script confira o layout do arquivo a cada edição. Só o Atlas da Violência
(homicídios e homicídios de mulheres) segue dependendo de conferência humana, porque
a fonte publica em PDF.

O caminho de automação é um **GitHub Action agendado** que roda um script de coleta,
atualiza os JSONs das estatísticas "API" e gera um **relatório do que mudou**. A
proposta detalhada (e a decisão entre *publicar direto* ou *abrir um Pull Request para
você revisar*) está descrita junto com a entrega — ver conversa/`CALENDARIO.md`.
