const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let sequenceNum = 0;

    num = +num;

    if (num < 0)
    {
        return "OOPS";
    }

    if (num === 1)
    {
        return num2;
    }

    for (let i = 0; i <= num - 2; i++)
    {
        sequenceNum = num1 + num2;
        num1 = num2;
        num2 = sequenceNum;
    }

    return sequenceNum;
};

// Do not edit below this line
module.exports = fibonacci;
