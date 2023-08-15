//multiply two numbers
const multiply = (n1, n2) => {
  console.log(n1 * n2);
}
multiply(2, 4);

//Greeting with two arguments
const greet = (name, lastName) => {
 console.log("Hello " + name + " " + lastName)
}

greet("John", "Smith");


//check if number is even
const isEven = (num) =>{
    return num % 2 === 0;
};

console.log(isEven(4));
console.log(isEven(5));


//check if strings are equal
const areEqual = (str1, str2) =>{
  if (str1 === str2) {
    console.log("good job!")
  } else console.log("boo!")
}  

areEqual("hello", "hello");
areEqual("hello", "Hello");


//function that counts a specific letter
const countA = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) { count++
    }
  }
  return count;
};

console.log(countA("the train was late", "t"));