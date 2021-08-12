//Function to return a sum of result based on n of cuntion. Example => n = 4 -> result = 1 + 1/4 + 1/7 + 1/10
function SeriesSum(n) {
  let result = 1;
  let denom = 1;
  if (n == 0 ) {
      return "0.00"
  }

  for (let i = 1; i < n; i++) {
    denom = denom + 3;
    result = result + 1 / denom;
  }
  return result.toFixed(2);
}

SeriesSum(4);
