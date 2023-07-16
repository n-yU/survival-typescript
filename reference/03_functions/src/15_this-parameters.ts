class Male {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public toString(): string {
    return `Monsieur ${this.name}`;
  }
}

class Female {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public toString(this: Female): string {
    return `Madame ${this.name}`;
  }
}

const male: Male = new Male('Frédéric');
const female: Female = new Female('Frédérique');
console.log(male.toString());
console.log(female.toString());

const maleToStr: () => string = male.toString;
const femaleToStr: (this: Female) => string = female.toString;
// maleToStr();
// femaleToStr();
