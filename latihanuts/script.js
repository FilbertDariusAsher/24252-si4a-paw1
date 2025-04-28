// script.js

// URL API dan nama kunci untuk localStorage
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const STORAGE_KEY = 'data_users';

// Fungsi utama untuk mengambil data pengguna
function getUsers() {
  const dataDariStorage = localStorage.getItem(STORAGE_KEY);

  if (dataDariStorage) {
    // Jika data sudah ada di localStorage, langsung tampilkan
    const users = JSON.parse(dataDariStorage);
    tampilkanUsers(users, true);
  } else {
    // Jika belum ada, ambil dari API
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); // Simpan ke localStorage
        tampilkanUsers(data, false); // Tampilkan data
      })
      .catch(error => {
        console.error('Gagal mengambil data:', error);
      });
  }
}

// Fungsi untuk menampilkan data pengguna ke halaman
function tampilkanUsers(users, dariStorage) {
  const container = document.getElementById('user-list');
  container.innerHTML = ''; // Kosongkan tampilan sebelumnya

  users.forEach(user => {
    container.innerHTML += `
      <div class="col-md-6">
        <div class="user-card">
          <h5 class="text-primary">${user.name}</h5>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
          <p><strong>Alamat:</strong> ${user.address.street}, ${user.address.city}</p>
        </div>
      </div>
    `;
  });

  if (dariStorage) {
    console.log('✅ Data ditampilkan dari localStorage');
  } else {
    console.log('✅ Data diambil dari API dan disimpan ke localStorage');
  }
}

// Fungsi untuk menghapus data dari localStorage
function hapusData() {
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById('user-list').innerHTML = '';
  alert('Data dihapus dari localStorage!');
}
