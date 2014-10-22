//function that iterates through multiplication table subject to limits on multiplier / multiplicand
var problem4 = function problem4(limit1, limit2){
  
  //stores the higher and the lower of the numbers
  //no need for now... might need for heuristic
  var max = 0;
  var min = 0;
  
  //max palindrome
  var maxPalindrome = 1;
  
  if(limit1 > limit2){
    max = limit1;
    min = limit2;
  }
  else{
    max = limit2;
    min = limit1;
  }
  
  //pulls the nth digit (base 10) off of a number
  var nthDigit = function nthDigit(number, digit){
    //mods by 10^digit to strip off higher digits, divides and floors to strip off lower digits
    return Math.floor((number % Math.pow(10, digit)) / Math.pow(10, digit-1));
  };
  
  //checks if number is palindrome
  var checkPalindrome = function checkPalindrome(number){
    var digits = Math.floor(Math.log10(number)) + 1;
    
    //for each number from 1 to digits / 2 (odd numbers ok, dont need to check middle digit) check if opposite digit is equal
    for(var i = 1; i <= digits / 2; i++){
      //test
      //console.log(nthDigit(number, i) + " : " + nthDigit(number, digits - i + 1));
        
      //if not equal, return false
      if(nthDigit(number, i) != nthDigit(number, digits - i + 1)){
        return false;
      }
    }
    
    //otherwise, return true
    return true;
  };
  
  //should probably think of a heuristic here...
  for(var i = Math.pow(10, Math.floor(Math.log10(max))); i < max; i++){
    for(var j = Math.pow(10, Math.floor(Math.log10(min))); j < min; j++){
      //check if palindrome, then update maxPalindrome
      if(checkPalindrome(i * j)){
        maxPalindrome = Math.max(maxPalindrome, i * j);
      }
    }
  }
  
  return maxPalindrome;
};

console.log(problem4(999,999));
