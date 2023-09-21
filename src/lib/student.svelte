<script>
	export let student = {};
	import { get_src, _, get_role_icon_src } from '/src/const.js';

	function get_title(student) {
		return `${student.Name_tw}, ${student.Name_jp}, ${student.PathName}`;
	}
	function get_type_title(type) {
		return `${_(type)}, ${type}`;
	}
</script>


<div class="student">
	{#if student.Id}
		<img class="avatar" src={get_src(student.Id)} alt={get_title(student)}>
		<div class="icons">
			<div
				class="icon color"
				data-bullettype={student.BulletType}
				title={get_type_title(student.BulletType)}>
				{_(student.BulletType).slice(0,1)}
			</div>
			<div
				class="icon color"
				data-armortype={student.ArmorType}
				title={get_type_title(student.ArmorType)}>
				{_(student.ArmorType).slice(0,1)}
			</div>
		</div>

		<div class="name" style="--icon-role: url({get_role_icon_src(student)});">
			<div class="name-inner">
				{student.Name_tw}
			</div>

			<div class="tip">
				<a href="https://schale.gg/?chara={student.PathName}" target="schale.gg" on:click|stopPropagation>
					{student.PathName}
				</a>
				<br>
				<a href="https://bluearchive.wikiru.jp/?{student.Name_jp}#Skills" target="wikiru" on:click|stopPropagation>
					{student.Name_jp}
				</a>
			</div>

		</div>
	{:else}
		<div class="empty">?</div>
	{/if}
</div>



<style>
	.student {
		--avatar-size: 100px;

		position: relative;
		width: var(--avatar-size);
		height: var(--avatar-size);
		border: 1px solid;
		font-size: smaller;
	}

	@media (max-width: 768px) or (max-height: 500px)  {
		.student {
			--avatar-size: 50px;
			--icon-scale: .7;
			font-size: 12px;
		}
	}

	.avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.empty {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.name {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		padding: 1px 3px;
		text-indent: 1em;
		white-space: nowrap;
		background-image: var(--icon-role);
		background-repeat: no-repeat;
		background-size: 1em;
		background-position: .1em 50%;
		background-color: #3339;
		height: 1.5em;
	}

	.name-inner {
		max-width: 100%;
		overflow: hidden;
		scale: .8;
	}

	.tip {
		position: absolute;
		bottom: 1.5em;
		right: 0;
		left: 0;
		background-color: inherit;
		text-indent: 0;
		padding-left: .1em;
		line-height: 1.3;
		visibility: hidden;
		overflow: hidden;
		display: var(--tip-display, block);

		& a {
			color: #ccf;

			&:not(:hover) {
				text-decoration: none;
			}

			&::before {
				content: '🔗 ';
				font-size: smaller;
				line-height: 0;
			}
		}
	}

	.name:hover .tip {
		visibility: visible;
	}

	.icons {
		position: absolute;
		top: -8px;
		left: 0;
		scale: var(--icon-scale, 1);
		transform-origin: 0 0;
	}

	.icon {
		width: 2em;
		height: 2em;
		font-size: smaller;
		margin: 2px auto;
		translate: -.75em;
		display: flex;
		place-content: center;
		place-items: center;
		box-shadow:
			1px 1px 1px #0009,
			inset -1px -1px 1px #0001,
			inset 1px 1px 2px #fff2;
		border-radius: 50%;
		background-image:
			linear-gradient(45deg, #fff0 50%, #fff2 0),
			linear-gradient(-45deg, #fff0 50%, #fff2 0);
		background-position:
			100% 0,
			0% 0;
		background-repeat: no-repeat;

		&[data-bullettype] {
			background-color: rgba(var(--color-bullettype-rgb), 1);
		}
		&[data-armortype] {
			background-color: rgba(var(--color-armortype-rgb), 1);
			border-radius: 10%;
			width: 1.7em;
			height: 1.7em;
		}
	}
</style>