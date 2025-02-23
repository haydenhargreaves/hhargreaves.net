# Use a Node.js base image
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the application, will be placed in the build/ directory
RUN npm run build

# Command to run after the build (e.g., a script, or just stay in the container)
# You can change this to whatever you want to run after the build.
CMD ["node", "build/index.js"]

# OR, if you want to enter the container after the build:
# CMD ["/bin/sh"]  # or CMD ["/bin/bash"] if bash is installed
