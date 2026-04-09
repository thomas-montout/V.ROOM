# V.ROOM - Plateforme E-commerce et Assistant IA

Bienvenue sur le dépôt de V.ROOM, une application web e-commerce spécialisée dans la vente de véhicules neufs et d'occasion.

Ce projet est développé dans le cadre d'un BTS, avec pour objectif de démontrer la maîtrise d'une architecture découplée (Headless), de la Programmation Orientée Objet (POO) avancée et de l'intégration d'une Intelligence Artificielle.

---

## Fonctionnalités Principales

- Assistant IA : Un widget de discussion permet aux utilisateurs de rechercher un véhicule en langage naturel. L'IA analyse la requête pour extraire des filtres de recherche structurés.
- Catalogue Hybride : Gestion unifiée des véhicules via l'héritage Doctrine (classe mère Vehicle et classes filles NewVehicle/UsedVehicle).
- Espace Client Sécurisé : Authentification par jeton (JWT) permettant la gestion des favoris.
- Tunnel d'Achat : Ajout au panier et simulation du processus de commande.

---

## Stack Technique

Le projet utilise une architecture Client-Serveur strictement séparée au sein d'un monorepo.

### Frontend (Interface Utilisateur)

- Framework : React 18 (via Vite)
- Langage : TypeScript
- Styling : Tailwind CSS
- Gestion d'état : Zustand

### Backend (API et Logique Métier)

- Framework : Symfony 7 (API REST)
- Langage : PHP 8.2+
- Base de données : PostgreSQL et ORM Doctrine
- Sécurité : LexikJWTAuthenticationBundle
- IA : API Anthropic (Claude) pour le traitement du langage naturel

---

## Structure du Projet

vroom/
├── backend/ # API Symfony, Entités, Logique IA, Base de données
└── frontend/ # Application React, Composants UI, Vues Tailwind

---

## Installation et Démarrage local

### Prérequis

- Node.js et npm
- PHP 8.2+ et Composer
- Serveur PostgreSQL actif
- Clé d'API Anthropic (Claude) valide

### 1. Configuration du Backend (Symfony)

Se positionner dans le dossier backend :
cd backend

Installer les dépendances PHP :
composer install

Configuration de l'environnement :
Créer un fichier .env.local dans le dossier backend et configurer les variables suivantes :
DATABASE_URL="postgresql://utilisateur:mot_de_passe@127.0.0.1:5432/vroom_db?serverVersion=16&charset=utf8"
ANTHROPIC_API_KEY="votre_cle_api_claude"

Initialisation de la base de données :
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate

Démarrage du serveur :
symfony server:start

### 2. Configuration du Frontend (React)

Ouvrir un nouveau terminal et se positionner dans le dossier frontend :
cd frontend

Installer les dépendances :
npm install

Configuration de l'environnement :
Créer un fichier .env à la racine de frontend :
VITE_API_BASE_URL="http://127.0.0.1:8000/api"

Démarrage du projet :
npm run dev

---

## Concepts Pédagogiques Appliqués

- Héritage et Polymorphisme : Utilisation d'une structure de classes héritées pour gérer les spécificités des véhicules (neufs vs occasions) tout en mutualisant le code commun.

- Séparation des responsabilités : Le frontend assure l'expérience utilisateur et le design via Tailwind, tandis que le backend garantit l'intégrité des données et la sécurité.

- Orchestration IA : Le traitement des requêtes complexes est délégué à l'IA côté serveur afin de protéger les clés secrètes et de structurer les résultats pour la base de données.
