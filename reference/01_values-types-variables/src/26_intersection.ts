type TwoDimensionalPoint = {
  x: number;
  y: number;
};
type Z = {
  z: number;
};
type ThreeDimensionalPoint = TwoDimensionalPoint & Z;
const p: ThreeDimensionalPoint = {
  x: 0,
  y: 1,
  z: 2,
};
console.log(p);

type Never = string & number;
// const n: Never = '2';

type Mandatory = Required<{
  id: string;
  active: boolean;
  balance: number;
  surname: string;
  givenName: string;
  email: string;
}>;
type Optional = Partial<{
  index: number;
  photo: string;
  age: number;
  company: string;
  phoneNumber: string;
  address: string;
}>;
type Parameter = Mandatory & Optional;
const param: Parameter = {
  id: 'nyU',
  active: true,
  balance: 10000,
  surname: 'yU',
  givenName: 'n',
  email: 'nyu@example.com',
  age: 24,
};
console.log(param);
