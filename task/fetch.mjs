import fetch from 'node-fetch';
import { outputJSON } from './u.mjs';

let data = {
	tw: await fetch('https://schale.gg/data/tw/students.min.json').then(d => d.json()),
	jp: await fetch('https://schale.gg/data/jp/students.min.json').then(d => d.json()),
};

outputJSON(data.tw, './src/data/students.min.tw.json');
outputJSON(data.jp, './src/data/students.min.jp.json');
