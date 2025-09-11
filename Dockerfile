FROM node:22-alpine

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy web app package files
COPY apps/web/package.json ./

# Install dependencies
RUN pnpm install

# Copy web app source
COPY apps/web ./

# Build the web app
RUN pnpm build

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]