let a = 5;
let b = 6;
let c = 7;

function area(a, b, c) {
  let p = (a + b + c) / 2;
  let value = p * (p - a) * (p - b) * (p - c);
  let area = Math.sqrt(value);
  console.log("Area: " + area);
}

area(a, b, c);
