import { RequestHandler } from "@builder.io/qwik-city";
import { register } from "~/controller/auth";

export const onPost: RequestHandler = register;
