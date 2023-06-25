const item = { price: 100 };
const price_ = item.price;
console.log(price_);

const { price } = item;
console.log(price);

const obj = { x: 1, y: 2 };
const { x, y } = obj;
console.log(x, y);

const color = { r: 0, g: 122, b: 204, a: 1 };
const r_ = color.r;
const g_ = color.g;
const b_ = color.b;
const a_ = color.a;
console.log(r_, g_, b_, a_);

const { r, g, b, a } = color;
console.log(r, g, b, a);

const { r: red, g: green, b: blue, a: alpha } = color;
console.log(red, green, blue, alpha);

const continent = {
  name_: '北アメリカ',
  us: {
    name_: 'アメリカ合衆国',
    capitalCity: 'ワシントンD.C.',
  },
};
const {
  us: { name_, capitalCity },
} = continent;
console.log(name_);
console.log(capitalCity);

const {
  name_: continentName,
  us: { name_: countryName },
} = continent;
console.log(continentName);
console.log(countryName);

const color_ = { r__: undefined, g__: 122, b__: 204 };
const { r__ = 0, g__ = 0, b__ = 0 } = color_;
console.log(r__, g__, b__);

const { r__: red_ = 0 } = color_;
console.log(red_);
