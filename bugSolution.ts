function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Alice", "Bob"];

// Solution 1: Iterate over the array
user.forEach(person => {
  console.log(greeter(person));
});

// Solution 2: Modify the function to accept an array of strings
function greeterArray(people: string[]): string[] {
  return people.map(person => `Hello, ${person}!`);
}
console.log(greeterArray(user));
// Solution 3: Choose the first element of array
console.log(greeter(user[0]));