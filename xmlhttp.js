function xml(qstr) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log(this.responseText)
      return this.responseText
    }
  };
  xhttp.open("GET", "https://script.google.com/macros/s/AKfycbyjTonSlOhwkCFTaoIzgPcguGGrpv7UMvwqjElaMU9On2UrOm6Dx746WZjGnQkyWSWoHA/exec?" + qstr, true);
  xhttp.send();
}
