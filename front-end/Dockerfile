FROM node:8.11.1
LABEL Name=front-end Version=0.0.1
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
COPY package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN yarn global add  serve
RUN mkdir -p /usr/src && cp -ar /tmp/node_modules /usr/src

WORKDIR /usr/src
COPY . /usr/src
ENV PORT 3000
RUN yarn build
CMD serve -p 3000 build/
