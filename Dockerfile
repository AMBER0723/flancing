# Use Node.js as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your source code
COPY . .

# Expose the port Vite typically uses
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]