const API_POST = 'https://jsonplaceholder.typicode.com/posts';
const KEY_POST = 'data_artikel';

function ambilArtikel() {
  const dataLocal = localStorage.getItem(KEY_POST);

  if (dataLocal) {
    const data = JSON.parse(dataLocal);
    tampilkanArtikel(data, true);
  } else {
    fetch(API_POST)
      .then(res => res.json())
      .then(data => {
        const artikelTerbatas = data.slice(0, 10); // hanya 10 artikel pertama
        localStorage.setItem(KEY_POST, JSON.stringify(artikelTerbatas));
        tampilkanArtikel(artikelTerbatas, false);
      })
      .catch(err => console.error('Gagal fetch:', err));
  }
}

function tampilkanArtikel(data, dariLocal) {
  const container = document.getElementById('list-artikel');
  container.innerHTML = '';

  data.forEach(artikel => {
    container.innerHTML += `
      <div class="col-md-6">
        <div class="card-article">
          <h5>${artikel.title}</h5>
          <p>${artikel.body}</p>
        </div>
      </div>
    `;
  });

  console.log(`Menampilkan ${data.length} artikel dari ${dariLocal ? 'localStorage' : 'API'}`);
}

function hapusArtikel() {
  localStorage.removeItem(KEY_POST);
  document.getElementById('list-artikel').innerHTML = '';
  alert('Data artikel telah dihapus dari localStorage.');
}
