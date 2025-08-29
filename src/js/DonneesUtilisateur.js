import {ValidationDonneesUtilisateur} from './ValidationDonneesUtilisateur.js';

/**
 * Représente les données de l'utilisateur
 * @author Bruno GODBILLOT <bruno.godbillot@gmail.com>
 * @version 1.0
 */

export class DonneesUtilisateur{

    /**
     * 
     * @param {String} _prenom 
     * @param {String} _nom 
     * @param {Number} _numeroTel 
     */

    constructor(_prenom, _nom, _numeroTel){
        this.prenom = _prenom;
        this.nom = _nom;
        this.numeroTel = _numeroTel;
    }
}