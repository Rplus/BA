<script>
	export let students = [];
	import { createEventDispatcher } from 'svelte';
	import { get_src, _ } from '/src/const.js';
	import Student from './student.svelte';
	import Filters from './filters.svelte';

	const dispatch = createEventDispatcher();

	let BulletTypes = ['Explosion', 'Pierce', 'Mystic', 'Sonic',];
	let data;
	handle_data();

	function reset_data() {
		data = BulletTypes.map(BulletType => ({
			BulletType,
			cxt: [
				{ SquadType: 'Main', members: [], },
				{ SquadType: 'Support', members: [], },
			],
		}));
	}

	function handle_data() {
		reset_data();
		students.forEach(sss => {
			let index = BulletTypes.findIndex(i => i === sss.BulletType);
			data[index].cxt[sss.SquadType === 'Main' ? 0 : 1].members.push(sss);
		});
	}

	function select(student) {
		dispatch('select', { student, })
	}
</script>



<div>

	<Filters {students} />

	<div class="table">
		<div class="cell th" style="grid-area: Main-title;">前</div>
		<div class="cell th" style="grid-area: Support-title;">後</div>

		{#each data as bullet_type}
			<!-- {bullet_type.BulletType} -->
			{#each bullet_type.cxt as squad_type}
				<div class="cell"
					data-bullettype={_(bullet_type.BulletType)}
					style="grid-area: {squad_type.SquadType}-{bullet_type.BulletType}"
				>
					<!-- {squad_type.SquadType} -->
					{#each squad_type.members as member (member.PathName)}
						<div class="student-outer" on:click={() => select(member)}
							data-name={member.Name_tw}
							data-school={member.School}
							data-position={member.Position}
							data-armortype={member.ArmorType}
							data-bullettype={member.BulletType}
							data-squadtype={member.SquadType}
							data-tacticrole={member.TacticRole}
						>
							<Student student={member} />
						</div>
					{/each}
				</div>
			{/each}
		{/each}
	</div>
</div>


<style>
	.table {
		display: grid;
		gap: 1em;
		overflow: hidden;
		grid-template-columns: 3fr 2fr;
		grid-template-areas:
			"Main-title      Support-title"
			"Main-Explosion  Support-Explosion"
			"Main-Pierce     Support-Pierce"
			"Main-Mystic     Support-Mystic"
			"Main-Sonic      Support-Sonic";
	}

	.th {
		font-weight: 900;
		opacity: 0.5;
		text-align: center;
		font-size: larger;
	}

	@media (max-width: 768px) {
		.table {
			grid-template-columns: 1fr 1fr;
			gap: .5rem;
		}
		.th {
			font-size: smaller;
		}
	}

	.cell {
		position: relative;
		background-color: #9994;
		padding: .5em .1em .5em calc(.1em + 1vw);
		overflow: hidden;

		&::before {
			content:
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A'
				attr(data-bullettype) '\A';
			position: absolute;
			right: -.2em;
			bottom: -.3em;
			font-size: 7em;
			z-index: -1;
			font-weight: 900;
			line-height: 1.2;
			opacity: 0.04;
			font-family: monospace;
			text-transform: uppercase;
			white-space: pre-wrap;
		}
	}
	.student-outer {
		display: inline-flex;
		margin: 0.5em;
		vertical-align: middle;
	}


</style>