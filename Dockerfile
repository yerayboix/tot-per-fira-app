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

# Set environment variables for build
ENV DATABASE_URL=$DATABASE_URL
ENV DATABASE_AUTH_TOKEN=$DATABASE_AUTH_TOKEN
ENV BETTER_AUTH_SECRET=$BETTER_AUTH_SECRET
ENV BETTER_AUTH_URL=$BETTER_AUTH_URL
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV ENABLE_ADMIN_REGISTRATION=$ENABLE_ADMIN_REGISTRATION

# Build the web app
RUN pnpm build

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]