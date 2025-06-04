
FROM node:16

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the backend source code
COPY . .

# Expose the backend API port (assuming port 5000)
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]
