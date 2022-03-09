import PdfFile from '../assets/CV.pdf'


let link = document.querySelector('.link');
link.setAttribute('download','CV.pdf');
link.href = PdfFile;
