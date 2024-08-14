module.exports = function toReadable(number) {
    if (number.toString().length === 1) {
        return oneDigitNumberToReadable(number);
    }

    if (number.toString().length === 2) {
        return twoDigitNumberToReadable(number);
    }

    if (number.toString().length === 3) {
        return threeDigitNumberToReadable(number);
    }
};

const digits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
const hundreds = [
    "",
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
];

function oneDigitNumberToReadable(number) {
    return digits[number];
}

function twoDigitNumberToReadable(number) {
    if (number < 20) {
        return teens[number - 10];
    }

    if (number % 10 === 0) {
        return tens[number / 10];
    }

    return `${tens[Math.floor(number / 10)]} ${digits[number % 10]}`;
}

function threeDigitNumberToReadable(number) {
    if (number % 100 === 0) {
        return hundreds[number / 100];
    }

    if (number % 100 < 10) {
        return `${hundreds[Math.floor(number / 100)]} ${digits[number % 100]}`;
    }

    return `${hundreds[Math.floor(number / 100)]} ${twoDigitNumberToReadable(
        number % 100
    )}`;
}
