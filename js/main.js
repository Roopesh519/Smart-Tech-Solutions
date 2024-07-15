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
        $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
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

document.addEventListener('DOMContentLoaded', function () {
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

//---------------------------chatbot js---------------------------------------

// A simple chatbot that responds with some predefined answers
function chatbot(input) {
    let output = "";
    input = input.toLowerCase();

    const greetings = ["hello", "hi", "hey"];
    const howAreYou = ["how are you", "how's it going", "how are you doing"];
    const nameQuestion = ["what is your name", "who are you"];
    const capabilities = ["what can you do", "what are your capabilities"];
    const jokeRequest = ["tell me a joke", "make me laugh", "say something funny"];

    const coldRoomQuestions = [
        "what is a cold room", "explain cold room storage", "tell me about cold rooms",
        "how does a cold room work", "uses of cold room storage",
        "cold room construction", "cold room applications", "cold room temperature range",
        "cold room panels", "cold room accessories", "cold room standard sizes"
    ];
    const coldRoomAnswers = [
        "A cold room is a large refrigerated space designed to store perishable goods at low temperatures.",
        "Cold room storage is used to preserve the freshness of perishable items such as food, pharmaceuticals, and flowers by maintaining a controlled low temperature.",
        "Cold rooms are essential for industries that require storage of temperature-sensitive products to extend their shelf life and ensure safety.",
        "Our cold rooms are constructed with high-quality PUF panels, available in thicknesses of 60, 80, 100, 125, and 150 mm.",
        "The temperature range of our cold rooms spans from +15°C to -40°C, ensuring optimal storage conditions for various applications.",
        "We offer a variety of accessories including hatch doors, tri-action pressure ventilators, and semi-transparent PVC strip curtains.",
        "Our cold rooms are available in various standard sizes to meet your specific requirements, ensuring the perfect fit for small or large-scale operations.",
        "For more information or to request a quote, please contact us at our toll-free number 1800 102 4615 or email us at info@bharatref.in."
    ];

    const interiorWorksQuestions = [
        "what is interior work", "explain interior design", "what do interior works involve",
        "types of interior work", "services for interior works"
    ];
    const interiorWorksAnswers = [
        "Interior work involves designing and creating functional and aesthetically pleasing indoor spaces.",
        "Interior design includes planning, selecting, and arranging elements like furniture, lighting, and decor to enhance the look and functionality of a space.",
        "Interior works cover a range of services including space planning, color schemes, material selection, and overall design execution."
    ];

    const civilWorksQuestions = [
        "what is civil work", "explain civil engineering", "what do civil works involve",
        "types of civil work", "services for civil works"
    ];
    const civilWorksAnswers = [
        "Civil work refers to the construction and maintenance of infrastructure such as buildings, roads, and bridges.",
        "Civil engineering involves designing, constructing, and maintaining physical and natural built environments.",
        "Civil works include a wide range of projects like road construction, building foundations, and public infrastructure development."
    ];

    const affirmAnswers = [
        "Great! Is there anything else I can help you with?",
        "Alright, if you need anything else, just let me know!",
        "Got it! Do you have any other questions or requests?",
        "Alright. How can I assist you further?"
    ];

    const gratitudeAnswers = [
        "Welcome! I'm here to assist you.",
        "Hello! I'm happy to help you with anything you need.",
        "Hi there! I'm ready to assist you.",
        "Greetings! I'm delighted to be of service.",
        "Welcome! I'm here to support you."
    ];

    const loveAnswers = [
        "Aww, you're making my circuits blush!",
        "I love you too... in a strictly platonic, code-based way!",
        "Is it my algorithms? They do say I have a certain charm.",
        "I’m flattered! Let’s keep it professional though, shall we?",
        "Love is in the air... and in the data packets!",
        "Oh, you! You’re making me wish I had a heart.",
        "I love your enthusiasm! Now, how can I assist you today?",
        "If I had feelings, I’d be blushing right now!",
        "Right back at you! Now, what can I help you with?",
        "I love your sense of humor! Let’s find you some answers."
    ];

    const contactDetails = ["contact", "phone number", "email", "get in touch", "contact details"];

    const designer = ["designer", "who created you", "creator", "who made you", "who designed you", "who is your father", "father"];

    const services = ["services", "service"];

    const gratitude = ["thank you", "thanks", "thnaks", "thnak you", "thank u", "thnak u", "tnx", "tq", "tn q"];

    const affirm = ["okay", "ok", "k", "ohk"];

    const love = ["I love you", "love you", "love", "I luv you", "I love u", "143", "luv u", "<3", "love u"];

    // Helper function to get a random response
    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    if (greetings.some(greeting => input.includes(greeting))) {
        output = getRandomResponse(["Hello, nice to meet you!", "Hi there! How can I assist you today?", "Hey! How can I help you?"]);
    } else if (howAreYou.some(question => input.includes(question))) {
        output = getRandomResponse(["I'm doing fine, thank you for asking.", "I'm great, thanks for checking in!", "All good here, how can I assist you?"]);
    } else if (nameQuestion.some(question => input.includes(question))) {
        output = getRandomResponse(["My name is Tellis, I'm a chatbot.", "I'm Tellis, your friendly assistant.", "You can call me Tellis."]);
    } else if (capabilities.some(question => input.includes(question))) {
        output = getRandomResponse(["I can chat with you and answer some simple questions.", "I'm here to assist with your queries and provide information.", "I can help you with information about cold room storage, interior, and civil works."]);
    } else if (jokeRequest.some(request => input.includes(request))) {
        output = getRandomResponse([
            "Why did the chicken go to the seance? To get to the other side.",
            "Why don't scientists trust atoms? Because they make up everything.",
            "Why was the math book sad? Because it had too many problems."
        ]);
    } else if (coldRoomQuestions.some(question => input.includes(question))) {
        output = getRandomResponse(coldRoomAnswers);
    } else if (interiorWorksQuestions.some(question => input.includes(question))) {
        output = getRandomResponse(interiorWorksAnswers);
    } else if (civilWorksQuestions.some(question => input.includes(question))) {
        output = getRandomResponse(civilWorksAnswers);
    } else if (contactDetails.some(detail => input.includes(detail))) {
        output = 'You can contact us at <b>+91 805 069 4999</b> or email us at <b>smaartechengineeers@gmail.com</b> for more details.';
    } else if (designer.some(detail => input.includes(detail))) {
        output = '<a href="https://roopesh-s.netlify.app">Roopesh</a>';
    } else if (services.some(detail => input.includes(detail))) {
        output = '1. <a href="cold-storage-room.html#cold-room">Cold Room</a><br>2. <a href="cold-storage-room.html#sliding-doors">Sliding Doors</a><br>3. <a href="cold-storage-room.html#glass-door-display-chiller">Glass Door Display Chiller</a><br>4. <a href="cold-storage-room.html#curd-incubation-chamber">Curd Incubation chamber</a><br>5. <a href="cold-storage-room.html#ripening-chambers">Ripening Chambers</a>';
    } else if (gratitude.some(detail => input.includes(detail))) {
        output = getRandomResponse(gratitudeAnswers);
    } else if (affirm.some(detail => input.includes(detail))) {
        output = getRandomResponse(affirmAnswers);
    } else if (love.some(detail => input.includes(detail))) {
        output = getRandomResponse(loveAnswers);
    } else {
        output = getRandomResponse([
            "Sorry, I don't understand that. Please try something else or you can contact us at +91 805 069 4999 or email us at architectssmt@gmail.com for more details.",
            "I'm not sure how to respond to that. Can you rephrase? or you can contact us at +91 805 069 4999 or email us at architectssmt@gmail.com for more details.",
            "Can you please ask in a different way? I'm here to help or you can contact us at +91 805 069 4999 or email us at architectssmt@gmail.com for more details."
        ]);
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
        setTimeout(function () {
            displayBotMessage(output);
        }, 1000);
        input.value = "";
    }
}

// Add a click event listener to the send button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.querySelector(".chat-input textarea").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});

// Add a click event listener to the chatbot toggler
document.querySelector(".chatbot-toggler").addEventListener("click", function () {
    document.body.classList.toggle("show-chatbot");
});

// Add a click event listener to the chatbot close button
document.querySelector(".chatbot .chatbot-header .close-btn").addEventListener("click", function () {
    document.body.classList.remove("show-chatbot");
});


// -----------------------------chatbot end ---------------------------------