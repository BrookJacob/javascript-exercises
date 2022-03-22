const findTheOldest = function(people) {
    //let oldestPerson = people.sort((person1, person2) => (person1.yearOfDeath - person1.yearOfBirth) > (person2.yearOfDeath - person2.yearOfBirth) ? 1 : -1)[people.length - 1];
    let ageCalculation = people.map(person => {
        if (!person.yearOfDeath) {
            let today = new Date();
            return { name: `${person.name}`, age: today.getFullYear() - person.yearOfBirth }
        } else {
            return { name: `${person.name}`, age: person.yearOfDeath - person.yearOfBirth }
        }
    })
    let sortedAgeCalculation = ageCalculation.sort((person1, person2) => person1.age > person2.age ? 1 : -1);

    return people.filter(person => person.name == sortedAgeCalculation[sortedAgeCalculation.length - 1].name)[0];
};

// Do not edit below this line
module.exports = findTheOldest;