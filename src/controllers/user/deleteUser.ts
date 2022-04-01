import { Request, Response } from "express";
import { UserRepository } from "../../repositories";

const deleteUserController = async (req: Request, res: Response) => {
    const { uuid } = req.params

    await new UserRepository().delUser(uuid)

    return res.status(204).json({'message': 'User deleted with success'})
}

export default deleteUserController