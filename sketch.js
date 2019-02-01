var graph;
var addInput, addButton;

function setup() {
    graph = new Graph();
    
    let footerHeight = 50;
    createCanvas(innerWidth, innerHeight - footerHeight);

    addInput = createInput();
    addInput.position(20, innerHeight - footerHeight / 2 - addInput.height / 2);
    addButton = createButton('Add node');
    addButton.position(25 + addInput.width, innerHeight - footerHeight / 2 - addButton.height / 2);


    addButton.mousePressed(function () {
        graph.createNode(addInput.value(), 0, 0);
    });
}

function draw() {
    background(51);
}