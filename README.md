# E-Commerce Microservices Architecture

> **Refactored from:** [`ski-p3r/ecommerce-backend`](https://github.com/ski-p3r/ecommerce-backend) — a Node.js monolithic e-commerce backend  
> **Refactored to:** A fully decomposed microservices architecture with independent services, isolated databases, and a centralized API Gateway  
> **Team project** 

---

##  Overview

This project is a **monolith-to-microservices refactor** of a full e-commerce backend system. The original codebase was a single Node.js application handling all concerns — users, products, orders, payments, reviews, and more — in one shared codebase with one shared database.

We decomposed it into **11 independent services**, each owning its own logic, its own PostgreSQL database, and running on its own port. All client requests flow through a single **API Gateway** which routes them to the correct service using [`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware).

---

##  Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                      CLIENT / UI                                                                    │
└──────────────────────────────────────────────────────┬──────────────────────────────────────────────────────────────────────────────┘
                                                       │
                                                       │ All external requests
                                                       ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                 API GATEWAY (Port: 3000)                                                             │
│                                                http-proxy-middleware                                                                 │
└───────────────┬───────────────────────┬──────────────────────────────┬────────────────────────────┬───────────────────────────┬──────┘
                │                       │                              │                            │                           │
                ▼                       ▼                              ▼                            ▼                           ▼

┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐        ┌────────────────────┐
│     User Service   │─────▶│  Product Service   │─────▶│   Order Service    │─────▶│    Cart Service    │─────▶  │  Review Service    │
│        :3001       │◀─────│      :3002         │◀─────│      :3003         │◀─────│      :3004         │◀────── │      :3005         │
└──────────┬─────────┘      └────────┬───────────┘      └────────┬───────────┘      └────────┬───────────┘        └────────┬───────────┘
           │                             │                             │                             │                     │
           ▼                             ▼                             ▼                             ▼                     ▼

┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐    ┌─────────────────────┐
│     PostgreSQL      │      │     PostgreSQL      │      │    PostgreSQL       │      │    PostgreSQL       │    │    PostgreSQL       │
│       users_db      │      │     products_db     │      │     orders_db       │      │      cart_db        │    │     reviews_db      │
└─────────────────────┘      └─────────────────────┘      └─────────────────────┘      └─────────────────────┘    └─────────────────────┘


┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                      Payment, Mail, Notification, Auth, and Coupon Services                                               │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

```

**Key principle:** Each service is fully isolated. No service touches another service's database directly. Cross-service communication happens service to service and securly through http middeware.

---

## Services

| Service | Port | Database | Responsibility |
|---|---|---|---|
| `api-gateway` | 3000 | — | Routes all incoming requests to the correct service based on URL prefix |
| `user-service` | 3001 | PostgreSQL | Registration, login, profile management, JWT authentication |
| `product-service` | 3002 | PostgreSQL | Product CRUD, categories, search, inventory |
| `order-service` | 3003 | PostgreSQL | Order creation, status tracking, order history |
| `cart-service` | 3004 | PostgreSQL | Add/remove items, cart persistence, quantity management |
| `review-service` | 3005 | PostgreSQL | Product reviews, ratings, moderation |
| `payment-service` | 3006 | PostgreSQL | Payment processing, transaction records |
| `mail-service` | 3007 | PostgreSQL | Transactional emails — order confirmation, reset password |
| `notification-service` | 3008 | PostgreSQL | Push/in-app notifications |
| `auth-service` | 3009 | PostgreSQL | Token validation, refresh tokens, session management |
| `coupon-service` | 3010 | PostgreSQL | Discount codes, coupon validation, usage limits |


---

## How the API Gateway Works

The gateway is the **single entry point** for all client requests. It uses `http-proxy-middleware` to inspect the URL path and forward the request to the appropriate service:

```typescript
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";

// Example routing rules
app.use("/api/users",    createProxyMiddleware({ target: "http://user-service:3001",    changeOrigin: true, on: { proxyReq: fixRequestBody } }));
app.use("/api/products", createProxyMiddleware({ target: "http://product-service:3002", changeOrigin: true, on: { proxyReq: fixRequestBody } }));
app.use("/api/orders",   createProxyMiddleware({ target: "http://order-service:3003",   changeOrigin: true, on: { proxyReq: fixRequestBody } }));
app.use("/api/cart",     createProxyMiddleware({ target: "http://cart-service:3004",    changeOrigin: true, on: { proxyReq: fixRequestBody } }));
app.use("/api/reviews",  createProxyMiddleware({ target: "http://review-service:3005",  changeOrigin: true, on: { proxyReq: fixRequestBody } }));
```

The gateway does **not** contain business logic — it only routes, applies middleware (rate limiting, auth headers), and forwards.

---



This will spin up:
- 11 service containers (Node.js + TypeScript)
- 11 isolated PostgreSQL database containers
- All connected on a shared Docker network

### Individual service structure

```
product-service/
├── docker.compose.yaml
├── Dockerfile
├── jest.config.cjs
├── logs
├── package.json
├── package-lock.json
├── prisma
├── prisma.config.ts
├── src
└── tsconfig.json
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Runtime | Node.js |
| Framework | Express.js |
| Database | PostgreSQL (one instance per service) |
| ORM | Prisma / TypeORM |
| Gateway | http-proxy-middleware |
| Containerization | Docker + Docker Compose |
| Auth | JWT (access + refresh tokens) |

---

## Monolith vs Microservices — What Changed

| Concern | Monolith (original) | Microservices (this repo) |
|---|---|---|
| Codebase | Single repo, single entry point | 11 independent services |
| Database | One shared PostgreSQL database | Each service owns its PostgreSQL DB |
| Deployment | Deploy everything together | Each service deploys independently |
| Scaling | Scale the entire app | Scale only the bottleneck service |
| Failure isolation | One crash can affect everything | Failures are contained per service |
| Team ownership | Everyone touches everything | Each service can be owned by one person |

### Why this refactor is non-trivial

The hardest part of decomposing a monolith is **database separation**. In the original system, services were implicitly coupled through shared tables — a product query might join directly against the users table, for example. Pulling these apart required:

1. **Identifying bounded contexts** — deciding exactly where one service's responsibility ends and another's begins
2. **Eliminating shared database joins** — replacing them with inter-service REST calls through the gateway
3. **Duplicating necessary data** — e.g. storing a `userId` snapshot in the order service rather than joining against the users DB
4. **Propagating JWT auth** — ensuring the gateway forwards auth headers and each service can independently validate tokens without calling the auth service on every request

---

## Repository Structure

```
ecommerce-microservices/
├── analytics-service
├── api-gateway
├── cart-service
├── coupon-service
├── review-service
├── upload-service
├── inventory-service
├── order-service
├── product-service
├── user-service
├── wishlist-service
├── DEV_GUIDE.md
├── package.json
├── pnpm-lock.yaml
└── README.md

```

---

## Credits & Attribution

| | |
|---|---|
| **Original monolith** | [`ski-p3r/ecommerce-backend`](https://github.com/ski-p3r/ecommerce-backend) — the Node.js e-commerce backend this project was refactored from |
| **Refactor team** | Group project at CSEC-ASTU, Adama Science & Technology University |
---
