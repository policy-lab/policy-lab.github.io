# Revisão trimestral do Painel CLEAR: outubro de 2026

Data: 20/10/2026. Escopo: as 45 estatísticas de `painel/data/*.json`, conferidas uma a uma contra a fonte oficial. Cada área foi revisada por um agente próprio, que só editou o arquivo da sua área. Os números novos e os pontos antigos mais sensíveis foram reconferidos na fonte (SIDRA, INEP, INPE, MDS, Siconfi, Atlas 2026).

Regras seguidas: nenhum número sem fonte oficial aberta; o último ponto de cada série foi reproduzido antes de acrescentar o ano novo; séries anuais só com ano completo; estatísticas mensais com o mês explícito; ids, títulos, estrutura e ordem mantidos.

Resumo: **34 ATUALIZADA, 3 SEM DADO NOVO, 8 [não encontrado]**.

Também foram atualizados `painel/data/manifesto.json` (`"atualizado": "Outubro de 2026"`) e o texto fixo de `id="meta-atualizado"` em `painel/index.html`.

## Estatística por estatística

| Área | id | Status | Valor antigo | Valor novo | Fonte (link exato) | Observação |
|---|---|---|---|---|---|---|
| Segurança | homicidios | ATUALIZADA | 21,2 por 100 mil (2023) | 20,1 por 100 mil (2024) | https://publicacoes.forumseguranca.org.br/bitstreams/dca3fe32-7f7a-4029-aa4e-485f23ac2cd7/download (Atlas da Violência 2026, Tabela 2.1) | O Atlas 2026 revisou 2014 a 2023 (nova população); 2023 passou a 21,7. Recortes UF, raça e idade em 2024 (idade pelo SIM/TabNet). |
| Segurança | mvci | ATUALIZADA | 4.692 por ano (média 2013-2023) | 5.019 por ano (média 2014-2024) | https://publicacoes.forumseguranca.org.br/bitstreams/dca3fe32-7f7a-4029-aa4e-485f23ac2cd7/download (Atlas 2026, Tabelas 3.3 e 3.5) | Série anual antiga era aproximada; trocada pelos valores exatos do Atlas (2024 = 7.083). Tendência: queda para alta. |
| Segurança | feminicidios | ATUALIZADA | 1.492 vítimas (2024) | 1.571 vítimas (2025) | https://publicacoes.forumseguranca.org.br/bitstreams/f659572d-8a06-431e-99ab-95448ca88c58/download (20º Anuário FBSP, aba T21) | FBSP revisou 2016 a 2024 (2024 = 1.504). Raça e idade em 2025; mapa UF pelo Atlas 2026 (dados de 2024). |
| Segurança | populacao-carceraria | ATUALIZADA | 832.295 (junho/2024) | 964.668 (dezembro/2025) | https://www.gov.br/senappen/pt-br/servicos/sisdepen/bases-de-dados/2025/19o-ciclo-base-de-dados-2025-2-semestre.csv/@@download/file | Série misturava junho e dezembro e repetia 2022 em 2024; padronizada em dezembro. Tendência corrigida para alta. |
| Segurança | deficit-prisional | ATUALIZADA | 188 mil vagas (2024) | 222 mil vagas (dezembro/2025) | https://www.gov.br/senappen/pt-br/servicos/sisdepen/relatorios/relatorios-de-informacoes-penitenciarias/relatorio-do-2o-semestre-de-2025.pdf/@@download/file (p. 12 a 17) | 188 não se reproduzia por nenhuma definição. Série refeita pelo critério oficial da Senappen (celas físicas). Ver pendências. |
| Educação | ideb | ATUALIZADA | 5,7 (2023, rede pública) | 6,3 (2025, rede total) | https://download.inep.gov.br/ideb/resultados/divulgacao_brasil_ideb_2025.zip e https://download.inep.gov.br/ideb/resultados/divulgacao_regioes_ufs_ideb_2025.zip | Padronizado na rede total, como as outras duas etapas: série inteira trocada (2023 = 6,0; 2019 = 5,9), recortes por etapa e UF em 2025 (Paraná 7,0). Rótulo "Brasil (rede pública)" virou "Brasil (rede total)". |
| Educação | ideb-finais | ATUALIZADA | 5,0 (2023) | 5,3 (2025, rede total) | https://download.inep.gov.br/ideb/resultados/divulgacao_brasil_ideb_2025.zip | 5,0 era o certo para 2023 (rede total; no arquivo de 2025 sai de N × P = 5,33 × 0,94). A série era da rede pública (4,7 em 2023); trocada inteira pela rede total. Série e 27 UFs conferidas. |
| Educação | ideb-medio | ATUALIZADA | 4,3 (2023) | 4,5 (2025, rede total) | https://download.inep.gov.br/ideb/resultados/divulgacao_brasil_ideb_2025.zip | Série 2005 a 2023 já batia com a rede total; série e 27 UFs conferidas. Mapa UF em 2025; sub-aba "Por UF (estaduais)" passou a "Por UF". Tendência: estavel para alta. |
| Educação | ensino-medio | ATUALIZADA | 56,0% (2024) | 57,4% (2025) | https://apisidra.ibge.gov.br/values/t/7189/n1/all/n2/all/v/10270/p/all/c2/all/c1568/11630,11631,99713 | IBGE reponderou a PNADC em 10/03/2026: 2024 passou a 55,7 e 2016 a 2023 foram revisados. Recortes em 2025. |
| Educação | abandono-em | ATUALIZADA | 4,6% (2024) | 2,2% (2025) | https://download.inep.gov.br/informacoes_estatisticas/indicadores_educacionais/2025/tx_rend_brasil_regioes_ufs_2025.zip | A série só se reproduz como taxa do EM total (não 3ª série). Pontos 2019 a 2024 corrigidos; `indicador`, `unidade` e nota dizem ensino médio. |
| Educação | distorcao | [não encontrado] | 21,4% (2024) | 21,4% (mantido) | https://download.inep.gov.br/informacoes_estatisticas/indicadores_educacionais/2025/TDI_2025_BRASIL_REGIOES_UFS.zip | O INEP não publica taxa combinada EF+EM; nenhum ponto nem recorte se reproduz. |
| Educação | analfabetismo | ATUALIZADA | 5,3% (2024) | 4,9% (2025) | https://apisidra.ibge.gov.br/values/t/7113/n1/all/n2/all/v/10267/p/all/c2/all/c58/2795,3302 | 2024 bateu. 2018 corrigido de 6,6 para 6,3. Recortes em 2025; 8,4 milhões de analfabetos. |
| Saúde | mortalidade-infantil | SEM DADO NOVO | 12,5 por mil (2023) | 12,5 por mil (2023) | https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx | Os 45 valores batem com o arquivo do IBGE. 2024 só existe como projeção; não entrou. Nota ajustada. |
| Saúde | mortalidade-materna | ATUALIZADA | 50,7 por 100 mil (2023) | 55,3 por 100 mil (2023) | https://apisidra.ibge.gov.br/values/t/6694/n1/all/v/9730 | Correção, sem ano novo: a série oficial corrigida (ODS 3.1.1) dá 2021 = 117,4, 2022 = 57,7 e 2023 = 55,3. 2024 corrigido ainda não saiu. |
| Saúde | vacinacao | ATUALIZADA | 96,3% (2024) | 93,1% (2025, preliminar) | https://infoms.saude.gov.br/extensions/SEIDIGI_DEMAS_VACINACAO_CALENDARIO_NACIONAL_COBERTURA_RESIDENCIA/index.html | 2024 oficial é 95,9; cinco anos antigos corrigidos. 2025 preliminar. Tendência: alta para queda. |
| Saúde | bcg | ATUALIZADA | 99,4% (2024) | 100,8% (2025, preliminar) | https://infoms.saude.gov.br/extensions/SEIDIGI_DEMAS_VACINACAO_CALENDARIO_NACIONAL_COBERTURA_RESIDENCIA/index.html (imunobiológico BCG) | Série antiga (98% a 100% em 2019-2023) não batia; fonte dá 75% a 90%. Max do recorte para 110. |
| Saúde | esf | [não encontrado] | 65,4% (2024) | 65,4% (mantido) | https://relatorioaps.saude.gov.br/cobertura/ab | A cobertura ESF oficial termina em dez/2020; a métrica atual (Cobertura Potencial da APS) é outro conceito. |
| Saúde | pre-natal | ATUALIZADA | 76,4% (2023) | 79,1% (2024) | http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinasc/cnv/nvuf.def | Nenhum ponto antigo batia com o Sinasc; série inteira recalculada. Raça pela cor da mãe (microdados 2024). |
| Assistência | bolsa-familia | ATUALIZADA | 18,9 milhões (abr/2026) | 19,3 milhões (out/2026) | https://aplicacoes.mds.gov.br/sagi/servicos/misocial?q=*:*&fq=anomes_s:202610&rows=0&wt=json&stats=true&stats.field=qtd_familias_beneficiarias_bolsa_familia_i&stats.field=valor_repassado_bolsa_familia_f&stats.facet=regiao&stats.facet=sigla_uf | Abr/2026 bateu (18.926.169). Pontos anuais = dezembro; 2018, 2020, 2021 e 2022 corrigidos. Recorte valor-medio ficou em dez/2025. |
| Assistência | bpc | ATUALIZADA | 6,0 milhões (2025) | 6,5 milhões (ago/2026) | https://aplicacoes.mds.gov.br/sagi/servicos/misocial?q=*:*&fq=anomes_s:202608&rows=0&wt=json&stats=true&stats.field=bpc_ben_i&stats.field=bpc_idoso_ben_i&stats.field=bpc_pcd_ben_i&stats.facet=regiao | Dez/2025 oficial é 6,4. Série trocada pelos valores de dezembro do MDS, mais 2026 (ago, último mês publicado). |
| Assistência | cadunico | ATUALIZADA | 41,7 milhões (2025) | 43,6 milhões (out/2026) | https://aplicacoes.mds.gov.br/sagi/servicos/misocial?q=*:*&fq=anomes_s:202610&rows=0&wt=json&stats=true&stats.field=cadun_qtd_familias_cadastradas_i&stats.field=cadun_qtd_pessoas_cadastradas_i&stats.facet=regiao&stats.facet=sigla_uf | Dez/2025 oficial é 41,8. Série trocada pelos valores de dezembro, mais 2026 (out). Penetração por UF recalculada. |
| Assistência | renda-media-uf | SEM DADO NOVO | R$ 2.001 (Censo 2022) | R$ 2.001 | https://apisidra.ibge.gov.br/values/t/10299/n1/all/n3/all/v/13502/p/2022/c2/6794/c629/32385/c58/95253 | Os 28 valores conferem com o SIDRA. |
| Saneamento | esgoto | ATUALIZADA | 59,7% (2023) | 62,3% (2024) | https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/saneamento/sinisa/resultados-sinisa/009_RELATORIO_SINISA_ESGOTAMENTO_SANITARIO_2025_defeso.pdf | 2023 bateu. Componentes e regiões em 2024; investimento R$ 28,3 bi em 2024. |
| Saneamento | lixo | ATUALIZADA | 92,0% (2024, estimativa) | 93,1% (2025, oficial) | https://apisidra.ibge.gov.br/values/t/6736/n1/all/n2/all/v/9784 | Série refeita com a PNADC oficial (2016 a 2025). Mapa UF corrigido: usava domicílios em favelas (tabela 10345); agora todos os domicílios (tabela 6892). Brasil 96,8 passou a 91,7. |
| Saneamento | disposicao-residuos | [não encontrado] | 60,3% (2023) | 60,3% (mantido) | https://www.abrema.org.br/download/98191/?tmstv=1765215319 | A ABREMA mudou o conceito (58,5 em 2023 e 59,7 em 2024, % do encaminhado à disposição final). Tendência: alta para estavel. |
| Saneamento | energia | ATUALIZADA | 99,8% (2024, estimativa) | 99,8% (2025, oficial) | https://apisidra.ibge.gov.br/values/t/6737/n1/all/n2/all/v/5074 | Série refeita com a tabela oficial. Domicílios sem energia: 135 mil em 2025. |
| Trabalho | emprego-formal | ATUALIZADA | 1.279.498 (2025) | 1.270.556 (2025, com ajustes) | https://drive.google.com/file/d/1LFiRd5cYqCLbBv7udPWtus6h4cF3GaA0/view (MTE, tabelas do Novo CAGED de ago/2026, Tabela 5.1) | Saldos 2020 a 2025 revistos pelas declarações fora do prazo. Tendência: alta para queda. Conjuntura: jan-ago/2026 = +1.134.033. |
| Trabalho | desocupacao | ATUALIZADA | 5,6% (2025) | 5,6% (2025) | https://apisidra.ibge.gov.br/values/t/4562/n1/all/v/4099/p/all | Valor igual; 2014 a 2018, 2022 (9,6) e 2023 (7,7) revisados. Recortes passados todos para média anual. Conjuntura jun-ago/2026: 5,3%. |
| Trabalho | subutilizacao | ATUALIZADA | 14,6% (2025) | 14,5% (2025) | https://apisidra.ibge.gov.br/values/t/4677/n1/all/v/4118/p/all | Série misturava 4º trimestre e média anual; toda em média anual agora. Componentes corrigidos. |
| Trabalho | rendimento | ATUALIZADA | R$ 3.560 (2025) | R$ 3.560 (2025) | https://apisidra.ibge.gov.br/values/t/7444/n1/all/v/10774/p/all/c2/6794 | Valor igual; pontos 2014 a 2024 levados à mesma base (preços médios de 2025). |
| Trabalho | taxa-informalidade | ATUALIZADA | 38,5% (2025) | 38,1% (2025) | https://apisidra.ibge.gov.br/values/t/4708/n1/all/v/12466/p/all | Passou a média anual (o 38,5 era 4º trimestre). Tendência: estavel para queda. |
| Ambiente | amazonia | ATUALIZADA | 5.796 km² (2025, estimativa) | 3.335 km² (2026, estimativa) | https://data.inpe.br/biomasbr/wp-content/uploads/sites/3/2026/10/Nota_tecnica_EstimativaPRODES_AMZ_2026.pdf e https://terrabrasilis.dpi.inpe.br/app/prodes/dashboard/deforestation/files/rates2026.json | 2025 trocado pela taxa consolidada (5.731) e 2023 corrigido (9.064). Recortes UF e variação em 2026. |
| Ambiente | cerrado | ATUALIZADA | 7.235 km² (2025) | 5.517 km² (2026) | https://data.inpe.br/biomasbr/wp-content/uploads/sites/3/2026/10/NT_PRODESCerrado_2026_revisado.pdf | INPE revisou 2017 a 2020; corrigidos. Matopiba: 74,3%. |
| Ambiente | emissoes | ATUALIZADA | 2,3 bi t CO₂e (2023) | 2,1 bi t CO₂e (2024) | https://seeg.eco.br/wp-content/uploads/2025/12/Dados-nacionais-13.0.xlsx | Emissões brutas GWP-AR5. A Coleção 13 revisou a série inteira (2023 passou a 2,6); série toda trocada. |
| Ambiente | estresse-hidrico | [não encontrado] | 23% (2023) | 23% (mantido) | https://conjuntura-2025.webflow.io/balanco-hidrico | O indicador "% de unidades de gestão" não existe no Conjuntura 2024 nem no 2025; o 23% não se reproduz. |
| Habitação | deficit-habitacional | SEM DADO NOVO | 5,77 milhões (2024) | 5,77 milhões (2024) | https://docs.google.com/spreadsheets/d/1AwlL17JBmASv8Jurnkb6zhfXc0fzGQwp/export?format=xlsx (FJP) | Sem 2025. Corrigidos 2016 a 2018, a composição de 2024 e o recorte UF (2022 para 2024); fonte em Junho/2026. |
| Habitação | mcmv | [não encontrado] | 880 mil (2025) | 880 mil (mantido) | https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/arquivos/mcmv_subsidiado_202606302.zip | Nenhuma fonte oficial confirma 880 mil (Secom: 766 mil; base aberta do MCID: 816.017). |
| Habitação | domicilios-proprios | ATUALIZADA | 73,4% (2024) | 67,0% (2025) | https://apisidra.ibge.gov.br/values/t/6821/n1/all/v/9784/p/all/c63/all | Já pago + ainda pagando. 2024 oficial é 67,6; a série antiga estava acima do oficial em todos os anos e foi corrigida. |
| Habitação | aluguel | ATUALIZADA | 20,1% (2024) | 23,8% (2025) | https://apisidra.ibge.gov.br/values/t/6821/n1/all/v/9784/p/all/c63/1055 | 2024 oficial é 23,0; série corrigida. Max do recorte por região de 25 para 30. |
| Finanças | fpm | ATUALIZADA | R$ 220,8 bi (2024) | R$ 240,9 bi (2025) | https://www.tesourotransparente.gov.br/ckan/dataset/f85b6632-1c9c-4beb-9e60-72e91156c984/resource/b4058cb2-3bcd-4565-be68-c3a697c40819/download/fpm.csv | FPM bruto pelo Tesouro (líquido + retenção do Fundeb). 2024 dá 216,2 (2,1% abaixo do Multi Cidades); série 2018 a 2025 refeita. |
| Finanças | iptu | ATUALIZADA | R$ 73,4 bi (2024) | R$ 80,1 bi (2025) | https://multicidadesonline.com.br/receita/iptu/ | 2024 bateu (73,45). Série trocada pela publicada em R$ de 2025; recorte porte ficou em 2024. |
| Finanças | iss | [não encontrado] | R$ 105,8 bi (2024) | R$ 105,8 bi (mantido) | https://multicidadesonline.com.br/receita/iss/ | A fonte citada dá 138,75 para 2024; série sem fonte verificável. Corrigido o max do recorte concentração (25 para 50). |
| Finanças | dependencia | [não encontrado] | 68,0% (2024) | 68,0% (mantido) | https://apidatalake.tesouro.gov.br/ords/siconfi/tt/dca?an_exercicio=2025&no_anexo=DCA-Anexo%20I-C&id_ente=3550308 | Sem fonte publicada; reproduzir exige coleta de cerca de 5.570 municípios. |
| Finanças | despesa-pessoal | [não encontrado] | 52,4% (2024) | 52,4% (mantido) | https://apidatalake.tesouro.gov.br/ords/siconfi/tt/rgf?an_exercicio=2025&in_periodicidade=Q&nr_periodo=3&co_tipo_demonstrativo=RGF&no_anexo=RGF-Anexo%2001&co_esfera=M&co_poder=E&id_ente=3550308 | Mesmo motivo. Tendência corrigida de estavel para alta (+1,2%). |
| Finanças | receita-estadual-pc | ATUALIZADA | R$ 7.997 por hab. (2024) | R$ 8.637 por hab. (2025) | https://apidatalake.tesouro.gov.br/ords/siconfi/tt/dca?an_exercicio=2025&no_anexo=DCA-Anexo%20I-C&id_ente=35 (repetida para as 27 UFs) | 2024 reproduzido exato nas 27 UFs. 24 DCAs homologadas e 3 retificadas (PE, RJ, DF). Max do mapa para 18.000. |

## Mudanças aprovadas (20/10/2026)

Estas mudanças saem do padrão "só acrescentar o ano novo". Todas têm fonte oficial e foram aprovadas antes do commit:

1. **Rótulo trocado (exceção à regra 5):** no recorte `variacao` de `amazonia`, "Mato Grosso (ALTA)" virou "Mato Grosso" e "Roraima" virou "Roraima (ALTA)". Manter o rótulo antigo deixaria o painel dizendo que MT subiu quando caiu 46,7%. O recorte não alimenta mapa. A `dimensao` passou a "Variação 2025→2026". O recorte ganhou `"formato": "decimal"` e mostra uma casa decimal (Roraima, +0,35%, aparece como 0,4).
2. **Texto do campo `indicador` de `abandono-em`:** trocado de "3ª série" para "ensino médio (rede total)", porque a série existente só se reproduz assim. A `unidade` passou a "% dos matriculados no ensino médio (2025)".
3. **Títulos de recorte reescritos para não ficarem falsos:** `emprego-formal` (uf) passou a "Saldo de empregos em estados selecionados (2025)"; `populacao-carceraria` (uf) e `deficit-prisional` (ocupacao-uf) passaram a "estados selecionados".
4. **Históricos reescritos** com a série oficial, porque os pontos antigos não se reproduziam: BPC, CadÚnico, Bolsa Família (4 anos), vacinação, BCG, pré-natal, mortalidade materna, ensino médio, abandono, IDEB (anos iniciais e finais), homicídios, MVCI, feminicídios, população carcerária, déficit prisional, emprego formal, PNADC (4 estatísticas), PRODES, SEEG, domicílios próprios, aluguel, FPM e IPTU. Os valores antigos estão no backup e no histórico do Git.
5. **Definições escolhidas:** população carcerária em dezembro de cada ano; déficit prisional pelo critério Senappen (celas físicas; a alternativa do FBSP dá 281 mil); penetração do CadÚnico = pessoas cadastradas ÷ população IBGE 2026; Bolsa Família 2021 = Auxílio Brasil dez/2021 (14,5; o último mês do PBF antigo daria 14,7); FPM bruto pelo Tesouro.
6. **Mapa de coleta de lixo:** valores corrigidos de "domicílios em favelas" (tabela 10345) para "todos os domicílios" (tabela 6892). Brasil 96,8 passou a 91,7 e Maranhão 92,5 a 71,4.
7. **IDEB na rede total:** as três estatísticas usam a rede total em valor, série e recortes, com "rede total" explícito na unidade.

## Mapa de habitação: o dado já existe

O SIDRA já publicou os dois temas do Censo 2022 por UF:

- **Condição de ocupação:** tabela 9929, percentual pronto na variável 1000381 (próprio = c63/73554; alugado = c63/1055). Consulta testada: https://apisidra.ibge.gov.br/values/t/9929/n3/all/v/1000381/p/2022/c63/73554,1055/c1986/73103/c1988/73108 (Brasil: próprio 71,25%, alugado 22,23%; SP 67,41% próprio).
- **Favelas e comunidades urbanas:** tabela 9890 (variável 9913, c125/2932) dividida pelo total de domicílios da 9929 (v381, c63/95826). Consulta: https://apisidra.ibge.gov.br/values/t/9890/n3/all/v/9913/p/2022/c125/2932 (Amazonas 36,3%; Brasil 7,7%).

Isso destrava o mapa de habitação, mas exige criar uma estatística nova; por decisão de 20/10/2026, o mapa não foi criado nesta revisão. A documentação foi corrigida (a tabela 10345 não serve como denominador).

## Pendências

**Decisões editoriais**
- `distorcao`: redefinir (EF total ou EM total, números oficiais no relatório da área) ou manter sem atualização.
- `esf`: cortar a série em 2020 (última cobertura ESF oficial) ou trocar para "Cobertura Potencial da APS" (outro conceito).
- `estresse-hidrico`: redefinir com o Conjuntura 2025 ou retirar; o `fonte.url` atual dá 404.
- `disposicao-residuos`: corrigir os pontos antigos no conceito antigo (2020 60,2; 2021 60,5; 2022 61,1) ou abrir série no conceito novo da ABREMA. O recorte por região não bate com nenhum ano publicado.
- `mcmv`: definir fonte e conceito (sugestão: base aberta do MCID, que dá 816.017 em 2025); série 2018-2024 e recortes não conferem com fonte oficial.
- `iss`, `dependencia`, `despesa-pessoal`: séries sem fonte verificável. Para ISS, a série do Multi Cidades em R$ de 2025 está no relatório da área. Dependência e pessoal exigem coleta em lote no Siconfi (cerca de 4 h).
- `despesa-pessoal`: a nota e o recorte "limite" tratam 60% como limite do Executivo; pela LRF o limite do Executivo municipal é 54% (60% é o global).
- `deficit-habitacional`: o item "Adensamento excessivo" da composição não existe na metodologia da FJP; o recorte por renda (2022) tem faixas que não conferem com a FJP.
- `bolsa-familia`, recorte `valor-medio`: ficou em dez/2025; com o reajuste de out/2026, RS e RO saem do top 6 (trocar exigiria mudar rótulos).
- `iptu`, recorte `porte`: faixas não existem na fonte; ficou em 2024.
- `homicidios`: o ponto de 2013 (28,8) é do Atlas 2025, com a base populacional anterior.
- `emissoes`, recorte `brasil-mundo`: linhas "Mundo" sem fonte documentada.
- Recortes que não estão mais no topo, mas mantêm rótulos: ocupação prisional (PE, MS, AP lideram), população carcerária (PR e RS acima de PE).

**Próximas atualizações esperadas**
- PNADC trimestre jul-set/2026 e CAGED de setembro/2026 (fim de outubro): trocar os números conjunturais de trabalho.
- SEEG Coleção 14 (nov/dez 2026): trocar a série inteira de emissões.
- Vacinação e BCG 2025 são preliminares; reconferir em janeiro/2027.
- PRODES Amazônia 2026 consolidado (1º semestre de 2027).
- Mortalidade materna 2024 corrigida (SIDRA 6694) e nova projeção do IBGE para mortalidade infantil.
- Outubro/2026 do Bolsa Família e do CadÚnico é a folha em pagamento; pode ter pequena revisão.

**Documentação**
- `MAPAS-E-APIS.md` e `MANUTENCAO.md` §16 foram atualizados nesta revisão (anos dos mapas, IDEB pelas planilhas do INEP na rede total, coleta de lixo pela tabela 6892, dado de habitação do Censo 2022 já disponível).

## Validação

- Os 10 JSON abrem sem erro, com indentação de 2 espaços e UTF-8. Ids, títulos, temas, ordem, chaves e rótulos foram conferidos por script contra a versão anterior; a única troca de rótulo é a do item 1 acima.
- Todo recorte tem um único `max` e nenhum valor passa dele. Os 10 mapas nacionais mantêm as 27 UFs; os de Amazônia e Cerrado, os estados do bioma.
- Nenhum texto novo usa travessão, meia-risca ou a expressão vetada pela regra 7.
- Painel aberto localmente (`python -m http.server` na raiz, `/painel/`): 9 áreas, 30 temas e 45 estatísticas carregados; os 45 modais abrem; os 12 mapas renderizam com todas as UFs do recorte coloridas; nenhum erro no console. O cabeçalho mostra "Outubro de 2026".
