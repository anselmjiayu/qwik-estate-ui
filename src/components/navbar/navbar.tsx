import { component$, useSignal } from "@builder.io/qwik";
import './navbar.scss';
import Logo from '~/assets/logo.png?jsx';
import MenuIcon from '~/assets/menu.png?jsx';
import { Link } from "@builder.io/qwik-city";

const user_img_link ="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

export const Navbar = component$(() => {
    const open = useSignal(false);

    const user = true;
    return (
        <div class="nav-wrapper">
            {/* should the class name be on the nav or the ul? I don't have a good reason for either. */}
            <nav class="left">
                <ul>
                    <li class="logo">
                        <a href="/">
                            {/* <img alt="logo of QwikEstate." src="/logo.png" /> */}
                            <Logo alt="logo of QwikEstate." />
                            <span>QwikEstate</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li>
                        <a href="/">Agents</a>
                    </li>
                </ul>
            </nav>
            <nav class="right">
                <ul>
                    { user ? (
                        <li class="user">
                            <img alt="" src={user_img_link} />
                            <span>John Doe</span>
                            <Link class="profile" href="'/profile/1">
                                <div class="notification">
                                    3
                                </div>
                                <span>Profile</span>
                            </Link>
                        </li>
                    ) :
(                    <>
                    <li>
                        <a href="/">Sign In</a>
                    </li>
                    <li class="register">
                        <a href="/">Sign Up</a>
                    </li>
                    </>
                      )}
                </ul>
                    {/* Probably bad for accessibility?? Oh well the refactor will come when we cross that river. Maybe separate into another component too */}
                <div class="menuIcon" onClick$={() => { open.value = !open.value }}>
                    <MenuIcon alt="a menu icon."  />
                </div>
                <div class={open.value ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>
                </div>
            </nav>
        </div>
    )
})
