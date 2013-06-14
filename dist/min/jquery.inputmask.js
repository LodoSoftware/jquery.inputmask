/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.2.40
*/
(function(c){void 0==c.fn.inputmask&&(c.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:c.noop,onincomplete:c.noop,oncleared:c.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:c.noop,onKeyDown:c.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:c.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,
definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,
RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(c,E,F){var J=c.length;!E&&1<F&&(J+=c.length*(F-1));return J}},val:c.fn.val,escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},c.fn.inputmask=function(K,E){function F(e,d){var g=b.aliases[e];return g?(g.alias&&F(g.alias),c.extend(!0,b,g),c.extend(!0,b,
d),!0):!1}function J(e){var d=!1,g=0,t=b.greedy,a=b.repeat;1==e.length&&!1==t&&(b.placeholder="");for(var e=c.map(e.split(""),function(a){var c=[];if(a==b.escapeChar)d=true;else if(a!=b.optionalmarker.start&&a!=b.optionalmarker.end||d){var f=b.definitions[a];if(f&&!d)for(a=0;a<f.cardinality;a++)c.push(I(g+a));else{c.push(a);d=false}g=g+c.length;return c}}),x=e.slice(),f=1;f<a&&t;f++)x=x.concat(e.slice());return{mask:x,repeat:a,greedy:t}}function P(e){var d=!1,g=!1,t=!1;return c.map(e.split(""),function(a){var c=
[];if(a==b.escapeChar)g=!0;else if(a==b.optionalmarker.start&&!g)t=d=!0;else if(a==b.optionalmarker.end&&!g)d=!1,t=!0;else{var f=b.definitions[a];if(f&&!g){for(var k=f.prevalidator,e=k?k.length:0,B=1;B<f.cardinality;B++){var u=e>=B?k[B-1]:[],A=u.validator,u=u.cardinality;c.push({fn:A?"string"==typeof A?RegExp(A):new function(){this.test=A}:/./,cardinality:u?u:1,optionality:d,newBlockMarker:!0==d?t:!1,offset:0,casing:f.casing,def:f.definitionSymbol|a});!0==d&&(t=!1)}c.push({fn:f.validator?"string"==
typeof f.validator?RegExp(f.validator):new function(){this.test=f.validator}:/./,cardinality:f.cardinality,optionality:d,newBlockMarker:t,offset:0,casing:f.casing,def:f.definitionSymbol|a})}else c.push({fn:null,cardinality:0,optionality:d,newBlockMarker:t,offset:0,casing:null,def:a}),g=!1;t=!1;return c}})}function Q(){function e(a){var c=a.length;for(i=0;i<c&&a.charAt(i)!=b.optionalmarker.start;i++);var d=[a.substring(0,i)];i<c&&d.push(a.substring(i+1,c));return d}function d(a,x){var f=0,k=0,l=x.length;
for(i=0;i<l&&!(x.charAt(i)==b.optionalmarker.start&&f++,x.charAt(i)==b.optionalmarker.end&&k++,0<f&&f==k);i++);f=[x.substring(0,i)];i<l&&f.push(x.substring(i+1,l));var B=e(f[0]);if(1<B.length){if(l=a+B[0]+(b.optionalmarker.start+B[1]+b.optionalmarker.end)+(1<f.length?f[1]:""),-1==c.inArray(l,t)&&(t.push(l),k=J(l),g.push({mask:l,_buffer:k.mask,buffer:k.mask.slice(),tests:P(l),lastValidPosition:void 0,greedy:k.greedy,repeat:k.repeat})),l=a+B[0]+(1<f.length?f[1]:""),-1==c.inArray(l,t)&&(t.push(l),k=
J(l),g.push({mask:l,_buffer:k.mask,buffer:k.mask.slice(),tests:P(l),lastValidPosition:void 0,greedy:k.greedy,repeat:k.repeat})),1<e(B[1]).length&&d(a+B[0],B[1]+f[1]),1<f.length&&1<e(f[1]).length)d(a+B[0]+(b.optionalmarker.start+B[1]+b.optionalmarker.end),f[1]),d(a+B[0],f[1])}else l=a+f,-1==c.inArray(l,t)&&(t.push(l),k=J(l),g.push({mask:l,_buffer:k.mask,buffer:k.mask.slice(),tests:P(l),lastValidPosition:void 0,greedy:k.greedy,repeat:k.repeat}))}var g=[],t=[];c.isArray(b.mask)?c.each(b.mask,function(a,
b){d("",b.toString())}):d("",b.mask.toString());return g}function I(c){return b.placeholder.charAt(c%b.placeholder.length)}function L(e,d){var g,t;function a(){return e[d]}function x(){return a().tests}function f(){return a()._buffer}function k(){return a().buffer}function l(j,R,f,r){function y(a,j){for(var c=A(a),d=R?1:0,k="",e=j.buffer,y=j.tests[c].cardinality;y>d;y--)k+=z(e,c-(y-1));R&&(k+=R);return null!=j.tests[c].fn?j.tests[c].fn.test(k,e,a,f,b):!1}if(f=!0===f){var g=y(j,a());!0===g&&(g={pos:j});
return g}var l=[],g=!1,o=d;c.each(e,function(a){d=a;if(o!=d&&!u(j)){if(R==this._buffer[j]||R==b.skipOptionalPartCharacter)return l.push({activeMasksetIndex:a,result:{refresh:!0}}),this.lastValidPosition=j,!1;this.lastValidPosition=r?p()+1:-1}if((void 0==this.lastValidPosition&&j==(r?H(p()):s(-1))||r||b.numericInput?this.lastValidPosition<=b.numericInput?p():s(j):this.lastValidPosition>=H(j))&&0<=j&&j<p()){g=y(j,this);if(!1!==g){!0===g&&(g={pos:j});var c=g.pos||j;if(void 0==this.lastValidPosition||
(r?b.greedy?this.lastValidPosition>c:c==k().length-1:this.lastValidPosition<c))this.lastValidPosition=c}else this.lastValidPosition=r?j==p()?void 0:s(j):0==j?void 0:H(j);l.push({activeMasksetIndex:a,result:g})}});d=o;return l}function B(j){var f=d,M={activeMasksetIndex:0,lastValidPosition:j?p()+1:-1};c.each(e,function(a){if(void 0!=this.lastValidPosition&&(j||b.numericInput?this.lastValidPosition<M.lastValidPosition:this.lastValidPosition>M.lastValidPosition))M.activeMasksetIndex=a,M.lastValidPosition=
this.lastValidPosition});d=M.activeMasksetIndex;f!=d&&(j?J(k(),0,H(M.lastValidPosition)):J(k(),s(M.lastValidPosition),p()),a().writeOutBuffer=!0)}function u(a){a=A(a);a=x()[a];return void 0!=a?a.fn:!1}function A(a){return a%x().length}function p(){return b.getMaskLength(f(),a().greedy,a().repeat,k(),b)}function s(a){var b=p();if(a>=b)return b;for(;++a<b&&!u(a););return a}function H(a){if(0>=a)return 0;for(;0<--a&&!u(a););return a}function o(a,b,c,d,f){d&&(b=K(a,b,f));d=x()[A(b)];f=c;if(void 0!=f)switch(d.casing){case "upper":f=
c.toUpperCase();break;case "lower":f=c.toLowerCase()}a[b]=f}function z(a,b,c){c&&(b=K(a,b));return a[b]}function K(a,b,c){if(c)for(;0>b&&a.length<p();){c=f().length-1;for(b=f().length;void 0!==f()[c];)a.unshift(f()[c--])}else for(;void 0==a[b]&&a.length<p();)for(c=0;void 0!==f()[c];)a.push(f()[c++]);return b}function F(a,b,c){a._valueSet(b.join(""));void 0!=c&&C(a,c)}function J(a,b,c){for(var d=p();b<c&&b<d;b++)o(a,b,z(f().slice(),b,!0))}function D(a,b){var c=A(b);o(a,b,z(f(),c))}function E(j,k,g,
r){var y=c(j).data("inputmask").isRTL,r=void 0!=r?r.slice():P(j._valueGet(),y).split("");c.each(e,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=y?p():0});!0!==g&&(d=0);y&&!b.numericInput&&(r=r.reverse());var l=p();c.each(r,function(a,d){var e=y?b.numericInput?l:l-a-1:a;(u(y?b.numericInput?H(l):l-a-1:a)||!0!==g&&d!=z(f(),e,!0))&&c(j).trigger("keypress",[!0,d.charCodeAt(0),k,g,e])});!0===g&&(a().lastValidPosition=y?s(a().p):H(a().p))}function L(a){return c.inputmask.escapeRegex.call(this,
a)}function P(a,b){return b?a.replace(RegExp("^("+L(f().join(""))+")*"),""):a.replace(RegExp("("+L(f().join(""))+")*$"),"")}function Q(a){var b=k(),d=b.slice(),f,e;if(c(a).data("inputmask").isRTL)for(e=0;e<=d.length-1;e++)if(f=A(e),x()[f].optionality)if(!u(e)||!l(e,b[e],!0))d.splice(0,1);else break;else break;else for(e=d.length-1;0<=e;e--)if(f=A(e),x()[f].optionality)if(!u(e)||!l(e,b[e],!0))d.pop();else break;else break;F(a,d)}function V(a,b){var d=a[0];return x()&&(!0===b||!a.hasClass("hasDatepicker"))?
(E(d,!1,!0),c.map(k(),function(a,b){return u(b)&&l(b,a,!0)?a:null}).join("")):d._valueGet()}function C(a,d,f){var e=a.jquery&&0<a.length?a[0]:a;if("number"==typeof d)c(a).is(":visible")&&(f="number"==typeof f?f:d,!1==b.insertMode&&d==f&&f++,e.setSelectionRange?T?(setTimeout(function(){e.selectionStart=d;e.selectionEnd=T?d:f},10),g=d,t=f):(e.selectionStart=d,e.selectionEnd=f):e.createTextRange&&(a=e.createTextRange(),a.collapse(!0),a.moveEnd("character",f),a.moveStart("character",d),a.select()));else{if(!c(a).is(":visible"))return{begin:0,
end:0};e.setSelectionRange?(d=e.selectionStart,f=e.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),d=0-a.duplicate().moveStart("character",-1E5),f=d+a.text.length);return{begin:d,end:f}}}function S(a){var b=!1,k=0,g=d;c.each(e,function(c,e){d=c;var g=H(p());if(void 0!=e.lastValidPosition&&e.lastValidPosition>=k&&e.lastValidPosition==g){for(var l=!0,o=0;o<=g;o++){var s=u(o),t=A(o);if(s&&(void 0==a[o]||a[o]==I(o))||!s&&a[o]!=f()[t]){l=!1;break}}if(b=
b||l)return!1}k=e.lastValidPosition});d=g;return b}this.unmaskedvalue=function(a,b){return V(a,b)};this.isComplete=function(a){return S(a)};this.mask=function(j){function L(a){a=c._data(a).events;c.each(a,function(a,b){c.each(b,function(a,b){if("inputmask"==b.namespace){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return c.apply(this,arguments)}}})})}function M(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&
b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=c(this),b=c(this).data("inputmask"),d=b.masksets,f=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[f]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);c(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=
a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=c(this),b=c(this).data("inputmask"),d=b.masksets,f=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[f]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);c(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=c.fn.val.inputmaskpatch)c.fn.val=
function(){if(arguments.length==0){var a=c(this);if(a.data("inputmask")){if(a.data("inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var a=c.inputmask.val.apply(a),b=c(this).data("inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return c.inputmask.val.apply(a)}var d=arguments;return this.each(function(){var a=c(this),b=c.inputmask.val.apply(a,d);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},c.extend(c.fn.val,{inputmaskpatch:!0})}
function r(a,c){if(b.numericInput&&""!=b.radixPoint&&!1===b.skipRadixDance){var d=a._valueGet().indexOf(b.radixPoint);n=c.begin<=d||c.end<=d||-1==d}}function y(b,c,d){for(var e=k();!u(b)&&0<=b-1;)b--;for(var h=b;h<c&&h<p();h++)if(u(h)){D(e,h);var g=s(h),j=z(e,g);if(j!=I(g))if(g<p()&&!1!==l(h,j,!0,n)&&x()[A(h)].def==x()[A(g)].def)o(e,h,z(e,g),!0,n),g<c&&D(e,g);else if(u(h))break}else D(e,h);void 0!=d&&o(e,n?c:H(c),d);if(!1==a().greedy){c=P(e.join(""),n).split("");e.length=c.length;h=0;for(d=e.length;h<
d;h++)e[h]=c[h];0==e.length&&(a().buffer=f().slice())}return b}function O(b,c,d,e){for(var h=k();b<=c&&b<p();b++)if(u(b)){var g=z(h,b);o(h,b,d,!0,n);if(g!=I(b))if(d=s(b),d<p())if(!1!==l(d,g,!0,n)&&x()[A(b)].def==x()[A(d)].def)d=g;else if(u(d))break;else d=g;else break;else if(d=g,!0!==e)break}else D(h,b);e=h.length;if(!1==a().greedy){d=P(h.join(""),n).split("");h.length=d.length;b=0;for(g=h.length;b<g;b++)h[b]=d[b];0==h.length&&(a().buffer=f().slice())}return c-(e-h.length)}function V(g){U=!1;var j=
this,m=g.keyCode,q=C(j);r(j,q);if(m==b.keyCode.BACKSPACE||m==b.keyCode.DELETE||aa&&127==m||g.ctrlKey&&88==m){g.preventDefault();var h=q.begin;if(0==q.begin&&q.end==p())J(k(),q.begin,q.end),c.each(e,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=n?p():0});else if(1<q.end-q.begin||1==q.end-q.begin&&b.insertMode){J(k(),q.begin,q.end);var l=p();if(!1==b.greedy)n?O(0,q.end-1,I(q.end),!0):y(q.begin,l);else for(var o=q.begin;o<q.end;o++)u(o)&&(n?O(0,q.end-1,I(q.end),!0):y(q.begin,
l));E(j,!1,!0,k())}else c.each(e,function(c){d=c;h=Y?q.end:q.begin;var c=k(),e=n?H(p()+1):s(-1),g=p();if(m==b.keyCode.DELETE){if(n?h>e:h<e)h=e;if(h<g&&(b.numericInput&&""!=b.radixPoint&&c[h]==b.radixPoint?(h=c.length-1==h?h:s(h),h=y(h,g)):n?(h=O(0,h,I(h),!0),h=s(h)):h=y(h,g),void 0!=a().lastValidPosition))-1!=a().lastValidPosition&&k()[a().lastValidPosition]==f()[a().lastValidPosition]&&(a().lastValidPosition=n?s(a().lastValidPosition):0==a().lastValidPosition?-1:H(a().lastValidPosition)),(n?a().lastValidPosition>
e:a().lastValidPosition<e)?(a().lastValidPosition=void 0,a().p=e):(a().writeOutBuffer=!0,a().p=h)}else if(m==b.keyCode.BACKSPACE)if(n?h<=e:h>e){if(h-=1,b.numericInput&&""!=b.radixPoint&&c[h]==b.radixPoint?(h=O(0,c.length-1==h?h:h-1,I(h),!0),h++):n?(h=O(0,h,I(h),!0),h=c[h+1]==b.radixPoint?h+1:s(h)):h=y(h,g),void 0!=a().lastValidPosition)-1!=a().lastValidPosition&&k()[a().lastValidPosition]==f()[a().lastValidPosition]&&(a().lastValidPosition=n?s(a().lastValidPosition):0==a().lastValidPosition?-1:H(a().lastValidPosition)),
(n?a().lastValidPosition>e:a().lastValidPosition<e)?(a().lastValidPosition=void 0,a().p=e):(a().writeOutBuffer=!0,a().p=h)}else 0<d&&(a().lastValidPosition=void 0,a().writeOutBuffer=!0,a().p=e,d=0,a().buffer=f().slice(),a().p=n?H(p()+1):s(-1),a().lastValidPosition=void 0)});B(n);F(j,k(),a().p);j._valueGet()==f().join("")&&c(j).trigger("cleared");b.showTooltip&&v.prop("title",a().mask)}else m==b.keyCode.END||m==b.keyCode.PAGE_DOWN?setTimeout(function(){var c=n?a().lastValidPosition:s(a().lastValidPosition);
!b.insertMode&&(c==p()&&!g.shiftKey)&&c--;C(j,g.shiftKey?q.begin:c,c)},0):m==b.keyCode.HOME&&!g.shiftKey||m==b.keyCode.PAGE_UP?C(j,0,g.shiftKey?q.begin:0):m==b.keyCode.ESCAPE?(j._valueSet(a().undoBuffer),E(j,!0,!0)):m==b.keyCode.INSERT?(b.insertMode=!b.insertMode,C(j,!b.insertMode&&q.begin==p()?q.begin-1:q.begin)):!1==b.insertMode&&!g.shiftKey&&(m==b.keyCode.RIGHT?setTimeout(function(){var a=C(j);C(j,a.begin)},0):m==b.keyCode.LEFT&&setTimeout(function(){var a=C(j);C(j,a.begin-1)},0));b.onKeyDown.call(this,
g,k(),b);W=-1!=c.inArray(m,b.ignorables)}function $(f,j,m,q,h,x){if(void 0==m&&U)return!1;U=!0;var A=c(this),f=f||window.event,m=m||f.which||f.charCode||f.keyCode,r=String.fromCharCode(m);if((f.ctrlKey||f.metaKey||W)&&!0!==j)return!0;if(m){var G,v;j?(m=h?x:b.numericInput?s(a().p):a().p,G={begin:m,end:m}):G=C(this);var m=d,E=!1;c.each(e,function(c){d=c;a().undoBuffer=k().join("");if(G.end-G.begin>1||G.end-G.begin==1&&b.insertMode){c=G.end<p()?G.end:p();J(k(),G.begin,c);var e=p();if(b.greedy==false)n?
O(0,c-1,I(c),true):y(G.begin,e);else for(var f=G.begin;f<c;f++)u(f)&&(n?O(0,c-1,I(c),true):y(G.begin,e));E=true}});d=m;if(n){var w=H(E?G.begin:G.end),m=l(w,r,h,n);!0===h&&(m=[{activeMasksetIndex:d,result:m}]);c.each(m,function(c,e){d=e.activeMasksetIndex;a().writeOutBuffer=true;var f=e.result;if(f!==false){var h=false,g=k();if(f!==true){h=f.refresh;w=f.pos!=void 0?f.pos:w;r=f.c!=void 0?f.c:r}if(h!==true){var h=p(),j=s(-1),f=j;if(b.insertMode==true){if(a().greedy==true)for(var m=g.slice();z(m,f,true)!=
I(f)&&f<=w;)f=f==h?h+1:s(f);if(f<=w&&(a().greedy||g.length<h||z(g,w)==I(w))){if(g[j]!=I(j)&&g.length<h){g=K(g,-1,n);if((E?G.begin:G.end)!=0)w=w+g}y(f,w,r)}else a().writeOutBuffer=false}else o(g,w,r,true,n)}a().p=w}});!0!==h&&B(n);if(!1!==q&&(c.each(m,function(a,b){if(b.activeMasksetIndex==d){v=b;return false}}),void 0!=v))if(setTimeout(function(){b.onKeyValidation.call(this,v.result,b)},0),a().writeOutBuffer&&!1!==v.result){var D=k();F(this,D,j?void 0:b.numericInput?s(a().p):a().p);setTimeout(function(){S(D)&&
A.trigger("complete")},0)}else a().buffer=a().undoBuffer.split("")}else w=s(G.begin-1),m=l(w,r,h,n),!0===h&&(m=[{activeMasksetIndex:d,result:m}]),c.each(m,function(c,f){d=f.activeMasksetIndex;a().writeOutBuffer=true;var e=f.result;if(e!==false){var h=false,g=k();if(e!==true){h=e.refresh;w=e.pos!=void 0?e.pos:w;r=e.c!=void 0?e.c:r}if(h!==true)if(b.insertMode==true){e=p();for(h=g.slice();z(h,e,true)!=I(e)&&e>=w;)e=e==0?-1:H(e);e>=w?O(w,g.length,r):a().writeOutBuffer=false}else o(g,w,r,true,n);a().p=
s(w)}}),!0!==h&&B(n),!1!==q&&(c.each(m,function(a,b){if(b.activeMasksetIndex==d){v=b;return false}}),void 0!=v&&(setTimeout(function(){b.onKeyValidation.call(this,v.result,b)},0),a().writeOutBuffer&&!1!==v.result?(w=a().p,D=k(),F(this,D,j?void 0:w),setTimeout(function(){S(D)&&A.trigger("complete")},0)):a().buffer=a().undoBuffer.split("")));T&&!0!==j&&C(this,g,t);b.showTooltip&&A.prop("title",a().mask);f.preventDefault()}}function Z(e){var d=c(this),g=e.keyCode,j=k();b.onKeyUp.call(this,e,j,b);g==
b.keyCode.TAB&&(d.hasClass("focus.inputmask")&&0==this._valueGet().length&&b.showMaskOnFocus)&&(j=f().slice(),F(this,j),n||C(this,0),a().undoBuffer=this._valueGet())}var v=c(j);if(v.is(":input")){v.data("inputmask",{masksets:e,activeMasksetIndex:d,opts:b,isRTL:!1});b.showTooltip&&v.prop("title",a().mask);a().greedy=a().greedy?a().greedy:0==a().repeat;var N=v.prop("maxLength");p()>N&&-1<N&&(N<f().length&&(f().length=N),!1==a().greedy&&(a().repeat=Math.round(N/f().length)),v.prop("maxLength",2*p()));
M(j);a().undoBuffer=j._valueGet();var U=!1,W=!1,n=!1;if("rtl"==j.dir||b.numericInput)("rtl"==j.dir||b.numericInput&&b.rightAlignNumerics)&&v.css("text-align","right"),j.dir="ltr",v.removeAttr("dir"),N=v.data("inputmask"),N.isRTL=!0,v.data("inputmask",N),n=!0;v.unbind(".inputmask");v.removeClass("focus.inputmask");v.bind("mouseenter.inputmask",function(){!c(this).hasClass("focus.inputmask")&&b.showMaskOnHover&&this._valueGet()!=k().join("")&&F(this,k())}).bind("blur.inputmask",function(){var g=c(this),
j=this._valueGet(),m=k();g.removeClass("focus.inputmask");j!=a().undoBuffer&&g.change();b.clearMaskOnLostFocus&&j!=""&&(j==f().join("")?this._valueSet(""):Q(this));if(!S(m)){g.trigger("incomplete");if(b.clearIncomplete){c.each(e,function(a,b){b.buffer=b._buffer.slice();b.lastValidPosition=void 0;b.p=n?p():0});d=0;if(b.clearMaskOnLostFocus)this._valueSet("");else{m=f().slice();F(this,m)}}}}).bind("focus.inputmask",function(){var e=c(this),d=this._valueGet();b.showMaskOnFocus&&!e.hasClass("focus.inputmask")&&
(!b.showMaskOnHover||b.showMaskOnHover&&d=="")&&this._valueGet()!=k().join("")&&F(this,k(),a().p);e.addClass("focus.inputmask");a().undoBuffer=this._valueGet()}).bind("mouseleave.inputmask",function(){var a=c(this);b.clearMaskOnLostFocus&&(a.hasClass("focus.inputmask")||(this._valueGet()==f().join("")||this._valueGet()==""?this._valueSet(""):Q(this)))}).bind("click.inputmask",function(){var e=this;setTimeout(function(){var d=C(e),f=k();if(d.begin==d.end){var g=d.begin,h=a().lastValidPosition;r(e,
d);if(n){d=b.numericInput?b.skipRadixDance===false&&b.radixPoint!=""&&c.inArray(b.radixPoint,f)!=-1?c.inArray(b.radixPoint,f):p():H((h==void 0?p():h)+1);C(e,g>d&&(l(g,f[g],true,n)!==false||!u(g))?g:d)}else{d=s(h==void 0?-1:h);C(e,g<d&&(l(g,f[g],true,n)!==false||!u(g))?g:d)}}},0)}).bind("dblclick.inputmask",function(){var b=this;a().lastValidPosition!=void 0&&setTimeout(function(){n?C(b,H(a().lastValidPosition),p()):C(b,0,s(a().lastValidPosition))},0)}).bind("keydown.inputmask",V).bind("keypress.inputmask",
$).bind("keyup.inputmask",Z).bind(ba+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this,b=c(a);setTimeout(function(){E(a,true,false);S(k())&&b.trigger("complete");b.click()},0)}).bind("setvalue.inputmask",function(){a().undoBuffer=this._valueGet();E(this,true);this._valueGet()==f().join("")&&this._valueSet("")}).bind("complete.inputmask",b.oncomplete).bind("incomplete.inputmask",b.onincomplete).bind("cleared.inputmask",b.oncleared);E(j,!0,!1);var X;try{X=document.activeElement}catch(ca){}X===
j?(v.addClass("focus.inputmask"),C(j,a().lastValidPosition)):b.clearMaskOnLostFocus&&(k().join("")==f().join("")?j._valueSet(""):Q(j));L(j)}};return this}var b=c.extend(!0,{},c.inputmask.defaults,E),D=null!==navigator.userAgent.match(/msie 10/i),aa=null!==navigator.userAgent.match(/iphone/i),T=null!==navigator.userAgent.match(/android.*safari.*/i),ba=function(b){var c=document.createElement("input"),b="on"+b,g=b in c;g||(c.setAttribute(b,"return;"),g="function"==typeof c[b]);return g}("paste")&&!D?
"paste":"input",Y,o,z=0;T&&(D=navigator.userAgent.match(/safari.*/i),Y=533>=parseInt(RegExp(/[0-9]+/).exec(D)));if("string"===typeof K)switch(K){case "mask":return F(b.alias,E),o=Q(),this.each(function(){L(c.extend(true,{},o),0).mask(this)});case "unmaskedvalue":return D=c(this),o=D.data("inputmask").masksets,z=D.data("inputmask").activeMasksetIndex,b=D.data("inputmask").opts,L(o,z).unmaskedvalue(this);case "remove":return this.each(function(){var e=c(this),d=this;setTimeout(function(){if(e.data("inputmask")){o=
e.data("inputmask").masksets;z=e.data("inputmask").activeMasksetIndex;b=e.data("inputmask").opts;d._valueSet(L(o,z).unmaskedvalue(e,true));e.removeData("inputmask");e.unbind(".inputmask");e.removeClass("focus.inputmask");var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(d,"value"));if(c&&c.get)d._valueGet&&Object.defineProperty(d,"value",{get:d._valueGet,set:d._valueSet});else if(document.__lookupGetter__&&d.__lookupGetter__("value")&&d._valueGet){d.__defineGetter__("value",
d._valueGet);d.__defineSetter__("value",d._valueSet)}delete d._valueGet;delete d._valueSet}},0)});case "getemptymask":return this.data("inputmask")?(o=this.data("inputmask").masksets,z=this.data("inputmask").activeMasksetIndex,o[z]._buffer.join("")):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").opts.autoUnmask:!1;case "isComplete":return o=this.data("inputmask").masksets,z=this.data("inputmask").activeMasksetIndex,b=this.data("inputmask").opts,L(o,z).isComplete(this[0]._valueGet().split(""));
default:return F(K,E)||(b.mask=K),o=Q(),this.each(function(){L(c.extend(true,{},o),z).mask(this)})}else{if("object"==typeof K)return b=c.extend(!0,{},c.inputmask.defaults,K),F(b.alias,K),o=Q(),this.each(function(){L(c.extend(true,{},o),z).mask(this)});if(void 0==K)return this.each(function(){var e=c(this).attr("data-inputmask");if(e&&e!="")try{var e=e.replace(RegExp("'","g"),'"'),d=c.parseJSON("{"+e+"}");b=c.extend(true,{},c.inputmask.defaults,E);c.extend(true,b,d);F(b.alias,d);b.alias=void 0;c(this).inputmask(b)}catch(g){}})}return this})})(jQuery);
