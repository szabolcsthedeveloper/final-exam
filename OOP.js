class Resident {
  constructor(name, age, isRegistered) {
    this.name = name;
    this.age = age;
    this.isRegistered = isRegistered;
  }

  canVote() {
    return this.age >= 18 && this.isRegistered;
  }
}

class VotingPeople {
  static getNumberOfVoters(residents) {
    return residents.filter((resident) => resident.canVote()).length;
  }
}

// Examples
const person1 = new Resident("Bela", 18, true);
const person2 = new Resident("Lajos", 17, true);
const person3 = new Resident("Kazmer", 18, false);
const person4 = new Resident("Otto", 18, true);

console.log(
  VotingPeople.getNumberOfVoters([person1, person2, person3, person4])
);

module.exports = { Resident, VotingPeople };
