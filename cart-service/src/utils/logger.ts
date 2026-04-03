import winston from "winston";
import path from "path";

// 1. Get the service name from your package.json or an ENV variable
const SERVICE_NAME = process.env.SERVICE_NAME || "unknown-service";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  return env === "development" ? "debug" : "info";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "blue",
};

winston.addColors(colors);

// 2. Updated Console Format: Added [SERVICE_NAME]
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `[${SERVICE_NAME}] ${info.timestamp} ${info.level}: ${info.message}`
  )
);

// 3. Updated File Format: Added service name to the JSON metadata
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.json()
);

const transports = [
  new winston.transports.Console({
    format: consoleFormat,
  }),
  // Error log file
  new winston.transports.File({
    filename: path.join("logs", `${SERVICE_NAME}-error.log`), // Dynamic filename
    level: "error",
    format: fileFormat,
  }),
  // Combined log file
  new winston.transports.File({
    filename: path.join("logs", `${SERVICE_NAME}-combined.log`), // Dynamic filename
    format: fileFormat,
  }),
];

export const logger = winston.createLogger({
  level: level(),
  levels,
  // 4. Default Metadata: Automatically attaches service name to every log
  defaultMeta: { service: SERVICE_NAME },
  transports,
});