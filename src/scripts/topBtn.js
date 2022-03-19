
let topBtn = document.getElementById('topBtn');

topBtn.addEventListener("click", e => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
  
window.addEventListener('scroll', e => {
    if(window.scrollY > 20){
        document.body.classList.add('scrolled');
        topBtn.classList.add('showed');   
    }else{
        topBtn.classList.remove('showed');  
        document.body.classList.remove('scrolled');
    }
});