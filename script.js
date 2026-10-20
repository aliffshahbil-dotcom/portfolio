
/* ===== 1. Mobile navigation toggle ===== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


/* ===== 2. Dark mode / light mode ===== */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
});


/* ===== 3. Project filter ===== */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {
            const matchesCategory =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matchesCategory;
        });
    });
});


/* ===== 4. Typing text animation ===== */
const typingText = document.getElementById("typingText");

const learningTopics = [
    "HTML & CSS",
    "C++ Programming",
    "Python",
    "Computer Networking"
];

let topicIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {
    const currentTopic = learningTopics[topicIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentTopic.substring(0, characterIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentTopic.length) {
        deleting = true;
        delay = 1200;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        topicIndex = (topicIndex + 1) % learningTopics.length;
        delay = 350;
    }

    setTimeout(typeAnimation, delay);
}

typeAnimation();


/* ===== 5. Contact form validation ===== */
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formFeedback.textContent =
            "Please complete all fields before continuing.";
        formFeedback.style.color = "#DC2626";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formFeedback.textContent =
            "Please enter a valid email address.";
        formFeedback.style.color = "#DC2626";
        return;
    }

    formFeedback.textContent =
        "Input validated successfully. This demo does not send email.";
    formFeedback.style.color = "#15803D";
});


/* ===== 6. Back-to-top button ===== */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ===== Automatic current year ===== */
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
