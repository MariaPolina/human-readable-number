module.exports = function toReadable(number) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let result = "";

    if (number === 0) {
        result += 'zero';
    }

    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + " hundred";
        number = number % 100;
    }

    if (number >= 20) {
        result += (result !== "" ? " " : "") + tens[Math.floor(number / 10)];
        number = number % 10;
    }

    if (number > 0) {
        result += (result !== "" ? " " : "") + ones[number];
    }

    return result;

}