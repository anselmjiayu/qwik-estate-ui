import { component$, useSignal } from '@builder.io/qwik'
import './chat.scss'
const user_img_link = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

export const Chat = component$(() => {
    const chat = useSignal(3 as null | number );
    return (
        <div class="chat">
            <div class="messages">
                <h2>Messages</h2>
                <div class="message">
                    <img alt="" src={user_img_link} />
                    <span>John Doe</span>
                    <p>Lorem ipsum, dolor sit amet consectetur... </p>
                </div>
                <div class="message">
                    <img alt="" src={user_img_link} />
                    <span>John Doe</span>
                    <p>Lorem ipsum, dolor sit amet consectetur... </p>
                </div>
                <div class="message">
                    <img alt="" src={user_img_link} />
                    <span>John Doe</span>
                    <p>Lorem ipsum, dolor sit amet consectetur... </p>
                </div>
                <div class="message">
                    <img alt="" src={user_img_link} />
                    <span>John Doe</span>
                    <p>Lorem ipsum, dolor sit amet consectetur... </p>
                </div>
                <div class="message">
                            <img alt="" src={user_img_link} />
                    <span>John Doe</span>
                    <p>Lorem ipsum, dolor sit amet consectetur... </p>
                </div>
            </div>

            {chat.value !== null && (
            <div class="chatBox">
                <div class="top">
                    <div class="user">
                            <img alt="" src={user_img_link} />
                    <span>John Doe</span>
                    </div>
                        <div class="close" onClick$={() => { chat.value = null }}>X</div>
                </div>
                <div class="center">
                    <div class="chatMessage">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage own">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage own">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage own">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div class="chatMessage own">
                        <p>Iaculis at erat pellentesque adipiscing.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div class="bottom">
                    <textarea >

                    </textarea>
                    <button>Send</button>
                </div>
            </div>
            )}
        </div>
    )
})
