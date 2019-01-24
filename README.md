# Framework et technologies : 

- RESTFUL API en Node.js, 
- NoSqL Database en Mongodb.

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
