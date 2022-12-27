//1. Reverse words in a given string
//2. Print duplicate characters from a string
//3. If two strings are anagrams of each other
//4. How do you check if a given string is a palindrome

// 1=>
let str = 'hello world to all';
// let
let reverseStr = '';
for (i = str.length - 1; i >= 0; i--) {
	reverseStr += str[i];
}

// reverse a word?
let newarr = str.split(' ');
let reverseWord = [];

for (i = newarr.length; i >= 0; i--) {
	reverseWord.push(newarr[i]);
}
// console.log(reverseWord.join(' '));

// 2=>

const duplicateCharCount = (str) => {
	var obj = {};
	for (let i = 0; i < str.length; i++) {
		if (obj[str.toLowerCase()[i]]) {
			obj[str.toLowerCase()[i]] += obj[str.toLowerCase()[i]];
		} else {
			obj[str.toLowerCase()[i]] = 1;
		}
	}
	return obj;
};
console.log(duplicateCharCount('sstTrr'));
