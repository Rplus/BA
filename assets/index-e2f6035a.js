var lt=Object.defineProperty;var ot=(e,t,n)=>t in e?lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>(ot(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function I(){}function Je(e){return e()}function Be(){return Object.create(null)}function z(e){e.forEach(Je)}function Qe(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ce;function Te(e,t){return e===t?!0:(ce||(ce=document.createElement("a")),ce.href=t,e===ce.href)}function st(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function M(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function H(){return G(" ")}function ut(){return G("")}function R(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ge(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ct(e){return Array.from(e.childNodes)}function j(e,t){t=""+t,e.data!==t&&(e.data=t)}function He(e,t){e.value=t??""}function C(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function me(e,t,n){e.classList.toggle(t,!!n)}function mt(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}let te;function ee(e){te=e}function Xe(){if(!te)throw new Error("Function called outside component initialization");return te}function Ze(e){Xe().$$.on_mount.push(e)}function et(){const e=Xe();return(t,n,{cancelable:i=!1}={})=>{const a=e.$$.callbacks[t];if(a){const o=mt(t,n,{cancelable:i});return a.slice().forEach(s=>{s.call(e,o)}),!o.defaultPrevented}return!0}}function ye(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const V=[],ke=[];let x=[];const we=[],pt=Promise.resolve();let Me=!1;function ft(){Me||(Me=!0,pt.then(tt))}function Se(e){x.push(e)}const _e=new Set;let Y=0;function tt(){if(Y!==0)return;const e=te;do{try{for(;Y<V.length;){const t=V[Y];Y++,ee(t),dt(t.$$)}}catch(t){throw V.length=0,Y=0,t}for(ee(null),V.length=0,Y=0;ke.length;)ke.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];_e.has(n)||(_e.add(n),n())}x.length=0}while(V.length);for(;we.length;)we.pop()();Me=!1,_e.clear(),ee(e)}function dt(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Se)}}function ht(e){const t=[],n=[];x.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),x=t}const pe=new Set;let O;function J(){O={r:0,c:[],p:O}}function Q(){O.r||z(O.c),O=O.p}function P(e,t){e&&e.i&&(pe.delete(e),e.i(t))}function U(e,t,n,i){if(e&&e.o){if(pe.has(e))return;pe.add(e),O.c.push(()=>{pe.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function nt(e,t){U(e,1,1,()=>{t.delete(e.key)})}function it(e,t,n,i,a,o,s,p,l,r,u,c){let d=e.length,m=o.length,f=d;const g={};for(;f--;)g[e[f].key]=f;const _=[],k=new Map,B=new Map,b=[];for(f=m;f--;){const A=c(a,o,f),T=n(A);let N=s.get(T);N?i&&b.push(()=>N.p(A,t)):(N=r(T,A),N.c()),k.set(T,_[f]=N),T in g&&B.set(T,Math.abs(f-g[T]))}const D=new Set,v=new Set;function S(A){P(A,1),A.m(p,u),s.set(A.key,A),u=A.first,m--}for(;d&&m;){const A=_[m-1],T=e[d-1],N=A.key,K=T.key;A===T?(u=A.first,d--,m--):k.has(K)?!s.has(N)||D.has(N)?S(A):v.has(K)?d--:B.get(N)>B.get(K)?(v.add(N),S(A)):(D.add(K),d--):(l(T,s),d--)}for(;d--;){const A=e[d];k.has(A.key)||l(A,s)}for(;m;)S(_[m-1]);return z(b),_}function ae(e){e&&e.c()}function X(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),Se(()=>{const o=e.$$.on_mount.map(Je).filter(Qe);e.$$.on_destroy?e.$$.on_destroy.push(...o):z(o),e.$$.on_mount=[]}),a.forEach(Se)}function Z(e,t){const n=e.$$;n.fragment!==null&&(ht(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(e,t){e.$$.dirty[0]===-1&&(V.push(e),ft(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,i,a,o,s,p=[-1]){const l=te;ee(e);const r=e.$$={fragment:null,ctx:[],props:o,update:I,not_equal:a,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Be(),dirty:p,skip_bound:!1,root:t.target||l.$$.root};s&&s(r.root);let u=!1;if(r.ctx=n?n(e,t.props||{},(c,d,...m)=>{const f=m.length?m[0]:d;return r.ctx&&a(r.ctx[c],r.ctx[c]=f)&&(!r.skip_bound&&r.bound[c]&&r.bound[c](f),u&&_t(e,c)),d}):[],r.update(),u=!0,z(r.before_update),r.fragment=i?i(r.ctx):!1,t.target){if(t.hydrate){const c=ct(t.target);r.fragment&&r.fragment.l(c),c.forEach(E)}else r.fragment&&r.fragment.c();t.intro&&P(e.$$.fragment),X(e,t.target,t.anchor),tt()}ee(l)}class le{constructor(){he(this,"$$");he(this,"$$set")}$destroy(){Z(this,1),this.$destroy=I}$on(t,n){if(!Qe(n))return I;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!st(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);const yt={Explosion:"爆發",Pierce:"貫穿",Mystic:"神秘",Sonic:"振動",Main:"前排",Support:"後排",School:"學園",TacticRole:"作用",Position:"射程",BulletType:"攻屬",ArmorType:"防屬",SquadType:"分類",DamageDealer:"輸出",Tanker:"坦克",Supporter:"輔助",Healer:"治療",Vehicle:"T.S.",Back:"遠距",Front:"近距",Middle:"中距",LightArmor:"輕甲",HeavyArmor:"重甲",Unarmed:"特殊",ElasticArmor:"彈力",Gehenna:"格黑娜",Millennium:"千年",Trinity:"三一",Abydos:"阿拜多斯",Shanhaijing:"山海經",Hyakkiyako:"百鬼夜行",RedWinter:"赤冬",Valkyrie:"女武神",ETC:"?",SRT:"SRT",Arius:"奧利斯"},kt=["Id","Name_jp","Name_tw","School","PathName","Position","ArmorType","SquadType","BulletType","TacticRole"],Mt=[[1e4,"アル","亞瑠","Gehenna","Aru","Back","LightArmor","Main","Explosion","DamageDealer"],[10001,"エイミ","英美","Millennium","Eimi","Front","LightArmor","Main","Explosion","Tanker"],[10002,"ハルナ","羽留奈","Gehenna","Haruna","Back","HeavyArmor","Main","Mystic","DamageDealer"],[10003,"ヒフミ","日步美","Trinity","Hifumi","Middle","LightArmor","Main","Pierce","Supporter"],[10004,"ヒナ","陽奈","Gehenna","Hina","Back","HeavyArmor","Main","Explosion","DamageDealer"],[10005,"ホシノ","星野","Abydos","Hoshino","Front","HeavyArmor","Main","Pierce","Tanker"],[10006,"イオリ","伊織","Gehenna","Iori","Back","HeavyArmor","Main","Pierce","DamageDealer"],[10007,"マキ","真紀","Millennium","Maki","Back","LightArmor","Main","Pierce","DamageDealer"],[10008,"ネル","寧瑠","Millennium","Neru","Front","LightArmor","Main","Pierce","DamageDealer"],[10009,"イズミ","泉","Gehenna","Izumi","Back","LightArmor","Main","Explosion","DamageDealer"],[10010,"シロコ","白子","Abydos","Shiroko","Middle","LightArmor","Main","Explosion","DamageDealer"],[10011,"シュン","旬","Shanhaijing","Shun","Back","LightArmor","Main","Explosion","DamageDealer"],[10012,"スミレ","堇","Millennium","Sumire","Front","Unarmed","Main","Pierce","DamageDealer"],[10013,"ツルギ","弦生","Trinity","Tsurugi","Front","HeavyArmor","Main","Pierce","DamageDealer"],[13e3,"アカネ","朱音","Millennium","Akane","Middle","LightArmor","Main","Pierce","Supporter"],[13001,"チセ","知世","Hyakkiyako","Chise","Middle","HeavyArmor","Main","Mystic","DamageDealer"],[13002,"アカリ","亞伽里","Gehenna","Akari","Middle","HeavyArmor","Main","Explosion","DamageDealer"],[13003,"ハスミ","蓮實","Trinity","Hasumi","Back","HeavyArmor","Main","Pierce","DamageDealer"],[13004,"ノノミ","野乃美","Abydos","Nonomi","Back","LightArmor","Main","Pierce","DamageDealer"],[13005,"カヨコ","佳世子","Gehenna","Kayoko","Middle","HeavyArmor","Main","Explosion","Supporter"],[13006,"ムツキ","無月","Gehenna","Mutsuki","Back","LightArmor","Main","Explosion","DamageDealer"],[13007,"ジュンコ","淳子","Gehenna","Junko","Middle","LightArmor","Main","Pierce","DamageDealer"],[13008,"セリカ","茜香","Abydos","Serika","Middle","LightArmor","Main","Explosion","DamageDealer"],[13009,"ツバキ","椿","Hyakkiyako","Tsubaki","Front","Unarmed","Main","Pierce","Tanker"],[13010,"ユウカ","優香","Millennium","Yuuka","Front","HeavyArmor","Main","Explosion","Tanker"],[16e3,"ハルカ","遙香","Gehenna","Haruka","Front","LightArmor","Main","Explosion","Tanker"],[16001,"アスナ","明日奈","Millennium","Asuna","Middle","LightArmor","Main","Mystic","DamageDealer"],[16002,"コトリ","亞都梨","Millennium","Kotori","Back","LightArmor","Main","Pierce","Supporter"],[16003,"スズミ","鈴美","Trinity","Suzumi","Middle","HeavyArmor","Main","Explosion","Supporter"],[16004,"フィーナ","菲娜","Hyakkiyako","Pina","Back","LightArmor","Main","Pierce","DamageDealer"],[2e4,"ヒビキ","響","Millennium","Hibiki","Back","HeavyArmor","Support","Explosion","DamageDealer"],[20001,"カリン","花凛","Millennium","Karin","Back","HeavyArmor","Support","Pierce","DamageDealer"],[20002,"サヤ","沙耶","Shanhaijing","Saya","Back","LightArmor","Support","Explosion","DamageDealer"],[23e3,"アイリ","愛莉","Trinity","Airi","Back","LightArmor","Support","Explosion","Supporter"],[23001,"フウカ","風華","Gehenna","Fuuka","Back","HeavyArmor","Support","Explosion","Healer"],[23002,"ハナエ","花繪","Trinity","Hanae","Back","HeavyArmor","Support","Explosion","Healer"],[23003,"ハレ","晴","Millennium","Hare","Back","LightArmor","Support","Explosion","Supporter"],[23004,"ウタハ","詠葉","Millennium","Utaha","Back","HeavyArmor","Support","Pierce","DamageDealer"],[23005,"アヤネ","綾音","Abydos","Ayane","Back","LightArmor","Support","Pierce","Healer"],[26e3,"チナツ","千夏","Gehenna","Chinatsu","Back","LightArmor","Support","Pierce","Healer"],[26001,"コタマ","小玉","Millennium","Kotama","Back","LightArmor","Support","Explosion","Supporter"],[26002,"ジュリ","茱莉","Gehenna","Juri","Back","LightArmor","Support","Explosion","Supporter"],[26003,"セリナ","芹奈","Trinity","Serina","Back","LightArmor","Support","Mystic","Healer"],[26004,"シミコ","志美子","Trinity","Shimiko","Back","LightArmor","Support","Explosion","Supporter"],[26005,"ヨシミ","喜美","Trinity","Yoshimi","Back","HeavyArmor","Support","Pierce","DamageDealer"],[20003,"マシロ","麻白","Trinity","Mashiro","Back","HeavyArmor","Support","Explosion","DamageDealer"],[10014,"イズナ","伊樹菜","Hyakkiyako","Izuna","Front","LightArmor","Main","Mystic","DamageDealer"],[23006,"シズコ","靜子","Hyakkiyako","Shizuko","Back","Unarmed","Support","Mystic","Supporter"],[10015,"アリス","愛麗絲","Millennium","Aris","Back","Unarmed","Main","Mystic","DamageDealer"],[10016,"ミドリ","綠","Millennium","Midori","Back","LightArmor","Main","Pierce","DamageDealer"],[13011,"モモイ","桃井","Millennium","Momoi","Middle","LightArmor","Main","Pierce","DamageDealer"],[10017,"チェリノ","潔莉諾","RedWinter","Cherino","Middle","LightArmor","Main","Pierce","DamageDealer"],[26006,"ノドカ","和香","RedWinter","Nodoka","Back","HeavyArmor","Support","Explosion","Supporter"],[10018,"ユズ","柚子","Millennium","Yuzu","Middle","Unarmed","Main","Pierce","DamageDealer"],[10019,"アズサ","梓","Trinity","Azusa","Middle","HeavyArmor","Main","Explosion","DamageDealer"],[23007,"ハナコ","花子","Trinity","Hanako","Back","Unarmed","Support","Pierce","Healer"],[10020,"コハル","小春","Trinity","Koharu","Back","HeavyArmor","Main","Explosion","Healer"],[10021,"アズサ（水着）","梓(泳裝)","Trinity","Azusa_Swimsuit","Middle","LightArmor","Main","Mystic","DamageDealer"],[20004,"マシロ（水着）","麻白(泳裝)","Trinity","Mashiro_Swimsuit","Back","LightArmor","Support","Mystic","DamageDealer"],[16005,"ツルギ（水着）","弦生(泳裝)","Trinity","Tsurugi_Swimsuit","Front","Unarmed","Main","Mystic","DamageDealer"],[20005,"ヒフミ（水着）","日步美(泳裝)","Trinity","Hifumi_Swimsuit","Back","HeavyArmor","Support","Pierce","Vehicle"],[10022,"ヒナ（水着）","陽奈(泳裝)","Gehenna","Hina_Swimsuit","Back","HeavyArmor","Main","Explosion","DamageDealer"],[10023,"イオリ（水着）","伊織(泳裝)","Gehenna","Iori_Swimsuit","Back","Unarmed","Main","Explosion","DamageDealer"],[16006,"イズミ（水着）","泉(泳裝)","Gehenna","Izumi_Swimsuit","Back","LightArmor","Main","Explosion","Supporter"],[10024,"シロコ（ライディング）","白子(單車)","Abydos","Shiroko_Cycling","Middle","HeavyArmor","Main","Mystic","DamageDealer"],[10025,"シュン（幼女）","旬(幼女)","Shanhaijing","Shun_Small","Back","LightArmor","Main","Explosion","DamageDealer"],[13012,"キリノ","桐乃","Valkyrie","Kirino","Middle","Unarmed","Main","Explosion","Supporter"],[20006,"サヤ（私服）","沙耶(私服)","Shanhaijing","Saya_Casual","Back","Unarmed","Support","Pierce","DamageDealer"],[10026,"ネル（バニーガール）","寧瑠(兔女郎)","Millennium","Neru_Bunny","Front","HeavyArmor","Main","Explosion","Tanker"],[10027,"カリン（バニーガール）","花凛(兔女郎)","Millennium","Karin_Bunny","Back","HeavyArmor","Main","Mystic","DamageDealer"],[10028,"アスナ（バニーガール）","明日奈(兔女郎)","Millennium","Asuna_Bunny","Middle","LightArmor","Main","Mystic","Supporter"],[10029,"ナツ","夏","Trinity","Natsu","Front","HeavyArmor","Main","Mystic","Tanker"],[23008,"マリー","瑪麗","Trinity","Mari","Back","Unarmed","Support","Mystic","Supporter"],[20007,"初音ミク","初音未來","ETC","Hatsune_Miku","Back","LightArmor","Support","Explosion","Supporter"],[20008,"アコ","亞子","Gehenna","Ako","Back","HeavyArmor","Support","Mystic","Supporter"],[20009,"チェリノ（温泉）","潔莉諾(溫泉)","RedWinter","Cherino_HotSpring","Back","HeavyArmor","Support","Explosion","Vehicle"],[10030,"チナツ（温泉）","千夏(溫泉)","Gehenna","Chinatsu_HotSpring","Middle","LightArmor","Main","Mystic","Supporter"],[16007,"トモエ","智惠","RedWinter","Tomoe","Back","Unarmed","Main","Pierce","Supporter"],[20010,"ノドカ（温泉）","和香(溫泉)","RedWinter","Nodoka_HotSpring","Back","Unarmed","Support","Explosion","Healer"],[10031,"アル（正月）","亞瑠(正月)","Gehenna","Aru_NewYear","Back","Unarmed","Main","Pierce","DamageDealer"],[10032,"ムツキ（正月）","無月(正月)","Gehenna","Mutsuki_NewYear","Back","HeavyArmor","Main","Mystic","DamageDealer"],[20011,"セリカ（正月）","茜香(正月)","Abydos","Serika_NewYear","Back","Unarmed","Support","Pierce","Supporter"],[10033,"ワカモ","若藻","Hyakkiyako","Wakamo","Back","LightArmor","Main","Mystic","DamageDealer"],[16008,"フブキ","吹雪","Valkyrie","Fubuki","Back","HeavyArmor","Main","Pierce","DamageDealer"],[20012,"セナ","瀬奈","Gehenna","Sena","Back","LightArmor","Support","Mystic","Vehicle"],[20013,"チヒロ","千尋","Millennium","Chihiro","Back","HeavyArmor","Support","Pierce","DamageDealer"],[10034,"ミモリ","三森","Hyakkiyako","Mimori","Middle","LightArmor","Main","Mystic","Supporter"],[10035,"ウイ","憂","Trinity","Ui","Back","LightArmor","Main","Explosion","Supporter"],[10036,"ヒナタ","日向","Trinity","Hinata","Middle","HeavyArmor","Main","Mystic","DamageDealer"],[10037,"マリナ","瑪麗娜","RedWinter","Marina","Front","LightArmor","Main","Pierce","Tanker"],[10038,"ミヤコ","都子","SRT","Miyako","Front","HeavyArmor","Main","Pierce","Tanker"],[20014,"サキ","咲希","SRT","Saki","Back","Unarmed","Support","Pierce","DamageDealer"],[10039,"ミユ","美優","SRT","Miyu","Back","LightArmor","Main","Pierce","Supporter"],[20015,"カエデ","楓","Hyakkiyako","Kaede","Back","Unarmed","Support","Explosion","Supporter"],[20016,"イロハ","伊呂波","Gehenna","Iroha","Back","HeavyArmor","Support","Mystic","Vehicle"],[16009,"ミチル","三千留","Hyakkiyako","Michiru","Front","LightArmor","Main","Mystic","DamageDealer"],[10040,"ツクヨ","月夜","Hyakkiyako","Tsukuyo","Front","LightArmor","Main","Mystic","Tanker"],[10041,"ミサキ","美咲","Arius","Misaki","Back","Unarmed","Main","Explosion","DamageDealer"],[20017,"ヒヨリ","日和","Arius","Hiyori","Back","LightArmor","Support","Explosion","Supporter"],[10042,"アツコ","敦子","Arius","Atsuko","Front","Unarmed","Main","Explosion","Tanker"],[10043,"ワカモ（水着）","若藻(泳裝)","Hyakkiyako","Wakamo_Swimsuit","Back","HeavyArmor","Main","Pierce","DamageDealer"],[10044,"ノノミ（水着）","野乃美(泳裝)","Abydos","Nonomi_Swimsuit","Back","Unarmed","Main","Explosion","DamageDealer"],[26007,"アヤネ（水着）","綾音(泳裝)","Abydos","Ayane_Swimsuit","Back","LightArmor","Support","Pierce","Vehicle"],[10045,"ホシノ（水着）","星野(泳裝)","Abydos","Hoshino_Swimsuit","Front","Unarmed","Main","Explosion","Supporter"],[26008,"シズコ（水着）","靜子(泳裝)","Hyakkiyako","Shizuko_Swimsuit","Back","HeavyArmor","Support","Mystic","Supporter"],[10046,"イズナ（水着）","伊樹菜(泳裝)","Hyakkiyako","Izuna_Swimsuit","Front","Unarmed","Main","Mystic","DamageDealer"],[10047,"チセ（水着）","知世(泳裝)","Hyakkiyako","Chise_Swimsuit","Middle","LightArmor","Main","Mystic","Supporter"],[10048,"サオリ","沙織","Arius","Saori","Middle","Unarmed","Main","Explosion","DamageDealer"],[20018,"モエ","萌","SRT","Moe","Back","LightArmor","Support","Pierce","DamageDealer"],[10049,"カズサ","千紗","Trinity","Kazusa","Back","HeavyArmor","Main","Pierce","DamageDealer"],[10050,"ココナ","心菜","Shanhaijing","Kokona","Middle","Unarmed","Main","Pierce","Healer"],[10051,"ウタハ（応援団）","詠葉(應援團)","Millennium","Utaha_Cheerleader","Front","Unarmed","Main","Mystic","DamageDealer"],[10052,"ノア","乃愛","Millennium","Noa","Middle","Unarmed","Main","Mystic","Supporter"],[16010,"ヒビキ（応援団）","響(應援團)","Millennium","Hibiki_Cheerleader","Back","LightArmor","Main","Explosion","DamageDealer"],[20019,"アカネ（バニーガール）","朱音(兔女郎)","Millennium","Akane_Bunny","Back","HeavyArmor","Support","Mystic","DamageDealer"],[10053,"ユウカ（体操服）","優香(體育服)","Millennium","Yuuka_Track","Front","Unarmed","Main","Mystic","Tanker"],[10054,"マリー（体操服）","瑪麗(體育服)","Trinity","Mari_Track","Middle","Unarmed","Main","Mystic","Healer"],[16011,"ハスミ（体操服）","蓮實(體育服)","Trinity","Hasumi_Track","Back","Unarmed","Main","Mystic","DamageDealer"],[20020,"ヒマリ","陽葵","Millennium","Himari","Back","LightArmor","Support","Pierce","Supporter"],[10055,"シグレ","時雨","RedWinter","Shigure","Middle","HeavyArmor","Main","Explosion","DamageDealer"],[10056,"セリナ（クリスマス）","芹奈(聖誕節)","Trinity","Serina_Christmas","Middle","Unarmed","Main","Pierce","Supporter"],[20021,"ハナエ（クリスマス）","花繪(聖誕節)","Trinity","Hanae_Christmas","Back","Unarmed","Support","Mystic","Healer"],[10057,"ハルナ（正月）","羽留奈(正月)","Gehenna","Haruna_NewYear","Back","LightArmor","Main","Explosion","DamageDealer"],[20022,"フウカ（正月）","風華(正月)","Gehenna","Fuuka_NewYear","Back","Unarmed","Support","Pierce","Supporter"],[16012,"ジュンコ（正月）","淳子(正月)","Gehenna","Junko_NewYear","Middle","HeavyArmor","Main","Mystic","DamageDealer"],[10058,"ミネ","美禰","Trinity","Mine","Front","LightArmor","Main","Explosion","Tanker"],[10059,"ミカ","彌香","Trinity","Mika","Front","LightArmor","Main","Pierce","DamageDealer"],[10060,"メグ","惠","Gehenna","Megu","Front","Unarmed","Main","Explosion","DamageDealer"],[20023,"カンナ","環奈","Valkyrie","Kanna","Back","HeavyArmor","Support","Pierce","DamageDealer"],[10061,"サクラコ","櫻子","Trinity","Sakurako","Middle","Unarmed","Main","Mystic","DamageDealer"],[10062,"トキ","季","Millennium","Toki","Middle","ElasticArmor","Main","Explosion","DamageDealer"],[20024,"ナギサ","渚","Trinity","Nagisa","Back","HeavyArmor","Support","Explosion","DamageDealer"],[10063,"コユキ","小雪","Millennium","Koyuki","Back","HeavyArmor","Main","Mystic","DamageDealer"],[10064,"カヨコ（正月）","カヨコ（正月）","Gehenna","Kayoko_NewYear","Middle","Unarmed","Main","Mystic","Supporter"],[20025,"ハルカ（正月）","ハルカ（正月）","Gehenna","Haruka_NewYear","Back","LightArmor","Support","Explosion","Supporter"],[10065,"カホ","カホ","Hyakkiyako","Kaho","Middle","HeavyArmor","Main","Mystic","DamageDealer"],[10066,"アリス（メイド）","アリス（メイド）","Millennium","Aris_Maid","Back","LightArmor","Main","Mystic","DamageDealer"],[10067,"トキ（バニーガール）","トキ（バニーガール）","Millennium","Toki_Bunny","Middle","LightArmor","Main","Explosion","DamageDealer"],[26009,"ユズ（メイド）","ユズ（メイド）","Millennium","Yuzu_Maid","Back","ElasticArmor","Support","Explosion","DamageDealer"],[10068,"レイサ","レイサ","Trinity","Reisa","Front","HeavyArmor","Main","Pierce","Tanker"],[10069,"ルミ","ルミ","Shanhaijing","Rumi","Front","HeavyArmor","Main","Explosion","Healer"],[10070,"ミナ","ミナ","Shanhaijing","Mina","Middle","HeavyArmor","Main","Explosion","Supporter"],[20026,"ミノリ","ミノリ","RedWinter","Minori","Back","Unarmed","Support","Explosion","DamageDealer"],[10071,"ミヤコ（水着）","ミヤコ（水着）","SRT","Miyako_Swimsuit","Front","HeavyArmor","Main","Explosion","Tanker"],[10072,"サキ（水着）","サキ（水着）","SRT","Saki_Swimsuit","Back","HeavyArmor","Main","Explosion","Supporter"],[26010,"ミユ（水着）","ミユ（水着）","SRT","Miyu_Swimsuit","Back","LightArmor","Support","Explosion","DamageDealer"],[20027,"シロコ（水着）","シロコ（水着）","Abydos","Shiroko_Swimsuit","Back","LightArmor","Support","Mystic","DamageDealer"],[10073,"ウイ（水着）","ウイ（水着）","Trinity","Ui_Swimsuit","Back","ElasticArmor","Main","Pierce","Supporter"],[20028,"ヒナタ（水着）","ヒナタ（水着）","Trinity","Hinata_Swimsuit","Back","LightArmor","Support","Explosion","DamageDealer"],[16013,"コハル（水着）","コハル（水着）","Trinity","Koharu_Swimsuit","Back","HeavyArmor","Main","Mystic","DamageDealer"],[10074,"ハナコ（水着）","ハナコ（水着）","Trinity","Hanako_Swimsuit","Middle","HeavyArmor","Main","Sonic","DamageDealer"],[20029,"ミモリ（水着）","ミモリ（水着）","Hyakkiyako","Mimori_Swimsuit","Back","Unarmed","Support","Mystic","Supporter"],[10075,"メル","メル","RedWinter","Meru","Middle","LightArmor","Main","Pierce","DamageDealer"],[13013,"モミジ","モミジ","RedWinter","Momiji","Back","HeavyArmor","Main","Sonic","DamageDealer"],[10076,"コトリ（応援団）","コトリ（応援団）","Millennium","Kotori_Cheerleader","Back","Unarmed","Main","Explosion","DamageDealer"],[20030,"ハルナ（体操服）","ハルナ（体操服）","Gehenna","Haruna_Track","Back","HeavyArmor","Support","Sonic","Healer"]],St={props:kt,data:Mt},at="https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images";function Ee(e){return`${at}/student/collection/${e}.webp`}function Le(e){return`${at}/ui/Role_${e.TacticRole}.png`}function F(e=""){return yt[e]||e}async function vt(){return Dt(St)}function Dt(e){return e.data.map(t=>e.props.reduce((n,i,a)=>(n[i]=t[a],n),{}))}function At(e){let t;return{c(){t=M("div"),t.textContent="?",h(t,"class","empty svelte-tuawqy")},m(n,i){L(n,t,i)},p:I,d(n){n&&E(t)}}}function bt(e){let t,n,i,a,o,s,p=F(e[0].BulletType).slice(0,1)+"",l,r,u,c,d,m=F(e[0].ArmorType).slice(0,1)+"",f,g,_,k,B,b,D=e[0].Name_tw+"",v,S,A,T,N=e[0].PathName+"",K,oe,ve,De,Ae,W,se=e[0].Name_jp+"",fe,ue,de,be;return{c(){t=M("img"),a=H(),o=M("div"),s=M("div"),l=G(p),c=H(),d=M("div"),f=G(m),k=H(),B=M("div"),b=M("div"),v=G(D),S=H(),A=M("div"),T=M("a"),K=G(N),ve=H(),De=M("br"),Ae=H(),W=M("a"),fe=G(se),h(t,"class","avatar svelte-tuawqy"),Te(t.src,n=Ee(e[0].Id))||h(t,"src",n),h(t,"alt",i=Pe(e[0])),h(s,"class","icon color svelte-tuawqy"),h(s,"data-bullettype",r=e[0].BulletType),h(s,"title",u=e[1](e[0].BulletType)),h(d,"class","icon color svelte-tuawqy"),h(d,"data-armortype",g=e[0].ArmorType),h(d,"title",_=e[1](e[0].ArmorType)),h(o,"class","icons svelte-tuawqy"),h(b,"class","name-inner svelte-tuawqy"),h(T,"href",oe="https://schale.gg/?chara="+e[0].PathName),h(T,"target","schale.gg"),h(W,"href",ue="https://bluearchive.wikiru.jp/?"+e[0].Name_jp+"#Skills"),h(W,"target","wikiru"),h(A,"class","tip svelte-tuawqy"),h(B,"class","name svelte-tuawqy"),C(B,"--icon-role","url("+Le(e[0])+")")},m(w,$){L(w,t,$),L(w,a,$),L(w,o,$),y(o,s),y(s,l),y(o,c),y(o,d),y(d,f),L(w,k,$),L(w,B,$),y(B,b),y(b,v),y(B,S),y(B,A),y(A,T),y(T,K),y(A,ve),y(A,De),y(A,Ae),y(A,W),y(W,fe),de||(be=[R(T,"click",ge(e[3])),R(W,"click",ge(e[2]))],de=!0)},p(w,$){$&1&&!Te(t.src,n=Ee(w[0].Id))&&h(t,"src",n),$&1&&i!==(i=Pe(w[0]))&&h(t,"alt",i),$&1&&p!==(p=F(w[0].BulletType).slice(0,1)+"")&&j(l,p),$&1&&r!==(r=w[0].BulletType)&&h(s,"data-bullettype",r),$&1&&u!==(u=w[1](w[0].BulletType))&&h(s,"title",u),$&1&&m!==(m=F(w[0].ArmorType).slice(0,1)+"")&&j(f,m),$&1&&g!==(g=w[0].ArmorType)&&h(d,"data-armortype",g),$&1&&_!==(_=w[1](w[0].ArmorType))&&h(d,"title",_),$&1&&D!==(D=w[0].Name_tw+"")&&j(v,D),$&1&&N!==(N=w[0].PathName+"")&&j(K,N),$&1&&oe!==(oe="https://schale.gg/?chara="+w[0].PathName)&&h(T,"href",oe),$&1&&se!==(se=w[0].Name_jp+"")&&j(fe,se),$&1&&ue!==(ue="https://bluearchive.wikiru.jp/?"+w[0].Name_jp+"#Skills")&&h(W,"href",ue),$&1&&C(B,"--icon-role","url("+Le(w[0])+")")},d(w){w&&(E(t),E(a),E(o),E(k),E(B)),de=!1,z(be)}}}function Bt(e){let t;function n(o,s){return o[0].Id?bt:At}let i=n(e),a=i(e);return{c(){t=M("div"),a.c(),h(t,"class","student svelte-tuawqy")},m(o,s){L(o,t,s),a.m(t,null)},p(o,[s]){i===(i=n(o))&&a?a.p(o,s):(a.d(1),a=i(o),a&&(a.c(),a.m(t,null)))},i:I,o:I,d(o){o&&E(t),a.d()}}}function Pe(e){return`${e.Name_tw}, ${e.Name_jp}, ${e.PathName}`}function Tt(e,t,n){let{student:i={}}=t;function a(p){return`${F(p)}, ${p}`}function o(p){ye.call(this,e,p)}function s(p){ye.call(this,e,p)}return e.$$set=p=>{"student"in p&&n(0,i=p.student)},[i,a,o,s]}class rt extends le{constructor(t){super(),re(this,t,Tt,Bt,ne,{student:0})}}function $e(e,t,n){const i=e.slice();return i[17]=t[n],i}function Ne(e,t,n){const i=e.slice();return i[20]=t[n],i[21]=t,i[22]=n,i}function Ue(e){let t,n,i,a,o,s,p=F(e[20].label)+"",l,r,u,c;function d(){e[8].call(i,e[21],e[22])}return{c(){t=M("div"),n=M("label"),i=M("input"),a=H(),o=M("i"),s=H(),l=G(p),r=H(),h(i,"type","checkbox"),h(o,"class","label-icon"),C(n,"--icon-path","url('https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/ui/Role_"+e[20].label+".png')")},m(m,f){L(m,t,f),y(t,n),y(n,i),i.checked=e[20].value,y(n,a),y(n,o),y(n,s),y(n,l),y(t,r),u||(c=R(i,"change",d),u=!0)},p(m,f){e=m,f&2&&(i.checked=e[20].value),f&2&&p!==(p=F(e[20].label)+"")&&j(l,p),f&2&&C(n,"--icon-path","url('https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/ui/Role_"+e[20].label+".png')")},d(m){m&&E(t),u=!1,c()}}}function qe(e){let t,n,i=F(e[17].prop)+"",a,o,s,p,l,r,u,c,d,m=q(e[17].filters),f=[];for(let g=0;g<m.length;g+=1)f[g]=Ue(Ne(e,m,g));return{c(){t=M("fieldset"),n=M("legend"),a=G(i),o=H(),s=M("details"),p=M("summary"),l=H(),r=M("div");for(let g=0;g<f.length;g+=1)f[g].c();c=H(),h(p,"class","svelte-1q95fnr"),h(s,"class","filter-details svelte-1q95fnr"),s.open=u=e[17].filters.length<5,h(t,"class",d="filter-cate__"+e[17].prop+" svelte-1q95fnr")},m(g,_){L(g,t,_),y(t,n),y(n,a),y(t,o),y(t,s),y(s,p),y(s,l),y(s,r);for(let k=0;k<f.length;k+=1)f[k]&&f[k].m(r,null);y(t,c)},p(g,_){if(_&2&&i!==(i=F(g[17].prop)+"")&&j(a,i),_&2){m=q(g[17].filters);let k;for(k=0;k<m.length;k+=1){const B=Ne(g,m,k);f[k]?f[k].p(B,_):(f[k]=Ue(B),f[k].c(),f[k].m(r,null))}for(;k<f.length;k+=1)f[k].d(1);f.length=m.length}_&2&&u!==(u=g[17].filters.length<5)&&(s.open=u),_&2&&d!==(d="filter-cate__"+g[17].prop+" svelte-1q95fnr")&&h(t,"class",d)},d(g){g&&E(t),ie(f,g)}}}function Ht(e){let t,n,i,a,o,s,p,l,r,u,c,d,m,f,g=q(e[1]),_=[];for(let k=0;k<g.length;k+=1)_[k]=qe($e(e,g,k));return{c(){t=M("div"),n=H(),i=M("form"),a=M("details"),o=M("summary"),s=G(`Filters
			`),p=M("label"),l=M("input"),r=H(),u=M("input"),c=H(),d=M("div");for(let k=0;k<_.length;k+=1)_[k].c();h(t,"class","dynamic-style"),h(l,"type","search"),h(l,"placeholder","name"),l.autofocus=!0,h(l,"accesskey","q"),h(u,"type","reset"),u.value="Reset",h(o,"class","filter-summary svelte-1q95fnr"),h(d,"class","flex svelte-1q95fnr"),a.open=!0,h(i,"class","filter-form svelte-1q95fnr")},m(k,B){L(k,t,B),e[6](t),L(k,n,B),L(k,i,B),y(i,a),y(a,o),y(o,s),y(o,p),y(p,l),He(l,e[0]),y(o,r),y(o,u),y(a,c),y(a,d);for(let b=0;b<_.length;b+=1)_[b]&&_[b].m(d,null);l.focus(),m||(f=[R(l,"keydown",ge(e[5])),R(l,"input",e[7]),R(i,"reset",e[3])],m=!0)},p(k,[B]){if(B&1&&l.value!==k[0]&&He(l,k[0]),B&2){g=q(k[1]);let b;for(b=0;b<g.length;b+=1){const D=$e(k,g,b);_[b]?_[b].p(D,B):(_[b]=qe(D),_[b].c(),_[b].m(d,null))}for(;b<_.length;b+=1)_[b].d(1);_.length=g.length}},i:I,o:I,d(k){k&&(E(t),E(n),E(i)),e[6](null),ie(_,k),m=!1,z(f)}}}const Fe=".student-outer";function wt(e,t,n){let{students:i}=t,a=new URLSearchParams(location.search),o,s=a.get("name")||"",p=["School","TacticRole","BulletType","ArmorType","SquadType","Position"],l=u(i),r={name:"",checkbox:""};function u(D){return p.map(v=>({prop:v,filters:[...new Set(D.map(S=>S[v]))].sort(c).map(S=>({label:S,value:!1}))}))}function c(D,v){let S=F(D),A=F(v),T=S.length,N=A.length;return T===N?0:N-T}function d(){let D=s==null?void 0:s.trim();r.name=D?`${Fe}:not([data-name*="${D}"]) { display: none; }`:"",f()}function m(){let D=l.map(S=>S.filters.filter(T=>T.value).length?S.filters.filter(T=>!T.value).map(T=>`[data-${S.prop.toLowerCase()}="${T.label}"]`):void 0).flat().filter(Boolean),v=D.length?D.map(S=>`${Fe}${S}`).join()+"{ display: none !important; }":"";r.checkbox=v,f()}function f(){if(!o)return;let D=r.name+r.checkbox;n(2,o.innerHTML=D?`<style>${D}</style>`:"",o)}function g(){n(0,s=""),l.forEach(D=>{D.filters.forEach(v=>{v.value=!1})}),n(1,l)}Ze(()=>{f()});function _(D){ye.call(this,e,D)}function k(D){ke[D?"unshift":"push"](()=>{o=D,n(2,o)})}function B(){s=this.value,n(0,s)}function b(D,v){D[v].value=this.checked,n(1,l)}return e.$$set=D=>{"students"in D&&n(4,i=D.students)},e.$$.update=()=>{e.$$.dirty&1&&d(),e.$$.dirty&2&&m()},[s,l,o,g,i,_,k,B,b]}class Et extends le{constructor(t){super(),re(this,t,wt,Ht,ne,{students:4})}}function Re(e,t,n){const i=e.slice();return i[8]=t[n],i}function Ge(e,t,n){const i=e.slice();return i[11]=t[n],i}function Ce(e,t,n){const i=e.slice();return i[14]=t[n],i}function ze(e,t){let n,i,a,o,s,p,l,r,u,c,d,m;i=new rt({props:{student:t[14]}});function f(){return t[3](t[14])}return{key:e,first:null,c(){n=M("div"),ae(i.$$.fragment),h(n,"class","student-outer svelte-c6bdz8"),h(n,"data-name",a=t[14].Name_tw),h(n,"data-school",o=t[14].School),h(n,"data-position",s=t[14].Position),h(n,"data-armortype",p=t[14].ArmorType),h(n,"data-bullettype",l=t[14].BulletType),h(n,"data-squadtype",r=t[14].SquadType),h(n,"data-tacticrole",u=t[14].TacticRole),this.first=n},m(g,_){L(g,n,_),X(i,n,null),c=!0,d||(m=R(n,"click",f),d=!0)},p(g,_){t=g;const k={};_&2&&(k.student=t[14]),i.$set(k),(!c||_&2&&a!==(a=t[14].Name_tw))&&h(n,"data-name",a),(!c||_&2&&o!==(o=t[14].School))&&h(n,"data-school",o),(!c||_&2&&s!==(s=t[14].Position))&&h(n,"data-position",s),(!c||_&2&&p!==(p=t[14].ArmorType))&&h(n,"data-armortype",p),(!c||_&2&&l!==(l=t[14].BulletType))&&h(n,"data-bullettype",l),(!c||_&2&&r!==(r=t[14].SquadType))&&h(n,"data-squadtype",r),(!c||_&2&&u!==(u=t[14].TacticRole))&&h(n,"data-tacticrole",u)},i(g){c||(P(i.$$.fragment,g),c=!0)},o(g){U(i.$$.fragment,g),c=!1},d(g){g&&E(n),Z(i),d=!1,m()}}}function Ke(e){let t,n=[],i=new Map,a,o,s,p=q(e[11].members);const l=r=>r[14].PathName;for(let r=0;r<p.length;r+=1){let u=Ce(e,p,r),c=l(u);i.set(c,n[r]=ze(c,u))}return{c(){t=M("div");for(let r=0;r<n.length;r+=1)n[r].c();a=H(),h(t,"class","cell svelte-c6bdz8"),h(t,"data-bullettype",o=F(e[8].BulletType)),C(t,"grid-area",e[11].SquadType+"-"+e[8].BulletType)},m(r,u){L(r,t,u);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(t,null);y(t,a),s=!0},p(r,u){u&6&&(p=q(r[11].members),J(),n=it(n,u,l,1,r,p,i,t,nt,ze,a,Ce),Q()),(!s||u&2&&o!==(o=F(r[8].BulletType)))&&h(t,"data-bullettype",o),(!s||u&2)&&C(t,"grid-area",r[11].SquadType+"-"+r[8].BulletType)},i(r){if(!s){for(let u=0;u<p.length;u+=1)P(n[u]);s=!0}},o(r){for(let u=0;u<n.length;u+=1)U(n[u]);s=!1},d(r){r&&E(t);for(let u=0;u<n.length;u+=1)n[u].d()}}}function je(e){let t,n,i=q(e[8].cxt),a=[];for(let s=0;s<i.length;s+=1)a[s]=Ke(Ge(e,i,s));const o=s=>U(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=ut()},m(s,p){for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(s,p);L(s,t,p),n=!0},p(s,p){if(p&6){i=q(s[8].cxt);let l;for(l=0;l<i.length;l+=1){const r=Ge(s,i,l);a[l]?(a[l].p(r,p),P(a[l],1)):(a[l]=Ke(r),a[l].c(),P(a[l],1),a[l].m(t.parentNode,t))}for(J(),l=i.length;l<a.length;l+=1)o(l);Q()}},i(s){if(!n){for(let p=0;p<i.length;p+=1)P(a[p]);n=!0}},o(s){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)U(a[p]);n=!1},d(s){s&&E(t),ie(a,s)}}}function Lt(e){let t,n,i,a,o,s,p,l,r;n=new Et({props:{students:e[0]}});let u=q(e[1]),c=[];for(let m=0;m<u.length;m+=1)c[m]=je(Re(e,u,m));const d=m=>U(c[m],1,1,()=>{c[m]=null});return{c(){t=M("div"),ae(n.$$.fragment),i=H(),a=M("div"),o=M("div"),o.textContent="前",s=H(),p=M("div"),p.textContent="後",l=H();for(let m=0;m<c.length;m+=1)c[m].c();h(o,"class","cell th svelte-c6bdz8"),C(o,"grid-area","Main-title"),h(p,"class","cell th svelte-c6bdz8"),C(p,"grid-area","Support-title"),h(a,"class","table svelte-c6bdz8")},m(m,f){L(m,t,f),X(n,t,null),y(t,i),y(t,a),y(a,o),y(a,s),y(a,p),y(a,l);for(let g=0;g<c.length;g+=1)c[g]&&c[g].m(a,null);r=!0},p(m,[f]){const g={};if(f&1&&(g.students=m[0]),n.$set(g),f&6){u=q(m[1]);let _;for(_=0;_<u.length;_+=1){const k=Re(m,u,_);c[_]?(c[_].p(k,f),P(c[_],1)):(c[_]=je(k),c[_].c(),P(c[_],1),c[_].m(a,null))}for(J(),_=u.length;_<c.length;_+=1)d(_);Q()}},i(m){if(!r){P(n.$$.fragment,m);for(let f=0;f<u.length;f+=1)P(c[f]);r=!0}},o(m){U(n.$$.fragment,m),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)U(c[f]);r=!1},d(m){m&&E(t),Z(n),ie(c,m)}}}function Pt(e,t,n){let{students:i=[]}=t;const a=et();let o=["Explosion","Pierce","Mystic","Sonic"],s;l();function p(){n(1,s=o.map(c=>({BulletType:c,cxt:[{SquadType:"Main",members:[]},{SquadType:"Support",members:[]}]})))}function l(){p(),i.forEach(c=>{let d=o.findIndex(m=>m===c.BulletType);s[d].cxt[c.SquadType==="Main"?0:1].members.push(c)})}function r(c){a("select",{student:c})}const u=c=>r(c);return e.$$set=c=>{"students"in c&&n(0,i=c.students)},[i,s,r,u]}class $t extends le{constructor(t){super(),re(this,t,Pt,Lt,ne,{students:0})}}function Ie(e,t,n){const i=e.slice();return i[10]=t[n],i[12]=n,i}function We(e,t,n){const i=e.slice();return i[13]=t[n],i[15]=n,i}function Oe(e){let t,n,i,a,o,s;n=new rt({props:{student:e[13]}});function p(){return e[8](e[12],e[15])}return{c(){t=M("button"),ae(n.$$.fragment),h(t,"class","student-box svelte-u861hm"),h(t,"aria-current",i=e[12]===e[0][0]&&e[15]===e[0][1])},m(l,r){L(l,t,r),X(n,t,null),a=!0,o||(s=R(t,"click",p),o=!0)},p(l,r){e=l;const u={};r&2&&(u.student=e[13]),n.$set(u),(!a||r&3&&i!==(i=e[12]===e[0][0]&&e[15]===e[0][1]))&&h(t,"aria-current",i)},i(l){a||(P(n.$$.fragment,l),a=!0)},o(l){U(n.$$.fragment,l),a=!1},d(l){l&&E(t),Z(n),o=!1,s()}}}function Ye(e,t){let n,i,a=t[10].title+"",o,s,p,l,r=q(t[10].members),u=[];for(let d=0;d<r.length;d+=1)u[d]=Oe(We(t,r,d));const c=d=>U(u[d],1,1,()=>{u[d]=null});return{key:e,first:null,c(){n=M("fieldset"),i=M("legend"),o=G(a),s=H(),p=M("div");for(let d=0;d<u.length;d+=1)u[d].c();h(p,"class","team svelte-u861hm"),h(n,"class","box-part svelte-u861hm"),C(n,"order",(t[12]+1)*2),this.first=n},m(d,m){L(d,n,m),y(n,i),y(i,o),y(n,s),y(n,p);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(p,null);l=!0},p(d,m){if(t=d,(!l||m&2)&&a!==(a=t[10].title+"")&&j(o,a),m&19){r=q(t[10].members);let f;for(f=0;f<r.length;f+=1){const g=We(t,r,f);u[f]?(u[f].p(g,m),P(u[f],1)):(u[f]=Oe(g),u[f].c(),P(u[f],1),u[f].m(p,null))}for(J(),f=r.length;f<u.length;f+=1)c(f);Q()}(!l||m&2)&&C(n,"order",(t[12]+1)*2)},i(d){if(!l){for(let m=0;m<r.length;m+=1)P(u[m]);l=!0}},o(d){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)U(u[m]);l=!1},d(d){d&&E(n),ie(u,d)}}}function Nt(e){let t,n,i,a,o,s,p,l,r,u,c,d=[],m=new Map,f,g,_,k,B,b=q(e[1]);const D=v=>v[10].title;for(let v=0;v<b.length;v+=1){let S=Ie(e,b,v),A=D(S);m.set(A,d[v]=Ye(A,S))}return{c(){t=M("div"),n=M("label"),i=M("input"),a=H(),o=M("span"),o.textContent="🢁",s=H(),p=M("label"),l=M("input"),r=H(),u=M("span"),u.textContent="🢂🢀",c=H();for(let v=0;v<d.length;v+=1)d[v].c();f=H(),g=M("button"),g.textContent="↻",h(i,"type","checkbox"),h(i,"accesskey","a"),h(n,"title","pin"),h(n,"class","pin-ctrl ctrl svelte-u861hm"),h(l,"type","checkbox"),h(p,"title","zoom"),h(p,"class","zoom-ctrl ctrl svelte-u861hm"),h(g,"class","reset-btn svelte-u861hm"),h(t,"class","box svelte-u861hm"),me(t,"pin",e[2]),me(t,"zoom",e[3])},m(v,S){L(v,t,S),y(t,n),y(n,i),i.checked=e[2],y(n,a),y(n,o),y(t,s),y(t,p),y(p,l),l.checked=e[3],y(p,r),y(p,u),y(t,c);for(let A=0;A<d.length;A+=1)d[A]&&d[A].m(t,null);y(t,f),y(t,g),_=!0,k||(B=[R(i,"change",e[6]),R(l,"change",e[7]),R(g,"click",e[5])],k=!0)},p(v,[S]){S&4&&(i.checked=v[2]),S&8&&(l.checked=v[3]),S&19&&(b=q(v[1]),J(),d=it(d,S,D,1,v,b,m,t,nt,Ye,f,Ie),Q()),(!_||S&4)&&me(t,"pin",v[2]),(!_||S&8)&&me(t,"zoom",v[3])},i(v){if(!_){for(let S=0;S<b.length;S+=1)P(d[S]);_=!0}},o(v){for(let S=0;S<d.length;S+=1)U(d[S]);_=!1},d(v){v&&E(t);for(let S=0;S<d.length;S+=1)d[S].d();k=!1,z(B)}}}function Ut(e,t,n){let{focus:i}=t,{teams:a}=t;const o=et();function s(m,f){o("focus",{teamIndex:m,memberIndex:f})}let p=document.documentElement.clientHeight>700,l=!0;function r(){o("reset")}function u(){p=this.checked,n(2,p)}function c(){l=this.checked,n(3,l)}const d=(m,f)=>s(m,f);return e.$$set=m=>{"focus"in m&&n(0,i=m.focus),"teams"in m&&n(1,a=m.teams)},[i,a,p,l,s,r,u,c,d]}class qt extends le{constructor(t){super(),re(this,t,Ut,Nt,ne,{focus:0,teams:1})}}function Ve(e){let t,n;return t=new $t({props:{students:e[0]}}),t.$on("select",e[3]),{c(){ae(t.$$.fragment)},m(i,a){X(t,i,a),n=!0},p(i,a){const o={};a&1&&(o.students=i[0]),t.$set(o)},i(i){n||(P(t.$$.fragment,i),n=!0)},o(i){U(t.$$.fragment,i),n=!1},d(i){Z(t,i)}}}function Ft(e){let t,n,i,a,o,s,p,l=e[0].length&&Ve(e);return a=new qt({props:{focus:e[2],teams:e[1]}}),a.$on("focus",e[5]),a.$on("reset",e[4]),{c(){l&&l.c(),t=H(),n=M("footer"),n.innerHTML='<hr/> <details open=""><summary>Tips:</summary> <ul><li>`?name=xxx`: name filter</li> <li>alt+q: focus name filter</li> <li>alt+a: toggle boxing visibility</li> <li>w,a,s,d: navigating boxing focus</li></ul></details> <div>data &amp; image come from\n		<a href="https://github.com/lonqie/SchaleDB">https://github.com/lonqie/SchaleDB</a></div> <hr/> <h1>Blue Archive students filter</h1>',i=H(),ae(a.$$.fragment),h(n,"class","svelte-7gunl4")},m(r,u){l&&l.m(r,u),L(r,t,u),L(r,n,u),L(r,i,u),X(a,r,u),o=!0,s||(p=R(window,"keydown",e[6]),s=!0)},p(r,[u]){r[0].length?l?(l.p(r,u),u&1&&P(l,1)):(l=Ve(r),l.c(),P(l,1),l.m(t.parentNode,t)):l&&(J(),U(l,1,1,()=>{l=null}),Q());const c={};u&4&&(c.focus=r[2]),u&2&&(c.teams=r[1]),a.$set(c)},i(r){o||(P(l),P(a.$$.fragment,r),o=!0)},o(r){U(l),U(a.$$.fragment,r),o=!1},d(r){r&&(E(t),E(n),E(i)),l&&l.d(r),Z(a,r),s=!1,p()}}}function xe(){return[{title:"⚔️ Attacker",members:new Array(6).fill({})},{title:"🛡️ Defender",members:new Array(6).fill({})}]}function Rt(e,t,n){let i=[],a=xe(),o=[0,0];Ze(async()=>{n(0,i=await vt())});function s(c){var m;let d=(m=c.detail)==null?void 0:m.student;d&&n(1,a[o[0]].members[o[1]]=d,a)}function p(){n(1,a=xe())}function l(c){n(2,o=[c.detail.teamIndex,c.detail.memberIndex])}function r(c){let d=c.dir_y||0,m=c.dir_x||0;n(2,o=[(o[0]+d+2)%2,(o[1]+m+6)%6])}function u(c){if(!(c.altKey||c.ctrlKey))switch(c.code){case"KeyD":r({dir_x:1});break;case"KeyA":r({dir_x:-1});break;case"KeyW":r({dir_y:-1});break;case"KeyS":r({dir_y:1});break}}return[i,a,o,s,p,l,u]}class Gt extends le{constructor(t){super(),re(this,t,Rt,Ft,ne,{})}}new Gt({target:document.getElementById("app")});
