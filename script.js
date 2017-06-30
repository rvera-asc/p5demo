function setup() {
    createCanvas(windowWidth - 20, windowHeight - 200)
    background('#ffe9ec')
    frameRate(1);
}


var rectWidth = 80;
var rectHeight = rectWidth;
var radius = 80;
var triSize = 40;
var rectOffset = 20;
var ellipseOffset = 60;
var minValue = 128;
var maxValue = 256;
var shapeOpacity = 90;

function draw() {
    noStroke();
    fill(255,120,120);
}

function clearIt() {
    clear();
    background('#ffe9ec');
}

function saveIt() {
    saveCanvas('myArt', 'png');
}

function mouseDragged() {
    var shapes = ['ellipse', 'rectangle', 'triangle'];
    var randomShape = random(shapes);

    noStroke();
    var r = random(minValue, maxValue);
    var g = random(minValue, maxValue);
    var b = random(minValue, maxValue);
    shapeOpacity = random(0,100);
    fill(r,g,b,shapeOpacity);

    switch(randomShape) {
        case 'ellipse':
            ellipse(mouseX - ellipseOffset, mouseY, radius);
            break;
        case 'rectangle':
            rect(mouseX + rectOffset, mouseY, rectWidth, rectHeight);
            break;
        case 'triangle':
            triangle(mouseX - triSize, mouseY + triSize, mouseX, mouseY - triSize, mouseX + triSize, mouseY + triSize);
            break;
        default:
            break;
    }
    return false;
}