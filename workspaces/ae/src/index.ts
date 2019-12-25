class A {
    constructor(private a: string) {
        alert(`TypeScript で記述されたスクリプトです ${this.a}`);
    }
}

new A('Hello!');
