//From a number we check if is a perfect square, and calculate the next perfect square after argument. Example: sq = 121 we get 11 as perfect square, and the next perfect square is 144 that belongs to 12.
function findNextSquare(sq) {
  const squareResult = Math.sqrt(sq);
  const currentSquare = sq;
  result = squareResult - Math.floor(squareResult);

  if (result != 0) {
    return console.log(-1);
  } else;

  do {
    sq++;
    if (Math.sqrt(sq) - Math.floor(Math.sqrt(sq)) == 0) {
      return console.log(
        `From square ${currentSquare} we get the next square in ${sq}`
      );
    }
  } while (Math.sqrt(sq) - Math.floor(Math.sqrt(sq)) !== 0);
}

// findNextSquare(9);



// function findNextSquare2(sq) {
//     console.log(Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2));
//     // console.log(Math.sqrt(sq)%1)
//     return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+4,2);
//   }


  findNextSquare(121)

