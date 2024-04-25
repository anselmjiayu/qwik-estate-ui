import { createContextId, useContext, type Signal } from "@builder.io/qwik";
import { type IUserInfo } from "./types/types";

export const UserContext = createContextId<Signal<IUserInfo>>('user');
