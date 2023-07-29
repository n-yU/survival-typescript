function normalFunc(x, y, z) {
  console.log(x, y, z);
}
function func(options) {
  console.log(options.x, options.y, options.z);
}
normalFunc(1, 2, 3);
func({ x: 1, z: 3, y: 2 });

function func1({ x, y, z }) {
  console.log(x, y, z);
}
func1({ z: 3, y: 2, x: 1 });

function findProducts(
  isSale = false,
  withDetails = false,
  freeShipping = false
) {
  console.log(isSale, withDetails, freeShipping);
}
findProducts(undefined, undefined, true);

function findProducts1({
  isSale = false,
  withDetails = false,
  freeShipping = false,
}) {
  console.log(isSale, withDetails, freeShipping);
}
findProducts1({ freeShipping: true });

function func2({ hoge: fuga }) {
  console.log(fuga);
}
func2({ hoge: 123 });
