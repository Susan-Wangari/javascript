class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson= new Surgeon('Ruth Jackson', 'Orthopedics');

// the new instance is created using the new keyword
//the new keyword references the constructor which adds the methods of the class into the new instance
