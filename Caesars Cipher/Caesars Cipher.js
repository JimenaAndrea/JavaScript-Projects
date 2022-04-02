function decipher(chr){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var index = alphabet.indexOf(chr);
  
  if( index == -1){
    return chr;
  } else {
      const decipherIndex = index + 13;
      if(decipherIndex >= 26){
        return alphabet.charAt(decipherIndex - 26);
      } else {
        return alphabet.charAt(decipherIndex);
      }
  }
}
  
function rot13(str) {
  const decipheredArr = [];
  
  str.split( '' ).map( chr => decipheredArr.push(decipher(chr)) );
  
  return decipheredArr.join('');
}

export default rot13;