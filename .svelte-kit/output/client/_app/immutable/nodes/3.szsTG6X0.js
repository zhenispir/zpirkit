import{e as lt,a as ce}from"../chunks/index.AZhz8ofI.js";import{R as It,G as St,b as at,M as Mt}from"../chunks/siteConfig.B41vAn06.js";import{s as Ue,n as V,e as Et,i as Ct,t as Ot,o as xt,j as Lt,k as it,l as Nt,r as $t,b as Ut}from"../chunks/scheduler.CNzAINQ-.js";import{S as je,i as Pe,g,s as S,h as _,j as y,z as Q,c as M,f as u,k as i,a as T,x as b,y as ue,B as Le,C as Ne,E as Ye,e as $e,m as H,n as R,o as fe,A as Ae,r as Me,H as jt,D as Pt,u as Ce,F as Ht,v as Oe,t as ae,b as Rt,d as ie,w as xe,p as Dt}from"../chunks/index.CQrDriHR.js";import{w as Tt}from"../chunks/singletons.CL4UoklD.js";import{L as Ft}from"../chunks/LatestPosts.y3quUP3V.js";import{p as Bt}from"../chunks/stores.DDwViXLo.js";async function Vt({params:r,fetch:e,setHeaders:o}){const t=r.slug;let[n,s]=await Promise.all([e(`/api/blog/${t}.json`),e("/api/listContent.json")]);if(n.status>400)throw lt(n.status,await n.text());if(s.status>400)throw lt(s.status,await s.text());return o({"cache-control":"public, max-age=3600"}),{json:await n.json(),list:(await s.json()).slice(0,10),slug:t,REPO_URL:It}}const Sr=Object.freeze(Object.defineProperty({__proto__:null,load:Vt},Symbol.toStringTag,{value:"Module"}));function qt(r){let e,o;return{c(){e=Le("svg"),o=Le("path"),this.h()},l(t){e=Ne(t,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var n=y(e);o=Ne(n,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),y(o).forEach(u),n.forEach(u),this.h()},h(){i(o,"fill-rule","evenodd"),i(o,"d","M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"),i(o,"clip-rule","evenodd"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","h-5 w-5"),i(e,"viewBox","0 0 20 20"),i(e,"fill","currentColor")},m(t,n){T(t,e,n),b(e,o)},d(t){t&&u(e)}}}function zt(r){let e,o;return{c(){e=Le("svg"),o=Le("path"),this.h()},l(t){e=Ne(t,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var n=y(e);o=Ne(n,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),y(o).forEach(u),n.forEach(u),this.h()},h(){i(o,"fill-rule","evenodd"),i(o,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),i(o,"clip-rule","evenodd"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","h-5 w-5"),i(e,"viewBox","0 0 20 20"),i(e,"fill","currentColor")},m(t,n){T(t,e,n),b(e,o)},d(t){t&&u(e)}}}function Gt(r){let e,o='Get emails from me about <span class="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, ducimus.</span>.',t,n,s='<input type="email" id="bd-email" name="email" aria-label="Email for newsletter" placeholder="tim@apple.com" autocomplete="email" required="true" class="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"/><button class="absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100" type="submit">Subscribe</button>',a,l,c='5,432 subscribers including my Mom – <a href="/#newsletter">123 issues</a>',d,h;return{c(){e=g("p"),e.innerHTML=o,t=S(),n=g("form"),n.innerHTML=s,a=S(),l=g("p"),l.innerHTML=c,this.h()},l(f){e=_(f,"P",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1nnlrqm"&&(e.innerHTML=o),t=M(f),n=_(f,"FORM",{class:!0,action:!0,method:!0,target:!0,"data-svelte-h":!0}),Q(n)!=="svelte-1rx9bpd"&&(n.innerHTML=s),a=M(f),l=_(f,"P",{class:!0,"data-svelte-h":!0}),Q(l)!=="svelte-1qcvl32"&&(l.innerHTML=c),this.h()},h(){i(e,"class","my-1 text-gray-800 dark:text-gray-200"),i(n,"class","relative my-4"),i(n,"action","https://buttondown.email/api/emails/embed-subscribe/swyx"),i(n,"method","post"),i(n,"target","popupwindow"),i(l,"class","text-sm text-gray-800 dark:text-gray-200")},m(f,p){T(f,e,p),T(f,t,p),T(f,n,p),T(f,a,p),T(f,l,p),d||(h=ue(n,"submit",r[2]),d=!0)},p:V,d(f){f&&(u(e),u(t),u(n),u(a),u(l)),d=!1,h()}}}function Kt(r){let e,o,t,n,s="Subscribe to the newsletter",a,l,c,d,h;function f(E,O){return E[0]?zt:qt}let v=f(r)(r),k=r[0]&&Gt(r);return{c(){e=g("section"),o=g("div"),t=g("div"),n=g("p"),n.textContent=s,a=S(),l=g("button"),v.c(),c=S(),k&&k.c(),this.h()},l(E){e=_(E,"SECTION",{class:!0,id:!0});var O=y(e);o=_(O,"DIV",{class:!0});var I=y(o);t=_(I,"DIV",{class:!0});var U=y(t);n=_(U,"P",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-1nmoovj"&&(n.textContent=s),a=M(U),l=_(U,"BUTTON",{"aria-label":!0,class:!0});var j=y(l);v.l(j),j.forEach(u),U.forEach(u),c=M(I),k&&k.l(I),I.forEach(u),O.forEach(u),this.h()},h(){i(n,"class","text-lg font-bold md:text-xl"),i(l,"aria-label","Toggle Newsletter CTA"),i(l,"class","flex h-9 w-9 items-center justify-center rounded-lg ring-gray-300 transition-all hover:ring-2"),i(t,"class","flex items-center justify-between space-x-4 text-gray-900 dark:text-gray-100"),i(o,"class","my-4 w-full border-y border-blue-200 bg-blue-50 p-6 dark:border-gray-600 dark:bg-gray-800 sm:rounded sm:border-x"),i(e,"class","mb-16 w-full"),i(e,"id","newsletter")},m(E,O){T(E,e,O),b(e,o),b(o,t),b(t,n),b(t,a),b(t,l),v.m(l,null),b(o,c),k&&k.m(o,null),d||(h=ue(l,"click",r[1]),d=!0)},p(E,[O]){E[0]&&k.p(E,O)},i:V,o:V,d(E){E&&u(e),v.d(),k&&k.d(),d=!1,h()}}}const Wt=!0;function Xt(r,e,o){let t;const n=window.localStorage.getItem("isNewsletterOpen")??Wt,s=Tt(!!n);Et(r,s,c=>o(3,t=c)),s.subscribe(c=>{window.localStorage.setItem("isNewsletterOpen",c?"true":"false")});function a(){Ct(s,t=!t,t)}return[s,a,()=>a()&&window.open("https://buttondown.email/swyx","popupwindow")]}class Yt extends je{constructor(e){super(),Pe(this,e,Xt,Kt,Ue,{})}}function ct(r,e,o){const t=r.slice();return t[3]=e[o],t}function ut(r){let e,o,t,n=r[2][r[3]]+"",s,a,l,c=r[0][r[3]]+"",d,h;return{c(){e=g("span"),o=g("span"),t=g("span"),s=H(n),a=S(),l=g("span"),d=H(c),h=S(),this.h()},l(f){e=_(f,"SPAN",{class:!0});var p=y(e);o=_(p,"SPAN",{class:!0});var v=y(o);t=_(v,"SPAN",{class:!0});var k=y(t);s=R(k,n),k.forEach(u),a=M(v),l=_(v,"SPAN",{class:!0});var E=y(l);d=R(E,c),E.forEach(u),v.forEach(u),h=M(p),p.forEach(u),this.h()},h(){i(t,"class","reaction-button-emoji"),i(l,"class","reaction-button-count"),i(o,"class","space-x-1 rounded border-blue-800 p-2"),i(e,"class","reaction-button")},m(f,p){T(f,e,p),b(e,o),b(o,t),b(t,s),b(o,a),b(o,l),b(l,d),b(e,h)},p(f,p){p&1&&n!==(n=f[2][f[3]]+"")&&fe(s,n),p&1&&c!==(c=f[0][f[3]]+"")&&fe(d,c)},d(f){f&&u(e)}}}function ft(r){let e=Object.keys(r[2]).includes(r[3])&&r[0][r[3]]>0,o,t=e&&ut(r);return{c(){t&&t.c(),o=$e()},l(n){t&&t.l(n),o=$e()},m(n,s){t&&t.m(n,s),T(n,o,s)},p(n,s){s&1&&(e=Object.keys(n[2]).includes(n[3])&&n[0][n[3]]>0),e?t?t.p(n,s):(t=ut(n),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},d(n){n&&u(o),t&&t.d(n)}}}function Jt(r){let e,o,t=ce(Object.keys(r[0])),n=[];for(let s=0;s<t.length;s+=1)n[s]=ft(ct(r,t,s));return{c(){e=g("a");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=_(s,"A",{href:!0,class:!0});var a=y(e);for(let l=0;l<n.length;l+=1)n[l].l(a);a.forEach(u),this.h()},h(){i(e,"href",o=`${r[1]}#issuecomment-new`),i(e,"class","no-underline")},m(s,a){T(s,e,a);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(s,[a]){if(a&5){t=ce(Object.keys(s[0]));let l;for(l=0;l<t.length;l+=1){const c=ct(s,t,l);n[l]?n[l].p(c,a):(n[l]=ft(c),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}a&2&&o!==(o=`${s[1]}#issuecomment-new`)&&i(e,"href",o)},i:V,o:V,d(s){s&&u(e),Ye(n,s)}}}function Qt(r,e,o){let{reactions:t}=e,{issueUrl:n}=e,s={"+1":"👍","-1":"👎",laugh:"😆",hooray:"🎉",confused:"😕",heart:"❤️",rocket:"🚀",eyes:"👀"};return r.$$set=a=>{"reactions"in a&&o(0,t=a.reactions),"issueUrl"in a&&o(1,n=a.issueUrl)},[t,n,s]}class Zt extends je{constructor(e){super(),Pe(this,e,Qt,Jt,Ue,{reactions:0,issueUrl:1})}}const A={autoslug:"data-auto-slug",autoSlugAnchor:"data-auto-slug-anchor",autoSlugAnchorPosition:"data-auto-slug-anchor-position",toc:"data-toc",anchor:"data-toc-anchor",root:"data-toc-root",id:"data-toc-id",ignore:"data-toc-ignore",strategy:"data-toc-strategy",threshold:"data-toc-threshold",observeFor:"data-toc-observe-for",observeThrottled:"data-toc-observe-throttled",observeActiveId:"data-toc-observe-active-id",linkFor:"data-toc-link-for",linkActive:"data-toc-link-active"},At={init:"tocinit",change:"tocchange"};function er(r,e){return r.dispatchEvent(new CustomEvent(At.change,{detail:e})),e}function tr(r,e){return r.dispatchEvent(new CustomEvent(At.init,{detail:e})),e}function rr(r){return r&&r.trim().toLowerCase().replace(/[''"]+/gi,"").replace(/[^a-z0-9\-_]+/gi,"-").replace(/-+$/,"").replace(/^-+/,"").replace(/-+/g,"-")}const Ie={};function nr(r){return e=>{for(const o of e){const t=o.target.getAttribute(A.observeFor);t&&o.isIntersecting&&r(t)}}}function or(r){return r.hasAttribute(A.autoslug)?Array.from(r.childNodes).reduce((e,o)=>((o.nodeType!==Node.ELEMENT_NODE||!o.hasAttribute(A.autoSlugAnchor))&&(e+=o.textContent||""),e),""):r.textContent||""}function sr(r,e){let o=r.id;const t=r.getAttribute(A.id);return t?o=t:o||(o=rr(e.slice(0,100))),o}function lr(r,e){if(!e)return"";const o=typeof e=="function"?e(r):e;if(!o)return"";const t=typeof o=="number"?`${o}px`:o;return t&&(r.style.scrollMarginTop=t),t}function le(r){return r?r.tagName==="A"&&r.hasAttribute(A.autoSlugAnchor):!1}function ar(r,e,o){var n,s,a;let t;if(e.enabled)if(r.hasAttribute(A.autoslug)){const l=r.getAttribute(A.autoSlugAnchorPosition);if(l)switch(l){case"before":{const c=r.previousElementSibling;le(c)&&(t=c);break}case"prepend":case"append":{t=r.querySelector(`a[${A.autoSlugAnchor}]`);break}case"after":{const c=r.nextElementSibling;le(c)&&(t=c);break}case"wrap":{const c=r.parentElement;le(c)&&(t=c);break}}if(!t){const c=r.previousElementSibling,d=r.nextElementSibling,h=r.parentElement;le(c)?t=c:le(d)?t=d:le(h)?t=h:t=r.querySelector(`a[${A.autoSlugAnchor}]`)}}else{t=document.createElement("a");for(const[l,c]of Object.entries(e.properties))t.setAttribute(l,c);switch(t.href=typeof e.href=="function"?e.href(o):`#${o}`,t.textContent=e.content,e.position){case"before":(n=r.parentNode)==null||n.insertBefore(t,r);break;case"prepend":r.insertBefore(t,r.firstChild);break;case"wrap":t.innerHTML=r.outerHTML,(s=r.parentNode)==null||s.replaceChild(t,r);break;case"append":r.appendChild(t);break;case"after":(a=r.parentNode)==null||a.insertBefore(t,r.nextSibling);break}t.toggleAttribute(A.anchor,!0)}return t}function ir(r,e,o,t,n){if(!e.enabled)return;const s=r.parentElement;let a;const l=r.getAttribute(A.strategy)||e.strategy;typeof l!="number"&&l!=="auto"?a=l:s&&s.offsetHeight/window.innerHeight<.8?a="parent":a="self";let c;switch(a){case"self":c=r;break;case"parent":c=r.parentElement;break}let d;r.hasAttribute(A.threshold)?d=parseFloat(r.getAttribute(A.threshold)||"0"):d=typeof e.threshold=="function"?e.threshold(r):e.threshold;const{root:h,rootMargin:f}=e;c.setAttribute(A.observeFor,o);let p;return n[d]?p=n[d]:(p=new IntersectionObserver(nr(t),{threshold:d,rootMargin:f,root:h}),n[d]=p),p.observe(c),{strategy:a,observer:p,threshold:d,element:c}}const P={id:"",selector:":where(h1, h2, h3, h4, h5, h6)",ignore:[".toc-exclude"],scrollMarginTop:0,anchor:{enabled:!0,content:"#",position:"prepend",properties:{"aria-hidden":"true",tabindex:"-1"},href:r=>`#${r}`},observe:{enabled:!1,strategy:"auto",threshold:r=>Math.min(.8*window.innerHeight/r.offsetHeight,1)},store:void 0},cr={tocId:void 0,tocItem:void 0,observe:{enabled:!1,throttleOnClick:800,attribute:["data-toc-link-current"]},store:void 0};function dt(r={}){var o;let e=P.ignore;return r.ignore&&(e=Array.isArray(r.ignore)?r.ignore:[r.ignore]),{id:(r==null?void 0:r.id)??((o=r==null?void 0:r.store)==null?void 0:o.id())??crypto.randomUUID(),selector:`${r.selector??P.selector}${e.map(t=>`:not(${t})`).join("")}`,scrollMarginTop:r.scrollMarginTop??P.scrollMarginTop,anchor:typeof r.anchor>"u"?P.anchor:typeof r.anchor=="boolean"?{...P.anchor,enabled:r.anchor}:{enabled:r.anchor.enabled??!0,position:r.anchor.position??P.anchor.position,content:r.anchor.content??P.anchor.content,properties:{...P.anchor.properties,...r.anchor.properties},href:r.anchor.href??P.anchor.href},observe:typeof r.observe>"u"?P.observe:typeof r.observe=="boolean"?{...P.observe,enabled:r.observe}:{...P.observe,...r.observe,enabled:r.observe.enabled??!0,strategy:r.observe.strategy??P.observe.strategy,threshold:r.observe.threshold??P.observe.threshold},store:r.store}}function ur(){let r;const{subscribe:e,set:o,update:t}=Tt({id:r,items:{},activeItem:void 0});return e(n=>r=n.id),{subscribe:e,set:o,update:t,id:()=>r}}function ht(r,{activeItem:e,id:o,items:t}){r==null||r.update(n=>({...n,...e&&{activeItem:e},...o&&{id:o},...t&&{items:t}}))}function fr(r,e={}){let o=dt(e);const t={};let n;function s(c=""){Ie[o.id].observeThrottled||r.setAttribute(A.observeActiveId,c)}let a;function l(){n=new MutationObserver(c=>{if(r.isConnected){for(const d of c)if(d.type==="attributes")switch(d.attributeName){case A.observeActiveId:{const h=d.target.getAttribute(A.observeActiveId),f=Ie[o.id];if(h&&h!==f.activeTocItemId){f.activeTocItemId=h;const p=f.items[h];if(p){const v=er(r,{activeItem:p,id:o.id,items:f.items});ht(o.store,v)}}break}case A.observeThrottled:{const h=d.target.getAttribute(A.observeThrottled),f=Ie[o.id];if(!f.observeThrottled&&h){f.observeThrottled=!0,clearTimeout(a);let p=parseInt(h);Number.isNaN(p)&&(p=cr.observe.throttleOnClick),a=setTimeout(()=>{f.observeThrottled=!1,r.toggleAttribute(A.observeThrottled,!1)},p)}break}}}}),n.observe(r,{attributes:!0,attributeFilter:[A.observeActiveId,A.observeThrottled]})}return Ot().then(async()=>{const{id:c,selector:d,anchor:h,observe:f,scrollMarginTop:p}=o,v=Array.from(r.querySelectorAll(d)),k=[],E={config:o,items:{},activeTocItemId:"",observeThrottled:!1};Ie[c]=E,r.setAttribute(A.observeActiveId,"");for(const I of v){if(I.hasAttribute(A.ignore))continue;const U=or(I),j=sr(I,U);I.id=j,lr(I,p);const G=ar(I,h,j);E.items[j]={element:I,id:j,text:U,anchor:G},f.enabled&&k.push(new Promise(ne=>{const x=ir(I,f,j,s,t);E.items[j].observe=x,ne(x)})),I.toggleAttribute(A.toc,!0)}const O=tr(r,{id:c,items:E.items});ht(o.store,O),k.length&&Promise.all(k).then(()=>{l(),s(E.activeTocItemId)}),r.setAttribute(A.root,c)}),{update(c){o=dt(c)},destroy(){n==null||n.disconnect();for(const c of Object.values(t))c.disconnect();clearTimeout(a)}}}function bt(r,e,o){const t=r.slice();return t[5]=e[o].id,t[6]=e[o].text,t}function mt(r){let e,o,t=!r[1]&&pt(r),n=r[1]&&gt(r);return{c(){e=g("section"),t&&t.c(),o=S(),n&&n.c(),this.h()},l(s){e=_(s,"SECTION",{class:!0});var a=y(e);t&&t.l(a),o=M(a),n&&n.l(a),a.forEach(u),this.h()},h(){i(e,"class","fixed right-4 bottom-1 max-w-[12em] rounded-xl bg-white/25 hover:bg-white/30 p-2 backdrop-blur")},m(s,a){T(s,e,a),t&&t.m(e,null),b(e,o),n&&n.m(e,null)},p(s,a){s[1]?t&&(t.d(1),t=null):t?t.p(s,a):(t=pt(s),t.c(),t.m(e,o)),s[1]?n?n.p(s,a):(n=gt(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&u(e),t&&t.d(),n&&n.d()}}}function pt(r){let e,o='<h2 class="text-orange-700 dark:text-orange-400">Table of <br/> Contents</h2>',t,n;return{c(){e=g("button"),e.innerHTML=o,this.h()},l(s){e=_(s,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1irvzdz"&&(e.innerHTML=o),this.h()},h(){i(e,"class","flex justify-center items-center z-50")},m(s,a){T(s,e,a),t||(n=ue(e,"click",r[3]),t=!0)},p:V,d(s){s&&u(e),t=!1,n()}}}function gt(r){let e,o,t,n,s="[X]",a,l,c,d=ce(Object.values(r[2].items)),h=[];for(let f=0;f<d.length;f+=1)h[f]=_t(bt(r,d,f));return{c(){e=g("ul"),o=g("h2"),t=H(`Table of Contents
					`),n=g("button"),n.textContent=s,a=S();for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=_(f,"UL",{class:!0});var p=y(e);o=_(p,"H2",{class:!0});var v=y(o);t=R(v,`Table of Contents
					`),n=_(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-c1989f"&&(n.textContent=s),v.forEach(u),a=M(p);for(let k=0;k<h.length;k+=1)h[k].l(p);p.forEach(u),this.h()},h(){i(n,"class","hover:text-white"),i(o,"class","text-orange-700 dark:text-orange-400"),i(e,"class","space-y-2 max-h-80 overflow-auto")},m(f,p){T(f,e,p),b(e,o),b(o,t),b(o,n),b(e,a);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(e,null);l||(c=ue(n,"click",r[4]),l=!0)},p(f,p){if(p&4){d=ce(Object.values(f[2].items));let v;for(v=0;v<d.length;v+=1){const k=bt(f,d,v);h[v]?h[v].p(k,p):(h[v]=_t(k),h[v].c(),h[v].m(e,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=d.length}},d(f){f&&u(e),Ye(h,f),l=!1,c()}}}function _t(r){let e,o,t=r[6]+"",n,s,a;return{c(){e=g("a"),o=g("li"),n=H(t),s=S(),this.h()},l(l){e=_(l,"A",{class:!0,href:!0});var c=y(e);o=_(c,"LI",{});var d=y(o);n=R(d,t),d.forEach(u),s=M(c),c.forEach(u),this.h()},h(){var l,c;i(e,"class","ml-2 block bg-opacity-25 text-sm"),i(e,"href",a="#"+r[5]),Ae(e,"!text-red-300",((l=r[2].activeItem)==null?void 0:l.id)===r[5]),Ae(e,"underline",((c=r[2].activeItem)==null?void 0:c.id)===r[5])},m(l,c){T(l,e,c),b(e,o),b(o,n),b(e,s)},p(l,c){var d,h;c&4&&t!==(t=l[6]+"")&&fe(n,t),c&4&&a!==(a="#"+l[5])&&i(e,"href",a),c&4&&Ae(e,"!text-red-300",((d=l[2].activeItem)==null?void 0:d.id)===l[5]),c&4&&Ae(e,"underline",((h=l[2].activeItem)==null?void 0:h.id)===l[5])},d(l){l&&u(e)}}}function dr(r){let e=Object.values(r[2].items).length&&Object.values(r[2].items).length>1,o,t=e&&mt(r);return{c(){t&&t.c(),o=$e()},l(n){t&&t.l(n),o=$e()},m(n,s){t&&t.m(n,s),T(n,o,s)},p(n,[s]){s&4&&(e=Object.values(n[2].items).length&&Object.values(n[2].items).length>1),e?t?t.p(n,s):(t=mt(n),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},i:V,o:V,d(n){n&&u(o),t&&t.d(n)}}}function hr(r,e,o){let t,n=V,s=()=>(n(),n=Lt(a,h=>o(2,t=h)),a);r.$$.on_destroy.push(()=>n());let{tocStore:a}=e;s();let l=!1;xt(()=>{window.matchMedia("(min-width: 640px)").matches&&o(1,l=!0)});const c=()=>o(1,l=!l),d=()=>o(1,l=!l);return r.$$set=h=>{"tocStore"in h&&s(o(0,a=h.tocStore))},[a,l,t,c,d]}class br extends je{constructor(e){super(),Pe(this,e,hr,dr,Ue,{tocStore:0})}}let Se,We=!1;function Xe(r,e){const o=document.createElement("script");o.src="https://utteranc.es/client.js",o.async=!0,o.crossOrigin="anonymous",o.setAttribute("repo",St),o.setAttribute("issue-number",e);const t=document.documentElement.classList.contains("dark")?"icy-dark":"github-light";o.setAttribute("theme",t),r.innerHTML="",r.appendChild(o)}function mr(r,{number:e}){function o(){Se||(Se=new IntersectionObserver(t=>{t.forEach(n=>{!We&&n.isIntersecting&&(Xe(r,e),We=!0)})}))}return o(),Se.observe(r),{destroy(){We=!1,Se.unobserve(r)}}}function vt(r,e,o){const t=r.slice();return t[11]=e[o],t}function wt(r){let e,o;return{c(){e=g("meta"),this.h()},l(t){e=_(t,"META",{property:!0,content:!0}),this.h()},h(){i(e,"property","subtitle"),i(e,"content",o=r[2].subtitle)},m(t,n){T(t,e,n)},p(t,n){n&4&&o!==(o=t[2].subtitle)&&i(e,"content",o)},d(t){t&&u(e)}}}function kt(r){let e,o,t=ce(r[2].tags),n=[];for(let s=0;s<t.length;s+=1)n[s]=yt(vt(r,t,s));return{c(){e=g("p"),o=H(`Tagged in: 
			`);for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=_(s,"P",{class:!0});var a=y(e);o=R(a,`Tagged in: 
			`);for(let l=0;l<n.length;l+=1)n[l].l(a);a.forEach(u),this.h()},h(){i(e,"class","!text-slate-400 flex-auto mb-4 italic")},m(s,a){T(s,e,a),b(e,o);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p(s,a){if(a&4){t=ce(s[2].tags);let l;for(l=0;l<t.length;l+=1){const c=vt(s,t,l);n[l]?n[l].p(c,a):(n[l]=yt(c),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=t.length}},d(s){s&&u(e),Ye(n,s)}}}function yt(r){let e,o,t,n=r[11]+"",s,a,l;return{c(){e=g("span"),o=g("a"),t=H("#"),s=H(n),l=S(),this.h()},l(c){e=_(c,"SPAN",{class:!0});var d=y(e);o=_(d,"A",{href:!0});var h=y(o);t=R(h,"#"),s=R(h,n),h.forEach(u),l=M(d),d.forEach(u),this.h()},h(){i(o,"href",a=`/blog?filter=hashtag-${r[11]}`),i(e,"class","px-1")},m(c,d){T(c,e,d),b(e,o),b(o,t),b(o,s),b(e,l)},p(c,d){d&4&&n!==(n=c[11]+"")&&fe(s,n),d&4&&a!==(a=`/blog?filter=hashtag-${c[11]}`)&&i(o,"href",a)},d(c){c&&u(e)}}}function pr(r){let e,o,t,n;return{c(){e=g("a"),o=H("Leave a reaction"),n=H(`
			if you liked this post! 🧡`),this.h()},l(s){e=_(s,"A",{href:!0});var a=y(e);o=R(a,"Leave a reaction"),a.forEach(u),n=R(s,`
			if you liked this post! 🧡`),this.h()},h(){i(e,"href",t=r[2].ghMetadata.issueUrl)},m(s,a){T(s,e,a),b(e,o),T(s,n,a)},p(s,a){a&4&&t!==(t=s[2].ghMetadata.issueUrl)&&i(e,"href",t)},i:V,o:V,d(s){s&&(u(e),u(n))}}}function gr(r){let e,o,t;return o=new Zt({props:{issueUrl:r[2].ghMetadata.issueUrl,reactions:r[2].ghMetadata.reactions}}),{c(){e=H("Reactions: "),Me(o.$$.fragment)},l(n){e=R(n,"Reactions: "),Ce(o.$$.fragment,n)},m(n,s){T(n,e,s),Oe(o,n,s),t=!0},p(n,s){const a={};s&4&&(a.issueUrl=n[2].ghMetadata.issueUrl),s&4&&(a.reactions=n[2].ghMetadata.reactions),o.$set(a)},i(n){t||(ie(o.$$.fragment,n),t=!0)},o(n){ae(o.$$.fragment,n),t=!1},d(n){n&&u(e),xe(o,n)}}}function _r(r){var rt,nt;let e,o,t,n,s,a,l,c,d,h,f,p,v,k,E,O,I,U,j,G,ne,x,oe,de=r[2].title+"",_e,He,X,Z,Je="swyx",Re,se,q,he=new Date(r[2].date).toISOString().slice(0,10)+"",ve,we,De,be,Fe,me,ke=r[2].content+"",ye,L,Ee,ee,D,F,Be,K,Ve,W,Qe="Load now",Te,qe,te,ze,Y,C,Ge,Ze;document.title=e=r[2].title;let N=r[2].subtitle&&wt(r);G=new br({props:{tocStore:r[6]}});let $=((nt=(rt=r[2])==null?void 0:rt.tags)==null?void 0:nt.length)&&kt(r);const et=[gr,pr],J=[];function tt(m,w){return m[2].ghMetadata.reactions.total_count>0?0:1}return D=tt(r),F=J[D]=et[D](r),te=new Yt({}),Y=new Ft({props:{items:r[1].list}}),{c(){o=g("link"),t=g("meta"),n=g("meta"),s=g("meta"),N&&N.c(),l=g("meta"),d=g("meta"),f=g("meta"),p=g("meta"),v=g("meta"),E=g("meta"),I=g("meta"),U=g("meta"),j=S(),Me(G.$$.fragment),ne=S(),x=g("article"),oe=g("h1"),_e=H(de),He=S(),X=g("div"),Z=g("p"),Z.textContent=Je,Re=S(),se=g("p"),q=g("a"),ve=H(he),De=S(),be=g("div"),Fe=S(),me=new jt(!1),ye=S(),L=g("div"),$&&$.c(),Ee=S(),ee=g("div"),F.c(),Be=S(),K=g("div"),Ve=H(`Loading comments...
		
		`),W=g("button"),W.textContent=Qe,qe=S(),Me(te.$$.fragment),ze=S(),Me(Y.$$.fragment),this.h()},l(m){const w=Pt("svelte-1rmf0lq",document.head);o=_(w,"LINK",{rel:!0,href:!0}),t=_(w,"META",{property:!0,content:!0}),n=_(w,"META",{property:!0,content:!0}),s=_(w,"META",{property:!0,content:!0}),N&&N.l(w),l=_(w,"META",{name:!0,content:!0}),d=_(w,"META",{property:!0,content:!0}),f=_(w,"META",{name:!0,content:!0}),p=_(w,"META",{name:!0,content:!0}),v=_(w,"META",{name:!0,content:!0}),E=_(w,"META",{name:!0,content:!0}),I=_(w,"META",{property:!0,content:!0}),U=_(w,"META",{name:!0,content:!0}),w.forEach(u),j=M(m),Ce(G.$$.fragment,m),ne=M(m),x=_(m,"ARTICLE",{class:!0});var B=y(x);oe=_(B,"H1",{class:!0});var pe=y(oe);_e=R(pe,de),pe.forEach(u),He=M(B),X=_(B,"DIV",{class:!0});var re=y(X);Z=_(re,"P",{class:!0,"data-svelte-h":!0}),Q(Z)!=="svelte-14qt8dl"&&(Z.textContent=Je),Re=M(re),se=_(re,"P",{class:!0});var ge=y(se);q=_(ge,"A",{href:!0,rel:!0,class:!0,target:!0});var ot=y(q);ve=R(ot,he),ot.forEach(u),ge.forEach(u),re.forEach(u),De=M(B),be=_(B,"DIV",{class:!0}),y(be).forEach(u),Fe=M(B),me=Ht(B,!1),B.forEach(u),ye=M(m),L=_(m,"DIV",{class:!0});var z=y(L);$&&$.l(z),Ee=M(z),ee=_(z,"DIV",{class:!0});var st=y(ee);F.l(st),st.forEach(u),Be=M(z),K=_(z,"DIV",{class:!0});var Ke=y(K);Ve=R(Ke,`Loading comments...
		
		`),W=_(Ke,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(W)!=="svelte-1x0ulvh"&&(W.textContent=Qe),Ke.forEach(u),qe=M(z),Ce(te.$$.fragment,z),ze=M(z),Ce(Y.$$.fragment,z),z.forEach(u),this.h()},h(){i(o,"rel","canonical"),i(o,"href",r[4]),i(t,"property","og:url"),i(t,"content",r[4]),i(n,"property","og:type"),i(n,"content","article"),i(s,"property","og:title"),i(s,"content",a=r[2].title),i(l,"name","Description"),i(l,"content",c=r[2].description||"swyxkit blog"),i(d,"property","og:description"),i(d,"content",h=r[2].description||"swyxkit blog"),i(f,"name","twitter:card"),i(f,"content","summary"),i(p,"name","twitter:creator"),i(p,"content","@"+Mt),i(v,"name","twitter:title"),i(v,"content",k=r[2].title),i(E,"name","twitter:description"),i(E,"content",O=r[2].description),i(I,"property","og:image"),i(I,"content",r[3]),i(U,"name","twitter:image"),i(U,"content",r[3]),i(oe,"class","md:text-center mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl "),i(Z,"class","flex items-center text-sm text-gray-700 dark:text-gray-300"),i(q,"href",we=r[2].ghMetadata.issueUrl),i(q,"rel","external noreferrer"),i(q,"class","no-underline"),i(q,"target","_blank"),i(se,"class","flex items-center text-sm text-gray-600 dark:text-gray-400"),i(X,"class","flex justify-between w-full mt-2 bg border-red sm:items-start md:flex-row md:items-center"),i(be,"class","-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 sm:mx-0 sm:w-full"),me.a=null,i(x,"class","items-start justify-center w-full mx-auto mt-16 mb-32 prose swyxcontent dark:prose-invert max-w-none svelte-r6sv7"),i(ee,"class","max-w-full p-4 mb-12 prose border-t border-b border-blue-800 dark:prose-invert"),i(W,"class","my-4 bg-blue-200 hover:bg-blue-100 text-black p-2 rounded-lg"),i(K,"class","mb-8 text-black dark:text-white "),i(L,"class","max-w-2xl mx-auto")},m(m,w){b(document.head,o),b(document.head,t),b(document.head,n),b(document.head,s),N&&N.m(document.head,null),b(document.head,l),b(document.head,d),b(document.head,f),b(document.head,p),b(document.head,v),b(document.head,E),b(document.head,I),b(document.head,U),T(m,j,w),Oe(G,m,w),T(m,ne,w),T(m,x,w),b(x,oe),b(oe,_e),b(x,He),b(x,X),b(X,Z),b(X,Re),b(X,se),b(se,q),b(q,ve),b(x,De),b(x,be),b(x,Fe),me.m(ke,x),T(m,ye,w),T(m,L,w),$&&$.m(L,null),b(L,Ee),b(L,ee),J[D].m(ee,null),b(L,Be),b(L,K),b(K,Ve),b(K,W),r[10](K),b(L,qe),Oe(te,L,null),b(L,ze),Oe(Y,L,null),C=!0,Ge||(Ze=[it(fr.call(null,x,{store:r[6],anchor:!1,observe:!0,selector:":where(h1, h2, h3)"})),ue(W,"click",r[8]),ue(W,"mouseover",r[9]),it(Te=mr.call(null,K,{number:r[5]}))],Ge=!0)},p(m,[w]){var re,ge;(!C||w&4)&&e!==(e=m[2].title)&&(document.title=e),(!C||w&16)&&i(o,"href",m[4]),(!C||w&16)&&i(t,"content",m[4]),(!C||w&4&&a!==(a=m[2].title))&&i(s,"content",a),m[2].subtitle?N?N.p(m,w):(N=wt(m),N.c(),N.m(l.parentNode,l)):N&&(N.d(1),N=null),(!C||w&4&&c!==(c=m[2].description||"swyxkit blog"))&&i(l,"content",c),(!C||w&4&&h!==(h=m[2].description||"swyxkit blog"))&&i(d,"content",h),(!C||w&4&&k!==(k=m[2].title))&&i(v,"content",k),(!C||w&4&&O!==(O=m[2].description))&&i(E,"content",O),(!C||w&8)&&i(I,"content",m[3]),(!C||w&8)&&i(U,"content",m[3]),(!C||w&4)&&de!==(de=m[2].title+"")&&fe(_e,de),(!C||w&4)&&he!==(he=new Date(m[2].date).toISOString().slice(0,10)+"")&&fe(ve,he),(!C||w&4&&we!==(we=m[2].ghMetadata.issueUrl))&&i(q,"href",we),(!C||w&4)&&ke!==(ke=m[2].content+"")&&me.p(ke),(ge=(re=m[2])==null?void 0:re.tags)!=null&&ge.length?$?$.p(m,w):($=kt(m),$.c(),$.m(L,Ee)):$&&($.d(1),$=null);let B=D;D=tt(m),D===B?J[D].p(m,w):(Dt(),ae(J[B],1,1,()=>{J[B]=null}),Rt(),F=J[D],F?F.p(m,w):(F=J[D]=et[D](m),F.c()),ie(F,1),F.m(ee,null)),Te&&Nt(Te.update)&&w&32&&Te.update.call(null,{number:m[5]});const pe={};w&2&&(pe.items=m[1].list),Y.$set(pe)},i(m){C||(ie(G.$$.fragment,m),ie(F),ie(te.$$.fragment,m),ie(Y.$$.fragment,m),C=!0)},o(m){ae(G.$$.fragment,m),ae(F),ae(te.$$.fragment,m),ae(Y.$$.fragment,m),C=!1},d(m){m&&(u(j),u(ne),u(x),u(ye),u(L)),u(o),u(t),u(n),u(s),N&&N.d(m),u(l),u(d),u(f),u(p),u(v),u(E),u(I),u(U),xe(G,m),$&&$.d(),J[D].d(),r[10](null),xe(te),xe(Y),Ge=!1,$t(Ze)}}}function vr(r,e,o){let t,n,s,a,l;Et(r,Bt,k=>o(7,l=k));const c=ur();let{data:d}=e,{commentsEl:h}=e;const f=()=>Xe(h,n),p=()=>Xe(h,n);function v(k){Ut[k?"unshift":"push"](()=>{h=k,o(0,h)})}return r.$$set=k=>{"data"in k&&o(1,d=k.data),"commentsEl"in k&&o(0,h=k.commentsEl)},r.$$.update=()=>{var k,E,O;r.$$.dirty&2&&o(2,t=d.json),r.$$.dirty&4&&o(5,n=(O=(E=(k=t==null?void 0:t.ghMetadata)==null?void 0:k.issueUrl)==null?void 0:E.split("/"))==null?void 0:O.pop()),r.$$.dirty&132&&o(4,s=t!=null&&t.canonical?t.canonical:at+l.url.pathname),r.$$.dirty&4&&o(3,a=(t==null?void 0:t.image)||`https://og.tailgraph.com/og
															?fontFamily=Roboto
															&title=${encodeURIComponent(t==null?void 0:t.title)}
															&titleTailwind=font-bold%20bg-transparent%20text-7xl
															&titleFontFamily=Poppins
															${t!=null&&t.subtitle?"&text="+encodeURIComponent(t==null?void 0:t.subtitle):""}
															&textTailwind=text-2xl%20mt-4
															&logoTailwind=h-8
															&bgUrl=https%3A%2F%2Fwallpaper.dog%2Flarge%2F20455104.jpg
															&footer=${encodeURIComponent(at)}
															&footerTailwind=text-teal-900
															&containerTailwind=border-2%20border-orange-200%20bg-transparent%20p-4
															`.replace(/\s/g,""))},[h,d,t,a,s,n,c,l,f,p,v]}class Mr extends je{constructor(e){super(),Pe(this,e,vr,_r,Ue,{data:1,commentsEl:0})}}export{Mr as component,Sr as universal};
