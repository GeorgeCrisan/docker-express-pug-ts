FROM node:19

# Create app directory
WORKDIR /usr/src/app

# Add package json related items
COPY package.json ./
COPY yarn.lock ./

# Install pm2
RUN yarn global add pm2

# yarn 
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["yarn", "build"]
CMD ["pm2-runtime", "./server/server.js"]