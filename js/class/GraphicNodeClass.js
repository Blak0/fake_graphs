class GraphicNode extends Node {
    constructor(val, x, y, edges){
        super(val, edges);
        this.pos = createVector(x, y);
        this.r = 100;
        this.lockedToMouse = false;
        this.backgroundColor = backgroundColor;
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
            this.pos.x = mouseX - width/2;
            this.pos.y = mouseY - height/2;
        }
    }

    followMouse(){
        this.lockedToMouse = true;
    }

    unfollowMouse(){
        this.lockedToMouse = false;
    }
}