document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        loadingSpinner.style.display = "block";
        errorMessage.textContent = "";

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulated authentication request
        setTimeout(() => {
            if (username === "admin" && password === "secure123") {
                localStorage.setItem("adminLoggedIn", "true");
                window.location.href = "index.html"; // Redirect to dashboard
            } else {
                errorMessage.textContent = "Invalid username or password!";
            }
            loadingSpinner.style.display = "none";
        }, 2000); // Simulated delay
    });

    // Check if already logged in
    if (localStorage.getItem("adminLoggedIn") === "true") {
        window.location.href = "index.html";
    }
});
