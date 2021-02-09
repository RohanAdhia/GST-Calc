document.getElementById("btn").addEventListener("click", function() {
  var cp = parseInt(document.getElementById("cp").value);
  var sp = parseInt(document.getElementById("sp").value);
  var pl = (sp - cp);
  var per = (pl / cp) * 100;
  if (cp == 0 && sp > 0) {
    document.getElementById("pl").innerHTML = "The profit is ₹" + pl.toFixed(2);
    document.getElementById("per").style.display = "none";
  } else if (sp > cp) {
    document.getElementById("pl").innerHTML = "The profit is ₹" + pl.toFixed(2);
    document.getElementById("per").innerHTML = "The positive margin is " + per.toFixed(2) + "%";
    document.getElementById("pl").style.display = "block";
    document.getElementById("per").style.display = "block";
  } else if (sp < cp) {
    document.getElementById("pl").innerHTML = "The loss is ₹" + (pl * -1).toFixed(2);
    document.getElementById("per").innerHTML = "The negative margin is " + (per * -1).toFixed(2) + "%";
    document.getElementById("pl").style.display = "block";
    document.getElementById("per").style.display = "block";
  } else {
    document.getElementById("pl").innerHTML = "This is a break-even trasaction"
    document.getElementById("pl").style.display = "block";
    document.getElementById("per").style.display = "none";
  }
});

function hideBtn() {
  var cp = document.getElementById("cp").value;
  var sp = document.getElementById("sp").value;
  if (cp == "" && sp == "") {
    document.getElementById("btn").disabled = true;
    document.getElementById("pl").style.display = "none";
    document.getElementById("per").style.display = "none";
  } else {
    document.getElementById("btn").disabled = false;
    document.getElementById("btn_clear").disabled = false;
  }
}

document.getElementById("btn_clear").addEventListener("click", function() {
  document.getElementById("cp").value = "";
  document.getElementById("sp").value = "";
  document.getElementById("pl").style.display = "none";
  document.getElementById("per").style.display = "none";
  document.getElementById("btn").disabled = true;
  document.getElementById("cp").focus();
});

// function disableButton() {
//   document.getElementById("btn").disabled = true;
//   document.getElementById("pl").style.display = "none";
//   document.getElementById("per").style.display = "none";
//     // document.getElementById("btn").disabled = true;
//     // document.getElementById("pl").style.display = "none";
//     // document.getElementById("btn").disabled = false;
//     // document.getElementById("per").style.display = "none";
//     // document.getElementById("btn_clear").disabled = false;
//   }



// document.addEventListener("keydown",function(event){
//   var keyPressed = event.key;
//   var cp = parseInt(document.getElementById("cp").value);
//   var sp = parseInt(document.getElementById("sp").value);
//   if(keyPressed == "+" || keyPressed == "-" || Number.isInteger(cp) == true && sp == "-"|| Number.isInteger(sp) == true) {
//     disableButton();
//   } else {
//     // event.preventDefault();
//   }
// });

// document.getElementById("sp").addEventListener("keydown",function(event){
//   var keyPressed = event.key;
//   if(keyPressed === 187 || keyPressed === 189) {
//     alert("Only Numbers Allowed");
//   }
// });
