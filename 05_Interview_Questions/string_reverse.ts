// Write a function to reverse a string in TypeScript.
let str: string = "Hello";

// Method 1: Using built-in functions
function reverseString(s: string): string {
    return s.split("").reverse().join("");
}

console.log("Method 1: " + reverseString(str));

// Method 2: Using a for loop

function reverseStringLoop(s: string): string {
    
    let reversed: string = "";

    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

console.log("Method 2: " + reverseStringLoop(str));
