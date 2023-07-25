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