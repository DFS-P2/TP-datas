# JS-TP-DATAS

> Dans ce TP, vous allez afficher des données initialement récupérées sur un serveur, plus stockées dans le local storage.
>
> Pour aller plus loin, vous pourrez créer des formulaires d'ajout, de modification et de suppression de certaines données (le stockage restant dans le local storage).

## Objectif

On souhaite gérer des utilisateurs avec leur id, nom, prénom, identifiant (email), mot de passe (hashé), rôle (visiteur, gestionnaire, admin).

Suivez les étapes suivantes :

## Données

- Créez un jeu de données de test (100) avec Mockaroo ou équivalent. Attention, pas d'accent, de caractères spéciaux ou d'espaces dans les noms de champs !
- Exporter ces données dans un fichier au format json et stockez ce fichier dans un dossier *datas*.

## Affichage

- Créez votre boilerplate d'application.
- Créez une interface avec un menu top (Accueil, Admin) et un corps de page.
- Dans un module Javascript, récupérez les données du fichier json avec fetch => vérifiez dans la console. Jetez un coup d'oeil dans l'onglet Network des outils de développement du navigateur.
- Page Accueil : afficher toutes les données (sauf les mots de passe) sous forme de table (ajoutez un peu de Css ou utilisez une librairie).

## Local storage

- Dans un script Javascript, stockez toutes les données dans le local storage (avec une clé "users").
- Faites en sorte que si les données sont présentes dans le local storage, on affiche celles-ci plutôt que celles du fichier json (*le local storage va nous servir de base de données*).

## Tris

- Sur les entêtes de colonnes, ajoutez la possibilité de trier au clic (ordre ascendant et descendant).

## Recherche

- Ajoutez dans l'interface un champ de recherche et programmez son fonctionnement.

## Pagination

- Ajoutez des boutons de pagination.

## Formulaire d'ajout

- Sur la page admin, créez un formulaire d'ajout d'utilisateur.
- Créez la logique de validation des différents champs. On ne pourra soumettre le formulaire que si tous les champs sont correctement remplis.

## Formulaire de modification

- Dans la table des utilisateurs, ajoutez une colonne pour modifier et une pour supprimer.
- Adaptez le formulaire d'ajout pour permettre la modification d'un utilisateur.

## Suppression

- Créez le code pour supprimer un utilisateur, si possible avec une fenêtre de confirmation.
