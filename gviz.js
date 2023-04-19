function gviz(KEY, SHEET, TQ, CALLBACK) {

  var SPLIT1 = KEY.split("/edit")[0]
  var SPLIT2 = SPLIT1.split("/d/").reverse()[0]

  var URL = "https://docs.google.com/spreadsheets/d/" + SPLIT2 + "/gviz/tq?tqx=out:html&sheet=" + SHEET + "&" + "tq=" + TQ
  console.log(URL)

  var XHTTP = new XMLHttpRequest();
  XHTTP.onreadystatechange = function() {
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
  XHTTP.open("GET", URL, true);
  XHTTP.send();
}


var testurl = "1kqkXpF31nI0ek7D3bFMCG7nffgA1__LGI7sg6ZAxQqQ"

// ****************GVIZOBJ****************

function gvizObj(KEY, SHEET, TQ, CALLBACK) {
  var SPLIT = KEY.split("/edit")[0].split("/d/").reverse()[0]
  var URL = "https://docs.google.com/spreadsheets/d/" + SPLIT + "/gviz/tq?sheet=" + SHEET + "&" + "tq=" + TQ
  console.log(URL)
  fetch(URL).then(function(X) {
    return X.text();
  }).then(function(Y) {
    var SPLIT = Y.split("setResponse(")[1]
    SPLIT.length = SPLIT.length - 2
    var LINDEXOF = SPLIT.lastIndexOf(");")
    var SUBSTRING = SPLIT.substring(0, LINDEXOF)
    var PARSE = JSON.parse(SUBSTRING)
    //console.log(PARSE)
    var ARR = []
    var HEADER = PARSE.table.cols
        if (!HEADER[1].label) {
        	PARSE.table.rows[0].c.forEach(function(ITEM, I) {
          	HEADER[I].label = ITEM.v
          })
          }
    //console.log(HEADER)
    for (var ITEM of PARSE.table.rows) {
      var OBJ = {}
      ITEM.c.forEach(function(JTEM, J) {
        var HEADING = HEADER[J].label
        if (HEADING) {
          if (JTEM) {
            OBJ[HEADING] = JTEM.v
          } else {
            OBJ[HEADING] = ""
          }
        }
      })
      ARR.push(OBJ)
    }
    CALLBACK(ARR)
  })
}
// ****************************************








function testMe() {
  gvizObj(testurl, "JD", "select *", function(result) {
    console.log(result)
  })

}










function gvizHTML(KEY, SHEET, TQ, CALLBACK) {

  var SPLIT1 = KEY.split("/edit")[0]
  var SPLIT2 = SPLIT1.split("/d/").reverse()[0]

  var URL = "https://docs.google.com/spreadsheets/d/" + SPLIT2 + "/gviz/tq?tqx=out:html&sheet=" + SHEET + "&" + "tq=" + TQ
  console.log(URL)

  var XHTTP = new XMLHttpRequest();
  XHTTP.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var RESPONSETEXT = this.responseText


      CALLBACK(RESPONSETEXT)

    }
  };
  XHTTP.open("GET", URL, true);
  XHTTP.send();
}






function gvizTest(KEY, SHEET, TQ, CALLBACK) {

  var SPLIT = KEY.split("/edit")[0].split("/d/").reverse()[0]

  var URL = "https://docs.google.com/spreadsheets/d/" + SPLIT + "/gviz/tq?tqx=out:html&sheet=" + SHEET + "&" + "tq=" + TQ
  console.log(URL)
  
  fetch(URL).then(function(x) { return x.text();}).then(function(result) {
    console.log(result)
    var dialog = document.createElement("DIALOG")
    var a = document.createElement("A")
    var div = document.createElement("DIV")
    a.href = "javascript:void(0)"
    a.setAttribute("onclick", "this.parentElement.close()")
    a.innerText = "Close"
    div.innerHTML = result
    dialog.append(a)
    dialog.append(div)
    document.getElementsByTagName("body")[0].prepend(dialog)
    dialog.show()
  })


  }
