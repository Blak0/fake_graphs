class ModeEvent {
    constructor(node) {
        this.eventNode = node;
    }
}
class MoveEvent extends ModeEvent {
    mousePressed() {
        this.eventNode.followMouse();
    }

    mouseReleased() {
        this.eventNode.unfollowMouse();
    }
}

class AttachEvent extends ModeEvent {
    mousePressed() {
        this.eventNode.backgroundColor = 35;
        attachLine = new AttachLine(this.eventNode.pos.x, this.eventNode.pos.y);
    }

    mouseReleased() {
        let attachingNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);

        attachLine = undefined;
        this.eventNode.backgroundColor = backgroundColor;

        if (!attachingNode) {
            return;
        }

        if (this.eventNode !== attachingNode) {
            graph.attachNodes(this.eventNode, attachingNode);
        }
    }
}

class DetachEvent extends ModeEvent {
    mousePressed() {
        this.eventNode.backgroundColor = 175;
    }

    mouseReleased() {
        let detachNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);

        this.eventNode.backgroundColor = backgroundColor;

        if (!detachNode) {
            return;
        }

        if (this.eventNode !== detachNode) {
            graph.detachNodes(this.eventNode, detachNode);
        }
    }
}

class FindPathEvent extends ModeEvent {
    mousePressed() {
        this.eventNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);
        if (!this.eventNode) {
            return;
        }
    }
    mouseReleased() {
        if (!this.eventNode) {
            return;
        }
        let endNode = graph.getNodeInPos(mouseX - xOffset, mouseY - yOffset);

        if (this.eventNode === undefined || endNode === undefined) {
            return;
        }

        if (this.eventNode === endNode) {
            return;
        }


        let path = graph.shortestPath(this.eventNode, endNode);
        if (!path) {
            alert("Nodes aren't connected.")
        } else {
            let message = 'Shortest path: ';
            for (let i = 0; i < path.length; i++) {
                message += path[i].value + ' -> ';
            }
            message = message.slice(0, message.length - 4); //remove last arrow
            alert(message);
        }
    }


}