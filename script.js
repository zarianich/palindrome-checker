const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanUp(str) {
  return str.replace(/\W|_/g, "").toLowerCase();
}

function reverse(s) {
  let newS = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newS += s.charAt(i);
  }
  return newS;
}

function isPalindrome(str) {
  let newStr = str;


  if (newStr.length % 2 === 0) {
    if (newStr.slice(0, newStr.length / 2) === reverse(newStr.slice((newStr.length / 2)))) {
      return true;
    }
  } else {
    if (newStr.slice(0, newStr.length / 2) === reverse(newStr.slice((newStr.length / 2) + 1))) {
      return true;
    }
  }
  return false;
}

function checkIfPalindrome(input) {
  const cleanInput = cleanUp(input);
  result.innerHTML = isPalindrome(cleanInput) ? `<p><strong>${input}</strong> is a palindrome.</p>` : `<p><strong>${input}</strong> is not a palindrome.</p>`
  result.classList.remove("hidden");
}

textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkButton.click();
    }
  });

checkButton.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    checkIfPalindrome(textInput.value);
  }
});