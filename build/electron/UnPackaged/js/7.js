(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"516e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-card-section",{staticClass:"panel"},e._l([{color:"positive",icon:"bug_report",label:"Open WebTorrent DevTools",handleClick:e.openWebtorrentDevTools},{color:"negative",icon:"delete_forever",label:"Clear Application Config",handleClick:e.delete_config},{color:"general",icon:"translate",label:"Get User Language",handleClick:e.getUsersLanguage},{color:"general",icon:"flag",label:"Get Locale",handleClick:e.getLocale}],(function(e,t){return n("alphabiz-button",{key:t,attrs:{color:e.color,icon:e.icon,label:e.label},on:{click:e.handleClick}})})),1)],1),n("q-card",{staticClass:"q-mb-md",attrs:{bordered:"",flat:""}},[n("q-tabs",{attrs:{align:"left","no-caps":"","narrow-indicator":""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[n("q-tab",{attrs:{name:"accountInfo",icon:"account_circle",label:"Account Info"}}),n("q-tab",{attrs:{name:"amplify",icon:"developer_board",label:"Amplify"}}),n("q-tab",{attrs:{name:"devInfo",icon:"info",label:"Dev Info"}}),n("q-tab",{attrs:{name:"abComponent",icon:"dashboard",label:"ABComponent"}})],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[n("q-tab-panel",{attrs:{name:"accountInfo"}},[n("h4",[e._v(e._s(e.$store.state.account.authState))]),"signedIn"===e.$store.state.account.authState?n("div",{staticClass:"row",staticStyle:{margin:"-4px"}},[e._l(e.$store.getters.accountUserInfo,(function(t,a){return[Array.isArray(t)?[n("div",{key:a,staticClass:"col-12 col-lg-6 q-pa-xs"},[n("q-card",{staticClass:"overflow-hidden",attrs:{flat:"",bordered:""}},[Array.isArray(t)?n("q-expansion-item",{attrs:{"content-inset-level":.4,label:a}},e._l(t,(function(t,a){return n("div",{key:a},[e._v(e._s(t))])})),0):e._e()],1)],1)]:[n("div",{key:a,staticClass:"col-6 col-sm-3 col-lg-2 q-pa-xs"},[n("q-card",{staticClass:"overflow-hidden q-px-md q-py-sm",staticStyle:{"min-height":"66px"},attrs:{flat:"",bordered:""}},[n("div",{staticClass:"text-capitalize",staticStyle:{"font-size":"0.8rem",opacity:"0.8"}},[e._v(e._s(a))]),n("div",{staticClass:"text-weight-bold text-no-wrap ellipsis"},[e._v(e._s(t))])])],1)]]}))],2):e._e()]),n("q-tab-panel",{attrs:{name:"amplify"}},e._l(e.$amplify.amplifyTest,(function(e,t){return n("amplify-button",{key:t,staticClass:"q-mr-sm",attrs:{label:t,"on-click":function(){return e()}}})})),1),n("q-tab-panel",{attrs:{name:"devInfo"}},[e.devInfo.torrentStore?n("div",{staticClass:"full-width"},[e._v("Torrent Config Store:\n          "),n("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.torrentStore)}}}),n("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetTorrent}}),n("pre",[e._v(e._s(e.devInfo.torrentStore))])],1):e._e(),e.devInfo.settingStore?n("div",{staticClass:"full-width"},[e._v("Setting Config Store:\n          "),n("alphabiz-button",{staticClass:"dev-info-action q-ml-md",attrs:{label:"Open"},on:{click:function(t){return e.open(e.devInfo.settingStore)}}}),n("alphabiz-button",{staticClass:"dev-info-action q-ml-sm",attrs:{label:"Reset"},on:{click:e.resetSetting}}),n("pre",[e._v(e._s(e.devInfo.settingStore))])],1):e._e(),e._v("\n        We are using\n        "),e.devInfo.electronVer?n("div",{staticClass:"full-width"},[e._v("Electron "+e._s(e.devInfo.electronVer))]):e._e(),e.devInfo.chromeVer?n("div",{staticClass:"full-width"},[e._v("Chrome "+e._s(e.devInfo.chromeVer))]):e._e(),e.devInfo.nodeVer?n("div",{staticClass:"full-width"},[e._v("Node "+e._s(e.devInfo.nodeVer))]):e._e(),n("div",[e._v("Quasar "+e._s(e.$q.version))]),n("div",[e._v("Vue "+e._s(e.vueVersion))]),n("div",[e._v(" "+e._s(e.$q.platform))])]),n("q-tab-panel",{attrs:{name:"abComponent"}},[n("alphabiz-select",{attrs:{options:e.abOptions},model:{value:e.abModel,callback:function(t){e.abModel=t},expression:"abModel"}})],1)],1)],1)],1)},o=[],r=n("2b0e"),s=n("ed08");const i=n("ed08").isElectron(),l=i?n("34bb").ipcRenderer:null;var c={name:"Development",inject:["io"],data(){return{abModel:!1,abOptions:[{value:!1,label:"false-label"},{value:!0,label:"true-label"}],currentTab:"accountInfo",devInfo:{torrentStore:"",settingStore:""}}},methods:{notify(e){this.$q.notify({message:e})},delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((e=>{this.$q.notify(e)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getUsersLanguage(){s["localConfigs"].getSettingsItem("language").then((e=>{this.$q.notify({message:e,position:"bottom-right",type:"positive",timeout:3e3})})).catch((()=>{this.$q.notify({message:"未获取到数据项",position:"bottom-right",type:"negative",timeout:3e3})}))},getAboutDialog(){const e=this.$root.$children[0];e.$refs.about.about_visible()},resetSetting(){this.$store.dispatch("resetSettings").then((e=>{this.$i18n.locale=e.language,this.$q.notify("Reset success")}))},resetTorrent(){i&&l.send("reset-torrent")},openWebtorrentDevTools(){if(i)return n("34bb").ipcRenderer.send("open-webtorrent-devtools")},open(e){this.io.emit("show_torrent_file",e)}},mounted(){i&&(l.on("dev-info",((e,t)=>{t.torrentStore&&(this.devInfo.torrentStore=t.torrentStore),t.settingStore&&(this.devInfo.settingStore=t.settingStore),t.electronVer&&(this.devInfo.electronVer=t.electronVer),t.chromeVer&&(this.devInfo.chromeVer=t.chromeVer),t.nodeVer&&(this.devInfo.nodeVer=t.nodeVer)})),l.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)},computed:{vueVersion(){return r["a"].version}}},d=c,b=(n("6eb2"),n("2877")),f=n("9989"),u=n("f09f"),v=n("a370"),p=n("429b"),m=n("7460"),h=n("eb85"),g=n("adad"),_=n("823b"),q=n("3b73"),C=n("eebe"),y=n.n(C),I=Object(b["a"])(d,a,o,!1,null,"75d99de2",null);t["default"]=I.exports;y()(I,"components",{QPage:f["a"],QCard:u["a"],QCardSection:v["a"],QTabs:p["a"],QTab:m["a"],QSeparator:h["a"],QTabPanels:g["a"],QTabPanel:_["a"],QExpansionItem:q["a"]})},"6eb2":function(e,t,n){"use strict";n("94a9")},"94a9":function(e,t,n){}}]);