        // Fungsi untuk toggle password visibility
        function togglePassword(inputId) {
            const passwordInput = document.getElementById(inputId);
            const icon = passwordInput.nextElementSibling.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        }
        
        const signupForm = document.getElementById('signup-form');
        const messageDiv = document.getElementById('message');

        // Menangani submit untuk form
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah reload halaman
            messageDiv.textContent = 'Registrasi berhasil! (simulasi)';
            setTimeout(() => {
                messageDiv.textContent = '';
                event.target.reset();
            }, 2500);
        });
