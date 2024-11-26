

// from random import randrange

// def sattolo_cycle(items) -> None:
//     """Sattolo's algorithm."""
//     i = len(items)
//     while i > 1:
//         i = i - 1
//         j = randrange(i)  # 0 <= j <= i-1
//         items[j], items[i] = items[i], items[j]
const uniqueFactorial = new Map()

function factorial(num: number): number {
	if (uniqueFactorial.has(num)) return uniqueFactorial.get(num)
	if (num === 0) return 1
	const result = num * factorial(num - 1)
	uniqueFactorial.set(num, result)
	return result
}

function permute(nums: number[]): Array<Array<number>> {
	if (nums.length === 1) {
		return [nums]
	}
	const result: Array<Array<number>> = []
	let i = nums.length
	const unique = new Set()
	const permutations = factorial(i)
	while (result.length < permutations) {
		i = nums.length
		while (i > 1) {
			i -= 1
			let j =  Math.floor(Math.random() * (i))
			const numi = nums[i]
			const numj = nums[j]
			nums[i] = numj
			nums[j] = numi
			if (!unique.has(nums.toString())) {
				result.push([...nums])
				unique.add(nums.toString())
			}
		}
	}


	return result
};

console.log(permute([-10]))