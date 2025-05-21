FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
<<<<<<< HEAD
CMD ["npm", "start"]
=======
CMD ["npm", "start"]
>>>>>>> f149560348c91028d9465368363fd39acd2d1731
