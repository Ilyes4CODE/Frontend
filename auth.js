// Function to check if user is authenticated
function isAuthenticated() {
    // Check if access token is stored
    const accessToken = localStorage.getItem("accessToken");
    return accessToken !== null;
}

// Function to redirect to login page
function redirectToLogin() {
    window.location.href = "login.html";
}

// Check authentication on page load
document.addEventListener("DOMContentLoaded", function() {
    if (!isAuthenticated()) {
        redirectToLogin();
    }
});
