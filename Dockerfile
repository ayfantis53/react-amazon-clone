FROM node:14-alpine AS builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#######################################################
#-----------------MULTI-BUILD-------------------------#
#######################################################

FROM nginx:latest

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html