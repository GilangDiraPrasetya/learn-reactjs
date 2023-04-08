let laptopRudi = {
  milik: 'Rudi',
  merk: 'Asus',
  hidupkanLaptop() {
    return `Hidupkan laptop ${this.merk} milik ${this.milik}`;
  },
};

console.log(laptopRudi.merk); // Asus
console.log(laptopRudi.milik); // Rudi
console.log(laptopRudi.hidupkanLaptop()); // Hidupkan laptop Asus milik Rudi
