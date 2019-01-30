var graph;
var addInput, addButton;

function setup() {
    graph = new Graph();
    graph.createNode('andrzej');
    graph.createNode('lukasz');
    graph.createNode('menel');
    graph.attachNodes('andrzej', 'menel');
    graph.attachNodes('lukasz', 'andrzej');
    
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
    console.log(graph.search('lukasz', 'chuj'));
    noLoop();
}