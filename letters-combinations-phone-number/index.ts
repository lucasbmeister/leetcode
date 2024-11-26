
const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const letters = new Map()
let i = 2
let j = 0
while (i <= 9) {
	const numberOfLetters = i === 7 || i === 9 ? 4 : 3
	const nextIndex = j + numberOfLetters
	letters.set(i.toString(), alphabet.slice(j, j + numberOfLetters))
	j = nextIndex
	i++
}



function letterCombinations(digits: string): string[] {
	const buttons = digits.split('').map(d => letters.get(d))
	if (buttons.length == 1) return buttons[0]
	const result: Array<string> = []
	let total = 0
	for(let i = 0; i < buttons.length; i++) {
		for (let l = 0; l < buttons[i].length; l++) {
			result[total] += buttons[i][l]

		}
	}
	return result
};

console.log(alphabet)