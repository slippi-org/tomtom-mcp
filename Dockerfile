FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built app
COPY dist/ ./dist/
COPY bin/ ./bin/

# Make the binary executable
RUN chmod +x ./bin/tomtom-mcp

# Expose port for HTTP server (optional)
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Use CMD to run the application in production mode
CMD [ "npx", "bin/tomtom-mcp.js" ]
