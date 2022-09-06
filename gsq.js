function gsq(ss, qstr, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	//console.log(this.responseText)
      callback(this.responseText)
    }
  };
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycbyjTonSlOhwkCFTaoIzgPcguGGrpv7UMvwqjElaMU9On2UrOm6Dx746WZjGnQkyWSWoHA/exec?ss=" + ss + "&" + qstr, true);
  xhttp.send();
}
