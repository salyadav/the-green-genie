// base image
FROM node:17.0.1-darwin
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY . /app
RUN yarn build
CMD [ "yarn", "start" ]