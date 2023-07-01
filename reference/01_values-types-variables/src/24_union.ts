let numberOrUndefined: number | undefined;
numberOrUndefined = 1;
console.log(numberOrUndefined);
numberOrUndefined = undefined;
console.log(numberOrUndefined);

type ErrorCode = 400 | 401 | 402 | 403 | 404 | 405;
let err: ErrorCode = 400;
console.log(err);
err = 405;
console.log(err);

type List_1 = string | number[];
let l1: List_1 = [1, 2, 3];
console.log(l1);
l1 = 'a';
console.log(l1);

type List_2 = (string | number)[];
let l2: List_2 = [1, 2, 3];
console.log(l2);
l2 = ['a', 'b', 'c'];
console.log(l2);

const maybeUserId: string | null = 'userId';
// const userId: string = maybeUserId;
if (typeof maybeUserId === 'string') {
  const userId: string = maybeUserId;
  console.log(userId, typeof maybeUserId);
}
