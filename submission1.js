const findSum = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
};


const findFrequency = function(array) {
    const count = {};
    const sorted = [];

    array.forEach((letter) => {
        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }
    });

    for (key in count) {
        sorted.push([key, count[key]])
    }
    sorted.sort((a,b) => {
        return a[1] - b[1];
    })
 
    let least = sorted[0][0];
    let most = sorted[sorted.length - 1][0];
    
    return {most: most , least: least};
};



const isPalindrome = function(str) {
    var reversedStr = str.toLowerCase().split('').reverse().join('') 
    return str === reversedStr ? true : false; 
};


const largestPair = function(array){
    let product = 0;
    let newArr = []

    for (let i = 0; i < array.length - 1; i++){
        product = array[i] * array[i + 1]  
        newArr.push(product) 
    }
    return Math.max(...newArr) 
};



const removeParenth = function(str) {
    var index1 = str.indexOf('(') 
    var index2 = str.indexOf(')') 
    var newStr = str.substring(0, index1) + str.substring(index2 + 1) 
    return newStr
};


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
