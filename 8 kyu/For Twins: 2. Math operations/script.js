function iceBrickVolume(radius, bottleLength, rimLength) {
    return (bottleLength - rimLength) * radius * 2 * radius;
}

console.log(iceBrickVolume(1, 10, 2), 16, "radius = 1, bottleLength = 10, rimLength = 2");
console.log(iceBrickVolume(5, 30, 7), 1150, "radius = 5, bottleLength = 30, rimLength = 7");