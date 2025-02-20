
FROM node:22-alpine

# 2Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia para dentro do container (./)
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080

CMD ["node", "dist/server.mjs"]
