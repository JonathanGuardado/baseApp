FROM node:13

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build
COPY ./src/server/server.js ./build/server.js

ENV NODE_ENV production

ENV PORT=4000

CMD ["npm","run","server"]
