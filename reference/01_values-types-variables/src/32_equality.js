console.log(null === undefined);
console.log(0 === 0n);
console.log(0 === "0");

console.log(null == undefined);
console.log(0 == 0n);
console.log(0 == "0");
console.log(0 == "");
console.log(0 == false);
console.log("0" == false);
console.log("" == false);
console.log("" == "0");

console.log(NaN == NaN);
console.log(NaN === NaN);

console.log(Symbol("piano") == Symbol("piano"));
console.log(Symbol("piano") === Symbol("piano"));
const sym = Symbol(2);
console.log(sym === sym);

console.log({} == {});
console.log({} === {});
console.log({ age: 18 } == { age: 18 });
console.log({ equipment: "glasses" } === { equipment: "glasses" });
const obj = { hair: "blond" };
console.log(obj === obj);
