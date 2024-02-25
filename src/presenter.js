import sequenceFizzBuzz from "./sequenceFizzbuzz";

const limit_number = document.querySelector("#limit-number");
const form = document.querySelector("#FizzBuzz-form");
const div = document.querySelector("#sequence-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const limitNumber = Number.parseInt(limit_number.value);

  div.innerHTML = "<p>" + sequenceFizzBuzz(limitNumber) + "</p>";
});
