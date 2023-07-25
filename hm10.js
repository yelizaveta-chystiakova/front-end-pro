// Напишіть функцію findAverage(array), яка приймає массив чисел та обчислює середнє значення чисел.

// Приклад:
// findAverage([1, 2, 4, 7, 10]) // 4.8
// findAverage([]) // 0

// Примітка: Порожні масиви мають повертати 0.


function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
  
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / array.length;
  
    return average;
  }

  //списала с занятия