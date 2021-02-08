FROM node:14.15-alpine AS base
ENV PROJECT_DIR=/home/node/app
USER node
RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR

COPY --chown=node:node package.json .
COPY --chown=node:node package-lock.json .
RUN npm ci

CMD [ "npm", "start" ]
