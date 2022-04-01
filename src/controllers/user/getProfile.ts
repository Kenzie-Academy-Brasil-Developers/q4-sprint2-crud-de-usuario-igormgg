import { Request, Response } from "express";

const getUserProfileController = async (req: Request, res: Response) => {
    // const { userAuthenticated } = req

    // return res.status(200).json(userAuthenticated)
    return res.status(200).json('rota incompleta')
}

export default getUserProfileController