var graph;
var addInput, addButton;

function setup() {
    graph = new Graph();
    createCanvas(1400, 600);

    addInput = createInput();
    addInput.position(20, 20 + height);
    addButton = createButton('Add node');
    addButton.position(25 + addInput.width, 20 + height);

    addButton.mousePressed(function(){
        graph.createNode(addInput.value(), 0, 0);
    });
}

function draw() {
    background(51);
}