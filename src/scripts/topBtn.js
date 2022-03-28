
const topBtn = document.getElementById('topBtn');
const goToTop = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});

topBtn.addEventListener("click",goToTop);
  
window.addEventListener('scroll', e => {
    if(window.scrollY > 20){
        document.body.classList.add('scrolled');
        topBtn.classList.add('showed');   
    }else{
        topBtn.classList.remove('showed');  
        document.body.classList.remove('scrolled');
    }
});


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
