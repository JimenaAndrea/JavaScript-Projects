function splitArr(arr) {
  var beginning;
  var end;

  if ( arr.length % 2 == 0 ) {
    beginning = arr.slice(0, arr.length / 2 );
    end = arr.slice((arr.length / 2), arr.length);
  } else {
    beginning = arr.slice(0, Math.trunc(arr.length / 2) );
    end = arr.slice(Math.trunc((arr.length / 2) + 1), arr.length);
  }

  return [beginning, end];
}

function palindrome(str) {
  var alphanumericStr = str.toLowerCase().match(/[a-z0-9]/g);
  var [ beginning, end ] = splitArr(alphanumericStr);

  end.reverse();
  if ( beginning.every((element, index) => element === end[index]) ) {
    return true;
  } else {
    return false;
  }
}

export default palindrome;