
maskify("1548796252246568554226");

function maskify(cardNumber:string)  {
  let number : string[] = [];
  let maskedNumber : string[] = [];

  for (let index = 0; index < cardNumber.length; index++) {
    number.push(cardNumber.charAt(index));    
  }

  number.forEach((character, index) =>{
    if (index < (number.length-4)) {
      maskedNumber[index] = "#"      
    }
    else
    {
      maskedNumber[index] = character
    }
    
  });
  console.log("maskedNumber : ",maskedNumber);
  console.log(cardNumber);
  
}
