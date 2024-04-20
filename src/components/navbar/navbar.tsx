import { component$, useSignal } from "@builder.io/qwik";
import './navbar.scss';

export const Navbar = component$(() => {
    const open = useSignal(false);
    return (
        <div class="nav-wrapper">
            {/* should the class name be on the nav or the ul? I don't have a good reason for either. */}
            <nav class="left">
                <ul>
                    <li class="logo">
                        <a href="/">
                            <img alt="logo of QwikEstate." src="/logo.png" />
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
                    <li>
                        <a href="/">Sign In</a>
                    </li>
                    <li class="register">
                        <a href="/">Sign Up</a>
                    </li>
                </ul>
                    {/* Probably bad for accessibility?? Oh well the refactor will come when we cross that river. Maybe separate into another component too */}
                    <div class="menuIcon">
                    <img src="/menu.png" alt="a menu icon." onClick$={() => {open.value = !open.value}} />
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
