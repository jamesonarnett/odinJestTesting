(()=>{var o={138:(o,e,r)=>{o=r.nmd(o);const t=o=>{let e=o.split(""),r=[],t=[];return e.forEach((o=>{if(o.match(/[A-Z]/g)){let e=o.charCodeAt(0);e+13<=90?(e+=13,r.push(e)):(e=e+13-26,r.push(e))}if(o.match(/[a-z]/g)){let e=o.charCodeAt(0);e+13<=122?(e+=13,r.push(e)):(e=e+13-26,r.push(e))}})),r.forEach((o=>{let e=String.fromCharCode(o);t.push(e)})),t.join("")};console.log(t("JAMESON")),console.log(t("jameson")),console.log((o=>{let e=o.split("");for(let r=0;r<e.length;r++)if(e[r].match(/[A-Z]/g)){let t=o.charCodeAt(r);t+13<=90?t+=13:t=t+13-26,e[r]=String.fromCharCode(t)}return e.join("")})(t("JAMESON"))),o.export=t}},e={};function r(t){var l=e[t];if(void 0!==l)return l.exports;var n=e[t]={id:t,loaded:!1,exports:{}};return o[t](n,n.exports,r),n.loaded=!0,n.exports}r.nmd=o=>(o.paths=[],o.children||(o.children=[]),o),r(138)})();