document.addEventListener('DOMContentLoaded', () => {
    const participantSignupForm = document.getElementById('participantSignupForm');
    const organizerSignupForm = document.getElementById('organizerSignupForm');
    const loginForm = document.getElementById('loginForm');

    // Initialize users array from local storage, or create an empty one
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // --- Participant Signup ---
    if (participantSignupForm) {
        participantSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = e.target.querySelector('input[type="email"]');
            const passwordInput = e.target.querySelector('input[type="password"]');
            const firstNameInput = e.target.querySelector('input[type="text"]');
            const phoneInput = e.target.querySelector('input[type="tel"]');

            const email = emailInput.value;
            const password = passwordInput.value;

            // Check if user already exists
            if (users.find(user => user.email === email)) {
                alert('User with this email already exists.');
                return;
            }

            const newUser = {
                firstName: firstNameInput.value,
                email: email,
                phone: phoneInput.value,
                password: password, // In a real app, hash this password
                type: 'participant'
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Signup successful! Please log in.');
            window.location.href = 'login.html';
        });
    }

    // --- Organizer Signup ---
    if (organizerSignupForm) {
        organizerSignupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = e.target.querySelector('input[type="email"]');
            const passwordInput = e.target.querySelector('input[type="password"]');
            const nameInput = e.target.querySelector('input[type="text"]');
            const phoneInput = e.target.querySelector('input[type="tel"]');
            
            const email = emailInput.value;
            const password = passwordInput.value;

            // Check if user already exists
            if (users.find(user => user.email === email)) {
                alert('User with this email already exists.');
                return;
            }

            const newUser = {
                name: nameInput.value,
                email: email,
                phone: phoneInput.value,
                password: password, // In a real app, hash this password
                type: 'organizer'
            };

            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Signup successful! Please log in.');
            window.location.href = 'login.html';
        });
    }

    // --- Login ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Store current user info in session storage for the session
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                alert('Login successful!');

                // Redirect based on user type
                if (user.type === 'organizer') {
                    window.location.href = 'organizer-dashboard.html';
                } else {
                    window.location.href = 'participant-dashboard.html';
                }
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});

