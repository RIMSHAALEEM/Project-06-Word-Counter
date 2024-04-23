#! usr/bin/env node //this line is called shabang that tells the OS to run it with node.js

import inquirer from "inquirer";

//declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    //Sentence used kya hai user se sentence as a input laine kayliye
    // Or wo sentence answer main store hojaye
    Sentence: string } = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter the sentence to count the words:"
        }
    ])
const words = answers.Sentence.trim().split(" ")
//trim is used to remove whitespaces at the start and end  of the sentence
/*split is used to Split a string into substrings using the specified 
separator and return them as an array.*/

//print the array of words to the console that we got through split method
console.log(words);

//print the word count of the sentence to the console

console.log(`The word count of the sentence is ${words.length}`);


 

