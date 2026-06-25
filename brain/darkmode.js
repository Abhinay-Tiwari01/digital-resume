const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference on page load
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.classList.add('dark-mode-active');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.classList.add('dark-mode-active');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.classList.remove('dark-mode-active');
        localStorage.setItem('darkMode', 'disabled');
    }
});
