# frOM node:21 as builder

# WORKDIR /src

# COPY package*.json .
# RUN npm install

# COPY src/ src/

# RUN npm start

# FROM node:21 as runner

# WORKDIR /src
# COPY --from=builder build/package*.json .
# COPY --from=builder build/node_modules node_modules
# COPY --from=builder build/package*.json .

# CMD [ "npm", "start" ]

# Use the official Node.js image from the Docker Hub
FROM node:21

# Set the working directory inside the container
WORKDIR /src

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Define the command to run your app
CMD ["npm", "start"]
