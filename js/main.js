// collapsible
const collapsibles = document.querySelectorAll(".collapsible__toggler");

collapsibles.forEach(item => item.addEventListener("click", 
function() {
    item.classList.toggle("collapsible--expanded");
}));

//hover animation (mobile)
const mainPage = document.querySelectorAll(".mainpage");
const hoverEl = document.querySelectorAll(".tap")

function toggleClass(){
    hoverEl.forEach(item => item.classList.toggle("tap--active"))
};

mainPage.forEach(item => item.addEventListener("touchstart", toggleClass));
//mainPage.forEach(item => item.addEventListener("click", toggleClass));