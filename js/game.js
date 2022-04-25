//Le Bouton start
let MonStart = document.getElementById("startt");
//Image de la Mamie
let Mamie = document.getElementById("hiden");
//Le Temps de la partie
let myTime = 15;
//Décompte
let MonInter = setInterval(MonTemps, 0);
//Le Cookie
let LaZone = document.getElementById("LaZone");
//Le Meilleur score
let BestScore = 0;
//Ancien Score
let AncienScore = 0;
//permet de mettre l'animation à 0
let ReCss = 1;
//permet de choisir quel élement aura le css
let iterat = 1;
//Rajout CSS
let ReMet = document.getElementById("BestLFe");



MonStart.onclick = masquer;

//Permet de masquer le bouton start, de faire apparaitre le png, et afficher le compteur de temps
function masquer(){
    
    MonStart.style.display="none";
    Mamie.style.display="flex";
    LaZone.onclick = increm;
    document.getElementById("tmpRest").innerHTML = 'Time left ' + myTime;
    MonInter = setInterval(MonTemps, 1000);
    
}
  
//Gere la partie
function MonTemps(){
    if(myTime>0){
        
        myTime --   
        document.getElementById("tmpRest").innerHTML = 'Time left ' + myTime;
        //Si temps écoulé alors on remet le jeux comme il était au début
        if(myTime == 0){
            LaZone.onclick = null;
            MonStart.style.display="block";
            Mamie.style.display="none";
            myTime = 15;
            console.log(myTime);
            document.getElementById("espan").innerHTML = 0;
            clearInterval(MonInter);
            console.log(document.getElementById("espan"));
            console.log(BestScore);
            
            if(AncienScore<BestScore){
                ReMet.style.display="block";
                AncienScore = BestScore;
                document.getElementById("BestScore").innerHTML = BestScore;
            }
            BestScore = 0;
        }
     }
}


//Permet de faire monter le score du Cookie
function increm(){
    document.getElementById("espan").innerHTML = parseInt(document.getElementById("espan").innerHTML)+1;
    augment();
    BestScore ++;
}

function augment(){
    
    if(iterat == 1){
        if(ReCss ==1){
            Test =  document.getElementById("monday");
            Test.style.animation="anim 1s linear";
            ReCss++;
            iterat ++;
        }else{
            ReCss--;
            Test.style.animation="";
        }
    }else if(iterat ==2){
        if(ReCss ==1){
            Test =  document.getElementById("tuesday");
            Test.style.animation="anim 1s linear";
            ReCss++;
            iterat ++;
        }else{
            ReCss--;
            Test.style.animation="";
        }
    }else if(iterat == 3){
        if(ReCss ==1){
            Test =  document.getElementById("friday");
            Test.style.animation="anim 1s linear";
            ReCss++;
            iterat ++;
        }else{
            ReCss--;
            Test.style.animation="";
        }
    }else if(iterat == 4){
        if(ReCss ==1){
            Test =  document.getElementById("saturday");
            Test.style.animation="anim 1s linear";
            ReCss++;
            iterat = 1;
        }else{
            ReCss--;
            Test.style.animation="";
        }
    }
  
}