FROM node:18-alpine3.16

WORKDIR /app
ENV PORT=3001
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
