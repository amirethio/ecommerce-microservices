# Upload Service

This service generates presigned upload URLs and public URLs for file uploads (MinIO) used by the e‑commerce platform.

## How to Run (Development)

### 1. Prerequisites
- Node.js and pnpm installed
- Docker running (for the local Postgres and MinIO containers)
- API Gateway running on `http://localhost:3000` (dev)

### 2. Configure environment variables

Create a `.env` file in this folder based on `.env.example`:

Required keys:
- `PORT` (default: `3006`)
- `NODE_ENV` (usually `development`)
- `JWT_ACCESS_SECRET`
- `GATEWAY_SECRET` (must match the gateway value)
- `DATABASE_URL` (PostgreSQL URL for the upload DB)
- `MINIO_ENDPOINT`
- `MINIO_PORT`
- `MINIO_USE_SSL`
- `MINIO_ACCESS_KEY`
- `MINIO_SECRET_KEY`
- `MINIO_BUCKET_NAME`

Example (for local dev):
```env
PORT=3006
NODE_ENV=development
JWT_ACCESS_SECRET=your-jwt-access-secret
GATEWAY_SECRET=super-secret-gateway-key
DATABASE_URL=postgresql://postgres:postgres@localhost:5435/upload

MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_USE_SSL=false
MINIO_ACCESS_KEY=minioaccesskey
MINIO_SECRET_KEY=miniosecretkey
MINIO_BUCKET_NAME=ecommerce-uploads
```

### 3. Start the database (and MinIO if defined in compose)

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
- `POST http://localhost:3000/api/v1/upload`

Swagger docs (if enabled) are available at:
- `http://localhost:3006/api-docs`
