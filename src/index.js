module.exports = function toReadable(number) {
    if (number < 100) {
        return numberLessThan100ToReadable(number);
    }

    if (number >= 100) {
        return numberGreaterThanOrEqual100ToReadable(number);
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
    "",
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
    "ten",
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

function numberLessThan100ToReadable(number) {
    if (number < 10) {
        return digits[number];
    }

    if (number > 10 && number < 20) {
        return teens[number - 10];
    }

    if (number % 10 === 0) {
        return tens[number / 10];
    }

    const ten = Math.floor(number / 10);
    const one = number % 10;

    return `${tens[ten]} ${digits[one]}`;
}

function numberGreaterThanOrEqual100ToReadable(number) {
    if (number % 100 === 0) {
        return hundreds[number / 100];
    }

    const hundred = Math.floor(number / 100);
    const remainder = number % 100;

    return `${hundreds[hundred]} ${numberLessThan100ToReadable(remainder)}`;
}
