FROM node:8

WORKDIR /usr/src/app
ENV TERM xterm

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["npm","start"]
