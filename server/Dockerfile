FROM node:20-bookworm-slim

WORKDIR /app

RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["nodemon", "app.js"]
