import { Request, Response } from "express";

const getUserProfileController = async (req: Request, res: Response) => {
    const { password, ...user } = req.userAuthenticated

    return res.status(200).json(user)
}

export default getUserProfileController