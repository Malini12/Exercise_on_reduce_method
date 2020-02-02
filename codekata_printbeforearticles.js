str = "the sun rises in the east";
myarr = str.split(" ");
console.log(myarr);
var s = myarr.reduce((acc, value, index, array) => {
  if (value == "the" || value == "a" || value == "an") {
    var m = array[index + 1];
    acc.push(m);
  }
  return acc;
}, []);
console.log(s);
