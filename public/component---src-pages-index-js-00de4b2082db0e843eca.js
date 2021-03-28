/*! For license information please see component---src-pages-index-js-00de4b2082db0e843eca.js.LICENSE.txt */
(self.webpackChunkdonation_component=self.webpackChunkdonation_component||[]).push([[678],{900:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(294),o=n(444),r=n(900),i=n.n(r),l=function(e){var t=e.type,n=void 0===t?"button":t,r=e.key,l=e.url,c=void 0===l?"":l,m=e.className,s=void 0===m?"":m,u=e.theme,d=void 0===u?"":u,h=e.hasDropShadow,f=void 0!==h&&h,v=e.children,p=e.onClick,E=i()("a-btn",s,{"a-btn--primary":"primary"===d,"a-btn--secondary":"secondary"===d,"a-btn--shadow":f});return c&&(c.includes("http")||c.startsWith("#")||c.startsWith("mailto")||c.startsWith("/"))?a.createElement(o.rU,{to:c,role:"button",className:E},v):a.createElement("button",{type:n,key:r,onClick:p,className:E},v)},c=function(e){var t=e.type,n=void 0===t?"text":t,o=e.className,r=void 0===o?"a-input":o,i=e.id,l=e.name,c=e.value,m=e.size,s=e.maxLength,u=e.min,d=e.max,h=e.placeholder,f=e.onChange,v=e.readOnly,p=void 0!==v&&v,E=e.disabled,_=void 0!==E&&E;return a.createElement("input",{type:n,onChange:f,className:r,id:i,name:l,value:c,size:m,maxLength:s,min:u,max:d,placeholder:h,readOnly:p,disabled:_})},m=function(e){var t=e.className,n=void 0===t?"a-message":t,o=e.children;return a.createElement("div",{className:n},o)},s=function(e){var t=e.href,n=void 0===t?"":t,r=e.className,l=void 0===r?"":r,c=e.theme,m=void 0===c?"":c,s=e.target,u=e.rel,d=e.children,h=e.onClick,f=i()("a-link",l,{"a-link--primary":"primary"===m,"a-link--secondary":"secondary"===m});return n&&(n.includes("http")||n.startsWith("mailto"))?a.createElement("a",{href:n,target:s,rel:u,onClick:h,className:f},d):a.createElement(o.rU,{to:n,target:s,rel:u,onClick:h,className:f},d)},u=function(e){var t=e.src,n=void 0===t?"":t,o=e.className,r=void 0===o?"a-img":o,i=e.width,l=e.height,c=e.alt,m=void 0===c?"":c,s=e.loading;return a.createElement("img",{src:n,className:r,width:i,height:l,alt:m,loading:s})},d=function(){var e=(0,a.useState)((function(){return 1})),t=e[0],n=e[1],o=(0,a.useState)((function(){return 40})),r=o[0],i=o[1],d=function(e){n(e)},h=function(e){i(e)};return a.createElement("div",{className:"m-donations"},a.createElement("div",{className:"m-donations__tabs-container"},a.createElement("button",{className:1===t?"m-donations__tab m-donations__tab--active":"m-donations__tab",onClick:function(){return d(1)}},"Donate monthly"),a.createElement("button",{className:2===t?"m-donations__tab m-donations__tab--active":"m-donations__tab",onClick:function(){return d(2)}},"Donate once")),a.createElement("div",{className:"m-donations__inner"},a.createElement("p",null,"I would like to make a ",2===t?"one-off":"monthly"," donation of"),a.createElement("div",{className:1===t?"m-donations__content m-donations__content--active":"m-donations__content"},a.createElement("div",{className:"m-donations__form-group"},a.createElement(l,{onClick:function(){return h(10)}},"£10"),a.createElement(l,{onClick:function(){return h(40)}},"£40"),a.createElement(l,{onClick:function(){return h(75)}},"£75"),a.createElement(l,{onClick:function(){return h(100)}},"£100"),a.createElement(c,{type:"number",placeholder:"Other amount",onChange:function(e){return h(e.target.value)}}),a.createElement(l,{theme:"secondary"},"Donate £",r," monthly"))),a.createElement("div",{className:2===t?"m-donations__content m-donations__content--active":"m-donations__content"},a.createElement("div",{className:"m-donations__form-group"},a.createElement(l,{onClick:function(){return h(10)}},"£10"),a.createElement(l,{onClick:function(){return h(40)}},"£40"),a.createElement(l,{onClick:function(){return h(75)}},"£75"),a.createElement(l,{onClick:function(){return h(100)}},"£100"),a.createElement(c,{type:"number",placeholder:"Other amount",onChange:function(e){return h(e.target.value)}}),a.createElement(l,{theme:"secondary"},"Donate £",r," today"))),a.createElement(m,null,"£",r," Could help ",2===t?"an Animal Rescue Team take on an urgent animal rescue":"answer an emergency call to our Animal Rescue Line")),a.createElement("div",{className:"m-donations__footer"},a.createElement(s,null,2===t?"I would like to give monthly":"I would like to make a one-off donation"),a.createElement("span",null,"All Direct Debits are protected by the Direct Debit Guarantee."),a.createElement(u,{src:"image1.jpg",height:"20",width:"20",alt:"test alt text",loading:"lazy"})))},h=function(){return a.createElement(a.Fragment,null,a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-00de4b2082db0e843eca.js.map