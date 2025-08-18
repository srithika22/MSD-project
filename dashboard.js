document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const logoutBtn = document.getElementById('logoutBtn');

    if (!currentUser) {
        // If no one is logged in, redirect to login page
        window.location.href = 'login.html';
        return;
    }

    // Personalize the page
    const userNameSpan = document.getElementById('userName');
    if (userNameSpan) {
        userNameSpan.textContent = currentUser.firstName || currentUser.name;
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('currentUser');
            alert('You have been logged out.');
            window.location.href = 'index.html';
        });
    }
});
