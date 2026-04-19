FROM node:lts-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json yarn.lock ./
COPY . .

RUN npm install

EXPOSE 5173

CMD ["npx", "http-server", "build", "-p", "5173", "."]