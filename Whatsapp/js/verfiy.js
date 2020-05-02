setTimeout(function(){
    document.getElementById("inpt").disabled = true;
    document.getElementById("inpt").value = 235375;
    }, 2300);
    var i = 10;
    function Timer() {
     i--;
      if (i < 1) {
        document.getElementById('sms').style.color="hsl(170,100%,25%)";
        document.getElementById('sms2').style.color="hsl(170,100%,25%)";
        document.getElementById('img1').src="icons/icon_msg_g.png";
        document.getElementById('img2').src="icons/icon_dailer_g.png";
      }
      else {
        setTimeout(Timer, 1000);
      }
     if(i<10){
         i= "0"+i;
     }
      document.getElementById('h').innerHTML = "0:" + i;
      document.getElementById('r').innerHTML = "0:" + i;
    }
    function check(){
    document.getElementById('inpt').value = document.getElementById('inpt').value.substr(0, 6);
    var len = document.getElementById('inpt').value.length;
    document.getElementById('inpt').focus();
    if(len == 6){
    document.getElementById('inpt').blur();
    alert("phone no verified");
    document.getElementById('next').style.display="inline-block";
    document.getElementById("inpt").disabled = true;
    }
    }
    
    function aas(){
    document.getElementById('messages').style.top="3vw";
    };
    setTimeout(aas, 2000);
    
    setTimeout(function(){
    document.getElementById('messages').style.top="-30vw"
    document.getElementById('next').style.display="inline-block"
    }, 7000);
    setTimeout(function(){
    document.getElementById('next').style.display="inline-block"
    }, 4500);
    