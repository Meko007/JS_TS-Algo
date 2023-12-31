/*
Given a positive integer n. 
Determine whether it can be split into two primes. 
If yes, return the maximum product of two primes. If not, return 0 instead.
*/
const primeProduct = (n: number) => {
    const isPrime = (num: number) => { //function to check for prime numbers
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
        return true;
    };
   
    for(let i = Math.floor(n / 2); i >= 2; i--){
        let j = n - i;
        if(isPrime(i) && isPrime(j)) return i * j;
    }
    return 0;
};

//Test cases
// console.log(primeProduct(17));
// console.log(primeProduct(10));
// console.log(primeProduct(20));
// console.log(primeProduct(100));
// console.log(primeProduct(4));
// console.log(primeProduct(60570));
