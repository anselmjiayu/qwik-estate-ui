import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z, Form, Link } from "@builder.io/qwik-city";
import Bg from '~/assets/bg.png?jsx';
import './index.scss';
import { registerAction } from "~/controller/auth";

export const useCreateUser = routeAction$(
  async (data, {fail}) => {
    const user = await registerAction(data);
    if (!user) return fail(500, {message: "user could not be created"});
    return user;
  },
    zod$({
    username: z.string(),
    email: z.string().email(),
      password: z.string(),
  }),
);

export default component$(() => {
  const createUserAction = useCreateUser();
  return (
    <section class="register">
          <div class="formContainer">
      <h1>Create An Account</h1>
      <Form action={createUserAction}>
        <label>
          Name
          <input name="username" value={createUserAction.formData?.get("username")} />
        </label>
                  <label>
                      Email
                      <input name="email" value={createUserAction.formData?.get("email")} />
                  </label>
                  <label>
        Password
          <input name="password" type="password" value={createUserAction.formData?.get("password")} />
        </label>
        <button type="submit">Create</button>
      </Form>
              {createUserAction.value?.failed && (
                  <div>
                      <h2>Something went wrong!</h2>
                  </div>
              )}
              {createUserAction.value?.failed !== true  && (
        <div>
          <h2>User created successfully!</h2>
        </div>
      )}
      <Link href="/login">Do you have an account?</Link>
          </div>
          <div class="imgContainer">
              <Bg alt="A collage of modern buildings arranged with geometrical shapes on a light orange background."/>
          </div>
    </section>
  );
});
