import { ILogin, IRegister } from "./types";

export function isLoginProps (arg: any): arg is ILogin {
    return (arg satisfies ILogin && typeof arg.username === "string")
}
export function isRegisterProps(arg: any): arg is IRegister {
    return (arg satisfies IRegister && arg.password.length > 0)
}

