const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener("click",changeMenuState);
function changeMenuState(){
    const headerMenu = document.querySelector('ul.header-menu');
    const navIcon = document.querySelectorAll(".navIcon");
    headerMenu.classList.toggle("show");
    navIcon.forEach((icon)=>{
        icon.classList.toggle("hidden");
    })
}
function ActonMenuClick(){
    const navLinks = document.querySelectorAll(".header-menu-item>a");
    console.log(navLinks);
    for(let i=0;i<=navLinks.length;i++){
        navLinks[i].addEventListener("click",changeMenuState);
    }
}
ActonMenuClick();