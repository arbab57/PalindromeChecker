const form = document.querySelector("#form");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");
const btnCheck = document.querySelector("#check-btn");
let word = "";

const abc = "/[a-z]/gi";

btnCheck.onclick = (e) => {
  e.preventDefault();
  if (input.value === "") {
    result.textContent = "Please enter a value";
    window.alert("Please input a value");
    return;
  }
  word = input.value
    .match(/[a-z0-9]/gi)
    .join("")
    .toLowerCase();
  checkIfPalindrome(word);
  input.value = "";
};

function checkIfPalindrome(wrd) {
  let reverseWord = wrd.split("").reverse().join("");
  if (reverseWord !== wrd) {
    result.innerHTML = `<span class="fw-bold">${input.value}</span> is not a <i>palindrome.</i>`;
    return;
  }
  result.innerHTML = `<span class="fw-bold">${input.value}</span> is a <i>palindrome.</i>`;
}
