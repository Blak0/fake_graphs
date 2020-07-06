var graph;
var xOffset;
var yOffset;

var backgroundColor = 51;

function setup() {
    graph = new Graph();
    UI.initUI();
    xOffset = width/2;
    yOffset = height/2;
    
}

function draw() {
    background(backgroundColor);
    translate(xOffset, yOffset);
    graph.show();
    if (attachLine) {
        attachLine.show();
    }
}