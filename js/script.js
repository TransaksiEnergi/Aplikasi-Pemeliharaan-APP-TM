const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

showRegister.addEventListener('click', e => {
  e.preventDefault();
  loginBox.classList.add('hidden');
  registerBox.classList.remove('hidden');
});

showLogin.addEventListener('click', e => {
  e.preventDefault();
  registerBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
});

// Ganti dengan URL Web App Google Apps Script-mu
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxjZBgvAQl39C5dDv4VrX4pak-eF4zcMH4VMlLizeDxuWsZ-MAGcae3k91gMFN-R-NLWQ/exec';

// Login form submit
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  fetch(GAS_URL, {
    method: 'POST',
    body: new URLSearchParams({ action: 'login', username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Login berhasil! Selamat datang, ' + data.name);
      window.location.href = 'dashboard.html'; // contoh redirect
    } else {
      alert(data.message);
    }
  })
  .catch(err => {
    alert('Terjadi kesalahan jaringan.');
    console.error(err);
  });
});

// Register form submit
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('regUsername').value.trim();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();

  fetch(GAS_URL, {
    method: 'POST',
    body: new URLSearchParams({ action: 'register', username, name, email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Pendaftaran berhasil! Silakan login.');
      registerBox.classList.add('hidden');
      loginBox.classList.remove('hidden');
    } else {
      alert(data.message);
    }
  })
  .catch(err => {
    alert('Terjadi kesalahan jaringan.');
    console.error(err);
  });
});
