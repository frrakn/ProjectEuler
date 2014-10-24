var problem5 = function problem5(number){

  //determines if number is prime
  var isPrime = function isPrime(num){
    //edge cases
    if(num <=1){
      //less than 1, error
      return false;
    }
    else if(num <=3){
      //must be either 2 or 3, return true
      return true;
    }
    else{
      //chccks all numbers less than or equal to the sqrt number, if divisible, return false
      for(var i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
          return false;
        }
      }
    
      //if none are divisible, return true
      return true;
    }
  }

  //for all numbers from 1 to number, checks if prime. if prime multiplies product by the maximum power of the prime
  var product = 1;
  
  for(var i = 2; i <= number; i++){
    if(isPrime(i)){
      product = product * Math.pow(i, Math.floor(Math.log(number) / Math.log(i)));
    }
  }
  
  return product;
}

console.log(problem5(20));