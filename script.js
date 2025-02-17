    function formatList(text) {
    return text.split(/\n|,/).map((item, index) => (index + 1) + ". " + item.trim()).join("%0A");
    }

    function Kirim() {
        const jenis = document.getElementById("jenislaporan").value;
        const waktu = document.getElementById("waktu").value;
        const alamat = document.getElementById("alamatlengkap").value;
        const desa = document.getElementById("desa").value;
        const kecamatan = document.getElementById("kecamatan").value;
        const kronologi = document.getElementById("kronologi").value;
        const ekonomi = document.getElementById("ekonomi").value;
        const rr = document.getElementById("rumahrusakringan").value;
        const rs = document.getElementById("rumahrusaksedang").value;
        const rb = document.getElementById("rumahrusakberat").value;
        const fasum = document.getElementById("saranafasilitasumum").value;
        const lr = document.getElementById("lukaringan").value;
        const lb = document.getElementById("lukaberat").value;
        const md = document.getElementById("meninggal").value;
        const hilang = document.getElementById("hilang").value;
        const kk = document.getElementById("totaljumlahkk").value;
        const jiwa = document.getElementById("totaljumlahjiwa").value;
        const upaya = document.getElementById("upaya").value;
        const jenisbantuan = formatList(document.getElementById("jenisbantuan").value);
        const unsur = formatList(document.getElementById("unsur").value);
        const personil = formatList(document.getElementById("personil").value);

        const url = "https://api.whatsapp.com/send?phone=6282229887184&text=*LAPORAN%20TAGANA%20KABUPATEN%20JEMBER*%0A%0A" +
            "*Kepada%20Yth%20%3B*%0A" +
            "*1.%20KEPALA%20DINAS%20SOSIAL%20KABUPATEN%20JEMBER*%0A" +
            "*2.%20KABID.%20PENANGANAN%20BENCANA%20DINAS%20SOSIAL%20KABUPATEN%20JEMBER*%0A" +
            "*3.%20PUSDALOPS%20TAGANA%20KABUPATEN%20JEMBER*%0A%0A" +
            "*A.%20JENIS%20LAPORAN*%0A" + jenis + "%0A%0A" +
            "*B.%20WAKTU%20%26%20LOKASI*%0A" +
            "Waktu%20Pelaporan%0A"+ waktu +"%0A%0A" +
            "Alamat%0A"+ alamat + "%0A" +
            "Desa/%20Kelurahan%20" + desa + "%0A" +
            "Kecamatan%20" + kecamatan + "%0A%0A" +
            "*C.%20KRONOLOGI*%0A" + kronologi + "%0A%0A" +
            "*D.%20DAMPAK*%0A" +
            "Ekonomi%0A" + ekonomi +"%0A%0A" +
            "Fasilitas%20Umum%0A" + fasum + "%0A%0A" +
            "Rumah%0A1.%20Rusak%20Ringan%20%3A%20" + rr + "%0A" +
            "2.%20Rusak%20Sedang%20%3A%20" + rs + "%0A" +
            "3.%20Rusak%20Berat%20%3A%20" + rb + "%0A%0A" +
            "Korban%20Jiwa%0A1.%20Luka%20Ringan%20%3A%20" + lr + "%0A" +
            "2.%20Luka%20Berat%20%3A%20" + lb + "%0A" +
            "3.%20Meninggal%20%3A%20" + md + "%0A" +
            "4.%20Hilang%20%3A%20" + hilang + "%0A%0A" +
            "Jumlah%20KK%20%3A%20" + kk + "%0A" +
            "Jumlah%20Jiwa%20%3A%20" + jiwa + "%0A%0A" +
            "*E.%20UPAYA%20YANG%20DILAKUKAN*%0A" + upaya + "%0A%0A" + 
            "Jenis%20Bantuan%0A"+ jenisbantuan +"%0A%0A" +
            "*F.%20UNSUR%20YANG%20TERLIBAT*%0A" + unsur + "%0A%0A" +
            "*G.%20PERSONIL*%0A" + personil + "%0A%0A"+
            "*H.%20DOKUMENTASI*%0ATerlampir%0A%0A*J.%20PENUTUP*%0ADemikian%20laporan%20kami.%0A%0A*PUSDALOPS%20TAGANA%20KABUPATEN%20JEMBER*%0AJL.%20Lumba-lumba%20No.01%2C%20Sempusari%2C%20Kaliwates%2C%20Jember%0A%E2%98%8E%C2%A00822-2988-7184";


        window.open(url, '_blank');
    }
