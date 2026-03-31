type LogMeta = Record<string, unknown>;

const write = (level: "info" | "warn" | "error", message: unknown, meta?: LogMeta) => {
  const payload = {
    level,
    timestamp: new Date().toISOString(),
    message,
    ...(meta ? { meta } : {}),
  };

  const line = JSON.stringify(payload);
  if (level === "error") {
    console.error(line);
    return;
  }

  if (level === "warn") {
    console.warn(line);
    return;
  }

  console.log(line);
};

export const logger = {
  info: (message: unknown, meta?: LogMeta) => write("info", message, meta),
  warn: (message: unknown, meta?: LogMeta) => write("warn", message, meta),
  error: (message: unknown, meta?: LogMeta) => write("error", message, meta),
};