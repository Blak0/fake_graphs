var addInput, addButton;
var moveCheckbox;
var attachCheckbox;
var detachCheckbox;
var findPathCheckbox;

var checkboxes = [];

//UI class describes ui placement and links it to behaviour in events.js and eventClasses.js
class UI {
    static initUI() {
        let footerHeight = 50;
        let footerCenter = innerHeight - footerHeight / 2;
        let workingPos = 20;
        createCanvas(innerWidth, innerHeight - footerHeight);

        addInput = createInput();
        addInput.position(workingPos, footerCenter - addInput.height / 2);

        workingPos += addInput.width + 15;

        addButton = createButton('Add node');
        addButton.position(workingPos, footerCenter - addButton.height / 2);

        workingPos += addButton.width + 15;

        moveCheckbox = createCheckbox('Moving mode', true);
        moveCheckbox.position(workingPos, footerCenter - moveCheckbox.height / 2);
        moveCheckbox.width = 100;
        checkboxes.push(moveCheckbox);

        workingPos += moveCheckbox.width + 15;

        attachCheckbox = createCheckbox('Attach mode');
        attachCheckbox.position(workingPos, footerCenter - attachCheckbox.height / 2);
        attachCheckbox.width = 100;
        checkboxes.push(attachCheckbox);

        workingPos += attachCheckbox.width + 15;

        detachCheckbox = createCheckbox('Detach mode');
        detachCheckbox.position(workingPos, footerCenter - detachCheckbox.height / 2);
        detachCheckbox.width = 100;
        checkboxes.push(detachCheckbox);

        workingPos += detachCheckbox.width + 15;

        findPathCheckbox = createCheckbox('Find path mode');
        findPathCheckbox.position(workingPos, footerCenter - findPathCheckbox.height / 2);
        findPathCheckbox.width = 100;
        checkboxes.push(findPathCheckbox);

        addButton.mousePressed(() => {
            graph.createNode(addInput.value(), 0, 0);
            addInput.value('');
        });

        //if checkbox is checked uncheck other checkboxes (because you can be in only one mode)
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].changed(function () {
                if (checkboxes[i].checked()) {
                    UI.checkOnlyThisCheckbox(checkboxes[i]);
                }
                else {
                    checkboxes[i].checked(true);
                }
            });
        }
    }

    static checkOnlyThisCheckbox(box) {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked(false);
        }
        box.checked(true);
    }
}

