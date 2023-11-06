const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
    let isHamburgerIconClassNameBars = hamburgerIcon.classList[1] === 'fa-bars';
    
    menuList.style.display = isHamburgerIconClassNameBars ? 'block' : 'none';

    isHamburgerIconClassNameBars 
    ? hamburgerIcon.classList.replace('fa-bars', 'fa-xmark')
    : hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
})