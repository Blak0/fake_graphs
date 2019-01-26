class GraphicNode extends Node {
    constructor(val, x, y, edges){
        super(val, edges);
        this.pos = createVector(x, y);
        this.r = 100;
    }

    show(){
        fill(backgroundColor);
        stroke(255);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, this.r);

        let fontSize = 26;
        textSize(fontSize);
        fill(255);
        writeCenteredText(this.pos, this.value, fontSize)
    }
}