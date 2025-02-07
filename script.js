const messages = [
    "Are you sure?",
    "Pakkaaaaaaaaa??",
    "itnaaa parshan karta?",
    "Pookie please...",
    "Just think about it!",
    "Aichaaaa krogeee!?",
    "Muskan bbyyy you sure...?",
    "Justt sochooo tooo ek baar...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
