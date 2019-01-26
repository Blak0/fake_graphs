var graph;

var backgroundColor = 51;

function setup() {
    graph = new GraphicGraph();
    UI.initUI();

    graph.createNode('lukasz', 0, 0);
    graph.createNode('kuba', 200, 200);

    graph.attachNodes('kuba', 'lukasz');
}

function draw() {
    background(backgroundColor);
    translate(width / 2, height / 2);
    graph.show();
}