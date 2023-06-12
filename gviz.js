function gviz(KEY, SHEET, TQ, CALLBACK) {

  var SPLIT1 = KEY.split("/edit")[0]
  var SPLIT2 = SPLIT1.split("/d/").reverse()[0]

  var URL = "https://docs.google.com/spreadsheets/d/" + SPLIT2 + "/gviz/tq?tqx=out:html&sheet=" + SHEET + "&" + "tq=" + TQ
  console.log(URL)
  
  fetch(URL).then(function(x) {
  	return x.text();
  }).then(function(result) {
  	//console.log(result)
    var RESPONSETEXT = result
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
  })

}

function init() {
  console.log("init")
}
