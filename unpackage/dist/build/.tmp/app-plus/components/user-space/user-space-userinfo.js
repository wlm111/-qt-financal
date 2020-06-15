(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/user-space/user-space-userinfo"],{3257:function(t,e,n){"use strict";var u=n("d39a"),r=n.n(u);r.a},"61a0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("6c04"));function r(t){return t&&t.__esModule?t:{default:t}}var c={props:{userinfo:Object},computed:{getRegAge:function(){return u.default.gettime.sumAge(this.userinfo.regtime)},getXingZuo:function(){return u.default.gettime.getHoroscope(this.userinfo.birthday)}}};e.default=c},"656b":function(t,e,n){"use strict";n.r(e);var u=n("dc63"),r=n("8618");for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);n("3257");var o,a=n("f0c5"),i=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,"75db6083",null,!1,u["a"],o);e["default"]=i.exports},8618:function(t,e,n){"use strict";n.r(e);var u=n("61a0"),r=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=r.a},d39a:function(t,e,n){},dc63:function(t,e,n){"use strict";var u,r=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/user-space/user-space-userinfo-create-component',
    {
        'components/user-space/user-space-userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("656b"))
        })
    },
    [['components/user-space/user-space-userinfo-create-component']]
]);
