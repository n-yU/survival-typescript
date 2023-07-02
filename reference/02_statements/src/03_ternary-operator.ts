let age = 20;
const drink = (age: number) => {
  return age >= 20 ? 'ビール' : 'ジュース';
};
console.log(drink(age));
age = 19;
console.log(drink(age));

// const drink = if (age >= 20) "ビール" else "ジュース";

const language = (extension: string) => {
  return extension === 'js'
    ? 'JavaScript'
    : extension === 'ts'
    ? 'TypeScript'
    : extension === 'java'
    ? 'Java'
    : '不明';
};
for (const extension of ['js', 'ts', 'java', 'py']) {
  console.log(language(extension));
}

const language_1 = (extension: string): string => {
  let language_: string;
  if (extension === 'js') {
    language_ = 'JavaScript';
  } else if (extension === 'ts') {
    language_ = 'TypeScript';
  } else if (extension === 'java') {
    language_ = 'Java';
  } else {
    language_ = '不明';
  }
  return language_;
};
for (const extension of ['js', 'ts', 'java', 'py']) {
  console.log(language_1(extension));
}
