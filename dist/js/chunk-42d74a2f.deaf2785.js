(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42d74a2f"],{"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),o=n("be13"),c=n("2b4c"),s=n("520a"),l=c("species"),u=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),v=!a(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),p=v?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[d](""),!e}):void 0;if(!v||!p||"replace"===t&&!u||"split"===t&&!f){var h=/./[d],x=n(o,d,""[t],function(t,e,n,r,i){return e.exec===s?v&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=x[0],b=x[1];r(String.prototype,t,g),i(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"386d":function(t,e,n){"use strict";var r=n("cb7c"),i=n("83a1"),a=n("5f1b");n("214f")("search",1,function(t,e,n,o){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var c=r(t),s=String(this),l=c.lastIndex;i(l,0)||(c.lastIndex=0);var u=a(c,s);return i(c.lastIndex,l)||(c.lastIndex=l),null===u?-1:u.index}]})},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(o=function(t){var e,n,o,u,f=this;return l&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(e=f[c]),o=i.call(f,t),s&&o&&(f[c]=f.global?o.index+o[0].length:e),l&&o&&o.length>1&&a.call(o[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"885a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("Usuário")])]),n("v-flex",{attrs:{sm12:""}},[n("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v(t._s(t.client.name))]),n("span",[t._v(t._s(t.client.email))]),n("br"),n("span",[t._v(t._s(t.client.funcao))])])])],1)],1),n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("Documentos")])]),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-card",[n("v-toolbar",{attrs:{color:""}},[n("v-toolbar-title",[n("v-icon",[t._v("search")])],1),n("v-text-field",{staticClass:"mx-3",attrs:{loading:t.loading,flat:"","hide-no-data":"","hide-details":"",label:"Buscar","solo-inverted":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-list",{attrs:{subheader:""}},t._l(t.filteredList,function(e){return n("v-list-tile",{key:e._id,on:{click:function(n){t.getDownalod(e._id)}}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)}),1)],1)],1)],1)],1)},i=[],a=(n("386d"),n("7f7f"),n("6762"),n("2fdb"),n("fef9")),o={data:function(){return{user:{},client:{},search:"",filers:[],id:""}},methods:{listarArquivos:function(t){var e=this;a["a"].getFiles(t).then(function(t){200==t.status&&(e.filers=t.data)})},getDownalod:function(t){a["a"].fileDownload(t).then(function(e){if(200==e.status){var n="http://191.252.200.167:3000/file/download/"+t;window.open(n)}})},getUser:function(t){var e=this;console.log(t),a["a"].getUser(t).then(function(t){console.log(t),200==t.status&&(e.client=t.data)})}},mounted:function(){this.user=this.user=JSON.parse(this.$cookie.get("user")),this.id=this.$route.params.id,this.listarArquivos(this.id),this.getUser(this.id)},computed:{filteredList:function(){var t=this;return this.filers.filter(function(e){return e.name.toLowerCase().includes(t.search.toLowerCase())})}}},c=o,s=n("2877"),l=n("6544"),u=n.n(l),f=n("b0af"),d=n("12b2"),v=n("a523"),p=n("0e8f"),h=n("132d"),x=n("a722"),g=n("8860"),b=n("ba95"),m=n("5d23"),w=n("2677"),y=n("71d9"),_=n("2a7f"),E=Object(s["a"])(c,r,i,!1,null,null,null);E.options.__file="user.vue";e["default"]=E.exports;u()(E,{VCard:f["a"],VCardTitle:d["a"],VContainer:v["a"],VFlex:p["a"],VIcon:h["a"],VLayout:x["a"],VList:g["a"],VListTile:b["a"],VListTileContent:m["a"],VListTileTitle:m["b"],VTextField:w["a"],VToolbar:y["a"],VToolbarTitle:_["a"]})},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}}}]);
//# sourceMappingURL=chunk-42d74a2f.deaf2785.js.map