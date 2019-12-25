class A {
  constructor(private a: string) {
    console.log(`new object with ${this.a}`);
  }
}

new A('foo');
