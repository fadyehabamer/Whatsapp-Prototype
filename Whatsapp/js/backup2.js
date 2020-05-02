 //document.getElementsByClassName('restoring').style.width="80%";
 document.getElementById('loading').style.transitionDuration = "10s";
 document.getElementById("loading").style.width = "90vw";


 setTimeout(function () {
   window.open("backup3.html", "_self");
 }, 11000);

 setTimeout(function () {
   alert("Don't block popuos. Click on Always Show");
 }, 12000);

 var i = 0;

 function Timer() {
   document.getElementById('restoring').innerHTML = "Restoring messages (" + i + "%)";
   i++;
   if (i > 100) {
   }
   else {
     setTimeout(Timer, 100);
   }
 }