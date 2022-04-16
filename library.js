


function vlookup(searchvalue, array, headervalue, overwrite_value) {
  
  var foreach = array.forEach(function(item, index) {
    if (item[0] == searchvalue) {
      return item[index]
    }
  }
  return foreach;
}
