import { PDFDocument, rgb } from 'pdf-lib';
//import fs from 'fs';

async function createPDF() {
  // Cria um novo documento PDF
  const pdfDoc = await PDFDocument.create();

  // Adiciona uma página ao documento
  const page = pdfDoc.addPage([600, 400]);

  // Obtém a largura e altura da página
  const { width, height } = page.getSize();

  // Adiciona texto à página
  //const font = await pdfDoc.embedStandardFont();
  page.drawText('Olá, mundo!', {
    x: 50,
    y: height - 100,
    size: 30,
    color: rgb(0, 0, 0), // cor preta
  });

  // Salva o PDF
  const pdfBytes = await pdfDoc.save();

  // Salva o PDF em um arquivo
  //fs.writeFileSync('exemplo.pdf', pdfBytes);
}


