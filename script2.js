// Navbar scroll effect
window.addEventListener("scroll", () => {
    document.getElementById("navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// Active nav link
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const errors = document.querySelectorAll(".error");

    errors.forEach(err => err.innerText = "");
    let valid = true;

    if (name.value.trim() === "") {
        errors[0].innerText = "Name is required";
        valid = false;
    }

    if (!email.value.includes("@")) {
        errors[1].innerText = "Valid email required";
        valid = false;
    }

    if (message.value.trim() === "") {
        errors[2].innerText = "Message is required";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        this.reset();
    }
});

// Dark mode
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
});

// Load preference
if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
}

