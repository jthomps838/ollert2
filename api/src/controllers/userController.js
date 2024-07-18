class UserController {
    static async getUsers(req, res, next) {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    static async createUser(req, res, next) {
        try {
            const { name, email } = req.body;
            const user = await prisma.user.create({
                data: { name, email },
            });
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
