 function move() {
  let elem = document.getElementById("greenBar");


let width = 1;

 let id = setInterval(frame, 10);
  function frame() {
  	  if (width >= 10) {

clearInterval(id);
 } else {   width++;
 	 elem.style.width = width + '%';
 	      elem.innerHTML = width * .1  + '%';
  }
 }
}

function move1() {
  let elem = document.getElementById("redBar");


let width = 1;

 let id = setInterval(frame, 1);
  function frame() {
  	  if (width >= 10) {

clearInterval(id);
 } else {   width++;
 	 elem.style.width = width + '%';
 	      elem.innerHTML = width * .3  + '%';
  }
 }
}
function move2() {
  let elem = document.getElementById("yellowBar");


let width = 1;

 let id = setInterval(frame, 1);
  function frame() {
  	  if (width >= 10) {

clearInterval(id);
 } else {   width++;
 	 elem.style.width = width + '%';
 	      elem.innerHTML = width * .7  + '%';
  }
 }
}