# Specify a base image
FROM node:10-alpine

# Specify the working app directory
WORKDIR /usr/app

# Install dependencies
COPY package.json .
RUN npm install
COPY . .

# Default command
CMD npm start