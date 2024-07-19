import logger from 'node-color-log';

const errorHandling = (err, _, res, next) => {
    if (err) {
        logger.bold().bgColor('red').log(err?.message);
        res.json({
            error: {
                message: err.message || 'Internal server error',
            },
        });
    } else next();
};

export default errorHandling;
