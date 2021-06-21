// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {
  test("returns an array of that length containing the numbers of the Fibonacci", () => {
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// b) Create the function that makes the test pass.

// create a function called fibonacci
// parameter - data type number, greater than 2
// create a variable that will hold an empty array
// create a for loop that stops at the number passed in
// pushing the numbers that is the sum of the two previous indexes
// Fibonacci n-2 + n-1 = the next number
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Each number is relying on information from the previous two numbers

const fibonacci = (number) => {
  let fibArray = [1, 1]
  for(let i=1; i<number-1; i++){
    fibArray.push(fibArray[i] + fibArray[i - 1])
  }
  return fibArray
}

// Recusion Option:
// const getFibRecursion = (number) => {
//   if(number === 1){
//     return [1, 1]
//   } else {
//     let fibArray = getFibRecursion(number - 1)
//     return [...fibArray, fibArray[number - 1] + fibArray[number - 2]]
//   }
// }
// console.log(getFibRecursion(10))



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.


describe("sortedOdds", () => {
  test("returns a new array of only odd numbers sorted from least to greatest", () => {
    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    expect(sortedOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(sortedOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})

// b) Create the function that makes the test pass.

// create a function called sortedOdds
// parameter - array
// iterate with filter
// if value data type - number, typeof
// if value modulo if the number is odd array[i] % 2 !== 0
// return array sort .sort((a, b) => a - b)

const sortedOdds = (array) => {
  let oddsAndNumbers = array.filter(value => {
    return value % 2 !== 0 && typeof value === "number"
  })
  return oddsAndNumbers.sort((apple, banana) => apple - banana)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accSum", () => {
  test("returns an array of the accumulating sum", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    var numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    var numbersToAdd3 = []
    // Expected output: []
    expect(accSum(numbersToAdd3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.

// create a function accSum
// parameter - array
// declare variable that will hold the sum
// iterate - add current value to the variable
// after each iteration push into an empty array
// return the array

const accSum = (array) => {
  let total = 0
  return array.map(value => {
    return total += value
  })
}
