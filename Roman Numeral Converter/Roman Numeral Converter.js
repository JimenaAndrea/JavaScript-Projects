const romanSymbols = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

//Divides the number into ones, tens, hundreds and thousands
function splitNum (num){
	var numArr = num.toString().split('');

	while (numArr.length < 4) {
		numArr.unshift('0');
	}

	return numArr
}

function convertToRoman(num) {
	let splitNumArr = splitNum(num);
	let ones = splitNumArr[3];
	let tens = splitNumArr[2] * 10;
	let hundreds = splitNumArr[1] * 100;
	let thousands = splitNumArr[0] * 1000;
	let romanNum = ''.concat(convertThousands(thousands), convertHundreds(hundreds), convertTens(tens), convertOnes(ones));

	return romanNum;
}

//Functions that convert each part of the number in roman numeral.
function convertOnes(num){
	if (num == 0) {
		return '';
	} else if (num == 1){
		  return romanSymbols[1];
	} else if ( num == 5 ){
		  return romanSymbols[5];
	} else if ( num == 4){
			return ''.concat(romanSymbols[1], romanSymbols[5])
	} else if ( num == 9){
			return ''.concat(romanSymbols[1], romanSymbols[10])
	} else if ( num < 4){
			return ''.concat(romanSymbols[1].repeat(num));
	} else if ( num < 9){
			return ''.concat(romanSymbols[5], romanSymbols[1].repeat(num - 5));
	}
}

function convertTens(num){
	if (num == 0) {
		return '';
	} else if (num == 10){
		  return romanSymbols[10];
	} else if ( num == 50 ){
			return romanSymbols[50];
	} else if ( num == 40){
			return ''.concat(romanSymbols[10], romanSymbols[50])
	} else if ( num == 90){
			return ''.concat(romanSymbols[10], romanSymbols[100])
	} else if ( num < 40){
			return ''.concat(romanSymbols[10].repeat(Math.trunc( num / 10 )));
	} else if ( num < 90){
			return ''.concat(romanSymbols[50], romanSymbols[10].repeat(Math.trunc( num / 10 ) - 5));
	}
}

function convertHundreds(num){
	if (num == 0) {
		return '';
	} else if (num == 100){
		  return romanSymbols[100];
	} else if ( num == 500 ){
			return romanSymbols[500];
	} else if ( num == 400 ){
			return ''.concat(romanSymbols[100], romanSymbols[500])
	} else if ( num == 900){
			return ''.concat(romanSymbols[100], romanSymbols[1000])
	} else if ( num < 400){
			return ''.concat(romanSymbols[100].repeat(Math.trunc( num / 100 )));
	} else if ( num < 900){
			return ''.concat(romanSymbols[500], romanSymbols[100].repeat(Math.trunc( num / 100 ) - 5));
	}
}
  
function convertThousands(num){
  if (num == 0) {
    return '';
  } else {
      return ''.concat(romanSymbols[1000].repeat(num / 1000));
  }
}

export default convertToRoman;