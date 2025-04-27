document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'YALDA' && password === '1212') {
        window.location.href = 'welcome.html';
    } else {
        errorMessage.style.display = 'block';
    }
});
