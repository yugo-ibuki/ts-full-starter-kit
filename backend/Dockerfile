FROM node:20-buster-slim
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn", "start"]