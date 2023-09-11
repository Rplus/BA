<script>
	import { onMount } from 'svelte';
	// import { writable } from 'svelte/store';

	import data_url from '/src/data/students.json?url'

	import Selector from './lib/selector.svelte';
	import Student from './lib/student.svelte';
	import Boxing from './lib/boxing.svelte';

	let students = [];
	let teams = get_init_team();
	let focus = [0, 0];

	onMount(async () => {
		students = await get_data();
	})

	async function get_data() {
		// let raw_data = await get_raw_data();
		// let students = raw_data;
		// console.log(students);
		let students = await fetch(data_url).then(d => d.json());
		return students;
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

	function handle_select(data) {
		let student = data.detail?.student;
		if (!student) { return; }
		teams[focus[0]].members[focus[1]] = student;
	}
	function get_init_team() {
		return [
			{
				title: '⚔️ Attacker',
				members: new Array(6).fill({}),
			},
			{
				title: '🛡️ Defender',
				members: new Array(6).fill({}),
			},
		];
	}

	function reset() {
		teams = get_init_team();
	}

	function check_current(teamIndex, memberIndex) {
		return teamIndex === focus[0] && memberIndex === focus[1];
	}

	function handle_focus(e) {
		focus = [e.detail.teamIndex, e.detail.memberIndex];
	}

	function navfocus(e) {
	let dir_y = e.dir_y || 0;

		let dir_x = e.dir_x || 0;
		focus = [
			(focus[0] + dir_y + 2) % 2,
			(focus[1] + dir_x + 6) % 6,
		];
	}

	function handle_keydown(e) {
		switch (e.key) {
			// case 'ArrowRight':
			case 'd':
				navfocus({ dir_x: 1, });
				break;

			// case 'ArrowLeft':
			case 'a':
				navfocus({ dir_x: -1, });
				break;

			// case 'ArrowUp':
			case 'w':
				navfocus({ dir_y: -1, });
				break;

			// case 'ArrowDown':
			case 's':
				navfocus({ dir_y: 1, });
				break;

			default:
				break;
		}
	}
</script>

<svelte:window on:keydown={handle_keydown} />

<!--
<h2>
	Blue Archive students filter
	<button on:click={reset}>↻</button>
</h2>
<hr>
-->

{#if students.length}
<Selector
	students={students}
	on:select={handle_select}
/>
{/if}

<footer>
	<hr>
	<details open>
		<summary>
			Tips:
		</summary>

		<ul>
			<li>`?name=xxx`: name filter</li>
			<li>alt+q: focus name filter</li>
			<li>alt+a: toggle boxing visibility</li>
			<li>w,a,s,d: navigating boxing focus</li>
		</ul>
	</details>

	<div>
		data &amp; image come from
		<a href="https://github.com/lonqie/SchaleDB">https://github.com/lonqie/SchaleDB</a>
	</div>
	<hr>
	<h1>Blue Archive students filter</h1>
</footer>

	<Boxing {focus} {teams}
		on:focus={handle_focus}
		on:reset={reset}
	/>


<style>
	footer {
		text-align: center;
		font-family: monospace;

		& ul {
			text-align: left;
			width: fit-content;
			margin: 0 auto;
		}
	}
</style>