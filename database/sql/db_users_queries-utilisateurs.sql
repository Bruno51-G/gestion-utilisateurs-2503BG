/* Requêtes UPDATE (utilisateurs) */
/* Modifier l'utilisateur n°3. Nouvel email : laure.dynatteur@example.com*/
UPDATE t_user SET user_email='laure.dynatteur@example.com' WHERE user_id=3;


/* Modifier l'utilisateur n°4. Nouveau nom: thmetique. Nouveau mot de passe: tatayoyo. */
UPDATE t_user SET user_lastname='tmetique', user_password='tatayoyo' WHERE user_id=4;



/* Requêtes SELECT (utilisateurs) */
/* Sélectionner toutes les informations de tous les utilisateurs. */
SELECT user_email, user_lastname, user_firstname, user_password, role_id FROM t_user;


/* Sélectionner le nom, prénom, email et identifiant de chaque utilisateur. */
SELECT user_lastname, user_firstname, user_email, role_id FROM t_user;


/* Sélectionner l'identifiant, le prénom et le nom de l'utilisateur n°2. */
SELECT user_id, user_firstname, user_lastname FROM t_user WHERE user_id='2';


/* Sélectionner l'identifiant, le nom et l'email des utilisateurs dont le nom est "ricossec". */
SELECT role_id, user_lastname, user_email FROM t_user WHERE user_lastname = 'ricossec';


/* Sélectionner toutes les informations des utilisateurs sans prénom. */
SELECT user_email, user_lastname, user_firstname, user_password, role_id FROM t_user WHERE user_firstname IS NULL;


/* Sélectionner toutes les informations des utilisateurs avec un prénom. Le résultat est trié par identifiant (ordre décroissant). */
SELECT user_email, user_lastname, user_firstname, user_password, role_id FROM t_user WHERE user_firstname IS NOT NULL ORDER BY user_id DESC;


/* Sélectionner l'identifiant et le nom des utilisateurs dont le nom contient la lettre "d".*/
SELECT role_id, user_lastname FROM t_user WHERE user_lastname LIKE '%d%';


/* Sélectionner l'identifiant, le nom et l'email des utilisateurs dont le prénom commence par la lettre "l". Le résultat est trié par prénom (ordre alphabétique). */
SELECT user_id, user_lastname, user_email FROM t_user WHERE user_firstname LIKE 'l%' ORDER BY user_firstname;


/* Sélectionner le nom, le prénom et l'email des utilisateurs dont l'email se termine par ".fr". Le résultat est trié par nom (ordre alphabétique). */
SELECT user_lastname, user_firstname, user_email FROM t_user WHERE user_email LIKE '%.fr' ORDER BY user_lastname;

