function generateFizzBuzz(n) {
    const FIZZ = 3;
    const BUZZ = 5;
    if (n % FIZZ === 0 && n % BUZZ === 0) {
        return "FizzBuzz"
    }
    else {
        if (n % FIZZ === 0) {
            return "Fizz";
        }
        if (n % BUZZ === 0) {
            return "Buzz";
        }
        return n + "";
    }

}
export default generateFizzBuzz;