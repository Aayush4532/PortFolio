// JavaScript typing effect
const nameToType = "Karamjeet Sony"; // The text to display
let index = 0; // Index for the current character

function typeLetter() {
    const nameElement = document.getElementById("animated-name"); // Get the target element

    if (index < nameToType.length) {
        nameElement.innerHTML += nameToType.charAt(index); // Add the next character
        index++;
        setTimeout(typeLetter, 150); // Set typing delay to 150 ms for slower typing
    } else {
        setTimeout(resetTyping, 300); // Set pause after full name to 300 ms
    }
}
// Use DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    typeLetter(); // Start typing effect when the DOM is ready
});

// top header script
function updateDateTime() {
    const now = new Date();
    
    const date = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Update the date and time immediately after loading
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime(); // Set the initial date and time

    // Optionally, update every second or minute
    setInterval(updateDateTime, 60000); // Updates every 60 seconds
});
