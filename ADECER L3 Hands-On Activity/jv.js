function changeText() {
    let messageElement = document.getElementById("message");
    
    if (messageElement.innerText === "Click the button to change this text.") {
        messageElement.innerText = "See what happened? ◉⁠‿⁠◉";
    } else {
        messageElement.innerText = "Click the button to change this text.";
    }
}