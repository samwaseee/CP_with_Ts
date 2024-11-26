function isPalindrome(x: number): boolean {

    if (x < 0) return false;
    if (x < 10) return true;

    let xLength = Math.floor(Math.log10(x));

    let leftDivisor = Math.pow(10, xLength);
    let rightDivisor = 1;

    while (leftDivisor >= rightDivisor) {
        let left = Math.floor(x / leftDivisor) % 10;
        let right = Math.floor(x / rightDivisor) % 10;

        if (left !== right) {
            return false;
        }

        leftDivisor /= 10;
        rightDivisor *= 10;
    }

    return true;
}

console.log(isPalindrome(12521)); // Output: true
console.log(isPalindrome(-1221));  // Output: true
console.log(isPalindrome(1234));  // Output: false
