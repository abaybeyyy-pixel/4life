import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import fs from 'fs';

async function readPDF(filePath, label) {
  const buf = fs.readFileSync(filePath);
  const uint8 = new Uint8Array(buf);
  const doc = await getDocument({ data: uint8 }).promise;
  let text = '';
  const pages = Math.min(doc.numPages, 15);
  for (let i = 1; i <= pages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(item => item.str).join(' ') + '\n';
  }
  console.log(`\n\n===== ${label} (${doc.numPages} pages) =====`);
  console.log(text.slice(0, 8000));
}

await readPDF('./assets/Panduan Pemulihan Imun Pasca Melahirkan.pdf', 'PDF 1: Panduan Pemulihan Imun');
await readPDF('./assets/Panduan Produk 4life Kemitraan Bidan.pdf', 'PDF 2: Kemitraan Bidan');
await readPDF('./assets/Tentang 4life & Riset Ilmiah.pdf', 'PDF 3: Riset Ilmiah');
