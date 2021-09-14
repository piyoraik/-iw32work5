FROM node:14.17.6-alpine as base-node
RUN apk upgrade && apk add git bash

FROM base-node as dev
RUN apk add yarn
WORKDIR /app
COPY ./package*.json .
RUN yarn install
COPY . .
ENTRYPOINT [ "yarn"]
CMD ["dev"]