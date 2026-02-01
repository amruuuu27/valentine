function moveButton() {
    const btn = document.getElementById('noBtn');
    
    // Change positioning to fixed so it can fly anywhere on the screen
    btn.style.position = 'fixed';

    // Calculate random spots
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function celebrate() {
    const question = document.getElementById('question');
    const buttons = document.querySelector('.buttons');
    const gif = document.getElementById('mainGif');

    // Update the UI
    question.innerHTML = "I knew you couldnt resist! 😘💗";
    buttons.style.display = 'none';

    // Change the GIF to a happy one
    gif.src = "https://media.tenor.com/IdO7A6O2IzUAAAAM/love-you.gif";

}
