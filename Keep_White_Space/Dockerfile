FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3630

CMD ["npx", "http-server", "-p", "3630", "."]