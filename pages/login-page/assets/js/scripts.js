document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('signup') === 'success') {
        alert("Sign up successful! Please login with your credentials.");
    }

    const languageButtons = document.querySelectorAll(".language-toggle");
    
    languageButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.toggle("hidden");
            }
        });
    });

    document.addEventListener("click", function (event) {
        languageButtons.forEach(button => {
            const dropdownMenu = button.nextElementSibling;
            if (dropdownMenu && !button.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add("hidden");
            }
        });
    });
});

function togglePassword() {
    var passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function validateForm(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    
    // If validation passes, redirect to home page
    window.location.href = "../home-page/index.html";
    return false;
}

