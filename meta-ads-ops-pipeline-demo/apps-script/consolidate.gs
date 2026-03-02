function consolidarAbasDeUnidades() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const destinoNome = CONFIG.SHEET_CONSOLIDADO;

  const abas = Object.values(CONFIG.UNIDADES); // UN00-BASE, UN01..., UN99...
  let destino = ss.getSheetByName(destinoNome);
  if (!destino) destino = ss.insertSheet(destinoNome);
  else destino.clearContents();

  let linhaDestino = 1;
  let cabecalhoEscrito = false;

  abas.forEach(nomeAba => {
    const aba = ss.getSheetByName(nomeAba);
    if (!aba) return;

    const dados = aba.getDataRange().getValues();
    if (!dados || !dados.length) return;

    const numColunas = dados[0].length;

    if (!cabecalhoEscrito) {
      destino.getRange(linhaDestino, 1, 1, numColunas).setValues([dados[0]]);
      linhaDestino++;
      cabecalhoEscrito = true;
    }

    if (dados.length > 1) {
      const corpo = dados.slice(1);
      destino.getRange(linhaDestino, 1, corpo.length, numColunas).setValues(corpo);
      linhaDestino += corpo.length;
    }
  });

  Logger.log(`Consolidação concluída. Total linhas: ${linhaDestino - 1}`);
}