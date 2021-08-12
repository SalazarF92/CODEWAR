//Morse code that you send the code from MORSE_CODE array and returns translated word. Example: word = ".... . -.--   .--- ..- -.. ." returns HEY JUDE

var MORSE_CODE = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
};

function decodeMorse(word) {
  word = word.split(" ");
  //   console.log(word)

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "") {
      word[i] = " ";
    } else word[i] = MORSE_CODE[word[i]];
  }
  console.log(
    word
      .join("")
      .replace(/ +(?= )/g, "")
      .trim()
  );
  return word
    .join("")
    .replace(/ +(?= )/g, "")
    .trim();
}

decodeMorse(".... . -.--   .--- ..- -.. .");
