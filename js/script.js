// Ganti dengan URL Web App Google Apps Script-mu
const GAS_URL = 'https://script.google.com/macros/s/AKfycbwqXqc2Npq0NwNPrVKEYECAIfSpsHvJmg3OH_prrApJfN6ft-rkc2oKoIJlTRLMavbNhQ/exec';

// Login form submit
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  fetch(GAS_URL, {
    method: 'POST',
    body: new URLSearchParams({ action: 'login', username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Login berhasil! Selamat datang, ' + data.name);
      window.location.href = 'dashboard.html';
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
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  fetch(GAS_URL, {
    method: 'POST',
    body: new URLSearchParams({ action: 'register', username, name, email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      alert('Pendaftaran berhasil! Silakan login.');
      window.location.href = 'login.html';
    } else {
      alert(data.message);
    }
  })
  .catch(err => {
    alert('Terjadi kesalahan jaringan.');
    console.error(err);
  });
});
