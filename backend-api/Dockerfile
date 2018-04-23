FROM node:8.11.1
LABEL Name=backend-api Version=0.0.1
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src && cp -ar /tmp/node_modules /usr/src


WORKDIR /usr/src
COPY . /usr/src

CMD npm run start
