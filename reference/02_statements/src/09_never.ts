// const foo: never = 1;

const any: any = 1;
// const foo: never = any;

const foo: never = 1 as never;
console.log(foo, typeof foo);

const nev = 1 as never;
const a: string = nev;
const b: string[] = nev;
console.log(nev, a, b);

function throwError(): never {
  throw new Error('aiueo');
}
// throwError();

function forever(): never {
  while (true) {}
}
// forever();

type NumberString = number & string;

const ok: void = undefined;
// const ng: never = undefined;

// function func(): never {}

type Extension = 'js' | 'ts' | 'json';

function printLang(ext: Extension): void {
  switch (ext) {
    case 'js':
      console.log('JavaScript');
      break;
    case 'ts':
      console.log('TypeScript');
      break;
  }
}
for (const ext of ['js', 'ts', 'json'] as Extension[]) {
  console.log(ext);
  printLang(ext);
}

function printLang_1(ext: Extension): void {
  switch (ext) {
    case 'js':
      console.log('JavaScript');
      break;
    case 'ts':
      console.log('TypeScript');
      break;
    case 'json':
      console.log('JSON');
      break;
    default:
      const exhaustivenessCheck: never = ext;
      break;
  }
}
for (const ext of ['js', 'ts', 'json'] as Extension[]) {
  console.log(ext);
  printLang_1(ext);
}

class ExhaustiveError extends Error {
  constructor(value: never, message = `Unsupported type: ${value}`) {
    super(message);
  }
}

function printLang_2(ext: Extension): void {
  switch (ext) {
    case 'js':
      console.log('JavaScript');
      break;
    case 'ts':
      console.log('TypeScript');
      break;
    // default:
    //   throw new ExhaustiveError(ext);
    default:
      throw new ExhaustiveError(ext as never);
  }
}
for (const ext of ['js', 'ts', 'json'] as Extension[]) {
  console.log(ext);
  printLang_2(ext);
}
