FROM node:12.16-alpine as builder

ENV NODE_ENV=production

WORKDIR /app

COPY package*json ./

RUN npm ci --silent --no-fund --no-optional
COPY . .
RUN npm run build

##

FROM nginx:1.18-alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html/
