export class AppError extends Error {
    constructor(message, statusCode, errors = {}) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=appError.js.map