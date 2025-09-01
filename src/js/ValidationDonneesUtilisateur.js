/**
 * Contrôle de saisie
 */

export class ValidationDonneesUtilisateur{
    
    /**
    * Pour valider un prénom
    * 3 caractères minimum
    * @param {string} _prenom le prénom est à validé
    * @returns {Boolean} VRAI si le nom est valide, sinon FAUX
    */

    verifPrenom(_prenom){
        let regexPrenom = /^[A-Za-z]{3,}$/;

        _prenom = _prenom.trim();

        return regexPrenom.test(_prenom);
    }


}