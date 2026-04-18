FROM node:22-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./



# Install dependencies
RUN npm install 

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build



# Stage 2: Production
FROM node:22-alpine AS production
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated
# Copy the config to production stage
COPY --from=builder /app/prisma.config.ts ./ 

EXPOSE 3006

CMD sh -c "npx prisma migrate dev && npm run start:prod"
