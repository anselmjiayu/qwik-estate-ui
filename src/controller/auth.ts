import { server$, type RequestHandler } from "@builder.io/qwik-city";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { isLoginProps, isRegisterProps } from "~/types/type-guards";
import { prisma } from "~/prismaclient";
import { ILogin, IRegister } from "~/types/types";

export const send400: RequestHandler = async (req, message = "missing info") => {
    req.json(400, { message });
}
export const send401: RequestHandler = async (req, message = "User with credentials not found") => {
    req.json(401, { message })
}
export const send500: RequestHandler = async (req, message = "Something went wrong!") => {
    req.json(500, { message })
}

const DURATION_WEEK = 1000 * 60 * 60 * 24 * 7;

const cookieConfig = {
    httpOnly: true,
    // secure:true,
    maxAge: DURATION_WEEK,
}

// TODO: replace with env.get
// process.env should not be used in qwik; see https://qwik.dev/docs/env-variables/

const secret_key = "very secret";
async function makeToken(id: number) { return jwt.sign({ id }, secret_key, { expiresIn: DURATION_WEEK }) }

export const registerAction = async (form: IRegister) => {
    try {
        const hashedPassword = await bcrypt.hash(form.password, 8)
            const user = await prisma.user.findUnique({
                where: { username: form.username }
            })
        if (user) return null;

        const newUser = await prisma.user.create({
            data: {
                username: form.username,
                email: form.email,
                password: hashedPassword,
            },
        })
        return newUser;
    } catch(err) {
        return null;
    }
}

export const register: RequestHandler = async (req) => {
    const form = await req.parseBody();

    if (isRegisterProps(form) && form.password) {
        const newUser = registerAction(form);
        if (!newUser) return send500(req);
        req.json(200, newUser);
    } else {
        return send400(req);
    }

}

export const loginAction  = async (form: ILogin) => {
    try {
        // Check if the user exists
        const user = await prisma.user.findUnique({
            where: { username: form.username }
        })
        if (!user) return null;

        // Check of the password is correct
        const passwordIsValid = await bcrypt.compare(form.password, user.password)
        if (!passwordIsValid) return null;
        return {user, token: await makeToken(user.id)}
    } catch (err) {
        console.log(err);
        return null;
    }

}

export const login: RequestHandler = async (req) => {
    const form = await req.parseBody();
    if (isLoginProps(form)) {
        const token = await loginAction(form);
        if (!token) return send401(req);
        req.cookie.set("token", token);
        req.json(200, { message: "Login Success" })
    } else {
        req.json(400, { body: "missing info" });
    }
}
export const logout: RequestHandler = async ({ cookie, json }) => {
    cookie.delete("token");
    json(200, { "message": "Logout Success" });
}

// export class AuthApi {
//     constructor() {}
//     register = register
//     login = login
//     logout = logout
// }
