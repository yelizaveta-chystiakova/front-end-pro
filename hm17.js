// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.


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
      if (this.apartments.length <= this.maxApartmentsCount) {
        this.apartments.push(apartment);
      } else {
        console.log('Досягнута максимальна кількість квартир у будинку.');
      }
    }
  }
  
  // декілька екземплярів класу Людина
  const ivan = new Person('Іван', 'чоловік');
  const maria = new Person('Марія', 'жінка');
  const petro = new Person('Петро', 'чоловік');
  
  // декілька екземплярів класу Квартира
  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  const apartment3 = new Apartment();
  
  //екземпляри класу Людина до екземплярів класу Квартира
  apartment1.addPerson(ivan);
  apartment2.addPerson(maria);
  apartment3.addPerson(petro);
  
  // екземпляр класу Будинок
  const house = new house(2); // кількість квартир у будинку - 2
  
  // Додаємо екземпляри класу Квартира до екземпляра класу Будинок
  house.addApartment(apartment1);
  house.addApartment(apartment2);
  house.addApartment(apartment3);
  
  console.log(house); 
  