function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function s(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return Array.from(t.childNodes)}function x(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){let n=0;for(;n<r.attributes.length;){const t=r.attributes[n];e[t.name]?n++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function w(t){return _(t," ")}function A(t,n){n=""+n,t.data!==n&&(t.data=n)}function v(t,n=document.body){return Array.from(n.querySelectorAll(t))}let E;function j(t){E=t}function N(t,n){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.context.set(t,n)}const S=[],k=[],q=[],C=[],z=Promise.resolve();let B=!1;function F(t){q.push(t)}function M(){const t=new Set;do{for(;S.length;){const t=S.shift();j(t),O(t.$$)}for(;k.length;)k.pop()();for(let n=0;n<q.length;n+=1){const e=q[n];t.has(e)||(e(),t.add(e))}q.length=0}while(S.length);for(;C.length;)C.pop()();B=!1}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const T=new Set;let D;function G(){D={r:0,c:[],p:D}}function P(){D.r||r(D.c),D=D.p}function H(t,n){t&&t.i&&(T.delete(t),t.i(n))}function I(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),D.c.push(()=>{T.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function J(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],i=n[c];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function K(t){return"object"==typeof t&&null!==t?t:{}}function L(t){t&&t.c()}function Q(t,n){t&&t.l(n)}function R(t,n,o){const{fragment:u,on_mount:i,on_destroy:a,after_update:f}=t.$$;u&&u.m(n,o),F(()=>{const n=i.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]}),f.forEach(F)}function U(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function V(t,n){-1===t.$$.dirty[0]&&(S.push(t),B||(B=!0,z.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function W(n,e,c,u,i,a,f=[-1]){const s=E;j(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:o(),dirty:f};let p=!1;d.ctx=c?c(n,l,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&V(n,t)),e}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(b(e.target)):d.fragment&&d.fragment.c(),e.intro&&H(n.$$.fragment),R(n,e.target,e.anchor),M()),j(s)}class X{$destroy(){U(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{J as A,K as B,N as C,$ as D,G as E,P as F,p as G,X as S,g as a,b,x as c,_ as d,h as e,d as f,w as g,y as h,W as i,l as j,s as k,i as l,L as m,t as n,Q as o,R as p,a as q,f as r,u as s,m as t,H as u,I as v,U as w,A as x,v as y,n as z};
