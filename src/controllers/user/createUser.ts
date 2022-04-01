import bcrypt from 'bcryptjs';
import { Request, Response } from "express"

import { IUser, UserRepository } from "../../repositories"  

const createUserController = async (req: Request, res: Response) => {
    const data = req.body

    const hashedPass = await bcrypt.hash(req.body.password, 10)

    const userToRegister: IUser = {
        ...data,
        password: hashedPass
    }

    
    const user: IUser = await new UserRepository().saveUser(userToRegister)
    
    const userWithoutPass: IUser = JSON.parse(
        JSON.stringify(userToRegister)
    );

    delete userWithoutPass.password

    return res.status(201).json(userWithoutPass)
}

export default createUserController