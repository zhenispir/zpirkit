import{e as It}from"../chunks/index.AZhz8ofI.js";import{s as kt,n as Et}from"../chunks/scheduler.CNzAINQ-.js";import{S as Mt,i as Dt,g as r,m as F,s as M,h as n,j as x,n as G,f as a,c as D,k as t,a as pt,x as e,o as wt,r as Y,D as At,z as dt,u as B,v as Q,d as X,t as Z,w as tt}from"../chunks/index.CQrDriHR.js";import{L as $t}from"../chunks/LatestPosts.y3quUP3V.js";import{S as z,R as St,b as ut,c as ft,D as Tt,M as Lt}from"../chunks/siteConfig.B41vAn06.js";async function Ct({setHeaders:d,fetch:s}){const l=await s("/api/listContent.json");if(l.status>400)throw It(l.status,await l.text());const o=await l.json();return d({"cache-control":"public, max-age=3600"}),{items:o.slice(0,10)}}const zt=Object.freeze(Object.defineProperty({__proto__:null,load:Ct},Symbol.toStringTag,{value:"Module"}));function Ht(d){let s,l,o,i,u,f,g,v;return{c(){s=r("a"),l=r("div"),o=r("div"),i=r("h4"),u=F(d[0]),f=M(),g=r("div"),v=F(d[2]),this.h()},l(h){s=n(h,"A",{class:!0,href:!0});var p=x(s);l=n(p,"DIV",{class:!0});var _=x(l);o=n(_,"DIV",{class:!0});var w=x(o);i=n(w,"H4",{class:!0});var T=x(i);u=G(T,d[0]),T.forEach(a),w.forEach(a),f=D(_),g=n(_,"DIV",{class:!0});var S=x(g);v=G(S,d[2]),S.forEach(a),_.forEach(a),p.forEach(a),this.h()},h(){t(i,"class","mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg"),t(o,"class","flex flex-col justify-between md:flex-row"),t(g,"class","capsize flex items-center text-gray-800 dark:text-gray-200"),t(l,"class","flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900"),t(s,"class","w-full transform rounded-xl bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 transition-all hover:scale-[1.01] md:w-1/3"),t(s,"href",d[1])},m(h,p){pt(h,s,p),e(s,l),e(l,o),e(o,i),e(i,u),e(l,f),e(l,g),e(g,v)},p(h,[p]){p&1&&wt(u,h[0]),p&4&&wt(v,h[2]),p&2&&t(s,"href",h[1])},i:Et,o:Et,d(h){h&&a(s)}}}function jt(d,s,l){let{title:o="Untitled post"}=s,{href:i="#"}=s,{stringData:u}=s;return d.$$set=f=>{"title"in f&&l(0,o=f.title),"href"in f&&l(1,i=f.href),"stringData"in f&&l(2,u=f.stringData)},[o,i,u]}class ht extends Mt{constructor(s){super(),Dt(this,s,jt,Ht,kt,{title:0,href:1,stringData:2})}}function Pt(d){let s,l,o,i,u,f,g,v,h,p,_,w,T,S,b,N,y,I,et,O,R,at,rt,nt,L,gt=`An opinionated blog starter for <span class="font-semibold">SvelteKit + Tailwind + Netlify/Vercel.</span> Updated for
				<a href="https://github.com/sveltejs/kit/">SvelteKit 1.0</a>!`,st,C,xt=`<a href="${St}">View source and feature list here!</a>`,lt,A,H,vt="Featured Posts",ot,E,j,it,P,ct,V,mt,$,J;return document.title=z,j=new ht({props:{title:"Welcome to swyxkit 2022!",href:"/welcome",stringData:"Jan 2022"}}),P=new ht({props:{title:"Moving to a GitHub CMS",href:"/moving-to-a-github-cms",stringData:"Jan 2022"}}),V=new ht({props:{title:"HTML Ipsum demo",href:"/moo",stringData:"Jan 2022"}}),$=new $t({props:{items:d[0]}}),{c(){s=r("link"),l=r("link"),o=r("meta"),i=r("meta"),u=r("meta"),f=r("meta"),g=r("meta"),v=r("meta"),h=r("meta"),p=r("meta"),_=r("meta"),w=r("meta"),T=r("meta"),S=M(),b=r("div"),N=r("div"),y=r("div"),I=r("h1"),et=F(`This is

				`),O=r("span"),R=r("span"),at=F(z),rt=F(`
				!`),nt=M(),L=r("h2"),L.innerHTML=gt,st=M(),C=r("p"),C.innerHTML=xt,lt=M(),A=r("section"),H=r("h3"),H.textContent=vt,ot=M(),E=r("div"),Y(j.$$.fragment),it=M(),Y(P.$$.fragment),ct=M(),Y(V.$$.fragment),mt=M(),Y($.$$.fragment),this.h()},l(c){const m=At("svelte-1voan3v",document.head);s=n(m,"LINK",{rel:!0,href:!0}),l=n(m,"LINK",{rel:!0,type:!0,href:!0}),o=n(m,"META",{property:!0,content:!0}),i=n(m,"META",{property:!0,content:!0}),u=n(m,"META",{property:!0,content:!0}),f=n(m,"META",{name:!0,content:!0}),g=n(m,"META",{property:!0,content:!0}),v=n(m,"META",{property:!0,content:!0}),h=n(m,"META",{name:!0,content:!0}),p=n(m,"META",{name:!0,content:!0}),_=n(m,"META",{name:!0,content:!0}),w=n(m,"META",{name:!0,content:!0}),T=n(m,"META",{name:!0,content:!0}),m.forEach(a),S=D(c),b=n(c,"DIV",{class:!0});var k=x(b);N=n(k,"DIV",{class:!0});var _t=x(N);y=n(_t,"DIV",{class:!0});var U=x(y);I=n(U,"H1",{class:!0});var q=x(I);et=G(q,`This is

				`),O=n(q,"SPAN",{class:!0});var bt=x(O);R=n(bt,"SPAN",{class:!0});var yt=x(R);at=G(yt,z),yt.forEach(a),bt.forEach(a),rt=G(q,`
				!`),q.forEach(a),nt=D(U),L=n(U,"H2",{class:!0,"data-svelte-h":!0}),dt(L)!=="svelte-efra4x"&&(L.innerHTML=gt),st=D(U),C=n(U,"P",{class:!0,"data-svelte-h":!0}),dt(C)!=="svelte-1s4spte"&&(C.innerHTML=xt),U.forEach(a),_t.forEach(a),lt=D(k),A=n(k,"SECTION",{class:!0});var W=x(A);H=n(W,"H3",{class:!0,"data-svelte-h":!0}),dt(H)!=="svelte-hqbh27"&&(H.textContent=vt),ot=D(W),E=n(W,"DIV",{class:!0});var K=x(E);B(j.$$.fragment,K),it=D(K),B(P.$$.fragment,K),ct=D(K),B(V.$$.fragment,K),K.forEach(a),W.forEach(a),mt=D(k),B($.$$.fragment,k),k.forEach(a),this.h()},h(){t(s,"rel","canonical"),t(s,"href",ut),t(l,"rel","alternate"),t(l,"type","application/rss+xml"),t(l,"href",ut+"/rss.xml"),t(o,"property","og:url"),t(o,"content",ut),t(i,"property","og:type"),t(i,"content","article"),t(u,"property","og:title"),t(u,"content",z),t(f,"name","Description"),t(f,"content",ft),t(g,"property","og:description"),t(g,"content",ft),t(v,"property","og:image"),t(v,"content",Tt),t(h,"name","twitter:card"),t(h,"content","summary"),t(p,"name","twitter:creator"),t(p,"content","@"+Lt),t(_,"name","twitter:title"),t(_,"content",z),t(w,"name","twitter:description"),t(w,"content",ft),t(T,"name","twitter:image"),t(T,"content",Tt),t(R,"class","relative text-yellow-400 skew-y-3"),t(O,"class","relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-500"),t(I,"class","mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl"),t(L,"class","mb-4 text-gray-700 dark:text-gray-200"),t(C,"class","mb-16 text-gray-600 dark:text-gray-400"),t(y,"class","flex flex-col pr-8"),t(N,"class","flex flex-col-reverse items-start sm:flex-row"),t(H,"class","mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl"),t(E,"class","flex flex-col gap-6 md:flex-row"),t(A,"class","w-full mb-16"),t(b,"class","flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto border-gray-200 dark:border-gray-700 sm:px-8")},m(c,m){e(document.head,s),e(document.head,l),e(document.head,o),e(document.head,i),e(document.head,u),e(document.head,f),e(document.head,g),e(document.head,v),e(document.head,h),e(document.head,p),e(document.head,_),e(document.head,w),e(document.head,T),pt(c,S,m),pt(c,b,m),e(b,N),e(N,y),e(y,I),e(I,et),e(I,O),e(O,R),e(R,at),e(I,rt),e(y,nt),e(y,L),e(y,st),e(y,C),e(b,lt),e(b,A),e(A,H),e(A,ot),e(A,E),Q(j,E,null),e(E,it),Q(P,E,null),e(E,ct),Q(V,E,null),e(b,mt),Q($,b,null),J=!0},p(c,[m]){const k={};m&1&&(k.items=c[0]),$.$set(k)},i(c){J||(X(j.$$.fragment,c),X(P.$$.fragment,c),X(V.$$.fragment,c),X($.$$.fragment,c),J=!0)},o(c){Z(j.$$.fragment,c),Z(P.$$.fragment,c),Z(V.$$.fragment,c),Z($.$$.fragment,c),J=!1},d(c){c&&(a(S),a(b)),a(s),a(l),a(o),a(i),a(u),a(f),a(g),a(v),a(h),a(p),a(_),a(w),a(T),tt(j),tt(P),tt(V),tt($)}}}function Vt(d,s,l){let o,{data:i}=s;return d.$$set=u=>{"data"in u&&l(1,i=u.data)},d.$$.update=()=>{d.$$.dirty&2&&l(0,o=i.items)},[o,i]}class Ft extends Mt{constructor(s){super(),Dt(this,s,Vt,Pt,kt,{data:1})}}export{Ft as component,zt as universal};
