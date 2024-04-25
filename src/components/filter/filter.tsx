import { component$ } from "@builder.io/qwik";
import SearchImg from '~/assets/search.png?jsx';
import './filter.scss';

export const Filter = component$(()=> {
    return (
        <div class="filter">
            <h3>Search results for <b>London</b></h3>
            <div class="top">
                <div class="item">
                    <label for="city">Location</label>
                    <input id="city" name="city" type="text" placeholder="City Location" />
                </div>
            </div>
            <div class="bottom">

                <div class="item">
                    <label for="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div class="item">
                    <label for="property">Property</label>
                    <select id="property" name="property">
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div class="item">
                    <label for="minPrice">Min Price</label>
                    <input id="minPrice" name="minPrice" type="number" placeholder="any" />
                </div>
                <div class="item">
                    <label for="maxPrice">Max Price</label>
                    <input id="maxPrice" name="maxPrice" type="number" placeholder="any" />
                </div>
                <div class="item">
                    <label for="bedroom">Bedroom</label>
                    <input id="bedroom" name="bedroom" type="text" placeholder="any" />
                </div>
                <button>
                    <SearchImg alt="" />
                </button>
            </div>
        </div>
    )
})
