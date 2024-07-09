const form = document.querySelector("#form");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");
const btnCheck = document.querySelector("#button-check");
let word = "";

btnCheck.onclick = (e) => {
  e.preventDefault();
  if (input.value === "") {
    result.textContent = "Please enter a value";
    return;
  }
  word = input.value;
  checkIfPalindrome(word);
  input.value = "";
};

function checkIfPalindrome(wrd) {
  let reverseWord = wrd.split("").reverse().join("");
  if (reverseWord !== wrd) {
    result.innerHTML = `<span class="fw-bold">${wrd}</span> is not a <i>Palindrome.</i>`;
    return;
  }
  result.innerHTML = `<span class="fw-bold">${wrd}</span> is a <i>Palindrome.</i>`;
}
