Array.prototype.vlookup = vlookup

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





function makeTable(array) {
	
	var table = document.createElement("TABLE")
  var thead = document.createElement("THEAD")
  var tbody = document.createElement("TBODY")
  table.border = "1"
  
  array[0].forEach(function(item, index) {
  	var th = document.createElement("TH")
    th.innerText = item
    thead.appendChild(th)
  })
  array.shift()
	array.forEach(function(item, index) {
  	var tr = tbody.insertRow()
    item.forEach(function(jtem, j) {
    	tr.insertCell().innerText = jtem
    })
  })
  table.appendChild(thead)
  table.appendChild(tbody)
  return table
}
