class apiError extends Error {
    constructor (statusCode = 500, message = "Something went wrong ...", errors = [], stack = "") {
        super(message);
        this.errors = errors;
        this.data = null;
        this.statusCode = statusCode;
        this.success = false;
        
         if(stack) {
        this.stack = stack;
        Error.captureStackTrace(this, this.constructor);
    }

    } 
}

export { apiError };
