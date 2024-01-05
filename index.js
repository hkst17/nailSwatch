let num = 1;    // # of what nail you are picking
let numDesign = 0;  // tracker of which nails already have designs on them
let clear = 0;  // if nail design clear is included
let price1 = 0; // total price of set
let isNailClear = false;
let designOrColorBool = true; // design is picked auto
// let priceOfNail = finger.dataset.value;  // price of each nail
const triangle = document.getElementById('triangle-down');
const colorPicker1 = document.getElementById('picker');
const designOrColorText = document.querySelector("#designOrColor")
const pickerInd = document.getElementById('pickerInd');
document.getElementById('price').style.display = 'none';
pickerInd.style.visibility = 'hidden';
const indQ = document.getElementById('indQ');
indQ.style.display = 'none';

designOrColorText.addEventListener("click", function () {
    if (designOrColorText.textContent == "Design") {
        designOrColorText.textContent = "Color";
        designOrColorBool = false;
        colorPicker1.style.display = "none";

    }
    else {
        designOrColorText.textContent = "Design";
        // colorPicker1.style.visibility = 'hidden';
        pickerInd.style.visibility = "hidden";
        // colorPicker1.style.visibility = "hidden";
        colorPicker1.style.display = "inline-flex";
        designOrColorBool = true;
        triangle.style.visibility = 'hidden';
    }
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
            if (clear>0) {
                indQ.style.display = 'block';
                colorPicker1.style.display = "inline-flex";
            }


        }

        if (numDesign < 5) {
            finger.style = `background-image: url(${img})`;
            numDesign++;
            num++;
            moveright();
        }
    }
}

function reset(color) { // reset all nails 
    num = 1;
    numDesign = 0;
    clear = 0;
    document.getElementById('price').style.display = 'none';
    triangle.style.visibility = 'visible';
    triangle.style.left = '404px';
    triangle.style.top = '225px';
    colorPicker1.style.display = "none";
    pickerInd.style.display = "none";
    indQ.style.display = "none";
    for (let i = 1; i < 6; i++) {
        document.getElementById('finger' + i + 'ID').style = `background-image:  url('./img/emptyNail.png')`;
    }
}

function resetNail() {  // reset one by one
    const finger = document.getElementById('finger' + num + 'ID');
    finger.style = `background-image:  url('./img/emptyNail.png')`;
    // document.getElementById('finger' + num + 'ID').style = 'none';
    document.getElementById('price').style.display = 'none';
    numDesign--;
}

function moveright() {
    triangle.style.left = `${triangle.offsetLeft + 141}px`;
    // colorPicker1.style.left = `${colorPicker1.offsetLeft + -500}px`;
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

    if (designOrColorBool == true && numDesign >= 5) {
        for (let i = 1; i < 6; i++) {
            image[i] = document.getElementById('finger' + i + 'ID');
            image[i].style.backgroundColor = color.value;
        }

        return image;
    }
    else {
        if (isNailClear == true && designOrColorBool == false && numDesign == 5) {
            image = document.getElementById('finger' + num + 'ID');
            image.style.backgroundColor = color.value;
        }
    }




}

function isClear() {    // if there is a clear design nail in the set
    clear += 1;
    isNailClear = true;
}

function clickHandler(clicked_id) { // resetting specific nail after all designs are chosen

    if (numDesign == 5 && designOrColorBool == true) {

        triangle.style.visibility = 'visible';
        triangle.style.top = '320px';
        if (clicked_id == 'finger1ID') {
            triangle.style.left = '404px';
            num = 1;
        }
        if (clicked_id == 'finger2ID') {
            triangle.style.left = '545px';
            num = 2;
        }
        if (clicked_id == 'finger3ID') {
            triangle.style.left = '686px';
            num = 3;
        }
        if (clicked_id == 'finger4ID') {
            triangle.style.left = '827px';
            num = 4;
        }
        if (clicked_id == 'finger5ID') {
            triangle.style.left = '968px';
            num = 5;
        }
        // if(designOrColorBool == false){
        //     resetNail();
        // }
        resetNail();
    }
    else {
        if (numDesign == 5 && designOrColorBool == false) {
            pickerInd.style.display = "inline-flex";
            triangle.style.top = '285px';
            triangle.style.visibility = 'visible';
            pickerInd.style.visibility = "visible";
            if (clicked_id == 'finger1ID') {
                pickerInd.style.left = '-283px';
                triangle.style.left = '404px';
                num = 1;
            }
            if (clicked_id == 'finger2ID') {
                pickerInd.style.left = '-142px';
                triangle.style.left = '545px';
                num = 2;
            }
            if (clicked_id == 'finger3ID') {
                pickerInd.style.left = '-1px';
                triangle.style.left = '686px';
                num = 3;
            }
            if (clicked_id == 'finger4ID') {
                pickerInd.style.left = '140px';
                triangle.style.left = '827px';
                num = 4;
            }
            if (clicked_id == 'finger5ID') {
                pickerInd.style.left = '281px';
                triangle.style.left = '968px';
                num = 5;
            }
        }
    }
}

function alwaysRunning() {
    if (clear > 0 && num > 5) { // if clear nail is in set & set is finished
        // if (clear > 0) { // if clear nail is in set & set is finished
        // colorPicker1.style.display = "inline-flex";
    }
    if (colorPicker1.style.display == "inline-flex") {   // based on if the color picker is shown, position triangle in the correct position
        // triangle.style.top = '270px';
    }
    if (colorPicker1.style.display == "none") {  // same as above
        // triangle.style.top = '225px';
    }
}

function price(amount) {
    const finger = document.getElementById('finger' + num + 'ID');
    finger.dataset.value = amount;
}

function testCheck() {
    console.log("num: " + num);
    console.log("numDesign: " + numDesign);
    console.log("bkrd img: " + document.getElementById('finger1ID').style.backgroundImage);
    console.log("design or color text: " + designOrColorText.textContent);
}

setInterval(alwaysRunning, 100);

setInterval(testCheck, 5000);