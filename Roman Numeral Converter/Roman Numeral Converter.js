const romanSymbols = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

// Divides the number into ones, tens, hundreds and thousands
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
	let tens = splitNumArr[2];
	let hundreds = splitNumArr[1];
	let thousands = splitNumArr[0];

  let converteredOnes = convert(ones, romanSymbols[1], romanSymbols[5], romanSymbols[10]);
  let converteredTens = convert(tens, romanSymbols[10], romanSymbols[50], romanSymbols[100]);
  let converteredHundreds = convert(hundreds, romanSymbols[100], romanSymbols[500], romanSymbols[1000] );
  let converteredThousands = convertThousands(thousands);

	let romanNum = ''.concat(converteredThousands, converteredHundreds, converteredTens, converteredOnes);

	return romanNum;
}

function convert (digit, unitSymbol, fiveSymbol, tenSymbol) {
	if ( digit == 4 ) {
		return ''.concat(unitSymbol, fiveSymbol)
  } else if ( digit == 9 ) {
    return ''.concat(unitSymbol, tenSymbol)
  } else if ( digit < 4 ) {
    return ''.concat(unitSymbol.repeat(digit));
  } else if ( digit < 9 ) {
    return ''.concat(fiveSymbol, unitSymbol.repeat(digit - 5));
  }
}

function convertThousands(num) {
  return ''.concat(romanSymbols[1000].repeat(num));
}

export default convertToRoman;