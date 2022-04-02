import { NextFunction, Request, Response } from 'express';

import { IUser, UserRepository } from '../repositories';

const checkSameEmail = async (req: Request, res: Response, next: NextFunction) => {
    const users: IUser[] = await new UserRepository().findUsers()

    const { email } = req.body;

    const findUser = users.find((user) => user.email === email);

    if (findUser) {
        res.status(400).json({ message: "E-mail already registered" });
    } else next();
};

export default checkSameEmail;