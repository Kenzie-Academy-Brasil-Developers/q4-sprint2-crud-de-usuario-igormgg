import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { jwtSecret, jwtTokenExpiration } from '../../configs';
import { IUser, UserRepository } from '../../repositories';

const loginUserController = async (req: Request, res: Response) => {
    const data = req.body

    const users: IUser[] = await new UserRepository().findUsers()

    const user: IUser | undefined = users.find(
        (usr) => usr.email === data.email
    );

    if (!user) {
        return res.status(401).json({ message: "Wrong email/password" });
    }

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) {
        return res.status(401).json({ message: "Wrong email/password" });
    }

    const token = jwt.sign(
        {
          email: data.email,
          password: user.password,
        },
        jwtSecret,
        { expiresIn: jwtTokenExpiration }
    );

    return res.status(200).json({ accessToken: token });
}

export default loginUserController