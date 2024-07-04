var circle = document.getElementById("circle");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");
var rotateValue = circle.style.transform;
var rotateSum;
upArrow.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};
downArrow.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};
