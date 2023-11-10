/*
console.log('script loaded...');

function paint(img){
    console.log(img);
    const nail = document.getElementById('nailID');
    nail.style = `background-color:${img}`;

}
*/
function nail0(img) {
    console.log(img);
    const nail = document.getElementById('finger1ID');
    nail.style = `background-image: url(${img})`;
}
function nail1(img) {
    console.log(img);
    const nail = document.getElementById('finger2ID');
    nail.style = `background-image: url(${img})`;
}
function nail2(img) {
    console.log(img);
    const nail = document.getElementById('finger3ID');
    nail.style = `background-image: url(${img})`;
}
function nail3(img) {
    console.log(img);
    const nail = document.getElementById('finger4ID');
    nail.style = `background-image: url(${img})`;
}
function nail4(img) {
    console.log(img);
    const nail = document.getElementById('finger5ID');
    nail.style = `background-image: url(${img})`;
}

function reset(color) {
    document.getElementById('finger1ID').style = `background-color:${color}`;
    document.getElementById('finger2ID').style = `background-color:${color}`;
    document.getElementById('finger3ID').style = `background-color:${color}`;
    document.getElementById('finger4ID').style = `background-color:${color}`;
    document.getElementById('finger5ID').style = `background-color:${color}`;
}

// const colorPicker = document.getElementById("color-picker");
// const image = document.getElementById("image");

// colorPicker.addEventListener("input", function() {
//   image.style.backgroundColor = `hue-rotate(${this.value}deg)`;
// });
