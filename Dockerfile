FROM node:19

# Create app directory
WORKDIR /usr/src/app

# Add package json related items
COPY package.json ./
COPY yarn.lock ./

# yarn 
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["yarn", "prod"]