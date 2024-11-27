const LETTERS_DICT = new Map([
  ["2", ["a", "b", "c"]],
  ["3", ["d", "e", "f"]],
  ["4", ["g", "h", "i"]],
  ["5", ["j", "k", "l"]],
  ["6", ["m", "n", "o"]],
  ["7", ["p", "q", "r", "s"]],
  ["8", ["t", "u", "v"]],
  ["9", ["w", "x", "y", "z"]],
]);


function letterCombinations(digits: string) {
  if (!digits) return [];
  const letters = digits.split("").map((d) => LETTERS_DICT.get(d)!);
  const result = findCombination(letters);
  return result;
}

function findCombination(
  letters: string[][],
  currentIndex = 0,
  previousCombination: string = "",
  result: string[] = []
) {
  if (currentIndex >= letters.length) return "";

  for (const letter of letters[currentIndex]) {
    const combination = previousCombination + letter;
    findCombination(letters, currentIndex + 1, combination, result) || combination;
    if (currentIndex === letters.length - 1) result.push(combination);
  }

  return result
}

console.log(letterCombinations("234"));
