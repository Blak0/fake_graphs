//node dragging
let clickedNode = null;

function mousePressed() {
    clickedNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
    if (!clickedNode) {
        return;
    }
    clickedNode.followMouse();
}

function mouseReleased() {
    if (clickedNode) {
        clickedNode.unfollowMouse();
    }
}