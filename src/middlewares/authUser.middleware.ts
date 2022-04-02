import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { jwtSecret } from '../configs';
import { IUser, UserRepository } from '../repositories';

const authUser = async (req: Request, res: Response, next: NextFunction) => {
    const users: IUser[] = await new UserRepository().findUsers()

    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Missing authorization headers" });
    }

    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
        if (err) {
        return res.status(401).json({ message: "Missing authorization headers" });
        }

        const userAuthenticated = users.find(
        (usr) => usr.email === decoded.email
        );

        req.userAuthenticated = userAuthenticated;
    });
    
    return next();
};

export default authUser;