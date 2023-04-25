btn=document.querySelector("#btn");
let poids=document.querySelector("#poids");
let taille=document.querySelector("#taille");
let age=document.querySelector("#age");
let imc=document.querySelector("#imc");
let commentaire=document.querySelector("#commentaire");


function check(){
	if((taille.value > 0.54, taille.value < 2.27) && (poids.value > 6 && poids.value < 442)){
	    calcul();	
	}else{
	    commentaire.value = ("Valeurs non conformes");
		imc.value = ""
	}

	if(imc.value > 10 && imc.value < 57.8){
		calcul();
	}else{
		commentaire.value = ("Valeurs non conformes");
		imc.value = ""
	}
		
	if(age. value < 15){
		document.location.href="https://www.imc.fr/calcul";
	}
		
}

function calcul(){
	imc.value = poids.value/(taille.value*taille.value);
	Commentaire()
}

function Commentaire(){
	if(imc.value > 40){
        commentaire.value = ("Obésité morbide ou massive")

    }else if (35 < imc.value && imc.value <= 40){
        commentaire.value = ("Obésité sévère");

    }else if (30 < imc.value && imc.value <= 35){
        commentaire.value = ("Obésité modérée");

    }else if (25 < imc.value && imc.value <= 30){
        commentaire.value = ("Surpoids");

    }else if (18.5 < imc.value && imc.value <= 25){
        commentaire.value = ("Copulence normal");
		
    }else if (16.5 < imc.value && imc.value <= 18.5){
        commentaire.value = ("Maigreur");

    }else if (imc.value <= 16.5){
        commentaire.value = ("Famine");
    }
}

btn.addEventListener("click", check);