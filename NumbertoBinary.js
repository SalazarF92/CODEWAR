//From argument we return the number of "1" in the binary of the current value. Example: n = 323 returns  101000011 . We got four "1"

var countBits = function(n) {
   const result = n.toString(2).split("").map(element => parseInt(element, 10)).reduce((i, v) => i + v)
   console.log(n.toString(2), result)
   return result
  };
  
  
  countBits(323)


//   countBits = n => n.toString(2).split('0').join('').length;

//   console.log(countBits(45))