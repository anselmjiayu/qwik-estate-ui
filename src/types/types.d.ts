export interface ILogin {
    username: string,
    password: string,
}
export interface IRegister extends ILogin {
    email: string,
}

interface _IUserInfo {
    username: string,
    email: string,
    id: number,
    avatar: string | null,
    createdAt: Date,
}

export type IUserInfo = _IUserInfo | null;
