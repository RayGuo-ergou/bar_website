(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{389:function(t,e,r){var content=r(392);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("65c238dc",content,!0,{sourceMap:!1})},390:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d}));var n=r(394),o=r(0),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");n.a},391:function(t,e,r){"use strict";r(389)},392:function(t,e,r){(e=r(7)(!1)).push([t.i,".gradient-fill .v-responsive__content{background:#000;background:linear-gradient(90deg,rgba(3,12,41,.7),rgba(5,11,31,.7))}",""]),t.exports=e},393:function(t,e,r){"use strict";r.r(e);var n={props:{heroAlt:{type:Array,default:function(){return[]}}}},o=(r(391),r(26)),l=r(34),c=r.n(l),d=r(375),v=r(388),h=r(146),m=r(376),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"hero"}},t._l(t.heroAlt,(function(e,i){return r("v-img",{key:i,staticClass:"gradient-fill",attrs:{width:"100%",height:"30vh",src:e.src,dark:""}},[r("v-container",{attrs:{"fill-height":""}},[r("v-row",[r("v-col",[r("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n            "+t._s(e.heading.toUpperCase())+"\n          ")])])],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:v.a,VImg:h.a,VRow:m.a})},394:function(t,e,r){"use strict";r(149),r(150),r(11);var n=r(1),o=(r(395),r(189)),l=r(190),c=r(56),d=r(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},395:function(t,e,r){var content=r(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("e23b7040",content,!0,{sourceMap:!1})},396:function(t,e,r){(e=r(7)(!1)).push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=e},397:function(t,e,r){"use strict";var n=r(44);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},399:function(t,e,r){var content=r(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("fa9d7b1e",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r(399)},402:function(t,e,r){(e=r(7)(!1)).push([t.i,".zoom[data-v-166d98d6]{transform:scale(1.025) translateY(-10px)}.notzoom[data-v-166d98d6],.zoom[data-v-166d98d6]{transition:transform .2s}",""]),t.exports=e},403:function(t,e,r){var content=r(404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("01907af4",content,!0,{sourceMap:!1})},404:function(t,e,r){(e=r(7)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},407:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{planDuration:"monthly",plans:[{plan:"Basic",elevation:0,color:"primary darken-1",description:"Best Plan for Small Businesses",monthly:"$10",yearly:"$100",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Silver",elevation:16,color:"green darken-2",description:"Best Plan for Professional Users",monthly:"$40",yearly:"$400",features:[{icon:"mdi-web",text:"5 websites"},{icon:"mdi-harddisk",text:"10 GB storage"},{icon:"mdi-signal",text:"500 GB bandwidth"},{icon:"mdi-account",text:"10 email addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]},{plan:"Gold",elevation:0,color:"orange darken-3",description:"Best Plan for Power Users",monthly:"$100",yearly:"$1000",features:[{icon:"mdi-web",text:"unlimited websites"},{icon:"mdi-harddisk",text:"unlimited storage"},{icon:"mdi-signal",text:"unlimited bandwidth"},{icon:"mdi-account",text:"unlimited addreses"},{icon:"mdi-domain",text:"free domain with annual plan"},{icon:"mdi-server",text:"4X pricessing power"},{icon:"mdi-dns",text:"premium DNS"}]}]}}},o=(r(401),r(26)),l=r(34),c=r.n(l),d=r(118),v=r(427),h=r(394),m=r(390),f=r(375),x=r(388),_=r(437),y=r(181),w=r(182),k=r(119),C=r(23),O=r(94),j=r(376),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-16",class:t.$vuetify.theme.dark?"black":"white"},[r("v-container",[r("v-row",[r("v-col",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"text-center"},[r("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4"},[t._v("\n              The most affordable pricing\n            ")]),t._v(" "),r("p",{staticClass:"my-10 title"},[t._v("\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\n              diam nonummy nibh euismod tincidunt ut laoreet dolore magna\n              aliquam erat volutpat.\n            ")]),t._v(" "),r("div",{staticClass:"text-center"},[r("v-btn-toggle",{attrs:{"active-class":"primary darken-1",borderless:"",mandatory:"",light:"",color:"white"},model:{value:t.planDuration,callback:function(e){t.planDuration=e},expression:"planDuration"}},[r("v-btn",{attrs:{value:"monthly"}},[t._v(" Monthly Plan ")]),t._v(" "),r("v-btn",{attrs:{value:"yearly"}},[t._v(" Yearly Plan ")])],1)],1)])],1)],1)],1)],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"}},t._l(t.plans,(function(e,n){return r("v-col",{key:"plan-"+n,attrs:{cols:"12",md:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"mx-auto transition-swing",class:o?"zoom":"notzoom",attrs:{elevation:o?24:e.elevation,color:e.color,"max-width":"400"}},[r("h3",{staticClass:"text-h4 text-center font-weight-black white--text pt-5",domProps:{textContent:t._s(e.plan)}}),t._v(" "),r("v-card-text",{staticClass:"text-center subtitle-1 white--text py-2",domProps:{textContent:t._s(e.description)}}),t._v(" "),r("v-card-subtitle",{staticClass:"text-h5 font-weight-black text-center white--text pt-0"},[t._v(t._s("monthly"===t.planDuration?e.monthly:e.yearly)+"\n              "),r("span",{staticClass:"subtitle-1"},[t._v("per "+t._s("monthly"===t.planDuration?"month":"year"))])]),t._v(" "),r("v-list",[t._l(e.features,(function(e,n){return r("v-list-item",{key:"feature-"+n,attrs:{dense:""}},[r("v-list-item-icon",[r("v-icon",[t._v("\n                    "+t._s(e.icon)+"\n                  ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.text)}})],1)],1)})),t._v(" "),r("v-list-item",[r("v-btn",{staticClass:"mx-auto my-3",attrs:{color:"primary",large:"",block:"",rounded:""}},[t._v("\n                  Buy Now\n                ")])],1)],2)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,"166d98d6",null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:v.a,VCard:h.a,VCardSubtitle:m.b,VCardText:m.c,VCol:f.a,VContainer:x.a,VHover:_.a,VIcon:y.a,VList:w.a,VListItem:k.a,VListItemContent:C.a,VListItemIcon:O.a,VListItemTitle:C.c,VRow:j.a})},427:function(t,e,r){"use strict";var n=r(1),o=(r(403),r(397)),l=r(10),c=r(3);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a,l.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},o.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,v({},o.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},437:function(t,e,r){"use strict";r(11),r(35);var n=r(2).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var r=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){r.isActive={open:!0,close:!1}[t]},n)}}}),o=r(57),l=r(3),c=r(5);e.a=Object(l.a)(n,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},453:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{heroAlt:[{src:"pexels-ekaterina-bolovtsova-4048767.jpg",heading:" Services "}],cards:[{title:"Material Design",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-material-design"},{title:"Powerful template",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-desktop-mac"},{title:"Retina Ready",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-eye"},{title:"Fast Loading",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-speedometer"},{title:"Unlimited Colors",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-infinity"},{title:"Premium Sliders",text:"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",icon:"mdi-slide"}]}},head:function(){return{title:"Services",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},o=r(26),l=r(34),c=r.n(l),d=r(185),v=r(375),h=r(388),m=r(181),f=r(376),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("HeroAlt",{attrs:{"hero-alt":t.heroAlt}}),t._v(" "),r("v-container",{staticClass:"py-16"},[r("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black text-capitalize"},[t._v("\n          What we do\n        ")]),t._v(" "),r("p",{staticClass:"text-h6 text-uppercase font-weight-light text-center my-16"},[t._v("\n          Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse\n          condimentum porttitor cursumus.\n        ")]),t._v(" "),r("v-row",t._l(t.cards,(function(e,n){return r("v-col",{key:n,staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4",xl:"2"}},[r("v-avatar",{staticClass:"mb-5",attrs:{size:"80",color:"primary"}},[r("v-icon",{attrs:{dark:"",large:""}},[t._v("\n                "+t._s(e.icon)+"\n              ")])],1),t._v(" "),r("div",{staticClass:"title text-uppercase mt-1 mb-4",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("p",{domProps:{textContent:t._s(e.text)}}),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}})],1)],1)})),1)],1),t._v(" "),r("Pricing")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{HeroAlt:r(393).default,Pricing:r(407).default}),c()(component,{VAvatar:d.a,VCol:v.a,VContainer:h.a,VIcon:m.a,VRow:f.a})}}]);