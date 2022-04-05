function decipher(chr){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var index = alphabet.indexOf(chr);
  
  if( index == -1){
    return chr;
  } else {
    const decipherIndex = (index + 13) % 26;
    return alphabet.charAt(decipherIndex);
  }
}
  
function rot13(str) {
  const decipheredArr = str.split('').map(decipher);
  
  return decipheredArr.join('');
}

export default rot13;