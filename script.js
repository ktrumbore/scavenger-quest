const input = document.querySelector('#nav-toggle');
const nav = document.querySelector('nav ul');
const anchors = document.querySelectorAll ('a');

function checkAll(){
    input.checked = false;
}

window.onload = function(){
    window.addEventListener('resize', checkAll, false);
    nav.addEventListener('click', checkAll, false);
}

anchors.forEach((e) => {
    e.addEventListener('click', checkAll, false);
})

window.onscroll = function (){
    if (window.scrollY > 100){
        checkAll();
    }
}