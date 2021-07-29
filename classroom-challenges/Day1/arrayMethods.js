/*
-array methods
*/

//allow us to manipualte elements

//join method
/*
    join method allows us to concatenate all the elements in an array. it create and then returns a string using a separator
    NOTE: seperator can be anything!!
*/

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join("*"));

let sailorMoon = ["Sailor Venus", "Sailor Mars", "Sailor Moon"];
console.log(sailorMoon.join("AND"));

//reverse metthod
/*
    reverse method reverses the order of the elements in an array. it sorts it in descending order.
*/

let numbers = [1,2,3,4,5];
console.log(numbers.reverse());

//split method
/*
    splits an element into multiple elements and returns a new array but DOES NOT change original array. 
*/

let str = "Sailor Moon is not one of my favorite cartoons";

let strWords = str.split(" ");
console.log(strWords);

//splitting by whitespace
let strChar = str.split("");
console.log(strChar[8]);

//replace method
/*
    used to search for a certain string and replace it with another
    NOTE: .replace("old, "new");
*/

let wrong = "Who's monitor is this?";

let correct = wrong.replace("Who's", "Whose");
console.log(correct);

let str2 = "I have experience with HTML, C#, and JS. js is the one I love the most";

let strNew = str2.replace(/js/gi, "JS");
// g stands for glabal and i stands for case insensitive.

console.log(strNew);

//splice method
/*
    use splice method when we want to delete a certain element and/or replace with other elemets that we create
*/

let = darkSide = ['Darth Vader', 'Darth Plagueis', 'Emperor Palpatien', 'Count Dooku', 'General Grievous', 'Kylo Ren', 'Darth Maul'];
let removed = darkSide.splice(2,4, "Darth Sidious", "Darth Tyranus");
//console.log(darkSide);
console.log(removed);

//map method
/*
    update all elements in an array based on a function that i create
    NOTE: does NOT create a new array
*/

let wheelOfTime = [
    {firstname:"Rand", lastname: "al Thor"},
    {firstname: "Egwene", lastname: "al Vere"},
    {firstname: "Nynaeve", lastname: "al Meara"}
]

let charsName = wheelOfTime.map(function(name){
    return [name.firstname, name.lastname].join(" ");
})

console.log(charsName); //joins the firstname and lastname of the characters.
console.log (wheelOfTime);


//indexof method
/*
    used to determine where an element is in an array
*/

let alphabet = "a b c d e f g h i j k l"
let alphaB = alphabet.split(" ").indexOf("b");

alphaB += 1;
console.log(alphaB);

//filter method
/*
    filters out certain elements. returns a value of true or false.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.filter(function(item){
    if(item % 2 === 0) {
        return true;
    } else{
        return false;
    }
});

console.log (even);

//every method
/*
    check if every element passes a codition.
*/

let ages = [34,27,18,43,12,66];
let over18 = ages.every(function(element){
    return element>18;
});

console.log(over18);

