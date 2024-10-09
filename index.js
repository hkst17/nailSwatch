let num = 1;    // # of what nail you are picking
let numDesign = 0;  // tracker of which nails already have designs on them
let clear = 0;  // if nail design clear is included
let price1 = 0; // total price of set
// let popUpCount = 0;
let isNailClear = false;
let designBool = true; // design is picked auto
let colorBool = false;
const triangle = document.getElementById('triangle-down');
const colorPicker1 = document.getElementById('picker');
const pickerInd = document.getElementById('pickerInd');
document.getElementById('price').style.display = 'none';
pickerInd.style.visibility = 'hidden';
const indQ = document.getElementById('indQ');
indQ.style.display = 'none';
const popUp = document.getElementById('popUpText');
const cancel = document.getElementById('cancel');

function buttonAlert() {
    alert("Please select a style for this nail first");
}

function popUpBox() {
    // ++popUpCount;
    cancel.classList.toggle('show');
    popUp.classList.toggle('show');
    
    // if(Math.abs(popUpCount % 2) == 1){
    //     // document.getElementById("dot").disabled = true;
    //     document.getElementById("cancel").style.visibility = "visible";
    //     document.getElementById("dot").style.visibility = "hidden";
    // }
    // if(popUpCount % 2 == 0){
    //     // document.getElementById("cancel").disabled = true;
    //     document.getElementById("dot").style.visibility = "visible";
    //     document.getElementById("cancel").style.visibility = "hidden";
    // }
    // document.getElementById("cancel").style.visibility = "hidden";
    // console.log("you clicked pop up");
}

design.addEventListener("click", function () {
    document.getElementById("color").style.backgroundColor = 'grey';
    designBool = true;
    colorBool = false;
    pickerInd.style.display = "none";
    pickerInd.style.visibility = "hidden";
    colorPicker1.style.display = "inline-flex";
    triangle.style.visibility = 'hidden';
    document.getElementById('dropdown').style.display = 'inline-block';
    document.getElementById('nailSetContainer').style.display = 'inline-block';
    if (document.getElementById("design").style.backgroundColor = 'grey') {
        document.getElementById("design").style.backgroundColor = '#FD91CF';
    }

    console.log("you clicked design");
});

color.addEventListener("click", function () {
    designBool = false;
    colorBool = true;

    document.getElementById('dropdown').style.display = 'none';
    document.getElementById("design").style.backgroundColor = 'grey';
    colorPicker1.style.display = "none";
    document.getElementById('nailSetContainer').style.display = 'none';

    if (document.getElementById("color").style.backgroundColor = 'grey') {
        document.getElementById("color").style.backgroundColor = '#FD91CF';
    }

    console.log("you clicked color");
});

function finger(img) {
    const finger = document.getElementById('finger' + num + 'ID');

    if (finger.style.backgroundImage == '' || 'url("./img/emptyNail.png")') {   // if nail is empty then...

        if (numDesign == 4) {   // if designs are chosen hide triangle and don't update price (so it won't spam update at the end)
            triangle.style.visibility = 'hidden';
            price1 = (+finger1ID.dataset.value) + (+finger2ID.dataset.value) + (+finger3ID.dataset.value) + (+finger4ID.dataset.value) + (+finger5ID.dataset.value);
            document.getElementById('cost').innerText = price1;
            document.getElementById('price').style.display = 'block';
            document.getElementById('row').style.marginTop = "20px";

            if (clear > 0) {
                indQ.style.display = 'block';
                colorPicker1.style.display = "inline-flex";
            }

            else {
                if (clear == 0) {
                    colorPicker1.style.display = "none";
                }
            }

        }

        if (numDesign < 5) {
            finger.style = `background-image: url(${img})`;
            numDesign++;
            num++;
            document.getElementById("design").style.backgroundColor = '#FD91CF';
            document.getElementById("invisibleButton").style.display = "none";
            document.getElementById("color").style.backgroundColor = 'grey';
            moveright();
        }
    }
}

function reset(color) { // reset all nails 
    num = 1;
    numDesign = 0;
    clear = 0;
    designBool = true;
    colorBool = false;
    document.getElementById('dropdown').style.display = 'inline-block';
    document.getElementById('price').style.display = 'none';
    document.getElementById('nailSetContainer').style.display = 'block';
    isNailClear = false;
    colorPicker1.style.display = "none";
    pickerInd.style.display = "none";
    indQ.style.display = "none";
    document.getElementById('picker').style.display = 'none';
    triangle.style.visibility = 'visible';
    triangle.style.left = '125px';

    for (let i = 1; i < 6; i++) {
        document.getElementById('finger' + i + 'ID').style = `background-image:  url('./img/emptyNail.png')`;
    }
}

function resetNail() {  // reset one by one
    const finger = document.getElementById('finger' + num + 'ID');
    console.log(finger);
    finger.style = `background-image:  url('./img/emptyNail.png')`;
    document.getElementById('price').style.display = 'none';
    numDesign--;
    document.getElementById("invisibleButton").style.display = 'inline-block';

    if (isNailClear == true) {
        if (finger.clickHandler.onclick == "isClear()") {
            clear--;
            console.log("yes");
        }

        if (numDesign == 4) {
            document.getElementById("color").style.backgroundColor = 'grey';
        }
    }
}

function moveright() {
    triangle.style.left = `${triangle.offsetLeft + 202}px`;
}

function show(nailSet, name) {  // for the dropdown
    const nail = document.getElementById(`${nailSet}`);
    nail.style.display = "block";
    document.getElementById('buttonWords').innerHTML = `${name}`;
}

function hide(nailSet) {    // also for dropdown
    const nail = document.getElementById(`${nailSet}`);
    nail.style.display = "none";
}


function setColor(color) {  // color changing ability of nails
    let image = [];
    if (designBool == true && numDesign >= 5) {
        for (let i = 1; i < 6; i++) {
            image[i] = document.getElementById('finger' + i + 'ID');
            image[i].style.backgroundColor = color.value;
        }

        return image;
    }

    else {
        if (isNailClear == true && colorBool == true && numDesign == 5) {
            image = document.getElementById('finger' + num + 'ID');
            image.style.backgroundColor = color.value;
        }
    }
}

function isClear() {    // if there is a clear design nail in the set
    if (clear < 5 && numDesign != 5) {
        clear++;
    }
}

function clickHandler(clicked_id) { // resetting specific nail after all designs are chosen
    if ((numDesign == 5 && designBool == true) || (numDesign == 5 && clear == 0)) {

        document.getElementById('nailSetContainer').style.position = 'static';
        triangle.style.visibility = 'visible';
        if (clicked_id == 'finger1ID') {
            triangle.style.left = '125px';
            num = 1;
        }
        if (clicked_id == 'finger2ID') {
            triangle.style.left = '327px';
            num = 2;
        }
        if (clicked_id == 'finger3ID') {
            triangle.style.left = '529px';
            num = 3;
        }
        if (clicked_id == 'finger4ID') {
            triangle.style.left = '731px';
            num = 4;
        }
        if (clicked_id == 'finger5ID') {
            triangle.style.left = '933px';
            num = 5;
        }
        resetNail();
    }

    else {
        if (numDesign == 5 && colorBool == true) {
            triangle.style.visibility = 'none';
            pickerInd.style.visibility = "visible";
            pickerInd.style.display = "block";
            if (clicked_id == 'finger1ID') {
                pickerInd.style.left = '-933px';
                num = 1;
            }
            if (clicked_id == 'finger2ID') {
                pickerInd.style.left = '-731px';
                num = 2;
            }
            if (clicked_id == 'finger3ID') {
                pickerInd.style.left = '-529px';
                num = 3;
            }
            if (clicked_id == 'finger4ID') {
                pickerInd.style.left = '-327px';
                num = 4;
            }
            if (clicked_id == 'finger5ID') {
                pickerInd.style.left = '-125px';
                num = 5;
            }
        }
    }
}

function alwaysRunning() {
    if (clear == 0) {
        isNailClear = false;
    }

    else {
        if (clear > 0 && clear <= 5) {
            isNailClear = true;
        }
    }
}

function price(amount) {
    const finger = document.getElementById('finger' + num + 'ID');
    finger.dataset.value = amount;
}

function testCheck() {
    console.log("num: " + num);
    console.log("numDesign: " + numDesign);
    console.log("clear: " + clear);
    console.log("is clear: " + isNailClear);
    console.log(designBool);
}

setInterval(alwaysRunning, 100);

setInterval(testCheck, 5000);