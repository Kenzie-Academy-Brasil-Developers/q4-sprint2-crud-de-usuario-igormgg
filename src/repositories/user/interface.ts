interface IUser {
    uuid: string;
    name: string;
    email: string;
    password?: string;
    isAdm: boolean;
    createdOn: any;
    updatedOn: any;
}

  interface IUserRepo {
    saveUser: (user: IUser) => Promise<IUser>;
    findUsers: () => Promise<IUser>[];
}

export { IUser, IUserRepo }