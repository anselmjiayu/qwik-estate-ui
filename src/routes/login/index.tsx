import { component$, useContext, useContextProvider, useSignal, $ } from "@builder.io/qwik";
import { routeAction$, zod$, z, Form, Link, useNavigate } from "@builder.io/qwik-city";
import Bg from '~/assets/bg.png?jsx';
import './index.scss';
import { cookieConfig, loginAction as loginController } from "~/controller/auth";
import { UserContext } from "~/state";
import { IUserInfo } from "~/types/types";

export const useLogin = routeAction$(
    async (data, { fail, cookie }) => {
        const login = await loginController(data);
        if (!login) return fail(401, { message: "Incorrect username or password" });
        cookie.set("token", login.token, cookieConfig);
        const {password, ...userInfo} = login.user;
        return userInfo;
    },
    zod$({
        username: z.string(),
        password: z.string(),
    }),
);

export default component$(() => {

  const loginAction = useLogin();
    const nav = useNavigate();
    const userState = useContext(UserContext);
  return (
    <section class="login">
          <div class="formContainer">
      <h1>Log In </h1>
      <Form action={loginAction}
                  onSubmitCompleted$={() => {
                      if (loginAction.value && loginAction.value?.failed !== true)
                          {
                              const id = loginAction.value.id;
                      userState.value = loginAction.value;
                          nav(`/profile/${id}`);
                   }}}>
        <label>
          Name
         <input name="username" required minLength={3} maxLength={20} value={loginAction.formData?.get("username")} />
        </label>
                  <label>
        Password
          <input name="password" type="password" required
                 value={loginAction.formData?.get("password")} />
        </label>
                  {/* // Source code at d.ts has really good documentation */}
        <button type="submit" disabled={ loginAction.isRunning }>Log In</button>
      </Form>
              {loginAction.value?.failed && (
                  <div>
                      <span class="error">Incorrect username or password</span>
                  </div>
              )}
              {loginAction.value && loginAction.value?.failed !== true && (
                  <div>
                      <span>Login Success!</span>
                  </div>
              )}
      <Link href="/register">Register</Link>
          </div>
          <div class="imgContainer">
              <Bg alt="A collage of modern buildings arranged with geometrical shapes on a light orange background."/>
          </div>
    </section>
  );
});
