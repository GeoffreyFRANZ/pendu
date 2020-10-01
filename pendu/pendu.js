// liste de mot possible 
let listeWord = ["yggdrasil", 'viking', 'valhalla', 'hache', 'raid', 'jarl', 'ragnarok'],
    // mot choisis aléatoirement
    solution = Math.floor(Math.random() * listeWord.length);
solution = listeWord[solution]
let vie = 6,   //nombre  d'erreur autorisé 
    deviner = [], //   variable du mot a deviner 
    compte = 0

// compter le nombre de lettre du mot  à deviné 
for (let i = 0; i < solution.length; i++) {
    deviner.push('_')
}

//  affiche  le nombre de underscore selon la longueur   du mot  permet au joueur  de connaitre le nombre de lette
document.querySelector('.adeviner').innerHTML = deviner.join(' ')

// récupération des button
let buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.classList.add('text')
    // déclanche la function au click
    button.addEventListener('click', function () {

        let erreurs = true,  // création du  boolean pour la vérifiaction des erreurs
            // lettre variable qui permettra de  verifier  le button clicker  
            lettre = this.innerHTML
        //  this.classList.add('display')
        this.disabled = true

        //  boucle qui  se répetera  selont  la longeur  des  lettre restant a deviné  
        for (i = 0; i < solution.length; i++) {

            // compare le button  clické  par  sur  chaque underscore qui cache une lettre
            if (lettre === solution[i]) {
                deviner[i] = lettre //permet de  mettre au bon endroit la bonne lettre
                compte++  //compte  le nombre de lettre 
                erreurs = false // si on a affiché  une  lettre en + alors  le joueur n'a pas fais d'erreur  donc  la vérification est fauss
            }
            // reactualisation des lettre qui ont été  deviné et  reste a deviné 
            document.querySelector('.adeviner').innerHTML = deviner.join(' ')
        }
        // vérifie si le joueur  c'est trompé
        if (erreurs == true) {
            vie--
            //  comme le joueur c'est  trompé  on affiche une partie du pendu  
            if (vie <= 5) {
                document.querySelector("#q" + vie).classList.remove('hidden')
            }
            // empeche  que les vies devinnent négatif (facultatif)
            else if (vie < 0) {
                vie = 0
            }
        }
        // vérification de  victoire  
        if (compte == solution.length) {
            document.querySelector('.adeviner').innerHTML = "vous avez gagnez"
            document.querySelector('.adeviner').classList.add('text')
            document.querySelector('div').classList.add('remove')

           
            
        }
        // on aurrais aussi pue dire   que si  la vie est inférieur a 0  ou égal a  0  bas perdu  
        if (vie == 0) {
            document.querySelector('.adeviner').innerHTML = "vous êtes pendu "
            document.querySelector('div').classList.add('remove')


        }

    })


}
