const value: string | number = 'this is a string';
const strLength: number = (value as string).length;
console.log(value, strLength);

const strLength_1: number = (<string>value).length;
console.log(strLength_1);

const num = 123;
const str: string = num as unknown as string;
console.log(num, typeof num, str, typeof str);
