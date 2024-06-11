from node:20.0.0

WORKDIR /usr/frontend-app

COPY package*.json ./ 

RUN npm install
RUN npm install pm2 -g

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "pm2runtime","start","--","start" ]