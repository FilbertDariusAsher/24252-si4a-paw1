fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    console.log(data.Infogempa.gempa.Wilayah);
    console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById("gempabumi").innerHTML = `
    <div class="col-lg-6 col-sm-12">
        <h1>${data.Infogempa.gempa.Wilayah}</h1>
        <p>magnitude :${data.Infogempa.gempa.Coordinates}</p>
        <p>waktu :${data.Infogempa.gempa.DateTime}</p>
        <p>jam :${data.Infogempa.gempa.Jam}</p>
        <p>kedalaman :${data.Infogempa.gempa.Kedalaman}</p>
        <p>potensi :${data.Infogempa.gempa.Potensi}</p>
    </div>

    <div class="col-lg-6 col-sm-12">
        <image src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}">
    </div>`
    
})
fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.Infogempa.gempa.forEach((list) => {
        console.log(list);
        document.getElementById("gempabumi15").innerHTML +=`
        <div class = "col-lg-4 p-3">
        <div class = "card p3"  >
            <h2>Wilayah :${list.Wilayah}</h2>
            <p>Waktu :${list.Tanggal} ${list.jam}</p>
            <p>Magnitude :${list.Magnitude}</p>
            <p>Kedalaman :${list.Kedalaman}</p>
        </div>
        </div>
        `
    })
})