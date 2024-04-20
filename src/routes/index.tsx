import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import './index.scss'
import { SearchBar } from "~/components/searchBar/searchBar";

export default component$(() => {
  return (
      <div class="homePage">
          <div class="textContainer">
              <div class="text-wrapper">
                  <h2>Find Real Estate & Get Your Dream Place</h2>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corporis ea pariatur sequi quam doloribus qui quisquam quis error veniam, possimus excepturi facilis, nam rem consectetur quibusdam iusto enim deleniti?
                  </p>
                  <SearchBar />
              </div>
          </div>
          <div class="imgContainer">
              <img alt="A collage of modern buildings arranged with geometrical shapes on a light orange background." src="/bg.png" />
          </div>
      </div>
  );
});

export const head: DocumentHead = {
    title: "Qwik Real Estate UI",
  meta: [
    {
      name: "description",
          content: "Buy, Sell, and Rent Properties",
    },
  ],
};
