let currentEvent = new MoveEvent();

function mousePressed() {
    if (moveCheckbox.checked()) {
        currentEvent = new MoveEvent();
    }
    else if (attachCheckbox.checked()) {
        currentEvent = new AttachEvent();
    }
    if(typeof(currentEvent !== null)){
        currentEvent.mousePressed();
    }
}

function mouseReleased() {
    if(typeof(currentEvent !== null)){
        currentEvent.mouseReleased();
    }
}