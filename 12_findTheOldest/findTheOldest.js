function findTheOldest(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldest, person) => {
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        return (age > oldest.age) ? { name: person.name, age } : oldest;
    }, { name: '', age: 0 });
}


// Do not edit below this line
module.exports = findTheOldest;
