// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let numberOfPairs = 0
    let startIndex = 0
    let searchValue = ar[startIndex]

    // first sort array using bubble sort algorithn
    let loop = ar.length

    for (let i = 0; i < loop; i++) {
        // let swap = false

        for (j = 0; j < loop; j++) {
            //compare the adjacent elements
            if (ar[j] > ar[j + 1]) {
                // swap = true
                let temp = ar[j]
                ar[j] = ar[j + 1]
                ar[j + 1] = temp
            }
        }
    }
    console.log(ar)



    for (let index = 0; index < ar.length - 1; index++) {
        if (ar[index] === ar[index + 1]) {
            console.log(index, ar[index], ar[index + 1])
            numberOfPairs++
            index++
        }


    }

    console.log(numberOfPairs, startIndex)
    return numberOfPairs
    // ws.write(numberOfPairs + "\n");

    // ws.end();


}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const n = parseInt(readLine(), 10);

    // const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    n = 9;
    ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    let result = sockMerchant(n, ar);
    console.log(result)
    // ws.write(result + "\n");

    // ws.end();
}
main()