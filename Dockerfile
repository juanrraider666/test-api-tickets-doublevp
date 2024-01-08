FROM node:18.17.1-slim

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install
