import { words } from './i18n.js'

export const IMG_FOLDER = 'https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images';

export function get_src(sid) {
	return `${IMG_FOLDER}/student/collection/${sid}.webp`;
}

export function get_role_icon_src(student) {
	return `${IMG_FOLDER}/ui/Role_${student.TacticRole}.png`;
}

export function _(str = '') {
	return words[str] || str;
}
