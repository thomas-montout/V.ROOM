#!/bin/sh
set -e

# Railway (et la plupart des PaaS) injectent le port d'écoute via $PORT
: "${PORT:=80}"
sed -ri "s/^Listen 80$/Listen ${PORT}/" /etc/apache2/ports.conf
sed -ri "s/:80>/:${PORT}>/" /etc/apache2/sites-available/000-default.conf

# Applique les migrations Doctrine (sans échouer si aucune migration)
php bin/console doctrine:migrations:migrate --no-interaction --allow-no-migration || true

# Démarre Apache au premier plan
exec apache2-foreground
