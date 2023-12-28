let num = 1;    // # of what nail you are picking
let numDesign = 0;  // tracker of which nails already have designs on them
let clear = 0;  // if nail design clear is included
let price1 = 0; // total price of set
// let priceOfNail = finger.dataset.value;  // price of each nail
const triangle = document.getElementById('triangle-down');
const colorPicker = document.getElementById('picker');
document.getElementById('price').style.display = 'none';

function finger(img) {
    const finger = document.getElementById('finger' + num + 'ID');

    if (finger.style.backgroundImage == '' || 'url("./img/emptyNail.png")') {   // if nail is empty then...

        if (numDesign == 4) {   // if designs are chosen hide triangle and don't update price (so it won't spam update at the end)
            triangle.style.visibility = 'hidden';
            price1 = (+finger1ID.dataset.value) + (+finger2ID.dataset.value) + (+finger3ID.dataset.value) + (+finger4ID.dataset.value) + (+finger5ID.dataset.value);
            document.getElementById('cost').innerText = price1;
            document.getElementById('price').style.display = 'block';
        }

        if (num < 6) {
            finger.style = `background-image: url(${img})`;
        }

        moveright();
        numDesign++;
        num++;
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
    colorPicker.style.display = "none";

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

    for (let i = 1; i < 6; i++) {
        image[i] = document.getElementById('finger' + i + 'ID');
        image[i].style.backgroundColor = color.value;
    }

    return image;
}

function isClear() {    // if there is a clear design nail in the set
    clear += 1;
}

function clickHandler(clicked_id) { // resetting specific nail after all designs are chosen
    if (numDesign == 5) {

        triangle.style.visibility = 'visible';

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

        resetNail();

    }
}

function alwaysRunning() {
    if (clear > 0 && num > 5) { // if clear nail is in set & set is finished
        colorPicker.style.display = "inline-flex";
    }
    if (colorPicker.style.display == "inline-flex") {   // based on if the color picker is shown, position triangle in the correct position
        triangle.style.top = '285px';
    }
    if (colorPicker.style.display == "none") {  // same as above
        triangle.style.top = '225px';
    }
}

function price(amount) {
    const finger = document.getElementById('finger' + num + 'ID');
    finger.dataset.value = amount;
}

function testCheck() {
    console.log("num: " + num);
    console.log("numDesign: " + numDesign);
    console.log("bkrd img: "+document.getElementById('finger1ID').style.backgroundImage);
}

setInterval(alwaysRunning, 100);

setInterval(testCheck, 5000);