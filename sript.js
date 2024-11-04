document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic form validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically make an API call to your backend
        console.log('Login attempt with:', { email, password });
        
        // Simulating successful login
        alert('Login successful!');
    });
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Google Sign-in handler
    const googleBtn = document.querySelector('.google-btn');
    googleBtn.addEventListener('click', function() {
        // Here you would implement Google OAuth
        console.log('Google sign-in clicked');
    });
});