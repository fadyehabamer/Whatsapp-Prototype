var emojodiv = document.getElementById("emojidiv").style;
var i = 1;

function check() {
    document.getElementById('input').value = document.getElementById('input').value.substr(0, 25);
    var len = document.getElementById('input').value.length;
    document.getElementById('inputno').innerHTML = 25 - len;
    document.getElementById('input').focus();
}


function clicked() {
    i = i * (-1);
    if (i == -1) {
        emoji()
    }
    if (i == 1) {
        kbd()
    }
}

function emoji() {
    emojodiv.transitionDuration = "0.15s";
    emojodiv.display = "block";
    emojodiv.marginTop = "37vw";
    emojodiv.height = "70vw";
    document.getElementById("emojinoti").style.display = "block";
    document.getElementById('emoji').src = "icons/ic_keyboard.png";
    document.getElementById('next').style.bottom = "70vw";
    document.getElementById('bigemoji').style.display = "inline";
    document.getElementById('emojinoti1').style.display = "block";
}

function kbd() {
    document.getElementById('emoji').src = "icons/ic_btn_emoji.png";
    emojodiv.height = "0vw";
    emojodiv.marginTop = "120vw";
    document.getElementById("emojinoti").style.display = "none";
    document.getElementById('input').focus();
    document.getElementById('next').style.bottom = "0vw";
    document.getElementById('bigemoji').style.display = "none";
    document.getElementById('emojinoti1').style.display = "none";
}