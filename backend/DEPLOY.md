# Déploiement du backend sur Railway

L'API Symfony est packagée avec le `Dockerfile` (PHP 8.3 + Apache). Railway
détecte automatiquement le Dockerfile grâce à `railway.json`.

## 1. Créer le service sur Railway

1. Sur [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo** → sélectionne ce dépôt.
2. Dans **Settings** du service :
   - **Root Directory** : `backend`  *(indispensable : le Dockerfile est dans `backend/`)*
   - Le **Builder** sera « Dockerfile » automatiquement (via `railway.json`).
3. Ajoute une base **PostgreSQL** : bouton **+ New** → **Database** → **PostgreSQL**.

## 2. Variables d'environnement (onglet *Variables* du service)

| Variable | Valeur | Notes |
|---|---|---|
| `APP_ENV` | `prod` | |
| `APP_DEBUG` | `0` | |
| `APP_SECRET` | *(32 hex aléatoires)* | ex. `openssl rand -hex 16` |
| `DATABASE_URL` | `${{Postgres.DATABASE_URL}}` | référence la base Railway |
| `CORS_ALLOW_ORIGIN` | `^https://.*\.vercel\.app$` | autorise ton domaine Vercel |
| `ANTHROPIC_API_KEY` | *(ta clé)* | seulement si tu utilises le VBot |

> **DATABASE_URL** : si Doctrine se plaint de la version serveur, remplace la
> référence par la chaîne complète copiée depuis le service Postgres, en
> ajoutant `?serverVersion=16&charset=utf8` à la fin.

> **CORS** : pour restreindre à un seul domaine, utilise plutôt
> `^https://vroom-frontend\.vercel\.app$` (adapte au nom réel de ton projet Vercel).

## 3. Exposer le service

**Settings → Networking → Generate Domain**. Tu obtiens une URL du type
`https://vroom-api-production.up.railway.app`.

Les **migrations** Doctrine sont jouées automatiquement à chaque démarrage
(voir `docker/entrypoint.sh`).

## 4. Remplir la base (fixtures)

Les fixtures sont des dépendances *dev* (absentes de l'image de prod). Pour
insérer les données de démo, lance-les depuis ta machine **en pointant sur la
base Railway** (récupère l'URL publique dans l'onglet *Connect* du service Postgres) :

```bash
cd backend
DATABASE_URL="postgresql://<user>:<pass>@<host>:<port>/<db>?serverVersion=16&charset=utf8" \
  php bin/console doctrine:migrations:migrate --no-interaction
DATABASE_URL="postgresql://<user>:<pass>@<host>:<port>/<db>?serverVersion=16&charset=utf8" \
  php bin/console doctrine:fixtures:load --no-interaction
```

## 5. Brancher le frontend (Vercel)

Dans le projet **Vercel → Settings → Environment Variables** :

```
VITE_API_BASE_URL = https://vroom-api-production.up.railway.app/api
```

Puis **redéploie** le frontend (les variables `VITE_*` sont injectées au build).

## Vérification

```bash
curl https://vroom-api-production.up.railway.app/api/vehicles
```

Doit renvoyer un tableau JSON de véhicules. Le message « Erreur API » du
frontend disparaît alors.
