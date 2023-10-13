function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous une liste de mots ou de phrases ? Entrez mots ou phrases pour faire votre choix");
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Voulez-vous une liste de mots ou de phrases ? Entrez mots ou phrases pour faire votre choix");
    };
    return choix
}

function lancerBoucleDeJeu(listeProposition) {
    let score = 0;
    for (let i = 0; i < listeProposition.length; i++) {
        motUtilisateur = prompt("Entrez un mot : " + listeProposition[i]);
        if (motUtilisateur === listeProposition[i]) {
            score++
        }
    }
    return score
}

function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots();
    let score = 0;
    let nbMotsProposes = 0;

    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listeMots.length
    }

    afficherResultat(score, nbMotsProposes)
}

lancerJeu()