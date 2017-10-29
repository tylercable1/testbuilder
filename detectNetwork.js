// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber[0] + cardNumber[1];
  var first = cardNumber[0];
  var threeFix = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var longPrefix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var sixFix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5];
  
  if (cardNumber.length === 14 && (prefix === '39' || prefix === '38')) {
    return "Diner's Club";
  }  
  if (cardNumber.length === 15 && (prefix === '34' || prefix === '37')) {
  	return 'American Express';
  }
  if (cardNumber.length === 16 && (prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55')) {
  	return 'MasterCard'
  }
  if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (longPrefix === '5018' || longPrefix === '5020' || longPrefix === '5038' || longPrefix === '6304')) {
  	return 'Maestro';
  }
  if ((cardNumber.length === 16 || cardNumber.length === 19) && longPrefix === '6011' || (Number(threeFix) >= 644 && Number(threeFix) <= 649) || (prefix === '65')) {
  	return 'Discover';
  }
  if ((cardNumber.length >= 16 && cardNumber.length <= 19) && (sixFix >= 622126 && sixFix <= 622925) || (threeFix >= 624 && threeFix <= 626) || (longPrefix >= 6282 && longPrefix <= 6288)) {
  	return 'China UnionPay';
  } 
  if ((cardNumber.length === 16 || cardNumber.length === 19) && (longPrefix === '4903' || longPrefix === '4905' || longPrefix === '4911' || longPrefix === '4936')) {
  	  return 'Switch';
  } else if ((cardNumber.length === 18 || cardNumber.length === 16 || cardNumber.length === 19) && (longPrefix === '6333' || longPrefix === '6759' || sixFix === '564182' || sixFix === '633110' || longPrefix === '4903' || longPrefix === '4905' || longPrefix === '4911' || longPrefix === '4936')) {
  	  return 'Switch';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && first === '4' && (longPrefix !== '4903' || longPrefix !== '4905' || longPrefix !== '4911' || longPrefix !== '4936')) {
  	return 'Visa'; 
  }

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


