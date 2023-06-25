class X {
  public a: string;
  public constructor(a: string) {
    this.a = a;
  }

  public print(): void {
    console.log('X:', this.a);
  }
}

class Y {
  public a: string;
  public constructor(a: string) {
    this.a = a;
  }

  public print(): void {
    console.log('Y:', this.a);
  }
}

const x: X = new Y('X');
const y: Y = new X('Y');
x.print();
y.print();
