// Slideshow Feature
const slides = [
    'photo1.jpg', 
    'photo2.jpg', 
    'photo3.jpg', 
    'photo4.jpg', 
    'photo5.jpg', 
    'photo6.jpg', 
    'photo7.jpg', 
    'photo8.jpg', 
    'photo9.jpg'
];
let slideIndex = 0;

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    document.getElementById("slideImage").src = slides[slideIndex];
}


// Love Notes Feature
const loveReasons = [
    "You make me smile every day.",
    "You understand me better than anyone else.",
    "Your laughter is contagious and brightens my day.",
    "You inspire me to be a better person.",
    "You’re always supportive of my dreams and goals.",
    "You know how to make even the simplest moments feel magical.",
    "You have the kindest heart.",
    "Your hugs make everything feel right.",
    "You make me feel loved and valued.",
    "You’re my best friend and partner in everything.",
    "You’re incredibly patient and understanding.",
    "You accept me just as I am.",
    "You make every day feel special just by being there.",
    "You’re incredibly talented and hardworking.",
    "You bring so much joy and laughter into my life.",
    "You have an amazing sense of humor.",
    "You believe in me, even when I doubt myself.",
    "Your kindness and compassion for others are inspiring.",
    "You always know what to say to make me feel better.",
    "You are my favorite person, and I love everything about you."
];
let reasonIndex = 0;

function showNextReason() {
    document.getElementById("loveReason").innerText = loveReasons[reasonIndex];
    reasonIndex = (reasonIndex + 1) % loveReasons.length; // Loops back to the first reason after finishing all
}

// Quiz Feature
function checkAnswer() {
    const answer = document.getElementById("quizAnswer").value.trim().toLowerCase(); // Trim whitespace and make lowercase
    const feedback = document.getElementById("quizFeedback");

    if (answer === "nexus mall" || answer === "mall") {  // Answers converted to lowercase for consistency
        feedback.innerText = "Correct! You know us so well ❤️";
    } else {
        feedback.innerText = "Oops! Try again!";
    }
}
