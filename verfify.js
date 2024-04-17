// Check if the token is stored in localStorage
const token = localStorage.getItem('accessToken');

// Select the My Tickets link
const myTicketsLink = document.getElementById('myTicketsLink');

// If the token is stored, show the My Tickets link
if (token) {
    myTicketsLink.classList.remove('d-none');
} else {
    // If the token is not stored, hide the My Tickets link
    myTicketsLink.classList.add('d-none');
}
