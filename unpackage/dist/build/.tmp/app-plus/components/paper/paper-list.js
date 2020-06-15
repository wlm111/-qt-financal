(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/paper/paper-list"],{"8e80":function(e,t,n){"use strict";var u=n("9b43"),i=n.n(u);i.a},"9b43":function(e,t,n){},"9fa1":function(e,t,n){"use strict";var u,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return u})},b240:function(e,t,n){"use strict";n.r(t);var u=n("9fa1"),i=n("c6e1");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("8e80");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,"ad8306ac",null,!1,u["a"],a);t["default"]=s.exports},c6e1:function(e,t,n){"use strict";n.r(t);var u=n("d20d"),i=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=i.a},d20d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return n.e("components/uni-badge/uni-badge").then(n.bind(null,"2cea"))},i={components:{uniBadge:u},props:{item:Object,index:Number},computed:{getItemNoreadnum:function(){return this.item.noreadnum}},methods:{opendetail:function(){var e={userid:this.item.userid,username:this.item.username,userpic:this.item.userpic};this.User.navigate({url:"../../pages/user-chat/user-chat?userinfo="+JSON.stringify(e)}),this.$chat.Read(this.item)}}};t.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/paper/paper-list-create-component',
    {
        'components/paper/paper-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("b240"))
        })
    },
    [['components/paper/paper-list-create-component']]
]);
