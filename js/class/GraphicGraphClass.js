//this class adds methods for working with nodes on canvas
class GraphicGraph extends Graph {
    constructor() {
        super();
    }

    createNode(val, x, y, edges) {
        //override createNode to use GraphicNode instead of Node
        if (super.checkIfUndefinedOrUsed(val)) {
            return;
        }
        let node = new GraphicNode(val, x, y, edges);
        this.nodes.push(node);
    }

    show() {
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = 0; j < this.nodes.length; j++) {
                let node1 = this.nodes[i];
                let node2 = this.nodes[j];
                if (node1.value !== node2.value && node1.isAttached(node2)) {

                    if (node1.belongsToPath && node2.belongsToPath) {
                        noFill();
                        stroke(0, 255, 0);
                        strokeWeight(4);
                        line(node1.pos.x, node1.pos.y, node2.pos.x, node2.pos.y);
                    }
                    else {
                        noFill();
                        stroke(255);
                        strokeWeight(3);
                        line(node1.pos.x, node1.pos.y, node2.pos.x, node2.pos.y);
                    }
                }
            }
        }

        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].show();
        }

    }

    getNodeInPos(x, y) {
        let searchPos = createVector(x, y);
        for (let i = 0; i < this.nodes.length; i++) {
            let currentNode = this.nodes[i];
            let dist = p5.Vector.dist(currentNode.pos, searchPos);
            if (dist < currentNode.r / 2) {
                return currentNode;
            }
        }
        return undefined;
    }
}