var a = 10;
var b = 12;
var c = 15;
var bc = 0;
var count = 0;
var arr = { a: a, b: b, c: c };

for (var key in arr) {
  if (count == bc) {
    arr[key] = 1;
    eval(`${key} = 1`); 
  }
  count++;
}

console.log(a); 