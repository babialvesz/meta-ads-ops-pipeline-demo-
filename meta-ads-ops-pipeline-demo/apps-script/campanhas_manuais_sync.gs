/**
 * Sync de campanhas manuais entre planilhas
 * - IDs vêm de Script Properties (não ficam no GitHub)
 */

function syncCampanhasManuais() {
  const { ORIGEM_SHEET_ID, ORIGEM_TAB, DESTINO_SHEET_ID, DESTINO_TAB } = CONFIG.SYNC_MANUAIS;

  if (!ORIGEM_SHEET_ID || !DESTINO_SHEET_ID) {
    SpreadsheetApp.getUi().alert(
      "Configure ORIGEM_SHEET_ID e DESTINO_SHEET_ID em Script Properties antes de rodar."
    );
    return;
  }

  const CABECALHOS_DESTINO_ORDEM = [
    "CÓDIGO DA ESCOLA",
    "COMPLEMENTO",
    "TIPO DE CAMPANHA",
    "TÉMINO DA CAMPANHA",
    "RESULTADOS DESEJADOS",
    "TETO DE CPA",
    "CPA DESEJADO",
    "TETO DE GASTOS",
    "CÓDIGO DA CAMPANHA",
    "NOME DA CAMPANHA",
  ];

  const MAP = {
    "Unidade": "CÓDIGO DA ESCOLA",
    "Tipo de Campanha": "TIPO DE CAMPANHA",
    "Término da campanha": "TÉMINO DA CAMPANHA",
    "Resultados desejados": "RESULTADOS DESEJADOS",
    "Teto de CPA": "TETO DE CPA",
    "CPA Desejado": "CPA DESEJADO",
    "Teto de gastos (para campanha)": "TETO DE GASTOS",
    "Código da Campanha": "CÓDIGO DA CAMPANHA",
    "CAMPANHAS": "NOME DA CAMPANHA",
  };

  const VALOR_PADRAO = "N/A";

  const origem = SpreadsheetApp.openById(ORIGEM_SHEET_ID).getSheetByName(ORIGEM_TAB);
  const destinoSS = SpreadsheetApp.openById(DESTINO_SHEET_ID);
  const destino = destinoSS.getSheetByName(DESTINO_TAB);

  if (!origem || !destino) {
    SpreadsheetApp.getUi().alert("Aba origem ou destino não encontrada. Verifique nomes nas configs.");
    return;
  }

  const dadosOrigem = origem.getDataRange().getValues();
  if (dadosOrigem.length < 2) {
    SpreadsheetApp.getUi().alert("Origem vazia (sem dados).");
    return;
  }

  const headersOrigem = dadosOrigem[0].map(h => String(h).trim());
  const linhasOrigem = dadosOrigem.slice(1);

  // index por destino
  const idxOrigemPorDestino = {};
  CABECALHOS_DESTINO_ORDEM.forEach(hDest => {
    let idx = headersOrigem.indexOf(hDest);

    if (idx === -1) {
      // tenta via MAP (origem -> destino)
      for (const [hOrig, hDestMap] of Object.entries(MAP)) {
        if (hDestMap === hDest) {
          idx = headersOrigem.indexOf(hOrig);
          if (idx !== -1) break;
        }
      }
    }
    idxOrigemPorDestino[hDest] = idx;
  });

  const dadosParaDestino = linhasOrigem.map(linha => {
    return CABECALHOS_DESTINO_ORDEM.map(hDest => {
      const idx = idxOrigemPorDestino[hDest];
      if (idx !== -1 && linha[idx] !== undefined) return linha[idx];
      return VALOR_PADRAO;
    });
  });

  // limpa e reimporta
  destino.getRange(2, 1, destino.getMaxRows(), destino.getMaxColumns()).clearContent();
  destino.getRange(1, 1, 1, CABECALHOS_DESTINO_ORDEM.length).setValues([CABECALHOS_DESTINO_ORDEM]);

  if (dadosParaDestino.length) {
    destino.getRange(2, 1, dadosParaDestino.length, CABECALHOS_DESTINO_ORDEM.length)
      .setValues(dadosParaDestino);
  }

  SpreadsheetApp.getUi().alert("Sync concluído (DEMO).");
}