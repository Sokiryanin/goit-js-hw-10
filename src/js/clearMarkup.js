import { refs } from './refs';

export default function clearMarkup() {
  refs.list.innerHTML = '';
  refs.div.innerHTML = '';
}
