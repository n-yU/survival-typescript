let x = 1;
switch (x) {
  case 1:
    const sameName = 'A';
    console.log(sameName);
    break;
  case 2:
    // const sameName = 'B';
    // console.log(sameName);
    break;
}

const f = (x: number) => {
  switch (x) {
    case 1: {
      const sameName = 'A';
      console.log(sameName);
      break;
    }
    case 2: {
      const sameName = 'B';
      console.log(sameName);
      break;
    }
  }
};
f(x);
x = 2;
f(x);
