FROM node:9-slim
RUN apt update
COPY . /app
COPY ./server/etc/flag.txt /app/flag
WORKDIR /app
RUN cd /server && npm install
EXPOSE 8000
CMD ["node", "server/server.js"]