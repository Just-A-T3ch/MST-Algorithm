// O(n^3)
function minSubarraySum(array) {
	if (array.length === 0) return 0;

	let minSum = Infinity;

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			const subarray = array.slice(i, j) // O(n)
			const sum = array.reduce((acc, val) => acc + val, 0);
			minSum = Math.min(minSum, sum) 
		}
	}
	return minSum
}

// O(n) time - O(n) space
function minSubarraySumDP(array) {
	if (array.length === 0) return 0;

	let minSumUsingElement = [array[0]]
	let minSum = array[0];

	for (let i = 1; i < array.length; i++) {
		const num = array[i];
		const currentMin = Math.min(num, minSumUsingElement[i - 1] + num)
		minSumUsingElement.push(currentMin);
		minSum = Math.min(minSum, currentMin)
	}

	return minSum
}

// O(n) time - O(1) space
function minSubarraySumDP2(array) {
	if (array.length === 0) return 0;

	let minSumUsingLastElement = array[0]
	let minSum = array[0];

	for (let i = 1; i < array.length; i++) {
		const num = array[i];
		const currentMin = Math.min(num, minSumUsingLastElement + num)
		minSumUsingLastElement = currentMin;
		minSum = Math.min(minSum, currentMin)
	}

	return minSum
}


const arr = [-7, 3, 4, -2, -3, 1, -3]
const result = minSubarraySumDP2(arr)
console.log(result)