const sumPrimes = range =>{
  let number = 2;
  let sum = 0;
  do{
      let isPrime = true;

      for(let i = 2; i < number; i++){
          if(number % i === 0){
              isPrime = false;
              break;
          }
      }

      if(isPrime){
          sum += number;
      }

      number++;
  }while(number <= range){
    return sum;
  }
}
