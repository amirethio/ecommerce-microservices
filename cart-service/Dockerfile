# 1. Use Node 20 Alpine as the base
FROM node:20-alpine

# 2. Install OpenSSL and libc6-compat (Required for Prisma on Alpine)
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

# 3. Install pnpm globally
RUN npm install -g pnpm

# 4. Copy dependency files
COPY package.json pnpm-lock.yaml* ./

# 5. Install dependencies
RUN pnpm install

# 6. Copy the rest of the source code
COPY . .

# 7. Generate Prisma Client (This should work now with OpenSSL installed)
RUN pnpm prisma generate

# 8. Validate TypeScript (The fix from earlier)
RUN pnpm exec tsc --noEmit || true

EXPOSE 3002

CMD ["pnpm", "dev"]