function checkEvenOdd() {
    let input = document.getElementById("numberInput").value;
    let resultElement = document.getElementById("result");
    let number = parseInt(input);

    if (input === "") {
        resultElement.innerText = "";
        return;
    }

    if (isNaN(number)) {
        resultElement.innerText = "Invalid Input.";
    } else if (number % 2 === 0) {
        resultElement.innerText = "even number";
    } else {
        resultElement.innerText = "odd number";
    }
}

console.log("Numbers from 1 to 10 ◉⁠‿⁠◉");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}