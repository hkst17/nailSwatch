let num = 1;    // # of what nail you are picking
let numDesign = 0;  // tracker of which nails already have designs on them
let clear = 0;  // if nail design clear is included
let price1 = 0; // total price of set
let isNailClear = false;
let designBool = true; // design is picked auto
let colorBool = false;
// let priceOfNail = finger.dataset.value;  // price of each nail
const triangle = document.getElementById('triangle-down');
const colorPicker1 = document.getElementById('picker');
const pickerInd = document.getElementById('pickerInd');
document.getElementById('price').style.display = 'none';
pickerInd.style.visibility = 'hidden';
const indQ = document.getElementById('indQ');
indQ.style.display = 'none';

// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("dot");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// designOrColorText.addEventListener("click", function () {
//     if (designOrColorText.textContent == "Design") {
//         color();
//     }
//     else {
//         design();
//     }
// });

// function design() {
//     designOrColorText.textContent = "Design";
//     pickerInd.style.visibility = "hidden";
//     colorPicker1.style.display = "inline-flex";
//     designOrColorBool = true;
//     triangle.style.visibility = 'hidden';
// }

// function color() {
//     designOrColorText.textContent = "Color";
//     designOrColorBool = false;
//     colorPicker1.style.display = "none";
// }

function buttonAlert() {
    // if (document.getElementById("color").disabled == true) {
    //     alert("Please select a style for this nail first");
    // }
    alert("Please select a style for this nail first");
    // if(document.getElementById("color").style.disabled == true){
    //     document.getElementById("invisibleButton").style.right = '234px';
    // }
    // else{
    //     document.getElementById("invisibleButton").style.right = '320px';
    // }
}

design.addEventListener("click", function () {
    document.getElementById("color").style.backgroundColor = 'grey';
    designBool = true;
    colorBool = false;
    pickerInd.style.visibility = "hidden";
    colorPicker1.style.display = "inline-flex";
    triangle.style.visibility = 'hidden';
    document.getElementById('dropdown').style.display = 'inline-block';
    document.getElementById('nailSetContainer').style.display = 'block';
    // document.getElementById("color").disabled = true;
    // document.getElementById("invisibleButton").style.right = '234px';
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
    // document.getElementById("design").disabled = true;
    // document.getElementById("invisibleButton").style.right = '320px';
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
                    indQ.style.display = 'none';    // fix here
                    colorPicker1.style.display = "none";
                }
            }

        }

        if (numDesign < 5) {
            finger.style = `background-image: url(${img})`;
            numDesign++;
            num++;
            // document.getElementById("design").disabled = false;
            document.getElementById("design").style.backgroundColor = '#FD91CF';
            document.getElementById("invisibleButton").style.display = "none";
            // document.getElementById("color").disabled = true;
            document.getElementById("color").style.backgroundColor = 'grey';

            moveright();
        }
    }
}

function reset(color) { // reset all nails 
    num = 1;
    numDesign = 0;
    clear = 0;
    document.getElementById('price').style.display = 'none';
    document.getElementById('nailSetContainer').style.display = 'block';
    isNailClear = false;
    colorPicker1.style.display = "none";
    pickerInd.style.display = "none";
    indQ.style.display = "none";
    document.getElementById('picker').style.display = 'none';
    triangle.style.visibility = 'visible';
    triangle.style.left = '125px';
    // triangle.style.top = '60px';
    for (let i = 1; i < 6; i++) {
        document.getElementById('finger' + i + 'ID').style = `background-image:  url('./img/emptyNail.png')`;
    }
}

function resetNail() {  // reset one by one
    const finger = document.getElementById('finger' + num + 'ID');
    console.log(finger);
    // triangle.style.top = '60px';
    finger.style = `background-image:  url('./img/emptyNail.png')`;
    // document.getElementById('finger' + num + 'ID').style = 'none';
    document.getElementById('price').style.display = 'none';
    numDesign--;
    document.getElementById("invisibleButton").style.display = 'block';
    
    if (isNailClear == true) {
        if(finger.clickHandler.onclick == "isClear()"){
            clear--;
            console.log("yes");
        }
        // clear--;
        if (numDesign == 4) {
            // document.getElementById("color").disabled = true;
            document.getElementById("color").style.backgroundColor = 'grey';
            // document.getElementById("invisibleButton").style.display = "block";
        }
    }
}

function moveright() {
    triangle.style.left = `${triangle.offsetLeft+202}px`;
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
    // if (document.getElementsByClassName("finger").style.backgroundImage == '' || 'url("./img/emptyNail.png")') {
    //     clear += 1;
    //     isNailClear = true;
    // }
    if (clear < 5 && numDesign != 5) {
        clear++;
    }

}

function clickHandler(clicked_id) { // resetting specific nail after all designs are chosen

    if ((numDesign == 5 && designBool == true) || (numDesign == 5 && clear == 0)) {

        triangle.style.visibility = 'visible';
        //triangle.style.top = '40px';
        if (clicked_id == 'finger1ID') {
            // moveright();
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
            pickerInd.style.display = "flex";
            // triangle.style.top = '340px';
            triangle.style.visibility = 'none';
            pickerInd.style.visibility = "visible";
            if (clicked_id == 'finger1ID') {
                pickerInd.style.left = '185px';
                // triangle.style.left = '404px';
                num = 1;
            }
            if (clicked_id == 'finger2ID') {
                pickerInd.style.left = '326px';
                // triangle.style.left = '545px';
                num = 2;
            }
            if (clicked_id == 'finger3ID') {
                pickerInd.style.left = '467px';
                // triangle.style.left = '686px';
                num = 3;
            }
            if (clicked_id == 'finger4ID') {
                pickerInd.style.left = '608px';
                // triangle.style.left = '827px';
                num = 4;
            }
            if (clicked_id == 'finger5ID') {
                pickerInd.style.left = '749px';
                // triangle.style.left = '968px';
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