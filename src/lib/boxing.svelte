<script>
	import { createEventDispatcher } from 'svelte';
	import Student from './student.svelte';

	export let focus;
	export let teams;

	const dispatch = createEventDispatcher();

	function handle_click(teamIndex, memberIndex) {
		dispatch('focus', { teamIndex, memberIndex, });
	}

	let pin = document.documentElement.clientHeight > 700;
	let zoom = true;

	function reset_boxing() {
		dispatch('reset');
	}
</script>




<div class="box" class:pin class:zoom>
	<label title="pin" class="pin-ctrl ctrl">
		<input type="checkbox" bind:checked={pin} accesskey="a">
		<span>🢁</span>
	</label>

	<label title="zoom" class="zoom-ctrl ctrl">
		<input type="checkbox" bind:checked={zoom}>
		<span>🢂🢀</span>
	</label>

	{#each teams as team, teamIndex (team.title)}
		<fieldset class="box-part" style="order: {(teamIndex + 1) * 2};">
			<legend>{team.title}</legend>
			<div class="team">
				{#each team.members as member, memberIndex}
					<button
						class="student-box"
						aria-current={teamIndex === focus[0] && memberIndex === focus[1]}
						on:click={() => handle_click(teamIndex, memberIndex)}
					>
						<Student student={member} />
					</button>
				{/each}
			</div>
		</fieldset>
	{/each}
	<button class="reset-btn" on:click={reset_boxing}>↻</button>
</div>



<style>
	.box {
		--opacity: .85;
		--height: 2.5em;
		position: sticky;
		bottom: 0;
		width: fit-content;
		margin: 0 auto;
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: nowrap;
		/* gap: 0em max(3em, 3vw); */
		justify-content: center;
		background-color: rgba(var(--back-color), var(--opacity));
		transform-origin: 50% 100%;

		&.zoom {
			scale: .75;
		}
	}

	.box:not(.pin) {
		--opacity: .3;
		height: var(--height);

		&:hover {
			--opacity: .7;
		}

		& .team {
			height: 0;
			overflow: hidden;
		}
		& .box-part {
			height: 0;
			visibility: hidden;
			overflow: hidden;
		}
	}

	.box-part {
		width: fit-content;
	}

	.team {
		display: flex;
		flex-direction: row;
		gap: 1em;
		width: fit-content;
	}

	fieldset .student-box {
		counter-increment: student;

		& .student::before {
			position: absolute;
			top: 100%;
			left: 0;
			content: '#' counter(student);
		}
	}
	.student-box {
		all: unset;
		width: fit-content;
		/* margin-block-end: 1em; */
		transition: outline-color .3s;
		outline-color: #0000;

		&:focus {
			outline: 1px solid #ff09;
		}

		&:nth-of-type(5) {
			margin-inline-start: 2em;
		}

		&[aria-current="true"] {
			outline: 20px dashed #ff39;
			outline-offset: -14px;
		}
	}

	@media (max-width: 768px) {
		.box {
			flex-direction: row;
		}
		.team {
			flex-direction: column;
			margin: auto;
		}
		.student-box:nth-of-type(5) {
			margin-inline-start: unset;
			margin-block-start: 2em;
		}
	}
	.ctrl {
		position: absolute;
		bottom: 0;
		height: var(--height);
		padding: .5em;
		display: flex;
		align-items: center;
		background-color: inherit;
		white-space: nowrap;
		cursor: pointer;

		& input {
			width: 1.75em;
			height: 1.75em;
			position: absolute;
			visibility: hidden;

			&:checked + span {
				color: #ff3;
			}
		}

		&.pin-ctrl {
			right: 100%;
		}
		&.zoom-ctrl {
			left: 100%;
		}
	}

	.reset-btn {
		order: 3;
		margin: .5em .5em -.5em .5em;
		padding: .5em;
		border-radius: 50%;
	}
</style>