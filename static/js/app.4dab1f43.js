(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("e778")},"0453":function(t,e,n){"use strict";n("c675")},"0a88":function(t,e,n){"use strict";n("35aa")},"321b":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:30px}",""]),t.exports=e},"35aa":function(t,e,n){var o=n("d2c0");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("378cf21e",o,!0,{sourceMap:!1,shadowMode:!1})},"3b51":function(t,e,n){"use strict";n("d95e")},"420b":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".nabarx[data-v-2f7decdb]{height:50px;margin-top:-30px;margin-bottom:40px}#title[data-v-2f7decdb]{margin-left:40px}#uptime[data-v-2f7decdb]{font-size:1rem;font-weight:600;margin-left:10px;margin-right:50px}#button[data-v-2f7decdb]{margin-right:15px}",""]),t.exports=e},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("vs-row",{attrs:{"vs-w":"12"}},[n("vs-col",{attrs:{"vs-offset":"0.4","vs-w":"11.2"}},[n("Comm")],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-card",{attrs:{id:"topology"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h3",[t._v("Communication Network")])]),n("ECharts",{ref:"topo",attrs:{id:"chart",options:t.option,autoresize:""},on:{click:t.handleClick}}),n("vs-prompt",{attrs:{title:"Set link properties",active:t.activePrompt},on:{cancel:t.closePrompt,accept:t.acceptPrompt,close:t.closePrompt,"update:active":function(e){t.activePrompt=e}}},[n("div",{staticClass:"link-prompt"},[n("vs-row",{attrs:{"vs-align":"center","vs-type":"flex","vs-justify":"center","vs-w":"12"}},[n("vs-col",{attrs:{"vs-w":"1"}},[n("span",[t._v("PDR")])]),n("vs-col",{attrs:{"vs-offset":"2","vs-w":"5"}},[n("vs-input",{attrs:{placeholder:"100"},model:{value:t.tmpPDR,callback:function(e){t.tmpPDR=e},expression:"tmpPDR"}})],1)],1),n("vs-row",{staticStyle:{"margin-top":"3px","margin-bottom":"3px"},attrs:{"vs-align":"center","vs-type":"flex","vs-justify":"center","vs-w":"12"}},[n("vs-col",{attrs:{"vs-w":"1"}},[n("span",[t._v("Latency")])]),n("vs-col",{attrs:{"vs-offset":"2","vs-w":"5"}},[n("vs-input",{attrs:{placeholder:"100"},model:{value:t.tmpLatency,callback:function(e){t.tmpLatency=e},expression:"tmpLatency"}})],1)],1),n("vs-row",{attrs:{"vs-align":"center","vs-type":"flex","vs-justify":"center","vs-w":"12"}},[n("vs-col",{attrs:{"vs-w":"1"}},[n("span",[t._v("Bandwidth")])]),n("vs-col",{attrs:{"vs-offset":"2","vs-w":"5"}},[n("vs-input",{attrs:{placeholder:"100"},model:{value:t.tmpBandwidth,callback:function(e){t.tmpBandwidth=e},expression:"tmpBandwidth"}})],1)],1)],1)]),n("Console",{attrs:{name:"comm",height:"180px"}})],1)},r=[],c=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{ref:"logs",style:t.cssVars,attrs:{autofocus:"",id:"logs",disabled:""},domProps:{value:t.log},on:{change:function(e){return t.log=e}}})}),l=[],p={data:function(){return{dropped:!1,ws:{},cnt:0,log:""}},props:["name","height"],computed:{cssVars:function(){return{"--height":this.height}}},methods:{startWS:function(){var t=this,e=window.location;e.host,this.ws=new WebSocket("ws://localhost:8000/ws/"+this.name),this.ws.onopen=function(){t.dropped=!1,t.log="[+] Console connected",t.$nextTick((function(){t.$refs.logs.scrollTop=t.$refs.logs.scrollHeight}))},this.ws.onclose=function(){t.dropped?t.log+=".":t.log+="\n[!] Connection dropped, trying to reconnect...",t.dropped=!0,t.$nextTick((function(){t.$refs.logs.scrollTop=t.$refs.logs.scrollHeight})),setTimeout(t.startWS,1e3)},this.ws.onmessage=function(e){t.cnt>1e3&&t.cnt%1e3==1&&(t.log=""),t.cnt++;var n=JSON.parse(e.data);n.type,0==n.type&&(t.log+="\n[*] "+n.msg,t.$nextTick((function(){t.$refs.logs.scrollTop=t.$refs.logs.scrollHeight}))),1==n.type&&t.$EventBus.$emit("stats_"+t.name,n["stats_"+t.name])}}},mounted:function(){this.startWS()}},d=p,u=(n("0a88"),n("2877")),m=Object(u["a"])(d,c,l,!1,null,"46659e60",null),f=m.exports,h=n("9ca8"),v=(n("ef97"),n("23ee"),n("007d"),n("bc3a")),y=n.n(v),g={components:{ECharts:h["a"],Console:f},data:function(){var t=this;return{activePrompt:!1,selectedLink:"",tmpPDR:100,tmpLatency:10,tmpBandwidth:10,linkStats:{},option:{tooltip:{trigger:"item",enterable:!0,formatter:function(e){if(e.name.indexOf(">")>0){var n=t.linkStats[e.name];return"PDR:"+n.PDR+"<br>Latency: "+n.Latency+"<br>Bandwidth:"+n.Bandwidth}return e.data.name}},series:[{type:"graph",layout:"none",symbolSize:45,lineStyle:{width:2.5,color:"#555"},emphasis:{lineStyle:{width:5,color:"#000"},label:{show:!0}},label:{show:!0,fontSize:14},center:[500,120],nodes:[{name:"GCC",x:-500,y:150,itemStyle:{color:"purple"}},{name:"HMS",x:0,y:150,itemStyle:{color:"darkred"}},{name:"AGT",x:200,y:-375},{name:"STR",x:750,y:-600},{name:"INV",x:1300,y:-375},{name:"PWR",x:1500,y:150},{name:"ECLSS",x:1300,y:675},{name:"INT",x:750,y:900},{name:"EXT",x:200,y:675},{name:"SW1",x:300,y:150,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW2",x:425,y:-150,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW3",x:750,y:-300,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW4",x:1075,y:-150,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW5",x:1200,y:150,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW6",x:1075,y:450,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW7",x:750,y:600,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW8",x:425,y:450,symbol:"rect",itemStyle:{color:"deepskyblue"}},{name:"SW0",x:750,y:150,symbol:"rect",itemStyle:{color:"#0079A3"}}],links:[{source:"HMS",target:"GCC",lineStyle:{type:"dashed"},emphasis:{lineStyle:{type:"dashed"}}},{source:"HMS",target:"SW1"},{source:"AGT",target:"SW2"},{source:"STR",target:"SW3"},{source:"INV",target:"SW4"},{source:"PWR",target:"SW5"},{source:"ECLSS",target:"SW6"},{source:"INT",target:"SW7"},{source:"EXT",target:"SW8"},{source:"SW1",target:"SW2"},{source:"SW2",target:"SW3"},{source:"SW3",target:"SW4"},{source:"SW4",target:"SW5"},{source:"SW5",target:"SW6"},{source:"SW6",target:"SW7"},{source:"SW7",target:"SW8"},{source:"SW8",target:"SW1"},{source:"SW1",target:"SW0"},{source:"SW2",target:"SW0"},{source:"SW3",target:"SW0"},{source:"SW4",target:"SW0"},{source:"SW5",target:"SW0"},{source:"SW6",target:"SW0"},{source:"SW7",target:"SW0"},{source:"SW8",target:"SW0"}]},{z:-1,type:"graph",layout:"none",symbolSize:45,center:[500,120],label:{show:!0,fontSize:13,color:"black",fontFamily:"Menlo"},itemStyle:{color:"transparent"},nodes:[{name:"TX:0\nRX:0\n\ngcc",x:-500,y:70},{name:"TX:0\nRX:0\n\nhms",x:0,y:70},{name:"TX:0\nRX:0\n\nagt",x:200,y:-455},{name:"TX:0\nRX:0\n\ninv",x:750,y:-680},{name:"TX:0\nRX:0\n\nstr",x:1300,y:-455},{name:"TX:0\nRX:0\n\npwr",x:1500,y:70},{name:"TX:0\nRX:0\n\neclss",x:1300,y:595},{name:"TX:0\nRX:0\n\nint",x:750,y:820},{name:"TX:0\nRX:0\n\next",x:200,y:595},{name:"TX:0\nRX:0\n\nsw0",x:300,y:70},{name:"TX:0\nRX:0\n\nsw1",x:425,y:-230},{name:"TX:0\nRX:0\n\nsw2",x:750,y:-380},{name:"TX:0\nRX:0\n\nsw3",x:1200,y:70},{name:"TX:0\nRX:0\n\nsw4",x:1075,y:370},{name:"TX:0\nRX:0\n\nsw5",x:750,y:520},{name:"TX:0\nRX:0\n\nsw6",x:1075,y:-230},{name:"TX:0\nRX:0\n\nsw7",x:425,y:370},{name:"TX:0\nRX:0\n\nsw8",x:750,y:70}]}]}}},methods:{initLinkStat:function(){this.linkStats={};for(var t=0;t<this.option.series[0].links.length;t++){var e=this.option.series[0].links[t],n=e.source+" > "+e.target;this.linkStats[n]={PDR:100,Latency:10,Bandwidth:10},n.indexOf("GCC")>0&&(this.linkStats[n]={PDR:100,Latency:1e7,Bandwidth:1e-6})}},handleClick:function(t){t.name.length<=5||(this.selectedLink=t.name,this.activePrompt=!0)},closePrompt:function(){this.activePrompt=!1},acceptPrompt:function(){window.console.log(this.tmpLatency),this.linkStats[this.selectedLink].PDR=this.tmpPDR,this.linkStats[this.selectedLink].Latency=this.tmpLatency,this.linkStats[this.selectedLink].Bandwidth=this.tmpBandwidth,y.a.post("http://localhost:8000/api/link/ground",{pdr:this.tmpPDR,latency:this.tmpLatency,bandwidth:this.tmpBandwidth}),this.activePrompt=!1}},mounted:function(){var t=this;window.topo=this,this.initLinkStat();var e={GCC:{id:0,nick:"gcc"},HMS:{id:1,nick:"hms"},AGT:{id:2,nick:"agt"},INV:{id:3,nick:"inv"},STR:{id:4,nick:"str"},PWR:{id:5,nick:"pwr"},ECLSS:{id:6,nick:"eclss"},INT:{id:7,nick:"int"},EXT:{id:8,nick:"ext"},SW0:{id:9,nick:"sw0"},SW1:{id:10,nick:"sw1"},SW2:{id:11,nick:"sw2"},SW3:{id:12,nick:"sw3"},SW4:{id:13,nick:"sw4"},SW5:{id:14,nick:"sw5"},SW6:{id:15,nick:"sw6"},SW7:{id:16,nick:"sw7"},SW8:{id:17,nick:"sw8"}};this.$EventBus.$on("stats_comm",(function(n){for(var o in n)t.option.series[1].nodes[e[o].id].name="TX:"+n[o][0]+"\nRX:"+n[o][1]+"\n\n"+e[o].nick}))}},S=g,b=(n("0453"),Object(u["a"])(S,i,r,!1,null,"b45fa36e",null)),x=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-navbar",{staticClass:"nabarx",model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[n("div",{attrs:{slot:"title",id:"title"},slot:"title"},[n("vs-navbar-title",[t._v("\n        MCVT - Health Managment System\n      ")])],1),n("vs-navbar-item",{attrs:{id:"button"}},[n("vs-button",{attrs:{size:"small",color:"success","icon-pack":"fas",disabled:t.started,type:"relief",icon:"fa-play"},on:{click:t.startAll}})],1),n("vs-navbar-item",{attrs:{id:"button"}},[n("vs-button",{attrs:{size:"small",color:"red","icon-pack":"fas",type:"relief",disabled:!t.started,icon:"fa-stop"},on:{click:t.stopAll}})],1),n("vs-navbar-item",{attrs:{id:"button"}},[n("vs-button",{attrs:{size:"small",color:"primary","icon-pack":"fas",type:"relief",icon:"fa-cog"},on:{click:t.option}})],1),n("vs-navbar-item",{attrs:{id:"uptime",index:"2"}},[t._v("\n      Uptime: "+t._s(t.d)+" day"),t.d>1?n("span",[t._v("s")]):t._e(),t._v(" "+t._s(t.h.toString().padStart(2,"0"))+":"+t._s(t.m.toString().padStart(2,"0"))+":"+t._s(t.s.toString().padStart(2,"0"))+"\n    ")])],1)],1)},k=[],W={data:function(){return{popupActive:!1,activeItem:0,boottime:0,started:!1,s:0,m:0,h:0,d:0}},methods:{getUpTime:function(){var t=this;y.a.get("http://localhost:8000/api/boottime").then((function(e){t.boottime=parseInt(e.data),setInterval((function(){var e=Date.now();e=Math.floor(e/1e3),t.s=Math.floor((e-t.boottime)%60),t.m=Math.floor((e-t.boottime)/60%60),t.h=Math.floor((e-t.boottime)/3600%24),t.d=Math.floor((e-t.boottime)/86400)}),1e3)}))},getStarted:function(){var t=this;y.a.get("http://localhost:8000/api/started").then((function(e){var n=parseInt(e.data);t.started="1"==n}))},startAll:function(){this.started=!0,y.a.get("http://localhost:8000/api/start"),this.$vs.notify({title:"Run",color:"primary",time:"4000"})},stopAll:function(){this.$vs.notify({title:"Stop",color:"primary",time:"4000"}),this.started=!1,this.$EventBus.$emit("stopAll",1),y.a.get("http://localhost:8000/api/stop")},option:function(){}},mounted:function(){this.getStarted(),this.getUpTime()}},T=W,X=(n("3b51"),Object(u["a"])(T,w,k,!1,null,"2f7decdb",null)),R=X.exports,_={name:"App",components:{Comm:x,Navbar:R}},P=_,M=(n("034f"),Object(u["a"])(P,a,s,!1,null,null,null)),C=M.exports,L=n("fb9a"),$=n.n(L);n("04f2"),n("c789"),n("15f5"),n("7051");o["default"].config.productionTip=!1,o["default"].prototype.$EventBus=new o["default"],o["default"].use($.a),o["default"].prototype.axios=y.a,new o["default"]({render:function(t){return t(C)}}).$mount("#app")},c675:function(t,e,n){var o=n("f2d9");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("5e42fd70",o,!0,{sourceMap:!1,shadowMode:!1})},d2c0:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"#logs[data-v-46659e60]{margin-top:12px;width:100%;height:var(--height);font-size:.8rem;line-height:1.2;border-radius:6px;padding:12px;box-sizing:border-box;resize:none;outline:none;text-transform:none;text-decoration:none}textarea[data-v-46659e60]:disabled{background:#fff}",""]),t.exports=e},d95e:function(t,e,n){var o=n("420b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("29053ea1",o,!0,{sourceMap:!1,shadowMode:!1})},e778:function(t,e,n){var o=n("321b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("499e").default;a("fa1ef42a",o,!0,{sourceMap:!1,shadowMode:!1})},f2d9:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,"#topology[data-v-b45fa36e]{width:100%;height:830px}#chart[data-v-b45fa36e]{width:100%;height:570px}.link-prompt[data-v-b45fa36e]{font-size:1rem}",""]),t.exports=e}});
//# sourceMappingURL=app.4dab1f43.js.map