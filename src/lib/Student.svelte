<script>
	export let show_icons = false;
	export let avatar_size;
	export let stu = {};

	import { const_strs, _ } from '../const.js';

  const IMG_FOLDER = const_strs.IMG_FOLDER;

</script>

<div class="student"
  data-name={stu.Name_tw}
  data-position={stu.Position}
  data-armortype={stu.ArmorType}
  data-bullettype={stu.BulletType}
  data-tacticrole={stu.TacticRole}
>
  <img class="avatar" src="{IMG_FOLDER}student/collection/{stu.CollectionTexture}.webp" loading="lazy" alt={stu.Name_tw}>

  {#if show_icons}
    <div class="icons">
      <div class="icon icon-{stu.BulletType}" style="background-image: url('{IMG_FOLDER}/ui/Type_Attack_s.png')" title={stu.BulletType}></div>
      <div class="icon icon-{stu.ArmorType}" style="background-image: url('{IMG_FOLDER}/ui/Type_Defense_s.png')" title={stu.ArmorType}></div>
      <!-- {stu.Position} -->
    </div>
  {/if}

  {#if avatar_size > 60}
    <div class="name">
      <div class="name-inner">
        <div class="icon icon-{stu.TacticRole} icon-role" style="background-image: url('{IMG_FOLDER}/ui/Role_{stu.TacticRole}.png')" title={stu.TacticRole}></div>
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
    margin: .25em;
    box-shadow: inset 0 0 0 1px;
    overflow: hidden;
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
    background-color: #f00;
    /* opacity: calc(var(--name-op) * 0.85); */
    /* border: 1px solid #fff; */
  }
  .name-inner {
    display: flex;
    align-items: center;
  }
  .icon.icon-role {
    width: 1em;
    height: 1em;
    margin: 0;
    background-color: #0000;
    background-size: 1em;
  }
  .icon-Explosion { background-color: var(--col-bg-explosive); }
  .icon-Piercing { background-color: var(--col-bg-piercing); }
  .icon-Mystic { background-color: var(--col-bg-mystic); }
  .icon-Sonic { background-color: var(--col-bg-sonic); }
  .icon-HeavyArmor { background-color: var(--col-bg-piercing-t); }
  .icon-LightArmor { background-color: var(--col-bg-explosive-t); }
  .icon-Unarmed { background-color: var(--col-bg-mystic-t); }
  .icon-ElasticArmor { background-color: var(--col-bg-sonic-t); }

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