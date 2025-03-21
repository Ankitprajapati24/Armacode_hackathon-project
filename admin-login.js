document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation (this should be replaced with backend validation)
    const validEmail = "admin@iiserelection.com"; // Example email
    const validPassword = "admin123"; // Example password

    if (email === validEmail && password === validPassword) {
        // If credentials match, redirect to the dashboard or next page
        window.location.href = "admin-dashboard.html"; // Change this to the correct URL for the dashboard
    } else {
        // Show error message
        document.getElementById("error-message").textContent = "Invalid email or password!";
    }
});
