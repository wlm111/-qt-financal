(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/news/topic-list"],{"39c7":function(t,e,n){"use strict";var i=n("fbed"),a=n.n(i);a.a},"86b4":function(t,e,n){"use strict";n.r(e);var i=n("9499"),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=a.a},9499:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{ischange:{type:Boolean,default:!1},item:Object,index:Number},methods:{opendetail:function(){if(this.ischange)return t.$emit("changeTopic",{id:this.item.id,title:this.item.title}),void t.navigateBack({delta:1});t.navigateTo({url:"../../pages/topic-detail/topic-detail?detail="+JSON.stringify(this.item)})}}};e.default=n}).call(this,n("6e42")["default"])},d8bd:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return i})},ee8d:function(t,e,n){"use strict";n.r(e);var i=n("d8bd"),a=n("86b4");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("39c7");var u,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"82c03d6e",null,!1,i["a"],u);e["default"]=r.exports},fbed:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/news/topic-list-create-component',
    {
        'components/news/topic-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ee8d"))
        })
    },
    [['components/news/topic-list-create-component']]
]);
