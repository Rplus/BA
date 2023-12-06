<script>
	export let students;
	import Filters from './filters.svelte';
	import { _ } from '../const.js';
	import { onMount } from 'svelte';

	let qs = new URLSearchParams(location.search);
	let styleDiv;
	let filterName = qs.get('name') || '';
	let filterProps = [
		'School',
		'Club',
		'TacticRole',
		'BulletType',
		'ArmorType',
		'SquadType',
		'Position',
	];

	const STUDENT_CSS_SELECTOR = '.student-outer';

	let filtersPool = gen_filters(students);
	let filterStyles = {
		name: '',
		checkbox: '',
	};

	$: {
		update_name_filter(filterName);
	}
	$: {
		update_checkbox_filter(filtersPool);
	}

	function gen_filters(_students) {
		return filterProps.map((prop) => {
			return {
				prop,
				filters: [...new Set(_students.map(i => i[prop]))]
					.sort(sortFilters)
					.map(filter => ({
						label: filter,
						value: false,
					}))
			}
		});
	}

	function sortFilters(a, b) {
		let A = _(a);
		let B = _(b);
		let lenA = A.length;
		let lenB = B.length;

		return (lenA === lenB)
			? (0)
			: (lenB - lenA);
	}

	function update_name_filter() {
		let str = filterName?.trim();
		filterStyles.name = str ? `${STUDENT_CSS_SELECTOR}:not([data-name*="${str}"]) { display: none; }` : '';
		update_style();
	}

	function update_checkbox_filter() {
		let unchecked_selectors = filtersPool.map(pool => {
			if (!pool.filters.filter(f => f.value).length) {
				return;
			}
			let unchecked = pool.filters.filter(f => !f.value);
			return unchecked.map(f => `[data-${pool.prop.toLowerCase()}="${f.label}"]`)
		})
		.flat()
		.filter(Boolean);

		let style = unchecked_selectors.length ? unchecked_selectors.map(str => `${STUDENT_CSS_SELECTOR}${str}`).join() + '{ display: none !important; }' : '';

		filterStyles.checkbox = style;
		update_style();
	}

	function update_style() {
		if (!styleDiv) {
			return;
		}
		let _style = filterStyles.name + filterStyles.checkbox;
		styleDiv.innerHTML = _style ? `<style>${_style}</style>` : '';
	}
	function formReset() {
		filterName = '';
		filtersPool.forEach(pool => {
			pool.filters.forEach(f => {
				f.value = false;
			})
		})
		filtersPool = filtersPool;
	}

	onMount(() => {
		update_style();
	})
</script>



<div class="dynamic-style" bind:this={styleDiv}></div>


<form class="filter-form" on:reset={formReset}>
	<details open>
		<summary class="filter-summary">
			Filters
			<label>
				<input
					type="search"
					placeholder="name"
					autofocus
					accesskey="q"
					on:keydown|stopPropagation
					bind:value={filterName}
				/>
			</label>
			<input type="reset" value="Reset">
		</summary>

		<div class="flex">
			{#each filtersPool as filterCate}
				<fieldset class="filter-cate__{filterCate.prop}">
					<legend>{_(filterCate.prop)}</legend>
					<details class="filter-details" open={filterCate.filters.length < 5}>
						<summary></summary>
						<div class="filetr-optinos">
							{#each filterCate.filters as filter}
								<div>
								<label style="--icon-path: url('https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/ui/Role_{filter.label}.png')">
									<input type="checkbox" bind:checked={filter.value}>
									<i class="label-icon"></i>
									{_(filter.label)}
								</label>
								</div>
							{/each}
						</div>
					</details>
				</fieldset>
			{/each}
		</div>
	</details>
</form>



<style>
	.filter-form {
		position: sticky;
		top: 0;
		z-index: 10;
		width: fit-content;
		margin: 0 auto;
		padding-left: 2em;
		padding-right: 2em;
		padding: .5em;
		max-width: 100%;
		font-size: smaller;
		background-color: rgba(var(--back-color), .8);
	}
	.flex {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding-top: .5em;
	}

	fieldset {
		padding: 0 1em .5em;
		border: 1px dashed #fff3;
		background-color: #0003;
	}
	.filter-details summary {
		position: relative;
		margin-left: -0.65em;
		margin-top: -0.5em;
		opacity: 0.5;
		z-index: 1;
		margin-top: calc(-2vmin - .7em);
		margin-top: -1.52em;
	}
	.filter-summary {
		text-align: center;
	}
	.filetr-optinos {
		max-height: 30vh;
		max-width: 15vw;
		overflow: auto;

		& label {
			display: block;
			align-items: center;
			line-height: 1;
			margin-bottom: 0.25em;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
