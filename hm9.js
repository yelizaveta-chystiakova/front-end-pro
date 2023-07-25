// Є массив
// const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];

// Перше завдання:
// Вам треба перевірити чи всі елементи довше ніж 4 символа.
// Та вивести у консоль результат (true або false).

// Друге завдання:
// Вам треба перевірити хочаб один елемент довше ніж 4 символа.
// Та вивести у консоль результат (true або false).

// Трете завдання:
// Потрібно перетворити массив користувачів таким чином, щоб ми отримали новий массив з назвамикористувачів написанних капслоком.

// Приклад: user1 -> USER1


//1
const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
const result = users.every(item => item.length < 4);
console.log(result)

//2
const result2 = users.some(item => item.length < 4);
console.log(result2)

//3
const result3 = users.map(item => item.toUpperCase());
console.log(result3)