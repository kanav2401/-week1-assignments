


const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);

function updateThemeButton(theme) {

    if (!themeToggle) return;

    if (theme === "dark") {
        themeToggle.innerHTML = "☀ Light Mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light theme"
        );
    } else {
        themeToggle.innerHTML = "☾ Dark Mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );
    }
}

updateThemeButton(savedTheme);

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );

        localStorage.setItem("portfolio-theme", newTheme);

        updateThemeButton(newTheme);

    });

}




const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

   
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });

}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();

        formStatus.textContent =
            `Thank you, ${name}! Your message has been received in this demo.`;

        formStatus.style.color = "#22C55E";

        contactForm.reset();
    });
}
