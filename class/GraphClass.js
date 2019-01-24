class Graph {
    constructor() {
        this.nodes = [];
    }

    createNode(val, edges) {
        console.log(val);
        if (val === undefined) {
            console.log(`Node value is undefined`);
            return;
        }
        if (this.nodes.find(x => x.value === val) !== undefined) {
            console.log(`Nazwa ${val} jest już zajęta!`)
            return;
        }

        let node = new Node(val, edges);
        this.nodes.push(node);
    }

    destroyNode(val) {
        var index = this.nodes.findIndex(x => x.value == val);
        for (var i = 0; i < this.nodes.length; i++) {
            if (i == index) { continue; }
            iteratingNode = this.getNodeFromValue(this.nodes[i]);
            destroyedNode = this.nodes[index];
            this.detachNodes(this.getNodeFromValue(destroyedNode, iteratingNode));
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
        console.log(node2);

        let index1 = node2.edges.findIndex(x => x.value == val1);
        let index2 = node1.edges.findIndex(x => x.value == val2);

        node2.edges.splice(index1, 1);
        node1.edges.splice(index2, 1);
    }

    getNodeFromValue(val) {
        return this.nodes.find(x => x.value == val);
    }
}
