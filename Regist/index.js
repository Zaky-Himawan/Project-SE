// Set tab awal yang aktif
document.addEventListener('DOMContentLoaded', function() {
    switchTab(adminTab, customerTab, adminForm, customerForm);
});

// Mendapatkan elemen tab dan form
const customerTab = document.getElementById('customer-tab');
const adminTab = document.getElementById('admin-tab');
const customerForm = document.getElementById('customer-form');
const adminForm = document.getElementById('admin-form');
const messageDiv = document.getElementById('message');

// Fungsi untuk beralih tab
function switchTab(activeTab, inactiveTab, activeForm, inactiveForm) {
    activeTab.classList.remove('inactive');
    activeTab.classList.add('active');
    inactiveTab.classList.remove('active');
    inactiveTab.classList.add('inactive');
    
    activeForm.classList.remove('hidden');
    inactiveForm.classList.add('hidden');
}

// Event listener untuk tab customer
customerTab.addEventListener('click', () => {
    switchTab(customerTab, adminTab, customerForm, adminForm);
});

// Event listener untuk tab administrator
adminTab.addEventListener('click', () => {
    switchTab(adminTab, customerTab, adminForm, customerForm);
});

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

// Menangani submit untuk kedua form
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman
    messageDiv.textContent = 'Login berhasil! (simulasi)';
    setTimeout(() => {
        messageDiv.textContent = '';
        event.target.reset();
    }, 2500);
}

customerForm.addEventListener('submit', handleFormSubmit);
adminForm.addEventListener('submit', handleFormSubmit);
