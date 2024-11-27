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
  return chunk(result, digits.length);
}

function findCombination(
  letters: string[][],
  currentIndex = 0,
  previousCombination: string = ""
): string {

  if (currentIndex >= letters.length) {
    return ''
  }

  let fullCombination = "";

  for (const letter of letters[currentIndex]) {
    const combination = previousCombination + letter;
    fullCombination += findCombination(letters, currentIndex + 1, combination) || combination;
    continue
  }

  return fullCombination;
}

function chunk(fullText: string, chunkSize: number) {
  const numChunks = Math.ceil(fullText.length / chunkSize);
  const chunks = new Array<string>(numChunks);

  for (let i = 0, chunk = 0; i < numChunks; i++, chunk += chunkSize) {
    chunks[i] = fullText.substring(chunk, chunk + chunkSize);
  }

  return chunks;
}

console.log(letterCombinations("234"));
