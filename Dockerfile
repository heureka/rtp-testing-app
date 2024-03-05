FROM node:20-alpine AS dev-dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

FROM node:20-alpine AS prod-dependencies
WORKDIR /app
COPY package.json yarn.lock ./
COPY --from=dev-dependencies /app/node_modules ./node_modules
RUN yarn install --production

FROM node:20-alpine AS build
WORKDIR /app
COPY . .
COPY --from=dev-dependencies /app/node_modules ./node_modules
RUN yarn build

FROM node:20-alpine
WORKDIR /app
COPY ./package.json yarn.lock ./
COPY --from=prod-dependencies /app/node_modules ./node_modules
COPY --from=build /app/build ./build
CMD ["yarn", "start"]
