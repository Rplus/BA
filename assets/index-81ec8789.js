var Ye=Object.defineProperty;var Ze=(e,t,l)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var pe=(e,t,l)=>(Ze(e,typeof t!="symbol"?t+"":t,l),l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=l(i);fetch(i.href,a)}})();function oe(){}function Fe(e){return e()}function Be(){return Object.create(null)}function Y(e){e.forEach(Fe)}function He(e){return typeof e=="function"}function Ge(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let se;function je(e,t){return e===t?!0:(se||(se=document.createElement("a")),se.href=t,e===se.href)}function xe(e){return Object.keys(e).length===0}const et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function d(e,t){e.appendChild(t)}function I(e,t,l){e.insertBefore(t,l||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function ce(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function w(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function P(){return C(" ")}function be(){return C("")}function ee(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function r(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function tt(e){return e===""?null:+e}function lt(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.data!==t&&(e.data=t)}function re(e,t){e.value=t??""}function F(e,t,l,n){l==null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}let we;function ae(e){we=e}const te=[],ge=[];let le=[];const Ae=[],nt=Promise.resolve();let ve=!1;function it(){ve||(ve=!0,nt.then(Ue))}function ye(e){le.push(e)}const me=new Set;let x=0;function Ue(){if(x!==0)return;const e=we;do{try{for(;x<te.length;){const t=te[x];x++,ae(t),at(t.$$)}}catch(t){throw te.length=0,x=0,t}for(ae(null),te.length=0,x=0;ge.length;)ge.pop()();for(let t=0;t<le.length;t+=1){const l=le[t];me.has(l)||(me.add(l),l())}le.length=0}while(te.length);for(;Ae.length;)Ae.pop()();ve=!1,me.clear(),ae(e)}function at(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ye)}}function ot(e){const t=[],l=[];le.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),le=t}const ue=new Set;let X;function fe(){X={r:0,c:[],p:X}}function de(){X.r||Y(X.c),X=X.p}function H(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function W(e,t,l,n){if(e&&e.o){if(ue.has(e))return;ue.add(e),X.c.push(()=>{ue.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function U(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function st(e,t){W(e,1,1,()=>{t.delete(e.key)})}function rt(e,t,l,n,i,a,o,h,f,c,p,y){let _=e.length,s=a.length,u=_;const m={};for(;u--;)m[e[u].key]=u;const b=[],$=new Map,v=new Map,g=[];for(u=s;u--;){const B=y(i,a,u),E=l(B);let k=o.get(E);k?n&&g.push(()=>k.p(B,t)):(k=c(E,B),k.c()),$.set(E,b[u]=k),E in m&&v.set(E,Math.abs(u-m[E]))}const j=new Set,z=new Set;function N(B){H(B,1),B.m(h,p),o.set(B.key,B),p=B.first,s--}for(;_&&s;){const B=b[s-1],E=e[_-1],k=B.key,A=E.key;B===E?(p=B.first,_--,s--):$.has(A)?!o.has(k)||j.has(k)?N(B):z.has(A)?_--:v.get(k)>v.get(A)?(z.add(k),N(B)):(j.add(A),_--):(f(E,o),_--)}for(;_--;){const B=e[_];$.has(B.key)||f(B,o)}for(;s;)N(b[s-1]);return Y(g),b}function ut(e){e&&e.c()}function Ve(e,t,l){const{fragment:n,after_update:i}=e.$$;n&&n.m(t,l),ye(()=>{const a=e.$$.on_mount.map(Fe).filter(He);e.$$.on_destroy?e.$$.on_destroy.push(...a):Y(a),e.$$.on_mount=[]}),i.forEach(ye)}function Ke(e,t){const l=e.$$;l.fragment!==null&&(ot(l.after_update),Y(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&(te.push(e),it(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function We(e,t,l,n,i,a,o,h=[-1]){const f=we;ae(e);const c=e.$$={fragment:null,ctx:[],props:a,update:oe,not_equal:i,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Be(),dirty:h,skip_bound:!1,root:t.target||f.$$.root};o&&o(c.root);let p=!1;if(c.ctx=l?l(e,t.props||{},(y,_,...s)=>{const u=s.length?s[0]:_;return c.ctx&&i(c.ctx[y],c.ctx[y]=u)&&(!c.skip_bound&&c.bound[y]&&c.bound[y](u),p&&ct(e,y)),_}):[],c.update(),p=!0,Y(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const y=lt(t.target);c.fragment&&c.fragment.l(y),y.forEach(D)}else c.fragment&&c.fragment.c();t.intro&&H(e.$$.fragment),Ve(e,t.target,t.anchor),Ue()}ae(f)}class Je{constructor(){pe(this,"$$");pe(this,"$$set")}$destroy(){Ke(this,1),this.$destroy=oe}$on(t,l){if(!He(l))return oe;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!xe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);const dt="/BA/assets/students-37ead7a7.json",ht={Explosion:"爆發",Pierce:"貫穿",Mystic:"神秘",Sonic:"振動",Main:"前排",Support:"後排",School:"學園",TacticRole:"作用",Position:"位置",BulletType:"攻屬",ArmorType:"防屬",DamageDealer:"輸出",Tanker:"坦克",Supporter:"輔助",Healer:"治療",Vehicle:"T.S.",Back:"遠距",Front:"近距",Middle:"中距",LightArmor:"輕甲",HeavyArmor:"重甲",Unarmed:"特殊",ElasticArmor:"彈力",Gehenna:"格黑娜",Millennium:"千年",Trinity:"三一",Abydos:"阿拜多斯",Shanhaijing:"山海經",Hyakkiyako:"百鬼夜行",RedWinter:"赤冬",Valkyrie:"女武神",ETC:"?",SRT:"SRT",Arius:"奧利斯"},_t={IMG_FOLDER:"https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/"};function O(e=""){return ht[e]||e}function Ne(e){let t,l,n=O(e[2].BulletType)[0]+"",i,a,o,h,f,c,p=O(e[2].ArmorType)[0]+"",y,_,s,u;return{c(){t=w("div"),l=w("div"),i=C(n),f=P(),c=w("div"),y=C(p),r(l,"class",a="icon icon-"+e[2].BulletType+" color svelte-jricnr"),r(l,"data-bullettype",o=e[2].BulletType),r(l,"title",h="攻屬："+O(e[2].BulletType)+", "+e[2].BulletType),r(c,"class",_="icon icon-"+e[2].ArmorType+" color svelte-jricnr"),r(c,"data-armortype",s=e[2].ArmorType),r(c,"title",u="防屬："+O(e[2].ArmorType)+", "+e[2].ArmorType),r(t,"class","icons svelte-jricnr")},m(m,b){I(m,t,b),d(t,l),d(l,i),d(t,f),d(t,c),d(c,y)},p(m,b){b&4&&n!==(n=O(m[2].BulletType)[0]+"")&&K(i,n),b&4&&a!==(a="icon icon-"+m[2].BulletType+" color svelte-jricnr")&&r(l,"class",a),b&4&&o!==(o=m[2].BulletType)&&r(l,"data-bullettype",o),b&4&&h!==(h="攻屬："+O(m[2].BulletType)+", "+m[2].BulletType)&&r(l,"title",h),b&4&&p!==(p=O(m[2].ArmorType)[0]+"")&&K(y,p),b&4&&_!==(_="icon icon-"+m[2].ArmorType+" color svelte-jricnr")&&r(c,"class",_),b&4&&s!==(s=m[2].ArmorType)&&r(c,"data-armortype",s),b&4&&u!==(u="防屬："+O(m[2].ArmorType)+", "+m[2].ArmorType)&&r(c,"title",u)},d(m){m&&D(t)}}}function Pe(e){let t,l,n,i,a,o,h=e[2].Name_tw+"",f,c,p,y,_=e[2].PathName+"",s,u,m,b,$,v,g=e[2].Name_jp+"",j,z;return{c(){t=w("div"),l=w("div"),n=w("div"),o=P(),f=C(h),c=P(),p=w("div"),y=w("a"),s=C(_),m=P(),b=w("br"),$=P(),v=w("a"),j=C(g),r(n,"class",i="icon icon-"+e[2].TacticRole+" icon-role svelte-jricnr"),F(n,"background-image","url('"+e[3]+"/ui/Role_"+e[2].TacticRole+".png')"),r(n,"title",a=e[2].TacticRole),r(l,"class","name-inner svelte-jricnr"),r(y,"href",u="https://schale.gg/?chara="+e[2].PathName),r(y,"target","schale.gg"),r(y,"class","svelte-jricnr"),r(v,"href",z="https://bluearchive.wikiru.jp/?"+e[2].Name_jp+"#Profile"),r(v,"target","wikiru"),r(v,"class","svelte-jricnr"),r(p,"class","tip svelte-jricnr"),r(t,"class","name svelte-jricnr")},m(N,B){I(N,t,B),d(t,l),d(l,n),d(l,o),d(l,f),d(t,c),d(t,p),d(p,y),d(y,s),d(p,m),d(p,b),d(p,$),d(p,v),d(v,j)},p(N,B){B&4&&i!==(i="icon icon-"+N[2].TacticRole+" icon-role svelte-jricnr")&&r(n,"class",i),B&4&&F(n,"background-image","url('"+N[3]+"/ui/Role_"+N[2].TacticRole+".png')"),B&4&&a!==(a=N[2].TacticRole)&&r(n,"title",a),B&4&&h!==(h=N[2].Name_tw+"")&&K(f,h),B&4&&_!==(_=N[2].PathName+"")&&K(s,_),B&4&&u!==(u="https://schale.gg/?chara="+N[2].PathName)&&r(y,"href",u),B&4&&g!==(g=N[2].Name_jp+"")&&K(j,g),B&4&&z!==(z="https://bluearchive.wikiru.jp/?"+N[2].Name_jp+"#Profile")&&r(v,"href",z)},d(N){N&&D(t)}}}function pt(e){let t,l,n,i,a,o,h,f,c,p,y,_=e[0]&&Ne(e),s=e[1]>60&&Pe(e);return{c(){t=w("div"),l=w("img"),i=P(),_&&_.c(),a=P(),s&&s.c(),r(l,"class","avatar svelte-jricnr"),r(l,"loading","lazy"),r(l,"alt",e[4]),r(l,"title",e[4]),je(l.src,n=e[3]+"student/collection/"+e[2].Id+".webp")||r(l,"src",n),r(t,"class","student color svelte-jricnr"),r(t,"data-name",o=e[2].Name_tw),r(t,"data-school",h=e[2].School),r(t,"data-position",f=e[2].Position),r(t,"data-armortype",c=e[2].ArmorType),r(t,"data-bullettype",p=e[2].BulletType),r(t,"data-tacticrole",y=e[2].TacticRole)},m(u,m){I(u,t,m),d(t,l),d(t,i),_&&_.m(t,null),d(t,a),s&&s.m(t,null)},p(u,[m]){m&4&&!je(l.src,n=u[3]+"student/collection/"+u[2].Id+".webp")&&r(l,"src",n),u[0]?_?_.p(u,m):(_=Ne(u),_.c(),_.m(t,a)):_&&(_.d(1),_=null),u[1]>60?s?s.p(u,m):(s=Pe(u),s.c(),s.m(t,null)):s&&(s.d(1),s=null),m&4&&o!==(o=u[2].Name_tw)&&r(t,"data-name",o),m&4&&h!==(h=u[2].School)&&r(t,"data-school",h),m&4&&f!==(f=u[2].Position)&&r(t,"data-position",f),m&4&&c!==(c=u[2].ArmorType)&&r(t,"data-armortype",c),m&4&&p!==(p=u[2].BulletType)&&r(t,"data-bullettype",p),m&4&&y!==(y=u[2].TacticRole)&&r(t,"data-tacticrole",y)},i:oe,o:oe,d(u){u&&D(t),_&&_.d(),s&&s.d()}}}function mt(e,t,l){let{show_icons:n=!1}=t,{avatar_size:i}=t,{stu:a={}}=t;const o=_t.IMG_FOLDER;let h=`${a.Name_tw}, ${a.Name_jp}, ${a.PathName}`;return e.$$set=f=>{"show_icons"in f&&l(0,n=f.show_icons),"avatar_size"in f&&l(1,i=f.avatar_size),"stu"in f&&l(2,a=f.stu)},[n,i,a,o,h]}class gt extends Je{constructor(t){super(),We(this,t,mt,pt,Ge,{show_icons:0,avatar_size:1,stu:2})}}const{Boolean:Qe}=et;function Re(e,t,l){const n=e.slice();return n[22]=t[l],n[24]=l,n}function Ee(e,t,l){const n=e.slice();return n[25]=t[l],n}function qe(e,t,l){const n=e.slice();return n[28]=t[l],n}function $e(e,t,l){const n=e.slice();return n[31]=t[l],n}function ze(e,t,l){const n=e.slice();return n[34]=t[l],n[35]=t,n[36]=l,n}function Me(e){let t,l,n,i,a,o,h=O(e[34].label)+"",f,c,p;function y(){e[9].call(n,e[35],e[36])}return{c(){t=w("div"),l=w("label"),n=w("input"),i=P(),a=w("i"),o=P(),f=C(h),r(n,"type","checkbox"),r(a,"class","label-icon"),F(l,"--icon-path","url('https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/ui/Role_"+e[34].label+".png')")},m(_,s){I(_,t,s),d(t,l),d(l,n),n.checked=e[34].value,d(l,i),d(l,a),d(l,o),d(l,f),c||(p=ee(n,"change",y),c=!0)},p(_,s){e=_,s[0]&2&&(n.checked=e[34].value),s[0]&2&&h!==(h=O(e[34].label)+"")&&K(f,h),s[0]&2&&F(l,"--icon-path","url('https://proxy.duckduckgo.com/iu/?u=https://raw.githubusercontent.com/lonqie/SchaleDB/main/images/ui/Role_"+e[34].label+".png')")},d(_){_&&D(t),c=!1,p()}}}function Le(e){let t,l,n=O(e[31].prop)+"",i,a,o,h,f,c,p,y,_=U(e[31].filters),s=[];for(let u=0;u<_.length;u+=1)s[u]=Me(ze(e,_,u));return{c(){t=w("fieldset"),l=w("legend"),i=C(n),a=P(),o=w("details"),h=w("summary"),f=P(),c=w("div");for(let u=0;u<s.length;u+=1)s[u].c();r(h,"class","svelte-1fzp1dd"),r(o,"class","filter-details svelte-1fzp1dd"),o.open=p=e[31].filters.length<8,r(t,"class",y="filter-cate__"+e[31].prop+" svelte-1fzp1dd")},m(u,m){I(u,t,m),d(t,l),d(l,i),d(t,a),d(t,o),d(o,h),d(o,f),d(o,c);for(let b=0;b<s.length;b+=1)s[b]&&s[b].m(c,null)},p(u,m){if(m[0]&2&&n!==(n=O(u[31].prop)+"")&&K(i,n),m[0]&2){_=U(u[31].filters);let b;for(b=0;b<_.length;b+=1){const $=ze(u,_,b);s[b]?s[b].p($,m):(s[b]=Me($),s[b].c(),s[b].m(c,null))}for(;b<s.length;b+=1)s[b].d(1);s.length=_.length}m[0]&2&&p!==(p=u[31].filters.length<8)&&(o.open=p),m[0]&2&&y!==(y="filter-cate__"+u[31].prop+" svelte-1fzp1dd")&&r(t,"class",y)},d(u){u&&D(t),ce(s,u)}}}function Oe(e){var $;let t,l=O(($=e[25][0])==null?void 0:$.SquadType)+"",n,i,a,o=O(e[6][e[24]])+"",h,f,c,p=[],y=new Map,_,s,u,m=U(e[25]);const b=v=>v[28].PathName;for(let v=0;v<m.length;v+=1){let g=qe(e,m,v),j=b(g);y.set(j,p[v]=De(j,g))}return{c(){var v,g;t=w("h3"),n=C(l),i=P(),a=w("h3"),h=C(o),f=P(),c=w("div");for(let j=0;j<p.length;j+=1)p[j].c();_=P(),r(t,"class","th"),F(t,"grid-area",((v=e[25][0])==null?void 0:v.SquadType)+"-title"),r(a,"class","th"),F(a,"grid-area",e[6][e[24]]+"-title"),r(c,"class","cell"),r(c,"data-squad",s=(g=e[25][0])==null?void 0:g.SquadType),r(c,"data-bullet",e[6][e[24]])},m(v,g){I(v,t,g),d(t,n),I(v,i,g),I(v,a,g),d(a,h),I(v,f,g),I(v,c,g);for(let j=0;j<p.length;j+=1)p[j]&&p[j].m(c,null);d(c,_),u=!0},p(v,g){var j,z,N;(!u||g[0]&4)&&l!==(l=O((j=v[25][0])==null?void 0:j.SquadType)+"")&&K(n,l),(!u||g[0]&4)&&F(t,"grid-area",((z=v[25][0])==null?void 0:z.SquadType)+"-title"),g[0]&52&&(m=U(v[25]),fe(),p=rt(p,g,b,1,v,m,y,c,st,De,_,qe),de()),(!u||g[0]&4&&s!==(s=(N=v[25][0])==null?void 0:N.SquadType))&&r(c,"data-squad",s)},i(v){if(!u){for(let g=0;g<m.length;g+=1)H(p[g]);u=!0}},o(v){for(let g=0;g<p.length;g+=1)W(p[g]);u=!1},d(v){v&&(D(t),D(i),D(a),D(f),D(c));for(let g=0;g<p.length;g+=1)p[g].d()}}}function De(e,t){let l,n,i;return n=new gt({props:{show_icons:t[5],avatar_size:t[4],stu:t[28]}}),{key:e,first:null,c(){l=be(),ut(n.$$.fragment),this.first=l},m(a,o){I(a,l,o),Ve(n,a,o),i=!0},p(a,o){t=a;const h={};o[0]&32&&(h.show_icons=t[5]),o[0]&16&&(h.avatar_size=t[4]),o[0]&4&&(h.stu=t[28]),n.$set(h)},i(a){i||(H(n.$$.fragment,a),i=!0)},o(a){W(n.$$.fragment,a),i=!1},d(a){a&&D(l),Ke(n,a)}}}function Ie(e){let t,l,n=e[25].length&&Oe(e);return{c(){n&&n.c(),t=be()},m(i,a){n&&n.m(i,a),I(i,t,a),l=!0},p(i,a){i[25].length?n?(n.p(i,a),a[0]&4&&H(n,1)):(n=Oe(i),n.c(),H(n,1),n.m(t.parentNode,t)):n&&(fe(),W(n,1,1,()=>{n=null}),de())},i(i){l||(H(n),l=!0)},o(i){W(n),l=!1},d(i){i&&D(t),n&&n.d(i)}}}function Ce(e){let t,l,n=U(e[22]),i=[];for(let o=0;o<n.length;o+=1)i[o]=Ie(Ee(e,n,o));const a=o=>W(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();t=be()},m(o,h){for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(o,h);I(o,t,h),l=!0},p(o,h){if(h[0]&116){n=U(o[22]);let f;for(f=0;f<n.length;f+=1){const c=Ee(o,n,f);i[f]?(i[f].p(c,h),H(i[f],1)):(i[f]=Ie(c),i[f].c(),H(i[f],1),i[f].m(t.parentNode,t))}for(fe(),f=n.length;f<i.length;f+=1)a(f);de()}},i(o){if(!l){for(let h=0;h<n.length;h+=1)H(i[h]);l=!0}},o(o){i=i.filter(Qe);for(let h=0;h<i.length;h+=1)W(i[h]);l=!1},d(o){o&&D(t),ce(i,o)}}}function vt(e){let t,l,n,i,a,o,h,f,c,p,y,_,s,u,m,b,$,v,g,j,z,N,B,E,k,A,M,ne,G,Te,V,ke,he,J,_e,Se,Z=U(e[1]),L=[];for(let T=0;T<Z.length;T+=1)L[T]=Le($e(e,Z,T));let Q=U(e[2]),R=[];for(let T=0;T<Q.length;T+=1)R[T]=Ce(Re(e,Q,T));const Xe=T=>W(R[T],1,1,()=>{R[T]=null});return{c(){t=w("main"),l=w("div"),n=P(),i=w("details"),a=w("summary"),a.textContent="Filters",o=P(),h=w("form");for(let T=0;T<L.length;T+=1)L[T].c();f=P(),c=w("div"),p=w("fieldset"),y=w("legend"),y.textContent="Name",_=P(),s=w("input"),u=P(),m=w("details"),b=w("summary"),b.textContent="圖片尺寸",$=P(),v=w("div"),g=w("input"),j=P(),z=C(e[4]),N=C("px"),B=P(),E=w("div"),k=w("label"),A=w("input"),M=C(" 顯示屬性"),ne=P(),G=w("input"),Te=P(),V=w("div");for(let T=0;T<R.length;T+=1)R[T].c();ke=P(),he=w("footer"),he.innerHTML='<hr/> <h1>Blue Archive students filter</h1> <hr/> <details open=""><summary>url para:</summary> <ul><li>`name=xxx`: name filter</li> <li>`size=96`: image size</li> <li>`icon=1`: show type icon</li></ul></details> <hr/>\n\n    data &amp; image come from <a href="https://github.com/lonqie/SchaleDB">https://github.com/lonqie/SchaleDB</a>',r(l,"class","dynamic-style"),r(a,"class","filters-title svelte-1fzp1dd"),r(s,"type","search"),r(s,"placeholder","name"),s.autofocus=!0,r(s,"accesskey","q"),r(g,"type","range"),r(g,"step","12"),r(g,"min","48"),r(g,"max","96"),F(v,"display","inline-flex"),m.open=!0,F(m,"margin-top",".5em"),r(A,"type","checkbox"),r(G,"type","reset"),G.value="Reset",F(E,"display","flex"),F(E,"justify-content","space-between"),r(h,"class","filter-form"),r(i,"class","filters"),i.open=!0,r(V,"class","table"),F(V,"--avatar-size",e[4]),r(V,"data-name",e[0])},m(T,q){I(T,t,q),d(t,l),e[8](l),d(t,n),d(t,i),d(i,a),d(i,o),d(i,h);for(let S=0;S<L.length;S+=1)L[S]&&L[S].m(h,null);d(h,f),d(h,c),d(c,p),d(p,y),d(p,_),d(p,s),re(s,e[0]),d(p,u),d(p,m),d(m,b),d(m,$),d(m,v),d(v,g),re(g,e[4]),d(v,j),d(v,z),d(v,N),d(c,B),d(c,E),d(E,k),d(k,A),A.checked=e[5],d(k,M),d(E,ne),d(E,G),d(t,Te),d(t,V);for(let S=0;S<R.length;S+=1)R[S]&&R[S].m(V,null);d(t,ke),d(t,he),J=!0,s.focus(),_e||(Se=[ee(s,"input",e[10]),ee(g,"change",e[11]),ee(g,"input",e[11]),ee(A,"change",e[12]),ee(h,"reset",e[7])],_e=!0)},p(T,q){if(q[0]&2){Z=U(T[1]);let S;for(S=0;S<Z.length;S+=1){const ie=$e(T,Z,S);L[S]?L[S].p(ie,q):(L[S]=Le(ie),L[S].c(),L[S].m(h,f))}for(;S<L.length;S+=1)L[S].d(1);L.length=Z.length}if(q[0]&1&&s.value!==T[0]&&re(s,T[0]),q[0]&16&&re(g,T[4]),(!J||q[0]&16)&&K(z,T[4]),q[0]&32&&(A.checked=T[5]),q[0]&116){Q=U(T[2]);let S;for(S=0;S<Q.length;S+=1){const ie=Re(T,Q,S);R[S]?(R[S].p(ie,q),H(R[S],1)):(R[S]=Ce(ie),R[S].c(),H(R[S],1),R[S].m(V,null))}for(fe(),S=Q.length;S<R.length;S+=1)Xe(S);de()}(!J||q[0]&16)&&F(V,"--avatar-size",T[4]),(!J||q[0]&1)&&r(V,"data-name",T[0])},i(T){if(!J){for(let q=0;q<Q.length;q+=1)H(R[q]);J=!0}},o(T){R=R.filter(Qe);for(let q=0;q<R.length;q+=1)W(R[q]);J=!1},d(T){T&&D(t),e[8](null),ce(L,T),ce(R,T),_e=!1,Y(Se)}}}function yt(e,t,l){let n=["School","TacticRole","Position","BulletType","ArmorType"],i=["Explosion","Pierce","Mystic","Sonic"],a=[],o,h=new URLSearchParams(location.search),f=h.get("name"),c=[],p={name:"",checkbox:""},y=+h.get("size")||96,_=!!+h.get("icon");b();function s(){if(!o)return;let k=p.name+p.checkbox;l(3,o.innerHTML=k?`<style>${k}</style>`:"",o)}function u(){let k=f==null?void 0:f.trim();p.name=k?`.student.student.student.student:not([data-name*="${k}"]) { display: none; }`:"",s()}function m(){let k=c.map(M=>M.filters.filter(G=>G.value).length?M.filters.filter(G=>!G.value).map(G=>`[data-${M.prop.toLowerCase()}="${G.label}"]`):void 0).flat().filter(Boolean),A=k.length?k.map(M=>`.student${M}`).join()+"{ display: none !important; }":"";p.checkbox=A,s()}async function b(){let k=await fetch(dt).then(A=>A.json());v(k),$(k)}function $(k){l(1,c=n.map(A=>({prop:A,filters:[...new Set(k.map(M=>M[A]))].map(M=>({label:M,value:!1}))})))}function v(k){l(2,a=[]),k.forEach(A=>{let M=i.findIndex(ne=>ne===A.BulletType);a[M]||l(2,a[M]=[[],[]],a),a[M][A.SquadType==="Main"?0:1].push(A)})}function g(){l(0,f=""),c.forEach(k=>{k.filters.forEach(A=>{A.value=!1})}),l(1,c)}function j(k){ge[k?"unshift":"push"](()=>{o=k,l(3,o)})}function z(k,A){k[A].value=this.checked,l(1,c)}function N(){f=this.value,l(0,f)}function B(){y=tt(this.value),l(4,y)}function E(){_=this.checked,l(5,_)}return e.$$.update=()=>{e.$$.dirty[0]&1&&u(),e.$$.dirty[0]&2&&m()},[f,c,a,o,y,_,i,g,j,z,N,B,E]}class bt extends Je{constructor(t){super(),We(this,t,yt,vt,Ge,{},null,[-1,-1])}}new bt({target:document.getElementById("app")});
