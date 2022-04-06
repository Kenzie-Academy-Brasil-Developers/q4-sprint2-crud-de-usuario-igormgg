import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const updateUserController = async (req: Request, res: Response) => {
    const { userAuthenticated } = req

    const { isAdm } = req.userAuthenticated

    const { uuid } = req.params

    const data = req.body

    delete data.isAdm

    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10)
    }

    data.updatedOn = new Date()

    const users: IUser[] = await new UserRepository().findUsers()

    const findUser = users.find((usr) => uuid === usr.uuid)

    if (!findUser) {
        return res.status(400).json({ message: "User not found" })
    }

    if (isAdm || uuid === userAuthenticated.uuid) {
        await new UserRepository().patchUser(uuid, data)
        
        const user: IUser = await new UserRepository().findOneUser(uuid)

        const userWithoutPass: IUser = JSON.parse(
            JSON.stringify(user)
        );
    
        delete userWithoutPass.password
    
        return res.status(200).json(userWithoutPass)
    } else {
        return res.status(401).json({'message': "Missing admin permissions"})
    }

}

export default updateUserController