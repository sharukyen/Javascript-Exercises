const repeatString = function(string, num) {
    let res = "";
    if (num < 0){
        return "ERROR"
    }
    while (num !== 0){
        res += string;
        num -= 1
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
