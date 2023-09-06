<script>
	export let show_icons = false;
	export let avatar_size;
	export let stu = {};

	import { const_strs, _ } from '../const.js';

	const IMG_FOLDER = const_strs.IMG_FOLDER;
	let title = `${stu.Name_tw}, ${stu.Name_jp}, ${stu.PathName}`;

</script>

<div class="student color"
	data-name={stu.Name_tw}
	data-school={stu.School}
	data-position={stu.Position}
	data-armortype={stu.ArmorType}
	data-bullettype={stu.BulletType}
	data-tacticrole={stu.TacticRole}
>
	<img class="avatar" loading="lazy"
		alt={title} title={title}
		src="{IMG_FOLDER}student/collection/{stu.Id}.webp"
	>

	{#if show_icons}
		<div class="icons">
			<!-- style="--background-image: url('{IMG_FOLDER}/ui/Type_Attack_s.png')" -->
			<div class="icon icon-{stu.BulletType} color"
				data-bullettype={stu.BulletType}
				title="攻屬：{_(stu.BulletType)}, {stu.BulletType}"
			>{_(stu.BulletType)[0]}</div>

			<!-- style="--background-image: url('{IMG_FOLDER}/ui/Type_Defense_s.png')" -->
			<div class="icon icon-{stu.ArmorType} color"
				data-armortype={stu.ArmorType}
				title="防屬：{_(stu.ArmorType)}, {stu.ArmorType}"
			>{_(stu.ArmorType)[0]}</div>
			<!-- {stu.Position} -->
		</div>
	{/if}

	{#if avatar_size > 60}
		<div class="name">
			<div class="name-inner">
				<div class="icon icon-{stu.TacticRole} icon-role"
					style="background-image: url('{IMG_FOLDER}/ui/Role_{stu.TacticRole}.png')"
					title={stu.TacticRole}/>
				{stu.Name_tw}
			</div>

			<div class="tip">
				<a href="https://schale.gg/?chara={stu.PathName}" target="schale.gg">
					{stu.PathName}
				</a>
				<br>
				<a href="https://bluearchive.wikiru.jp/?{stu.Name_jp}#Profile" target="wikiru">
					{stu.Name_jp}
				</a>
			</div>
		</div>
	{/if}
</div>


<style>
	.student {
		position: relative;
		display: inline-flex;
		flex-direction: column;
		width: calc(var(--avatar-size, 96) * 1px);
		height: calc(var(--avatar-size, 96) * 1px);
		margin: .25em .25em .5em;
		box-shadow: 0 .35em 0 rgba(var(--color-armortype-rgb), var(--student-armor-opacity, .85));
		overflow: hidden;
		vertical-align: middle;
	}
	.student:hover {
		--name-op: 1;
	}
	.avatar {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.icons {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}
	.icon {
		width: 1.25rem;
		height: 1.25rem;
		margin: 1px 2px;
		background-position: 50% 50%;
		background-repeat: no-repeat;
		background-size: .7rem;
		border-radius: 50%;
		color: #fff;
		font-size: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		/* opacity: calc(var(--name-op) * 0.85); */
		/* border: 1px solid #fff; */

		&[data-bullettype] { background-color: rgba(var(--color-bullettype-rgb), 1); }
		&[data-armortype] { background-color: rgba(var(--color-armortype-rgb), .835); }
	}
	.name-inner {
		display: flex;
		align-items: center;
	}
	.icon.icon-role {
		font-size: 1.25em;
		width: 1em;
		height: 1em;
		margin: 0 2px 0 0;
		background-color: #0000;
		background-size: 1.5em;
		background-size: contain;
	}

	.name {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
		padding: 2px;
		font-size: small;
		background-color: rgba(0,0,0,var(--name-bg-op));
		color: #fff;
		opacity: var(--name-op);
		transition: opacity .3s;
		white-space: nowrap;
		/* opacity: calc((var(--avatar-size) - 60) / 2); */
	}
	.tip {
		position: absolute;
		bottom: 100%;
		left: 0;
		right: 0;
		display: none;
		padding: 2px;
		background-color: inherit;
	}
	.name:hover {
		background-color: #0009;
	}
	.name:hover .tip {
		display: block;
	}
	.tip a {
		color: inherit;
		white-space: nowrap;
	}
	.tip a:hover {
		color: #ff0;
	}
	.tip a::before {
		content: '🔗 ';
	}
</style>