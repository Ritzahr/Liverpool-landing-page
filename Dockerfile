FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi
EXPOSE 3000

CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm start; fi"]