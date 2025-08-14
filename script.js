document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  if (signupForm) {
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    sendOtpBtn.addEventListener('click', () => {
      const phone = document.getElementById('signupPhone').value;
      if (phone) {
        // In a real application, you would send a request to your server to send an OTP.
        // For this example, we'll just generate a random one and show it in an alert.
        const otp = Math.floor(1000 + Math.random() * 9000);
        alert(`Your OTP is: ${otp}`);
        // You might want to store this OTP somewhere to verify it later, e.g., in session storage.
        sessionStorage.setItem('otp', otp);
      } else {
        alert('Please enter your phone number.');
      }
    });

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const phone = document.getElementById('signupPhone').value;
      const otp = document.getElementById('signupOtp').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
      const storedOtp = sessionStorage.getItem('otp');

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      if (otp === storedOtp) {
        // In a real application, you would send the user's details to your server.
        alert('Signup successful!');
        // Redirect to login page
        window.location.href = 'login.html';
      } else {
        alert('Invalid OTP.');
      }
    });
  }

  if (loginForm) {
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    sendOtpBtn.addEventListener('click', () => {
        const phone = document.getElementById('loginPhone').value;
        if (phone) {
            // In a real application, you would send a request to your server to send an OTP.
            // For this example, we'll just generate a random one and show it in an alert.
            const otp = Math.floor(1000 + Math.random() * 9000);
            alert(`Your OTP is: ${otp}`);
            // You might want to store this OTP somewhere to verify it later, e.g., in session storage.
            sessionStorage.setItem('otp', otp);
        } else {
            alert('Please enter your phone number.');
        }
    });


    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('loginPhone').value;
      const password = document.getElementById('loginPassword').value;
      const otp = document.getElementById('loginOtp').value;
      const storedOtp = sessionStorage.getItem('otp');

      if (otp === storedOtp) {
        // In a real application, you would verify the user's credentials on your server.
        alert('Login successful!');
        // Redirect to a dashboard or home page
        // window.location.href = 'dashboard.html';
      } else {
        alert('Invalid OTP.');
      }
    });
  }
});
