Array.prototype.vlookup = vlookup
Array.prototype.makeTable = makeTable

function vlookup(searchvalue, headervalue, overwrite_value) {

  var foreach;
  var that = this

  if (isNaN(headervalue)) {
    headervalue = that[0].indexOf(headervalue)
  }

  this.forEach(function(item, index) {
    if (item[0] == searchvalue) {
      if (overwrite_value) {
        item[headervalue] = overwrite_value
        foreach = that
      } else {
        foreach = item[headervalue]
      }
    }

  })
  console.log(foreach)
  return foreach;


}





function makeTable() {
	
	var table = document.createElement("TABLE")
  var thead = document.createElement("THEAD")
  var tbody = document.createElement("TBODY")
  table.border = "1"
  
  this[0].forEach(function(item, index) {
  	var th = document.createElement("TH")
    th.innerText = item
    thead.appendChild(th)
  })
  this.shift()
	this.forEach(function(item, index) {
  	var tr = tbody.insertRow()
    item.forEach(function(jtem, j) {
    	tr.insertCell().innerText = jtem
    })
  })
  table.appendChild(thead)
  table.appendChild(tbody)
  return table
}



Array.prototype.JSONtoTable = function() {
  var that = this
  var header = Object.keys(that[0])
  var table = document.createElement("TABLE")
  table.border = "1"
  var tbody = document.createElement("TBODY")
  var thead = document.createElement("THEAD")
  var tr = thead.insertRow()
  header.forEach(function(item, index) {
  	var th = document.createElement("TH")
    th.innerText = item
    tr.appendChild(th)
  })
  that.forEach(function(item, index) {
  	var tr= tbody.insertRow()
    var values = Object.values(item)
    values.forEach(function(jtem, j) {
    	tr.insertCell().innerText = jtem
    })
    
  })
  table.appendChild(thead)
  table.appendChild(tbody)
  console.log(table)
  return table
}


function xget(uri, fn) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var parse = JSON.parse(this.responseText)
      window[fn](parse)
      
    }
  };
  xhttp.open("GET", uri, true);
  xhttp.send();
}

function next(result) {
	console.log(result)
}
