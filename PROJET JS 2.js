function reverseString(str){
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


function countCharacters(str) {
    return str.length;
}


function capitalizeWords(sentence) {
    let result = ""; 
    let capitalizeNext = true; 

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            result += sentence[i]; 
            capitalizeNext = true; 
        } else if (capitalizeNext) {
            result += sentence[i].toUpperCase(); 
            capitalizeNext = false;
        } else {
            result += sentence[i]; 
        }
    }

    return result;
}


function findMaxAndMin(arr) {
    if (arr.length === 0){
        let max=0
        let min=0
        return {max,min}
    } else{
        max = arr[0];
        min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
    }
    return { max, min };
    }   
}

function sumArray(arr){
    let s=0;
    for (let i = 0; i < arr.length; i++) {
        s+=arr[i];
        
    }
    return s;
}


function filterArray(arr){
    let tab=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2===0) {
            tab.push(arr[i])   ;
        }
    }
    return tab;
}


function factorialNb(n){
    if (n < 0) return -1; 
    if (n === 0) return 1;
    let F=1
    for (let i = 1; i <= n; i++) {
        F=F*i   
    }
    return F;
}


function isPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}


function generateFibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 

    let tab = [0, 1]; 
    for (let i = 2; i < n; i++) {
        tab.push(tab[i - 1] + tab[i - 2]); 
    }

    return tab;
}
console.log(reverseString("anwar"));
console.log(countCharacters("anwar"));
console.log(capitalizeWords("hello world"));
console.log(findMaxAndMin([7,1,5,9,6,2]));
console.log(findMaxAndMin([]));
console.log(sumArray([5,7,1,9,6,2]));
console.log(filterArray([4,7,9,6,3,2]));
console.log(factorialNb(5));
console.log(factorialNb(0));
console.log(factorialNb(-2));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(generateFibonacci(10)); 
console.log(generateFibonacci(0));


