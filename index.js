function profil() {
    var profilSaya = {
        nama: "Muhamar",
        belajar: "Pemrograman",
        jurusan: "Full Stack Web Developer",
        batch: 5
    }
    for (let x in profilSaya) {
        console.log(profilSaya[x])
    }
}

profil()