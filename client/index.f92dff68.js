import{S as e,i as t,s as o,e as s,a as n,t as a,m as r,y as c,c as p,f as d,g as l,b as i,d as m,o as h,h as f,k as u,j as $,p as g,u as E,v as y,w as j}from"./index.3b0adbd5.js";import{C as w}from"./ContentList.a3937a31.js";function b(e){let t;return{c(){t=a("Blog Posts")},l(e){t=m(e,"Blog Posts")},m(e,o){$(e,t,o)},d(e){e&&d(t)}}}function v(e){let t;return{c(){t=a("Projects")},l(e){t=m(e,"Projects")},m(e,o){$(e,t,o)},d(e){e&&d(t)}}}function x(e){let t,o,x,T,P,A,K,M,N,k,C,I,O,S,H;const L=new w({props:{content:e[0],$$slots:{default:[b]},$$scope:{ctx:e}}}),q=new w({props:{content:e[1],$$slots:{default:[v]},$$scope:{ctx:e}}});return{c(){t=s("meta"),o=s("meta"),x=s("meta"),T=s("meta"),P=s("meta"),A=s("meta"),K=n(),M=s("section"),N=s("p"),k=a('Hi! My name is Khaled (pronounced "Kah-leed"), and I\'m a design-driven web developer from New York.'),C=n(),I=s("section"),r(L.$$.fragment),O=n(),S=s("section"),r(q.$$.fragment),this.h()},l(e){const s=c('[data-svelte="svelte-ehqbhi"]',document.head);t=p(s,"META",{name:!0,content:!0}),o=p(s,"META",{property:!0,content:!0}),x=p(s,"META",{property:!0,content:!0}),T=p(s,"META",{property:!0,content:!0}),P=p(s,"META",{property:!0,content:!0}),A=p(s,"META",{property:!0,content:!0}),s.forEach(d),K=l(e),M=p(e,"SECTION",{class:!0});var n=i(M);N=p(n,"P",{class:!0});var a=i(N);k=m(a,'Hi! My name is Khaled (pronounced "Kah-leed"), and I\'m a design-driven web developer from New York.'),a.forEach(d),n.forEach(d),C=l(e),I=p(e,"SECTION",{class:!0});var r=i(I);h(L.$$.fragment,r),r.forEach(d),O=l(e),S=p(e,"SECTION",{class:!0});var f=i(S);h(q.$$.fragment,f),f.forEach(d),this.h()},h(){document.title="KHALED PENDLETON",f(t,"name","description"),f(t,"content","Explore the world of Khaled Pendleton, featuring blog posts, social media, and past projects."),f(o,"property","og:title"),f(o,"content","Khaled Pendleton: A design-driven web developer"),f(x,"property","og:url"),f(x,"content","https://khaledpendleton.com"),f(T,"property","og:type"),f(T,"content","website"),f(P,"property","og:description"),f(P,"content","Explore the world of Khaled Pendleton, featuring blog posts, social media, and past projects."),f(A,"property","og:image"),f(A,"content","https://khaledpendleton.com/images/me.jpg"),f(N,"class","title"),f(M,"class","box atf"),f(I,"class","box"),f(S,"class","box")},m(e,s){u(document.head,t),u(document.head,o),u(document.head,x),u(document.head,T),u(document.head,P),u(document.head,A),$(e,K,s),$(e,M,s),u(M,N),u(N,k),$(e,C,s),$(e,I,s),g(L,I,null),$(e,O,s),$(e,S,s),g(q,S,null),H=!0},p(e,[t]){const o={};1&t&&(o.content=e[0]),4&t&&(o.$$scope={dirty:t,ctx:e}),L.$set(o);const s={};2&t&&(s.content=e[1]),4&t&&(s.$$scope={dirty:t,ctx:e}),q.$set(s)},i(e){H||(E(L.$$.fragment,e),E(q.$$.fragment,e),H=!0)},o(e){y(L.$$.fragment,e),y(q.$$.fragment,e),H=!1},d(e){d(t),d(o),d(x),d(T),d(P),d(A),e&&d(K),e&&d(M),e&&d(C),e&&d(I),j(L),e&&d(O),e&&d(S),j(q)}}}async function T({params:e,query:t}){const o=await this.fetch("blog.json"),s=await o.json(),n=await this.fetch("portfolio.json");return{posts:s,projects:await n.json()}}function P(e,t,o){let{posts:s}=t,{projects:n}=t;return e.$set=(e=>{"posts"in e&&o(0,s=e.posts),"projects"in e&&o(1,n=e.projects)}),[s,n]}export default class extends e{constructor(e){super(),t(this,e,P,x,o,{posts:0,projects:1})}}export{T as preload};