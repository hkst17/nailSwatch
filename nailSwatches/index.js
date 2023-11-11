var num = 1;
function finger(img){
    console.log(img);
    const finger = document.getElementById('finger'+num+'ID');
    finger.style = `background-image: url(${img})`;
    num++;
    
}

function reset(color) {
    num = 1;
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
