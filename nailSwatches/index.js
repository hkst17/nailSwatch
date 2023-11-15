var num = 1;
var clear = 0;

function finger(img) {
    moveright();
    console.log(img);
    const finger = document.getElementById('finger' + num + 'ID');
    finger.style = `background-image: url(${img})`;
    num++;
    console.log(clear);
    if (num > 5) {
        document.getElementById('triangle-down').style.visibility = 'hidden';
        if(clear >  0){
            document.getElementById('picker').style.display = "inline-flex";
        }
        
    }
}

function reset(color) {
    num = 1;
    clear = 0;
    document.getElementById('triangle-down').style.visibility = 'visible';
    document.getElementById('triangle-down').style.left = '404px';
    document.getElementById('picker').style.display = "none";
    for (var i = 1; i < 6; i++) {
        document.getElementById('finger' + i + 'ID').style = `background-color:${color}`;
    }
}

function moveright() {
    const arrow = document.getElementById('triangle-down');
    arrow.style.left = `${arrow.offsetLeft + 141}px`;
}

function show(nailSet, name) {
    const nail = document.getElementById(`${nailSet}`);
    nail.style.display = "block";
    document.getElementById('buttonWords').innerHTML=`${name}`;
}

function hide(nailSet) {
    const nail = document.getElementById(`${nailSet}`);
    nail.style.display = "none";
}

function setColor(color) {
    var image = [];

    for (var i = 1; i < 6; i++) {
        image[i] = document.getElementById('finger' + i + 'ID');
        image[i].style.backgroundColor = color.value;
        console.log(image[i]);
    }

    return image;

}

function setColorOneByOne(color) {
    const image = document.getElementById('finger' + num + 'ID');
    image.style.backgroundColor = color.value;
    num++;
}

function isClear() {
    clear += 1;
}


