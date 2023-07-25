
// Створити попоредньо створити массив елементів.

// 1. Треба пройтись по всім елементам массива на вивести їх у консоль.

// 1.1. Зробити будь-яку перевірку (це може бути на довженну рядка або на порівняння з числом), щоб консоль робилась для певних елементів.

// 2. Реалізувати функцію, яка має приймати массив та елемент, який ми будемо шукати.
// Функція має шукати елемент у массиві та повертати true або false;

// 3. У вас є список юзерів ['user', 'user1', 'user10', 'user100', 'user1000'], вам потрібно повернути перший елемент, який відповідає умові str.length > 4

// 4. У нас є массив з попереднього завдання, але треба повернути не перший елемент, а массив всіх значеннь. Треба зробити фільтрацію.

const numbers = [1, 2, 3, 4, 5, 6]

//1 
numbers.forEach((number) => console.log(number))

//1.1
numbers.forEach((number) => {
    if (number >= 0) console.log(number)
})

//2
const users = ['user', 'user1', 'user10', 'user100', 'user1000'];

const search = (array, value) => array.includes(value)
console.log(search(users, 'user'))
console.log(search(users, 'qwerty'))

//3
const user = users.find(user => user.length > 4);
console.log(user);

//4
const filteredUsers = users.filter((user) => user.length > 8)
console.log(filteredUsers);