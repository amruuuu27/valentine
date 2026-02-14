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
    question.innerHTML = "I knew you couldn't resist! 😘💗 \n  Happy Valentines Day to my favorite Nivuu. I dont say it enough, but Im so grateful for how you handle me and how much you support what I do. You make me want to be a better version of myself without ever making me feel like Im not enough exactly as I am. Youre incredible, and Im lucky I get to be the one by your side.;
    buttons.style.display = 'none';

    // 1. Create a new Image object
const img = new Image();

// 2. Set the desired width and height (in pixels)
img.width = 200; // sets the width attribute to 300px
img.height = 300; // sets the height attribute to 200px

// 3. Set the image source. It is best to do this *after* setting the onload handler.
img.src = 'Amruth nivu.jpeg'; 

// 4. (Optional) Add an onload event handler to run code after the image is fully loaded
img.onload = function() {
    console.log("Image loaded with set dimensions: " + img.width + "x" + img.height);
};

// 5. Append the image element to the desired location in the DOM (e.g., the body or a specific div)
document.body.appendChild(img);


    // Change the GIF to a happy one
    gif.src = "https://media.tenor.com/IdO7A6O2IzUAAAAM/love-you.gif";

}







