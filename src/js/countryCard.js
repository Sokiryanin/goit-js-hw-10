import { refs } from './refs';

export default function countyCardMarkup({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  const lang = Object.values(languages);
  const card = `
    <div class="wrap">
      <img src="${flags.svg}" class="country-flag" alt="Flag" width="100">
      <p class="country-name__large">${name.common}</p>
    </div>
    <ul class="card-list">
      <li class="card-item"><b>Capital</b>: ${capital}</li>
      <li class="card-item"><b>Population</b>: ${population}</li>
      <li class="card-item"><b>Languages</b>: ${lang}</li>
    </ul>`;

  refs.div.insertAdjacentHTML('beforeend', card);
}
