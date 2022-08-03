// collapsible
const collapsibles = document.querySelectorAll(".collapsible__toggler");

collapsibles.forEach(item => item.addEventListener("click", 
function() {
    item.classList.toggle("collapsible--expanded");
}));

//tap animation (mobile)
const mainPage = document.querySelectorAll(".mainpage");
const tapEl = document.querySelectorAll(".tap")

function toggleClass(){
    tapEl.forEach(item => item.classList.toggle("tap--active"))
};

mainPage.forEach(item => item.addEventListener("touchstart", toggleClass));
//mainPage.forEach(item => item.addEventListener("click", toggleClass));

//red button
const redButton = document.querySelectorAll(".red-button");
const mainpageHeading = document.querySelectorAll(".mainpage__heading");
const redButtonFunctions = {
    buttonPressed() {
        redButton.forEach(item => item.classList.add("red-button--pressed"));
    },
    buttonReleased() {
        redButton.forEach(item => item.classList.remove("red-button--pressed"));
    },
};

redButton.forEach(item => item.addEventListener("mousedown", redButtonFunctions.buttonPressed));
redButton.forEach(item => item.addEventListener("mouseleave", redButtonFunctions.buttonReleased));
redButton.forEach(item => item.addEventListener("mouseup", redButtonFunctions.buttonReleased));

redButton.forEach(item => item.addEventListener("touchstart", function() {
    mainpageHeading.forEach(item => item.classList.toggle("mainpage__red-button--activate"))
}
));
redButton.forEach(item => item.addEventListener("touchstart", redButtonFunctions.buttonPressed));
redButton.forEach(item => item.addEventListener("touchend", redButtonFunctions.buttonReleased));


