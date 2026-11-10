const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    document.addEventListener("click", event => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

const propertySearch = document.getElementById("property-search");
const propertyCards = document.querySelectorAll(".property-card");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("no-results");

let activeCategory = "all";

function filterProperties() {
    const location = document.getElementById("location").value.toLowerCase();
    const propertyType = document.getElementById("property-type").value.toLowerCase();
    const budget = Number(document.getElementById("budget").value) || Infinity;

    let visibleCount = 0;

    propertyCards.forEach(card => {
        const cardLocation = card.dataset.location.toLowerCase();
        const cardType = card.dataset.type.toLowerCase();
        const cardPrice = Number(card.dataset.price);

        const matchesCategory =
            activeCategory === "all" ||
            cardType === activeCategory.toLowerCase();

        const matchesLocation =
            !location || cardLocation === location;

        const matchesType =
            !propertyType || cardType === propertyType;

        const matchesBudget = cardPrice <= budget;

        const shouldShow =
            matchesCategory &&
            matchesLocation &&
            matchesType &&
            matchesBudget;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleCount++;
        }
    });

    if (noResults) {
        noResults.hidden = visibleCount !== 0;
    }
}

if (propertySearch) {
    propertySearch.addEventListener("submit", event => {
        event.preventDefault();
        filterProperties();

        document.getElementById("properties").scrollIntoView({
            behavior: "smooth"
        });
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        activeCategory = button.dataset.filter;

        filterProperties();
    });
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        formStatus.textContent =
            "Thank you! Your enquiry has been received successfully. Our team will contact you soon.";

        formStatus.style.color = "#C9A96E";

        contactForm.reset();
    });
}

document.querySelectorAll(".property-card").forEach(card => {
    card.querySelector(".property-link").addEventListener("click", () => {
        const propertyName = card.querySelector("h3").textContent;
        const interest = document.getElementById("interest");

        if (interest) {
            interest.value = "buy";
        }

        const message = document.getElementById("message");

        if (message) {
            message.value = `I am interested in ${propertyName}. Please share more details.`;
        }
    });
});
