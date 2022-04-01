import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const getUserController = async (req: Request, res: Response) => {
    const users: IUser[] = await new UserRepository().findUsers()

    const listUsersWithoutPass: IUser[] = JSON.parse(
        JSON.stringify(users)
    );

    listUsersWithoutPass.forEach((usr) => delete usr.password);

    return res.status(200).json(listUsersWithoutPass)
}

export default getUserController