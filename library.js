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
