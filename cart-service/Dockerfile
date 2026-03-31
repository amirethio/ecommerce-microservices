# Dockerfile for cart-service with TypeScript + pnpm
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and pnpm lockfile first
COPY package.json pnpm-lock.yaml* ./

# Install dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the files
COPY . .

# Generate Prisma client required by TypeScript imports
RUN pnpm prisma generate

# Validate TypeScript during build
RUN pnpm exec tsc --noEmit

# Expose port
EXPOSE 4004

# Start the server
CMD ["pnpm", "exec", "tsx", "src/server.ts"]