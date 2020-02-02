var arr = [2, 4];
//var i = 1;
var max = arr.reduce((acc, value) => {
  acc = acc ^ value;
  // i = i + 1;
  return acc;
}, 0);
console.log(max);
//var a = 0 ^ 2;
//console.log(a);
