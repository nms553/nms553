//XMLHHTP GRAB FUNCTION -- DO NOT EDIT ANYTHING BELOW

function loadXMLDoc(url, x) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var json = JSON.parse(this.responseText)
      window[x](json[0])
      console.log(json[0])
    }
  };
  xhttp.open("GET", encodeURI(url), true);
  xhttp.send();
  
}

