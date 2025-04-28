// Ambil data dari localStorage saat awal halaman dibuka
document.addEventListener('DOMContentLoaded', tampilkanPengunjung);

function kirimData() {
  const nama = document.getElementById('nama').value;
  const jk = document.getElementById('jk').value;
  const tujuan = document.getElementById('tujuan').value;

  if (!nama || !jk || !tujuan) {
    alert("Harap lengkapi semua data!");
    return;
  }

  const dataBaru = {
    nama: nama,
    jk: jk,
    tujuan: tujuan
  };

  // Ambil data lama, tambahkan data baru
  let data = localStorage.getItem('data_pengunjung');
  let pengunjung = data ? JSON.parse(data) : [];

  pengunjung.push(dataBaru);

  // Simpan kembali ke localStorage
  localStorage.setItem('data_pengunjung', JSON.stringify(pengunjung));

  // Reset form
  document.getElementById('nama').value = '';
  document.getElementById('jk').value = '';
  document.getElementById('tujuan').value = '';

  tampilkanPengunjung();
}

function tampilkanPengunjung() {
  const list = document.getElementById('list-pengunjung');
  list.innerHTML = '';

  const data = localStorage.getItem('data_pengunjung');
  const pengunjung = data ? JSON.parse(data) : [];

  pengunjung.forEach((item, index) => {
    const jkTeks = item.jk === 'L' ? 'Laki-laki' : 'Perempuan';

    const el = document.createElement('li');
    el.className = 'list-group-item';
    el.innerHTML = `<strong>${item.nama}</strong> (${jkTeks}) - ${item.tujuan}`;
    list.appendChild(el);
  });
}
