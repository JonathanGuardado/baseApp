FROM node:13

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build
ADD ./src/server/json_resources ./build/json_resources
COPY ./src/server/server.js ./build/server.js

ENV NODE_ENV production

ENV PORT=3000

CMD ["npm","run","server"]
