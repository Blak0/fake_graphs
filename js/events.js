
let currentEvent = new MoveEvent();

function mousePressed() {
    if (moveCheckbox.checked()) {
        currentEvent = new MoveEvent();
    }
    else if (attachCheckbox.checked()) {
        currentEvent = new AttachEvent();
    }
    else if (detachCheckbox.checked()){
        currentEvent = new DetachEvent();
    }
    else if(findPathCheckbox.checked()){
        currentEvent = new FindPathEvent();
    }
    currentEvent.mousePressed();
}

function mouseReleased() {
    currentEvent.mouseReleased();
}