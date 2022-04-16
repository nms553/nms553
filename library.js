Array.prototype.vlookup = vlookup

function vlookup(searchvalue, headervalue, overwrite_value, lookupindex) {
  var foreach
  var that = this
  var startindex = 0
  if (lookupindex) {
    if (isNaN(lookupindex)) {
      startindex = that[0].indexOf(lookupindex)
    } else {
      startindex = lookupindex
    }
  }
  if (isNaN(headervalue)) {
    headervalue = that[startindex].indexOf(headervalue)
  }

  this.forEach(function(item, index) {
    if (item[startindex] == searchvalue) {
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
