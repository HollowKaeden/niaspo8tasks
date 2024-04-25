FROM drupal:latest

# Установка дополнительных пакетов
RUN apt-get update && apt-get install -y \
    git \
    unzip

# Установка Drush
RUN composer global require drush/drush

# Копирование дополнительных модулей и тем
WORKDIR /var/www/html/themes
RUN git clone --branch 8.x-3.x --single-branch --depth 1 https://git.drupalcode.org/project/bootstrap.git

WORKDIR /var/www/html/modules
RUN git clone --branch 8.x-1.x --single-branch --depth 1 https://git.drupalcode.org/project/token.git