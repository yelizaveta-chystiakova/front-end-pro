// Дано масив цілих чисел.

// Повертає масив, де перший елемент — це кількість додатних чисел, а другий — сума від’ємних чисел. 0 не є ні позитивним, ні негативним.

// Якщо введення є порожнім масивом або має значення null, повертає порожній масив.

// Приклад:
// smaller([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) // [10, -65]
// smaller([]) // [].

function countPositiveAndSumNegative(array) {
    if (!array || array.length === 0) {
      return [];
    }
  
    let positiveCount = 0;
    let negativeSum = 0;
  
    for (const number of array) {
      if (number > 0) {
        positiveCount++;
      } else if (number < 0) {
        negativeSum += number;
      }
    }
  
    return [positiveCount, negativeSum];
  }

  //чат gpt