FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3000

CMD yarn build && yarn prod