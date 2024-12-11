// Завдання 1
function countSpaces(str) {
    return (str.match(/ /g) || []).length;
}

let input1 = prompt("Введіть рядок для завдання 1:");
console.log(countSpaces(input1));




// Завдання 2
function capitalizeFirstChar(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

let input2 = prompt("Введіть рядок для завдання 2:");
console.log(capitalizeFirstChar(input2));




// Завдання 3
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

let input3 = prompt("Введіть рядок для завдання 3:");
console.log(countWords(input3));




// Завдання 4
function createAbbreviation(phrase) {
    return phrase
        .split(/\s+/)
        .map(word => word[0].toUpperCase())
        .join('');
}

let input4 = prompt("Введіть словосполучення для завдання 4:");
console.log(createAbbreviation(input4));




// Завдання 5
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

let input5 = prompt("Введіть рядок для завдання 5:");
console.log(isPalindrome(input5));




// Завдання 6
function parseUrl(url) {
    try {
        const urlObj = new URL(url);
        return {
            protocol: urlObj.protocol.slice(0, -1),
            domain: urlObj.hostname,
            path: urlObj.pathname
        };
    } catch (error) {
        return "Invalid URL";
    }
}

let input6 = prompt("Введіть URL для завдання 6:");
console.log(parseUrl(input6));
