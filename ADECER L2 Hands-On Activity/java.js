function addNumbers(a, b) {
    return a + b;
}

function calculateSum() {
    let num1 = parseFloat(prompt("Enter First Number:"));
    let num2 = parseFloat(prompt("Enter Second Number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = addNumbers(num1, num2);
        alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
        console.log("Sum:", sum);
    } else {
        alert("Invalid Input. Please enter numeric values.");
    }
}