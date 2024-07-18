class HealthController {
    static getHealth(req, res, next) {
        try {
            const healthCheckObj = {
                version: '0.0.1',
                status: 'ok',
            };

            res.status(200).json(healthCheckObj);
        } catch (error) {
            next(error);
        }
    }
}

export default HealthController;
