class Node {
    constructor(val, edges = []) {
        this.value = val;
        this.edges = edges;
        this.visited = false;
    }

    isAttached(neighbour){
        //Checks if this node is attached to given node
        if(this.edges.find(x => neighbour.value == x)!== undefined){
            return true;
        }
        return false;
    }
}