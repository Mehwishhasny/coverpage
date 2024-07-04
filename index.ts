let circle = document.getElementById("circle");
let upArrow = document.getElementById("upArrow");
let downArrow = document.getElementById("downArrow");

let rotateValue = circle.style.transform;
let rotateSum;

upArrow.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downArrow.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}