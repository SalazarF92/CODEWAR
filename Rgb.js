//From argument we get the Hexdecimal color from RGB. If gets lower than 0 we get 00 and higher then 255 we get FF. Example: (-14, 300, 47) returns 00FF2F

function rgb(r, g, b) {
  const color = (
    ((r <= 15 ? r<0 ? "00" : "0"+r.toString(16) : (r >= 255 ? (255).toString(16) : r.toString(16))) +
    (g <= 15 ? g<0 ? "00" :"0" +g.toString(16) : (g >= 255 ? (255).toString(16) : g.toString(16))) +
    (b <= 15 ? b<0 ? "00" :"0"+b.toString(16) : (b >= 255 ? (255).toString(16) : b.toString(16))))
  .toUpperCase())
 
  console.log(color);
  return color;
}

rgb(-14, 300, 47);


// function rgb(r, g, b){
//     function toHex(a) { 
//       if (a <= 0) return '00';
//       else if (a >= 255) return 'FF';
//       else return a.toString(16).toUpperCase();
//     }
//     console.log(toHex(r) + toHex(g) + toHex(b))
//     return toHex(r) + toHex(g) + toHex(b);
//   }