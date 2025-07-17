class ExpressError extends Error{
    constructor(statusCode, meassage){
        super();
        this.statusCode = statusCode;
        this.message = meassage;
    }
}

module.exports = ExpressError;