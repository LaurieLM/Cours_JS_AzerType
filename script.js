
let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];
let score = 0; 

let choixListe = prompt("Voulez-vous une liste de mots ou de phrases ? Entrez mots ou phrases pour faire votre choix");

while (choixListe !== "mots" && choixListe !== "phrases") {
    choixListe = prompt("Voulez-vous une liste de mots ou de phrases ? Entrez mots ou phrases pour faire votre choix");
}

if (choixListe === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        motUtilisateur = prompt("Entrez un mot : " + listeMots[i]);
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        motUtilisateur = prompt("Entrez une phrase : " + listePhrases[i]);
        if (motUtilisateur === listePhrases[i]) {
            score++
        }
    }    
}

function returnMessageScore(score, nombreQuestions) {
    let message = "Votre score est de " + score + " sur " + nombreQuestions;
    return message
}

console.log(score);