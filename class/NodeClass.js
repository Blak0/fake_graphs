class Node {
    constructor(val, edges = []){
        this.value = val;
        this.edges = edges;
        this.visited = false;
    }
}