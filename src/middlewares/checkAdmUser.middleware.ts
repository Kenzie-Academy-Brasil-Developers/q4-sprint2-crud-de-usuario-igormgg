import { NextFunction, Request, Response } from "express";

const checkAdmUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { isAdm } = req.userAuthenticated

        isAdm ? next() : res.status(401).json({ message: "Missing admin permissions" })
    }

    catch(err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export default checkAdmUser