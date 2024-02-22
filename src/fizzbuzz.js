function generateFizzBuzz(n) {
    const FIZZ = 3;
    if(n === FIZZ)
    {
        return "Fizz";
    }
    return n+"";
}

export default generateFizzBuzz;