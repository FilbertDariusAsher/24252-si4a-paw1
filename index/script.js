let data;
let daftarTamu = document.getElementById('daftar_tamu');

tampil();


function simpan(){
    let nama = document.getElementById('nama').value;
    console.log(nama);
    let keperluan = document.getElementById('keperluan').value;
    console.log(keperluan);
    let jk = document.getElementById('jk').value;
    console.log(jk);

    if(localStorage.getItem('ls_bukuTamu') == null){
        data = [];
    }else{
        data = JSON.parse(localStorage.getItem('ls_bukuTamu'));
    }

    data.push({nama_pengunjung: nama,perlu : keperluan,jk : jk});

    localStorage.setItem('ls_bukuTamu',JSON.stringify(data));
    
    daftar_tamu.innerHTML='';
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukuTamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukuTamu'));

        console.log(data.length);
        document.getElementById("total_tamu").innerHTML =
         `Total tamu : ${data.length}`;

         let total_laki=0;
         let total_perempuan=0;

        data.forEach( (item) => {
            if(item.jk == 'L'){
                total_laki++;
            }else if(item.jk =='P'){
                total_perempuan++;
            }
            daftar_tamu.innerHTML += `<li>
                ${item.nama_pengunjung} - ${item.perlu}
            </li>`
        })
        document.getElementById('tamu_laki').innerHTML=`Tamu Laki-laki:${total_laki}`;
        document.getElementById('tamu_perempuan').innerHTML=`Tamu Perempuan:${total_perempuan}`;
}