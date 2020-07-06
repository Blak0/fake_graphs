//MoveEvent variables
let clickedNode;

//Attach/Detach Event variables
let startNode;
let endNode;

//each event represents individual mode
class MoveEvent {
    mousePressed() {
        clickedNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);
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
        startNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);
        if (!startNode) {
            return;
        }

        startNode.backgroundColor = 35;
        attachLine = new AttachLine(startNode.pos.x, startNode.pos.y);
    }

    mouseReleased() {
        if (!startNode) {
            return;
        }
        endNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);

        attachLine = undefined;
        startNode.backgroundColor = backgroundColor;

        if (startNode === undefined || endNode === undefined) {
            return;
        }

        if (startNode !== endNode) {
            graph.attachNodes(startNode, endNode);
        }
        startNode = undefined;
        endNode = undefined;
    }
}

class DetachEvent {
    mousePressed() {
        startNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);
        if (!startNode) {
            return;
        }

        startNode.backgroundColor = 175;
    }

    mouseReleased() {
        if (!startNode) {
            return;
        }
        endNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);

        startNode.backgroundColor = backgroundColor;

        if (startNode === undefined || endNode === undefined) {
            return;
        }

        if (startNode !== endNode) {
            graph.detachNodes(startNode, endNode);
        }
        startNode = undefined;
        endNode = undefined;
    }
}

class FindPathEvent {
    mousePressed() {
        startNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);
        if (!startNode) {
            return;
        }
    }
    mouseReleased() {
        if (!startNode) {
            return;
        }
        endNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);

        if (startNode === undefined || endNode === undefined) {
            return;
        }

        if (startNode === endNode) {
            return;
        }


        let path = graph.shortestPath(startNode, endNode);
        if (!path) {
            alert("Nodes aren't connected.")
        }
        else {
            let message = 'Shortest path: ';
            for (let i = 0; i < path.length; i++) {
                message += path[i].value + ' -> ';
            }
            message = message.slice(0, message.length - 4); //remove last arrow
            alert(message);
        }

        startNode = undefined;
        endNode = undefined;
    }


}