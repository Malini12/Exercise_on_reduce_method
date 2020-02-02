let myarr = [4, 2, 2, 8];
let newarr = myarr.reduce((acc, value) => {
  if (value % 2 !== 0) {
    acc.push(value);
  }
  return acc;
}, []);
if (newarr.length == 0) {
  console.log(-1);
} else {
  console.log(newarr);
}
