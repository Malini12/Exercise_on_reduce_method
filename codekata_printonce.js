var str = "mississipie";
var myarr = str.split("");
var newarr = [];
var count = myarr.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});
console.log(count);
for (i in count) {
  if (count[i] == 1) {
    newarr.push(i);
  }
}
console.log("".concat(...newarr));
