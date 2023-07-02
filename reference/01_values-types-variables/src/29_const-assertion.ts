const pikachu = {
  name: 'pikachu',
  no: 25,
  genre: 'mouse pokémon',
  height: 0.4,
  weight: 6.0,
} as const;
// pikachu.name = "raichu";
console.log(pikachu);

type Country = {
  name: string;
  capitalCity: string;
};
type Continent = {
  readonly name: string;
  readonly canada: Country;
  readonly us: Country;
  readonly mexico: Country;
};
const america: Continent = {
  name: 'North American Continent',
  canada: {
    name: 'Republic of Canada',
    capitalCity: 'Ottawa',
  },
  us: {
    name: 'United States of America',
    capitalCity: 'Washington, D.C.',
  },
  mexico: {
    name: 'United Mexican States',
    capitalCity: 'Mexico City',
  },
};
console.log(america);

// america.name = 'African Continent';
// america.canada = {
//   name: "Republic of Côte d'Ivoire",
//   capitalCity: 'Yamoussoukro',
// };

america.canada.name = "Republic of Côte d'Ivoire";
america.canada.capitalCity = 'Yamoussoukro';
console.log(america);

const america_1 = {
  name: 'North American Continent',
  canada: {
    name: 'Republic of Canada',
    capitalCity: 'Ottawa',
  },
  us: {
    name: 'United States of America',
    capitalCity: 'Washington, D.C.',
  },
  mexico: {
    name: 'United Mexican States',
    capitalCity: 'Mexico City',
  },
} as const;

// america_1.name = "African Continent";
// america_1.canada = {
//   name: "Republic of Côte d'Ivoire",
//   capitalCity: "Yamoussoukro",
// };
// america_1.canada.name = "Republic of Côte d'Ivoire";
// america_1.canada.capitalCity = "Yamoussoukro";
console.log(america_1);
