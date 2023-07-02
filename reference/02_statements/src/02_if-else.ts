function f1() {
  if (value === 0) {
    console.log('zero');
  } else {
    console.log('not zero');
  }
}

let value = 0;
f1();
value = 1;
f1();

function f2() {
  if (value === 0) {
    console.log('zero');
  } else if (value === 1) {
    console.log('one');
  } else {
    console.log('zero zor one');
  }
}

f2();
value = 2;
f2();

// const result = if (value === 0) "OK" else "NG";
let result = value === 0 ? 'OK' : 'NG';
console.log(result);
value = 0;
result = value === 0 ? 'OK' : 'NG';
console.log(result);

value = 1;
if (value === 0) {
  result = 'OK';
} else {
  result = 'NG';
}
console.log(result);
