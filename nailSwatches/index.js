var num = 1;
function finger(img) {
    moveright();
    console.log(img);
    const finger = document.getElementById('finger' + num + 'ID');
    finger.style = `background-image: url(${img})`;
    num++;
    if(num>5){
        document.getElementById('triangle-down').style.visibility = 'hidden';
    }
}

function reset(color) {
    num = 1;
    document.getElementById('triangle-down').style.visibility = 'visible';
    document.getElementById('triangle-down').style.left = '407px';
    for (var i = 1; i < 6; i++) {
        document.getElementById('finger' + i + 'ID').style = `background-color:${color}`;
    }
}

function moveright() {
    const arrow = document.getElementById('triangle-down');
    arrow.style.left = `${arrow.offsetLeft + 139}px`;
}
// const colorPicker = document.getElementById("color-picker");
// const image = document.getElementById("image");

// colorPicker.addEventListener("input", function() {
//   image.style.backgroundColor = `hue-rotate(${this.value}deg)`;
// });

