var problem7 = function problem7(number){

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

  //start counting from 2
  var count = 2;
  
  //until it is the numberth prime, return count
  for(var i = 0; i < number; count++){
    if(isPrime(count)){
      i++;
    }
  }
  
  //undo the last count increment
  return count - 1;
}

console.log(problem7(10001));
