// function removeChar(str) {
//     //You got this!
//     let x = str.split('')
//     x.shift()
//     x.pop()
//     return x.join('')
// }

function removeChar(str) {
    //You got this!
    return str.slice(1, -1);
};


console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');