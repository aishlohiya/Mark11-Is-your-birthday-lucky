const inputBirthDate = document.querySelector("#date-of-birth");
const inputNumber = document.querySelector("#lucky-number");
const checkBirthdayBtn = document.querySelector("#check-birthday");
const outputBox = document.querySelector("#output-result");


function checkBirthdayLuck () {
    const birthDate = inputBirthDate.value;
    const sum = calculateSum(birthDate);
    finalResult(sum, inputNumber.value)
}

function calculateSum(birthDate) {
    var sum = 0;
    birthDate = birthDate.replaceAll("-","");
    for (var i=0; i<birthDate.length; i++) {
        sum = sum + Number(birthDate.charAt(i))
    } return sum;
}

function finalResult(sum, inputNumber) {
    if (sum%inputNumber===0) {
        outputBox.innerHTML =`<p>Your birthday is lucky</p> <img src="https://c.tenor.com/zC4E1yWaJbwAAAAM/happy-screaming-so-happy-for-you.gif" /> `;
    } else {
        outputBox.innerHTML = `<p>Your birthday is not lucky </p> <img src="https://acegif.com/wp-content/uploads/gift-54.gif"/>`;
    }
}

checkBirthdayBtn.addEventListener("click", checkBirthdayLuck)
