# syntax=docker/dockerfile:1
# Image de production pour l'API Symfony (PHP 8.3 + Apache)

FROM php:8.3-apache

# --- Dépendances système + extensions PHP ---
RUN apt-get update && apt-get install -y --no-install-recommends \
        git unzip libicu-dev libpq-dev libzip-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install -j"$(nproc)" intl opcache pdo pdo_pgsql zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Composer (copié depuis l'image officielle)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Apache : garantir un seul MPM (prefork, requis par mod_php) + rewrite + vhost vers public/
# cache-bust: 2026-07-02-2 (le cache de build Railway resservait une couche périmée)
RUN set -eux; \
    rm -f /etc/apache2/mods-enabled/mpm_*.load /etc/apache2/mods-enabled/mpm_*.conf; \
    a2enmod mpm_prefork rewrite; \
    echo "MPM actifs au build:"; (apache2ctl -M 2>/dev/null | grep -i mpm || true)
COPY docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html

# Variables de build (surchargées à l'exécution par Railway)
ENV APP_ENV=prod \
    APP_DEBUG=0 \
    COMPOSER_ALLOW_SUPERUSER=1 \
    APP_SECRET=build_dummy_secret \
    DEFAULT_URI=http://localhost \
    CORS_ALLOW_ORIGIN="^https?://localhost$" \
    DATABASE_URL="postgresql://build:build@127.0.0.1:5432/build?serverVersion=16&charset=utf8"

# 1) Dépendances PHP d'abord (meilleur cache de couches Docker)
COPY composer.json composer.lock symfony.lock ./
RUN composer install --no-dev --no-scripts --no-progress \
        --prefer-dist --optimize-autoloader --no-interaction

# 2) Code source de l'application
COPY . .

# .env est gitignoré dans ce projet : symfony/runtime exige néanmoins sa présence.
# On en crée un minimal s'il est absent (les vraies variables Railway priment dessus).
RUN [ -f .env ] || printf 'APP_ENV=prod\n' > .env

# 3) Autoloader optimisé + préchauffage du cache prod
RUN composer dump-autoload --no-dev --optimize --classmap-authoritative \
    && php bin/console cache:clear --no-warmup \
    && php bin/console cache:warmup \
    && chown -R www-data:www-data var

# Entrypoint : port dynamique ($PORT) + migrations à chaque démarrage
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
