function sumStr(a, b) {
    return a === "" && b === "" ? (0 + '').toString(0) : (+a + +b).toString()
}


console.log(sumStr("4", "5"), "9");
console.log(sumStr("34", "5"), "39");