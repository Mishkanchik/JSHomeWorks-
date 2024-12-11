// 1. Зведення числа в 2 ступінь
let number = prompt("Введіть число:");
let squared = Math.pow(Number(number), 2);
alert("Число в квадраті: " + squared);











// 2. Середнє арифметичне двох чисел
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let average = (Number(num1) + Number(num2)) / 2;
alert("Середнє арифметичне: " + average);







// 3. Площа квадрата
let side = prompt("Введіть довжину сторони квадрата:");
let area = Math.pow(Number(side), 2);
alert("Площа квадрата: " + area);











// 4. Конвертор кілометрів у милі
const KM_TO_MILES = 0.621371;
let kilometers = prompt("Введіть кількість кілометрів:");
let miles = Number(kilometers) * KM_TO_MILES;
alert(kilometers + " км = " + miles + " миль");













// 5. Калькулятор
let num1Calc = prompt("Введіть перше число:");
let num2Calc = prompt("Введіть друге число:");
num1Calc = Number(num1Calc);
num2Calc = Number(num2Calc);

let addition = num1Calc + num2Calc;
let subtraction = num1Calc - num2Calc;
let multiplication = num1Calc * num2Calc;
let division = num1Calc / num2Calc;

alert(`Сума: ${addition}\nРізниця: ${subtraction}\nДобуток: ${multiplication}\nЧастка: ${division}`);












// 6. Розв'язок рівняння a * x + b = 0
let a = prompt("Введіть значення a:");
let b = prompt("Введіть значення b:");
a = Number(a);
b = Number(b);

let x = -b / a;
alert("Значення x: " + x);













// 7. Час до наступного дня
let hours = prompt("Введіть поточну годину:");
let minutes = prompt("Введіть поточні хвилини:");
hours = Number(hours);
minutes = Number(minutes);

let remainingHours = 23 - hours;
let remainingMinutes = 60 - minutes;

if (remainingMinutes === 60) {
  remainingMinutes = 0;
  remainingHours -= 1;
}

alert(`Залишилось до наступного дня: ${remainingHours} годин і ${remainingMinutes} хвилин.`);










// 8. Друга цифра тризначного числа
let number3Digit = prompt("Введіть тризначне число:");
let secondDigit = Math.floor(Number(number3Digit) / 10) % 10;
alert("Друга цифра: " + secondDigit);








// 9. Переміщення останньої цифри п’ятизначного числа на початок
let number5Digit = prompt("Введіть п’ятизначне число:");
let lastDigit = number5Digit[number5Digit.length - 1];
let newNumber = lastDigit + number5Digit.slice(0, -1);
alert("Переміщене число: " + newNumber);






// 10. Розрахунок зарплати працівника
let sales = prompt("Введіть загальну суму продажу за місяць:");
let salary = 250 + (Number(sales) * 0.10);
alert("Зарплата: $" + salary);
