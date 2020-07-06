class Graph {
    constructor() {
        this.nodes = [];
    }

    createNode(name, x, y, edges) {
        if (name && this.checkIfNodeNameUsed(name)) {
            return;
        }
        let node = new GraphNode(name, x, y, edges);
        this.nodes.push(node);
    }

    checkIfNodeNameUsed(name) {
        if (this.nodes.find(n => n.value === name)) {
            console.log(`Value ${name} already used!`)
            return true;
        }
        return false;
    }

    destroyNode(val) {
        var index = this.nodes.findIndex(x => x.value == val);
        let destroyedNode = this.nodes[index];
        if (destroyedNode === undefined) {
            return;
        }
        for (var i = 0; i < this.nodes.length; i++) {
            if (i == index) {
                continue;
            }
            let iteratingNode = this.nodes[i];
            this.detachNodes(destroyedNode.value, iteratingNode.value);
        }
        this.nodes.splice(index, 1);
    }

    attachNodes(node1, node2) {
        if (node1 === undefined || node2 === undefined) {
            return;
        }
        if (!node1.edges.includes(node2.value)) {
            node1.edges.push(node2.value);
        }
        if (!node2.edges.includes(node1.value)) {
            node2.edges.push(node1.value);
        }
    }

    detachNodes(node1, node2) {
        if (node1 === undefined || node2 === undefined) {
            return;
        }

        let index1 = node2.edges.findIndex(x => x.value == node1.value);
        let index2 = node1.edges.findIndex(x => x.value == node2.value);

        node2.edges.splice(index1, 1);
        node1.edges.splice(index2, 1);
    }

    getNodeFromValue(val) {
        return this.nodes.find(x => x.value == val);
    }

    search(startValue, destinationValue) {
        let q = new Queue();
        q.push(startValue);
        while (q.length > 0) {
            let nodeValue = q.pop();
            let node = this.getNodeFromValue(nodeValue);
            if (nodeValue === destinationValue) {
                return node;
            }
            node.edges.map(edge => {
                if (this.getNodeFromValue(edge).visited === false) {
                    q.push(edge);
                    this.getNodeFromValue(edge).visited = true;
                }
            });
            node.visited = true;
        }
        return null;
    }

    shortestPath(startValue, destinationValue) {
        let q = new Queue();
        q.push(startValue);
        this.getNodeFromValue(startValue).pathFromStart = [startValue];
        while (q.length > 0) {
            let nodeValue = q.pop();
            let node = this.getNodeFromValue(nodeValue);
            if (nodeValue == destinationValue) {
                return node.pathFromStart;
            }
            node.edges.map(edge => {
                let edgeNode = this.getNodeFromValue(edge);
                if (edgeNode.visited === false) {
                    q.push(edge);
                    let newPath = node.pathFromStart.concat([edge]);
                    edgeNode.pathFromStart = newPath;
                    edgeNode.visited = true;
                }
            });
            node.visited = true;
        }
        return null;
    }

    show() {
        noFill();
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = 0; j < this.nodes.length; j++) {
                let node1 = this.nodes[i];
                let node2 = this.nodes[j];
                if (node1.value !== node2.value && node1.isAttached(node2)) {
                    
                    if (node1.belongsToPath && node2.belongsToPath) {
                        stroke(0, 255, 0);
                        strokeWeight(4);
                    } else {
                        stroke(255);
                        strokeWeight(3);
                    }
                    line(node1.pos.x, node1.pos.y, node2.pos.x, node2.pos.y);

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