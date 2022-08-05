
function loadXML(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var resp = this.responseText    
      resp = resp.replace("/*O_o*/\ngoogle.visualization.Query.setResponse(", "")
      var lio = resp.lastIndexOf(")")
      var substr = resp.substring(0, lio)
      var obj = JSON.parse(substr)
      return obj
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
