interface Animal {
  isAnimal: boolean;
}
interface Dog extends Animal {
  isDog: boolean;
}
let pochi: Dog = { isAnimal: true, isDog: true };
let animal: Animal = pochi;
console.log(pochi, animal);

// let animal_1: Animal = { isAnimal: true };
// let pochi_1: Dog = animal_1;

const dogs: Dog[] = [pochi];
const animals: Animal[] = dogs;

interface Dog_1 extends Animal {
  wanwan(): string;
}

const pochi_1 = {
  isAnimal: true,
  wanwan() {
    return 'wanwan';
  },
};

const dogs_1: Dog_1[] = [pochi_1];
const animals_1: Animal[] = dogs_1;
animals_1[0] = { isAnimal: true };
const mayBePochi: Dog_1 = dogs_1[0];
// mayBePochi.wanwan();
console.log(mayBePochi);

function sum(values: (number | null)[]): number {
  let total = 0;
  for (const value of values) {
    if (typeof value === 'number') {
      total += value;
    }
  }
  return total;
}

const values: number[] = [1, 2, 3];
console.log(sum(values));
