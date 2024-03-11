const removeFromArray = function(oldArray, ...removeElements) {
    for (const elements of removeElements)
    {
        // Looped in reverse to avoid skipping elements based on an answer from: https://stackoverflow.com/a/9792947
        for (let i = oldArray.length - 1; i >= 0; i--)
        {
            if (oldArray.includes(elements))
            {
                oldArray.splice(oldArray.indexOf(elements), 1);
            }
        }
    }
    return oldArray;
};

// Do not edit below this line
module.exports = removeFromArray;
