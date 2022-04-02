import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const deleteUserController = async (req: Request, res: Response) => {
    const { userAuthenticated } = req

    const { isAdm } = req.userAuthenticated

    const { uuid } = req.params

    const users: IUser[] = await new UserRepository().findUsers()

    const findUser = users.find((usr) => uuid === usr.uuid)

    if (!findUser) {
        return res.status(400).json({ message: "User not found" })
    }

    if (isAdm || uuid === userAuthenticated.uuid) {
        await new UserRepository().delUser(uuid)

        return res.status(200).json({'message': 'User deleted with success'})
    } else {
        return res.status(401).json({'message': "Missing admin permissions"})
    }
}

export default deleteUserController