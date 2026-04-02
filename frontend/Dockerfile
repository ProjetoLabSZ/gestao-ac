FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# O Vite roda na 5173 por padrão
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]