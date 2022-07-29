let but = document.getElementById('btn01');
let but2 = document.getElementById('btn02');
let icon = document.getElementById('icn');
let bg = document.getElementById('bg-primary');

function cadd() {
    var sound = document.getElementById("audio");

    icon.classList.add('fa-6');
    icon.style.transform ='translateY(-5px)';
    bg.style.transition = '0.5s';
    bg.style.backgroundColor = 'rgb(255, 255, 255)'
    sound.play();


}
function crmv() {
    var sound = document.getElementById("audio");
    icon.style.transform ='translateY(5px)';
    icon.style.transition = '0.5s';
    bg.style.transition = '0.5s';
    bg.style.backgroundColor = 'rgb(233 212 170)'

    sound.play();
    icon.classList.remove('fa-6');

}

// setInterval( cadd , 1000);
// setTimeout(setInterval(crmv , 1000),500)
// setTimeout(setInterval(console.log('hello rmv') , 1000),500)

// setInterval(() => {
//     but.click();
// }, 3000);

// setTimeout(() => {
//     setInterval(() => {
//         but2.click();
//     }, 3000);
// }, 1500);

setTimeout(() => {
    setInterval(() => {
        
        console.log('hello world')
    }, 3000);
}, 10000);

but.addEventListener('click', cadd);
but2.addEventListener('click', crmv);





