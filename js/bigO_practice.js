'use strict'; 
/*
	Date : 14/12/22
	Time : 12:11 pm 
	Name : Gias uddin vuiya
*/

/*
	-------------------------------------------------------
						Big O in practice-1
	-------------------------------------------------------

*/

/*
	Big o is way to check which code is best and which code is Horrible. Most of the time we use Big o for how number of operation increase/relates with input.

	There are way we can check time complexity
	* Best case(O mega)
	* Average case(Theta)
	* Worse case(O)
*/ 

// Example of linear
function log(n)
{
	for(let i = 0; i < n; i++)
	{
		console.log('Hello world ' + i);
	}
}
// log(5); 
// This for loop operation is related with our input and we can say it's increasing linearly
// Big O - O(n);



// If any input relation increase like square rate then it will be quadratic or n^2
// Example of quadratic : 
function log1(n)
{
	for(let i = 0; i < n; i++)
	{
		console.log('hello');
		for(let j = 0; j < n; j++)
		{
			console.log(j)
		}
	}
}
// log1(10);
// Big O -(n * n) - (n^2);

// another example of linear
function log2(n)
{
	let count = 0;
	for(let i = 0; i < n; i++)
	{
		console.log(i);
		count++;
	}

	for(let j = 0; j < n; j++)
	{
		console.log(j)
		count++;
	}
	return (count)
}
// const result = log2(5);
// console.log(result);
// Big O(n) + O(n) = (2n) = (n);



// Another example of n^3
function log3(n)
{
	for(let i = 0; i <= n; i++)
	{
		// console.log('i');
		console.log(i)
		for(let j = 0; j <= n; j++)
		{
			// console.log('j');
			console.log(j)
			for(let k = 0; k <= n; k++)
			{
				// console.log('k');
				// console.log(i,j,k)
				console.log('Hello')
			}
		}
	}
}

// log3(4); 

// Big O - O(n * n * n) = O(n^3); // It's Horrible 

// antoher example: 
function log4(n)
{
	for(let i = 0; i < n; i++)
	{
		console.log('Time')
		for(let j = 0; j < n; j++)
		{
			console.log(j)
		}
	}

	for(let k = 0; k < n; k++)
	{
		console.log('Hello world')
	}
}
// log4(3); 
// Big O = O(n^2 + n) = O(n^2); 

// Example of constant
function sum(n)
{
	return (n + n + n)
}
const result1 = sum(100)
// console.log(result1) 
// Big O(1)


/*
	-------------------------------------------------------
						Big O in practice-2 (Confusing case)
	-------------------------------------------------------
*/


function logLeast5(n)
{
	for(let i = 1; i <= Math.max(5,n); i++)
	{
		console.log(i);
	}
}
// logLeast5(6)

// 5 is bext case of the condition. if i pass under 5 number in our input field it will return maximum 5. if i pass more then 5 to our input field. It will be linear. 

// Best case O(1)
// worse case O(n)


// another example of best case
function testNum(n)
{
	for(let i = 1; i <= 5; i++)
	{
		console.log(i);
	}
	// its not dependent on input so it will be constent
}
// testNum(3)


// another tricky example 
function getMin(n)
{
	for(let i = 1; i <= Math.min(5,n); i++)
	{
		console.log(i)
	}
}
// O(1) best case
// O(n) worse case
// getMin(3)


// another example: 
function log5(num1,num2)
{
	for(let i = 0; i < num1; i++)
	{
		console.log(i)
	}

	for(let j = 0; j < num2; j++)
	{
		console.log(j)
	}
}
// log5(4,5)
// O(m + n)


// Efficiency
// O(1) - O(log n) - O(n) - O(n log n) - O(n^2)

/*
	-------------------------------------------------------
					Big O in practice-4 (Space complexity)
	-------------------------------------------------------
*/

// We can indicat time and space complexity by Big O notation
/*
	Note: Most primitive are constant for Example: 
	1. numbers 
	2. booleans
	3. undefined
	4. null 
	
	constent means it will take same space for 1 and 1000

	// String 
	for string data types it  will takes space by checking its length
	for example : 
	let name = 'k'; // it will take 1 slot
	let myName = 'kamal'; // it will take 5 slots

	// Array
	for array data type it will check how much elements its takes after that it will take space

	// Object 
	for object data type it will check how much elements its takes after that it will take space

	// Importent note : 
	Refferene type are generlly O(n)
*/


