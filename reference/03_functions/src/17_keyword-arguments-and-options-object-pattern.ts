function func({ x, y, z }: { x: number; y: number; z: number }) {
  console.log(x, y, z);
}
func({ z: 3, y: 2, x: 1 });

type Options = {
  x: number;
  y: number;
  z: number;
};
function func1({ x, y, z }: Options) {
  console.log(x, y, z);
}
func1({ y: 2, x: 1, z: 3 });

function func2({ x, y = 0, z = 0 }: { x: number; y?: number; z?: number }) {
  console.log(x, y, z);
}
func2({ x: 1, y: undefined });

type Options1 = {
  x?: number;
  y?: number;
  z?: number;
};
function func3({ x = 0, y = 0, z = 0 }: Options1 = {}) {
  console.log(x, y, z);
}
func3();
func3({});
func3({ x: 1, y: 2, z: 3 });
