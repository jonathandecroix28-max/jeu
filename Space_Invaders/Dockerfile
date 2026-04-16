FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY . .

RUN npm install

EXPOSE 5173

CMD ["npx", "http-server", "build", "-p", "5173", "."]