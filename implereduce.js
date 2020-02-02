/*let house = ["chair", "car", "bus", "cat", "table", "system"];
const home = house.reduce((acc, value) => {
  if (value.length > 3) {
    acc.push(value);
  }
  return acc;
}, []);
console.log(home);*/

function mystack(a) {
  myarr = a.split(" ");
  console.log(myarr);
  const bal = myarr.reduce((acc, value) => {
    if (value == "{" || value == "(" || value == "[") {
      acc.push(value);
    } else if (value == "}" || value == ")" || value == "]") {
      acc.pop();
    }
    return acc;
  }, []);
  if (bal.length > 0) {
    console.log("unbalanced");
  } else {
    console.log("balanced");
  }
}
mystack("{ ( [ ] ) }");
mystack(" { { }");
