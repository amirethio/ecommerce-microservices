export class AppError extends Error {
	statusCode: number;
	errors: Record<string, unknown>;

	constructor(message: string, statusCode: number, errors: Record<string, unknown> = {}) {
		super(message);
		this.statusCode = statusCode;
		this.errors = errors;
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}