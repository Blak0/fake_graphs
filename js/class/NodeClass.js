//Node class used in Graph
class GraphNode {
    constructor(val, x, y, edges = []) {
        this.value = val;
        this.edges = edges;
        this.visited = false;
        this.pathFromStart = false;
        this.belongsToPath = false;

        this.pos = createVector(x, y);
        this.r = 100;
        this.lockedToMouse = false;
        this.backgroundColor = backgroundColor;
    }

    isAttached(neighbour) {
        if (this.edges.includes(neighbour.value)) {
            return true;
        }
        return false;
    }

    show(){
        fill(this.backgroundColor);
        stroke(255);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, this.r);

        let fontSize = 26;
        textSize(fontSize);
        fill(255);
        writeCenteredText(this.pos, this.value, fontSize);

        if(this.lockedToMouse){
            this.pos.x = mouseX - xOffset;
            this.pos.y = mouseY - yOffset;
        }
    }

    followMouse(){
        this.lockedToMouse = true;
    }

    unfollowMouse(){
        this.lockedToMouse = false;
    }
}