# Description
You have to complete 3 tasks, in 3 different files:
 - jadenTalk -> `jadenTalk.js`
 - carRenting -> `carRenting.js`
 - OOP -> `oop.js`
 
Also, you have to make a UI build from the pictures and `data.js` *(more on that task later)*

Finally, you have to make a react project *(see in the end of this document)*.

In this repository, each function should return a value, depending on the task.

You can run some built-in tests with the `node test.js` command in this repository.  
You can run the `.js` files independently with the associated `node filename.js` command.

*Don't forget to add me (ricsimarta) as a contributor to this, and the other private repository!*

---

# jadenTalk
Write a function, that gets a string parameter: `text`.  
The function should return a string, made from the parameter, with the following changes:  
 - each word should be capitalized *(the first letter is uppercase, while the rest is lowercase)*  
 - remove the unneeded punctuations *(dots, commas, exclamation marks, question marks)*

examples:

`jadenTalk("How can mirrors be real, if our eyes aren't real?")` should return `"How Can Mirrors Be Real If Our Eyes Aren't Real"`  
`jadenTalk("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nulla!")` should return `"Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Sapiente Nulla"`

---

# carRenting
Write a function, that gets two parameters: `cars` and `distance`.  
The `cars` parameter is an array of `car` objects.

Example of `car` object:
```
{
  type: "Toyota Corolla",
  avgConsumption: 8.8,
  fuelAmount: 30
}
```

The `type` is a string, it holds the *name* of the car.  
The `avgConsumption` is a number, that tells us how many litres of fuel it consumes on average, per 100 km of driving distance.  
The `fuelAmount` is a number, it shows the amount of fuel the car has.

The `distance` parameter is a number. It is the distance, that our rented car should achieve with the amount of fuel it has.

The function should find the cars, that meets our requirements *(can go for **at least** the distance we need)*, and return their type in an array. If no good cars are found, the function should return `null`.

Example cars array: 
```
[
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
```

Example running with the same cars array:  
`carRenting(cars, 350)` should return `["Toyota Corolla", "Fiat Uno"]`  
`carRenting(cars, 500)` should return `null`

# OOP
In this task, you have multiple subtasks:
 - Finish the contstructor on the `Resident` class
 - Implement the `canVote` instance method on the Resident class. The method should return true, if the resident is at least 18 years old, and is registered. Return false otherwise.
 - Implement the `getNumberOfVoters` static method on the VotingPeople class. The method should get an array of `Resident`s for parameter, and return the number of `Resident`s that can vote. 

`Resident` examples:
```
const person1 = new Resident("Bela", 18, true)
const person2 = new Resident("Lajos", 17, true)
const person3 = new Resident("Kazmer", 18, false)
const person4 = new Resident("Otto", 18, true)
```

`getNumberOfVoters` example:
```
VotingPeople.getNumberOfVoters([person1, person2, person3, person4])
```
should return `2`

# UI build
Create a **public** repository, with the name `final-exam-uibuild`.  
**Work in the created repository!**

Make a UI build from the 4 attached pictures:
 - `uibuild_desktop.png` for the desktop view
 - `uibuild_mobile_1.png` and `uibuild_mobile_2.png` for the mobile view
 - `uibuild_hover` for the hover effect

The solution should be presented on Github Pages, with a link like this: https://username.github.io/final-exam-uibuild

You should make your content from the attached `data.js` file *(tip: copy the file to the created repository)*

The `index.html` should only contain one `id` attribute.

Opening the Github Pages link in Google Chrome or Firefox browser, the page is presented, and is similar to the design as much as possible. Especially fonts, margins, and paddings in and between the elements and text nodes.

There is only 2 colors in this project: `#f8f7f3` and `#1a24fb`  
Fonts: **Overpass**, **Montserrat** from Google fonts.  
It's optional to use javascript for this project.

Elements:
 #### Header
  - size: `100% * 40px`
  - font size: `12px`, letter spacing is `0.2em`, font weight: `regular`
  - text is `New York Times Bestsellers`

 #### Cards
  - all of the cards are in the same container, that has a maximum width of `1280px`
  - the gap between cards is `100px 20px`
  - padding in the cards is `40px`
  - the size of the number container in the corner is `40px * 40px`
  - font size of the number is `24px`
  - font size of the title *(see in the data)* is `36px`, font weight is `bold`
  - font size of the sub *(see in the data)* is `12px`, letter spacing is `0.2em`, font weight: `medium`
  - font size of the text *(see in the data)* is `16px`, font weight is `medium`
  - size of the button is `100% * 18px`
  - font size of the button is `14px`

# React 
Create a **private** repository, with the name `final-exam-react`.  
**Work in the created repository!**

Use your preferred tool *(create-react-app or vite)*, to create a react project.  
You should clean the starter project from all the unnecessary files and codes.

**You don't need to build or deploy the react project, just push your code into the repository, and don't forget to add me (ricsimarta) as a contributor!**

Create a title in the `<App />` component: `Rick and Morty`

Fetch the url: `https://rickandmortyapi.com/api/character` and save the data in a state.

While we have no data, show a loading animation.  
The loading animation should have its own component: `<LoadingMask />` - a div with the text `"loading..."`  
*(The API is very fast, it could be hard to see the loading component. It's OK if you test with setTimeout(), but you don't have to.)*

The data from the fetch should look like:

```
{
  info: {...}
  results: [...]
}
```

In this project, we only need the `results` from the data, you should only save that in the state.

Render all the character objects from the `results` of the data in its own `<Character />` component, showing only the `name` of the character.  

Create a `show more` button in the component. If the user clicks on the button, the component should also show the `species` and the `status` of the character. *(the style doesn't matter here)*  
While the additional info is showing, the buttons text should be `show less`. After clicking it again, hide the additional info, and change the buttons text back to `show more`.  
*There are some characters thats `status` value contains the word `unknown`. It's in the API, not your code.*

Create a header, that has a button: `sort`.  
If you click on the button, you should sort the characters in ascending order, by their name. Clicking again on the button, you should sort them in descending order.

Create an input field in the header. If the user starts typing in it, you should filter the characters by searching the input fields value in the characters name.  
The filter should be case-insensitive.

You should replace all the buttons and input fields with the corresponding components from the `MUI` library. https://mui.com/material-ui/getting-started/installation/
