# V.ROOM - Plateforme E-commerce et Assistant IA

Bienvenue sur le dépôt de V.ROOM, une application web e-commerce spécialisée dans la vente de véhicules neufs et d'occasion.

Ce projet est développé dans le cadre d'un BTS, avec pour objectif de démontrer la maîtrise d'une architecture découplée (Headless), de la Programmation Orientée Objet (POO) avancée et de l'intégration d'une Intelligence Artificielle.

---

## Fonctionnalités Principales

- Assistant IA : Un widget de discussion permet aux utilisateurs de rechercher un véhicule en langage naturel. L'IA analyse la requête pour extraire des filtres de recherche structurés.
- Catalogue Hybride : Gestion unifiée des véhicules via l'héritage Doctrine (classe mère Vehicle et classes filles NewVehicle/UsedVehicle).
- Interface responsive : Adaptation complète mobile / tablette / desktop (menu hamburger, grilles fluides).
- Espace Client Sécurisé : Authentification par jeton (JWT) permettant la gestion des favoris.
- Tunnel d'Achat : Ajout au panier et simulation du processus de commande.

---

## Stack Technique

Le projet utilise une architecture Client-Serveur strictement séparée au sein d'un monorepo.

### Frontend (Interface Utilisateur)

- Framework : React (via Vite)
- Langage : TypeScript
- Styling : Tailwind CSS
- Gestion d'état : Zustand

### Backend (API et Logique Métier)

- Framework : Symfony 7 (API REST)
- Langage : PHP 8.2+
- Base de données : PostgreSQL et ORM Doctrine
- CORS : NelmioCorsBundle
- IA : API Gemini pour le traitement du langage naturel

### Déploiement & Infrastructure

- Frontend : hébergé sur **Vercel** (build statique Vite)
- Backend : conteneurisé avec **Docker** (PHP 8.3 + Apache) et hébergé sur **Railway**
- Base de données : **PostgreSQL managé** par Railway
- CI/CD : chaque `push` sur `main` déclenche automatiquement le build/déploiement (Vercel pour le front, Railway pour le back)

---

## Structure du Projet

```
vroom/
├── backend/                # API Symfony, Entités, Logique IA, Base de données
│   ├── Dockerfile          # Image de production (PHP 8.3 + Apache)
│   ├── docker/             # Config Apache + entrypoint (migrations + port dynamique)
│   ├── railway.json        # Indique à Railway de builder via le Dockerfile
│   └── DEPLOY.md           # Guide de déploiement Railway pas à pas
└── frontend/               # Application React, Composants UI, Vues Tailwind
    └── vercel.json         # Réécritures SPA pour le routing React
```

---

## Installation et Démarrage local

### Prérequis

- Node.js et npm
- PHP 8.2+ et Composer
- Serveur PostgreSQL actif (ou Docker, voir `backend/compose.yaml`)
- Clé d'API Gemini valide

### 1. Configuration du Backend (Symfony)

Se positionner dans le dossier backend :
```
cd backend
```

Installer les dépendances PHP :
```
composer install
```

Configuration de l'environnement :
Créer un fichier `.env.local` dans le dossier backend et configurer les variables suivantes :
```
DATABASE_URL="postgresql://utilisateur:mot_de_passe@127.0.0.1:5432/vroom_db?serverVersion=16&charset=utf8"
GEMINI_API_KEY="votre_cle_api_gemini"
```

Initialisation de la base de données :
```
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
```

Démarrage du serveur :
```
symfony server:start
```

### 2. Configuration du Frontend (React)

Ouvrir un nouveau terminal et se positionner dans le dossier frontend :
```
cd frontend
```

Installer les dépendances :
```
npm install
```

Configuration de l'environnement :
Créer un fichier `.env` à la racine de frontend :
```
VITE_API_BASE_URL="http://127.0.0.1:8000/api"
```

Démarrage du projet :
```
npm run dev
```

---

## Déploiement (Production)

L'application est déployée avec une séparation nette : le frontend statique sur Vercel, l'API conteneurisée sur Railway.

### Backend — Docker + Railway

L'API est packagée via le `Dockerfile` (PHP 8.3 + Apache servant `public/`). Railway
détecte le Dockerfile grâce à `railway.json` et injecte le port d'écoute (`$PORT`).
Les **migrations Doctrine sont jouées automatiquement** au démarrage du conteneur
(voir `backend/docker/entrypoint.sh`).

Variables d'environnement à définir sur Railway :

| Variable | Rôle |
|---|---|
| `APP_ENV` | `prod` |
| `APP_DEBUG` | `0` |
| `APP_SECRET` | secret applicatif Symfony |
| `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` (base Railway) |
| `CORS_ALLOW_ORIGIN` | ex. `^https://.*\.vercel\.app$` |

Le guide complet (création du service, base Postgres, exposition du domaine,
chargement des fixtures) se trouve dans **`backend/DEPLOY.md`**.

#### Builder / lancer l'image en local

```
cd backend
docker build -t vroom-api .
docker run --rm -p 8080:8080 \
  -e PORT=8080 \
  -e DATABASE_URL="postgresql://user:pass@host:5432/db?serverVersion=16&charset=utf8" \
  vroom-api
```

### Frontend — Vercel

Le frontend est buildé et servi par Vercel. La seule variable requise est l'URL
publique de l'API :

```
VITE_API_BASE_URL = https://<votre-service>.up.railway.app/api
```

> Les variables `VITE_*` sont injectées **au moment du build** : après toute
> modification, il faut redéployer le frontend.

---

## Concepts Pédagogiques Appliqués

- Héritage et Polymorphisme : Utilisation d'une structure de classes héritées pour gérer les spécificités des véhicules (neufs vs occasions) tout en mutualisant le code commun.

- Séparation des responsabilités : Le frontend assure l'expérience utilisateur et le design via Tailwind, tandis que le backend garantit l'intégrité des données et la sécurité.

- Orchestration IA : Le traitement des requêtes complexes est délégué à l'IA côté serveur afin de protéger les clés secrètes et de structurer les résultats pour la base de données.

- Conteneurisation : Le backend est packagé dans une image Docker reproductible, garantissant la parité entre l'environnement local et la production.
```
