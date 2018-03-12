function prime(num) {
    const isPrime = (num) => {
      for(var i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
    let primes = [];
    for(let i = 2; i <= num; i++) {
      if(isPrime(i)) {
        primes.push(i);
      }
    }
    
    return primes;
}


console.log(prime(11)) //, [2, 3, 5, 7, 11])