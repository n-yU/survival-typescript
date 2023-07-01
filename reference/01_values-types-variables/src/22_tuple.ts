function tuple() {
  return [1, 'ok', true];
}
const list: unknown[] = tuple();
// console.log(list[0].toString());
console.log((list[0] as string).toString());

function tuple_1(): [number, string, boolean] {
  return [1, 'ok', true];
}
const list_1: [number, string, boolean] = tuple_1();
console.log(list_1[0].toExponential());
console.log(list_1[1].length);
console.log(list_1[2].valueOf());
list_1.push(4, 5);
console.log(list_1, list_1.length);
// console.log(list_1[5]);
console.log(typeof list_1);

const [num, str, bool]: [number, string, boolean] = tuple_1();
console.log(num, str, bool);
const [, , bool_1]: [number, string, boolean] = tuple_1();
console.log(bool_1);

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function take3Seconds(): Promise<string> {
  await sleep(3000);
  return 'finished!';
}

async function take5Seconds(): Promise<number> {
  await sleep(5000);
  return -1;
}

(async () => {
  const str_1: string = await take3Seconds();
  console.log(str_1);
  const num_1: number = await take5Seconds();
  console.log(num_1);

  const tuple_2: [string, number] = await Promise.all([
    take3Seconds(),
    take5Seconds(),
  ]);
  console.log(tuple_2);
})();
