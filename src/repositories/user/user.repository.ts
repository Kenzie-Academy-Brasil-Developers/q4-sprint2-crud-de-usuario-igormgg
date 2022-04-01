import { Repository, getRepository } from "typeorm";
import { User } from '../../entities/User'
import { IUser, IUserRepo } from "./interface";

class UserRepository implements IUserRepo {
    private ormRepository: Repository<User>

    constructor() {
        this.ormRepository = getRepository(User)
    }

    saveUser = async (user: IUser) => await this.ormRepository.save(user)
    findUsers: any = async () => await this.ormRepository.find()
    findOneUser = async (uuid: string) => await this.ormRepository.findOne(uuid)
    delUser = async (uuid: string) => await this.ormRepository.delete(uuid)
    patchUser = async (uuid: string, data) => await this.ormRepository.update(uuid, data)
   
}

export {UserRepository, IUser}