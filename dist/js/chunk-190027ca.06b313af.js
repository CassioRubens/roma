(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190027ca"],{"2fdb":function(e,t,n){"use strict";var a=n("5ca1"),i=n("d2c8"),o="includes";a(a.P+a.F*n("5147")(o),"String",{includes:function(e){return!!~i(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"386d":function(e,t,n){"use strict";var a=n("cb7c"),i=n("83a1"),o=n("5f1b");n("214f")("search",1,function(e,t,n,s){return[function(n){var a=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=s(n,e,this);if(t.done)return t.value;var r=a(e),l=String(this),c=r.lastIndex;i(c,0)||(r.lastIndex=0);var d=o(r,l);return i(r.lastIndex,c)||(r.lastIndex=c),null===d?-1:d.index}]})},5147:function(e,t,n){var a=n("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},6762:function(e,t,n){"use strict";var a=n("5ca1"),i=n("c366")(!0);a(a.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"885a":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[e._v("Usuário")])]),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-container",{attrs:{"grid-list-xs":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm1:"","mt-3":""}},[n("div",[n("v-avatar",[n("v-icon",{attrs:{size:80}},[e._v("account_circle")])],1)],1)]),n("v-flex",{attrs:{sm11:""}},[n("div",[n("div",{staticClass:"headline"},[e._v(e._s(e.client.name))]),n("span",[e._v(e._s(e.client.email))]),n("br"),n("v-chip",{attrs:{color:"primary","text-color":"white"}},[e._v("\n                                "+e._s(e.client.funcao)+"\n                            ")])],1)])],1)],1)],1),n("v-flex",{attrs:{sm12:""}},[n("v-expansion-panel",e._l(e.painel,function(t,a){return n("v-expansion-panel-content",{key:a},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.nome))]),n("v-card",[n("v-list",{staticClass:"grey lighten-3",attrs:{"two-line":""}},e._l(t.dados,function(t){return n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v(e._s(t.value))]),n("v-list-tile-sub-title",[e._v(e._s(t.info))])],1)],1)}),1)],1)],1)}),1)],1),n("v-flex",{attrs:{sm12:""}},[n("h3",[e._v("Documentos")])]),n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-card",[n("v-card-title",[e._v("\n                    Arquivos\n                    "),n("v-spacer")],1),n("v-data-table",{staticClass:"elevation-1",attrs:{dark:"",headers:e.headers,items:e.filers},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.tipo))]),n("td",[e._v(e._s(t.item.title))]),n("td",[e._v(e._s(t.item.complemento))]),n("td",[e._v(e._s(t.item.createDate))]),n("td",[n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(n){e.getDownalod(t.item._id)}}},[n("v-icon",[e._v("attach_file")])],1)],1)]}}])})],1)],1)],1)],1)},i=[],o=(n("386d"),n("6762"),n("2fdb"),n("28a5"),n("3835")),s=(n("a481"),n("7f7f"),n("cadf"),n("551c"),n("097d"),n("fef9")),r={data:function(){return{user:{},client:{},search:"",filers:[],headers:[{text:"Tipo",align:"left",sortable:!1,value:"tipo"},{text:"Titulo",value:"titulo"},{text:"Complemento",value:"complemento"},{text:"Data de publicação",value:"data"}],painel:[],id:""}},methods:{listarArquivos:function(e){var t=this;s["a"].getFiles(e).then(function(e){if(200==e.status){for(var n=[],a={},i=0;i<e.data.length;i++)a=e.data[i],a.createDate=t.formatDate(e.data[i].createDate),n.push(a);t.filers=n}})},getDownalod:function(e){var t="http://191.252.200.167:3000/file/download/"+e;window.open(t)},getUser:function(e){var t=this;s["a"].getUser(e).then(function(e){200==e.status&&(t.client=e.data,t.painel.push({nome:"Dados do trabalhador",dados:[{info:"Nome do trabalhador",value:t.client.name},{info:"CPF",value:t.client.cpf},{info:"Número do pis",value:t.client.numero_pis},{info:"Nacionalidade",value:t.client.nacionalidade},{info:"Nome do pai",value:t.client.pai},{info:"Nome da mãe",value:t.client.mae},{info:"Local de nascimento",value:t.client.local_nascimento},{info:"Estado Civil",value:t.estadoCivil(t.client.estado_civil)},{info:"Sexo",value:t.client.sexo},{info:"Função",value:t.client.funcao},{info:"Salário",value:t.client.salario},{info:"Variáveis do salario",value:t.client.variaveis_salario}]},{nome:"Dados complementares do trabalhador",dados:[{info:"Reside no exterior",value:t.resideNoExterior(t.client.complemento_trabalhador.residente_exterior)},{info:"Endereço",value:t.client.complemento_trabalhador.endereco},{info:"Número",value:t.client.complemento_trabalhador.numero},{info:"Bairro",value:t.client.complemento_trabalhador.bairro},{info:"Complemento",value:t.client.complemento_trabalhador.complemento},{info:"Cidade",value:t.client.complemento_trabalhador.cidade},{info:"Cep",value:t.client.complemento_trabalhador.cep},{info:"País",value:t.client.complemento_trabalhador.pais},{info:"Residência própria",value:t.resideNoExterior(t.client.complemento_trabalhador.residencia_propria)}]},{nome:"Documentos de identificação",dados:[{info:"Número da CTPS",value:t.client.identificacao.num_ctps},{info:"Série da CTPS",value:t.client.identificacao.serie_ctps},{info:"Unidade de federação da expedição da CTPS",value:t.client.identificacao.unidade_ctps},{info:"RG",value:t.client.identificacao.rg},{info:"Data de expedição",value:t.formatar(t.client.identificacao.data_expedicao)},{info:"Orgão emissor",value:t.client.identificacao.orgao_emissor},{info:"Data de validade do documento",value:t.formatar(t.client.identificacao.data_validade)}]},{nome:"Informações de contato",dados:[{info:"Número de telefone fixo",value:t.client.contato.telefone_fixo},{info:"Número de celular",value:t.client.contato.celular},{info:"Endereço de email institucional",value:t.client.contato.email_institucional},{info:"Endereço de email pessoal",value:t.client.email}]},{nome:"Escolaridade",dados:[{info:"Informações",value:t.escolaridade(t.client.escolaridade)}]},{nome:"Dependentes",dados:[{info:"",value:""}]}))})},formatDate:function(e){var t=(new Date).toISOString().replace(/T/," ").replace(/\..+/,"");if(!t)return null;var n=t.split("-"),a=Object(o["a"])(n,3),i=a[0],s=a[1],r=a[2],l=r.split(" "),c=Object(o["a"])(l,2),d=c[0],u=c[1];return"".concat(d,"/").concat(s,"/").concat(i," - ").concat(u)},formatar:function(e){if(!e)return null;var t=e.split("-"),n=Object(o["a"])(t,3),a=n[0],i=n[1],s=n[2],r=s.split("T"),l=Object(o["a"])(r,2),c=l[0];l[1];return"".concat(c,"/").concat(i,"/").concat(a)},estadoCivil:function(e){switch(e){case 1:return"Solteiro";case 2:return"Casado";case 3:return"Divorciado";case 4:return"Viúvo";case 5:return"União estavel";default:return"Outro"}},resideNoExterior:function(e){return 1==e?"Sim":"Não"},escolaridade:function(e){switch(e){case 1:return"ANALFABETO";case 2:return"ATÉ A 4ª SÉRIE INCOMPLETA DO ENSINO FUNDAMENTAL (ANTIGO 1º GRAU OU PRIMÁRIO), OU QUE TENHA SE ALFABETIZADO SEM TER FREQUENTADO ESCOLA REGULAR";case 3:return"4ª SÉRIE COMPLETA DO ENSINO FUNDAMENTAL (ANTIGO 1º GRAU OU GINÁSIO)";case 4:return"DA 5ª A 8ª SERIE DO ENSINO FUNDAMENTAL (ANTIGO 1º GRAU OU GINÁSIO)";case 5:return"ENSINO FUNDAMENTAL COMPLETO (ANTIGO 1º GRAU, PRIMÁRIO OU GINÁSIO)";case 6:return"ENSINO MÉDIO INCOMPLETO (ANTIGO 2º GRAU, SECUNDÁRIO OU COLEGIAL)";case 7:return"EDUCAÇÃO SUPERIOR INCOMPLETA";case 8:return"EDUCAÇÃO SUPERIOR INCOMPLETA";case 9:return"EDUCAÇÃO SUPERIOR COMPLETA";case 10:return"PÓS-GRADUAÇÃO";case 11:return"MESTRADO";case 12:return"DOUTORADO"}}},mounted:function(){this.user=this.user=JSON.parse(this.$cookie.get("user")),this.id=this.$route.params.id,this.listarArquivos(this.id),this.getUser(this.id)},computed:{filteredList:function(){var e=this;return this.filers.filter(function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})}}},l=r,c=n("2877"),d=n("6544"),u=n.n(d),f=n("8212"),p=n("8336"),v=n("b0af"),h=n("12b2"),m=n("cc20"),x=n("a523"),_=n("8fea"),O=(n("c321"),n("6a18")),b=n("94ab"),A=n("58df"),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g=Object(A["a"])(O["a"],Object(b["b"])("expansionPanel")).extend({name:"v-expansion-panel",provide:function(){return{expansionPanel:this}},props:{disabled:Boolean,readonly:Boolean,expand:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,value:{type:[Number,Array],default:function(){return null}}},data:function(){return{items:[],open:[]}},computed:{classes:function(){return E({"v-expansion-panel--focusable":this.focusable,"v-expansion-panel--popout":this.popout,"v-expansion-panel--inset":this.inset},this.themeClasses)}},watch:{expand:function(e){var t=-1;if(!e){var n=this.open.reduce(function(e,t){return t?e+1:e},0),a=Array(this.items.length).fill(!1);1===n&&(t=this.open.indexOf(!0)),t>-1&&(a[t]=!0),this.open=a}this.$emit("input",e?this.open:t>-1?t:null)},value:function(e){this.updateFromValue(e)}},mounted:function(){null!==this.value&&this.updateFromValue(this.value)},methods:{updateFromValue:function(e){if(!Array.isArray(e)||this.expand){var t=Array(this.items.length).fill(!1);"number"===typeof e?t[e]=!0:null!==e&&(t=e),this.updatePanels(t)}},updatePanels:function(e){this.open=e;for(var t=0;t<this.items.length;t++)this.items[t].toggle(e&&e[t])},panelClick:function(e){for(var t=this.expand?this.open.slice():Array(this.items.length).fill(!1),n=0;n<this.items.length;n++)this.items[n]._uid===e&&(t[n]=!this.open[n],!this.expand&&this.$emit("input",t[n]?n:null));this.updatePanels(t),this.expand&&this.$emit("input",t)},register:function(e){var t=this.items.push(e)-1;null!==this.value&&this.updateFromValue(this.value),e.toggle(!!this.open[t])},unregister:function(e){var t=this.items.findIndex(function(t){return t._uid===e._uid});this.items.splice(t,1),this.open.splice(t,1)}},render:function(e){return e("ul",{staticClass:"v-expansion-panel",class:this.classes},this.$slots.default)}}),C=n("0789"),N=n("3e79"),I=n("98a1"),y=n("ad54"),D=n("9d26"),S=n("d9bd");function T(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var P=Object(A["a"])(N["a"],I["a"],y["a"],Object(b["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend({name:"v-expansion-panel-content",props:{disabled:Boolean,readonly:Boolean,expandIcon:{type:String,default:"$vuetify.icons.expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{height:"auto"}},computed:{containerClasses:function(){return{"v-expansion-panel__container--active":this.isActive,"v-expansion-panel__container--disabled":this.isDisabled}},isDisabled:function(){return this.expansionPanel.disabled||this.disabled},isReadonly:function(){return this.expansionPanel.readonly||this.readonly}},beforeMount:function(){this.expansionPanel.register(this),"undefined"!==typeof this.value&&Object(S["c"])("v-model has been deprecated",this)},beforeDestroy:function(){this.expansionPanel.unregister(this)},methods:{onKeydown:function(e){13===e.keyCode&&this.$el===document.activeElement&&this.expansionPanel.panelClick(this._uid)},onHeaderClick:function(){this.isReadonly||this.expansionPanel.panelClick(this._uid)},genBody:function(){return this.$createElement("div",{ref:"body",class:"v-expansion-panel__body",directives:[{name:"show",value:this.isActive}]},this.showLazyContent(this.$slots.default))},genHeader:function(){var e=[].concat(T(this.$slots.header||[]));return this.hideActions||e.push(this.genIcon()),this.$createElement("div",{staticClass:"v-expansion-panel__header",directives:[{name:"ripple",value:this.ripple}],on:{click:this.onHeaderClick}},e)},genIcon:function(){var e=this.$slots.actions||[this.$createElement(D["a"],this.expandIcon)];return this.$createElement("transition",{attrs:{name:"fade-transition"}},[this.$createElement("div",{staticClass:"v-expansion-panel__header__icon",directives:[{name:"show",value:!this.isDisabled}]},e)])},toggle:function(e){e&&(this.isBooted=!0),this.isActive=e}},render:function(e){return e("li",{staticClass:"v-expansion-panel__container",class:this.containerClasses,attrs:{tabindex:this.isReadonly||this.isDisabled?null:0},on:{keydown:this.onKeydown}},[this.$slots.header&&this.genHeader(),e(C["a"],[this.genBody()])])}}),R=n("0e8f"),U=n("132d"),w=n("a722"),L=n("8860"),V=n("ba95"),$=n("5d23"),B=n("9910"),G=Object(c["a"])(l,a,i,!1,null,null,null);G.options.__file="user.vue";t["default"]=G.exports;u()(G,{VAvatar:f["a"],VBtn:p["a"],VCard:v["a"],VCardTitle:h["a"],VChip:m["a"],VContainer:x["a"],VDataTable:_["a"],VExpansionPanel:g,VExpansionPanelContent:P,VFlex:R["a"],VIcon:U["a"],VLayout:w["a"],VList:L["a"],VListTile:V["a"],VListTileContent:$["a"],VListTileSubTitle:$["b"],VListTileTitle:$["c"],VSpacer:B["a"]})},c321:function(e,t,n){},d2c8:function(e,t,n){var a=n("aae3"),i=n("be13");e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}}}]);
//# sourceMappingURL=chunk-190027ca.06b313af.js.map