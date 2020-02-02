var strarr = ["abc", "aab", "abc", "aba"];
var newarr = [];
var count = strarr.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});
for (i in count) {
  if (count[i] == 1) {
    newarr.push("verified");
  } else {
    newarr.push("verified");
    newarr.push(i + 1);
  }
}
console.log(newarr);
