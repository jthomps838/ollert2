const ensureAuthenticated = (req, res, next) => {
    if (!req?.session?.user) {
        res.statusCode = 401;
        const error = new Error('Unauthorized Request');
        throw error;
    }
    next();
};

export default ensureAuthenticated;
