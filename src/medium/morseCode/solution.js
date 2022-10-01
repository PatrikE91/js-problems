const obj = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  y: "-.--",
  z: "--..",
  "/": "/",
};

function stringToMorse(str) {
  const letters = str.replace(/ /g, "/").split("");

  let morseStr = [];

  letters.forEach((letter) => {
    let morsAlphabet = Object.keys(obj);

    morsAlphabet.forEach((mLetter, i) => {
      if (letter === mLetter) {
        morseStr.push(Object.values(obj)[i]);
      }
    });
  });
// console.log(morseStr.join(' '))

  return morseStr.join(" ");
}


stringToMorse("hello")
function morseToString(morse) {
  const chars = morse.split(" ");

  let letters = [];

  chars.forEach((char) => {
    let alphabet = Object.values(obj);

    alphabet.forEach((mLetter, i) => {
      if (char === mLetter) {
        letters.push(Object.keys(obj)[i]);
      }
    });
  });
  return letters.join("").replaceAll("/", " ");
}

morseToString('.... . .-.. .-.. --- / - .... . .-. . /')

