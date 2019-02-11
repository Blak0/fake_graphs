//Node class used in Graph
class Node {
    constructor(val, edges = []) {
        this.value = val;
        this.edges = edges;
        this.visited = false;
        this.pathFromStart = false;
        this.belongsToPath = false;
    }

    isAttached(neighbour) {
        if (this.edges.includes(neighbour.value)) {
            return true;
        }
        return false;
    }
}