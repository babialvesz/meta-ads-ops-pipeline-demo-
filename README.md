# 🚀 Pipeline de Governança Operacional de Meta Ads (Demo)

Um framework operacional estruturado para gestão de campanhas do Meta Ads 
usando Google Sheets + Google Apps Script.

Este repositório contém uma versão **DEMO totalmente sanitizada**. 
Nenhum dado real de cliente, ID de campanha, ID de planilha ou token 
de API está incluído.

## 🎯 Objetivo do Projeto

Este projeto demonstra como construir uma camada de governança 
operacional para campanhas de mídia paga, conectando:

- 📥 **Planejamento de Campanha:** briefing e input inicial
- 🧠 **Padronização:** convenções de nomenclatura e geração de IDs
- 🔗 **Reconciliação:** casamento de Campaign IDs
- 📊 **Enriquecimento:** lógica financeira e de performance
- 🏫 **Segmentação:** automação multi-unidade
- 📈 **Consolidação:** visibilidade em nível executivo

## O Problema que Resolve

Em muitas operações de mídia, planejamento, execução e relatórios 
existem em sistemas desconectados. Este pipeline introduz estrutura 
e automação para garantir:

- Padronização de nomenclatura entre plataformas
- Governança de orçamento e controle de investimento
- Monitoramento de CPA (Planejado vs. Real)
- Aplicação de regras fiscais baseadas em lógica de datas

## 🏗️ Visão Geral da Arquitetura

O fluxo segue uma progressão linear do briefing ao relatório executivo:

Briefing do Stakeholder → Motor Apps Script → Execução Meta Ads → 
Extração de Dados → Reconciliação de IDs → Enriquecimento de Regras 
de Negócio → Segmentação por Unidade → Visão Consolidada

## 📂 Estrutura do Repositório
