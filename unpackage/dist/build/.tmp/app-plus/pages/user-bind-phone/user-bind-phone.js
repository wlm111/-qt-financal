(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-bind-phone/user-bind-phone"],{"0b33":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("6607"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"29f4":function(t,e,n){},6607:function(t,e,n){"use strict";n.r(e);var r=n("9e3e"),i=n("a0d9");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("b4db");var u,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},"9e3e":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})},a0d9:function(t,e,n){"use strict";n.r(e);var r=n("afcf"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},afcf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return s(t)||a(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(s){i=!0,o=s}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}function s(t){if(Array.isArray(t))return t}function c(t,e,n,r,i,o,u){try{var a=t[o](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,i)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function u(t){c(o,r,i,u,a,"next",t)}function a(t){c(o,r,i,u,a,"throw",t)}u(void 0)})}}var h={data:function(){return{isbind:!1,disabled:!0,loading:!1,phone:"",checknum:"",codetime:0}},onLoad:function(t){"false"!==t.phone&&t.phone&&"null"!==t.phone&&(this.isbind=!0,this.phone=t.phone)},watch:{phone:function(t){this.OnBtnChange()},checknum:function(t){this.OnBtnChange()}},methods:{isPhone:function(){var t=/^1[34578]\d{9}$/;return t.test(this.phone)},OnBtnChange:function(){this.phone&&this.checknum?this.disabled=!1:this.disabled=!0},getCheckNum:function(){var e=f(r.default.mark(function e(){var n,i,u,a,s,c=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.codetime>0)){e.next=2;break}return e.abrupt("return");case 2:if(this.isPhone()){e.next=4;break}return e.abrupt("return",t.showToast({title:"请输入正确的手机号码",icon:"none"}));case 4:return e.next=6,this.$http.post("/user/sendcode",{phone:this.phone});case 6:if(n=e.sent,i=o(n,2),u=i[0],a=i[1],this.$http.errorCheck(u,a),30001!==a.data.errorCode){e.next=13;break}return e.abrupt("return");case 13:this.codetime=60,s=setInterval(function(){c.codetime--,c.codetime<1&&(clearInterval(s),c.codetime=0)},1e3);case 15:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),submit:function(){var e=f(r.default.mark(function e(){var n,i,u,a,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/user/bindphone",{phone:this.phone,code:this.checknum},{token:!0,checkToken:!0});case 2:if(n=e.sent,i=o(n,2),u=i[0],a=i[1],this.$http.errorCheck(u,a)){e.next=8;break}return e.abrupt("return");case 8:this.isbind=!0,this.disabled=!1,t.showToast({title:"绑定成功！"}),s=a.data.data,"boolean"===typeof s?this.User.userinfo.phone=this.phone:this.User.userinfo=this.User.__formatUserinfo(s),t.setStorageSync("userinfo",this.User.userinfo);case 14:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=h}).call(this,n("6e42")["default"])},b4db:function(t,e,n){"use strict";var r=n("29f4"),i=n.n(r);i.a}},[["0b33","common/runtime","common/vendor"]]]);