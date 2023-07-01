enum ZeroOrOne {
  Zero = 0,
  One = 1,
}
console.log(ZeroOrOne);
// const zeroOrOne: ZeroOrOne = 9;
// console.log(zeroOrOne);

console.log(ZeroOrOne[0]);
console.log(ZeroOrOne[9]);

enum StringEnum {
  Foo = 'foo',
}
const foo1: StringEnum = StringEnum.Foo;
console.log(foo1);
// const foo2: StringEnum = 'foo';

type YesNo = 'yes' | 'no';
function toJapanese(yesno: YesNo) {
  switch (yesno) {
    case 'yes':
      return 'はい';
    case 'no':
      return 'いいえ';
  }
}
console.log(toJapanese('yes'), toJapanese('no'));

const yes = Symbol();
const no = Symbol();
type YesNo_1 = typeof yes | typeof no;

function toJapanese_1(yesno: YesNo_1) {
  switch (yesno) {
    case yes:
      return 'はい';
    case no:
      return 'いいえ';
  }
}
console.log(toJapanese_1(yes), toJapanese_1(no));

const Position = {
  Top: 0,
  Right: 1,
  Bottom: 2,
  Left: 3,
} as const;

type Position = (typeof Position)[keyof typeof Position];
console.log(Position);

function toJapanese_2(position: Position) {
  switch (position) {
    case Position.Top:
      return '上';
    case Position.Right:
      return '右';
    case Position.Bottom:
      return '下';
    case Position.Left:
      return '左';
  }
}
console.log(
  toJapanese_2(Position.Top),
  toJapanese_2(Position.Right),
  toJapanese_2(Position.Bottom),
  toJapanese_2(Position.Left)
);
