var graph;
var addInput, addButton;

var backgroundColor = 51;

function setup() {
    graph = new GraphicGraph();
    let footerHeight = 50;
    createCanvas(innerWidth, innerHeight - footerHeight);

    addInput = createInput();
    addInput.position(20, innerHeight - footerHeight / 2 - addInput.height / 2);
    addButton = createButton('Add node');
    addButton.position(25 + addInput.width, innerHeight - footerHeight / 2 - addButton.height / 2);

    addButton.mousePressed(function () {
        graph.createNode(addInput.value(), 0, 0);
    });

    graph.createNode('lukasz', 0, 0);
    graph.createNode('kuba', 200, 200);

    graph.attachNodes('kuba', 'lukasz');
    
}

function draw() {
    background(backgroundColor);
    translate(width/2, height/2);
    graph.show();
}