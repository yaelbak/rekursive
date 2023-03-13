const startWithA = (word) => word?.[0]?.toLowerCase() === 'a';

const word = ["abv", "", "dfdfd", "uytrj", "ajfh"]

function reStartWithA(stringArray, output = [], index = 0) {
  if (index === stringArray.length) {
    return output
  }

  let current = stringArray[index]
  if (startWithA(current)) {
    output.push(current)
  }
  return reStartWithA(stringArray, output, index + 1)

}

const wordStartWithA = reStartWithA(word)
console.log(wordStartWithA)




/* משימה 2 - להחזיר רק מספרים זוגיים  */

  function EvenNumber(numArray, output = [], index = 0) {
    if (index === numArray.length) {
      return output
    }

    let current = numArray[index]
    if (!(current % 2 )) {
      output.push(current)
    }
    return EvenNumber(numArray, output, index + 1)

  }

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(EvenNumber( num))

/**משימה 1 רשות  */

const words = ["dfsf", "sdfsdf", "erefdsf", "dfdsf"];

const sortedWords = words.sort();

/** משימה 2 רשות
 *
 * @param {string[]} words
 * @param {string[]} output
 * @param {Number} index
 */
function upperCase(words, output = [], index = 0) {
  if (index === words.length) {
    return output;
  }
  const currentWord = words[index];
  output.push(currentWord.toUpperCase());
  return upperCase(words, output, ++index);
}

const upperCaseWords = upperCase(words);
console.log(sortedWords);
console.log(upperCaseWords);


