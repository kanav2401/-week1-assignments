
// =========================================
// DARK / LIGHT THEME TOGGLE
// =========================================

const themeToggle = document.getElementById("theme-toggle");

// Load previously saved theme
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

// Apply saved theme
document.documentElement.setAttribute("data-theme", savedTheme);

// Update button text
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

// Initialize button
updateThemeButton(savedTheme);

// Toggle theme on click
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        // Apply new theme
        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );

        // Save preference
        localStorage.setItem("portfolio-theme", newTheme);

        // Update button
        updateThemeButton(newTheme);

    });

}
