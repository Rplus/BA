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


// import data_url from '/src/data/students.json?url';
// import data_raw from '/src/data/students.json';
import data_zip from '/src/data/students.zip.json';

export async function get_data() {
	// let _students = await get_raw_data();
	// let _students = await fetch(data_url).then(d => d.json());
	// let _students = raw_data;
	// let _students = unzip(data_zip);
	// console.log(_students);
	return unzip(data_zip);
}

function unzip(source) {
	return source.data.map(stu => {
		return source.props.reduce((all, prop, index) => {
			all[prop] = stu[index];
			return all;
		}, {});
	})
}

async function get_raw_data() {
	let data = {
		tw: await fetch('https://schale.gg/data/tw/students.min.json').then(d => d.json()),
		jp: await fetch('https://schale.gg/data/jp/students.min.json').then(d => d.json()),
	};
	return data.tw.map((i, index) => {
		return {
			Id: i.Id,
			Name_tw: i.Name,
			Name_jp: data.jp[index].Name,
			School: i.School,
			PathName: i.PathName,
			Position: i.Position,
			ArmorType: i.ArmorType,
			SquadType: i.SquadType,
			BulletType: i.BulletType,
			TacticRole: i.TacticRole,
		}
	});
}