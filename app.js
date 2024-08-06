const oyuncuPuan = document.getElementById("oyuncupuan");
const bilgisayarPuan = document.getElementById("bilgisayarpuan")
const tas = document.getElementById("tas")
const kagit = document.getElementById("kagit")
const makas = document.getElementById("makas")
const oyuncusec = document.getElementById("oyuncusec")
const bilgisec = document.getElementById("bilgisayarsec")
const mesaj = document.getElementById("mesaj")

// burada oyuncu ve bilgisayar puanı sıfırdan başlayacak
let oyuncu = 0;
let bilgisayar = 0

//burada bilgisayarın rastgele sayı seçirip resimdeiştirdik
function bilgisayarSecti() {
    const secim = ["tas", "kagit", "makas"]
    //math.floor sayiyı alta yuvarlar Math.random()*3 = 3 tane rastgele sayı seçecek
    const random = Math.floor(Math.random() * 3)
    //burada bilgisec içindeki src kısmını dinamikbir şekilde  deiştiriyorus
    bilgisec.setAttribute("src", `resim/${secim[random]}.png`)//random 0 olursa çıktımız task olur 1 olursa kagitolur 2 olursa makas olur 
    //fonksionnun çıktısıiçin retorn kulanıyoz 
    return secim[random]
}
// tas resmine tıkladımda oyuncu kısmına taş resmigelecek bilgisayar ise rastgele birini seçecek 
tas.addEventListener("click",()=>{
    oyuncusec.setAttribute("src", `resim/tas.png`)
    let bilrandom = bilgisayarSecti()
    sonuc("tas", bilrandom)
})
//burada kağıtresmine tıkladımda oyuncu kısmının resmi kağıtresmiolacak
kagit.addEventListener("click",()=>{
    oyuncusec.setAttribute("src", `resim/kagit.png`)//burada srcyi kagit resmi ile deiştirdik
    let bilrandom = bilgisayarSecti()//burada bilgisayar rastgele biriniseçti billrandoma atadı
    sonuc("kagit", bilrandom)//burada sonucumuz kagit,tas,makasyada kagit olacak
})

makas.addEventListener("click",()=>{
    oyuncusec.setAttribute("src", `resim/makas.png`)
    let bilrandom = bilgisayarSecti()
    sonuc("kagit", bilrandom)
    console.log(sonuc);
})

//burada karşılaştırma yada sonuca yazdıracaız 

function sonuc(gamer,computer) {
    
    if (gamer+computer === "tasmakas") { //taskısmında tasmakas gelirse kazan çalışır 
        kazan()
    } else if (gamer+computer === "kagittas") { //kagit kısmındda taş gelirse kazan fonksionu çalışır 
        kazan()
    } else if (gamer+computer === "makaskagit") { //makas kısmında kagitgelirse kazan çalişir 
        kazan()
    } else if (gamer===computer) { //oyuncu ve bilgisayar aynı seçim yaparsa berabere calışır 
        berabere()
    } else {                        //diğer tüm durumlarda kaybet fonksionu çalışır 
        kaybet()
    }
    console.log(gamer);
}

//burada kazan fonksionu puan kısmı deişecek 
function kazan() {
    oyuncu = oyuncu+1 //oyuncu puanı 1 eklenecek
    mesaj.innerHTML = "tebrikler kazandın"//mesaja tebrikler kazandınız yazdırılacak 
    oyuncuPuan.innerHTML = oyuncu.toString()//puan kısmına eklenenb puanu yazdıracak
    console.log("çalış");
}

function kaybet() {
    bilgisayar = bilgisayar+1
    mesaj.innerHTML = "bilgisayar kazandı"
    bilgisayarPuan.innerHTML = bilgisayar.toString()
}

function berabere() {
    mesaj.innerHTML = "berabere"
}