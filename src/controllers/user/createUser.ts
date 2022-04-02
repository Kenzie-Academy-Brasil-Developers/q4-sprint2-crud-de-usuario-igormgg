import bcrypt from 'bcryptjs';
import { Request, Response } from "express"

import { IUser, UserRepository } from "../../repositories"  

const createUserController = async (req: Request, res: Response) => {
    const data = req.body

    const hashedPass = await bcrypt.hash(data.password, 10)

    const userToRegister: IUser = {
        uuid: data.uuid,
        name: data.name,
        email: data.email,
        password: hashedPass,
        isAdm: data.isAdm
    }

    
    const user: IUser = await new UserRepository().saveUser(userToRegister)
    
    const userWithoutPass: IUser = JSON.parse(
        JSON.stringify(user)
    );

    delete userWithoutPass.password

    return res.status(201).json(userWithoutPass)
}

export default createUserController