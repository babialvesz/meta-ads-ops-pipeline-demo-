🚀 Meta Ads Operational Governance Pipeline (Demo)
A structured operational framework for managing Meta Ads campaigns using Google Sheets + Google Apps Script.

This repository contains a fully sanitized DEMO version. No real client data, campaign IDs, spreadsheet IDs, or API tokens are included.

🎯 Project Objective
This project demonstrates how to build an operational governance layer for paid media campaigns, bridging the gap between:
📥 Campaign Planning: Briefing and input.
🧠 Standardization: Naming conventions and ID generation.
🔗 Reconciliation: Campaign ID matching.
📊 Enrichment: Financial and performance logic.
🏫 Segmentation: Multi-unit (multi-branch) automation.
📈 Consolidation: Executive-level visibility.
The Problem it Solves
In many marketing operations, planning, execution, and reporting exist in disconnected systems. This pipeline introduces structure and automation to ensure:
Naming standardization across all platforms.
Budget governance and investment control.
CPA monitoring (Planned vs. Actual).
Tax rule application based on date logic.

🏗️ Architecture Overview
The workflow follows a linear progression from briefing to executive reporting:
Stakeholder Briefing → Apps Script Engine → Meta Ads Execution → Data Extraction → ID Reconciliation → Business Logic Enrichment → Unit Segmentation → Consolidated View

📂 Repository Structure
Bash
meta-ads-ops-pipeline-demo/
├─ apps-script/
│  ├─ config.gs                   # Centralized configuration
│  ├─ utils.gs                    # Helper functions
│  ├─ cadastro_aut.gs             # Automation for new entries
│  ├─ campanhas_manuais_sync.gs   # Manual sync logic
│  ├─ meta_extract_enrich.gs      # Meta data processing
│  ├─ school_split.gs             # Unit segmentation logic
│  ├─ compare_enrich.gs           # Reconciliation engine
│  ├─ consolidate.gs              # Final consolidation
│  └─ README_APPS_SCRIPT.md
├─ sample-data/
│  ├─ briefing_sample.csv         # Campaign planning input
│  └─ meta_extract_sample.csv     # Performance extraction
└─ README.md


🔄 Pipeline Stages
1️⃣ Campaign Planning Layer
Stakeholders submit requests with unit codes, campaign types, and investment ceilings. The system automatically generates:
Incremental Campaign Codes.
Standardized Names.
Net Budget & Desired CPA.
2️⃣ Meta Ads Extraction Layer
Daily performance data (Spend, Daily Budget, Conversions) is pulled. This demo simulates API extraction via CSV in the sample-data/ folder.
3️⃣ Reconciliation Engine
Matches performance data against planning using a multi-key strategy:
Primary: Campaign ID
Secondary: Campaign Code
Fallback: Campaign Name logic
4️⃣ Business Logic Enrichment
Calculates real-time metrics such as:
Conditional Taxes: Applied based on date thresholds.
Pacing: Budget remaining vs. Days remaining.
Performance: Actual CPA vs. Target CPA.
5️⃣ Multi-Unit Segmentation & Consolidation
Campaigns are automatically grouped into separate sheets based on unit identifiers, which are then merged into a Consolidated Executive View for full operational visibility.

🧠 Key Technical Concepts
Concept
Description
Modular Architecture
Apps Script divided by responsibility for easier maintenance.
Multi-key Reconciliation
Increases reliability and prevents data mismatches.
Defensive Programming
Alias-based header matching to prevent script breaks on sheet changes.
Financial Modeling
Automated calculation of net investment and tax applications.


🔐 Security Design (Sanitized)
To maintain security, this public version:
Excludes Spreadsheet IDs and API Tokens.
Uses Placeholder unit codes and fictional campaign names.
Relies on Script Properties (Google Apps Script) for sensitive configurations.

🚀 Future Roadmap
[ ] Migration from Sheets to PostgreSQL.
[ ] Workflow orchestration via n8n.
[ ] Direct Meta API integration.
[ ] Error logging & monitoring layer.
[ ] Dashboard integration (Power BI / Looker Studio).

👤 Author
Developed as part of a broader effort to build scalable marketing data infrastructures, combining automation, data governance, and operational intelligence.


