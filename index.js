let num = 1;
let clear = 0;
let cost = 0;
let singleItemPrice = 0;
var num1 = 0;
var num2 = 0;
var amounts;
const triangle = document.getElementById('triangle-down');
const colorPicker = document.getElementById('picker');

function finger(img) {
    const finger = document.getElementById('finger' + num + 'ID');
    let priceOfNail = finger.dataset.value;
    if (finger.style.backgroundImage == '') {
        moveright();

        if (num < 6) {
            finger.style = `background-image: url(${img})`;
        }
        num++;
        if (num > 5) {
            triangle.style.visibility = 'hidden';
            num1 = 1;
        }
    }
    else {
        if (num < 6 && num2 != 1) {
            finger.style = `background-image: url(${img})`;
            //cost += amounts;
        }
        triangle.style.visibility = 'hidden';
        num1 = 1;
    }
}

function reset(color) {
    num = 1;
    clear = 0;
    cost = 0;
    triangle.style.visibility = 'visible';
    triangle.style.left = '404px';
    triangle.style.top = '225px';
    colorPicker.style.display = "none";
    document.getElementById('basic').style.pointerEvents = 'all';

    for (let i = 1; i < 6; i++) {
        document.getElementById('finger' + i + 'ID').style = `background-color:${color}`;
    }
}

function resetNail() {
    const finger = document.getElementById('finger' + num + 'ID');
    let priceOfNail = finger.dataset.value;
    num1 = 0;
    console.log("this is the price of nail: " + priceOfNail);
    if (num1 != 1) {
        cost = cost - priceOfNail;
    }
    num2 = 1;

}

function moveright() {
    triangle.style.left = `${triangle.offsetLeft + 141}px`;
}

function show(nailSet, name) {
    const nail = document.getElementById(`${nailSet}`);
    nail.style.display = "block";
    document.getElementById('buttonWords').innerHTML = `${name}`;
}

function hide(nailSet) {
    const nail = document.getElementById(`${nailSet}`);
    nail.style.display = "none";
}

function setColor(color) {
    let image = [];

    for (let i = 1; i < 6; i++) {
        image[i] = document.getElementById('finger' + i + 'ID');
        image[i].style.backgroundColor = color.value;
    }

    return image;
}

function isClear() {
    clear += 1;
}

function clickHandler(clicked_id) {
    triangle.style.visibility = 'visible';
    //document.getElementById('basic').style.pointerEvents = 'all';
    const finger = document.getElementById('finger' + num + 'ID');
    num1 = 1;

    if (clicked_id == 'finger1ID') {
        triangle.style.left = '404px';
        num1 = 1;
        num = 1;
        resetNail();

    }
    if (clicked_id == 'finger2ID') {
        triangle.style.left = '545px';
        num1 = 1;
        num = 2;
        resetNail();
    }
    if (clicked_id == 'finger3ID') {
        triangle.style.left = '686px';
        num1 = 1;
        num = 3;
        resetNail();
    }
    if (clicked_id == 'finger4ID') {
        triangle.style.left = '827px';
        num1 = 1;
        num = 4;
        resetNail();
    }
    if (clicked_id == 'finger5ID') {
        triangle.style.left = '968px';
        num1 = 1;
        num = 5;
        resetNail();
    }


    num2 = 1;
}

function alwaysRunning() {
    if (clear > 0 && num > 5) {
        colorPicker.style.display = "inline-flex";
    }
    if (colorPicker.style.display == "inline-flex") {
        triangle.style.top = '285px';
    }
    if (colorPicker.style.display == "none") {
        triangle.style.top = '225px';
    }
    document.getElementById('cost').innerText = cost;
}

function price(amount) {
    const finger = document.getElementById('finger' + num + 'ID');
    amounts = amount;
    if (num1 != 1 || num2 != 1) {
        cost += amount;
    }
    finger.dataset.value = amount;
    singleItemPrice = amount;


    document.getElementById('cost').innerText = cost;


}
setInterval(alwaysRunning, 100);