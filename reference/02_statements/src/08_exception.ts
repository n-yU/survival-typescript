try {
  throw new Error('something wrong');
} catch (e: any) {
  console.log(e.message);
}

const f1 = (errorType: string) => {
  try {
    switch (errorType) {
      case 'type':
        throw new TypeError();
      case 'range':
        throw new RangeError();
      case 'eval':
        throw new EvalError();
      default:
        throw new Error('other error');
    }
  } catch (e: any) {
    if (e instanceof TypeError) {
      console.log('type error');
    } else if (e instanceof RangeError) {
      console.log('range error');
    } else if (e instanceof EvalError) {
      console.log('eval error');
    } else {
      console.log(e.message);
    }
  }
};
for (const errorType of ['type', 'range', 'eval', 'hoge']) {
  f1(errorType);
}

async function fetchData() {
  try {
    const data = 'hoge';
    console.log(data);
  } catch (e: unknown) {
    return;
  }
  //   console.log(data);
}
fetchData();

async function fetchData_() {
  let data: any;
  try {
    data = 'fuga';
  } catch (e: unknown) {
    return;
  }
  console.log(data);
}
fetchData_();

const f2 = (str: string) => {
  let num;
  try {
    num = parseInt(str);
    if (isNaN(num)) {
      throw new Error('parse error');
    }
    console.log('ok');
  } catch (e: any) {
    console.log(e.message);
  } finally {
    console.log(num);
    console.log('finish');
  }
};
f2('123');
f2('a');
