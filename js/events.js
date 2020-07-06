var currentEvent;

function mousePressed() {
    let clickedNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);
    if (!clickedNode) return;

    if (moveCheckbox.checked()) {
        currentEvent = new MoveEvent(clickedNode);
    } else if (attachCheckbox.checked()) {
        currentEvent = new AttachEvent(clickedNode);
    } else if (detachCheckbox.checked()) {
        currentEvent = new DetachEvent(clickedNode);
    } else if (findPathCheckbox.checked()) {
        currentEvent = new FindPathEvent(clickedNode);
    }
    if (currentEvent) {
        currentEvent.mousePressed();
    }
}

function mouseReleased() {
    if (currentEvent) {
        currentEvent.mouseReleased();

    }
}