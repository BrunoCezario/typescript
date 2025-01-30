import { jsPDF } from "jspdf";

function createPDF() {
  // Cria uma nova instância do jsPDF
  const doc = new jsPDF();

  // Adiciona texto ao documento
  doc.text("Olá, Mundo!", 20, 30);

  // Salva o PDF com um nome específico
  doc.save("teste1.pdf");
}

createPDF();
