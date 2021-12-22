(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ResetPassword"],{"04a4":function(t,e,a){"use strict";a("310d")},"0c5e":function(t,e,a){},"13a1":function(t,e,a){t.exports=a.p+"img/success-icon.53d5409c.svg"},"2a34":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("Header")],1),a("div",{staticClass:"auth__card-wrapper flex flex__center flex__item-center"},[a("div",{class:[t.card?"auth__card text-center":"",t.wide?"auth__card-wide":""]},[t._t("default",(function(){return[a("div",[t._v("Card")])]}))],2)]),t._t("footer")],2)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex flex__spaced header"},[n("button",[n("router-link",{attrs:{to:{name:"home"}}},[n("img",{attrs:{src:a("aa12"),alt:"infohub-logo"}})])],1),t.ctaText?n("Button",{attrs:{mobile:!0},on:{click:t.goToPage}},[t._v(t._s(t.ctaText))]):t._e()],1)},i=[],c=(a("b0c0"),a("c30d")),r={name:"Header",components:{Button:c["a"]},computed:{ctaText:function(){switch(this.$router.history.current.name){case"login":return"Create Account";case"resetPassword":return"";default:return"Log in"}}},methods:{goToPage:function(){switch(this.ctaText){case"Log in":return void this.$router.push({name:"login"});case"Create Account":return void this.$router.push({name:"createAccount"});default:return}}}},u=r,l=(a("c9a9"),a("2877")),d=Object(l["a"])(u,o,i,!1,null,"4c790e20",null),p=d.exports,m={props:{card:{type:Boolean,default:!0},wide:{type:Boolean,default:!1}},name:"AuthLayout",components:{Header:p}},f=m,h=Object(l["a"])(f,n,s,!1,null,"8e3598b0",null);e["a"]=h.exports},"310d":function(t,e,a){},"37f0":function(t,e,a){},"3e79":function(t,e,a){t.exports=a.p+"img/close-icon.298de350.svg"},"4e1b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AuthLayout",[n("div",{staticClass:"mb-2"},[n("img",{attrs:{src:a("eed2"),alt:"padlock-icon"}})]),n("h1",{staticClass:"mb-2"},[t._v("Reset Password")]),n("span",[t._v(" Enter the email associated with your account and we will send an email with instructions to reset your password. ")]),n("div",{staticClass:"my-3"},[n("Input",{attrs:{type:"email",placeholder:"Enter your Email Address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("Button",{staticClass:"mb-2",attrs:{theme:"blue"},on:{click:t.resetPassword}},[t._v("Send your instructions")]),n("router-link",{staticClass:"text__mid-grey flex flex__center cursor-pointer",attrs:{tag:"div",to:{name:"login"}}},[n("img",{attrs:{src:a("8bcc"),alt:"back-icon"}}),t._v("   "),n("span",{staticClass:"text__mid-grey"},[t._v("Back to login page")])])],1),n("Modal",{attrs:{active:t.showModal}},[n("div",{staticClass:"flex flex__center"},[n("div",{staticClass:"mb-3"},[n("img",{attrs:{src:a("13a1"),alt:"success-icon"}})])]),n("div",{staticClass:"text-center mb-2"},[n("h2",{staticClass:"mb-1"},[t._v("Reset Password")]),n("span",{staticClass:"text-center text__light-grey"},[t._v(" Please check your inbox and use the instructions in the email to reset your password. Be patient, this may take few minutes. ")])]),n("p",{staticClass:"text-center"},[t._v(" Haven't received yet? "),n("button",{staticClass:"cursor-pointer"},[n("span",{staticClass:"text-green"},[t._v("Resend email")])])])])],1)},s=[],o=a("8b60"),i=a("af45"),c=a("c30d"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("portal",{attrs:{to:"modal-portal"}},[n("div",{class:"u-absolute modal__wrapper "+(t.showModal?"":"modal__wrapper-closed")},[n("div",{class:"modal__overlay "+(t.showModal?"":"modal__overlay-closed"),on:{click:function(e){t.showModal=!t.showModal}}}),n("div",{class:"u-absolute modal__body "+(t.showModal?"":"modal__body-closed")+" modal__body-"+t.position},[t._t("default"),n("button",{staticClass:"modal__close-icon cursor-pointer",on:{click:function(e){t.showModal=!t.showModal}}},[n("img",{attrs:{src:a("3e79"),alt:"close-icon"}})])],2)])])},u=[],l={name:"Modal",props:{position:{type:String,default:"center"},active:{type:Boolean}},data:function(){return{showModal:!1}},watch:{active:function(){this.showModal=!this.showModal}}},d=l,p=(a("8653"),a("2877")),m=Object(p["a"])(d,r,u,!1,null,"0325426f",null),f=m.exports,h={name:"ResetPassword",components:{AuthLayout:o["a"],Input:i["a"],Button:c["a"],Modal:f},data:function(){return{email:"",showModal:!1}},methods:{resetPassword:function(){this.showModal=!this.showModal}}},_=h,v=Object(p["a"])(_,n,s,!1,null,"4e372499",null);e["default"]=v.exports},5235:function(t,e,a){},8653:function(t,e,a){"use strict";a("0c5e")},"8b60":function(t,e,a){"use strict";var n=a("2a34");a.d(e,"a",(function(){return n["a"]}))},"8bcc":function(t,e,a){t.exports=a.p+"img/back-icon.0eecb600.svg"},aa12:function(t,e,a){t.exports=a.p+"img/infohub-blue-logo.cc0ba8cc.svg"},af45:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input"},["checkbox"===t.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"input__box",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.inputText)?t._i(t.inputText,null)>-1:t.inputText},on:{change:function(e){var a=t.inputText,n=e.target,s=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.inputText=a.concat([o])):i>-1&&(t.inputText=a.slice(0,i).concat(a.slice(i+1)))}else t.inputText=s}}}):"radio"===t.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"input__box",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.inputText,null)},on:{change:function(e){t.inputText=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"input__box",attrs:{placeholder:t.placeholder,type:t.inputType},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),"password"===t.type?a("button",{staticClass:"u-absolute input__toggle-pass-text",on:{click:function(e){return e.preventDefault(),t.setInputType.apply(null,arguments)}}},[t._v(" SHOW ")]):t._e()])},s=[],o={name:"Input",props:{type:{type:String,default:"text"},placeholder:{type:String,default:"Placeholder text"},value:{type:String}},data:function(){return{inputType:this.type}},computed:{inputText:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{setInputType:function(){this.inputType="text"===this.inputType?"password":"text"}}},i=o,c=(a("04a4"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"7ce5b09f",null),u=r.exports},b0c0:function(t,e,a){var n=a("83ab"),s=a("5e77").EXISTS,o=a("e330"),i=a("9bf2").f,c=Function.prototype,r=o(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),d="name";n&&!s&&i(c,d,{configurable:!0,get:function(){try{return l(u,r(this))[1]}catch(t){return""}}})},c021:function(t,e,a){"use strict";a("5235")},c30d:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",t._g({class:"button button__"+t.theme+" button__"+(t.mobile?"mobile":"")},t.$listeners),[t._t("default")],2)},s=[],o={name:"Button",props:{theme:{type:String,default:"main"},mobile:{type:Boolean,default:!1}}},i=o,c=(a("c021"),a("2877")),r=Object(c["a"])(i,n,s,!1,null,"26480118",null),u=r.exports},c9a9:function(t,e,a){"use strict";a("37f0")},eed2:function(t,e,a){t.exports=a.p+"img/padlock-icon.bf52e05c.svg"}}]);
//# sourceMappingURL=ResetPassword.33412917.js.map