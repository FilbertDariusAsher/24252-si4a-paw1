// Mengambil data jadwal yang disimpan dari localStorage
let jadwalKuliah = JSON.parse(localStorage.getItem('jadwalKuliah')) || [];

// Fungsi untuk menampilkan jadwal
function tampilkanJadwal() {
    const jadwalList = document.getElementById('jadwalList');
    jadwalList.innerHTML = ''; // Mengosongkan list sebelum diisi ulang

    if (jadwalKuliah.length === 0) {
        jadwalList.innerHTML = '<p class="text-center">Tidak ada jadwal kuliah yang disimpan.</p>';
        return;
    }

    jadwalKuliah.forEach((jadwal, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${jadwal.mataKuliah}</h5>
                <p class="card-text">Hari: ${jadwal.hari}</p>
                <p class="card-text">Jam: ${jadwal.jam}</p>
                <button class="btn btn-danger" onclick="hapusJadwal(${index})">Hapus</button>
            </div>
        `;
        jadwalList.appendChild(card);
    });
}

// Fungsi untuk menyimpan jadwal ke localStorage dan menampilkan di console
document.getElementById('jadwalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mataKuliah = document.getElementById('mataKuliah').value;
    const hari = document.getElementById('hari').value;
    const jam = document.getElementById('jam').value;

    // Menambahkan jadwal baru ke array jadwalKuliah
    jadwalKuliah.push({ mataKuliah, hari, jam });

    // Menyimpan array jadwalKuliah ke localStorage
    localStorage.setItem('jadwalKuliah', JSON.stringify(jadwalKuliah));

    // Menampilkan jadwal yang baru disimpan di console
    console.log('Jadwal kuliah disimpan:');
    console.log(jadwalKuliah);

    // Reset form dan tampilkan jadwal terbaru
    document.getElementById('jadwalForm').reset();
    tampilkanJadwal();
});

// Fungsi untuk menghapus jadwal berdasarkan index
function hapusJadwal(index) {
    jadwalKuliah.splice(index, 1);
    localStorage.setItem('jadwalKuliah', JSON.stringify(jadwalKuliah));
    tampilkanJadwal();
}

// Menampilkan jadwal saat halaman pertama kali dibuka
tampilkanJadwal();
