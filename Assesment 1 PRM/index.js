// Write a program to print a new number with digits reversed from the original one. The number provided will be greater than or equal to 0

// Input Format:

// Input Integer in variable n

// Output Format:

// print the reverse of the number n.

// Sample Input 0:

// 1234

//  Sample Output 0:

// 4321

function newString(n)
{
    n = n+"";
    return n.split("").reverse().join("");
}
console.log(Number(newString(1234)));
