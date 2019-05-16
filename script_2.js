// Un prompt s'affiche avec la question suivante
let n = prompt("Quel nombre veux-tu calculer la factorielle ?");

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
function fact(n){
    return n>1 ? n*fact(n-1) : 1;
}
console.log(`Le résultat est ${fact(n)}`);