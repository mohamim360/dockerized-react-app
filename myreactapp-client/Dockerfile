# Stage 1: Build React app using Node
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the app code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve React app using Nginx
FROM nginx:alpine

# Copy built React files from previous stage to Nginx public folder
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
