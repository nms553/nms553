function gviz(KEY, SHEET, TQ, CALLBACK) {
  var URL = "https://docs.google.com/spreadsheets/d/" + KEY + "/gviz/tq?tqx=out:html&sheet=" + SHEET + "&" + "tq=" + TQ
  console.log(URL)
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var RESPONSETEXT = this.responseText
      var TEMPLATE = document.createElement("DIV")
      TEMPLATE.innerHTML = RESPONSETEXT

      var ARR = []
      var TRS = TEMPLATE.getElementsByTagName("TR")

      for (var i = 0; i < TRS.length; i++) {
        var SUBARR = []
        var TDS = TRS[i].getElementsByTagName("TD")
        for (var j = 0; j < TDS.length; j++) {
          SUBARR.push(TDS[j].textContent)
        }
        ARR.push(SUBARR)
      }


      CALLBACK(ARR)

    }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}
