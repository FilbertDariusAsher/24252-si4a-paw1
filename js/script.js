document.getElementsByTagName('body')[0].style.backgroundColor ='cyan';

// variabel
let nama = "Bitbet";
let umur = 20;;
let statusMahasiswa = true;
document.getElementById('nama').innerHTML = "Nama Saya :" + nama;
document.getElementById('umur').innerHTML = `Umur : ${umur}`;

let mahasiswa = [
    'mas eben', 'mas dapin', 'mas Rafa', 'mas Epan'
];
mahasiswa.forEach((mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>
    ${mhs}</li>`
})

let nilai = [
    {nama : "mas eben", nilai: 100},
    {nama : "mas dapin", nilai: 100},
    {nama : "mas Rafa", nilai: 10},
    {nama : "mas Epan", nilai: 10}
];
nilai.forEach((data) => {
    document.getElementById('nilai').innerHTML += `<tr>
        <td>${data.nama}</td>
        <td>${data.nilai}</td>
    </tr>`
});

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => {console.log(data.quotes)
    data.quotes.forEach((q) => {document.getElementById('quotes').innerHTML += 
        `<li>${q.quote} - ${q.author}</li>`})
});

