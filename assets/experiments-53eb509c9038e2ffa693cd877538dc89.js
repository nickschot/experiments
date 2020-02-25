"use strict"
define("experiments/app",["exports","ember-resolver","ember-load-initializers","experiments/config/environment"],(function(e,t,n,r){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class s extends Ember.Application{constructor(...e){super(...e),i(this,"modulePrefix",r.default.modulePrefix),i(this,"podModulePrefix",r.default.podModulePrefix),i(this,"Resolver",t.default)}}e.default=s,(0,n.default)(s,r.default.modulePrefix)})),define("experiments/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/components/button.css",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"btn-slot":"_btn-slot_11hlnz",btn:"_btn_11hlnz","right-press":"_right-press_11hlnz","left-press":"_left-press_11hlnz","strong-right-press":"_strong-right-press_11hlnz","strong-left-press":"_strong-left-press_11hlnz"}})),define("experiments/components/button",["exports","@glimmer/component"],(function(e,t){var n,r,i,s,o
function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,i){var s={}
return Object.keys(r).forEach((function(e){s[e]=r[e]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),s),i&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(i):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,t,s),s=null),s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const u=Ember.HTMLBars.template({id:"CPZJv0I/",block:'{"symbols":["&attrs","&default"],"statements":[[7,"div",true],[11,"class",[29,[[28,"local-class",["btn-slot"],[["from"],["experiments/components/button.css"]]]]]],[8],[0,"\\n  "],[7,"button",false],[12,"class",[29,[[28,"local-class",[[28,"concat",["btn ",[23,0,["animationClass"]]],null]],[["from"],["experiments/components/button.css"]]]]]],[12,"style",[23,0,["buttonStyle"]]],[13,1],[12,"type","button"],[3,"on",["mousedown",[23,0,["animateClick"]]]],[3,"on",["mouseup",[23,0,["stopAnimateClick"]]]],[3,"on",["click",[23,0,["onClick"]]]],[3,"ref",[[23,0,[]],"button"]],[8],[0,"\\n    "],[14,2],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"experiments/components/button.hbs"}})
let c=(o=class extends t.default{get onClick(){var e
return null!==(e=this.args.onClick)&&void 0!==e?e:()=>{}}constructor(e,t){super(e,t),a(this,"cursorTracker",r,this),l(this,"boundTransformButton",void 0),l(this,"button",void 0),a(this,"buttonStyle",i,this),a(this,"animationClass",s,this),this.boundTransformButton=this.transformButton.bind(this),this.cursorTracker.add(this.boundTransformButton)}willDestroy(){this.cursorTracker.remove(this.boundTransformButton)}animateClick(e){if(this.button){const t=this.button.offsetWidth,n=e instanceof MouseEvent?e.offsetX:e.targetTouches[0].pageX-this.button.getBoundingClientRect().left
n<t/6?this.animationClass="strong-left-press":n>t/6*5?this.animationClass="strong-right-press":n<t/3?this.animationClass="left-press":n>t/3*2&&(this.animationClass="right-press")}}stopAnimateClick(){this.animationClass=""}transformButton({clientX:e,clientY:t}){if(this.button){const o=this.button.getBoundingClientRect(),a=o.width/2,l=o.height/2,d=o.left+a,u=o.top+l,c=Math.max(a,l)+10,f=400,p=(n=e,r=d,i=t,s=u,Math.sqrt((r-n)*(r-n)+(s-i)*(s-i)))
if(p<=c||p>f)this.buttonStyle=""
else{const n=function(e,t,n,r){const i=Math.atan2(r-t,n-e)*(180/Math.PI)
return 360-(i<0?360+i:i)}(d,u,e,t)*(Math.PI/180),r=p/((f-c)/10),i=Math.sin(n)*r,s=Math.cos(n)*r
this.buttonStyle=`transform: translateY(-15%) rotateX(${i}deg) rotateY(${s}deg);`}}var n,r,i,s}},r=d((n=o).prototype,"cursorTracker",[Ember.inject.service],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=d(n.prototype,"buttonStyle",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=d(n.prototype,"animationClass",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d(n.prototype,"animateClick",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"animateClick"),n.prototype),d(n.prototype,"stopAnimateClick",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"stopAnimateClick"),n.prototype),n)
e.default=c,Ember._setComponentTemplate(u,c)})),define("experiments/components/svg-box.css",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={root:"_root_3hgctv",content:"_content_3hgctv","fade-in":"_fade-in_3hgctv",svg:"_svg_3hgctv",bg:"_bg_3hgctv",dash:"_dash_3hgctv",border:"_border_3hgctv"}})),define("experiments/components/svg-box",["exports","@glimmer/component"],(function(e,t){var n,r,i,s,o
function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t,n,r,i){var s={}
return Object.keys(r).forEach((function(e){s[e]=r[e]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),s),i&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(i):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,t,s),s=null),s}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const d=Ember.HTMLBars.template({id:"rEQITO+y",block:'{"symbols":["&attrs","&default","@simpleAnimation"],"statements":[[7,"div",false],[12,"class",[29,[[28,"local-class",["root"],[["from"],["experiments/components/svg-box.css"]]]]]],[13,1],[3,"did-insert",[[23,0,["render"]]]],[3,"did-resize",[[23,0,["render"]]]],[8],[0,"\\n  "],[7,"div",true],[11,"class",[29,[[28,"local-class",["content"],[["from"],["experiments/components/svg-box.css"]]]]]],[10,"data-test-svg-box-content",""],[8],[0,"\\n    "],[14,2],[0,"\\n  "],[9],[0,"\\n  "],[7,"svg",true],[11,"class",[29,[[28,"local-class",["svg"],[["from"],["experiments/components/svg-box.css"]]]]]],[11,"width",[23,0,["width"]]],[11,"height",[23,0,["height"]]],[11,"viewBox",[23,0,["viewBox"]]],[8],[0,"\\n    "],[7,"path",true],[11,"class",[29,[[28,"local-class",["bg"],[["from"],["experiments/components/svg-box.css"]]]]]],[11,"d",[29,[[23,0,["path"]]]]],[10,"fill","none"],[10,"data-test-svg-box-bg",""],[8],[9],[0,"\\n\\n"],[4,"if",[[23,3,[]]],null,{"statements":[[0,"      "],[7,"path",true],[11,"class",[29,[[28,"local-class",["border"],[["from"],["experiments/components/svg-box.css"]]]]]],[11,"d",[29,[[23,0,["path"]]]]],[11,"stroke-width",[29,[[23,0,["strokeWidth"]]]]],[11,"stroke-dasharray",[29,[[23,0,["circumference"]]]]],[11,"stroke-dashoffset",[29,[[23,0,["circumference"]]]]],[10,"stroke","#88929c"],[10,"fill","none"],[10,"data-test-svg-box-border-simple",""],[8],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[7,"path",true],[11,"class",[29,[[28,"local-class",["border"],[["from"],["experiments/components/svg-box.css"]]]]]],[11,"d",[29,[[23,0,["pathTop"]]]]],[11,"stroke-width",[29,[[23,0,["strokeWidth"]]]]],[11,"stroke-dasharray",[29,[[23,0,["halfCircumference"]]]]],[11,"stroke-dashoffset",[29,[[23,0,["halfCircumference"]]]]],[10,"stroke","#88929c"],[10,"fill","none"],[10,"data-test-svg-box-border-top",""],[8],[9],[0,"\\n      "],[7,"path",true],[11,"class",[29,[[28,"local-class",["border"],[["from"],["experiments/components/svg-box.css"]]]]]],[11,"d",[29,[[23,0,["pathBottom"]]]]],[11,"stroke-width",[29,[[23,0,["strokeWidth"]]]]],[11,"stroke-dasharray",[29,[[23,0,["halfCircumference"]]]]],[11,"stroke-dashoffset",[29,[[23,0,["halfCircumference"]]]]],[10,"stroke","#88929c"],[10,"fill","none"],[10,"data-test-svg-box-border-bottom",""],[8],[9],[0,"\\n"]],"parameters":[]}],[0,"  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"experiments/components/svg-box.hbs"}})
let u=(o=class extends t.default{constructor(...e){super(...e),a(this,"width",r,this),a(this,"height",i,this),a(this,"radius",s,this)}get strokeWidth(){var e
return null!==(e=this.args.strokeWidth)&&void 0!==e?e:1}get viewBox(){return`0 0 ${this.width} ${this.height}`}get circumference(){return 2*(this.width+this.height)+2*Math.PI*this.radius-8*this.radius}get halfCircumference(){return this.circumference/2}get path(){const e=this.strokeWidth/2,t=this.radius
return t?`\n       M${t} ${e}\n       H${this.width-t}\n       A${t-e} ${t-e} 0 0 1 ${this.width-e} ${t}\n       V${this.height-t}\n       A${t-e} ${t-e} 0 0 1 ${this.width-t} ${this.height-e}\n       H${t}\n       A${t-e} ${t-e} 0 0 1 ${e} ${this.height-t}\n       V${t}\n       A${t-e} ${t-e} 0 0 1 ${t} ${e}`:`M${e} ${e} H${this.width-e} V${this.height-e} H${e} Z`}get pathTop(){const e=this.strokeWidth/2,t=this.radius
return t?`\n       M${t} ${e}\n       H${this.width-t}\n       A${t-e} ${t-e} 0 0 1 ${this.width-e} ${t}\n       V${this.height-t}\n       A${t-e} ${t-e} 0 0 1 ${this.width-t} ${this.height-e}`:`M${e} ${e} H${this.width-e} V${this.height-e} H${e} Z`}get pathBottom(){const e=this.strokeWidth/2,t=this.radius
return t?`\n       M${e+t} ${e}\n       A${t-e} ${t-e} 0 0 0 ${e} ${t}\n       V${this.height-t}\n       A${t-e} ${t-e} 0 0 0 ${t} ${this.height-e}\n       H${this.width-t}`:`M${e} ${e} H${this.width-e} V${this.height-e} H${e} Z`}render(e){const{width:t,height:n}=e.getBoundingClientRect()
this.width=t,this.height=n,this.radius=parseInt(e.style.borderRadius)}},r=l((n=o).prototype,"width",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),i=l(n.prototype,"height",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s=l(n.prototype,"radius",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),l(n.prototype,"render",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"render"),n.prototype),n)
e.default=u,Ember._setComponentTemplate(d,u)})),define("experiments/config/environment.d",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=config
e.default=t})),define("experiments/helpers/app-version",["exports","experiments/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e,r={}){const i=t.default.APP.version
let s=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,a=null
return s&&(r.showExtended&&(a=i.match(n.versionExtendedRegExp)),a||(a=i.match(n.versionRegExp))),o&&(a=i.match(n.shaRegExp)),a?a[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var i=Ember.Helper.helper(r)
e.default=i})),define("experiments/helpers/local-class",["exports","ember-css-modules/helpers/local-class"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"localClass",{enumerable:!0,get:function(){return t.localClass}})})),define("experiments/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","experiments/config/environment"],(function(e,t,n){let r,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,i=n.default.APP.version)
var s={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=s})),define("experiments/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){let e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("experiments/initializers/export-application-global",["exports","experiments/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("experiments/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/modifiers/did-resize",["exports","ember-did-resize-modifier/modifiers/did-resize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/modifiers/ref",["exports","ember-ref-modifier/modifiers/ref"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/router",["exports","experiments/config/environment"],(function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends Ember.Router{constructor(...e){super(...e),n(this,"location",t.default.locationType),n(this,"rootURL",t.default.rootURL)}}e.default=r,r.map((function(){this.route("tracking-button"),this.route("svg-box")}))})),define("experiments/routes/svg-box",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class t extends Ember.Route{}e.default=t})),define("experiments/routes/tracking-button",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class t extends Ember.Route{}e.default=t})),define("experiments/services/cursor-tracker",["exports"],(function(e){function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends Ember.Service{constructor(){super(...arguments),t(this,"callbacks",new Set),t(this,"boundHandleCallbacks",void 0),this.boundHandleCallbacks=this.handleCallbacks.bind(this)}addListener(){window.addEventListener("mousemove",this.boundHandleCallbacks)}removeListener(){window.removeEventListener("mousemove",this.boundHandleCallbacks)}handleCallbacks(e){this.callbacks.forEach(t=>t(e))}add(e){this.callbacks.size||this.addListener(),this.callbacks.add(e)}remove(e){this.callbacks.delete(e),0===this.callbacks.size&&this.removeListener()}willDestroy(){this.removeListener(),this.callbacks.clear(),super.willDestroy()}}e.default=n})),define("experiments/services/did-resize-detector",["exports","ember-did-resize-modifier/services/did-resize-detector"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("experiments/styles/app",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={}})),define("experiments/styles/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={wrapper:"_wrapper_m0m87f",main:"_main_m0m87f",footer:"_footer_m0m87f"}})),define("experiments/styles/svg-box",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"top-examples":"_top-examples_rec43v",circle:"_circle_rec43v",btn:"_btn_rec43v","svg-box":"_svg-box_rec43v"}})),define("experiments/styles/tracking-button",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"tracking-button":"_tracking-button_dpwzlx"}})),define("experiments/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"kwC7qPUj",block:'{"symbols":[],"statements":[[7,"h1",true],[8],[0,"Experiments"],[9],[0,"\\n\\n"],[7,"div",true],[11,"class",[29,[[28,"local-class",["wrapper"],[["from"],["experiments/styles/application"]]]]]],[8],[0,"\\n  "],[7,"nav",true],[8],[0,"\\n    "],[7,"ul",true],[8],[0,"\\n      "],[7,"li",true],[8],[5,"link-to",[],[["@route"],["tracking-button"]],{"statements":[[0,"Tracking Button"]],"parameters":[]}],[9],[0,"\\n      "],[7,"li",true],[8],[5,"link-to",[],[["@route"],["svg-box"]],{"statements":[[0,"SVG Box"]],"parameters":[]}],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"main",true],[11,"class",[29,[[28,"local-class",["main"],[["from"],["experiments/styles/application"]]]]]],[8],[0,"\\n    "],[1,[22,"outlet"],false],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[7,"footer",true],[11,"class",[29,[[28,"local-class",["footer"],[["from"],["experiments/styles/application"]]]]]],[8],[0,"\\n  © 2020 - Nick Schot"],[7,"br",true],[8],[9],[0,"\\n  "],[7,"a",true],[10,"href","https://nickschot.nl"],[10,"target","_blank"],[10,"rel","noopener noreferrer"],[8],[0,"nickschot.nl"],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"experiments/templates/application.hbs"}})
e.default=t})),define("experiments/templates/svg-box",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"kEleFPRf",block:'{"symbols":[],"statements":[[0,"\\n"],[7,"div",true],[11,"class",[29,[[28,"local-class",["top-examples"],[["from"],["experiments/styles/svg-box"]]]]]],[8],[0,"\\n  "],[5,"svg-box",[[12,"class",[29,[[28,"local-class",["circle"],[["from"],["experiments/styles/svg-box"]]]]]],[12,"style","border-radius: 50px;height:100px;width:100px;"]],[["@strokeWidth","@simpleAnimation"],[2,false]],{"statements":[[0,"\\n    Circle\\n  "]],"parameters":[]}],[0,"\\n  "],[7,"button",true],[11,"class",[29,[[28,"local-class",["btn"],[["from"],["experiments/styles/svg-box"]]]]]],[10,"type","button"],[8],[0,"\\n    "],[5,"svg-box",[[12,"style","border-radius: 4px;"]],[[],[]],{"statements":[[0,"\\n      Button\\n    "]],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[5,"svg-box",[[12,"class",[29,[[28,"local-class",["svg-box"],[["from"],["experiments/styles/svg-box"]]]]]],[12,"style","border-radius: 4px;"]],[["@strokeWidth","@simpleAnimation"],[1,false]],{"statements":[[0,"\\n  "],[7,"h3",true],[8],[0,"Content"],[9],[0,"\\n  "],[7,"p",true],[8],[0,"This is some text."],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n\\n"],[5,"svg-box",[[12,"class",[29,[[28,"local-class",["svg-box"],[["from"],["experiments/styles/svg-box"]]]]]],[12,"style","border-radius: 4px;"]],[["@strokeWidth","@simpleAnimation"],[1,true]],{"statements":[[0,"\\n  "],[7,"h3",true],[8],[0,"Content"],[9],[0,"\\n  "],[7,"p",true],[8],[0,"This is some text."],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n\\n"],[7,"p",true],[10,"class","description"],[8],[0,"\\n  A component which renders a responsive SVG background which animates itself. Choice of a one and a two-part animation.\\n"],[9]],"hasEval":false}',meta:{moduleName:"experiments/templates/svg-box.hbs"}})
e.default=t})),define("experiments/templates/tracking-button",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"W8gMGyzG",block:'{"symbols":[],"statements":[[5,"button",[[12,"class",[29,[[28,"local-class",["tracking-button"],[["from"],["experiments/styles/tracking-button"]]]]]]],[[],[]],{"statements":[[0,"Button"]],"parameters":[]}],[0,"\\n\\n"],[7,"p",true],[10,"class","description"],[8],[0,"\\n  A button that slightly looks towards the cursor when close enough. Based on the pressure point of the cursor the button goes drops into the background fluidly.\\n"],[9]],"hasEval":false}',meta:{moduleName:"experiments/templates/tracking-button.hbs"}})
e.default=t})),define("experiments/config/environment",[],(function(){try{var e="experiments/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}))
runningTests||require("experiments/app").default.create({name:"experiments",version:"0.0.0+ad0b8275"})
