FROM node:20.14.0-alpine3.20 AS build
WORKDIR /app
COPY --chown=node:node . /app
RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile
RUN pnpm build

FROM nginx:1.26.1-alpine-slim AS production
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
