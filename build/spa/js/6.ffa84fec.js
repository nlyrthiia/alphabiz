(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{1419:function(t,e,n){"use strict";n("a085")},"2fbb":function(t,e,n){"use strict";n("fbc3")},3975:function(t,e,n){},"649f":function(t,e,n){"use strict";n("3975")},"713b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"LHh Lpr lFf"}},[n("application-header",[n("template",{slot:"prepend"},[n("q-btn",{staticClass:"app-no-draggable",attrs:{flat:"",dense:"",round:"",icon:t.leftDrawerOpen?"menu_open":"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),n("template",{slot:"append"},[n("q-badge",{staticClass:"app-no-draggable cursor-pointer q-mx-sm q-px-sm q-py-xs non-selectable",attrs:{color:"page","text-color":"page"},on:{click:t.showAboutDialog}},[n("div",{attrs:{id:"version"}},[t._v(t._s("v"+t.appVersion))]),n("q-separator",{staticClass:"q-mx-sm",attrs:{vertical:""}}),n("div",{attrs:{id:"commit"}},[t._v(t._s(t.appCommit))])],1)],1)],2),n("left-drawer",{ref:"leftDrawer",model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}}),n("q-page-container",{staticClass:"bg-page text-page"},[n("keep-alive",{attrs:{include:"Player,Index"}},[n("router-view")],1)],1)],1)},a=[],s=n("eb32"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-drawer",{ref:"qDrawer",attrs:{value:t.value,side:"left","show-if-above":"",width:280,breakpoint:t.breakpoint},on:{input:function(e){return t.$emit("input",e)}}},[n("div",{staticClass:"full-height bg-positive column items-stretch"},[n("q-toolbar",{staticClass:"left-drawer-toolbar bg-primary text-primary"},[n("div",{staticClass:"ab-logo-container"},[n("q-img",{staticClass:"ab-logo",staticStyle:{"max-height":"32px"},attrs:{src:t.abLogo,contain:""}})],1)]),n("q-scroll-area",{staticClass:"left-drawer-menu bg-page text-page"},[n("q-list",{staticClass:"non-selectable "},t._l(t.essentialLinks,(function(e){return n("EssentialLink",t._b({key:e.id||e.title},"EssentialLink",e,!1))})),1)],1),n("corner",{staticStyle:{"border-right":"1px solid var(--q-color-general)"}})],1)])},o=[],c=(n("ddb0"),n("ddc3")),u=n.n(c),l=n("9224"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.children&&0!==t.children.length?t.children.length>0?n("div",[n("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.titleString,caption:t.captionString,"default-opened":""}},t._l(t.children,(function(e){return n("EssentialLink",t._b({key:e.id||e.title,attrs:{level:.5}},"EssentialLink",e,!1))})),1)],1):t._e():n("q-item",{staticClass:"drawer-menu-item",attrs:{clickable:"",active:t.isActive,"inset-level":t.level,"active-class":"active-item"},on:{click:t.handleClick}},[t.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.icon}})],1):t._e(),n("q-item-section",[n("q-item-label",[t._v(t._s(t.titleString))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.captionString))])],1)],1)},p=[],g={name:"EssentialLink",props:{title:{type:[String,Function],required:!0},caption:{type:[String,Function],default:void 0},icon:{type:String,default:""},link:{type:String,default:"#"},query:{type:Object,default:void 0},level:{type:Number,default:0},children:{type:Array,default(){return[]}}},data(){return{isActive:!1}},computed:{titleString(){return"string"===typeof this.title?this.title:this.title()},captionString(){if(this.caption)return"string"===typeof this.caption?this.caption:this.caption()}},mounted(){this.updateIsActive(this.$route)},watch:{$route(t){this.updateIsActive(t)}},methods:{updateIsActive(t){const e=t.path;let n=e===this.link;if(n&&this.query){const e=t.query;n=Object.entries(this.query).findIndex((([t,n])=>e[t]!==n))<0}this.isActive=n},handleClick(){this.query?this.$router.push({path:this.link,query:this.query}):this.$router.push(this.link)}}},b=g,A=(n("2fbb"),n("2877")),h=n("66e5"),v=n("4074"),m=n("0016"),w=n("0170"),f=n("3b73"),B=n("eebe"),D=n.n(B),Q=Object(A["a"])(b,d,p,!1,null,"3fc7aef2",null),N=Q.exports;D()(Q,"components",{QItem:h["a"],QItemSection:v["a"],QIcon:m["a"],QItemLabel:w["a"],QExpansionItem:f["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{staticClass:"corner-account bg-page text-page",attrs:{clickable:""},on:{click:t.handleClick}},[t.$store.state.account.authState?[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{size:"40px"}},[n("q-icon",{staticStyle:{opacity:"0.8"},attrs:{size:"40px",name:"account_circle"}})],1)],1),n("q-item-section",[n("q-item-label",{staticClass:"text-weight-bold"},[t._v(t._s(t.title))]),n("q-item-label",{staticClass:"text-caption"},[t._v(t._s(t.caption))])],1)]:[n("q-item-section",{attrs:{avatar:""}},[n("q-spinner",{staticClass:"q-ml-sm",attrs:{size:"32px"}})],1),n("q-item-section",[n("q-item-label",{staticClass:"text-weight-bold"},[t._v(t._s(t.$t("account_loading")))])],1)],"signedIn"===t.$store.state.account.authState?n("corner-menu",{on:{signOut:t.signOut,invite:t.invite}}):t._e()],2)},q=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[n("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[n("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/account/settings")}}},[n("q-item-section",{attrs:{"data-cy":"account-settings-btn"}},[t._v("\n        "+t._s(t.$t("account_account_setting"))+"\n      ")])],1),n("q-separator"),t.showInvite?n("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("invite")}}},[n("q-item-section",{attrs:{"data-cy":"invite-btn"}},[t._v(t._s(t.$t("account_invitation")))])],1):t._e(),n("q-separator"),n("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("signOut")}}},[n("q-item-section",{attrs:{"data-cy":"sign-out-btn"}},[t._v(t._s(t.$t("account_sign_out"))+"\n      ")])],1)],1)],1)},y=[],O={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},G=O,S=n("4e73"),J=n("1c1c"),L=n("eb85"),x=Object(A["a"])(G,k,y,!1,null,null,null),X=x.exports;D()(x,"components",{QMenu:S["a"],QList:J["a"],QItem:h["a"],QItemSection:v["a"],QSeparator:L["a"]});var z=n("48f4"),P={name:"Corner",components:{CornerMenu:X},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_up_now")}},methods:{handleClick(){const t=this.$store.state.account.authState;t&&"signedIn"!==t&&this.$amplify.showSignedOutDialog()},signOut(){z["b"].showPositive("signed_out"),z["a"].updateState("signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),z["a"].signOut().catch((()=>{}))},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}}},H=P,T=(n("1419"),n("cb32")),Y=n("0d59"),j=n("b498"),E=Object(A["a"])(H,C,q,!1,null,"072cc14b",null),F=E.exports;D()(E,"components",{QItem:h["a"],QItemSection:v["a"],QAvatar:T["a"],QIcon:m["a"],QItemLabel:w["a"],QSpinner:Y["a"],QColor:j["a"]});var W=n("0613");const M=!u.a.prerelease(l["a"]);var R={name:"LeftDrawer",components:{EssentialLink:N,Corner:F},props:{value:Boolean,currentTab:String},data(){return{abLogo:n("cf05"),breakpoint:1080,currentBehavior:null,resizeListener:null}},computed:{indexItem(){const t=t=>{const e=W["a"].getters[`get${t[0].toUpperCase()+t.slice(1)}TaskCount`];return`${this.$t(t)} (${e})`},e={id:"downloading",title:()=>t("downloading"),icon:"file_download",link:"/",query:{currentTab:"downloading"}},n={id:"uploading",title:()=>t("uploading"),caption:()=>W["a"].getters.isUploadingLoading?this.$t("loading"):null,icon:"file_upload",link:"/",query:{currentTab:"uploading"}},i={id:"downloaded",title:()=>t("downloaded"),icon:"done",link:"/",query:{currentTab:"downloaded"}};return{title:this.$t("home"),caption:this.$t("home_caption"),icon:"home",children:[e,n,i]}},accountSettingItem(){const t=[];return"signedIn"===this.$store.state.account.authState&&t.push({title:this.$t("account_account_setting"),icon:"account_circle",link:"/account/settings",caption:this.$t("account_setting_caption")}),t},disableDevTools(){return W["a"].getters.settings.disableDevTools},developmentItem(){const t=[];try{M&&this.disableDevTools||t.push({title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",link:"/development"})}catch(e){}return t},essentialLinks(){const t={title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",link:"/player"},e={title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",link:"/credits"},n={title:this.$t("basic_setting"),icon:"assignment",link:"/basicSetting",caption:this.$t("basic_caption")},i={title:this.$t("advanced"),icon:"build",link:"/advanceSetting",caption:this.$t("advanced")},a={title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...this.accountSettingItem,n,i]};return[this.indexItem,t,e,a,...this.developmentItem]}},methods:{onWindowResize(){this.updateCurrentBehavior()},updateCurrentBehavior(){const t=window.innerWidth<=this.breakpoint-8?"mobile":"desktop";t!==this.currentBehavior&&(this.currentBehavior=t,this.$refs.qDrawer&&this.$refs.qDrawer.__updateLocal("belowBreakpoint","mobile"===t))}},created(){this.updateCurrentBehavior(),this.resizeListener=t=>this.onWindowResize(t),window.addEventListener("resize",this.resizeListener)},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)}},I=R,U=(n("649f"),n("9404")),V=n("65c6"),K=n("068f"),Z=n("4983"),_=Object(A["a"])(I,r,o,!1,null,"596ab11d",null),$=_.exports;D()(_,"components",{QDrawer:U["a"],QToolbar:V["a"],QImg:K["a"],QScrollArea:Z["a"],QList:J["a"],QColor:j["a"]});var tt=n("7f32"),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-header",{staticClass:"bg-primary text-primary",staticStyle:{"padding-top":"30px"}},[n("q-toolbar",{staticStyle:{height:"50px"}},[t._t("prepend"),n("q-toolbar-title",{staticClass:"toolbar-title",attrs:{shrink:""}},[t._v("\n      "+t._s(t.applicationTitle)+"\n    ")]),n("q-space"),t._t("append")],2)],1)},nt=[];const it=n("ed08").isElectron();var at={name:"ApplicationHeader",props:{},data(){return{env:null}},created(){if(it){Promise.resolve().then(n.t.bind(null,"bdb9",7)).then((({ipcRenderer:t})=>{this.windowControl=e=>t.sendSync("app_window_control",e)}));const t=navigator.userAgent.toLowerCase(),e=/macintosh|mac os x/i.test(t);this.env=e?"mac":"win"}},computed:{applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"}}},st=at,rt=n("e359"),ot=n("6ac5"),ct=n("2c91"),ut=Object(A["a"])(st,et,nt,!1,null,"6bbe6222",null),lt=ut.exports;D()(ut,"components",{QHeader:rt["a"],QToolbar:V["a"],QToolbarTitle:ot["a"],QSpace:ct["a"]});const dt=n("ed08").isElectron();var pt={name:"MainLayout",components:{ApplicationHeader:lt,ApplicationBar:tt["a"],LeftDrawer:$},data(){return{showAppBar:dt,currentTab:"downloading",leftDrawerOpen:!1,appVersion:s["version"],appCommit:s["sourceCommit"]}},computed:{leftDrawerBehavior(){return this.$refs.leftDrawer.currentBehavior},applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"}},methods:{showAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()}}},gt=pt,bt=(n("89d3"),n("4d5a")),At=n("9c40"),ht=n("58a81"),vt=n("09e3"),mt=n("7ff0"),wt=Object(A["a"])(gt,i,a,!1,null,null,null);e["default"]=wt.exports;D()(wt,"components",{QLayout:bt["a"],QBtn:At["a"],QBadge:ht["a"],QSeparator:L["a"],QPageContainer:vt["a"],QFooter:mt["a"],QToolbar:V["a"]})},"89d3":function(t,e,n){"use strict";n("e87e")},a085:function(t,e,n){},cf05:function(t,e){t.exports="data:image/png;base64,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"},e87e:function(t,e,n){},fbc3:function(t,e,n){}}]);