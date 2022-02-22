// function sumMul(a, b) {
//     let c = []
//     for (a; a < b; a++) {
//         if (a < b) {
//             c.push(a)
//         }
//     }
//     return c.reduce(function(sum, n) {
//         return sum += n;
//     }, 0);
// }


function sumMul(n, m) {
    if (n >= m) return 'INVALID'

    const last = Math.ceil(m / n) * n - n
    return (last + n) * (last / n) / 2
}

console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(3, 13), 30);
console.log(sumMul(4, -7), "INVALID");