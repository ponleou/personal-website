const cubeLength = 250; //px
const perspective = 1000; //px
const maxRotation = 360; //deg
const sideMaxTranslation = 30; //px
const transitionTimingFunction = "cubic-bezier(0.07, 0.39, 0.37, 0.98)";

const rotationTime = 1000; //ms
const sideTranslationTime = 500; //ms
const timeBetweenAction = 500; //ms
const timeBetweenRotation = 2000; //ms

const boxContainer = document.querySelectorAll(".box-container");

boxContainer.forEach(item => item.style.perspective = perspective + "px");
document.querySelectorAll(".box, .box__side").forEach(item => cubeMaker(item));

function cubeMaker (item) {
    item.style.height = cubeLength + "px";
    item.style.width = cubeLength + "px";
}

const cubeTranslation = cubeLength / 2;
const cubeSideRotation = "90deg";
const boxElement = document.querySelectorAll(".box");
const boxSideElement = document.querySelectorAll(".box__side");


function setBoxSides() {
document.getElementById("top").style.transform = "rotateX(" + cubeSideRotation + ") translateZ(" + cubeTranslation + "px)";
document.getElementById("bottom").style.transform = "rotateX(" + cubeSideRotation + ") translateZ(-" + cubeTranslation + "px)";
document.getElementById("right").style.transform = "rotateY(" + cubeSideRotation + ") translateZ(" + cubeTranslation + "px)";
document.getElementById("left").style.transform = "rotateY(" + cubeSideRotation + ") translateZ(-" + cubeTranslation + "px)";
document.getElementById("front").style.transform = "translateZ(" + cubeTranslation + "px)";
document.getElementById("back").style.transform = "translateZ(-" + cubeTranslation + "px)";
}

function rotateBox(box) {
    let randomX = Math.round(Math.random() * maxRotation);
    let randomY = Math.round(Math.random() * maxRotation);
    let randomZ = Math.round(Math.random() * maxRotation);
    box.forEach(item => item.style.transform = "rotateX(" + randomX + "deg) rotateY(" + randomY + "deg) rotateZ(" + randomZ + "deg)");
}

function boxSideTranslation(sideMaxTranslation) {
    document.getElementById("top").style.transform = "rotateX(" + cubeSideRotation + ") translateZ(" + (cubeTranslation + sideMaxTranslation) + "px)";
    document.getElementById("bottom").style.transform = "rotateX(" + cubeSideRotation + ") translateZ(-" + (cubeTranslation + sideMaxTranslation) + "px)";
    document.getElementById("right").style.transform = "rotateY(" + cubeSideRotation + ") translateZ(" + (cubeTranslation + sideMaxTranslation) + "px)";
    document.getElementById("left").style.transform = "rotateY(" + cubeSideRotation + ") translateZ(-" + (cubeTranslation + sideMaxTranslation) + "px)";
    document.getElementById("front").style.transform = "translateZ(" + (cubeTranslation + sideMaxTranslation) + "px)";
    document.getElementById("back").style.transform = "translateZ(-" + (cubeTranslation + sideMaxTranslation) + "px)";
}

function addRotationTransition(box, rotationTime, transitionTimingFunction) {
    box.forEach(item => item.style.transition = "transform " + (rotationTime / 1000) + "s");
    box.forEach(item => item.style.transitionTimingFunction = transitionTimingFunction);
}

function addSideTranslationTransition(side, sideTranslationTime, transitionTimingFunction) {
    side.forEach(item => item.style.transition = "transform " + (sideTranslationTime / 1000) + "s");
    side.forEach(item => item.style.transitionTimingFunction = transitionTimingFunction);
}

function timerSideBoxTranslation() {
    boxSideTranslation(sideMaxTranslation);
}

function timerRotateBox() {
    rotateBox(boxElement);
}

function timerAddSideTranslationTransition() {
addSideTranslationTransition(boxSideElement, sideTranslationTime, transitionTimingFunction);
    
}

setBoxSides();
addRotationTransition(boxElement, rotationTime, transitionTimingFunction);
setTimeout(timerAddSideTranslationTransition, 50);

//automatic
setInterval(function() {
    timerSideBoxTranslation();
    setTimeout(timerRotateBox, timeBetweenAction + sideTranslationTime);
    setTimeout(setBoxSides, timeBetweenAction + sideTranslationTime + timeBetweenAction + rotationTime);
}, timeBetweenAction + sideTranslationTime + timeBetweenAction + rotationTime + timeBetweenRotation + sideTranslationTime);

//mouse detection
boxContainer.forEach(item => item.addEventListener("mouseenter", function() {
    boxSideTranslation(sideMaxTranslation);
}));
boxContainer.forEach(item => item.addEventListener("mouseleave", function() {
    setBoxSides();
}));
boxContainer.forEach(item => item.addEventListener("mousedown", function() {
    rotateBox(boxElement);
}));