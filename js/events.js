//starting mode
let currentEvent = new MoveEvent();

function mousePressed() {
    if (moveCheckbox.checked()) {
        currentEvent = new MoveEvent();
    }
    else if (attachCheckbox.checked()) {
        currentEvent = new AttachEvent();
    }
    currentEvent.mousePressed();

}

function mouseReleased() {
    if(typeof(currentEvent !== null)){
        currentEvent.mouseReleased();
    }
}