//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let arrayMovies =['hunter', 'jumanji', 'legally blond', 'super mario']
arrayMovies.forEach(item => console.log(item))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let array = [1,2,3,4,5,6,7,8]
let arrayEven = []
array.forEach(item => {if(item % 2 == 0){arrayEven.push(item) }})
console.log(arrayEven)

//OR

let numEvens = array => array.filter(item => item % 2 === 0) //filter creates an array of values that satisfy the condition
console.log(numEvens(array))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function addHigAndLow(array){
   array.sort((a,b) => a-b)
    alert (array[1] + array[array.length-2])
}


addHigAndLow(array)


