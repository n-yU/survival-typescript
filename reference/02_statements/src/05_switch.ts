const f1 = (extension: string) => {
  switch (extension) {
    case 'js':
      console.log('JavaScript');
      break;
    case 'ts':
      console.log('TypeScript');
      break;
    default:
      console.log('不明な言語');
      break;
  }
};
for (const extension of ['js', 'ts', 'py']) {
  f1(extension);
}

const f2 = (extension: string) => {
  if (extension === 'js') {
    console.log('JavaScript');
  } else if (extension === 'ts') {
    console.log('TypeScript');
  } else {
    console.log('不明な言語');
  }
  return extension;
};
for (const extension of ['js', 'ts', 'py']) {
  f2(extension);
}

const f3 = (food: string) => {
  switch (food) {
    case '🍎':
    case '🍓':
    case '🍉':
      console.log('くだもの');
      break;
    case '🍙':
    case '🍜':
    case '🍞':
      console.log('炭水化物');
      break;
    case '🥕':
    case '🧅':
    case '🥬':
      console.log('野菜');
      break;
    default:
      console.log('未知の食べ物');
      break;
  }
};
for (const food of ['🍙', '🍓', '🥕', '🥺']) {
  f3(food);
}

console.log(null == undefined);
console.log(null === undefined);

function test(n: unknown): void {
  switch (n) {
    case null:
      console.log('THIS IS null');
      return;
    case undefined:
      console.log('THIS IS undefined');
      return;
    default:
      console.log('THIS IS THE OTHER');
  }
}
test(null);
test(undefined);
test(NaN);
