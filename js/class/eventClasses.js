//MoveEvent variables
let clickedNode;

//Attach/Detach Event variables
let startNode;
let endNode;

//each event represents individual mode
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
        startNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
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
        endNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);

        attachLine = undefined;
        startNode.backgroundColor = backgroundColor;

        if (startNode === undefined || endNode === undefined) {
            return;
        }

        if (startNode !== endNode) {
            graph.attachNodes(startNode.value, endNode.value);
        }
        startNode = undefined;
        endNode = undefined;
    }
}

class DetachEvent {
    mousePressed() {
        startNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);
        if (!startNode) {
            return;
        }

        startNode.backgroundColor = 175;
    }

    mouseReleased() {
        if (!startNode) {
            return;
        }
        endNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);

        startNode.backgroundColor = backgroundColor;

        if (startNode === undefined || endNode === undefined) {
            return;
        }

        if (startNode !== endNode) {
            graph.detachNodes(startNode.value, endNode.value);
        }
        startNode = undefined;
        endNode = undefined;
    }
}

class FindPathEvent {
    mousePressed() {
        startNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);

        if (!startNode) {
            return;
        }
    }
    mouseReleased() {
        if (!startNode) {
            return;
        }
        endNode = graph.getNodeInPos(mouseX - width / 2, mouseY - height / 2);

        if (startNode === undefined || endNode === undefined) {
            return;
        }

        if (startNode === endNode) {
            return;
        }

        
        let path = graph.shortestPath(startNode.value, endNode.value);
        if (!path) {
            alert("Nodes aren't connected.")
        }
        else{
            let message = 'Shortest path: ';
            for(let i = 0; i < path.length -1; i++){
                message += path[i] + ' -> ';
            }
            message += path[path.length-1]; //this is because last arrow is irrevelant
            alert(message);
        }
        
        graph.nodes.map(node => node.visited = false);


        startNode = undefined;
        endNode = undefined;
    }


}