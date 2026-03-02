function parseBRNumber_(val) {
  if (typeof val === "number") return val;
  if (val == null) return 0;

  let s = String(val).trim().replace(/R\$\s?/g, "").replace(/\s/g, "");
  if (!s) return 0;

  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  return isNaN(n) ? 0 : n;
}

function round2_(n) {
  return Math.round((Number(n) || 0) * 100) / 100;
}

function normalizeHeader_(h) {
  return String(h || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findHeaderIndex_(headers, aliases) {
  const norm = headers.map(normalizeHeader_);
  for (const a of aliases) {
    const idx = norm.indexOf(normalizeHeader_(a));
    if (idx !== -1) return idx;
  }
  return -1;
}

function toDate_(v) {
  if (v instanceof Date && !isNaN(v)) return v;

  if (typeof v === "number") {
    const d = new Date((v - 25569) * 86400 * 1000);
    return isNaN(d) ? null : d;
  }

  if (typeof v === "string") {
    const s = v.trim();
    if (!s) return null;

    const p = s.split("/");
    if (p.length === 3) {
      const d = new Date(Number(p[2]), Number(p[1]) - 1, Number(p[0]));
      return isNaN(d) ? null : d;
    }

    const dt = new Date(s);
    return isNaN(dt) ? null : dt;
  }

  return null;
}

function diasRestantes_(hoje0h, fimDate) {
  if (!(fimDate instanceof Date) || isNaN(fimDate)) return "";
  const fim0h = new Date(fimDate.getFullYear(), fimDate.getMonth(), fimDate.getDate());
  const diffMs = fim0h.getTime() - hoje0h.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}