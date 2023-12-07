// const menuIcon = document.querySelector(".menuIcon");
// const menuList = document.querySelector(".menuList");

// menuIcon.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     menuIcon.classList.toggle("active");
//     menuList.classList.toggle("show");
// }
function openSM(){
    document.getElementById("mySidemenu").style.width ="250px"
    document.getElementById("pg-content").style.marginLeft ="250px"
}
function closeSM(){
    document.getElementById("mySidemenu").style.width ="0"
    document.getElementById("pg-content").style.marginLeft ="0"
}