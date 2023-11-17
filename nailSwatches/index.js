let num = 1;
let clear = 0;
const triangle = document.getElementById('triangle-down');
const colorPicker = document.getElementById('picker');

function finger(img) {
    moveright();
    const finger = document.getElementById('finger' + num + 'ID');
    finger.style = `background-image: url(${img})`;
    num++;

    if (num > 5) {
        triangle.style.visibility = 'hidden';
    }
}

function reset(color) {
    num = 1;
    clear = 0;
    triangle.style.visibility = 'visible';
    triangle.style.left = '404px';
    triangle.style.top = '225px';
    colorPicker.style.display = "none";

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
}
setInterval(alwaysRunning, 100);