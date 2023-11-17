let num = 1;
let num1 = 1;
let clear = 0;
let cost = 0;
let singleItemPrice = 0;
var oldNail;
const triangle = document.getElementById('triangle-down');
const colorPicker = document.getElementById('picker');

function finger(img) {
    moveright();
    //cost += singleItemPrice;
    // const finger = document.getElementById('finger' + num + 'ID');
    if (num < 6) {
        // oldNail = finger.dataset.value;
        // console.log(oldNail);
        finger.style = `background-image: url(${img})`;
        
    }
    num++; 
    //num1++;
    if (num > 5 || num1 == 5) {
        triangle.style.visibility = 'hidden';
        document.getElementById('basic').style.pointerEvents = 'none';
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
    document.getElementById('basic').style.pointerEvents = 'all';
    num1 = 5;
    const finger = document.getElementById('finger' + num + 'ID');

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
    if (cost == 0) {
        document.getElementById('cost').innerText = cost;
    }
    // console.log(num);
    // console.log(num1);
}

function price(amount) {
    const finger = document.getElementById('finger' + num + 'ID');
    finger.dataset.value = amount;
    singleItemPrice = amount;
    cost += amount;

    if (((oldNail != singleItemPrice) || (oldNail == singleItemPrice)) && document.getElementById('finger' + num + 'ID').style.backgroundImage != '') {
        cost = cost - oldNail;
    }

    if((oldNail != singleItemPrice) && document.getElementById('finger' + num + 'ID').style.backgroundImage != ''){
        //cost = cost + amount;
    }
    
    document.getElementById('cost').innerText = cost;

    console.log(oldNail);
    console.log(singleItemPrice);

}
setInterval(alwaysRunning, 100);