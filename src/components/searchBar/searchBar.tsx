import { component$, useStore, $ } from "@builder.io/qwik";
import './searchBar.scss'
import SearchIcon from '~/assets/search.png?jsx'

const types = ['buy', 'rent'];

export const SearchBar = component$(() => {
    const query = useStore({
        type: "buy",
        location: "",
        minPrice:0,
        maxPrice:0,
    })
    const switchType$ = $((target: typeof types[number]) => {
        query.type = target;
    })
    return (
        <div class="searchBar">
            <div class="type">
                {types.map(t => (
                    <button key={t} onClick$={() => switchType$(t)}
                    class={query.type === t ? 'active' : ""}>{t}</button>
                ))}
            </div>
            <form>
                <input type="text" name="location" placeholder="City" />
                <input type="number" name="minPrice" min={0} max={10_000_000} placeholder="Min Price" />
                <input type="number" name="maxPrice" min={0} max={10_000_000} placeholder="Max Price" />
                <button>
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
})
