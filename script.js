

//   Javascript numeric hesaplar

var sayi1 = 20;
 var sayi2 = 30;
 var sayi3 = 40;
 var x = sayi1 + sayi2 + sayi3;
 alert("Toplamlari: " + (sayi1 + sayi2 + sayi3));
 console.log(x);

//  String uzerinde iw
 var a = "Java";
 var b = "Programlama";
 var c = "Dili";

 alert(a + b + c);

 var a;
  a = 10;

  var b = a*2 + 10;

  alert("b-in degeri => " + b);
 
          Arraylar uzerinde iw/ array e eleman nasil eklemeli!
         var array = ["Java","Python","C++","C#"];
                array[4] = "php";
                  
         //array push() metodu;
             array.push("Go");
             alert(array.length); //length shows quantity of elements inside array function!

      // JS   for()- donguleri OR LOOPS()

   for (var i=0;i<10;i++){
           console.log("i- nin degeri: " + i);
   }

   //while() donguleri:

    var i = 0;

    while(i<100){
            console.log("i- in degeri: " + i);
            i  +=2;

    }
 var sayilar = [32,5,1,100,-1,90];
   console.log("Array Elemanlari");

    for (var i=0;i<sayilar.length;i++){
            console.log("Elemanlar: " + sayilar[i]);
}

   //  for.each -methodu
     var sayilar = [32,5,1,100,-1,90];
     console.log("Array Elemanlari: ");

     sayilar.forEach(function (sayi) {
             console.log("Elemanlar:" + sayi);   
     })

       kosullar ..

       var a = 5;
       var b = 6;

       if (a==b){
          console.log("Parametrler beraberdir!")
       }
       else{
          console.log("Parametrin qiymetleri beraber deyildir!");

       }
       if (2 === "2"){
          console.log("ededler beraberdir!")
       }
      
       if (2==2 && "Murat" || "Mrat"){
          console.log("Degerler esittir");
       }

      //if=>elif=>else koshulu:
         //bu bir test kosulu:
           var myname = "Paul";
               if (myname == "Paul"){
           alert("My name is " + myname);
           }

//fonksiyon lara degerlerin constuctorla yaratma
                function selamla(ad,soyad) {
                   document.write("Merhaba! \n Hosgeldin " + ad + " " + soyad);
                }
                var ad = prompt("Adiniz?");
                var soyad = prompt("soyadiniz ?");
           selamla(ad, soyad);
//Js de  switch() case() durumu inceleme;;

  var islem = 3

 switch (islem){
    case 1:
       console.log("Islem 1");
       break;
     case 2:
        console.log("Islem 2");
        break;
    case 3:
       console.log("Islem 3");
       break;
    default:
          console.log("Gecersiz islem..");
   
} 

    // Sade sorgu => case"Bear" console.log() 
    //  vermir ama document.write   ile isledi!
            var fDrink = prompt("Whats your favorite drink?");   
          switch (fDrink){
                 case "Martini" :
                   document.write("Bunu davam ele");
                break;
                 case "Vodka" :
                   document.write ("This is the better one for drink it for us..");
                break;
              case "Bear" :   
                   document.write("All thinks has been exhausted");
                break;
                default:
                  document.write("Icmeye hec ne qalmadi ;;");
              break;  
           }

         //     Javascript fonksiyonlar => uzerinde iw parametrler/
              function selamver(isim){
                 console.log("Merhaba " + isim);
              }

              selamver("Ayse");
              selamver("Ahmed");
              selamver("Murat");
              selamver("Ilteber");
               function toplama(a,b,c){
                  return a + b + c;
               }

              var toplam = toplama(3,4,5);
              console.log("Toplamlari: " + toplam);
            
   //Fonksiyonlar tiplendirme!!
      var calisan = {
         isim: "Murat",
         soyisim: "coskun",
         yas: 24,
         adress: {
            cadde: "15ler",
            sokak: "direk",
         }
      };

      console.log(calisan.isim);
      console.log(calisan.soyisim);
      console.log(calisan.adress.cadde);
      console.log(calisan.adress.sokak)
         

      var calisan = new Object()

       calisan.isim = "Murat";
       calisan.soyisim = "Mustafa";
       calisan.yas = 32;
       calisan.numara = 324332;
       calisan.isimBilgileri = function(){
          return "\nisim: " + this.isim + "\nsoyisim: " + this.soyisim + "\nNumara: " + this.numara;
   };
       console.log(calisan.isim);
       console.log(calisan.soyisim);
       console.log(calisan.isimBilgileri());

     
          Js de obje icinde fonksiyon cagirmak;;
             var calisan = {
                isim: "Murat", 
                soyisim: "Coskun",
                yas: 19,
                numara:123445,
                isimBilgileri : function() {
                  return "isim : " + this.isim + " soyisim : " + this.soyisim;
                  
               }
   
             }
                console.log(calisan.yas);
                console.log(calisan.numara);
                console.log(calisan.isimBilgileri());

           //Objeleri cagirmanin 2 ci metod:
             var calisan = new Object()
             calisan.isim = "Murat";
             calisan.soyisim = "coskun";
             calisan.numara = 12234;
             calisan.yas = 23;
             calisan.isimBilgileri = function(){
                return "isim: " + this.isim + " soyisim: s" + this.soyisim;

             }
             console.log(calisan.yas);
             console.log(calisan.numara);
             console.log(calisan.isimBilgileri());
       
          //Javascript objeler ve finction lar arasina (3);
          
           function Calisan (isim,soyisim,numara){
              this.isim = isim;
              this.soyisim = soyisim;
              this.numara = numara;
              this.isimBilgileri = function(){
                 return "Isim: " + this.isim + "\nsoyisim: " + this.soyisim + "\nNumara: " + this.numara;
              }
           }
             var calisan1 = new Calisan ("Mustafa","Murat","233423");
             var calisan2 = new Calisan ("John","Badenbauber","43534");
             console.log(calisan1.isimBilgileri());
             console.log(calisan2.isimBilgileri())
                
                //Javascript events:(Burada funksiyaya uygun deyisiklik edilir!):
    
             // 1) => function tikla(){
                    alert("Buttona tiklandi..");
                 }
              
             // 2) => function tikla(element){
                   element.innerHTML = "Buttona basariiyla tiklandi!";
                }
  
               3) => function tikla(element){
                      element.innerHTML = "Buttona tiklandi";
                   }
                   var element = getElementById('tikla')

              
             // 4) => function()  ile element islemi:
                    function renkDegistir(){
                      var element = document.getElementById("para 1");
                      element.style.color = "red";
                    }
             // 5) =>  _JS_ events onmouseover(),onmouseout() etc..
              function mouseover(){
                  var element = document.getElementById("para 1");
                  element.innerHTML = "Mouseover effecti";
                  element.style.color = "DodgerBlue";

             //  }
              function mouseout(){
                 var element = document.getElementById("para 1");
                  element.innerHTML = "Mouseout Effecti";
                  element.style.color = "red";
               }

     //JavaScript <form> dogrulama;

                function dogrula(){
                   var form = document.forms["form1"];
                   var  deger = form["isim"].value;
                   if (deger == ""){
                   alert("Isim alani bos birakilamaz! yenisini ekle lutfen!");
                   return false; 
                } return true;
             }
