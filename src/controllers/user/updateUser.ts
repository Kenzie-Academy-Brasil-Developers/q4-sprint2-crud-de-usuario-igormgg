import { Request, Response } from "express";
import { UserRepository } from "../../repositories";

const updateUserController = async (req: Request, res: Response) => {
    const { uuid } = req.params
    const data = req.body

    delete data.isAdm

    data.updatedOn = new Date()

    await new UserRepository().patchUser(uuid, data)
    
    const user = await new UserRepository().findOneUser(uuid)

    return res.status(200).json(user)
}

export default updateUserController