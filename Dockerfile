FROM node:20.11.1-alpine3.19 AS build
WORKDIR /app
COPY --chown=node:node . /app
RUN npm ci
RUN npm run build

FROM nginx:1.24.0-alpine-slim AS production
COPY --from=build /app/build /usr/share/nginx/html
