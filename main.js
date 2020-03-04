/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber(num){
if (num % 3 !== 0 && num % 5 !== 0 ){

 return num
} 
if(num % 3 ===0 && num %5 !== 0){

 return 'Fizz' 
} 
if (num % 3 !==0 && num %5=== 0){

 return 'Buzz' 
}

if (num % 3 ===0 && num %5 ===0){

 return 'FizzBuzz' 
}

}

function getAverage (array){
//I need this function to cycle through each value of the array and ge the cumulative total of all the values in the array using +=. Then divide that number by the number of values in the array using 
for(let i=0;i< array.length;i++){
let theAverage=0

if (i<=array.length)
{
theAverage.push(array+=i /array.length)}


}  
return theAverage
}

function getMiddleLetters(str){

  //Can seperate the difference between odd and even strings by using the modulus with a boolean. Then, for even strings you can push the values at index of str.length divided by 2 and then subtracted by 1 and str.length divided by two into the new string. For the odd lengths you can the push and return the index of str.length-1 divided by 2 and then subtract 1, the index of str.length divided by 2, and the index of str.length divided by 2 and then plus 1. push values to the new string
  const theMiddleLetters= ''
  if (str.length % 2 ===0){
  for (let i=0;i<i.length;i++)
  


  return(theMiddleLetters)
  }
  if (str.length % 2 !==0){
    for (let i=0;i<i.length;i++){
}
}
}
function getNextLetter(str){}

function triStateAreaOnly(array){
  const theTristatePlaces=''
for(let i=0;i<array.length;i++){

if (array[i].endswith('NY'||'NJ'||'CT')){ 
  
//somehow push the strings using the endswith into the const
} 
}

}
function removeTrolls(array){

  if (array.contains('abcdefghijklmnopqrstuvwxyz')){

  }
}


function cipher(str){}

function addToMultiDigitNumbers(num,array){}  

function hyphenateNames (array){}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
