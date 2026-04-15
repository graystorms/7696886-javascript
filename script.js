console.log("Hello World");



const listeMots=["Cachalot", "Pétunia", "serviette"]
let score = 0
const listePhrases=["Pas de panique !", "La vie, l'univers et le reste","Merci pour le poisson",]

let choix= prompt('veuillez choisir entre: mots et phrases')
while( choix !== 'mots'& choix !=='phrases'){
    choix= prompt('veuillez choisir entre: mots et phrases')
}

if (choix=='mots'){
    for(let i=0; i<listeMots.length; i++ ){
    let motUtilisateur = prompt("entrez le mot: " +listeMots [i])

    if (motUtilisateur===listeMots [0]){
   score++
      console.log('votre score est de: '+score+'sur '+listePhrases.length)

   
}
}

} else {
    for(let i=0; i<listePhrases.length; i++ ){
    let motUtilisateur = prompt("entrez le mot: " +listePhrases [i])

    if (motUtilisateur===listePhrases [0]){
   score++
   console.log('votre score est de: '+score+'sur '+listePhrases.length)

}
}
}




