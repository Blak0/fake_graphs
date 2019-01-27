//node dragging
let clickedNode = null;
let attachStartNode;
let attachEndNode;

let attachLine = undefined;

function mousePressed() {
    if (moveCheckbox.checked()) {
        clickedNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
        if (!clickedNode) {
            return;
        }
        clickedNode.followMouse();
    }

    else if (attachCheckbox.checked()) {
        attachStartNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
        if (!attachStartNode) {
            return;
        }

        attachStartNode.backgroundColor = 35;
        attachLine = new DraggedLine(attachStartNode.pos.x, attachStartNode.pos.y);
    }
}

function mouseReleased() {
    if (moveCheckbox.checked()) {
        if (clickedNode) {
            clickedNode.unfollowMouse();
        }
    }

    else if (attachCheckbox.checked()) {
        if (!attachStartNode) {
            return;
        }
        attachEndNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);

        attachLine = undefined;
        attachStartNode.backgroundColor = backgroundColor;

        if (attachStartNode === undefined || attachEndNode === undefined) {
            return;
        }

        if (attachStartNode !== attachEndNode) {
            graph.attachNodes(attachStartNode.value, attachEndNode.value);
        }
    }
}

class DraggedLine {
    constructor(x, y) {
        this.startPos = createVector(x, y);
    }

    show() {
        noFill();
        stroke(255, 80);
        strokeWeight(2);
        line(this.startPos.x, this.startPos.y, mouseX - width / 2, mouseY - height / 2);
    }
}