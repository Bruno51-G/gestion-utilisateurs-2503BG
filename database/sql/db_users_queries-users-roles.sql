/* Sélectionner tous les utilisateurs (identifiant nom, prénom, email et nom du rôle). */

/* Sans jointure */
SELECT user_id, user_lastname, user_firstname, user_email, role_name 
FROM t_user, t_role 
WHERE t_user.role_id = t_role.role_id;

/* Avec jointure */



/* Sélectionner tous les utilisateurs (identifiant nom, prénom, email, identifiant du rôle, nom du rôle). 
Trier les résultats par idetnfiant de rôle par ordre décroissant puis par nom de famille par ordre croissant. */

/* Sans jointure */

/* Avec jointure */


/* Sélectionner tous les utilisateurs (identifiant nom, prénom, email, identifiant du rôle, nom du rôle) qui possèdent le rôle n°2. */



/* Sélectionner le nombre d'utilisateurs. */



/* Sélectionner, dans les rôles, le plus grand identifiant. */



/* Sélectionner tous les rôles (identifiant du rôle, nom du rôle, description du rôle). Pour chaque rôle, afficher le nombre d'utilisateurs concernés. */