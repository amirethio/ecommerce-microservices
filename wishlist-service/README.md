# Wishlist Service

This service manages user wishlists in the e‑commerce platform.

## How to Run (Development)

### 1. Prerequisites
- Node.js and pnpm installed
- Docker running (for the local Postgres container)
- API Gateway running on `http://localhost:3000` (dev)

### 2. Configure environment variables

Create a `.env` file in this folder based on `.env.example`:

Required keys:
- `PORT` (default: `3005`)
- `NODE_ENV` (usually `development`)
- `JWT_ACCESS_SECRET`
- `GATEWAY_SECRET` (must match the gateway value)
- `DATABASE_URL` (PostgreSQL URL for the wishlist DB)
- `GATEWAY_URL` (usually `http://localhost:3000/api/v1`)

Example (for local dev):
```env
PORT=3005
NODE_ENV=development
JWT_ACCESS_SECRET=your-jwt-access-secret
GATEWAY_SECRET=super-secret-gateway-key
DATABASE_URL=postgresql://postgres:postgres@localhost:5434/wishlist
GATEWAY_URL=http://localhost:3000/api/v1
```

### 3. Start the database

From this folder:
```bash
docker compose -f docker.compose.yaml up -d
```

### 4. Install dependencies (first time only)

From the `ecommerce-microservices` workspace root:
```bash
pnpm install
```

### 5. Run Prisma migrations

From this folder:
```bash
pnpm prisma:migrate
```

### 6. Start the service

From this folder:
```bash
pnpm dev
```

The service will be available (through the API Gateway) at:
- `GET    http://localhost:3000/api/v1/wishlist`
- `POST   http://localhost:3000/api/v1/wishlist`
- `DELETE http://localhost:3000/api/v1/wishlist/:productId`

Swagger docs (if enabled) are available at:
- `http://localhost:3005/api-docs`
