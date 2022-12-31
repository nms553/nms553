function gviz(KEY, SHEET, TQ, FUNC) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var RESPONSETEXT = this.responseText
      var TEMPLATE = document.createElement("DIV")
      TEMPLATE.innerHTML = RESPONSETEXT

      var ARR = []
      var TRS = TEMPLATE.getElementsByTagName("TR")

      for (var i = 1; i < TRS.length; i++) {
        var SUBARR = []
        var TDS = TRS[i].getElementsByTagName("TD")
        for (var j = 0; j < TDS.length; j++) {
          SUBARR.push(TDS[j].textContent)
        }
        ARR.push(SUBARR)
      }

      //console.log(ARR)

      window[FUNC](ARR)

    }
  };
  xhttp.open("GET", "https://docs.google.com/spreadsheets/d/" + KEY + "/gviz/tq?tqx=out:html&sheet=" + SHEET + "&" + "tq=" + TQ, true);
  xhttp.send();
}
