import generateFizzBuzz from "./fizzbuzz.js";
function sequenceFizzBuzz(n) {
    let sequence = "";
    for (let i = 1; i === n; i++) {
        sequence += generateFizzBuzz(i);
        if (i < n){
            sequence += ", ";
        }   
    }
    return sequence;
}
export default sequenceFizzBuzz;