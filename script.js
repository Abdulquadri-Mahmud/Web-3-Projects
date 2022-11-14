const openMenuBar = document.querySelector('.openMenu');
const closeMenuBar = document.querySelector('.closeMenu');

const aside = document.querySelector('aside');

const burgerMenu = document.querySelectorAll('.bm');

openMenuBar.addEventListener('click',()=>{
    aside.style.width = '55%';
    burgerMenu.style.visibility = 'hidden';
})

closeMenuBar.addEventListener('click',()=>{
    aside.style.width = '0%';
    burgerMenu.style.visibility = 'visible';
})
