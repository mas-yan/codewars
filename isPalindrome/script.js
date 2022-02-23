function isPalindrome(x) {
    const y = x.split('').reverse().join('')
    if (y.toLowerCase() === x.toLowerCase()) {
        return true
    }
    return false
}

console.log((isPalindrome("a"), true));
console.log((isPalindrome("aba"), true));
console.log((isPalindrome("Abba"), true));
console.log((isPalindrome("hello"), false));
console.log((isPalindrome("Bob"), true));
console.log((isPalindrome("Madam"), true));
console.log((isPalindrome("AbBa"), true));
console.log((isPalindrome(""), true));