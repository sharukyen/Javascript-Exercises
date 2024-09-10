const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const newString = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    const reversedString = newString.split('').reverse().join('');
    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
