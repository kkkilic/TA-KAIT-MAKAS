const oyuncuPuan = document.getElementById("oyuncupuan")
const bilgisayarPuan = document.getElementById("bilgisayarpuan")
const tas = document.getElementById("tas")
const kagit = document.getElementById("kagit")
const makas = document.getElementById("makas")
const oyuncusec = document.getElementById("oyuncusec")
const bilgisec = document.getElementById("bilgisec")
const mesaj = document.getElementById("mesaj")

//burada oyuncu ve bilgisayar puanları 0 dan başlayacak
let oyuncu=0;
let bilgisayar=0;

// burada bilgisayara rasgele sayı seçtirip resim değiştirdik
function bilgisayarSecti (){
    const secim = ["tas","kagit","makas"]
    // Math.floor sayıyı alta yuvarlar Math.random()*3 = 3 tane rasgele sayı seçecek
    const random = Math.floor(Math.random()*3)
    //burada bilgisec içindeki src kısmını dinamik bir şekilde değiştiriyoruz
    bilgisec.setAttribute("src", `resim/${secim[random]}.png`)//random 0 olursa çıktımız tas olur, 1 olursa kagit olur 2 olursa makas olur
    //fonksiyonun çıktısı için return kullanırız
    return secim[random]
}

tas.addEventListener("click",()=>{
    oyuncusec.setAttribute("src",`resim/tas.png`)
    let bilrandom = bilgisayarSecti()
    sonuc("tas",bilrandom)//taş ve bilgisayarın seçtiği
})

// burada kağıt resmine tıkladığımda oyuncu kısmının resmi kağıt resmi olaca
kagit.addEventListener("click",()=>{
    oyuncusec.setAttribute("src",`resim/kagit.png`)//burada src yi kağıt resmi ile değiştirdik
    let bilrandom = bilgisayarSecti()// burada bilgisayar rasgele birini seçti bilrandoma atadı
    sonuc("kagit",bilrandom) // burada sonucumuz kagittas, kagitmakas yada kagitkagit olacak
})


makas.addEventListener("click",()=>{
    oyuncusec.setAttribute("src",`resim/makas.png`)
    let bilrandom = bilgisayarSecti()
    sonuc("makas",bilrandom)// ve bilgisayarın seçtiği


})

//burada karşılaştırma yapıp sonuca yazdıracağız

function sonuc (gamer,computer){
    if (gamer+computer === "tasmakas"){ // taş kısmından tasmakas gelirse kazan çalışır
        kazan()
    }else if(gamer+computer === "kagittas"){// kağıt kısmından kagittas gelirse kazan fonksiyonu çalışır
        kazan()
    }else if (gamer+computer === "makaskagit"){// makas kısmından makas kagit gelirse kazan çalışır
        kazan()
    }else if(gamer === computer){//oyuncu ve bilgisayar aynı seçim yaparsa berabere çalışır
        berabere()
    }else{                       // diğer tüm durumlarda kaybet fonksiyonu çalışır
        kaybet()
    }
}

//kazan fonksiyonu mesaj kısmını ve puan kısmınını değiştirecek

function kazan(){
    oyuncu = oyuncu+1  // oyuncu puanına 1 eklenecek
    mesaj.innerHTML = "Tebrikler Kazandınız" //mesaja Tebrikler kazandınız yazdıracak
    oyuncuPuan.innerHTML = oyuncu.toString() // puan kısmına eklenen puanu yazdıracak

}

function kaybet(){
    bilgisayar = bilgisayar+1
    mesaj.innerHTML = "Bilgisayar kazandı"
    bilgisayarPuan.innerHTML = bilgisayar.toString()
}

function berabere (){
    mesaj.innerHTML = "Berabere"
}