# Microservices Setup Guide

This document explains how to create and run a new microservice in this project.

---

##  Steps to Create a New Service

1. Create and enter the service directory:

```
mkdir service-name-service && cd service-name-service
```

2. Initialize the project:

```
npm init -y
```

3. Install development dependencies:

```
npm install -D typescript tsx
```

4. Initialize TypeScript:

```
npx tsc --init
```

5. Update `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "strict": true,
    "outDir": "dist",
    "rootDir": ".",
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "ts-node": {
    "esm": true
  },
  "include": ["src/**/*", "generated/prisma/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

---

## 📁 Recommended Project Structure

```
src/
 ├── app.ts
 ├── server.ts
 ├── routes/
 ├── controllers/
 ├── services/
 ├── utils/
```

---

## 📦 Recommended package.json

```
{
  "name": "api-gateway",
  "version": "1.0.0",
  "description": "User service for E-Commerce API",
  "main": "dist/server.js",
  "scripts": {
    "start": "node dist/server.js",
    "start:prod": "NODE_ENV=production node dist/server.js",
    "dev": "nodemon --exec tsx src/server.ts",
    "build": "tsc",
    "lint": "eslint . --ext .ts",
    "format": "prettier --write \"src/**/*.ts\"",
    "test": "jest",
    "test:watch": "jest --watch",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio",
    "seed": "prisma generate && tsx src/utils/seed.ts"
  },
  "dependencies": {
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "helmet": "^8.1.0"
  },
  "devDependencies": {
    "tsx": "^4.21.0",
    "typescript": "^6.0.2"
  }
}
```

---

## 🌐 Service Ports

* auth/user → 3001
* products → 3002
* cart → 3003
* orders → 3004
* wishlist → 3005
* upload → 3006
* chapa → 3007
* reviews → 3008
* inventory → 3009
* analytics → 3010
* coupons → 3011

---

## How to Setup Prisma Setup

### 1. Install dependencies

```
npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv
```

### 2. Initialize Prisma

```
npx prisma init --output ../generated/prisma
```

### 3. Configure environment variables



```
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

- username: Your PostgreSQL username
- password: Your PostgreSQL password
- localhost:5432: Your PostgreSQL host and port
- mydb: Your database name

### 4. Define your schema

* Each service must define ***its own database schema only***

### 5. Run migration

```
npx prisma migrate dev --name init
```

---

## Contribution Workflow

* Each service should be developed independently
* Follow the structure used in `user-service` and `product-service`
* Create a new branch:

```
feat/service_name
```

* Submit a Pull Request for review

---

## ⚠️ Important Guidelines

* Each service must have:its own database and schema 
* Avoid sharing databases between services
* Use clear contracts between services
