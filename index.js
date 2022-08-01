// Variables : élément dans le quel on stock "quelque chose "

let cours = 'ugfiugufugsdfiugsf';

console.log (cours + ' // avant maj');

cours = " fsfjhkj uygfsgsf";
console.log (cours + ' // après maj');

const prenom = "patrice";

console.log (prenom);



// Partie 2 Chapitre 1

// Functions 

// Il y à plusieurs façon de déclarer des fonctions en JS 

// 1ère façon

function faireQuelqueChose () {
 
}



// 2ème façon 
//"type" ici est le paramètre de la fonction

const faireUneTache = (type)  => {
    console.log ('je fais : ' + type);
} ;

faireUneTache ('la vaiselle');
faireUneTache ('les courses');