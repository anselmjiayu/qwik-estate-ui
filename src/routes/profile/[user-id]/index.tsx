import { component$, useContext, useContextProvider } from "@builder.io/qwik";
import { List } from "~/components/list/list";
import './index.scss'
import { Chat } from "~/components/chat/chat";
import { UserContext } from "~/state";
import { RequestHandler, routeAction$, useNavigate } from "@builder.io/qwik-city";
import { loggedInHandler } from "~/controller/auth";

const user_img_link = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

export const onRequest: RequestHandler = loggedInHandler;
export default component$(() => {

    const nav = useNavigate();
    const userInfo = useContext(UserContext);
    const logoutAction = routeAction$((_data, { cookie }) => {
        cookie.delete("token");
        userInfo.value = null;
    })
    const logout = logoutAction();
    return (
        <div class="profilePage">
            <div class="details">
                <div class="container">
                    <div class="title">
                        <h2>User Information</h2>
                        <button>Update Profile</button>
                    </div>
                    <div class="info">
                        <span>Avatar:
                            {" "}
                            <img alt="" src={user_img_link} />
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>Email: <b>john@example.com</b></span>
                        <button onClick$={async () => {
                            await logout.submit();
                            nav('/');
                                         }}>Log out</button>
                    </div>
                    <div class="title">
                        <h3>My List</h3>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div class="title">
                        <h3>Saved List</h3>
                    </div>
                </div>
            </div>
            <div class="chatContainer">
                <div class="container">
                    <Chat />
                </div>
            </div>
        </div>
    )
})
