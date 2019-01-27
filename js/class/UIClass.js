var addInput, addButton;
var moveCheckbox;
var attachCheckbox;

var checkboxes = [];
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

        moveCheckbox = createCheckbox('Moving mode');
        moveCheckbox.position(workingPos, footerCenter - moveCheckbox.height / 2);
        moveCheckbox.width = 100;
        checkboxes.push(moveCheckbox);

        workingPos += moveCheckbox.width + 15;

        attachCheckbox = createCheckbox('Attach mode');
        attachCheckbox.position(workingPos, footerCenter - attachCheckbox.height / 2);
        attachCheckbox.width = 100;
        checkboxes.push(attachCheckbox);

        addButton.mousePressed(() => {
            graph.createNode(addInput.value(), 0, 0);
            addInput.value('');
        });

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

