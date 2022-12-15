'use strict'; 

/*
	Date : 14/12/22
	Time : 12:11 pm 
	Name : Gias uddin vuiya
*/


/*
	=======================================================
	Efficiency of array in difference Big O
	=======================================================
*/

const array = ['a','b','c','d','e'];

// When we will resive any value form an array using index it's time complexity will be O(1)
let b = array[1]; // Big O(1);

// resving last elment of an array
const lastElm = array[array.length - 1]; // Big  O - O(1)
// console.log(lastElm)

const getValue = array[array.length - 2]; // Big O - O(1)
// console.log(getValue) 

// adding item to last index of an array 
array[array.length] = 'Bangladesh'; // It's Big O - O(1)

// another way to adding item to end of the array 
array.push('z'); // It's Big O - O(1)

// remove item to end of the array 
array.pop(); // It's Big O - O(1)
// console.log(array)

// add itme beginening of the array 
array.unshift('aa add')
array.shift() 
// it will be add 0 index of an array and it will change all the refference of the array that's way it's time complexity will be Big O - O(n)
// console.log(array);


// finding element of an array 
function find(arr)
{
	let result = false
	for(let elm of arr)
	{
		if(elm === 'e') result = (true);
	}
	return result;
}
const showResult = find(array); 
// Big O - O(n) // becuase it's operation related with input
// Space effience Big O - O(1) // becuase it's premitive
// console.log(showResult); 

// ---------------
// Every array method's like Filter,map,forEach,for loop,for of loop,slice,reduce,splice 
// It's Big O - O(n)
// ---------------


/*----Object or Hashmap-----*/
const obj =  
{
	name : 'Gias uddin vuiya',
	teachersName : 'Samim ahmed',
	age : 19,
	teacherAge : 27,
}
// access element 
let getName = obj.name; // It's Big O - O(1); 
// console.log(getName)

// adding item to an object
obj['platform'] = 'Web developer BD'; // It's Big O - O(1)
// console.log(obj)

obj.name = 'Sajuti afsen'; // It's Big O - O(1)
// console.log(obj); 


// delete item form an object 
delete obj.age;
// console.log(obj); 

// searching item 
for(let elm in obj) // It's time complexity Big O - O(n)
{
	if(obj[elm] === 'Sajuti afsen')
	{
		// console.log('Gias uddin vuiya');
	}
}

// another way searching
console.log('teacherAge' in obj)// It's Big O - O(1)


/*
	---------------------- array vs object -----------------------
*/
/*
	When we need to use array method ?
	ans: When we need to use and maintain order those time we should use array. When we need to faster access (by index) or adding item and removing item form end of the array those time we need to use array method.


	When we need to use object method ? 
	ans: When we do not need to maintain order and when we need to manopulate data faster and removal form anywhere of the object those time we can use object method.
*/




