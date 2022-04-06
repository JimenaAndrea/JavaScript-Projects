//Function that splits the array in two, skipping the middle character in case of an odd length.
function splitArr(arr) {
  var numOfElements = Math.trunc(arr.length / 2);
  var beginningArr = arr.slice(0, numOfElements);
  var endArr = arr.slice(arr.length - numOfElements, arr.length);

  return [beginningArr, endArr];
}

function palindrome(str) {
  var alphanumericArr = str.toLowerCase().match(/[a-z0-9]/g);
  var [ beginning, end ] = splitArr(alphanumericArr);

  end.reverse();
  
  if ( beginning.every((element, index) => element === end[index]) ) {
    return true;
  } else {
    return false;
  }
}

export default palindrome;