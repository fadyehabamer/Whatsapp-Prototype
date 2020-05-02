var i = 0;
function Timer() {
  document.getElementById("loading").innerHTML = i + "%";
  i++;
  if (i > 100) {
  } else {
    setTimeout(Timer, 30);
  }
}

setTimeout(function () {
  window.open("main/chats.html", "_self");
}, 6000);

setTimeout(function () {
  alert("Don't block popuos. Click on Always Show");
}, 7000);
