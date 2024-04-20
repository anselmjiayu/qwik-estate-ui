import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import './layout.scss';
import { Navbar } from '../components/navbar/navbar';

export default component$(() => {
  return (
      <div class="wrapper">
          <Navbar />
      </div>
  );
});

export const head: DocumentHead = {
    title: "Lama Real Estate UI",
  meta: [
    {
      name: "description",
          content: "Buy, Sell and Rent Properties",
    },
  ],
};
