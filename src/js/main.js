const valideUtilisateur = document.getElementById('valideUtilisateur');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const numeroTel = document.getElementById('numeroTel');
const monForm = document.getElementById('monForm');

monForm.addEventListener('submit', function(event){
    event.preventDefault();

    const prenomValide = verifPrenom(prenom.value);
    const nomValide = verifNom(nom.value);

    if(prenomValide && nomValide){
        alert('Saisie correcte !');
    } else {
        alert('ERREUR de saisie !');
    }
});

/**
 * Pour valider un prénom
 * 3 caractères minimum
 * @param {string} _prenom le prénom est à validé
 * @returns {Boolean} VRAI si le nom est valide, sinon FAUX
 */

function verifPrenom(_prenom){
    let regexPrenom = /^[A-Za-z]{3,}$/;

    _prenom = _prenom.trim();

    return regexPrenom.test(_prenom);
}


/**
 * Pour valider un nom
 * 3 caractères minimum
 * @param {string} _nom le nom est à validé
 * @returns {Boolean} VRAI si le nom est valide, sinon FAUX
 */

function verifNom(_nom){
    let regexNom = /^[A-Za-z]{3,}$/;

    _nom = _nom.trim();

    return regexNom.test(_nom);
}

/**
 * Valide le numéro de téléphone
 * Remplacer les points et les espaces par une chaine vide
 * 0609874524
 * +33609080504
 * 01 / 02 / 03 / 04 / 05 / 06 / 07 / 09
 * @param {*} _telephone le numéro de téléphone est à validé
 * @returns {Boolean} Vrai si le nom est valide, Sinon FAUX
 */

function verifTelephone(_telephone){
    let regexTelephone = //;

    _telephone = _telephone.trim();

    return regexTelephone.test(_telephone);
}