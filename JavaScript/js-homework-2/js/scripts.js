let userInput;
const numbers = [];
let total = 0;

do{
  // Вводим число 
 userInput = prompt('Введите число');
 // Введенное число добовляем в конец массива
 numbers.push(Number(userInput));
}
// Отменяем цикл
while (userInput != null);
let res = 0;
// Сумируем числа
for (let i = 0; i < numbers.length; i+=1) {
  res += numbers[i];}

  alert('Общая сумма чисел равна ' + res);
