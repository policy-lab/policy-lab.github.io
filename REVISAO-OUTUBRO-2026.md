# Revisão trimestral do Painel CLEAR: outubro de 2026

Data: 20/10/2026. Escopo: as 45 estatísticas de `painel/data/*.json`, conferidas uma a uma contra a fonte oficial. Cada área foi revisada por um agente próprio, que só editou o arquivo da sua área. Os números novos e os pontos antigos mais sensíveis foram reconferidos na fonte (SIDRA, INEP, INPE, MDS, Siconfi, Atlas 2026).

Regras seguidas: nenhum número sem fonte oficial aberta; o último ponto de cada série foi reproduzido antes de acrescentar o ano novo; séries anuais só com ano completo; estatísticas mensais com o mês explícito; ids, títulos, estrutura e ordem mantidos.

Resumo das 45 estatísticas revisadas: **41 ATUALIZADA, 4 SEM DADO NOVO, 0 [não encontrado]**. A correção do `mcmv`, que tinha ficado pronta e não aplicada, entrou na terceira rodada. As 8 que tinham ficado como [não encontrado] foram resolvidas no mesmo dia (seção "Resolução das 8 estatísticas [não encontrado]") e passaram por mais duas rodadas de aprovações (seções "Aprovações da segunda rodada" e "Terceira rodada"). O painel passou a ter **46 estatísticas**, com uma nova de atenção primária (`equipes-esf`); a `cobertura-cadastro-aps` entrou na segunda rodada e foi retirada na terceira.

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
| Educação | distorcao | ATUALIZADA | 21,4% (2024) | 11,4% (2025) | https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/inep-data/estatisticas-censo-escolar (painel InepData, Indicadores, distorção idade-série, etapas anos iniciais + anos finais + ensino médio, classe comum) e https://download.inep.gov.br/informacoes_estatisticas/indicadores_educacionais/2025/TDI_2025_BRASIL_REGIOES_UFS.zip | A taxa conjunta EF+EM só sai no painel do INEP. A série antiga não se reproduz; série 2017-2025 refeita (20,4 a 11,4). Recorte por etapa em 2025. |
| Educação | analfabetismo | ATUALIZADA | 5,3% (2024) | 4,9% (2025) | https://apisidra.ibge.gov.br/values/t/7113/n1/all/n2/all/v/10267/p/all/c2/all/c58/2795,3302 | 2024 bateu. 2018 corrigido de 6,6 para 6,3. Recortes em 2025; 8,4 milhões de analfabetos. |
| Saúde | mortalidade-infantil | SEM DADO NOVO | 12,5 por mil (2023) | 12,5 por mil (2023) | https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx | Os 45 valores batem com o arquivo do IBGE. 2024 só existe como projeção; não entrou. Nota ajustada. |
| Saúde | mortalidade-materna | ATUALIZADA | 50,7 por 100 mil (2023) | 55,3 por 100 mil (2023) | https://apisidra.ibge.gov.br/values/t/6694/n1/all/v/9730 | Correção, sem ano novo: a série oficial corrigida (ODS 3.1.1) dá 2021 = 117,4, 2022 = 57,7 e 2023 = 55,3. 2024 corrigido ainda não saiu. |
| Saúde | vacinacao | ATUALIZADA | 96,3% (2024) | 93,1% (2025, preliminar) | https://infoms.saude.gov.br/extensions/SEIDIGI_DEMAS_VACINACAO_CALENDARIO_NACIONAL_COBERTURA_RESIDENCIA/index.html | 2024 oficial é 95,9; cinco anos antigos corrigidos. 2025 preliminar. Tendência: alta para queda. |
| Saúde | bcg | ATUALIZADA | 99,4% (2024) | 100,8% (2025, preliminar) | https://infoms.saude.gov.br/extensions/SEIDIGI_DEMAS_VACINACAO_CALENDARIO_NACIONAL_COBERTURA_RESIDENCIA/index.html (imunobiológico BCG) | Série antiga (98% a 100% em 2019-2023) não batia; fonte dá 75% a 90%. Max do recorte para 110. |
| Saúde | esf | SEM DADO NOVO (corrigida) | 65,4% (2024) | 63,6% (dez/2020) | https://relatorioaps.saude.gov.br/cobertura/ab | O Ministério da Saúde encerrou a série em dez/2020; 2021-2024 não tinham fonte e saíram. Série 2015-2020 e regiões pelo relatório oficial. A troca pela Cobertura Potencial da APS foi recusada; o tema ganhou duas estatísticas novas (abaixo). |
| Saúde | cobertura-cadastro-aps | RETIRADA | (não havia) | (retirada na terceira rodada; calculado: 83,1% em dez/2023) | https://relatorioaps-prd.saude.gov.br/cobertura/pns?unidadeGeografica=UF&nuCompInicio=202312&nuCompFim=202312 (campo qtTotalCadastroApsPaga) e https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx | Pessoas cadastradas em eSF e eAP ÷ população IBGE (projeções revisão 2024). Série 2020-2023; a série oficial parou em abr/2024. Mapa por UF: Piauí 102,6 a Amapá 63,0. Criada na segunda rodada e retirada na terceira: a série oficial de cadastros acabou em abr/2024 e a regra do Siaps de 2025 não emenda com ela. Valores guardados na seção "Terceira rodada". |
| Saúde | equipes-esf | NOVA | (não havia) | 26,9 por 100 mil hab. (dez/2025) | http://tabnet.datasus.gov.br/cgi/deftohtm.exe?cnes/cnv/equipebr.def e https://apisidra.ibge.gov.br/values/t/6579/n3/all/v/9324/p/2025 | 57.330 equipes de Saúde da Família no CNES. Série 2010-2025 com os códigos harmonizados. Mapa por UF: Piauí 41,5 a São Paulo 16,7. |
| Saúde | pre-natal | ATUALIZADA | 76,4% (2023) | 79,1% (2024) | http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinasc/cnv/nvuf.def | Nenhum ponto antigo batia com o Sinasc; série inteira recalculada. Raça pela cor da mãe (microdados 2024). |
| Assistência | bolsa-familia | ATUALIZADA | 18,9 milhões (abr/2026) | 19,3 milhões (out/2026) | https://aplicacoes.mds.gov.br/sagi/servicos/misocial?q=*:*&fq=anomes_s:202610&rows=0&wt=json&stats=true&stats.field=qtd_familias_beneficiarias_bolsa_familia_i&stats.field=valor_repassado_bolsa_familia_f&stats.facet=regiao&stats.facet=sigla_uf | Abr/2026 bateu (18.926.169). Pontos anuais = dezembro; 2018, 2020, 2021 e 2022 corrigidos. Recorte valor-medio ficou em dez/2025. |
| Assistência | bpc | ATUALIZADA | 6,0 milhões (2025) | 6,5 milhões (ago/2026) | https://aplicacoes.mds.gov.br/sagi/servicos/misocial?q=*:*&fq=anomes_s:202608&rows=0&wt=json&stats=true&stats.field=bpc_ben_i&stats.field=bpc_idoso_ben_i&stats.field=bpc_pcd_ben_i&stats.facet=regiao | Dez/2025 oficial é 6,4. Série trocada pelos valores de dezembro do MDS, mais 2026 (ago, último mês publicado). |
| Assistência | cadunico | ATUALIZADA | 41,7 milhões (2025) | 43,6 milhões (out/2026) | https://aplicacoes.mds.gov.br/sagi/servicos/misocial?q=*:*&fq=anomes_s:202610&rows=0&wt=json&stats=true&stats.field=cadun_qtd_familias_cadastradas_i&stats.field=cadun_qtd_pessoas_cadastradas_i&stats.facet=regiao&stats.facet=sigla_uf | Dez/2025 oficial é 41,8. Série trocada pelos valores de dezembro, mais 2026 (out). Penetração por UF recalculada. |
| Assistência | renda-media-uf | SEM DADO NOVO | R$ 2.001 (Censo 2022) | R$ 2.001 | https://apisidra.ibge.gov.br/values/t/10299/n1/all/n3/all/v/13502/p/2022/c2/6794/c629/32385/c58/95253 | Os 28 valores conferem com o SIDRA. |
| Saneamento | esgoto | ATUALIZADA | 59,7% (2023) | 62,3% (2024) | https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/saneamento/sinisa/resultados-sinisa/009_RELATORIO_SINISA_ESGOTAMENTO_SANITARIO_2025_defeso.pdf | 2023 bateu. Componentes e regiões em 2024; investimento R$ 28,3 bi em 2024. |
| Saneamento | lixo | ATUALIZADA | 92,0% (2024, estimativa) | 93,1% (2025, oficial) | https://apisidra.ibge.gov.br/values/t/6736/n1/all/n2/all/v/9784 | Série refeita com a PNADC oficial (2016 a 2025). Mapa UF corrigido: usava domicílios em favelas (tabela 10345); agora todos os domicílios (tabela 6892). Brasil 96,8 passou a 91,7. |
| Saneamento | disposicao-residuos | ATUALIZADA (conceito novo aprovado) | 60,3% (2023) | 59,7% (2024) | https://www.abrema.org.br/download/98191/?tmstv=1765215319 (Panorama 2025) | Conceito novo da ABREMA (% do encaminhado para disposição final), série 2023-2024. O 60,3 não se reproduzia em nenhum conceito. A quebra de série está explícita na nota. |
| Saneamento | energia | ATUALIZADA | 99,8% (2024, estimativa) | 99,8% (2025, oficial) | https://apisidra.ibge.gov.br/values/t/6737/n1/all/n2/all/v/5074 | Série refeita com a tabela oficial. Domicílios sem energia: 135 mil em 2025. |
| Trabalho | emprego-formal | ATUALIZADA | 1.279.498 (2025) | 1.270.556 (2025, com ajustes) | https://drive.google.com/file/d/1LFiRd5cYqCLbBv7udPWtus6h4cF3GaA0/view (MTE, tabelas do Novo CAGED de ago/2026, Tabela 5.1) | Saldos 2020 a 2025 revistos pelas declarações fora do prazo. Tendência: alta para queda. Conjuntura: jan-ago/2026 = +1.134.033. |
| Trabalho | desocupacao | ATUALIZADA | 5,6% (2025) | 5,6% (2025) | https://apisidra.ibge.gov.br/values/t/4562/n1/all/v/4099/p/all | Valor igual; 2014 a 2018, 2022 (9,6) e 2023 (7,7) revisados. Recortes passados todos para média anual. Conjuntura jun-ago/2026: 5,3%. |
| Trabalho | subutilizacao | ATUALIZADA | 14,6% (2025) | 14,5% (2025) | https://apisidra.ibge.gov.br/values/t/4677/n1/all/v/4118/p/all | Série misturava 4º trimestre e média anual; toda em média anual agora. Componentes corrigidos. |
| Trabalho | rendimento | ATUALIZADA | R$ 3.560 (2025) | R$ 3.560 (2025) | https://apisidra.ibge.gov.br/values/t/7444/n1/all/v/10774/p/all/c2/6794 | Valor igual; pontos 2014 a 2024 levados à mesma base (preços médios de 2025). |
| Trabalho | taxa-informalidade | ATUALIZADA | 38,5% (2025) | 38,1% (2025) | https://apisidra.ibge.gov.br/values/t/4708/n1/all/v/12466/p/all | Passou a média anual (o 38,5 era 4º trimestre). Tendência: estavel para queda. |
| Ambiente | amazonia | ATUALIZADA | 5.796 km² (2025, estimativa) | 3.335 km² (2026, estimativa) | https://data.inpe.br/biomasbr/wp-content/uploads/sites/3/2026/10/Nota_tecnica_EstimativaPRODES_AMZ_2026.pdf e https://terrabrasilis.dpi.inpe.br/app/prodes/dashboard/deforestation/files/rates2026.json | 2025 trocado pela taxa consolidada (5.731) e 2023 corrigido (9.064). Recortes UF e variação em 2026. |
| Ambiente | cerrado | ATUALIZADA | 7.235 km² (2025) | 5.517 km² (2026) | https://data.inpe.br/biomasbr/wp-content/uploads/sites/3/2026/10/NT_PRODESCerrado_2026_revisado.pdf | INPE revisou 2017 a 2020; corrigidos. Matopiba: 74,3%. |
| Ambiente | emissoes | ATUALIZADA | 2,3 bi t CO₂e (2023) | 2,1 bi t CO₂e (2024) | https://seeg.eco.br/wp-content/uploads/2025/12/Dados-nacionais-13.0.xlsx | Emissões brutas GWP-AR5. A Coleção 13 revisou a série inteira (2023 passou a 2,6); série toda trocada. |
| Ambiente | estresse-hidrico | ATUALIZADA (definição nova aprovada) | 23% das bacias (2023) | 2,3% da água disponível retirada (2024) | https://sidra.ibge.gov.br/tabela/7077 e https://biblioteca.ana.gov.br/sophia_web/Busca/Download?codigoArquivo=176389&tipoMidia=0 | Passou ao ODS 6.4.2. A definição antiga nunca foi publicada pela ANA. Indicador, unidade e nota dizem que a definição mudou; o recorte por região hidrográfica ficou. |
| Habitação | deficit-habitacional | SEM DADO NOVO | 5,77 milhões (2024) | 5,77 milhões (2024) | https://docs.google.com/spreadsheets/d/1AwlL17JBmASv8Jurnkb6zhfXc0fzGQwp/export?format=xlsx (FJP) | Sem 2025. Corrigidos 2016 a 2018, a composição de 2024 e o recorte UF (2022 para 2024); fonte em Junho/2026. |
| Habitação | mcmv | ATUALIZADA (corrigida na terceira rodada) | 880 mil (2025) | 821.337 (2025) | https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/bases-de-dados-do-programa-minha-casa-minha-vida | O 880 mil não se reproduz (soma arredondada da Agência Gov). Série 2018-2025 e recortes refeitos na base aberta do MCID; confere com a Secom (2023 e 2024) e com o PPA (2025). Os 816.017 da primeira contagem vinham de erro de leitura do script (seção "Terceira rodada"). |
| Habitação | domicilios-proprios | ATUALIZADA | 73,4% (2024) | 67,0% (2025) | https://apisidra.ibge.gov.br/values/t/6821/n1/all/v/9784/p/all/c63/all | Já pago + ainda pagando. 2024 oficial é 67,6; a série antiga estava acima do oficial em todos os anos e foi corrigida. |
| Habitação | aluguel | ATUALIZADA | 20,1% (2024) | 23,8% (2025) | https://apisidra.ibge.gov.br/values/t/6821/n1/all/v/9784/p/all/c63/1055 | 2024 oficial é 23,0; série corrigida. Max do recorte por região de 25 para 30. |
| Finanças | fpm | ATUALIZADA | R$ 220,8 bi (2024) | R$ 240,9 bi (2025) | https://www.tesourotransparente.gov.br/ckan/dataset/f85b6632-1c9c-4beb-9e60-72e91156c984/resource/b4058cb2-3bcd-4565-be68-c3a697c40819/download/fpm.csv | FPM bruto pelo Tesouro (líquido + retenção do Fundeb). 2024 dá 216,2 (2,1% abaixo do Multi Cidades); série 2018 a 2025 refeita. |
| Finanças | iptu | ATUALIZADA | R$ 73,4 bi (2024) | R$ 80,1 bi (2025) | https://multicidadesonline.com.br/receita/iptu/ | 2024 bateu (73,45). Série trocada pela publicada em R$ de 2025; recorte porte ficou em 2024. |
| Finanças | iss | ATUALIZADA (série refeita) | R$ 105,8 bi (2024) | R$ 157,5 bi (2025) | https://siconfi.tesouro.gov.br/siconfi/pages/public/consulta_finbra/finbra_list.jsf (FINBRA, Contas Anuais, Anexo I-C) e DCA do DF: https://apidatalake.tesouro.gov.br/ords/siconfi/tt/dca?an_exercicio=2025&no_anexo=DCA-Anexo%20I-C&id_ente=53 | ISSQN bruto dos municípios mais o DF. O 105,8 não se reproduz; 2024 passa a 142,6. Série 2018-2025 refeita. Confere com o Boletim da STN. Mapa novo: ISS per capita por UF. |
| Finanças | dependencia | ATUALIZADA (série refeita) | 68,0% (2024) | 65,6% (2025) | https://siconfi.tesouro.gov.br/siconfi/pages/public/consulta_finbra/finbra_list.jsf (FINBRA, Contas Anuais, Anexo I-C) | Razão agregada na receita bruta, conjunto dos municípios. 2024 = 65,9; a STN publica 65,8. Série 2018-2025 refeita. Mapa novo por UF (o DF fica sem cor). |
| Finanças | despesa-pessoal | ATUALIZADA (série refeita) | 52,4% (2024) | 45,3% (2025) | https://siconfi.tesouro.gov.br/siconfi/pages/public/consulta_finbra_rgf/finbra_rgf_list.jsf (FINBRA, RGF, Anexo 01, Executivo) | Média simples dos municípios, sem as declarações acima de 100% da RCL ou negativas. 2018 reproduz o ponto antigo (51,2); 2024 passa a 44,2. Faixas da LRF do Executivo e mapa por UF novos. |
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

## Resolução das 8 estatísticas [não encontrado] (20/10/2026)

Cada uma foi trabalhada por um agente próprio e os números finais foram reconferidos com scripts independentes (e, no caso da distorção, no próprio painel do INEP). O resultado só podia ser A (atualizada) ou B (sem dado novo publicado, com o valor corrigido quando não se reproduzia). Quando a fonte foi descontinuada ou mudou de conceito, a substituta oficial ficou como proposta e **não foi aplicada**.

### Educação: distorcao (A, atualizada)

- **Antes:** 21,4% (2024), série 26,0 a 21,4. Nada se reproduzia: a taxa EF+EM ponderada dá 12,5 em 2024 e a da rede pública, 14,1.
- **Agora:** 11,4% em 2025. Série 2017-2025: 20,4; 19,6; 18,4; 17,8; 16,3; 14,5; 13,5; 12,5; 11,4. Tendência: queda.
- **Fonte:** painel Estatísticas do Censo Escolar do INEP (InepData), página Indicadores, taxa de distorção idade-série, Brasil, todas as redes, classe comum, com anos iniciais, anos finais e ensino médio selecionados juntos: https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/inep-data/estatisticas-censo-escolar. Conferido no painel em 20/10/2026.
- **Recorte por etapa (2025):** ensino médio 16,0; anos finais 14,4; anos iniciais 6,6, das planilhas https://download.inep.gov.br/informacoes_estatisticas/indicadores_educacionais/2025/TDI_2025_BRASIL_REGIOES_UFS.zip.
- **Conferência:** a soma dos 5.570 municípios em classes comuns reproduz o EF oficial em todos os anos e a taxa conjunta em 8 de 9 anos (2025 dá 11,35).

### Saúde: esf (B, sem dado novo, corrigida)

- **Último dado publicado:** competência de dezembro de 2020. O relatório oficial se chama "Cobertura da Atenção Básica (2007 - 2020)": https://relatorioaps.saude.gov.br/cobertura/ab. A API devolve vazio a partir de 2021.
- **Por que acabou:** o Previne Brasil (Portaria 2.979/2019) trocou o indicador pela cobertura por cadastros (NT 418/2021-CGGAP/DESF/SAPS/MS, https://egestorab.saude.gov.br/image/?file=20211119_O_notacoberturaapspns_4413967205649403244.pdf), que acabou em abril de 2024 com a Portaria GM/MS 3.493/2024. Hoje vale a Cobertura Potencial Estimada da APS (NT 2/2025-SAPS/MS, https://egestorab.saude.gov.br/image/?file=20250407_O_SEI0047071175NT022025CoberturaPotencialEstimadadaAPSnoSUS_7580492751288227022.pdf).
- **Correção:** o 65,4 de 2024 e os pontos de 2021 a 2024 não tinham fonte e saíram. Valor: 63,6 (dezembro de 2020). Série 2015-2020, por dezembro: 62,5; 62,6; 63,9; 64,2; 64,5; 63,6 (conferida na API https://relatorioaps-prd.saude.gov.br/cobertura/ab?unidadeGeografica=BRASIL&nuCompInicio=201512&nuCompFim=202012). Regiões em dezembro de 2020: Nordeste 82,3; Norte 64,7; Centro-Oeste 65,3; Sul 63,7; Sudeste 51,0. População coberta: 133,7 milhões. Tendência: alta para queda.

### Saneamento: disposicao-residuos (B, sem dado novo, corrigida)

- **Último dado no conceito do painel** (% das toneladas coletadas que vão para aterro sanitário): 61,1% em 2022, Panorama 2023 da ABREMA, Figura 3.9 (43,8 milhões de toneladas em aterro sanitário de 71,7 milhões coletadas): https://www.abrema.org.br/download/92323/?tmstv=1709314789. A partir do Panorama 2024 a ABREMA divide pelo total encaminhado à disposição final e desaconselha comparar com os anos anteriores.
- **Correção:** o 60,3 de 2023 não se reproduz (no conceito antigo, 2023 dá 53,7). Série corrigida pela edição de cada ano-base: 2010 57,6; 2014 58,4; 2016 58,4; 2018 59,5; 2020 60,2; 2021 60,5; 2022 61,1. Regiões em 2022 (Figura 3.10): Sudeste 74,3; Sul 71,6; Centro-Oeste 43,6; Norte 36,6; Nordeste 37,3. Tendência: estavel (+0,99%).

### Ambiente: estresse-hidrico (B, sem correção possível)

- A definição do painel (% das unidades de gestão com demanda acima de 40% ou 100% da disponibilidade, "270 UGHs") não aparece em nenhuma edição do Conjuntura de 2017 a 2025. A ANA usa 12 regiões hidrográficas e 64 UGRHs. Sem definição oficial, não há como corrigir o 23%.
- **Aplicado:** só o `fonte.url`, que dava 404 (novo: https://www.gov.br/ana/pt-br/centrais-de-conteudos/publicacoes/conjuntura-dos-recursos-hidricos), e o formato de `ultimaAtualizacao`.
- **Substituta (precisa de aval):** ver a lista de propostas abaixo.

### Habitação: mcmv (A, corrigida; aplicada na terceira rodada)

- **O 880 mil não se reproduz.** Vem de matéria da Agência Gov de 15/01/2026 que soma 660 mil (Faixas 1 e 2) + 190 mil + 30 mil arredondados; as Faixas 1 e 2 dão 585 mil na base oficial.
- **Agora:** 821.337 contratações em 2025 (152.784 subsidiadas pelo OGU + 668.553 financiadas pelo FGTS e Fundo Social), na base aberta do Ministério das Cidades: https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/bases-de-dados-do-programa-minha-casa-minha-vida. A mesma base dá 491.209 em 2023 (Secom: 491 mil) e 722.883 em 2024 (Secom: 725 mil); o monitoramento do PPA dá 813.906 em 2025.
- **Série 2018-2025:** 547.410; 393.019; 387.902; 353.444; 383.367; 491.209; 722.883; 821.337. Recortes recalculados na mesma base: regiões 2023-2025 (mil) 869 / 502 / 355 / 225 / 84; estados 592 / 177 / 146 / 146 / 138 / 99; faixas 2025: 585 / 200 / 30.
- totalAbsoluto passou a R$ 134,6 bilhões contratados em 2025; destaque passou à meta de 2 milhões batida antes do prazo (nota do MCID de 23/01/2026). A nota trata o Casa Verde e Amarela (2020 a 2023) em vez de "suspenso".

### Finanças: iss, dependencia e despesa-pessoal (A, séries refeitas)

As três foram recalculadas com o **download consolidado do FINBRA** (um arquivo por exercício com todos os municípios), feito pelo usuário em 20/10/2026, porque a API do Siconfi tem limite de 1 requisição por segundo e bloqueou o acesso. O método está em `MANUTENCAO.md`, seção 17.

**Arquivos usados** (identificados pelo cabeçalho de cada CSV; quando o mesmo exercício e período veio duas vezes, foi usado o mais recente):

| Tipo | Exercícios | Municípios por ano |
|---|---|---|
| Contas Anuais, Receitas Orçamentárias (Anexo I-C), Municípios | 2018 a 2025 | 5.536; 5.553; 5.559; 5.562; 5.557; 5.557; 5.546; 5.502 |
| RGF, Anexo 01, Executivo, tabela "DTP e Apuração do Cumprimento do Limite Legal", 3º quadrimestre + 2º semestre | 2018 a 2025 | 5.534; 5.545; 5.541; 5.556; 5.556; 5.555; 5.545; 5.525 |

Não faltou nenhum arquivo. Vieram repetidos, com conteúdo idêntico, o RGF de 2022 (3º quadrimestre) e o de 2020 (2º semestre). Os municípios ausentes em cada ano são os que não entregaram. Para 2025, o FINBRA foi comparado com o que a API já tinha baixado: 509.636 linhas da DCA e 7.135 valores do RGF idênticos.

- **iss:** soma do ISSQN bruto (coluna "Receitas Brutas Realizadas"; conta 1.1.1.8.02.3 até 2021 e 1.1.1.4.51.1 depois) dos municípios mais o DF (DCA na API, `id_ente=53`), em R$ bilhões correntes.
  - O 105,8 de 2024 não se reproduz em nenhuma variante (todas entre 138 e 143). A conta bruta é a do Boletim de Finanças dos Entes Subnacionais 2025 da STN (Tabela 15: ISS municipal de 138.954 milhões em 2024; os 5.541 municípios comuns dão 139.096 no bruto e 138.430 no líquido): https://www.tesourotransparente.gov.br/publicacoes/boletim-de-financas-dos-entes-subnacionais/2025/114.
  - Série antigo -> novo: 2018 64,5 -> 64,0; 2019 70,2 -> 72,6; 2020 73,1 -> 73,0; 2021 82,4 -> 90,3; 2022 93,8 -> 107,9; 2023 102,5 -> 123,4; 2024 105,8 -> 142,6; 2025 157,5. Alta nominal de 10,5% em 2025 (real de 5,2% pelo IPCA médio).
  - Recortes de 2025: porte (ISS ÷ receita corrente) 21,7 / 10,1 / 5,0 / 2,7, com max de 15 para 25; concentração: São Paulo 25,1; Rio 6,1; BH 2,1; Brasília 2,5; outras capitais 14,6; demais 49,7.
  - Em 2018, municípios lançaram R$ 1,1 bilhão de ISS (1,8%) na conta do ICMS; fica fora da série, como declarado.
- **dependencia:** soma das transferências correntes ÷ soma das receitas correntes do conjunto dos municípios, na receita bruta (decisão do usuário).
  - Série antigo -> novo: 2018 67,2 -> 66,5; 2019 67,5 -> 66,0; 2020 70,1 -> 68,5; 2021 69,4 -> 68,0; 2022 68,5 -> 66,5; 2023 67,8 -> 65,2; 2024 68,0 -> 65,9; 2025 65,6. Tendência: estavel.
  - Conferência com a STN (Boletins 2023 a 2025): 2021 67,6; 2022 66,2 e 66,3; 2023 65,0; 2024 65,8. A série nova fica de 0,1 a 0,4 ponto acima (a STN usa só municípios com os dois anos da tabela).
  - Recortes de 2025 na mesma conta: porte 86,0 / 77,2 / 62,4 / 44,6; regiões Norte 78,9, Nordeste 79,5, Centro-Oeste 67,5, Brasil 65,6, Sul 61,8, Sudeste 57,2. "Média" saiu da unidade, da nota e dos títulos dos recortes.
- **despesa-pessoal** (versão da primeira rodada, substituída pela média simples na segunda rodada): soma da despesa total com pessoal do Executivo ÷ soma da RCL ajustada.
  - Regra do usuário: usar a conta que batesse com o número oficial da STN para municípios. A STN só publica o percentual das 26 capitais e a mediana delas (44,22% em 2024, Boletim 2025, Gráfico 33, p. 55), que os nossos dados reproduzem exatamente; não há número nacional. Por isso ficou a razão agregada, com a diferença registrada: em 2024, agregada 42,4; média simples 44,8; mediana nacional 43,9; mediana das capitais 44,22.
  - Série antigo -> novo: 2018 51,2 -> 47,8; 2019 52,1 -> 46,4; 2020 50,4 -> 45,8; 2021 49,8 -> 42,9; 2022 50,6 -> 43,0; 2023 51,8 -> 44,4; 2024 52,4 -> 42,4; 2025 42,5. Tendência: alta para estavel.
  - Recortes de 2025: porte 45,3 / 45,7 / 43,3 / 37,3; situação na LRF, contada pelos rótulos atuais: 154 acima de 60%, 303 entre 54% e 60%, 5.068 abaixo.
  - Nota, destaque e totalAbsoluto corrigidos: o limite do Executivo municipal é 54% da RCL (60% é o do município), alerta 48,6% e prudencial 51,3%. Em 2025, 457 municípios estavam acima de 54% e 925 acima de 51,3%.
  - Achado: a média simples de 2018 (51,2) é igual ao ponto antigo de 2018; a série antiga parece ter começado como média simples, mas os anos seguintes não se reproduzem.

### Decisões tomadas pelo coordenador, sem o usuário (20/10/2026)

1. **ISS na receita bruta**, não na líquida: é a única coerente com o Boletim da STN e a mesma conta da `dependencia`.
2. **Despesa com pessoal sobre a RCL ajustada** (o denominador legal do limite). Na segunda rodada o usuário trocou a razão agregada pela média simples e mandou excluir as declarações acima de 100% ou negativas.
3. **Faixas da LRF**: "acima de 54%" é estritamente maior que 54% (um município declarou exatamente 54,00%).
4. `ultimaAtualizacao` das três de finanças: "Outubro/2026 (dados de 2025)", data do download consolidado (o Siconfi aceita entregas e retificações depois do prazo).
5. `distorcao`: `fonte.url` aponta para o painel do InepData, onde está a taxa conjunta.
6. `esf`: valor anual = dezembro (regra da nota metodológica do MS); `ultimaAtualizacao` "Março/2021", primeiro mês em que o dado de dezembro de 2020 aparece publicado.
7. `disposicao-residuos`: em anos com dois valores publicados, vale a edição cujo ano-base é aquele ano (2022 pelo Panorama 2023, corrigido pelo Censo).
8. `mcmv`: soma das bases Subsidiado e Financiado, incluindo as unidades sem faixa informada (sem elas 2023 não bate com a Secom).
9. Nenhuma das três de finanças tinha recorte por UF; criar um mudaria a estrutura. Os mapas por UF ficaram calculados como proposta.

### Propostas que precisavam de aval (decididas na segunda rodada, abaixo)

Os objetos completos estão prontos para aplicar, se aprovados.

- **esf: trocar pela Cobertura Potencial da APS** (relatório https://relatorioaps.saude.gov.br/cobertura/aps). 99,1% em dezembro de 2025; série 2021-2025: 87,9; 87,8; 97,2; 101,7; 99,1. Conta todas as equipes de APS, mede capacidade (3.500 pessoas por eSF) e passa de 100%; não emenda com a série até 2020.
- **disposicao-residuos: abrir série no conceito novo da ABREMA** (% do encaminhado à disposição final): 2023 58,5; 2024 59,7; regiões 2024: Sudeste 71,3; Sul 68,9; Centro-Oeste 45,8; Nordeste 44,7; Norte 38,7. Panorama 2025: https://www.abrema.org.br/download/98191/?tmstv=1765215319.
- **estresse-hidrico: trocar pelo ODS 6.4.2** (retirada de água ÷ disponibilidade), SIDRA 7077 (https://sidra.ibge.gov.br/tabela/7077) e relatório ODS 6 no Brasil da ANA (https://biblioteca.ana.gov.br/sophia_web/Busca/Download?codigoArquivo=176389&tipoMidia=0). 2,3% em 2024; série 2015-2024: 2,4; 2,4; 2,3; 2,4; 2,5; 2,2; 2,3; 2,3; 2,3; 2,3. Recorte 2024 com os rótulos atuais: Atlântico Nordeste Oriental 59,9; Parnaíba 6,6; São Francisco 30,4; Paraná 6,6; Brasil 2,3; Amazônica 0,2. O número cai de 23 para 2,3 porque a definição muda. Se não for aprovada, a recomendação é retirar a estatística.
- **despesa-pessoal: faixas da LRF do Executivo** no recorte "limite" (2025): acima de 54%, 457; de 51,3% a 54%, 468; de 48,6% a 51,3%, 715; abaixo de 48,6%, 3.885 (Multi Cidades 2025: 449 / 468 / 710 / 3.847).
- **Mapas por UF de 2025 para iss, dependencia e despesa-pessoal** (recorte novo `uf`, nomes por extenso como nos outros mapas):
  - iss per capita: de São Paulo (R$ 1.488) e DF (1.289) a Acre (264) e Amapá (253); 27 UFs.
  - dependencia: de Maranhão (85,4) a São Paulo (49,0); 26 UFs, porque o DF não tem municípios.
  - despesa-pessoal: de Amapá (53,4) a São Paulo (35,5); 26 UFs.

## Aprovações da segunda rodada (20/10/2026)

O usuário decidiu as propostas da primeira rodada e pediu duas estatísticas novas. O que foi aplicado:

1. **esf:** a troca pela Cobertura Potencial da APS foi recusada. A estatística fica com a série oficial até 2020 (63,6%); o destaque e a nota dizem que o Ministério da Saúde encerrou a série em dezembro de 2020.
2. **cobertura-cadastro-aps (nova, tema Atenção primária):** pessoas com cadastro individual em equipes de Saúde da Família e de Atenção Primária financiadas pelo Ministério, em % da população, na competência de dezembro.
   - Brasil: 57,3 (2020); 72,2 (2021); 78,1 (2022); **83,1 (2023)**. Em dez/2023, 175.958.504 cadastrados sobre 211.695.158 habitantes.
   - Maior UF: **Piauí, 102,6%**; menor: **Amapá, 63,0%**. Piauí, Santa Catarina e Tocantins passam de 100% (cadastros duplicados ou desatualizados); os valores foram mantidos e a limitação está na nota. Regiões: Sul 92,0; Nordeste 90,2; Centro-Oeste 82,1; Sudeste 77,0; Norte 76,4.
   - Fonte: relatório Cobertura da Atenção Primária (PNS 2020-2023), campo `qtTotalCadastroApsPaga`, https://relatorioaps.saude.gov.br/cobertura/pns (API: https://relatorioaps-prd.saude.gov.br/cobertura/pns?unidadeGeografica=UF&nuCompInicio=202312&nuCompFim=202312). Método: Nota Técnica 418/2021-CGGAP/DESF/SAPS/MS.
   - Por que para em 2023: a série de cadastros vai até abr/2024 (fim da capitação, Portaria GM/MS 3.493/2024). O Siaps conta pessoas cadastradas com outra regra desde jan/2025 (Nota Técnica 30/2025-CGESCO/DESCO/SAPS/MS), que recomeçou do zero e não emenda.
   - População: projeções do IBGE, revisão 2024 (https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx), série única compatível com o Censo 2022 e igual às estimativas oficiais de 2024 e 2025. Decisão do coordenador: misturar as estimativas de 2020 e 2021 (base Censo 2010) com o Censo 2022 criaria um salto falso de cerca de 4 pontos em 2022 (2023 daria 86,6).
3. **equipes-esf (nova, tema Atenção primária):** equipes de Saúde da Família no CNES por 100 mil habitantes, em dezembro.
   - Brasil: 16,7 (2010) até **26,9 (2025)**: 57.330 equipes ÷ 213.421.037 habitantes. Série: 16,7; 17,1; 17,5; 18,3; 19,9; 20,5; 20,6; 21,3; 21,5; 21,8; 23,7; 24,2; 24,6; 25,6; 26,5; 26,9.
   - Maior UF: **Piauí, 41,5** (1.404 equipes); menor: **São Paulo, 16,7** (7.682 equipes). Regiões: Nordeste 34,3; Norte 30,1; Sul 26,6; Centro-Oeste 25,2; Sudeste 21,8.
   - Fonte: TabNet do CNES, Equipes de Saúde (http://tabnet.datasus.gov.br/cgi/deftohtm.exe?cnes/cnv/equipebr.def), conferido com o microdado do FTP do DATASUS (mesmo total) e com o número de eSF do Ministério (relatórios de cobertura). População: projeções do IBGE revisão 2024 até 2023 e SIDRA 6579 em 2024 e 2025.
   - Códigos harmonizados: até abril de 2020, os tipos de eSF 01 a 03, 12 a 15, 24 a 39 (inclui ribeirinha, fluvial e transitória); depois, o código 70 (Portarias SAES/MS 99/2020 e 37/2021) mais as poucas equipes que ficaram nos códigos antigos. A alta de 2019 para 2020 (21,8 para 23,7) inclui cerca de 2,2 mil equipes de agentes comunitários reclassificadas como eSF; está na nota.
4. **disposicao-residuos:** passou ao conceito novo da ABREMA (% do encaminhado para disposição final): 58,5 (2023) e **59,7 (2024)**; regiões 2024: Sudeste 71,3; Sul 68,9; Centro-Oeste 45,8; Nordeste 44,7; Norte 38,7. Conferido no Panorama 2025 (41.603.753 t em aterro sanitário; 28.106.376 t, 40,3%, em lixões e aterros controlados). A nota diz que há quebra de série em 2023 e lista a série antiga (2010 a 2022, até 61,1%).
5. **estresse-hidrico:** passou ao ODS 6.4.2: **2,3% em 2024**, série 2015-2024 do SIDRA 7077; o recorte por região hidrográfica ficou, com os valores de 2024 do relatório ODS 6 da ANA. Indicador, unidade e nota dizem que a definição mudou em outubro de 2026 e que os números antigos (23%) não são comparáveis.
6. **despesa-pessoal:** média simples dos municípios em toda a série, sem as declarações de despesa com pessoal acima de 100% da RCL ajustada ou negativas (erro de declaração). Excluídos: 1 em 2018, 6 em 2019, 3 em 2020, 29 em 2021, 24 em 2022 (um negativo, Magé/RJ), 22 em 2023, 26 em 2024 e 26 em 2025.
   - Série: **51,2 (2018, igual ao ponto antigo)**; 49,6; 49,4; 46,9; 46,1; 47,7; 44,2; **45,3 (2025)**. Tendência: alta. Com os excluídos, 2025 daria 46,2.
   - Faixas da LRF do Executivo em 2025 (base limpa): acima de 54%, 431; de 51,3% a 54%, 468; de 48,6% a 51,3%, 715; abaixo de 48,6%, 3.885. A aprovação citava 457 para a primeira faixa, que é a contagem com os 26 excluídos.
   - Porte: até 20 mil 44,8; 20 a 100 mil 47,0; 100 a 500 mil 44,9; acima de 500 mil 41,4. Mapa por UF (média dos municípios): Sergipe 55,5 a Mato Grosso 40,3; 26 UFs, o DF fica sem cor.
7. **Mapas por UF de iss e dependencia:** aplicados como propostos. ISS per capita de 2025: São Paulo R$ 1.488, DF 1.289, até Amapá 253; Brasil 738 (ISS 157,5 bi ÷ 213,4 milhões de habitantes, SIDRA 6579). Dependência: Maranhão 85,4 até São Paulo 49,0; o DF fica sem cor.
8. **mcmv: não aplicado.** O usuário pediu para aplicar só se a diferença entre 821.337 e os 816.017 citados antes fosse de recorte ou de data de extração. Não é: os dois números saem dos mesmos arquivos (base Subsidiado de 30/06/2026 e Financiado de 24/07/2026) e do mesmo recorte. O script da primeira revisão lia quantidades com separador de milhar sem vírgula decimal como número decimal: "3.825" (Porto Alegre, FAR Compra Assistida) virou 3,825 e "1.500" (Canoas, FAR) virou 1,5. Isso tirou exatamente 5.320 unidades do subsidiado de 2025 (147.464 em vez de 152.784). O 821.337 é a soma correta; o painel continua com 880 mil até a decisão. Aplicado na terceira rodada (abaixo).

A contagem de estatísticas passou de 45 para 47 no cabeçalho do painel (`painel/index.html`), no portal (`index.html`), no `README.md` e no `INSTRUCOES-UPLOAD.md`; o cabeçalho também é recalculado a partir dos dados quando a página carrega. O `manifesto.json` não tem contagem.

## Terceira rodada (20/10/2026)

O usuário decidiu as duas questões que tinham ficado abertas.

1. **mcmv: correção aplicada.** 821.337 unidades contratadas em 2025 (152.784 subsidiadas pelo OGU + 668.553 financiadas pelo FGTS e Fundo Social), com a série 2018-2025 e os recortes da base aberta do Ministério das Cidades (Subsidiado de 30/06/2026 e Financiado de 24/07/2026): https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/bases-de-dados-do-programa-minha-casa-minha-vida. Antes de aplicar, os oito pontos da série, os três recortes e a soma de 2023 a 2025 (2.035.429) foram reconferidos na base.
   - Série: 547.410; 393.019; 387.902; 353.444; 383.367; 491.209; 722.883; **821.337**. Tendência: alta (+13,6% sobre 2024).
   - Recortes, em milhares: regiões 2023-2025, Sudeste 869, Nordeste 502, Sul 355, Centro-Oeste 225, Norte 84; estados 2023-2025, São Paulo 592, Minas Gerais 177, Rio Grande do Sul 146, Paraná 146, Goiás 138, Bahia 99; faixas em 2025, Faixas 1 e 2 585, Faixa 3 200, Faixa 4 30.
   - Também mudaram:
     - destaque: meta de 2 milhões de contratações batida um ano antes do prazo de 2026;
     - totalAbsoluto: R$ 134,6 bilhões contratados em 2025; 2,04 milhões de unidades em 2023-2025;
     - fonte: nome, link das bases e "Julho/2026 (dados de 2025)";
     - nota: saíram o "≠", o travessão, a "Faixa 4 criada em 2024" (foi em 2025) e os "923,9 mil entregues", que não tinham fonte; o "suspenso em 2020-2022" virou o período do Casa Verde e Amarela.
   - **Explicação da diferença (também na nota da estatística):**
     - **880 mil para 821.337.** O 880 mil era a soma arredondada divulgada pela Agência Gov: 660 mil nas Faixas 1 e 2, 190 mil na Faixa 3 e 30 mil na Faixa 4. A base oficial tem 585 mil nas Faixas 1 e 2. O total de 2025 da base fica 0,9% acima do monitoramento do PPA (813.906, posição de dez/2025), diferença coerente com contratos registrados depois. A série antiga de 2018 a 2024 (312 mil a 680 mil) também não conferia com fonte oficial.
     - **816.017 para 821.337.** O script da primeira rodada lia "3.825" (Porto Alegre, FAR Compra Assistida) e "1.500" (Canoas, FAR) como 3,825 e 1,5 unidades. Isso tirava 5.320 unidades do subsidiado de 2025, que ficava em 147.464 em vez de 152.784. Os arquivos e o recorte são os mesmos; só a leitura do número mudou.
2. **cobertura-cadastro-aps: retirada.** A série oficial de cadastros acabou em abril de 2024: era o relatório Cobertura da Atenção Primária (PNS 2020-2023), e a capitação terminou com a Portaria GM/MS 3.493/2024. A regra do Siaps de 2025 (Nota Técnica 30/2025-CGESCO/DESCO/SAPS/MS) conta cadastros com outro critério e não emenda com ela. A frase da nota da `esf` que apontava para ela agora aponta só para `equipes-esf`. O objeto completo (série, recortes, fonte e nota) fica no commit 1efcbf0, em `painel/data/saude.json`.

   **Valores calculados, para uso futuro.**
   - Numerador: pessoas com cadastro individual em eSF e eAP financiadas (campo `qtTotalCadastroApsPaga`), na competência de dezembro. API: https://relatorioaps-prd.saude.gov.br/cobertura/pns?unidadeGeografica=UF&nuCompInicio=202312&nuCompFim=202312.
   - Denominador: população das projeções do IBGE, revisão 2024: https://ftp.ibge.gov.br/Projecao_da_Populacao/Projecao_da_Populacao_2024/projecoes_2024_tab4_indicadores.xlsx.
   - Método: Nota Técnica 418/2021-CGGAP/DESF/SAPS/MS, sem teto por município.
   - **Brasil:** 57,3 (2020); 72,2 (2021); 78,1 (2022); 83,1 (2023).
     - Em dez/2023 eram 175.958.504 cadastrados (162,3 milhões em eSF e 13,7 milhões em eAP) sobre 211.695.158 habitantes.
     - O indicador oficial do PNS dava 79,7% em dez/2023, porque limita os cadastros à população de cada município e usa a estimativa de 2021.
   - **Regiões, dez/2023:** Sul 92,0; Nordeste 90,2; Centro-Oeste 82,1; Sudeste 77,0; Norte 76,4.
   - **UFs, dez/2023:** Piauí 102,6; Santa Catarina 100,9; Tocantins 100,9; Sergipe 98,9; Ceará 98,8; Paraíba 98,0; Minas Gerais 94,8; Paraná 93,7; Mato Grosso do Sul 92,9; Rio Grande do Norte 88,1; Maranhão 88,0; Espírito Santo 87,7; Mato Grosso 86,7; Bahia 85,5; Roraima 85,0; Alagoas 84,4; Rondônia 84,4; Rio Grande do Sul 84,0; Pernambuco 83,7; Acre 83,2; Goiás 79,5; Amazonas 77,2; Distrito Federal 72,2; Rio de Janeiro 71,4; São Paulo 70,0; Pará 69,8; Amapá 63,0. Os três acima de 100% indicam cadastros duplicados ou desatualizados.
   - Pela regra nova do Siaps, dez/2025 dá 55,3% (a aba está desligada na página pública). Esse número não se compara com a série acima.
3. **Contagem e documentação:**
   - O painel volta a 46 estatísticas (9 áreas, 30 temas) no cabeçalho (`painel/index.html`), no portal (`index.html`), no `README.md` (dois lugares) e no `INSTRUCOES-UPLOAD.md`. O `manifesto.json` não tem contagem e não mudou.
   - Os mapas passam de 17 para 16. `MAPAS-E-APIS.md` (quadro-resumo, estado atual e receita do SISAB) e `MANUTENCAO.md` (seções 16 e 18) dizem que a estatística foi retirada e guardam a receita de coleta.

## Pendências

**Decisões editoriais**
- `mcmv`: o PPA cita 44.001 unidades do "MCMV Fundo Social" para a classe média, contra 29.969 da Faixa 4 na base sintética; separar as duas exigiria a base analítica (cerca de 200 MB). Os números do MCID por região e UF de janeiro de 2026 (2.114.284 de 2023 a jan/2026) não se reproduzem na base no Nordeste e no Norte; o MCID não publica a regra de contagem usada ali.
- `cobertura-cadastro-aps` (retirada): o Siaps publica cadastros pela regra nova desde jan/2025 (55,3% em dez/2025), mas a aba está desligada na página pública e a série não emenda com a antiga. Se a série nova ficar aberta e estável, pode virar uma estatística nova, sem emendar com 2020-2023 (valores guardados na seção "Terceira rodada").
- `equipes-esf`: a alta de 2020 mistura expansão e reclassificação de equipes de agentes comunitários; a nota explica. O TabNet também tem 2007 a 2009, se quiserem estender a série.
- Mapas de `dependencia` e `despesa-pessoal`: o DF fica sem cor porque não tem municípios.
- `iss`, recorte `concentracao`: o rótulo "Demais 5.500+ municípios" corresponde a 5.476 municípios com DCA em 2025.
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

**Próximas atualizações das 8 resolvidas**
- FINBRA: baixar de novo as Contas Anuais e o RGF de 2025 em 2027 (retificações entram depois do prazo) e os de 2026 a partir de fevereiro (RGF) e maio (Contas Anuais) de 2027.
- Boletim de Finanças dos Entes Subnacionais 2026 (dados de 2025), ainda não publicado: conferir `dependencia` e `iss` de 2025.
- INEP: taxas de distorção do Censo Escolar 2026 (início de 2027). ABREMA: Panorama 2026. Base aberta do MCMV com 2026 completo (início de 2027).

**Documentação**
- `MAPAS-E-APIS.md` e `MANUTENCAO.md` §16 foram atualizados nesta revisão (anos dos mapas, IDEB pelas planilhas do INEP na rede total, coleta de lixo pela tabela 6892, dado de habitação do Censo 2022 já disponível).
- `MANUTENCAO.md` ganhou a seção 17: como baixar e conferir o FINBRA consolidado (Contas Anuais e RGF) e como cada estatística de finanças municipais é calculada.
- Terceira rodada: `MAPAS-E-APIS.md` e `MANUTENCAO.md` (seções 16 e 18) registram a retirada da `cobertura-cadastro-aps` e passam a 16 mapas; a receita do SISAB ficou guardada.

## Validação

- Os 10 JSON abrem sem erro, com indentação de 2 espaços e UTF-8. Ids, títulos, temas, ordem, chaves e rótulos foram conferidos por script contra a versão anterior; a única troca de rótulo é a do item 1 acima.
- Todo recorte tem um único `max` e nenhum valor passa dele. Os 10 mapas nacionais mantêm as 27 UFs; os de Amazônia e Cerrado, os estados do bioma.
- Nenhum texto novo usa travessão, meia-risca ou a expressão vetada pela regra 7.
- Painel aberto localmente (`python -m http.server` na raiz, `/painel/`): 9 áreas, 30 temas e 45 estatísticas carregados; os 45 modais abrem; os 12 mapas renderizam com todas as UFs do recorte coloridas; nenhum erro no console. O cabeçalho mostra "Outubro de 2026".
- Depois da resolução das 8 (20/10/2026): os 10 JSON abrem; o validador acusa só as exceções já aprovadas (PRODES 2026, ciclo agosto-julho completo; valor do MVCI, que é média). Painel testado de novo: 9 áreas, 30 temas, 45 modais abrindo com o valor certo, 12 mapas (10 com as 27 UFs, Amazônia com 9 e Cerrado com 6), console sem erros. As 8 estatísticas mostram o valor, a série e os recortes novos.
- Depois da segunda rodada: os 10 JSON abrem; o validador acusa só o esperado (as duas estatísticas novas, os recortes `uf` novos de `iss`, `dependencia` e `despesa-pessoal`, os rótulos novos das faixas da LRF e as exceções do PRODES). Painel testado: 9 áreas, 30 temas, 47 estatísticas; os 47 modais abrem com o valor certo; 17 mapas renderizam (13 com as 27 UFs, `dependencia` e `despesa-pessoal` com 26 e o DF sem cor, Amazônia com 9 e Cerrado com 6); console sem erros; cabeçalho com 47 estatísticas.
- Depois da terceira rodada: os 10 JSON abrem. Por id, contra a versão anterior, só mudaram o `mcmv` (valor, destaque, totalAbsoluto, série, recortes, fonte e nota) e a nota da `esf`, e saiu a `cobertura-cadastro-aps`. O validador por posição acusa o deslocamento de `equipes-esf` e `pre-natal` dentro do tema, que é efeito da retirada, além das exceções já conhecidas (PRODES 2026; DF sem cor em `dependencia` e `despesa-pessoal`). Todo recorte do `mcmv` fica dentro do `max`, e a nota não tem travessão nem "≠". Painel testado: 9 áreas, 30 temas, 46 estatísticas; os 46 modais abrem com o valor certo (`mcmv` mostra 821.337); 16 mapas renderizam (12 com as 27 UFs, `dependencia` e `despesa-pessoal` com 26, Amazônia com 9 e Cerrado com 6); console sem erros; cabeçalho e portal com 46 estatísticas.
