function telephoneCheck(str) {
	const dashed = /^(1 )?\d{3}-\d{3}-\d{4}$/g;
	const bracket = /^(1( )?)?\(\d{3}\)( )?\d{3}-\d{4}$/g;
	const whitespaceOrNot = /^(1 )?\d{3}( )?\d{3}( )?\d{4}$/g;

	if( dashed.test(str) || bracket.test(str) || whitespaceOrNot.test(str) ) {
		return true;
	}
	
	return false;
}

export default telephoneCheck;