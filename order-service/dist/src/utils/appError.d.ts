export declare class AppError extends Error {
    statusCode: number;
    errors: Record<string, any>;
    constructor(message: string, statusCode: number, errors?: Record<string, any>);
}
//# sourceMappingURL=appError.d.ts.map