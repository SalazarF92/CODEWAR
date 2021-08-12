//Send an array of names and returns name separated by comma and the last name comes with "&". Example: names = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }] returns Bart, Lisa & Maggie

function list(names) {
  let result = names.map((element) => element.name);
  if (result == "") {
    return "";
  } else
    result = result.reduce((n, v, i) => {
      return i + 1 < names.length ? n + ", " + v : n + " & " + v;
    });
  console.log(result);
  return result;
}

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);


// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
//   }

// var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
