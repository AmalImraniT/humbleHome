🏡 HumbleHome — Frontend Angular
📖 Description

HumbleHome est une application e-commerce développée avec Angular, offrant une expérience utilisateur fluide, moderne et responsive.
Elle permet de parcourir des produits, afficher leurs détails, et gérer un panier interactif.
Le projet se distingue par un design épuré et élégant inspiré de marques premium.

🧠 Objectifs du projet

Créer une interface intuitive et performante pour les utilisateurs.

Implémenter une navigation fluide entre les produits et leurs détails.

Préparer le frontend pour une future intégration backend (API REST).

Optimiser les performances avec lazy loading, routing modulaires et services partagés.

⚙️ Technologies utilisées

Angular (v17+)

TypeScript

HTML5 / SCSS

RxJS

Angular Router

ShadCN / TailwindCSS (optionnel pour le style)

Node.js & npm

🧩 Structure du projet
humblehome-frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/
│   │   │   ├── product-detail/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   ├── services/
│   │   │   └── product.service.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── cart/
│   │   │   ├── about/
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
└── package.json

🚀 Installation & Lancement
1️⃣ Cloner le dépôt
git clone https://github.com/<votre-utilisateur>/humblehome-frontend.git
cd humblehome-frontend

2️⃣ Installer les dépendances
npm install

3️⃣ Lancer le serveur de développement
ng serve


➡️ L’application sera accessible sur : http://localhost:4200

🧱 Commandes principales
Commande	Description
ng serve	Lance le projet localement
ng build	Compile le projet pour la production
ng test	Exécute les tests unitaires
ng generate component	Génère un nouveau composant
ng add	Ajoute une librairie Angular officielle
🎨 UI & Expérience Utilisateur

Design minimaliste et réactif

Boutons et couleurs harmonisés avec la charte HumbleHome

Pages principales :

🏠 Accueil

🛒 Produits

🧾 Détails du produit

📦 Panier

📞 Contact

🧠 Services principaux
ProductService

Gère la logique métier des produits :

Récupération de la liste des produits

Gestion du produit sélectionné

Partage des données entre les composants (BehaviorSubject)

🔐 Bonnes pratiques appliquées

Architecture modulaire (par feature)

Lazy Loading pour améliorer les performances

Utilisation de services injectables pour la communication inter-composants

Code commenté et structuré selon les standards Angular
