let laptopRudi = {
  milik: 'Rudi',
  merk: 'Asus',
  foo() {
    return this;
  },
  bar: () => this,
};

console.log(laptopRudi.foo()); // {milik: "Rudi", merk: "Asus"...
console.log(laptopRudi.bar()); // Window {window: Window, ...
