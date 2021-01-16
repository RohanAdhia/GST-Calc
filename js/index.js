function round(number, decimalPlaces) {
  var factorOfTen = Math.pow(10, decimalPlaces)
  return Math.round(number * factorOfTen) / factorOfTen
}

function hideBtn() {
  if (document.getElementById("amt").value == "") {
    document.getElementById("btn").disabled = true;
    document.getElementById("gstamt").style.display = "none";
    document.getElementById("pregst").style.display = "none";
  } else {
    document.getElementById("btn").disabled = false;
    document.getElementById("btn_clear").disabled = false;
  }
}


document.getElementById("btn").addEventListener("click", function(){
  if(document.getElementById("withGST").checked === true) {
  var amount = parseInt(document.getElementById("amt").value);
  var percent = parseInt(document.getElementById("percent").value);
  var gstamt = amount - (amount * (100 / (100 + percent)))
  // var gst = round(gstamt, 2);
  var gst = gstamt.toFixed(2);
  var pregst = amount - gst;
  document.getElementById("gstamt").innerHTML = "Total GST : ₹" + gst;
  document.getElementById("pregst").innerHTML = "Pre-GST Amount : ₹" + pregst.toFixed(2);
  document.getElementById("gstamt").style.display = "block";
  document.getElementById("pregst").style.display = "block";
} else {
  var amount = parseInt(document.getElementById("amt").value);
  var percent = parseInt(document.getElementById("percent").value);
  var gstamt = (amount * percent / 100);
  var netprice = (amount + gstamt);
  document.getElementById("gstamt").innerHTML = "Total GST : ₹" + gstamt.toFixed(2);
  document.getElementById("pregst").innerHTML = "Post-GST Amount : ₹" + netprice.toFixed(2);
  document.getElementById("gstamt").style.display = "block";
  document.getElementById("pregst").style.display = "block";
}
});


document.getElementById("btn_clear").addEventListener("click", function(){
  document.getElementById("amt").value = "";
  document.getElementById("gstamt").style.display = "none";
  document.getElementById("pregst").style.display = "none";
  document.getElementById("btn").disabled = true;
  document.getElementById("amt").focus();
});
