'use strict'; 

/*
	Date : 14/12/22
	Time : 12:11 pm 
	Name : Gias uddin vuiya
*/


/*
	=======================================================
		Problem solving approach
	=======================================================
*/

// problme-1: count the charactors

// input must be string 'Hello'; 
// output {h : 1, e : 1, l : 2, o : 1}
function countChar(str) 
{
	let hashMap = {};
	let char = str.toLowerCase();
	for(let i = 0; i < char.length; i++)
	{
		// removing space 
		if(char[i] === ' ')continue;
		if(char[i] in hashMap)
		{
			// hashMap[char[i]] += 1
			hashMap[char[i]]++
			// hashMap[char[i]] = hashMap[char[i]] + 1;
		}else{
			hashMap[char[i]] = 1
		}
	}
	return (hashMap);
}
const result2 = countChar('Helloooo    oo'); // Big O - O(n)
// console.log(result2)

// another way to solve this problem
// input must be string 'Hello'; 
// output {h : 1, e : 1, l : 2, o : 1}
function countingChar(str)
{
   let hashMaps = {}; 
   let lowerCaseChar = str.toLowerCase()

   for(let elm of lowerCaseChar)
   {
   		if(elm === ' ')continue;
   		elm in hashMaps ? hashMaps[elm]++ : hashMaps[elm] = 1;
   }
   return (hashMaps)
}
const result3 = countingChar('He    llo');



// another way to solve this problem
// input must be string 'Hello'; 
// output {h : 1, e : 1, l : 2, o : 1}
function countingChars(str)
{
   let hashMaps = {}; 
   let lowerCaseChar = str.toLowerCase()
   for(let elm of lowerCaseChar)
   {
   		if(elm === ' ')continue;
   		hashMaps[elm] = (hashMaps[elm] || 0) + 1
   }
   return (hashMaps)
}
const result4 = countingChars('Hellllllooooo');
// console.log(result4) 


// fiend duplicate 
// input (['a','b','c','d'],[1,2,3,4,'x']) //output  false
// input (['a','b','c','d'],[1,2,3,4,'b']) //output  true
function findDuplicate(arr1,arr2)
{
	let flag = false;
	for(let elm of arr1)
	{
		if(arr2.includes(elm))
		{
			flag = true;
			break;
		}
	}
	return flag;
}
const result6 = findDuplicate(['a','b','c','d'],[1,2,3,4,'c']) //output  true
// console.log(result6); // Big O(n^2)

// Now i will try to save time to solve this this problem
function findDuplicate1(arr1,arr2)
{
	let myHashMap = {};
	let test = false;
	if(arr1.length !== arr2.length)return;


	for(let i = 0; i < arr1.length; i++)
	{
		myHashMap[arr1[i]] = true;
	}
	// console.log(myHashMap)
	for(let j = 0; j < arr2.length; j++)
	{
		// console.log(arr2[j])
		if(arr2[j] in myHashMap)
		{
			test = true;
		}
	}
	return (test);
}
let result7 = findDuplicate1(['a','b','c','d'],[2,3,3,'a']) //output  true
// console.log(result7); // Big O(n)


