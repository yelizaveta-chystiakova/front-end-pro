// Перепишіть код за допомогою однієї конструкції switch:

// const number = +prompt('Введіть число між 0 та 3', '');

// if (number === 0) {
//  alert('Ви ввели число 0');
// }

// if (number === 1) {
//  alert('Ви ввели число 1');
// }

// if (number === 2 || number === 3) {
//  alert('Ви ввели число 2, а може й 3');


// const number = +prompt('Введіть число між 0 та 3', '');

// switch (permission) {
//     case number === 0:
//         alert('Ви ввели число 0')
//     case number === 1:
//         alert('Ви ввели число 1')
//     case number === 2 || number === 3:
//         alert('Ви ввели число 2, а може й 3')
//     default:
//         alert('Ви ввели число')
// }

const number = +prompt('Введіть число між 0 та 3', '');

switch (number) {
    case 0:
      alert('Ви ввели число 0');
      break;
    case 1:
      alert('Ви ввели число 1');
      break;
    case 2:
    case 3:
      alert('Ви ввели число 2, а може й 3');
      break;
    default:
      alert('Ви ввели недійсне число');
}