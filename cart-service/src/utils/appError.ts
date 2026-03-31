export class AppError extends Error {
  public statusCode: number;
  public errors: Record<string, any>;

  constructor(
    message: string,
    statusCode: number,
    errors: Record<string, any> = {},
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errors = errors;
    this.name = "AppError";

    Error.captureStackTrace(this, this.constructor);
  }
}