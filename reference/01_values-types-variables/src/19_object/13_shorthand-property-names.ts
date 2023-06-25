type Wild = {
  name_: string;
  no: number;
  genre: string;
  height: number;
  weight: number;
};
const name_ = 'pikachu';
const no = 25;
const genre = 'mouse pokémon';
const height = 0.4;
const weight = 6.0;
const pikachu: Wild = {
  name_,
  no,
  genre,
  height,
  weight,
};
console.log(pikachu);

const pikachu_: Wild = { name_, no, genre, height, weight };
console.log(pikachu);
