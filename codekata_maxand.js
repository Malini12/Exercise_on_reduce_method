var arr = [4, 8, 12, 16];
let index = 1;
var max = [];
var i = 1;
var max = arr.reduce((acc, value, index) => {
  acc[index] = value & arr[i];
  i = i + 1;
  return acc;
}, []);
console.log(max);
var maxi = 0;
max.filter(isbig);
function isbig(val) {
  if (val > maxi) {
    maxi = val;
  }
}
console.log(maxi);
