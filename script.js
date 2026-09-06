document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("checkForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Menahan agar halaman tidak mereload

            let note = document.getElementById("inputData").value.toLowerCase().trim();
            let elemenHasil = document.getElementById("pesanHasil");

            if (note === "fira") {
                elemenHasil.innerText = "Kau tu sering2 la minta tolong, yo meski aku dkbiso bantu banyak sih. tpi klo emg butuh bantuan jangan dk enakan. kau kutepok";
            } else if (note === "liza") {
                elemenHasil.innerText = "love you za, my biggest supporter, selalu tulus dan selalu berusaha buat ngelindungi aku dari hal hal yang kadang dk aku sadarin kalo itu dk baek";
            } else if (note === "bela") {
                elemenHasil.innerText = "selalu berusaha bantu disaat diri sendiri butuh bantuan. makasih udah jadi yang paling tulus tpi kalau bisa tolong lebih menghargai diri sendiri yahh!";
            } else if (note === "febri") {
                elemenHasil.innerText = "cuy bokem aka bocil kematian. kadang polos kadang dk enakan tpi selalu berusaha buat bantu. makasih ye karna udah kawanin aku waktu aku putus kemarinn";
             } else if (note === "bunga") {
                elemenHasil.innerText = "kito baru dekat dan ternyata u orang nya asiq betol yach. paling mudo tpi untungla dk ribet aowkowk (gengsi ah mau blg makaseh)";
            } else {
                elemenHasil.innerText = "lu sape mpruyy";
            }
        });
    }
});