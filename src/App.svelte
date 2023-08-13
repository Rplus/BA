<script>
  // import data_url_tw from './data/students.min.tw.json?url'
  // import data_url_jp from './data/students.min.jp.json?url'
  // import data_url from './data/students.json?url'
  import data_tw from './data/students.json'

  let filterProps = [
    // 'SquadType',
    // 'School',
    // 'StarGrade',
    'TacticRole',
    'Position',
    'BulletType',
    'ArmorType',
    // 'StreetBattleAdaptation',
    // 'OutdoorBattleAdaptation',
    // 'IndoorBattleAdaptation',
    // 'WeaponType',
  ];

  const IMG_FOLDER = 'https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/';
  // let BulletTypes = { Explosion: 0, Mystic: 2, Pierce: 1, Sonic: 3 };
  let BulletTypes = ['Explosion', 'Pierce', 'Mystic', 'Sonic',]

  let data = [];
  let styleDiv;
  let qs = new URLSearchParams(location.search);
  let filterName = qs.get('name');
  let filtersPool = [];
  let filterStyles = {
    name: '',
    checkbox: '',
  };
  let avatar_size = 96;

  get_data();

  $: {
    update_name_filter(filterName);
  }
  $: {
    update_checkbox_filter(filtersPool);
  }

  function update_style() {
    if (!styleDiv) {
      return;
    }
    let _style = filterStyles.name + filterStyles.checkbox;
    styleDiv.innerHTML = _style ? `<style>${_style}</style>` : '';
  }

  function update_name_filter() {
    let str = filterName?.trim();
    filterStyles.name = str ? `.student.student.student.student:not([data-name*="${str}"]) { display: none; }` : '';
    update_style();
  }

  function update_checkbox_filter() {
    console.log(filtersPool);
    let unchecked_selectors = filtersPool.map(pool => {
      if (!pool.filters.filter(f => f.value).length) {
        return;
      }
      let unchecked = pool.filters.filter(f => !f.value);
      return unchecked.map(f => `[data-${pool.prop.toLowerCase()}="${f.label}"]`)
    })
    .flat()
    .filter(Boolean);
    let style = unchecked_selectors.length ? unchecked_selectors.map(str => `.student${str}`).join() + '{ display: none !important; }' : '';

    filterStyles.checkbox = style;
    update_style();
  }

  async function get_data() {
    // let data_tw = await fetch(data_url).then(d => d.json());
    // let data_tw = await fetch(data_url_tw).then(d => d.json());
    // let data_jp = await fetch(data_url_jp).then(d => d.json());
    // data_tw.forEach((i, index) => {
    //   i.Name_jp = data_jp[index].Name;
    // });
    handle_data(data_tw);
    gen_filters(data_tw);

    // let raw = data_tw.map((stu, index) => {
    //   return {
    //     Name: stu.Name,
    //     Name_jp: data_jp[index].Name,
    //     PathName: stu.PathName,
    //     Position: stu.Position,
    //     ArmorType: stu.ArmorType,
    //     SquadType: stu.SquadType,
    //     BulletType: stu.BulletType,
    //     TacticRole: stu.TacticRole,
    //     CollectionTexture: stu.CollectionTexture,
    //   }
    // })
    // console.log(raw);
  }

  function gen_filters(data_tw) {
    filtersPool = filterProps.map((prop) => {
      return {
        prop,
        filters: [...new Set(data_tw.map(i => i[prop]))]
          .map(filter => ({
            label: filter,
            value: false,
          })),
      }
    });
  }

  function handle_data(data_tw) {
    // reset
    data = []
    data_tw.forEach(student => {
      let place_index = BulletTypes.findIndex(i => i === student.BulletType);

      if (!data[place_index]) {
        data[place_index] = [
          [], // SquadType: Main
          [], // SquadType: Support
        ];
      }

      data[place_index][student.SquadType === 'Main' ? 0 : 1].push(student);
    })
  }

  function _(str = '') {
    return words[str] || str;
  }

  let words = {
    Explosion: '爆發',
    Pierce: '貫穿',
    Mystic: '神秘',
    Sonic: '振動',
    Main: '前排',
    Support: '後排',

    TacticRole: '作用',
    Position: '位置',
    BulletType: '攻屬',
    ArmorType: '防屬',

    DamageDealer: '輸出',
    Tanker: '坦克',
    Supporter: '輔助',
    Healer: '治療',
    Vehicle: 'T.S.',

    Back: '遠距',
    Front: '近距',
    Middle: '中距',

    LightArmor: '輕甲',
    HeavyArmor: '重甲',
    Unarmed: '特殊',
    ElasticArmor: '彈力',
  };

  function formReset() {
    filterName = '';
    filtersPool.forEach(pool => {
      pool.filters.forEach(f => {
        f.value = false;
      })
    })
    filtersPool = filtersPool;
  }
</script>

<main>

  <div class="dynamic-style" bind:this={styleDiv}></div>

  <details class="filters" open>
    <summary>Filters</summary>

    <form class="filter-form" on:reset={formReset}>

      {#each filtersPool as filterCate}
        <fieldset>
          <legend>{_(filterCate.prop)}</legend>
          <div>
            {#each filterCate.filters as filter}
              <div>
              <label>
                <input type="checkbox" bind:checked={filter.value}>
                {_(filter.label)}
              </label>
              </div>
            {/each}
          </div>
        </fieldset>
      {/each}

      <div>
        <fieldset>
          <legend>Name</legend>
          <input type="search" placeholder="name" bind:value={filterName} autofocus>
        </fieldset>

        <fieldset>
          <legend>圖片尺寸</legend>
          <div style="display: inline-flex;">
            <input type="range" step="12" min="48" max="96" bind:value={avatar_size}>
            {avatar_size}px
          </div>
        </fieldset>

        <div style="text-align: right; margin-top:4px">
          <input type="reset" value="Reset">
        </div>
      </div>
    </form>

  </details>


  <div class="table" style="--avatar-size:{avatar_size};" data-name={filterName}>
    {#each data as Group_by_BulletType, BulletTypeIndex}
      {#each Group_by_BulletType as Group_by_SquadType}
        {#if Group_by_SquadType.length}
          <h3 class="th" style="grid-area: {Group_by_SquadType[0]?.SquadType}-title">
            {_(Group_by_SquadType[0]?.SquadType)}
          </h3>

          <h3 class="th" style="grid-area: {BulletTypes[BulletTypeIndex]}-title">
            {_(BulletTypes[BulletTypeIndex])}
          </h3>

          <div class="cell"
            data-squad={Group_by_SquadType[0]?.SquadType}
            data-bullet={BulletTypes[BulletTypeIndex]}
          >

            {#each Group_by_SquadType as stu, PathName}
              <div class="student"
                data-name={stu.Name}
                data-position={stu.Position}
                data-armortype={stu.ArmorType}
                data-bullettype={stu.BulletType}
                data-tacticrole={stu.TacticRole}
              >
                <!-- <img class="avatar" src="https://proxy.duckduckgo.com/iu/?u=https://schale.gg/images/student/collection/{stu.CollectionTexture}.webp" loading="lazy"> -->
                <img class="avatar" src="{IMG_FOLDER}student/collection/{stu.CollectionTexture}.webp" loading="lazy">

                <div class="icons">
                  <div class="icon icon-{stu.TacticRole} icon-role" style="background-image: url('{IMG_FOLDER}/ui/Role_{stu.TacticRole}.png')" title={stu.TacticRole}></div>
                  <div class="icon icon-{stu.BulletType}" style="background-image: url('{IMG_FOLDER}/ui/Type_Attack_s.png')" title={stu.BulletType}></div>
                  <div class="icon icon-{stu.ArmorType}" style="background-image: url('{IMG_FOLDER}/ui/Type_Defense_s.png')" title={stu.ArmorType}></div>
                  <!-- {stu.Position} -->
                </div>

                {#if avatar_size > 60}
                  <div class="name">
                    <span>{stu.Name}</span>

                    <div class="tip">
                      <a href="https://schale.gg/?chara={stu.PathName}" target="schale.gg">{stu.PathName} 🔗</a>
                      <br>
                      <a href="https://bluearchive.wikiru.jp/?{stu.Name_jp}" target="wikiru">{stu.Name_jp} 🔗</a>
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      {/each}
    {/each}
  </div>

  <hr>

  <footer>
    <center>
      data & image come from <a href="https://github.com/lonqie/SchaleDB">https://github.com/lonqie/SchaleDB</a>
    </center>
  </footer>

</main>

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
    opacity: calc(var(--name-op) * 0.75);
    /* border: 1px solid #fff; */
  }
  .icon.icon-role {
    background-size: 1rem;
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

  .table {
    display: grid;
    gap: 1em;
    overflow: hidden;
    grid-template-columns: 3em 3fr 2fr;
    grid-template-areas:
      ".                Main-title      Support-title"
      "Explosion-title  Main-Explosion  Support-Explosion"
      "Pierce-title     Main-Pierce     Support-Pierce"
      "Mystic-title     Main-Mystic     Support-Mystic"
      "Sonic-title      Main-Sonic      Support-Sonic";
  }

  .cell {
    background-color: #9994;
    padding: .5em .1em .5em .5em;
    --name-op: .75;
    --name-bg-op: .5;
  }
  .cell:hover,
  .cell:focus-within {
    --name-op: .85;
    --name-bg-op: .65;
  }

  .cell[data-squad="Main"][data-bullet="Explosion"] { grid-area: Main-Explosion; }
  .cell[data-squad="Main"][data-bullet="Pierce"] { grid-area: Main-Pierce; }
  .cell[data-squad="Main"][data-bullet="Mystic"] { grid-area: Main-Mystic; }
  .cell[data-squad="Main"][data-bullet="Sonic"] { grid-area: Main-Sonic; }

  .cell[data-squad="Support"][data-bullet="Explosion"] { grid-area: Support-Explosion; }
  .cell[data-squad="Support"][data-bullet="Pierce"] { grid-area: Support-Pierce; }
  .cell[data-squad="Support"][data-bullet="Mystic"] { grid-area: Support-Mystic; }
  .cell[data-squad="Support"][data-bullet="Sonic"] { grid-area: Support-Sonic; }

  .th {
    color: #999;
    margin: 0;
  }

  .filters {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: rgb(var(--back-color));
    padding-bottom: 4px;
    opacity: 0.75;
  }
  .filters summary {
    text-align: center;
    font-weight: 900;
  }
  .filters[open] {
    opacity: 1;
    background-color: rgb(230 230 160 / 30%);
    backdrop-filter: blur(4px);
  }

  .filter-form {
    display: flex;
    justify-content: center;
  }

  .filters fieldset {
    background-color: rgba(var(--back-color), .5);
  }

</style>
