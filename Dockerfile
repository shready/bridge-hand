FROM nginx:1.13-alpine

COPY deploy/conf.d /etc/nginx/conf.d
COPY dist /data/www