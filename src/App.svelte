<script>
  import data_url from './data/students.json?url'
  import Student from './lib/Student.svelte'
  import { const_strs, _ } from './const.js';

  let filterProps = [
    // 'SquadType',
    'School',
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
  let avatar_size = +qs.get('size') || 96;
  let show_icons = Boolean(+qs.get('icon'));

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
    // console.log(filtersPool);
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

  async function get_raw_data() {
    let data = {
      tw: await fetch('https://schale.gg/data/tw/students.min.json').then(d => d.json()),
      jp: await fetch('https://schale.gg/data/jp/students.min.json').then(d => d.json()),
    };
    return data.tw.map((i, index) => {
      return {
        Name_tw: i.Name,
        Name_jp: data.jp[index].Name,
        School: i.School,
        PathName: i.PathName,
        Position: i.Position,
        ArmorType: i.ArmorType,
        SquadType: i.SquadType,
        BulletType: i.BulletType,
        TacticRole: i.TacticRole,
        CollectionTexture: i.CollectionTexture,
      }
    });
  }

  async function get_data() {
    // let raw_data = await get_raw_data();
    // let data = raw_data;
    // console.log(data);
    let data = await fetch(data_url).then(d => d.json());

    handle_data(data);
    gen_filters(data);
  }

  function gen_filters(data) {
    filtersPool = filterProps.map((prop) => {
      return {
        prop,
        filters: [...new Set(data.map(i => i[prop]))]
          .map(filter => ({
            label: filter,
            value: false,
          })),
      }
    });
  }

  function handle_data(raw_data) {
    // reset
    data = []
    raw_data.forEach(student => {
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
        <fieldset class="filter-cate__{filterCate.prop}">
          <legend>{_(filterCate.prop)}</legend>
          <div>
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
        </fieldset>
      {/each}

      <div>
        <fieldset>
          <legend>Name</legend>
          <input type="search" placeholder="name" bind:value={filterName} autofocus accesskey="q">
        </fieldset>

        <fieldset>
          <legend>圖片尺寸</legend>
          <div style="display: inline-flex;">
            <input type="range" step="12" min="48" max="96" bind:value={avatar_size}>
            {avatar_size}px
          </div>
        </fieldset>

        <div style="display: flex; justify-content: space-between;">
          <label>
            <input type="checkbox" bind:checked={show_icons}> 顯示圖示
          </label>
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

            {#each Group_by_SquadType as stu (stu.PathName)}
              <Student {show_icons} {avatar_size} {stu} />
            {/each}
          </div>
        {/if}
      {/each}
    {/each}
  </div>


  <footer>
    <hr>
    <h1>Blue Archive students filter</h1>
    <hr>
    <details open>
      <summary>
        url para:
      </summary>
      <ul>
        <li>`name=xxx`: name filter</li>
        <li>`size=96`: image size</li>
        <li>`icon=1`: show type icon</li>
      </ul>
    </details>
    <hr>

    data & image come from <a href="https://github.com/lonqie/SchaleDB">https://github.com/lonqie/SchaleDB</a>
  </footer>

</main>

<style>
</style>
