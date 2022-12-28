//
//
// Given an integer x, return true if x is a palindrome, and false otherwise.
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

// 1.  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// 2. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
const checkNumber = (arr) => {
	var obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]]) {
			return true;
		} else if (obj[arr[i]] == 1) {
			return false;
		} else {
			obj[arr[i]] = 1;
		}
	}
};
// console.log(checkNumber([1, 2, 4, 4, 6, 7, 8, 9, 10]));

// 3. Given an integer x, return true if x is a palindrome, and false otherwise.
const checkPalindrome = (num) => {
	let value = num.toString();
	let reverseValue = value.split('').reverse().join('');
	if (Number(reverseValue) === num) {
		return true;
	} else {
		return false;
	}
};
// console.log(checkPalindrome(20202));
// checkPalindrome(54615);
