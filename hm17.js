class Person {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
}
  
class Apartment {
    constructor() {
      this.persons = [];
    }
    addPerson(person) {
      this.persons.push(person);
    }
}
  
class House {
    constructor(maxApartmentsCount) {
      this.apartments = [];
      this.maxApartmentsCount = maxApartmentsCount;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartmentsCount) {
        this.apartments.push(apartment);
      } else {
        console.log('Досягнута максимальна кількість квартир у будинку.');
      }
    }
}
  
const ivan = new Person('Іван', 'чоловік');
const maria = new Person('Марія', 'жінка');
const petro = new Person('Петро', 'чоловік');
  
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addPerson(ivan);
apartment2.addPerson(maria);
apartment3.addPerson(petro);

const house = new House(2); 

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

console.log(house); 
  