import { DonneesUtilisateur } from "./DonneesUtilisateur.js";
import { ValidationDonneesUtilisateur } from "./ValidationDonneesUtilisateur.js";

const valideUtilisateur = document.getElementById('valideUtilisateur');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const numeroTel = document.getElementById('numeroTel');
const monForm = document.getElementById('monForm');
const erreurPrenom = document.getElementById('erreurPrenom');

/**
 * Lorsque le formulaire est soumis :
 * Récupère les données du formulaire
 */

const validation = new ValidationDonneesUtilisateur();

prenom.addEventListener('input', () =>{
    try{
        const prenomValide = validation.verifPrenom(prenom.value);

        if(prenomValide){
            prenom.classList.remove('input-invalideSaisie');
            prenom.classList.add('input-valideSaisie');
        } else {
            prenom.classList.remove('input-valideSaisie');
            prenom.classList.add('input-invalideSaisie');
        }
    }catch{
        console.error("Une erreur est survenue lors de la validation :");
    }
});


monForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    try{
        const prenomValide = validation.verifPrenom(prenom.value);
        // const nomValide = verifNom(nom.value);

        if(prenomValide){
            erreurPrenom.innerHTML = '<span class="texteVert">\u2714</span>'
        } else {
            
            erreurPrenom.innerHTML = '⛔ Prénom invalide ⛔'
        }
    } catch(error){
        console.error("Une erreur est survenue lors de la validation :");
    }
});




// /**
//  * Pour valider un nom
//  * 3 caractères minimum
//  * @param {string} _nom le nom est à validé
//  * @returns {Boolean} VRAI si le nom est valide, sinon FAUX
//  */

// function verifNom(_nom){
//     let regexNom = /^[A-Za-z]{3,}$/;

//     _nom = _nom.trim();

//     return regexNom.test(_nom);
// }

// /**
//  * Valide le numéro de téléphone
//  * Remplacer les points et les espaces par une chaine vide
//  * 0609874524
//  * +33609080504
//  * 01 / 02 / 03 / 04 / 05 / 06 / 07 / 09
//  * @param {*} _telephone le numéro de téléphone est à validé
//  * @returns {Boolean} Vrai si le nom est valide, Sinon FAUX
//  */

// function verifTelephone(_telephone){
//     let regexTelephone = //;

//     _telephone = _telephone.trim();

//     return regexTelephone.test(_telephone);
// }
