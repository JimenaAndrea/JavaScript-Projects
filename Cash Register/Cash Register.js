const currency = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

function currencyChange(cashInDrawer, change){
  let changeLeft = change;
  let currencyValues = Object.values(currency).map(toCents);
  let finalChange = [];

  for ( let i = cashInDrawer.length - 1; i >= 0; i--){
    // Amount of change we give with this currency.
    let currentCurrencyChange = 0;
    // Total amount of current currency available.
    let currentCurrencyAvailable = cashInDrawer[i];
    // Value of each coin of the current currency.
    let currentCurrencyValue = currencyValues[i];

    if ( currentCurrencyValue <= changeLeft ){
      while( changeLeft >= currentCurrencyValue && currentCurrencyAvailable > 0 ){
        currentCurrencyAvailable -= currentCurrencyValue;
        changeLeft -= currentCurrencyValue;
        currentCurrencyChange += currentCurrencyValue;
      }
      // Push the change of the current currency to the final change array
      // as [ Currency name, Amount ]
      finalChange.push([ Object.keys(currency)[i], currentCurrencyChange / 100 ]);
    }
  }

  if ( changeLeft == 0 ){
    return finalChange;
  } else {
    return [];
  }
}

// This function is used for avoid strange results in some operations.
// It converts dollar to cents.
function toCents (num) {
  let cents = Math.round(num * 100);
  return cents;
}

function checkCashRegister(price, cash, cid) {
  let change =  toCents(cash) - toCents(price);
  let response = {status: "", change: []};
  let cashInDrawer = cid.flat().filter(element => typeof element == 'number').map(toCents);
  let totalCashInDrawer = cashInDrawer.reduce((acc, cur) => acc + cur, 0);

  if( change == totalCashInDrawer ) {
    response.status = "CLOSED";
    response.change = cid;
  } else if( change > totalCashInDrawer ) {
      response.status = "INSUFFICIENT_FUNDS";
  } else {
      response.change = currencyChange(cashInDrawer, change);     
      if(response.change.length == 0) {
        response.status = "INSUFFICIENT_FUNDS";
      } else {
        response.status = "OPEN";
      }
  }

  return response; 
}

export default checkCashRegister;