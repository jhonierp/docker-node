from node:20.0.0

WORKDIR /usr/frontend-app

COPY package*.json ./ 

RUN npm install
RUN npm install -g pm2

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "pm2-runtime","npm","--","start" ]
