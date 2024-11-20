// Завдання 1
let arr1 = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
console.log(arr1);





// Завдання 2
arr1.forEach((e, i) => console.log(`[${i + 1}] – ${e}`));





// Завдання 3
let has7 = arr1.some(num => num % 7 === 0);
console.log(has7 ? "Має кратне 7" : "Не має кратного 7");





// Завдання 4
arr1.sort((a, b) => b - a);
console.log(arr1);







// Завдання 5
arr1.fill(0, Math.floor(arr1.length / 2));
console.log(arr1);







// Завдання 6
arr1.splice(0, 3);
console.log(arr1);






// Завдання 7
let hasDupes = new Set(arr1).size !== arr1.length;
console.log(hasDupes ? "Має однакові" : "Не має однакових");






// Завдання 8
let newArr = arr1.slice(1, arr1.length - 1);
console.log(newArr);






// Завдання 9
let evenCount = arr1.filter(num => num % 2 === 0).length;
console.log(evenCount);
