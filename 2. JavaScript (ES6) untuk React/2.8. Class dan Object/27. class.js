class Laptop {
  constructor(milik, merk) {
    this.milik = milik;
    this.merk = merk;
  }
  hidupkanLaptop() {
    return `Hidupkan laptop ${this.merk} milik ${this.milik}`;
  }
}

let laptopRudi = new Laptop('Rudi', 'Asus');
console.log(laptopRudi.merk); // Asus
console.log(laptopRudi.milik); // Rudi
console.log(laptopRudi.hidupkanLaptop()); // Hidupkan laptop Asus milik Rudi
