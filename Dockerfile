FROM node:alpine AS development  

WORKDIR /app

COPY ./package.json .

RUN npm install 

COPY . . 

RUN npm run build 


FROM nginx:alpine AS production

COPY --from=development /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]