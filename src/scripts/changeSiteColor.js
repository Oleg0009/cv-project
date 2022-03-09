let changeColorButtons = document.querySelectorAll('.color-changer');

let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

changeColorButtons.forEach(btn=>{
    btn.addEventListener('click',changeColor)
});

function changeColor(){
    if(moon.classList.contains('hidden')){
        moon.classList.remove('hidden');
        sun.classList.add('hidden');
        document.body.classList.remove('light');
        return;
    }
    if(sun.classList.contains('hidden')){
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
        document.body.classList.add('light');
        return;
    }
}
