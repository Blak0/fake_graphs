let attachLine = undefined;

class AttachLine {
    constructor(x, y) {
        this.startPos = createVector(x, y);
    }

    show() {
        noFill();
        stroke(255, 80);
        strokeWeight(2);
        line(this.startPos.x, this.startPos.y, mouseX - width / 2, mouseY - height / 2);
    }
}