import { words } from './i18n.js'

export const const_strs = {
  IMG_FOLDER: 'https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/',
};

export function _(str = '') {
  return words[str] || str;
}
