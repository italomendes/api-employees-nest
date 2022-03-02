FROM node:alpine

ENV GROUP_ID=1000 \
    USER_ID=1000

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "start:dev"]
