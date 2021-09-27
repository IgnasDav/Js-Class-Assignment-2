"use strict";

const randomNumber1 = 45622;
const randomNumber2 = 3210;
const ramndomNumber3 = 32.31455;

const text =
  "Cake toffee muffin wafer cake. Shortbread cake pudding gingerbread sweet sweet roll gummi bears. Chocolate cookie lollipop gingerbread chocolate bar pastry. Wafer bear claw gummi bears sweet chocolate cake.";

const fullName = "Ignas Davulis";
const firstName = "Ann";
const lastName = "Davis";
const whiteSpace = "             Joahna Willis                ";
//Numbers
console.log("-----------------NUMBERS---------------");
console.log(ramndomNumber3.toFixed(5));
console.log(ramndomNumber3.toExponential(1));
console.log(ramndomNumber3.toString());
console.log(isNaN(fullName), isNaN(randomNumber1));
console.log(Number.isFinite(randomNumber1), Number.isFinite(ramndomNumber3));
console.log(Number.isInteger(randomNumber1), Number.isInteger(ramndomNumber3));
console.log(Number.parseInt(randomNumber1), Number.parseInt(ramndomNumber3));
console.log(
  Number.parseFloat(randomNumber1),
  Number.parseFloat(ramndomNumber3)
);
console.log(Number(fullName), Number(ramndomNumber3.toFixed(2)));
//Strings
console.log("-----------------STRINGS---------------");
console.log(text.length);
console.log(fullName.charAt(9));
console.log(firstName.concat(" ", lastName));
console.log(text.includes("cake"), text.includes("Oranges"));
console.log(text.startsWith("Coffee"), text.endsWith("ke."));
console.log(text.indexOf("sweet"), text.lastIndexOf("cake"));
console.log(fullName.repeat(5));
console.log(text.replace(/gummi/g, "🐻"));
console.log(text.replaceAll("cake", "🎂"));
console.log(text.split(" "));
console.log(fullName.toLowerCase(), fullName.toUpperCase());
console.log(whiteSpace.trim());
//2 or more methods
console.log(whiteSpace.trim().substring(2).toUpperCase().split(" "));
console.log(Number.parseInt(randomNumber2.toString(2)).toString());
