import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";
import { createProxyMiddleware, fixRequestBody } from "http-proxy-middleware";
import { ClientRequest, IncomingMessage, ServerResponse } from "node:http";
import "dotenv/config";

const app: express.Application = express();

// Set security HTTP headers
app.use(helmet());

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Compress response bodies
app.use(compression());

// rate limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
	standardHeaders: true,
	legacyHeaders: false,
});

app.use("/", limiter);

const routes = {
	"/auth": process.env.AUTH_SERVICE_URL || "http://localhost:3001",
	"/products": process.env.PRODUCT_SERVICE_URL || "http://localhost:3002",
	"/cart": process.env.CART_SERVICE_URL || "http://localhost:3003",
	"/orders": process.env.ORDER_SERVICE_URL || "http://localhost:3004",
};

const GATEWAY_SECRET = process.env.GATEWAY_SECRET || "super-secret-gateway-key";

// Security middleware to add secret header to all proxy requests
const addGatewaySecret = (
	proxyReq: ClientRequest,
	_req: IncomingMessage,
	_res: ServerResponse<IncomingMessage>,
) => {
	proxyReq.setHeader("x-gateway-secret", GATEWAY_SECRET);
};

app.get("/", (req, res) => {
	res.send("API Gateway is running on port 3000");
});

// Setup Proxies
Object.entries(routes).forEach(([path, target]) => {
	app.use(
		`/api/v1${path}`,
		createProxyMiddleware({
			target,
			changeOrigin: true,
			pathRewrite: {
				[`^/api/v1${path}`]: "",
			},
			on: {
				proxyReq: (proxyReq, req, res) => {
					addGatewaySecret(proxyReq, req, res);
					fixRequestBody(proxyReq, req);
				},
			},
		}),
	);
});

export default app;
