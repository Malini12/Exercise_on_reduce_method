let str = "aabbbcc";
//let myarr = [];
var sum = 0;
let myarr = str.split("");
console.log(myarr);
let count = myarr.reduce((acc, arr) => {
  acc[arr] = (acc[arr] || 0) + 1;
  if (acc[arr] > 2 && acc[arr] % 2 !== 0) {
    sum = sum + 1;
  }
  return acc;
}, {});
console.log(sum);
