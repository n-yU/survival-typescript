const book = undefined;
// const title = book.title;
const author = null;
// const email = author.email;

// const title = book === null || book === undefined ? undefined : book.title;
// console.log(title);
const book_1 = { title: 'サバイバルTypeScript' };
const title_1 = book_1 === null || book_1 === undefined ? undefined : book_1.title;
console.log(title_1);

const book_2 = { author: { email: 'alice@example.com' } };
const authorEmail =
  book_2 === null || book_2 === undefined
    ? undefined
    : book_2.author === null || book_2.author === undefined
    ? undefined
    : book_2.author.email;
console.log(authorEmail);

const title = book?.title;
console.log(title);
const title_2 = book_1?.title;
console.log(title_2);

const authorEmail_1 = book?.author?.email;
console.log(authorEmail_1);
const authorEmail_2 = book_2?.author?.email;
console.log(authorEmail_2);

console.log(book?.title);
const book_3 = { author: null };
console.log(book_3.author?.name);

const increment = undefined;
const result = increment?.(1);
console.log(result);

const increment_1 = (n) => n + 1;
const result_1 = increment_1?.(1);
console.log(result_1);

const book_4 = { getPrice: undefined };
console.log(book_4.getPrice?.());

const book_5 = {
  getPrice() {
    return 0;
  },
};
console.log(book_5.getPrice?.());

const books = undefined;
const title_3 = books?.[0];
console.log(title_3);
 
const books_1 = ["サバイバルTypeScript"];
const title_4 = books_1?.[0];
console.log(title_4);

const book_6 = undefined;
const title_5 = book_6?.title ?? "デフォルトタイトル";
console.log(title_5);
