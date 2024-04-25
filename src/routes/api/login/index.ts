import { RequestHandler } from "@builder.io/qwik-city";
import { login } from "~/controller/auth";

export const onPost: RequestHandler = login;
