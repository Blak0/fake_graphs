let clickedNode = null;
let attachStartNode;
let attachEndNode;

class MoveEvent {
    mousePressed() {
        clickedNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
        if (!clickedNode) {
            return;
        }
        clickedNode.followMouse();
    }

    mouseReleased() {
        if (clickedNode) {
            clickedNode.unfollowMouse();
        }
    }
}

class AttachEvent {
    mousePressed() {
        attachStartNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
        if (!attachStartNode) {
            return;
        }

        attachStartNode.backgroundColor = 35;
        attachLine = new AttachLine(attachStartNode.pos.x, attachStartNode.pos.y);
    }

    mouseReleased() {
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