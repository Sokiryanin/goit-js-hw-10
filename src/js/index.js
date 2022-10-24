import '../css/styles.css';
import { refs } from './refs';
import fetchCountries from './fetchCountries';
import createMarkup from './createMarkup';
import clearMarkup from './clearMarkup';
import countyCardMarkup from './countryCard';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(getInputValue, DEBOUNCE_DELAY));

function getInputValue(event) {
  if (event.target.value === '') {
    clearMarkup();
    return;
  }
  fetchCountries(event.target.value.trim().toLowerCase())
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        clearMarkup();
        return;
      } else if (data.length >= 2 && data.length <= 10) {
        clearMarkup();
        data.forEach(country => createMarkup(country));
        return;
      }
      clearMarkup();
      countyCardMarkup(...data);
    })
    .catch(() => {
      clearMarkup();
      Notify.failure('Oops, there is no country with that name');
    });
}
