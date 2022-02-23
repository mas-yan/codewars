const areaOrPerimeter = function(l, w) {
    return l == w ? l * w : 2 * (l + w)
};

console.log(areaOrPerimeter(4, 4), 16);
console.log(areaOrPerimeter(6, 10), 32);