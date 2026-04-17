FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY index.html ./index.html
COPY style.css ./style.css
COPY script.js ./script.js

EXPOSE 80
