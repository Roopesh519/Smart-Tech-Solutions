(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 100,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);


// Typing text ------------------------

document.addEventListener('DOMContentLoaded', function() {
    const lines = [
        'Transforming Visions into Reality',
        'Pioneering Excellence in Every Step'
    ];

    const typingTextElement = document.getElementById('typing-text');
    let lineIndex = 0;
    let isTyping = true;

    function typeLine(line, callback) {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < line.length) {
                typingTextElement.textContent += line[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 2000); // Pause before removing
            }
        }, 100);
    }

    function removeLine(callback) {
        const removingInterval = setInterval(() => {
            if (typingTextElement.textContent.length > 0) {
                typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
            } else {
                clearInterval(removingInterval);
                setTimeout(callback, 500); // Pause before typing next line
            }
        }, 50);
    }

    function startTypingEffect() {
        typeLine(lines[lineIndex], () => {
            removeLine(() => {
                lineIndex = (lineIndex + 1) % lines.length;
                startTypingEffect();
            });
        });
    }

    startTypingEffect();
});

// chatbot js

// A simple chatbot that responds with some predefined answers
function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Jarvis, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
        output = "Why did the chicken go to the seance? To get to the other side.";
    } else {
        output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
    let chatbox = document.querySelector(".chatbox");
    let userMessage = document.createElement("li");
    userMessage.classList.add("chat", "outgoing");
    userMessage.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(userMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
    let chatbox = document.querySelector(".chatbox");
    let botMessage = document.createElement("li");
    botMessage.classList.add("chat", "incoming");
    botMessage.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatbox.appendChild(botMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
    let input = document.querySelector(".chat-input textarea");
    if (input.value.trim()) {
        displayUserMessage(input.value);
        let output = chatbot(input.value);
        setTimeout(function() {
            displayBotMessage(output);
        }, 1000);
        input.value = "";
    }
}

// Add a click event listener to the send button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.querySelector(".chat-input textarea").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});

// Add a click event listener to the chatbot toggler
document.querySelector(".chatbot-toggler").addEventListener("click", function() {
    document.body.classList.toggle("show-chatbot");
});

// Add a click event listener to the chatbot close button
document.querySelector(".chatbot header .close-btn").addEventListener("click", function() {
    document.body.classList.remove("show-chatbot");
});
