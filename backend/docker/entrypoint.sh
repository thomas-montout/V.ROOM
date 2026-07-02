#!/bin/sh
set -e

# Filet de sécurité : garantir un seul MPM Apache au démarrage (prefork requis par
# mod_php). Contourne un éventuel cache de build défaillant côté hébergeur.
a2dismod mpm_event mpm_worker >/dev/null 2>&1 || true
a2enmod mpm_prefork >/dev/null 2>&1 || true

# Railway (et la plupart des PaaS) injectent le port d'écoute via $PORT
: "${PORT:=80}"
sed -ri "s/^Listen 80$/Listen ${PORT}/" /etc/apache2/ports.conf
sed -ri "s/:80>/:${PORT}>/" /etc/apache2/sites-available/000-default.conf

# Applique les migrations Doctrine (sans échouer si aucune migration)
php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration || true

# Démarre Apache au premier plan
exec apache2-foreground
