// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let large = array[0]
let small = array[0]

for (let i = 0; i < array.length; i++) {
    if (large < array[i]) {
        large = array[i]
    } else if(small > array[i]) {
         {
            small = array[i]
        }
    }
}

console.log(large)
console.log(small)