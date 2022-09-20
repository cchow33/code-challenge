// Problem 1
const findSum = function(array) {
    let sum = 0;
    let average = 0;

    for (const i of array){
        sum += i; 
        average = sum / array.length;
    }
    return average 
};


// Problem 2
const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};



// Problem 3
const isPalindrome = function(str) {
    var reversedStr = str.toLowerCase().split('').reverse().join('') //=
    return str === reversedStr ? true : false; //=
};


// Problem 4
const largestPair = function(array){
    let product = 0;
    let newArr = []

    for (let i = 0; i < array.length - 1; i++){
        product = array[i] * array[i + 1]  
        newArr.push(product) 
    }
    return Math.max(...newArr) 
};


// Problem 5
const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

// Problem 6
const scoreScrabble = function(str) {
  const scoreScrabble = function(str) {
    const points = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        r: 1,
        s: 1,
        t: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 8,
        x: 8,
        q: 10,
        z: 10,
    };

    let totalPoints = 0;
    for (let i = 0; i < str.length; i++){
        totalPoints += points[str[i]]
    }
    return totalPoints;
};
