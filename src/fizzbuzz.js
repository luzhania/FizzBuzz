function generateFizzBuzz(n) {
    const FIZZ = 3;
    const BUZZ = 5;
    if(n % FIZZ === 0)
    {
        return "Fizz";
    }
    if (n === BUZZ)
    {
        return "Buzz";
    }
    return n+"";
}

export default generateFizzBuzz;