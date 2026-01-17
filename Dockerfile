# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy app file
COPY server.js .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
