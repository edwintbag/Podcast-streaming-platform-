const darkModeToggle = document.getElementById("darkModeToggle");
        const body = document.body;

        // Load dark mode preference
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
        }

        darkModeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });