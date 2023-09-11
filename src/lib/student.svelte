<script>
	export let student = {};
	import { get_src, _, get_role_icon_src } from '/src/const.js';

	function get_title(student) {
		return `${student.Name_tw}, ${student.Name_jp}, ${student.PathName}`;
	}
</script>


<div class="student">
	{#if student.Id}
		<img class="avatar" src={get_src(student.Id)} alt={get_title(student)}>
		<div class="icons">
			<div
				class="icon color"
				data-bullettype={student.BulletType}
				title={student.BulletType}>
				{_(student.BulletType).slice(0,1)}
			</div>
			<div
				class="icon color"
				data-armortype={student.ArmorType}
				title={student.ArmorType}>
				{_(student.ArmorType).slice(0,1)}
			</div>
		</div>

		<div class="name" style="--icon-role: url({get_role_icon_src(student)});">
			{student.Name_tw}
			<!--
			<div class="tip">
				<a href="https://schale.gg/?chara={stu.PathName}" target="schale.gg">
					{stu.PathName}
				</a>
				<br>
				<a href="https://bluearchive.wikiru.jp/?{stu.Name_jp}#Profile" target="wikiru">
					{stu.Name_jp}
				</a>
			</div>

			-->
		</div>
	{:else}
		<div class="empty">?</div>
	{/if}
</div>



<style>
	.student {
		position: relative;
		width: 100px;
		height: 100px;
		border: 1px solid;
		font-size: smaller;
	}

	@media (max-width: 768px) {
		.student {
			width: 60px;
			height: 60px;
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
		overflow: hidden;
		background-image: var(--icon-role);
		background-repeat: no-repeat;
		background-size: 1em;
		background-position: .1em 50%;
		background-color: #3339;
	}

	.icons {
		position: absolute;
		top: -8px;
		left: 0;
	}

	.icon {
		border-radius: 50%;
		background-color: #000;
		width: 2em;
		height: 2em;
		font-size: smaller;
		margin: 2px -8px;
		display: flex;
		place-content: center;
		place-items: center;
		box-shadow: 0 0 0 1px #fff6;

		&[data-bullettype] { background-color: rgba(var(--color-bullettype-rgb), 1); }
		&[data-armortype] { background-color: rgba(var(--color-armortype-rgb), 1); }
	}
</style>