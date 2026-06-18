FROM node:24-slim
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 3000

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
