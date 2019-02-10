var graph;

var backgroundColor = 51;

function setup() {
    graph = new GraphicGraph();
    UI.initUI();
}

function draw() {
    background(backgroundColor);
    translate(width / 2, height / 2);
    graph.show();
    if (attachLine) {
        attachLine.show();
    }
}