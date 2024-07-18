const errorHandling = (err, _, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal server error',
        },
    });
};

export default errorHandling;
