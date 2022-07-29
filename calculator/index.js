let clear = document.querySelector('.clr');
// clear.addEventListener('click',)
let new1 = document.querySelector('.aud');

function clean(){
    document.calc.txt.value = '';
}

function del(){
    document.calc.txt.value = document.calc.txt.value.slice(0,-1)
}

let spn = document.querySelectorAll('.num');
function snd(){
    new1.play();
}

// clear.addEventListener('click', snd());



