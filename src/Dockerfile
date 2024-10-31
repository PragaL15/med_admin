# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies (this includes PrimeReact if listed in package.json)
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application
RUN npm run build

# Expose the port your app runs on
EXPOSE 5173

# Command to run your app in development mode
CMD ["npm", "run", "dev", "--", "--host"]

