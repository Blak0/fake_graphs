//Node class used in Graph
class Node {
    constructor(val, edges = []) {
        this.value = val;
        this.edges = edges;
        this.visited = false;
    }

    isAttached(neighbour) {
        if(this.edges.includes(neighbour.value)){
            return true;
        }
        return false;
    }
}