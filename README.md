# Technologies : 

- RESTFUL API en Node.js, 
- NoSqL Database en Mongodb.
- HTML/Js e t bibliothèque jQuery, pour la réalisation d'un front de démonstration

# Framework et modules uilisés :

## Serveur NodeJs : 
- Swagger : description des fonctionnalités de l'api, test de l'api,
- Express : créer des webs app avec nodeJs, gestion des routes
- Nodemon : relance le programme dès la modification et sauvegade d'un fichier,
- Moogoose : gestion d'une base de donnés mongoDB avec nodeJs,
- fs : file sytem, ici utilisé pour ouvrir le fichier json contenant une base de données genérées,
- body-parser : recuperer les donnés contenue dans les body d'une rquete,  via "req.body",
- cors : cross origin resource sharing, configure le serveur pour comminquer avec d'autres serveur ex: serveur en localhost:8888, et front en localhost 1234

## Front HTML/JS:
Le but de ce front leger est de pouvoir tester graphiquement les differentes fonctionnalités de l'application : 
- 

# Comment lancer l'application : 

- Décommenter la partie indquer dans le fichier 'apiServer/db/database.js' afin d'initaliser la base de données au premier demarrage du serveur.
- Dans le dossier (pharmacie_webproj) 
- Saisir dans le terminal la commande 'npm install'
- Puis 'npm run start' pour lancer le serveur node
- le serveur est lancé sur le port local 8888

L'application dispose de deux interfaces graphiaue dans le dossier public,
- un front permettant de tester les differentes fonctionnalités, en HTML et JS (Utilisant JQuery),
- en suivant l'url, http://localhost:8888/ , l'utilisateur est directement dirigé sur cette page, 
- un doc Swagger decrivant l'api, http://localhost:8888/swagger

Les requetes api se font sur http://localhost:8888/api/ 
- GET http://localhost:8888/api/products pour recuperer tous les produits
- GET http://localhost:8888/api/products?st=xxx pour recuperer tous les produits contenant une chaine de caracteres dans leurs nom
- GET http://localhost:8888/api/products?low=xxx pour recuperer tous les produits ou la quantité est inferieur a low
- POST http://localhost:8888/api/products pour acheter un produit

- GET http://localhost:8888/api/product/{id} pour recuper un produit
- PUT http://localhost:8888/api/product/{id} pour mettre a jour un produit
- DELETE http://localhost:8888/api/product/{id} pour supprimer un produit


# HOWTO:
- Uncomment in db/database.js
- npm install
- npm run start
- server is running on http://localhost:8888/
- http://localhost:8888/swaggger
