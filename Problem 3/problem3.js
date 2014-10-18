//recursive solution
//peels off lowest prime roots until there are no prime roots below sqrt n, in which n is prime and is the largest prime root
var recursivep3 = function recursivep3(number){
  var root = Math.sqrt(number);
  
  //test for roots, run through all numbers less than sqrt number, starting from lowest
  for(var i = 2; i <= root; i++){
    //if a number is divisible, it is the smallest root. simplify by looking for larger primes in n / root
    if(number % i === 0){
      return recursivep3(number / i);
    }
  }

  //if nothing below sqrt n has been divisible, n is prime and is largest root
  return number;
};

console.log(recursivep3(600851475143));