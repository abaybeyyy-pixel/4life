const fs = require('fs');
const pdfParse = require('pdf-parse/lib/pdf-parse.js');

async function readPDF(filePath, label) {
  const buf = fs.readFileSync(filePath);
  const data = await pdfParse(buf);
  console.log(`\n\n===== ${label} =====`);
  console.log(data.text.slice(0, 8000));
}

(async () => {
  await readPDF('./assets/Panduan Pemulihan Imun Pasca Melahirkan.pdf', 'PDF 1: Panduan Pemulihan Imun');
  await readPDF('./assets/Panduan Produk 4life Kemitraan Bidan.pdf', 'PDF 2: Kemitraan Bidan');
  await readPDF('./assets/Tentang 4life & Riset Ilmiah.pdf', 'PDF 3: Riset Ilmiah');
})();
