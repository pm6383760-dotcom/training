// for (let i = 2; i <= 50; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= i / 2; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(i);
//     }
// }
let i = 2;

while (i <= 50) {
    let isPrime = true;
    let j = 2;

    while (j <= i / 2) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    }

    if (isPrime) {
        console.log(i);
    }

    i++;
}