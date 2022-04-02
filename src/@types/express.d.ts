import { IUser } from "../repositories";

declare global {
    namespace Express {
      interface Request {
        userAuthenticated?: IUser;
      }
    }
  }