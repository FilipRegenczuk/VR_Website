// Get the modal
var modal1 = document.getElementById("modal_30days");
var modal2 = document.getElementById("modal_6months");
var modal3 = document.getElementById("modal_1year");
var modal4 = document.getElementById("modal_2years");

// Get the button that opens the modal
var btnOpen1 = document.getElementById("button1");
var btnOpen2 = document.getElementById("button2");
var btnOpen3 = document.getElementById("button3");
var btnOpen4 = document.getElementById("button4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closebutton")[0];
var span2 = document.getElementsByClassName("closebutton")[1];
var span3 = document.getElementsByClassName("closebutton")[2];
var span4 = document.getElementsByClassName("closebutton")[3];

var btnExit1 = document.getElementById("buttonExit1");
var btnExit2 = document.getElementById("buttonExit2");
var btnExit3 = document.getElementById("buttonExit3");
var btnExit4 = document.getElementById("buttonExit4");

// When the user clicks the button, open the modal 
btnOpen1.onclick = function() {
    modal1.style.display = "block";
}

btnOpen2.onclick = function() {
    modal2.style.display = "block";
}

btnOpen3.onclick = function() {
    modal3.style.display = "block";
}

btnOpen4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
modal2.style.display = "none";
}

span3.onclick = function() {
modal3.style.display = "none";
}

span4.onclick = function() {
modal4.style.display = "none";
}

btnExit1.onclick = function() {
    modal1.style.display = "none";
}

btnExit2.onclick = function() {
    modal2.style.display = "none";
}

btnExit3.onclick = function() {
    modal3.style.display = "none";
}

btnExit4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2
     || event.target == modal3 || event.target == modal4) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
    }
}