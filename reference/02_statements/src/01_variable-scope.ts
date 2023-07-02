console.log(Date === globalThis.Date);
console.log(console === globalThis.console);

function func() {
  const variable = 123;
  return variable;
}
console.log(func());
// console.log(variable);

// console.log(x);
const x = 100;
function a() {
  console.log(x);
}
a();

{
  const y = 200;
  console.log(y);
}
// console.log(y);

const browser: string = 'Firefox';
if (browser === 'Firefox') {
  const browserFirefox = 'Firefox';
  console.log(browserFirefox);
  //   console.log(browserNotFirefox);
} else {
  const browserNotFirefox = 'Firefox以外';
  //   console.log(browserFirefox);
  console.log(browserNotFirefox);
}
// console.log(browserFirefox, browserNotFirefox));

let [browser_1, browser_2]: [string, string | undefined] = ['Edge', undefined];
if (browser_1 === 'Firefox') {
  browser_2 = 'Firefox';
} else {
  browser_2 = 'Firefox以外';
}
console.log(browser_2);

function func_1() {
  //   foo = 'ローカル変数のつもり';
}
func_1();
