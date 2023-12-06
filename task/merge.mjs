import { outputJSON, readJsonFile } from './u.mjs';

let data_tw = readJsonFile('./src/data/students.min.tw.json');
let data_jp = readJsonFile('./src/data/students.min.jp.json');
let locale_tw = readJsonFile('./src/data/locale.min.tw.json');

let props = [
	'Id',
	'School',
	'PathName',
	'Position',
	'ArmorType',
	'SquadType',
	'BulletType',
	'TacticRole',
	'Club',
];

let op = data_jp.map((stu_jp, index) => {
	let ss = {};
	let stu_tw = data_tw.find(s => s.PathName === stu_jp.PathName) || stu_jp;
	ss.Name_jp = stu_jp.Name;
	ss.Name_tw = stu_tw.Name || stu_jp.Name;

	for (let prop of props) {
		// if (prop === 'School' || prop === 'Club') {
		// 	ss[prop] =  get_tw_locale(prop, stu_jp[prop]);
		// 	continue;
		// }
		ss[prop] = stu_tw[prop] || stu_jp[prop];
		// ss.Skills = get_skills(stu_tw.Skills);
	}
	return ss;
});

function get_tw_locale(prop, key) {
	return locale_tw[prop]?.[key] || null;
}

function get_skills(skills) {
	return skills.map(s => {
		if (s.SkillType === 'autoattack') {
			return;
		}

		// let paras = s.Parameters?.map(p => p.join('/'));
		// let Desc = replace_desc(s.Desc, s.Parameters, s.SkillType === 'ex');

		return {
			SkillType: s.SkillType,
			Desc: s.Desc,
			Parameters: s.Parameters,
			Name: s.Name,
			Cost: s.Cost,
		}
	})
	.filter(Boolean);
}

function replace_desc(desc, paras, isEx) {
	if (paras.some(para => !para[0])) {
		// paras.
	}

	paras = paras.map(p => p.join('/')).slice(0, isEx ? 5: 10);

	// if (paras.findIndex(i => i.indexOf('<') !== -1) !== -1) {
	// 	console.log(paras);
	// }

	desc = desc.replace(/\<\?(\d)\>/gm, (match, p1) => {
		return paras[p1 - 1];
	});

	desc = desc.replace(/\<(\w)\:(\w+)\>/gm, (match, p1, p2) => {
		return p2;
	});

	return desc;
}

function compress_data(arr) {
	let props = [...new Set(arr.map(i => Object.keys(i)).flat())];
	let new_data = {
		props,
		data: arr.map(stu => props.map(j => stu[j])),
	};

	return new_data;
}

outputJSON(op, './src/data/students.json', 0);
outputJSON(op, './src/data/students.src.json');
outputJSON(compress_data(op), './src/data/students.zip.json', 0);
