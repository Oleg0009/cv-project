
let topBtn = document.getElementById('topBtn');
console.log(topBtn);


topBtn.addEventListener("click", e => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
  
window.addEventListener('scroll', e => {
    if(window.scrollY > 20){
        topBtn.classList.add('showed');   
    }else{
        topBtn.classList.remove('showed');   
    }
});