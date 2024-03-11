const repeatString = function(message, repetition) {
    if (repetition < 0)
    {
        return "ERROR";
    }
    let finalMessage = "";
    for (let i = 0; i < repetition; i++)
    {
        finalMessage += message;
    }
    return finalMessage;
};

// Do not edit below this line
module.exports = repeatString;
