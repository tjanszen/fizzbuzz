 window.onload = init;

 function init(){
  var Fizz = 0;
  var Buzz = 0;
  var FizzBuzz = 0;
  for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log(i + " FizzBuzz")
      FizzBuzz += 1;
      
    }
    else if(i % 3 === 0){
      console.log(i + " Fizz");
      Fizz += 1;
      
    }
    else if(i % 5 === 0){
      console.log(i + " Buzz");
      Buzz += 1;
    }
  }
  console.log("Total Fizz Count " + Fizz);
  console.log("Total Buzz Count " + Buzz);
  console.log("Total FizzBuzz Count " + FizzBuzz);
}
  