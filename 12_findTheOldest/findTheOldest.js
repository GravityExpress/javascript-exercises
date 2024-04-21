const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (Object.keys(oldest).length === 0)
        {
            oldest["name"] = person.name;
            oldest["age"] = person.yearOfDeath - person.yearOfBirth;
        }

        if (person.yearOfDeath === undefined)
        {
            const thisYear = (new Date()).getFullYear();
            oldest["name"] = person.name;
            oldest["age"] = thisYear- person.yearOfBirth;
        }
        else
        {
            if (oldest.age < (person.yearOfDeath - person.yearOfBirth))
            {
                oldest["name"] = person.name;
                oldest["age"] = person.yearOfDeath - person.yearOfBirth;
            }
        }

        return oldest;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
