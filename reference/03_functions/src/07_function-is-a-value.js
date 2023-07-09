function hello() {
  return "Hello World";
}

const helloWorld = hello;
console.log(helloWorld());

function hello() {
  return "KONNICHIWA";
}
console.log(helloWorld());

function main() {
  function hello_() {
    console.log("hello");
  }
  hello_();
}
main();
// hello_();
