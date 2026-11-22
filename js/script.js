const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});
// ===== QUICK SAFETY QUIZ =====

const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quizFeedback");

quizOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        // Lock the quiz after answering once
        quizOptions.forEach(function (btn) {
            btn.disabled = true;
        });

        const isCorrect = option.getAttribute("data-correct") === "true";

        if (isCorrect) {
            option.classList.add("correct");
            quizFeedback.textContent = "✅ Correct! Give way to traffic already in the roundabout.";
        } else {
            option.classList.add("incorrect");
            quizFeedback.textContent = "❌ Not quite. You should give way to traffic already circulating.";

            // Also highlight the correct answer
            quizOptions.forEach(function (btn) {
                if (btn.getAttribute("data-correct") === "true") {
                    btn.classList.add("correct");
                }
            });
        }

    });

});
// ===== CONTACT FORM =====

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault(); // stop the page from reloading

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formFeedback.style.color = "#a33333";
            formFeedback.textContent = "Please fill in all fields.";
            return;
        }

        // No backend yet — this just simulates success
        formFeedback.style.color = "#1c6b3f";
        formFeedback.textContent = "✅ Thank you, " + name + "! Your message has been received.";

        contactForm.reset();

    });

}
// ===== FOOTER YEAR =====

const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


// ===== SCROLL TO TOP BUTTON =====

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}