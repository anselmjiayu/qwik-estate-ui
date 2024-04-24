import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z, Form, Link } from "@builder.io/qwik-city";
import Bg from '~/assets/bg.png?jsx';
import './index.scss';
import { loginAction as loginController } from "~/controller/auth";

export const useLogin = routeAction$(
  async (data, {fail, cookie}) => {
    const login = await loginController(data);
    if (!login) return fail(401, {message: "Incorrect username or password"});
    cookie.set("token", login.token);
    return login.user;
  },
    zod$({
    username: z.string(),
      password: z.string(),
  }),
);

export default component$(() => {
  const loginAction = useLogin();
  return (
    <section class="login">
          <div class="formContainer">
      <h1>Log In </h1>
      <Form action={loginAction}>
        <label>
          Name
         <input name="username" value={loginAction.formData?.get("username")} />
        </label>
                  <label>
                      Email
                      <input name="email" value={loginAction.formData?.get("email")} />
                  </label>
                  <label>
        Password
          <input name="password" type="password" value={loginAction.formData?.get("password")} />
        </label>
        <button type="submit">Log In</button>
      </Form>
              {loginAction.value?.failed && (
                  <div>
                      <h2>Incorrect username or password</h2>
                  </div>
              )}
              {loginAction.value && loginAction.value?.failed !== true && (
                  <div>
                      <h2>Login Success!</h2>
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
