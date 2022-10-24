import { refs } from './refs';

export default function createMarkup({ name, flags }) {
  const markup = `
  <li class="country">
    <img src="${flags.svg}" class="country-flag" alt="Flag" width="40">
    <p class="country-name__small">${name.common}</p>
  </li>`;

  refs.list.insertAdjacentHTML('beforeend', markup);
}
