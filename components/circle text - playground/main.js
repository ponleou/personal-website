const circleRadius = "400";
const tilt = "-15"
const maxBlur = 3;

const perspective = "1000"
// default: 1000

const transformOrigin = "50% 50% -" + circleRadius + "px";
const circleObjects = document.querySelectorAll(".circle-obj");
const circleBox = document.querySelectorAll(".circle-box");
const circleElement = document.querySelectorAll(".circle");

circleObjects.forEach(item => item.style.transformOrigin = transformOrigin);
circleElement.forEach(item => item.style.perspective = perspective + "px")

const circleAngle = 360;
const angleOfMaxBlur = 180;
const initialRotate = circleAngle / circleObjects.length;

let rotation = 0;
let rotationSpeed = 1;

//moved this section from the setInterval section, check if it still works
circleBox.forEach(item => item.addEventListener("mouseenter", function() {
    rotationSpeed = 0.5;
}));
circleBox.forEach(item => item.addEventListener("mouseleave", function() {
    rotationSpeed = 1;
}));


setInterval(function() {
    rotation += rotationSpeed;
    for (let i = 0; i < circleObjects.length; i++) {
        let angle = rotation + initialRotate * i;
        circleObjects[i].style.transform = "rotateY(" + angle.toString() + "deg) rotateX(" + tilt + "deg)";
        if (angle > angleOfMaxBlur) {
            let counter = 0;
            while(true) {
                if (angle > angleOfMaxBlur) {
                    angle -= angleOfMaxBlur;
                    counter++;
                } else {
                    break;
                }
            }
            if (counter % (circleAngle / angleOfMaxBlur) !== 0) 
                angle = angleOfMaxBlur - angle;
        }
        const blurAmount = (angle / angleOfMaxBlur) * maxBlur;
        circleObjects[i].style.filter = "blur(" + blurAmount.toString() + "px)";
    }
}, 20);
