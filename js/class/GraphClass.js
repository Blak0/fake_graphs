//this is the logical implementation of a graph
class Graph {
    constructor() {
        this.nodes = [];
    }

    checkIfUndefinedOrUsed(val) {
        if (val === undefined || val == '') {
            console.log('Node value is undefined or empty');
            return true;
        }
        if (this.nodes.find(n => n.value === val) !== undefined) {
            console.log(`Value ${val} already used!`)
            return true;
        }
        return false;
    }

    createNode(val, x, y, edges) {
        if (this.checkIfUndefinedOrUsed(val)) {
            return;
        }
        let node = new Node(val, x, y, edges);
        this.nodes.push(node);
    }

    destroyNode(val) {
        var index = this.nodes.findIndex(x => x.value == val);
        let destroyedNode = this.nodes[index];
        if(destroyedNode === undefined){
            return;
        }
        for (var i = 0; i < this.nodes.length; i++) {
            if (i == index) { continue; }
            let iteratingNode = this.nodes[i];
            this.detachNodes(destroyedNode.value, iteratingNode.value);
        }
        this.nodes.splice(index, 1);
    }

    attachNodes(val1, val2) {
        let node1 = this.getNodeFromValue(val1);
        let node2 = this.getNodeFromValue(val2);
        if (node1 === undefined || node2 === undefined) {
            return;
        }
        if (!node1.edges.includes(val2)) {
            node1.edges.push(val2);
        }
        if (!node2.edges.includes(val1)) {
            node2.edges.push(val1);
        }
    }

    detachNodes(val1, val2) {
        let node1 = this.getNodeFromValue(val1);
        let node2 = this.getNodeFromValue(val2);

        if (node1 === undefined || node2 === undefined) {
            return;
        }

        let index1 = node2.edges.findIndex(x => x.value == val1);
        let index2 = node1.edges.findIndex(x => x.value == val2);

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
}