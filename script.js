document.getElementById('gerarPDF').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById('curriculo');

    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('curriculo_alexandre_gomes_de_souza.pdf');
    });
});