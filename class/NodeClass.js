class Node {
    constructor(val, x = 0, y = 0, edges = []) {
        this.pos = createVector(x, y);
        this.value = val;
        this.edges = edges;
        this.visited = false;
    }
}