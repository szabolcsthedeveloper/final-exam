/*


**************************************
**************************************
**                                  **
**     DO NOT CHANGE THIS FILE!     **
**                                  **
**************************************
**************************************


*/

const { Resident, VotingPeople } = require("./OOP")
const carRenting = require("./carRenting")
const jadenTalk = require("./jadenTalk")

const it = (desc, fn) => {
  try {
      fn()
      console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc)
  } catch (err) {
      console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc)
      //console.log(err)
  }
}

function assert(condition) {
  if (!condition) {
      throw new Error()
  }
}

console.log("jadenTalk")
it("should make the first letters uppercase", () => {
  assert(jadenTalk("The quick brown fox jumps over the lazy dog") === "The Quick Brown Fox Jumps Over The Lazy Dog")
})
it("should also remove most punctuation marks", () => {
  assert(jadenTalk("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nulla!") === "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sapiente Nulla")
})
it("should not remove apostrophes", () => {
  assert(jadenTalk("How can mirrors be real, if our eyes aren't real?") === "How Can Mirrors Be Real If Our Eyes Aren't Real")
})
it("should not make unnecessary changes", () => {
  assert(jadenTalk("This Text Is Jadentalk By Default") === "This Text Is Jadentalk By Default")
})

const carsArray1 = [
  {
    type: "Toyota Corolla",
    avgConsumption: 8.8,
    fuelAmount: 32
  },
  {
    type: "Skoda Octavia",
    avgConsumption: 7.2,
    fuelAmount: 25
  },
  {
    type: "Fiat Uno",
    avgConsumption: 6.1,
    fuelAmount: 24
  }
]

const carsArray2 = [
  {
    type: "Renault Clio",
    avgConsumption: 9,
    fuelAmount: 35
  },
  {
    type: "SEAT Ibiza",
    avgConsumption: 7,
    fuelAmount: 27
  },
  {
    type: "Volkswagen Golf",
    avgConsumption: 8,
    fuelAmount: 32
  }
]

console.log("carRenting")
it("should find the correct cars, and return their type", () => {
  assert(carRenting(carsArray1, 350)[0] === "Toyota Corolla" && carRenting(carsArray1, 350)[1] === "Fiat Uno" && carRenting(carsArray1, 350).length === 2)
})
it("should return null when no cars are found", () => {
  assert(carRenting(carsArray1, 400) === null)
})
it("should work with exact equation", () => {
  assert(carRenting(carsArray2, 400)[0] === "Volkswagen Golf" && carRenting(carsArray2, 400)[1] === undefined && carRenting(carsArray2, 400).length === 1)
})
it("should work when all cars are meeting the requirements", () => {
  assert(carRenting(carsArray2, 380)[0] === "Renault Clio" && carRenting(carsArray2, 380)[1] === "SEAT Ibiza" && carRenting(carsArray2, 380)[2] === "Volkswagen Golf" && carRenting(carsArray2, 380).length === 3)
})

const person1 = new Resident("János", 27, true); // true
const person2 = new Resident("Ákos", 17, false); // false
const person3 = new Resident("Anna", 18, false); // false
const person4 = new Resident("Dóra", 45, true); // true
const person5 = new Resident("Álmos", 7, true); // false
const person6 = new Resident("Ricsi", 29, true); // true
const person7 = new Resident("Kálmán", 22, false); // false
const person8 = new Resident("Pityu", 33, true); // true

const people = [person1, person2, person3, person4, person5, person6, person7, person8];

console.log("OOP")
it("should have the correct constructor", () => {
  const r = new Resident("Ricsi", 29, true)
  assert(r.name === "Ricsi" && r.age === 29 && r.hasRegistered === true)
})
it("should have the canVote() method available on the instance", () => {
  const r = new Resident("Jakab", 18, false)
  assert(typeof r.canVote === "function")
})
it("canVote() method should return the correct value", () => {
  assert(person2.canVote() === false && person3.canVote() === false && person1.canVote() === true && person5.canVote() === false)
})
it("VotingPeople should have the method available on the class itself", () => {
  assert(typeof VotingPeople.getNumberOfVoters === "function")
})
it("getNumberOfVoters method should return the correct value", () => {
  assert(VotingPeople.getNumberOfVoters(people) === 4)
})
