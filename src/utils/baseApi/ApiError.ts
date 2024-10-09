class ApiError extends Error {
    statusCode: number;
    message: string;

    constructor(statusCode: number, message: string) {
        super(message); // Call the parent constructor (Error)
        this.statusCode = statusCode;
        this.message = message;
    }
}

export default ApiError