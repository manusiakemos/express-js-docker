FROM node:16-alpine

VOLUME /home/node/app

RUN apk add --no-cache bash

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY src/package*.json ./

RUN npm i -g express-generator\
    sequelize-cli\
    nodemon

RUN npm install

COPY src ./

CMD ["npm", "run", "nodemon"]