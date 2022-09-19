const findSum = function(array) {
    let sum = 0;
    let average = 0;

    for (const i of array){
        sum += i; 
        average = sum / array.length;
    }
    return average 
};


const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};




const isPalindrome = function(str) {
    var reversedStr = str.toLowerCase().split('').reverse().join('') //=
    return str === reversedStr ? true : false; //=
}};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
