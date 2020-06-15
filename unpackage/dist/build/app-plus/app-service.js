var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,false])
Z([3,'data-v-7212ade2'])
Z([1,true])
Z(z[3])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'tab'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'u-f-ajc data-v-7212ade2']],[[2,'?:'],[[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'common-list-r data-v-c0b6e3ae'])
Z([[7],[3,'getAge']])
Z([3,'__l'])
Z([3,'data-v-c0b6e3ae'])
Z([[7],[3,'getSex']])
Z([3,'1'])
Z([3,'__e'])
Z([3,'u-f-ajc data-v-c0b6e3ae'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'opendetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'titlepic']])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[6],[[7],[3,'item']],[3,'share']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'common-list-r data-v-4f26fae6'])
Z([[7],[3,'getAge']])
Z([3,'__l'])
Z([3,'data-v-4f26fae6'])
Z([[7],[3,'getSex']])
Z([3,'1'])
Z([3,'u-f-ajc data-v-4f26fae6'])
Z([3,'flex-direction:column;'])
Z([[6],[[7],[3,'item']],[3,'video']])
Z([[6],[[7],[3,'item']],[3,'share']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'home-list-item u-f-ac u-f-jsb animated fadeIn fast data-v-299f1814'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'home-list-hover'])
Z([[6],[[7],[3,'item']],[3,'icon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'index-list3 u-f-ajc data-v-a6aa7d86'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'opendetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'titlepic']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([1,false])
Z([3,'data-v-1b4b1a1a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'openAdd']]]]]]]]])
Z([1,true])
Z(z[5])
Z([3,'1'])
Z([[4],[[5],[[5],[[5],[1,'default']],[1,'left']],[1,'right']]])
Z([3,'index'])
Z([3,'tab'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z(z[1])
Z([[4],[[5],[[5],[1,'u-f-ajc data-v-1b4b1a1a']],[[2,'?:'],[[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'paper-list u-f-ac animated fadeIn fast data-v-ad8306ac'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'opendetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'noreadnum']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-ad8306ac'])
Z([[7],[3,'getItemNoreadnum']])
Z([3,'error'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'uni-collapse-cell']],[[4],[[5],[[5],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-collapse-cell--disabled'],[1,'']]],[[2,'?:'],[[7],[3,'isOpen']],[1,'uni-collapse-cell--open'],[1,'']]]]]])
Z([[2,'?:'],[[7],[3,'disabled']],[1,''],[1,'uni-collapse-cell--hover']])
Z([3,'__e'])
Z([3,'uni-collapse-cell__title'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'thumb']])
Z([3,'__l'])
Z([3,'#bbb'])
Z([3,'20'])
Z([3,'arrowdown'])
Z([3,'1'])
Z([[7],[3,'elId']])
Z([[7],[3,'contentdata']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'width']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-grid-item__box data-v-a9d88d14']],[[2,'?:'],[[7],[3,'showBorder']],[1,'uni-grid-item--border'],[1,'']]],[[2,'?:'],[[2,'&&'],[[7],[3,'showBorder']],[[2,'<'],[[7],[3,'index']],[[7],[3,'column']]]],[1,'uni-grid-item--border-top'],[1,'']]],[[2,'?:'],[[7],[3,'highlight']],[1,'uni-highlight'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'border-right-color:'],[[7],[3,'borderColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'border-bottom-color:'],[[7],[3,'borderColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'border-top-color:'],[[7],[3,'borderColor']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item']],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'showSwitch']]],[1,''],[1,'uni-list-item--hover']])
Z([3,'uni-list-item__container'])
Z([[7],[3,'thumb']])
Z([[7],[3,'showExtraIcon']])
Z([3,'__l'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([[7],[3,'note']])
Z([[2,'||'],[[2,'||'],[[7],[3,'showBadge']],[[7],[3,'showArrow']]],[[7],[3,'showSwitch']]])
Z([3,'uni-list-item__extra'])
Z([[7],[3,'showBadge']])
Z(z[7])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[7],[3,'showSwitch']])
Z([[7],[3,'showArrow']])
Z(z[7])
Z([3,'#bbb'])
Z([1,20])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content']],[[2,'?:'],[[2,'!'],[[2,'!'],[[7],[3,'fixed']]]],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[2,'!'],[[2,'!'],[[7],[3,'border']]]],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[2,'!'],[[2,'!'],[[7],[3,'border']]]],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'uni-navbar__header'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[4])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[8])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[4])
Z(z[13])
Z(z[14])
Z([[7],[3,'rightIcon']])
Z([3,'3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[3])
Z(z[4])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-chat-item animated fadeIn fast data-v-4d3db92e'])
Z([[6],[[7],[3,'item']],[3,'gstime']])
Z([[4],[[5],[[5],[1,'user-chat-list u-f data-v-4d3db92e']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isme']],[1,'user-chat-me'],[1,'']]]])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isme']]])
Z([3,'user-chat-list-body data-v-4d3db92e'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'img']])
Z([[6],[[7],[3,'item']],[3,'isme']])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'item']],[3,'age']])
Z([3,'__l'])
Z([3,'data-v-d22a884e'])
Z([[6],[[7],[3,'item']],[3,'sex']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-space-head-info u-f-ajc u-f-column data-v-2a810246'])
Z([[7],[3,'getAge']])
Z([3,'__l'])
Z([3,'data-v-2a810246'])
Z([[7],[3,'getSex']])
Z([3,'1'])
Z([[2,'!'],[[6],[[7],[3,'userinfo']],[3,'isme']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'overflow:hidden;'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]]])
Z([3,'back'])
Z([3,'发布'])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'upload']]]]]]]],[[4],[[5],[[5],[1,'^del']],[[4],[[5],[[4],[[5],[1,'delImageList']]]]]]]]])
Z([[7],[3,'imglist']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'recordlist']])
Z(z[0])
Z([3,'__e'])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'recorddata']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index1'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[11])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[7])
Z([[7],[3,'index1']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index1']]])
Z(z[7])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'items']],[3,'firstload']]])
Z(z[7])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'zcrecord']])
Z(z[11])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[7],[3,'srrecord']])
Z(z[11])
Z(z[1])
Z(z[16])
Z(z[0])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[7],[3,'bxrecord']])
Z(z[11])
Z(z[1])
Z(z[16])
Z(z[0])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[7],[3,'xykrecord']])
Z(z[11])
Z(z[1])
Z(z[16])
Z(z[0])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'5-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'monthdata']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'monthrecord']])
Z(z[3])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'todaydata']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'todayrecord']])
Z(z[3])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'yeardata']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'yearrecord']])
Z(z[3])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'qiun-columns'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[2])
Z([3,'swiper-box'])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z(z[1])
Z([3,'index_line_1'])
Z([[7],[3,'zclineData']])
Z([3,'2'])
Z(z[1])
Z([3,'index_line_3'])
Z([[7],[3,'srlineData']])
Z([3,'3'])
Z(z[1])
Z([3,'index_line_2'])
Z([[7],[3,'lineData2']])
Z([3,'4'])
Z(z[1])
Z([3,'index_line_4'])
Z([[7],[3,'bxlineData']])
Z([3,'5'])
Z(z[1])
Z(z[13])
Z([[7],[3,'xyklineData']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'cardList']])
Z(z[0])
Z([3,'__e'])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index1'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[8])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'index1']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index1']]])
Z(z[14])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'items']],[3,'firstload']]])
Z(z[14])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeevent']],[[4],[[5],[[4],[[5],[1,'updateData']]]]]]]]])
Z([[7],[3,'detail']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'comment']],[3,'list']])
Z(z[5])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^reply']],[[4],[[5],[[4],[[5],[1,'reply']]]]]]]]])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[0])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^submit']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]],[[4],[[5],[[5],[1,'^blur']],[[4],[[5],[[4],[[5],[1,'blur']]]]]]]]])
Z([[7],[3,'focus']])
Z([3,'3'])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^togle']],[[4],[[5],[[4],[[5],[1,'togle']]]]]]]]])
Z([[7],[3,'sharedata']])
Z([[7],[3,'shareshow']])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'loginStatus']]])
Z([3,'__l'])
Z([[7],[3,'homeinfo']])
Z([3,'1'])
Z(z[1])
Z([[7],[3,'homedata']])
Z([3,'2'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[7])
Z(z[1])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([1,4])
Z([1,true])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'4'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'5'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'6'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'7'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'8'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'9'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'10'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'11'],[1,',']],[1,'1']])
Z(z[5])
Z(z[1])
Z([[2,'+'],[[2,'+'],[1,'12'],[1,',']],[1,'1']])
Z(z[5])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[39])
Z(z[1])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'13-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'#3ff595'])
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeTab']],[[4],[[5],[[4],[[5],[1,'changeTab']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z(z[1])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[1,'loadmore']]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'guanzhu']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'guanzhu']],[3,'list']])
Z(z[15])
Z(z[0])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[0])
Z([[6],[[7],[3,'guanzhu']],[3,'loadtext']])
Z([3,'3'])
Z([[2,'!'],[[6],[[7],[3,'guanzhu']],[3,'firstload']]])
Z(z[0])
Z([3,'4'])
Z(z[12])
Z(z[0])
Z([[6],[[7],[3,'topic']],[3,'postnav']])
Z([3,'5'])
Z(z[0])
Z([[6],[[7],[3,'topic']],[3,'topicnav']])
Z([3,'6'])
Z(z[15])
Z(z[16])
Z([[6],[[7],[3,'topic']],[3,'list']])
Z(z[15])
Z(z[0])
Z(z[20])
Z(z[21])
Z([[2,'+'],[1,'7-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^hide']],[[4],[[5],[[4],[[5],[1,'hidepopup']]]]]]]],[[4],[[5],[[5],[1,'^addfriend']],[[4],[[5],[[4],[[5],[1,'addfriend']]]]]]]],[[4],[[5],[[5],[1,'^clear']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([[7],[3,'show']])
Z([3,'1'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[9])
Z(z[1])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'!'],[[7],[3,'firstload']]])
Z(z[1])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'newslist']])
Z(z[11])
Z(z[1])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index1'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[19])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeevent']],[[4],[[5],[[4],[[5],[1,'updateData']]]]]]]]])
Z([[7],[3,'index1']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index1']]])
Z(z[0])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'items']],[3,'firstload']]])
Z(z[0])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
function gz$gwx_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx_72)return __WXML_GLOBAL__.ops_cached.$gwx_72
__WXML_GLOBAL__.ops_cached.$gwx_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z([1,true])
Z([[7],[3,'currentTime']])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^dayChange']],[[4],[[5],[[4],[[5],[1,'dayChange']]]]]]]],[[4],[[5],[[5],[1,'^monthChange']],[[4],[[5],[[4],[[5],[1,'monthChange']]]]]]]],[[4],[[5],[[5],[1,'^rangeChange']],[[4],[[5],[[4],[[5],[1,'rangeChange']]]]]]]]])
Z([[7],[3,'dateEnd']])
Z([[7],[3,'dateStart']])
Z([[7],[3,'mark']])
Z([[7],[3,'range']])
Z([[7],[3,'rangeMode']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_72);return __WXML_GLOBAL__.ops_cached.$gwx_72
}
function gz$gwx_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx_73)return __WXML_GLOBAL__.ops_cached.$gwx_73
__WXML_GLOBAL__.ops_cached.$gwx_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_73);return __WXML_GLOBAL__.ops_cached.$gwx_73
}
function gz$gwx_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx_74)return __WXML_GLOBAL__.ops_cached.$gwx_74
__WXML_GLOBAL__.ops_cached.$gwx_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'remindlist']])
Z(z[0])
Z([3,'__e'])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'__l'])
Z([[7],[3,'reminddata']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index1'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[11])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[7])
Z([[7],[3,'index1']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index1']]])
Z(z[7])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'items']],[3,'firstload']]])
Z(z[7])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_74);return __WXML_GLOBAL__.ops_cached.$gwx_74
}
function gz$gwx_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx_75)return __WXML_GLOBAL__.ops_cached.$gwx_75
__WXML_GLOBAL__.ops_cached.$gwx_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'zcremind']])
Z(z[11])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'changeevent']],[[4],[[5],[[4],[[5],[[5],[1,'updateData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[0])
Z([[7],[3,'index1']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[7],[3,'srremind']])
Z(z[11])
Z(z[1])
Z(z[16])
Z(z[0])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[7],[3,'swremind']])
Z(z[11])
Z(z[1])
Z(z[16])
Z(z[0])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z([[7],[3,'xykremind']])
Z(z[11])
Z(z[1])
Z(z[16])
Z(z[0])
Z(z[18])
Z(z[19])
Z([[2,'+'],[1,'5-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_75);return __WXML_GLOBAL__.ops_cached.$gwx_75
}
function gz$gwx_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx_76)return __WXML_GLOBAL__.ops_cached.$gwx_76
__WXML_GLOBAL__.ops_cached.$gwx_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[1])
Z([[2,'=='],[[7],[3,'searchType']],[1,'post']])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeevent']],[[4],[[5],[[4],[[5],[1,'updateData']]]]]]]]])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'=='],[[7],[3,'searchType']],[1,'topic']])
Z(z[6])
Z(z[9])
Z(z[10])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[6])
Z(z[9])
Z(z[10])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[6])
Z([[7],[3,'loadtext']])
Z([3,'4'])
Z([[2,'&&'],[[7],[3,'issearch']],[[2,'<'],[[6],[[7],[3,'list']],[3,'length']],[1,1]]])
Z(z[6])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_76);return __WXML_GLOBAL__.ops_cached.$gwx_76
}
function gz$gwx_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx_77)return __WXML_GLOBAL__.ops_cached.$gwx_77
__WXML_GLOBAL__.ops_cached.$gwx_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'topicInfo']])
Z([3,'1'])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([3,'width:50%;'])
Z([3,'border-bottom:0;'])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'2'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tablist']])
Z(z[11])
Z([[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]])
Z([3,'listindex'])
Z([3,'list'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z(z[16])
Z(z[0])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeevent']],[[4],[[5],[[4],[[5],[1,'updateData']]]]]]]]])
Z([[7],[3,'listindex']])
Z([[7],[3,'list']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'3-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'listindex']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'loadtext']])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_77);return __WXML_GLOBAL__.ops_cached.$gwx_77
}
function gz$gwx_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx_78)return __WXML_GLOBAL__.ops_cached.$gwx_78
__WXML_GLOBAL__.ops_cached.$gwx_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[1])
Z([3,'swiper-box'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'newslist']])
Z(z[11])
Z(z[1])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index1'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[19])
Z(z[0])
Z([[7],[3,'index1']])
Z([[7],[3,'ischange']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index1']]])
Z(z[0])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'items']],[3,'firstload']]])
Z(z[0])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_78);return __WXML_GLOBAL__.ops_cached.$gwx_78
}
function gz$gwx_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx_79)return __WXML_GLOBAL__.ops_cached.$gwx_79
__WXML_GLOBAL__.ops_cached.$gwx_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isbind']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_79);return __WXML_GLOBAL__.ops_cached.$gwx_79
}
function gz$gwx_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx_80)return __WXML_GLOBAL__.ops_cached.$gwx_80
__WXML_GLOBAL__.ops_cached.$gwx_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^submit']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_80);return __WXML_GLOBAL__.ops_cached.$gwx_80
}
function gz$gwx_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx_81)return __WXML_GLOBAL__.ops_cached.$gwx_81
__WXML_GLOBAL__.ops_cached.$gwx_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[4])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^submit']],[[4],[[5],[[4],[[5],[1,'submit']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_81);return __WXML_GLOBAL__.ops_cached.$gwx_81
}
function gz$gwx_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx_82)return __WXML_GLOBAL__.ops_cached.$gwx_82
__WXML_GLOBAL__.ops_cached.$gwx_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[4])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'openDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'titlepic']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
Z([[2,'!'],[[7],[3,'firstload']]])
Z(z[1])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_82);return __WXML_GLOBAL__.ops_cached.$gwx_82
}
function gz$gwx_83(){
if( __WXML_GLOBAL__.ops_cached.$gwx_83)return __WXML_GLOBAL__.ops_cached.$gwx_83
__WXML_GLOBAL__.ops_cached.$gwx_83=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([3,'width:33%;'])
Z([3,'border-bottom:0;'])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'1'])
Z(z[2])
Z([3,'swiper-box'])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'tabChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperheight']],[1,'px']]],[1,';']])
Z([3,'index'])
Z([3,'items'])
Z([[7],[3,'newslist']])
Z(z[14])
Z(z[2])
Z([3,'list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadmore']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'items']],[3,'list']],[3,'length']],[1,0]])
Z([3,'index1'])
Z([3,'item'])
Z([[6],[[7],[3,'items']],[3,'list']])
Z(z[22])
Z(z[1])
Z([[7],[3,'index1']])
Z([[7],[3,'item']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'index1']]])
Z(z[1])
Z([[6],[[7],[3,'items']],[3,'loadtext']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z([[2,'!'],[[6],[[7],[3,'items']],[3,'firstload']]])
Z(z[1])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_83);return __WXML_GLOBAL__.ops_cached.$gwx_83
}
function gz$gwx_84(){
if( __WXML_GLOBAL__.ops_cached.$gwx_84)return __WXML_GLOBAL__.ops_cached.$gwx_84
__WXML_GLOBAL__.ops_cached.$gwx_84=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^updateuserbind']],[[4],[[5],[[4],[[5],[1,'__init']]]]]]]]])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_84);return __WXML_GLOBAL__.ops_cached.$gwx_84
}
function gz$gwx_85(){
if( __WXML_GLOBAL__.ops_cached.$gwx_85)return __WXML_GLOBAL__.ops_cached.$gwx_85
__WXML_GLOBAL__.ops_cached.$gwx_85=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_85);return __WXML_GLOBAL__.ops_cached.$gwx_85
}
function gz$gwx_86(){
if( __WXML_GLOBAL__.ops_cached.$gwx_86)return __WXML_GLOBAL__.ops_cached.$gwx_86
__WXML_GLOBAL__.ops_cached.$gwx_86=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_86);return __WXML_GLOBAL__.ops_cached.$gwx_86
}
function gz$gwx_87(){
if( __WXML_GLOBAL__.ops_cached.$gwx_87)return __WXML_GLOBAL__.ops_cached.$gwx_87
__WXML_GLOBAL__.ops_cached.$gwx_87=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[3])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([1,true])
Z([[6],[[7],[3,'item']],[3,'title']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_87);return __WXML_GLOBAL__.ops_cached.$gwx_87
}
function gz$gwx_88(){
if( __WXML_GLOBAL__.ops_cached.$gwx_88)return __WXML_GLOBAL__.ops_cached.$gwx_88
__WXML_GLOBAL__.ops_cached.$gwx_88=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'hasPassword']])
})(__WXML_GLOBAL__.ops_cached.$gwx_88);return __WXML_GLOBAL__.ops_cached.$gwx_88
}
function gz$gwx_89(){
if( __WXML_GLOBAL__.ops_cached.$gwx_89)return __WXML_GLOBAL__.ops_cached.$gwx_89
__WXML_GLOBAL__.ops_cached.$gwx_89=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([3,'#007AFF'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_89);return __WXML_GLOBAL__.ops_cached.$gwx_89
}
function gz$gwx_90(){
if( __WXML_GLOBAL__.ops_cached.$gwx_90)return __WXML_GLOBAL__.ops_cached.$gwx_90
__WXML_GLOBAL__.ops_cached.$gwx_90=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_90);return __WXML_GLOBAL__.ops_cached.$gwx_90
}
function gz$gwx_91(){
if( __WXML_GLOBAL__.ops_cached.$gwx_91)return __WXML_GLOBAL__.ops_cached.$gwx_91
__WXML_GLOBAL__.ops_cached.$gwx_91=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^update']],[[4],[[5],[[4],[[5],[1,'updateGuanZhu']]]]]]]]])
Z([[7],[3,'userinfo']])
Z([3,'1'])
Z(z[0])
Z([[7],[3,'spacedata']])
Z([3,'2'])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tabtap']],[[4],[[5],[[4],[[5],[1,'tabtap']]]]]]]]])
Z([3,'width:33.33%;'])
Z([3,'border-bottom:0;'])
Z([[7],[3,'tabBars']])
Z([[7],[3,'tabIndex']])
Z([3,'3'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tablist']])
Z(z[16])
Z([[2,'&&'],[[2,'==='],[[7],[3,'tabIndex']],[1,0]],[[2,'==='],[[7],[3,'tabIndex']],[[7],[3,'index']]]])
Z(z[0])
Z(z[3])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
Z([[2,'=='],[[7],[3,'tabIndex']],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'list']],[3,'length']],[1,0]])
Z([3,'listindex'])
Z([3,'list'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z(z[26])
Z(z[0])
Z([[7],[3,'listindex']])
Z([[7],[3,'list']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'5-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'listindex']]])
Z(z[0])
Z([[6],[[7],[3,'item']],[3,'loadtext']])
Z([[2,'+'],[1,'6-'],[[7],[3,'index']]])
Z(z[0])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^hide']],[[4],[[5],[[4],[[5],[1,'togleShow']]]]]]]],[[4],[[5],[[5],[1,'^lahei']],[[4],[[5],[[4],[[5],[1,'lahei']]]]]]]],[[4],[[5],[[5],[1,'^chat']],[[4],[[5],[[4],[[5],[1,'goToChat']]]]]]]]])
Z([[6],[[7],[3,'userinfo']],[3,'isblack']])
Z([[7],[3,'show']])
Z([3,'7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_91);return __WXML_GLOBAL__.ops_cached.$gwx_91
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/Li-Calendar/Li-Calendar.wxml','./components/bill/bill-data.wxml','./components/bill/bill-list-item.wxml','./components/bill/billgory-list.wxml','./components/charts/chart-nav-bar.wxml','./components/common/common-list.wxml','./components/common/load-more.wxml','./components/common/more-share.wxml','./components/common/no-thing.wxml','./components/common/tag-sex-age.wxml','./components/common/uploud-images.wxml','./components/creditcard/card-list-item.wxml','./components/detail/comment-list.wxml','./components/detail/detail-info.wxml','./components/home/home-data.wxml','./components/home/home-info.wxml','./components/home/home-list-item.wxml','./components/home/other-login.wxml','./components/index/index-list.wxml','./components/index/swiper-tab-head.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/news/news-nav-bar.wxml','./components/news/post-nav.wxml','./components/news/topic-list.wxml','./components/news/topic-nav.wxml','./components/paper/paper-left-popup.wxml','./components/paper/paper-list.wxml','./components/remind/remind-data.wxml','./components/remind/remind-list-item.wxml','./components/stan-ucharts/LineChart.wxml','./components/topic/topic-info.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-collapse-item/uni-collapse-item.wxml','./components/uni-collapse/uni-collapse.wxml','./components/uni-grid-item/uni-grid-item.wxml','./components/uni-grid/uni-grid.wxml','./components/uni-icon/uni-icon.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./components/uni-nav-bar/uni-nav-bar.wxml','./components/uni-status-bar/uni-status-bar.wxml','./components/user-chat/user-chat-bottom.wxml','./components/user-chat/user-chat-list.wxml','./components/user-list/user-list.wxml','./components/user-space/user-space-head.wxml','./components/user-space/user-space-popup.wxml','./components/user-space/user-space-userinfo.wxml','./pages/add-input/add-input.wxml','./pages/bill/bill.wxml','./pages/bill/billdetail.wxml','./pages/bill/billgl.wxml','./pages/bill/billgory.wxml','./pages/bill/monthbill.wxml','./pages/bill/todaybill.wxml','./pages/bill/yearbill.wxml','./pages/categorygl/categorygl.wxml','./pages/categorygl/srcategorygl.wxml','./pages/categorygl/zccategorygl.wxml','./pages/categorygl/zhcategorygl.wxml','./pages/chart/chart.wxml','./pages/creditcardgl/addcard.wxml','./pages/creditcardgl/carddetail.wxml','./pages/creditcardgl/creditcardgl.wxml','./pages/detail/detail.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/news/news.wxml','./pages/paper/paper.wxml','./pages/post-nav/post-nav.wxml','./pages/remind/CreateRemind.wxml','./pages/remind/remind.wxml','./pages/remind/reminddetail.wxml','./pages/remind/remindgl.wxml','./pages/remind/remindgory.wxml','./pages/search/search.wxml','./pages/topic-detail/topic-detail.wxml','./pages/topic-nav/topic-nav.wxml','./pages/user-bind-phone/user-bind-phone.wxml','./pages/user-chat/user-chat.wxml','./pages/user-feedback/user-feedback.wxml','./pages/user-history/user-history.wxml','./pages/user-list/user-list.wxml','./pages/user-safe/user-safe.wxml','./pages/user-set-about/user-set-about.wxml','./pages/user-set-email/user-set-email.wxml','./pages/user-set-help/user-set-help.wxml','./pages/user-set-repassword/user-set-repassword.wxml','./pages/user-set-userinfo/user-set-userinfo.wxml','./pages/user-set/user-set.wxml','./pages/user-space/user-space.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cF=_mz(z,'uni-nav-bar',['bind:__l',0,'border',1,'class',1,'fixed',2,'statusBar',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,14,oJ,cI,gg)){eN.wxVkey=1
}
eN.wxXCkey=1
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,9,oH,e,s,gg,hG,'tab','index','id')
_(r,cF)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oP=_n('view')
_rz(z,oP,'class',0,e,s,gg)
var xQ=_mz(z,'tag-sex-age',['age',1,'bind:__l',1,'class',2,'sex',3,'vueId',4],[],e,s,gg)
_(oP,xQ)
var oR=_mz(z,'view',['catchtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,9,e,s,gg)){fS.wxVkey=1
var oV=_v()
_(fS,oV)
if(_oz(z,10,e,s,gg)){oV.wxVkey=1
}
oV.wxXCkey=1
}
var cT=_v()
_(oR,cT)
if(_oz(z,11,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(oR,hU)
if(_oz(z,12,e,s,gg)){hU.wxVkey=1
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
_(oP,oR)
_(r,oP)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lY=_v()
_(r,lY)
if(_oz(z,0,e,s,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var f7=_mz(z,'tag-sex-age',['age',1,'bind:__l',1,'class',2,'sex',3,'vueId',4],[],e,s,gg)
_(o6,f7)
var c8=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,8,e,s,gg)){h9.wxVkey=1
}
var o0=_v()
_(c8,o0)
if(_oz(z,9,e,s,gg)){o0.wxVkey=1
}
h9.wxXCkey=1
o0.wxXCkey=1
_(o6,c8)
_(r,o6)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var aDB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,4,e,s,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
_(r,aDB)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oHB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,3,e,s,gg)){xIB.wxVkey=1
}
var oJB=_v()
_(oHB,oJB)
if(_oz(z,4,e,s,gg)){oJB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
_(r,oHB)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oNB=_mz(z,'uni-nav-bar',['bind:__l',0,'bind:clickRight',1,'border',1,'class',2,'data-event-opts',3,'fixed',4,'statusBar',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],aRB,lQB,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,16,aRB,lQB,gg)){oVB.wxVkey=1
}
oVB.wxXCkey=1
_(tSB,bUB)
return tSB
}
cOB.wxXCkey=2
_2z(z,11,oPB,e,s,gg,cOB,'tab','index','id')
_(r,oNB)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var o2B=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,3,e,s,gg)){c3B.wxVkey=1
var o4B=_mz(z,'uni-badge',['bind:__l',4,'class',1,'text',2,'type',3,'vueId',4],[],e,s,gg)
_(c3B,o4B)
}
c3B.wxXCkey=1
c3B.wxXCkey=3
_(r,o2B)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var e8B=_n('slot')
_(r,e8B)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var xAC=_v()
_(r,xAC)
if(_oz(z,0,e,s,gg)){xAC.wxVkey=1
}
xAC.wxXCkey=1
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var fCC=_mz(z,'view',['class',0,'hoverClass',1],[],e,s,gg)
var cDC=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,5,e,s,gg)){hEC.wxVkey=1
}
var oFC=_mz(z,'uni-icon',['bind:__l',6,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(cDC,oFC)
hEC.wxXCkey=1
_(fCC,cDC)
var cGC=_n('view')
_rz(z,cGC,'id',11,e,s,gg)
var lIC=_n('slot')
_(cGC,lIC)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,12,e,s,gg)){oHC.wxVkey=1
}
oHC.wxXCkey=1
_(fCC,cGC)
_(r,fCC)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var tKC=_n('slot')
_(r,tKC)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var bMC=_v()
_(r,bMC)
if(_oz(z,0,e,s,gg)){bMC.wxVkey=1
var oNC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var xOC=_n('slot')
_(oNC,xOC)
_(bMC,oNC)
}
bMC.wxXCkey=1
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var fQC=_n('slot')
_(r,fQC)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oTC=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var cUC=_n('view')
_rz(z,cUC,'class',4,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,5,e,s,gg)){oVC.wxVkey=1
}
else{oVC.wxVkey=2
var tYC=_v()
_(oVC,tYC)
if(_oz(z,6,e,s,gg)){tYC.wxVkey=1
var eZC=_mz(z,'uni-icon',['bind:__l',7,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(tYC,eZC)
}
tYC.wxXCkey=1
tYC.wxXCkey=3
}
var lWC=_v()
_(cUC,lWC)
if(_oz(z,12,e,s,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(cUC,aXC)
if(_oz(z,13,e,s,gg)){aXC.wxVkey=1
var b1C=_n('view')
_rz(z,b1C,'class',14,e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,15,e,s,gg)){o2C.wxVkey=1
var f5C=_mz(z,'uni-badge',['bind:__l',16,'text',1,'type',2,'vueId',3],[],e,s,gg)
_(o2C,f5C)
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,20,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(b1C,o4C)
if(_oz(z,21,e,s,gg)){o4C.wxVkey=1
var c6C=_mz(z,'uni-icon',['bind:__l',22,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(o4C,c6C)
}
o2C.wxXCkey=1
o2C.wxXCkey=3
x3C.wxXCkey=1
o4C.wxXCkey=1
o4C.wxXCkey=3
_(aXC,b1C)
}
oVC.wxXCkey=1
oVC.wxXCkey=3
lWC.wxXCkey=1
aXC.wxXCkey=1
aXC.wxXCkey=3
_(oTC,cUC)
_(r,oTC)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var o8C=_n('slot')
_(r,o8C)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var aBD=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,3,e,s,gg)){tCD.wxVkey=1
var eDD=_mz(z,'uni-status-bar',['bind:__l',4,'vueId',1],[],e,s,gg)
_(tCD,eDD)
}
var bED=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var oFD=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var xGD=_v()
_(oFD,xGD)
if(_oz(z,11,e,s,gg)){xGD.wxVkey=1
var fID=_mz(z,'uni-icon',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(xGD,fID)
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,17,e,s,gg)){oHD.wxVkey=1
}
var cJD=_n('slot')
_rz(z,cJD,'name',18,e,s,gg)
_(oFD,cJD)
xGD.wxXCkey=1
xGD.wxXCkey=3
oHD.wxXCkey=1
_(bED,oFD)
var hKD=_n('view')
_rz(z,hKD,'class',19,e,s,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,20,e,s,gg)){oLD.wxVkey=1
}
var cMD=_n('slot')
_(hKD,cMD)
oLD.wxXCkey=1
_(bED,hKD)
var oND=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var lOD=_v()
_(oND,lOD)
if(_oz(z,24,e,s,gg)){lOD.wxVkey=1
var tQD=_mz(z,'uni-icon',['bind:__l',25,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(lOD,tQD)
}
var aPD=_v()
_(oND,aPD)
if(_oz(z,30,e,s,gg)){aPD.wxVkey=1
}
var eRD=_n('slot')
_rz(z,eRD,'name',31,e,s,gg)
_(oND,eRD)
lOD.wxXCkey=1
lOD.wxXCkey=3
aPD.wxXCkey=1
_(bED,oND)
_(aBD,bED)
tCD.wxXCkey=1
tCD.wxXCkey=3
_(o0C,aBD)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,32,e,s,gg)){lAD.wxVkey=1
var bSD=_v()
_(lAD,bSD)
if(_oz(z,33,e,s,gg)){bSD.wxVkey=1
var oTD=_mz(z,'uni-status-bar',['bind:__l',34,'vueId',1],[],e,s,gg)
_(bSD,oTD)
}
bSD.wxXCkey=1
bSD.wxXCkey=3
}
lAD.wxXCkey=1
lAD.wxXCkey=3
_(r,o0C)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var oVD=_n('slot')
_(r,oVD)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var hYD=_n('view')
_rz(z,hYD,'class',0,e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,1,e,s,gg)){oZD.wxVkey=1
}
var c1D=_n('view')
_rz(z,c1D,'class',2,e,s,gg)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,3,e,s,gg)){o2D.wxVkey=1
}
var a4D=_n('view')
_rz(z,a4D,'class',4,e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,5,e,s,gg)){t5D.wxVkey=1
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,6,e,s,gg)){e6D.wxVkey=1
}
t5D.wxXCkey=1
e6D.wxXCkey=1
_(c1D,a4D)
var l3D=_v()
_(c1D,l3D)
if(_oz(z,7,e,s,gg)){l3D.wxVkey=1
}
o2D.wxXCkey=1
l3D.wxXCkey=1
_(hYD,c1D)
oZD.wxXCkey=1
_(r,hYD)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var o8D=_mz(z,'tag-sex-age',['age',0,'bind:__l',1,'class',1,'sex',2,'vueId',3],[],e,s,gg)
_(r,o8D)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var o0D=_n('view')
_rz(z,o0D,'class',0,e,s,gg)
var cBE=_mz(z,'tag-sex-age',['age',1,'bind:__l',1,'class',2,'sex',3,'vueId',4],[],e,s,gg)
_(o0D,cBE)
var fAE=_v()
_(o0D,fAE)
if(_oz(z,6,e,s,gg)){fAE.wxVkey=1
}
fAE.wxXCkey=1
_(r,o0D)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
var oFE=_n('view')
_rz(z,oFE,'style',0,e,s,gg)
var lGE=_mz(z,'uni-nav-bar',['bind:__l',1,'bind:clickLeft',1,'bind:clickRight',2,'data-event-opts',3,'leftIcon',4,'rightText',5,'statusBar',6,'vueId',7,'vueSlots',8],[],e,s,gg)
_(oFE,lGE)
var aHE=_mz(z,'uploud-images',['bind:__l',10,'bind:del',1,'bind:upload',2,'data-event-opts',3,'imageList',4,'vueId',5],[],e,s,gg)
_(oFE,aHE)
_(r,oFE)
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var oLE=_v()
_(r,oLE)
var xME=function(fOE,oNE,cPE,gg){
var oRE=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',4,'class',1,'data-event-opts',2],[],fOE,oNE,gg)
var oTE=_mz(z,'bill-data',['bind:__l',7,'homedata',1,'vueId',2],[],fOE,oNE,gg)
_(oRE,oTE)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,10,fOE,oNE,gg)){cSE.wxVkey=1
var lUE=_v()
_(cSE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_mz(z,'bill-list-item',['bind:__l',17,'index',1,'item',2,'vueId',3],[],eXE,tWE,gg)
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=4
_2z(z,13,aVE,fOE,oNE,gg,lUE,'item','index1','index1')
var o2E=_mz(z,'load-more',['bind:__l',21,'loadtext',1,'vueId',2],[],fOE,oNE,gg)
_(cSE,o2E)
}
else{cSE.wxVkey=2
var f3E=_v()
_(cSE,f3E)
if(_oz(z,24,fOE,oNE,gg)){f3E.wxVkey=1
}
else{f3E.wxVkey=2
var c4E=_mz(z,'no-thing',['bind:__l',25,'vueId',1],[],fOE,oNE,gg)
_(f3E,c4E)
}
f3E.wxXCkey=1
f3E.wxXCkey=3
}
cSE.wxXCkey=1
cSE.wxXCkey=3
cSE.wxXCkey=3
_(cPE,oRE)
return cPE
}
oLE.wxXCkey=4
_2z(z,2,xME,e,s,gg,oLE,'items','index','index')
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var o6E=_n('view')
var c7E=_mz(z,'swiper-tab-head',['bind:__l',0,'bind:tabtap',1,'data-event-opts',1,'tabBars',2,'tabIndex',3,'vueId',4],[],e,s,gg)
_(o6E,c7E)
var o8E=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var l9E=_v()
_(o8E,l9E)
var a0E=function(eBF,tAF,bCF,gg){
var xEF=_mz(z,'billgory-list',['bind:__l',17,'index',1,'item',2,'vueId',3],[],eBF,tAF,gg)
_(bCF,xEF)
return bCF
}
l9E.wxXCkey=4
_2z(z,13,a0E,e,s,gg,l9E,'item','index','index')
var oFF=_v()
_(o8E,oFF)
var fGF=function(hIF,cHF,oJF,gg){
var oLF=_mz(z,'billgory-list',['bind:__l',27,'index',1,'item',2,'vueId',3],[],hIF,cHF,gg)
_(oJF,oLF)
return oJF
}
oFF.wxXCkey=4
_2z(z,23,fGF,e,s,gg,oFF,'item','index','index')
var lMF=_v()
_(o8E,lMF)
var aNF=function(ePF,tOF,bQF,gg){
var xSF=_mz(z,'billgory-list',['bind:__l',37,'index',1,'item',2,'vueId',3],[],ePF,tOF,gg)
_(bQF,xSF)
return bQF
}
lMF.wxXCkey=4
_2z(z,33,aNF,e,s,gg,lMF,'item','index','index')
var oTF=_v()
_(o8E,oTF)
var fUF=function(hWF,cVF,oXF,gg){
var oZF=_mz(z,'billgory-list',['bind:__l',47,'index',1,'item',2,'vueId',3],[],hWF,cVF,gg)
_(oXF,oZF)
return oXF
}
oTF.wxXCkey=4
_2z(z,43,fUF,e,s,gg,oTF,'item','index','index')
_(o6E,o8E)
_(r,o6E)
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
var a2F=_n('view')
var t3F=_mz(z,'bill-data',['bind:__l',0,'homedata',1,'vueId',1],[],e,s,gg)
_(a2F,t3F)
var e4F=_v()
_(a2F,e4F)
var b5F=function(x7F,o6F,o8F,gg){
var c0F=_mz(z,'billgory-list',['bind:__l',9,'index',1,'item',2,'vueId',3],[],x7F,o6F,gg)
_(o8F,c0F)
return o8F
}
e4F.wxXCkey=4
_2z(z,5,b5F,e,s,gg,e4F,'item','index','index')
_(r,a2F)
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
var oBG=_n('view')
var cCG=_mz(z,'bill-data',['bind:__l',0,'homedata',1,'vueId',1],[],e,s,gg)
_(oBG,cCG)
var oDG=_v()
_(oBG,oDG)
var lEG=function(tGG,aFG,eHG,gg){
var oJG=_mz(z,'billgory-list',['bind:__l',9,'index',1,'item',2,'vueId',3],[],tGG,aFG,gg)
_(eHG,oJG)
return eHG
}
oDG.wxXCkey=4
_2z(z,5,lEG,e,s,gg,oDG,'item','index','index')
_(r,oBG)
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
var oLG=_n('view')
var fMG=_mz(z,'bill-data',['bind:__l',0,'homedata',1,'vueId',1],[],e,s,gg)
_(oLG,fMG)
var cNG=_v()
_(oLG,cNG)
var hOG=function(cQG,oPG,oRG,gg){
var aTG=_mz(z,'billgory-list',['bind:__l',9,'index',1,'item',2,'vueId',3],[],cQG,oPG,gg)
_(oRG,aTG)
return oRG
}
cNG.wxXCkey=4
_2z(z,5,hOG,e,s,gg,cNG,'item','index','index')
_(r,oLG)
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var eVG=_v()
_(r,eVG)
var bWG=function(xYG,oXG,oZG,gg){
var c2G=_mz(z,'home-list-item',['bind:__l',4,'index',1,'item',2,'vueId',3],[],xYG,oXG,gg)
_(oZG,c2G)
return oZG
}
eVG.wxXCkey=4
_2z(z,2,bWG,e,s,gg,eVG,'item','index','index')
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var o4G=_v()
_(r,o4G)
var c5G=function(l7G,o6G,a8G,gg){
var e0G=_mz(z,'home-list-item',['bind:__l',4,'index',1,'item',2,'vueId',3],[],l7G,o6G,gg)
_(a8G,e0G)
return a8G
}
o4G.wxXCkey=4
_2z(z,2,c5G,e,s,gg,o4G,'item','index','index')
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
var oBH=_v()
_(r,oBH)
var xCH=function(fEH,oDH,cFH,gg){
var oHH=_mz(z,'home-list-item',['bind:__l',4,'index',1,'item',2,'vueId',3],[],fEH,oDH,gg)
_(cFH,oHH)
return cFH
}
oBH.wxXCkey=4
_2z(z,2,xCH,e,s,gg,oBH,'item','index','index')
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var oJH=_v()
_(r,oJH)
var lKH=function(tMH,aLH,eNH,gg){
var oPH=_mz(z,'home-list-item',['bind:__l',4,'index',1,'item',2,'vueId',3],[],tMH,aLH,gg)
_(eNH,oPH)
return eNH
}
oJH.wxXCkey=4
_2z(z,2,lKH,e,s,gg,oJH,'item','index','index')
return r
}
e_[x[58]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
var oRH=_n('view')
_rz(z,oRH,'class',0,e,s,gg)
var fSH=_mz(z,'swiper-tab-head',['bind:__l',1,'bind:tabtap',1,'data-event-opts',2,'tabBars',3,'tabIndex',4,'vueId',5],[],e,s,gg)
_(oRH,fSH)
var cTH=_mz(z,'swiper',['bindchange',7,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var hUH=_mz(z,'line-chart',['bind:__l',12,'canvasId',1,'dataAs',2,'vueId',3],[],e,s,gg)
_(cTH,hUH)
var oVH=_mz(z,'line-chart',['bind:__l',16,'canvasId',1,'dataAs',2,'vueId',3],[],e,s,gg)
_(cTH,oVH)
var cWH=_mz(z,'line-chart',['bind:__l',20,'canvasId',1,'dataAs',2,'vueId',3],[],e,s,gg)
_(cTH,cWH)
var oXH=_mz(z,'line-chart',['bind:__l',24,'canvasId',1,'dataAs',2,'vueId',3],[],e,s,gg)
_(cTH,oXH)
var lYH=_mz(z,'line-chart',['bind:__l',28,'canvasId',1,'dataAs',2,'vueId',3],[],e,s,gg)
_(cTH,lYH)
_(oRH,cTH)
_(r,oRH)
return r
}
e_[x[59]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
return r
}
e_[x[60]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
return r
}
e_[x[61]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
var b3H=_v()
_(r,b3H)
var o4H=function(o6H,x5H,f7H,gg){
var h9H=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',4,'class',1,'data-event-opts',2],[],o6H,x5H,gg)
var o0H=_v()
_(h9H,o0H)
if(_oz(z,7,o6H,x5H,gg)){o0H.wxVkey=1
var cAI=_v()
_(o0H,cAI)
var oBI=function(aDI,lCI,tEI,gg){
var bGI=_mz(z,'card-list-item',['bind:__l',14,'index',1,'item',2,'vueId',3],[],aDI,lCI,gg)
_(tEI,bGI)
return tEI
}
cAI.wxXCkey=4
_2z(z,10,oBI,o6H,x5H,gg,cAI,'item','index1','index1')
var oHI=_mz(z,'load-more',['bind:__l',18,'loadtext',1,'vueId',2],[],o6H,x5H,gg)
_(o0H,oHI)
}
else{o0H.wxVkey=2
var xII=_v()
_(o0H,xII)
if(_oz(z,21,o6H,x5H,gg)){xII.wxVkey=1
}
else{xII.wxVkey=2
var oJI=_mz(z,'no-thing',['bind:__l',22,'vueId',1],[],o6H,x5H,gg)
_(xII,oJI)
}
xII.wxXCkey=1
xII.wxXCkey=3
}
o0H.wxXCkey=1
o0H.wxXCkey=3
o0H.wxXCkey=3
_(f7H,h9H)
return f7H
}
b3H.wxXCkey=4
_2z(z,2,o4H,e,s,gg,b3H,'items','index','index')
return r
}
e_[x[62]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var cLI=_n('view')
var hMI=_mz(z,'detail-info',['bind:__l',0,'bind:changeevent',1,'data-event-opts',1,'item',2,'vueId',3],[],e,s,gg)
_(cLI,hMI)
var oNI=_v()
_(cLI,oNI)
var cOI=function(lQI,oPI,aRI,gg){
var eTI=_mz(z,'comment-list',['bind:__l',9,'bind:reply',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],lQI,oPI,gg)
_(aRI,eTI)
return aRI
}
oNI.wxXCkey=4
_2z(z,7,cOI,e,s,gg,oNI,'item','index','index')
var bUI=_mz(z,'user-chat-bottom',['bind:__l',15,'bind:blur',1,'bind:submit',2,'data-event-opts',3,'focus',4,'vueId',5],[],e,s,gg)
_(cLI,bUI)
var oVI=_mz(z,'more-share',['bind:__l',21,'bind:togle',1,'data-event-opts',2,'sharedata',3,'show',4,'vueId',5],[],e,s,gg)
_(cLI,oVI)
_(r,cLI)
return r
}
e_[x[63]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
var oXI=_n('view')
var fYI=_v()
_(oXI,fYI)
if(_oz(z,0,e,s,gg)){fYI.wxVkey=1
}
else{fYI.wxVkey=2
var cZI=_mz(z,'home-info',['bind:__l',1,'homeinfo',1,'vueId',2],[],e,s,gg)
_(fYI,cZI)
}
var h1I=_mz(z,'home-data',['bind:__l',4,'homedata',1,'vueId',2],[],e,s,gg)
_(oXI,h1I)
var o2I=_v()
_(oXI,o2I)
var c3I=function(l5I,o4I,a6I,gg){
var e8I=_mz(z,'home-list-item',['bind:__l',11,'index',1,'item',2,'vueId',3],[],l5I,o4I,gg)
_(a6I,e8I)
return a6I
}
o2I.wxXCkey=4
_2z(z,9,c3I,e,s,gg,o2I,'item','index','index')
fYI.wxXCkey=1
fYI.wxXCkey=3
_(r,oXI)
return r
}
e_[x[64]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
var o0I=_n('view')
_rz(z,o0I,'class',0,e,s,gg)
var xAJ=_mz(z,'uni-grid',['bind:__l',1,'column',1,'highlight',2,'vueId',3,'vueSlots',4],[],e,s,gg)
var oBJ=_mz(z,'uni-grid-item',['bind:__l',6,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,oBJ)
var fCJ=_mz(z,'uni-grid-item',['bind:__l',9,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,fCJ)
var cDJ=_mz(z,'uni-grid-item',['bind:__l',12,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,cDJ)
var hEJ=_mz(z,'uni-grid-item',['bind:__l',15,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,hEJ)
var oFJ=_mz(z,'uni-grid-item',['bind:__l',18,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,oFJ)
var cGJ=_mz(z,'uni-grid-item',['bind:__l',21,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,cGJ)
var oHJ=_mz(z,'uni-grid-item',['bind:__l',24,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,oHJ)
var lIJ=_mz(z,'uni-grid-item',['bind:__l',27,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,lIJ)
var aJJ=_mz(z,'uni-grid-item',['bind:__l',30,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,aJJ)
var tKJ=_mz(z,'uni-grid-item',['bind:__l',33,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,tKJ)
var eLJ=_mz(z,'uni-grid-item',['bind:__l',36,'vueId',1,'vueSlots',2],[],e,s,gg)
_(xAJ,eLJ)
_(o0I,xAJ)
var bMJ=_v()
_(o0I,bMJ)
var oNJ=function(oPJ,xOJ,fQJ,gg){
var hSJ=_mz(z,'topic-list',['bind:__l',43,'index',1,'item',2,'vueId',3],[],oPJ,xOJ,gg)
_(fQJ,hSJ)
return fQJ
}
bMJ.wxXCkey=4
_2z(z,41,oNJ,e,s,gg,bMJ,'item','index','index')
_(r,o0I)
return r
}
e_[x[65]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
var cUJ=_mz(z,'uni-status-bar',['bgcolor',0,'bind:__l',1,'vueId',1],[],e,s,gg)
_(r,cUJ)
return r
}
e_[x[66]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
var lWJ=_n('view')
var aXJ=_mz(z,'news-nav-bar',['bind:__l',0,'bind:changeTab',1,'data-event-opts',1,'tabBars',2,'tabIndex',3,'vueId',4],[],e,s,gg)
_(lWJ,aXJ)
var tYJ=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var eZJ=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',11,'class',1,'data-event-opts',2],[],e,s,gg)
var b1J=_v()
_(eZJ,b1J)
if(_oz(z,14,e,s,gg)){b1J.wxVkey=1
var o2J=_v()
_(b1J,o2J)
var x3J=function(f5J,o4J,c6J,gg){
var o8J=_mz(z,'common-list',['bind:__l',19,'index',1,'item',2,'vueId',3],[],f5J,o4J,gg)
_(c6J,o8J)
return c6J
}
o2J.wxXCkey=4
_2z(z,17,x3J,e,s,gg,o2J,'item','index','index')
var c9J=_mz(z,'load-more',['bind:__l',23,'loadtext',1,'vueId',2],[],e,s,gg)
_(b1J,c9J)
}
else{b1J.wxVkey=2
var o0J=_v()
_(b1J,o0J)
if(_oz(z,26,e,s,gg)){o0J.wxVkey=1
}
else{o0J.wxVkey=2
var lAK=_mz(z,'no-thing',['bind:__l',27,'vueId',1],[],e,s,gg)
_(o0J,lAK)
}
o0J.wxXCkey=1
o0J.wxXCkey=3
}
b1J.wxXCkey=1
b1J.wxXCkey=3
b1J.wxXCkey=3
_(tYJ,eZJ)
var aBK=_mz(z,'scroll-view',['scrollY',-1,'class',29],[],e,s,gg)
var tCK=_mz(z,'post-nav',['bind:__l',30,'postnav',1,'vueId',2],[],e,s,gg)
_(aBK,tCK)
var eDK=_mz(z,'topic-nav',['bind:__l',33,'nav',1,'vueId',2],[],e,s,gg)
_(aBK,eDK)
var bEK=_v()
_(aBK,bEK)
var oFK=function(oHK,xGK,fIK,gg){
var hKK=_mz(z,'topic-list',['bind:__l',40,'index',1,'item',2,'vueId',3],[],oHK,xGK,gg)
_(fIK,hKK)
return fIK
}
bEK.wxXCkey=4
_2z(z,38,oFK,e,s,gg,bEK,'item','index','index')
_(tYJ,aBK)
_(lWJ,tYJ)
_(r,lWJ)
return r
}
e_[x[67]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
var cMK=_n('view')
_rz(z,cMK,'class',0,e,s,gg)
var lOK=_mz(z,'paper-left-popup',['bind:__l',1,'bind:addfriend',1,'bind:clear',2,'bind:hide',3,'data-event-opts',4,'show',5,'vueId',6],[],e,s,gg)
_(cMK,lOK)
var oNK=_v()
_(cMK,oNK)
if(_oz(z,8,e,s,gg)){oNK.wxVkey=1
var aPK=_v()
_(oNK,aPK)
var tQK=function(bSK,eRK,oTK,gg){
var oVK=_mz(z,'paper-list',['bind:__l',13,'index',1,'item',2,'vueId',3],[],bSK,eRK,gg)
_(oTK,oVK)
return oTK
}
aPK.wxXCkey=4
_2z(z,11,tQK,e,s,gg,aPK,'item','index','index')
}
else{oNK.wxVkey=2
var fWK=_v()
_(oNK,fWK)
if(_oz(z,17,e,s,gg)){fWK.wxVkey=1
}
else{fWK.wxVkey=2
var cXK=_mz(z,'no-thing',['bind:__l',18,'vueId',1],[],e,s,gg)
_(fWK,cXK)
}
fWK.wxXCkey=1
fWK.wxXCkey=3
}
oNK.wxXCkey=1
oNK.wxXCkey=3
oNK.wxXCkey=3
_(r,cMK)
return r
}
e_[x[68]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
var oZK=_n('view')
var c1K=_mz(z,'swiper-tab-head',['bind:__l',0,'bind:tabtap',1,'data-event-opts',1,'tabBars',2,'tabIndex',3,'vueId',4],[],e,s,gg)
_(oZK,c1K)
var o2K=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var l3K=_v()
_(o2K,l3K)
var a4K=function(e6K,t5K,b7K,gg){
var x9K=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',15,'class',1,'data-event-opts',2],[],e6K,t5K,gg)
var o0K=_v()
_(x9K,o0K)
if(_oz(z,18,e6K,t5K,gg)){o0K.wxVkey=1
var fAL=_v()
_(o0K,fAL)
var cBL=function(oDL,hCL,cEL,gg){
var lGL=_mz(z,'index-list',['bind:__l',23,'bind:changeevent',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],oDL,hCL,gg)
_(cEL,lGL)
return cEL
}
fAL.wxXCkey=4
_2z(z,21,cBL,e6K,t5K,gg,fAL,'item','index1','index1')
var aHL=_mz(z,'load-more',['bind:__l',29,'loadtext',1,'vueId',2],[],e6K,t5K,gg)
_(o0K,aHL)
}
else{o0K.wxVkey=2
var tIL=_v()
_(o0K,tIL)
if(_oz(z,32,e6K,t5K,gg)){tIL.wxVkey=1
}
else{tIL.wxVkey=2
var eJL=_mz(z,'no-thing',['bind:__l',33,'vueId',1],[],e6K,t5K,gg)
_(tIL,eJL)
}
tIL.wxXCkey=1
tIL.wxXCkey=3
}
o0K.wxXCkey=1
o0K.wxXCkey=3
o0K.wxXCkey=3
_(b7K,x9K)
return b7K
}
l3K.wxXCkey=4
_2z(z,13,a4K,e,s,gg,l3K,'items','index','index')
_(oZK,o2K)
_(r,oZK)
return r
}
e_[x[69]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
return r
}
e_[x[70]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx_72()
var xML=_mz(z,'calendar',['bind:__l',0,'bind:dayChange',1,'bind:monthChange',1,'bind:rangeChange',2,'canDrag',3,'currentTime',4,'data-event-opts',5,'dateEnd',6,'dateStart',7,'mark',8,'range',9,'rangeMode',10,'vueId',11],[],e,s,gg)
_(r,xML)
return r
}
e_[x[71]]={f:m71,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx_73()
return r
}
e_[x[72]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m73=function(e,s,r,gg){
var z=gz$gwx_74()
var cPL=_v()
_(r,cPL)
var hQL=function(cSL,oRL,oTL,gg){
var aVL=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',4,'class',1,'data-event-opts',2],[],cSL,oRL,gg)
var eXL=_mz(z,'remind-data',['bind:__l',7,'homedata',1,'vueId',2],[],cSL,oRL,gg)
_(aVL,eXL)
var tWL=_v()
_(aVL,tWL)
if(_oz(z,10,cSL,oRL,gg)){tWL.wxVkey=1
var bYL=_v()
_(tWL,bYL)
var oZL=function(o2L,x1L,f3L,gg){
var h5L=_mz(z,'remind-list-item',['bind:__l',17,'index',1,'item',2,'vueId',3],[],o2L,x1L,gg)
_(f3L,h5L)
return f3L
}
bYL.wxXCkey=4
_2z(z,13,oZL,cSL,oRL,gg,bYL,'item','index1','index1')
var o6L=_mz(z,'load-more',['bind:__l',21,'loadtext',1,'vueId',2],[],cSL,oRL,gg)
_(tWL,o6L)
}
else{tWL.wxVkey=2
var c7L=_v()
_(tWL,c7L)
if(_oz(z,24,cSL,oRL,gg)){c7L.wxVkey=1
}
else{c7L.wxVkey=2
var o8L=_mz(z,'no-thing',['bind:__l',25,'vueId',1],[],cSL,oRL,gg)
_(c7L,o8L)
}
c7L.wxXCkey=1
c7L.wxXCkey=3
}
tWL.wxXCkey=1
tWL.wxXCkey=3
tWL.wxXCkey=3
_(oTL,aVL)
return oTL
}
cPL.wxXCkey=4
_2z(z,2,hQL,e,s,gg,cPL,'items','index','index')
return r
}
e_[x[73]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx_75()
var a0L=_n('view')
var tAM=_mz(z,'swiper-tab-head',['bind:__l',0,'bind:tabtap',1,'data-event-opts',1,'tabBars',2,'tabIndex',3,'vueId',4],[],e,s,gg)
_(a0L,tAM)
var eBM=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var bCM=_v()
_(eBM,bCM)
var oDM=function(oFM,xEM,fGM,gg){
var hIM=_mz(z,'remind-list-item',['bind:__l',17,'index',1,'item',2,'vueId',3],[],oFM,xEM,gg)
_(fGM,hIM)
return fGM
}
bCM.wxXCkey=4
_2z(z,13,oDM,e,s,gg,bCM,'item','index','index')
var oJM=_v()
_(eBM,oJM)
var cKM=function(lMM,oLM,aNM,gg){
var ePM=_mz(z,'remind-list-item',['bind:__l',27,'index',1,'item',2,'vueId',3],[],lMM,oLM,gg)
_(aNM,ePM)
return aNM
}
oJM.wxXCkey=4
_2z(z,23,cKM,e,s,gg,oJM,'item','index','index')
var bQM=_v()
_(eBM,bQM)
var oRM=function(oTM,xSM,fUM,gg){
var hWM=_mz(z,'remind-list-item',['bind:__l',37,'index',1,'item',2,'vueId',3],[],oTM,xSM,gg)
_(fUM,hWM)
return fUM
}
bQM.wxXCkey=4
_2z(z,33,oRM,e,s,gg,bQM,'item','index','index')
var oXM=_v()
_(eBM,oXM)
var cYM=function(l1M,oZM,a2M,gg){
var e4M=_mz(z,'remind-list-item',['bind:__l',47,'index',1,'item',2,'vueId',3],[],l1M,oZM,gg)
_(a2M,e4M)
return a2M
}
oXM.wxXCkey=4
_2z(z,43,cYM,e,s,gg,oXM,'item','index','index')
_(a0L,eBM)
_(r,a0L)
return r
}
e_[x[74]]={f:m74,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx_76()
var o6M=_n('view')
var x7M=_v()
_(o6M,x7M)
if(_oz(z,0,e,s,gg)){x7M.wxVkey=1
var o8M=_v()
_(x7M,o8M)
var f9M=function(hAN,c0M,oBN,gg){
var oDN=_v()
_(oBN,oDN)
if(_oz(z,5,hAN,c0M,gg)){oDN.wxVkey=1
var lEN=_mz(z,'index-list',['bind:__l',6,'bind:changeevent',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],hAN,c0M,gg)
_(oDN,lEN)
}
else{oDN.wxVkey=2
var aFN=_v()
_(oDN,aFN)
if(_oz(z,12,hAN,c0M,gg)){aFN.wxVkey=1
var tGN=_mz(z,'topic-list',['bind:__l',13,'index',1,'item',2,'vueId',3],[],hAN,c0M,gg)
_(aFN,tGN)
}
else{aFN.wxVkey=2
var eHN=_mz(z,'user-list',['hidden',-1,'bind:__l',17,'index',1,'item',2,'vueId',3],[],hAN,c0M,gg)
_(aFN,eHN)
}
aFN.wxXCkey=1
aFN.wxXCkey=3
aFN.wxXCkey=3
}
oDN.wxXCkey=1
oDN.wxXCkey=3
oDN.wxXCkey=3
return oBN
}
o8M.wxXCkey=4
_2z(z,3,f9M,e,s,gg,o8M,'item','index','index')
var bIN=_mz(z,'load-more',['bind:__l',21,'loadtext',1,'vueId',2],[],e,s,gg)
_(x7M,bIN)
}
else{x7M.wxVkey=2
var oJN=_v()
_(x7M,oJN)
if(_oz(z,24,e,s,gg)){oJN.wxVkey=1
var xKN=_mz(z,'no-thing',['bind:__l',25,'vueId',1],[],e,s,gg)
_(oJN,xKN)
}
oJN.wxXCkey=1
oJN.wxXCkey=3
}
x7M.wxXCkey=1
x7M.wxXCkey=3
x7M.wxXCkey=3
_(r,o6M)
return r
}
e_[x[75]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx_77()
var fMN=_n('view')
var cNN=_mz(z,'topic-info',['bind:__l',0,'item',1,'vueId',1],[],e,s,gg)
_(fMN,cNN)
var hON=_mz(z,'swiper-tab-head',['bind:__l',3,'bind:tabtap',1,'data-event-opts',2,'scrollItemStyle',3,'scrollStyle',4,'tabBars',5,'tabIndex',6,'vueId',7],[],e,s,gg)
_(fMN,hON)
var oPN=_v()
_(fMN,oPN)
var cQN=function(lSN,oRN,aTN,gg){
var eVN=_v()
_(aTN,eVN)
if(_oz(z,15,lSN,oRN,gg)){eVN.wxVkey=1
var bWN=_v()
_(eVN,bWN)
var oXN=function(oZN,xYN,f1N,gg){
var h3N=_mz(z,'common-list',['bind:__l',20,'bind:changeevent',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],oZN,xYN,gg)
_(f1N,h3N)
return f1N
}
bWN.wxXCkey=4
_2z(z,18,oXN,lSN,oRN,gg,bWN,'list','listindex','listindex')
var o4N=_mz(z,'load-more',['bind:__l',26,'loadtext',1,'vueId',2],[],lSN,oRN,gg)
_(eVN,o4N)
}
eVN.wxXCkey=1
eVN.wxXCkey=3
return aTN
}
oPN.wxXCkey=4
_2z(z,13,cQN,e,s,gg,oPN,'item','index','index')
_(r,fMN)
return r
}
e_[x[76]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m77=function(e,s,r,gg){
var z=gz$gwx_78()
var o6N=_n('view')
var l7N=_mz(z,'swiper-tab-head',['bind:__l',0,'bind:tabtap',1,'data-event-opts',1,'tabBars',2,'tabIndex',3,'vueId',4],[],e,s,gg)
_(o6N,l7N)
var a8N=_mz(z,'swiper',['bindchange',6,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var t9N=_v()
_(a8N,t9N)
var e0N=function(oBO,bAO,xCO,gg){
var fEO=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',15,'class',1,'data-event-opts',2],[],oBO,bAO,gg)
var cFO=_v()
_(fEO,cFO)
if(_oz(z,18,oBO,bAO,gg)){cFO.wxVkey=1
var hGO=_v()
_(cFO,hGO)
var oHO=function(oJO,cIO,lKO,gg){
var tMO=_mz(z,'topic-list',['bind:__l',23,'index',1,'ischange',2,'item',3,'vueId',4],[],oJO,cIO,gg)
_(lKO,tMO)
return lKO
}
hGO.wxXCkey=4
_2z(z,21,oHO,oBO,bAO,gg,hGO,'item','index1','index1')
var eNO=_mz(z,'load-more',['bind:__l',28,'loadtext',1,'vueId',2],[],oBO,bAO,gg)
_(cFO,eNO)
}
else{cFO.wxVkey=2
var bOO=_v()
_(cFO,bOO)
if(_oz(z,31,oBO,bAO,gg)){bOO.wxVkey=1
}
else{bOO.wxVkey=2
var oPO=_mz(z,'no-thing',['bind:__l',32,'vueId',1],[],oBO,bAO,gg)
_(bOO,oPO)
}
bOO.wxXCkey=1
bOO.wxXCkey=3
}
cFO.wxXCkey=1
cFO.wxXCkey=3
cFO.wxXCkey=3
_(xCO,fEO)
return xCO
}
t9N.wxXCkey=4
_2z(z,13,e0N,e,s,gg,t9N,'items','index','index')
_(o6N,a8N)
_(r,o6N)
return r
}
e_[x[77]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx_79()
var oRO=_v()
_(r,oRO)
if(_oz(z,0,e,s,gg)){oRO.wxVkey=1
}
oRO.wxXCkey=1
return r
}
e_[x[78]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
var m79=function(e,s,r,gg){
var z=gz$gwx_80()
var cTO=_n('view')
var hUO=_v()
_(cTO,hUO)
var oVO=function(oXO,cWO,lYO,gg){
var t1O=_mz(z,'user-chat-list',['bind:__l',4,'index',1,'item',2,'vueId',3],[],oXO,cWO,gg)
_(lYO,t1O)
return lYO
}
hUO.wxXCkey=4
_2z(z,2,oVO,e,s,gg,hUO,'item','index','index')
var e2O=_mz(z,'user-chat-bottom',['bind:__l',8,'bind:submit',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(cTO,e2O)
_(r,cTO)
return r
}
e_[x[79]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[80]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx_81()
var o4O=_n('view')
var x5O=_v()
_(o4O,x5O)
var o6O=function(c8O,f7O,h9O,gg){
var cAP=_mz(z,'user-chat-list',['bind:__l',4,'index',1,'item',2,'vueId',3],[],c8O,f7O,gg)
_(h9O,cAP)
return h9O
}
x5O.wxXCkey=4
_2z(z,2,o6O,e,s,gg,x5O,'item','index','index')
var oBP=_mz(z,'user-chat-bottom',['bind:__l',8,'bind:submit',1,'data-event-opts',2,'vueId',3],[],e,s,gg)
_(o4O,oBP)
_(r,o4O)
return r
}
e_[x[80]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m81=function(e,s,r,gg){
var z=gz$gwx_82()
var aDP=_n('view')
var tEP=_v()
_(aDP,tEP)
if(_oz(z,0,e,s,gg)){tEP.wxVkey=1
var eFP=_mz(z,'uni-list',['bind:__l',1,'vueId',1,'vueSlots',2],[],e,s,gg)
var bGP=_v()
_(eFP,bGP)
var oHP=function(oJP,xIP,fKP,gg){
var hMP=_mz(z,'uni-list-item',['bind:__l',8,'bind:click',1,'data-event-opts',2,'thumb',3,'title',4,'vueId',5],[],oJP,xIP,gg)
_(fKP,hMP)
return fKP
}
bGP.wxXCkey=4
_2z(z,6,oHP,e,s,gg,bGP,'item','index','index')
_(tEP,eFP)
}
else{tEP.wxVkey=2
var oNP=_v()
_(tEP,oNP)
if(_oz(z,14,e,s,gg)){oNP.wxVkey=1
}
else{oNP.wxVkey=2
var cOP=_mz(z,'no-thing',['bind:__l',15,'vueId',1],[],e,s,gg)
_(oNP,cOP)
}
oNP.wxXCkey=1
oNP.wxXCkey=3
}
tEP.wxXCkey=1
tEP.wxXCkey=3
tEP.wxXCkey=3
_(r,aDP)
return r
}
e_[x[81]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
var m82=function(e,s,r,gg){
var z=gz$gwx_83()
var lQP=_n('view')
_rz(z,lQP,'class',0,e,s,gg)
var aRP=_mz(z,'swiper-tab-head',['bind:__l',1,'bind:tabtap',1,'data-event-opts',2,'scrollItemStyle',3,'scrollStyle',4,'tabBars',5,'tabIndex',6,'vueId',7],[],e,s,gg)
_(lQP,aRP)
var tSP=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'style',4],[],e,s,gg)
var eTP=_v()
_(tSP,eTP)
var bUP=function(xWP,oVP,oXP,gg){
var cZP=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',18,'class',1,'data-event-opts',2],[],xWP,oVP,gg)
var h1P=_v()
_(cZP,h1P)
if(_oz(z,21,xWP,oVP,gg)){h1P.wxVkey=1
var o2P=_v()
_(h1P,o2P)
var c3P=function(l5P,o4P,a6P,gg){
var e8P=_mz(z,'user-list',['bind:__l',26,'index',1,'item',2,'vueId',3],[],l5P,o4P,gg)
_(a6P,e8P)
return a6P
}
o2P.wxXCkey=4
_2z(z,24,c3P,xWP,oVP,gg,o2P,'item','index1','index1')
var b9P=_mz(z,'load-more',['bind:__l',30,'loadtext',1,'vueId',2],[],xWP,oVP,gg)
_(h1P,b9P)
}
else{h1P.wxVkey=2
var o0P=_v()
_(h1P,o0P)
if(_oz(z,33,xWP,oVP,gg)){o0P.wxVkey=1
}
else{o0P.wxVkey=2
var xAQ=_mz(z,'no-thing',['bind:__l',34,'vueId',1],[],xWP,oVP,gg)
_(o0P,xAQ)
}
o0P.wxXCkey=1
o0P.wxXCkey=3
}
h1P.wxXCkey=1
h1P.wxXCkey=3
h1P.wxXCkey=3
_(oXP,cZP)
return oXP
}
eTP.wxXCkey=4
_2z(z,16,bUP,e,s,gg,eTP,'items','index','index')
_(lQP,tSP)
_(r,lQP)
return r
}
e_[x[82]]={f:m82,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
var m83=function(e,s,r,gg){
var z=gz$gwx_84()
var fCQ=_v()
_(r,fCQ)
var cDQ=function(oFQ,hEQ,cGQ,gg){
var lIQ=_mz(z,'home-list-item',['bind:__l',4,'bind:updateuserbind',1,'data-event-opts',2,'index',3,'item',4,'vueId',5],[],oFQ,hEQ,gg)
_(cGQ,lIQ)
return cGQ
}
fCQ.wxXCkey=4
_2z(z,2,cDQ,e,s,gg,fCQ,'item','index','index')
return r
}
e_[x[83]]={f:m83,j:[],i:[],ti:[],ic:[]}
d_[x[84]]={}
var m84=function(e,s,r,gg){
var z=gz$gwx_85()
var tKQ=_v()
_(r,tKQ)
var eLQ=function(oNQ,bMQ,xOQ,gg){
var fQQ=_mz(z,'home-list-item',['bind:__l',4,'index',1,'item',2,'vueId',3],[],oNQ,bMQ,gg)
_(xOQ,fQQ)
return xOQ
}
tKQ.wxXCkey=4
_2z(z,2,eLQ,e,s,gg,tKQ,'item','index','index')
return r
}
e_[x[84]]={f:m84,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m85=function(e,s,r,gg){
var z=gz$gwx_86()
return r
}
e_[x[85]]={f:m85,j:[],i:[],ti:[],ic:[]}
d_[x[86]]={}
var m86=function(e,s,r,gg){
var z=gz$gwx_87()
var oTQ=_mz(z,'uni-collapse',['bind:__l',0,'vueId',1,'vueSlots',1],[],e,s,gg)
var cUQ=_v()
_(oTQ,cUQ)
var oVQ=function(aXQ,lWQ,tYQ,gg){
var b1Q=_mz(z,'uni-collapse-item',['bind:__l',7,'contentdata',1,'showAnimation',2,'title',3,'vueId',4],[],aXQ,lWQ,gg)
_(tYQ,b1Q)
return tYQ
}
cUQ.wxXCkey=4
_2z(z,5,oVQ,e,s,gg,cUQ,'item','index','index')
_(r,oTQ)
return r
}
e_[x[86]]={f:m86,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m87=function(e,s,r,gg){
var z=gz$gwx_88()
var x3Q=_v()
_(r,x3Q)
if(_oz(z,0,e,s,gg)){x3Q.wxVkey=1
}
x3Q.wxXCkey=1
return r
}
e_[x[87]]={f:m87,j:[],i:[],ti:[],ic:[]}
d_[x[88]]={}
var m88=function(e,s,r,gg){
var z=gz$gwx_89()
var f5Q=_mz(z,'mpvue-city-picker',['bind:__l',0,'bind:onConfirm',1,'class',1,'data-event-opts',2,'data-ref',3,'pickerValueDefault',4,'themeColor',5,'vueId',6],[],e,s,gg)
_(r,f5Q)
return r
}
e_[x[88]]={f:m88,j:[],i:[],ti:[],ic:[]}
d_[x[89]]={}
var m89=function(e,s,r,gg){
var z=gz$gwx_90()
var h7Q=_v()
_(r,h7Q)
var o8Q=function(o0Q,c9Q,lAR,gg){
var tCR=_mz(z,'home-list-item',['bind:__l',4,'index',1,'item',2,'vueId',3],[],o0Q,c9Q,gg)
_(lAR,tCR)
return lAR
}
h7Q.wxXCkey=4
_2z(z,2,o8Q,e,s,gg,h7Q,'item','index','index')
return r
}
e_[x[89]]={f:m89,j:[],i:[],ti:[],ic:[]}
d_[x[90]]={}
var m90=function(e,s,r,gg){
var z=gz$gwx_91()
var bER=_n('view')
var oFR=_mz(z,'user-space-head',['bind:__l',0,'bind:update',1,'data-event-opts',1,'userinfo',2,'vueId',3],[],e,s,gg)
_(bER,oFR)
var xGR=_mz(z,'home-data',['bind:__l',5,'homedata',1,'vueId',2],[],e,s,gg)
_(bER,xGR)
var oHR=_mz(z,'swiper-tab-head',['bind:__l',8,'bind:tabtap',1,'data-event-opts',2,'scrollItemStyle',3,'scrollStyle',4,'tabBars',5,'tabIndex',6,'vueId',7],[],e,s,gg)
_(bER,oHR)
var fIR=_v()
_(bER,fIR)
var cJR=function(oLR,hKR,cMR,gg){
var lOR=_v()
_(cMR,lOR)
if(_oz(z,20,oLR,hKR,gg)){lOR.wxVkey=1
var aPR=_mz(z,'user-space-userinfo',['bind:__l',21,'userinfo',1,'vueId',2],[],oLR,hKR,gg)
_(lOR,aPR)
}
else{lOR.wxVkey=2
var tQR=_v()
_(lOR,tQR)
if(_oz(z,24,oLR,hKR,gg)){tQR.wxVkey=1
var eRR=_v()
_(tQR,eRR)
if(_oz(z,25,oLR,hKR,gg)){eRR.wxVkey=1
var bSR=_v()
_(eRR,bSR)
var oTR=function(oVR,xUR,fWR,gg){
var hYR=_mz(z,'common-list',['nonavigate',-1,'bind:__l',30,'index',1,'item',2,'vueId',3],[],oVR,xUR,gg)
_(fWR,hYR)
return fWR
}
bSR.wxXCkey=4
_2z(z,28,oTR,oLR,hKR,gg,bSR,'list','listindex','listindex')
var oZR=_mz(z,'load-more',['bind:__l',34,'loadtext',1,'vueId',2],[],oLR,hKR,gg)
_(eRR,oZR)
}
else{eRR.wxVkey=2
}
eRR.wxXCkey=1
eRR.wxXCkey=3
}
tQR.wxXCkey=1
tQR.wxXCkey=3
}
lOR.wxXCkey=1
lOR.wxXCkey=3
lOR.wxXCkey=3
return cMR
}
fIR.wxXCkey=4
_2z(z,18,cJR,e,s,gg,fIR,'item','index','index')
var c1R=_mz(z,'user-space-popup',['bind:__l',37,'bind:chat',1,'bind:hide',2,'bind:lahei',3,'data-event-opts',4,'isblack',5,'show',6,'vueId',7],[],e,s,gg)
_(bER,c1R)
_(r,bER)
return r
}
e_[x[90]]={f:m90,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","pages/search/search","pages/add-input/add-input","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail","pages/user-list/user-list","pages/user-chat/user-chat","pages/detail/detail","pages/user-set/user-set","pages/user-set-repassword/user-set-repassword","pages/user-set-email/user-set-email","pages/user-set-userinfo/user-set-userinfo","pages/user-set-help/user-set-help","pages/user-set-about/user-set-about","pages/login/login","pages/user-space/user-space","pages/user-bind-phone/user-bind-phone","pages/user-safe/user-safe","pages/user-feedback/user-feedback","pages/user-history/user-history","pages/bill/bill","pages/chart/chart","pages/remind/remind","pages/post-nav/post-nav","pages/remind/CreateRemind","pages/categorygl/categorygl","pages/creditcardgl/creditcardgl","pages/remind/remindgl","pages/categorygl/srcategorygl","pages/categorygl/zccategorygl","pages/categorygl/zhcategorygl","pages/creditcardgl/addcard","pages/remind/reminddetail","pages/creditcardgl/carddetail","pages/bill/billdetail","pages/bill/billgl","pages/bill/billgory","pages/bill/todaybill","pages/bill/monthbill","pages/bill/yearbill","pages/remind/remindgory"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"财务提醒小秘书","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#B5B5B5","selectedColor":"#3ff595","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","text":"主页","iconPath":"/static/tabbar/index.png","selectedIconPath":"/static/tabbar/indexed.png"},{"pagePath":"pages/chart/chart","text":"图表","iconPath":"/static/tabbar/chart.png","selectedIconPath":"/static/tabbar/charted.png"},{"pagePath":"pages/remind/remind","text":"提醒","iconPath":"/static/tabbar/remind.png","selectedIconPath":"/static/tabbar/reminded.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"/static/tabbar/news.png","selectedIconPath":"/static/tabbar/newsed.png"},{"pagePath":"pages/home/home","text":"我的","iconPath":"/static/tabbar/home.png","selectedIconPath":"/static/tabbar/homeed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"财务提醒小秘书","compilerVersion":"2.5.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/bill/bill-data.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/bill/bill-data.wxml']=$gwx('./components/bill/bill-data.wxml');

__wxAppCode__['components/bill/bill-list-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/bill/bill-list-item.wxml']=$gwx('./components/bill/bill-list-item.wxml');

__wxAppCode__['components/bill/billgory-list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/bill/billgory-list.wxml']=$gwx('./components/bill/billgory-list.wxml');

__wxAppCode__['components/charts/chart-nav-bar.json']={"component":true,"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['components/charts/chart-nav-bar.wxml']=$gwx('./components/charts/chart-nav-bar.wxml');

__wxAppCode__['components/common/common-list.json']={"component":true,"usingComponents":{"tag-sex-age":"/components/common/tag-sex-age"}};
__wxAppCode__['components/common/common-list.wxml']=$gwx('./components/common/common-list.wxml');

__wxAppCode__['components/common/load-more.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/common/load-more.wxml']=$gwx('./components/common/load-more.wxml');

__wxAppCode__['components/common/more-share.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/common/more-share.wxml']=$gwx('./components/common/more-share.wxml');

__wxAppCode__['components/common/no-thing.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/common/no-thing.wxml']=$gwx('./components/common/no-thing.wxml');

__wxAppCode__['components/common/tag-sex-age.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/common/tag-sex-age.wxml']=$gwx('./components/common/tag-sex-age.wxml');

__wxAppCode__['components/common/uploud-images.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/common/uploud-images.wxml']=$gwx('./components/common/uploud-images.wxml');

__wxAppCode__['components/creditcard/card-list-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/creditcard/card-list-item.wxml']=$gwx('./components/creditcard/card-list-item.wxml');

__wxAppCode__['components/detail/comment-list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/detail/comment-list.wxml']=$gwx('./components/detail/comment-list.wxml');

__wxAppCode__['components/detail/detail-info.json']={"component":true,"usingComponents":{"tag-sex-age":"/components/common/tag-sex-age"}};
__wxAppCode__['components/detail/detail-info.wxml']=$gwx('./components/detail/detail-info.wxml');

__wxAppCode__['components/home/home-data.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/home/home-data.wxml']=$gwx('./components/home/home-data.wxml');

__wxAppCode__['components/home/home-info.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/home/home-info.wxml']=$gwx('./components/home/home-info.wxml');

__wxAppCode__['components/home/home-list-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/home/home-list-item.wxml']=$gwx('./components/home/home-list-item.wxml');

__wxAppCode__['components/home/other-login.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/home/other-login.wxml']=$gwx('./components/home/other-login.wxml');

__wxAppCode__['components/index/index-list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/index/index-list.wxml']=$gwx('./components/index/index-list.wxml');

__wxAppCode__['components/index/swiper-tab-head.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/index/swiper-tab-head.wxml']=$gwx('./components/index/swiper-tab-head.wxml');

__wxAppCode__['components/Li-Calendar/Li-Calendar.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/Li-Calendar/Li-Calendar.wxml']=$gwx('./components/Li-Calendar/Li-Calendar.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/news/news-nav-bar.json']={"component":true,"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['components/news/news-nav-bar.wxml']=$gwx('./components/news/news-nav-bar.wxml');

__wxAppCode__['components/news/post-nav.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/news/post-nav.wxml']=$gwx('./components/news/post-nav.wxml');

__wxAppCode__['components/news/topic-list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/news/topic-list.wxml']=$gwx('./components/news/topic-list.wxml');

__wxAppCode__['components/news/topic-nav.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/news/topic-nav.wxml']=$gwx('./components/news/topic-nav.wxml');

__wxAppCode__['components/paper/paper-left-popup.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/paper/paper-left-popup.wxml']=$gwx('./components/paper/paper-left-popup.wxml');

__wxAppCode__['components/paper/paper-list.json']={"component":true,"usingComponents":{"uni-badge":"/components/uni-badge/uni-badge"}};
__wxAppCode__['components/paper/paper-list.wxml']=$gwx('./components/paper/paper-list.wxml');

__wxAppCode__['components/remind/remind-data.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/remind/remind-data.wxml']=$gwx('./components/remind/remind-data.wxml');

__wxAppCode__['components/remind/remind-list-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/remind/remind-list-item.wxml']=$gwx('./components/remind/remind-list-item.wxml');

__wxAppCode__['components/stan-ucharts/LineChart.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/stan-ucharts/LineChart.wxml']=$gwx('./components/stan-ucharts/LineChart.wxml');

__wxAppCode__['components/topic/topic-info.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/topic/topic-info.wxml']=$gwx('./components/topic/topic-info.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-collapse-item/uni-collapse-item.json']={"component":true,"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon"}};
__wxAppCode__['components/uni-collapse-item/uni-collapse-item.wxml']=$gwx('./components/uni-collapse-item/uni-collapse-item.wxml');

__wxAppCode__['components/uni-collapse/uni-collapse.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-collapse/uni-collapse.wxml']=$gwx('./components/uni-collapse/uni-collapse.wxml');

__wxAppCode__['components/uni-grid-item/uni-grid-item.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-grid-item/uni-grid-item.wxml']=$gwx('./components/uni-grid-item/uni-grid-item.wxml');

__wxAppCode__['components/uni-grid/uni-grid.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-grid/uni-grid.wxml']=$gwx('./components/uni-grid/uni-grid.wxml');

__wxAppCode__['components/uni-icon/uni-icon.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-icon/uni-icon.wxml']=$gwx('./components/uni-icon/uni-icon.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.json']={"component":true,"usingComponents":{"uni-icon":"/components/uni-icon/uni-icon","uni-badge":"/components/uni-badge/uni-badge"}};
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['components/uni-nav-bar/uni-nav-bar.json']={"component":true,"usingComponents":{"uni-status-bar":"/components/uni-status-bar/uni-status-bar","uni-icon":"/components/uni-icon/uni-icon"}};
__wxAppCode__['components/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./components/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['components/uni-status-bar/uni-status-bar.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['components/user-chat/user-chat-bottom.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/user-chat/user-chat-bottom.wxml']=$gwx('./components/user-chat/user-chat-bottom.wxml');

__wxAppCode__['components/user-chat/user-chat-list.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/user-chat/user-chat-list.wxml']=$gwx('./components/user-chat/user-chat-list.wxml');

__wxAppCode__['components/user-list/user-list.json']={"component":true,"usingComponents":{"tag-sex-age":"/components/common/tag-sex-age"}};
__wxAppCode__['components/user-list/user-list.wxml']=$gwx('./components/user-list/user-list.wxml');

__wxAppCode__['components/user-space/user-space-head.json']={"component":true,"usingComponents":{"tag-sex-age":"/components/common/tag-sex-age"}};
__wxAppCode__['components/user-space/user-space-head.wxml']=$gwx('./components/user-space/user-space-head.wxml');

__wxAppCode__['components/user-space/user-space-popup.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/user-space/user-space-popup.wxml']=$gwx('./components/user-space/user-space-popup.wxml');

__wxAppCode__['components/user-space/user-space-userinfo.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/user-space/user-space-userinfo.wxml']=$gwx('./components/user-space/user-space-userinfo.wxml');

__wxAppCode__['pages/add-input/add-input.json']={"animationType":"slide-in-bottom","animationDuration":200,"titleNView":false,"usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar","uploud-images":"/components/common/uploud-images"}};
__wxAppCode__['pages/add-input/add-input.wxml']=$gwx('./pages/add-input/add-input.wxml');

__wxAppCode__['pages/bill/bill.json']={"navigationBarTitleText":"记账","usingComponents":{}};
__wxAppCode__['pages/bill/bill.wxml']=$gwx('./pages/bill/bill.wxml');

__wxAppCode__['pages/bill/billdetail.json']={"navigationBarTitleText":"记账详情","usingComponents":{}};
__wxAppCode__['pages/bill/billdetail.wxml']=$gwx('./pages/bill/billdetail.wxml');

__wxAppCode__['pages/bill/billgl.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"账单","usingComponents":{"load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","bill-data":"/components/bill/bill-data","bill-list-item":"/components/bill/bill-list-item"}};
__wxAppCode__['pages/bill/billgl.wxml']=$gwx('./pages/bill/billgl.wxml');

__wxAppCode__['pages/bill/billgory.json']={"navigationBarTitleText":"分类账单","usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","billgory-list":"/components/bill/billgory-list"}};
__wxAppCode__['pages/bill/billgory.wxml']=$gwx('./pages/bill/billgory.wxml');

__wxAppCode__['pages/bill/monthbill.json']={"navigationBarTitleText":"本月账单","usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","billgory-list":"/components/bill/billgory-list","bill-data":"/components/bill/bill-data"}};
__wxAppCode__['pages/bill/monthbill.wxml']=$gwx('./pages/bill/monthbill.wxml');

__wxAppCode__['pages/bill/todaybill.json']={"navigationBarTitleText":"今日账单","usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","billgory-list":"/components/bill/billgory-list","bill-data":"/components/bill/bill-data"}};
__wxAppCode__['pages/bill/todaybill.wxml']=$gwx('./pages/bill/todaybill.wxml');

__wxAppCode__['pages/bill/yearbill.json']={"navigationBarTitleText":"本年账单","usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","billgory-list":"/components/bill/billgory-list","bill-data":"/components/bill/bill-data"}};
__wxAppCode__['pages/bill/yearbill.wxml']=$gwx('./pages/bill/yearbill.wxml');

__wxAppCode__['pages/categorygl/categorygl.json']={"navigationBarTitleText":"分类管理","usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/categorygl/categorygl.wxml']=$gwx('./pages/categorygl/categorygl.wxml');

__wxAppCode__['pages/categorygl/srcategorygl.json']={"usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/categorygl/srcategorygl.wxml']=$gwx('./pages/categorygl/srcategorygl.wxml');

__wxAppCode__['pages/categorygl/zccategorygl.json']={"usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/categorygl/zccategorygl.wxml']=$gwx('./pages/categorygl/zccategorygl.wxml');

__wxAppCode__['pages/categorygl/zhcategorygl.json']={"usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/categorygl/zhcategorygl.wxml']=$gwx('./pages/categorygl/zhcategorygl.wxml');

__wxAppCode__['pages/chart/chart.json']={"navigationBarTitleText":"图表","bounce":"none","titleNView":false,"usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","no-thing":"/components/common/no-thing","line-chart":"/components/stan-ucharts/LineChart","chart-nav-bar":"/components/charts/chart-nav-bar"}};
__wxAppCode__['pages/chart/chart.wxml']=$gwx('./pages/chart/chart.wxml');

__wxAppCode__['pages/creditcardgl/addcard.json']={"navigationBarTitleText":"添加信用卡","usingComponents":{}};
__wxAppCode__['pages/creditcardgl/addcard.wxml']=$gwx('./pages/creditcardgl/addcard.wxml');

__wxAppCode__['pages/creditcardgl/carddetail.json']={"navigationBarTitleText":"信用卡详情","usingComponents":{}};
__wxAppCode__['pages/creditcardgl/carddetail.wxml']=$gwx('./pages/creditcardgl/carddetail.wxml');

__wxAppCode__['pages/creditcardgl/creditcardgl.json']={"navigationBarTitleText":"信用卡管理","usingComponents":{"load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","card-list-item":"/components/creditcard/card-list-item"}};
__wxAppCode__['pages/creditcardgl/creditcardgl.wxml']=$gwx('./pages/creditcardgl/creditcardgl.wxml');

__wxAppCode__['pages/detail/detail.json']={"navigationBarTitleText":"内容页","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]},"usingComponents":{"detail-info":"/components/detail/detail-info","comment-list":"/components/detail/comment-list","user-chat-bottom":"/components/user-chat/user-chat-bottom","more-share":"/components/common/more-share"}};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/home/home.json']={"navigationBarTitleText":"我的","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]},"usingComponents":{"home-list-item":"/components/home/home-list-item","home-info":"/components/home/home-info","other-login":"/components/home/other-login","home-data":"/components/home/home-data"}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.json']={"scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#CCCCCC","disabled":true},"buttons":[{"color":"#3ff595","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"uni-grid":"/components/uni-grid/uni-grid","topic-list":"/components/news/topic-list","uni-grid-item":"/components/uni-grid-item/uni-grid-item"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"titleNView":false,"bounce":"none","scrollIndicator":"none","usingComponents":{"uni-status-bar":"/components/uni-status-bar/uni-status-bar","other-login":"/components/home/other-login"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/news/news.json']={"navigationBarTitleText":"动态","bounce":"none","titleNView":false,"usingComponents":{"news-nav-bar":"/components/news/news-nav-bar","common-list":"/components/common/common-list","load-more":"/components/common/load-more","topic-nav":"/components/news/topic-nav","post-nav":"/components/news/post-nav","topic-list":"/components/news/topic-list","no-thing":"/components/common/no-thing"}};
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

__wxAppCode__['pages/paper/paper.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"小纸条","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"paper-list":"/components/paper/paper-list","paper-left-popup":"/components/paper/paper-left-popup","no-thing":"/components/common/no-thing"}};
__wxAppCode__['pages/paper/paper.wxml']=$gwx('./pages/paper/paper.wxml');

__wxAppCode__['pages/post-nav/post-nav.json']={"scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#CCCCCC","disabled":true},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"index-list":"/components/index/index-list","swiper-tab-head":"/components/index/swiper-tab-head","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing"}};
__wxAppCode__['pages/post-nav/post-nav.wxml']=$gwx('./pages/post-nav/post-nav.wxml');

__wxAppCode__['pages/remind/CreateRemind.json']={"navigationBarTitleText":"创建提醒","usingComponents":{}};
__wxAppCode__['pages/remind/CreateRemind.wxml']=$gwx('./pages/remind/CreateRemind.wxml');

__wxAppCode__['pages/remind/remind.json']={"navigationBarTitleText":"提醒","usingComponents":{"calendar":"/components/Li-Calendar/Li-Calendar"}};
__wxAppCode__['pages/remind/remind.wxml']=$gwx('./pages/remind/remind.wxml');

__wxAppCode__['pages/remind/reminddetail.json']={"usingComponents":{}};
__wxAppCode__['pages/remind/reminddetail.wxml']=$gwx('./pages/remind/reminddetail.wxml');

__wxAppCode__['pages/remind/remindgl.json']={"navigationBarTitleText":"提醒管理","usingComponents":{"load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","remind-data":"/components/remind/remind-data","remind-list-item":"/components/remind/remind-list-item"}};
__wxAppCode__['pages/remind/remindgl.wxml']=$gwx('./pages/remind/remindgl.wxml');

__wxAppCode__['pages/remind/remindgory.json']={"navigationBarTitleText":"分类提醒","usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing","remind-list-item":"/components/remind/remind-list-item"}};
__wxAppCode__['pages/remind/remindgory.wxml']=$gwx('./pages/remind/remindgory.wxml');

__wxAppCode__['pages/search/search.json']={"enablePullDownRefresh":true,"scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","disabled":false},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]},"usingComponents":{"index-list":"/components/index/index-list","no-thing":"/components/common/no-thing","load-more":"/components/common/load-more","topic-list":"/components/news/topic-list","user-list":"/components/user-list/user-list"}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/topic-detail/topic-detail.json']={"enablePullDownRefresh":true,"animationType":"slide-in-bottom","animationDuration":200,"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]},"usingComponents":{"topic-info":"/components/topic/topic-info","swiper-tab-head":"/components/index/swiper-tab-head","common-list":"/components/common/common-list","load-more":"/components/common/load-more"}};
__wxAppCode__['pages/topic-detail/topic-detail.wxml']=$gwx('./pages/topic-detail/topic-detail.wxml');

__wxAppCode__['pages/topic-nav/topic-nav.json']={"navigationBarTitleText":"话题分类","bounce":"none","usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","no-thing":"/components/common/no-thing","load-more":"/components/common/load-more","topic-list":"/components/news/topic-list"}};
__wxAppCode__['pages/topic-nav/topic-nav.wxml']=$gwx('./pages/topic-nav/topic-nav.wxml');

__wxAppCode__['pages/user-bind-phone/user-bind-phone.json']={"navigationBarTitleText":"绑定手机","usingComponents":{}};
__wxAppCode__['pages/user-bind-phone/user-bind-phone.wxml']=$gwx('./pages/user-bind-phone/user-bind-phone.wxml');

__wxAppCode__['pages/user-chat/user-chat.json']={"navigationBarTitleText":"聊天页","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/icon.ttf","text":""}]},"usingComponents":{"user-chat-bottom":"/components/user-chat/user-chat-bottom","user-chat-list":"/components/user-chat/user-chat-list"}};
__wxAppCode__['pages/user-chat/user-chat.wxml']=$gwx('./pages/user-chat/user-chat.wxml');

__wxAppCode__['pages/user-feedback/user-feedback.json']={"navigationBarTitleText":"意见反馈","usingComponents":{"user-chat-bottom":"/components/user-chat/user-chat-bottom","user-chat-list":"/components/user-chat/user-chat-list"}};
__wxAppCode__['pages/user-feedback/user-feedback.wxml']=$gwx('./pages/user-feedback/user-feedback.wxml');

__wxAppCode__['pages/user-history/user-history.json']={"navigationBarTitleText":"浏览历史","titleNView":{"buttons":[{"type":"close"}]},"usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item","no-thing":"/components/common/no-thing"}};
__wxAppCode__['pages/user-history/user-history.wxml']=$gwx('./pages/user-history/user-history.wxml');

__wxAppCode__['pages/user-list/user-list.json']={"animationType":"slide-in-left","scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索用户","placeholderColor":"#CCCCCC","disabled":true},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]},"usingComponents":{"swiper-tab-head":"/components/index/swiper-tab-head","user-list":"/components/user-list/user-list","load-more":"/components/common/load-more","no-thing":"/components/common/no-thing"}};
__wxAppCode__['pages/user-list/user-list.wxml']=$gwx('./pages/user-list/user-list.wxml');

__wxAppCode__['pages/user-safe/user-safe.json']={"navigationBarTitleText":"账号与安全","usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/user-safe/user-safe.wxml']=$gwx('./pages/user-safe/user-safe.wxml');

__wxAppCode__['pages/user-set-about/user-set-about.json']={"navigationBarTitleText":"关于财务小秘书","scrollIndicator":"none","usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/user-set-about/user-set-about.wxml']=$gwx('./pages/user-set-about/user-set-about.wxml');

__wxAppCode__['pages/user-set-email/user-set-email.json']={"navigationBarTitleText":"修改邮箱","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/user-set-email/user-set-email.wxml']=$gwx('./pages/user-set-email/user-set-email.wxml');

__wxAppCode__['pages/user-set-help/user-set-help.json']={"navigationBarTitleText":"意见反馈","scrollIndicator":"none","usingComponents":{"uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item"}};
__wxAppCode__['pages/user-set-help/user-set-help.wxml']=$gwx('./pages/user-set-help/user-set-help.wxml');

__wxAppCode__['pages/user-set-repassword/user-set-repassword.json']={"navigationBarTitleText":"修改密码","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/user-set-repassword/user-set-repassword.wxml']=$gwx('./pages/user-set-repassword/user-set-repassword.wxml');

__wxAppCode__['pages/user-set-userinfo/user-set-userinfo.json']={"navigationBarTitleText":"修改资料","scrollIndicator":"none","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/user-set-userinfo/user-set-userinfo.wxml']=$gwx('./pages/user-set-userinfo/user-set-userinfo.wxml');

__wxAppCode__['pages/user-set/user-set.json']={"navigationBarTitleText":"设置","usingComponents":{"home-list-item":"/components/home/home-list-item"}};
__wxAppCode__['pages/user-set/user-set.wxml']=$gwx('./pages/user-set/user-set.wxml');

__wxAppCode__['pages/user-space/user-space.json']={"navigationBarTitleText":"个人空间","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]},"usingComponents":{"user-space-head":"/components/user-space/user-space-head","home-data":"/components/home/home-data","swiper-tab-head":"/components/index/swiper-tab-head","user-space-userinfo":"/components/user-space/user-space-userinfo","common-list":"/components/common/common-list","load-more":"/components/common/load-more","user-space-popup":"/components/user-space/user-space-popup","no-thing":"/components/common/no-thing"}};
__wxAppCode__['pages/user-space/user-space.wxml']=$gwx('./pages/user-space/user-space.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0aa5":function(t,e,n){"use strict";n.r(e);var o=n("74ed"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a},"2ed2":function(t,e,n){"use strict";n.r(e);var o=n("0aa5");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("b326");var a,f,r,l,c=n("f0c5"),i=Object(c["a"])(o["default"],a,f,!1,null,null,null,!1,r,l);e["default"]=i.exports},"74ed":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){this.lib.NetWork.On(),this.User.__init()},onShow:function(){console.log(t("App Show"," at App.vue:11"))},onHide:function(){console.log(t("App Hide"," at App.vue:14"))}};e.default=n}).call(this,n("0de9")["default"])},b326:function(t,e,n){"use strict";var o=n("fd16"),u=n.n(o);u.a},e0cf:function(t,e,n){"use strict";(function(t){n("1133"),n("921b");var e=l(n("66fd")),o=l(n("2ed2")),u=l(n("a87b")),a=l(n("af32a")),f=l(n("6236")),r=l(n("a5c0"));function l(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.config.productionTip=!1,e.default.prototype.config=u.default,e.default.prototype.lib=a.default,e.default.prototype.$http=f.default,e.default.prototype.User=r.default,o.default.mpType="app";var d=new e.default(c({},o.default,{config:u.default,lib:a.default}));t(d).$mount()}).call(this,n("6e42")["createApp"])},fd16:function(t,e,n){}},[["e0cf","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (n) {
  function e(e) {
    for (var t, s, m = e[0], p = e[1], r = e[2], a = 0, l = []; a < m.length; a++) {
      s = m[a], i[s] && l.push(i[s][0]), i[s] = 0;
    }

    for (t in p) {
      Object.prototype.hasOwnProperty.call(p, t) && (n[t] = p[t]);
    }

    u && u(e);

    while (l.length) {
      l.shift()();
    }

    return c.push.apply(c, r || []), o();
  }

  function o() {
    for (var n, e = 0; e < c.length; e++) {
      for (var o = c[e], t = !0, s = 1; s < o.length; s++) {
        var m = o[s];
        0 !== i[m] && (t = !1);
      }

      t && (c.splice(e--, 1), n = p(p.s = o[0]));
    }

    return n;
  }

  var t = {},
      s = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      c = [];

  function m(n) {
    return p.p + "" + n + ".js";
  }

  function p(e) {
    if (t[e]) return t[e].exports;
    var o = t[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(o.exports, o, o.exports, p), o.l = !0, o.exports;
  }

  p.e = function (n) {
    var e = [],
        o = {
      "components/news/topic-list": 1,
      "components/uni-grid-item/uni-grid-item": 1,
      "components/uni-grid/uni-grid": 1,
      "components/common/common-list": 1,
      "components/common/load-more": 1,
      "components/common/no-thing": 1,
      "components/news/news-nav-bar": 1,
      "components/news/post-nav": 1,
      "components/news/topic-nav": 1,
      "components/paper/paper-left-popup": 1,
      "components/paper/paper-list": 1,
      "components/home/home-list-item": 1,
      "components/home/other-login": 1,
      "components/home/home-data": 1,
      "components/home/home-info": 1,
      "components/index/index-list": 1,
      "components/user-list/user-list": 1,
      "components/common/uploud-images": 1,
      "components/uni-nav-bar/uni-nav-bar": 1,
      "components/index/swiper-tab-head": 1,
      "components/topic/topic-info": 1,
      "components/user-chat/user-chat-bottom": 1,
      "components/user-chat/user-chat-list": 1,
      "components/common/more-share": 1,
      "components/detail/comment-list": 1,
      "components/detail/detail-info": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/uni-collapse-item/uni-collapse-item": 1,
      "components/uni-collapse/uni-collapse": 1,
      "components/uni-status-bar/uni-status-bar": 1,
      "components/user-space/user-space-head": 1,
      "components/user-space/user-space-popup": 1,
      "components/user-space/user-space-userinfo": 1,
      "components/uni-list-item/uni-list-item": 1,
      "components/uni-list/uni-list": 1,
      "components/charts/chart-nav-bar": 1,
      "components/Li-Calendar/Li-Calendar": 1,
      "components/creditcard/card-list-item": 1,
      "components/remind/remind-data": 1,
      "components/remind/remind-list-item": 1,
      "components/bill/bill-data": 1,
      "components/bill/bill-list-item": 1,
      "components/bill/billgory-list": 1,
      "components/common/tag-sex-age": 1,
      "components/uni-badge/uni-badge": 1,
      "components/uni-icon/uni-icon": 1
    };
    s[n] ? e.push(s[n]) : 0 !== s[n] && o[n] && e.push(s[n] = new Promise(function (e, o) {
      for (var t = ({
        "components/news/topic-list": "components/news/topic-list",
        "components/uni-grid-item/uni-grid-item": "components/uni-grid-item/uni-grid-item",
        "components/uni-grid/uni-grid": "components/uni-grid/uni-grid",
        "components/common/common-list": "components/common/common-list",
        "components/common/load-more": "components/common/load-more",
        "components/common/no-thing": "components/common/no-thing",
        "components/news/news-nav-bar": "components/news/news-nav-bar",
        "components/news/post-nav": "components/news/post-nav",
        "components/news/topic-nav": "components/news/topic-nav",
        "components/paper/paper-left-popup": "components/paper/paper-left-popup",
        "components/paper/paper-list": "components/paper/paper-list",
        "components/home/home-list-item": "components/home/home-list-item",
        "components/home/other-login": "components/home/other-login",
        "components/home/home-data": "components/home/home-data",
        "components/home/home-info": "components/home/home-info",
        "components/index/index-list": "components/index/index-list",
        "components/user-list/user-list": "components/user-list/user-list",
        "components/common/uploud-images": "components/common/uploud-images",
        "components/uni-nav-bar/uni-nav-bar": "components/uni-nav-bar/uni-nav-bar",
        "components/index/swiper-tab-head": "components/index/swiper-tab-head",
        "components/topic/topic-info": "components/topic/topic-info",
        "components/user-chat/user-chat-bottom": "components/user-chat/user-chat-bottom",
        "components/user-chat/user-chat-list": "components/user-chat/user-chat-list",
        "components/common/more-share": "components/common/more-share",
        "components/detail/comment-list": "components/detail/comment-list",
        "components/detail/detail-info": "components/detail/detail-info",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/uni-collapse-item/uni-collapse-item": "components/uni-collapse-item/uni-collapse-item",
        "components/uni-collapse/uni-collapse": "components/uni-collapse/uni-collapse",
        "components/uni-status-bar/uni-status-bar": "components/uni-status-bar/uni-status-bar",
        "components/user-space/user-space-head": "components/user-space/user-space-head",
        "components/user-space/user-space-popup": "components/user-space/user-space-popup",
        "components/user-space/user-space-userinfo": "components/user-space/user-space-userinfo",
        "components/uni-list-item/uni-list-item": "components/uni-list-item/uni-list-item",
        "components/uni-list/uni-list": "components/uni-list/uni-list",
        "components/stan-ucharts/LineChart": "components/stan-ucharts/LineChart",
        "components/charts/chart-nav-bar": "components/charts/chart-nav-bar",
        "components/Li-Calendar/Li-Calendar": "components/Li-Calendar/Li-Calendar",
        "components/creditcard/card-list-item": "components/creditcard/card-list-item",
        "components/remind/remind-data": "components/remind/remind-data",
        "components/remind/remind-list-item": "components/remind/remind-list-item",
        "components/bill/bill-data": "components/bill/bill-data",
        "components/bill/bill-list-item": "components/bill/bill-list-item",
        "components/bill/billgory-list": "components/bill/billgory-list",
        "components/common/tag-sex-age": "components/common/tag-sex-age",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge",
        "components/uni-icon/uni-icon": "components/uni-icon/uni-icon"
      }[n] || n) + ".wxss", i = p.p + t, c = document.getElementsByTagName("link"), m = 0; m < c.length; m++) {
        var r = c[m],
            a = r.getAttribute("data-href") || r.getAttribute("href");
        if ("stylesheet" === r.rel && (a === t || a === i)) return e();
      }

      var l = document.getElementsByTagName("style");

      for (m = 0; m < l.length; m++) {
        r = l[m], a = r.getAttribute("data-href");
        if (a === t || a === i) return e();
      }

      var u = document.createElement("link");
      u.rel = "stylesheet", u.type = "text/css", u.onload = e, u.onerror = function (e) {
        var t = e && e.target && e.target.src || i,
            c = new Error("Loading CSS chunk " + n + " failed.\n(" + t + ")");
        c.request = t, delete s[n], u.parentNode.removeChild(u), o(c);
      }, u.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(u);
    }).then(function () {
      s[n] = 0;
    }));
    var t = i[n];
    if (0 !== t) if (t) e.push(t[2]);else {
      var c = new Promise(function (e, o) {
        t = i[n] = [e, o];
      });
      e.push(t[2] = c);
      var r,
          a = document.createElement("script");
      a.charset = "utf-8", a.timeout = 120, p.nc && a.setAttribute("nonce", p.nc), a.src = m(n), r = function r(e) {
        a.onerror = a.onload = null, clearTimeout(l);
        var o = i[n];

        if (0 !== o) {
          if (o) {
            var t = e && ("load" === e.type ? "missing" : e.type),
                s = e && e.target && e.target.src,
                c = new Error("Loading chunk " + n + " failed.\n(" + t + ": " + s + ")");
            c.type = t, c.request = s, o[1](c);
          }

          i[n] = void 0;
        }
      };
      var l = setTimeout(function () {
        r({
          type: "timeout",
          target: a
        });
      }, 12e4);
      a.onerror = a.onload = r, document.head.appendChild(a);
    }
    return Promise.all(e);
  }, p.m = n, p.c = t, p.d = function (n, e, o) {
    p.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: o
    });
  }, p.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, p.t = function (n, e) {
    if (1 & e && (n = p(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var o = Object.create(null);
    if (p.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var t in n) {
      p.d(o, t, function (e) {
        return n[e];
      }.bind(null, t));
    }
    return o;
  }, p.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return p.d(e, "a", e), e;
  }, p.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, p.p = "/", p.oe = function (n) {
    throw console.error(n), n;
  };
  var r = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = r.push.bind(r);
  r.push = e, r = r.slice();

  for (var l = 0; l < r.length; l++) {
    e(r[l]);
  }

  var u = a;
  o();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(e,a,l){"use strict";function t(e){var a=Object.prototype.toString.call(e);return a.substring(8,a.length-1)}function i(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];var i=a.map(function(e){var a=Object.prototype.toString.call(e);if("[object object]"===a.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(i){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var l=t(e).toUpperCase();e="NUMBER"===l||"BOOLEAN"===l?"---BEGIN:"+l+"---"+e+"---END:"+l+"---":String(e)}return e}),n="";if(i.length>1){var r=i.pop();n=i.join("---COMMA---"),0===r.indexOf(" at ")?n+=r:n+="---COMMA---"+r}else n=i[0];return n}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i},1133:function(e,a,l){},"1a3d":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],i=t;a.default=i},"1fbc":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lunarYearArr:[46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],lunarMonth:["正","二","三","四","五","六","七","八","九","十","冬","腊"],lunarDay:["一","二","三","四","五","六","七","八","九","十","初","廿"],tianGan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],diZhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],sloarToLunar:function(e,a,l){var t=this;a-=1;for(var i,n,r,o=(Date.UTC(e,a,l)-Date.UTC(1949,0,29))/864e5+1,u=0;u<t.lunarYearArr.length;u++){var s=t.lunarYearDays(t.lunarYearArr[u]);if(o-=s,o<=0){i=1949+u,o+=s;break}}for(var v=t.lunarYearMonths(t.lunarYearArr[i-1949]),c=t.hasLeapMonth(t.lunarYearArr[i-1949]),b=0;b<v.length;b++)if(o-=v[b],o<=0){n=c&&c<=b?c<b?b:c===b?"闰"+b:b+1:b+1,o+=v[b];break}return r=o,n=c&&"string"===typeof n&&n.indexOf("闰")>-1?"闰".concat(this.lunarMonth[/\d/.exec(n)-1]):t.lunarMonth[n-1],i=t.getTianGan(i)+t.getDiZhi(i),r<11?r="".concat(this.lunarDay[10]).concat(this.lunarDay[r-1]):r>10&&r<20?r="".concat(this.lunarDay[9]).concat(this.lunarDay[r-11]):20===r?r="".concat(this.lunarDay[1]).concat(this.lunarDay[9]):r>20&&r<30?r="".concat(this.lunarDay[11]).concat(this.lunarDay[r-21]):30===r&&(r="".concat(this.lunarDay[2]).concat(this.lunarDay[9])),{lunarYear:i,lunarMonth:n,lunarDay:r}},hasLeapMonth:function(e){return!!(15&e)&&15&e},leapMonthDays:function(e){return this.hasLeapMonth(e)?983040&e?30:29:0},lunarYearDays:function(e){for(var a=0,l=32768;l>8;l>>=1){var t=e&l?30:29;a+=t}return this.hasLeapMonth(e)&&(a+=this.leapMonthDays(e)),a},lunarYearMonths:function(e){for(var a=[],l=this,t=32768;t>8;t>>=1)a.push(e&t?30:29);return this.hasLeapMonth(e)&&a.splice(this.hasLeapMonth(e),0,l.leapMonthDays(e)),a},getTianGan:function(e){var a=(e-3)%10;return 0===a&&(a=10),this.tianGan[a-1]},getDiZhi:function(e){var a=(e-3)%12;return 0===a&&(a=12),this.diZhi[a-1]}},i=t;a.default=i},"3d11":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],i=t;a.default=i},"4b8e":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={appid:"__UNI__C189382"};a.default=t},5438:function(e,a,l){"use strict";(function(a,l){var t={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},i=function(e){for(var a=arguments.length,l=new Array(a>1?a-1:0),t=1;t<a;t++)l[t-1]=arguments[t];if(null==e)throw new TypeError("Cannot convert undefined or null to object");if(!l||l.length<=0)return e;function i(e,a){for(var l in a)e[l]=e[l]&&"[object Object]"===e[l].toString()?i(e[l],a[l]):e[l]=a[l];return e}return l.forEach(function(a){e=i(e,a)}),e},n={toFixed:function(e,a){return a=a||2,this.isFloat(e)&&(e=e.toFixed(a)),e},isFloat:function(e){return e%1!==0},approximatelyEqual:function(e,a){return Math.abs(e-a)<1e-10},isSameSign:function(e,a){return Math.abs(e)===e&&Math.abs(a)===a||Math.abs(e)!==e&&Math.abs(a)!==a},isSameXCoordinateArea:function(e,a){return this.isSameSign(e.x,a.x)},isCollision:function(e,a){e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,a.end={},a.end.x=a.start.x+a.width,a.end.y=a.start.y-a.height;var l=a.start.x>e.end.x||a.end.x<e.start.x||a.end.y>e.start.y||a.start.y<e.end.y;return!l}};function r(e,a){var l=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(l,function(e,a,l,t){return a+a+l+l+t+t}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+n+","+r+","+o+","+a+")"}function o(e,a,l){if(isNaN(e))throw new Error("[uCharts] unvalid series data!");l=l||10,a=a||"upper";var t=1;while(l<1)l*=10,t*=10;e="upper"===a?Math.ceil(e*t):Math.floor(e*t);while(e%l!==0)"upper"===a?e++:e--;return e/t}function u(e,a,l,t){for(var i=[],n=0;n<e.length;n++){for(var r={data:[],name:a[n],color:l[n]},o=0,u=t.length;o<u;o++)if(o<e[n])r.data.push(null);else{for(var s=0,v=0;v<e[n];v++)s+=t[o-v][1];r.data.push(+(s/e[n]).toFixed(3))}i.push(r)}return i}function s(e,a,l,t,i){var n=i.width-i.area[1]-i.area[3],r=l.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),o=a;return a>=0?(o=0,e.event.trigger("scrollLeft")):Math.abs(a)>=r-n&&(o=n-r,e.event.trigger("scrollRight")),o}function v(e,a,l){function t(e){while(e<0)e+=2*Math.PI;while(e>2*Math.PI)e-=2*Math.PI;return e}return e=t(e),a=t(a),l=t(l),a>l&&(l+=2*Math.PI,e<a&&(e+=2*Math.PI)),e>=a&&e<=l}function c(e,a,l){var t=e,i=l-a,n=t+(l-i-t)/Math.sqrt(2);n*=-1;var r=(l-i)*(Math.sqrt(2)-1)-(l-i-t)/Math.sqrt(2);return{transX:n,transY:r}}function b(e,a){function l(e,a){return!(!e[a-1]||!e[a+1])&&(e[a].y>=Math.max(e[a-1].y,e[a+1].y)||e[a].y<=Math.min(e[a-1].y,e[a+1].y))}var t=.2,i=.2,n=null,r=null,o=null,u=null;if(a<1?(n=e[0].x+(e[1].x-e[0].x)*t,r=e[0].y+(e[1].y-e[0].y)*t):(n=e[a].x+(e[a+1].x-e[a-1].x)*t,r=e[a].y+(e[a+1].y-e[a-1].y)*t),a>e.length-3){var s=e.length-1;o=e[s].x-(e[s].x-e[s-1].x)*i,u=e[s].y-(e[s].y-e[s-1].y)*i}else o=e[a+1].x-(e[a+2].x-e[a].x)*i,u=e[a+1].y-(e[a+2].y-e[a].y)*i;return l(e,a+1)&&(u=e[a+1].y),l(e,a)&&(r=e[a].y),(r>=Math.max(e[a].y,e[a+1].y)||r<=Math.min(e[a].y,e[a+1].y))&&(r=e[a].y),(u>=Math.max(e[a].y,e[a+1].y)||u<=Math.min(e[a].y,e[a+1].y))&&(u=e[a+1].y),{ctrA:{x:n,y:r},ctrB:{x:o,y:u}}}function h(e,a,l){return{x:l.x+e,y:l.y-a}}function p(e,a){if(a)while(n.isCollision(e,a))e.start.x>0?e.start.y--:e.start.x<0?e.start.y++:e.start.y>0?e.start.y++:e.start.y--;return e}function d(e,a,l){var t=0;return e.map(function(e){if(e.color||(e.color=l.colors[t],t=(t+1)%l.colors.length),e.index||(e.index=0),e.type||(e.type=a.type),"undefined"==typeof e.show&&(e.show=!0),e.type||(e.type=a.type),e.pointShape||(e.pointShape="circle"),!e.legendShape)switch(e.type){case"line":e.legendShape="line";break;case"column":e.legendShape="rect";break;case"area":e.legendShape="triangle";break;default:e.legendShape="circle"}return e})}function f(e,a){var l=0,t=a-e;return l=t>=1e4?1e3:t>=1e3?100:t>=100?10:t>=10?5:t>=1?1:t>=.1?.1:t>=.01?.01:t>=.001?.001:t>=1e-4?1e-4:t>=1e-5?1e-5:1e-6,{minRange:o(e,"lower",l),maxRange:o(a,"upper",l)}}function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.fontSize;e=String(e);e=e.split("");for(var l=0,i=0;i<e.length;i++){var n=e[i];/[a-zA-Z]/.test(n)?l+=7:/[0-9]/.test(n)?l+=5.5:/\./.test(n)?l+=2.7:/-/.test(n)?l+=3.25:/[\u4e00-\u9fa5]/.test(n)?l+=10:/\(|\)/.test(n)?l+=3.73:/\s/.test(n)?l+=2.5:/%/.test(n)?l+=8:l+=10}return l*a/10}function x(e){return e.reduce(function(e,a){return(e.data?e.data:e).concat(a.data)},[])}function y(e,a){for(var l=new Array(a),t=0;t<l.length;t++)l[t]=0;for(var i=0;i<e.length;i++)for(t=0;t<l.length;t++)l[t]+=e[i].data[t];return e.reduce(function(e,a){return(e.data?e.data:e).concat(a.data).concat(l)},[])}function m(e,a,l){var t,i;return e.clientX?a.rotate?(i=a.height-e.clientX*a.pixelRatio,t=(e.pageY-l.currentTarget.offsetTop-a.height/a.pixelRatio/2*(a.pixelRatio-1))*a.pixelRatio):(t=e.clientX*a.pixelRatio,i=(e.pageY-l.currentTarget.offsetTop-a.height/a.pixelRatio/2*(a.pixelRatio-1))*a.pixelRatio):a.rotate?(i=a.height-e.x*a.pixelRatio,t=e.y*a.pixelRatio):(t=e.x*a.pixelRatio,i=e.y*a.pixelRatio),{x:t,y:i}}function _(e,a){for(var l=[],t=0;t<e.length;t++){var i=e[t];if(null!==i.data[a]&&"undefined"!==typeof i.data[a]&&i.show){var n={};n.color=i.color,n.type=i.type,n.style=i.style,n.pointShape=i.pointShape,n.disableLegend=i.disableLegend,n.name=i.name,n.show=i.show,n.data=i.format?i.format(i.data[a]):i.data[a],l.push(n)}}return l}function A(e){var a=e.map(function(e){return g(e)});return Math.max.apply(null,a)}function S(e){for(var a=2*Math.PI/e,l=[],t=0;t<e;t++)l.push(a*t);return l.map(function(e){return-1*e+Math.PI/2})}function T(e,a,l,t){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.map(function(e){var a=[];return a=t||e.data,{text:i.format?i.format(e,a[l]):e.name+": "+e.data,color:e.color}}),r=[],o={x:0,y:0},u=0;u<a.length;u++){var s=a[u];"undefined"!==typeof s[l]&&null!==s[l]&&r.push(s[l])}for(var v=0;v<r.length;v++){var c=r[v];o.x=Math.round(c.x),o.y+=c.y}return o.y/=r.length,{textList:n,offset:o}}function w(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.map(function(e){return{text:i.format?i.format(e,t[l]):e.name+": "+e.data,color:e.color,disableLegend:!!e.disableLegend}});n=n.filter(function(e){if(!0!==e.disableLegend)return e});for(var r=[],o={x:0,y:0},u=0;u<a.length;u++){var s=a[u];"undefined"!==typeof s[l]&&null!==s[l]&&r.push(s[l])}for(var v=0;v<r.length;v++){var c=r[v];o.x=Math.round(c.x),o.y+=c.y}return o.y/=r.length,{textList:n,offset:o}}function P(e,a,l,t,i,n){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var r=n.color.upFill,o=n.color.downFill,u=[r,r,o,r],s=[],v={text:i[t],color:null};s.push(v),a.map(function(a){0==t&&a.data[1]-a.data[0]<0?u[1]=o:(a.data[0]<e[t-1][1]&&(u[0]=o),a.data[1]<a.data[0]&&(u[1]=o),a.data[2]>e[t-1][1]&&(u[2]=r),a.data[3]<e[t-1][1]&&(u[3]=o));var l={text:"开盘："+a.data[0],color:u[0]},i={text:"收盘："+a.data[1],color:u[1]},n={text:"最低："+a.data[2],color:u[2]},v={text:"最高："+a.data[3],color:u[3]};s.push(l,i,n,v)});for(var c=[],b={x:0,y:0},h=0;h<l.length;h++){var p=l[h];"undefined"!==typeof p[t]&&null!==p[t]&&c.push(p[t])}return b.x=Math.round(c[0][0].x),{textList:s,offset:b}}function k(e){for(var a=[],l=0;l<e.length;l++)1==e[l].show&&a.push(e[l]);return a}function D(e,a,l,t){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=-1,r=0,o=[],u=0;u<a[0].length;u++)o.push(a[0][u].x);return"line"!=l.type&&"area"!=l.type||"justify"!=l.xAxis.boundaryGap||(r=l.chartData.eachSpacing/2),l.categories||(r=0),C(e,l,t)&&o.forEach(function(a,l){e.x+i+r>a&&(n=l)}),n}function M(e,a,l){var t=-1;if(L(e,a.area)){for(var i=a.points,n=-1,r=0,o=i.length;r<o;r++)for(var u=i[r],s=0;s<u.length;s++){n+=1;var v=u[s]["area"];if(e.x>v[0]&&e.x<v[2]&&e.y>v[1]&&e.y<v[3]){t=n;break}}return t}return t}function L(e,a){return e.x>a.start.x&&e.x<a.end.x&&e.y>a.start.y&&e.y<a.end.y}function C(e,a,l){return e.x<=a.width-a.area[1]+10&&e.x>=a.area[3]-10&&e.y>=a.area[0]&&e.y<=a.height-a.area[2]}function F(e,a,l){var t=2*Math.PI/l,i=-1;if($(e,a.center,a.radius)){var n=function(e){return e<0&&(e+=2*Math.PI),e>2*Math.PI&&(e-=2*Math.PI),e},r=Math.atan2(a.center.y-e.y,e.x-a.center.x);r*=-1,r<0&&(r+=2*Math.PI);var o=a.angleList.map(function(e){return e=n(-1*e),e});o.forEach(function(e,a){var l=n(e-t/2),o=n(e+t/2);o<l&&(o+=2*Math.PI),(r>=l&&r<=o||r+2*Math.PI>=l&&r+2*Math.PI<=o)&&(i=a)})}return i}function O(e,a){for(var l=-1,t=0,i=a.series.length;t<i;t++){var n=a.series[t];if(e.x>n.funnelArea[0]&&e.x<n.funnelArea[2]&&e.y>n.funnelArea[1]&&e.y<n.funnelArea[3]){l=t;break}}return l}function R(e,a){for(var l=-1,t=0,i=a.length;t<i;t++){var n=a[t];if(e.x>n.area[0]&&e.x<n.area[2]&&e.y>n.area[1]&&e.y<n.area[3]){l=t;break}}return l}function I(e,a){for(var l=-1,t=a.chartData.mapData,i=a.series,n=ze(e.y,e.x,t.bounds,t.scale,t.xoffset,t.yoffset),r=[n.x,n.y],o=0,u=i.length;o<u;o++){var s=i[o].geometry.coordinates;if(Ne(r,s)){l=o;break}}return l}function E(e,a){var l=-1;if($(e,a.center,a.radius)){var t=Math.atan2(a.center.y-e.y,e.x-a.center.x);t=-t;for(var i=0,n=a.series.length;i<n;i++){var r=a.series[i];if(v(t,r._start_,r._start_+2*r._proportion_*Math.PI)){l=i;break}}}return l}function $(e,a,l){return Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2)<=Math.pow(l,2)}function j(e){var a=[],l=[];return e.forEach(function(e,t){null!==e?l.push(e):(l.length&&a.push(l),l=[])}),l.length&&a.push(l),a}function z(e,a,l,t){var i={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===a.legend.show)return t.legendData=i,i;var n=a.legend.padding,r=a.legend.margin,o=a.legend.fontSize,u=15*a.pixelRatio,s=5*a.pixelRatio,v=Math.max(a.legend.lineHeight*a.pixelRatio,o);if("top"==a.legend.position||"bottom"==a.legend.position){for(var c=[],b=0,h=[],p=[],d=0;d<e.length;d++){var f=e[d],x=u+s+g(f.name||"undefined",o)+a.legend.itemGap;b+x>a.width-a.padding[1]-a.padding[3]?(c.push(p),h.push(b-a.legend.itemGap),b=x,p=[f]):(b+=x,p.push(f))}if(p.length){c.push(p),h.push(b-a.legend.itemGap),i.widthArr=h;var y=Math.max.apply(null,h);switch(a.legend.float){case"left":i.area.start.x=a.padding[3],i.area.end.x=a.padding[3]+2*n;break;case"right":i.area.start.x=a.width-a.padding[1]-y-2*n,i.area.end.x=a.width-a.padding[1];break;default:i.area.start.x=(a.width-y)/2-n,i.area.end.x=(a.width+y)/2+n}i.area.width=y+2*n,i.area.wholeWidth=y+2*n,i.area.height=c.length*v+2*n,i.area.wholeHeight=c.length*v+2*n+2*r,i.points=c}}else{var m=e.length,_=a.height-a.padding[0]-a.padding[2]-2*r-2*n,A=Math.min(Math.floor(_/v),m);switch(i.area.height=A*v+2*n,i.area.wholeHeight=A*v+2*n,a.legend.float){case"top":i.area.start.y=a.padding[0]+r,i.area.end.y=a.padding[0]+r+i.area.height;break;case"bottom":i.area.start.y=a.height-a.padding[2]-r-i.area.height,i.area.end.y=a.height-a.padding[2]-r;break;default:i.area.start.y=(a.height-i.area.height)/2,i.area.end.y=(a.height+i.area.height)/2}for(var S=m%A===0?m/A:Math.floor(m/A+1),T=[],w=0;w<S;w++){var P=e.slice(w*A,w*A+A);T.push(P)}if(i.points=T,T.length){for(var k=0;k<T.length;k++){for(var D=T[k],M=0,L=0;L<D.length;L++){var C=u+s+g(D[L].name||"undefined",o)+a.legend.itemGap;C>M&&(M=C)}i.widthArr.push(M),i.heightArr.push(D.length*v+2*n)}for(var F=0,O=0;O<i.widthArr.length;O++)F+=i.widthArr[O];i.area.width=F-a.legend.itemGap+2*n,i.area.wholeWidth=i.area.width+n}}switch(a.legend.position){case"top":i.area.start.y=a.padding[0]+r,i.area.end.y=a.padding[0]+r+i.area.height;break;case"bottom":i.area.start.y=a.height-a.padding[2]-i.area.height-r,i.area.end.y=a.height-a.padding[2]-r;break;case"left":i.area.start.x=a.padding[3],i.area.end.x=a.padding[3]+i.area.width;break;case"right":i.area.start.x=a.width-a.padding[1]-i.area.width,i.area.end.x=a.width-a.padding[1];break}return t.legendData=i,i}function B(e,a,l,t){var i={angle:0,xAxisHeight:l.xAxisHeight},n=e.map(function(e){return g(e,a.xAxis.fontSize||l.fontSize)}),r=Math.max.apply(this,n);return 1==a.xAxis.rotateLabel&&r+2*l.xAxisTextPadding>t&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*l.xAxisTextPadding+r*Math.sin(i.angle)),i}function N(e,a,l){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,i=x(e),n=[];i=i.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),i.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==a.type?e.map(function(e){n.push(e)}):n.push(e[0]):n.push(e.value):n.push(e)});var r=0,o=0;if(n.length>0&&(r=Math.min.apply(this,n),o=Math.max.apply(this,n)),t>-1?("number"===typeof a.xAxis.data[t].min&&(r=Math.min(a.xAxis.data[t].min,r)),"number"===typeof a.xAxis.data[t].max&&(o=Math.max(a.xAxis.data[t].max,o))):("number"===typeof a.xAxis.min&&(r=Math.min(a.xAxis.min,r)),"number"===typeof a.xAxis.max&&(o=Math.max(a.xAxis.max,o))),r===o){var u=o||10;o+=u}for(var s=f(r,o),v=s.minRange,c=s.maxRange,b=[],h=(c-v)/a.xAxis.splitNumber,p=0;p<=a.xAxis.splitNumber;p++)b.push(v+h*p);return b}function W(e,a,l){var t={angle:0,xAxisHeight:l.xAxisHeight};t.ranges=N(e,a,l),t.rangesFormat=t.ranges.map(function(e){return e=a.xAxis.format?a.xAxis.format(e):n.toFixed(e,2),e});var i=t.ranges.map(function(e){return e=n.toFixed(e,2),e=a.xAxis.format?a.xAxis.format(Number(e)):e,e});t=Object.assign(t,ee(i,a,l));var r=t.eachSpacing,o=i.map(function(e){return g(e)}),u=Math.max.apply(this,o);return u+2*l.xAxisTextPadding>r&&(t.angle=45*Math.PI/180,t.xAxisHeight=2*l.xAxisTextPadding+u*Math.sin(t.angle)),!0===a.xAxis.disabled&&(t.xAxisHeight=0),t}function H(e,a,l,t,i){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=i.extra.radar||{};r.max=r.max||0;for(var o=Math.max(r.max,Math.max.apply(null,x(t))),u=[],s=function(i){var r=t[i],s={};s.color=r.color,s.legendShape=r.legendShape,s.pointShape=r.pointShape,s.data=[],r.data.forEach(function(t,i){var r={};r.angle=e[i],r.proportion=t/o,r.position=h(l*r.proportion*n*Math.cos(r.angle),l*r.proportion*n*Math.sin(r.angle),a),s.data.push(r)}),u.push(s)},v=0;v<t.length;v++)s(v);return u}function U(e,a){for(var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=0,i=0,n=0;n<e.length;n++){var r=e[n];r.data=null===r.data?0:r.data,t+=r.data}for(var o=0;o<e.length;o++){var u=e[o];u.data=null===u.data?0:u.data,u._proportion_=0===t?1/e.length*l:u.data/t*l,u._radius_=a}for(var s=0;s<e.length;s++){var v=e[s];v._start_=i,i+=2*v._proportion_*Math.PI}return e}function q(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e=e.sort(function(e,a){return parseInt(a.data)-parseInt(e.data)});for(var t=0;t<e.length;t++)e[t].radius=e[t].data/e[0].data*a*l,e[t]._proportion_=e[t].data/e[0].data;return e.reverse()}function V(e,a,l,t){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=0,r=0,o=[],u=0;u<e.length;u++){var s=e[u];s.data=null===s.data?0:s.data,n+=s.data,o.push(s.data)}for(var v=Math.min.apply(null,o),c=Math.max.apply(null,o),b=t-l,h=0;h<e.length;h++){var p=e[h];p.data=null===p.data?0:p.data,0===n||"area"==a?(p._proportion_=p.data/n*i,p._rose_proportion_=1/e.length*i):(p._proportion_=p.data/n*i,p._rose_proportion_=p.data/n*i),p._radius_=l+b*((p.data-v)/(c-v))}for(var d=0;d<e.length;d++){var f=e[d];f._start_=r,r+=2*f._rose_proportion_*Math.PI}return e}function X(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==l&&(l=.999999);for(var t=0;t<e.length;t++){var i=e[t];i.data=null===i.data?0:i.data;var n=void 0;n="circle"==a.type?2:a.endAngle<a.startAngle?2+a.endAngle-a.startAngle:a.startAngle-a.endAngle,i._proportion_=n*i.data*l+a.startAngle,i._proportion_>=2&&(i._proportion_=i._proportion_%2)}return e}function G(e,a,l){for(var t=a-l+1,i=a,n=0;n<e.length;n++)e[n].value=null===e[n].value?0:e[n].value,e[n]._startAngle_=i,e[n]._endAngle_=t*e[n].value+a,e[n]._endAngle_>=2&&(e[n]._endAngle_=e[n]._endAngle_%2),i=e[n]._endAngle_;return e}function Y(e,a,l){for(var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=0;i<e.length;i++){var n=e[i];if(n.data=null===n.data?0:n.data,"auto"==l.pointer.color){for(var r=0;r<a.length;r++)if(n.data<=a[r].value){n.color=a[r].color;break}}else n.color=l.pointer.color;var o=l.startAngle-l.endAngle+1;n._endAngle_=o*n.data+l.startAngle,n._oldAngle_=l.oldAngle,l.oldAngle<l.endAngle&&(n._oldAngle_+=2),n.data>=l.oldData?n._proportion_=(n._endAngle_-n._oldAngle_)*t+l.oldAngle:n._proportion_=n._oldAngle_-(n._oldAngle_-n._endAngle_)*t,n._proportion_>=2&&(n._proportion_=n._proportion_%2)}return e}function J(e){e=U(e);for(var a=0,l=0;l<e.length;l++){var t=e[l],i=t.format?t.format(+t._proportion_.toFixed(2)):n.toFixed(100*t._proportion_)+"%";a=Math.max(a,g(i))}return a}function K(e,a,l,t,i,n){return e.map(function(e){return null===e?null:(e.width=Math.ceil((a-2*i.columePadding)/l),n.extra.column&&n.extra.column.width&&+n.extra.column.width>0&&(e.width=Math.min(e.width,+n.extra.column.width)),e.width<=0&&(e.width=1),e.x+=(t+.5-l/2)*e.width,e)})}function Z(e,a,l,t,i,n,r){return e.map(function(e){return null===e?null:(e.width=Math.ceil((a-2*i.columePadding)/2),n.extra.column&&n.extra.column.width&&+n.extra.column.width>0&&(e.width=Math.min(e.width,+n.extra.column.width)),t>0&&(e.width-=2*r),e)})}function Q(e,a,l,t,i,n,r){return e.map(function(e,l){return null===e?null:(e.width=Math.ceil((a-2*i.columePadding)/2),n.extra.column&&n.extra.column.width&&+n.extra.column.width>0&&(e.width=Math.min(e.width,+n.extra.column.width)),e)})}function ee(e,a,l){var t=a.width-a.area[1]-a.area[3],i=a.enableScroll?Math.min(a.xAxis.itemCount,e.length):e.length;("line"==a.type||"area"==a.type)&&i>1&&"justify"==a.xAxis.boundaryGap&&(i-=1);var n=t/i,r=[],o=a.area[3],u=a.width-a.area[1];return e.forEach(function(e,a){r.push(o+a*n)}),"justify"!==a.xAxis.boundaryGap&&(!0===a.enableScroll?r.push(o+e.length*n):r.push(u)),{xAxisPoints:r,startX:o,endX:u,eachSpacing:n}}function ae(e,a,l,t,i,n,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u=[],s=n.height-n.area[0]-n.area[2];return e.forEach(function(e,r){if(null===e)u.push(null);else{var v=[];e.forEach(function(e,u){var c={};c.x=t[r]+Math.round(i/2);var b=e.value||e,h=s*(b-a)/(l-a);h*=o,c.y=n.height-Math.round(h)-n.area[2],v.push(c)}),u.push(v)}}),u}function le(e,a,l,t,i,n,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u="center";"line"!=n.type&&"area"!=n.type||(u=n.xAxis.boundaryGap);var s=[],v=n.height-n.area[0]-n.area[2],c=n.width-n.area[1]-n.area[3];return e.forEach(function(e,r){if(null===e)s.push(null);else{var b={};b.color=e.color,b.x=t[r];var h,p,d,f=e;if("object"===typeof e&&null!==e)if(e.constructor==Array)h=[].concat(n.chartData.xAxisData.ranges),p=h.shift(),d=h.pop(),f=e[1],b.x=n.area[3]+c*(e[0]-p)/(d-p);else f=e.value;"center"==u&&(b.x+=Math.round(i/2));var g=v*(f-a)/(l-a);g*=o,b.y=n.height-Math.round(g)-n.area[2],s.push(b)}}),s}function te(e,a,l,t,i,n,r,o,u){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,v=[],c=n.height-n.area[0]-n.area[2];return e.forEach(function(e,r){if(null===e)v.push(null);else{var b={};if(b.color=e.color,b.x=t[r]+Math.round(i/2),o>0){for(var h=0,p=0;p<=o;p++)h+=u[p].data[r];var d=h-e,f=c*(h-a)/(l-a),g=c*(d-a)/(l-a)}else h=e,f=c*(h-a)/(l-a),g=0;var x=g;f*=s,x*=s,b.y=n.height-Math.round(f)-n.area[2],b.y0=n.height-Math.round(x)-n.area[2],v.push(b)}}),v}function ie(e,a,l,t){var i,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;i="stack"==t?y(e,a.categories.length):x(e);var r=[];i=i.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),i.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==a.type?e.map(function(e){r.push(e)}):r.push(e[1]):r.push(e.value):r.push(e)});var o=0,u=0;if(r.length>0&&(o=Math.min.apply(this,r),u=Math.max.apply(this,r)),n>-1?("number"===typeof a.yAxis.data[n].min&&(o=Math.min(a.yAxis.data[n].min,o)),"number"===typeof a.yAxis.data[n].max&&(u=Math.max(a.yAxis.data[n].max,u))):("number"===typeof a.yAxis.min&&(o=Math.min(a.yAxis.min,o)),"number"===typeof a.yAxis.max&&(u=Math.max(a.yAxis.max,u))),o===u){var s=u||10;u+=s}for(var v=f(o,u),c=v.minRange,b=v.maxRange,h=[],p=(b-c)/a.yAxis.splitNumber,d=0;d<=a.yAxis.splitNumber;d++)h.push(c+p*d);return h.reverse()}function ne(e,a,l){var t=i({},{type:""},a.extra.column),r=a.yAxis.data.length,o=new Array(r);if(r>0){for(var u=0;u<r;u++){o[u]=[];for(var s=0;s<e.length;s++)e[s].index==u&&o[u].push(e[s])}for(var v=new Array(r),c=new Array(r),b=new Array(r),h=function(e){var i=a.yAxis.data[e];1==a.yAxis.disabled&&(i.disabled=!0),v[e]=ie(o[e],a,l,t.type,e);var r=i.fontSize||l.fontSize;b[e]={position:i.position?i.position:"left",width:0},c[e]=v[e].map(function(a){return a=n.toFixed(a,6),a=i.format?i.format(Number(a)):a,b[e].width=Math.max(b[e].width,g(a,r)+5),a});var u=i.calibration?4*a.pixelRatio:0;b[e].width+=u+3*a.pixelRatio,!0===i.disabled&&(b[e].width=0)},p=0;p<r;p++)h(p)}else{v=new Array(1),c=new Array(1),b=new Array(1);v[0]=ie(e,a,l,t.type),b[0]={position:"left",width:0};var d=a.yAxis.fontSize||l.fontSize;c[0]=v[0].map(function(e){return e=n.toFixed(e,6),e=a.yAxis.format?a.yAxis.format(Number(e)):e,b[0].width=Math.max(b[0].width,g(e,d)+5),e}),b[0].width+=3*a.pixelRatio,!0===a.yAxis.disabled?(b[0]={position:"left",width:0},a.yAxis.data[0]={disabled:!0}):a.yAxis.data[0]={disabled:!1,position:"left",max:a.yAxis.max,min:a.yAxis.min,format:a.yAxis.format}}return{rangesFormat:c,ranges:v,yAxisWidth:b}}function re(e,a,l,t,i){for(var n=[].concat(l.chartData.yAxisData.ranges),r=l.height-l.area[0]-l.area[2],o=l.area[0],u=[],s=0;s<n.length;s++){var v=n[s].shift(),c=n[s].pop(),b=v-(v-c)*(e-o)/r;b=l.yAxis.data[s].format?l.yAxis.data[s].format(Number(b)):b.toFixed(0),u.push(String(b))}return u}function oe(e,a){for(var l,t,i=a.height-a.area[0]-a.area[2],n=0;n<e.length;n++){e[n].yAxisIndex=e[n].yAxisIndex?e[n].yAxisIndex:0;var r=[].concat(a.chartData.yAxisData.ranges[e[n].yAxisIndex]);l=r.pop(),t=r.shift();var o=i*(e[n].value-l)/(t-l);e[n].y=a.height-Math.round(o)-a.area[2]}return e}function ue(e,a){!0!==a.rotateLock?(e.translate(a.height,0),e.rotate(90*Math.PI/180)):!0!==a._rotate_&&(e.translate(a.height,0),e.rotate(90*Math.PI/180),a._rotate_=!0)}function se(e,a,l,t,i){t.beginPath(),"hollow"==i.dataPointShapeType?(t.setStrokeStyle(a),t.setFillStyle(i.background),t.setLineWidth(2*i.pixelRatio)):(t.setStrokeStyle("#ffffff"),t.setFillStyle(a),t.setLineWidth(1*i.pixelRatio)),"diamond"===l?e.forEach(function(e,a){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y),t.lineTo(e.x,e.y+4.5),t.lineTo(e.x+4.5,e.y),t.lineTo(e.x,e.y-4.5))}):"circle"===l?e.forEach(function(e,a){null!==e&&(t.moveTo(e.x+2.5*i.pixelRatio,e.y),t.arc(e.x,e.y,3*i.pixelRatio,0,2*Math.PI,!1))}):"rect"===l?e.forEach(function(e,a){null!==e&&(t.moveTo(e.x-3.5,e.y-3.5),t.rect(e.x-3.5,e.y-3.5,7,7))}):"triangle"===l&&e.forEach(function(e,a){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y+4.5),t.lineTo(e.x+4.5,e.y+4.5),t.lineTo(e.x,e.y-4.5))}),t.closePath(),t.fill(),t.stroke()}function ve(e,a,l,t){var i=e.title.fontSize||a.titleFontSize,n=e.subtitle.fontSize||a.subtitleFontSize,r=e.title.name||"",o=e.subtitle.name||"",u=e.title.color||a.titleColor,s=e.subtitle.color||a.subtitleColor,v=r?i:0,c=o?n:0,b=5;if(o){var h=g(o,n),p=t.x-h/2+(e.subtitle.offsetX||0),d=t.y+n/2+(e.subtitle.offsetY||0);r&&(d+=(v+b)/2),l.beginPath(),l.setFontSize(n),l.setFillStyle(s),l.fillText(o,p,d),l.closePath(),l.stroke()}if(r){var f=g(r,i),x=t.x-f/2+(e.title.offsetX||0),y=t.y+i/2+(e.title.offsetY||0);o&&(y-=(c+b)/2),l.beginPath(),l.setFontSize(i),l.setFillStyle(u),l.fillText(r,x,y),l.closePath(),l.stroke()}}function ce(e,a,l,t){var i=a.data;e.forEach(function(e,n){if(null!==e){t.beginPath(),t.setFontSize(a.textSize||l.fontSize),t.setFillStyle(a.textColor||"#666666");var r=i[n];"object"===typeof i[n]&&null!==i[n]&&(r=i[n].constructor==Array?i[n][1]:i[n].value);var o=a.format?a.format(r):r;t.fillText(String(o),e.x-g(o,a.textSize||l.fontSize)/2,e.y-4),t.closePath(),t.stroke()}})}function be(e,a,l,t,i,n){a-=e.width/2+i.gaugeLabelTextMargin;for(var r=e.startAngle-e.endAngle+1,o=r/e.splitLine.splitNumber,u=e.endNumber-e.startNumber,s=u/e.splitLine.splitNumber,v=e.startAngle,c=e.startNumber,b=0;b<e.splitLine.splitNumber+1;b++){var h={x:a*Math.cos(v*Math.PI),y:a*Math.sin(v*Math.PI)},p=e.labelFormat?e.labelFormat(c):c;h.x+=l.x-g(p)/2,h.y+=l.y;var d=h.x,f=h.y;n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.labelColor||"#666666"),n.fillText(p,d,f+i.fontSize/2),n.closePath(),n.stroke(),v+=o,v>=2&&(v%=2),c+=s}}function he(e,a,l,t,i,r){var o=t.extra.radar||{};a+=i.radarLabelTextMargin,e.forEach(function(e,u){var s={x:a*Math.cos(e),y:a*Math.sin(e)},v=h(s.x,s.y,l),c=v.x,b=v.y;n.approximatelyEqual(s.x,0)?c-=g(t.categories[u]||"")/2:s.x<0&&(c-=g(t.categories[u]||"")),r.beginPath(),r.setFontSize(i.fontSize),r.setFillStyle(o.labelColor||"#666666"),r.fillText(t.categories[u]||"",c,b+i.fontSize/2),r.closePath(),r.stroke()})}function pe(e,a,l,t,i,r){for(var o=l.pieChartLinePadding,u=[],s=null,v=e.map(function(e){var a=e.format?e.format(+e._proportion_.toFixed(2)):n.toFixed(100*e._proportion_.toFixed(4))+"%";e._rose_proportion_&&(e._proportion_=e._rose_proportion_);var l=2*Math.PI-(e._start_+2*Math.PI*e._proportion_/2),t=e.color,i=e._radius_;return{arc:l,text:a,color:t,radius:i,textColor:e.textColor,textSize:e.textSize}}),c=0;c<v.length;c++){var b=v[c],d=Math.cos(b.arc)*(b.radius+o),f=Math.sin(b.arc)*(b.radius+o),x=Math.cos(b.arc)*b.radius,y=Math.sin(b.arc)*b.radius,m=d>=0?d+l.pieChartTextPadding:d-l.pieChartTextPadding,_=f,A=g(b.text,b.textSize||l.fontSize),S=_;s&&n.isSameXCoordinateArea(s.start,{x:m})&&(S=m>0?Math.min(_,s.start.y):d<0?Math.max(_,s.start.y):_>0?Math.max(_,s.start.y):Math.min(_,s.start.y)),m<0&&(m-=A);var T={lineStart:{x:x,y:y},lineEnd:{x:d,y:f},start:{x:m,y:S},width:A,height:l.fontSize,text:b.text,color:b.color,textColor:b.textColor,textSize:b.textSize};s=p(T,s),u.push(s)}for(var w=0;w<u.length;w++){var P=u[w],k=h(P.lineStart.x,P.lineStart.y,r),D=h(P.lineEnd.x,P.lineEnd.y,r),M=h(P.start.x,P.start.y,r);t.setLineWidth(1*a.pixelRatio),t.setFontSize(l.fontSize),t.beginPath(),t.setStrokeStyle(P.color),t.setFillStyle(P.color),t.moveTo(k.x,k.y);var L=P.start.x<0?M.x+P.width:M.x,C=P.start.x<0?M.x-5:M.x+5;t.quadraticCurveTo(D.x,D.y,L,M.y),t.moveTo(k.x,k.y),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(M.x+P.width,M.y),t.arc(L,M.y,2,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.setFontSize(P.textSize||l.fontSize),t.setFillStyle(P.textColor||"#666666"),t.fillText(P.text,C,M.y+3),t.closePath(),t.stroke(),t.closePath()}}function de(e,a,l,t){var i=a.extra.tooltip||{};i.gridType=void 0==i.gridType?"solid":i.gridType,i.dashLength=void 0==i.dashLength?4:i.dashLength;var n=a.area[0],o=a.height-a.area[2];if("dash"==i.gridType&&t.setLineDash([i.dashLength,i.dashLength]),t.setStrokeStyle(i.gridColor||"#cccccc"),t.setLineWidth(1*a.pixelRatio),t.beginPath(),t.moveTo(e,n),t.lineTo(e,o),t.stroke(),t.setLineDash([]),i.xAxisLabel){var u=a.categories[a.tooltip.index];t.setFontSize(l.fontSize);var s=g(u,l.fontSize),v=e-.5*s,c=o;t.beginPath(),t.setFillStyle(r(i.labelBgColor||l.toolTipBackground,i.labelBgOpacity||l.toolTipOpacity)),t.setStrokeStyle(i.labelBgColor||l.toolTipBackground),t.setLineWidth(1*a.pixelRatio),t.rect(v-l.toolTipPadding,c,s+2*l.toolTipPadding,l.fontSize+2*l.toolTipPadding),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(i.labelFontColor||l.fontColor),t.fillText(String(u),v,c+l.toolTipPadding+l.fontSize),t.closePath(),t.stroke()}}function fe(e,a,l){for(var t=i({},{type:"solid",dashLength:4,data:[]},e.extra.markLine),n=e.area[3],o=e.width-e.area[1],u=oe(t.data,e),s=0;s<u.length;s++){var v=i({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[s]);if("dash"==t.type&&l.setLineDash([t.dashLength,t.dashLength]),l.setStrokeStyle(v.lineColor),l.setLineWidth(1*e.pixelRatio),l.beginPath(),l.moveTo(n,v.y),l.lineTo(o,v.y),l.stroke(),l.setLineDash([]),v.showLabel){var c=e.yAxis.format?e.yAxis.format(Number(v.value)):v.value;l.setFontSize(a.fontSize);var b=g(c,a.fontSize),h=e.padding[3]+a.yAxisTitleWidth-a.toolTipPadding,p=Math.max(e.area[3],b+2*a.toolTipPadding),d=p-h,f=h+(d-b)/2,x=v.y;l.setFillStyle(r(v.labelBgColor,v.labelBgOpacity)),l.setStrokeStyle(v.labelBgColor),l.setLineWidth(1*e.pixelRatio),l.beginPath(),l.rect(h,x-.5*a.fontSize-a.toolTipPadding,d,a.fontSize+2*a.toolTipPadding),l.closePath(),l.stroke(),l.fill(),l.beginPath(),l.setFontSize(a.fontSize),l.setFillStyle(v.labelFontColor),l.fillText(String(c),f,x+.5*a.fontSize),l.stroke()}}}function ge(e,a,l,t,n){var o=i({},{gridType:"solid",dashLength:4},e.extra.tooltip),u=e.area[3],s=e.width-e.area[1];if("dash"==o.gridType&&l.setLineDash([o.dashLength,o.dashLength]),l.setStrokeStyle(o.gridColor||"#cccccc"),l.setLineWidth(1*e.pixelRatio),l.beginPath(),l.moveTo(u,e.tooltip.offset.y),l.lineTo(s,e.tooltip.offset.y),l.stroke(),l.setLineDash([]),o.yAxisLabel)for(var v=re(e.tooltip.offset.y,e.series,e,a,t),c=e.chartData.yAxisData.yAxisWidth,b=e.area[3],h=e.width-e.area[1],p=0;p<v.length;p++){l.setFontSize(a.fontSize);var d=g(v[p],a.fontSize),f=void 0,x=void 0,y=void 0;"left"==c[p].position?(f=b-c[p].width,x=Math.max(f,f+d+2*a.toolTipPadding)):(f=h,x=Math.max(f+c[p].width,f+d+2*a.toolTipPadding)),y=x-f;var m=f+(y-d)/2,_=e.tooltip.offset.y;l.beginPath(),l.setFillStyle(r(o.labelBgColor||a.toolTipBackground,o.labelBgOpacity||a.toolTipOpacity)),l.setStrokeStyle(o.labelBgColor||a.toolTipBackground),l.setLineWidth(1*e.pixelRatio),l.rect(f,_-.5*a.fontSize-a.toolTipPadding,y,a.fontSize+2*a.toolTipPadding),l.closePath(),l.stroke(),l.fill(),l.beginPath(),l.setFontSize(a.fontSize),l.setFillStyle(o.labelFontColor||a.fontColor),l.fillText(v[p],m,_+.5*a.fontSize),l.closePath(),l.stroke(),"left"==c[p].position?b-=c[p].width+e.yAxis.padding:h+=c[p].width+e.yAxis.padding}}function xe(e,a,l,t,n){var o=i({},{activeBgColor:"#000000",activeBgOpacity:.08},a.extra.tooltip),u=a.area[0],s=a.height-a.area[2];t.beginPath(),t.setFillStyle(r(o.activeBgColor,o.activeBgOpacity)),t.rect(e-n/2,u,n,s-u),t.closePath(),t.fill()}function ye(e,a,l,t,n,o,u){var s=i({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},l.extra.tooltip),v=4*l.pixelRatio,c=5*l.pixelRatio,b=8*l.pixelRatio,h=!1;"line"!=l.type&&"area"!=l.type&&"candle"!=l.type&&"mix"!=l.type||de(l.tooltip.offset.x,l,t,n),a=i({x:0,y:0},a),a.y-=8*l.pixelRatio;var p=e.map(function(e){return g(e.text,t.fontSize)}),d=v+c+4*t.toolTipPadding+Math.max.apply(null,p),f=2*t.toolTipPadding+e.length*t.toolTipLineHeight;0!=s.showBox&&(a.x-Math.abs(l._scrollDistance_)+b+d>l.width&&(h=!0),f+a.y>l.height&&(a.y=l.height-f),n.beginPath(),n.setFillStyle(r(s.bgColor||t.toolTipBackground,s.bgOpacity||t.toolTipOpacity)),h?(n.moveTo(a.x,a.y+10*l.pixelRatio),n.lineTo(a.x-b,a.y+10*l.pixelRatio-5*l.pixelRatio),n.lineTo(a.x-b,a.y),n.lineTo(a.x-b-Math.round(d),a.y),n.lineTo(a.x-b-Math.round(d),a.y+f),n.lineTo(a.x-b,a.y+f),n.lineTo(a.x-b,a.y+10*l.pixelRatio+5*l.pixelRatio),n.lineTo(a.x,a.y+10*l.pixelRatio)):(n.moveTo(a.x,a.y+10*l.pixelRatio),n.lineTo(a.x+b,a.y+10*l.pixelRatio-5*l.pixelRatio),n.lineTo(a.x+b,a.y),n.lineTo(a.x+b+Math.round(d),a.y),n.lineTo(a.x+b+Math.round(d),a.y+f),n.lineTo(a.x+b,a.y+f),n.lineTo(a.x+b,a.y+10*l.pixelRatio+5*l.pixelRatio),n.lineTo(a.x,a.y+10*l.pixelRatio)),n.closePath(),n.fill(),e.forEach(function(e,l){if(null!==e.color){n.beginPath(),n.setFillStyle(e.color);var i=a.x+b+2*t.toolTipPadding,r=a.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*l+t.toolTipPadding+1;h&&(i=a.x-d-b+2*t.toolTipPadding),n.fillRect(i,r,v,t.fontSize),n.closePath()}}),e.forEach(function(e,l){var i=a.x+b+2*t.toolTipPadding+v+c;h&&(i=a.x-d-b+2*t.toolTipPadding+ +v+c);var r=a.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*l+t.toolTipPadding;n.beginPath(),n.setFontSize(t.fontSize),n.setFillStyle(s.fontColor),n.fillText(e.text,i,r+t.fontSize),n.closePath(),n.stroke()}))}function me(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=a.chartData.xAxisData,o=r.xAxisPoints,u=r.eachSpacing,s=i({},{type:"group",width:u/2,meter:{border:4,fillColor:"#FFFFFF"}},a.extra.column),v=[];t.save();var c=-2,b=o.length+2;return a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(t.translate(a._scrollDistance_,0),c=Math.floor(-a._scrollDistance_/u)-2,b=c+a.xAxis.itemCount+4),a.tooltip&&a.tooltip.textList&&a.tooltip.textList.length&&1===n&&xe(a.tooltip.offset.x,a,l,t,u),e.forEach(function(i,r){var h,p,d;h=[].concat(a.chartData.yAxisData.ranges[i.index]),p=h.pop(),d=h.shift();var f=i.data;switch(s.type){case"group":var g=le(f,p,d,o,u,a,l,n),x=te(f,p,d,o,u,a,l,r,e,n);v.push(x),g=K(g,u,e.length,r,l,a);for(var y=0;y<g.length;y++){var m=g[y];if(null!==m&&y>c&&y<b){t.beginPath(),t.setStrokeStyle(m.color||i.color),t.setLineWidth(1),t.setFillStyle(m.color||i.color);var _=m.x-m.width/2,A=a.height-m.y-a.area[2];t.moveTo(_-1,m.y),t.lineTo(_+m.width-2,m.y),t.lineTo(_+m.width-2,a.height-a.area[2]),t.lineTo(_,a.height-a.area[2]),t.lineTo(_,m.y),t.closePath(),t.stroke(),t.fill()}}break;case"stack":g=te(f,p,d,o,u,a,l,r,e,n);v.push(g),g=Q(g,u,e.length,r,l,a,e);for(var S=0;S<g.length;S++){var T=g[S];if(null!==T&&S>c&&S<b){t.beginPath(),t.setFillStyle(T.color||i.color);_=T.x-T.width/2+1,A=a.height-T.y-a.area[2];var w=a.height-T.y0-a.area[2];r>0&&(A-=w),t.moveTo(_,T.y),t.fillRect(_,T.y,T.width-2,A),t.closePath(),t.fill()}}break;case"meter":g=le(f,p,d,o,u,a,l,n);if(v.push(g),g=Z(g,u,e.length,r,l,a,s.meter.border),0==r)for(var P=0;P<g.length;P++){var k=g[P];if(null!==k&&P>c&&P<b){t.beginPath(),t.setFillStyle(s.meter.fillColor);_=k.x-k.width/2,A=a.height-k.y-a.area[2];t.moveTo(_,k.y),t.fillRect(_,k.y,k.width,A),t.closePath(),t.fill(),s.meter.border>0&&(t.beginPath(),t.setStrokeStyle(i.color),t.setLineWidth(s.meter.border*a.pixelRatio),t.moveTo(_+.5*s.meter.border,k.y+A),t.lineTo(_+.5*s.meter.border,k.y+.5*s.meter.border),t.lineTo(_+k.width-.5*s.meter.border,k.y+.5*s.meter.border),t.lineTo(_+k.width-.5*s.meter.border,k.y+A),t.stroke())}}else for(var D=0;D<g.length;D++){var M=g[D];if(null!==M&&D>c&&D<b){t.beginPath(),t.setFillStyle(M.color||i.color);_=M.x-M.width/2,A=a.height-M.y-a.area[2];t.moveTo(_,M.y),t.fillRect(_,M.y,M.width,A),t.closePath(),t.fill()}}break}}),!1!==a.dataLabel&&1===n&&e.forEach(function(i,r){var v,c,b;v=[].concat(a.chartData.yAxisData.ranges[i.index]),c=v.pop(),b=v.shift();var h=i.data;switch(s.type){case"group":var p=le(h,c,b,o,u,a,l,n);p=K(p,u,e.length,r,l,a),ce(p,i,l,t);break;case"stack":p=te(h,c,b,o,u,a,l,r,e,n);ce(p,i,l,t);break;case"meter":p=le(h,c,b,o,u,a,l,n);ce(p,i,l,t);break}}),t.restore(),{xAxisPoints:o,calPoints:v,eachSpacing:u}}function _e(e,a,l,t,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=i({},{color:{},average:{}},l.extra.candle);o.color=i({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},o.color),o.average=i({},{show:!1,name:[],day:[],color:t.colors},o.average),l.extra.candle=o;var u=l.chartData.xAxisData,s=u.xAxisPoints,v=u.eachSpacing,c=[];n.save();var h=-2,p=s.length+2,d=0,f=l.width+v;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(n.translate(l._scrollDistance_,0),h=Math.floor(-l._scrollDistance_/v)-2,p=h+l.xAxis.itemCount+4,d=-l._scrollDistance_-v+l.area[3],f=d+(l.xAxis.itemCount+4)*v),o.average.show&&a.forEach(function(e,a){var i,o,u;i=[].concat(l.chartData.yAxisData.ranges[e.index]),o=i.pop(),u=i.shift();for(var c=e.data,h=le(c,o,u,s,v,l,t,r),p=j(h),g=0;g<p.length;g++){var x=p[g];if(n.beginPath(),n.setStrokeStyle(e.color),n.setLineWidth(1),1===x.length)n.moveTo(x[0].x,x[0].y),n.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{n.moveTo(x[0].x,x[0].y);for(var y=0,m=0;m<x.length;m++){var _=x[m];if(0==y&&_.x>d&&(n.moveTo(_.x,_.y),y=1),m>0&&_.x>d&&_.x<f){var A=b(x,m-1);n.bezierCurveTo(A.ctrA.x,A.ctrA.y,A.ctrB.x,A.ctrB.y,_.x,_.y)}}n.moveTo(x[0].x,x[0].y)}n.closePath(),n.stroke()}}),e.forEach(function(e,a){var i,u,b;i=[].concat(l.chartData.yAxisData.ranges[e.index]),u=i.pop(),b=i.shift();var d=e.data,f=ae(d,u,b,s,v,l,t,r);c.push(f);for(var g=j(f),x=0;x<g[0].length;x++)if(x>h&&x<p){var y=g[0][x];n.beginPath(),d[x][1]-d[x][0]>0?(n.setStrokeStyle(o.color.upLine),n.setFillStyle(o.color.upFill),n.setLineWidth(1*l.pixelRatio),n.moveTo(y[3].x,y[3].y),n.lineTo(y[1].x,y[1].y),n.lineTo(y[1].x-v/4,y[1].y),n.lineTo(y[0].x-v/4,y[0].y),n.lineTo(y[0].x,y[0].y),n.lineTo(y[2].x,y[2].y),n.lineTo(y[0].x,y[0].y),n.lineTo(y[0].x+v/4,y[0].y),n.lineTo(y[1].x+v/4,y[1].y),n.lineTo(y[1].x,y[1].y),n.moveTo(y[3].x,y[3].y)):(n.setStrokeStyle(o.color.downLine),n.setFillStyle(o.color.downFill),n.setLineWidth(1*l.pixelRatio),n.moveTo(y[3].x,y[3].y),n.lineTo(y[0].x,y[0].y),n.lineTo(y[0].x-v/4,y[0].y),n.lineTo(y[1].x-v/4,y[1].y),n.lineTo(y[1].x,y[1].y),n.lineTo(y[2].x,y[2].y),n.lineTo(y[1].x,y[1].y),n.lineTo(y[1].x+v/4,y[1].y),n.lineTo(y[0].x+v/4,y[0].y),n.lineTo(y[0].x,y[0].y),n.moveTo(y[3].x,y[3].y)),n.closePath(),n.fill(),n.stroke()}}),n.restore(),{xAxisPoints:s,calPoints:c,eachSpacing:v}}function Ae(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=i({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},a.extra.area),u=a.chartData.xAxisData,s=u.xAxisPoints,v=u.eachSpacing,c=a.height-a.area[2],h=[];t.save();var p=0,d=a.width+v;return a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(t.translate(a._scrollDistance_,0),p=-a._scrollDistance_-v+a.area[3],d=p+(a.xAxis.itemCount+4)*v),e.forEach(function(e,i){var u,f,g;u=[].concat(a.chartData.yAxisData.ranges[e.index]),f=u.pop(),g=u.shift();var x=e.data,y=le(x,f,g,s,v,a,l,n);h.push(y);for(var m=j(y),_=0;_<m.length;_++){var A=m[_];if(t.beginPath(),t.setStrokeStyle(r(e.color,o.opacity)),o.gradient){var S=t.createLinearGradient(0,a.area[0],0,a.height-a.area[2]);S.addColorStop("0",r(e.color,o.opacity)),S.addColorStop("1.0",r("#FFFFFF",.1)),t.setFillStyle(S)}else t.setFillStyle(r(e.color,o.opacity));if(t.setLineWidth(o.width*a.pixelRatio),A.length>1){var T=A[0],w=A[A.length-1];t.moveTo(T.x,T.y);var P=0;if("curve"===o.type)for(var k=0;k<A.length;k++){var D=A[k];if(0==P&&D.x>p&&(t.moveTo(D.x,D.y),P=1),k>0&&D.x>p&&D.x<d){var M=b(A,k-1);t.bezierCurveTo(M.ctrA.x,M.ctrA.y,M.ctrB.x,M.ctrB.y,D.x,D.y)}}else for(var L=0;L<A.length;L++){var C=A[L];0==P&&C.x>p&&(t.moveTo(C.x,C.y),P=1),L>0&&C.x>p&&C.x<d&&t.lineTo(C.x,C.y)}t.lineTo(w.x,c),t.lineTo(T.x,c),t.lineTo(T.x,T.y)}else{var F=A[0];t.moveTo(F.x-v/2,F.y),t.lineTo(F.x+v/2,F.y),t.lineTo(F.x+v/2,c),t.lineTo(F.x-v/2,c),t.moveTo(F.x-v/2,F.y)}if(t.closePath(),t.fill(),o.addLine){if("dash"==e.lineType){var O=e.dashLength?e.dashLength:8;O*=a.pixelRatio,t.setLineDash([O,O])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(o.width*a.pixelRatio),1===A.length)t.moveTo(A[0].x,A[0].y),t.arc(A[0].x,A[0].y,1,0,2*Math.PI);else{t.moveTo(A[0].x,A[0].y);var R=0;if("curve"===o.type)for(var I=0;I<A.length;I++){var E=A[I];if(0==R&&E.x>p&&(t.moveTo(E.x,E.y),R=1),I>0&&E.x>p&&E.x<d){var $=b(A,I-1);t.bezierCurveTo($.ctrA.x,$.ctrA.y,$.ctrB.x,$.ctrB.y,E.x,E.y)}}else for(var z=0;z<A.length;z++){var B=A[z];0==R&&B.x>p&&(t.moveTo(B.x,B.y),R=1),z>0&&B.x>p&&B.x<d&&t.lineTo(B.x,B.y)}t.moveTo(A[0].x,A[0].y)}t.stroke(),t.setLineDash([])}}!1!==a.dataPointShape&&se(y,e.color,e.pointShape,t,a)}),!1!==a.dataLabel&&1===n&&e.forEach(function(e,i){var r,o,u;r=[].concat(a.chartData.yAxisData.ranges[e.index]),o=r.pop(),u=r.shift();var c=e.data,b=le(c,o,u,s,v,a,l,n);ce(b,e,l,t)}),t.restore(),{xAxisPoints:s,calPoints:h,eachSpacing:v}}function Se(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=i({},{type:"straight",width:2},a.extra.line);r.width*=a.pixelRatio;var o=a.chartData.xAxisData,u=o.xAxisPoints,s=o.eachSpacing,v=[];t.save();var c=0,h=a.width+s;return a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(t.translate(a._scrollDistance_,0),c=-a._scrollDistance_-s+a.area[3],h=c+(a.xAxis.itemCount+4)*s),e.forEach(function(e,i){var o,p,d;o=[].concat(a.chartData.yAxisData.ranges[e.index]),p=o.pop(),d=o.shift();var f=e.data,g=le(f,p,d,u,s,a,l,n);v.push(g);var x=j(g);if("dash"==e.lineType){var y=e.dashLength?e.dashLength:8;y*=a.pixelRatio,t.setLineDash([y,y])}t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(r.width),x.forEach(function(e,a){if(1===e.length)t.moveTo(e[0].x,e[0].y),t.arc(e[0].x,e[0].y,1,0,2*Math.PI);else{t.moveTo(e[0].x,e[0].y);var l=0;if("curve"===r.type)for(var i=0;i<e.length;i++){var n=e[i];if(0==l&&n.x>c&&(t.moveTo(n.x,n.y),l=1),i>0&&n.x>c&&n.x<h){var o=b(e,i-1);t.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,n.x,n.y)}}else for(var u=0;u<e.length;u++){var s=e[u];0==l&&s.x>c&&(t.moveTo(s.x,s.y),l=1),u>0&&s.x>c&&s.x<h&&t.lineTo(s.x,s.y)}t.moveTo(e[0].x,e[0].y)}}),t.stroke(),t.setLineDash([]),!1!==a.dataPointShape&&se(g,e.color,e.pointShape,t,a)}),!1!==a.dataLabel&&1===n&&e.forEach(function(e,i){var r,o,v;r=[].concat(a.chartData.yAxisData.ranges[e.index]),o=r.pop(),v=r.shift();var c=e.data,b=le(c,o,v,u,s,a,l,n);ce(b,e,l,t)}),t.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:s}}function Te(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.chartData.xAxisData,o=n.xAxisPoints,u=n.eachSpacing,s=a.height-a.area[2],v=[],c=0,h=0;e.forEach(function(e,a){"column"==e.type&&(h+=1)}),t.save();var p=-2,d=o.length+2,f=0,g=a.width+u;if(a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(t.translate(a._scrollDistance_,0),p=Math.floor(-a._scrollDistance_/u)-2,d=p+a.xAxis.itemCount+4,f=-a._scrollDistance_-u+a.area[3],g=f+(a.xAxis.itemCount+4)*u),e.forEach(function(e,n){var x,y,m;x=[].concat(a.chartData.yAxisData.ranges[e.index]),y=x.pop(),m=x.shift();var _=e.data,A=le(_,y,m,o,u,a,l,i);if(v.push(A),"column"==e.type){A=K(A,u,h,c,l,a);for(var S=0;S<A.length;S++){var T=A[S];if(null!==T&&S>p&&S<d){t.beginPath(),t.setStrokeStyle(T.color||e.color),t.setLineWidth(1),t.setFillStyle(T.color||e.color);var w=T.x-T.width/2;a.height,T.y,a.area[2];t.moveTo(w,T.y),t.moveTo(w-1,T.y),t.lineTo(w+T.width-2,T.y),t.lineTo(w+T.width-2,a.height-a.area[2]),t.lineTo(w,a.height-a.area[2]),t.lineTo(w,T.y),t.closePath(),t.stroke(),t.fill(),t.closePath(),t.fill()}}c+=1}if("area"==e.type)for(var P=j(A),k=0;k<P.length;k++){var D=P[k];if(t.beginPath(),t.setStrokeStyle(e.color),t.setFillStyle(r(e.color,.2)),t.setLineWidth(2*a.pixelRatio),D.length>1){var M=D[0],L=D[D.length-1];t.moveTo(M.x,M.y);var C=0;if("curve"===e.style)for(var F=0;F<D.length;F++){var O=D[F];if(0==C&&O.x>f&&(t.moveTo(O.x,O.y),C=1),F>0&&O.x>f&&O.x<g){var R=b(D,F-1);t.bezierCurveTo(R.ctrA.x,R.ctrA.y,R.ctrB.x,R.ctrB.y,O.x,O.y)}}else for(var I=0;I<D.length;I++){var E=D[I];0==C&&E.x>f&&(t.moveTo(E.x,E.y),C=1),I>0&&E.x>f&&E.x<g&&t.lineTo(E.x,E.y)}t.lineTo(L.x,s),t.lineTo(M.x,s),t.lineTo(M.x,M.y)}else{var $=D[0];t.moveTo($.x-u/2,$.y),t.lineTo($.x+u/2,$.y),t.lineTo($.x+u/2,s),t.lineTo($.x-u/2,s),t.moveTo($.x-u/2,$.y)}t.closePath(),t.fill()}if("line"==e.type){var z=j(A);z.forEach(function(l,i){if("dash"==e.lineType){var n=e.dashLength?e.dashLength:8;n*=a.pixelRatio,t.setLineDash([n,n])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*a.pixelRatio),1===l.length)t.moveTo(l[0].x,l[0].y),t.arc(l[0].x,l[0].y,1,0,2*Math.PI);else{t.moveTo(l[0].x,l[0].y);var r=0;if("curve"==e.style)for(var o=0;o<l.length;o++){var u=l[o];if(0==r&&u.x>f&&(t.moveTo(u.x,u.y),r=1),o>0&&u.x>f&&u.x<g){var s=b(l,o-1);t.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,u.x,u.y)}}else for(var v=0;v<l.length;v++){var c=l[v];0==r&&c.x>f&&(t.moveTo(c.x,c.y),r=1),v>0&&c.x>f&&c.x<g&&t.lineTo(c.x,c.y)}t.moveTo(l[0].x,l[0].y)}t.stroke(),t.setLineDash([])})}"point"==e.type&&(e.addPoint=!0),1==e.addPoint&&"column"!==e.type&&se(A,e.color,e.pointShape,t,a)}),!1!==a.dataLabel&&1===i){c=0;e.forEach(function(e,n){var r,s,v;r=[].concat(a.chartData.yAxisData.ranges[e.index]),s=r.pop(),v=r.shift();var b=e.data,p=le(b,s,v,o,u,a,l,i);"column"!==e.type?ce(p,e,l,t):(p=K(p,u,h,c,l,a),ce(p,e,l,t),c+=1)})}return t.restore(),{xAxisPoints:o,calPoints:v,eachSpacing:u}}function we(e,a,l,t,i,n){var r=e.extra.tooltip||{};r.horizentalLine&&e.tooltip&&1===t&&("line"==e.type||"area"==e.type||"column"==e.type||"candle"==e.type||"mix"==e.type)&&ge(e,a,l,i,n),l.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&l.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===t&&ye(e.tooltip.textList,e.tooltip.offset,e,a,l,i,n),l.restore()}function Pe(e,a,l,t){var i=a.chartData.xAxisData,n=i.xAxisPoints,r=i.startX,o=i.endX,u=i.eachSpacing,s="center";"line"!=a.type&&"area"!=a.type||(s=a.xAxis.boundaryGap);var v=a.height-a.area[2],b=a.area[0];if(a.enableScroll&&a.xAxis.scrollShow){var h=a.height-a.area[2]+l.xAxisHeight,p=o-r,d=u*(n.length-1),f=p*p/d,x=0;a._scrollDistance_&&(x=-a._scrollDistance_*p/d),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*a.pixelRatio),t.setStrokeStyle(a.xAxis.scrollBackgroundColor||"#EFEBEF"),t.moveTo(r,h),t.lineTo(o,h),t.stroke(),t.closePath(),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*a.pixelRatio),t.setStrokeStyle(a.xAxis.scrollColor||"#A6A6A6"),t.moveTo(r+x,h),t.lineTo(r+x+f,h),t.stroke(),t.closePath(),t.setLineCap("butt")}if(t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&t.translate(a._scrollDistance_,0),!0===a.xAxis.calibration&&(t.setStrokeStyle(a.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*a.pixelRatio),n.forEach(function(e,l){l>0&&(t.beginPath(),t.moveTo(e-u/2,v),t.lineTo(e-u/2,v+3*a.pixelRatio),t.closePath(),t.stroke())})),!0!==a.xAxis.disableGrid&&(t.setStrokeStyle(a.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*a.pixelRatio),"dash"==a.xAxis.gridType&&t.setLineDash([a.xAxis.dashLength,a.xAxis.dashLength]),a.xAxis.gridEval=a.xAxis.gridEval||1,n.forEach(function(e,l){l%a.xAxis.gridEval==0&&(t.beginPath(),t.moveTo(e,v),t.lineTo(e,b),t.stroke())}),t.setLineDash([])),!0!==a.xAxis.disabled){var y=e.length;a.xAxis.labelCount&&(y=a.xAxis.itemCount?Math.ceil(e.length/a.xAxis.itemCount*a.xAxis.labelCount):a.xAxis.labelCount,y-=1);for(var m=Math.ceil(e.length/y),_=[],A=e.length,S=0;S<A;S++)S%m!==0?_.push(""):_.push(e[S]);_[A-1]=e[A-1];var T=a.xAxis.fontSize||l.fontSize;0===l._xAxisTextAngle_?_.forEach(function(e,i){var r=-g(String(e),T)/2;"center"==s&&(r+=u/2);var o=0;a.xAxis.scrollShow&&(o=6*a.pixelRatio),t.beginPath(),t.setFontSize(T),t.setFillStyle(a.xAxis.fontColor||"#666666"),t.fillText(String(e),n[i]+r,v+T+(l.xAxisHeight-o-T)/2),t.closePath(),t.stroke()}):_.forEach(function(e,i){t.save(),t.beginPath(),t.setFontSize(T),t.setFillStyle(a.xAxis.fontColor||"#666666");var r=g(String(e),T),o=-r;"center"==s&&(o+=u/2);var b=c(n[i]+u/2,v+T/2+5,a.height),h=b.transX,p=b.transY;t.rotate(-1*l._xAxisTextAngle_),t.translate(h,p),t.fillText(String(e),n[i]+o,v+T+5),t.closePath(),t.stroke(),t.restore()})}t.restore(),a.xAxis.axisLine&&(t.beginPath(),t.setStrokeStyle(a.xAxis.axisLineColor),t.setLineWidth(1*a.pixelRatio),t.moveTo(r,a.height-a.area[2]),t.lineTo(o,a.height-a.area[2]),t.stroke())}function ke(e,a,l,t){if(!0!==a.yAxis.disableGrid){for(var i=a.height-a.area[0]-a.area[2],n=i/a.yAxis.splitNumber,r=a.area[3],o=a.chartData.xAxisData.xAxisPoints,u=a.chartData.xAxisData.eachSpacing,s=u*(o.length-1),v=r+s,c=[],b=0;b<a.yAxis.splitNumber+1;b++)c.push(a.height-a.area[2]-n*b);t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&t.translate(a._scrollDistance_,0),"dash"==a.yAxis.gridType&&t.setLineDash([a.yAxis.dashLength,a.yAxis.dashLength]),t.setStrokeStyle(a.yAxis.gridColor),t.setLineWidth(1*a.pixelRatio),c.forEach(function(e,a){t.beginPath(),t.moveTo(r,e),t.lineTo(v,e),t.stroke()}),t.setLineDash([]),t.restore()}}function De(e,a,l,t){if(!0!==a.yAxis.disabled){var i=a.height-a.area[0]-a.area[2],n=i/a.yAxis.splitNumber,r=a.area[3],o=a.width-a.area[1],u=a.height-a.area[2],s=u+l.xAxisHeight;a.xAxis.scrollShow&&(s-=3*a.pixelRatio),a.xAxis.rotateLabel&&(s=a.height-a.area[2]+3),t.beginPath(),t.setFillStyle(a.background||"#ffffff"),a._scrollDistance_<0&&t.fillRect(0,0,r,s),1==a.enableScroll&&t.fillRect(o,0,a.width,s),t.closePath(),t.stroke();for(var v=[],c=0;c<=a.yAxis.splitNumber;c++)v.push(a.area[0]+n*c);for(var b=a.area[3],h=a.width-a.area[1],p=function(e){var i=a.yAxis.data[e];if(!0!==i.disabled){var n=a.chartData.yAxisData.rangesFormat[e],r=i.fontSize||l.fontSize,o=a.chartData.yAxisData.yAxisWidth[e];if(n.forEach(function(e,l){var n=v[l]?v[l]:u;t.beginPath(),t.setFontSize(r),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(i.axisLineColor||"#cccccc"),t.setFillStyle(i.fontColor||"#666666"),"left"==o.position?(t.fillText(String(e),b-o.width,n+r/2),1==i.calibration&&(t.moveTo(b,n),t.lineTo(b-3*a.pixelRatio,n))):(t.fillText(String(e),h+4*a.pixelRatio,n+r/2),1==i.calibration&&(t.moveTo(h,n),t.lineTo(h+3*a.pixelRatio,n))),t.closePath(),t.stroke()}),!1!==i.axisLine&&(t.beginPath(),t.setStrokeStyle(i.axisLineColor||"#cccccc"),t.setLineWidth(1*a.pixelRatio),"left"==o.position?(t.moveTo(b,a.height-a.area[2]),t.lineTo(b,a.area[0])):(t.moveTo(h,a.height-a.area[2]),t.lineTo(h,a.area[0])),t.stroke()),a.yAxis.showTitle){var s=i.titleFontSize||l.fontSize,c=i.title;t.beginPath(),t.setFontSize(s),t.setFillStyle(i.titleFontColor||"#666666"),"left"==o.position?t.fillText(c,b-g(c,s)/2,a.area[0]-10*a.pixelRatio):t.fillText(c,h-g(c,s)/2,a.area[0]-10*a.pixelRatio),t.closePath(),t.stroke()}"left"==o.position?b-=o.width+a.yAxis.padding:h+=o.width+a.yAxis.padding}},d=0;d<a.yAxis.data.length;d++)p(d)}}function Me(e,a,l,t,i){if(!1!==a.legend.show){var n=i.legendData,r=n.points,o=n.area,u=a.legend.padding,s=a.legend.fontSize,v=15*a.pixelRatio,c=5*a.pixelRatio,b=a.legend.itemGap,h=Math.max(a.legend.lineHeight*a.pixelRatio,s);t.beginPath(),t.setLineWidth(a.legend.borderWidth),t.setStrokeStyle(a.legend.borderColor),t.setFillStyle(a.legend.backgroundColor),t.moveTo(o.start.x,o.start.y),t.rect(o.start.x,o.start.y,o.width,o.height),t.closePath(),t.fill(),t.stroke(),r.forEach(function(e,i){var r=0,p=0;r=n.widthArr[i],p=n.heightArr[i];var d=0,f=0;"top"==a.legend.position||"bottom"==a.legend.position?(d=o.start.x+(o.width-r)/2,f=o.start.y+u+i*h):(r=0==i?0:n.widthArr[i-1],d=o.start.x+u+r,f=o.start.y+u+(o.height-p)/2),t.setFontSize(l.fontSize);for(var x=0;x<e.length;x++){var y=e[x];switch(y.area=[0,0,0,0],y.area[0]=d,y.area[1]=f,y.area[3]=f+h,t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(y.show?y.color:a.legend.hiddenColor),t.setFillStyle(y.show?y.color:a.legend.hiddenColor),y.legendShape){case"line":t.moveTo(d,f+.5*h-2*a.pixelRatio),t.fillRect(d,f+.5*h-2*a.pixelRatio,15*a.pixelRatio,4*a.pixelRatio);break;case"triangle":t.moveTo(d+7.5*a.pixelRatio,f+.5*h-5*a.pixelRatio),t.lineTo(d+2.5*a.pixelRatio,f+.5*h+5*a.pixelRatio),t.lineTo(d+12.5*a.pixelRatio,f+.5*h+5*a.pixelRatio),t.lineTo(d+7.5*a.pixelRatio,f+.5*h-5*a.pixelRatio);break;case"diamond":t.moveTo(d+7.5*a.pixelRatio,f+.5*h-5*a.pixelRatio),t.lineTo(d+2.5*a.pixelRatio,f+.5*h),t.lineTo(d+7.5*a.pixelRatio,f+.5*h+5*a.pixelRatio),t.lineTo(d+12.5*a.pixelRatio,f+.5*h),t.lineTo(d+7.5*a.pixelRatio,f+.5*h-5*a.pixelRatio);break;case"circle":t.moveTo(d+7.5*a.pixelRatio,f+.5*h),t.arc(d+7.5*a.pixelRatio,f+.5*h,5*a.pixelRatio,0,2*Math.PI);break;case"rect":t.moveTo(d,f+.5*h-5*a.pixelRatio),t.fillRect(d,f+.5*h-5*a.pixelRatio,15*a.pixelRatio,10*a.pixelRatio);break;default:t.moveTo(d,f+.5*h-5*a.pixelRatio),t.fillRect(d,f+.5*h-5*a.pixelRatio,15*a.pixelRatio,10*a.pixelRatio)}t.closePath(),t.fill(),t.stroke(),d+=v+c;var m=.5*h+.5*s-2;t.beginPath(),t.setFontSize(s),t.setFillStyle(y.show?a.legend.fontColor:a.legend.hiddenColor),t.fillText(y.name,d,f+m),t.closePath(),t.stroke(),"top"==a.legend.position||"bottom"==a.legend.position?(d+=g(y.name,s)+b,y.area[2]=d):(y.area[2]=d+g(y.name,s)+b,d-=v+c,f+=h)}})}}function Le(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=i({},{activeOpacity:.5,activeRadius:10*a.pixelRatio,offsetAngle:0,labelWidth:15*a.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},a.extra.pie),u={x:a.area[3]+(a.width-a.area[1]-a.area[3])/2,y:a.area[0]+(a.height-a.area[0]-a.area[2])/2};0==l.pieChartLinePadding&&(l.pieChartLinePadding=o.activeRadius);var s=Math.min((a.width-a.area[1]-a.area[3])/2-l.pieChartLinePadding-l.pieChartTextPadding-l._pieTextMaxLength_,(a.height-a.area[0]-a.area[2])/2-l.pieChartLinePadding-l.pieChartTextPadding);e=U(e,s,n);var v=o.activeRadius;if(e=e.map(function(e){return e._start_+=o.offsetAngle*Math.PI/180,e}),e.forEach(function(e,l){a.tooltip&&a.tooltip.index==l&&(t.beginPath(),t.setFillStyle(r(e.color,a.extra.pie.activeOpacity||.5)),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_+v,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(o.borderWidth*a.pixelRatio),t.lineJoin="round",t.setStrokeStyle(o.borderColor),t.setFillStyle(e.color),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),1==o.border&&t.stroke()}),"ring"===a.type){var c=.6*s;"number"===typeof a.extra.pie.ringWidth&&a.extra.pie.ringWidth>0&&(c=Math.max(0,s-a.extra.pie.ringWidth)),t.beginPath(),t.setFillStyle(a.background||"#ffffff"),t.moveTo(u.x,u.y),t.arc(u.x,u.y,c,0,2*Math.PI),t.closePath(),t.fill()}if(!1!==a.dataLabel&&1===n){for(var b=!1,h=0,p=e.length;h<p;h++)if(e[h].data>0){b=!0;break}b&&pe(e,a,l,t,s,u)}return 1===n&&"ring"===a.type&&ve(a,l,t,u),{center:u,radius:s,series:e}}function Ce(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=i({},{type:"area",activeOpacity:.5,activeRadius:10*a.pixelRatio,offsetAngle:0,labelWidth:15*a.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},a.extra.rose);0==l.pieChartLinePadding&&(l.pieChartLinePadding=o.activeRadius);var u={x:a.area[3]+(a.width-a.area[1]-a.area[3])/2,y:a.area[0]+(a.height-a.area[0]-a.area[2])/2},s=Math.min((a.width-a.area[1]-a.area[3])/2-l.pieChartLinePadding-l.pieChartTextPadding-l._pieTextMaxLength_,(a.height-a.area[0]-a.area[2])/2-l.pieChartLinePadding-l.pieChartTextPadding),v=o.minRadius||.5*s;e=V(e,o.type,v,s,n);var c=o.activeRadius;if(e=e.map(function(e){return e._start_+=(o.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,l){a.tooltip&&a.tooltip.index==l&&(t.beginPath(),t.setFillStyle(r(e.color,o.activeOpacity||.5)),t.moveTo(u.x,u.y),t.arc(u.x,u.y,c+e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(o.borderWidth*a.pixelRatio),t.lineJoin="round",t.setStrokeStyle(o.borderColor),t.setFillStyle(e.color),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill(),1==o.border&&t.stroke()}),!1!==a.dataLabel&&1===n){for(var b=!1,h=0,p=e.length;h<p;h++)if(e[h].data>0){b=!0;break}b&&pe(e,a,l,t,s,u)}return{center:u,radius:s,series:e}}function Fe(e,a,l,t){var n,r,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=i({},{startAngle:.75,endAngle:.25,type:"default",width:12*a.pixelRatio,gap:2*a.pixelRatio},a.extra.arcbar);e=X(e,u,o),n=u.center?u.center:{x:a.width/2,y:a.height/2},u.radius?r=u.radius:(r=Math.min(n.x,n.y),r-=5*a.pixelRatio,r-=u.width/2);for(var s=0;s<e.length;s++){var v=e[s];t.setLineWidth(u.width),t.setStrokeStyle(u.backgroundColor||"#E9E9E9"),t.setLineCap("round"),t.beginPath(),"default"==u.type?t.arc(n.x,n.y,r-(u.width+u.gap)*s,u.startAngle*Math.PI,u.endAngle*Math.PI,!1):t.arc(n.x,n.y,r-(u.width+u.gap)*s,0,2*Math.PI,!1),t.stroke(),t.setLineWidth(u.width),t.setStrokeStyle(v.color),t.setLineCap("round"),t.beginPath(),t.arc(n.x,n.y,r-(u.width+u.gap)*s,u.startAngle*Math.PI,v._proportion_*Math.PI,!1),t.stroke()}return ve(a,l,t,n),{center:n,radius:r,series:e}}function Oe(e,a,l,t,n){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=i({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},l.extra.gauge);void 0==u.oldAngle&&(u.oldAngle=u.startAngle),void 0==u.oldData&&(u.oldData=0),e=G(e,u.startAngle,u.endAngle);var s={x:l.width/2,y:l.height/2},v=Math.min(s.x,s.y);v-=5*l.pixelRatio,v-=u.width/2;var c=v-u.width,b=0;if("progress"==u.type){var h=v-3*u.width;n.beginPath();var p=n.createLinearGradient(s.x,s.y-h,s.x,s.y+h);p.addColorStop("0",r(a[0].color,.3)),p.addColorStop("1.0",r("#FFFFFF",.1)),n.setFillStyle(p),n.arc(s.x,s.y,h,0,2*Math.PI,!1),n.fill(),n.setLineWidth(u.width),n.setStrokeStyle(r(a[0].color,.3)),n.setLineCap("round"),n.beginPath(),n.arc(s.x,s.y,c,u.startAngle*Math.PI,u.endAngle*Math.PI,!1),n.stroke(),b=u.startAngle-u.endAngle+1;u.splitLine.splitNumber;var d=b/u.splitLine.splitNumber/u.splitLine.childNumber,f=-v-.5*u.width-u.splitLine.fixRadius,g=-v-u.width-u.splitLine.fixRadius+u.splitLine.width;n.save(),n.translate(s.x,s.y),n.rotate((u.startAngle-1)*Math.PI);for(var x=u.splitLine.splitNumber*u.splitLine.childNumber+1,y=a[0].data*o,m=0;m<x;m++)n.beginPath(),y>m/x?n.setStrokeStyle(r(a[0].color,1)):n.setStrokeStyle(r(a[0].color,.3)),n.setLineWidth(3*l.pixelRatio),n.moveTo(f,0),n.lineTo(g,0),n.stroke(),n.rotate(d*Math.PI);n.restore(),a=X(a,u,o),n.setLineWidth(u.width),n.setStrokeStyle(a[0].color),n.setLineCap("round"),n.beginPath(),n.arc(s.x,s.y,c,u.startAngle*Math.PI,a[0]._proportion_*Math.PI,!1),n.stroke();var _=v-2.5*u.width;n.save(),n.translate(s.x,s.y),n.rotate((a[0]._proportion_-1)*Math.PI),n.beginPath(),n.setLineWidth(u.width/3);var A=n.createLinearGradient(0,.6*-_,0,.6*_);A.addColorStop("0",r("#FFFFFF",0)),A.addColorStop("0.5",r(a[0].color,1)),A.addColorStop("1.0",r("#FFFFFF",0)),n.setStrokeStyle(A),n.arc(0,0,_,.85*Math.PI,1.15*Math.PI,!1),n.stroke(),n.beginPath(),n.setLineWidth(1),n.setStrokeStyle(a[0].color),n.setFillStyle(a[0].color),n.moveTo(-_-u.width/3/2,-4),n.lineTo(-_-u.width/3/2-4,0),n.lineTo(-_-u.width/3/2,4),n.lineTo(-_-u.width/3/2,-4),n.stroke(),n.fill(),n.restore()}else{n.setLineWidth(u.width),n.setLineCap("butt");for(var S=0;S<e.length;S++){var T=e[S];n.beginPath(),n.setStrokeStyle(T.color),n.arc(s.x,s.y,v,T._startAngle_*Math.PI,T._endAngle_*Math.PI,!1),n.stroke()}n.save(),b=u.startAngle-u.endAngle+1;var w=b/u.splitLine.splitNumber,P=b/u.splitLine.splitNumber/u.splitLine.childNumber,k=-v-.5*u.width-u.splitLine.fixRadius,D=-v-.5*u.width-u.splitLine.fixRadius+u.splitLine.width,M=-v-.5*u.width-u.splitLine.fixRadius+u.splitLine.childWidth;n.translate(s.x,s.y),n.rotate((u.startAngle-1)*Math.PI);for(var L=0;L<u.splitLine.splitNumber+1;L++)n.beginPath(),n.setStrokeStyle(u.splitLine.color),n.setLineWidth(2*l.pixelRatio),n.moveTo(k,0),n.lineTo(D,0),n.stroke(),n.rotate(w*Math.PI);n.restore(),n.save(),n.translate(s.x,s.y),n.rotate((u.startAngle-1)*Math.PI);for(var C=0;C<u.splitLine.splitNumber*u.splitLine.childNumber+1;C++)n.beginPath(),n.setStrokeStyle(u.splitLine.color),n.setLineWidth(1*l.pixelRatio),n.moveTo(k,0),n.lineTo(M,0),n.stroke(),n.rotate(P*Math.PI);n.restore(),a=Y(a,e,u,o);for(var F=0;F<a.length;F++){var O=a[F];n.save(),n.translate(s.x,s.y),n.rotate((O._proportion_-1)*Math.PI),n.beginPath(),n.setFillStyle(O.color),n.moveTo(u.pointer.width,0),n.lineTo(0,-u.pointer.width/2),n.lineTo(-c,0),n.lineTo(0,u.pointer.width/2),n.lineTo(u.pointer.width,0),n.closePath(),n.fill(),n.beginPath(),n.setFillStyle("#FFFFFF"),n.arc(0,0,u.pointer.width/6,0,2*Math.PI,!1),n.fill(),n.restore()}!1!==l.dataLabel&&be(u,v,s,l,t,n)}return ve(l,t,n,s),1===o&&"gauge"===l.type&&(l.extra.gauge.oldAngle=a[0]._proportion_,l.extra.gauge.oldData=a[0].data),{center:s,radius:v,innerRadius:c,categories:e,totalAngle:b}}function Re(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=i({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},a.extra.radar),u=S(a.categories.length),s={x:a.area[3]+(a.width-a.area[1]-a.area[3])/2,y:a.area[0]+(a.height-a.area[0]-a.area[2])/2},v=Math.min(s.x-(A(a.categories)+l.radarLabelTextMargin),s.y-l.radarLabelTextMargin);v-=a.padding[1],t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(o.gridColor),u.forEach(function(e){var a=h(v*Math.cos(e),v*Math.sin(e),s);t.moveTo(s.x,s.y),t.lineTo(a.x,a.y)}),t.stroke(),t.closePath();for(var c=function(e){var l={};t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(o.gridColor),u.forEach(function(a,i){var n=h(v/o.gridCount*e*Math.cos(a),v/o.gridCount*e*Math.sin(a),s);0===i?(l=n,t.moveTo(n.x,n.y)):t.lineTo(n.x,n.y)}),t.lineTo(l.x,l.y),t.stroke(),t.closePath()},b=1;b<=o.gridCount;b++)c(b);var p=H(u,s,v,e,a,n);return p.forEach(function(e,l){if(t.beginPath(),t.setFillStyle(r(e.color,o.opacity)),e.data.forEach(function(e,a){0===a?t.moveTo(e.position.x,e.position.y):t.lineTo(e.position.x,e.position.y)}),t.closePath(),t.fill(),!1!==a.dataPointShape){var i=e.data.map(function(e){return e.position});se(i,e.color,e.pointShape,t,a)}}),he(u,v,s,a,l,t),{center:s,radius:v,angleList:u}}function Ie(e,a,l){l=0==l?1:l;for(var t=[],i=0;i<l;i++)t[i]=Math.random();return Math.floor(t.reduce(function(e,a){return e+a})/l*(a-e))+e}function Ee(e,a,l,t){for(var i=!1,n=0;n<a.length;n++)if(a[n].area){if(!(e[3]<a[n].area[1]||e[0]>a[n].area[2]||e[1]>a[n].area[3]||e[2]<a[n].area[0])){i=!0;break}if(e[0]<0||e[1]<0||e[2]>l||e[3]>t){i=!0;break}i=!1}return i}function $e(e){var a,l={};l.xMin=180,l.xMax=0,l.yMin=90,l.yMax=0;for(var t=0;t<e.length;t++)for(var i=e[t].geometry.coordinates,n=0;n<i.length;n++){a=i[n],1==a.length&&(a=a[0]);for(var r=0;r<a.length;r++){var o=a[r][0],u=a[r][1],s={x:o,y:u};l.xMin=l.xMin<s.x?l.xMin:s.x,l.xMax=l.xMax>s.x?l.xMax:s.x,l.yMin=l.yMin<s.y?l.yMin:s.y,l.yMax=l.yMax>s.y?l.yMax:s.y}}return l}function je(e,a,l,t,i,n){return{x:(a-l.xMin)*t+i,y:(l.yMax-e)*t+n}}function ze(e,a,l,t,i,n){return{x:(a-i)/t+l.xMin,y:l.yMax-(e-n)/t}}function Be(e,a,l){if(a[1]==l[1])return!1;if(a[1]>e[1]&&l[1]>e[1])return!1;if(a[1]<e[1]&&l[1]<e[1])return!1;if(a[1]==e[1]&&l[1]>e[1])return!1;if(l[1]==e[1]&&a[1]>e[1])return!1;if(a[0]<e[0]&&l[1]<e[1])return!1;var t=l[0]-(l[0]-a[0])*(l[1]-e[1])/(l[1]-a[1]);return!(t<e[0])}function Ne(e,a){for(var l=0,t=0;t<a.length;t++){var i=a[t][0];1==a.length&&(i=a[t][0]);for(var n=0;n<i.length-1;n++){var r=i[n],o=i[n+1];Be(e,r,o)&&(l+=1)}}return l%2==1}function We(e,a,l,t){var n,o,u=i({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},a.extra.map),s=e,v=$e(s),c=a.width/Math.abs(v.xMax-v.xMin),b=a.height/Math.abs(v.yMax-v.yMin),h=c<b?c:b,p=a.width/2-Math.abs(v.xMax-v.xMin)/2*h,d=a.height/2-Math.abs(v.yMax-v.yMin)/2*h;t.beginPath(),t.clearRect(0,0,a.width,a.height),t.setFillStyle(a.background||"#FFFFFF"),t.rect(0,0,a.width,a.height),t.fill();for(var f=0;f<s.length;f++){t.beginPath(),t.setLineWidth(u.borderWidth*a.pixelRatio),t.setStrokeStyle(u.borderColor),t.setFillStyle(r(e[f].color,u.fillOpacity)),a.tooltip&&a.tooltip.index==f&&(t.setStrokeStyle(u.activeBorderColor),t.setFillStyle(r(u.activeFillColor,u.activeFillOpacity)));for(var x=s[f].geometry.coordinates,y=0;y<x.length;y++){n=x[y],1==n.length&&(n=n[0]);for(var m=0;m<n.length;m++)o=je(n[m][1],n[m][0],v,h,p,d),0===m?(t.beginPath(),t.moveTo(o.x,o.y)):t.lineTo(o.x,o.y);t.fill(),1==u.border&&t.stroke()}if(1==a.dataLabel){var _=s[f].properties.centroid;if(_){o=je(_[1],_[0],v,h,p,d);var A=s[f].textSize||l.fontSize,S=s[f].properties.name;t.beginPath(),t.setFontSize(A),t.setFillStyle(s[f].textColor||"#666666"),t.fillText(S,o.x-g(S,A)/2,o.y+A/2),t.closePath(),t.stroke()}}}a.chartData.mapData={bounds:v,scale:h,xoffset:p,yoffset:d},we(a,l,t,1),t.draw()}function He(e,a){var l=e.series.sort(function(e,a){return parseInt(a.textSize)-parseInt(e.textSize)});switch(a){case"normal":for(var t=0;t<l.length;t++){var i=l[t].name,n=l[t].textSize,r=g(i,n),o=void 0,u=void 0,s=void 0,v=0;while(1){v++,o=Ie(-e.width/2,e.width/2,5)-r/2,u=Ie(-e.height/2,e.height/2,5)+n/2,s=[o-5+e.width/2,u-5-n+e.height/2,o+r+5+e.width/2,u+5+e.height/2];var c=Ee(s,l,e.width,e.height);if(!c)break;if(1e3==v){s=[-100,-100,-100,-100];break}}l[t].area=s}break;case"vertical":for(var b=function(){return Math.random()>.7},h=0;h<l.length;h++){var p=l[h].name,d=l[h].textSize,f=g(p,d),x=b(),y=void 0,m=void 0,_=void 0,A=void 0,S=0;while(1){S++;var T=void 0;if(x?(y=Ie(-e.width/2,e.width/2,5)-f/2,m=Ie(-e.height/2,e.height/2,5)+d/2,_=[m-5-f+e.width/2,-y-5+e.height/2,m+5+e.width/2,-y+d+5+e.height/2],A=[e.width-(e.width/2-e.height/2)-(-y+d+5+e.height/2)-5,e.height/2-e.width/2+(m-5-f+e.width/2)-5,e.width-(e.width/2-e.height/2)-(-y+d+5+e.height/2)+d,e.height/2-e.width/2+(m-5-f+e.width/2)+f+5],T=Ee(A,l,e.height,e.width)):(y=Ie(-e.width/2,e.width/2,5)-f/2,m=Ie(-e.height/2,e.height/2,5)+d/2,_=[y-5+e.width/2,m-5-d+e.height/2,y+f+5+e.width/2,m+5+e.height/2],T=Ee(_,l,e.width,e.height)),!T)break;if(1e3==S){_=[-1e3,-1e3,-1e3,-1e3];break}}x?(l[h].area=A,l[h].areav=_):l[h].area=_,l[h].rotate=x}break}return l}function Ue(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;i({},{type:"normal",autoColors:!0},a.extra.word);t.beginPath(),t.setFillStyle(a.background||"#FFFFFF"),t.rect(0,0,a.width,a.height),t.fill(),t.save();var r=a.chartData.wordCloudData;t.translate(a.width/2,a.height/2);for(var o=0;o<r.length;o++){t.save(),r[o].rotate&&t.rotate(90*Math.PI/180);var u=r[o].name,s=r[o].textSize,v=g(u,s);t.beginPath(),t.setStrokeStyle(r[o].color),t.setFillStyle(r[o].color),t.setFontSize(s),r[o].rotate?r[o].areav[0]>0&&(a.tooltip&&a.tooltip.index==o?t.strokeText(u,(r[o].areav[0]+5-a.width/2)*n-v*(1-n)/2,(r[o].areav[1]+5+s-a.height/2)*n):t.fillText(u,(r[o].areav[0]+5-a.width/2)*n-v*(1-n)/2,(r[o].areav[1]+5+s-a.height/2)*n)):r[o].area[0]>0&&(a.tooltip&&a.tooltip.index==o?t.strokeText(u,(r[o].area[0]+5-a.width/2)*n-v*(1-n)/2,(r[o].area[1]+5+s-a.height/2)*n):t.fillText(u,(r[o].area[0]+5-a.width/2)*n-v*(1-n)/2,(r[o].area[1]+5+s-a.height/2)*n)),t.stroke(),t.restore()}t.restore()}function qe(e,a,l,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=i({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},a.extra.funnel),u=(a.height-a.area[0]-a.area[2])/e.length,s={x:a.area[3]+(a.width-a.area[1]-a.area[3])/2,y:a.height-a.area[2]},v=o.activeWidth,c=Math.min((a.width-a.area[1]-a.area[3])/2-v,(a.height-a.area[0]-a.area[2])/2-v);e=q(e,c,n),t.save(),t.translate(s.x,s.y);for(var b=0;b<e.length;b++)0==b?(a.tooltip&&a.tooltip.index==b&&(t.beginPath(),t.setFillStyle(r(e[b].color,o.activeOpacity)),t.moveTo(-v,0),t.lineTo(-e[b].radius-v,-u),t.lineTo(e[b].radius+v,-u),t.lineTo(v,0),t.lineTo(-v,0),t.closePath(),t.fill()),e[b].funnelArea=[s.x-e[b].radius,s.y-u,s.x+e[b].radius,s.y],t.beginPath(),t.setLineWidth(o.borderWidth*a.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(r(e[b].color,o.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[b].radius,-u),t.lineTo(e[b].radius,-u),t.lineTo(0,0),t.closePath(),t.fill(),1==o.border&&t.stroke()):(a.tooltip&&a.tooltip.index==b&&(t.beginPath(),t.setFillStyle(r(e[b].color,o.activeOpacity)),t.moveTo(0,0),t.lineTo(-e[b-1].radius-v,0),t.lineTo(-e[b].radius-v,-u),t.lineTo(e[b].radius+v,-u),t.lineTo(e[b-1].radius+v,0),t.lineTo(0,0),t.closePath(),t.fill()),e[b].funnelArea=[s.x-e[b].radius,s.y-u*(b+1),s.x+e[b].radius,s.y-u*b],t.beginPath(),t.setLineWidth(o.borderWidth*a.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(r(e[b].color,o.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[b-1].radius,0),t.lineTo(-e[b].radius,-u),t.lineTo(e[b].radius,-u),t.lineTo(e[b-1].radius,0),t.lineTo(0,0),t.closePath(),t.fill(),1==o.border&&t.stroke()),t.translate(0,-u);return t.restore(),!1!==a.dataLabel&&1===n&&Ve(e,a,t,u,o.labelAlign,v,s),{center:s,radius:c,series:e}}function Ve(e,a,l,t,i,r,o){for(var u=0;u<e.length;u++){var s=e[u],v=void 0,c=void 0,b=void 0,h=void 0,p=s.format?s.format(+s._proportion_.toFixed(2)):n.toFixed(100*s._proportion_)+"%";"right"==i?(v=0==u?(s.funnelArea[2]+o.x)/2:(s.funnelArea[2]+e[u-1].funnelArea[2])/2,c=v+2*r,b=s.funnelArea[1]+t/2,h=s.textSize||a.fontSize,l.setLineWidth(1*a.pixelRatio),l.setStrokeStyle(s.color),l.setFillStyle(s.color),l.beginPath(),l.moveTo(v,b),l.lineTo(c,b),l.stroke(),l.closePath(),l.beginPath(),l.moveTo(c,b),l.arc(c,b,2,0,2*Math.PI),l.closePath(),l.fill(),l.beginPath(),l.setFontSize(h),l.setFillStyle(s.textColor||"#666666"),l.fillText(p,c+5,b+h/2-2),l.closePath(),l.stroke(),l.closePath()):(v=0==u?(s.funnelArea[0]+o.x)/2:(s.funnelArea[0]+e[u-1].funnelArea[0])/2,c=v-2*r,b=s.funnelArea[1]+t/2,h=s.textSize||a.fontSize,l.setLineWidth(1*a.pixelRatio),l.setStrokeStyle(s.color),l.setFillStyle(s.color),l.beginPath(),l.moveTo(v,b),l.lineTo(c,b),l.stroke(),l.closePath(),l.beginPath(),l.moveTo(c,b),l.arc(c,b,2,0,2*Math.PI),l.closePath(),l.fill(),l.beginPath(),l.setFontSize(h),l.setFillStyle(s.textColor||"#666666"),l.fillText(p,c-5-g(p),b+h/2-2),l.closePath(),l.stroke(),l.closePath())}}function Xe(e,a){a.draw()}var Ge={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return Math.pow(e-1,3)+1},easeInOut:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},linear:function(e){return e}};function Ye(e){this.isStop=!1,e.duration="undefined"===typeof e.duration?1e3:e.duration,e.timing=e.timing||"linear";var a=17;function l(){return"undefined"!==typeof setTimeout?function(e,a){setTimeout(function(){var a=+new Date;e(a)},a)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(e){e(null)}}var t=l(),i=null,n=function(l){if(null===l||!0===this.isStop)return e.onProcess&&e.onProcess(1),void(e.onAnimationFinish&&e.onAnimationFinish());if(null===i&&(i=l),l-i<e.duration){var r=(l-i)/e.duration,o=Ge[e.timing];r=o(r),e.onProcess&&e.onProcess(r),t(n,a)}else e.onProcess&&e.onProcess(1),e.onAnimationFinish&&e.onAnimationFinish()};n=n.bind(this),t(n,a)}function Je(e,a,l,t){var n=this,r=a.series,o=a.categories;r=d(r,a,l);var s=a.animation?a.duration:0;n.animationInstance&&n.animationInstance.stop();var v=null;if("candle"==e){var c=i({},a.extra.candle.average);c.show?(v=u(c.day,c.name,c.color,r[0].data),v=d(v,a,l),a.seriesMA=v):v=a.seriesMA?a.seriesMA=d(a.seriesMA,a,l):r}else v=r;a._series_=r=k(r),a.area=new Array(4);for(var b=0;b<4;b++)a.area[b]=a.padding[b];var h=z(v,a,l,a.chartData),p=h.area.wholeHeight,f=h.area.wholeWidth;switch(a.legend.position){case"top":a.area[0]+=p;break;case"bottom":a.area[2]+=p;break;case"left":a.area[3]+=f;break;case"right":a.area[1]+=f;break}var g={},x=0;if("line"===a.type||"column"===a.type||"area"===a.type||"mix"===a.type||"candle"===a.type){if(g=ne(r,a,l),x=g.yAxisWidth,a.yAxis.showTitle){for(var y=0,m=0;m<a.yAxis.data.length;m++)y=Math.max(y,a.yAxis.data[m].titleFontSize?a.yAxis.data[m].titleFontSize:l.fontSize);a.area[0]+=(y+6)*a.pixelRatio}for(var _=0,A=0,S=0;S<x.length;S++)"left"==x[S].position?(a.area[3]+=A>0?x[S].width+a.yAxis.padding:x[S].width,A+=1):(a.area[1]+=_>0?x[S].width+a.yAxis.padding:x[S].width,_+=1)}else l.yAxisWidth=x;if(a.chartData.yAxisData=g,a.categories&&a.categories.length){a.chartData.xAxisData=ee(a.categories,a,l);var T=B(a.categories,a,l,a.chartData.xAxisData.eachSpacing),w=T.xAxisHeight,P=T.angle;l.xAxisHeight=w,l._xAxisTextAngle_=P,a.area[2]+=w,a.chartData.categoriesData=T}else if("line"===a.type||"area"===a.type||"points"===a.type){a.chartData.xAxisData=W(r,a,l),o=a.chartData.xAxisData.rangesFormat;var D=B(o,a,l,a.chartData.xAxisData.eachSpacing),M=D.xAxisHeight,L=D.angle;l.xAxisHeight=M,l._xAxisTextAngle_=L,a.area[2]+=M,a.chartData.categoriesData=D}else a.chartData.xAxisData={xAxisPoints:[]};if(a.enableScroll&&"right"==a.xAxis.scrollAlign&&void 0===a._scrollDistance_){var C=0,F=a.chartData.xAxisData.xAxisPoints,O=a.chartData.xAxisData.startX,R=a.chartData.xAxisData.endX,I=a.chartData.xAxisData.eachSpacing,E=I*(F.length-1),$=R-O;C=$-E,n.scrollOption={currentOffset:C,startTouchX:C,distance:0,lastMoveTime:0},a._scrollDistance_=C}switch("pie"!==e&&"ring"!==e&&"rose"!==e||(l._pieTextMaxLength_=!1===a.dataLabel?0:J(v)),e){case"word":var j=i({},{type:"normal",autoColors:!0},a.extra.word);1!=a.updateData&&void 0!=a.updateData||(a.chartData.wordCloudData=He(a,j.type)),this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),Ue(r,a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"map":t.clearRect(0,0,a.width,a.height),We(r,a,l,t);break;case"funnel":this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),a.chartData.funnelData=qe(r,a,l,t,e),Me(a.series,a,l,t,a.chartData),we(a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Ye({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),ke(o,a,l,t),Pe(o,a,l,t);var i=Se(r,a,l,t,e),n=i.xAxisPoints,u=i.calPoints,s=i.eachSpacing;a.chartData.xAxisPoints=n,a.chartData.calPoints=u,a.chartData.eachSpacing=s,De(r,a,l,t),!1!==a.enableMarkLine&&1===e&&fe(a,l,t),Me(a.series,a,l,t,a.chartData),we(a,l,t,e,s,n),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Ye({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),ke(o,a,l,t),Pe(o,a,l,t);var i=Te(r,a,l,t,e),n=i.xAxisPoints,u=i.calPoints,s=i.eachSpacing;a.chartData.xAxisPoints=n,a.chartData.calPoints=u,a.chartData.eachSpacing=s,De(r,a,l,t),!1!==a.enableMarkLine&&1===e&&fe(a,l,t),Me(a.series,a,l,t,a.chartData),we(a,l,t,e,s,n),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Ye({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),ke(o,a,l,t),Pe(o,a,l,t);var i=me(r,a,l,t,e),n=i.xAxisPoints,u=i.calPoints,s=i.eachSpacing;a.chartData.xAxisPoints=n,a.chartData.calPoints=u,a.chartData.eachSpacing=s,De(r,a,l,t),!1!==a.enableMarkLine&&1===e&&fe(a,l,t),Me(a.series,a,l,t,a.chartData),we(a,l,t,e,s,n),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Ye({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),ke(o,a,l,t),Pe(o,a,l,t);var i=Ae(r,a,l,t,e),n=i.xAxisPoints,u=i.calPoints,s=i.eachSpacing;a.chartData.xAxisPoints=n,a.chartData.calPoints=u,a.chartData.eachSpacing=s,De(r,a,l,t),!1!==a.enableMarkLine&&1===e&&fe(a,l,t),Me(a.series,a,l,t,a.chartData),we(a,l,t,e,s,n),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),a.chartData.pieData=Le(r,a,l,t,e),Me(a.series,a,l,t,a.chartData),we(a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),a.chartData.pieData=Ce(r,a,l,t,e),Me(a.series,a,l,t,a.chartData),we(a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),a.chartData.radarData=Re(r,a,l,t,e),Me(a.series,a,l,t,a.chartData),we(a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),a.chartData.arcbarData=Fe(r,a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Ye({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),a.chartData.gaugeData=Oe(o,r,a,l,t,e),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Ye({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,a.width,a.height),a.rotate&&ue(t,a),ke(o,a,l,t),Pe(o,a,l,t);var i=_e(r,v,a,l,t,e),n=i.xAxisPoints,u=i.calPoints,s=i.eachSpacing;a.chartData.xAxisPoints=n,a.chartData.calPoints=u,a.chartData.eachSpacing=s,De(r,a,l,t),!1!==a.enableMarkLine&&1===e&&fe(a,l,t),Me(v||a.series,a,l,t,a.chartData),we(a,l,t,e,s,n),Xe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break}}function Ke(){this.events={}}Ye.prototype.stop=function(){this.isStop=!0},Ke.prototype.addEventListener=function(e,a){this.events[e]=this.events[e]||[],this.events[e].push(a)},Ke.prototype.trigger=function(){for(var e=arguments.length,l=Array(e),t=0;t<e;t++)l[t]=arguments[t];var i=l[0],n=l.slice(1);this.events[i]&&this.events[i].forEach(function(e){try{e.apply(null,n)}catch(l){console.error(a(l," at plugins\\stan-ucharts\\u-charts\\u-charts.js:5091"))}})};var Ze=function(e){e.pixelRatio=e.pixelRatio?e.pixelRatio:1,e.fontSize=e.fontSize?e.fontSize*e.pixelRatio:13*e.pixelRatio,e.title=i({},e.title),e.subtitle=i({},e.subtitle),e.duration=e.duration?e.duration:1e3,e.yAxis=i({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*e.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},e.yAxis),e.yAxis.dashLength*=e.pixelRatio,e.yAxis.padding*=e.pixelRatio,e.xAxis=i({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},e.xAxis),e.xAxis.dashLength*=e.pixelRatio,e.legend=i({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:e.fontSize,lineHeight:e.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},e.legend),e.legend.borderWidth=e.legend.borderWidth*e.pixelRatio,e.legend.itemGap=e.legend.itemGap*e.pixelRatio,e.legend.padding=e.legend.padding*e.pixelRatio,e.legend.margin=e.legend.margin*e.pixelRatio,e.extra=i({},e.extra),e.rotate=!!e.rotate,e.animation=!!e.animation,e.rotate=!!e.rotate;var a=JSON.parse(JSON.stringify(t));if(a.colors=e.colors?e.colors:a.colors,a.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?a.yAxisTitleWidth:0,"pie"!=e.type&&"ring"!=e.type||(a.pieChartLinePadding=!1===e.dataLabel?0:e.extra.pie.labelWidth*e.pixelRatio||a.pieChartLinePadding*e.pixelRatio),"rose"==e.type&&(a.pieChartLinePadding=!1===e.dataLabel?0:e.extra.rose.labelWidth*e.pixelRatio||a.pieChartLinePadding*e.pixelRatio),a.pieChartTextPadding=!1===e.dataLabel?0:a.pieChartTextPadding*e.pixelRatio,a.yAxisSplit=e.yAxis.splitNumber?e.yAxis.splitNumber:t.yAxisSplit,a.rotate=e.rotate,e.rotate){var n=e.width,r=e.height;e.width=r,e.height=n}e.padding=e.padding?e.padding:a.padding;for(var o=0;o<4;o++)e.padding[o]*=e.pixelRatio;a.yAxisWidth=t.yAxisWidth*e.pixelRatio,a.xAxisHeight=t.xAxisHeight*e.pixelRatio,e.enableScroll&&e.xAxis.scrollShow&&(a.xAxisHeight+=6*e.pixelRatio),a.xAxisLineHeight=t.xAxisLineHeight*e.pixelRatio,a.fontSize=e.fontSize,a.titleFontSize=t.titleFontSize*e.pixelRatio,a.subtitleFontSize=t.subtitleFontSize*e.pixelRatio,a.toolTipPadding=t.toolTipPadding*e.pixelRatio,a.toolTipLineHeight=t.toolTipLineHeight*e.pixelRatio,a.columePadding=t.columePadding*e.pixelRatio,e.$this=e.$this?e.$this:this,this.context=l.createCanvasContext(e.canvasId,e.$this),e.chartData={},this.event=new Ke,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=e,this.config=a,Je.call(this,e.type,e,a,this.context)};Ze.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,e),this.opts.updateData=!0;var a=e.scrollPosition||"current";switch(a){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var l=ne(this.opts.series,this.opts,this.config),t=l.yAxisWidth;this.config.yAxisWidth=t;var n=0,r=ee(this.opts.categories,this.opts,this.config),o=r.xAxisPoints,u=r.startX,s=r.endX,v=r.eachSpacing,c=v*(o.length-1),b=s-u;n=b-c,this.scrollOption={currentOffset:n,startTouchX:n,distance:0,lastMoveTime:0},this.opts._scrollDistance_=n;break}Je.call(this,this.opts.type,this.opts,this.config,this.context)},Ze.prototype.zoom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var l=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var t=ne(this.opts.series,this.opts,this.config),i=t.yAxisWidth;this.config.yAxisWidth=i;var n=0,r=ee(this.opts.categories,this.opts,this.config),o=r.xAxisPoints,u=r.startX,s=r.endX,v=r.eachSpacing,c=v*l,b=s-u,h=b-v*(o.length-1);n=b/2-c,n>0&&(n=0),n<h&&(n=h),this.scrollOption={currentOffset:n,startTouchX:n,distance:0,lastMoveTime:0},this.opts._scrollDistance_=n,Je.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(a("请启用滚动条后使用！"," at plugins\\stan-ucharts\\u-charts\\u-charts.js:5265"))},Ze.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Ze.prototype.addEventListener=function(e,a){this.event.addEventListener(e,a)},Ze.prototype.getCurrentDataIndex=function(e){var a=null;if(a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],a){var l=m(a,this.opts,e);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?E({x:l.x,y:l.y},this.opts.chartData.pieData):"radar"===this.opts.type?F({x:l.x,y:l.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?O({x:l.x,y:l.y},this.opts.chartData.funnelData):"map"===this.opts.type?I({x:l.x,y:l.y},this.opts):"word"===this.opts.type?R({x:l.x,y:l.y},this.opts.chartData.wordCloudData):D({x:l.x,y:l.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Ze.prototype.getLegendDataIndex=function(e){var a=null;if(a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],a){var l=m(a,this.opts,e);return M({x:l.x,y:l.y},this.opts.chartData.legendData)}return-1},Ze.prototype.touchLegend=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){m(l,this.opts,e);var t=this.getLegendDataIndex(e);t>=0&&(this.opts.series[t].show=!this.opts.series[t].show,this.opts.animation=!!a.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Je.call(this,this.opts.type,this.opts,this.config,this.context))}},Ze.prototype.showToolTip=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=null;t=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],t||console.log(a("touchError"," at plugins\\stan-ucharts\\u-charts\\u-charts.js:5402"));var n=m(t,this.opts,e),r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var u=this.getCurrentDataIndex(e);if(u>-1){var s=_(this.opts.series,u);if(0!==s.length){var v=T(s,this.opts.chartData.calPoints,u,this.opts.categories,l),c=v.textList,b=v.offset;b.y=n.y,o.tooltip={textList:c,offset:b,option:l,index:u}}}Je.call(this,o.type,o,this.config,this.context)}if("mix"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1}),s=_(this.opts.series,u);if(0!==s.length){var h=w(s,this.opts.chartData.calPoints,u,this.opts.categories,l);c=h.textList,b=h.offset;b.y=n.y,o.tooltip={textList:c,offset:b,option:l,index:u}}}Je.call(this,o.type,o,this.config,this.context)}if("candle"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1}),s=_(this.opts.series,u);if(0!==s.length){v=P(this.opts.series[0].data,s,this.opts.chartData.calPoints,u,this.opts.categories,this.opts.extra.candle,l),c=v.textList,b=v.offset;b.y=n.y,o.tooltip={textList:c,offset:b,option:l,index:u}}}Je.call(this,o.type,o,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1}),s=this.opts._series_[u],c=[{text:l.format?l.format(s):s.name+": "+s.data,color:s.color}],b={x:n.x,y:n.y};o.tooltip={textList:c,offset:b,option:l,index:u}}Je.call(this,o.type,o,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1}),s=this.opts._series_[u],c=[{text:l.format?l.format(s):s.properties.name,color:s.color}],b={x:n.x,y:n.y};o.tooltip={textList:c,offset:b,option:l,index:u}}o.updateData=!1,Je.call(this,o.type,o,this.config,this.context)}if("radar"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1}),s=_(this.opts.series,u);if(0!==s.length){c=s.map(function(e){return{text:l.format?l.format(e):e.name+": "+e.data,color:e.color}}),b={x:n.x,y:n.y};o.tooltip={textList:c,offset:b,option:l,index:u}}}Je.call(this,o.type,o,this.config,this.context)}},Ze.prototype.translate=function(e){this.scrollOption={currentOffset:e,startTouchX:e,distance:0,lastMoveTime:0};var a=i({},this.opts,{_scrollDistance_:e,animation:!1});Je.call(this,this.opts.type,a,this.config,this.context)},Ze.prototype.scrollStart=function(e){var a=null;a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0];var l=m(a,this.opts,e);a&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=l.x)},Ze.prototype.scroll=function(e){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var a=this.opts.extra.touchMoveLimit||20,l=Date.now(),t=l-this.scrollOption.lastMoveTime;if(!(t<Math.floor(1e3/a))){this.scrollOption.lastMoveTime=l;var n=null;if(n=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],n&&!0===this.opts.enableScroll){var r,o=m(n,this.opts,e);r=o.x-this.scrollOption.startTouchX;var u=this.scrollOption.currentOffset,v=s(this,u+r,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=r=v-u;var c=i({},this.opts,{_scrollDistance_:u+r,animation:!1});return Je.call(this,c.type,c,this.config,this.context),u+r}}},Ze.prototype.scrollEnd=function(e){if(!0===this.opts.enableScroll){var a=this.scrollOption,l=a.currentOffset,t=a.distance;this.scrollOption.currentOffset=l+t,this.scrollOption.distance=0}},"object"===typeof e.exports&&(e.exports=Ze)}).call(this,l("0de9")["default"],l("6e42")["default"])},6236:function(e,a,l){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n(l("a87b")),i=n(l("a5c0"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}var o={config:{baseUrl:t.default.webUrl,header:r({"Content-Type":"application/json;charset=UTF-8"},"Content-Type","application/x-www-form-urlencoded"),data:{},method:"GET",dataType:"json"},request:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(a.header=a.header||this.config.header,a.method=a.method||this.config.method,a.dataType=a.dataType||this.config.dataType,a.url=this.config.baseUrl+a.url,a.token){if(!this.checkToken(a.checkToken))return;if(!this.checkAuth(a.checkAuth))return;a.header.token=i.default.token}return e.request(a)},get:function(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.url=e,l.data=a,l.method="GET",this.request(l)},post:function(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.url=e,l.data=a,l.method="POST",this.request(l)},upload:function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(l.url=this.config.baseUrl+a,l.header=l.header||this.config.header,l.fileType=l.fileType||"image",l.formData=l.formData||{},l.filePath=l.filePath,l.name=l.name,l.token){if(!this.checkToken(l.checkToken))return;if(!this.checkAuth(l.checkAuth))return;l.header.token=i.default.token}return e.uploadFile(l)},errorCheck:function(a,l){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a?("function"===typeof t&&t(),e.showToast({title:"加载失败",icon:"none"}),!1):!l.data.errorCode||("function"===typeof t&&i(),e.showToast({title:l.data.msg,icon:"none"}),!1)},checkToken:function(a){return!(a&&!i.default.token)||(e.showToast({title:"请先登录",icon:"none"}),e.navigateTo({url:"/pages/login/login"}),!1)},checkAuth:function(a){return!(a&&!i.default.userinfo.phone)||(e.showToast({title:"请先绑定手机号码",icon:"none"}),e.navigateTo({url:"/pages/user-bind-phone/user-bind-phone"}),!1)}};a.default=o}).call(this,l("6e42")["default"])},"66fd":function(e,a,l){"use strict";l.r(a),function(e){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var l=Object.freeze({});function t(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var s=Object.prototype.toString;function v(e){return"[object Object]"===s.call(e)}function c(e){return"[object RegExp]"===s.call(e)}function b(e){var a=parseFloat(String(e));return a>=0&&Math.floor(a)===a&&isFinite(e)}function h(e){return i(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||v(e)&&e.toString===s?JSON.stringify(e,null,2):String(e)}function d(e){var a=parseFloat(e);return isNaN(a)?e:a}function f(e,a){for(var l=Object.create(null),t=e.split(","),i=0;i<t.length;i++)l[t[i]]=!0;return a?function(e){return l[e.toLowerCase()]}:function(e){return l[e]}}f("slot,component",!0);var g=f("key,ref,slot,slot-scope,is");function x(e,a){if(e.length){var l=e.indexOf(a);if(l>-1)return e.splice(l,1)}}var y=Object.prototype.hasOwnProperty;function m(e,a){return y.call(e,a)}function _(e){var a=Object.create(null);return function(l){var t=a[l];return t||(a[l]=e(l))}}var A=/-(\w)/g,S=_(function(e){return e.replace(A,function(e,a){return a?a.toUpperCase():""})}),T=_(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),w=/\B([A-Z])/g,P=_(function(e){return e.replace(w,"-$1").toLowerCase()});function k(e,a){function l(l){var t=arguments.length;return t?t>1?e.apply(a,arguments):e.call(a,l):e.call(a)}return l._length=e.length,l}function D(e,a){return e.bind(a)}var M=Function.prototype.bind?D:k;function L(e,a){a=a||0;var l=e.length-a,t=new Array(l);while(l--)t[l]=e[l+a];return t}function C(e,a){for(var l in a)e[l]=a[l];return e}function F(e){for(var a={},l=0;l<e.length;l++)e[l]&&C(a,e[l]);return a}function O(e,a,l){}var R=function(e,a,l){return!1},I=function(e){return e};function E(e,a){if(e===a)return!0;var l=u(e),t=u(a);if(!l||!t)return!l&&!t&&String(e)===String(a);try{var i=Array.isArray(e),n=Array.isArray(a);if(i&&n)return e.length===a.length&&e.every(function(e,l){return E(e,a[l])});if(e instanceof Date&&a instanceof Date)return e.getTime()===a.getTime();if(i||n)return!1;var r=Object.keys(e),o=Object.keys(a);return r.length===o.length&&r.every(function(l){return E(e[l],a[l])})}catch(s){return!1}}function $(e,a){for(var l=0;l<e.length;l++)if(E(e[l],a))return l;return-1}function j(e){var a=!1;return function(){a||(a=!0,e.apply(this,arguments))}}var z=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:R,isReservedAttr:R,isUnknownElement:R,getTagNamespace:O,parsePlatformTagName:I,mustUseProp:R,async:!0,_lifecycleHooks:B},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var a=(e+"").charCodeAt(0);return 36===a||95===a}function U(e,a,l,t){Object.defineProperty(e,a,{value:l,enumerable:!!t,writable:!0,configurable:!0})}var q=new RegExp("[^"+W.source+".$_\\d]");function V(e){if(!q.test(e)){var a=e.split(".");return function(e){for(var l=0;l<a.length;l++){if(!e)return;e=e[a[l]]}return e}}}var X,G="__proto__"in{},Y="undefined"!==typeof window,J="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=J&&WXEnvironment.platform.toLowerCase(),Z=Y&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),ae=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),le=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(Y)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(ai){}var ie=function(){return void 0===X&&(X=!Y&&!J&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),X},ne=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,ue="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);oe="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var se=O,ve=0,ce=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ve++,this.subs=[]};function be(e){ce.SharedObject.targetStack.push(e),ce.SharedObject.target=e}function he(){ce.SharedObject.targetStack.pop(),ce.SharedObject.target=ce.SharedObject.targetStack[ce.SharedObject.targetStack.length-1]}ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){x(this.subs,e)},ce.prototype.depend=function(){ce.SharedObject.target&&ce.SharedObject.target.addDep(this)},ce.prototype.notify=function(){var e=this.subs.slice();for(var a=0,l=e.length;a<l;a++)e[a].update()},ce.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ce.SharedObject.target=null,ce.SharedObject.targetStack=[];var pe=function(e,a,l,t,i,n,r,o){this.tag=e,this.data=a,this.children=l,this.text=t,this.elm=i,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=a&&a.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,de);var fe=function(e){void 0===e&&(e="");var a=new pe;return a.text=e,a.isComment=!0,a};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function xe(e){var a=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return a.ns=e.ns,a.isStatic=e.isStatic,a.key=e.key,a.isComment=e.isComment,a.fnContext=e.fnContext,a.fnOptions=e.fnOptions,a.fnScopeId=e.fnScopeId,a.asyncMeta=e.asyncMeta,a.isCloned=!0,a}var ye=Array.prototype,me=Object.create(ye),_e=["push","pop","shift","unshift","splice","sort","reverse"];_e.forEach(function(e){var a=ye[e];U(me,e,function(){var l=[],t=arguments.length;while(t--)l[t]=arguments[t];var i,n=a.apply(this,l),r=this.__ob__;switch(e){case"push":case"unshift":i=l;break;case"splice":i=l.slice(2);break}return i&&r.observeArray(i),r.dep.notify(),n})});var Ae=Object.getOwnPropertyNames(me),Se=!0;function Te(e){Se=e}var we=function(e){this.value=e,this.dep=new ce,this.vmCount=0,U(e,"__ob__",this),Array.isArray(e)?(G?e.push!==e.__proto__.push?ke(e,me,Ae):Pe(e,me):ke(e,me,Ae),this.observeArray(e)):this.walk(e)};function Pe(e,a){e.__proto__=a}function ke(e,a,l){for(var t=0,i=l.length;t<i;t++){var n=l[t];U(e,n,a[n])}}function De(e,a){var l;if(u(e)&&!(e instanceof pe))return m(e,"__ob__")&&e.__ob__ instanceof we?l=e.__ob__:Se&&!ie()&&(Array.isArray(e)||v(e))&&Object.isExtensible(e)&&!e._isVue&&(l=new we(e)),a&&l&&l.vmCount++,l}function Me(e,a,l,t,i){var n=new ce,r=Object.getOwnPropertyDescriptor(e,a);if(!r||!1!==r.configurable){var o=r&&r.get,u=r&&r.set;o&&!u||2!==arguments.length||(l=e[a]);var s=!i&&De(l);Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:function(){var a=o?o.call(e):l;return ce.SharedObject.target&&(n.depend(),s&&(s.dep.depend(),Array.isArray(a)&&Fe(a))),a},set:function(a){var t=o?o.call(e):l;a===t||a!==a&&t!==t||o&&!u||(u?u.call(e,a):l=a,s=!i&&De(a),n.notify())}})}}function Le(e,a,l){if(Array.isArray(e)&&b(a))return e.length=Math.max(e.length,a),e.splice(a,1,l),l;if(a in e&&!(a in Object.prototype))return e[a]=l,l;var t=e.__ob__;return e._isVue||t&&t.vmCount?l:t?(Me(t.value,a,l),t.dep.notify(),l):(e[a]=l,l)}function Ce(e,a){if(Array.isArray(e)&&b(a))e.splice(a,1);else{var l=e.__ob__;e._isVue||l&&l.vmCount||m(e,a)&&(delete e[a],l&&l.dep.notify())}}function Fe(e){for(var a=void 0,l=0,t=e.length;l<t;l++)a=e[l],a&&a.__ob__&&a.__ob__.dep.depend(),Array.isArray(a)&&Fe(a)}we.prototype.walk=function(e){for(var a=Object.keys(e),l=0;l<a.length;l++)Me(e,a[l])},we.prototype.observeArray=function(e){for(var a=0,l=e.length;a<l;a++)De(e[a])};var Oe=N.optionMergeStrategies;function Re(e,a){if(!a)return e;for(var l,t,i,n=ue?Reflect.ownKeys(a):Object.keys(a),r=0;r<n.length;r++)l=n[r],"__ob__"!==l&&(t=e[l],i=a[l],m(e,l)?t!==i&&v(t)&&v(i)&&Re(t,i):Le(e,l,i));return e}function Ie(e,a,l){return l?function(){var t="function"===typeof a?a.call(l,l):a,i="function"===typeof e?e.call(l,l):e;return t?Re(t,i):i}:a?e?function(){return Re("function"===typeof a?a.call(this,this):a,"function"===typeof e?e.call(this,this):e)}:a:e}function Ee(e,a){var l=a?e?e.concat(a):Array.isArray(a)?a:[a]:e;return l?$e(l):l}function $e(e){for(var a=[],l=0;l<e.length;l++)-1===a.indexOf(e[l])&&a.push(e[l]);return a}function je(e,a,l,t){var i=Object.create(e||null);return a?C(i,a):i}Oe.data=function(e,a,l){return l?Ie(e,a,l):a&&"function"!==typeof a?e:Ie(e,a)},B.forEach(function(e){Oe[e]=Ee}),z.forEach(function(e){Oe[e+"s"]=je}),Oe.watch=function(e,a,l,t){if(e===le&&(e=void 0),a===le&&(a=void 0),!a)return Object.create(e||null);if(!e)return a;var i={};for(var n in C(i,e),a){var r=i[n],o=a[n];r&&!Array.isArray(r)&&(r=[r]),i[n]=r?r.concat(o):Array.isArray(o)?o:[o]}return i},Oe.props=Oe.methods=Oe.inject=Oe.computed=function(e,a,l,t){if(!e)return a;var i=Object.create(null);return C(i,e),a&&C(i,a),i},Oe.provide=Ie;var ze=function(e,a){return void 0===a?e:a};function Be(e,a){var l=e.props;if(l){var t,i,n,r={};if(Array.isArray(l)){t=l.length;while(t--)i=l[t],"string"===typeof i&&(n=S(i),r[n]={type:null})}else if(v(l))for(var o in l)i=l[o],n=S(o),r[n]=v(i)?i:{type:i};else 0;e.props=r}}function Ne(e,a){var l=e.inject;if(l){var t=e.inject={};if(Array.isArray(l))for(var i=0;i<l.length;i++)t[l[i]]={from:l[i]};else if(v(l))for(var n in l){var r=l[n];t[n]=v(r)?C({from:n},r):{from:r}}else 0}}function We(e){var a=e.directives;if(a)for(var l in a){var t=a[l];"function"===typeof t&&(a[l]={bind:t,update:t})}}function He(e,a,l){if("function"===typeof a&&(a=a.options),Be(a,l),Ne(a,l),We(a),!a._base&&(a.extends&&(e=He(e,a.extends,l)),a.mixins))for(var t=0,i=a.mixins.length;t<i;t++)e=He(e,a.mixins[t],l);var n,r={};for(n in e)o(n);for(n in a)m(e,n)||o(n);function o(t){var i=Oe[t]||ze;r[t]=i(e[t],a[t],l,t)}return r}function Ue(e,a,l,t){if("string"===typeof l){var i=e[a];if(m(i,l))return i[l];var n=S(l);if(m(i,n))return i[n];var r=T(n);if(m(i,r))return i[r];var o=i[l]||i[n]||i[r];return o}}function qe(e,a,l,t){var i=a[e],n=!m(l,e),r=l[e],o=Ye(Boolean,i.type);if(o>-1)if(n&&!m(i,"default"))r=!1;else if(""===r||r===P(e)){var u=Ye(String,i.type);(u<0||o<u)&&(r=!0)}if(void 0===r){r=Ve(t,i,e);var s=Se;Te(!0),De(r),Te(s)}return r}function Ve(e,a,l){if(m(a,"default")){var t=a.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[l]&&void 0!==e._props[l]?e._props[l]:"function"===typeof t&&"Function"!==Xe(a.type)?t.call(e):t}}function Xe(e){var a=e&&e.toString().match(/^\s*function (\w+)/);return a?a[1]:""}function Ge(e,a){return Xe(e)===Xe(a)}function Ye(e,a){if(!Array.isArray(a))return Ge(a,e)?0:-1;for(var l=0,t=a.length;l<t;l++)if(Ge(a[l],e))return l;return-1}function Je(e,a,l){be();try{if(a){var t=a;while(t=t.$parent){var i=t.$options.errorCaptured;if(i)for(var n=0;n<i.length;n++)try{var r=!1===i[n].call(t,e,a,l);if(r)return}catch(ai){Ze(ai,t,"errorCaptured hook")}}}Ze(e,a,l)}finally{he()}}function Ke(e,a,l,t,i){var n;try{n=l?e.apply(a,l):e.call(a),n&&!n._isVue&&h(n)&&!n._handled&&(n.catch(function(e){return Je(e,t,i+" (Promise/async)")}),n._handled=!0)}catch(ai){Je(ai,t,i)}return n}function Ze(e,a,l){if(N.errorHandler)try{return N.errorHandler.call(null,e,a,l)}catch(ai){ai!==e&&Qe(ai,null,"config.errorHandler")}Qe(e,a,l)}function Qe(e,a,l){if(!Y&&!J||"undefined"===typeof console)throw e;console.error(e)}var ea,aa=[],la=!1;function ta(){la=!1;var e=aa.slice(0);aa.length=0;for(var a=0;a<e.length;a++)e[a]()}if("undefined"!==typeof Promise&&re(Promise)){var ia=Promise.resolve();ea=function(){ia.then(ta),ae&&setTimeout(O)}}else if(Q||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ea="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(ta)}:function(){setTimeout(ta,0)};else{var na=1,ra=new MutationObserver(ta),oa=document.createTextNode(String(na));ra.observe(oa,{characterData:!0}),ea=function(){na=(na+1)%2,oa.data=String(na)}}function ua(e,a){var l;if(aa.push(function(){if(e)try{e.call(a)}catch(ai){Je(ai,a,"nextTick")}else l&&l(a)}),la||(la=!0,ea()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){l=e})}var sa=new oe;function va(e){ca(e,sa),sa.clear()}function ca(e,a){var l,t,i=Array.isArray(e);if(!(!i&&!u(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var n=e.__ob__.dep.id;if(a.has(n))return;a.add(n)}if(i){l=e.length;while(l--)ca(e[l],a)}else{t=Object.keys(e),l=t.length;while(l--)ca(e[t[l]],a)}}}var ba=_(function(e){var a="&"===e.charAt(0);e=a?e.slice(1):e;var l="~"===e.charAt(0);e=l?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:l,capture:t,passive:a}});function ha(e,a){function l(){var e=arguments,t=l.fns;if(!Array.isArray(t))return Ke(t,null,arguments,a,"v-on handler");for(var i=t.slice(),n=0;n<i.length;n++)Ke(i[n],null,e,a,"v-on handler")}return l.fns=e,l}function pa(e,a,l,i,r,o){var u,s,v,c;for(u in e)s=e[u],v=a[u],c=ba(u),t(s)||(t(v)?(t(s.fns)&&(s=e[u]=ha(s,o)),n(c.once)&&(s=e[u]=r(c.name,s,c.capture)),l(c.name,s,c.capture,c.passive,c.params)):s!==v&&(v.fns=s,e[u]=v));for(u in a)t(e[u])&&(c=ba(u),i(c.name,a[u],c.capture))}function da(e,a,l,n){var r=a.options.mpOptions&&a.options.mpOptions.properties;if(t(r))return l;var o=a.options.mpOptions.externalClasses||[],u=e.attrs,s=e.props;if(i(u)||i(s))for(var v in r){var c=P(v),b=ga(l,s,v,c,!0)||ga(l,u,v,c,!1);b&&l[v]&&-1!==o.indexOf(c)&&n[S(l[v])]&&(l[v]=n[S(l[v])])}return l}function fa(e,a,l,n){var r=a.options.props;if(t(r))return da(e,a,{},n);var o={},u=e.attrs,s=e.props;if(i(u)||i(s))for(var v in r){var c=P(v);ga(o,s,v,c,!0)||ga(o,u,v,c,!1)}return da(e,a,o,n)}function ga(e,a,l,t,n){if(i(a)){if(m(a,l))return e[l]=a[l],n||delete a[l],!0;if(m(a,t))return e[l]=a[t],n||delete a[t],!0}return!1}function xa(e){for(var a=0;a<e.length;a++)if(Array.isArray(e[a]))return Array.prototype.concat.apply([],e);return e}function ya(e){return o(e)?[ge(e)]:Array.isArray(e)?_a(e):void 0}function ma(e){return i(e)&&i(e.text)&&r(e.isComment)}function _a(e,a){var l,r,u,s,v=[];for(l=0;l<e.length;l++)r=e[l],t(r)||"boolean"===typeof r||(u=v.length-1,s=v[u],Array.isArray(r)?r.length>0&&(r=_a(r,(a||"")+"_"+l),ma(r[0])&&ma(s)&&(v[u]=ge(s.text+r[0].text),r.shift()),v.push.apply(v,r)):o(r)?ma(s)?v[u]=ge(s.text+r):""!==r&&v.push(ge(r)):ma(r)&&ma(s)?v[u]=ge(s.text+r.text):(n(e._isVList)&&i(r.tag)&&t(r.key)&&i(a)&&(r.key="__vlist"+a+"_"+l+"__"),v.push(r)));return v}function Aa(e){var a=e.$options.provide;a&&(e._provided="function"===typeof a?a.call(e):a)}function Sa(e){var a=Ta(e.$options.inject,e);a&&(Te(!1),Object.keys(a).forEach(function(l){Me(e,l,a[l])}),Te(!0))}function Ta(e,a){if(e){for(var l=Object.create(null),t=ue?Reflect.ownKeys(e):Object.keys(e),i=0;i<t.length;i++){var n=t[i];if("__ob__"!==n){var r=e[n].from,o=a;while(o){if(o._provided&&m(o._provided,r)){l[n]=o._provided[r];break}o=o.$parent}if(!o)if("default"in e[n]){var u=e[n].default;l[n]="function"===typeof u?u.call(a):u}else 0}}return l}}function wa(e,a){if(!e||!e.length)return{};for(var l={},t=0,i=e.length;t<i;t++){var n=e[t],r=n.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,n.context!==a&&n.fnContext!==a||!r||null==r.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(l["page"]||(l["page"]=[])).push(n):(l.default||(l.default=[])).push(n);else{var o=r.slot,u=l[o]||(l[o]=[]);"template"===n.tag?u.push.apply(u,n.children||[]):u.push(n)}}for(var s in l)l[s].every(Pa)&&delete l[s];return l}function Pa(e){return e.isComment&&!e.asyncFactory||" "===e.text}function ka(e,a,t){var i,n=Object.keys(a).length>0,r=e?!!e.$stable:!n,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==l&&o===t.$key&&!n&&!t.$hasNormal)return t;for(var u in i={},e)e[u]&&"$"!==u[0]&&(i[u]=Da(a,u,e[u]))}else i={};for(var s in a)s in i||(i[s]=Ma(a,s));return e&&Object.isExtensible(e)&&(e._normalized=i),U(i,"$stable",r),U(i,"$key",o),U(i,"$hasNormal",n),i}function Da(e,a,l){var t=function(){var e=arguments.length?l.apply(null,arguments):l({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ya(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return l.proxy&&Object.defineProperty(e,a,{get:t,enumerable:!0,configurable:!0}),t}function Ma(e,a){return function(){return e[a]}}function La(e,a){var l,t,n,r,o;if(Array.isArray(e)||"string"===typeof e)for(l=new Array(e.length),t=0,n=e.length;t<n;t++)l[t]=a(e[t],t,t,t);else if("number"===typeof e)for(l=new Array(e),t=0;t<e;t++)l[t]=a(t+1,t,t,t);else if(u(e))if(ue&&e[Symbol.iterator]){l=[];var s=e[Symbol.iterator](),v=s.next();while(!v.done)l.push(a(v.value,l.length,t++,t)),v=s.next()}else for(r=Object.keys(e),l=new Array(r.length),t=0,n=r.length;t<n;t++)o=r[t],l[t]=a(e[o],o,t,t);return i(l)||(l=[]),l._isVList=!0,l}function Ca(e,a,l,t){var i,n=this.$scopedSlots[e];n?(l=l||{},t&&(l=C(C({},t),l)),i=n(l,this,l._i)||a):i=this.$slots[e]||a;var r=l&&l.slot;return r?this.$createElement("template",{slot:r},i):i}function Fa(e){return Ue(this.$options,"filters",e,!0)||I}function Oa(e,a){return Array.isArray(e)?-1===e.indexOf(a):e!==a}function Ra(e,a,l,t,i){var n=N.keyCodes[a]||l;return i&&t&&!N.keyCodes[a]?Oa(i,t):n?Oa(n,e):t?P(t)!==a:void 0}function Ia(e,a,l,t,i){if(l)if(u(l)){var n;Array.isArray(l)&&(l=F(l));var r=function(r){if("class"===r||"style"===r||g(r))n=e;else{var o=e.attrs&&e.attrs.type;n=t||N.mustUseProp(a,o,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var u=S(r),s=P(r);if(!(u in n)&&!(s in n)&&(n[r]=l[r],i)){var v=e.on||(e.on={});v["update:"+r]=function(e){l[r]=e}}};for(var o in l)r(o)}else;return e}function Ea(e,a){var l=this._staticTrees||(this._staticTrees=[]),t=l[e];return t&&!a?t:(t=l[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),ja(t,"__static__"+e,!1),t)}function $a(e,a,l){return ja(e,"__once__"+a+(l?"_"+l:""),!0),e}function ja(e,a,l){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&za(e[t],a+"_"+t,l);else za(e,a,l)}function za(e,a,l){e.isStatic=!0,e.key=a,e.isOnce=l}function Ba(e,a){if(a)if(v(a)){var l=e.on=e.on?C({},e.on):{};for(var t in a){var i=l[t],n=a[t];l[t]=i?[].concat(i,n):n}}else;return e}function Na(e,a,l,t){a=a||{$stable:!l};for(var i=0;i<e.length;i++){var n=e[i];Array.isArray(n)?Na(n,a,l):n&&(n.proxy&&(n.fn.proxy=!0),a[n.key]=n.fn)}return t&&(a.$key=t),a}function Wa(e,a){for(var l=0;l<a.length;l+=2){var t=a[l];"string"===typeof t&&t&&(e[a[l]]=a[l+1])}return e}function Ha(e,a){return"string"===typeof e?a+e:e}function Ua(e){e._o=$a,e._n=d,e._s=p,e._l=La,e._t=Ca,e._q=E,e._i=$,e._m=Ea,e._f=Fa,e._k=Ra,e._b=Ia,e._v=ge,e._e=fe,e._u=Na,e._g=Ba,e._d=Wa,e._p=Ha}function qa(e,a,t,i,r){var o,u=this,s=r.options;m(i,"_uid")?(o=Object.create(i),o._original=i):(o=i,i=i._original);var v=n(s._compiled),c=!v;this.data=e,this.props=a,this.children=t,this.parent=i,this.listeners=e.on||l,this.injections=Ta(s.inject,i),this.slots=function(){return u.$slots||ka(e.scopedSlots,u.$slots=wa(t,i)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ka(e.scopedSlots,this.slots())}}),v&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=ka(e.scopedSlots,this.$slots)),s._scopeId?this._c=function(e,a,l,t){var n=il(o,e,a,l,t,c);return n&&!Array.isArray(n)&&(n.fnScopeId=s._scopeId,n.fnContext=i),n}:this._c=function(e,a,l,t){return il(o,e,a,l,t,c)}}function Va(e,a,t,n,r){var o=e.options,u={},s=o.props;if(i(s))for(var v in s)u[v]=qe(v,s,a||l);else i(t.attrs)&&Ga(u,t.attrs),i(t.props)&&Ga(u,t.props);var c=new qa(t,u,r,n,e),b=o.render.call(null,c._c,c);if(b instanceof pe)return Xa(b,t,c.parent,o,c);if(Array.isArray(b)){for(var h=ya(b)||[],p=new Array(h.length),d=0;d<h.length;d++)p[d]=Xa(h[d],t,c.parent,o,c);return p}}function Xa(e,a,l,t,i){var n=xe(e);return n.fnContext=l,n.fnOptions=t,a.slot&&((n.data||(n.data={})).slot=a.slot),n}function Ga(e,a){for(var l in a)e[S(l)]=a[l]}Ua(qa.prototype);var Ya={init:function(e,a){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var l=e;Ya.prepatch(l,l)}else{var t=e.componentInstance=Za(e,Sl);t.$mount(a?e.elm:void 0,a)}},prepatch:function(e,a){var l=a.componentOptions,t=a.componentInstance=e.componentInstance;kl(t,l.propsData,l.listeners,a,l.children)},insert:function(e){var a=e.context,l=e.componentInstance;l._isMounted||(Cl(l,"onServiceCreated"),Cl(l,"onServiceAttached"),l._isMounted=!0,Cl(l,"mounted")),e.data.keepAlive&&(a._isMounted?Hl(l):Ml(l,!0))},destroy:function(e){var a=e.componentInstance;a._isDestroyed||(e.data.keepAlive?Ll(a,!0):a.$destroy())}},Ja=Object.keys(Ya);function Ka(e,a,l,r,o){if(!t(e)){var s=l.$options._base;if(u(e)&&(e=s.extend(e)),"function"===typeof e){var v;if(t(e.cid)&&(v=e,e=pl(v,s),void 0===e))return hl(v,a,l,r,o);a=a||{},bt(e),i(a.model)&&al(e.options,a);var c=fa(a,e,o,l);if(n(e.options.functional))return Va(e,c,a,l,r);var b=a.on;if(a.on=a.nativeOn,n(e.options.abstract)){var h=a.slot;a={},h&&(a.slot=h)}Qa(a);var p=e.options.name||o,d=new pe("vue-component-"+e.cid+(p?"-"+p:""),a,void 0,void 0,void 0,l,{Ctor:e,propsData:c,listeners:b,tag:o,children:r},v);return d}}}function Za(e,a){var l={_isComponent:!0,_parentVnode:e,parent:a},t=e.data.inlineTemplate;return i(t)&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(l)}function Qa(e){for(var a=e.hook||(e.hook={}),l=0;l<Ja.length;l++){var t=Ja[l],i=a[t],n=Ya[t];i===n||i&&i._merged||(a[t]=i?el(n,i):n)}}function el(e,a){var l=function(l,t){e(l,t),a(l,t)};return l._merged=!0,l}function al(e,a){var l=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(a.attrs||(a.attrs={}))[l]=a.model.value;var n=a.on||(a.on={}),r=n[t],o=a.model.callback;i(r)?(Array.isArray(r)?-1===r.indexOf(o):r!==o)&&(n[t]=[o].concat(r)):n[t]=o}var ll=1,tl=2;function il(e,a,l,t,i,r){return(Array.isArray(l)||o(l))&&(i=t,t=l,l=void 0),n(r)&&(i=tl),nl(e,a,l,t,i)}function nl(e,a,l,t,n){if(i(l)&&i(l.__ob__))return fe();if(i(l)&&i(l.is)&&(a=l.is),!a)return fe();var r,o,u;(Array.isArray(t)&&"function"===typeof t[0]&&(l=l||{},l.scopedSlots={default:t[0]},t.length=0),n===tl?t=ya(t):n===ll&&(t=xa(t)),"string"===typeof a)?(o=e.$vnode&&e.$vnode.ns||N.getTagNamespace(a),r=N.isReservedTag(a)?new pe(N.parsePlatformTagName(a),l,t,void 0,void 0,e):l&&l.pre||!i(u=Ue(e.$options,"components",a))?new pe(a,l,t,void 0,void 0,e):Ka(u,l,e,t,a)):r=Ka(a,l,e,t);return Array.isArray(r)?r:i(r)?(i(o)&&rl(r,o),i(l)&&ol(l),r):fe()}function rl(e,a,l){if(e.ns=a,"foreignObject"===e.tag&&(a=void 0,l=!0),i(e.children))for(var r=0,o=e.children.length;r<o;r++){var u=e.children[r];i(u.tag)&&(t(u.ns)||n(l)&&"svg"!==u.tag)&&rl(u,a,l)}}function ol(e){u(e.style)&&va(e.style),u(e.class)&&va(e.class)}function ul(e){e._vnode=null,e._staticTrees=null;var a=e.$options,t=e.$vnode=a._parentVnode,i=t&&t.context;e.$slots=wa(a._renderChildren,i),e.$scopedSlots=l,e._c=function(a,l,t,i){return il(e,a,l,t,i,!1)},e.$createElement=function(a,l,t,i){return il(e,a,l,t,i,!0)};var n=t&&t.data;Me(e,"$attrs",n&&n.attrs||l,null,!0),Me(e,"$listeners",a._parentListeners||l,null,!0)}var sl,vl=null;function cl(e){Ua(e.prototype),e.prototype.$nextTick=function(e){return ua(e,this)},e.prototype._render=function(){var e,a=this,l=a.$options,t=l.render,i=l._parentVnode;i&&(a.$scopedSlots=ka(i.data.scopedSlots,a.$slots,a.$scopedSlots)),a.$vnode=i;try{vl=a,e=t.call(a._renderProxy,a.$createElement)}catch(ai){Je(ai,a,"render"),e=a._vnode}finally{vl=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=fe()),e.parent=i,e}}function bl(e,a){return(e.__esModule||ue&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?a.extend(e):e}function hl(e,a,l,t,i){var n=fe();return n.asyncFactory=e,n.asyncMeta={data:a,context:l,children:t,tag:i},n}function pl(e,a){if(n(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;var l=vl;if(l&&i(e.owners)&&-1===e.owners.indexOf(l)&&e.owners.push(l),n(e.loading)&&i(e.loadingComp))return e.loadingComp;if(l&&!i(e.owners)){var r=e.owners=[l],o=!0,s=null,v=null;l.$on("hook:destroyed",function(){return x(r,l)});var c=function(e){for(var a=0,l=r.length;a<l;a++)r[a].$forceUpdate();e&&(r.length=0,null!==s&&(clearTimeout(s),s=null),null!==v&&(clearTimeout(v),v=null))},b=j(function(l){e.resolved=bl(l,a),o?r.length=0:c(!0)}),p=j(function(a){i(e.errorComp)&&(e.error=!0,c(!0))}),d=e(b,p);return u(d)&&(h(d)?t(e.resolved)&&d.then(b,p):h(d.component)&&(d.component.then(b,p),i(d.error)&&(e.errorComp=bl(d.error,a)),i(d.loading)&&(e.loadingComp=bl(d.loading,a),0===d.delay?e.loading=!0:s=setTimeout(function(){s=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,c(!1))},d.delay||200)),i(d.timeout)&&(v=setTimeout(function(){v=null,t(e.resolved)&&p(null)},d.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function dl(e){return e.isComment&&e.asyncFactory}function fl(e){if(Array.isArray(e))for(var a=0;a<e.length;a++){var l=e[a];if(i(l)&&(i(l.componentOptions)||dl(l)))return l}}function gl(e){e._events=Object.create(null),e._hasHookEvent=!1;var a=e.$options._parentListeners;a&&_l(e,a)}function xl(e,a){sl.$on(e,a)}function yl(e,a){sl.$off(e,a)}function ml(e,a){var l=sl;return function t(){var i=a.apply(null,arguments);null!==i&&l.$off(e,t)}}function _l(e,a,l){sl=e,pa(a,l||{},xl,yl,ml,e),sl=void 0}function Al(e){var a=/^hook:/;e.prototype.$on=function(e,l){var t=this;if(Array.isArray(e))for(var i=0,n=e.length;i<n;i++)t.$on(e[i],l);else(t._events[e]||(t._events[e]=[])).push(l),a.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,a){var l=this;function t(){l.$off(e,t),a.apply(l,arguments)}return t.fn=a,l.$on(e,t),l},e.prototype.$off=function(e,a){var l=this;if(!arguments.length)return l._events=Object.create(null),l;if(Array.isArray(e)){for(var t=0,i=e.length;t<i;t++)l.$off(e[t],a);return l}var n,r=l._events[e];if(!r)return l;if(!a)return l._events[e]=null,l;var o=r.length;while(o--)if(n=r[o],n===a||n.fn===a){r.splice(o,1);break}return l},e.prototype.$emit=function(e){var a=this,l=a._events[e];if(l){l=l.length>1?L(l):l;for(var t=L(arguments,1),i='event handler for "'+e+'"',n=0,r=l.length;n<r;n++)Ke(l[n],a,t,a,i)}return a}}var Sl=null;function Tl(e){var a=Sl;return Sl=e,function(){Sl=a}}function wl(e){var a=e.$options,l=a.parent;if(l&&!a.abstract){while(l.$options.abstract&&l.$parent)l=l.$parent;l.$children.push(e)}e.$parent=l,e.$root=l?l.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Pl(e){e.prototype._update=function(e,a){var l=this,t=l.$el,i=l._vnode,n=Tl(l);l._vnode=e,l.$el=i?l.__patch__(i,e):l.__patch__(l.$el,e,a,!1),n(),t&&(t.__vue__=null),l.$el&&(l.$el.__vue__=l),l.$vnode&&l.$parent&&l.$vnode===l.$parent._vnode&&(l.$parent.$el=l.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Cl(e,"beforeDestroy"),e._isBeingDestroyed=!0;var a=e.$parent;!a||a._isBeingDestroyed||e.$options.abstract||x(a.$children,e),e._watcher&&e._watcher.teardown();var l=e._watchers.length;while(l--)e._watchers[l].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Cl(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function kl(e,a,t,i,n){var r=i.data.scopedSlots,o=e.$scopedSlots,u=!!(r&&!r.$stable||o!==l&&!o.$stable||r&&e.$scopedSlots.$key!==r.$key),s=!!(n||e.$options._renderChildren||u);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=n,e.$attrs=i.data.attrs||l,e.$listeners=t||l,a&&e.$options.props){Te(!1);for(var v=e._props,c=e.$options._propKeys||[],b=0;b<c.length;b++){var h=c[b],p=e.$options.props;v[h]=qe(h,p,a,e)}Te(!0),e.$options.propsData=a}e._$updateProperties&&e._$updateProperties(e),t=t||l;var d=e.$options._parentListeners;e.$options._parentListeners=t,_l(e,t,d),s&&(e.$slots=wa(n,i.context),e.$forceUpdate())}function Dl(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ml(e,a){if(a){if(e._directInactive=!1,Dl(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var l=0;l<e.$children.length;l++)Ml(e.$children[l]);Cl(e,"activated")}}function Ll(e,a){if((!a||(e._directInactive=!0,!Dl(e)))&&!e._inactive){e._inactive=!0;for(var l=0;l<e.$children.length;l++)Ll(e.$children[l]);Cl(e,"deactivated")}}function Cl(e,a){be();var l=e.$options[a],t=a+" hook";if(l)for(var i=0,n=l.length;i<n;i++)Ke(l[i],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+a),he()}var Fl=[],Ol=[],Rl={},Il=!1,El=!1,$l=0;function jl(){$l=Fl.length=Ol.length=0,Rl={},Il=El=!1}var zl=Date.now;if(Y&&!Q){var Bl=window.performance;Bl&&"function"===typeof Bl.now&&zl()>document.createEvent("Event").timeStamp&&(zl=function(){return Bl.now()})}function Nl(){var e,a;for(zl(),El=!0,Fl.sort(function(e,a){return e.id-a.id}),$l=0;$l<Fl.length;$l++)e=Fl[$l],e.before&&e.before(),a=e.id,Rl[a]=null,e.run();var l=Ol.slice(),t=Fl.slice();jl(),Ul(l),Wl(t),ne&&N.devtools&&ne.emit("flush")}function Wl(e){var a=e.length;while(a--){var l=e[a],t=l.vm;t._watcher===l&&t._isMounted&&!t._isDestroyed&&Cl(t,"updated")}}function Hl(e){e._inactive=!1,Ol.push(e)}function Ul(e){for(var a=0;a<e.length;a++)e[a]._inactive=!0,Ml(e[a],!0)}function ql(e){var a=e.id;if(null==Rl[a]){if(Rl[a]=!0,El){var l=Fl.length-1;while(l>$l&&Fl[l].id>e.id)l--;Fl.splice(l+1,0,e)}else Fl.push(e);Il||(Il=!0,ua(Nl))}}var Vl=0,Xl=function(e,a,l,t,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=l,this.id=++Vl,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof a?this.getter=a:(this.getter=V(a),this.getter||(this.getter=O)),this.value=this.lazy?void 0:this.get()};Xl.prototype.get=function(){var e;be(this);var a=this.vm;try{e=this.getter.call(a,a)}catch(ai){if(!this.user)throw ai;Je(ai,a,'getter for watcher "'+this.expression+'"')}finally{this.deep&&va(e),he(),this.cleanupDeps()}return e},Xl.prototype.addDep=function(e){var a=e.id;this.newDepIds.has(a)||(this.newDepIds.add(a),this.newDeps.push(e),this.depIds.has(a)||e.addSub(this))},Xl.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var a=this.deps[e];this.newDepIds.has(a.id)||a.removeSub(this)}var l=this.depIds;this.depIds=this.newDepIds,this.newDepIds=l,this.newDepIds.clear(),l=this.deps,this.deps=this.newDeps,this.newDeps=l,this.newDeps.length=0},Xl.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ql(this)},Xl.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var a=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,a)}catch(ai){Je(ai,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,a)}}},Xl.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xl.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Xl.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Gl={enumerable:!0,configurable:!0,get:O,set:O};function Yl(e,a,l){Gl.get=function(){return this[a][l]},Gl.set=function(e){this[a][l]=e},Object.defineProperty(e,l,Gl)}function Jl(e){e._watchers=[];var a=e.$options;a.props&&Kl(e,a.props),a.methods&&nt(e,a.methods),a.data?Zl(e):De(e._data={},!0),a.computed&&at(e,a.computed),a.watch&&a.watch!==le&&rt(e,a.watch)}function Kl(e,a){var l=e.$options.propsData||{},t=e._props={},i=e.$options._propKeys=[],n=!e.$parent;n||Te(!1);var r=function(n){i.push(n);var r=qe(n,a,l,e);Me(t,n,r),n in e||Yl(e,"_props",n)};for(var o in a)r(o);Te(!0)}function Zl(e){var a=e.$options.data;a=e._data="function"===typeof a?Ql(a,e):a||{},v(a)||(a={});var l=Object.keys(a),t=e.$options.props,i=(e.$options.methods,l.length);while(i--){var n=l[i];0,t&&m(t,n)||H(n)||Yl(e,"_data",n)}De(a,!0)}function Ql(e,a){be();try{return e.call(a,a)}catch(ai){return Je(ai,a,"data()"),{}}finally{he()}}var et={lazy:!0};function at(e,a){var l=e._computedWatchers=Object.create(null),t=ie();for(var i in a){var n=a[i],r="function"===typeof n?n:n.get;0,t||(l[i]=new Xl(e,r||O,O,et)),i in e||lt(e,i,n)}}function lt(e,a,l){var t=!ie();"function"===typeof l?(Gl.get=t?tt(a):it(l),Gl.set=O):(Gl.get=l.get?t&&!1!==l.cache?tt(a):it(l.get):O,Gl.set=l.set||O),Object.defineProperty(e,a,Gl)}function tt(e){return function(){var a=this._computedWatchers&&this._computedWatchers[e];if(a)return a.dirty&&a.evaluate(),ce.SharedObject.target&&a.depend(),a.value}}function it(e){return function(){return e.call(this,this)}}function nt(e,a){e.$options.props;for(var l in a)e[l]="function"!==typeof a[l]?O:M(a[l],e)}function rt(e,a){for(var l in a){var t=a[l];if(Array.isArray(t))for(var i=0;i<t.length;i++)ot(e,l,t[i]);else ot(e,l,t)}}function ot(e,a,l,t){return v(l)&&(t=l,l=l.handler),"string"===typeof l&&(l=e[l]),e.$watch(a,l,t)}function ut(e){var a={get:function(){return this._data}},l={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",a),Object.defineProperty(e.prototype,"$props",l),e.prototype.$set=Le,e.prototype.$delete=Ce,e.prototype.$watch=function(e,a,l){var t=this;if(v(a))return ot(t,e,a,l);l=l||{},l.user=!0;var i=new Xl(t,e,a,l);if(l.immediate)try{a.call(t,i.value)}catch(n){Je(n,t,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var st=0;function vt(e){e.prototype._init=function(e){var a=this;a._uid=st++,a._isVue=!0,e&&e._isComponent?ct(a,e):a.$options=He(bt(a.constructor),e||{},a),a._renderProxy=a,a._self=a,wl(a),gl(a),ul(a),Cl(a,"beforeCreate"),"mp-toutiao"!==a.mpHost&&Sa(a),Jl(a),"mp-toutiao"!==a.mpHost&&Aa(a),"mp-toutiao"!==a.mpHost&&Cl(a,"created"),a.$options.el&&a.$mount(a.$options.el)}}function ct(e,a){var l=e.$options=Object.create(e.constructor.options),t=a._parentVnode;l.parent=a.parent,l._parentVnode=t;var i=t.componentOptions;l.propsData=i.propsData,l._parentListeners=i.listeners,l._renderChildren=i.children,l._componentTag=i.tag,a.render&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns)}function bt(e){var a=e.options;if(e.super){var l=bt(e.super),t=e.superOptions;if(l!==t){e.superOptions=l;var i=ht(e);i&&C(e.extendOptions,i),a=e.options=He(l,e.extendOptions),a.name&&(a.components[a.name]=e)}}return a}function ht(e){var a,l=e.options,t=e.sealedOptions;for(var i in l)l[i]!==t[i]&&(a||(a={}),a[i]=l[i]);return a}function pt(e){this._init(e)}function dt(e){e.use=function(e){var a=this._installedPlugins||(this._installedPlugins=[]);if(a.indexOf(e)>-1)return this;var l=L(arguments,1);return l.unshift(this),"function"===typeof e.install?e.install.apply(e,l):"function"===typeof e&&e.apply(null,l),a.push(e),this}}function ft(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function gt(e){e.cid=0;var a=1;e.extend=function(e){e=e||{};var l=this,t=l.cid,i=e._Ctor||(e._Ctor={});if(i[t])return i[t];var n=e.name||l.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(l.prototype),r.prototype.constructor=r,r.cid=a++,r.options=He(l.options,e),r["super"]=l,r.options.props&&xt(r),r.options.computed&&yt(r),r.extend=l.extend,r.mixin=l.mixin,r.use=l.use,z.forEach(function(e){r[e]=l[e]}),n&&(r.options.components[n]=r),r.superOptions=l.options,r.extendOptions=e,r.sealedOptions=C({},r.options),i[t]=r,r}}function xt(e){var a=e.options.props;for(var l in a)Yl(e.prototype,"_props",l)}function yt(e){var a=e.options.computed;for(var l in a)lt(e.prototype,l,a[l])}function mt(e){z.forEach(function(a){e[a]=function(e,l){return l?("component"===a&&v(l)&&(l.name=l.name||e,l=this.options._base.extend(l)),"directive"===a&&"function"===typeof l&&(l={bind:l,update:l}),this.options[a+"s"][e]=l,l):this.options[a+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function At(e,a){return Array.isArray(e)?e.indexOf(a)>-1:"string"===typeof e?e.split(",").indexOf(a)>-1:!!c(e)&&e.test(a)}function St(e,a){var l=e.cache,t=e.keys,i=e._vnode;for(var n in l){var r=l[n];if(r){var o=_t(r.componentOptions);o&&!a(o)&&Tt(l,n,t,i)}}}function Tt(e,a,l,t){var i=e[a];!i||t&&i.tag===t.tag||i.componentInstance.$destroy(),e[a]=null,x(l,a)}vt(pt),ut(pt),Al(pt),Pl(pt),cl(pt);var wt=[String,RegExp,Array],Pt={name:"keep-alive",abstract:!0,props:{include:wt,exclude:wt,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Tt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(a){St(e,function(e){return At(a,e)})}),this.$watch("exclude",function(a){St(e,function(e){return!At(a,e)})})},render:function(){var e=this.$slots.default,a=fl(e),l=a&&a.componentOptions;if(l){var t=_t(l),i=this,n=i.include,r=i.exclude;if(n&&(!t||!At(n,t))||r&&t&&At(r,t))return a;var o=this,u=o.cache,s=o.keys,v=null==a.key?l.Ctor.cid+(l.tag?"::"+l.tag:""):a.key;u[v]?(a.componentInstance=u[v].componentInstance,x(s,v),s.push(v)):(u[v]=a,s.push(v),this.max&&s.length>parseInt(this.max)&&Tt(u,s[0],s,this._vnode)),a.data.keepAlive=!0}return a||e&&e[0]}},kt={KeepAlive:Pt};function Dt(e){var a={get:function(){return N}};Object.defineProperty(e,"config",a),e.util={warn:se,extend:C,mergeOptions:He,defineReactive:Me},e.set=Le,e.delete=Ce,e.nextTick=ua,e.observable=function(e){return De(e),e},e.options=Object.create(null),z.forEach(function(a){e.options[a+"s"]=Object.create(null)}),e.options._base=e,C(e.options.components,kt),dt(e),ft(e),gt(e),mt(e)}Dt(pt),Object.defineProperty(pt.prototype,"$isServer",{get:ie}),Object.defineProperty(pt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pt,"FunctionalRenderContext",{value:qa}),pt.version="2.6.11";var Mt="[object Array]",Lt="[object Object]";function Ct(e,a){var l={};return Ft(e,a),Ot(e,a,"",l),l}function Ft(e,a){if(e!==a){var l=It(e),t=It(a);if(l==Lt&&t==Lt){if(Object.keys(e).length>=Object.keys(a).length)for(var i in a){var n=e[i];void 0===n?e[i]=null:Ft(n,a[i])}}else l==Mt&&t==Mt&&e.length>=a.length&&a.forEach(function(a,l){Ft(e[l],a)})}}function Ot(e,a,l,t){if(e!==a){var i=It(e),n=It(a);if(i==Lt)if(n!=Lt||Object.keys(e).length<Object.keys(a).length)Rt(t,l,e);else{var r=function(i){var n=e[i],r=a[i],o=It(n),u=It(r);if(o!=Mt&&o!=Lt)n!=a[i]&&Rt(t,(""==l?"":l+".")+i,n);else if(o==Mt)u!=Mt?Rt(t,(""==l?"":l+".")+i,n):n.length<r.length?Rt(t,(""==l?"":l+".")+i,n):n.forEach(function(e,a){Ot(e,r[a],(""==l?"":l+".")+i+"["+a+"]",t)});else if(o==Lt)if(u!=Lt||Object.keys(n).length<Object.keys(r).length)Rt(t,(""==l?"":l+".")+i,n);else for(var s in n)Ot(n[s],r[s],(""==l?"":l+".")+i+"."+s,t)};for(var o in e)r(o)}else i==Mt?n!=Mt?Rt(t,l,e):e.length<a.length?Rt(t,l,e):e.forEach(function(e,i){Ot(e,a[i],l+"["+i+"]",t)}):Rt(t,l,e)}}function Rt(e,a,l){e[a]=l}function It(e){return Object.prototype.toString.call(e)}function Et(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var l=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<l.length;t++)l[t]()}}function $t(e){return Fl.find(function(a){return e._watcher===a})}function jt(e,a){if(!e.__next_tick_pending&&!$t(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:nextVueTick")}return ua(a,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var i;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(a)try{a.call(e)}catch(ai){Je(ai,e,"nextTick")}else i&&i(e)}),!a&&"undefined"!==typeof Promise)return new Promise(function(e){i=e})}function zt(e){var a=Object.create(null),l=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return l.reduce(function(a,l){return a[l]=e[l],a},a),Object.assign(a,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(a["name"]=e.name,a["value"]=e.value),JSON.parse(JSON.stringify(a))}var Bt=function(e,a){var l=this;if(null!==a&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,i=Object.create(null);try{i=zt(this)}catch(o){console.error(o)}i.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(i).forEach(function(e){n[e]=t.data[e]});var r=Ct(i,n);Object.keys(r).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){l.__next_tick_pending=!1,Et(l)})):Et(this)}};function Nt(){}function Wt(e,a,l){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Nt),e.$options.render||(e.$options.render=Nt),"mp-toutiao"!==e.mpHost&&Cl(e,"beforeMount");var t=function(){e._update(e._render(),l)};return new Xl(e,t,O,{before:function(){e._isMounted&&!e._isDestroyed&&Cl(e,"beforeUpdate")}},!0),l=!1,e}function Ht(e,a){return i(e)||i(a)?Ut(e,qt(a)):""}function Ut(e,a){return e?a?e+" "+a:e:a||""}function qt(e){return Array.isArray(e)?Vt(e):u(e)?Xt(e):"string"===typeof e?e:""}function Vt(e){for(var a,l="",t=0,n=e.length;t<n;t++)i(a=qt(e[t]))&&""!==a&&(l&&(l+=" "),l+=a);return l}function Xt(e){var a="";for(var l in e)e[l]&&(a&&(a+=" "),a+=l);return a}var Gt=_(function(e){var a={},l=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(l).forEach(function(e){if(e){var l=e.split(t);l.length>1&&(a[l[0].trim()]=l[1].trim())}}),a});function Yt(e){return Array.isArray(e)?F(e):"string"===typeof e?Gt(e):e}var Jt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Kt(e,a){var l=a.split("."),t=l[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===l.length?e[t]:Kt(e[t],l.slice(1).join("."))}function Zt(e){e.config.errorHandler=function(e){var a=getApp();a&&a.onError?a.onError(e):console.error(e)};var a=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:L(arguments,1)}),a.apply(this,arguments)},e.prototype.$nextTick=function(e){return jt(this,e)},Jt.forEach(function(a){e.prototype[a]=function(e){return this.$scope&&this.$scope[a]?this.$scope[a](e):"undefined"!==typeof my?"createSelectorQuery"===a?my.createSelectorQuery(e):"createIntersectionObserver"===a?my.createIntersectionObserver(e):void 0:void 0}}),e.prototype.__init_provide=Aa,e.prototype.__init_injections=Sa,e.prototype.__call_hook=function(e,a){var l=this;be();var t,i=l.$options[e],n=e+" hook";if(i)for(var r=0,o=i.length;r<o;r++)t=Ke(i[r],l,a?[a]:null,l,n);return l._hasHookEvent&&l.$emit("hook:"+e,a),he(),t},e.prototype.__set_model=function(e,a,l,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(l=l.trim()),-1!==t.indexOf("number")&&(l=this._n(l))),e||(e=this),e[a]=l},e.prototype.__set_sync=function(e,a,l){e||(e=this),e[a]=l},e.prototype.__get_orig=function(e){return v(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,a){return Kt(a||this,e)},e.prototype.__get_class=function(e,a){return Ht(a,e)},e.prototype.__get_style=function(e,a){if(!e&&!a)return"";var l=Yt(e),t=a?C(a,l):l;return Object.keys(t).map(function(e){return P(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,a){var l,t,i,n,r;if(Array.isArray(e)){for(l=new Array(e.length),t=0,i=e.length;t<i;t++)l[t]=a(e[t],t);return l}if(u(e)){for(n=Object.keys(e),l=Object.create(null),t=0,i=n.length;t<i;t++)r=n[t],l[r]=a(e[r],r,t);return l}return[]}}var Qt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ei(e){var a=e.extend;e.extend=function(e){e=e||{};var l=e.methods;return l&&Object.keys(l).forEach(function(a){-1!==Qt.indexOf(a)&&(e[a]=l[a],delete l[a])}),a.call(this,e)};var l=e.config.optionMergeStrategies,t=l.created;Qt.forEach(function(e){l[e]=t}),e.prototype.__lifecycle_hooks__=Qt}pt.prototype.__patch__=Bt,pt.prototype.$mount=function(e,a){return Wt(this,e,a)},ei(pt),Zt(pt),a["default"]=pt}.call(this,l("c8ba"))},"6c04":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={getHoroscope:function(e){var a=["摩羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","摩羯"];e=new Date(e);var l=e.getMonth()+1,t=e.getDate(),i=l-(t-14<"865778999988".charAt(l));return a[i]+"座"},sumAge:function(e){var a=new Date(e.replace(/-/g,"/")),l=new Date,t=l.getTime()-a.getTime(),i=Math.floor(t/864e5),n=t%864e5,r=Math.floor(n/36e5),o=n%36e5,u=(Math.floor(o/6e4),o%6e4);Math.round(u/1e3);return i+"天 "+r+"小时 "},getChatTime:function(e,a){if(e=e.toString().length<13?1e3*e:e,a=a.toString().length<13?1e3*a:a,(parseInt(e)-parseInt(a))/1e3>300)return this.gettime(e)},gettime:function(e){e=e.toString().length<13?1e3*e:e;var a=(new Date).getTime(),l=(a-parseInt(e))/1e3;return l<43200?this.dateFormat(new Date(e),"{A} {t}:{ii}"):l<518400?this.dateFormat(new Date(e),"{Mon}月{DD}日 {A} {t}:{ii}"):this.dateFormat(new Date(e),"{Y}-{MM}-{DD} {A} {t}:{ii}")},parseNumber:function(e){return e<10?"0"+e:e},dateFormat:function(e,a){var l={},t=/\{([^}]+)\}/,i=["一","二","三","四","五","六","七","八","九","十","十一","十二"];l["Y"]=e.getFullYear(),l["M"]=e.getMonth()+1,l["MM"]=this.parseNumber(l["M"]),l["Mon"]=i[l["M"]-1],l["D"]=e.getDate(),l["DD"]=this.parseNumber(l["D"]),l["h"]=e.getHours(),l["hh"]=this.parseNumber(l["h"]),l["t"]=l["h"]>12?l["h"]-12:l["h"],l["tt"]=this.parseNumber(l["t"]),l["A"]=l["h"]>12?"下午":"上午",l["i"]=e.getMinutes(),l["ii"]=this.parseNumber(l["i"]),l["s"]=e.getSeconds(),l["ss"]=this.parseNumber(l["s"]);while(t.test(a))a=a.replace(t,l[RegExp.$1]);return a},getAgeByBirthday:function(e){var a=new Date(e.replace(/-/g,"/")),l=new Date;return l.getFullYear()-a.getFullYear()-(l.getMonth()<a.getMonth()||l.getMonth()==a.getMonth()&&l.getDate()<a.getDate()?1:0)}},i={gettime:t};a.default=i},"6e42":function(e,a,l){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.createApp=pa,a.createComponent=Ta,a.createPage=Sa,a.default=void 0;var t=i(l("66fd"));function i(e){return e&&e.__esModule?e:{default:e}}function n(e,a){return u(e)||o(e,a)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,a){var l=[],t=!0,i=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)if(l.push(r.value),a&&l.length===a)break}catch(u){i=!0,n=u}finally{try{t||null==o["return"]||o["return"]()}finally{if(i)throw n}}return l}function u(e){if(Array.isArray(e))return e}function s(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function v(e){return h(e)||b(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(e){if(Array.isArray(e)){for(var a=0,l=new Array(e.length);a<e.length;a++)l[a]=e[a];return l}}var p=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function f(e){return"function"===typeof e}function g(e){return"string"===typeof e}function x(e){return"[object Object]"===p.call(e)}function y(e,a){return d.call(e,a)}function m(){}function _(e){var a=Object.create(null);return function(l){var t=a[l];return t||(a[l]=e(l))}}var A=/-(\w)/g,S=_(function(e){return e.replace(A,function(e,a){return a?a.toUpperCase():""})}),T=["invoke","success","fail","complete","returnValue"],w={},P={};function k(e,a){var l=a?e?e.concat(a):Array.isArray(a)?a:[a]:e;return l?D(l):l}function D(e){for(var a=[],l=0;l<e.length;l++)-1===a.indexOf(e[l])&&a.push(e[l]);return a}function M(e,a){var l=e.indexOf(a);-1!==l&&e.splice(l,1)}function L(e,a){Object.keys(a).forEach(function(l){-1!==T.indexOf(l)&&f(a[l])&&(e[l]=k(e[l],a[l]))})}function C(e,a){e&&a&&Object.keys(a).forEach(function(l){-1!==T.indexOf(l)&&f(a[l])&&M(e[l],a[l])})}function F(e,a){"string"===typeof e&&x(a)?L(P[e]||(P[e]={}),a):x(e)&&L(w,e)}function O(e,a){"string"===typeof e?x(a)?C(P[e],a):delete P[e]:x(e)&&C(w,e)}function R(e){return function(a){return e(a)||a}}function I(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function E(e,a){for(var l=!1,t=0;t<e.length;t++){var i=e[t];if(l)l=Promise.then(R(i));else{var n=i(a);if(I(n)&&(l=Promise.resolve(n)),!1===n)return{then:function(){}}}}return l||{then:function(e){return e(a)}}}function $(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(l){if(Array.isArray(e[l])){var t=a[l];a[l]=function(a){E(e[l],a).then(function(e){return f(t)&&t(e)||e})}}}),a}function j(e,a){var l=[];Array.isArray(w.returnValue)&&l.push.apply(l,v(w.returnValue));var t=P[e];return t&&Array.isArray(t.returnValue)&&l.push.apply(l,v(t.returnValue)),l.forEach(function(e){a=e(a)||a}),a}function z(e){var a=Object.create(null);Object.keys(w).forEach(function(e){"returnValue"!==e&&(a[e]=w[e].slice())});var l=P[e];return l&&Object.keys(l).forEach(function(e){"returnValue"!==e&&(a[e]=(a[e]||[]).concat(l[e]))}),a}function B(e,a,l){for(var t=arguments.length,i=new Array(t>3?t-3:0),n=3;n<t;n++)i[n-3]=arguments[n];var r=z(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var o=E(r.invoke,l);return o.then(function(e){return a.apply(void 0,[$(r,e)].concat(i))})}return a.apply(void 0,[$(r,l)].concat(i))}return a.apply(void 0,[l].concat(i))}var N={returnValue:function(e){return I(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},W=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,U=/^on/;function q(e){return H.test(e)}function V(e){return W.test(e)}function X(e){return U.test(e)&&"onPush"!==e}function G(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function Y(e){return!(q(e)||V(e)||X(e))}function J(e,a){return Y(e)?function(){for(var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return f(l.success)||f(l.fail)||f(l.complete)?j(e,B.apply(void 0,[e,a,l].concat(i))):j(e,G(new Promise(function(t,n){B.apply(void 0,[e,a,Object.assign({},l,{success:t,fail:n})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var a=this.constructor;return this.then(function(l){return a.resolve(e()).then(function(){return l})},function(l){return a.resolve(e()).then(function(){throw l})})})})))}:a}var K=1e-4,Z=750,Q=!1,ee=0,ae=0;function le(){var e=wx.getSystemInfoSync(),a=e.platform,l=e.pixelRatio,t=e.windowWidth;ee=t,ae=l,Q="ios"===a}function te(e,a){if(0===ee&&le(),e=Number(e),0===e)return 0;var l=e/Z*(a||ee);return l<0&&(l=-l),l=Math.floor(l+K),0===l?1!==ae&&Q?.5:1:e<0?-l:l}var ie={promiseInterceptor:N},ne=Object.freeze({__proto__:null,upx2px:te,interceptors:ie,addInterceptor:F,removeInterceptor:O}),re={},oe=[],ue=[],se=["success","fail","cancel","complete"];function ve(e,a,l){return function(t){return a(be(e,t,l))}}function ce(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(a)){var n=!0===i?a:{};for(var r in f(l)&&(l=l(a,n)||{}),a)if(y(l,r)){var o=l[r];f(o)&&(o=o(a[r],a,n)),o?g(o)?n[o]=a[r]:x(o)&&(n[o.name?o.name:r]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==se.indexOf(r)?n[r]=ve(e,a[r],t):i||(n[r]=a[r]);return n}return f(a)&&(a=ve(e,a,t)),a}function be(e,a,l){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return f(re.returnValue)&&(a=re.returnValue(e,a)),ce(e,a,l,{},t)}function he(e,a){if(y(re,e)){var l=re[e];return l?function(a,t){var i=l;f(l)&&(i=l(a)),a=ce(e,a,i.args,i.returnValue);var n=[a];"undefined"!==typeof t&&n.push(t);var r=wx[i.name||e].apply(wx,n);return V(e)?be(e,r,i.returnValue,q(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return a}var pe=Object.create(null),de=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function fe(e){return function(a){var l=a.fail,t=a.complete,i={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};f(l)&&l(i),f(t)&&t(i)}}de.forEach(function(e){pe[e]=fe(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function xe(e,a,l){return e[a].apply(e,l)}function ye(){return xe(ge(),"$on",Array.prototype.slice.call(arguments))}function me(){return xe(ge(),"$off",Array.prototype.slice.call(arguments))}function _e(){return xe(ge(),"$once",Array.prototype.slice.call(arguments))}function Ae(){return xe(ge(),"$emit",Array.prototype.slice.call(arguments))}var Se=Object.freeze({__proto__:null,$on:ye,$off:me,$once:_e,$emit:Ae});function Te(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function we(e){e.$processed=!0,e.postMessage=function(a){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:a},e.id)};var a=[];if(e.onMessage=function(e){a.push(e)},e.$consumeMessage=function(e){a.forEach(function(a){return a(e)})},e.__uniapp_mask_id){var l=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var a=e.mask;Te("uni-tabview").setMask({color:a})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),i=e.show,n=e.hide,r=e.close,o=function(){t.setStyle({mask:l})},u=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var a=arguments.length,l=new Array(a),t=0;t<a;t++)l[t]=arguments[t];return i.apply(e,l)},e.hide=function(){u();for(var a=arguments.length,l=new Array(a),t=0;t<a;t++)l[t]=arguments[t];return n.apply(e,l)},e.close=function(){u(),a=[];for(var l=arguments.length,t=new Array(l),i=0;i<l;i++)t[i]=arguments[i];return r.apply(e,t)}}}function Pe(e){var a=plus.webview.getWebviewById(e);return a&&!a.$processed&&we(a),a}var ke=Object.freeze({__proto__:null,getSubNVueById:Pe,requireNativePlugin:Te}),De=Page,Me=Component,Le=/:/g,Ce=_(function(e){return S(e.replace(Le,"-"))});function Fe(e){if(wx.canIUse("nextTick")){var a=e.triggerEvent;e.triggerEvent=function(l){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return a.apply(e,[Ce(l)].concat(i))}}}function Oe(e,a){var l=a[e];a[e]=l?function(){Fe(this);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return l.apply(this,a)}:function(){Fe(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Oe("onLoad",e),De(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Oe("created",e),Me(e)};var Re=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ie(e,a){var l=e.$mp[e.mpType];a.forEach(function(a){y(l,a)&&(e[a]=l[a])})}function Ee(e,a){if(!a)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(a=a.default||a,f(a))return!!f(a.extendOptions[e])||!!(a.super&&a.super.options&&Array.isArray(a.super.options[e]));if(f(a[e]))return!0;var l=a.mixins;return Array.isArray(l)?!!l.find(function(a){return Ee(e,a)}):void 0}function $e(e,a,l){a.forEach(function(a){Ee(a,l)&&(e[a]=function(e){return this.$vm&&this.$vm.__call_hook(a,e)})})}function je(e,a){var l;return a=a.default||a,f(a)?(l=a,a=l.extendOptions):l=e.extend(a),[l,a]}function ze(e,a){if(Array.isArray(a)&&a.length){var l=Object.create(null);a.forEach(function(e){l[e]=!0}),e.$scopedSlots=e.$slots=l}}function Be(e,a){e=(e||"").split(",");var l=e.length;1===l?a._$vueId=e[0]:2===l&&(a._$vueId=e[0],a._$vuePid=e[1])}function Ne(e,a){var l=e.data||{},t=e.methods||{};if("function"===typeof l)try{l=l.call(a)}catch(i){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",l)}else try{l=JSON.parse(JSON.stringify(l))}catch(i){}return x(l)||(l={}),Object.keys(t).forEach(function(e){-1!==a.__lifecycle_hooks__.indexOf(e)||y(l,e)||(l[e]=t[e])}),l}var We=[String,Number,Boolean,Object,Array,null];function He(e){return function(a,l){this.$vm&&(this.$vm[e]=a)}}function Ue(e,a){var l=e["behaviors"],t=e["extends"],i=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var r=[];return Array.isArray(l)&&l.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(t)&&t.props&&r.push(a({properties:Ve(t.props,!0)})),Array.isArray(i)&&i.forEach(function(e){x(e)&&e.props&&r.push(a({properties:Ve(e.props,!0)}))}),r}function qe(e,a,l,t){return Array.isArray(a)&&1===a.length?a[0]:a}function Ve(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return a||(l.vueId={type:String,value:""},l.vueSlots={type:null,value:[],observer:function(e,a){var l=Object.create(null);e.forEach(function(e){l[e]=!0}),this.setData({$slots:l})}}),Array.isArray(e)?e.forEach(function(e){l[e]={type:null,observer:He(e)}}):x(e)&&Object.keys(e).forEach(function(a){var t=e[a];if(x(t)){var i=t["default"];f(i)&&(i=i()),t.type=qe(a,t.type),l[a]={type:-1!==We.indexOf(t.type)?t.type:null,value:i,observer:He(a)}}else{var n=qe(a,t);l[a]={type:-1!==We.indexOf(n)?n:null,observer:He(a)}}}),l}function Xe(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(a){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},y(e,"detail")||(e.detail={}),x(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ge(e,a){var l=e;return a.forEach(function(a){var t=a[0],i=a[2];if(t||"undefined"!==typeof i){var n=a[1],r=a[3],o=t?e.__get_value(t,l):l;Number.isInteger(o)?l=i:n?Array.isArray(o)?l=o.find(function(a){return e.__get_value(n,a)===i}):x(o)?l=Object.keys(o).find(function(a){return e.__get_value(n,o[a])===i}):console.error("v-for 暂不支持循环数据：",o):l=o[i],r&&(l=e.__get_value(r,l))}}),l}function Ye(e,a,l){var t={};return Array.isArray(a)&&a.length&&a.forEach(function(a,i){"string"===typeof a?a?"$event"===a?t["$"+i]=l:0===a.indexOf("$event.")?t["$"+i]=e.__get_value(a.replace("$event.",""),l):t["$"+i]=e.__get_value(a):t["$"+i]=e:t["$"+i]=Ge(e,a)}),t}function Je(e){for(var a={},l=1;l<e.length;l++){var t=e[l];a[t[0]]=t[1]}return a}function Ke(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=!1;if(i&&(r=a.currentTarget&&a.currentTarget.dataset&&"wx"===a.currentTarget.dataset.comType,!l.length))return r?[a]:a.detail.__args__||a.detail;var o=Ye(e,t,a),u=[];return l.forEach(function(e){"$event"===e?"__set_model"!==n||i?i&&!r?u.push(a.detail.__args__[0]):u.push(a):u.push(a.target.value):Array.isArray(e)&&"o"===e[0]?u.push(Je(e)):"string"===typeof e&&y(o,e)?u.push(o[e]):u.push(e)}),u}var Ze="~",Qe="^";function ea(e,a){return e===a||"regionchange"===a&&("begin"===e||"end"===e)}function aa(e){var a=this;e=Xe(e);var l=(e.currentTarget||e.target).dataset;if(!l)return console.warn("事件信息不存在");var t=l.eventOpts||l["event-opts"];if(!t)return console.warn("事件信息不存在");var i=e.type,n=[];return t.forEach(function(l){var t=l[0],r=l[1],o=t.charAt(0)===Qe;t=o?t.slice(1):t;var u=t.charAt(0)===Ze;t=u?t.slice(1):t,r&&ea(i,t)&&r.forEach(function(l){var t=l[0];if(t){var i=a.$vm;if(i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent),"$emit"===t)return void i.$emit.apply(i,Ke(a.$vm,e,l[1],l[2],o,t));var r=i[t];if(!f(r))throw new Error(" _vm.".concat(t," is not a function"));if(u){if(r.once)return;r.once=!0}n.push(r.apply(i,Ke(a.$vm,e,l[1],l[2],o,t)))}})}),"input"===i&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var la=["onShow","onHide","onError","onPageNotFound"];function ta(e,a){var l=a.mocks,i=a.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=s({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Ie(this,l)))}});var n={onLaunch:function(a){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",a),this.$vm.__call_hook("onLaunch",a))}};n.globalData=e.$options.globalData||{};var r=e.$options.methods;return r&&Object.keys(r).forEach(function(e){n[e]=r[e]}),$e(n,la),n}var ia=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function na(e,a){for(var l,t=e.$children,i=t.length-1;i>=0;i--){var n=t[i];if(n.$scope._$vueId===a)return n}for(var r=t.length-1;r>=0;r--)if(l=na(t[r],a),l)return l}function ra(e){return Behavior(e)}function oa(){return!!this.route}function ua(e){this.triggerEvent("__l",e)}function sa(e){var a=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},l=a.selectAllComponents(".vue-ref");l.forEach(function(a){var l=a.dataset.ref;e[l]=a.$vm||a});var t=a.selectAllComponents(".vue-ref-in-for");return t.forEach(function(a){var l=a.dataset.ref;e[l]||(e[l]=[]),e[l].push(a.$vm||a)}),e}})}function va(e){var a,l=e.detail||e.value,t=l.vuePid,i=l.vueOptions;t&&(a=na(this.$vm,t)),a||(a=this.$vm),i.parent=a}function ca(e){return ta(e,{mocks:ia,initRefs:sa})}var ba=["onUniNViewMessage"];function ha(e){var a=ca(e);return $e(a,ba),a}function pa(e){return App(ha(e)),e}function da(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.isPage,i=a.initRelation,r=je(t.default,e),o=n(r,2),u=o[0],s=o[1],v={multipleSlots:!0,addGlobalClass:!0},c={options:v,data:Ne(s,t.default.prototype),behaviors:Ue(s,ra),properties:Ve(s.props,!1,s.__file),lifetimes:{attached:function(){var e=this.properties,a={mpType:l.call(this)?"page":"component",mpInstance:this,propsData:e};Be(e.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:a}),this.$vm=new u(a),ze(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:va,__e:aa}};return Array.isArray(s.wxsCallMethods)&&s.wxsCallMethods.forEach(function(e){c.methods[e]=function(a){return this.$vm[e](a)}}),l?c:[c,u]}function fa(e){return da(e,{isPage:oa,initRelation:ua})}function ga(e){var a=fa(e);return a.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},a}var xa=["onShow","onHide","onUnload"];function ya(e,a){a.isPage,a.initRelation;var l=ga(e);return $e(l.methods,xa,e),l.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},l}function ma(e){return ya(e,{isPage:oa,initRelation:ua})}xa.push.apply(xa,Re);var _a=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Aa(e){var a=ma(e);return $e(a.methods,_a),a}function Sa(e){return Component(Aa(e))}function Ta(e){return Component(ga(e))}oe.forEach(function(e){re[e]=!1}),ue.forEach(function(e){var a=re[e]&&re[e].name?re[e].name:e;wx.canIUse(a)||(re[e]=!1)});var wa={};Object.keys(ne).forEach(function(e){wa[e]=ne[e]}),Object.keys(Se).forEach(function(e){wa[e]=Se[e]}),Object.keys(ke).forEach(function(e){wa[e]=J(e,ke[e])}),Object.keys(wx).forEach(function(e){(y(wx,e)||y(re,e))&&(wa[e]=J(e,he(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=wa,e.UniEmitter=Se),wx.createApp=pa,wx.createPage=Sa,wx.createComponent=Ta;var Pa=wa,ka=Pa;a.default=ka}).call(this,l("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},"921b":function(e,a,l){"use strict";(function(e){var a=l("8189");function t(e,a){return!a||"object"!==typeof a&&"function"!==typeof a?i(e):a}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&o(e,a)}function o(e,a){return o=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},o(e,a)}function u(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){for(var l=0;l<a.length;l++){var t=a[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e,a,l){return a&&s(e.prototype,a),l&&s(e,l),e}var c=a.version,b="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",p=1800,d=300,f=10,g="__DC_STAT_UUID",x="__DC_UUID_VALUE";function y(){var a="";if("n"===S()){try{a=plus.runtime.getDCloudId()}catch(l){a=""}return a}try{a=e.getStorageSync(g)}catch(l){a=x}if(!a){a=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,a)}catch(l){e.setStorageSync(g,x)}}return a}var m=function(e){var a=Object.keys(e),l=a.sort(),t={},i="";for(var n in l)t[l[n]]=e[l[n]],i+=l[n]+"="+e[l[n]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},_=function(e){var a="";for(var l in e)a+=l+"="+e[l]+"&";return a.substr(0,a.length-1)},A=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},T=function(){var a="";return"wx"!==S()&&"qq"!==S()||e.canIUse("getAccountInfoSync")&&(a=e.getAccountInfoSync().miniProgram.appId||""),a},w=function(){return"n"===S()?plus.runtime.version:""},P=function(){var e=S(),a="";return"n"===e&&(a=plus.runtime.channel),a},k=function(a){var l=S(),t="";return a||("wx"===l&&(t=e.getLaunchOptionsSync().scene),t)},D="First__Visit__Time",M="Last__Visit__Time",L=function(){var a=e.getStorageSync(D),l=0;return a?l=a:(l=A(),e.setStorageSync(D,l),e.removeStorageSync(M)),l},C=function(){var a=e.getStorageSync(M),l=0;return l=a||"",e.setStorageSync(M,A()),l},F="__page__residence__time",O=0,R=0,I=function(){return O=A(),"n"===S()&&e.setStorageSync(F,A()),O},E=function(){return R=A(),"n"===S()&&(O=e.getStorageSync(F)),R-O},$="Total__Visit__Count",j=function(){var a=e.getStorageSync($),l=1;return a&&(l=a,l++),e.setStorageSync($,l),l},z=function(e){var a={};for(var l in e)a[l]=encodeURIComponent(e[l]);return a},B=0,N=0,W=function(){var e=(new Date).getTime();return B=e,N=0,e},H=function(){var e=(new Date).getTime();return N=e,e},U=function(e){var a=0;if(0!==B&&(a=N-B),a=parseInt(a/1e3),a=a<1?1:a,"app"===e){var l=a>d;return{residenceTime:a,overtime:l}}if("page"===e){var t=a>p;return{residenceTime:a,overtime:t}}return{residenceTime:a}},q=function(){var e=getCurrentPages(),a=e[e.length-1],l=a.$vm;return"bd"===S()?l.$mp&&l.$mp.page.is:l.$scope&&l.$scope.route||l.$mp&&l.$mp.page.route},V=function(e){var a=getCurrentPages(),l=a[a.length-1],t=l.$vm,i=e._query,n=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return e._query="","bd"===S()?t.$mp&&t.$mp.page.is+n:t.$scope&&t.$scope.route+n||t.$mp&&t.$mp.page.route+n},X=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},G=function(e,a){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof a&&"object"!==typeof a?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof a&&a.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof a?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},Y=l("e0bd").default,J=l("4b8e").default||l("4b8e"),K=e.getSystemInfoSync(),Z=function(){function a(){u(this,a),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:y(),ut:S(),mpn:T(),ak:J.appid,usv:c,v:w(),ch:P(),cn:"",pn:"",ct:"",t:A(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return v(a,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=U("app");if(e.overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,a){this.__licationHide=!0,H();var l=U();W();var t=V(this);this._sendHideRequest({urlref:t,urlref_ts:l.residenceTime},a)}},{key:"_pageShow",value:function(){var e=V(this),a=q();if(this._navigationBarTitle.config=Y&&Y.pages[a]&&Y.pages[a].titleNView&&Y.pages[a].titleNView.titleText||Y&&Y.pages[a]&&Y.pages[a].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var l=U("page");if(l.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var a=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+a||"",this.statData.t=A(),this.statData.sc=k(e.scene),this.statData.fvts=L(),this.statData.lvts=C(),this.statData.tvc=j(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var a=e.url,l=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:a,tt:this.statData.tt,urlref:l,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(e,a){var l=e.urlref,t=e.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:l,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(i,a)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.key,l=void 0===a?"":a,t=e.value,i=void 0===t?"":t,n=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:l,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:A(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var a=this;e.getNetworkType({success:function(e){a.statData.net=e.networkType,a.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(a){e.statData.v=a.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var a=this;J.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(a.statData.cn=e.address.country,a.statData.pn=e.address.province,a.statData.ct=e.address.city),a.statData.lat=e.latitude,a.statData.lng=e.longitude,a.request(a.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(a,l){var t=this,i=A(),n=this._navigationBarTitle;a.ttn=n.page,a.ttpj=n.config,a.ttc=n.report;var r=this._reportingRequestData;if("n"===S()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[a.lt]||(r[a.lt]=[]),r[a.lt].push(a),"n"===S()&&e.setStorageSync("__UNI__STAT__DATA",r),!(E()<f)||l){var o=this._reportingRequestData;"n"===S()&&(o=e.getStorageSync("__UNI__STAT__DATA")),I();var u=[],s=[],v=[],b=function(e){var a=o[e];a.forEach(function(a){var l=_(a);0===e?u.push(l):3===e?v.push(l):s.push(l)})};for(var h in o)b(h);u.push.apply(u,s.concat(v));var p={usv:c,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===S()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==a.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(a){var l=this;e.request({url:b,method:"POST",data:a,success:function(){},fail:function(e){++l._retry<3&&setTimeout(function(){l._sendRequest(a)},1e3)}})}},{key:"imageRequest",value:function(e){var a=new Image,l=m(z(e)).options;a.src=h+"?"+l}},{key:"sendEvent",value:function(e,a){G(e,a)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof a?JSON.stringify(a):a},1):this._navigationBarTitle.report=a)}}]),a}(),Q=function(a){function l(){var a;return u(this,l),a=t(this,n(l).call(this)),a.instance=null,"function"===typeof e.addInterceptor&&(a.addInterceptorInit(),a.interceptLogin(),a.interceptShare(!0),a.interceptRequestPayment()),a}return r(l,a),v(l,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new l),this.instance}}]),v(l,[{key:"addInterceptorInit",value:function(){var a=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){a._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var a=this;e.addInterceptor("login",{complete:function(){a._login()}})}},{key:"interceptShare",value:function(a){var l=this;a?e.addInterceptor("share",{success:function(){l._share()},fail:function(){l._share()}}):l._share()}},{key:"interceptRequestPayment",value:function(){var a=this;e.addInterceptor("requestPayment",{success:function(){a._payment("pay_success")},fail:function(){a._payment("pay_fail")}})}},{key:"report",value:function(e,a){this.self=a,I(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,a){if(!a.$scope&&!a.$mp){var l=getCurrentPages();a.$scope=l[l.length-1]}this.self=a,this._query=e}},{key:"show",value:function(e){this.self=e,X(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,X(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var a="";a=e.message?e.stack:JSON.stringify(e);var l={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:a,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(l)}}]),l}(Z),ee=Q.getInstance(),ae=!1,le={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var a=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),a.call(this,e)}}},onShow:function(){ae=!1,ee.show(this)},onHide:function(){ae=!0,ee.hide(this)},onUnload:function(){ae?ae=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var a=l("66fd");(a.default||a).mixin(le),e.report=function(e,a){ee.sendEvent(e,a)}}te()}).call(this,l("6e42")["default"])},"96cf":function(e,a){!function(a){"use strict";var l,t=Object.prototype,i=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag",s="object"===typeof e,v=a.regeneratorRuntime;if(v)s&&(e.exports=v);else{v=a.regeneratorRuntime=s?e.exports:{},v.wrap=m;var c="suspendedStart",b="suspendedYield",h="executing",p="completed",d={},f={};f[r]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(F([])));x&&x!==t&&i.call(x,r)&&(f=x);var y=T.prototype=A.prototype=Object.create(f);S.prototype=y.constructor=T,T.constructor=S,T[u]=S.displayName="GeneratorFunction",v.isGeneratorFunction=function(e){var a="function"===typeof e&&e.constructor;return!!a&&(a===S||"GeneratorFunction"===(a.displayName||a.name))},v.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,T):(e.__proto__=T,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(y),e},v.awrap=function(e){return{__await:e}},w(P.prototype),P.prototype[o]=function(){return this},v.AsyncIterator=P,v.async=function(e,a,l,t){var i=new P(m(e,a,l,t));return v.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(y),y[u]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},v.keys=function(e){var a=[];for(var l in e)a.push(l);return a.reverse(),function l(){while(a.length){var t=a.pop();if(t in e)return l.value=t,l.done=!1,l}return l.done=!0,l}},v.values=F,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(L),!e)for(var a in this)"t"===a.charAt(0)&&i.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0],a=e.completion;if("throw"===a.type)throw a.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function t(t,i){return o.type="throw",o.arg=e,a.next=t,i&&(a.method="next",a.arg=l),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var u=i.call(r,"catchLoc"),s=i.call(r,"finallyLoc");if(u&&s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(u){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,a){for(var l=this.tryEntries.length-1;l>=0;--l){var t=this.tryEntries[l];if(t.tryLoc<=this.prev&&i.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=a&&a<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=e,r.arg=a,n?(this.method="next",this.next=n.finallyLoc,d):this.complete(r)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),d},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.finallyLoc===e)return this.complete(l.completion,l.afterLoc),L(l),d}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc===e){var t=l.completion;if("throw"===t.type){var i=t.arg;L(l)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,t){return this.delegate={iterator:F(e),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=l),d}}}function m(e,a,l,t){var i=a&&a.prototype instanceof A?a:A,n=Object.create(i.prototype),r=new C(t||[]);return n._invoke=k(e,l,r),n}function _(e,a,l){try{return{type:"normal",arg:e.call(a,l)}}catch(t){return{type:"throw",arg:t}}}function A(){}function S(){}function T(){}function w(e){["next","throw","return"].forEach(function(a){e[a]=function(e){return this._invoke(a,e)}})}function P(e){function a(l,t,n,r){var o=_(e[l],e,t);if("throw"!==o.type){var u=o.arg,s=u.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(e){a("next",e,n,r)},function(e){a("throw",e,n,r)}):Promise.resolve(s).then(function(e){u.value=e,n(u)},function(e){return a("throw",e,n,r)})}r(o.arg)}var l;function t(e,t){function i(){return new Promise(function(l,i){a(e,t,l,i)})}return l=l?l.then(i,i):i()}this._invoke=t}function k(e,a,l){var t=c;return function(i,n){if(t===h)throw new Error("Generator is already running");if(t===p){if("throw"===i)throw n;return O()}l.method=i,l.arg=n;while(1){var r=l.delegate;if(r){var o=D(r,l);if(o){if(o===d)continue;return o}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(t===c)throw t=p,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);t=h;var u=_(e,a,l);if("normal"===u.type){if(t=l.done?p:b,u.arg===d)continue;return{value:u.arg,done:l.done}}"throw"===u.type&&(t=p,l.method="throw",l.arg=u.arg)}}}function D(e,a){var t=e.iterator[a.method];if(t===l){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=l,D(e,a),"throw"===a.method))return d;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=_(t,e.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,d;var n=i.arg;return n?n.done?(a[e.resultName]=n.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=l),a.delegate=null,d):n:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,d)}function M(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function L(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function F(e){if(e){var a=e[r];if(a)return a.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function a(){while(++t<e.length)if(i.call(e,t))return a.value=e[t],a.done=!1,a;return a.value=l,a.done=!0,a};return n.next=n}}return{next:O}}function O(){return{value:l,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a18c:function(e,a,l){"use strict";(function(a,l){var t={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d","#5caf20","#30b0d7","#ff6d58","#1A79B9","#f97723","#f3792c"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function i(e,a){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var l=Object(e),t=1;t<arguments.length;t++){var i=arguments[t];if(null!=i)for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(l[n]=i[n])}return l}var n={toFixed:function(e,a){return a=a||2,this.isFloat(e)&&(e=e.toFixed(a)),e},isFloat:function(e){return e%1!==0},approximatelyEqual:function(e,a){return Math.abs(e-a)<1e-10},isSameSign:function(e,a){return Math.abs(e)===e&&Math.abs(a)===a||Math.abs(e)!==e&&Math.abs(a)!==a},isSameXCoordinateArea:function(e,a){return this.isSameSign(e.x,a.x)},isCollision:function(e,a){e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,a.end={},a.end.x=a.start.x+a.width,a.end.y=a.start.y-a.height;var l=a.start.x>e.end.x||a.end.x<e.start.x||a.end.y>e.start.y||a.start.y<e.end.y;return!l}};function r(e,a){var l=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(l,function(e,a,l,t){return a+a+l+l+t+t}),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(i[1],16),r=parseInt(i[2],16),o=parseInt(i[3],16);return"rgba("+n+","+r+","+o+","+a+")"}function o(e,a,l){if(isNaN(e))throw new Error("[wxCharts] unvalid series data!");l=l||10,a=a||"upper";var t=1;while(l<1)l*=10,t*=10;e="upper"===a?Math.ceil(e*t):Math.floor(e*t);while(e%l!==0)"upper"===a?e++:e--;return e/t}function u(e,a,l,t){for(var i=[],n=0;n<e.length;n++){for(var r={data:[],name:a[n],color:l[n]},o=0,u=t.length;o<u;o++)if(o<e[n])r.data.push(null);else{for(var s=0,v=0;v<e[n];v++)s+=t[o-v][1];r.data.push(+(s/e[n]).toFixed(3))}i.push(r)}return i}function s(e,a,l,t){var i=t.width-l.padding-a.xAxisPoints[0],n=a.eachSpacing*t.categories.length,r=e;return e>=0?r=0:Math.abs(e)>=n-i&&(r=i-n),r}function v(e,a,l){function t(e){while(e<0)e+=2*Math.PI;while(e>2*Math.PI)e-=2*Math.PI;return e}return e=t(e),a=t(a),l=t(l),a>l&&(l+=2*Math.PI,e<a&&(e+=2*Math.PI)),e>=a&&e<=l}function c(e,a,l){var t=e,i=l-a,n=t+(l-i-t)/Math.sqrt(2);n*=-1;var r=(l-i)*(Math.sqrt(2)-1)-(l-i-t)/Math.sqrt(2);return{transX:n,transY:r}}function b(e,a){function l(e,a){return!(!e[a-1]||!e[a+1])&&(e[a].y>=Math.max(e[a-1].y,e[a+1].y)||e[a].y<=Math.min(e[a-1].y,e[a+1].y))}var t=.2,i=.2,n=null,r=null,o=null,u=null;if(a<1?(n=e[0].x+(e[1].x-e[0].x)*t,r=e[0].y+(e[1].y-e[0].y)*t):(n=e[a].x+(e[a+1].x-e[a-1].x)*t,r=e[a].y+(e[a+1].y-e[a-1].y)*t),a>e.length-3){var s=e.length-1;o=e[s].x-(e[s].x-e[s-1].x)*i,u=e[s].y-(e[s].y-e[s-1].y)*i}else o=e[a+1].x-(e[a+2].x-e[a].x)*i,u=e[a+1].y-(e[a+2].y-e[a].y)*i;return l(e,a+1)&&(u=e[a+1].y),l(e,a)&&(r=e[a].y),{ctrA:{x:n,y:r},ctrB:{x:o,y:u}}}function h(e,a,l){return{x:l.x+e,y:l.y-a}}function p(e,a){if(a)while(n.isCollision(e,a))e.start.x>0?e.start.y--:e.start.x<0?e.start.y++:e.start.y>0?e.start.y++:e.start.y--;return e}function d(e,a){var l=0;return e.map(function(e){return e.color||(e.color=a.colors[l],l=(l+1)%a.colors.length),e})}function f(e,a){return e.map(function(e){return e.type||(e.type=a.type),e})}function g(e,a){var l=0,t=a-e;return l=t>=1e4?1e3:t>=1e3?100:t>=100?10:t>=10?5:t>=1?1:t>=.1?.1:.01,{minRange:o(e,"lower",l),maxRange:o(a,"upper",l)}}function x(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.fontSize;e=String(e);e=e.split("");for(var l=0,i=0;i<e.length;i++){var n=e[i];/[a-zA-Z]/.test(n)?l+=7:/[0-9]/.test(n)?l+=5.5:/\./.test(n)?l+=2.7:/-/.test(n)?l+=3.25:/[\u4e00-\u9fa5]/.test(n)?l+=10:/\(|\)/.test(n)?l+=3.73:/\s/.test(n)?l+=2.5:/%/.test(n)?l+=8:l+=10}return l*a/10}function y(e){return e.reduce(function(e,a){return(e.data?e.data:e).concat(a.data)},[])}function m(e){for(var a=new Array(e[0].data.length),l=0;l<a.length;l++)a[l]=0;for(var t=0;t<e.length;t++)for(l=0;l<a.length;l++)a[l]+=e[t].data[l];return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data).concat(a)},[])}function _(e,a,l){var t,i;return e.clientX?a.rotate?(i=a.height-e.clientX*a.pixelRatio,t=(e.pageY-l.currentTarget.offsetTop-a.height/a.pixelRatio/2*(a.pixelRatio-1))*a.pixelRatio):(t=e.clientX*a.pixelRatio,i=(e.pageY-l.currentTarget.offsetTop-a.height/a.pixelRatio/2*(a.pixelRatio-1))*a.pixelRatio):a.rotate?(i=a.height-e.x*a.pixelRatio,t=e.y*a.pixelRatio):(t=e.x*a.pixelRatio,i=e.y*a.pixelRatio),{x:t,y:i}}function A(e,a){for(var l=[],t=0;t<e.length;t++){var i=e[t];if(null!==i.data[a]&&"undefined"!==typeof i.data[a]){var n={};n.color=i.color,n.type=i.type,n.style=i.style,n.shape=i.shape,n.disableLegend=i.disableLegend,n.name=i.name,n.data=i.format?i.format(i.data[a]):i.data[a],l.push(n)}}return l}function S(e){var a=e.map(function(e){return x(e)});return Math.max.apply(null,a)}function T(e){for(var a=2*Math.PI/e,l=[],t=0;t<e;t++)l.push(a*t);return l.map(function(e){return-1*e+Math.PI/2})}function w(e,a,l,t){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.map(function(e){return{text:i.format?i.format(e,t[l]):e.name+": "+e.data,color:e.color}}),r=[],o={x:0,y:0},u=0;u<a.length;u++){var s=a[u];"undefined"!==typeof s[l]&&null!==s[l]&&r.push(s[l])}for(var v=0;v<r.length;v++){var c=r[v];o.x=Math.round(c.x),o.y+=c.y}return o.y/=r.length,{textList:n,offset:o}}function P(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},n=e.map(function(e){return{text:i.format?i.format(e,t[l]):e.name+": "+e.data,color:e.color,disableLegend:!!e.disableLegend}});n=n.filter(function(e){if(!0!==e.disableLegend)return e});for(var r=[],o={x:0,y:0},u=0;u<a.length;u++){var s=a[u];"undefined"!==typeof s[l]&&null!==s[l]&&r.push(s[l])}for(var v=0;v<r.length;v++){var c=r[v];o.x=Math.round(c.x),o.y+=c.y}return o.y/=r.length,{textList:n,offset:o}}function k(e,a,l,t,i,n){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var r=n.color.upFill,o=n.color.downFill,u=[r,r,o,r],s=[],v={text:i[t],color:null};s.push(v),a.map(function(a){0==t&&a.data[1]-a.data[0]<0?u[1]=o:(a.data[0]<e[t-1][1]&&(u[0]=o),a.data[1]<a.data[0]&&(u[1]=o),a.data[2]>e[t-1][1]&&(u[2]=r),a.data[3]<e[t-1][1]&&(u[3]=o));var l={text:"开盘："+a.data[0],color:u[0]},i={text:"收盘："+a.data[1],color:u[1]},n={text:"最低："+a.data[2],color:u[2]},v={text:"最高："+a.data[3],color:u[3]};s.push(l,i,n,v)});for(var c=[],b={x:0,y:0},h=0;h<l.length;h++){var p=l[h];"undefined"!==typeof p[t]&&null!==p[t]&&c.push(p[t])}return b.x=Math.round(c[0][0].x),{textList:s,offset:b}}function D(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=-1;return M(e,l,t)&&a.forEach(function(a,l){e.x+i>a&&(n=l)}),n}function M(e,a,l){return e.x<a.width-l.padding&&e.x>l.padding+l.yAxisWidth+l.yAxisTitleWidth&&e.y>l.padding&&e.y<a.height-l.legendHeight-l.xAxisHeight-l.padding}function L(e,a,l){var t=2*Math.PI/l,i=-1;if(F(e,a.center,a.radius)){var n=function(e){return e<0&&(e+=2*Math.PI),e>2*Math.PI&&(e-=2*Math.PI),e},r=Math.atan2(a.center.y-e.y,e.x-a.center.x);r*=-1,r<0&&(r+=2*Math.PI);var o=a.angleList.map(function(e){return e=n(-1*e),e});o.forEach(function(e,a){var l=n(e-t/2),o=n(e+t/2);o<l&&(o+=2*Math.PI),(r>=l&&r<=o||r+2*Math.PI>=l&&r+2*Math.PI<=o)&&(i=a)})}return i}function C(e,a){var l=-1;if(F(e,a.center,a.radius)){var t=Math.atan2(a.center.y-e.y,e.x-a.center.x);t=-t;for(var i=0,n=a.series.length;i<n;i++){var r=a.series[i];if(v(t,r._start_,r._start_+2*r._proportion_*Math.PI)){l=i;break}}}return l}function F(e,a,l){return Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2)<=Math.pow(l,2)}function O(e){var a=[],l=[];return e.forEach(function(e,t){null!==e?l.push(e):(l.length&&a.push(l),l=[])}),l.length&&a.push(l),a}function R(e,a,l){if(!1===a.legend)return{legendList:[],legendHeight:0};for(var t=5*a.pixelRatio,i=8*a.pixelRatio,n=15*a.pixelRatio,r=[],o=0,u=[],s=0;s<e.length;s++){var v=e[s],c=3*t+n+x(v.name||"undefined");o+c>a.width?(r.push(u),o=c,u=[v]):(o+=c,u.push(v))}return u.length&&r.push(u),{legendList:r,legendHeight:r.length*(l.fontSize+i)+t}}function I(e,a,l){var t={angle:0,xAxisHeight:l.xAxisHeight},i=V(e,a,l),n=i.eachSpacing,r=e.map(function(e){return x(e)}),o=Math.max.apply(this,r);return 1==a.xAxis.rotateLabel&&o+2*l.xAxisTextPadding>n&&(t.angle=45*Math.PI/180,t.xAxisHeight=2*l.xAxisTextPadding+o*Math.sin(t.angle)),t}function E(e,a,l,t,i){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=i.extra.radar||{};r.max=r.max||0;for(var o=Math.max(r.max,Math.max.apply(null,y(t))),u=[],s=function(i){var r=t[i],s={};s.color=r.color,s.data=[],r.data.forEach(function(t,i){var r={};r.angle=e[i],r.proportion=t/o,r.position=h(l*r.proportion*n*Math.cos(r.angle),l*r.proportion*n*Math.sin(r.angle),a),s.data.push(r)}),u.push(s)},v=0;v<t.length;v++)s(v);return u}function $(e,a){for(var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=0,i=0,n=0;n<e.length;n++){var r=e[n];r.data=null===r.data?0:r.data,t+=r.data}for(var o=0;o<e.length;o++){var u=e[o];u.data=null===u.data?0:u.data,u._proportion_=0===t?1/e.length*l:u.data/t*l,u._radius_=a}for(var s=0;s<e.length;s++){var v=e[s];v._start_=i,i+=2*v._proportion_*Math.PI}return e}function j(e,a,l,t){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=0,r=0,o=[],u=0;u<e.length;u++){var s=e[u];s.data=null===s.data?0:s.data,n+=s.data,o.push(s.data)}for(var v=o.pop(),c=o.shift(),b=t-l,h=0;h<e.length;h++){var p=e[h];p.data=null===p.data?0:p.data,p._proportion_=0===n||"area"==a?1/e.length*i:p.data/n*i,p._radius_=l+b*((p.data-v)/(c-v))}for(var d=0;d<e.length;d++){var f=e[d];f._start_=r,r+=2*f._proportion_*Math.PI}return e}function z(e,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==l&&(l=.999999);for(var t=0;t<e.length;t++){var i=e[t];i.data=null===i.data?0:i.data;var n=void 0;n="default"==a.type?a.startAngle-a.endAngle+1:2,i._proportion_=n*i.data*l+a.startAngle,i._proportion_>=2&&(i._proportion_=i._proportion_%2)}return e}function B(e,a,l){for(var t=a-l+1,i=a,n=0;n<e.length;n++)e[n].value=null===e[n].value?0:e[n].value,e[n]._startAngle_=i,e[n]._endAngle_=t*e[n].value+a,e[n]._endAngle_>=2&&(e[n]._endAngle_=e[n]._endAngle_%2),i=e[n]._endAngle_;return e}function N(e,a,l){for(var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=0;i<e.length;i++){var n=e[i];if(n.data=null===n.data?0:n.data,"auto"==l.pointer.color){for(var r=0;r<a.length;r++)if(n.data<=a[r].value){n.color=a[r].color;break}}else n.color=l.pointer.color;var o=l.startAngle-l.endAngle+1;n._endAngle_=o*n.data+l.startAngle,n._oldAngle_=l.oldAngle,l.oldAngle<l.endAngle&&(n._oldAngle_+=2),n.data>=l.oldData?n._proportion_=(n._endAngle_-n._oldAngle_)*t+l.oldAngle:n._proportion_=n._oldAngle_-(n._oldAngle_-n._endAngle_)*t,n._proportion_>=2&&(n._proportion_=n._proportion_%2)}return e}function W(e){e=$(e);for(var a=0,l=0;l<e.length;l++){var t=e[l],i=t.format?t.format(+t._proportion_.toFixed(2)):n.toFixed(100*t._proportion_)+"%";a=Math.max(a,x(i))}return a}function H(e,a,l,t,i,n){return e.map(function(e){return null===e?null:(e.width=(a-2*i.columePadding)/l,n.extra.column&&n.extra.column.width&&+n.extra.column.width>0?e.width=Math.min(e.width,+n.extra.column.width):e.width=Math.min(e.width,25),e.x+=(t+.5-l/2)*e.width,e)})}function U(e,a,l,t,i,n,r){return e.map(function(e){return null===e?null:(e.width=a-2*i.columePadding,n.extra.column&&n.extra.column.width&&+n.extra.column.width>0?e.width=Math.min(e.width,+n.extra.column.width):e.width=Math.min(e.width,25),t>0&&(e.width-=2*r),e)})}function q(e,a,l,t,i,n,r){return e.map(function(e,l){return null===e?null:(e.width=a-2*i.columePadding,n.extra.column&&n.extra.column.width&&+n.extra.column.width>0?e.width=Math.min(e.width,+n.extra.column.width):e.width=Math.min(e.width,25),e)})}function V(e,a,l){var t=l.yAxisWidth+l.yAxisTitleWidth,i=a.width-2*l.padding-t,n=a.enableScroll?Math.min(a.xAxis.itemCount,e.length):e.length,r=i/n,o=[],u=l.padding+t,s=a.width-l.padding;return e.forEach(function(e,a){o.push(u+a*r)}),!0===a.enableScroll?o.push(u+e.length*r):o.push(s),{xAxisPoints:o,startX:u,endX:s,eachSpacing:r}}function X(e,a,l,t,i,n,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u=[],s=n.height-2*r.padding-r.xAxisHeight-r.legendHeight;return e.forEach(function(e,v){if(null===e)u.push(null);else{var c=[];e.forEach(function(e,u){var b={};b.x=t[v]+Math.round(i/2);var h=e.value||e,p=s*(h-a)/(l-a);p*=o,b.y=n.height-r.xAxisHeight-r.legendHeight-Math.round(p)-r.padding,c.push(b)}),u.push(c)}}),u}function G(e,a,l,t,i,n,r){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u=[],s=n.height-2*r.padding-r.xAxisHeight-r.legendHeight;return e.forEach(function(e,v){if(null===e)u.push(null);else{var c={};c.color=e.color,c.x=t[v]+Math.round(i/2);var b=e;"object"===typeof e&&null!==e&&(b=e.value);var h=s*(b-a)/(l-a);h*=o,c.y=n.height-r.xAxisHeight-r.legendHeight-Math.round(h)-r.padding,u.push(c)}}),u}function Y(e,a,l,t,i,n,r,o,u){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,v=[],c=n.height-2*r.padding-r.xAxisHeight-r.legendHeight;return e.forEach(function(e,b){if(null===e)v.push(null);else{var h={};if(h.color=e.color,h.x=t[b]+Math.round(i/2),o>0){for(var p=0,d=0;d<=o;d++)p+=u[d].data[b];var f=p-e,g=c*(p-a)/(l-a),x=c*(f-a)/(l-a)}else p=e,g=c*(p-a)/(l-a),x=0;var y=x;g*=s,y*=s,h.y=n.height-r.xAxisHeight-r.legendHeight-Math.round(g)-r.padding,h.y0=n.height-r.xAxisHeight-r.legendHeight-Math.round(y)-r.padding,v.push(h)}}),v}function J(e,a,l,t){var i;i="stack"==t?m(e):y(e);var n=[];i=i.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),i.map(function(e){"object"===typeof e?e.constructor==Array?e.map(function(e){n.push(e)}):n.push(e.value):n.push(e)});var r=0,o=0;if(n.length>0&&(r=Math.min.apply(this,n),o=Math.max.apply(this,n)),"number"===typeof a.yAxis.min&&(r=Math.min(a.yAxis.min,r)),"number"===typeof a.yAxis.max&&(o=Math.max(a.yAxis.max,o)),r===o){var u=o||10;o+=u}for(var s=g(r,o),v=s.minRange,c=s.maxRange,b=[],h=(c-v)/l.yAxisSplit,p=0;p<=l.yAxisSplit;p++)b.push(v+h*p);return b.reverse()}function K(e,a,l){var t=i({},a.extra.column||{type:""}),r=J(e,a,l,t.type),o=l.yAxisWidth,u=r.map(function(e){return e=n.toFixed(e,2),e=a.yAxis.format?a.yAxis.format(Number(e)):e,o=Math.max(o,x(e)+5),e});return!0===a.yAxis.disabled&&(o=0),{rangesFormat:u,ranges:r,yAxisWidth:o}}function Z(e,a,l,t,i){var n=J(a,l,t),r=l.height-2*t.padding-t.xAxisHeight-t.legendHeight,o=n[0],u=n[n.length-1],s=t.padding,v=t.padding+r,c=o-(o-u)*(e-s)/(v-s);return c=l.yAxis.format?l.yAxis.format(Number(c)):c,c}function Q(e,a){!0!==a.rotateLock?(e.translate(a.height,0),e.rotate(90*Math.PI/180)):!0!==a._rotate_&&(e.translate(a.height,0),e.rotate(90*Math.PI/180),a._rotate_=!0)}function ee(e,a,l,t,i){t.beginPath(),t.setStrokeStyle("#ffffff"),t.setLineWidth(1*i.pixelRatio),t.setFillStyle(a),"diamond"===l?e.forEach(function(e,a){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y),t.lineTo(e.x,e.y+4.5),t.lineTo(e.x+4.5,e.y),t.lineTo(e.x,e.y-4.5))}):"circle"===l?e.forEach(function(e,a){null!==e&&(t.moveTo(e.x+3.5*i.pixelRatio,e.y),t.arc(e.x,e.y,4*i.pixelRatio,0,2*Math.PI,!1))}):"rect"===l?e.forEach(function(e,a){null!==e&&(t.moveTo(e.x-3.5,e.y-3.5),t.rect(e.x-3.5,e.y-3.5,7,7))}):"triangle"===l&&e.forEach(function(e,a){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y+4.5),t.lineTo(e.x+4.5,e.y+4.5),t.lineTo(e.x,e.y-4.5))}),t.closePath(),t.fill(),t.stroke()}function ae(e,a,l){var t=e.title.fontSize||a.titleFontSize,i=e.subtitle.fontSize||a.subtitleFontSize,n=e.title.name||"",r=e.subtitle.name||"",o=e.title.color||a.titleColor,u=e.subtitle.color||a.subtitleColor,s=n?t:0,v=r?i:0,c=5;if(r){var b=x(r,i),h=(e.width-b)/2+(e.subtitle.offsetX||0),p=(e.height-a.legendHeight+i)/2+(e.subtitle.offsetY||0);n&&(p-=(s+c)/2),l.beginPath(),l.setFontSize(i),l.setFillStyle(u),l.fillText(r,h,p),l.closePath(),l.stroke()}if(n){var d=x(n,t),f=(e.width-d)/2+(e.title.offsetX||0),g=(e.height-a.legendHeight+t)/2+(e.title.offsetY||0);r&&(g+=(v+c)/2),l.beginPath(),l.setFontSize(t),l.setFillStyle(o),l.fillText(n,f,g),l.closePath(),l.stroke()}}function le(e,a,l,t){var i=a.data,n=void 0==a.textColor?"#666666":a.textColor;e.forEach(function(e,r){if(null!==e){t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(n);var o=i[r];"object"===typeof i[r]&&null!==i[r]&&(o=i[r].value);var u=a.format?a.format(o):o;t.fillText(u,e.x-x(u)/2,e.y-2),t.closePath(),t.stroke()}})}function te(e,a,l,t,i,n){a-=e.width/2+i.gaugeLabelTextMargin;for(var r=e.startAngle-e.endAngle+1,o=r/e.splitLine.splitNumber,u=e.endNumber-e.startNumber,s=u/e.splitLine.splitNumber,v=e.startAngle,c=e.startNumber,b=0;b<e.splitLine.splitNumber+1;b++){var h={x:a*Math.cos(v*Math.PI),y:a*Math.sin(v*Math.PI)};h.x+=l.x-x(c)/2,h.y+=l.y;var p=h.x,d=h.y;n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(e.labelColor||"#666666"),n.fillText(c,p,d+i.fontSize/2),n.closePath(),n.stroke(),v+=o,v>=2&&(v%=2),c+=s}}function ie(e,a,l,t,i,r){var o=t.extra.radar||{};a+=i.radarLabelTextMargin,e.forEach(function(e,u){var s={x:a*Math.cos(e),y:a*Math.sin(e)},v=h(s.x,s.y,l),c=v.x,b=v.y;n.approximatelyEqual(s.x,0)?c-=x(t.categories[u]||"")/2:s.x<0&&(c-=x(t.categories[u]||"")),r.beginPath(),r.setFontSize(i.fontSize),r.setFillStyle(o.labelColor||"#666666"),r.fillText(t.categories[u]||"",c,b+i.fontSize/2),r.closePath(),r.stroke()})}function ne(e,a,l,t,i,r){for(var o=l.pieChartLinePadding,u=[],s=null,v=e.map(function(e){var a=2*Math.PI-(e._start_+2*Math.PI*e._proportion_/2),l=e.format?e.format(+e._proportion_.toFixed(2)):n.toFixed(100*e._proportion_)+"%",t=e.color,i=e._radius_;return{arc:a,text:l,color:t,radius:i}}),c=0;c<v.length;c++){var b=v[c],d=Math.cos(b.arc)*(b.radius+o),f=Math.sin(b.arc)*(b.radius+o),g=Math.cos(b.arc)*b.radius,y=Math.sin(b.arc)*b.radius,m=d>=0?d+l.pieChartTextPadding:d-l.pieChartTextPadding,_=f,A=x(b.text),S=_;s&&n.isSameXCoordinateArea(s.start,{x:m})&&(S=m>0?Math.min(_,s.start.y):d<0?Math.max(_,s.start.y):_>0?Math.max(_,s.start.y):Math.min(_,s.start.y)),m<0&&(m-=A);var T={lineStart:{x:g,y:y},lineEnd:{x:d,y:f},start:{x:m,y:S},width:A,height:l.fontSize,text:b.text,color:b.color};s=p(T,s),u.push(s)}for(var w=0;w<u.length;w++){var P=u[w],k=h(P.lineStart.x,P.lineStart.y,r),D=h(P.lineEnd.x,P.lineEnd.y,r),M=h(P.start.x,P.start.y,r);t.setLineWidth(1*a.pixelRatio),t.setFontSize(l.fontSize),t.beginPath(),t.setStrokeStyle(P.color),t.setFillStyle(P.color),t.moveTo(k.x,k.y);var L=P.start.x<0?M.x+P.width:M.x,C=P.start.x<0?M.x-5:M.x+5;t.quadraticCurveTo(D.x,D.y,L,M.y),t.moveTo(k.x,k.y),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(M.x+P.width,M.y),t.arc(L,M.y,2,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle("#666666"),t.fillText(P.text,C,M.y+3),t.closePath(),t.stroke(),t.closePath()}}function re(e,a,l,t){var i=a.extra.tooltip||{};i.gridType=void 0==i.gridType?"solid":i.gridType,i.dashLength=void 0==i.dashLength?4:i.dashLength;var n=l.padding,o=a.height-l.padding-l.xAxisHeight-l.legendHeight;if("dash"==i.gridType&&t.setLineDash([i.dashLength,i.dashLength]),t.beginPath(),t.setStrokeStyle(i.gridColor||"#cccccc"),t.setLineWidth(1*a.pixelRatio),t.moveTo(e,n),t.lineTo(e,o),t.closePath(),t.stroke(),t.setLineDash([]),i.xAxisLabel){var u=a.categories[a.tooltip.index];t.setFontSize(l.fontSize);var s=t.measureText(u).width,v=e-l.toolTipPadding-.5*s,c=o;t.beginPath(),t.setFillStyle(r(i.labelBgColor||l.toolTipBackground,i.labelBgOpacity||l.toolTipOpacity)),t.setStrokeStyle(i.labelBgColor||l.toolTipBackground),t.setLineWidth(1*a.pixelRatio),t.rect(v,c,s+2*l.toolTipPadding,l.fontSize+2*l.toolTipPadding),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(i.labelFontColor||l.fontColor),t.fillText(u,v+2*l.toolTipPadding,c+l.toolTipPadding+l.fontSize),t.closePath(),t.stroke()}}function oe(e,a,l,t,i){var n=e.extra.tooltip||{};n.gridType=void 0==n.gridType?"solid":n.gridType,n.dashLength=void 0==n.dashLength?4:n.dashLength;var o=a.padding+a.yAxisWidth+a.yAxisTitleWidth,u=e.width-a.padding;if("dash"==n.gridType&&l.setLineDash([n.dashLength,n.dashLength]),l.beginPath(),l.setStrokeStyle(n.gridColor||"#cccccc"),l.setLineWidth(1*e.pixelRatio),l.moveTo(o,e.tooltip.offset.y),l.lineTo(u,e.tooltip.offset.y),l.closePath(),l.stroke(),l.setLineDash([]),n.yAxisLabel){var s=Z(e.tooltip.offset.y,e.series,e,a,t);l.setFontSize(a.fontSize);var v=l.measureText(s).width,c=o-2*a.toolTipPadding-v,b=e.tooltip.offset.y;l.beginPath(),l.setFillStyle(r(n.labelBgColor||a.toolTipBackground,n.labelBgOpacity||a.toolTipOpacity)),l.setStrokeStyle(n.labelBgColor||a.toolTipBackground),l.setLineWidth(1*e.pixelRatio),l.rect(c,b-.5*a.fontSize-a.toolTipPadding,v+2*a.toolTipPadding,a.fontSize+2*a.toolTipPadding),l.closePath(),l.stroke(),l.fill(),l.beginPath(),l.setFontSize(a.fontSize),l.setFillStyle(n.labelFontColor||a.fontColor),l.fillText(s,c+a.toolTipPadding,b+.5*a.fontSize),l.closePath(),l.stroke()}}function ue(e,a,l,t,i){var n=a.extra.tooltip||{activeBgColor:"#000000",activeBgOpacity:.08};n.activeBgColor=n.activeBgColor?n.activeBgColor:"#000000",n.activeBgOpacity=n.activeBgOpacity?n.activeBgOpacity:.08;var o=l.padding,u=a.height-l.padding-l.xAxisHeight-l.legendHeight;t.beginPath(),t.setFillStyle(r(n.activeBgColor,n.activeBgOpacity)),t.rect(e-i/2,o,i,u-o),t.closePath(),t.fill()}function se(e,a,l,t,n,o,u){var s=l.extra.tooltip||{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"};s.bgColor=s.bgColor?s.bgColor:"#000000",s.bgOpacity=s.bgOpacity?s.bgOpacity:.7,s.fontColor=s.fontColor?s.fontColor:"#FFFFFF";var v=4*l.pixelRatio,c=5*l.pixelRatio,b=8*l.pixelRatio,h=!1;"line"!=l.type&&"area"!=l.type&&"candle"!=l.type&&"mix"!=l.type||re(l.tooltip.offset.x,l,t,n),a=i({x:0,y:0},a),a.y-=8*l.pixelRatio;var p=e.map(function(e){return x(e.text)}),d=v+c+4*t.toolTipPadding+Math.max.apply(null,p),f=2*t.toolTipPadding+e.length*t.toolTipLineHeight;a.x-Math.abs(l._scrollDistance_)+b+d>l.width&&(h=!0),n.beginPath(),n.setFillStyle(r(s.bgColor||t.toolTipBackground,s.bgOpacity||t.toolTipOpacity)),h?(n.moveTo(a.x,a.y+10*l.pixelRatio),n.lineTo(a.x-b,a.y+10*l.pixelRatio-5*l.pixelRatio),n.lineTo(a.x-b,a.y),n.lineTo(a.x-b-Math.round(d),a.y),n.lineTo(a.x-b-Math.round(d),a.y+f),n.lineTo(a.x-b,a.y+f),n.lineTo(a.x-b,a.y+10*l.pixelRatio+5*l.pixelRatio),n.lineTo(a.x,a.y+10*l.pixelRatio)):(n.moveTo(a.x,a.y+10*l.pixelRatio),n.lineTo(a.x+b,a.y+10*l.pixelRatio-5*l.pixelRatio),n.lineTo(a.x+b,a.y),n.lineTo(a.x+b+Math.round(d),a.y),n.lineTo(a.x+b+Math.round(d),a.y+f),n.lineTo(a.x+b,a.y+f),n.lineTo(a.x+b,a.y+10*l.pixelRatio+5*l.pixelRatio),n.lineTo(a.x,a.y+10*l.pixelRatio)),n.closePath(),n.fill(),e.forEach(function(e,l){if(null!==e.color){n.beginPath(),n.setFillStyle(e.color);var i=a.x+b+2*t.toolTipPadding,r=a.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*l+t.toolTipPadding+1;h&&(i=a.x-d-b+2*t.toolTipPadding),n.fillRect(i,r,v,t.fontSize),n.closePath()}}),e.forEach(function(e,l){var i=a.x+b+2*t.toolTipPadding+v+c;h&&(i=a.x-d-b+2*t.toolTipPadding+ +v+c);var r=a.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*l+t.toolTipPadding;n.beginPath(),n.setFontSize(t.fontSize),n.setFillStyle(s.fontColor),n.fillText(e.text,i,r+t.fontSize),n.closePath(),n.stroke()})}function ve(e,a,l,t){var i=l.xAxisHeight+(a.height-l.xAxisHeight-x(e))/2;t.save(),t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(a.yAxis.titleFontColor||"#333333"),t.translate(0,a.height),t.rotate(-90*Math.PI/180),t.fillText(e,i,l.padding+.5*l.fontSize),t.closePath(),t.stroke(),t.restore()}function ce(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.column||{type:{},meter:{}};n.type=void 0==n.type?"group":n.type,n.meter=n.meter||{},n.meter.border=void 0==n.meter.border?4:n.meter.border,n.meter.fillColor=void 0==n.meter.fillColor?"#FFFFFF":n.meter.fillColor;var r=K(e,a,l),o=r.ranges,u=V(a.categories,a,l),s=u.xAxisPoints,v=u.eachSpacing,c=o.pop(),b=o.shift(),h=[];return t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&t.translate(a._scrollDistance_,0),a.tooltip&&a.tooltip.textList&&a.tooltip.textList.length&&1===i&&ue(a.tooltip.offset.x,a,l,t,v),e.forEach(function(r,o){var u=r.data;switch(n.type){case"group":var p=G(u,c,b,s,v,a,l,i),d=Y(u,c,b,s,v,a,l,o,e,i);h.push(d),p=H(p,v,e.length,o,l,a),p.forEach(function(e,i){if(null!==e){t.beginPath(),t.setFillStyle(e.color||r.color);var n=e.x-e.width/2+1,o=a.height-e.y-l.padding-l.xAxisHeight-l.legendHeight;t.moveTo(n,e.y),t.fillRect(n,e.y,e.width-2,o),t.closePath(),t.fill()}});break;case"stack":p=Y(u,c,b,s,v,a,l,o,e,i);h.push(p),p=q(p,v,e.length,o,l,a,e),p.forEach(function(e,i){if(null!==e){t.beginPath(),t.setFillStyle(e.color||r.color);var n=e.x-e.width/2+1,u=a.height-e.y-l.padding-l.xAxisHeight-l.legendHeight,s=a.height-e.y0-l.padding-l.xAxisHeight-l.legendHeight;o>0&&(u-=s),t.moveTo(n,e.y),t.fillRect(n,e.y,e.width-2,u),t.closePath(),t.fill()}});break;case"meter":p=G(u,c,b,s,v,a,l,i);h.push(p),p=U(p,v,e.length,o,l,a,n.meter.border),0==o?p.forEach(function(e,i){if(null!==e){t.beginPath(),t.setFillStyle(n.meter.fillColor);var o=e.x-e.width/2+1,u=a.height-e.y-l.padding-l.xAxisHeight-l.legendHeight;t.moveTo(o,e.y),t.fillRect(o,e.y,e.width-2,u),t.closePath(),t.fill(),t.beginPath(),t.setStrokeStyle(r.color),t.setLineWidth(n.meter.border*a.pixelRatio),t.moveTo(o+.5*n.meter.border,e.y+u),t.lineTo(o+.5*n.meter.border,e.y+.5*n.meter.border),t.lineTo(o+e.width-n.meter.border,e.y+.5*n.meter.border),t.lineTo(o+e.width-n.meter.border,e.y+u),t.stroke()}}):p.forEach(function(e,i){if(null!==e){t.beginPath(),t.setFillStyle(e.color||r.color);var n=e.x-e.width/2+1,o=a.height-e.y-l.padding-l.xAxisHeight-l.legendHeight;t.moveTo(n,e.y),t.rect(n,e.y,e.width-2,o),t.closePath(),t.fill()}});break}}),!1!==a.dataLabel&&1===i&&e.forEach(function(r,o){var u=r.data;switch(n.type){case"group":var h=G(u,c,b,s,v,a,l,i);h=H(h,v,e.length,o,l,a),le(h,r,l,t);break;case"stack":h=Y(u,c,b,s,v,a,l,o,e,i);le(h,r,l,t);break;case"meter":h=G(u,c,b,s,v,a,l,i);le(h,r,l,t);break}}),t.restore(),{xAxisPoints:s,calPoints:h,eachSpacing:v}}function be(e,a,l,t,i){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=l.extra.candle||{color:{},average:{}};r.color.upLine=r.color.upLine?r.color.upLine:"#f04864",r.color.upFill=r.color.upFill?r.color.upFill:"#f04864",r.color.downLine=r.color.downLine?r.color.downLine:"#2fc25b",r.color.downFill=r.color.downFill?r.color.downFill:"#2fc25b",r.average.show=!0===r.average.show,r.average.name=r.average.name?r.average.name:[],r.average.day=r.average.day?r.average.day:[],r.average.color=r.average.color?r.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],l.extra.candle=r;var o=K(e,l,t),u=o.ranges,s=V(l.categories,l,t),v=s.xAxisPoints,c=s.eachSpacing,h=u.pop(),p=u.shift(),d=[];return i.save(),l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&i.translate(l._scrollDistance_,0),r.average.show&&a.forEach(function(e,a){var r=e.data,o=G(r,h,p,v,c,l,t,n),u=O(o);u.forEach(function(a,l){i.beginPath(),i.setStrokeStyle(e.color),i.setLineWidth(1),1===a.length?(i.moveTo(a[0].x,a[0].y),i.arc(a[0].x,a[0].y,1,0,2*Math.PI)):(i.moveTo(a[0].x,a[0].y),a.forEach(function(e,l){if(l>0){var t=b(a,l-1);i.bezierCurveTo(t.ctrA.x,t.ctrA.y,t.ctrB.x,t.ctrB.y,e.x,e.y)}}),i.moveTo(a[0].x,a[0].y)),i.closePath(),i.stroke()})}),e.forEach(function(e,a){var o=e.data,u=X(o,h,p,v,c,l,t,n);d.push(u);var s=O(u);s=s[0],s.forEach(function(e,a){i.beginPath(),o[a][1]-o[a][0]>0?(i.setStrokeStyle(r.color.upLine),i.setFillStyle(r.color.upFill),i.setLineWidth(1*l.pixelRatio),i.moveTo(e[3].x,e[3].y),i.lineTo(e[1].x,e[1].y),i.lineTo(e[1].x-c/4,e[1].y),i.lineTo(e[0].x-c/4,e[0].y),i.lineTo(e[0].x,e[0].y),i.lineTo(e[2].x,e[2].y),i.lineTo(e[0].x,e[0].y),i.lineTo(e[0].x+c/4,e[0].y),i.lineTo(e[1].x+c/4,e[1].y),i.lineTo(e[1].x,e[1].y),i.moveTo(e[3].x,e[3].y)):(i.setStrokeStyle(r.color.downLine),i.setFillStyle(r.color.downFill),i.setLineWidth(1*l.pixelRatio),i.moveTo(e[3].x,e[3].y),i.lineTo(e[0].x,e[0].y),i.lineTo(e[0].x-c/4,e[0].y),i.lineTo(e[1].x-c/4,e[1].y),i.lineTo(e[1].x,e[1].y),i.lineTo(e[2].x,e[2].y),i.lineTo(e[1].x,e[1].y),i.lineTo(e[1].x+c/4,e[1].y),i.lineTo(e[0].x+c/4,e[0].y),i.lineTo(e[0].x,e[0].y),i.moveTo(e[3].x,e[3].y)),i.closePath(),i.fill(),i.stroke()})}),i.restore(),{xAxisPoints:v,calPoints:d,eachSpacing:c}}function he(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.area||{type:"straight",opacity:.5,addLine:!1,width:2};n.type=n.type?n.type:"straight",n.opacity=n.opacity?n.opacity:.2,n.addLine=1==n.addLine,n.width=n.width?n.width:2;var o=K(e,a,l),u=o.ranges,s=V(a.categories,a,l),v=s.xAxisPoints,c=s.eachSpacing,h=u.pop(),p=u.shift(),d=a.height-l.padding-l.xAxisHeight-l.legendHeight,f=[];return t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&t.translate(a._scrollDistance_,0),a.tooltip&&a.tooltip.textList&&a.tooltip.textList.length&&1===i&&re(a.tooltip.offset.x,a,l,t),e.forEach(function(e,o){var u=e.data,s=G(u,h,p,v,c,a,l,i);f.push(s);for(var g=O(s),x=function(l){var i=g[l];if(t.beginPath(),t.setStrokeStyle(r(e.color,n.opacity)),t.setFillStyle(r(e.color,n.opacity)),t.setLineWidth(n.width*a.pixelRatio),i.length>1){var o=i[0],u=i[i.length-1];t.moveTo(o.x,o.y),"curve"===n.type?i.forEach(function(e,a){if(a>0){var l=b(i,a-1);t.bezierCurveTo(l.ctrA.x,l.ctrA.y,l.ctrB.x,l.ctrB.y,e.x,e.y)}}):i.forEach(function(e,a){a>0&&t.lineTo(e.x,e.y)}),t.lineTo(u.x,d),t.lineTo(o.x,d),t.lineTo(o.x,o.y)}else{var s=i[0];t.moveTo(s.x-c/2,s.y),t.lineTo(s.x+c/2,s.y),t.lineTo(s.x+c/2,d),t.lineTo(s.x-c/2,d),t.moveTo(s.x-c/2,s.y)}t.closePath(),t.fill(),n.addLine&&(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(n.width*a.pixelRatio),1===i.length?(t.moveTo(i[0].x,i[0].y),t.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(t.moveTo(i[0].x,i[0].y),"curve"===n.type?i.forEach(function(e,a){if(a>0){var l=b(i,a-1);t.bezierCurveTo(l.ctrA.x,l.ctrA.y,l.ctrB.x,l.ctrB.y,e.x,e.y)}}):i.forEach(function(e,a){a>0&&t.lineTo(e.x,e.y)}),t.moveTo(i[0].x,i[0].y)),t.closePath(),t.stroke())},y=0;y<g.length;y++)x(y);if(!1!==a.dataPointShape){var m=l.dataPointShape[o%l.dataPointShape.length];ee(s,e.color,m,t,a)}}),!1!==a.dataLabel&&1===i&&e.forEach(function(e,n){var r=e.data,o=G(r,h,p,v,c,a,l,i);le(o,e,l,t)}),t.restore(),{xAxisPoints:v,calPoints:f,eachSpacing:c}}function pe(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.line||{type:"straight",width:2};n.type=n.type?n.type:"straight",n.width=n.width?n.width:2;var r=K(e,a,l),o=r.ranges,u=V(a.categories,a,l),s=u.xAxisPoints,v=u.eachSpacing,c=o.pop(),h=o.shift(),p=[];return t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&t.translate(a._scrollDistance_,0),a.tooltip&&a.tooltip.textList&&a.tooltip.textList.length&&1===i&&re(a.tooltip.offset.x,a,l,t),e.forEach(function(e,r){var o=e.data,u=G(o,c,h,s,v,a,l,i);p.push(u);var d=O(u);if(d.forEach(function(l,i){t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(n.width*a.pixelRatio),1===l.length?(t.moveTo(l[0].x,l[0].y),t.arc(l[0].x,l[0].y,1,0,2*Math.PI)):(t.moveTo(l[0].x,l[0].y),"curve"===n.type?l.forEach(function(e,a){if(a>0){var i=b(l,a-1);t.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,e.x,e.y)}}):l.forEach(function(e,a){a>0&&t.lineTo(e.x,e.y)}),t.moveTo(l[0].x,l[0].y)),t.closePath(),t.stroke()}),!1!==a.dataPointShape){var f=l.dataPointShape[r%l.dataPointShape.length];ee(u,e.color,f,t,a)}}),!1!==a.dataLabel&&1===i&&e.forEach(function(e,n){var r=e.data,o=G(r,c,h,s,v,a,l,i);le(o,e,l,t)}),t.restore(),{xAxisPoints:s,calPoints:p,eachSpacing:v}}function de(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=K(e,a,l),r=n.ranges,o=V(a.categories,a,l),u=o.xAxisPoints,s=o.eachSpacing,v=r.pop(),c=r.shift(),h=a.height-l.padding-l.xAxisHeight-l.legendHeight,p=[],d=0,f=0;if(e.forEach(function(e,a){"column"==e.type&&(f+=1)}),t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&t.translate(a._scrollDistance_,0),a.tooltip&&a.tooltip.textList&&a.tooltip.textList.length&&1===i&&re(a.tooltip.offset.x,a,l,t),e.forEach(function(e,n){var r=e.data,o=G(r,v,c,u,s,a,l,i);if(p.push(o),"column"==e.type&&(o=H(o,s,f,d,l,a),o.forEach(function(i,n){if(null!==i){t.beginPath(),t.setFillStyle(i.color||e.color);var r=i.x-i.width/2+1,o=a.height-i.y-l.padding-l.xAxisHeight-l.legendHeight;t.moveTo(r,i.y),t.rect(r,i.y,i.width-2,o),t.closePath(),t.fill()}}),d+=1),"area"==e.type)for(var g=O(o),x=function(l){var i=g[l];if(t.beginPath(),t.setStrokeStyle(e.color),t.setFillStyle(e.color),t.setGlobalAlpha(.2),t.setLineWidth(2*a.pixelRatio),i.length>1){m=i[0];var n=i[i.length-1];t.moveTo(m.x,m.y),"curve"===e.style?i.forEach(function(e,a){if(a>0){var l=b(i,a-1);t.bezierCurveTo(l.ctrA.x,l.ctrA.y,l.ctrB.x,l.ctrB.y,e.x,e.y)}}):i.forEach(function(e,a){a>0&&t.lineTo(e.x,e.y)}),t.lineTo(n.x,h),t.lineTo(m.x,h),t.lineTo(m.x,m.y)}else{var r=i[0];t.moveTo(r.x-s/2,r.y),t.lineTo(r.x+s/2,r.y),t.lineTo(r.x+s/2,h),t.lineTo(r.x-s/2,h),t.moveTo(r.x-s/2,r.y)}t.closePath(),t.fill(),t.setGlobalAlpha(1)},y=0;y<g.length;y++){var m;x(y)}if("line"==e.type){var _=O(o);_.forEach(function(l,i){t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*a.pixelRatio),1===l.length?(t.moveTo(l[0].x,l[0].y),t.arc(l[0].x,l[0].y,1,0,2*Math.PI)):(t.moveTo(l[0].x,l[0].y),"curve"==e.style?l.forEach(function(e,a){if(a>0){var i=b(l,a-1);t.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,e.x,e.y)}}):l.forEach(function(e,a){a>0&&t.lineTo(e.x,e.y)}),t.moveTo(l[0].x,l[0].y)),t.closePath(),t.stroke()})}if("point"==e.type){_=O(o);_.forEach(function(l,i){t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*a.pixelRatio),t.moveTo(l[0].x,l[0].y),t.arc(l[0].x,l[0].y,1,0,2*Math.PI),t.closePath(),t.stroke()})}if(!1!==a.dataPointShape&&"column"!==e.type){var A=l.dataPointShape[n%l.dataPointShape.length];ee(o,e.color,A,t,a)}}),!1!==a.dataLabel&&1===i){d=0;e.forEach(function(e,n){var r=e.data,o=G(r,v,c,u,s,a,l,i);"column"!==e.type?le(o,e,l,t):(o=H(o,s,f,d,l,a),le(o,e,l,t),d+=1)})}return t.restore(),{xAxisPoints:u,calPoints:p,eachSpacing:s}}function fe(e,a,l,t,i,n){var r=e.extra.tooltip||{};r.horizentalLine&&e.tooltip&&1===t&&("line"==e.type||"area"==e.type||"column"==e.type||"candle"==e.type||"mix"==e.type)&&oe(e,a,l,i,n),l.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&l.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===t&&se(e.tooltip.textList,e.tooltip.offset,e,a,l,i,n),l.restore()}function ge(e,a,l,t){var i=V(e,a,l),n=i.xAxisPoints,r=i.startX,o=i.endX,u=i.eachSpacing,s=a.height-l.padding-l.xAxisHeight-l.legendHeight,v=l.padding;if(a.enableScroll&&a.xAxis.scrollShow){var b=a.height-l.padding-l.legendHeight+6*a.pixelRatio,h=o-r,p=u*(n.length-1),d=h*h/p,f=0;a._scrollDistance_&&(f=-a._scrollDistance_*h/p),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*a.pixelRatio),t.setStrokeStyle(a.xAxis.scrollBackgroundColor||"#EFEBEF"),t.moveTo(r,b),t.lineTo(o,b),t.stroke(),t.closePath(),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*a.pixelRatio),t.setStrokeStyle(a.xAxis.scrollColor||"#A6A6A6"),t.moveTo(r+f,b),t.lineTo(r+f+d,b),t.stroke(),t.setLineCap("butt"),t.closePath()}if(t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&t.translate(a._scrollDistance_,0),t.beginPath(),t.setStrokeStyle(a.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*a.pixelRatio),"dash"==a.xAxis.gridType&&t.setLineDash([a.xAxis.dashLength,a.xAxis.dashLength]),!0!==a.xAxis.disableGrid&&("calibration"===a.xAxis.type?n.forEach(function(e,l){l>0&&(t.moveTo(e-u/2,s),t.lineTo(e-u/2,s+4*a.pixelRatio))}):n.forEach(function(e,a){t.moveTo(e,s),t.lineTo(e,v)})),t.closePath(),t.stroke(),t.setLineDash([]),!0!==a.xAxis.disabled){var g=a.width-2*l.padding-l.yAxisWidth-l.yAxisTitleWidth,y=e.length;0===l._xAxisTextAngle_?a.xAxis.labelCount&&(y=a.xAxis.itemCount?Math.ceil(e.length/a.xAxis.itemCount*a.xAxis.labelCount):a.xAxis.labelCount,y-=1):y=Math.min(e.length,Math.ceil(g/l.fontSize/1.5));for(var m=Math.ceil(e.length/y),_=[],A=e.length,S=0;S<A;S++)S%m!==0?_.push(""):_.push(e[S]);_[A-1]=e[A-1],0===l._xAxisTextAngle_?_.forEach(function(e,i){var r=u/2-x(e)/2;t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(a.xAxis.fontColor||"#666666"),t.fillText(e,n[i]+r,s+l.fontSize+5),t.closePath(),t.stroke()}):_.forEach(function(e,i){t.save(),t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(a.xAxis.fontColor||"#666666");var r=x(e),o=u/2-r,v=c(n[i]+u/2,s+l.fontSize/2+5,a.height),b=v.transX,h=v.transY;t.rotate(-1*l._xAxisTextAngle_),t.translate(b,h),t.fillText(e,n[i]+o,s+l.fontSize+5),t.closePath(),t.stroke(),t.restore()})}t.restore()}function xe(e,a,l,t){if(!0!==a.yAxis.disableGrid){for(var i=a.height-2*l.padding-l.xAxisHeight-l.legendHeight,n=Math.floor(i/l.yAxisSplit),r=l.yAxisWidth+l.yAxisTitleWidth,o=l.padding+r,u=V(e,a,l),s=u.xAxisPoints,v=u.eachSpacing,c=v*(s.length-1),b=o+c,h=[],p=0;p<l.yAxisSplit;p++)h.push(l.padding+n*p);h.push(l.padding+n*l.yAxisSplit+2),t.save(),a._scrollDistance_&&0!==a._scrollDistance_&&t.translate(a._scrollDistance_,0),"dash"==a.yAxis.gridType&&t.setLineDash([a.yAxis.dashLength,a.yAxis.dashLength]),t.beginPath(),t.setStrokeStyle(a.yAxis.gridColor||"#cccccc"),t.setLineWidth(1*a.pixelRatio),h.forEach(function(e,a){t.moveTo(o,e),t.lineTo(b,e)}),t.closePath(),t.stroke(),t.setLineDash([]),t.restore()}}function ye(e,a,l,t){if(!0!==a.yAxis.disabled){var i=K(e,a,l),n=i.rangesFormat,r=l.yAxisWidth+l.yAxisTitleWidth,o=a.height-2*l.padding-l.xAxisHeight-l.legendHeight,u=Math.floor(o/l.yAxisSplit),s=l.padding+r,v=a.width-l.padding,c=a.height-l.padding-l.xAxisHeight-l.legendHeight+l.xAxisTextPadding;t.beginPath(),t.setFillStyle(a.background||"#ffffff"),a._scrollDistance_<0&&t.fillRect(0,0,s,c+l.xAxisHeight),t.fillRect(v,0,a.width,c+l.xAxisHeight),t.closePath(),t.stroke();for(var b=[],h=0;h<=l.yAxisSplit;h++)b.push(l.padding+u*h);n.forEach(function(e,i){var n=b[i]?b[i]:c;t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(a.yAxis.fontColor||"#666666"),t.fillText(e,l.padding+l.yAxisTitleWidth,n+l.fontSize/2),t.closePath(),t.stroke()}),a.yAxis.title&&ve(a.yAxis.title,a,l,t)}}function me(e,a,l,t){if(!1!==a.legend){var i=R(e,a,l),n=i.legendList,r=5*a.pixelRatio,o=10*a.pixelRatio,u=15*a.pixelRatio;n.forEach(function(e,i){for(var n=0,s=0;s<e.length;s++){var v=e[s];v.name=v.name||"undefined",n+=3*r+x(v.name)+u}var c=(a.width-n)/2+r,b=a.height-l.padding-l.legendHeight+i*(l.fontSize+o)+r+o;t.setFontSize(l.fontSize);for(var h=0;h<e.length;h++){var p=e[h];switch(a.type){case"line":t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(p.color),t.setFillStyle(p.color),t.moveTo(c+7.5*a.pixelRatio,b+5*a.pixelRatio),t.arc(c+7.5*a.pixelRatio,b+5*a.pixelRatio,6*a.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke();break;case"pie":t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(p.color),t.setFillStyle(p.color),t.moveTo(c+7.5*a.pixelRatio,b+5*a.pixelRatio),t.arc(c+7.5*a.pixelRatio,b+5*a.pixelRatio,6*a.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke();break;case"ring":case"rose":t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(p.color),t.setFillStyle(p.color),t.moveTo(c+7.5*a.pixelRatio,b+5*a.pixelRatio),t.arc(c+7.5*a.pixelRatio,b+5*a.pixelRatio,6*a.pixelRatio,0,2*Math.PI),t.closePath(),t.fill(),t.stroke();break;case"gauge":break;case"arcbar":break;default:t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(p.color),t.setFillStyle(p.color),t.moveTo(c,b),t.fillRect(c,b,15*a.pixelRatio,10*a.pixelRatio),t.closePath(),t.fill(),t.stroke()}c+=r+u,t.beginPath(),t.setFontSize(l.fontSize),t.setFillStyle(a.extra.legendTextColor||"#333333"),t.fillText(p.name,c,b+6*a.pixelRatio+3*a.pixelRatio),t.closePath(),t.stroke(),c+=x(p.name)+2*r}})}}function _e(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.pie||{},o={x:a.width/2,y:(a.height-l.legendHeight)/2},u=Math.min(o.x-l.pieChartLinePadding-l.pieChartTextPadding-l._pieTextMaxLength_,o.y-l.pieChartLinePadding-l.pieChartTextPadding);a.dataLabel?u-=10:u-=2*l.padding,e=$(e,u,i);var s=l.pieChartLinePadding/2;if(e=e.map(function(e){return e._start_+=(n.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,l){a.tooltip&&a.tooltip.index==l&&(t.beginPath(),t.setFillStyle(r(e.color,a.extra.pie.activeOpacity||.5)),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_+s,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(2*a.pixelRatio),t.lineJoin="round",t.setStrokeStyle("#ffffff"),t.setFillStyle(e.color),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),!0!==a.disablePieStroke&&t.stroke()}),"ring"===a.type){var v=.6*u;"number"===typeof a.extra.pie.ringWidth&&a.extra.pie.ringWidth>0&&(v=Math.max(0,u-a.extra.pie.ringWidth)),t.beginPath(),t.setFillStyle(a.background||"#ffffff"),t.moveTo(o.x,o.y),t.arc(o.x,o.y,v,0,2*Math.PI),t.closePath(),t.fill()}if(!1!==a.dataLabel&&1===i){for(var c=!1,b=0,h=e.length;b<h;b++)if(e[b].data>0){c=!0;break}c&&ne(e,a,l,t,u,o)}return 1===i&&"ring"===a.type&&ae(a,l,t),{center:o,radius:u,series:e}}function Ae(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.rose||{};n.type=n.type||"area";var o={x:a.width/2,y:(a.height-l.legendHeight)/2},u=Math.min(o.x-l.pieChartLinePadding-l.pieChartTextPadding-l._pieTextMaxLength_,o.y-l.pieChartLinePadding-l.pieChartTextPadding);a.dataLabel?u-=10:u-=2*l.padding;var s=n.minRadius||.5*u;e=j(e,n.type,s,u,i);var v=l.pieChartLinePadding/2;if(e=e.map(function(e){return e._start_+=(n.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,l){a.tooltip&&a.tooltip.index==l&&(t.beginPath(),t.setFillStyle(r(e.color,n.activeOpacity||.5)),t.moveTo(o.x,o.y),t.arc(o.x,o.y,v+e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(2*a.pixelRatio),t.lineJoin="round",t.setStrokeStyle("#ffffff"),t.setFillStyle(e.color),t.moveTo(o.x,o.y),t.arc(o.x,o.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),!0!==a.disablePieStroke&&t.stroke()}),!1!==a.dataLabel&&1===i){for(var c=!1,b=0,h=e.length;b<h;b++)if(e[b].data>0){c=!0;break}c&&ne(e,a,l,t,u,o)}return{center:o,radius:u,series:e}}function Se(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.arcbar||{};n.startAngle=n.startAngle?n.startAngle:.75,n.endAngle=n.endAngle?n.endAngle:.25,n.type=n.type?n.type:"default",e=z(e,n,i);var r={x:a.width/2,y:a.height/2},o=Math.min(r.x,r.y);"number"===typeof n.width&&n.width>0?n.width=n.width:n.width=12*a.pixelRatio,o-=l.padding+n.width/2,t.setLineWidth(n.width),t.setStrokeStyle(n.backgroundColor||"#E9E9E9"),t.setLineCap("round"),t.beginPath(),"default"==n.type?t.arc(r.x,r.y,o,n.startAngle*Math.PI,n.endAngle*Math.PI,!1):t.arc(r.x,r.y,o,0,2*Math.PI,!1),t.stroke();for(var u=0;u<e.length;u++){var s=e[u];t.setLineWidth(n.width),t.setStrokeStyle(s.color),t.setLineCap("round"),t.beginPath(),t.arc(r.x,r.y,o,n.startAngle*Math.PI,s._proportion_*Math.PI,!1),t.stroke()}return ae(a,l,t),{center:r,radius:o,series:e}}function Te(e,a,l,t,i){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=l.extra.gauge||{};r.startAngle=r.startAngle?r.startAngle:.75,void 0==r.oldAngle&&(r.oldAngle=r.startAngle),void 0==r.oldData&&(r.oldData=0),r.endAngle=r.endAngle?r.endAngle:.25,e=B(e,r.startAngle,r.endAngle);var o={x:l.width/2,y:l.height/2},u=Math.min(o.x,o.y);"number"===typeof r.width&&r.width>0?r.width=r.width:r.width=15*l.pixelRatio,u-=t.padding+r.width/2;var s=u-r.width;i.setLineWidth(r.width),i.setLineCap("butt");for(var v=0;v<e.length;v++){var c=e[v];i.beginPath(),i.setStrokeStyle(c.color),i.arc(o.x,o.y,u,c._startAngle_*Math.PI,c._endAngle_*Math.PI,!1),i.stroke()}i.save();var b=r.startAngle-r.endAngle+1;r.splitLine.fixRadius=r.splitLine.fixRadius?r.splitLine.fixRadius:0,r.splitLine.splitNumber=r.splitLine.splitNumber?r.splitLine.splitNumber:10,r.splitLine.width=r.splitLine.width?r.splitLine.width:15*l.pixelRatio,r.splitLine.color=r.splitLine.color?r.splitLine.color:"#FFFFFF",r.splitLine.childNumber=r.splitLine.childNumber?r.splitLine.childNumber:5,r.splitLine.childWidth=r.splitLine.childWidth?r.splitLine.childWidth:5*l.pixelRatio;var h=b/r.splitLine.splitNumber,p=b/r.splitLine.splitNumber/r.splitLine.childNumber,d=-u-.5*r.width-r.splitLine.fixRadius,f=-u-.5*r.width-r.splitLine.fixRadius+r.splitLine.width,g=-u-.5*r.width-r.splitLine.fixRadius+r.splitLine.childWidth;i.translate(o.x,o.y),i.rotate((r.startAngle-1)*Math.PI);for(var x=0;x<r.splitLine.splitNumber+1;x++)i.beginPath(),i.setStrokeStyle(r.splitLine.color),i.setLineWidth(2*l.pixelRatio),i.moveTo(d,0),i.lineTo(f,0),i.stroke(),i.rotate(h*Math.PI);i.restore(),i.save(),i.translate(o.x,o.y),i.rotate((r.startAngle-1)*Math.PI);for(var y=0;y<r.splitLine.splitNumber*r.splitLine.childNumber+1;y++)i.beginPath(),i.setStrokeStyle(r.splitLine.color),i.setLineWidth(1*l.pixelRatio),i.moveTo(d,0),i.lineTo(g,0),i.stroke(),i.rotate(p*Math.PI);i.restore(),r.pointer.width=r.pointer.width?r.pointer.width:15*l.pixelRatio,void 0==r.pointer.color||"auto"==r.pointer.color?r.pointer.color:(r.pointer.color,r.pointer.color),a=N(a,e,r,n);for(var m=0;m<a.length;m++){var _=a[m];i.save(),i.translate(o.x,o.y),i.rotate((_._proportion_-1)*Math.PI),i.beginPath(),i.setFillStyle(_.color),i.moveTo(r.pointer.width,0),i.lineTo(0,-r.pointer.width/2),i.lineTo(-s,0),i.lineTo(0,r.pointer.width/2),i.lineTo(r.pointer.width,0),i.closePath(),i.fill(),i.beginPath(),i.setFillStyle("#FFFFFF"),i.arc(0,0,r.pointer.width/6,0,2*Math.PI,!1),i.fill(),i.restore()}return!1!==l.dataLabel&&te(r,u,o,l,t,i),ae(l,t,i),1===n&&"gauge"===l.type&&(r.oldAngle=a[0]._proportion_,r.oldData=a[0].data),{center:o,radius:u,innerRadius:s,categories:e,totalAngle:b}}function we(e,a,l,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,n=a.extra.radar||{},r=T(a.categories.length),o={x:a.width/2,y:(a.height-l.legendHeight)/2},u=Math.min(o.x-(S(a.categories)+l.radarLabelTextMargin),o.y-l.radarLabelTextMargin);u-=l.padding,t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(n.gridColor||"#cccccc"),r.forEach(function(e){var a=h(u*Math.cos(e),u*Math.sin(e),o);t.moveTo(o.x,o.y),t.lineTo(a.x,a.y)}),t.stroke(),t.closePath();for(var s=function(e){var i={};t.beginPath(),t.setLineWidth(1*a.pixelRatio),t.setStrokeStyle(n.gridColor||"#cccccc"),r.forEach(function(a,n){var r=h(u/l.radarGridCount*e*Math.cos(a),u/l.radarGridCount*e*Math.sin(a),o);0===n?(i=r,t.moveTo(r.x,r.y)):t.lineTo(r.x,r.y)}),t.lineTo(i.x,i.y),t.stroke(),t.closePath()},v=1;v<=l.radarGridCount;v++)s(v);var c=E(r,o,u,e,a,i);return c.forEach(function(e,i){if(t.beginPath(),t.setFillStyle(e.color),t.setGlobalAlpha(.3),e.data.forEach(function(e,a){0===a?t.moveTo(e.position.x,e.position.y):t.lineTo(e.position.x,e.position.y)}),t.closePath(),t.fill(),t.setGlobalAlpha(1),!1!==a.dataPointShape){var n=l.dataPointShape[i%l.dataPointShape.length],r=e.data.map(function(e){return e.position});ee(r,e.color,n,t,a)}}),ie(r,u,o,a,l,t),{center:o,radius:u,angleList:r}}function Pe(e,a){a.draw()}var ke={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return Math.pow(e-1,3)+1},easeInOut:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},linear:function(e){return e}};function De(e){this.isStop=!1,e.duration="undefined"===typeof e.duration?1e3:e.duration,e.timing=e.timing||"linear";var a=17,l=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(e,a){setTimeout(function(){var a=+new Date;e(a)},a)}:function(e){e(null)}},t=l(),i=null,n=function(l){if(null===l||!0===this.isStop)return e.onProcess&&e.onProcess(1),void(e.onAnimationFinish&&e.onAnimationFinish());if(null===i&&(i=l),l-i<e.duration){var r=(l-i)/e.duration,o=ke[e.timing];r=o(r),e.onProcess&&e.onProcess(r),t(n,a)}else e.onProcess&&e.onProcess(1),e.onAnimationFinish&&e.onAnimationFinish()};n=n.bind(this),t(n,a)}function Me(e,a,l,t){var n=this,r=a.series,o=a.categories;r=d(r,l),r=f(r,a);var s=null;if("candle"==e){var v=i({},a.extra.candle.average);v.show&&(s=u(v.day,v.name,v.color,r[0].data),a.seriesMA=s)}var c=R(r,a,l),b=c.legendHeight;l.legendHeight=b;var h=K(r,a,l),p=h.yAxisWidth;if(l.yAxisWidth=p,o&&o.length){var g=I(o,a,l),x=g.xAxisHeight,y=g.angle;l.xAxisHeight=x,l._xAxisTextAngle_=y}"pie"!==e&&"ring"!==e&&"rose"!==e||(l._pieTextMaxLength_=!1===a.dataLabel?0:W(r));var m=a.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),t.clearRect(0,0,a.width,a.height),e){case"line":this.animationInstance=new De({timing:"easeIn",duration:m,onProcess:function(e){a.rotate&&Q(t,a),xe(o,a,l,t),ge(o,a,l,t);var i=pe(r,a,l,t,e),u=i.xAxisPoints,s=i.calPoints,v=i.eachSpacing;n.chartData.xAxisPoints=u,n.chartData.calPoints=s,n.chartData.eachSpacing=v,me(a.series,a,l,t),ye(r,a,l,t),fe(a,l,t,e,v,u),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new De({timing:"easeIn",duration:m,onProcess:function(e){a.rotate&&Q(t,a),xe(o,a,l,t),ge(o,a,l,t);var i=de(r,a,l,t,e),u=i.xAxisPoints,s=i.calPoints,v=i.eachSpacing;n.chartData.xAxisPoints=u,n.chartData.calPoints=s,n.chartData.eachSpacing=v,me(a.series,a,l,t),ye(r,a,l,t),fe(a,l,t,e,v,u),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new De({timing:"easeIn",duration:m,onProcess:function(e){a.rotate&&Q(t,a),xe(o,a,l,t),ge(o,a,l,t);var i=ce(r,a,l,t,e),u=i.xAxisPoints,s=i.calPoints,v=i.eachSpacing;n.chartData.xAxisPoints=u,n.chartData.calPoints=s,n.chartData.eachSpacing=v,me(a.series,a,l,t),ye(r,a,l,t),fe(a,l,t,e,v,u),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new De({timing:"easeIn",duration:m,onProcess:function(e){a.rotate&&Q(t,a),xe(o,a,l,t),ge(o,a,l,t);var i=he(r,a,l,t,e),u=i.xAxisPoints,s=i.calPoints,v=i.eachSpacing;n.chartData.xAxisPoints=u,n.chartData.calPoints=s,n.chartData.eachSpacing=v,me(a.series,a,l,t),ye(r,a,l,t),fe(a,l,t,e,v,u),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new De({timing:"easeInOut",duration:m,onProcess:function(e){a.rotate&&Q(t,a),n.chartData.pieData=_e(r,a,l,t,e),me(a.series,a,l,t),fe(a,l,t,e),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new De({timing:"easeInOut",duration:m,onProcess:function(e){a.rotate&&Q(t,a),n.chartData.pieData=Ae(r,a,l,t,e),me(a.series,a,l,t),fe(a,l,t,e),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new De({timing:"easeInOut",duration:m,onProcess:function(e){a.rotate&&Q(t,a),n.chartData.radarData=we(r,a,l,t,e),me(a.series,a,l,t),fe(a,l,t,e),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new De({timing:"easeInOut",duration:m,onProcess:function(e){a.rotate&&Q(t,a),n.chartData.arcbarData=Se(r,a,l,t,e),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new De({timing:"easeInOut",duration:m,onProcess:function(e){a.rotate&&Q(t,a),n.chartData.gaugeData=Te(o,r,a,l,t,e),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new De({timing:"easeIn",duration:m,onProcess:function(e){a.rotate&&Q(t,a),xe(o,a,l,t),ge(o,a,l,t);var i=be(r,s,a,l,t,e),u=i.xAxisPoints,v=i.calPoints,c=i.eachSpacing;n.chartData.xAxisPoints=u,n.chartData.calPoints=v,n.chartData.eachSpacing=c,me(s||a.series,a,l,t),ye(r,a,l,t),fe(a,l,t,e,c,u),Pe(a,t)},onAnimationFinish:function(){n.event.trigger("renderComplete")}});break}}function Le(){this.events={}}De.prototype.stop=function(){this.isStop=!0},Le.prototype.addEventListener=function(e,a){this.events[e]=this.events[e]||[],this.events[e].push(a)},Le.prototype.trigger=function(){for(var e=arguments.length,l=Array(e),t=0;t<e;t++)l[t]=arguments[t];var i=l[0],n=l.slice(1);this.events[i]&&this.events[i].forEach(function(e){try{e.apply(null,n)}catch(l){console.error(a(l," at components\\u-charts\\js\\u-charts.js:3612"))}})};var Ce=function(e){e.fontSize=e.fontSize?e.fontSize*e.pixelRatio:13*e.pixelRatio,e.title=e.title||{},e.subtitle=e.subtitle||{},e.yAxis=e.yAxis||{},e.yAxis.gridType=e.yAxis.gridType?e.yAxis.gridType:"solid",e.yAxis.dashLength=e.yAxis.dashLength?e.yAxis.dashLength:4*e.pixelRatio,e.xAxis=e.xAxis||{},e.xAxis.rotateLabel=!!e.xAxis.rotateLabel,e.xAxis.type=e.xAxis.type?e.xAxis.type:"calibration",e.xAxis.gridType=e.xAxis.gridType?e.xAxis.gridType:"solid",e.xAxis.dashLength=e.xAxis.dashLength?e.xAxis.dashLength:4*e.pixelRatio,e.xAxis.scrollAlign=e.xAxis.scrollAlign?e.xAxis.scrollAlign:"left",e.extra=e.extra||{},e.legend=!1!==e.legend,e.rotate=!!e.rotate,e.animation=!1!==e.animation;var a=i({},t);if(a.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?a.yAxisTitleWidth:0,"pie"!=e.type&&"ring"!=e.type||(a.pieChartLinePadding=!1===e.dataLabel?0:e.extra.pie.lableWidth*e.pixelRatio||a.pieChartLinePadding*e.pixelRatio),a.pieChartTextPadding=!1===e.dataLabel?0:a.pieChartTextPadding*e.pixelRatio,a.yAxisSplit=e.yAxis.splitNumber?e.yAxis.splitNumber:t.yAxisSplit,a.rotate=e.rotate,e.rotate){var n=e.width,r=e.height;e.width=r,e.height=n}if(a.yAxisWidth=t.yAxisWidth*e.pixelRatio,a.xAxisHeight=t.xAxisHeight*e.pixelRatio,e.enableScroll&&e.xAxis.scrollShow&&(a.xAxisHeight+=6*e.pixelRatio),a.xAxisLineHeight=t.xAxisLineHeight*e.pixelRatio,a.legendHeight=t.legendHeight*e.pixelRatio,a.padding=t.padding*e.pixelRatio,a.fontSize=e.fontSize,a.titleFontSize=t.titleFontSize*e.pixelRatio,a.subtitleFontSize=t.subtitleFontSize*e.pixelRatio,a.toolTipPadding=t.toolTipPadding*e.pixelRatio,a.toolTipLineHeight=t.toolTipLineHeight*e.pixelRatio,a.columePadding=t.columePadding*e.pixelRatio,t.pixelRatio=e.pixelRatio,t.fontSize=e.fontSize,t.rotate=e.rotate,this.opts=e,this.config=a,e.$this=e.$this?e.$this:this,this.context=l.createCanvasContext(e.canvasId,e.$this),this.chartData={},this.event=new Le,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},e.enableScroll&&"right"==e.xAxis.scrollAlign){var o=K(e.series,e,a),u=o.yAxisWidth;a.yAxisWidth=u;var s=0,v=V(e.categories,e,a),c=v.xAxisPoints,b=v.startX,h=v.endX,p=v.eachSpacing,d=p*(c.length-1),f=h-b;s=f-d,this.scrollOption={currentOffset:s,startTouchX:s,distance:0,lastMoveTime:0},e._scrollDistance_=s}Me.call(this,e.type,e,a,this.context)};Ce.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,e),this.opts.yAxis.format=e.unit?function(a){return a.toFixed(e.fixed||0)+(e.unit||"")}:this.opts.yAxis.format;var a=e.scrollPosition||"current";switch(a){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var l=K(this.opts.series,this.opts,this.config),t=l.yAxisWidth;this.config.yAxisWidth=t;var n=0,r=V(this.opts.categories,this.opts,this.config),o=r.xAxisPoints,u=r.startX,s=r.endX,v=r.eachSpacing,c=v*(o.length-1),b=s-u;n=b-c,this.scrollOption={currentOffset:n,startTouchX:n,distance:0,lastMoveTime:0},this.opts._scrollDistance_=n;break}var h=void 0==e.animation?this.opts.animation:e.animation;this.opts.animation=h,this.opts.title=i({},this.opts.title,e.title||{}),this.opts.subtitle=i({},this.opts.subtitle,e.subtitle||{}),Me.call(this,this.opts.type,this.opts,this.config,this.context)},Ce.prototype.zoom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var l=Math.round(Math.abs(this.scrollOption.currentOffset)/this.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var t=K(this.opts.series,this.opts,this.config),i=t.yAxisWidth;this.config.yAxisWidth=i;var n=0,r=V(this.opts.categories,this.opts,this.config),o=r.xAxisPoints,u=r.startX,s=r.endX,v=r.eachSpacing,c=v*l,b=s-u,h=b-v*(o.length-1);n=b/2-c,n>0&&(n=0),n<h&&(n=h),this.scrollOption={currentOffset:n,startTouchX:n,distance:0,lastMoveTime:0},this.opts._scrollDistance_=n,Me.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(a("请启用滚动条后使用！"," at components\\u-charts\\js\\u-charts.js:3768"))},Ce.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Ce.prototype.addEventListener=function(e,a){this.event.addEventListener(e,a)},Ce.prototype.getCurrentDataIndex=function(e){var a=e.mp.changedTouches[0]||e.changedTouches[0];if(a){var l=_(a,this.opts,e);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?C({x:l.x,y:l.y},this.chartData.pieData):"radar"===this.opts.type?L({x:l.x,y:l.y},this.chartData.radarData,this.opts.categories.length):D({x:l.x,y:l.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Ce.prototype.showToolTip=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=e.mp.changedTouches[0]||e.changedTouches[0],t=_(l,this.opts,e);if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var n=this.getCurrentDataIndex(e),r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1});if(n>-1){var u=A(this.opts.series,n);if(0!==u.length){var s=w(u,this.chartData.calPoints,n,this.opts.categories,a),v=s.textList,c=s.offset;c.y=t.y,o.tooltip={textList:v,offset:c,option:a,index:n}}}Me.call(this,o.type,o,this.config,this.context)}if("mix"===this.opts.type){n=this.getCurrentDataIndex(e),r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1});if(n>-1){u=A(this.opts.series,n);if(0!==u.length){var b=P(u,this.chartData.calPoints,n,this.opts.categories,a);v=b.textList,c=b.offset;c.y=t.y,o.tooltip={textList:v,offset:c,option:a,index:n}}}Me.call(this,o.type,o,this.config,this.context)}if("candle"===this.opts.type){n=this.getCurrentDataIndex(e),r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1});if(n>-1){u=A(this.opts.series,n);if(0!==u.length){s=k(this.opts.series[0].data,u,this.chartData.calPoints,n,this.opts.categories,this.opts.extra.candle,a),v=s.textList,c=s.offset;c.y=t.y,o.tooltip={textList:v,offset:c,option:a,index:n}}}Me.call(this,o.type,o,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type){n=this.getCurrentDataIndex(e),r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1});if(n>-1){u=this.opts.series[n],v=[{text:a.format?a.format(u):u.name+": "+u.data,color:u.color}],c={x:t.x,y:t.y};o.tooltip={textList:v,offset:c,option:a,index:n}}Me.call(this,o.type,o,this.config,this.context)}if("radar"===this.opts.type){n=this.getCurrentDataIndex(e),r=this.scrollOption.currentOffset,o=i({},this.opts,{_scrollDistance_:r,animation:!1});if(n>-1){u=A(this.opts.series,n);if(0!==u.length){v=u.map(function(e){return{text:a.format?a.format(e):e.name+": "+e.data,color:e.color}}),c={x:t.x,y:t.y};o.tooltip={textList:v,offset:c,option:a,index:n}}}Me.call(this,o.type,o,this.config,this.context)}},Ce.prototype.translate=function(e){this.scrollOption={currentOffset:e,startTouchX:e,distance:0,lastMoveTime:0};var a=i({},this.opts,{_scrollDistance_:e,animation:!1});Me.call(this,this.opts.type,a,this.config,this.context)},Ce.prototype.scrollStart=function(e){var a=e.mp.changedTouches[0]||e.changedTouches[0],l=_(a,this.opts,e);a&&!0===this.opts.enableScroll&&(a.x?this.scrollOption.startTouchX=l.x:this.scrollOption.startTouchX=l.clientX)},Ce.prototype.scroll=function(e){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var a=this.opts.extra.touchMoveLimit||20,l=Date.now(),t=l-this.scrollOption.lastMoveTime;if(!(t<Math.floor(1e3/a))){this.scrollOption.lastMoveTime=l;var n=e.mp.changedTouches[0]||e.changedTouches[0],r=_(n,this.opts,e);if(n&&!0===this.opts.enableScroll){var o;o=n.x?r.x-this.scrollOption.startTouchX:r.clientX-this.scrollOption.startTouchX;var u=this.scrollOption.currentOffset,v=s(u+o,this.chartData,this.config,this.opts);this.scrollOption.distance=o=v-u;var c=i({},this.opts,{_scrollDistance_:u+o,animation:!1});return Me.call(this,c.type,c,this.config,this.context),u+o}}},Ce.prototype.scrollEnd=function(e){if(!0===this.opts.enableScroll){var a=this.scrollOption,l=a.currentOffset,t=a.distance;this.scrollOption.currentOffset=l+t,this.scrollOption.distance=0}},e.exports=Ce}).call(this,l("0de9")["default"],l("6e42")["default"])},a34a:function(e,a,l){e.exports=l("bbdd")},a5c0:function(e,a,l){"use strict";(function(e,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(l("a34a")),n=r(l("6236"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,a){return v(e)||s(e,a)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,a){var l=[],t=!0,i=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)if(l.push(r.value),a&&l.length===a)break}catch(u){i=!0,n=u}finally{try{t||null==o["return"]||o["return"]()}finally{if(i)throw n}}return l}function v(e){if(Array.isArray(e))return e}function c(e,a,l,t,i,n,r){try{var o=e[n](r),u=o.value}catch(s){return void l(s)}o.done?a(u):Promise.resolve(u).then(t,i)}function b(e){return function(){var a=this,l=arguments;return new Promise(function(t,i){var n=e.apply(a,l);function r(e){c(n,t,i,r,o,"next",e)}function o(e){c(n,t,i,r,o,"throw",e)}r(void 0)})}}var h={token:!1,userinfo:!1,counts:{},userbind:!1,__init:function(){this.userinfo=e.getStorageSync("userinfo"),this.token=e.getStorageSync("token"),this.counts=e.getStorageSync("counts"),this.userbind=e.getStorageSync("userbind"),this.OnUserCounts()},navigate:function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"navigateTo";if(n.default.checkToken(!0)&&n.default.checkAuth(!0))switch(l){case"navigateTo":e.navigateTo(a);break;case"redirectTo":e.redirectTo(a);break;case"reLaunch":e.reLaunch(a);break;case"switchTab":e.switchTab(a);break}},login:function(){var a=b(i.default.mark(function a(){var l,t,r,u,s,v=arguments;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return l=v.length>0&&void 0!==v[0]?v[0]:{},e.showLoading({title:"登录中...",mask:!0}),a.next=4,n.default.post(l.url,l.data);case 4:if(t=a.sent,r=o(t,2),u=r[0],s=r[1],n.default.errorCheck(u,s)){a.next=11;break}return e.hideLoading(),a.abrupt("return",!1);case 11:return this.token=s.data.data.token,this.userinfo=this.__formatUserinfo(s.data.data),e.setStorageSync("userinfo",this.userinfo),e.setStorageSync("token",this.token),a.next=17,this.getCounts();case 17:return e.hideLoading(),e.showToast({title:"登录成功"}),l.Noback||e.navigateBack({delta:1}),a.abrupt("return",!0);case 21:case"end":return a.stop()}},a,this)}));function l(){return a.apply(this,arguments)}return l}(),logout:function(){var a=b(i.default.mark(function a(){var l,t=arguments;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return l=!(t.length>0&&void 0!==t[0])||t[0],a.next=3,n.default.post("/user/logout",{},{token:!0,checkToken:!0});case 3:if(e.removeStorageSync("userinfo"),e.removeStorageSync("token"),e.removeStorageSync("counts"),this.token=!1,this.userinfo=!1,this.userbind=!1,this.counts={},e.switchTab({url:"/pages/home/home"}),!l){a.next=13;break}return a.abrupt("return",e.showToast({title:"退出登录成功"}));case 13:case"end":return a.stop()}},a,this)}));function l(){return a.apply(this,arguments)}return l}(),getCounts:function(){var a=b(i.default.mark(function a(){var l,t,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.default.get("/user/getcounts/"+this.userinfo.id,{},{token:!0,checkToken:!0});case 2:if(l=a.sent,t=o(l,2),r=t[0],u=t[1],n.default.errorCheck(r,u)){a.next=8;break}return a.abrupt("return");case 8:this.counts=u.data.data,e.setStorageSync("counts",this.counts);case 10:case"end":return a.stop()}},a,this)}));function l(){return a.apply(this,arguments)}return l}(),OnUserCounts:function(){var a=this;e.$on("updateData",function(l){"updateList"==l.type&&a.counts.post_count++,"updateComment"==l.type&&a.counts.comments_count++,"guanzhu"==l.type&&(l.data?a.counts.withfollow_count++:a.counts.withfollow_count--),e.setStorageSync("counts",a.counts)})},addHistoryList:function(a){var l=e.getStorageSync("HistoryList_"+this.userinfo.id);l=l?JSON.parse(l):[];var i=l.findIndex(function(e){return e.id===a.id});-1==i&&(l.push(a),e.setStorageSync("HistoryList_"+this.userinfo.id,JSON.stringify(l)),console.log(t("加入缓存成功"," at common\\user.js:141")))},clearHistory:function(){e.removeStorageSync("HistoryList_"+this.userinfo.id)},getUserBind:function(){var a=b(i.default.mark(function a(){var l,t,r,u;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.default.get("/user/getuserbind",{},{token:!0,checkToken:!0});case 2:if(l=a.sent,t=o(l,2),r=t[0],u=t[1],n.default.errorCheck(r,u)){a.next=8;break}return a.abrupt("return",!1);case 8:return this.userbind=u.data.data,e.setStorageSync("userbind",this.userbind),a.abrupt("return",!0);case 11:case"end":return a.stop()}},a,this)}));function l(){return a.apply(this,arguments)}return l}(),__formatUserinfo:function(e){return"username"==e.logintype||"email"==e.logintype||"phone"==e.logintype?(e.userpic=e.userpic||"http://m.360buyimg.com/pop/jfs/t23434/230/1763906670/10667/55866a07/5b697898N78cd1466.jpg",e):e.user&&e.user_id>0?{id:e.user.id,username:e.user.username||e.nickname,userpic:e.user.userpic||e.avatarurl,phone:e.user.phone,email:e.user.email,status:e.user.status,create_time:e.user.create_time,logintype:e.logintype,password:e.user.password,token:e.token,userinfo:{id:e.user.userinfo.id,user_id:e.user.userinfo.user_id,age:e.user.userinfo.age,sex:e.user.userinfo.sex,qg:e.user.userinfo.qg,job:e.user.userinfo.job,path:e.user.userinfo.path,birthday:e.user.userinfo.birthday}}:{id:e.user_id,username:e.nickname,userpic:e.avatarurl,phone:!1,email:!1,status:1,create_time:!1,logintype:e.logintype,token:e.token,userinfo:!1}},__formatOtherLogin:function(e,a){return{provider:e,openid:a.userInfo.unionId||a.userInfo.openId,expires_in:a.authResult.expires_in,nickName:a.userInfo.nickName,avatarUrl:a.userInfo.avatarUrl}}};a.default=h}).call(this,l("6e42")["default"],l("0de9")["default"])},a87b:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={webUrl:"https://ceshi.caiwutixing.cn/api/v1",websocketUrl:"wss://ceshi.caiwutixing.cn:24003",TabbarIndex:2};a.default=t},af32a:function(e,a,l){"use strict";(function(e,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;i(l("a87b"));function i(e){return e&&e.__esModule?e:{default:e}}var n={isConnect:!1,On:function(){var a=this;e.getNetworkType({success:function(l){"none"===l.networkType?e.showToast({icon:"none",title:"请先连接网络"}):a.isConnect=!0}}),e.onNetworkStatusChange(function(l){a.isConnect=l.isConnected,l.isConnected||e.showToast({icon:"none",title:"您目前处于断网状态"})})}},r=function(){plus.runtime.getProperty(plus.runtime.appid,function(a){e.request({url:"http://www.example.com/update/",data:{version:a.version,name:a.name},success:function(a){var l=a.data;l.update&&l.wgtUrl&&e.downloadFile({url:l.wgtUrl,success:function(e){200===e.statusCode&&plus.runtime.install(e.tempFilePath,{force:!1},function(){console.log(t("install success..."," at common\\lib.js:50")),plus.runtime.restart()},function(e){console.error(t("install fail..."," at common\\lib.js:53"))})}})}})})},o={NetWork:n,Update:r};a.default=o}).call(this,l("6e42")["default"],l("0de9")["default"])},bbdd:function(e,a,l){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=i&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=l("96cf"),i)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},c681:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],i=t;a.default=i},c8ba:function(e,a){var l;l=function(){return this}();try{l=l||new Function("return this")()}catch(t){"object"===typeof window&&(l=window)}e.exports=l},e0bd:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={pages:{"pages/index/index":{scrollIndicator:"none",bounce:"none",titleNView:{searchInput:{align:"center",backgroundColor:"#F7F7F7",borderRadius:"4px",placeholder:"搜索帖子",placeholderColor:"#CCCCCC",disabled:!0},buttons:[{color:"#3ff595",colorPressed:"#BBBBBB",float:"left",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""},{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/news/news":{navigationBarTitleText:"动态",bounce:"none",titleNView:!1},"pages/paper/paper":{enablePullDownRefresh:!0,navigationBarTitleText:"小纸条",titleNView:{buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"left",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""},{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/home/home":{navigationBarTitleText:"我的",scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{type:"menu"}]}},"pages/search/search":{enablePullDownRefresh:!0,scrollIndicator:"none",bounce:"none",titleNView:{autoBackButton:!1,searchInput:{align:"left",backgroundColor:"#F7F7F7",borderRadius:"4px",placeholder:"搜索糗事",placeholderColor:"#CCCCCC",disabled:!1},buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"16px",text:"取消"}]}},"pages/add-input/add-input":{animationType:"slide-in-bottom",animationDuration:200,titleNView:!1},"pages/topic-nav/topic-nav":{navigationBarTitleText:"话题分类",bounce:"none"},"pages/topic-detail/topic-detail":{enablePullDownRefresh:!0,animationType:"slide-in-bottom",animationDuration:200,scrollIndicator:"none",titleNView:{type:"transparent",buttons:[{type:"menu"}]}},"pages/user-list/user-list":{animationType:"slide-in-left",scrollIndicator:"none",bounce:"none",titleNView:{autoBackButton:!1,searchInput:{align:"left",backgroundColor:"#F7F7F7",borderRadius:"4px",placeholder:"搜索用户",placeholderColor:"#CCCCCC",disabled:!0},buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"16px",text:"取消"}]}},"pages/user-chat/user-chat":{navigationBarTitleText:"聊天页",titleNView:{buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/detail/detail":{navigationBarTitleText:"内容页",scrollIndicator:"none",bounce:"none",titleNView:{buttons:[{type:"menu"}]}},"pages/user-set/user-set":{navigationBarTitleText:"设置"},"pages/user-set-repassword/user-set-repassword":{navigationBarTitleText:"修改密码",scrollIndicator:"none"},"pages/user-set-email/user-set-email":{navigationBarTitleText:"修改邮箱",scrollIndicator:"none"},"pages/user-set-userinfo/user-set-userinfo":{navigationBarTitleText:"修改资料",scrollIndicator:"none"},"pages/user-set-help/user-set-help":{navigationBarTitleText:"意见反馈",scrollIndicator:"none"},"pages/user-set-about/user-set-about":{navigationBarTitleText:"关于财务小秘书",scrollIndicator:"none"},"pages/login/login":{titleNView:!1,bounce:"none",scrollIndicator:"none"},"pages/user-space/user-space":{navigationBarTitleText:"个人空间",scrollIndicator:"none",titleNView:{type:"transparent",buttons:[{type:"menu"}]}},"pages/user-bind-phone/user-bind-phone":{navigationBarTitleText:"绑定手机"},"pages/user-safe/user-safe":{navigationBarTitleText:"账号与安全"},"pages/user-feedback/user-feedback":{navigationBarTitleText:"意见反馈"},"pages/user-history/user-history":{navigationBarTitleText:"浏览历史",titleNView:{buttons:[{type:"close"}]}},"pages/bill/bill":{navigationBarTitleText:"记账"},"pages/chart/chart":{navigationBarTitleText:"图表",bounce:"none",titleNView:!1},"pages/remind/remind":{navigationBarTitleText:"提醒"},"pages/post-nav/post-nav":{scrollIndicator:"none",bounce:"none",titleNView:{searchInput:{align:"center",backgroundColor:"#F7F7F7",borderRadius:"4px",placeholder:"搜索帖子",placeholderColor:"#CCCCCC",disabled:!0},buttons:[{color:"#000000",colorPressed:"#BBBBBB",float:"right",fontSize:"22px",fontSrc:"/static/font/icon.ttf",text:""}]}},"pages/remind/CreateRemind":{navigationBarTitleText:"创建提醒"},"pages/categorygl/categorygl":{navigationBarTitleText:"分类管理"},"pages/creditcardgl/creditcardgl":{navigationBarTitleText:"信用卡管理"},"pages/remind/remindgl":{navigationBarTitleText:"提醒管理"},"pages/categorygl/srcategorygl":{},"pages/categorygl/zccategorygl":{},"pages/categorygl/zhcategorygl":{},"pages/creditcardgl/addcard":{navigationBarTitleText:"添加信用卡"},"pages/remind/reminddetail":{},"pages/creditcardgl/carddetail":{navigationBarTitleText:"信用卡详情"},"pages/bill/billdetail":{navigationBarTitleText:"记账详情"},"pages/bill/billgl":{enablePullDownRefresh:!0,navigationBarTitleText:"账单"},"pages/bill/billgory":{navigationBarTitleText:"分类账单"},"pages/bill/todaybill":{navigationBarTitleText:"今日账单"},"pages/bill/monthbill":{navigationBarTitleText:"本月账单"},"pages/bill/yearbill":{navigationBarTitleText:"本年账单"},"pages/remind/remindgory":{navigationBarTitleText:"分类提醒"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"财务提醒小秘书",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"}};a.default=t},f0c5:function(e,a,l){"use strict";function t(e,a,l,t,i,n,r,o,u,s){var v,c="function"===typeof e?e.options:e;if(u&&(c.components=Object.assign(u,c.components||{})),s&&((s.beforeCreate||(s.beforeCreate=[])).unshift(function(){this[s.__module]=this}),(c.mixins||(c.mixins=[])).push(s)),a&&(c.render=a,c.staticRenderFns=l,c._compiled=!0),t&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),r?(v=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=v):i&&(v=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),v)if(c.functional){c._injectStyles=v;var b=c.render;c.render=function(e,a){return v.call(a),b(e,a)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,v):[v]}return{exports:e,options:c}}l.d(a,"a",function(){return t})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/bill/bill-data';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/bill/bill-data.js';

define('components/bill/bill-data.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/bill/bill-data"], {
  "08861": function _(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("4b36"),
        e = a("0fa8");

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    a("68b6");
    var c,
        f = a("f0c5"),
        o = Object(f["a"])(e["default"], u["b"], u["c"], !1, null, "340adc09", null, !1, u["a"], c);
    n["default"] = o.exports;
  },
  "0bda": function bda(t, n, a) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        homedata: Array
      }
    };
    n.default = u;
  },
  "0fa8": function fa8(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("0bda"),
        e = a.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = e.a;
  },
  "4b36": function b36(t, n, a) {
    "use strict";

    var u,
        e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    a.d(n, "b", function () {
      return e;
    }), a.d(n, "c", function () {
      return r;
    }), a.d(n, "a", function () {
      return u;
    });
  },
  "67db": function db(t, n, a) {},
  "68b6": function b6(t, n, a) {
    "use strict";

    var u = a("67db"),
        e = a.n(u);
    e.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/bill/bill-data-create-component', {
  'components/bill/bill-data-create-component': function componentsBillBillDataCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("08861"));
  }
}, [['components/bill/bill-data-create-component']]]);
});
require('components/bill/bill-data.js');
__wxRoute = 'components/bill/bill-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/bill/bill-list-item.js';

define('components/bill/bill-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/bill/bill-list-item"], {
  "277c": function c(t, n, e) {},
  5016: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("98b2"),
        u = e("5930");

    for (var l in u) {
      "default" !== l && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(l);
    }

    e("dbc4");
    var c,
        r = e("f0c5"),
        a = Object(r["a"])(u["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], c);
    n["default"] = a.exports;
  },
  5930: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("91b1"),
        u = e.n(i);

    for (var l in i) {
      "default" !== l && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(l);
    }

    n["default"] = u.a;
  },
  "91b1": function b1(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          billdetail: function billdetail() {
            t.navigateTo({
              url: "../../pages/bill/billdetail?detail=" + JSON.stringify(this.item)
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "98b2": function b2(t, n, e) {
    "use strict";

    var i,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        l = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return l;
    }), e.d(n, "a", function () {
      return i;
    });
  },
  dbc4: function dbc4(t, n, e) {
    "use strict";

    var i = e("277c"),
        u = e.n(i);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/bill/bill-list-item-create-component', {
  'components/bill/bill-list-item-create-component': function componentsBillBillListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5016"));
  }
}, [['components/bill/bill-list-item-create-component']]]);
});
require('components/bill/bill-list-item.js');
__wxRoute = 'components/bill/billgory-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/bill/billgory-list.js';

define('components/bill/billgory-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/bill/billgory-list"], {
  2136: function _(t, n, e) {},
  "4a9c": function a9c(t, n, e) {
    "use strict";

    var i,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return i;
    });
  },
  5205: function _(t, n, e) {
    "use strict";

    var i = e("2136"),
        u = e.n(i);
    u.a;
  },
  "5ea0": function ea0(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          billdetail: function billdetail() {
            t.navigateTo({
              url: "../../pages/bill/billdetail?detail=" + JSON.stringify(this.item)
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  8461: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("4a9c"),
        u = e("b092");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("5205");
    var l,
        r = e("f0c5"),
        c = Object(r["a"])(u["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], l);
    n["default"] = c.exports;
  },
  b092: function b092(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("5ea0"),
        u = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/bill/billgory-list-create-component', {
  'components/bill/billgory-list-create-component': function componentsBillBillgoryListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8461"));
  }
}, [['components/bill/billgory-list-create-component']]]);
});
require('components/bill/billgory-list.js');
__wxRoute = 'components/charts/chart-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/charts/chart-nav-bar.js';

define('components/charts/chart-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/charts/chart-nav-bar"], {
  "005a": function a(n, t, _a) {},
  1384: function _(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("cc6d"),
        r = a.n(e);

    for (var u in e) {
      "default" !== u && function (n) {
        a.d(t, n, function () {
          return e[n];
        });
      }(u);
    }

    t["default"] = r.a;
  },
  9833: function _(n, t, a) {
    "use strict";

    var e,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    a.d(t, "b", function () {
      return r;
    }), a.d(t, "c", function () {
      return u;
    }), a.d(t, "a", function () {
      return e;
    });
  },
  bd38: function bd38(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("9833"),
        r = a("1384");

    for (var u in r) {
      "default" !== u && function (n) {
        a.d(t, n, function () {
          return r[n];
        });
      }(u);
    }

    a("cb89");
    var c,
        o = a("f0c5"),
        i = Object(o["a"])(r["default"], e["b"], e["c"], !1, null, "7212ade2", null, !1, e["a"], c);
    t["default"] = i.exports;
  },
  cb89: function cb89(n, t, a) {
    "use strict";

    var e = a("005a"),
        r = a.n(e);
    r.a;
  },
  cc6d: function cc6d(n, t, a) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var e = function e() {
      return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null, "9232"));
    },
        r = {
      components: {
        uniNavBar: e
      },
      props: {
        tabBars: Array,
        tabIndex: Number
      },
      methods: {
        changeTab: function changeTab(n) {
          this.$emit("change-tab", n);
        }
      }
    };

    t.default = r;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/charts/chart-nav-bar-create-component', {
  'components/charts/chart-nav-bar-create-component': function componentsChartsChartNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd38"));
  }
}, [['components/charts/chart-nav-bar-create-component']]]);
});
require('components/charts/chart-nav-bar.js');
__wxRoute = 'components/common/common-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/common-list.js';

define('components/common/common-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/common-list"], {
  "024c": function c(t, e, n) {},
  "0335": function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("4d1a"),
        a = n("4794");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("63aa");
    var u,
        o = n("f0c5"),
        c = Object(o["a"])(a["default"], r["b"], r["c"], !1, null, "c0b6e3ae", null, !1, r["a"], u);
    e["default"] = c.exports;
  },
  4794: function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("6f42"),
        a = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  "4d1a": function d1a(t, e, n) {
    "use strict";

    var r,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  "63aa": function aa(t, e, n) {
    "use strict";

    var r = n("024c"),
        a = n.n(r);
    a.a;
  },
  "6f42": function f42(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = a(n("a34a"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function i(t, e) {
        return c(t) || o(t, e) || u();
      }

      function u() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function o(t, e) {
        var n = [],
            r = !0,
            a = !1,
            i = void 0;

        try {
          for (var u, o = t[Symbol.iterator](); !(r = (u = o.next()).done); r = !0) {
            if (n.push(u.value), e && n.length === e) break;
          }
        } catch (c) {
          a = !0, i = c;
        } finally {
          try {
            r || null == o["return"] || o["return"]();
          } finally {
            if (a) throw i;
          }
        }

        return n;
      }

      function c(t) {
        if (Array.isArray(t)) return t;
      }

      function s(t, e, n, r, a, i, u) {
        try {
          var o = t[i](u),
              c = o.value;
        } catch (s) {
          return void n(s);
        }

        o.done ? e(c) : Promise.resolve(c).then(r, a);
      }

      function f(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, a) {
            var i = t.apply(e, n);

            function u(t) {
              s(i, r, a, u, o, "next", t);
            }

            function o(t) {
              s(i, r, a, u, o, "throw", t);
            }

            u(void 0);
          });
        };
      }

      var l = function l() {
        return n.e("components/common/tag-sex-age").then(n.bind(null, "751a"));
      },
          d = {
        components: {
          tagSexAge: l
        },
        props: {
          nonavigate: {
            type: Boolean,
            default: !1
          },
          item: Object,
          index: Number
        },
        computed: {
          getSex: function getSex() {
            return this.item.sex;
          },
          getAge: function getAge() {
            return this.item.age;
          }
        },
        methods: {
          guanzhu: function () {
            var e = f(r.default.mark(function e() {
              var n, a, u, o, c;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 0, e.next = 3, this.$http.post("/follow", {
                        follow_id: this.item.userid
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 3:
                      if (n = e.sent, a = i(n, 2), u = a[0], o = a[1], this.$http.errorCheck(u, o)) {
                        e.next = 9;
                        break;
                      }

                      return e.abrupt("return");

                    case 9:
                      t.showToast({
                        title: "关注成功"
                      }), c = {
                        type: "guanzhu",
                        userid: this.item.userid,
                        data: !0
                      }, this.$emit("changeevent", c), t.$emit("updateData", c), e.next = 18;
                      break;

                    case 15:
                      return e.prev = 15, e.t0 = e["catch"](0), e.abrupt("return");

                    case 18:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this, [[0, 15]]);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          opendetail: function opendetail() {
            t.navigateTo({
              url: "../../pages/detail/detail?detailData=" + JSON.stringify(this.item)
            }), this.User.addHistoryList(this.item);
          },
          caozuo: function () {
            var e = f(r.default.mark(function e(n) {
              var a, u, o, c, s, f;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return a = "ding" === n ? 1 : 2, e.next = 3, this.$http.post("/support", {
                        post_id: this.item.id,
                        type: a - 1
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 3:
                      if (u = e.sent, o = i(u, 2), c = o[0], s = o[1], this.$http.errorCheck(c, s)) {
                        e.next = 9;
                        break;
                      }

                      return e.abrupt("return");

                    case 9:
                      return t.showToast({
                        title: "顶成功"
                      }), f = {
                        type: "support",
                        post_id: this.item.id,
                        do: n
                      }, this.$emit("changeevent", f), e.abrupt("return", t.$emit("updateData", f));

                    case 13:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          openSpace: function openSpace() {
            this.nonavigate || t.navigateTo({
              url: "../../pages/user-space/user-space?userid=" + this.item.userid
            });
          }
        }
      };

      e.default = d;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/common-list-create-component', {
  'components/common/common-list-create-component': function componentsCommonCommonListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0335"));
  }
}, [['components/common/common-list-create-component']]]);
});
require('components/common/common-list.js');
__wxRoute = 'components/common/load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/load-more.js';

define('components/common/load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/load-more"], {
  "4dbe": function dbe(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: {
        loadtext: String
      }
    };
    t.default = u;
  },
  "55a6": function a6(n, t, e) {
    "use strict";

    var u = e("7290"),
        r = e.n(u);
    r.a;
  },
  7290: function _(n, t, e) {},
  "955a": function a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4dbe"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  b09f: function b09f(n, t, e) {
    "use strict";

    var u,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "b", function () {
      return r;
    }), e.d(t, "c", function () {
      return a;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  f349: function f349(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("b09f"),
        r = e("955a");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("55a6");
    var o,
        c = e("f0c5"),
        f = Object(c["a"])(r["default"], u["b"], u["c"], !1, null, "255d86ca", null, !1, u["a"], o);
    t["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/load-more-create-component', {
  'components/common/load-more-create-component': function componentsCommonLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f349"));
  }
}, [['components/common/load-more-create-component']]]);
});
require('components/common/load-more.js');
__wxRoute = 'components/common/more-share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/more-share.js';

define('components/common/more-share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/more-share"], {
  4964: function _(e, t, n) {},
  5124: function _(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("b3c8"),
        r = n("f489f");

    for (var s in r) {
      "default" !== s && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(s);
    }

    n("d53c");
    var a,
        i = n("f0c5"),
        c = Object(i["a"])(r["default"], o["b"], o["c"], !1, null, "8c653834", null, !1, o["a"], a);
    t["default"] = c.exports;
  },
  "9d3a": function d3a(e, t, n) {
    "use strict";

    (function (e, o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var r = s(n("a34a"));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function a(e, t, n, o, r, s, a) {
        try {
          var i = e[s](a),
              c = i.value;
        } catch (u) {
          return void n(u);
        }

        i.done ? t(c) : Promise.resolve(c).then(o, r);
      }

      function i(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (o, r) {
            var s = e.apply(t, n);

            function i(e) {
              a(s, o, r, i, c, "next", e);
            }

            function c(e) {
              a(s, o, r, i, c, "throw", e);
            }

            i(void 0);
          });
        };
      }

      var c = {
        props: {
          show: Boolean,
          sharedata: Object
        },
        data: function data() {
          return {
            title: "",
            shareText: "",
            href: "",
            image: "",
            shareType: 1,
            providerList: []
          };
        },
        watch: {
          sharedata: function sharedata(e, t) {
            this.title = e.title, this.shareText = e.content, this.href = e.url, this.image = e.titlepic, this.shareType = e.shareType;
          }
        },
        onReady: function onReady() {
          var t = this;
          e.getProvider({
            service: "share",
            success: function success(e) {
              for (var n = [], o = 0; o < e.provider.length; o++) {
                switch (e.provider[o]) {
                  case "weixin":
                    n.push({
                      name: "微信好友",
                      id: "weixin",
                      zicon: "weixin",
                      zclass: "wx",
                      sort: 0
                    }), n.push({
                      name: "朋友圈",
                      id: "weixin",
                      type: "WXSenceTimeline",
                      zicon: "weixin",
                      zclass: "pyq",
                      sort: 1
                    });
                    break;

                  case "sinaweibo":
                    n.push({
                      name: "新浪微博",
                      id: "sinaweibo",
                      zicon: "xinlangweibo",
                      zclass: "wb",
                      sort: 2
                    });
                    break;

                  case "qq":
                    n.push({
                      name: "QQ好友",
                      id: "qq",
                      zicon: "QQ",
                      zclass: "qq",
                      sort: 3
                    });
                    break;

                  default:
                    break;
                }
              }

              t.providerList = n.sort(function (e, t) {
                return e.sort - t.sort;
              });
            },
            fail: function fail(t) {
              console.log(o("获取分享通道失败", t, " at components\\common\\more-share.vue:99")), e.showModal({
                content: "获取分享通道失败",
                showCancel: !1
              });
            }
          });
        },
        methods: {
          togle: function togle() {
            this.$emit("togle");
          },
          share: function () {
            var t = i(r.default.mark(function t(n) {
              var s;
              return r.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (console.log(o("分享通道:" + n.id + "； 分享类型:" + this.shareType, " at components\\common\\more-share.vue:112")), this.shareText || 1 !== this.shareType && 0 !== this.shareType) {
                        t.next = 4;
                        break;
                      }

                      return e.showModal({
                        content: "分享内容不能为空",
                        showCancel: !1
                      }), t.abrupt("return");

                    case 4:
                      if (this.image || 2 !== this.shareType && 0 !== this.shareType) {
                        t.next = 7;
                        break;
                      }

                      return e.showModal({
                        content: "分享图片不能为空",
                        showCancel: !1
                      }), t.abrupt("return");

                    case 7:
                      s = {
                        provider: n.id,
                        scene: n.type && "WXSenceTimeline" === n.type ? "WXSenceTimeline" : "WXSceneSession",
                        type: this.shareType,
                        success: function success(t) {
                          console.log(o("success", t, " at components\\common\\more-share.vue:135")), e.showModal({
                            content: "分享成功",
                            showCancel: !1
                          });
                        },
                        fail: function fail(t) {
                          console.log(o("fail", t, " at components\\common\\more-share.vue:142")), e.showModal({
                            content: t.errMsg,
                            showCancel: !1
                          });
                        },
                        complete: function complete() {
                          console.log(o("分享操作结束!", " at components\\common\\more-share.vue:149"));
                        }
                      }, t.t0 = this.shareType, t.next = 0 === t.t0 ? 11 : 1 === t.t0 ? 16 : 2 === t.t0 ? 18 : 5 === t.t0 ? 20 : 24;
                      break;

                    case 11:
                      return s.summary = this.shareText, s.imageUrl = this.image, s.title = this.title, s.href = this.href, t.abrupt("break", 25);

                    case 16:
                      return s.summary = this.shareText, t.abrupt("break", 25);

                    case 18:
                      return s.imageUrl = this.image, t.abrupt("break", 25);

                    case 20:
                      return s.imageUrl = this.image, s.title = this.title, s.miniProgram = {
                        id: "gh_33446d7f7a26",
                        path: "/pages/tabBar/component/component",
                        webUrl: "https://uniapp.dcloud.io",
                        type: 0
                      }, t.abrupt("break", 25);

                    case 24:
                      return t.abrupt("break", 25);

                    case 25:
                      if (0 !== s.type || "iOS" !== plus.os.name) {
                        t.next = 29;
                        break;
                      }

                      return t.next = 28, this.compress();

                    case 28:
                      s.imageUrl = t.sent;

                    case 29:
                      "sinaweibo" === s.provider && (s.type = 1, s.imageUrl = ""), "qq" === s.provider && (s.type = 1, s.href = this.href, s.title = this.title), e.share(s);

                    case 32:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function n(e) {
              return t.apply(this, arguments);
            }

            return n;
          }(),
          compress: function compress() {
            console.log(o("开始压缩", " at components\\common\\more-share.vue:198"));
            var t = this.image;
            return new Promise(function (n) {
              var r = plus.io.convertAbsoluteFileSystem(t.replace("file://", ""));
              console.log(o("after" + r, " at components\\common\\more-share.vue:202")), plus.io.resolveLocalFileSystemURL(r, function (r) {
                r.file(function (r) {
                  console.log(o("getFile:" + JSON.stringify(r), " at components\\common\\more-share.vue:206")), r.size > 20480 && plus.zip.compressImage({
                    src: t,
                    dst: t.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG"),
                    width: "10%",
                    height: "10%",
                    quality: 1,
                    overwrite: !0
                  }, function (e) {
                    console.log(o("success zip****" + e.size, " at components\\common\\more-share.vue:216"));
                    var r = t.replace(".jpg", "2222.jpg").replace(".JPG", "2222.JPG");
                    n(r);
                  }, function (t) {
                    e.showModal({
                      content: "分享图片太大,需要请重新选择图片!",
                      showCancel: !1
                    });
                  });
                });
              }, function (t) {
                console.log(o("Resolve file URL failed: " + t.message, " at components\\common\\more-share.vue:228")), e.showModal({
                  content: "分享图片太大,需要请重新选择图片!",
                  showCancel: !1
                });
              });
            });
          }
        }
      };
      t.default = c;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  b3c8: function b3c8(e, t, n) {
    "use strict";

    var o,
        r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        s = [];

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "c", function () {
      return s;
    }), n.d(t, "a", function () {
      return o;
    });
  },
  d53c: function d53c(e, t, n) {
    "use strict";

    var o = n("4964"),
        r = n.n(o);
    r.a;
  },
  f489f: function f489f(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("9d3a"),
        r = n.n(o);

    for (var s in o) {
      "default" !== s && function (e) {
        n.d(t, e, function () {
          return o[e];
        });
      }(s);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/more-share-create-component', {
  'components/common/more-share-create-component': function componentsCommonMoreShareCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5124"));
  }
}, [['components/common/more-share-create-component']]]);
});
require('components/common/more-share.js');
__wxRoute = 'components/common/no-thing';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/no-thing.js';

define('components/common/no-thing.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/no-thing"], {
  "67b1": function b1(n, t, c) {
    "use strict";

    c.r(t);
    var u = c("a18a"),
        r = c.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        c.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  a18a: function a18a(n, t, c) {},
  b78c: function b78c(n, t, c) {
    "use strict";

    var u,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    c.d(t, "b", function () {
      return r;
    }), c.d(t, "c", function () {
      return a;
    }), c.d(t, "a", function () {
      return u;
    });
  },
  c9b1: function c9b1(n, t, c) {
    "use strict";

    var u = c("f156"),
        r = c.n(u);
    r.a;
  },
  d4b7: function d4b7(n, t, c) {
    "use strict";

    c.r(t);
    var u = c("b78c"),
        r = c("67b1");

    for (var a in r) {
      "default" !== a && function (n) {
        c.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    c("c9b1");
    var o,
        f = c("f0c5"),
        e = Object(f["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], o);
    t["default"] = e.exports;
  },
  f156: function f156(n, t, c) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/no-thing-create-component', {
  'components/common/no-thing-create-component': function componentsCommonNoThingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d4b7"));
  }
}, [['components/common/no-thing-create-component']]]);
});
require('components/common/no-thing.js');
__wxRoute = 'components/common/tag-sex-age';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/tag-sex-age.js';

define('components/common/tag-sex-age.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/tag-sex-age"], {
  "041b": function b(e, n, t) {},
  "0e3f": function e3f(e, n, t) {
    "use strict";

    var u,
        r = function r() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        a = [];

    t.d(n, "b", function () {
      return r;
    }), t.d(n, "c", function () {
      return a;
    }), t.d(n, "a", function () {
      return u;
    });
  },
  "28e3": function e3(e, n, t) {
    "use strict";

    var u = t("041b"),
        r = t.n(u);
    r.a;
  },
  "453e": function e(_e, n, t) {
    "use strict";

    t.r(n);
    var u = t("e022"),
        r = t.n(u);

    for (var a in u) {
      "default" !== a && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  "751a": function a(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("0e3f"),
        r = t("453e");

    for (var a in r) {
      "default" !== a && function (e) {
        t.d(n, e, function () {
          return r[e];
        });
      }(a);
    }

    t("28e3");
    var c,
        o = t("f0c5"),
        f = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, "d9212c30", null, !1, u["a"], c);
    n["default"] = f.exports;
  },
  e022: function e022(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        sex: Number,
        age: Number
      }
    };
    n.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/tag-sex-age-create-component', {
  'components/common/tag-sex-age-create-component': function componentsCommonTagSexAgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("751a"));
  }
}, [['components/common/tag-sex-age-create-component']]]);
});
require('components/common/tag-sex-age.js');
__wxRoute = 'components/common/uploud-images';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/common/uploud-images.js';

define('components/common/uploud-images.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/uploud-images"], {
  "4f0a": function f0a(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("b127"),
        a = n.n(r);

    for (var u in r) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(u);
    }

    e["default"] = a.a;
  },
  6032: function _(t, e, n) {
    "use strict";

    var r = n("c7b6"),
        a = n.n(r);
    a.a;
  },
  "8db7": function db7(t, e, n) {
    "use strict";

    var r,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return u;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  "8e1a": function e1a(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("8db7"),
        a = n("4f0a");

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    n("6032");
    var i,
        o = n("f0c5"),
        c = Object(o["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
    e["default"] = c.exports;
  },
  b127: function b127(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = a(n("a34a"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function u(t, e) {
        return c(t) || o(t, e) || i();
      }

      function i() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function o(t, e) {
        var n = [],
            r = !0,
            a = !1,
            u = void 0;

        try {
          for (var i, o = t[Symbol.iterator](); !(r = (i = o.next()).done); r = !0) {
            if (n.push(i.value), e && n.length === e) break;
          }
        } catch (c) {
          a = !0, u = c;
        } finally {
          try {
            r || null == o["return"] || o["return"]();
          } finally {
            if (a) throw u;
          }
        }

        return n;
      }

      function c(t) {
        if (Array.isArray(t)) return t;
      }

      function s(t, e, n, r, a, u, i) {
        try {
          var o = t[u](i),
              c = o.value;
        } catch (s) {
          return void n(s);
        }

        o.done ? e(c) : Promise.resolve(c).then(r, a);
      }

      function l(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, a) {
            var u = t.apply(e, n);

            function i(t) {
              s(u, r, a, i, o, "next", t);
            }

            function o(t) {
              s(u, r, a, i, o, "throw", t);
            }

            i(void 0);
          });
        };
      }

      var f = [["camera"], ["album"], ["camera", "album"]],
          d = [["compressed"], ["original"], ["compressed", "original"]],
          p = {
        props: {
          imageList: Array
        },
        data: function data() {
          return {
            sourceTypeIndex: 2,
            sourceType: ["拍照", "相册", "拍照或相册"],
            sizeTypeIndex: 2,
            sizeType: ["压缩", "原图", "压缩或原图"],
            countIndex: 8,
            count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
          };
        },
        methods: {
          chooseImage: function () {
            var e = l(r.default.mark(function e() {
              var n = this;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (9 !== this.imageList.length) {
                        e.next = 2;
                        break;
                      }

                      return e.abrupt("return");

                    case 2:
                      t.chooseImage({
                        sourceType: f[this.sourceTypeIndex],
                        sizeType: d[this.sizeTypeIndex],
                        count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
                        success: function success(t) {
                          for (var e = 0; e < t.tempFilePaths.length; e++) {
                            n.Upload(t.tempFilePaths[e]);
                          }
                        }
                      });

                    case 3:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          Upload: function () {
            var e = l(r.default.mark(function e(n) {
              var a, i, o, c, s, l;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 0, e.next = 3, this.$http.upload("/image/uploadmore", {
                        name: "imglist[]",
                        filePath: n,
                        token: !0,
                        checkToken: !0
                      });

                    case 3:
                      if (a = e.sent, i = u(a, 2), o = i[0], c = i[1], s = JSON.parse(c.data), !o && !s.errorCode) {
                        e.next = 11;
                        break;
                      }

                      return t.showToast({
                        title: s.msg ? s.msg : "上传失败",
                        icon: "none"
                      }), e.abrupt("return", !1);

                    case 11:
                      l = s.data.list, this.$emit("upload", l[0]), e.next = 18;
                      break;

                    case 15:
                      return e.prev = 15, e.t0 = e["catch"](0), e.abrupt("return");

                    case 18:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this, [[0, 15]]);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          previewImage: function previewImage(e) {
            var n = e.target.dataset.src;
            t.previewImage({
              current: n,
              urls: this.imageList
            });
          },
          delect: function delect(e) {
            var n = this;
            t.showModal({
              title: "提示",
              content: "是否要删除该图片",
              success: function success(t) {
                t.confirm && n.$emit("del", e);
              }
            });
          }
        }
      };
      e.default = p;
    }).call(this, n("6e42")["default"]);
  },
  c7b6: function c7b6(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/common/uploud-images-create-component', {
  'components/common/uploud-images-create-component': function componentsCommonUploudImagesCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8e1a"));
  }
}, [['components/common/uploud-images-create-component']]]);
});
require('components/common/uploud-images.js');
__wxRoute = 'components/creditcard/card-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/creditcard/card-list-item.js';

define('components/creditcard/card-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/creditcard/card-list-item"], {
  "2d60": function d60(t, e, n) {
    "use strict";

    var a = n("3caf"),
        r = n.n(a);
    r.a;
  },
  "3caf": function caf(t, e, n) {},
  "3ed3": function ed3(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          carddetail: function carddetail() {
            t.navigateTo({
              url: "../../pages/creditcardgl/carddetail?detail=" + JSON.stringify(this.item)
            });
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  "5ee2": function ee2(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("add5"),
        r = n("7a95");

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    n("2d60");
    var u,
        i = n("f0c5"),
        d = Object(i["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
    e["default"] = d.exports;
  },
  "7a95": function a95(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("3ed3"),
        r = n.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    e["default"] = r.a;
  },
  add5: function add5(t, e, n) {
    "use strict";

    var a,
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        c = [];

    n.d(e, "b", function () {
      return r;
    }), n.d(e, "c", function () {
      return c;
    }), n.d(e, "a", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/creditcard/card-list-item-create-component', {
  'components/creditcard/card-list-item-create-component': function componentsCreditcardCardListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5ee2"));
  }
}, [['components/creditcard/card-list-item-create-component']]]);
});
require('components/creditcard/card-list-item.js');
__wxRoute = 'components/detail/comment-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/detail/comment-list.js';

define('components/detail/comment-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/detail/comment-list"], {
  6664: function _(e, t, n) {},
  "897a": function a(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          reply: function reply() {
            this.$emit("reply", this.item.id);
          },
          openSpace: function openSpace() {
            e.navigateTo({
              url: "../../pages/user-space/user-space?userid=" + this.item.userid
            });
          }
        }
      };
      t.default = n;
    }).call(this, n("6e42")["default"]);
  },
  9188: function _(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("ab9b"),
        i = n("eb78");

    for (var r in i) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    n("e482");
    var a,
        c = n("f0c5"),
        o = Object(c["a"])(i["default"], u["b"], u["c"], !1, null, "1989b876", null, !1, u["a"], a);
    t["default"] = o.exports;
  },
  ab9b: function ab9b(e, t, n) {
    "use strict";

    var u,
        i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "b", function () {
      return i;
    }), n.d(t, "c", function () {
      return r;
    }), n.d(t, "a", function () {
      return u;
    });
  },
  e482: function e482(e, t, n) {
    "use strict";

    var u = n("6664"),
        i = n.n(u);
    i.a;
  },
  eb78: function eb78(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("897a"),
        i = n.n(u);

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    t["default"] = i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/detail/comment-list-create-component', {
  'components/detail/comment-list-create-component': function componentsDetailCommentListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9188"));
  }
}, [['components/detail/comment-list-create-component']]]);
});
require('components/detail/comment-list.js');
__wxRoute = 'components/detail/detail-info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/detail/detail-info.js';

define('components/detail/detail-info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/detail/detail-info"], {
  "00b2": function b2(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("aa6f"),
        u = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  4334: function _(t, e, n) {},
  5048: function _(t, e, n) {
    "use strict";

    var r,
        u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return u;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  "6ed4": function ed4(t, e, n) {
    "use strict";

    var r = n("4334"),
        u = n.n(r);
    u.a;
  },
  aa6f: function aa6f(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = u(n("a34a"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function i(t, e) {
        return c(t) || o(t, e) || a();
      }

      function a() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function o(t, e) {
        var n = [],
            r = !0,
            u = !1,
            i = void 0;

        try {
          for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            if (n.push(a.value), e && n.length === e) break;
          }
        } catch (c) {
          u = !0, i = c;
        } finally {
          try {
            r || null == o["return"] || o["return"]();
          } finally {
            if (u) throw i;
          }
        }

        return n;
      }

      function c(t) {
        if (Array.isArray(t)) return t;
      }

      function s(t, e, n, r, u, i, a) {
        try {
          var o = t[i](a),
              c = o.value;
        } catch (s) {
          return void n(s);
        }

        o.done ? e(c) : Promise.resolve(c).then(r, u);
      }

      function f(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, u) {
            var i = t.apply(e, n);

            function a(t) {
              s(i, r, u, a, o, "next", t);
            }

            function o(t) {
              s(i, r, u, a, o, "throw", t);
            }

            a(void 0);
          });
        };
      }

      var l = function l() {
        return n.e("components/common/tag-sex-age").then(n.bind(null, "751a"));
      },
          p = {
        components: {
          tagSexAge: l
        },
        props: {
          item: Object
        },
        computed: {
          getSex: function getSex() {
            return this.item.sex;
          },
          getAge: function getAge() {
            return this.item.age;
          }
        },
        methods: {
          openSpace: function openSpace() {
            t.navigateTo({
              url: "../../pages/user-space/user-space?userid=" + this.item.userid
            });
          },
          guanzhu: function () {
            var e = f(r.default.mark(function e() {
              var n, u, a, o, c;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 0, e.next = 3, this.$http.post("/follow", {
                        follow_id: this.item.userid
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 3:
                      if (n = e.sent, u = i(n, 2), a = u[0], o = u[1], this.$http.errorCheck(a, o)) {
                        e.next = 9;
                        break;
                      }

                      return e.abrupt("return");

                    case 9:
                      t.showToast({
                        title: "关注成功"
                      }), c = {
                        type: "guanzhu",
                        userid: this.item.userid,
                        data: !0
                      }, this.$emit("changeevent", c), t.$emit("updateData", c), e.next = 18;
                      break;

                    case 15:
                      return e.prev = 15, e.t0 = e["catch"](0), e.abrupt("return");

                    case 18:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this, [[0, 15]]);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          imgdetail: function imgdetail(e) {
            t.previewImage({
              current: e,
              urls: this.item.morepic
            });
          },
          caozuo: function () {
            var e = f(r.default.mark(function e(n) {
              var u, a, o, c, s, f;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return u = "ding" === n ? 1 : 2, e.next = 3, this.$http.post("/support", {
                        post_id: this.item.id,
                        type: u - 1
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 3:
                      if (a = e.sent, o = i(a, 2), c = o[0], s = o[1], this.$http.errorCheck(c, s)) {
                        e.next = 9;
                        break;
                      }

                      return e.abrupt("return");

                    case 9:
                      return t.showToast({
                        title: "顶成功"
                      }), f = {
                        type: "support",
                        post_id: this.item.id,
                        do: n
                      }, this.$emit("changeevent", f), e.abrupt("return", t.$emit("updateData", f));

                    case 13:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }()
        }
      };

      e.default = p;
    }).call(this, n("6e42")["default"]);
  },
  adac: function adac(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("5048"),
        u = n("00b2");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("6ed4");
    var a,
        o = n("f0c5"),
        c = Object(o["a"])(u["default"], r["b"], r["c"], !1, null, "4f26fae6", null, !1, r["a"], a);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/detail/detail-info-create-component', {
  'components/detail/detail-info-create-component': function componentsDetailDetailInfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("adac"));
  }
}, [['components/detail/detail-info-create-component']]]);
});
require('components/detail/detail-info.js');
__wxRoute = 'components/home/home-data';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/home-data.js';

define('components/home/home-data.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/home-data"], {
  "107a": function a(t, n, _a) {
    "use strict";

    _a.r(n);

    var e = _a("7809"),
        u = _a("9e08");

    for (var r in u) {
      "default" !== r && function (t) {
        _a.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    _a("e4d6");

    var c,
        o = _a("f0c5"),
        f = Object(o["a"])(u["default"], e["b"], e["c"], !1, null, "42d03aa2", null, !1, e["a"], c);

    n["default"] = f.exports;
  },
  "6faa": function faa(t, n, a) {},
  7809: function _(t, n, a) {
    "use strict";

    var e,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    a.d(n, "b", function () {
      return u;
    }), a.d(n, "c", function () {
      return r;
    }), a.d(n, "a", function () {
      return e;
    });
  },
  "9e08": function e08(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("a4dc"),
        u = a.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  a4dc: function a4dc(t, n, a) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: {
        homedata: Array
      }
    };
    n.default = e;
  },
  e4d6: function e4d6(t, n, a) {
    "use strict";

    var e = a("6faa"),
        u = a.n(e);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/home-data-create-component', {
  'components/home/home-data-create-component': function componentsHomeHomeDataCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("107a"));
  }
}, [['components/home/home-data-create-component']]]);
});
require('components/home/home-data.js');
__wxRoute = 'components/home/home-info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/home-info.js';

define('components/home/home-info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/home-info"], {
  "0900": function _(e, n, t) {
    "use strict";

    var u = t("bd1e"),
        r = t.n(u);
    r.a;
  },
  1104: function _(e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        homeinfo: Object
      },
      methods: {
        ToUserSpace: function ToUserSpace() {
          this.User.navigate({
            url: "../../pages/user-space/user-space?userid=" + this.homeinfo.id
          });
        }
      }
    };
    n.default = u;
  },
  "337d": function d(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("1104"),
        r = t.n(u);

    for (var o in u) {
      "default" !== o && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(o);
    }

    n["default"] = r.a;
  },
  4361: function _(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("df45"),
        r = t("337d");

    for (var o in r) {
      "default" !== o && function (e) {
        t.d(n, e, function () {
          return r[e];
        });
      }(o);
    }

    t("0900");
    var a,
        c = t("f0c5"),
        f = Object(c["a"])(r["default"], u["b"], u["c"], !1, null, "aefa7750", null, !1, u["a"], a);
    n["default"] = f.exports;
  },
  bd1e: function bd1e(e, n, t) {},
  df45: function df45(e, n, t) {
    "use strict";

    var u,
        r = function r() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        o = [];

    t.d(n, "b", function () {
      return r;
    }), t.d(n, "c", function () {
      return o;
    }), t.d(n, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/home-info-create-component', {
  'components/home/home-info-create-component': function componentsHomeHomeInfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4361"));
  }
}, [['components/home/home-info-create-component']]]);
});
require('components/home/home-info.js');
__wxRoute = 'components/home/home-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/home-list-item.js';

define('components/home/home-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/home-list-item"], {
  "023c": function c(t, e, n) {
    "use strict";

    var r,
        i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "b", function () {
      return i;
    }), n.d(e, "c", function () {
      return o;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  "5fc1": function fc1(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("bcf2"),
        i = n.n(r);

    for (var o in r) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    e["default"] = i.a;
  },
  7712: function _(t, e, n) {},
  "8c06": function c06(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("023c"),
        i = n("5fc1");

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    n("c562");
    var a,
        c = n("f0c5"),
        u = Object(c["a"])(i["default"], r["b"], r["c"], !1, null, "299f1814", null, !1, r["a"], a);
    e["default"] = u.exports;
  },
  bcf2: function bcf2(t, e, n) {
    "use strict";

    (function (t, r) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = o(n("a34a"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, e) {
        return s(t) || u(t, e) || c();
      }

      function c() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function u(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
            if (n.push(a.value), e && n.length === e) break;
          }
        } catch (u) {
          i = !0, o = u;
        } finally {
          try {
            r || null == c["return"] || c["return"]();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }

      function s(t) {
        if (Array.isArray(t)) return t;
      }

      function f(t, e, n, r, i, o, a) {
        try {
          var c = t[o](a),
              u = c.value;
        } catch (s) {
          return void n(s);
        }

        c.done ? e(u) : Promise.resolve(u).then(r, i);
      }

      function l(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);

            function a(t) {
              f(o, r, i, a, c, "next", t);
            }

            function c(t) {
              f(o, r, i, a, c, "throw", t);
            }

            a(void 0);
          });
        };
      }

      var h = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          clickevent: function clickevent() {
            var e = this;

            switch (this.item.clicktype) {
              case "navigateTo":
                this.item.url && t.navigateTo({
                  url: this.item.url
                });
                break;

              case "switchTab":
                this.item.url && t.switchTab({
                  url: this.item.url
                });
                break;

              case "clear":
                t.showModal({
                  title: "提示",
                  content: "是否要清除缓存？",
                  confirmText: "立刻清除",
                  success: function success(n) {
                    n.confirm && (t.clearStorage(), t.showToast({
                      title: "清除缓存成功！"
                    }), e.User.logout(!1));
                  }
                });
                break;

              case "bind":
                if (this.User.userbind[this.item.provider]) return;
                this.bindother();
                break;

              case "nothing":
                t.showToast({
                  title: "更新中...",
                  icon: "none"
                });
                break;
            }
          },
          bindother: function bindother() {
            var e = this;
            t.login({
              provider: this.item.provider,
              success: function success(n) {
                t.getUserInfo({
                  provider: e.item.provider,
                  success: function success(t) {
                    var r = Object.assign(t, n);
                    e.bindEvent(e.User.__formatOtherLogin(e.item.provider, r));
                  }
                });
              },
              fail: function fail(e) {
                t.showToast({
                  title: "绑定失败",
                  icon: "none"
                }), console.log(r("login fail:", e, " at components\\home\\home-list-item.vue:71"));
              }
            });
          },
          bindEvent: function () {
            var e = l(i.default.mark(function e(n) {
              var r, o, c, u;
              return i.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return t.showLoading({
                        title: "绑定中...",
                        mask: !1
                      }), e.next = 3, this.$http.post("/user/bindother", n, {
                        token: !0,
                        checkToken: !0
                      });

                    case 3:
                      if (r = e.sent, o = a(r, 2), c = o[0], u = o[1], this.$http.errorCheck(c, u)) {
                        e.next = 9;
                        break;
                      }

                      return e.abrupt("return", t.hideLoading());

                    case 9:
                      t.hideLoading(), t.showToast({
                        title: "绑定成功！"
                      }), this.User.userbind[this.item.provider] = {
                        nickname: n.nickName
                      }, t.setStorageSync("userbind", this.User.userbind), this.$emit("updateuserbind");

                    case 14:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }()
        }
      };
      e.default = h;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  c562: function c562(t, e, n) {
    "use strict";

    var r = n("7712"),
        i = n.n(r);
    i.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/home-list-item-create-component', {
  'components/home/home-list-item-create-component': function componentsHomeHomeListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8c06"));
  }
}, [['components/home/home-list-item-create-component']]]);
});
require('components/home/home-list-item.js');
__wxRoute = 'components/home/other-login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/home/other-login.js';

define('components/home/other-login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/home/other-login"], {
  "1ae8": function ae8(n, e, t) {
    "use strict";

    (function (n, o) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = i(t("a34a"));

      function i(n) {
        return n && n.__esModule ? n : {
          default: n
        };
      }

      function a(n, e, t, o, r, i, a) {
        try {
          var u = n[i](a),
              c = u.value;
        } catch (s) {
          return void t(s);
        }

        u.done ? e(c) : Promise.resolve(c).then(o, r);
      }

      function u(n) {
        return function () {
          var e = this,
              t = arguments;
          return new Promise(function (o, r) {
            var i = n.apply(e, t);

            function u(n) {
              a(i, o, r, u, c, "next", n);
            }

            function c(n) {
              a(i, o, r, u, c, "throw", n);
            }

            u(void 0);
          });
        };
      }

      function c(n, e) {
        return f(n) || l(n, e) || s();
      }

      function s() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function l(n, e) {
        var t = [],
            o = !0,
            r = !1,
            i = void 0;

        try {
          for (var a, u = n[Symbol.iterator](); !(o = (a = u.next()).done); o = !0) {
            if (t.push(a.value), e && t.length === e) break;
          }
        } catch (c) {
          r = !0, i = c;
        } finally {
          try {
            o || null == u["return"] || u["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return t;
      }

      function f(n) {
        if (Array.isArray(n)) return n;
      }

      var d = {
        props: {
          noback: {
            type: Boolean,
            default: !0
          }
        },
        data: function data() {
          return {
            providerList: []
          };
        },
        onReady: function onReady() {
          this.getLoginAuth();
        },
        methods: {
          MpLogin: function MpLogin(e) {
            var t = this;
            this.$http.post(e.url, {
              code: e.code,
              nickName: e.nickName,
              avatarUrl: e.avatarUrl
            }).then(function (e) {
              var r = c(e, 2),
                  i = r[0],
                  a = r[1];
              if (!t.$http.errorCheck(i, a)) return !1;
              console.log(n(a.data.data, " at components\\home\\other-login.vue:104")), t.User.token = a.data.data.token, t.User.userinfo = t.User.__formatUserinfo(a.data.data), o.setStorageSync("userinfo", t.User.userinfo), o.setStorageSync("token", t.User.token), t.User.userinfo.id && t.User.getCounts(), t.User.userinfo.id && t.$chat.Open(), o.showToast({
                title: "登录成功"
              }), t.$emit("logining"), t.noback || o.navigateBack();
            });
          },
          getLoginAuth: function getLoginAuth() {
            var e = this;
            o.getProvider({
              service: "oauth",
              success: function success(n) {
                e.providerList = n.provider.map(function (n) {
                  var e = "",
                      t = "";

                  switch (n) {
                    case "weixin":
                      e = "微信登录", t = "weixin";
                      break;

                    case "qq":
                      e = "QQ登录", t = "qq";
                      break;

                    case "weibo":
                      e = "新浪微博登录", t = "weibo";
                      break;
                  }

                  return {
                    name: e,
                    icon: t,
                    id: n
                  };
                });
              },
              fail: function fail(e) {
                console.log(n("获取登录通道失败", e, " at components\\home\\other-login.vue:165"));
              }
            });
          },
          tologin: function tologin(e) {
            var t = this;
            o.login({
              provider: e.id,
              success: function success(r) {
                o.showLoading({
                  title: "登陆中...",
                  mask: !1
                }), console.log(n(r, " at components\\home\\other-login.vue:194")), o.getUserInfo({
                  provider: e.id,
                  success: function success(o) {
                    console.log(n(o, " at components\\home\\other-login.vue:199")), console.log(n(JSON.stringify(o.userInfo), " at components\\home\\other-login.vue:224"));

                    var i = t.User.__formatOtherLogin(e.id, Object.assign(o, r));

                    t.loginEvent(i);
                  }
                }), console.log(n("登录成功，保存到本地存储，修改当前用户登录状态", " at components\\home\\other-login.vue:232"));
              },
              fail: function fail(e) {
                console.log(n("login fail:", e, " at components\\home\\other-login.vue:235"));
              },
              complete: function complete() {
                o.hideLoading();
              }
            });
          },
          loginEvent: function () {
            var n = u(r.default.mark(function n(e) {
              var t;
              return r.default.wrap(function (n) {
                while (1) {
                  switch (n.prev = n.next) {
                    case 0:
                      return n.next = 2, this.User.login({
                        url: "/user/otherlogin",
                        data: e,
                        Noback: this.noback
                      });

                    case 2:
                      t = n.sent, t && this.$emit("logining");

                    case 4:
                    case "end":
                      return n.stop();
                  }
                }
              }, n, this);
            }));

            function e(e) {
              return n.apply(this, arguments);
            }

            return e;
          }()
        }
      };
      e.default = d;
    }).call(this, t("0de9")["default"], t("6e42")["default"]);
  },
  "294e": function e(n, _e, t) {
    "use strict";

    var o,
        r = function r() {
      var n = this,
          e = n.$createElement;
      n._self._c;
    },
        i = [];

    t.d(_e, "b", function () {
      return r;
    }), t.d(_e, "c", function () {
      return i;
    }), t.d(_e, "a", function () {
      return o;
    });
  },
  "5f69": function f69(n, e, t) {
    "use strict";

    var o = t("b249"),
        r = t.n(o);
    r.a;
  },
  "9f43": function f43(n, e, t) {
    "use strict";

    t.r(e);
    var o = t("294e"),
        r = t("ca38");

    for (var i in r) {
      "default" !== i && function (n) {
        t.d(e, n, function () {
          return r[n];
        });
      }(i);
    }

    t("5f69");
    var a,
        u = t("f0c5"),
        c = Object(u["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
    e["default"] = c.exports;
  },
  b249: function b249(n, e, t) {},
  ca38: function ca38(n, e, t) {
    "use strict";

    t.r(e);
    var o = t("1ae8"),
        r = t.n(o);

    for (var i in o) {
      "default" !== i && function (n) {
        t.d(e, n, function () {
          return o[n];
        });
      }(i);
    }

    e["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/home/other-login-create-component', {
  'components/home/other-login-create-component': function componentsHomeOtherLoginCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9f43"));
  }
}, [['components/home/other-login-create-component']]]);
});
require('components/home/other-login.js');
__wxRoute = 'components/index/index-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/index/index-list.js';

define('components/index/index-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/index/index-list"], {
  3661: function _(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("4960"),
        i = n("36a9");

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    n("7870");
    var u,
        o = n("f0c5"),
        c = Object(o["a"])(i["default"], r["b"], r["c"], !1, null, "a6aa7d86", null, !1, r["a"], u);
    e["default"] = c.exports;
  },
  "36a9": function a9(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("fbdf"),
        i = n.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    e["default"] = i.a;
  },
  4960: function _(t, e, n) {
    "use strict";

    var r,
        i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "b", function () {
      return i;
    }), n.d(e, "c", function () {
      return a;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  7870: function _(t, e, n) {
    "use strict";

    var r = n("7d8d"),
        i = n.n(r);
    i.a;
  },
  "7d8d": function d8d(t, e, n) {},
  fbdf: function fbdf(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = i(n("a34a"));

      function i(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, e) {
        return c(t) || o(t, e) || u();
      }

      function u() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function o(t, e) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;

        try {
          for (var u, o = t[Symbol.iterator](); !(r = (u = o.next()).done); r = !0) {
            if (n.push(u.value), e && n.length === e) break;
          }
        } catch (c) {
          i = !0, a = c;
        } finally {
          try {
            r || null == o["return"] || o["return"]();
          } finally {
            if (i) throw a;
          }
        }

        return n;
      }

      function c(t) {
        if (Array.isArray(t)) return t;
      }

      function s(t, e, n, r, i, a, u) {
        try {
          var o = t[a](u),
              c = o.value;
        } catch (s) {
          return void n(s);
        }

        o.done ? e(c) : Promise.resolve(c).then(r, i);
      }

      function f(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);

            function u(t) {
              s(a, r, i, u, o, "next", t);
            }

            function o(t) {
              s(a, r, i, u, o, "throw", t);
            }

            u(void 0);
          });
        };
      }

      var d = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          openSpace: function openSpace() {
            t.navigateTo({
              url: "../../pages/user-space/user-space?userid=" + this.item.userid
            });
          },
          guanzhu: function () {
            var e = f(r.default.mark(function e() {
              var n, i, u, o, c;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 0, e.next = 3, this.$http.post("/follow", {
                        follow_id: this.item.userid
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 3:
                      if (n = e.sent, i = a(n, 2), u = i[0], o = i[1], this.$http.errorCheck(u, o)) {
                        e.next = 9;
                        break;
                      }

                      return e.abrupt("return");

                    case 9:
                      t.showToast({
                        title: "关注成功"
                      }), c = {
                        type: "guanzhu",
                        userid: this.item.userid,
                        data: !0
                      }, this.$emit("changeevent", c), t.$emit("updateData", c), e.next = 18;
                      break;

                    case 15:
                      return e.prev = 15, e.t0 = e["catch"](0), e.abrupt("return");

                    case 18:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this, [[0, 15]]);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          caozuo: function () {
            var e = f(r.default.mark(function e(n) {
              var i, u, o, c, s, f;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, i = "ding" === n ? 1 : 2, this.item.infonum.index !== i) {
                        e.next = 4;
                        break;
                      }

                      return e.abrupt("return");

                    case 4:
                      return e.next = 6, this.$http.post("/support", {
                        post_id: this.item.id,
                        type: i - 1
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 6:
                      if (u = e.sent, o = a(u, 2), c = o[0], s = o[1], this.$http.errorCheck(c, s)) {
                        e.next = 12;
                        break;
                      }

                      return e.abrupt("return");

                    case 12:
                      t.showToast({
                        title: 1 == i ? "顶成功" : "踩成功"
                      }), f = {
                        type: "support",
                        post_id: this.item.id,
                        do: n
                      }, this.$emit("changeevent", f), t.$emit("updateData", f), e.next = 21;
                      break;

                    case 18:
                      return e.prev = 18, e.t0 = e["catch"](0), e.abrupt("return");

                    case 21:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this, [[0, 18]]);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          opendetail: function opendetail() {
            t.navigateTo({
              url: "../../pages/detail/detail?detailData=" + JSON.stringify(this.item)
            }), this.User.addHistoryList(this.item);
          }
        }
      };
      e.default = d;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/index/index-list-create-component', {
  'components/index/index-list-create-component': function componentsIndexIndexListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3661"));
  }
}, [['components/index/index-list-create-component']]]);
});
require('components/index/index-list.js');
__wxRoute = 'components/index/swiper-tab-head';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/index/swiper-tab-head.js';

define('components/index/swiper-tab-head.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/index/swiper-tab-head"], {
  "1be7": function be7(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("2d11"),
        r = e.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    n["default"] = r.a;
  },
  "2d11": function d11(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      props: {
        tabBars: Array,
        tabIndex: Number,
        scrollStyle: {
          type: String,
          default: ""
        },
        scrollItemStyle: {
          type: String,
          default: ""
        }
      },
      methods: {
        tabtap: function tabtap(t) {
          this.$emit("tabtap", t);
        }
      }
    };
    n.default = a;
  },
  "7c8a": function c8a(t, n, e) {
    "use strict";

    var a,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "b", function () {
      return r;
    }), e.d(n, "c", function () {
      return u;
    }), e.d(n, "a", function () {
      return a;
    });
  },
  bb11: function bb11(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("7c8a"),
        r = e("1be7");

    for (var u in r) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(u);
    }

    e("dca1");
    var c,
        f = e("f0c5"),
        i = Object(f["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
    n["default"] = i.exports;
  },
  dca1: function dca1(t, n, e) {
    "use strict";

    var a = e("f49b"),
        r = e.n(a);
    r.a;
  },
  f49b: function f49b(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/index/swiper-tab-head-create-component', {
  'components/index/swiper-tab-head-create-component': function componentsIndexSwiperTabHeadCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bb11"));
  }
}, [['components/index/swiper-tab-head-create-component']]]);
});
require('components/index/swiper-tab-head.js');
__wxRoute = 'components/Li-Calendar/Li-Calendar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Li-Calendar/Li-Calendar.js';

define('components/Li-Calendar/Li-Calendar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Li-Calendar/Li-Calendar"], {
  "1d0b": function d0b(t, e, a) {
    "use strict";

    a.r(e);
    var r = a("eafb"),
        n = a("b472");

    for (var o in n) {
      "default" !== o && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(o);
    }

    a("88c6");
    var i,
        u = a("f0c5"),
        s = Object(u["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
    e["default"] = s.exports;
  },
  "2c25": function c25(t, e, a) {
    "use strict";

    (function (t, r) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = o(a("1fbc"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var i = {
        name: "Li-Calendar",
        props: {
          currentTime: {
            type: String,
            default: function _default() {
              var t = new Date();
              return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
            }
          },
          mark: {
            type: Array,
            default: function _default() {}
          },
          lastText: {
            type: String,
            default: "〈"
          },
          nextText: {
            type: String,
            default: "〉"
          },
          maskColor: {
            type: String,
            default: "#01AAED"
          },
          showLunar: {
            type: Boolean,
            default: !0
          },
          range: {
            type: Object,
            default: function _default() {
              return {
                rangeStart: void 0,
                rangeEnd: void 0
              };
            }
          },
          rangeMode: {
            type: Boolean,
            default: !1
          },
          dateStart: {
            type: String,
            default: "1970-01-01"
          },
          dateEnd: {
            type: String,
            default: "2100-12-31"
          },
          canDrag: {
            type: Boolean,
            default: !0
          }
        },
        created: function created() {
          this.render();
        },
        data: function data() {
          return {
            nextDisabled: !1,
            lastDisabled: !1,
            currentSelectTime: void 0,
            title_time: "",
            year: void 0,
            month: void 0,
            beforeDateList: [],
            dateList: [],
            afterDateList: [],
            firstRangeSelected: !1,
            rangeStart_: void 0,
            rangeEnd_: void 0,
            transform_x: 0,
            transform_time: 0
          };
        },
        methods: {
          render: function render(t) {
            var e = this,
                a = t || e.currentTime,
                r = this.toDateByStr(a),
                n = r.getMonth() + 1;
            n < 10 && (n = "0" + n), this.title_time = r.getFullYear() + "年" + n + "月";
            var o = r.getFullYear() + "/" + (r.getMonth() + 1) + "/01",
                i = e.toDateByStr(o);
            e.year = i.getFullYear(), e.month = i.getMonth() + 1;
            var u,
                s,
                l = i.getDay(),
                d = 0;
            1 == e.month ? (u = 12, s = e.year - 1) : (s = e.year, u = e.month - 1);
            var c = s + "/" + u + "/01",
                f = e.getTotalDay(c),
                h = f - l,
                g = e.toDateByStr1(e.dateStart),
                m = e.toDateByStr1(e.dateEnd);
            e.beforeDateList = [];

            for (var D = 0; D < l; D++) {
              d++, h++;
              var v = {
                dateIndex: h,
                key: "before_" + D
              },
                  y = new Date(s + "/" + u + "/" + h);

              if ((g > y || y > m) && (v.outOfDate = !0), e.showLunar) {
                var S = e.sloarToLunar(s, u, h),
                    T = "初一" == S.lunarDay ? S.lunarMonth + "月" : S.lunarDay;
                v.markText = T;
              }

              e.beforeDateList.push(v);
            }

            var p = e.getTotalDay(a),
                k = new Date(),
                b = k.getFullYear(),
                x = k.getMonth() + 1,
                M = k.getDate();
            e.dateList = [];

            for (var L = 1; L <= p; L++) {
              d++;
              var _ = {
                dateIndex: L,
                key: "date_" + L,
                isRanges: !1,
                isToday: !1
              },
                  w = e.toDateByStr(e.year + "/" + e.month + "/" + L);
              b == e.year && x == e.month && M == L && (_.isToday = !0);
              var B = w.getDay();

              if (0 != B && 6 != B || (_.isDaySunOrSat = !0), (g > w || w > m) && (_.outOfDate = !0), e.showLunar) {
                var R = e.sloarToLunar(e.year, e.month, L);
                e.lunarMonth = R.lunarMonth, e.lunarYear = R.lunarYear;
                var C = "初一" == R.lunarDay ? R.lunarMonth + "月" : R.lunarDay;
                _.lunarMonth = R.lunarMonth, _.lunarYear = R.lunarYear, _.lunarDay = R.lunarDay, _.markText = C, _.markTextColor = "#454545";
              }

              if (e.mark) for (var E = 0; E < e.mark.length; E++) {
                var O = e.toDateByStr1(e.mark[E].time.trim());

                if (w.getTime() == O.getTime()) {
                  var Y = e.mark[E].text;
                  0 != e.mark[E].markPoint && (_.pointText = e.mark[E].pointText ? e.mark[E].pointText : "●", _.pointTextColor = e.mark[E].pointTextColor ? e.mark[E].pointTextColor : void 0), void 0 != Y && "" != Y && (_.markText = Y, _.markTextColor = e.mark[E].markTextColor ? e.mark[E].markTextColor : void 0);
                  break;
                }
              }
              e.dateList.push(_);
            }

            if (e.setRange(), e.afterDateList = [], d < 42) {
              var F,
                  I,
                  P = 0;
              12 == e.month ? (F = 1, I = e.year + 1) : (I = e.year, F = e.month + 1);

              for (var X = d; X < 42; X++) {
                P++;
                var $ = {
                  dateIndex: P,
                  key: "after_" + P
                };

                if (e.showLunar) {
                  var j = e.sloarToLunar(I, F, P),
                      A = "初一" == j.lunarDay ? j.lunarMonth + "月" : j.lunarDay;
                  $.markText = A;
                }

                var J = new Date(I + "/" + F + "/" + P);
                (g > J || J > m) && ($.outOfDate = !0), e.afterDateList.push($);
              }
            }
          },
          sloarToLunar: function sloarToLunar(t, e, a) {
            var r = n.default.sloarToLunar(t, e, a);
            return r;
          },
          getTotalDay: function getTotalDay(t) {
            t = t.replace(/-/g, "/");
            var e = new Date(t);
            "Invalid Date" == e && (e = new Date(t + "/01"));
            var a = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
            return a;
          },
          toDateByStr: function toDateByStr(t) {
            var e;
            return t && (e = new Date(t.replace(/-/g, "/"))), t && "Invalid Date" != e || (e = new Date()), e;
          },
          toDateByStr1: function toDateByStr1(t) {
            try {
              var e;
              return t && (e = new Date(t.replace(/-/g, "/"))), t && "Invalid Date" != e ? e : null;
            } catch (a) {
              return null;
            }
          },
          getTimeStrFormat: function getTimeStrFormat(t) {
            var e;
            return t && (e = new Date(t.replace(/-/g, "/"))), t && "Invalid Date" != e || (e = new Date()), e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
          },
          selectedDateFun: function selectedDateFun(t) {
            var e = this,
                a = e.dateList[t - 1];
            a.year = e.year, a.month = e.month, a.day = t, a.time = e.year + "-" + e.month + "-" + t, e.$emit("dayChange", a), e.checkOutOfDate(a.time) || (e.currentSelectTime = t, e.rangeMode && (e.firstRangeSelected ? (e.rangeEnd_ = a.time, e.firstRangeSelected = !e.firstRangeSelected, e.$emit("rangeChange", {
              start: e.rangeStart_,
              end: e.rangeEnd_
            }), e.setRange()) : (e.firstRangeSelected = !e.firstRangeSelected, e.rangeStart_ = a.time, e.rangeEnd_ = void 0, e.clearRange())));
          },
          addMonth: function addMonth() {
            var t = this,
                e = t.month,
                a = t.year;
            12 == t.month ? (e = 1, a += 1) : e += 1;
            var r = a + "/" + e + "/01";
            t.checkOutOfDate(r) ? t.nextDisabled = !0 : (t.month = e, t.year = a, t.lastDisabled = !1, t.checkDateRange(t.year, t.month, 1) && (t.nextDisabled = !0), t.rangeMode && (t.currentSelectTime = void 0), t.$emit("monthChange", {
              date: r
            }), t.render(r));
          },
          subMonth: function subMonth() {
            var t = this,
                e = t.month,
                a = t.year;
            1 == t.month ? (e = 12, a -= 1) : e -= 1;
            var r = a + "/" + e + "/01",
                n = t.getTotalDay(r);
            t.checkOutOfDate(a + "/" + e + "/" + n) ? t.lastDisabled = !0 : (t.month = e, t.year = a, t.nextDisabled = !1, t.checkDateRange(t.year, t.month) && (t.lastDisabled = !0), t.rangeMode && (t.currentSelectTime = void 0), t.$emit("monthChange", {
              date: r
            }), t.render(r));
          },
          backToToday: function backToToday() {
            var t = new Date(),
                e = t.getFullYear(),
                a = t.getMonth() + 1;

            if (e != this.year || a != this.month) {
              var r = e + "/" + a + "/" + t.getDate();
              this.$emit("monthChange", {
                date: r
              }), this.render(r);
            }
          },
          setRange: function setRange() {
            var t = this,
                e = t.toDateByStr1(t.rangeStart_),
                a = t.toDateByStr1(t.rangeEnd_);

            if (e && a) {
              if (e > a) {
                var r = a;
                a = e, e = r;
              }

              for (var n = 0; n < t.dateList.length; n++) {
                var o = t.year + "/" + t.month + "/" + t.dateList[n].dateIndex,
                    i = t.toDateByStr1(o);
                t.dateList[n].isRanges = !1, e <= i && i <= a && (t.dateList[n].isRanges = !0);
              }
            }
          },
          clearRange: function clearRange() {
            for (var t = this, e = 0; e < t.dateList.length; e++) {
              t.dateList[e].isRanges = !1;
            }
          },
          checkOutOfDate: function checkOutOfDate(t) {
            var e = this,
                a = e.toDateByStr1(e.dateStart),
                r = e.toDateByStr1(e.dateEnd),
                n = e.toDateByStr1(t);
            return a > n || n > r;
          },
          checkDateRange: function checkDateRange(t, e, a) {
            var r = this,
                n = r.getTotalDay(t + "/" + e + "/01"),
                o = r.toDateByStr1(t + "/" + e + "/01"),
                i = r.toDateByStr1(t + "/" + e + "/" + n);

            if (1 == a) {
              var u = r.toDateByStr1(r.dateEnd);
              return o <= u && u <= i;
            }

            var s = r.toDateByStr1(r.dateStart);
            return o <= s && s <= i;
          },
          calendarTransform: function calendarTransform(t, e) {
            this.transform_x = t, this.transform_time = e;
          },
          touchstart: function touchstart(t) {
            this.canDrag && (this.startPageX = t.touches[0].pageX, this.startPageY = t.touches[0].pageY);
          },
          touchmove: function touchmove(t) {
            if (this.canDrag) {
              var e = t.touches[0].pageX,
                  a = e - this.startPageX;
              this.calendarTransform(a, 0);
            }
          },
          touchend: function touchend(e) {
            if (this.canDrag) {
              var a = this,
                  n = e.changedTouches[0].pageX,
                  o = e.changedTouches[0].pageY,
                  i = Math.abs(a.startPageX - n),
                  u = Math.abs(a.startPageY - o),
                  s = 0;

              try {
                var l = t.getSystemInfoSync();
                s = l.windowWidth;
              } catch (g) {
                return void console.error(r(g, " at components\\Li-Calendar\\Li-Calendar.vue:606"));
              }

              if (a.startPageX > n) {
                var d = Math.atan(u / i),
                    c = i / s;
                d < Math.PI / 6 && c > .3 ? (s = -s, a.calendarTransform(s, 300), setTimeout(function () {
                  a.addMonth(), a.calendarTransform(0, 0);
                }, 300)) : a.calendarTransform(0, 300);
              } else {
                var f = Math.atan(u / i),
                    h = i / s;
                f < Math.PI / 6 && h > .3 ? (a.calendarTransform(s, 300), setTimeout(function () {
                  a.subMonth(), a.calendarTransform(0, 0);
                }, 300)) : a.calendarTransform(0, 300);
              }
            }
          }
        },
        watch: {
          currentTime: function currentTime(t, e) {
            var a = this.toDateByStr1(t);
            a.getFullYear() == this.year && a.getMonth() + 1 == this.month ? console.log(r("time is not change", " at components\\Li-Calendar\\Li-Calendar.vue:643")) : (this.currentSelectTime = a.getDate(), this.render());
          },
          range: function range(t, e) {
            t.rangeStart == e.rangeStart && t.rangeEnd == e.rangeEnd || (this.rangeStart_ = t.rangeStart, this.rangeEnd_ = t.rangeEnd, this.setRange());
          },
          mark: function mark(t, e) {
            this.render();
          },
          rangeMode: function rangeMode(t, e) {
            t || (this.rangeStart_ = void 0, this.rangeEnd_ = void 0, this.firstRangeSelected = !1, this.clearRange());
          }
        },
        computed: {
          transformObj: function transformObj() {
            return "translate3d(" + this.transform_x + "px, 0px, 0px) translateZ(0px)";
          },
          transformTimeObj: function transformTimeObj() {
            return this.transform_time + "ms";
          }
        }
      };
      e.default = i;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  },
  "88c6": function c6(t, e, a) {
    "use strict";

    var r = a("cd32"),
        n = a.n(r);
    n.a;
  },
  b472: function b472(t, e, a) {
    "use strict";

    a.r(e);
    var r = a("2c25"),
        n = a.n(r);

    for (var o in r) {
      "default" !== o && function (t) {
        a.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    e["default"] = n.a;
  },
  cd32: function cd32(t, e, a) {},
  eafb: function eafb(t, e, a) {
    "use strict";

    var r,
        n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    a.d(e, "b", function () {
      return n;
    }), a.d(e, "c", function () {
      return o;
    }), a.d(e, "a", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Li-Calendar/Li-Calendar-create-component', {
  'components/Li-Calendar/Li-Calendar-create-component': function componentsLiCalendarLiCalendarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1d0b"));
  }
}, [['components/Li-Calendar/Li-Calendar-create-component']]]);
});
require('components/Li-Calendar/Li-Calendar.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "0ba1": function ba1(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("107c"),
        u = i("0d48");

    for (var l in u) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    i("96f2");
    var n,
        c = i("f0c5"),
        r = Object(c["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], n);
    e["default"] = r.exports;
  },
  "0d48": function d48(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("a6c2"),
        u = i.n(a);

    for (var l in a) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(l);
    }

    e["default"] = u.a;
  },
  "107c": function c(t, e, i) {
    "use strict";

    var a,
        u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        l = [];

    i.d(e, "b", function () {
      return u;
    }), i.d(e, "c", function () {
      return l;
    }), i.d(e, "a", function () {
      return a;
    });
  },
  "96f2": function f2(t, e, i) {
    "use strict";

    var a = i("e3d7"),
        u = i.n(a);
    u.a;
  },
  a6c2: function a6c2(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = n(i("c681")),
        u = n(i("1a3d")),
        l = n(i("3d11"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: [],
          cityDataList: [],
          areaDataList: [],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault(), this.provinceDataList = a.default, this.cityDataList = u.default[this.pickerValueDefault[0]], this.areaDataList = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]], this.pickerValue = this.pickerValueDefault;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          this.pickerValueDefault !== [0, 0, 0] && (this.pickerValueDefault[0] > a.default.length - 1 && (this.pickerValueDefault[0] = a.default.length - 1), this.pickerValueDefault[1] > u.default[this.pickerValueDefault[0]].length - 1 && (this.pickerValueDefault[1] = u.default[this.pickerValueDefault[0]].length - 1), this.pickerValueDefault[2] > l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1 && (this.pickerValueDefault[2] = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = l.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = l.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = c;
  },
  e3d7: function e3d7(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0ba1"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/news/news-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/news-nav-bar.js';

define('components/news/news-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/news-nav-bar"], {
  2774: function _(n, t, a) {
    "use strict";

    var e,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    a.d(t, "b", function () {
      return u;
    }), a.d(t, "c", function () {
      return r;
    }), a.d(t, "a", function () {
      return e;
    });
  },
  "3c90": function c90(n, t, a) {
    "use strict";

    var e = a("d70e"),
        u = a.n(e);
    u.a;
  },
  "3e13": function e13(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("c5aa"),
        u = a.n(e);

    for (var r in e) {
      "default" !== r && function (n) {
        a.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  a97e: function a97e(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("2774"),
        u = a("3e13");

    for (var r in u) {
      "default" !== r && function (n) {
        a.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    a("3c90");
    var c,
        i = a("f0c5"),
        o = Object(i["a"])(u["default"], e["b"], e["c"], !1, null, "1b4b1a1a", null, !1, e["a"], c);
    t["default"] = o.exports;
  },
  c5aa: function c5aa(n, t, a) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;

      var e = function e() {
        return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null, "9232"));
      },
          u = {
        components: {
          uniNavBar: e
        },
        props: {
          tabBars: Array,
          tabIndex: Number
        },
        methods: {
          changeTab: function changeTab(n) {
            this.$emit("change-tab", n);
          },
          openAdd: function openAdd() {
            n.navigateTo({
              url: "../add-input/add-input"
            });
          }
        }
      };

      t.default = u;
    }).call(this, a("6e42")["default"]);
  },
  d70e: function d70e(n, t, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/news-nav-bar-create-component', {
  'components/news/news-nav-bar-create-component': function componentsNewsNewsNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a97e"));
  }
}, [['components/news/news-nav-bar-create-component']]]);
});
require('components/news/news-nav-bar.js');
__wxRoute = 'components/news/post-nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/post-nav.js';

define('components/news/post-nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/post-nav"], {
  "0702": function _(n, t, e) {
    "use strict";

    var a,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        o = [];

    e.d(t, "b", function () {
      return u;
    }), e.d(t, "c", function () {
      return o;
    }), e.d(t, "a", function () {
      return a;
    });
  },
  3727: function _(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        props: {
          postnav: Array
        },
        methods: {
          openPostNav: function openPostNav() {
            n.navigateTo({
              url: "../../pages/post-nav/post-nav"
            });
          }
        }
      };
      t.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "9a46": function a46(n, t, e) {
    "use strict";

    var a = e("9ff1"),
        u = e.n(a);
    u.a;
  },
  "9ff1": function ff1(n, t, e) {},
  b954: function b954(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("3727"),
        u = e.n(a);

    for (var o in a) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(o);
    }

    t["default"] = u.a;
  },
  d4bf: function d4bf(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("0702"),
        u = e("b954");

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    e("9a46");
    var r,
        f = e("f0c5"),
        c = Object(f["a"])(u["default"], a["b"], a["c"], !1, null, "78740f74", null, !1, a["a"], r);
    t["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/post-nav-create-component', {
  'components/news/post-nav-create-component': function componentsNewsPostNavCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d4bf"));
  }
}, [['components/news/post-nav-create-component']]]);
});
require('components/news/post-nav.js');
__wxRoute = 'components/news/topic-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/topic-list.js';

define('components/news/topic-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/topic-list"], {
  "39c7": function c7(t, e, n) {
    "use strict";

    var i = n("fbed"),
        a = n.n(i);
    a.a;
  },
  "86b4": function b4(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("9499"),
        a = n.n(i);

    for (var c in i) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(c);
    }

    e["default"] = a.a;
  },
  9499: function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        props: {
          ischange: {
            type: Boolean,
            default: !1
          },
          item: Object,
          index: Number
        },
        methods: {
          opendetail: function opendetail() {
            if (this.ischange) return t.$emit("changeTopic", {
              id: this.item.id,
              title: this.item.title
            }), void t.navigateBack({
              delta: 1
            });
            t.navigateTo({
              url: "../../pages/topic-detail/topic-detail?detail=" + JSON.stringify(this.item)
            });
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  d8bd: function d8bd(t, e, n) {
    "use strict";

    var i,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        c = [];

    n.d(e, "b", function () {
      return a;
    }), n.d(e, "c", function () {
      return c;
    }), n.d(e, "a", function () {
      return i;
    });
  },
  ee8d: function ee8d(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("d8bd"),
        a = n("86b4");

    for (var c in a) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(c);
    }

    n("39c7");
    var u,
        o = n("f0c5"),
        r = Object(o["a"])(a["default"], i["b"], i["c"], !1, null, "82c03d6e", null, !1, i["a"], u);
    e["default"] = r.exports;
  },
  fbed: function fbed(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/topic-list-create-component', {
  'components/news/topic-list-create-component': function componentsNewsTopicListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ee8d"));
  }
}, [['components/news/topic-list-create-component']]]);
});
require('components/news/topic-list.js');
__wxRoute = 'components/news/topic-nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/news/topic-nav.js';

define('components/news/topic-nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/news/topic-nav"], {
  6465: function _(n, t, a) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        props: {
          nav: Array
        },
        methods: {
          openTopicNav: function openTopicNav() {
            n.navigateTo({
              url: "../../pages/topic-nav/topic-nav"
            });
          }
        }
      };
      t.default = a;
    }).call(this, a("6e42")["default"]);
  },
  a22e: function a22e(n, t, a) {},
  b564: function b564(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("6465"),
        u = a.n(e);

    for (var c in e) {
      "default" !== c && function (n) {
        a.d(t, n, function () {
          return e[n];
        });
      }(c);
    }

    t["default"] = u.a;
  },
  cf66: function cf66(n, t, a) {
    "use strict";

    var e = a("a22e"),
        u = a.n(e);
    u.a;
  },
  daa6: function daa6(n, t, a) {
    "use strict";

    var e,
        u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    a.d(t, "b", function () {
      return u;
    }), a.d(t, "c", function () {
      return c;
    }), a.d(t, "a", function () {
      return e;
    });
  },
  ff1e: function ff1e(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("daa6"),
        u = a("b564");

    for (var c in u) {
      "default" !== c && function (n) {
        a.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    a("cf66");
    var o,
        r = a("f0c5"),
        f = Object(r["a"])(u["default"], e["b"], e["c"], !1, null, "7d8d6bf8", null, !1, e["a"], o);
    t["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/news/topic-nav-create-component', {
  'components/news/topic-nav-create-component': function componentsNewsTopicNavCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ff1e"));
  }
}, [['components/news/topic-nav-create-component']]]);
});
require('components/news/topic-nav.js');
__wxRoute = 'components/paper/paper-left-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/paper/paper-left-popup.js';

define('components/paper/paper-left-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/paper/paper-left-popup"], {
  "4fa8": function fa8(n, t, e) {
    "use strict";

    var u,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        f = [];

    e.d(t, "b", function () {
      return r;
    }), e.d(t, "c", function () {
      return f;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  "56e7": function e7(n, t, e) {},
  "6e27": function e27(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("4fa8"),
        r = e("b47f");

    for (var f in r) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(f);
    }

    e("bd8d");
    var i,
        a = e("f0c5"),
        o = Object(a["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], i);
    t["default"] = o.exports;
  },
  b47f: function b47f(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("ef29"),
        r = e.n(u);

    for (var f in u) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(f);
    }

    t["default"] = r.a;
  },
  bd8d: function bd8d(n, t, e) {
    "use strict";

    var u = e("56e7"),
        r = e.n(u);
    r.a;
  },
  ef29: function ef29(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: {
        show: Boolean
      },
      methods: {
        hidepopup: function hidepopup() {
          this.$emit("hide");
        },
        addfriend: function addfriend() {
          this.$emit("addfriend");
        },
        clear: function clear() {
          this.$emit("clear");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/paper/paper-left-popup-create-component', {
  'components/paper/paper-left-popup-create-component': function componentsPaperPaperLeftPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6e27"));
  }
}, [['components/paper/paper-left-popup-create-component']]]);
});
require('components/paper/paper-left-popup.js');
__wxRoute = 'components/paper/paper-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/paper/paper-list.js';

define('components/paper/paper-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/paper/paper-list"], {
  "8e80": function e80(e, t, n) {
    "use strict";

    var u = n("9b43"),
        i = n.n(u);
    i.a;
  },
  "9b43": function b43(e, t, n) {},
  "9fa1": function fa1(e, t, n) {
    "use strict";

    var u,
        i = function i() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    n.d(t, "b", function () {
      return i;
    }), n.d(t, "c", function () {
      return r;
    }), n.d(t, "a", function () {
      return u;
    });
  },
  b240: function b240(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("9fa1"),
        i = n("c6e1");

    for (var r in i) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    n("8e80");
    var a,
        c = n("f0c5"),
        s = Object(c["a"])(i["default"], u["b"], u["c"], !1, null, "ad8306ac", null, !1, u["a"], a);
    t["default"] = s.exports;
  },
  c6e1: function c6e1(e, t, n) {
    "use strict";

    n.r(t);
    var u = n("d20d"),
        i = n.n(u);

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  d20d: function d20d(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var u = function u() {
      return n.e("components/uni-badge/uni-badge").then(n.bind(null, "2cea"));
    },
        i = {
      components: {
        uniBadge: u
      },
      props: {
        item: Object,
        index: Number
      },
      computed: {
        getItemNoreadnum: function getItemNoreadnum() {
          return this.item.noreadnum;
        }
      },
      methods: {
        opendetail: function opendetail() {
          var e = {
            userid: this.item.userid,
            username: this.item.username,
            userpic: this.item.userpic
          };
          this.User.navigate({
            url: "../../pages/user-chat/user-chat?userinfo=" + JSON.stringify(e)
          }), this.$chat.Read(this.item);
        }
      }
    };

    t.default = i;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/paper/paper-list-create-component', {
  'components/paper/paper-list-create-component': function componentsPaperPaperListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b240"));
  }
}, [['components/paper/paper-list-create-component']]]);
});
require('components/paper/paper-list.js');
__wxRoute = 'components/remind/remind-data';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/remind/remind-data.js';

define('components/remind/remind-data.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/remind/remind-data"], {
  "21f4": function f4(n, t, a) {
    "use strict";

    var e,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    a.d(t, "b", function () {
      return r;
    }), a.d(t, "c", function () {
      return c;
    }), a.d(t, "a", function () {
      return e;
    });
  },
  "6d15": function d15(n, t, a) {},
  ac51: function ac51(n, t, a) {
    "use strict";

    var e = a("6d15"),
        r = a.n(e);
    r.a;
  },
  acdf: function acdf(n, t, a) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      props: {
        homedata: Array
      }
    };
    t.default = e;
  },
  ca9c: function ca9c(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("21f4"),
        r = a("fb7a");

    for (var c in r) {
      "default" !== c && function (n) {
        a.d(t, n, function () {
          return r[n];
        });
      }(c);
    }

    a("ac51");
    var u,
        f = a("f0c5"),
        o = Object(f["a"])(r["default"], e["b"], e["c"], !1, null, "f1172c7a", null, !1, e["a"], u);
    t["default"] = o.exports;
  },
  fb7a: function fb7a(n, t, a) {
    "use strict";

    a.r(t);
    var e = a("acdf"),
        r = a.n(e);

    for (var c in e) {
      "default" !== c && function (n) {
        a.d(t, n, function () {
          return e[n];
        });
      }(c);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/remind/remind-data-create-component', {
  'components/remind/remind-data-create-component': function componentsRemindRemindDataCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ca9c"));
  }
}, [['components/remind/remind-data-create-component']]]);
});
require('components/remind/remind-data.js');
__wxRoute = 'components/remind/remind-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/remind/remind-list-item.js';

define('components/remind/remind-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/remind/remind-list-item"], {
  "2d8d": function d8d(t, n, e) {
    "use strict";

    var i,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return i;
    });
  },
  "6c80": function c80(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("c56e"),
        u = e.n(i);

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "7d8b": function d8b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("2d8d"),
        u = e("6c80");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("98c3");
    var c,
        a = e("f0c5"),
        d = Object(a["a"])(u["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], c);
    n["default"] = d.exports;
  },
  8855: function _(t, n, e) {},
  "98c3": function c3(t, n, e) {
    "use strict";

    var i = e("8855"),
        u = e.n(i);
    u.a;
  },
  c56e: function c56e(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          item: Object,
          index: Number
        },
        methods: {
          reminddetail: function reminddetail() {
            t.navigateTo({
              url: "../../pages/remind/reminddetail?detail=" + JSON.stringify(this.item)
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/remind/remind-list-item-create-component', {
  'components/remind/remind-list-item-create-component': function componentsRemindRemindListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7d8b"));
  }
}, [['components/remind/remind-list-item-create-component']]]);
});
require('components/remind/remind-list-item.js');
__wxRoute = 'components/stan-ucharts/LineChart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/stan-ucharts/LineChart.js';

define('components/stan-ucharts/LineChart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/stan-ucharts/LineChart"], {
  "0445": function _(t, e, a) {
    "use strict";

    var n,
        c = function c() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    a.d(e, "b", function () {
      return c;
    }), a.d(e, "c", function () {
      return i;
    }), a.d(e, "a", function () {
      return n;
    });
  },
  "2d22": function d22(t, e, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = c(a("5438"));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var i = {},
          o = {},
          r = {
        name: "LineChart",
        props: {
          dataAs: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          basicAs: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          xAxisAs: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          yAxisAs: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          legendAs: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          extraAs: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          width: {
            type: Number,
            default: 750
          },
          height: {
            type: Number,
            default: 500
          },
          labelKey: {
            type: String,
            default: "categories"
          },
          valueKey: {
            type: String,
            default: "series"
          },
          canvasId: {
            type: String,
            default: "line_canvas_".concat(Math.ceil(1e4 * Math.random(5)))
          }
        },
        data: function data() {
          return {};
        },
        computed: {
          cWidth: function cWidth() {
            return t.upx2px(this.width);
          },
          cHeight: function cHeight() {
            return t.upx2px(this.height);
          }
        },
        mounted: function mounted() {
          var t = this,
              e = {
            $this: this,
            canvasId: this.canvasId,
            type: "line",
            padding: [15, 15, 0, 15],
            colors: ["#1890ff", "#2fc25b", "#facc14", "#f04864", "#8543e0", "#90ed7d"],
            rotate: !1,
            rotateLock: !0,
            enableScroll: !0,
            enableMarkLine: !1,
            animation: !0,
            dataLabel: !0,
            dataPointShape: !0,
            duration: 1e3,
            fontSize: 12,
            background: "#ffffff",
            pixelRatio: 1,
            width: this.cWidth,
            height: this.cHeight,
            categories: this.dataAs[this.labelKey],
            series: this.dataAs[this.valueKey],
            xAxis: {
              type: "grid",
              rotateLabel: !0,
              itemCount: 7,
              scrollShow: !0,
              scrollAlign: "left",
              scrollBackgroundColor: "#EFEBEF",
              scrollColor: "#A6A6A6",
              disabled: !1,
              disableGrid: !0,
              calibration: !0,
              gridColor: "#cccccc",
              gridType: "dash",
              gridEval: 1,
              dashLength: 4,
              fontColor: "#666666",
              boundaryGap: "center",
              axisLine: !1,
              axisLineColor: "#cccccc"
            },
            yAxis: {
              disabled: !1,
              position: "left",
              format: function format(e) {
                var a = {
                  type: "number",
                  fixed: 0,
                  name: ""
                },
                    n = t.yAxisAs && t.yAxisAs.formatter ? Object.assign(a, t.yAxisAs.formatter) : a,
                    c = n.type,
                    i = n.fixed,
                    o = n.name;
                if ("number" == c) return e.toFixed(i) + o;

                if ("percent" == c) {
                  var r = o || "%";
                  return (100 * e).toFixed(i) + r;
                }

                return e.toFixed(0);
              }
            },
            legend: {
              show: !0,
              position: "top",
              float: "left",
              padding: 10,
              margin: 0
            },
            extra: {
              line: {
                type: "straight"
              }
            }
          };
          o[this.canvasId] = Object.assign(e, this.basicAs, this.xAxisAs, this.yAxisAs, this.legendAs, this.extraAs), i[this.canvasId] = new n.default(o[this.canvasId]);
        },
        methods: {
          touchstart: function touchstart(t) {
            var e = this;
            i[this.canvasId].touchLegend(t, {
              animation: !1
            }), i[this.canvasId].scrollStart(t), i[this.canvasId].showToolTip(t, {
              format: function format(t, a) {
                var n,
                    c = {
                  type: "number",
                  fixed: 0,
                  name: ""
                },
                    i = e.yAxisAs && e.yAxisAs.formatter ? Object.assign(c, e.yAxisAs.formatter) : c,
                    o = i.type,
                    r = i.fixed,
                    s = i.name;
                return "object" === typeof t.data ? "number" == o ? "".concat(a, " ").concat(t.name, ":").concat(t.data.value.toFixed(r)).concat(s) : "percent" == o ? (n = s || "%", "".concat(a, " ").concat(t.name, ":").concat((100 * t.data.value).toFixed(r)).concat(n)) : "".concat(a, " ").concat(t.name, ":").concat(t.data.value) : "number" == o ? "".concat(a, " ").concat(t.name, ":").concat(t.data.toFixed(r)).concat(s) : "percent" == o ? (n = s || "%", "".concat(a, " ").concat(t.name, ":").concat((100 * t.data).toFixed(r)).concat(n)) : "".concat(a, " ").concat(t.name, ":").concat(t.data);
              }
            });
          },
          touchmove: function touchmove(t) {
            i[this.canvasId].scroll(t);
          },
          touchend: function touchend(t) {
            i[this.canvasId].scrollEnd(t);
          }
        }
      };
      e.default = r;
    }).call(this, a("6e42")["default"]);
  },
  4318: function _(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("0445"),
        c = a("dc9a");

    for (var i in c) {
      "default" !== i && function (t) {
        a.d(e, t, function () {
          return c[t];
        });
      }(i);
    }

    var o,
        r = a("f0c5"),
        s = Object(r["a"])(c["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], o);
    e["default"] = s.exports;
  },
  dc9a: function dc9a(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("2d22"),
        c = a.n(n);

    for (var i in n) {
      "default" !== i && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(i);
    }

    e["default"] = c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/stan-ucharts/LineChart-create-component', {
  'components/stan-ucharts/LineChart-create-component': function componentsStanUchartsLineChartCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4318"));
  }
}, [['components/stan-ucharts/LineChart-create-component']]]);
});
require('components/stan-ucharts/LineChart.js');
__wxRoute = 'components/topic/topic-info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/topic/topic-info.js';

define('components/topic/topic-info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/topic/topic-info"], {
  "063e": function e(t, n, _e) {
    "use strict";

    _e.r(n);

    var u = _e("6205"),
        r = _e("0e7b");

    for (var c in r) {
      "default" !== c && function (t) {
        _e.d(n, t, function () {
          return r[t];
        });
      }(c);
    }

    _e("5fe5");

    var f,
        o = _e("f0c5"),
        a = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, "3a6127fe", null, !1, u["a"], f);

    n["default"] = a.exports;
  },
  "0e7b": function e7b(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("b150"),
        r = e.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = r.a;
  },
  "1b27": function b27(t, n, e) {},
  "5fe5": function fe5(t, n, e) {
    "use strict";

    var u = e("1b27"),
        r = e.n(u);
    r.a;
  },
  6205: function _(t, n, e) {
    "use strict";

    var u,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return r;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  b150: function b150(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        item: Object
      }
    };
    n.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/topic/topic-info-create-component', {
  'components/topic/topic-info-create-component': function componentsTopicTopicInfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("063e"));
  }
}, [['components/topic/topic-info-create-component']]]);
});
require('components/topic/topic-info.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "2cea": function cea(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("5d4d"),
        a = e("afd2");

    for (var c in a) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(c);
    }

    e("c526");
    var f,
        r = e("f0c5"),
        i = Object(r["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], f);
    n["default"] = i.exports;
  },
  "5d4d": function d4d(t, n, e) {
    "use strict";

    var u,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return a;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  "94fc": function fc(t, n, e) {},
  "98f2": function f2(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "uni-badge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  afd2: function afd2(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("98f2"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = a.a;
  },
  c526: function c526(t, n, e) {
    "use strict";

    var u = e("94fc"),
        a = e.n(u);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2cea"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-collapse-item/uni-collapse-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse-item/uni-collapse-item.js';

define('components/uni-collapse-item/uni-collapse-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse-item/uni-collapse-item"], {
  "33ef": function ef(t, n, e) {
    "use strict";

    var i = e("f65d"),
        c = e.n(i);
    c.a;
  },
  5439: function _(t, n, e) {
    "use strict";

    var i,
        c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "b", function () {
      return c;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "a", function () {
      return i;
    });
  },
  9388: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("5439"),
        c = e("f53b");

    for (var o in c) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(o);
    }

    e("33ef");
    var s,
        a = e("f0c5"),
        l = Object(a["a"])(c["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
    n["default"] = l.exports;
  },
  c70f: function c70f(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return e.e("components/uni-icon/uni-icon").then(e.bind(null, "7413"));
      },
          c = {
        name: "uni-collapse-item",
        components: {
          uniIcon: i
        },
        props: {
          contentdata: String,
          title: {
            type: String,
            default: ""
          },
          name: {
            type: [Number, String],
            default: 0
          },
          disabled: {
            type: [Boolean, String],
            default: !1
          },
          showAnimation: {
            type: Boolean,
            default: !1
          },
          open: {
            type: [Boolean, String],
            default: !1
          },
          thumb: {
            type: String,
            default: ""
          }
        },
        data: function data() {
          var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            isOpen: !1,
            height: "auto",
            elId: t
          };
        },
        watch: {
          open: function open(t) {
            this.isOpen = t;
          }
        },
        inject: ["collapse"],
        created: function created() {
          if (this.isOpen = this.open, this.nameSync = this.name ? this.name : this.collapse.childrens.length, this.collapse.childrens.push(this), "true" === String(this.collapse.accordion) && this.isOpen) {
            var t = this.collapse.childrens[this.collapse.childrens.length - 2];
            t && (this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = !1);
          }
        },
        onReady: function onReady() {
          this.getSize();
        },
        methods: {
          getSize: function getSize() {
            var n = this;
            this.showAnimation && t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (t) {
              n.height = t[0].height + "px";
            });
          },
          onClick: function onClick() {
            var t = this;
            this.disabled || ("true" === String(this.collapse.accordion) && this.collapse.childrens.forEach(function (n) {
              n !== t && (n.isOpen = !1);
            }), this.isOpen = !this.isOpen, this.collapse.onChange && this.collapse.onChange());
          }
        }
      };

      n.default = c;
    }).call(this, e("6e42")["default"]);
  },
  f53b: function f53b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("c70f"),
        c = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = c.a;
  },
  f65d: function f65d(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse-item/uni-collapse-item-create-component', {
  'components/uni-collapse-item/uni-collapse-item-create-component': function componentsUniCollapseItemUniCollapseItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9388"));
  }
}, [['components/uni-collapse-item/uni-collapse-item-create-component']]]);
});
require('components/uni-collapse-item/uni-collapse-item.js');
__wxRoute = 'components/uni-collapse/uni-collapse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-collapse/uni-collapse.js';

define('components/uni-collapse/uni-collapse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-collapse/uni-collapse"], {
  "2fbf": function fbf(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("d71d"),
        c = e("49f2");

    for (var a in c) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(a);
    }

    e("6538");
    var r,
        o = e("f0c5"),
        i = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
    t["default"] = i.exports;
  },
  "49f2": function f2(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("c3d6"),
        c = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = c.a;
  },
  6538: function _(n, t, e) {
    "use strict";

    var u = e("7a65"),
        c = e.n(u);
    c.a;
  },
  "7a65": function a65(n, t, e) {},
  c3d6: function c3d6(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-collapse",
      props: {
        accordion: {
          type: [Boolean, String],
          default: !1
        }
      },
      data: function data() {
        return {};
      },
      provide: function provide() {
        return {
          collapse: this
        };
      },
      created: function created() {
        this.childrens = [];
      },
      methods: {
        onChange: function onChange() {
          var n = [];
          this.childrens.forEach(function (t, e) {
            t.isOpen && n.push(t.nameSync);
          }), this.$emit("change", n);
        }
      }
    };
    t.default = u;
  },
  d71d: function d71d(n, t, e) {
    "use strict";

    var u,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "b", function () {
      return c;
    }), e.d(t, "c", function () {
      return a;
    }), e.d(t, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-collapse/uni-collapse-create-component', {
  'components/uni-collapse/uni-collapse-create-component': function componentsUniCollapseUniCollapseCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2fbf"));
  }
}, [['components/uni-collapse/uni-collapse-create-component']]]);
});
require('components/uni-collapse/uni-collapse.js');
__wxRoute = 'components/uni-grid-item/uni-grid-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-grid-item/uni-grid-item.js';

define('components/uni-grid-item/uni-grid-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-grid-item/uni-grid-item"], {
  5291: function _(t, i, r) {},
  "5bed": function bed(t, i, r) {
    "use strict";

    r.r(i);
    var e = r("cb6b"),
        n = r("65a8");

    for (var o in n) {
      "default" !== o && function (t) {
        r.d(i, t, function () {
          return n[t];
        });
      }(o);
    }

    r("985e");
    var s,
        d = r("f0c5"),
        u = Object(d["a"])(n["default"], e["b"], e["c"], !1, null, "a9d88d14", null, !1, e["a"], s);
    i["default"] = u.exports;
  },
  6423: function _(t, i, r) {
    "use strict";

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var e = {
      name: "UniGridItem",
      inject: ["grid"],
      props: {
        index: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          column: 0,
          showBorder: !0,
          square: !0,
          highlight: !0,
          left: 0,
          top: 0,
          openNum: 2,
          width: 0,
          borderColor: "#e5e5e5"
        };
      },
      created: function created() {
        this.column = this.grid.column, this.showBorder = this.grid.showBorder, this.square = this.grid.square, this.highlight = this.grid.highlight, this.top = 0 === this.hor ? this.grid.hor : this.hor, this.left = 0 === this.ver ? this.grid.ver : this.ver, this.borderColor = this.grid.borderColor, this.grid.children.push(this), this.width = this.grid.width;
      },
      beforeDestroy: function beforeDestroy() {
        var t = this;
        this.grid.children.forEach(function (i, r) {
          i === t && t.grid.children.splice(r, 1);
        });
      },
      methods: {
        _onClick: function _onClick() {
          this.grid.change({
            detail: {
              index: this.index
            }
          });
        }
      }
    };
    i.default = e;
  },
  "65a8": function a8(t, i, r) {
    "use strict";

    r.r(i);
    var e = r("6423"),
        n = r.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        r.d(i, t, function () {
          return e[t];
        });
      }(o);
    }

    i["default"] = n.a;
  },
  "985e": function e(t, i, r) {
    "use strict";

    var e = r("5291"),
        n = r.n(e);
    n.a;
  },
  cb6b: function cb6b(t, i, r) {
    "use strict";

    var e,
        n = function n() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        o = [];

    r.d(i, "b", function () {
      return n;
    }), r.d(i, "c", function () {
      return o;
    }), r.d(i, "a", function () {
      return e;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-grid-item/uni-grid-item-create-component', {
  'components/uni-grid-item/uni-grid-item-create-component': function componentsUniGridItemUniGridItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5bed"));
  }
}, [['components/uni-grid-item/uni-grid-item-create-component']]]);
});
require('components/uni-grid-item/uni-grid-item.js');
__wxRoute = 'components/uni-grid/uni-grid';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-grid/uni-grid.js';

define('components/uni-grid/uni-grid.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-grid/uni-grid"], {
  "0d4c": function d4c(t, n, e) {
    "use strict";

    var i,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return i;
    });
  },
  "673b": function b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("af4d"),
        u = e.n(i);

    for (var c in i) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(c);
    }

    n["default"] = u.a;
  },
  af4d: function af4d(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "UniGrid",
        props: {
          column: {
            type: Number,
            default: 3
          },
          showBorder: {
            type: Boolean,
            default: !0
          },
          borderColor: {
            type: String,
            default: "#e5e5e5"
          },
          square: {
            type: Boolean,
            default: !0
          },
          highlight: {
            type: Boolean,
            default: !0
          }
        },
        provide: function provide() {
          return {
            grid: this
          };
        },
        data: function data() {
          var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            elId: t,
            width: 0
          };
        },
        created: function created() {
          this.children = [];
        },
        mounted: function mounted() {
          this.init();
        },
        methods: {
          init: function init() {
            var t = this;
            setTimeout(function () {
              t._getSize(function (n) {
                t.children.forEach(function (t, e) {
                  t.width = n;
                });
              });
            }, 50);
          },
          change: function change(t) {
            this.$emit("change", t);
          },
          _getSize: function _getSize(n) {
            var e = this;
            t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (t) {
              e.width = parseInt((t[0].width - 1) / e.column) + "px", n(e.width);
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  bb72: function bb72(t, n, e) {
    "use strict";

    var i = e("da7f"),
        u = e.n(i);
    u.a;
  },
  d546: function d546(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("0d4c"),
        u = e("673b");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("bb72");
    var o,
        r = e("f0c5"),
        a = Object(r["a"])(u["default"], i["b"], i["c"], !1, null, "36dbfac6", null, !1, i["a"], o);
    n["default"] = a.exports;
  },
  da7f: function da7f(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-grid/uni-grid-create-component', {
  'components/uni-grid/uni-grid-create-component': function componentsUniGridUniGridCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d546"));
  }
}, [['components/uni-grid/uni-grid-create-component']]]);
});
require('components/uni-grid/uni-grid.js');
__wxRoute = 'components/uni-icon/uni-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icon/uni-icon.js';

define('components/uni-icon/uni-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icon/uni-icon"], {
  7287: function _(n, t, e) {},
  7413: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("bbe2"),
        i = e("a25b");

    for (var r in i) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return i[n];
        });
      }(r);
    }

    e("edd5");
    var c,
        o = e("f0c5"),
        a = Object(o["a"])(i["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], c);
    t["default"] = a.exports;
  },
  a25b: function a25b(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("f674"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  bbe2: function bbe2(n, t, e) {
    "use strict";

    var u,
        i = function i() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "b", function () {
      return i;
    }), e.d(t, "c", function () {
      return r;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  edd5: function edd5(n, t, e) {
    "use strict";

    var u = e("7287"),
        i = e.n(u);
    i.a;
  },
  f674: function f674(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "uni-icon",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icon/uni-icon-create-component', {
  'components/uni-icon/uni-icon-create-component': function componentsUniIconUniIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7413"));
  }
}, [['components/uni-icon/uni-icon-create-component']]]);
});
require('components/uni-icon/uni-icon.js');
__wxRoute = 'components/uni-list-item/uni-list-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list-item/uni-list-item.js';

define('components/uni-list-item/uni-list-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list-item/uni-list-item"], {
  3783: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("d8d7"),
        o = n("5c67");

    for (var i in o) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(i);
    }

    n("8f20");
    var a,
        c = n("f0c5"),
        r = Object(c["a"])(o["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
    e["default"] = r.exports;
  },
  "5c67": function c67(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("e3c3"),
        o = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = o.a;
  },
  "5f73": function f73(t, e, n) {},
  "8f20": function f20(t, e, n) {
    "use strict";

    var u = n("5f73"),
        o = n.n(u);
    o.a;
  },
  d8d7: function d8d7(t, e, n) {
    "use strict";

    var u,
        o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return o;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return u;
    });
  },
  e3c3: function e3c3(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var u = function u() {
      return n.e("components/uni-icon/uni-icon").then(n.bind(null, "7413"));
    },
        o = function o() {
      return n.e("components/uni-badge/uni-badge").then(n.bind(null, "2cea"));
    },
        i = {
      name: "UniListItem",
      components: {
        uniIcon: u,
        uniBadge: o
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        note: {
          type: String,
          default: ""
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        showArrow: {
          type: Boolean,
          default: !0
        },
        showBadge: {
          type: Boolean,
          default: !1
        },
        showSwitch: {
          type: Boolean,
          default: !1
        },
        switchChecked: {
          type: Boolean,
          default: !1
        },
        badgeText: {
          type: [String, Number],
          default: ""
        },
        badgeType: {
          type: String,
          default: "success"
        },
        thumb: {
          type: String,
          default: ""
        },
        showExtraIcon: {
          type: Boolean,
          default: !1
        },
        extraIcon: {
          type: Object,
          default: function _default() {
            return {
              type: "contact",
              color: "#000000",
              size: 20
            };
          }
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        },
        onSwitchChange: function onSwitchChange(t) {
          this.$emit("switchChange", t.detail);
        }
      }
    };

    e.default = i;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list-item/uni-list-item-create-component', {
  'components/uni-list-item/uni-list-item-create-component': function componentsUniListItemUniListItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3783"));
  }
}, [['components/uni-list-item/uni-list-item-create-component']]]);
});
require('components/uni-list-item/uni-list-item.js');
__wxRoute = 'components/uni-list/uni-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-list/uni-list.js';

define('components/uni-list/uni-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-list/uni-list"], {
  "17e9": function e9(n, t, u) {
    "use strict";

    var e,
        a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    u.d(t, "b", function () {
      return a;
    }), u.d(t, "c", function () {
      return r;
    }), u.d(t, "a", function () {
      return e;
    });
  },
  "24c2": function c2(n, t, u) {},
  "351a": function a(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("450d"),
        a = u.n(e);

    for (var r in e) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  "450d": function d(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      name: "uni-list"
    };
    t.default = e;
  },
  "9d2a": function d2a(n, t, u) {
    "use strict";

    var e = u("24c2"),
        a = u.n(e);
    a.a;
  },
  abdd: function abdd(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("17e9"),
        a = u("351a");

    for (var r in a) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    u("9d2a");
    var c,
        i = u("f0c5"),
        f = Object(i["a"])(a["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], c);
    t["default"] = f.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-list/uni-list-create-component', {
  'components/uni-list/uni-list-create-component': function componentsUniListUniListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("abdd"));
  }
}, [['components/uni-list/uni-list-create-component']]]);
});
require('components/uni-list/uni-list.js');
__wxRoute = 'components/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-nav-bar/uni-nav-bar.js';

define('components/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-nav-bar/uni-nav-bar"], {
  3510: function _(t, n, e) {},
  6906: function _(t, n, e) {
    "use strict";

    var u,
        i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "b", function () {
      return i;
    }), e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  "86f7": function f7(t, n, e) {
    "use strict";

    var u = e("3510"),
        i = e.n(u);
    i.a;
  },
  "8e9e": function e9e(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("f6dc"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = i.a;
  },
  9232: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6906"),
        i = e("8e9e");

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    e("86f7");
    var o,
        a = e("f0c5"),
        c = Object(a["a"])(i["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], o);
    n["default"] = c.exports;
  },
  f6dc: function f6dc(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null, "0772"));
    },
        i = function i() {
      return e.e("components/uni-icon/uni-icon").then(e.bind(null, "7413"));
    },
        r = {
      name: "uni-nav-bar",
      components: {
        uniStatusBar: u,
        uniIcon: i
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        leftText: {
          type: String,
          default: ""
        },
        rightText: {
          type: String,
          default: ""
        },
        leftIcon: {
          type: String,
          default: ""
        },
        rightIcon: {
          type: String,
          default: ""
        },
        fixed: {
          type: [Boolean, String],
          default: !1
        },
        color: {
          type: String,
          default: "#000000"
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        statusBar: {
          type: [Boolean, String],
          default: !1
        },
        shadow: {
          type: [String, Boolean],
          default: !0
        },
        border: {
          type: [String, Boolean],
          default: !0
        }
      },
      methods: {
        onClickLeft: function onClickLeft() {
          this.$emit("click-left");
        },
        onClickRight: function onClickRight() {
          this.$emit("click-right");
        }
      }
    };

    n.default = r;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-nav-bar/uni-nav-bar-create-component', {
  'components/uni-nav-bar/uni-nav-bar-create-component': function componentsUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9232"));
  }
}, [['components/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('components/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'components/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-status-bar/uni-status-bar.js';

define('components/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-status-bar/uni-status-bar"], {
  "0772": function _(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("2dcb"),
        a = u("7543");

    for (var r in a) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    u("7feb");
    var c,
        f = u("f0c5"),
        i = Object(f["a"])(a["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], c);
    n["default"] = i.exports;
  },
  "120f": function f(t, n, u) {},
  "2dcb": function dcb(t, n, u) {
    "use strict";

    var e,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    u.d(n, "b", function () {
      return a;
    }), u.d(n, "c", function () {
      return r;
    }), u.d(n, "a", function () {
      return e;
    });
  },
  7543: function _(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("7963"),
        a = u.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = a.a;
  },
  7963: function _(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = t.getSystemInfoSync().statusBarHeight + "px",
          e = {
        name: "uni-status-bar",
        props: {
          bgcolor: {
            type: String,
            default: ""
          }
        },
        data: function data() {
          return {
            statusBarHeight: u
          };
        }
      };
      n.default = e;
    }).call(this, u("6e42")["default"]);
  },
  "7feb": function feb(t, n, u) {
    "use strict";

    var e = u("120f"),
        a = u.n(e);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-status-bar/uni-status-bar-create-component', {
  'components/uni-status-bar/uni-status-bar-create-component': function componentsUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0772"));
  }
}, [['components/uni-status-bar/uni-status-bar-create-component']]]);
});
require('components/uni-status-bar/uni-status-bar.js');
__wxRoute = 'components/user-chat/user-chat-bottom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/user-chat/user-chat-bottom.js';

define('components/user-chat/user-chat-bottom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-chat/user-chat-bottom"], {
  1863: function _(t, n, u) {
    "use strict";

    var e,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    u.d(n, "b", function () {
      return r;
    }), u.d(n, "c", function () {
      return o;
    }), u.d(n, "a", function () {
      return e;
    });
  },
  "34d3": function d3(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("1863"),
        r = u("8ff4");

    for (var o in r) {
      "default" !== o && function (t) {
        u.d(n, t, function () {
          return r[t];
        });
      }(o);
    }

    u("6631");
    var a,
        c = u("f0c5"),
        f = Object(c["a"])(r["default"], e["b"], e["c"], !1, null, "14787242", null, !1, e["a"], a);
    n["default"] = f.exports;
  },
  5862: function _(t, n, u) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: {
        focus: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          text: ""
        };
      },
      methods: {
        submit: function submit() {
          this.$emit("submit", this.text), this.text = "";
        },
        blur: function blur() {
          this.$emit("blur");
        }
      }
    };
    n.default = e;
  },
  6631: function _(t, n, u) {
    "use strict";

    var e = u("6a41"),
        r = u.n(e);
    r.a;
  },
  "6a41": function a41(t, n, u) {},
  "8ff4": function ff4(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("5862"),
        r = u.n(e);

    for (var o in e) {
      "default" !== o && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(o);
    }

    n["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/user-chat/user-chat-bottom-create-component', {
  'components/user-chat/user-chat-bottom-create-component': function componentsUserChatUserChatBottomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("34d3"));
  }
}, [['components/user-chat/user-chat-bottom-create-component']]]);
});
require('components/user-chat/user-chat-bottom.js');
__wxRoute = 'components/user-chat/user-chat-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/user-chat/user-chat-list.js';

define('components/user-chat/user-chat-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-chat/user-chat-list"], {
  "1cf8": function cf8(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      props: {
        item: Object,
        index: Number
      }
    };
    e.default = u;
  },
  "944c": function c(t, e, n) {
    "use strict";

    var u,
        c = function c() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "b", function () {
      return c;
    }), n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return u;
    });
  },
  d6f9: function d6f9(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("944c"),
        c = n("ddcd");

    for (var r in c) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return c[t];
        });
      }(r);
    }

    n("ee1a");
    var a,
        d = n("f0c5"),
        f = Object(d["a"])(c["default"], u["b"], u["c"], !1, null, "4d3db92e", null, !1, u["a"], a);
    e["default"] = f.exports;
  },
  ddcd: function ddcd(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("1cf8"),
        c = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    e["default"] = c.a;
  },
  edd7: function edd7(t, e, n) {},
  ee1a: function ee1a(t, e, n) {
    "use strict";

    var u = n("edd7"),
        c = n.n(u);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/user-chat/user-chat-list-create-component', {
  'components/user-chat/user-chat-list-create-component': function componentsUserChatUserChatListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d6f9"));
  }
}, [['components/user-chat/user-chat-list-create-component']]]);
});
require('components/user-chat/user-chat-list.js');
__wxRoute = 'components/user-list/user-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/user-list/user-list.js';

define('components/user-list/user-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-list/user-list"], {
  3379: function _(e, n, t) {
    "use strict";

    var u = t("4f70"),
        c = t.n(u);
    c.a;
  },
  "3c02": function c02(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("e4dc"),
        c = t.n(u);

    for (var a in u) {
      "default" !== a && function (e) {
        t.d(n, e, function () {
          return u[e];
        });
      }(a);
    }

    n["default"] = c.a;
  },
  "4f70": function f70(e, n, t) {},
  a279: function a279(e, n, t) {
    "use strict";

    var u,
        c = function c() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        a = [];

    t.d(n, "b", function () {
      return c;
    }), t.d(n, "c", function () {
      return a;
    }), t.d(n, "a", function () {
      return u;
    });
  },
  dc0c: function dc0c(e, n, t) {
    "use strict";

    t.r(n);
    var u = t("a279"),
        c = t("3c02");

    for (var a in c) {
      "default" !== a && function (e) {
        t.d(n, e, function () {
          return c[e];
        });
      }(a);
    }

    t("3379");
    var r,
        o = t("f0c5"),
        i = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, "d22a884e", null, !1, u["a"], r);
    n["default"] = i.exports;
  },
  e4dc: function e4dc(e, n, t) {
    "use strict";

    (function (e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var u = function u() {
        return t.e("components/common/tag-sex-age").then(t.bind(null, "751a"));
      },
          c = {
        components: {
          tagSexAge: u
        },
        props: {
          hidden: {
            type: Boolean,
            default: !1
          },
          item: Object,
          index: Number
        },
        methods: {
          openSpace: function openSpace() {
            e.navigateTo({
              url: "../../pages/user-space/user-space?userid=" + this.item.id
            });
          }
        }
      };

      n.default = c;
    }).call(this, t("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/user-list/user-list-create-component', {
  'components/user-list/user-list-create-component': function componentsUserListUserListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("dc0c"));
  }
}, [['components/user-list/user-list-create-component']]]);
});
require('components/user-list/user-list.js');
__wxRoute = 'components/user-space/user-space-head';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/user-space/user-space-head.js';

define('components/user-space/user-space-head.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-space/user-space-head"], {
  "13d3": function d3(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("48a0"),
        u = e.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  3619: function _(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("59f5"),
        u = e("13d3");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("bc59");
    var a,
        o = e("f0c5"),
        s = Object(o["a"])(u["default"], r["b"], r["c"], !1, null, "2a810246", null, !1, r["a"], a);
    n["default"] = s.exports;
  },
  "48a0": function a0(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var r = u(e("a34a"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function i(t, n) {
        return s(t) || o(t, n) || a();
      }

      function a() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      function o(t, n) {
        var e = [],
            r = !0,
            u = !1,
            i = void 0;

        try {
          for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            if (e.push(a.value), n && e.length === n) break;
          }
        } catch (s) {
          u = !0, i = s;
        } finally {
          try {
            r || null == o["return"] || o["return"]();
          } finally {
            if (u) throw i;
          }
        }

        return e;
      }

      function s(t) {
        if (Array.isArray(t)) return t;
      }

      function c(t, n, e, r, u, i, a) {
        try {
          var o = t[i](a),
              s = o.value;
        } catch (c) {
          return void e(c);
        }

        o.done ? n(s) : Promise.resolve(s).then(r, u);
      }

      function f(t) {
        return function () {
          var n = this,
              e = arguments;
          return new Promise(function (r, u) {
            var i = t.apply(n, e);

            function a(t) {
              c(i, r, u, a, o, "next", t);
            }

            function o(t) {
              c(i, r, u, a, o, "throw", t);
            }

            a(void 0);
          });
        };
      }

      var l = function l() {
        return e.e("components/common/tag-sex-age").then(e.bind(null, "751a"));
      },
          h = {
        components: {
          tagSexAge: l
        },
        props: {
          userinfo: Object
        },
        computed: {
          getSex: function getSex() {
            return this.userinfo.sex;
          },
          getAge: function getAge() {
            return this.userinfo.age;
          },
          getBgImg: function getBgImg() {
            return "../../static/bgimg/" + this.userinfo.bgimg + ".jpg";
          },
          getGuanZhuClass: function getGuanZhuClass() {
            return this.userinfo.isguanzhu ? "active" : "icon-tianjia";
          }
        },
        methods: {
          changBgImg: function changBgImg() {
            var t = parseInt(this.userinfo.bgimg);
            this.userinfo.bgimg = t < 4 ? ++t : 1;
          },
          guanzhu: function () {
            var n = f(r.default.mark(function n() {
              var e, u, a, o, s;
              return r.default.wrap(function (n) {
                while (1) {
                  switch (n.prev = n.next) {
                    case 0:
                      return n.prev = 0, e = this.userinfo.isguanzhu ? "/unfollow" : "/follow", t.showLoading({
                        title: "loading...",
                        mask: !1
                      }), n.next = 5, this.$http.post(e, {
                        follow_id: this.userinfo.id
                      }, {
                        token: !0,
                        checkToken: !0,
                        checkAuth: !0
                      });

                    case 5:
                      if (u = n.sent, a = i(u, 2), o = a[0], s = a[1], this.$http.errorCheck(o, s)) {
                        n.next = 11;
                        break;
                      }

                      return n.abrupt("return", t.hideLoading());

                    case 11:
                      t.hideLoading(), t.showToast({
                        title: this.userinfo.isguanzhu ? "取消关注成功" : "关注成功"
                      }), this.$emit("update", !this.userinfo.isguanzhu), n.next = 19;
                      break;

                    case 16:
                      return n.prev = 16, n.t0 = n["catch"](0), n.abrupt("return");

                    case 19:
                    case "end":
                      return n.stop();
                  }
                }
              }, n, this, [[0, 16]]);
            }));

            function e() {
              return n.apply(this, arguments);
            }

            return e;
          }()
        }
      };

      n.default = h;
    }).call(this, e("6e42")["default"]);
  },
  "59f5": function f5(t, n, e) {
    "use strict";

    var r,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return r;
    });
  },
  "8a30": function a30(t, n, e) {},
  bc59: function bc59(t, n, e) {
    "use strict";

    var r = e("8a30"),
        u = e.n(r);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/user-space/user-space-head-create-component', {
  'components/user-space/user-space-head-create-component': function componentsUserSpaceUserSpaceHeadCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3619"));
  }
}, [['components/user-space/user-space-head-create-component']]]);
});
require('components/user-space/user-space-head.js');
__wxRoute = 'components/user-space/user-space-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/user-space/user-space-popup.js';

define('components/user-space/user-space-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-space/user-space-popup"], {
  "0754": function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        isblack: Boolean,
        show: Boolean
      },
      methods: {
        hidepopup: function hidepopup() {
          this.$emit("hide");
        },
        lahei: function lahei() {
          this.$emit("lahei");
        },
        chat: function chat() {
          this.$emit("chat");
        }
      }
    };
    n.default = u;
  },
  "17d7": function d7(t, n, e) {},
  "230c": function c(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("2741"),
        c = e("906e");

    for (var a in c) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(a);
    }

    e("afc8");
    var i,
        o = e("f0c5"),
        r = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], i);
    n["default"] = r.exports;
  },
  2741: function _(t, n, e) {
    "use strict";

    var u,
        c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return c;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  "906e": function e(t, n, _e) {
    "use strict";

    _e.r(n);

    var u = _e("0754"),
        c = _e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        _e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = c.a;
  },
  afc8: function afc8(t, n, e) {
    "use strict";

    var u = e("17d7"),
        c = e.n(u);
    c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/user-space/user-space-popup-create-component', {
  'components/user-space/user-space-popup-create-component': function componentsUserSpaceUserSpacePopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("230c"));
  }
}, [['components/user-space/user-space-popup-create-component']]]);
});
require('components/user-space/user-space-popup.js');
__wxRoute = 'components/user-space/user-space-userinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/user-space/user-space-userinfo.js';

define('components/user-space/user-space-userinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/user-space/user-space-userinfo"], {
  3257: function _(t, e, n) {
    "use strict";

    var u = n("d39a"),
        r = n.n(u);
    r.a;
  },
  "61a0": function a0(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = r(n("6c04"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      props: {
        userinfo: Object
      },
      computed: {
        getRegAge: function getRegAge() {
          return u.default.gettime.sumAge(this.userinfo.regtime);
        },
        getXingZuo: function getXingZuo() {
          return u.default.gettime.getHoroscope(this.userinfo.birthday);
        }
      }
    };
    e.default = c;
  },
  "656b": function b(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("dc63"),
        r = n("8618");

    for (var c in r) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(c);
    }

    n("3257");
    var o,
        a = n("f0c5"),
        i = Object(a["a"])(r["default"], u["b"], u["c"], !1, null, "75db6083", null, !1, u["a"], o);
    e["default"] = i.exports;
  },
  8618: function _(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("61a0"),
        r = n.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(c);
    }

    e["default"] = r.a;
  },
  d39a: function d39a(t, e, n) {},
  dc63: function dc63(t, e, n) {
    "use strict";

    var u,
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        c = [];

    n.d(e, "b", function () {
      return r;
    }), n.d(e, "c", function () {
      return c;
    }), n.d(e, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/user-space/user-space-userinfo-create-component', {
  'components/user-space/user-space-userinfo-create-component': function componentsUserSpaceUserSpaceUserinfoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("656b"));
  }
}, [['components/user-space/user-space-userinfo-create-component']]]);
});
require('components/user-space/user-space-userinfo.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"094c":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("1aa7"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"1aa7":function(t,n,e){"use strict";e.r(n);var i=e("47b3"),r=e("9e0c");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("a92c");var o,a=e("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=s.exports},"47b3":function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})},"9e0c":function(t,n,e){"use strict";e.r(n);var i=e("e8a8"),r=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=r.a},a92c:function(t,n,e){"use strict";var i=e("e65b"),r=e.n(i);r.a},e65b:function(t,n,e){},e8a8:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n){return s(t)||a(t,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,n){var e=[],i=!0,r=!1,u=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done);i=!0)if(e.push(o.value),n&&e.length===n)break}catch(s){r=!0,u=s}finally{try{i||null==a["return"]||a["return"]()}finally{if(r)throw u}}return e}function s(t){if(Array.isArray(t))return t}function c(t,n,e,i,r,u,o){try{var a=t[u](o),s=a.value}catch(c){return void e(c)}a.done?n(s):Promise.resolve(s).then(i,r)}function l(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var u=t.apply(n,e);function o(t){c(u,i,r,o,a,"next",t)}function a(t){c(u,i,r,o,a,"throw",t)}o(void 0)})}}var d=function(){return e.e("components/uni-grid/uni-grid").then(e.bind(null,"d546"))},f=function(){return e.e("components/uni-grid-item/uni-grid-item").then(e.bind(null,"5bed"))},g=function(){return e.e("components/news/topic-list").then(e.bind(null,"ee8d"))},h={components:{uniGrid:d,topicList:g,uniGridItem:f},data:function(){return{list:[],swiperImg:["../../static/index/swiper1.jpg","../../static/index/swiper2.jpg","../../static/index/swiper3.jpg","../../static/index/swiper4.jpg"],current:0,swiperCurrent:0,month:"2020年03月"}},onShow:function(){this.userid=this.User.userinfo.id},onLoad:function(){var n=this;t.getSystemInfo({success:function(e){var i=e.windowHeight-t.upx2px(100);n.swiperheight=i}}),this.__init()},methods:{__init:function(){this.getHot()},getHot:function(){var t=l(i.default.mark(function t(){var n,e,r,o,a,s,c;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/hottopic");case 2:if(n=t.sent,e=u(n,2),r=e[0],o=e[1],this.$http.errorCheck(r,o)){t.next=8;break}return t.abrupt("return");case 8:for(a=[],s=o.data.data.list,c=0;c<s.length;c++)a.push({id:s[c].id,titlepic:s[c].titlepic,title:s[c].title,desc:s[c].desc,totalnum:s[c].post_count,todaynum:s[c].todaypost_count});this.list=a;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),changeSwiper:function(t){this.swiperCurrent=t.detail.current},addCustomer:function(){t.navigateTo({url:"../bill/bill"})},goRecord:function(){this.User.navigate({url:"../../pages/bill/billgl?userid="+this.userid})},goremind:function(){this.User.navigate({url:"../../pages/remind/remindgl?userid="+this.userid})},gopost:function(){t.navigateTo({url:"../../pages/post-nav/post-nav"})},gotopic:function(){t.navigateTo({url:"../../pages/topic-nav/topic-nav"})},goRecordgorg:function(){this.User.navigate({url:"../../pages/bill/billgory?userid="+this.userid})},gotoday:function(){this.User.navigate({url:"../../pages/bill/todaybill?userid="+this.userid})},gomonth:function(){this.User.navigate({url:"../../pages/bill/monthbill?userid="+this.userid})},goyear:function(){this.User.navigate({url:"../../pages/bill/yearbill?userid="+this.userid})},goRemindgorg:function(){this.User.navigate({url:"../../pages/remind/remindgory?userid="+this.userid})},gocard:function(){this.User.navigate({url:"../../pages/creditcardgl/creditcardgl?userid="+this.userid})},gochart:function(){t.switchTab({url:"../chart/chart"})}}};n.default=h}).call(this,e("6e42")["default"])}},[["094c","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/news.js';

define('pages/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"0531":function(t,n,e){"use strict";e.r(n);var r=e("baba"),i=e("0e45");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("a096");var u,o=e("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=s.exports},"0e45":function(t,n,e){"use strict";e.r(n);var r=e("3207"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=i.a},3207:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,n){return s(t)||o(t,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,n){var e=[],r=!0,i=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(r=(u=o.next()).done);r=!0)if(e.push(u.value),n&&e.length===n)break}catch(s){i=!0,a=s}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw a}}return e}function s(t){if(Array.isArray(t))return t}function c(t,n,e,r,i,a,u){try{var o=t[a](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function h(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var a=t.apply(n,e);function u(t){c(a,r,i,u,o,"next",t)}function o(t){c(a,r,i,u,o,"throw",t)}u(void 0)})}}var l=function(){return e.e("components/news/news-nav-bar").then(e.bind(null,"a97e"))},p=function(){return e.e("components/common/common-list").then(e.bind(null,"0335"))},d=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},f=function(){return e.e("components/news/topic-nav").then(e.bind(null,"ff1e"))},m=function(){return e.e("components/news/post-nav").then(e.bind(null,"d4bf"))},g=function(){return e.e("components/news/topic-list").then(e.bind(null,"ee8d"))},v=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},b={components:{newsNavBar:l,commonList:p,loadMore:d,topicNav:f,postNav:m,topicList:g,noThing:v},data:function(){return{swiperheight:500,tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"话题",id:"topic"}],guanzhu:{firstload:!1,loadtext:"上拉加载更多",page:1,list:[]},topic:{swiper:[],postnav:[],topicnav:[],list:[]}}},onNavigationBarButtonTap:function(t){switch(t.index){case 1:this.User.navigate({url:"../add-input/add-input?postclass="+JSON.stringify(this.tabBars)});break}},onLoad:function(){var n=this;t.getSystemInfo({success:function(e){var r=e.windowHeight-t.upx2px(100);n.swiperheight=r}}),this.__init()},onShow:function(){this.getFollowPostList()},methods:{__init:function(){this.getSwiper(),this.getNav1(),this.getNav(),this.getHot(),t.$on("updateData",this.updateData)},updateData:function(t){switch(t.type){case"support":this.updateSupport(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var n=this.guanzhu.list.find(function(n){return n.id===t.post_id});n&&n.commentnum++},updateSupport:function(t){var n=this.guanzhu.list.find(function(n){return n.id===t.post_id});n&&1!==n.infonum.index&&"ding"==t.do&&(n.infonum.index=1,n.goodnum++)},openSearch:function(){t.navigateTo({url:"../search/search?searchType=topic"})},getFollowPostList:function(){var t=h(r.default.mark(function t(){var n,e,i,u,o,s,c,h;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n="/followpost/".concat(this.guanzhu.page),t.next=3,this.$http.get(n,{},{token:!0});case 3:if(e=t.sent,i=a(e,2),u=i[0],o=i[1],this.$http.errorCheck(u,o)){t.next=10;break}return this.guanzhu.firstload=!0,t.abrupt("return",this.guanzhu.loadtext="上拉加载更多");case 10:for(s=[],c=o.data.data.list,h=0;h<c.length;h++)s.push(this.__format(c[h]));return this.guanzhu.list=this.guanzhu.page>1?this.guanzhu.list.concat(s):s,this.guanzhu.firstload=!0,this.guanzhu.loadtext=c.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 17:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t){var n={userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},goodnum:t.ding_count,commentnum:t.comment_count,sharenum:t.sharenum};return t.user_id===this.User.userinfo.id&&(n.isguanzhu=!0),n},getSwiper:function(){var t=h(r.default.mark(function t(){var n,e,i,u,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/adsense/0");case 2:if(n=t.sent,e=a(n,2),i=e[0],u=e[1],this.$http.errorCheck(i,u)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=u.data.data.list,c=0;c<s.length;c++)o.push({src:s[c].src,url:s[c].url});this.topic.swiper=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getNav1:function(){var t=h(r.default.mark(function t(){var n,e,i,u,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/postclass");case 2:if(n=t.sent,e=a(n,2),i=e[0],u=e[1],this.$http.errorCheck(i,u)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=u.data.data.list,c=0;c<s.length;c++)o.push({id:s[c].id,name:s[c].classname});this.topic.postnav=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getNav:function(){var t=h(r.default.mark(function t(){var n,e,i,u,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/topicclass");case 2:if(n=t.sent,e=a(n,2),i=e[0],u=e[1],this.$http.errorCheck(i,u)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=u.data.data.list,c=0;c<s.length;c++)o.push({id:s[c].id,name:s[c].classname});this.topic.topicnav=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getHot:function(){var t=h(r.default.mark(function t(){var n,e,i,u,o,s,c;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/hottopic");case 2:if(n=t.sent,e=a(n,2),i=e[0],u=e[1],this.$http.errorCheck(i,u)){t.next=8;break}return t.abrupt("return");case 8:for(o=[],s=u.data.data.list,c=0;c<s.length;c++)o.push({id:s[c].id,titlepic:s[c].titlepic,title:s[c].title,desc:s[c].desc,totalnum:s[c].post_count,todaynum:s[c].todaypost_count});this.topic.list=o;case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),changeTab:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},loadmore:function(){"上拉加载更多"==this.guanzhu.loadtext&&(this.guanzhu.loadtext="加载中...",this.guanzhu.page++,this.getFollowPostList())}}};n.default=b}).call(this,e("6e42")["default"])},"502b":function(t,n,e){},a096:function(t,n,e){"use strict";var r=e("502b"),i=e.n(r);i.a},add1:function(t,n,e){"use strict";(function(t){e("1133"),e("921b");r(e("66fd"));var n=r(e("0531"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},baba:function(t,n,e){"use strict";var r,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return r})}},[["add1","common/runtime","common/vendor"]]]);
});
require('pages/news/news.js');
__wxRoute = 'pages/paper/paper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/paper/paper.js';

define('pages/paper/paper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/paper/paper"],{1301:function(t,e,n){"use strict";(function(t){n("1133"),n("921b");i(n("66fd"));var e=i(n("7dca"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1b7c":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},"48c7":function(t,e,n){"use strict";var i=n("8613"),r=n.n(i);r.a},"7dca":function(t,e,n){"use strict";n.r(e);var i=n("1b7c"),r=n("af4f");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("48c7");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},8613:function(t,e,n){},"8bba":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("6c04"));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){return n.e("components/paper/paper-list").then(n.bind(null,"b240"))},o=function(){return n.e("components/paper/paper-left-popup").then(n.bind(null,"6e27"))},s=function(){return n.e("components/common/no-thing").then(n.bind(null,"d4b7"))},u={components:{paperList:a,paperLeftPopup:o,noThing:s},data:function(){return{firstload:!1,show:!1,list:[]}},onPullDownRefresh:function(){this.getdata()},onNavigationBarButtonTap:function(t){switch(t.index){case 0:this.User.navigate({url:"../user-list/user-list"}),this.hidepopup();break;case 1:this.showpopup();break}},onShow:function(){this.getdata()},onLoad:function(){var e=this;t.$on("UserChat",function(t){var n=e.list.findIndex(function(e){return e.userid===t.from_id});if(-1!==n)return e.list[n].data=t.data,e.list[n].time=i.default.gettime.gettime(t.time),e.list[n].noreadnum++,void(e.list=e.$chat.__toFirst(e.list,n));var r=e.$chat.__format(t,{type:"chatlist"});r.time=i.default.gettime.gettime(r.time),r.noreadnum=1,e.list.unshift(r)})},methods:{addfriend:function(){this.User.navigate({url:"../search/search?searchType=user"}),this.hidepopup()},clear:function(){this.User.userinfo.id&&(t.removeStorageSync("noreadnum"+this.User.userinfo.id),t.removeStorageSync("chatlist"+this.User.userinfo.id),this.$chat.initTabbarBadge(),this.getdata(),t.showToast({title:"清除成功"})),this.hidepopup()},hidepopup:function(){this.show=!1},showpopup:function(){this.show=!0},getdata:function(){try{var e=this.User.userinfo.id;if(!e)return this.firstload=!0,t.stopPullDownRefresh();this.list=[];var n=t.getStorageSync("chatlist"+this.User.userinfo.id);n=n?JSON.parse(n):[];for(var r=0;r<n.length;r++)n[r].time=i.default.gettime.gettime(n[r].time);this.list=n,this.firstload=!0}catch(a){return t.stopPullDownRefresh()}t.stopPullDownRefresh()}}};e.default=u}).call(this,n("6e42")["default"])},af4f:function(t,e,n){"use strict";n.r(e);var i=n("8bba"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a}},[["1301","common/runtime","common/vendor"]]]);
});
require('pages/paper/paper.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"4dd6":function(n,t,e){"use strict";var o=e("a52a"),i=e.n(o);i.a},"721e":function(n,t,e){"use strict";var o,i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return o})},a52a:function(n,t,e){},ab43:function(n,t,e){"use strict";e.r(t);var o=e("721e"),i=e("fe90");for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);e("4dd6");var a,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=r.exports},bf0c:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([e.e("common/vendor"),e.e("components/home/home-list-item")]).then(e.bind(null,"8c06"))},i=function(){return e.e("components/home/home-info").then(e.bind(null,"4361"))},u=function(){return Promise.all([e.e("common/vendor"),e.e("components/home/other-login")]).then(e.bind(null,"9f43"))},a=function(){return e.e("components/home/home-data").then(e.bind(null,"107a"))},s={components:{homeListItem:o,homeInfo:i,otherLogin:u,homeData:a},data:function(){return{loginStatus:!1,homeinfo:{userpic:"../../static/demo/userpic/11.jpg",username:"昵称",totalnum:0,todaynum:0},homedata:[{name:"记账天数",num:0},{name:"提醒总次数",num:0},{name:"记账总笔数",num:0}],list:[{icon:"shezhi",name:"记账设置",clicktype:"navigateTo",url:""},{icon:"dengdai",name:"浏览历史",clicktype:"navigateTo",url:"../user-history/user-history"},{icon:"liebiao",name:"业务管理",clicktype:"navigateTo",url:"../categorygl/categorygl"},{icon:"xinyongqiahuankuan",name:"信用卡管理",clicktype:"navigateTo",url:"../creditcardgl/creditcardgl"},{icon:"guanli",name:"提醒管理",clicktype:"navigateTo",url:"../remind/remindgl"},{icon:"guanyuwomen",name:"关于财务提醒小秘书",clicktype:"navigateTo",url:"../user-set-about/user-set-about"}]}},onNavigationBarButtonTap:function(n){0==n.index&&this.User.navigate({url:"../user-set/user-set"})},onShow:function(){this.isLogin()},methods:{isLogin:function(){if(!this.User.token)return this.loginStatus=!1,this.homeinfo={userpic:"",username:"",totalnum:0,todaynum:0},this.homedata[0].num=0,this.homedata[1].num=0,void(this.homedata[2].num=0);this.homeinfo.id=this.User.userinfo.id,this.homeinfo.userpic=this.User.userinfo.userpic,this.homeinfo.username=this.User.userinfo.username,this.homeinfo.totalnum=this.User.counts.post_count||0,this.homeinfo.todaynum=this.User.counts.today_posts_count||0,this.homedata[0].num=this.User.counts.post_count||0,this.homedata[1].num=this.User.counts.remind_count||0,this.homedata[2].num=this.User.counts.record_count||0,this.loginStatus=!0},openLogin:function(){n.navigateTo({url:"../login/login"})}}};t.default=s}).call(this,e("6e42")["default"])},d449:function(n,t,e){"use strict";(function(n){e("1133"),e("921b");o(e("66fd"));var t=o(e("ab43"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},fe90:function(n,t,e){"use strict";e.r(t);var o=e("bf0c"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=i.a}},[["d449","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{1399:function(t,e,n){"use strict";n.r(e);var i=n("bfc5"),r=n("d6f6");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var a,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=s.exports},"7c57":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");i(n("66fd"));var e=i(n("1399"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bfc5:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},d6f6:function(t,e,n){"use strict";n.r(e);var i=n("d771"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=r.a},d771:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return c(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,u=void 0;try{for(var a,o=t[Symbol.iterator]();!(i=(a=o.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(s){r=!0,u=s}finally{try{i||null==o["return"]||o["return"]()}finally{if(r)throw u}}return n}function c(t){if(Array.isArray(t))return t}function d(t,e,n,i,r,u,a){try{var o=t[u](a),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function h(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var u=t.apply(e,n);function a(t){d(u,i,r,a,o,"next",t)}function o(t){d(u,i,r,a,o,"throw",t)}a(void 0)})}}var f=function(){return n.e("components/index/index-list").then(n.bind(null,"3661"))},l=function(){return n.e("components/common/no-thing").then(n.bind(null,"d4b7"))},p=function(){return n.e("components/common/load-more").then(n.bind(null,"f349"))},m=function(){return n.e("components/news/topic-list").then(n.bind(null,"ee8d"))},g=function(){return n.e("components/user-list/user-list").then(n.bind(null,"dc0c"))},v={components:{indexList:f,noThing:l,loadMore:p,topicList:m,userList:g},data:function(){return{issearch:!1,loadtext:"上拉加载更多",list:[],searchtext:"",page:1,searchType:"post"}},onNavigationBarButtonTap:function(e){0==e.index&&t.navigateBack({delta:1})},onNavigationBarSearchInputChanged:function(t){this.searchtext=t.text},onNavigationBarSearchInputConfirmed:function(t){t.text&&this.getdata()},onReachBottom:function(){this.loadmore()},onPullDownRefresh:function(){this.getdata(),t.stopPullDownRefresh()},computed:{getPlaceholder:function(){var t="文章";return"post"==this.searchType?t="文章":"topic"==this.searchType?t="话题":"user"==this.searchType&&(t="用户"),"搜索"+t}},onLoad:function(e){if(e){this.searchType=e.searchType||"post";var n="搜索文章";"topic"==this.searchType?n="搜索话题":"user"==this.searchType&&(n="搜索用户");var i=this.$mp.page.$getAppWebview(),r=i.getStyle().titleNView;r.searchInput.placeholder=n,i.setStyle({titleNView:r}),t.$on("updateData",this.updateData)}},methods:{updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var e=this.list.find(function(e){return e.id===t.post_id});e&&e.commentnum++},updateSupport:function(t){var e=this.list.find(function(e){return e.id===t.post_id});if(e){var n=e.infonum.index;e.infonum.index="ding"==t.do?1:2,0!==n&&(1==n?e.infonum.dingnum--:e.infonum.cainum--),0!==e.infonum.index&&(1==e.infonum.index?e.infonum.dingnum++:e.infonum.cainum++)}},updateGuanZhu:function(t){this.list.forEach(function(e,n){e.userid===t.userid&&(e.isguanzhu=t.data)})},getdata:function(){var e=h(r.default.mark(function e(){var n,u,o,s,c,d,h,f,l,p=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"Loading..."}),n="/search/"+this.searchType,e.next=4,this.$http.post(n,{keyword:this.searchtext,page:this.page},{token:!0});case 4:if(u=e.sent,o=a(u,2),s=o[0],c=o[1],d=this.$http.errorCheck(s,c,function(){t.hideLoading(),p.issearch=!0},function(){t.hideLoading(),p.issearch=!0}),d){e.next=11;break}return e.abrupt("return");case 11:for(h=[],f=c.data.data.list,console.log(i(c," at pages\\search\\search.vue:205")),l=0;l<f.length;l++)h.push(this.__format(f[l]));this.list=this.page>1?this.list.concat(h):h,this.issearch=!0,this.loadtext=f.length<10?"没有更多数据了":"上拉加载更多",t.hideLoading();case 19:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),loadmore:function(){"上拉加载更多"==this.loadtext&&(this.loadtext="加载中...",this.page++,this.getdata())},__format:function(t){switch(this.searchType){case"post":return{userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},commentnum:t.comment_count,sharenum:t.sharenum,sex:t.user.userinfo.sex,age:t.user.userinfo.age};case"topic":return{id:t.id,titlepic:t.titlepic,title:t.title,desc:t.desc,totalnum:t.post_count,todaynum:t.todaypost_count};case"user":return{id:t.id,userpic:t.userpic,username:t.username,age:t.userinfo.age,sex:t.userinfo.sex,isguanzhu:!1}}}}};e.default=v}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["7c57","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/add-input/add-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/add-input/add-input.js';

define('pages/add-input/add-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add-input/add-input"],{"42f6":function(t,i,n){"use strict";n.r(i);var e=n("62c6"),s=n("6af2");for(var a in s)"default"!==a&&function(t){n.d(i,t,function(){return s[t]})}(a);n("8530");var r,o=n("f0c5"),c=Object(o["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);i["default"]=c.exports},4479:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,i){return c(t)||o(t,i)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,i){var n=[],e=!0,s=!1,a=void 0;try{for(var r,o=t[Symbol.iterator]();!(e=(r=o.next()).done);e=!0)if(n.push(r.value),i&&n.length===i)break}catch(c){s=!0,a=c}finally{try{e||null==o["return"]||o["return"]()}finally{if(s)throw a}}return n}function c(t){if(Array.isArray(t))return t}function u(t,i,n,e,s,a,r){try{var o=t[a](r),c=o.value}catch(u){return void n(u)}o.done?i(c):Promise.resolve(c).then(e,s)}function l(t){return function(){var i=this,n=arguments;return new Promise(function(e,s){var a=t.apply(i,n);function r(t){u(a,e,s,r,o,"next",t)}function o(t){u(a,e,s,r,o,"throw",t)}r(void 0)})}}var p=["仅自己可见","所有人可见"],d=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"9232"))},h=function(){return n.e("components/common/uploud-images").then(n.bind(null,"8e1a"))},f={components:{uniNavBar:d,uploudImages:h},data:function(){return{isget:!1,showpopup:!0,yinsi:1,text:"",imglist:[],imglistIds:[],postclass:{id:0,title:"",range:[],list:[]},topic:{id:0,title:""}}},onBackPress:function(){if(this.text||!(this.imglist.length<1))return this.isget?void 0:(this.baocun(),!0)},computed:{getType:function(){return p[this.yinsi]}},onLoad:function(i){var n=this,e=t.getStorageSync("addinput");e&&(e=JSON.parse(e),this.yinsi=e.yinsi,this.imglistIds=e.imglistIds||[],this.imglistIds.length&&(this.imglist=e.imglist),this.text=e.text,e.postclass&&(this.postclass=e.postclass),e.topic&&(this.topic=e.topic));var s=!!i.postclass&&JSON.parse(i.postclass);this.getPostClass(s),t.$on("changeTopic",function(t){n.topic.id=t.id,n.topic.title="#".concat(t.title,"#")})},methods:{changeTopic:function(){t.navigateTo({url:"/pages/topic-nav/topic-nav?ischange="+!0})},getPostClass:function(){var t=l(e.default.mark(function t(i){var n,s,r,o,c,u,l,p,d,h;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=5;break}for(this.postclass.list=i,n=[],s=0;s<i.length;s++)n.push(i[s].name);return t.abrupt("return",this.postclass.range=n);case 5:return t.prev=5,t.next=8,this.$http.get("/postclass");case 8:if(r=t.sent,o=a(r,2),c=o[0],u=o[1],this.$http.errorCheck(c,u)){t.next=14;break}return t.abrupt("return");case 14:for(l=u.data.data.list,p=[],d=[],h=0;h<l.length;h++)p.push(l[h].classname),d.push({id:l[h].id,name:l[h].classname});this.postclass.range=p,this.postclass.list=d,t.next=24;break;case 21:return t.prev=21,t.t0=t["catch"](5),t.abrupt("return");case 24:case"end":return t.stop()}},t,this,[[5,21]])}));function i(i){return t.apply(this,arguments)}return i}(),changePostClass:function(t){this.postclass.id=this.postclass.list[t.target.value].id,this.postclass.title=this.postclass.list[t.target.value].name},baocun:function(){var i=this;t.showModal({content:"是否要保存为草稿？",cancelText:"不保存",confirmText:"保存",success:function(n){if(n.confirm){var e={yinsi:i.yinsi,text:i.text,imglist:i.imglist,imglistIds:i.imglistIds,postclass:i.postclass,topic:i.topic};t.setStorageSync("addinput",JSON.stringify(e))}else t.removeStorage({key:"addinput"});i.isget=!0,t.navigateBack({delta:1})}})},back:function(){t.navigateBack({delta:1})},submit:function(){var i=l(e.default.mark(function i(){var n,s,r,o;return e.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:if(this.postclass.id){i.next=2;break}return i.abrupt("return",t.showToast({title:"请选择分类",icon:"none"}));case 2:return t.showLoading({title:"发布中...",mask:!0}),i.prev=3,i.next=6,this.$http.post("/post/create",{imglist:JSON.stringify(this.imglistIds),text:this.text,isopen:this.yinsi,topic_id:this.topic.id,post_class_id:this.postclass.id},{token:!0,checkToken:!0,checkAuth:!0});case 6:if(n=i.sent,s=a(n,2),r=s[0],o=s[1],this.$http.errorCheck(r,o)){i.next=12;break}return i.abrupt("return",t.hideLoading());case 12:t.hideLoading(),t.showToast({title:"发布成功！"}),this.isget=!0,t.$emit("updateData",{type:"updateList",data:o.data.data.detail}),t.navigateBack({delta:1}),i.next=22;break;case 19:return i.prev=19,i.t0=i["catch"](3),i.abrupt("return");case 22:case"end":return i.stop()}},i,this,[[3,19]])}));function n(){return i.apply(this,arguments)}return n}(),changelook:function(){var i=this;t.showActionSheet({itemList:p,success:function(t){i.yinsi=t.tapIndex}})},upload:function(t){this.imglist.push(t.url),this.imglistIds.push({id:t.id})},delImageList:function(t){this.imglist.splice(t,1),this.imglistIds.splice(t,1)}}};i.default=f}).call(this,n("6e42")["default"])},5445:function(t,i,n){},"62c6":function(t,i,n){"use strict";var e,s=function(){var t=this,i=t.$createElement;t._self._c},a=[];n.d(i,"b",function(){return s}),n.d(i,"c",function(){return a}),n.d(i,"a",function(){return e})},"6af2":function(t,i,n){"use strict";n.r(i);var e=n("4479"),s=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=s.a},8530:function(t,i,n){"use strict";var e=n("5445"),s=n.n(e);s.a},c020:function(t,i,n){"use strict";(function(t){n("1133"),n("921b");e(n("66fd"));var i=e(n("42f6"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,n("6e42")["createPage"])}},[["c020","common/runtime","common/vendor"]]]);
});
require('pages/add-input/add-input.js');
__wxRoute = 'pages/topic-nav/topic-nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/topic-nav/topic-nav.js';

define('pages/topic-nav/topic-nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic-nav/topic-nav"],{"17c8":function(t,n,e){"use strict";var i=e("bf44"),a=e.n(i);a.a},"2bd1":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("f912"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"41c3":function(t,n,e){"use strict";e.r(n);var i=e("e207"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n["default"]=a.a},5539:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return i})},bf44:function(t,n,e){},e207:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n){return u(t)||o(t,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,n){var e=[],i=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done);i=!0)if(e.push(s.value),n&&e.length===n)break}catch(u){a=!0,r=u}finally{try{i||null==o["return"]||o["return"]()}finally{if(a)throw r}}return e}function u(t){if(Array.isArray(t))return t}function c(t,n,e,i,a,r,s){try{var o=t[r](s),u=o.value}catch(c){return void e(c)}o.done?n(u):Promise.resolve(u).then(i,a)}function l(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var r=t.apply(n,e);function s(t){c(r,i,a,s,o,"next",t)}function o(t){c(r,i,a,s,o,"throw",t)}s(void 0)})}}var d=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},f=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},p=function(){return e.e("components/news/topic-list").then(e.bind(null,"ee8d"))},b={components:{swiperTabHead:d,noThing:f,loadMore:h,topicList:p},data:function(){return{ischange:!1,swiperheight:500,tabIndex:0,tabBars:[],newslist:[]}},onLoad:function(n){var e=this;n.ischange&&(this.ischange=!0,t.setNavigationBarTitle({title:"选择所属话题"})),t.getSystemInfo({success:function(n){var i=n.windowHeight-t.upx2px(100);e.swiperheight=i}}),this.getNav()},methods:{getNav:function(){var t=l(i.default.mark(function t(){var n,e,a,s,o,u,c,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/topicclass");case 2:if(n=t.sent,e=r(n,2),a=e[0],s=e[1],this.$http.errorCheck(a,s)){t.next=8;break}return t.abrupt("return");case 8:for(o=s.data.data.list,u=[],c=[],l=0;l<o.length;l++)u.push({id:o[l].id,name:o[l].classname}),c.push({loadtext:"上拉加载更多",list:[],page:1,firstload:!1});this.tabBars=u,this.newslist=c,this.tabBars.length>0&&this.getList();case 15:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getList:function(){var t=l(i.default.mark(function t(){var n,e,a,s,o,u,c,l,d,f=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n="/topicclass/".concat(this.tabBars[this.tabIndex].id,"/topic/").concat(this.newslist[this.tabIndex].page),t.next=3,this.$http.get(n);case 3:if(e=t.sent,a=r(e,2),s=a[0],o=a[1],u=this.$http.errorCheck(s,o,function(){f.newslist[f.tabIndex].loadtext="上拉加载更多"},function(){f.newslist[f.tabIndex].loadtext="上拉加载更多"}),u){t.next=10;break}return t.abrupt("return");case 10:for(c=[],l=o.data.data.list,d=0;d<l.length;d++)c.push({id:l[d].id,titlepic:l[d].titlepic,title:l[d].title,desc:l[d].desc,totalnum:l[d].post_count,todaynum:l[d].todaypost_count});return this.newslist[this.tabIndex].list=this.newslist[this.tabIndex].page>1?this.newslist[this.tabIndex].list.concat(c):c,this.newslist[this.tabIndex].firstload=!0,l.length<10?this.newslist[this.tabIndex].loadtext="没有更多数据了":this.newslist[this.tabIndex].loadtext="上拉加载更多",t.abrupt("return");case 17:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),loadmore:function(t){"上拉加载更多"==this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",this.newslist[this.tabIndex].page++,this.getList())},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current,this.getList()}}};n.default=b}).call(this,e("6e42")["default"])},f912:function(t,n,e){"use strict";e.r(n);var i=e("5539"),a=e("41c3");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("17c8");var s,o=e("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=u.exports}},[["2bd1","common/runtime","common/vendor"]]]);
});
require('pages/topic-nav/topic-nav.js');
__wxRoute = 'pages/topic-detail/topic-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/topic-detail/topic-detail.js';

define('pages/topic-detail/topic-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic-detail/topic-detail"],{"3e26":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"55bf":function(t,n,e){"use strict";e.r(n);var i=e("3e26"),a=e("604b");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var u,r=e("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=s.exports},"604b":function(t,n,e){"use strict";e.r(n);var i=e("9972"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},8047:function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("55bf"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},9972:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,n){return s(t)||r(t,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(t,n){var e=[],i=!0,a=!1,o=void 0;try{for(var u,r=t[Symbol.iterator]();!(i=(u=r.next()).done);i=!0)if(e.push(u.value),n&&e.length===n)break}catch(s){a=!0,o=s}finally{try{i||null==r["return"]||r["return"]()}finally{if(a)throw o}}return e}function s(t){if(Array.isArray(t))return t}function c(t,n,e,i,a,o,u){try{var r=t[o](u),s=r.value}catch(c){return void e(c)}r.done?n(s):Promise.resolve(s).then(i,a)}function d(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var o=t.apply(n,e);function u(t){c(o,i,a,u,r,"next",t)}function r(t){c(o,i,a,u,r,"throw",t)}u(void 0)})}}var l=function(){return e.e("components/topic/topic-info").then(e.bind(null,"063e"))},f=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/common/common-list").then(e.bind(null,"0335"))},p=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},b={components:{topicInfo:l,swiperTabHead:f,commonList:h,loadMore:p},data:function(){return{topicInfo:{titlepic:"../../static/demo/topicpic/13.jpeg",title:"忆往事，敬余生",desc:"我是描述",totalnum:1e3,todaynum:1e3},tabIndex:0,tabBars:[{name:"默认",id:"moren"},{name:"最新",id:"zuixin"}],tablist:[{loadtext:"上拉加载更多",list:[],firstload:!1,page:1},{loadtext:"上拉加载更多",list:[],firstload:!1,page:1}]}},onReachBottom:function(){this.loadmore()},onPullDownRefresh:function(){this.getList()},onLoad:function(n){this.__init(JSON.parse(n.detail)),t.$on("updateData",this.updateData)},methods:{updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var n=this.tablist[this.tabIndex].list.find(function(n){return n.id===t.post_id});n&&n.commentnum++},updateGuanZhu:function(t){this.tablist[this.tabIndex].list.forEach(function(n,e){n.userid===t.userid&&(n.isguanzhu=t.data)})},updateSupport:function(t){var n=this.tablist[this.tabIndex].list.find(function(n){return n.id===t.post_id});n&&1!==n.infonum.index&&"ding"==t.do&&(n.infonum.index=1,n.goodnum++)},__init:function(n){t.setNavigationBarTitle({title:n.title}),this.topicInfo=n,this.getList()},getList:function(){var n=d(i.default.mark(function n(){var e,a,u,r,s,c,d,l;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e="/topic/".concat(this.topicInfo.id,"/post/").concat(this.tablist[this.tabIndex].page),n.next=3,this.$http.get(e,{},{token:!0});case 3:if(a=n.sent,u=o(a,2),r=u[0],s=u[1],this.$http.errorCheck(r,s)){n.next=9;break}return n.abrupt("return",this.tablist[this.tabIndex].loadtext="上拉加载更多");case 9:for(c=[],d=s.data.data.list,l=0;l<d.length;l++)c.push(this.__format(d[l]));return this.tablist[this.tabIndex].list=this.tablist[this.tabIndex].page>1?this.tablist[this.tabIndex].list.concat(c):c,this.tablist[this.tabIndex].firstload=!0,t.stopPullDownRefresh(),n.abrupt("return",this.tablist[this.tabIndex].loadtext=d.length<10?"没有更多数据了":"上拉加载更多");case 16:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),__format:function(t){return{userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},goodnum:t.ding_count,commentnum:t.comment_count,sharenum:t.sharenum}},loadmore:function(){"上拉加载更多"==this.tablist[this.tabIndex].loadtext&&(this.tablist[this.tabIndex].loadtext="加载中...",this.tablist[this.tabIndex].page++,this.getList())},tabtap:function(t){this.tabIndex=t,this.tablist[this.tabIndex].page=1,this.getList()}}};n.default=b}).call(this,e("6e42")["default"])}},[["8047","common/runtime","common/vendor"]]]);
});
require('pages/topic-detail/topic-detail.js');
__wxRoute = 'pages/user-list/user-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-list/user-list.js';

define('pages/user-list/user-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-list/user-list"],{"21a9":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,n){return c(t)||o(t,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,n){var e=[],i=!0,r=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done);i=!0)if(e.push(a.value),n&&e.length===n)break}catch(o){r=!0,s=o}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw s}}return e}function c(t){if(Array.isArray(t))return t}function l(t,n,e,i,r,s,a){try{var u=t[s](a),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,r)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var s=t.apply(n,e);function a(t){l(s,i,r,a,u,"next",t)}function u(t){l(s,i,r,a,u,"throw",t)}a(void 0)})}}var d=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/user-list/user-list").then(e.bind(null,"dc0c"))},p=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},b=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},g={components:{swiperTabHead:d,userList:h,loadMore:p,noThing:b},data:function(){return{swiperheight:500,tabIndex:0,tabBars:[{name:"互关",id:"huguan",num:10},{name:"关注",id:"guanzhu",num:20},{name:"粉丝",id:"fensi",num:30}],newslist:[{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1}]}},onLoad:function(){var n=this;t.getSystemInfo({success:function(e){var i=e.windowHeight-t.upx2px(100);n.swiperheight=i}})},onNavigationBarButtonTap:function(n){0==n.index&&t.navigateBack({delta:1})},onNavigationBarSearchInputClicked:function(){t.navigateTo({url:"../search/search?searchType=user"})},onShow:function(){this.__init()},methods:{__init:function(){this.tabBars[0].num=this.User.counts.friend_count<100?this.User.counts.friend_count:"99+",this.tabBars[1].num=this.User.counts.withfollow_count<100?this.User.counts.withfollow_count:"99+",this.tabBars[2].num=this.User.counts.withfen_count<100?this.User.counts.withfen_count:"99+",this.getList()},getUrl:function(){var t=["/friends/","/follows/","/fens/"];return t[this.tabIndex]+this.newslist[this.tabIndex].page},getList:function(){var t=f(r.default.mark(function t(){var n,e,s,u,o,c,l,f;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=this.tabIndex,t.next=4,this.$http.get(this.getUrl(),{},{token:!0,checkToken:!0});case 4:if(e=t.sent,s=a(e,2),u=s[0],o=s[1],this.$http.errorCheck(u,o)){t.next=11;break}return this.newslist[n].loadtext="上拉加载更多",t.abrupt("return");case 11:for(c=[],console.log(i(o," at pages\\user-list\\user-list.vue:144")),l=o.data.data.list,f=0;f<l.length;f++)c.push(this.__format(l[f],n));return this.newslist[n].list=this.newslist[n].page>1?this.newslist[n].list.concat(c):c,this.newslist[n].firstload=!0,this.newslist[n].loadtext=l.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 21:return t.prev=21,t.t0=t["catch"](0),t.abrupt("return");case 24:case"end":return t.stop()}},t,this,[[0,21]])}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t,n){return{id:t.userinfo.user_id,userpic:t.userpic,username:t.username,age:t.userinfo.age,sex:t.userinfo.sex,isguanzhu:2!==n}},loadmore:function(t){"上拉加载更多"===this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",this.newslist[t].page++,this.getList())},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current,this.newslist[this.tabIndex].firstload||this.getList()}}};n.default=g}).call(this,e("6e42")["default"],e("0de9")["default"])},"490c":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("e95d"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},af32:function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return i})},c69a:function(t,n,e){"use strict";e.r(n);var i=e("21a9"),r=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=r.a},e95d:function(t,n,e){"use strict";e.r(n);var i=e("af32"),r=e("c69a");for(var s in r)"default"!==s&&function(t){e.d(n,t,function(){return r[t]})}(s);var a,u=e("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=o.exports}},[["490c","common/runtime","common/vendor"]]]);
});
require('pages/user-list/user-list.js');
__wxRoute = 'pages/user-chat/user-chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-chat/user-chat.js';

define('pages/user-chat/user-chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-chat/user-chat"],{"60c7":function(t,e,n){"use strict";n.r(e);var r=n("950e"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},"81f3":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("921a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"921a":function(t,e,n){"use strict";n.r(e);var r=n("f4ef"),i=n("60c7");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"950e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));i(n("6c04"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){i=!0,o=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw o}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){c(o,r,i,a,s,"next",t)}function s(t){c(o,r,i,a,s,"throw",t)}a(void 0)})}}var h=function(){return n.e("components/user-chat/user-chat-bottom").then(n.bind(null,"34d3"))},f=function(){return n.e("components/user-chat/user-chat-list").then(n.bind(null,"d6f9"))},d={components:{userChatBottom:h,userChatList:f},data:function(){return{scrollTop:0,style:{contentH:0,itemH:0},list:[],loadtext:"点击加载更多"}},onLoad:function(e){var n=JSON.parse(e.userinfo);if(!n.userid)return t.showToast({title:"该用户不存在",icon:"none"}),t.navigateBack({delta:1});this.$chat.CurrentToUser={userid:n.userid,username:n.username,userpic:n.userpic},t.setNavigationBarTitle({title:n.username})},onUnload:function(){this.$chat.CurrentToUser={userid:0,username:"",userpic:""}},onReady:function(){this.__init()},methods:{__init:function(){var e=this;try{var n=t.getSystemInfoSync();this.style.contentH=n.windowHeight-t.upx2px(120)}catch(r){}this.getdata(),this.pageToBottom(!0),t.$on("UserChat",function(t){e.list.push(e.$chat.__format(t,{type:"chatdetail",isme:!1,olddata:e.list})),e.pageToBottom()})},pageToBottom:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t.createSelectorQuery().in(this),o=i.selectAll(".chat-item");this.$nextTick(function(){o.fields({size:!0},function(t){if(t){if(n){e.style.itemH=0;for(var i=0;i<t.length;i++)e.style.itemH+=t[i].height}else e.style.itemH+=t.length>0?t[t.length-1].height:t[0].height;r&&(e.scrollTop=e.style.itemH>e.style.contentH?e.style.itemH:0)}}).exec()})},getdata:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var n="chatdetail_"+this.User.userinfo.id+"_"+this.$chat.CurrentToUser.userid,r=t.getStorageSync(n);if(r=r?JSON.parse(r):[],!e&&r.length>10)return this.list=r.splice(0,10);this.list=r,this.loadtext=""}catch(i){t.showToast({title:"加载失败~",icon:"none"})}},submit:function(){var e=l(r.default.mark(function e(n){var i,a,s,u,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",t.showToast({title:"请输入你要发送的消息~",icon:"none"}));case 2:return i=this.$chat.send({type:"text",data:n}),e.next=5,this.$http.post("/chat/send",i,{token:!0,checkToken:!0,checkAuth:!0});case 5:if(a=e.sent,s=o(a,2),u=s[0],c=s[1],this.$http.errorCheck(u,c)){e.next=11;break}return e.abrupt("return",t.showToast({title:"发送失败",icon:"none"}));case 11:this.list.push(this.$chat.__format(i,{type:"chatdetail",olddata:this.list,isme:!0})),this.pageToBottom();case 13:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),loadmore:function(){"点击加载更多"===this.loadtext&&(this.loadtext="加载中...",this.getdata(!0),this.pageToBottom(!0,!1))}}};e.default=d}).call(this,n("6e42")["default"])},f4ef:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})}},[["81f3","common/runtime","common/vendor"]]]);
});
require('pages/user-chat/user-chat.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"0026":function(t,e,n){"use strict";n.r(e);var i=n("8fda"),r=n("418f");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("1af0");var u,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=s.exports},"00fb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),r=a(n("6c04"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return c(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var u,o=t[Symbol.iterator]();!(i=(u=o.next()).done);i=!0)if(n.push(u.value),e&&n.length===e)break}catch(s){r=!0,a=s}finally{try{i||null==o["return"]||o["return"]()}finally{if(r)throw a}}return n}function c(t){if(Array.isArray(t))return t}function d(t,e,n,i,r,a,u){try{var o=t[a](u),s=o.value}catch(c){return void n(c)}o.done?e(s):Promise.resolve(s).then(i,r)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function u(t){d(a,i,r,u,o,"next",t)}function o(t){d(a,i,r,u,o,"throw",t)}u(void 0)})}}var f=function(){return n.e("components/detail/detail-info").then(n.bind(null,"adac"))},h=function(){return n.e("components/detail/comment-list").then(n.bind(null,"9188"))},m=function(){return n.e("components/user-chat/user-chat-bottom").then(n.bind(null,"34d3"))},p=function(){return Promise.all([n.e("common/vendor"),n.e("components/common/more-share")]).then(n.bind(null,"5124"))},g={components:{detailInfo:f,commentList:h,userChatBottom:m,moreShare:p},data:function(){return{focus:!1,reply_id:0,sharedata:{title:"",url:"",titlepic:"",shareType:0},shareshow:!1,comment:{count:0,list:[]},detail:{userpic:"",username:"",sex:0,age:0,content:"",isguanzhu:!1,title:"",titlepic:"",morepic:[],video:!1,share:!1,path:"",sharenum:0,commentnum:0,goodnum:0,creat_time:0}}},onLoad:function(t){this.initdata(JSON.parse(t.detailData))},onNavigationBarButtonTap:function(t){0==t.index&&this.togle()},methods:{__initShare:function(t){this.sharedata={title:t.title,content:t.title,url:"http://www.dishaxy.com/",titlepic:t.titlepic?t.titlepic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",shareType:0}},updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break}},updateGuanZhu:function(t){this.detail.isguanzhu=t.data},updateSupport:function(t){"ding"==t.do&&(this.detail.infonum.index=1,this.detail.goodnum++)},initdata:function(e){t.setNavigationBarTitle({title:e.title}),this.__initShare(e),t.showLoading({title:"Loading...",mask:!0}),e.morepic=[],e.content="",e.goodnum=e.infonum.dingnum,this.detail=e,this.comment.count=e.commentnum,this.getdetail(),this.comment.count&&this.getcomment()},getdetail:function(){var e=l(i.default.mark(function e(){var n,r,a,o,s,c,d,l;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/post/"+this.detail.id);case 2:if(n=e.sent,r=u(n,2),a=r[0],o=r[1],s=this.$http.errorCheck(a,o,function(){t.hideLoading()},function(){t.hideLoading()}),s){e.next=9;break}return e.abrupt("return");case 9:for(c=o.data.data.detail,this.detail.content=c.content,d=[],l=0;l<c.images.length;l++)d.push(c.images[l].url);return this.detail.morepic=d,this.detail.age=c.user.userinfo.age,this.detail.sex=c.user.userinfo.sex,this.detail.creat_time=c.creat_time,e.abrupt("return",t.hideLoading());case 18:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),togle:function(){return t.showToast({title:"申请中...",icon:"none"})},submit:function(){var e=l(i.default.mark(function e(n){var a,o,s,c,d,l,f,h;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"评论中...",mask:!1}),a=this.reply_id,e.next=4,this.$http.post("/post/comment",{post_id:this.detail.id,fid:a,data:n},{token:!0});case 4:if(o=e.sent,s=u(o,2),c=s[0],d=s[1],!c&&!d.data.errorCode){e.next=12;break}return l=d.data.errorCode?d.data.msg:"发送失败，请检查网络~",t.hideLoading(),e.abrupt("return",t.showToast({title:l,icon:"none"}));case 12:if(t.hideLoading(),t.showToast({title:"发送成功~"}),f={id:d.data.data.id,fid:a,userpic:this.User.userinfo.userpic,username:this.User.userinfo.username,time:r.default.gettime.gettime((new Date).getTime()),data:n},this.comment.count++,this.detail.commentnum++,0!==a){e.next=19;break}return e.abrupt("return",this.comment.list.push(f));case 19:h=this.comment.list.findIndex(function(t){return t.id===a}),h>-1&&this.comment.list.splice(h+1,0,f),t.$emit("updateData",{type:"updateComment",post_id:this.detail.id});case 22:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),getcomment:function(){var t=l(i.default.mark(function t(){var e,n,r,a,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/post/"+this.detail.id+"/comment");case 2:if(e=t.sent,n=u(e,2),r=n[0],a=n[1],this.$http.errorCheck(r,a)){t.next=8;break}return t.abrupt("return");case 8:o=a.data.data.list,this.comment.list=this.comment.list.concat(this.__ArrSort(o));case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),__ArrSort:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],i=0,a=function t(e,i,a){for(var u=0;u<e.length;u++){var o=e[u];o.fid==i&&(o.lev=a,n.push({id:o.id,fid:o.fid,userid:o.user.id,userpic:o.user.userpic,username:o.user.username,time:r.default.gettime.gettime(o.create_time),data:o.data}),t(e,o.id,a+1))}};return a(t,e,i),n},reply:function(t){this.reply_id=t,this.focus=!0},blur:function(){this.focus=!1,this.reply_id=0}}};e.default=g}).call(this,n("6e42")["default"])},"089d":function(t,e,n){},"1af0":function(t,e,n){"use strict";var i=n("089d"),r=n.n(i);r.a},"418f":function(t,e,n){"use strict";n.r(e);var i=n("00fb"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},"8fda":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},f48d:function(t,e,n){"use strict";(function(t){n("1133"),n("921b");i(n("66fd"));var e=i(n("0026"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f48d","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');
__wxRoute = 'pages/user-set/user-set';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-set/user-set.js';

define('pages/user-set/user-set.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set/user-set"],{"22fe":function(e,n,t){"use strict";(function(e){t("1133"),t("921b");u(t("66fd"));var n=u(t("e4bd"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"3ae6":function(e,n,t){"use strict";var u,r=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){return e.User.logout()})},o=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return u})},4019:function(e,n,t){},"55bfe":function(e,n,t){"use strict";var u=t("4019"),r=t.n(u);r.a},"5f46":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/home/home-list-item")]).then(t.bind(null,"8c06"))},r={components:{homeListItem:u},data:function(){return{list:[{icon:"",name:"账号与安全",clicktype:"navigateTo",url:"../../pages/user-safe/user-safe"},{icon:"",name:"资料编辑",clicktype:"navigateTo",url:"../../pages/user-set-userinfo/user-set-userinfo"},{icon:"",name:"小纸条",clicktype:"",url:""},{icon:"",name:"清除缓存",clicktype:"clear",url:""},{icon:"",name:"意见反馈",clicktype:"navigateTo",url:"../../pages/user-set-help/user-set-help"},{icon:"",name:"关于财务提醒小秘书",clicktype:"navigateTo",url:"../../pages/user-set-about/user-set-about"}]}},methods:{}};n.default=r},e4bd:function(e,n,t){"use strict";t.r(n);var u=t("3ae6"),r=t("ee6e");for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);t("55bfe");var a,c=t("f0c5"),i=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=i.exports},ee6e:function(e,n,t){"use strict";t.r(n);var u=t("5f46"),r=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);n["default"]=r.a}},[["22fe","common/runtime","common/vendor"]]]);
});
require('pages/user-set/user-set.js');
__wxRoute = 'pages/user-set-repassword/user-set-repassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-set-repassword/user-set-repassword.js';

define('pages/user-set-repassword/user-set-repassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-repassword/user-set-repassword"],{"123f":function(t,n,e){"use strict";var s,r=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return s})},"16a6":function(t,n,e){},"1df5":function(t,n,e){"use strict";e.r(n);var s=e("c2ed"),r=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(n,t,function(){return s[t]})}(o);n["default"]=r.a},b4cb:function(t,n,e){"use strict";(function(t){e("1133"),e("921b");s(e("66fd"));var n=s(e("eba4"));function s(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c031:function(t,n,e){"use strict";var s=e("16a6"),r=e.n(s);r.a},c2ed:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,n){return u(t)||i(t,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(t,n){var e=[],s=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(s=(a=i.next()).done);s=!0)if(e.push(a.value),n&&e.length===n)break}catch(u){r=!0,o=u}finally{try{s||null==i["return"]||i["return"]()}finally{if(r)throw o}}return e}function u(t){if(Array.isArray(t))return t}function c(t,n,e,s,r,o,a){try{var i=t[o](a),u=i.value}catch(c){return void e(c)}i.done?n(u):Promise.resolve(u).then(s,r)}function d(t){return function(){var n=this,e=arguments;return new Promise(function(s,r){var o=t.apply(n,e);function a(t){c(o,s,r,a,i,"next",t)}function i(t){c(o,s,r,a,i,"throw",t)}a(void 0)})}}var f={data:function(){return{hasPassword:!1,oldpassword:"",newpassword:"",renewpassword:"",disabled:!0,loading:!1}},onLoad:function(t){this.hasPassword=!(!t.password||"false"===t.password)},watch:{oldpassword:function(t){this.change()},newpassword:function(t){this.change()},renewpassword:function(t){this.change()}},methods:{change:function(){return this.newpassword&&this.renewpassword?this.disabled=!1:this.hasPassword&&!this.oldpassword?this.disabled=!0:void(this.disabled=!0)},check:function(){return!this.hasPassword||this.oldpassword&&""!=this.oldpassword?this.newpassword&&""!=this.newpassword?this.renewpassword&&""!=this.renewpassword?this.newpassword===this.renewpassword||(t.showToast({title:"确认密码和新密码不一致",icon:"none"}),!1):(t.showToast({title:"确认密码不能为空",icon:"none"}),!1):(t.showToast({title:"新密码不能为空",icon:"none"}),!1):(t.showToast({title:"旧密码不能为空",icon:"none"}),!1)},submit:function(){var n=d(s.default.mark(function n(){var e,r,a,i;return s.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(this.check()){n.next=2;break}return n.abrupt("return");case 2:return this.loading=this.disabled=!0,n.next=5,this.$http.post("/repassword",{oldpassword:this.oldpassword||0,newpassword:this.newpassword,renewpassword:this.renewpassword},{token:!0,checkToken:!0});case 5:if(e=n.sent,r=o(e,2),a=r[0],i=r[1],this.$http.errorCheck(a,i)){n.next=12;break}return this.loading=this.disabled=!1,n.abrupt("return");case 12:return this.User.userinfo.password=!0,t.setStorageSync("userinfo",this.User.userinfo),this.loading=this.disabled=!1,n.abrupt("return",t.showToast({title:"修改密码成功！",success:function(){t.navigateBack({delta:1})}}));case 16:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}};n.default=f}).call(this,e("6e42")["default"])},eba4:function(t,n,e){"use strict";e.r(n);var s=e("123f"),r=e("1df5");for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);e("c031");var a,i=e("f0c5"),u=Object(i["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);n["default"]=u.exports}},[["b4cb","common/runtime","common/vendor"]]]);
});
require('pages/user-set-repassword/user-set-repassword.js');
__wxRoute = 'pages/user-set-email/user-set-email';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-set-email/user-set-email.js';

define('pages/user-set-email/user-set-email.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-email/user-set-email"],{"1ffc":function(t,e,n){},4449:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return o(t)||s(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)if(n.push(u.value),e&&n.length===e)break}catch(o){r=!0,a=o}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function o(t){if(Array.isArray(t))return t}function c(t,e,n,i,r,a,u){try{var s=t[a](u),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function u(t){c(a,i,r,u,s,"next",t)}function s(t){c(a,i,r,u,s,"throw",t)}u(void 0)})}}var f={data:function(){return{isbind:!1,email:"",disabled:!0,loading:!1}},watch:{email:function(t){this.change()}},onLoad:function(t){t.email&&"false"!==t.email&&"null"!==t.email&&(this.email=t.email,this.disabled=!0,this.isbind=!0)},methods:{change:function(){if(this.email)return this.disabled=!1;this.disabled=!0},check:function(){if(!this.email||""==this.email)return t.showToast({title:"邮箱不能为空",icon:"none"}),!1;var e=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return!!e.test(this.email)||(t.showToast({title:"请输入正确邮箱格式",icon:"none"}),!1)},submit:function(){var e=l(i.default.mark(function e(){var n,r,u,s;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.check()){e.next=2;break}return e.abrupt("return");case 2:return this.loading=this.disabled=!0,e.next=5,this.$http.post("/user/bindemail",{email:this.email},{token:!0,checkToken:!0});case 5:if(n=e.sent,r=a(n,2),u=r[0],s=r[1],this.$http.errorCheck(u,s)){e.next=11;break}return e.abrupt("return",this.loading=this.disabled=!1);case 11:return this.isbind=!0,this.loading=this.disabled=!1,this.User.userinfo.email=this.email,t.setStorageSync("userinfo",this.User.userinfo),e.abrupt("return",t.showToast({title:"绑定成功！",success:function(){t.navigateBack({delta:1})}}));case 16:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=f}).call(this,n("6e42")["default"])},"60c72":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");i(n("66fd"));var e=i(n("6f0a"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6f0a":function(t,e,n){"use strict";n.r(e);var i=n("d5ca"),r=n("7c68");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("e3c8");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=o.exports},"7c68":function(t,e,n){"use strict";n.r(e);var i=n("4449"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=r.a},d5ca:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i})},e3c8:function(t,e,n){"use strict";var i=n("1ffc"),r=n.n(i);r.a}},[["60c72","common/runtime","common/vendor"]]]);
});
require('pages/user-set-email/user-set-email.js');
__wxRoute = 'pages/user-set-userinfo/user-set-userinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-set-userinfo/user-set-userinfo.js';

define('pages/user-set-userinfo/user-set-userinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-userinfo/user-set-userinfo"],{"2c80":function(e,t,r){"use strict";var n=r("a321"),i=r.n(n);i.a},5680:function(e,t,r){"use strict";(function(e){r("1133"),r("921b");n(r("66fd"));var t=n(r("5c1e"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"5c1e":function(e,t,r){"use strict";r.r(t);var n=r("ba45"),i=r("b244");for(var s in i)"default"!==s&&function(e){r.d(t,e,function(){return i[e]})}(s);r("2c80");var u,a=r("f0c5"),o=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=o.exports},"85fa":function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(r("a34a")),s=u(r("6c04"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return f(e)||c(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){var r=[],n=!0,i=!1,s=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done);n=!0)if(r.push(u.value),t&&r.length===t)break}catch(o){i=!0,s=o}finally{try{n||null==a["return"]||a["return"]()}finally{if(i)throw s}}return r}function f(e){if(Array.isArray(e))return e}function h(e,t,r,n,i,s,u){try{var a=e[s](u),o=a.value}catch(c){return void r(c)}a.done?t(o):Promise.resolve(o).then(n,i)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var s=e.apply(t,r);function u(e){h(s,n,i,u,a,"next",e)}function a(e){h(s,n,i,u,a,"throw",e)}u(void 0)})}}var d=["不限","男","女"],p=["秘密","未婚","已婚"],b=["秘密","IT","老师"],m=function(){return Promise.all([r.e("common/vendor"),r.e("components/mpvue-citypicker/mpvueCityPicker")]).then(r.bind(null,"0ba1"))},v={components:{mpvueCityPicker:m},data:function(){return{sexArr:d,qgArr:p,userpic:"",username:"",sex:0,qg:0,job:"",birthday:"",cityPickerValueDefault:[0,0,1],pickerText:""}},onLoad:function(){this.userpic=this.User.userinfo.userpic,this.username=this.User.userinfo.username,this.sex=this.User.userinfo.userinfo.sex||0,this.qg=this.User.userinfo.userinfo.qg||0,this.job=this.User.userinfo.userinfo.job||"请填写",this.birthday=this.User.userinfo.userinfo.birthday||"请填写",this.pickerText=this.User.userinfo.userinfo.path||"请填写"},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.pickerText=e.label},bindDateChange:function(e){this.birthday=e.target.value},changeimg:function(){var t=l(i.default.mark(function t(){var r,s,u,o,c,f,h,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.chooseImage({count:1,sizeType:["compressed"]});case 2:if(r=t.sent,s=a(r,2),s[0],u=s[1],u){t.next=8;break}return t.abrupt("return");case 8:return e.showLoading({title:"上传中...",mask:!1}),t.next=11,this.$http.upload("/edituserpic",{name:"userpic",filePath:u.tempFilePaths[0],token:!0,checkToken:!0});case 11:if(o=t.sent,c=a(o,2),f=c[0],h=c[1],console.log(n(h," at pages\\user-set-userinfo\\user-set-userinfo.vue:143")),l=JSON.parse(h.data),!f&&!l.errorCode){t.next=21;break}return e.showToast({title:l.msg?l.msg:"上传失败",icon:"none"}),e.hideLoading(),t.abrupt("return",!1);case 21:e.hideLoading(),e.showToast({title:"修改头像成功!"}),this.userpic=l.data,this.User.userinfo.userpic=this.userpic,e.setStorageSync("userinfo",this.User.userinfo);case 26:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),changeOne:function(t){var r=this,n=[];switch(t){case"sex":n=d;break;case"qg":n=p;break;case"job":n=b;break}e.showActionSheet({itemList:n,success:function(e){switch(t){case"sex":r.sex=e.tapIndex;break;case"qg":r.qg=e.tapIndex;break;case"job":r.job=n[e.tapIndex];break}}})},submit:function(){var t=l(i.default.mark(function t(){var r,n,u,o,c;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={name:this.username,sex:this.sex,qg:this.qg,job:this.job,birthday:this.birthday,path:this.pickerText,age:s.default.gettime.getAgeByBirthday(this.birthday)},t.next=3,this.$http.post("/edituserinfo",r,{token:!0,checkToken:!0});case 3:if(n=t.sent,u=a(n,2),o=u[0],c=u[1],this.$http.errorCheck(o,c)){t.next=9;break}return t.abrupt("return");case 9:e.showToast({title:"修改成功！"}),this.User.userinfo.username=this.username,this.User.userinfo.userinfo=r,e.setStorageSync("userinfo",this.User.userinfo);case 13:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)}}};t.default=v}).call(this,r("6e42")["default"],r("0de9")["default"])},a321:function(e,t,r){},b244:function(e,t,r){"use strict";r.r(t);var n=r("85fa"),i=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},ba45:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},s=[];r.d(t,"b",function(){return i}),r.d(t,"c",function(){return s}),r.d(t,"a",function(){return n})}},[["5680","common/runtime","common/vendor"]]]);
});
require('pages/user-set-userinfo/user-set-userinfo.js');
__wxRoute = 'pages/user-set-help/user-set-help';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-set-help/user-set-help.js';

define('pages/user-set-help/user-set-help.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-help/user-set-help"],{"13b2":function(e,n,t){"use strict";var u,c=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return c}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return u})},"1d00":function(e,n,t){"use strict";t.r(n);var u=t("b693"),c=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);n["default"]=c.a},"73ec":function(e,n,t){},"76f4":function(e,n,t){"use strict";(function(e){t("1133"),t("921b");u(t("66fd"));var n=u(t("7c26"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"7c26":function(e,n,t){"use strict";t.r(n);var u=t("13b2"),c=t("1d00");for(var o in c)"default"!==o&&function(e){t.d(n,e,function(){return c[e]})}(o);t("d7eb");var l,i=t("f0c5"),a=Object(i["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],l);n["default"]=a.exports},b693:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"2fbf"))},c=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"9388"))},o={components:{uniCollapse:u,uniCollapseItem:c},data:function(){return{list:[{title:"客服什么时候上线？",content:"123"},{title:"忘记账号/昵称/密码怎么办？",content:"111111111"},{title:"怎么搜索/查找/关注/取关用户？",content:"222222"}]}},methods:{openFeedback:function(){e.navigateTo({url:"/pages/user-feedback/user-feedback"})}}};n.default=o}).call(this,t("6e42")["default"])},d7eb:function(e,n,t){"use strict";var u=t("73ec"),c=t.n(u);c.a}},[["76f4","common/runtime","common/vendor"]]]);
});
require('pages/user-set-help/user-set-help.js');
__wxRoute = 'pages/user-set-about/user-set-about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-set-about/user-set-about.js';

define('pages/user-set-about/user-set-about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-set-about/user-set-about"],{"54c6":function(e,n,t){"use strict";(function(e){t("1133"),t("921b");u(t("66fd"));var n=u(t("676d"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"676d":function(e,n,t){"use strict";t.r(n);var u=t("e2ed"),c=t("e613");for(var o in c)"default"!==o&&function(e){t.d(n,e,function(){return c[e]})}(o);t("7ecb");var r,i=t("f0c5"),a=Object(i["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=a.exports},7798:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/home/home-list-item")]).then(t.bind(null,"8c06"))},c={components:{homeListItem:u},data:function(){return{list:[{icon:"",name:"新版本检测",clicktype:"",url:""},{icon:"",name:"财务提醒小秘书用户协议",clicktype:"",url:""}]}},methods:{}};n.default=c},"7ecb":function(e,n,t){"use strict";var u=t("c2cb"),c=t.n(u);c.a},c2cb:function(e,n,t){},e2ed:function(e,n,t){"use strict";var u,c=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return c}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return u})},e613:function(e,n,t){"use strict";t.r(n);var u=t("7798"),c=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);n["default"]=c.a}},[["54c6","common/runtime","common/vendor"]]]);
});
require('pages/user-set-about/user-set-about.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0b53":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");r(e("66fd"));var n=r(e("86aa"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"29eb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,n){return s(t)||a(t,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,n){var e=[],r=!0,i=!1,u=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(e.push(o.value),n&&e.length===n)break}catch(s){i=!0,u=s}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw u}}return e}function s(t){if(Array.isArray(t))return t}function c(t,n,e,r,i,u,o){try{var a=t[u](o),s=a.value}catch(c){return void e(c)}a.done?n(s):Promise.resolve(s).then(r,i)}function h(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var u=t.apply(n,e);function o(t){c(u,r,i,o,a,"next",t)}function a(t){c(u,r,i,o,a,"throw",t)}o(void 0)})}}var f=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"0772"))},l=function(){return Promise.all([e.e("common/vendor"),e.e("components/home/other-login")]).then(e.bind(null,"9f43"))},d={components:{uniStatusBar:f,otherLogin:l},data:function(){return{status:!1,disabled:!0,loading:!1,username:"",password:"",phone:"",checknum:"",codetime:0}},watch:{username:function(t){this.OnBtnChange()},password:function(t){this.OnBtnChange()},phone:function(t){this.OnBtnChange()},checknum:function(t){this.OnBtnChange()}},methods:{isPhone:function(){var t=/^1[34578]\d{9}$/;return t.test(this.phone)},getCheckNum:function(){var n=h(r.default.mark(function n(){var e,i,o,a,s,c=this;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!(this.codetime>0)){n.next=2;break}return n.abrupt("return");case 2:if(this.isPhone()){n.next=4;break}return n.abrupt("return",t.showToast({title:"请输入正确的手机号码",icon:"none"}));case 4:return n.next=6,this.$http.post("/user/sendcode",{phone:this.phone});case 6:if(e=n.sent,i=u(e,2),o=i[0],a=i[1],this.$http.errorCheck(o,a),30001!==a.data.errorCode){n.next=13;break}return n.abrupt("return");case 13:this.codetime=60,s=setInterval(function(){c.codetime--,c.codetime<1&&(clearInterval(s),c.codetime=0)},1e3);case 15:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),submit:function(){return this.status?this.isPhone()?this.User.login({url:"/user/phonelogin",data:{phone:this.phone,code:this.checknum}}):t.showToast({title:"请输入正确的手机号码",icon:"none"}):this.User.login({url:"/user/login",data:{username:this.username,password:this.password}})},initInput:function(){this.username="",this.password="",this.phone="",this.checknum=""},OnBtnChange:function(){this.username&&this.password||this.phone&&this.checknum?this.disabled=!1:this.disabled=!0},changeStatus:function(){this.initInput(),this.status=!this.status},back:function(){t.navigateBack({delta:1})}}};n.default=d}).call(this,e("6e42")["default"])},"31d6":function(t,n,e){"use strict";e.r(n);var r=e("29eb"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=i.a},"447c":function(t,n,e){},"808d":function(t,n,e){"use strict";var r,i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return r})},"86aa":function(t,n,e){"use strict";e.r(n);var r=e("808d"),i=e("31d6");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("a885");var o,a=e("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=s.exports},a885:function(t,n,e){"use strict";var r=e("447c"),i=e.n(r);i.a}},[["0b53","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/user-space/user-space';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-space/user-space.js';

define('pages/user-space/user-space.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-space/user-space"],{"0704":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");i(n("66fd"));var e=i(n("3f7f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0ddd":function(t,e,n){"use strict";n.r(e);var i=n("f489"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"1d02":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return i})},"3f7f":function(t,e,n){"use strict";n.r(e);var i=n("1d02"),r=n("0ddd");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);n("7fab");var a,u=n("f0c5"),o=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=o.exports},"7fab":function(t,e,n){"use strict";var i=n("f0c1"),r=n.n(i);r.a},f0c1:function(t,e,n){},f489:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),s=a(n("6c04"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return h(t)||c(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var a,u=t[Symbol.iterator]();!(i=(a=u.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(o){r=!0,s=o}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw s}}return n}function h(t){if(Array.isArray(t))return t}function f(t,e,n,i,r,s,a){try{var u=t[s](a),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(i,r)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function a(t){f(s,i,r,a,u,"next",t)}function u(t){f(s,i,r,a,u,"throw",t)}a(void 0)})}}var l=function(){return n.e("components/user-space/user-space-head").then(n.bind(null,"3619"))},p=function(){return n.e("components/home/home-data").then(n.bind(null,"107a"))},m=function(){return n.e("components/index/swiper-tab-head").then(n.bind(null,"bb11"))},b=function(){return n.e("components/user-space/user-space-userinfo").then(n.bind(null,"656b"))},g=function(){return n.e("components/common/common-list").then(n.bind(null,"0335"))},v=function(){return n.e("components/common/load-more").then(n.bind(null,"f349"))},x=function(){return n.e("components/user-space/user-space-popup").then(n.bind(null,"230c"))},w=function(){return n.e("components/common/no-thing").then(n.bind(null,"d4b7"))},k={components:{userSpaceHead:l,homeData:p,swiperTabHead:m,userSpaceUserinfo:b,commonList:g,loadMore:v,userSpacePopup:x,noThing:w},data:function(){return{show:!1,userinfo:{bgimg:1,userpic:"",username:"",sex:0,age:20,isguanzhu:!1,regtime:"",id:0,birthday:"",job:"",path:"",qg:""},spacedata:[{name:"获赞",num:0},{name:"关注",num:0},{name:"粉丝",num:0}],tabIndex:0,tabBars:[{name:"主页",id:"zhuye"},{name:"帖子",id:"qiushi"},{name:"动态",id:"dongtai"}],tablist:[{},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1},{loadtext:"上拉加载更多",list:[],page:1,firstload:!1}]}},onReachBottom:function(){this.loadmore()},onNavigationBarButtonTap:function(t){0==t.index&&this.togleShow()},onLoad:function(t){this.__init(t.userid)},methods:{__init:function(t){this.getUserInfo(t),this.getCounts(t)},getUserInfo:function(){var t=d(r.default.mark(function t(e){var n,i,a,o,c,h,f,d,l,p,m;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=["不限","男","女"],i=["秘密","未婚","已婚"],e!=this.User.userinfo.id){t.next=9;break}o=this.User.userinfo,a=!0,c=!1,h=!1,t.next=21;break;case 9:return t.next=11,this.$http.post("/getuserinfo",{user_id:e},{token:!0});case 11:if(f=t.sent,d=u(f,2),l=d[0],p=d[1],this.$http.errorCheck(l,p)){t.next=17;break}return t.abrupt("return");case 17:o=p.data.data,a=!1,c=!!p.data.data.fens.length,h=!!p.data.data.blacklist.length;case 21:m=o.create_time?s.default.gettime.dateFormat(new Date(1e3*o.create_time),"{Y}-{MM}-{DD}"):"未知",this.userinfo={isme:a,bgimg:1,userpic:o.userpic,username:o.username,sex:n[o.userinfo.sex]||"不限",age:o.userinfo.age,isguanzhu:c,isblack:h,regtime:m,id:o.id,birthday:o.userinfo.birthday||"未知",job:o.userinfo.job||"未知",path:o.userinfo.path||"未知",qg:i[o.userinfo.qg]||"秘密"};case 23:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getCounts:function(){var t=d(r.default.mark(function t(e){var n,i,s,a,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e!=this.User.userinfo.id){t.next=4;break}n=this.User.counts,t.next=13;break;case 4:return t.next=6,this.$http.get("/user/getcounts/"+e);case 6:if(i=t.sent,s=u(i,2),a=s[0],o=s[1],this.$http.errorCheck(a,o)){t.next=12;break}return t.abrupt("return");case 12:n=o.data.data;case 13:n&&(this.spacedata[0].num=n.post_count,this.spacedata[1].num=n.withfollow_count,this.spacedata[2].num=n.withfen_count);case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),updateGuanZhu:function(e){this.userinfo.isguanzhu=e;var n={type:"guanzhu",userid:this.userinfo.id,data:e};t.$emit("updateData",n)},togleShow:function(){if(this.userinfo.id===this.User.userinfo.id)return this.User.navigate({url:"/pages/user-set-userinfo/user-set-userinfo"});this.show=!this.show},lahei:function(){var e=d(r.default.mark(function e(){var n,i,s,a,o,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"Loading...",mask:!1}),n=this.userinfo.isblack?"/removeblack":"/addblack",i=this.userinfo.isblack?"移除黑名单":"加入黑名单",e.next=5,this.$http.post(n,{id:this.userinfo.id},{token:!0,checkToken:!0,checkAuth:!0});case 5:if(s=e.sent,a=u(s,2),o=a[0],c=a[1],this.$http.errorCheck(o,c)){e.next=12;break}return t.hideLoading(),e.abrupt("return",this.togleShow());case 12:t.hideLoading(),t.showToast({title:i+"成功"}),this.userinfo.isblack=!this.userinfo.isblack,this.togleShow();case 16:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),goToChat:function(){var t={userid:this.userinfo.id,userpic:this.userinfo.userpic,username:this.userinfo.username};this.User.navigate({url:"/pages/user-chat/user-chat?userinfo="+JSON.stringify(t)}),this.togleShow()},loadmore:function(){"上拉加载更多"==this.tablist[this.tabIndex].loadtext&&(this.tablist[this.tabIndex].loadtext="加载中...",this.tablist[this.tabIndex].page++,this.getList())},tabtap:function(t){this.tabIndex=t,this.tablist[t].firstload||0===t||this.getList()},getList:function(){var t=d(r.default.mark(function t(){var e,n,s,a,o,c,h,f,d,l;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.tablist[this.tabIndex].page,n=this.userinfo.isme?"/user/post/".concat(e):"/user/".concat(this.userinfo.id,"/post/").concat(e),s=this.tabIndex,t.next=5,this.$http.get(n,{},{token:!0});case 5:if(a=t.sent,o=u(a,2),c=o[0],h=o[1],console.log(i(h," at pages\\user-space\\user-space.vue:274")),this.$http.errorCheck(c,h)){t.next=13;break}return this.tablist[s].firstload=!0,t.abrupt("return",this.tablist[s].loadtext="上拉加载更多");case 13:for(f=[],d=h.data.data.list,l=0;l<d.length;l++)f.push(this.__format(d[l]));return this.tablist[s].list=e>1?this.tablist[s].list.concat(f):f,this.tablist[s].firstload=!0,this.tablist[s].loadtext=d.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 20:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),__format:function(t){var e={userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},goodnum:t.ding_count,commentnum:t.comment_count,sharenum:t.sharenum,sex:t.user.userinfo.sex,age:t.user.userinfo.age};return t.user_id===this.User.userinfo.id&&(e.isguanzhu=!0),e}}};e.default=k}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["0704","common/runtime","common/vendor"]]]);
});
require('pages/user-space/user-space.js');
__wxRoute = 'pages/user-bind-phone/user-bind-phone';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-bind-phone/user-bind-phone.js';

define('pages/user-bind-phone/user-bind-phone.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-bind-phone/user-bind-phone"],{"0b33":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("6607"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"29f4":function(t,e,n){},6607:function(t,e,n){"use strict";n.r(e);var r=n("9e3e"),i=n("a0d9");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("b4db");var u,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=s.exports},"9e3e":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r})},a0d9:function(t,e,n){"use strict";n.r(e);var r=n("afcf"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a},afcf:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return s(t)||a(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(s){i=!0,o=s}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return n}function s(t){if(Array.isArray(t))return t}function c(t,e,n,r,i,o,u){try{var a=t[o](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,i)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function u(t){c(o,r,i,u,a,"next",t)}function a(t){c(o,r,i,u,a,"throw",t)}u(void 0)})}}var h={data:function(){return{isbind:!1,disabled:!0,loading:!1,phone:"",checknum:"",codetime:0}},onLoad:function(t){"false"!==t.phone&&t.phone&&"null"!==t.phone&&(this.isbind=!0,this.phone=t.phone)},watch:{phone:function(t){this.OnBtnChange()},checknum:function(t){this.OnBtnChange()}},methods:{isPhone:function(){var t=/^1[34578]\d{9}$/;return t.test(this.phone)},OnBtnChange:function(){this.phone&&this.checknum?this.disabled=!1:this.disabled=!0},getCheckNum:function(){var e=f(r.default.mark(function e(){var n,i,u,a,s,c=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.codetime>0)){e.next=2;break}return e.abrupt("return");case 2:if(this.isPhone()){e.next=4;break}return e.abrupt("return",t.showToast({title:"请输入正确的手机号码",icon:"none"}));case 4:return e.next=6,this.$http.post("/user/sendcode",{phone:this.phone});case 6:if(n=e.sent,i=o(n,2),u=i[0],a=i[1],this.$http.errorCheck(u,a),30001!==a.data.errorCode){e.next=13;break}return e.abrupt("return");case 13:this.codetime=60,s=setInterval(function(){c.codetime--,c.codetime<1&&(clearInterval(s),c.codetime=0)},1e3);case 15:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),submit:function(){var e=f(r.default.mark(function e(){var n,i,u,a,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/user/bindphone",{phone:this.phone,code:this.checknum},{token:!0,checkToken:!0});case 2:if(n=e.sent,i=o(n,2),u=i[0],a=i[1],this.$http.errorCheck(u,a)){e.next=8;break}return e.abrupt("return");case 8:this.isbind=!0,this.disabled=!1,t.showToast({title:"绑定成功！"}),s=a.data.data,"boolean"===typeof s?this.User.userinfo.phone=this.phone:this.User.userinfo=this.User.__formatUserinfo(s),t.setStorageSync("userinfo",this.User.userinfo);case 14:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=h}).call(this,n("6e42")["default"])},b4db:function(t,e,n){"use strict";var r=n("29f4"),i=n.n(r);i.a}},[["0b33","common/runtime","common/vendor"]]]);
});
require('pages/user-bind-phone/user-bind-phone.js');
__wxRoute = 'pages/user-safe/user-safe';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-safe/user-safe.js';

define('pages/user-safe/user-safe.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-safe/user-safe"],{"0439":function(e,n,t){},"6c77":function(e,n,t){"use strict";var r=t("0439"),i=t.n(r);i.a},"75ab":function(e,n,t){"use strict";(function(e){t("1133"),t("921b");r(t("66fd"));var n=r(t("8536"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"7d72":function(e,n,t){"use strict";t.r(n);var r=t("d012"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);n["default"]=i.a},8536:function(e,n,t){"use strict";t.r(n);var r=t("a0b6"),i=t("7d72");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("6c77");var s,o=t("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);n["default"]=u.exports},a0b6:function(e,n,t){"use strict";var r,i=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",function(){return i}),t.d(n,"c",function(){return a}),t.d(n,"a",function(){return r})},d012:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return u(e)||o(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}function c(e,n,t,r,i,a,s){try{var o=e[a](s),u=o.value}catch(c){return void t(c)}o.done?n(u):Promise.resolve(u).then(r,i)}function d(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var a=e.apply(n,t);function s(e){c(a,r,i,s,o,"next",e)}function o(e){c(a,r,i,s,o,"throw",e)}s(void 0)})}}var l=function(){return Promise.all([t.e("common/vendor"),t.e("components/home/home-list-item")]).then(t.bind(null,"8c06"))},f={components:{homeListItem:l},data:function(){return{list:[]}},onShow:function(){this.__init()},methods:{__init:function(){var e=d(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.list=[{icon:"",name:"手机号",clicktype:"navigateTo",url:"../../pages/user-bind-phone/user-bind-phone?phone="+this.User.userinfo.phone||!1,data:this.User.userinfo.phone||"未绑定"},{icon:"",name:"登录密码",clicktype:"navigateTo",url:"../../pages/user-set-repassword/user-set-repassword?password="+this.User.userinfo.password,data:this.User.userinfo.password?"修改密码":"未设置"},{icon:"",name:"邮箱绑定",clicktype:"navigateTo",url:"../../pages/user-set-email/user-set-email?email="+this.User.userinfo.email||!1,data:this.User.userinfo.email||"未绑定"}],n=[{icon:"",name:"微信账号",clicktype:"bind",url:"",data:"未绑定",provider:"weixin"},{icon:"",name:"微博账号",clicktype:"bind",url:"",data:"未绑定",provider:"sinaweibo"},{icon:"",name:"QQ账号",clicktype:"bind",url:"",data:"未绑定",provider:"qq"}],this.User.userbind){e.next=5;break}return e.next=5,this.User.getUserBind();case 5:n[0].data=this.User.userbind.weixin?this.User.userbind.weixin.nickname:"未绑定",n[1].data=this.User.userbind.sinaweibo?this.User.userbind.sinaweibo.nickname:"未绑定",n[2].data=this.User.userbind.qq?this.User.userbind.qq.nickname:"未绑定",this.list=[].concat(a(this.list),n);case 9:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};n.default=f}},[["75ab","common/runtime","common/vendor"]]]);
});
require('pages/user-safe/user-safe.js');
__wxRoute = 'pages/user-feedback/user-feedback';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-feedback/user-feedback.js';

define('pages/user-feedback/user-feedback.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-feedback/user-feedback"],{1040:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),i=a(n("6c04"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return c(t)||u(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t,e){return d(t)||h(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function h(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(u){i=!0,a=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function d(t){if(Array.isArray(t))return t}function p(t,e,n,r,i,a,o){try{var s=t[a](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function m(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){p(a,r,i,o,s,"next",t)}function s(t){p(a,r,i,o,s,"throw",t)}o(void 0)})}}var g=function(){return n.e("components/user-chat/user-chat-bottom").then(n.bind(null,"34d3"))},v=function(){return n.e("components/user-chat/user-chat-list").then(n.bind(null,"d6f9"))},y={components:{userChatBottom:g,userChatList:v},data:function(){return{scrollTop:0,style:{contentH:0,itemH:0},list:[],page:1,loadtext:"点击加载更多"}},onReady:function(){this.getdata(),this.initdata()},methods:{initdata:function(){try{var e=t.getSystemInfoSync();this.style.contentH=e.windowHeight-t.upx2px(120)}catch(n){}},loadmore:function(){"点击加载更多"==this.loadtext&&(this.loadtext="加载中...",this.page++,this.getdata())},pageToBottom:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=t.createSelectorQuery().in(this),i=r.selectAll(".chat-item");this.$nextTick(function(){i.fields({size:!0},function(t){if(t){if(n)for(var r=0;r<t.length;r++)e.style.itemH+=t[r].height;else e.style.itemH+=t[t.length-1].height;e.scrollTop=e.style.itemH>e.style.contentH?e.style.itemH:0}}).exec()})},getdata:function(){var t=m(r.default.mark(function t(){var e,n,a,s,u,c,f,h,d;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="/feedbacklist/".concat(this.page),t.next=3,this.$http.get(e,{},{token:!0,checkToken:!0});case 3:if(n=t.sent,a=l(n,2),s=a[0],u=a[1],this.$http.errorCheck(s,u)){t.next=9;break}return t.abrupt("return");case 9:for(c=u.data.data.list,f=[],h=0;h<c.length;h++)c[h].from_id!=this.User.userinfo.id&&c[h].to_id!=this.User.userinfo.id||(d=c[h].from_id==this.User.userinfo.id,f.push({isme:d,userpic:d?this.User.userinfo.userpic:"../../static/demo/userpic/11.jpg",type:"text",data:c[h].data,time:c[h].create_time,gstime:i.default.gettime.getChatTime(c[h].create_time,h>0?c[h-1].create_time:0)}));this.loadtext=c.length<10?"没有更多数据了":"点击加载更多",f.reverse(),this.list=[].concat(f,o(this.list)),1===this.page&&this.list.length>0&&this.pageToBottom(!0);case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),submit:function(){var e=m(r.default.mark(function e(n){var a,o,s,u,c,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/feedback",{data:n},{token:!0,checkToken:!0});case 2:if(a=e.sent,o=l(a,2),s=o[0],u=o[1],this.$http.errorCheck(s,u)){e.next=8;break}return e.abrupt("return");case 8:c=(new Date).getTime(),f=i.default.gettime.getChatTime(c,this.list.length>0?this.list[this.list.length-1].time:0),this.list.push({isme:!0,userpic:this.User.userinfo.userpic,type:"text",data:n,time:c,gstime:f}),this.pageToBottom(),t.showToast({title:"反馈成功"});case 13:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}()}};e.default=y}).call(this,n("6e42")["default"])},"380a":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("8aa0"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5c2f":function(t,e,n){"use strict";var r=n("ec66"),i=n.n(r);i.a},"76db":function(t,e,n){"use strict";n.r(e);var r=n("1040"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"8aa0":function(t,e,n){"use strict";n.r(e);var r=n("8d4c"),i=n("76db");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("5c2f");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=u.exports},"8d4c":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},ec66:function(t,e,n){}},[["380a","common/runtime","common/vendor"]]]);
});
require('pages/user-feedback/user-feedback.js');
__wxRoute = 'pages/user-history/user-history';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user-history/user-history.js';

define('pages/user-history/user-history.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-history/user-history"],{"0004":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("40cf"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"2e4b":function(t,n,e){"use strict";e.r(n);var i=e("36e2"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},"36e2":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"abdd"))},o=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"3783"))},u=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},r={components:{uniList:i,uniListItem:o,noThing:u},data:function(){return{firstload:!1,list:[]}},onLoad:function(){this.getList()},onNavigationBarButtonTap:function(){var n=this;t.showModal({title:"提示",content:"是否要清除浏览历史？",success:function(e){e.confirm&&(n.User.clearHistory(),n.list=[],t.showToast({title:"清除成功"}))}})},methods:{getList:function(){try{var n=t.getStorageSync("HistoryList_"+this.User.userinfo.id);this.list=n?JSON.parse(n):[]}catch(e){t.showToast({title:"加载失败~",icon:"none"})}this.firstload=!0},openDetail:function(n){t.navigateTo({url:"/pages/detail/detail?detailData="+JSON.stringify(n)})}}};n.default=r}).call(this,e("6e42")["default"])},"40cf":function(t,n,e){"use strict";e.r(n);var i=e("c36f"),o=e("2e4b");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);var r,s=e("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=a.exports},c36f:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})}},[["0004","common/runtime","common/vendor"]]]);
});
require('pages/user-history/user-history.js');
__wxRoute = 'pages/bill/bill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/bill.js';

define('pages/bill/bill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/bill"],{6227:function(t,e,n){"use strict";n.r(e);var r=n("ce7b"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"62db":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("73f6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"73f6":function(t,e,n){"use strict";n.r(e);var r=n("78bb"),a=n("6227");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("f79c");var c,u=n("f0c5"),o=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=o.exports},"78bb":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return r})},"887f":function(t,e,n){},ce7b:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return s(t)||o(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)if(n.push(c.value),e&&n.length===e)break}catch(o){a=!0,i=o}finally{try{r||null==u["return"]||u["return"]()}finally{if(a)throw i}}return n}function s(t){if(Array.isArray(t))return t}function l(t,e,n,r,a,i,c){try{var u=t[i](c),o=u.value}catch(s){return void n(s)}u.done?e(o):Promise.resolve(o).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function c(t){l(i,r,a,c,u,"next",t)}function u(t){l(i,r,a,c,u,"throw",t)}c(void 0)})}}var d=["支出","收入","报销","信用卡借贷"],h=["现金","支付宝","微信","信用卡"],p={data:function(){return{swiperheight:500,tabIndex:0,account_typeArr:h,remark:"",typeArr:d,type:0,account_type:0,category_id:0,time:"",category:{id:0,title:"",range:[],list:[]}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(t){this.getCategory()},methods:{getCategory:function(){var t=f(a.default.mark(function t(){var e,n,r,i,u,o,s,l;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/category");case 3:if(e=t.sent,n=c(e,2),r=n[0],i=n[1],this.$http.errorCheck(r,i)){t.next=9;break}return t.abrupt("return");case 9:for(u=i.data.data.list,o=[],s=[],l=0;l<u.length;l++)o.push(u[l].name),s.push({id:u[l].id,name:u[l].name});this.category.range=o,this.category.list=u,t.next=19;break;case 16:return t.prev=16,t.t0=t["catch"](0),t.abrupt("return");case 19:case"end":return t.stop()}},t,this,[[0,16]])}));function e(){return t.apply(this,arguments)}return e}(),changeCategory:function(e){this.category.id=this.category.list[e.target.value].id,console.log(t(this.category.id," at pages\\bill\\bill.vue:116")),this.category.title=this.category.list[e.target.value].name},submit:function(){var e=f(a.default.mark(function e(){var n,i,u,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r.showLoading({title:"发布中...",mask:!0}),e.prev=1,e.next=4,this.$http.post("/record/add",{money:this.money,type:this.type,account_type:this.account_type,time:this.time,category_id:this.category.id,remark:this.remark},{token:!0,checkToken:!0,checkAuth:!0});case 4:if(n=e.sent,i=c(n,2),u=i[0],o=i[1],this.money){e.next=10;break}return e.abrupt("return",r.showToast({title:"请输入金额",icon:"none"}));case 10:if(this.category.id){e.next=12;break}return e.abrupt("return",r.showToast({title:"请选择记账分类",icon:"none"}));case 12:if(this.time){e.next=14;break}return e.abrupt("return",r.showToast({title:"请选择记账时间",icon:"none"}));case 14:if(this.$http.errorCheck(u,o)){e.next=16;break}return e.abrupt("return",r.hideLoading());case 16:r.hideLoading(),r.showToast({title:"发布成功！"}),r.$emit("updateData",{type:"updateList",data:o.data.data.detail}),console.log(t(o.data.data," at pages\\bill\\bill.vue:158")),r.navigateBack({delta:1}),e.next=26;break;case 23:return e.prev=23,e.t0=e["catch"](1),e.abrupt("return");case 26:case"end":return e.stop()}},e,this,[[1,23]])}));function n(){return e.apply(this,arguments)}return n}(),tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},bindDateChange:function(t){this.time=t.target.value},changeOne:function(t){var e=this,n=[];switch(t){case"type":n=d;break;case"account_type":n=h;break}r.showActionSheet({itemList:n,success:function(n){switch(t){case"type":e.type=n.tapIndex;break;case"account_type":e.account_type=n.tapIndex;break}}})},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)}}};e.default=p}).call(this,n("0de9")["default"],n("6e42")["default"])},f79c:function(t,e,n){"use strict";var r=n("887f"),a=n.n(r);a.a}},[["62db","common/runtime","common/vendor"]]]);
});
require('pages/bill/bill.js');
__wxRoute = 'pages/chart/chart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chart/chart.js';

define('pages/chart/chart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chart/chart"],{4052:function(e,t,a){"use strict";a.r(t);var r=a("5526"),n=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);t["default"]=n.a},"4a60":function(e,t,a){"use strict";(function(e){a("1133"),a("921b");r(a("66fd"));var t=r(a("a2e3"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},5526:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("a34a")),n=i(a("a18c"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return o(e)||c(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done);r=!0)if(a.push(s.value),t&&a.length===t)break}catch(c){n=!0,i=c}finally{try{r||null==u["return"]||u["return"]()}finally{if(n)throw i}}return a}function o(e){if(Array.isArray(e))return e}function h(e,t,a,r,n,i,s){try{var u=e[i](s),c=u.value}catch(o){return void a(o)}u.done?t(c):Promise.resolve(c).then(r,n)}function d(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var i=e.apply(t,a);function s(e){h(i,r,n,s,u,"next",e)}function u(e){h(i,r,n,s,u,"throw",e)}s(void 0)})}}var f,l=function(){return a.e("components/charts/chart-nav-bar").then(a.bind(null,"bd38"))},p=function(){return a.e("components/index/swiper-tab-head").then(a.bind(null,"bb11"))},v=function(){return a.e("components/common/no-thing").then(a.bind(null,"d4b7"))},b=function(){return Promise.all([a.e("common/vendor"),a.e("components/stan-ucharts/LineChart")]).then(a.bind(null,"4318"))},g=null,x={name:"Index",components:{swiperTabHead:p,noThing:v,LineChart:b,chartNavBar:l},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,serverZCData:"",ServerSRData:"",ServerBXData:"",ServerXYKData:"",swiperheight:800,tabIndex:0,tabBars:[{name:"支出",id:"zhichu"},{name:"收入",id:"shouru"},{name:"收支汇总",id:"sz"},{name:"报销",id:"baoxiao"},{name:"信用卡借贷",id:"jiedai"}],lineData2:{categories:[],series:[]},zclineData:{categories:[],series:[]},srlineData:{categories:[],series:[]},bxlineData:{categories:[],series:[]},xyklineData:{categories:[],series:[]}}},onLoad:function(){f=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(500),this.getServerZCData(),this.getServerSRData(),this.getServerBXData(),this.getServerXYKData(),this.getServerhzData()},onShow:function(){this.userid=this.User.userinfo.id},methods:{tabtap:function(e){this.tabIndex=e},tabChange:function(e){this.tabIndex=e.detail.current},getServerZCData:function(){var e=d(r.default.mark(function e(){var t,a,n,i,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/user/getzccharts/"+this.User.userinfo.id);case 2:if(t=e.sent,a=s(t,2),n=a[0],i=a[1],this.$http.errorCheck(n,i)){e.next=8;break}return e.abrupt("return");case 8:i.data.data,u={series:[]},u.series=i.data.data.series,f.showPie("canvasPie",u);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getServerSRData:function(){var e=d(r.default.mark(function e(){var t,a,n,i,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/user/getsrcharts/"+this.User.userinfo.id);case 2:if(t=e.sent,a=s(t,2),n=a[0],i=a[1],this.$http.errorCheck(n,i)){e.next=8;break}return e.abrupt("return");case 8:i.data.data,u={series:[]},u.series=i.data.data.series,f.showPie("canvasPie1",u);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getServerBXData:function(){var e=d(r.default.mark(function e(){var t,a,n,i,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/user/getbxcharts/"+this.User.userinfo.id);case 2:if(t=e.sent,a=s(t,2),n=a[0],i=a[1],this.$http.errorCheck(n,i)){e.next=8;break}return e.abrupt("return");case 8:i.data.data,u={series:[]},u.series=i.data.data.series,f.showPie("canvasPie2",u);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getServerXYKData:function(){var e=d(r.default.mark(function e(){var t,a,n,i,u;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/user/getxykcharts/"+this.User.userinfo.id);case 2:if(t=e.sent,a=s(t,2),n=a[0],i=a[1],this.$http.errorCheck(n,i)){e.next=8;break}return e.abrupt("return");case 8:i.data.data,u={series:[]},u.series=i.data.data.series,f.showPie("canvasPie3",u);case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getServerhzData:function(){var e=d(r.default.mark(function e(){var t,a,n,i,u,c,o,h,d,f;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/user/getzhoucharts/"+this.User.userinfo.id);case 2:if(t=e.sent,a=s(t,2),n=a[0],i=a[1],this.$http.errorCheck(n,i)){e.next=8;break}return e.abrupt("return");case 8:u=i.data.data.categories,c=i.data.data.series,o=i.data.data.sr_series,h=i.data.data.zc_series,d=i.data.data.bx_series,f=i.data.data.xyk_series,this.lineData2.categories=u,this.lineData2.series=c,this.zclineData.categories=u,this.zclineData.series=h,this.srlineData.categories=u,this.srlineData.series=o,this.bxlineData.categories=u,this.bxlineData.series=d,this.xyklineData.categories=u,this.xyklineData.series=f;case 24:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),showPie:function(e,t){g=new n.default({$this:f,canvasId:e,type:"pie",fontSize:11,legend:!0,background:"#FFFFFF",pixelRatio:f.pixelRatio,series:t.series,animation:!0,width:f.cWidth*f.pixelRatio,height:f.cHeight*f.pixelRatio,dataLabel:!0,extra:{pie:{lableWidth:15}}})},touchPie:function(e){g.showToolTip(e,{format:function(e){return e.name+":"+e.data+"元"}})}}};t.default=x}).call(this,a("6e42")["default"])},7028:function(e,t,a){"use strict";var r,n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return n}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return r})},"9eca":function(e,t,a){},a2e3:function(e,t,a){"use strict";a.r(t);var r=a("7028"),n=a("4052");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("ab1d");var s,u=a("f0c5"),c=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);t["default"]=c.exports},ab1d:function(e,t,a){"use strict";var r=a("9eca"),n=a.n(r);n.a}},[["4a60","common/runtime","common/vendor"]]]);
});
require('pages/chart/chart.js');
__wxRoute = 'pages/remind/remind';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/remind/remind.js';

define('pages/remind/remind.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remind/remind"],{"10ec":function(n,e,t){"use strict";var r=t("1776"),i=t.n(r);i.a},1776:function(n,e,t){},"2a8f":function(n,e,t){"use strict";t.r(e);var r=t("5c88"),i=t("f32e");for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);t("10ec");var a,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports},"5c88":function(n,e,t){"use strict";var r,i=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"b",function(){return i}),t.d(e,"c",function(){return u}),t.d(e,"a",function(){return r})},cca9:function(n,e,t){"use strict";(function(n){t("1133"),t("921b");r(t("66fd"));var e=r(t("2a8f"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},dd29:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){return Promise.all([t.e("common/vendor"),t.e("components/Li-Calendar/Li-Calendar")]).then(t.bind(null,"1d0b"))},i={components:{Calendar:r},props:{homeinfo:Object},data:function(){return{dateIndex:1,rangeMode:!1,currentTime:"",title:"Hello",dateStart:"2020-1-1",dateEnd:"2020-12-30"}},onShow:function(){this.userid=this.User.userinfo.id},methods:{scroll:function(n){},dayChange:function(n){},monthChange:function(n){},addremind:function(){n.navigateTo({url:"../../pages/remind/CreateRemind"})},goremind:function(){this.User.navigate({url:"../../pages/remind/remindgl?userid="+this.userid})}}};e.default=i}).call(this,t("6e42")["default"])},f32e:function(n,e,t){"use strict";t.r(e);var r=t("dd29"),i=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,function(){return r[n]})}(u);e["default"]=i.a}},[["cca9","common/runtime","common/vendor"]]]);
});
require('pages/remind/remind.js');
__wxRoute = 'pages/post-nav/post-nav';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/post-nav/post-nav.js';

define('pages/post-nav/post-nav.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/post-nav/post-nav"],{1685:function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("1f9f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"1f9f":function(t,n,e){"use strict";e.r(n);var i=e("986e"),a=e("b8c2");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);var r,u=e("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=o.exports},"986e":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return i})},b8c2:function(t,n,e){"use strict";e.r(n);var i=e("f5e0"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},f5e0:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,n){return o(t)||u(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,n){var e=[],i=!0,a=!1,s=void 0;try{for(var r,u=t[Symbol.iterator]();!(i=(r=u.next()).done);i=!0)if(e.push(r.value),n&&e.length===n)break}catch(o){a=!0,s=o}finally{try{i||null==u["return"]||u["return"]()}finally{if(a)throw s}}return e}function o(t){if(Array.isArray(t))return t}function c(t,n,e,i,a,s,r){try{var u=t[s](r),o=u.value}catch(c){return void e(c)}u.done?n(o):Promise.resolve(o).then(i,a)}function d(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var s=t.apply(n,e);function r(t){c(s,i,a,r,u,"next",t)}function u(t){c(s,i,a,r,u,"throw",t)}r(void 0)})}}var l=function(){return e.e("components/index/index-list").then(e.bind(null,"3661"))},f=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},p=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},m={components:{indexList:l,swiperTabHead:f,loadMore:h,noThing:p},data:function(){return{swiperheight:500,tabIndex:0,tabBars:[],newslist:[]}},onLoad:function(){var n=this;t.getSystemInfo({success:function(e){var i=e.windowHeight-t.upx2px(100);n.swiperheight=i}}),this.getNav(),t.$on("updateData",this.updateData)},onNavigationBarSearchInputClicked:function(){t.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(t){switch(t.index){case 1:this.User.navigate({url:"../add-input/add-input"});break}},methods:{updateData:function(t){switch(t.type){case"guanzhu":this.updateGuanZhu(t);break;case"support":this.updateSupport(t);break;case"updateList":this.updateList(t);break;case"updateComment":this.updateComment(t);break}},updateComment:function(t){var n=this.newslist[this.tabIndex].list.find(function(n){return n.id===t.post_id});n&&n.commentnum++},updateGuanZhu:function(t){this.newslist[this.tabIndex].list.forEach(function(n,e){n.userid===t.userid&&(n.isguanzhu=t.data)})},updateSupport:function(t){var n=this.newslist[this.tabIndex].list.find(function(n){return n.id===t.post_id});if(n){var e=n.infonum.index;n.infonum.index="ding"==t.do?1:2,0!==e&&(1==e?n.infonum.dingnum--:n.infonum.cainum--),0!==n.infonum.index&&(1==n.infonum.index?n.infonum.dingnum++:n.infonum.cainum++)}},updateList:function(t){var n=this.tabBars.findIndex(function(n){return n.id===t.post_class_id});n>-1&&this.newslist[n].list.push(this.__format(t))},getNav:function(){var t=d(i.default.mark(function t(){var n,e,a,r,u,o,c,d;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/postclass");case 2:if(n=t.sent,e=s(n,2),a=e[0],r=e[1],this.$http.errorCheck(a,r)){t.next=8;break}return t.abrupt("return");case 8:for(u=r.data.data.list,o=[],c=[],d=0;d<u.length;d++)o.push({id:u[d].id,name:u[d].classname}),c.push({loadtext:"上拉加载更多",list:[],page:1,firstload:!1});this.tabBars=o,this.newslist=c,this.tabBars.length>0&&this.getList();case 15:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getList:function(){var t=d(i.default.mark(function t(){var n,e,a,r,u,o,c,d,l,f,h=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.tabIndex,e="/postclass/".concat(this.tabBars[this.tabIndex].id,"/post/").concat(this.newslist[this.tabIndex].page),t.next=4,this.$http.get(e,{},{token:!0});case 4:if(a=t.sent,r=s(a,2),u=r[0],o=r[1],c=this.$http.errorCheck(u,o,function(){h.newslist[n].loadtext="上拉加载更多"},function(){h.newslist[n].loadtext="上拉加载更多"}),c){t.next=11;break}return t.abrupt("return");case 11:for(d=[],l=o.data.data.list,f=0;f<l.length;f++)d.push(this.__format(l[f]));return this.newslist[n].list=this.newslist[n].page>1?this.newslist[n].list.concat(d):d,this.newslist[n].firstload=!0,l.length<10?this.newslist[n].loadtext="没有更多数据了":this.newslist[n].loadtext="上拉加载更多",t.abrupt("return");case 18:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t){return{userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},commentnum:t.comment_count,sharenum:t.sharenum}},loadmore:function(t){"上拉加载更多"==this.newslist[t].loadtext&&(this.newslist[t].loadtext="加载中...",this.newslist[this.tabIndex].page++,this.getList())},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current,this.getList()}}};n.default=m}).call(this,e("6e42")["default"])}},[["1685","common/runtime","common/vendor"]]]);
});
require('pages/post-nav/post-nav.js');
__wxRoute = 'pages/remind/CreateRemind';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/remind/CreateRemind.js';

define('pages/remind/CreateRemind.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remind/CreateRemind"],{2122:function(t,e,n){"use strict";n.r(e);var r=n("b289"),i=n("4d2b");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("38ca");var u,c=n("f0c5"),o=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=o.exports},"38ca":function(t,e,n){"use strict";var r=n("97d5"),i=n.n(r);i.a},"3c49":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("2122"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4d2b":function(t,e,n){"use strict";n.r(e);var r=n("7ac4"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"7ac4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return o(t)||c(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done);r=!0)if(n.push(u.value),e&&n.length===e)break}catch(o){i=!0,a=o}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw a}}return n}function o(t){if(Array.isArray(t))return t}function s(t,e,n,r,i,a,u){try{var c=t[a](u),o=c.value}catch(s){return void n(s)}c.done?e(o):Promise.resolve(o).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function u(t){s(a,r,i,u,c,"next",t)}function c(t){s(a,r,i,u,c,"throw",t)}u(void 0)})}}var f=["支出提醒","收入提醒","事务提醒","信用卡还贷提醒"],m=["开始时","提前1个小时","提前1天","提前2天"],h={data:function(){return{remind_typeArr:f,type_timeArr:m,type_time:0,remind_type:0,remind_time:"",remind_name:"",remind_nr:"",remind:0}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{bindDateChange:function(t){this.remind_time=t.target.value},changeOne:function(e){var n=this,r=[];switch(e){case"remind_type":r=f;break;case"type_time":r=m;break}t.showActionSheet({itemList:r,success:function(t){switch(e){case"remind_type":n.remind_type=t.tapIndex;break;case"type_time":n.type_time=t.tapIndex;break}}})},submit:function(){var e=d(r.default.mark(function e(){var n,i,u,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"发布中...",mask:!0}),e.prev=1,e.next=4,this.$http.post("/remind/add",{remind_name:this.remind_name,remind_nr:this.remind_nr,remind_time:this.remind_time,remind_type:this.remind_type,type_time:this.type_time,remind:this.remind},{token:!0,checkToken:!0,checkAuth:!0});case 4:if(n=e.sent,i=a(n,2),u=i[0],c=i[1],this.remind_name){e.next=10;break}return e.abrupt("return",t.showToast({title:"请输入提醒名称",icon:"none"}));case 10:if(this.remind_time){e.next=12;break}return e.abrupt("return",t.showToast({title:"提醒时间不能为空",icon:"none"}));case 12:if(this.$http.errorCheck(u,c)){e.next=14;break}return e.abrupt("return",t.hideLoading());case 14:t.hideLoading(),t.showToast({title:"发布成功！"}),this.isget=!0,t.$emit("updateData",{type:"updateList",data:c.data.data.detail}),t.navigateBack({delta:1}),e.next=24;break;case 21:return e.prev=21,e.t0=e["catch"](1),e.abrupt("return");case 24:case"end":return e.stop()}},e,this,[[1,21]])}));function n(){return e.apply(this,arguments)}return n}(),__format:function(t){var e={userid:t.user.id,userpic:t.user.userpic,username:t.user.username,isguanzhu:!!t.user.fens.length,id:t.id,title:t.title,type:"img",titlepic:t.titlepic,video:!1,path:t.path,share:!!t.share,infonum:{index:t.support.length>0?t.support[0].type+1:0,dingnum:t.ding_count,cainum:t.cai_count},goodnum:t.ding_count,commentnum:t.comment_count,sharenum:t.sharenum};return t.user_id===this.User.userinfo.id&&(e.isguanzhu=!0),e},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)}}};e.default=h}).call(this,n("6e42")["default"])},"97d5":function(t,e,n){},b289:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})}},[["3c49","common/runtime","common/vendor"]]]);
});
require('pages/remind/CreateRemind.js');
__wxRoute = 'pages/categorygl/categorygl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/categorygl/categorygl.js';

define('pages/categorygl/categorygl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/categorygl/categorygl"],{"0f5e":function(e,t,n){"use strict";var c,a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c})},4668:function(e,t,n){"use strict";var c=n("5e9d"),a=n.n(c);a.a},"4ac1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/home/home-list-item")]).then(n.bind(null,"8c06"))},a={components:{homeListItem:c},data:function(){return{list:[{icon:"bianji",name:"支出分类管理",clicktype:"navigateTo",url:"../categorygl/srcategorygl"},{icon:"licai",name:"收入分类管理",clicktype:"navigateTo",url:"../categorygl/zccategorygl"},{icon:"caifua",name:"账户分类管理",clicktype:"navigateTo",url:"../categorygl/zhcategorygl"}]}},methods:{}};t.default=a},"56f9":function(e,t,n){"use strict";(function(e){n("1133"),n("921b");c(n("66fd"));var t=c(n("d3a9"));function c(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"5e9d":function(e,t,n){},b1e3:function(e,t,n){"use strict";n.r(t);var c=n("4ac1"),a=n.n(c);for(var o in c)"default"!==o&&function(e){n.d(t,e,function(){return c[e]})}(o);t["default"]=a.a},d3a9:function(e,t,n){"use strict";n.r(t);var c=n("0f5e"),a=n("b1e3");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("4668");var r,u=n("f0c5"),i=Object(u["a"])(a["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);t["default"]=i.exports}},[["56f9","common/runtime","common/vendor"]]]);
});
require('pages/categorygl/categorygl.js');
__wxRoute = 'pages/creditcardgl/creditcardgl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/creditcardgl/creditcardgl.js';

define('pages/creditcardgl/creditcardgl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/creditcardgl/creditcardgl"],{"31a7":function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,n){return u(t)||s(t,n)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,n){var e=[],a=!0,r=!1,i=void 0;try{for(var c,d=t[Symbol.iterator]();!(a=(c=d.next()).done);a=!0)if(e.push(c.value),n&&e.length===n)break}catch(s){r=!0,i=s}finally{try{a||null==d["return"]||d["return"]()}finally{if(r)throw i}}return e}function u(t){if(Array.isArray(t))return t}function o(t,n,e,a,r,i,c){try{var d=t[i](c),s=d.value}catch(u){return void e(u)}d.done?n(s):Promise.resolve(s).then(a,r)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(a,r){var i=t.apply(n,e);function c(t){o(i,a,r,c,d,"next",t)}function d(t){o(i,a,r,c,d,"throw",t)}c(void 0)})}}var l=function(){return e.e("components/creditcard/card-list-item").then(e.bind(null,"5ee2"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},p=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},b={components:{loadMore:h,noThing:p,cardListItem:l},data:function(){return{userinfo:{userpic:"",username:"",id:0},swiperheight:500,tabIndex:0,cardList:[{loadtext:"上拉加载更多",page:1,firstload:!1,list:[]}]}},onLoad:function(t){this.__init(t.userid)},methods:{__init:function(n){this.getUserInfo(n),this.getList(),t.$on("updateData",this.updateData)},getUserInfo:function(){var t=f(r.default.mark(function t(n){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:["不限","男","女"],["秘密","未婚","已婚"],n==this.User.userinfo.id&&(info=this.User.userinfo,e=!0),this.userinfo={isme:e,id:info.id,userpic:info.userpic,username:info.username};case 4:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),loadmore:function(){"上拉加载更多"==this.cardList[this.tabIndex].loadtext&&(this.cardList[this.tabIndex].loadtext="加载中...",this.cardList[this.tabIndex].page++,this.getList())},updateData:function(t){switch(t.type){case"updateList":this.updateList(t);break;case"Card":this.updateCard(t);break;case"delCard":this.delCard(t);break}},getList:function(){var t=f(r.default.mark(function t(){var n,e,a,i,d,s,u,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.cardList[this.tabIndex].page,t.next=3,this.$http.get("/user/card/".concat(n),{},{token:!0});case 3:if(e=t.sent,a=c(e,2),i=a[0],d=a[1],this.$http.errorCheck(i,d)){t.next=9;break}return t.abrupt("return",this.cardList[this.tabIndex].loadtext="上拉加载更多");case 9:for(s=[],u=d.data.data.list,o=0;o<u.length;o++)s.push(this.__format(u[o]));return this.cardList[this.tabIndex].list=n>1?this.cardList[this.tabIndex].list.concat(s):s,this.cardList[this.tabIndex].firstload=!0,this.cardList[this.tabIndex].loadtext=u.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 16:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t){return{id:t.id,card:t.card,cardname:t.cardname,bank:t.bank,total:t.total,balance:t.balance,date_time:t.date_time}},updateList:function(t){var n=this.cardList.findIndex(function(n){return n.id===t.id});console.log(a(n," at pages\\creditcardgl\\creditcardgl.vue:142")),n>-1&&this.cardList[n].list.push(this.__format(t))},updateCard:function(t){this.cardList[this.tabIndex].list.forEach(function(n,e){n.id===t.id&&(n.card=t.data.card,n.cardname=t.data.cardname,n.balance=t.data.balance,n.date_time=t.data.date_time)})},delCard:function(t){var n=this;this.cardList[this.tabIndex].list.forEach(function(e,a){e.id===t.id&&n.cardList[n.tabIndex].list.splice(a,1)})},addcard:function(){t.navigateTo({url:"addcard"})}}};n.default=b}).call(this,e("6e42")["default"],e("0de9")["default"])},4193:function(t,n,e){"use strict";var a=e("ca2e"),r=e.n(a);r.a},adb3:function(t,n,e){"use strict";var a,r=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return a})},b44a:function(t,n,e){"use strict";e.r(n);var a=e("31a7"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},ca2e:function(t,n,e){},e296:function(t,n,e){"use strict";(function(t){e("1133"),e("921b");a(e("66fd"));var n=a(e("f255"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f255:function(t,n,e){"use strict";e.r(n);var a=e("adb3"),r=e("b44a");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("4193");var c,d=e("f0c5"),s=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);n["default"]=s.exports}},[["e296","common/runtime","common/vendor"]]]);
});
require('pages/creditcardgl/creditcardgl.js');
__wxRoute = 'pages/remind/remindgl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/remind/remindgl.js';

define('pages/remind/remindgl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remind/remindgl"],{"00d9":function(t,n,e){"use strict";e.r(n);var i=e("81a4"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a},"0886":function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return i})},"140e":function(t,n,e){"use strict";e.r(n);var i=e("0886"),r=e("00d9");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);var s,u=e("f0c5"),d=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=d.exports},"764e":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");i(e("66fd"));var n=i(e("140e"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"81a4":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n){return d(t)||u(t,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,n){var e=[],i=!0,r=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0)if(e.push(s.value),n&&e.length===n)break}catch(d){r=!0,a=d}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw a}}return e}function d(t){if(Array.isArray(t))return t}function o(t,n,e,i,r,a,s){try{var u=t[a](s),d=u.value}catch(o){return void e(o)}u.done?n(d):Promise.resolve(d).then(i,r)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var a=t.apply(n,e);function s(t){o(a,i,r,s,u,"next",t)}function u(t){o(a,i,r,s,u,"throw",t)}s(void 0)})}}var l=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},m=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},f=function(){return e.e("components/remind/remind-list-item").then(e.bind(null,"7d8b"))},h=function(){return e.e("components/remind/remind-data").then(e.bind(null,"ca9c"))},p={components:{loadMore:l,noThing:m,remindData:h,remindListItem:f},data:function(){return{userinfo:{userpic:"",username:"",id:0},reminddata:[{name:"支出提醒",num:0},{name:"收入提醒",num:0},{name:"事务提醒",num:0},{name:"还贷提醒",num:0}],swiperheight:1e3,tabIndex:0,remindlist:[{loadtext:"上拉加载更多",page:1,firstload:!1,list:[]}]}},onLoad:function(t){this.__init(t.userid)},methods:{__init:function(n){this.getUserInfo(n),this.getList(),t.$on("updateData",this.updateData),this.getCounts(n)},getUserInfo:function(){var t=c(i.default.mark(function t(n){var e;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:["不限","男","女"],["秘密","未婚","已婚"],n==this.User.userinfo.id&&(info=this.User.userinfo,e=!0),this.userinfo={isme:e,id:info.id,userpic:info.userpic,username:info.username};case 4:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),getCounts:function(){var t=c(i.default.mark(function t(n){var e,r,s,u,d;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/getcounts/"+n);case 2:if(r=t.sent,s=a(r,2),u=s[0],d=s[1],this.$http.errorCheck(u,d)){t.next=8;break}return t.abrupt("return");case 8:e=d.data.data,e&&(this.reminddata[0].num=e.zc_remind,this.reminddata[1].num=e.sr_remind,this.reminddata[2].num=e.sw_remind,this.reminddata[3].num=e.xyk_remind);case 10:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),loadmore:function(){"上拉加载更多"==this.remindlist[this.tabIndex].loadtext&&(this.remindlist[this.tabIndex].loadtext="加载中...",this.remindlist[this.tabIndex].page++,this.getList())},updateData:function(t){switch(t.type){case"updateList":this.updateList(t);break;case"Remind":this.updateRemid(t);break;case"delList":this.delList(t);break}},getList:function(){var t=c(i.default.mark(function t(){var n,e,r,s,u,d,o,c;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.remindlist[this.tabIndex].page,t.next=3,this.$http.get("/user/remind/".concat(n),{},{token:!0});case 3:if(e=t.sent,r=a(e,2),s=r[0],u=r[1],this.$http.errorCheck(s,u)){t.next=9;break}return t.abrupt("return",this.remindlist[this.tabIndex].loadtext="上拉加载更多");case 9:for(d=[],o=u.data.data.list,c=0;c<o.length;c++)d.push(this.__format(o[c]));return this.remindlist[this.tabIndex].list=n>1?this.remindlist[this.tabIndex].list.concat(d):d,this.remindlist[this.tabIndex].firstload=!0,this.remindlist[this.tabIndex].loadtext=o.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 16:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),__format:function(t){return{id:t.id,remind_name:t.remind_name,remind_nr:t.remind_nr,remind_time:t.remind_time,type_time:t.type_time,remind_type:t.remind_type,remind:t.remind}},updateList:function(t){this.remindlist[this.tabIndex].list.push(this.__format(t))},updateRemid:function(t){this.remindlist[this.tabIndex].list.forEach(function(n,e){n.id===t.id&&(n.remind_name=t.data.remind_name,n.remind_time=t.data.remind_time)})},delList:function(t){var n=this;this.remindlist[this.tabIndex].list.forEach(function(e,i){e.id===t.id&&n.remindlist[n.tabIndex].list.splice(i,1)})}}};n.default=p}).call(this,e("6e42")["default"])}},[["764e","common/runtime","common/vendor"]]]);
});
require('pages/remind/remindgl.js');
__wxRoute = 'pages/categorygl/srcategorygl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/categorygl/srcategorygl.js';

define('pages/categorygl/srcategorygl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/categorygl/srcategorygl"],{2591:function(n,t,e){"use strict";e.r(t);var c=e("cb2c"),u=e("fb4c");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("7f83");var r,i=e("f0c5"),a=Object(i["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);t["default"]=a.exports},"7f83":function(n,t,e){"use strict";var c=e("cf5c"),u=e.n(c);u.a},c226:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/home/home-list-item")]).then(e.bind(null,"8c06"))},u={components:{homeListItem:c},data:function(){return{list:[{icon:"canyin1",name:"餐饮 ",clicktype:"",url:""},{icon:"zhusu",name:"住宿",clicktype:"",url:""},{icon:"feiji",name:"飞机",clicktype:"",url:""}]}},methods:{}};t.default=u},c733:function(n,t,e){"use strict";(function(n){e("1133"),e("921b");c(e("66fd"));var t=c(e("2591"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},cb2c:function(n,t,e){"use strict";var c,u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return c})},cf5c:function(n,t,e){},fb4c:function(n,t,e){"use strict";e.r(t);var c=e("c226"),u=e.n(c);for(var o in c)"default"!==o&&function(n){e.d(t,n,function(){return c[n]})}(o);t["default"]=u.a}},[["c733","common/runtime","common/vendor"]]]);
});
require('pages/categorygl/srcategorygl.js');
__wxRoute = 'pages/categorygl/zccategorygl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/categorygl/zccategorygl.js';

define('pages/categorygl/zccategorygl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/categorygl/zccategorygl"],{"18f4":function(n,t,e){"use strict";var c=e("24ad"),u=e.n(c);u.a},"24ad":function(n,t,e){},"60e7":function(n,t,e){"use strict";e.r(t);var c=e("ac53"),u=e("c3d7");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("18f4");var r,a=e("f0c5"),i=Object(a["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);t["default"]=i.exports},"73f1":function(n,t,e){"use strict";(function(n){e("1133"),e("921b");c(e("66fd"));var t=c(e("60e7"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ac53:function(n,t,e){"use strict";var c,u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return c})},bfcf:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/home/home-list-item")]).then(e.bind(null,"8c06"))},u={components:{homeListItem:c},data:function(){return{list:[{icon:"canyin1",name:"餐饮 ",clicktype:"",url:""},{icon:"zhusu",name:"住宿",clicktype:"",url:""},{icon:"feiji",name:"飞机",clicktype:"",url:""}]}},methods:{}};t.default=u},c3d7:function(n,t,e){"use strict";e.r(t);var c=e("bfcf"),u=e.n(c);for(var o in c)"default"!==o&&function(n){e.d(t,n,function(){return c[n]})}(o);t["default"]=u.a}},[["73f1","common/runtime","common/vendor"]]]);
});
require('pages/categorygl/zccategorygl.js');
__wxRoute = 'pages/categorygl/zhcategorygl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/categorygl/zhcategorygl.js';

define('pages/categorygl/zhcategorygl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/categorygl/zhcategorygl"],{"117f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(){return Promise.all([e.e("common/vendor"),e.e("components/home/home-list-item")]).then(e.bind(null,"8c06"))},u={components:{homeListItem:c},data:function(){return{list:[{icon:"canyin1",name:"餐饮 ",clicktype:"",url:""},{icon:"zhusu",name:"住宿",clicktype:"",url:""},{icon:"feiji",name:"飞机",clicktype:"",url:""}]}},methods:{}};t.default=u},"3e6a":function(n,t,e){"use strict";e.r(t);var c=e("117f"),u=e.n(c);for(var o in c)"default"!==o&&function(n){e.d(t,n,function(){return c[n]})}(o);t["default"]=u.a},"95fc":function(n,t,e){"use strict";e.r(t);var c=e("d4c2"),u=e("3e6a");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("d482");var r,i=e("f0c5"),a=Object(i["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],r);t["default"]=a.exports},d482:function(n,t,e){"use strict";var c=e("ddc3"),u=e.n(c);u.a},d4c2:function(n,t,e){"use strict";var c,u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return c})},ddc3:function(n,t,e){},f887:function(n,t,e){"use strict";(function(n){e("1133"),e("921b");c(e("66fd"));var t=c(e("95fc"));function c(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f887","common/runtime","common/vendor"]]]);
});
require('pages/categorygl/zhcategorygl.js');
__wxRoute = 'pages/creditcardgl/addcard';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/creditcardgl/addcard.js';

define('pages/creditcardgl/addcard.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/creditcardgl/addcard"],{"0d23":function(t,e,n){"use strict";n.r(e);var a=n("b04f"),r=n("e310");for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);n("1cfa");var i,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},"1cfa":function(t,e,n){"use strict";var a=n("742e"),r=n.n(a);r.a},"2f3c":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");a(n("66fd"));var e=a(n("0d23"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"572d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e){return o(t)||u(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],a=!0,r=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(a=(i=u.next()).done);a=!0)if(n.push(i.value),e&&n.length===e)break}catch(o){r=!0,c=o}finally{try{a||null==u["return"]||u["return"]()}finally{if(r)throw c}}return n}function o(t){if(Array.isArray(t))return t}function s(t,e,n,a,r,c,i){try{var u=t[c](i),o=u.value}catch(s){return void n(s)}u.done?e(o):Promise.resolve(o).then(a,r)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var c=t.apply(e,n);function i(t){s(c,a,r,i,u,"next",t)}function u(t){s(c,a,r,i,u,"throw",t)}i(void 0)})}}var f=["中国银行","农业银行","建设银行","农村信用社"],l={data:function(){return{bankArr:f,bank:0,cardname:"",card:"",date_time:"",balance:"",total:""}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{changeOne:function(e){var n=this,a=[];switch(e){case"bank":a=f;break}t.showActionSheet({itemList:a,success:function(t){switch(e){case"bank":n.bank=t.tapIndex;break}}})},submit:function(){var e=d(a.default.mark(function e(){var n,r,i,u;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"发布中...",mask:!0}),e.prev=1,e.next=4,this.$http.post("/creditcard/add",{card:this.card,cardname:this.cardname,bank:this.bank,total:this.total,balance:this.balance,date_time:this.date_time},{token:!0,checkToken:!0,checkAuth:!0});case 4:if(n=e.sent,r=c(n,2),i=r[0],u=r[1],this.card){e.next=10;break}return e.abrupt("return",t.showToast({title:"请输入信用卡卡号",icon:"none"}));case 10:if(this.cardname){e.next=12;break}return e.abrupt("return",t.showToast({title:"姓名不能为空",icon:"none"}));case 12:if(this.$http.errorCheck(i,u)){e.next=14;break}return e.abrupt("return",t.hideLoading());case 14:t.hideLoading(),t.showToast({title:"发布成功！"}),t.$emit("updateData",{type:"updateList",data:u.data.data.detail}),t.navigateBack({delta:1}),e.next=23;break;case 20:return e.prev=20,e.t0=e["catch"](1),e.abrupt("return");case 23:case"end":return e.stop()}},e,this,[[1,20]])}));function n(){return e.apply(this,arguments)}return n}(),bindDateChange:function(t){this.date_time=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(n,"-").concat(a,"-").concat(r)}}};e.default=l}).call(this,n("6e42")["default"])},"742e":function(t,e,n){},b04f:function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return a})},e310:function(t,e,n){"use strict";n.r(e);var a=n("572d"),r=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=r.a}},[["2f3c","common/runtime","common/vendor"]]]);
});
require('pages/creditcardgl/addcard.js');
__wxRoute = 'pages/remind/reminddetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/remind/reminddetail.js';

define('pages/remind/reminddetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remind/reminddetail"],{"0b1e":function(e,t,n){},"10f6":function(e,t,n){"use strict";n.r(t);var i=n("ea71"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=r.a},"14da":function(e,t,n){"use strict";(function(e){n("1133"),n("921b");i(n("66fd"));var t=i(n("3bc9"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3bc9":function(e,t,n){"use strict";n.r(t);var i=n("a373"),r=n("10f6");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("ea2e");var d,u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],d);t["default"]=s.exports},a373:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i})},ea2e:function(e,t,n){"use strict";var i=n("0b1e"),r=n.n(i);r.a},ea71:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function d(e,t){return c(e)||s(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var d,u=e[Symbol.iterator]();!(i=(d=u.next()).done);i=!0)if(n.push(d.value),t&&n.length===t)break}catch(s){r=!0,a=s}finally{try{i||null==u["return"]||u["return"]()}finally{if(r)throw a}}return n}function c(e){if(Array.isArray(e))return e}function o(e,t,n,i,r,a,d){try{var u=e[a](d),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,r)}function m(e){return function(){var t=this,n=arguments;return new Promise(function(i,r){var a=e.apply(t,n);function d(e){o(a,i,r,d,u,"next",e)}function u(e){o(a,i,r,d,u,"throw",e)}d(void 0)})}}var h=["支出提醒","收入提醒","事务提醒","信用卡还贷提醒"],f=["开始时","提前1个小时","提前1天","提前2天"],l={data:function(){return{remind_typeArr:h,type_timeArr:f,type_time:0,remind_type:0,remind_time:"",remind_name:"",remind_nr:"",remind:0}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(e){this.__init(JSON.parse(e.detail))},methods:{__init:function(t){console.log(e(t," at pages\\remind\\reminddetail.vue:78")),i.setNavigationBarTitle({title:t.remind_name}),i.showLoading({title:"Loading...",mask:!0}),this.detail=t,this.getdetail()},getdetail:function(){var e=m(r.default.mark(function e(){var t,n,a,u,s,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/remind/"+this.detail.id,{token:!0,checkToken:!0,checkAuth:!0});case 2:if(t=e.sent,n=d(t,2),a=n[0],u=n[1],s=this.$http.errorCheck(a,u,function(){i.hideLoading()},function(){i.hideLoading()}),s){e.next=9;break}return e.abrupt("return");case 9:return c=u.data.data.detail,this.remind_name=c.remind_name,this.remind_nr=c.remind_nr,this.remind_time=c.remind_time,this.remind_type=c.remind_type,this.type_time=c.type_time,this.remind=c.remind,e.abrupt("return",i.hideLoading());case 17:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),changeremind:function(){var e=m(r.default.mark(function e(){var t,n,a,u,s,c;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={remind_name:this.remind_name,remind_nr:this.remind_nr,remind_time:this.remind_time,remind_type:this.remind_type,type_time:this.type_time,remind:this.remind},e.next=3,this.$http.post("/editremind/"+this.detail.id,t,{token:!0,checkToken:!0});case 3:if(n=e.sent,a=d(n,2),u=a[0],s=a[1],this.$http.errorCheck(u,s)){e.next=9;break}return e.abrupt("return");case 9:this.remind_name=t.remind_name,this.remind_nr=t.remind_nr,this.remind_time=t.remind_time,this.remind_type=t.remind_type,this.type_time=t.type_time,this.remind=t.remind,i.setStorageSync("remind_name",this.remind_name),i.setStorageSync("remind_nr",this.remind_nr),i.setStorageSync("remind_time",this.remind_time),i.setStorageSync("remind_type",this.remind_type),i.setStorageSync("type_time",this.type_time),i.setStorageSync("remind",this.remind),i.showToast({title:"修改成功！"}),c={type:"Remind",id:this.detail.id,data:t},i.$emit("updateData",c),i.showLoading({title:"修改中...",mask:!0}),i.hideLoading(),i.navigateBack({delta:1});case 27:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),delremind:function(){var e=m(r.default.mark(function e(){var t,n,a,u,s;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/delremind",{id:this.detail.id},{token:!0,checkToken:!0,checkAuth:!0});case 2:if(t=e.sent,n=d(t,2),a=n[0],u=n[1],this.$http.errorCheck(a,u)){e.next=8;break}return e.abrupt("return");case 8:s={type:"delList",id:this.detail.id,data:s},i.$emit("updateData",s),i.showLoading({title:"修改中...",mask:!0}),i.hideLoading(),i.navigateBack({delta:1});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),bindDateChange:function(e){this.remind_time=e.target.value},changeOne:function(e){var t=this,n=[];switch(e){case"remind_type":n=h;break;case"type_time":n=f;break}i.showActionSheet({itemList:n,success:function(n){switch(e){case"remind_type":t.remind_type=n.tapIndex;break;case"type_time":t.type_time=n.tapIndex;break}}})},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)}}};t.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["14da","common/runtime","common/vendor"]]]);
});
require('pages/remind/reminddetail.js');
__wxRoute = 'pages/creditcardgl/carddetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/creditcardgl/carddetail.js';

define('pages/creditcardgl/carddetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/creditcardgl/carddetail"],{"24b6":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return d(t)||u(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var a=[],n=!0,r=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(n=(c=u.next()).done);n=!0)if(a.push(c.value),e&&a.length===e)break}catch(d){r=!0,i=d}finally{try{n||null==u["return"]||u["return"]()}finally{if(r)throw i}}return a}function d(t){if(Array.isArray(t))return t}function o(t,e,a,n,r,i,c){try{var u=t[i](c),d=u.value}catch(o){return void a(o)}u.done?e(d):Promise.resolve(d).then(n,r)}function s(t){return function(){var e=this,a=arguments;return new Promise(function(n,r){var i=t.apply(e,a);function c(t){o(i,n,r,c,u,"next",t)}function u(t){o(i,n,r,c,u,"throw",t)}c(void 0)})}}var h=["中国银行","农业银行","建设银行","农村信用社"],l={data:function(){return{bankArr:h,bank:0,cardname:"",card:"",date_time:"",balance:"",total:""}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(t){this.__init(JSON.parse(t.detail))},methods:{__init:function(e){t.setNavigationBarTitle({title:e.cardname}),t.showLoading({title:"Loading...",mask:!0}),this.detail=e,this.getdetail()},getdetail:function(){var e=s(n.default.mark(function e(){var a,r,c,u,d,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/card/"+this.detail.id,{token:!0,checkToken:!0,checkAuth:!0});case 2:if(a=e.sent,r=i(a,2),c=r[0],u=r[1],d=this.$http.errorCheck(c,u,function(){t.hideLoading()},function(){t.hideLoading()}),d){e.next=9;break}return e.abrupt("return");case 9:return o=u.data.data.detail,this.card=o.card,this.cardname=o.cardname,this.bank=o.bank,this.balance=o.balance,this.date_time=o.date_time,this.total=o.total,e.abrupt("return",t.hideLoading());case 17:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),changecard:function(){var e=s(n.default.mark(function e(){var a,r,c,u,d,o;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={card:this.card,cardname:this.cardname,bank:this.bank,total:this.total,balance:this.balance,date_time:this.date_time},e.next=3,this.$http.post("/editcard/"+this.detail.id,a,{token:!0,checkToken:!0});case 3:if(r=e.sent,c=i(r,2),u=c[0],d=c[1],this.$http.errorCheck(u,d)){e.next=9;break}return e.abrupt("return");case 9:this.card=a.card,this.cardname=a.cardname,this.bank=a.bank,this.balance=a.balance,this.date_time=a.date_time,this.total=a.total,t.setStorageSync("card",this.card),t.setStorageSync("cardname",this.cardname),t.setStorageSync("bank",this.bank),t.showToast({title:"修改成功！"}),o={type:"Card",id:this.detail.id,data:a},t.$emit("updateData",o),t.showLoading({title:"修改中...",mask:!0}),t.hideLoading(),t.navigateBack({delta:1});case 24:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),delcard:function(){var e=s(n.default.mark(function e(){var a,r,c,u,d;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/delcard",{id:this.detail.id},{token:!0,checkToken:!0,checkAuth:!0});case 2:if(a=e.sent,r=i(a,2),c=r[0],u=r[1],this.$http.errorCheck(c,u)){e.next=8;break}return e.abrupt("return");case 8:d={type:"delCard",id:this.detail.id,data:d},t.$emit("updateData",d),t.showLoading({title:"修改中...",mask:!0}),t.hideLoading(),t.navigateBack({delta:1});case 13:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),changeOne:function(e){var a=this,n=[];switch(e){case"bank":n=h;break}t.showActionSheet({itemList:n,success:function(t){switch(e){case"bank":a.bank=t.tapIndex;break}}})},bindDateChange:function(t){this.date_time=t.target.value},getDate:function(t){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(a,"-").concat(n,"-").concat(r)}}};e.default=l}).call(this,a("6e42")["default"])},"4e7d":function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})},6091:function(t,e,a){"use strict";var n=a("d665"),r=a.n(n);r.a},"60d8":function(t,e,a){"use strict";a.r(e);var n=a("24b6"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},"7f70":function(t,e,a){"use strict";(function(t){a("1133"),a("921b");n(a("66fd"));var e=n(a("c720"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},c720:function(t,e,a){"use strict";a.r(e);var n=a("4e7d"),r=a("60d8");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("6091");var c,u=a("f0c5"),d=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=d.exports},d665:function(t,e,a){}},[["7f70","common/runtime","common/vendor"]]]);
});
require('pages/creditcardgl/carddetail.js');
__wxRoute = 'pages/bill/billdetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/billdetail.js';

define('pages/bill/billdetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/billdetail"],{"1ba6":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");a(n("66fd"));var e=a(n("9f8e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9a32":function(t,e,n){},"9a4b":function(t,e,n){"use strict";var a,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"9f8e":function(t,e,n){"use strict";n.r(e);var a=n("9a4b"),r=n("dbfd");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("bace");var c,o=n("f0c5"),u=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=u.exports},a73c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||o(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(a=(c=o.next()).done);a=!0)if(n.push(c.value),e&&n.length===e)break}catch(u){r=!0,i=u}finally{try{a||null==o["return"]||o["return"]()}finally{if(r)throw i}}return n}function u(t){if(Array.isArray(t))return t}function s(t,e,n,a,r,i,c){try{var o=t[i](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(a,r)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function c(t){s(i,a,r,c,o,"next",t)}function o(t){s(i,a,r,c,o,"throw",t)}c(void 0)})}}var h=["支出","收入","报销","信用卡借贷"],l=["现金","支付宝","微信","信用卡"],f={data:function(){return{account_typeArr:l,remark:"",typeArr:h,type:0,account_type:0,category_id:0,time:"",money:"",category:{id:0,title:"",range:[],list:[]}}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(t){this.getCategory(),this.__init(JSON.parse(t.detail))},methods:{__init:function(e){t.setNavigationBarTitle({title:e.remark}),t.showLoading({title:"Loading...",mask:!0}),this.detail=e,this.getdetail()},getdetail:function(){var e=d(a.default.mark(function e(){var n,r,c,o,u,s;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("/record/"+this.detail.id,{token:!0,checkToken:!0,checkAuth:!0});case 2:if(n=e.sent,r=i(n,2),c=r[0],o=r[1],u=this.$http.errorCheck(c,o,function(){t.hideLoading()},function(){t.hideLoading()}),u){e.next=9;break}return e.abrupt("return");case 9:return s=o.data.data.detail,this.money=s.money,this.type=s.type,this.time=s.time,this.account_type=s.account_type,this.category_id=s.category_id,this.remark=s.remark,e.abrupt("return",t.hideLoading());case 17:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),changerecord:function(){var e=d(a.default.mark(function e(){var n,r,c,o,u,s;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={money:this.money,type:this.type,account_type:this.account_type,time:this.time,category_id:this.category.id,remark:this.remark},e.next=3,this.$http.post("/editrecord/"+this.detail.id,n,{token:!0,checkToken:!0});case 3:if(r=e.sent,c=i(r,2),o=c[0],u=c[1],this.$http.errorCheck(o,u)){e.next=9;break}return e.abrupt("return");case 9:this.money=n.money,this.type=n.type,this.time=n.time,this.account_type=n.account_type,this.category_id=n.category_id,this.remark=n.remark,t.setStorageSync("money",this.money),t.setStorageSync("type",this.type),t.setStorageSync("time",this.time),t.setStorageSync("account_type",this.account_type),t.setStorageSync("category_id",this.this.category.id),t.setStorageSync("remark",this.remark),t.showToast({title:"修改成功！"}),s={type:"Editcord",id:this.detail.id,data:n},t.$emit("updateData",s),t.showLoading({title:"修改中...",mask:!0}),t.hideLoading(),t.navigateBack({delta:1});case 27:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),delrecord:function(){var e=d(a.default.mark(function e(){var n,r,c,o,u;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/delrecord",{id:this.detail.id},{token:!0,checkToken:!0,checkAuth:!0});case 2:if(n=e.sent,r=i(n,2),c=r[0],o=r[1],this.$http.errorCheck(c,o)){e.next=8;break}return e.abrupt("return");case 8:u={type:"delList",id:this.detail.id,data:u},t.$emit("updateData",u),t.showLoading({title:"修改中...",mask:!0}),t.hideLoading(),t.navigateBack({delta:1});case 13:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getCategory:function(){var t=d(a.default.mark(function t(){var e,n,r,c,o,u,s,d;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/category");case 3:if(e=t.sent,n=i(e,2),r=n[0],c=n[1],this.$http.errorCheck(r,c)){t.next=9;break}return t.abrupt("return");case 9:for(o=c.data.data.list,u=[],s=[],d=0;d<o.length;d++)u.push(o[d].name),s.push({id:o[d].id,name:o[d].name});this.category.range=u,this.category.list=o,t.next=19;break;case 16:return t.prev=16,t.t0=t["catch"](0),t.abrupt("return");case 19:case"end":return t.stop()}},t,this,[[0,16]])}));function e(){return t.apply(this,arguments)}return e}(),changeCategory:function(t){this.category.id=this.category.list[t.target.value].id,this.category.title=this.category.list[t.target.value].name},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},bindDateChange:function(t){this.time=t.target.value},changeOne:function(e){var n=this,a=[];switch(e){case"type":a=h;break;case"account_type":a=l;break}t.showActionSheet({itemList:a,success:function(t){switch(e){case"type":n.type=t.tapIndex;break;case"account_type":n.account_type=t.tapIndex;break}}})},getDate:function(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(n,"-").concat(a,"-").concat(r)}}};e.default=f}).call(this,n("6e42")["default"])},bace:function(t,e,n){"use strict";var a=n("9a32"),r=n.n(a);r.a},dbfd:function(t,e,n){"use strict";n.r(e);var a=n("a73c"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a}},[["1ba6","common/runtime","common/vendor"]]]);
});
require('pages/bill/billdetail.js');
__wxRoute = 'pages/bill/billgl';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/billgl.js';

define('pages/bill/billgl.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/billgl"],{"1e24":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("5362"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"44f1":function(t,e,n){"use strict";n.r(e);var r=n("e0b1"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},5362:function(t,e,n){"use strict";n.r(e);var r=n("ce86"),i=n("44f1");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("8720");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},8720:function(t,e,n){"use strict";var r=n("8961"),i=n.n(r);i.a},8961:function(t,e,n){},ce86:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},e0b1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return s(t)||u(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(s){i=!0,a=s}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw a}}return n}function s(t){if(Array.isArray(t))return t}function c(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(t){c(a,r,i,o,u,"next",t)}function u(t){c(a,r,i,o,u,"throw",t)}o(void 0)})}}var l=function(){return n.e("components/common/load-more").then(n.bind(null,"f349"))},f=function(){return n.e("components/common/no-thing").then(n.bind(null,"d4b7"))},h=function(){return n.e("components/bill/bill-list-item").then(n.bind(null,"5016"))},m=function(){return n.e("components/bill/bill-data").then(n.bind(null,"08861"))},p={components:{loadMore:l,noThing:f,billData:m,billListItem:h},data:function(){return{userinfo:{userpic:"",username:"",id:0},recorddata:[{name:"支出",num:0},{name:"收入",num:0},{name:"报销",num:0},{name:"信用卡借贷",num:0}],swiperheight:1e3,tabIndex:0,recordlist:[{loadtext:"上拉加载更多",page:1,firstload:!1,list:[]}]}},onLoad:function(t){this.__init(t.userid)},onReachBottom:function(){this.loadmore()},onPullDownRefresh:function(){this.getList()},methods:{__init:function(e){this.getUserInfo(e),this.getList(),t.$on("updateData",this.updateData),this.getCounts(e)},getUserInfo:function(){var t=d(r.default.mark(function t(e){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:["不限","男","女"],["秘密","未婚","已婚"],e==this.User.userinfo.id&&(info=this.User.userinfo,n=!0),this.userinfo={isme:n,id:info.id,userpic:info.userpic,username:info.username};case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getCounts:function(){var t=d(r.default.mark(function t(e){var n,i,o,u,s;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/getcounts/"+e);case 2:if(i=t.sent,o=a(i,2),u=o[0],s=o[1],this.$http.errorCheck(u,s)){t.next=8;break}return t.abrupt("return");case 8:n=s.data.data,n&&(this.recorddata[0].num=n.zc_sum,this.recorddata[1].num=n.sr_sum,this.recorddata[2].num=n.bx_sum,this.recorddata[3].num=n.xyk_sum);case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),loadmore:function(){"上拉加载更多"==this.recordlist[this.tabIndex].loadtext&&(this.recordlist[this.tabIndex].loadtext="加载中...",this.recordlist[this.tabIndex].page++,this.getList())},updateData:function(t){switch(t.type){case"updateList":this.updateList(t);break;case"Editcord":this.updateRecord(t);break;case"delList":this.delList(t);break}},getList:function(){var t=d(r.default.mark(function t(){var e,n,i,o,u,s,c,d,l;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.recordlist[this.tabIndex].page,t.next=3,this.$http.get("/user/record/".concat(e),{},{token:!0});case 3:if(n=t.sent,i=a(n,2),o=i[0],u=i[1],this.$http.errorCheck(o,u)){t.next=9;break}return t.abrupt("return",this.recordlist[this.tabIndex].loadtext="上拉加载更多");case 9:for(s=[],c=u.data.data.list,d=this.tabIndex,l=0;l<c.length;l++)s.push(this.__format(c[l]));return this.recordlist[d].list=e>1?this.recordlist[d].list.concat(s):s,this.recordlist[d].firstload=!0,this.recordlist[d].loadtext=c.length<10?"没有更多数据了":"上拉加载更多",t.abrupt("return");case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),__format:function(t){return{id:t.id,money:t.money,type:t.type,account_type:t.account_type,time:t.time,category_id:t.category_id,remark:t.remark,category:{id:t.category.id,name:t.category.name}}},updateList:function(t){this.recordlist[this.tabIndex].list.push(this.__format(t))},updateRecord:function(t){this.recordlist[this.tabIndex].list.forEach(function(e,n){e.id===t.id&&(e.category.name=t.data.category.name,e.money=t.data.money,e.time=t.data.time)})},delList:function(t){var e=this;this.recordlist[this.tabIndex].list.forEach(function(n,r){n.id===t.id&&e.recordlist[e.tabIndex].list.splice(r,1)})},addrecord:function(){t.navigateTo({url:"bill"})}}};e.default=p}).call(this,n("6e42")["default"])}},[["1e24","common/runtime","common/vendor"]]]);
});
require('pages/bill/billgl.js');
__wxRoute = 'pages/bill/billgory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/billgory.js';

define('pages/bill/billgory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/billgory"],{"25f8":function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r})},5980:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return c(t)||o(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var n=[],r=!0,a=!1,u=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)if(n.push(i.value),e&&n.length===e)break}catch(c){a=!0,u=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw u}}return n}function c(t){if(Array.isArray(t))return t}function s(t,e,n,r,a,u,i){try{var o=t[u](i),c=o.value}catch(s){return void n(s)}o.done?e(c):Promise.resolve(c).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=t.apply(e,n);function i(t){s(u,r,a,i,o,"next",t)}function o(t){s(u,r,a,i,o,"throw",t)}i(void 0)})}}var d=function(){return n.e("components/index/swiper-tab-head").then(n.bind(null,"bb11"))},l=function(){return n.e("components/common/load-more").then(n.bind(null,"f349"))},h=function(){return n.e("components/common/no-thing").then(n.bind(null,"d4b7"))},p=function(){return n.e("components/bill/billgory-list").then(n.bind(null,"8461"))},b={components:{swiperTabHead:d,loadMore:l,noThing:h,billgoryList:p},data:function(){return{swiperheight:800,tabIndex:0,tabBars:[{name:"支出",id:"zhichu"},{name:"收入",id:"shouru"},{name:"报销",id:"baoxiao"},{name:"信用卡借贷",id:"jiedai"}],zcrecord:[],srrecord:[],bxrecord:[],xykrecord:[]}},onLoad:function(t){this.__init(t.userid)},methods:{tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},__init:function(e){this.getzcList(),this.getsrList(),this.getbxList(),this.getxykList(),t.$on("updateData",this.updateData)},getzcList:function(){var t=f(r.default.mark(function t(){var e,n,a,i,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/zcrecord",{},{token:!0});case 2:if(e=t.sent,n=u(e,2),a=n[0],i=n[1],this.$http.errorCheck(a,i)){t.next=8;break}return t.abrupt("return");case 8:return o=i.data.data.list,this.zcrecord=o,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getsrList:function(){var t=f(r.default.mark(function t(){var e,n,a,i,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/srrecord",{},{token:!0});case 2:if(e=t.sent,n=u(e,2),a=n[0],i=n[1],this.$http.errorCheck(a,i)){t.next=8;break}return t.abrupt("return");case 8:return o=i.data.data.list,this.srrecord=o,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getbxList:function(){var t=f(r.default.mark(function t(){var e,n,a,i,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/bxrecord",{},{token:!0});case 2:if(e=t.sent,n=u(e,2),a=n[0],i=n[1],this.$http.errorCheck(a,i)){t.next=8;break}return t.abrupt("return");case 8:return o=i.data.data.list,this.bxrecord=o,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getxykList:function(){var t=f(r.default.mark(function t(){var e,n,a,i,o;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/xykrecord",{},{token:!0});case 2:if(e=t.sent,n=u(e,2),a=n[0],i=n[1],this.$http.errorCheck(a,i)){t.next=8;break}return t.abrupt("return");case 8:return o=i.data.data.list,this.xykecord=o,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=b}).call(this,n("6e42")["default"])},"66c1":function(t,e,n){"use strict";(function(t){n("1133"),n("921b");r(n("66fd"));var e=r(n("aeda"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},7916:function(t,e,n){"use strict";n.r(e);var r=n("5980"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a},aeda:function(t,e,n){"use strict";n.r(e);var r=n("25f8"),a=n("7916");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports}},[["66c1","common/runtime","common/vendor"]]]);
});
require('pages/bill/billgory.js');
__wxRoute = 'pages/bill/todaybill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/todaybill.js';

define('pages/bill/todaybill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/todaybill"],{"282b":function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,n){return d(t)||c(t,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,n){var e=[],r=!0,a=!1,u=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0)if(e.push(o.value),n&&e.length===n)break}catch(c){a=!0,u=c}finally{try{r||null==i["return"]||i["return"]()}finally{if(a)throw u}}return e}function d(t){if(Array.isArray(t))return t}function s(t,n,e,r,a,u,o){try{var i=t[u](o),c=i.value}catch(d){return void e(d)}i.done?n(c):Promise.resolve(c).then(r,a)}function l(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var u=t.apply(n,e);function o(t){s(u,r,a,o,i,"next",t)}function i(t){s(u,r,a,o,i,"throw",t)}o(void 0)})}}var f=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},b=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},p=function(){return e.e("components/bill/billgory-list").then(e.bind(null,"8461"))},m=function(){return e.e("components/bill/bill-data").then(e.bind(null,"08861"))},v={components:{swiperTabHead:f,loadMore:h,noThing:b,billgoryList:p,billData:m},data:function(){return{todaydata:[{name:"今日支出",num:0},{name:"今日收入",num:0},{name:"今日报销",num:0},{name:"今日借贷",num:0}],swiperheight:800,tabIndex:0,todayrecord:[]}},onLoad:function(t){this.__init(t.userid)},methods:{tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},__init:function(n){this.gettodayList(),this.getCounts(n),t.$on("updateData",this.updateData)},getCounts:function(){var t=l(a.default.mark(function t(n){var e,r,u,i,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/getcounts/"+n);case 2:if(r=t.sent,u=o(r,2),i=u[0],c=u[1],this.$http.errorCheck(i,c)){t.next=8;break}return t.abrupt("return");case 8:e=c.data.data,e&&(this.todaydata[0].num=e.zc_today_sum,this.todaydata[1].num=e.sr_today_sum,this.todaydata[2].num=e.bx_today_sum,this.todaydata[3].num=e.xyk_today_sum);case 10:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),gettodayList:function(){var t=l(a.default.mark(function t(){var n,e,u,i,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/todayrecord",{},{token:!0});case 2:if(n=t.sent,e=o(n,2),u=e[0],i=e[1],this.$http.errorCheck(u,i)){t.next=8;break}return t.abrupt("return");case 8:console.log(r(i.data.data," at pages\\bill\\todaybill.vue:82")),c=i.data.data.list,this.todayrecord=c;case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=v}).call(this,e("6e42")["default"],e("0de9")["default"])},"3ab0":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");r(e("66fd"));var n=r(e("84cd"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"3add":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return r})},"43e6":function(t,n,e){},"4d56":function(t,n,e){"use strict";var r=e("43e6"),a=e.n(r);a.a},"84cd":function(t,n,e){"use strict";e.r(n);var r=e("3add"),a=e("96eb");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("4d56");var o,i=e("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=c.exports},"96eb":function(t,n,e){"use strict";e.r(n);var r=e("282b"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=a.a}},[["3ab0","common/runtime","common/vendor"]]]);
});
require('pages/bill/todaybill.js');
__wxRoute = 'pages/bill/monthbill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/monthbill.js';

define('pages/bill/monthbill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/monthbill"],{"0051":function(t,n,e){"use strict";var r=e("3ba1"),a=e.n(r);a.a},"3ba1":function(t,n,e){},"42d1":function(t,n,e){"use strict";e.r(n);var r=e("5dab"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=a.a},"5dab":function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,n){return s(t)||c(t,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,n){var e=[],r=!0,a=!1,u=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0)if(e.push(o.value),n&&e.length===n)break}catch(c){a=!0,u=c}finally{try{r||null==i["return"]||i["return"]()}finally{if(a)throw u}}return e}function s(t){if(Array.isArray(t))return t}function l(t,n,e,r,a,u,o){try{var i=t[u](o),c=i.value}catch(s){return void e(s)}i.done?n(c):Promise.resolve(c).then(r,a)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var u=t.apply(n,e);function o(t){l(u,r,a,o,i,"next",t)}function i(t){l(u,r,a,o,i,"throw",t)}o(void 0)})}}var d=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},m=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},b=function(){return e.e("components/bill/billgory-list").then(e.bind(null,"8461"))},p=function(){return e.e("components/bill/bill-data").then(e.bind(null,"08861"))},v={components:{swiperTabHead:d,loadMore:h,noThing:m,billgoryList:b,billData:p},data:function(){return{monthdata:[{name:"本月支出",num:0},{name:"本月收入",num:0},{name:"本月报销",num:0},{name:"本月借贷",num:0}],swiperheight:800,tabIndex:0,monthrecord:[]}},onLoad:function(t){this.__init(t.userid)},methods:{tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},__init:function(n){this.getmonthList(),this.getCounts(n),t.$on("updateData",this.updateData)},getCounts:function(){var t=f(a.default.mark(function t(n){var e,r,u,i,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/getcounts/"+n);case 2:if(r=t.sent,u=o(r,2),i=u[0],c=u[1],this.$http.errorCheck(i,c)){t.next=8;break}return t.abrupt("return");case 8:e=c.data.data,e&&(this.monthdata[0].num=e.zc_month_sum,this.monthdata[1].num=e.sr_month_sum,this.monthdata[2].num=e.bx_month_sum,this.monthdata[3].num=e.xyk_month_sum);case 10:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),getmonthList:function(){var t=f(a.default.mark(function t(){var n,e,u,i,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/monthrecord",{},{token:!0});case 2:if(n=t.sent,e=o(n,2),u=e[0],i=e[1],this.$http.errorCheck(u,i)){t.next=8;break}return t.abrupt("return");case 8:console.log(r(i.data.data," at pages\\bill\\monthbill.vue:82")),c=i.data.data.list,this.monthrecord=c;case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=v}).call(this,e("6e42")["default"],e("0de9")["default"])},af4b:function(t,n,e){"use strict";(function(t){e("1133"),e("921b");r(e("66fd"));var n=r(e("fe56"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},e9d9:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return r})},fe56:function(t,n,e){"use strict";e.r(n);var r=e("e9d9"),a=e("42d1");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("0051");var o,i=e("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=c.exports}},[["af4b","common/runtime","common/vendor"]]]);
});
require('pages/bill/monthbill.js');
__wxRoute = 'pages/bill/yearbill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/yearbill.js';

define('pages/bill/yearbill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/yearbill"],{"22c1":function(t,n,e){},"38f6":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");r(e("66fd"));var n=r(e("523b"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"51e3":function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return r})},"523b":function(t,n,e){"use strict";e.r(n);var r=e("51e3"),a=e("b06f");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("a7a4");var i,o=e("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=c.exports},a7a4:function(t,n,e){"use strict";var r=e("22c1"),a=e.n(r);a.a},b06f:function(t,n,e){"use strict";e.r(n);var r=e("cf4d"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=a.a},cf4d:function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n){return s(t)||c(t,n)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,n){var e=[],r=!0,a=!1,u=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)if(e.push(i.value),n&&e.length===n)break}catch(c){a=!0,u=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw u}}return e}function s(t){if(Array.isArray(t))return t}function l(t,n,e,r,a,u,i){try{var o=t[u](i),c=o.value}catch(s){return void e(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var u=t.apply(n,e);function i(t){l(u,r,a,i,o,"next",t)}function o(t){l(u,r,a,i,o,"throw",t)}i(void 0)})}}var d=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},b=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},p=function(){return e.e("components/bill/billgory-list").then(e.bind(null,"8461"))},m=function(){return e.e("components/bill/bill-data").then(e.bind(null,"08861"))},v={components:{swiperTabHead:d,loadMore:h,noThing:b,billgoryList:p,billData:m},data:function(){return{yeardata:[{name:"本年支出",num:0},{name:"本年收入",num:0},{name:"本年报销",num:0},{name:"本年借贷",num:0}],swiperheight:800,tabIndex:0,yearrecord:[]}},onLoad:function(t){this.__init(t.userid)},methods:{tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},__init:function(n){this.getyearList(),this.getCounts(n),t.$on("updateData",this.updateData)},getCounts:function(){var t=f(a.default.mark(function t(n){var e,r,u,o,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/getcounts/"+n);case 2:if(r=t.sent,u=i(r,2),o=u[0],c=u[1],this.$http.errorCheck(o,c)){t.next=8;break}return t.abrupt("return");case 8:e=c.data.data,e&&(this.yeardata[0].num=e.zc_year_sum,this.yeardata[1].num=e.sr_year_sum,this.yeardata[2].num=e.bx_year_sum,this.yeardata[3].num=e.xyk_year_sum);case 10:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),getyearList:function(){var t=f(a.default.mark(function t(){var n,e,u,o,c;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/yearrecord",{},{token:!0});case 2:if(n=t.sent,e=i(n,2),u=e[0],o=e[1],this.$http.errorCheck(u,o)){t.next=8;break}return t.abrupt("return");case 8:console.log(r(o.data.data," at pages\\bill\\yearbill.vue:82")),c=o.data.data.list,this.yearrecord=c;case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=v}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["38f6","common/runtime","common/vendor"]]]);
});
require('pages/bill/yearbill.js');
__wxRoute = 'pages/remind/remindgory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/remind/remindgory.js';

define('pages/remind/remindgory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/remind/remindgory"],{3180:function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n){return c(t)||o(t,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,n){var e=[],r=!0,i=!1,u=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(e.push(a.value),n&&e.length===n)break}catch(o){i=!0,u=o}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw u}}return e}function c(t){if(Array.isArray(t))return t}function d(t,n,e,r,i,u,a){try{var s=t[u](a),o=s.value}catch(c){return void e(c)}s.done?n(o):Promise.resolve(o).then(r,i)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var u=t.apply(n,e);function a(t){d(u,r,i,a,s,"next",t)}function s(t){d(u,r,i,a,s,"throw",t)}a(void 0)})}}var l=function(){return e.e("components/index/swiper-tab-head").then(e.bind(null,"bb11"))},h=function(){return e.e("components/common/load-more").then(e.bind(null,"f349"))},p=function(){return e.e("components/common/no-thing").then(e.bind(null,"d4b7"))},m=function(){return e.e("components/remind/remind-list-item").then(e.bind(null,"7d8b"))},b={components:{swiperTabHead:l,loadMore:h,noThing:p,remindListItem:m},data:function(){return{swiperheight:800,tabIndex:0,tabBars:[{name:"支出",id:"zhichu"},{name:"收入",id:"shouru"},{name:"事务",id:"baoxiao"},{name:"信用卡还贷",id:"jiedai"}],zcremind:[],srremind:[],swremind:[],xykremind:[]}},onLoad:function(t){this.__init(t.userid)},methods:{tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current},__init:function(n){this.getzcList(),this.getsrList(),this.getswList(),this.getxykList(),t.$on("updateData",this.updateData)},getzcList:function(){var t=f(i.default.mark(function t(){var n,e,u,s,o;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/zcremind",{},{token:!0});case 2:if(n=t.sent,e=a(n,2),u=e[0],s=e[1],this.$http.errorCheck(u,s)){t.next=8;break}return t.abrupt("return");case 8:return console.log(r(s," at pages\\remind\\remindgory.vue:97")),o=s.data.data.list,this.zcremind=o,t.abrupt("return");case 12:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getsrList:function(){var t=f(i.default.mark(function t(){var n,e,r,u,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/srremind",{},{token:!0});case 2:if(n=t.sent,e=a(n,2),r=e[0],u=e[1],this.$http.errorCheck(r,u)){t.next=8;break}return t.abrupt("return");case 8:return s=u.data.data.list,this.srremind=s,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getswList:function(){var t=f(i.default.mark(function t(){var n,e,r,u,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/swremind",{},{token:!0});case 2:if(n=t.sent,e=a(n,2),r=e[0],u=e[1],this.$http.errorCheck(r,u)){t.next=8;break}return t.abrupt("return");case 8:return s=u.data.data.list,this.bxremind=s,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getxykList:function(){var t=f(i.default.mark(function t(){var n,e,r,u,s;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/user/xykremind",{},{token:!0});case 2:if(n=t.sent,e=a(n,2),r=e[0],u=e[1],this.$http.errorCheck(r,u)){t.next=8;break}return t.abrupt("return");case 8:return s=u.data.data.list,this.xykemind=s,t.abrupt("return");case 11:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=b}).call(this,e("6e42")["default"],e("0de9")["default"])},4388:function(t,n,e){"use strict";e.r(n);var r=e("8fd9"),i=e("954c");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);var a,s=e("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=o.exports},"4b44":function(t,n,e){"use strict";(function(t){e("1133"),e("921b");r(e("66fd"));var n=r(e("4388"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"8fd9":function(t,n,e){"use strict";var r,i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return r})},"954c":function(t,n,e){"use strict";e.r(n);var r=e("3180"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=i.a}},[["4b44","common/runtime","common/vendor"]]]);
});
require('pages/remind/remindgory.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

