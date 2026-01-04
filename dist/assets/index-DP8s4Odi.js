(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Gy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function $w(){if(Zm)return Re;Zm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.iterator;function C(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Y={};function W(N,$,ue){this.props=N,this.context=$,this.refs=Y,this.updater=ue||j}W.prototype.isReactComponent={},W.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},W.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function me(){}me.prototype=W.prototype;function ce(N,$,ue){this.props=N,this.context=$,this.refs=Y,this.updater=ue||j}var de=ce.prototype=new me;de.constructor=ce,K(de,W.prototype),de.isPureReactComponent=!0;var Ee=Array.isArray,ze=Object.prototype.hasOwnProperty,Te={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(N,$,ue){var Ie,Ae={},Ne=null,Le=null;if($!=null)for(Ie in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(Ne=""+$.key),$)ze.call($,Ie)&&!D.hasOwnProperty(Ie)&&(Ae[Ie]=$[Ie]);var Me=arguments.length-2;if(Me===1)Ae.children=ue;else if(1<Me){for(var Be=Array(Me),wt=0;wt<Me;wt++)Be[wt]=arguments[wt+2];Ae.children=Be}if(N&&N.defaultProps)for(Ie in Me=N.defaultProps,Me)Ae[Ie]===void 0&&(Ae[Ie]=Me[Ie]);return{$$typeof:r,type:N,key:Ne,ref:Le,props:Ae,_owner:Te.current}}function R(N,$){return{$$typeof:r,type:N.type,key:$,ref:N.ref,props:N.props,_owner:N._owner}}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function V(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ue){return $[ue]})}var b=/\/+/g;function A(N,$){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):$.toString(36)}function Qe(N,$,ue,Ie,Ae){var Ne=typeof N;(Ne==="undefined"||Ne==="boolean")&&(N=null);var Le=!1;if(N===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(N.$$typeof){case r:case e:Le=!0}}if(Le)return Le=N,Ae=Ae(Le),N=Ie===""?"."+A(Le,0):Ie,Ee(Ae)?(ue="",N!=null&&(ue=N.replace(b,"$&/")+"/"),Qe(Ae,$,ue,"",function(wt){return wt})):Ae!=null&&(P(Ae)&&(Ae=R(Ae,ue+(!Ae.key||Le&&Le.key===Ae.key?"":(""+Ae.key).replace(b,"$&/")+"/")+N)),$.push(Ae)),1;if(Le=0,Ie=Ie===""?".":Ie+":",Ee(N))for(var Me=0;Me<N.length;Me++){Ne=N[Me];var Be=Ie+A(Ne,Me);Le+=Qe(Ne,$,ue,Be,Ae)}else if(Be=C(N),typeof Be=="function")for(N=Be.call(N),Me=0;!(Ne=N.next()).done;)Ne=Ne.value,Be=Ie+A(Ne,Me++),Le+=Qe(Ne,$,ue,Be,Ae);else if(Ne==="object")throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function _t(N,$,ue){if(N==null)return N;var Ie=[],Ae=0;return Qe(N,Ie,"","",function(Ne){return $.call(ue,Ne,Ae++)}),Ie}function vt(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(ue){(N._status===0||N._status===-1)&&(N._status=1,N._result=ue)},function(ue){(N._status===0||N._status===-1)&&(N._status=2,N._result=ue)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Ve={current:null},te={transition:null},X={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:te,ReactCurrentOwner:Te};function B(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:_t,forEach:function(N,$,ue){_t(N,function(){$.apply(this,arguments)},ue)},count:function(N){var $=0;return _t(N,function(){$++}),$},toArray:function(N){return _t(N,function($){return $})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Re.Component=W,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ce,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Re.act=B,Re.cloneElement=function(N,$,ue){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ie=K({},N.props),Ae=N.key,Ne=N.ref,Le=N._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,Le=Te.current),$.key!==void 0&&(Ae=""+$.key),N.type&&N.type.defaultProps)var Me=N.type.defaultProps;for(Be in $)ze.call($,Be)&&!D.hasOwnProperty(Be)&&(Ie[Be]=$[Be]===void 0&&Me!==void 0?Me[Be]:$[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=ue;else if(1<Be){Me=Array(Be);for(var wt=0;wt<Be;wt++)Me[wt]=arguments[wt+2];Ie.children=Me}return{$$typeof:r,type:N.type,key:Ae,ref:Ne,props:Ie,_owner:Le}},Re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Re.createElement=I,Re.createFactory=function(N){var $=I.bind(null,N);return $.type=N,$},Re.createRef=function(){return{current:null}},Re.forwardRef=function(N){return{$$typeof:p,render:N}},Re.isValidElement=P,Re.lazy=function(N){return{$$typeof:w,_payload:{_status:-1,_result:N},_init:vt}},Re.memo=function(N,$){return{$$typeof:_,type:N,compare:$===void 0?null:$}},Re.startTransition=function(N){var $=te.transition;te.transition={};try{N()}finally{te.transition=$}},Re.unstable_act=B,Re.useCallback=function(N,$){return Ve.current.useCallback(N,$)},Re.useContext=function(N){return Ve.current.useContext(N)},Re.useDebugValue=function(){},Re.useDeferredValue=function(N){return Ve.current.useDeferredValue(N)},Re.useEffect=function(N,$){return Ve.current.useEffect(N,$)},Re.useId=function(){return Ve.current.useId()},Re.useImperativeHandle=function(N,$,ue){return Ve.current.useImperativeHandle(N,$,ue)},Re.useInsertionEffect=function(N,$){return Ve.current.useInsertionEffect(N,$)},Re.useLayoutEffect=function(N,$){return Ve.current.useLayoutEffect(N,$)},Re.useMemo=function(N,$){return Ve.current.useMemo(N,$)},Re.useReducer=function(N,$,ue){return Ve.current.useReducer(N,$,ue)},Re.useRef=function(N){return Ve.current.useRef(N)},Re.useState=function(N){return Ve.current.useState(N)},Re.useSyncExternalStore=function(N,$,ue){return Ve.current.useSyncExternalStore(N,$,ue)},Re.useTransition=function(){return Ve.current.useTransition()},Re.version="18.3.1",Re}var eg;function Ky(){return eg||(eg=1,sd.exports=$w()),sd.exports}var Nt=Ky();const z=Gy(Nt);var Eu={},od={exports:{}},Zt={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function qw(){return tg||(tg=1,(function(r){function e(te,X){var B=te.length;te.push(X);e:for(;0<B;){var N=B-1>>>1,$=te[N];if(0<o($,X))te[N]=X,te[B]=$,B=N;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var X=te[0],B=te.pop();if(B!==X){te[0]=B;e:for(var N=0,$=te.length,ue=$>>>1;N<ue;){var Ie=2*(N+1)-1,Ae=te[Ie],Ne=Ie+1,Le=te[Ne];if(0>o(Ae,B))Ne<$&&0>o(Le,Ae)?(te[N]=Le,te[Ne]=B,N=Ne):(te[N]=Ae,te[Ie]=B,N=Ie);else if(Ne<$&&0>o(Le,B))te[N]=Le,te[Ne]=B,N=Ne;else break e}}return X}function o(te,X){var B=te.sortIndex-X.sortIndex;return B!==0?B:te.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],w=1,S=null,C=3,j=!1,K=!1,Y=!1,W=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(te){for(var X=t(_);X!==null;){if(X.callback===null)s(_);else if(X.startTime<=te)s(_),X.sortIndex=X.expirationTime,e(g,X);else break;X=t(_)}}function Ee(te){if(Y=!1,de(te),!K)if(t(g)!==null)K=!0,vt(ze);else{var X=t(_);X!==null&&Ve(Ee,X.startTime-te)}}function ze(te,X){K=!1,Y&&(Y=!1,me(I),I=-1),j=!0;var B=C;try{for(de(X),S=t(g);S!==null&&(!(S.expirationTime>X)||te&&!V());){var N=S.callback;if(typeof N=="function"){S.callback=null,C=S.priorityLevel;var $=N(S.expirationTime<=X);X=r.unstable_now(),typeof $=="function"?S.callback=$:S===t(g)&&s(g),de(X)}else s(g);S=t(g)}if(S!==null)var ue=!0;else{var Ie=t(_);Ie!==null&&Ve(Ee,Ie.startTime-X),ue=!1}return ue}finally{S=null,C=B,j=!1}}var Te=!1,D=null,I=-1,R=5,P=-1;function V(){return!(r.unstable_now()-P<R)}function b(){if(D!==null){var te=r.unstable_now();P=te;var X=!0;try{X=D(!0,te)}finally{X?A():(Te=!1,D=null)}}else Te=!1}var A;if(typeof ce=="function")A=function(){ce(b)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,_t=Qe.port2;Qe.port1.onmessage=b,A=function(){_t.postMessage(null)}}else A=function(){W(b,0)};function vt(te){D=te,Te||(Te=!0,A())}function Ve(te,X){I=W(function(){te(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(te){te.callback=null},r.unstable_continueExecution=function(){K||j||(K=!0,vt(ze))},r.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<te?Math.floor(1e3/te):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(te){switch(C){case 1:case 2:case 3:var X=3;break;default:X=C}var B=C;C=X;try{return te()}finally{C=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(te,X){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var B=C;C=te;try{return X()}finally{C=B}},r.unstable_scheduleCallback=function(te,X,B){var N=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?N+B:N):B=N,te){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=B+$,te={id:w++,callback:X,priorityLevel:te,startTime:B,expirationTime:$,sortIndex:-1},B>N?(te.sortIndex=B,e(_,te),t(g)===null&&te===t(_)&&(Y?(me(I),I=-1):Y=!0,Ve(Ee,B-N))):(te.sortIndex=$,e(g,te),K||j||(K=!0,vt(ze))),te},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(te){var X=C;return function(){var B=C;C=X;try{return te.apply(this,arguments)}finally{C=B}}}})(ld)),ld}var ng;function Hw(){return ng||(ng=1,ad.exports=qw()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Ww(){if(rg)return Zt;rg=1;var r=Ky(),e=Hw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},S={};function C(n){return g.call(S,n)?!0:g.call(w,n)?!1:_.test(n)?S[n]=!0:(w[n]=!0,!1)}function j(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,i,a,c){if(i===null||typeof i>"u"||j(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Y(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];W[i]=new Y(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(me,ce);W[i]=new Y(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(me,ce);W[i]=new Y(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(me,ce);W[i]=new Y(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function de(n,i,a,c){var d=W.hasOwnProperty(i)?W[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(K(i,a,d,c)&&(a=null),c||d===null?C(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Te=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),V=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),te=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var B=Object.assign,N;function $(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var ue=!1;function Ie(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,T=m.length-1;1<=v&&0<=T&&d[v]!==m[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==m[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==m[T]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=T);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ae(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Te:return"Portal";case R:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case Qe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case b:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case vt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function dr(n){n._valueTracker||(n._valueTracker=wt(n))}function vs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xi(n,i){var a=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ws(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Fo(n,i){i=i.checked,i!=null&&de(n,"checked",i,!1)}function Uo(n,i){Fo(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Es(n,i.type,a):i.hasOwnProperty("defaultValue")&&Es(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ol(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Es(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var fr=Array.isArray;function pr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function zo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ts(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function Is(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function jo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ht(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ht(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var mr,Bo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=mr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ur(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vi=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(n){Vi.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Di[i]=Di[n]})});function $o(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Di.hasOwnProperty(n)&&Di[n]?(""+i).trim():i+"px"}function qo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=$o(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ho=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(n,i){if(i){if(Ho[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Go(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function Ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var As=null,fn=null,Wn=null;function Rs(n){if(n=ya(n)){if(typeof As!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ll(i),As(n.stateNode,n.type,i))}}function Gn(n){fn?Wn?Wn.push(n):Wn=[n]:fn=n}function Ko(){if(fn){var n=fn,i=Wn;if(Wn=fn=null,Rs(n),i)for(n=0;n<i.length;n++)Rs(i[n])}}function Oi(n,i){return n(i)}function Qo(){}var gr=!1;function Xo(n,i,a){if(gr)return n(i,a);gr=!0;try{return Oi(n,i,a)}finally{gr=!1,(fn!==null||Wn!==null)&&(Qo(),Ko())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Ll(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Cs=!1;if(p)try{var An={};Object.defineProperty(An,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Cs=!1}function Li(n,i,a,c,d,m,v,T,k){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(Q){this.onError(Q)}}var Mi=!1,ks=null,Rn=!1,Yo=null,Vc={onError:function(n){Mi=!0,ks=n}};function Ps(n,i,a,c,d,m,v,T,k){Mi=!1,ks=null,Li.apply(Vc,arguments)}function al(n,i,a,c,d,m,v,T,k){if(Ps.apply(this,arguments),Mi){if(Mi){var F=ks;Mi=!1,ks=null}else throw Error(t(198));Rn||(Rn=!0,Yo=F)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Fi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function kn(n){if(Cn(n)!==n)throw Error(t(188))}function ll(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return kn(d),n;if(m===c)return kn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=m;break}if(T===c){v=!0,c=d,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,c=d;break}if(T===c){v=!0,c=m,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Jo(n){return n=ll(n),n!==null?Ns(n):null}function Ns(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ns(n);if(i!==null)return i;n=n.sibling}return null}var xs=e.unstable_scheduleCallback,Zo=e.unstable_cancelCallback,ul=e.unstable_shouldYield,bc=e.unstable_requestPaint,$e=e.unstable_now,cl=e.unstable_getCurrentPriorityLevel,Ui=e.unstable_ImmediatePriority,zr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,ea=e.unstable_LowPriority,hl=e.unstable_IdlePriority,zi=null,rn=null;function dl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(zi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:pl,ta=Math.log,fl=Math.LN2;function pl(n){return n>>>=0,n===0?32:31-(ta(n)/fl|0)|0}var Ds=64,Vs=4194304;function jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ji(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=jr(T):(m&=v,m!==0&&(c=jr(m)))}else v=a&~d,v!==0?c=jr(v):m!==0&&(c=jr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Oc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Bt(m),T=1<<v,k=d[v];k===-1?((T&a)===0||(T&c)!==0)&&(d[v]=Oc(T,i)):k<=i&&(n.expiredLanes|=T),m&=~T}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bi(){var n=Ds;return Ds<<=1,(Ds&4194240)===0&&(Ds=64),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $r(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function je(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function qr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ml,bs,gl,yl,_l,na=!1,Kn=[],Rt=null,Pn=null,Nn=null,Wr=new Map,mn=new Map,Qn=[],Lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vl(n,i){switch(n){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Wr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(i.pointerId)}}function Wt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ya(i),i!==null&&bs(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Mc(n,i,a,c,d){switch(i){case"focusin":return Rt=Wt(Rt,n,i,a,c,d),!0;case"dragenter":return Pn=Wt(Pn,n,i,a,c,d),!0;case"mouseover":return Nn=Wt(Nn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Wr.set(m,Wt(Wr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,mn.set(m,Wt(mn.get(m)||null,n,i,a,c,d)),!0}return!1}function wl(n){var i=Gi(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=Fi(a),i!==null){n.blockedOn=i,_l(n.priority,function(){gl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _r(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Os(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);bi=c,a.target.dispatchEvent(c),bi=null}else return i=ya(a),i!==null&&bs(i),n.blockedOn=a,!1;i.shift()}return!0}function $i(n,i,a){_r(n)&&a.delete(i)}function El(){na=!1,Rt!==null&&_r(Rt)&&(Rt=null),Pn!==null&&_r(Pn)&&(Pn=null),Nn!==null&&_r(Nn)&&(Nn=null),Wr.forEach($i),mn.forEach($i)}function xn(n,i){n.blockedOn===i&&(n.blockedOn=null,na||(na=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,El)))}function Dn(n){function i(d){return xn(d,n)}if(0<Kn.length){xn(Kn[0],n);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Rt!==null&&xn(Rt,n),Pn!==null&&xn(Pn,n),Nn!==null&&xn(Nn,n),Wr.forEach(i),mn.forEach(i),a=0;a<Qn.length;a++)c=Qn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qn.length&&(a=Qn[0],a.blockedOn===null);)wl(a),a.blockedOn===null&&Qn.shift()}var vr=Ee.ReactCurrentBatchConfig,Gr=!0;function Xe(n,i,a,c){var d=Pe,m=vr.transition;vr.transition=null;try{Pe=1,ra(n,i,a,c)}finally{Pe=d,vr.transition=m}}function Fc(n,i,a,c){var d=Pe,m=vr.transition;vr.transition=null;try{Pe=4,ra(n,i,a,c)}finally{Pe=d,vr.transition=m}}function ra(n,i,a,c){if(Gr){var d=Os(n,i,a,c);if(d===null)Qc(n,i,c,qi,a),vl(n,c);else if(Mc(d,n,i,a,c))c.stopPropagation();else if(vl(n,c),i&4&&-1<Lc.indexOf(n)){for(;d!==null;){var m=ya(d);if(m!==null&&ml(m),m=Os(n,i,a,c),m===null&&Qc(n,i,c,qi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Qc(n,i,c,null,a)}}var qi=null;function Os(n,i,a,c){if(qi=null,n=Ss(c),n=Gi(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Fi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return qi=n,null}function ia(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cl()){case Ui:return 1;case zr:return 4;case pn:case ea:return 16;case hl:return 536870912;default:return 16}default:return 16}}var on=null,Ls=null,Gt=null;function sa(){if(Gt)return Gt;var n,i=Ls,a=i.length,c,d="value"in on?on.value:on.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Ms(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Xn(){return!0}function oa(){return!1}function Ct(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:oa,this.isPropagationStopped=oa,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),i}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Ct(Vn),Yn=B({},Vn,{view:0,detail:0}),Uc=Ct(Yn),Us,wr,Kr,Hi=B({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kr&&(Kr&&n.type==="mousemove"?(Us=n.screenX-Kr.screenX,wr=n.screenY-Kr.screenY):wr=Us=0,Kr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:wr}}),zs=Ct(Hi),aa=B({},Hi,{dataTransfer:0}),Tl=Ct(aa),js=B({},Yn,{relatedTarget:0}),Bs=Ct(js),Il=B({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=Ct(Il),Sl=B({},Vn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Al=Ct(Sl),Rl=B({},Vn,{data:0}),la=Ct(Rl),$s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Cl[n])?!!i[n]:!1}function Jn(){return kl}var u=B({},Yn,{key:function(n){if(n.key){var i=$s[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(n){return n.type==="keypress"?Ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(u),y=B({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(y),O=B({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn}),U=Ct(O),ee=B({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Ct(ee),ft=B({},Hi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Ct(ft),Et=[9,13,27,32],st=p&&"CompositionEvent"in window,gn=null;p&&"documentMode"in document&&(gn=document.documentMode);var an=p&&"TextEvent"in window&&!gn,Wi=p&&(!st||gn&&8<gn&&11>=gn),qs=" ",Gf=!1;function Kf(n,i){switch(n){case"keyup":return Et.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function z0(n,i){switch(n){case"compositionend":return Qf(i);case"keypress":return i.which!==32?null:(Gf=!0,qs);case"textInput":return n=i.data,n===qs&&Gf?null:n;default:return null}}function j0(n,i){if(Hs)return n==="compositionend"||!st&&Kf(n,i)?(n=sa(),Gt=Ls=on=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wi&&i.locale!=="ko"?null:i.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!B0[n.type]:i==="textarea"}function Yf(n,i,a,c){Gn(c),i=Vl(i,"onChange"),0<i.length&&(a=new Fs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ua=null,ca=null;function $0(n){mp(n,0)}function Pl(n){var i=Xs(n);if(vs(i))return n}function q0(n,i){if(n==="change")return i}var Jf=!1;if(p){var zc;if(p){var jc="oninput"in document;if(!jc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),jc=typeof Zf.oninput=="function"}zc=jc}else zc=!1;Jf=zc&&(!document.documentMode||9<document.documentMode)}function ep(){ua&&(ua.detachEvent("onpropertychange",tp),ca=ua=null)}function tp(n){if(n.propertyName==="value"&&Pl(ca)){var i=[];Yf(i,ca,n,Ss(n)),Xo($0,i)}}function H0(n,i,a){n==="focusin"?(ep(),ua=i,ca=a,ua.attachEvent("onpropertychange",tp)):n==="focusout"&&ep()}function W0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pl(ca)}function G0(n,i){if(n==="click")return Pl(i)}function K0(n,i){if(n==="input"||n==="change")return Pl(i)}function Q0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:Q0;function ha(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!bn(n[d],i[d]))return!1}return!0}function np(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rp(n,i){var a=np(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=np(a)}}function ip(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ip(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function sp(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function Bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function X0(n){var i=sp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ip(a.ownerDocument.documentElement,a)){if(c!==null&&Bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=rp(a,m);var v=rp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y0=p&&"documentMode"in document&&11>=document.documentMode,Ws=null,$c=null,da=null,qc=!1;function op(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||Ws==null||Ws!==Fr(c)||(c=Ws,"selectionStart"in c&&Bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ha(da,c)||(da=c,c=Vl($c,"onSelect"),0<c.length&&(i=new Fs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ws)))}function Nl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Gs={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Hc={},ap={};p&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function xl(n){if(Hc[n])return Hc[n];if(!Gs[n])return n;var i=Gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ap)return Hc[n]=i[a];return n}var lp=xl("animationend"),up=xl("animationiteration"),cp=xl("animationstart"),hp=xl("transitionend"),dp=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,i){dp.set(n,i),l(i,[n])}for(var Wc=0;Wc<fp.length;Wc++){var Gc=fp[Wc],J0=Gc.toLowerCase(),Z0=Gc[0].toUpperCase()+Gc.slice(1);Qr(J0,"on"+Z0)}Qr(lp,"onAnimationEnd"),Qr(up,"onAnimationIteration"),Qr(cp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(hp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function pp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,al(c,i,void 0,n),n.currentTarget=null}function mp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var T=c[v],k=T.instance,F=T.currentTarget;if(T=T.listener,k!==m&&d.isPropagationStopped())break e;pp(d,T,F),m=k}else for(v=0;v<c.length;v++){if(T=c[v],k=T.instance,F=T.currentTarget,T=T.listener,k!==m&&d.isPropagationStopped())break e;pp(d,T,F),m=k}}}if(Rn)throw n=Yo,Rn=!1,Yo=null,n}function We(n,i){var a=i[th];a===void 0&&(a=i[th]=new Set);var c=n+"__bubble";a.has(c)||(gp(i,n,2,!1),a.add(c))}function Kc(n,i,a){var c=0;i&&(c|=4),gp(a,n,c,i)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Dl]){n[Dl]=!0,s.forEach(function(a){a!=="selectionchange"&&(ew.has(a)||Kc(a,!1,n),Kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Dl]||(i[Dl]=!0,Kc("selectionchange",!1,i))}}function gp(n,i,a,c){switch(ia(i)){case 1:var d=Xe;break;case 4:d=Fc;break;default:d=ra}a=d.bind(null,i,a,n),d=void 0,!Cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Qc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Gi(T),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}T=T.parentNode}}c=c.return}Xo(function(){var F=m,Q=Ss(a),J=[];e:{var G=dp.get(n);if(G!==void 0){var ne=Fs,oe=n;switch(n){case"keypress":if(Ms(a)===0)break e;case"keydown":case"keyup":ne=f;break;case"focusin":oe="focus",ne=Bs;break;case"focusout":oe="blur",ne=Bs;break;case"beforeblur":case"afterblur":ne=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Tl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=U;break;case lp:case up:case cp:ne=Er;break;case hp:ne=Ue;break;case"scroll":ne=Uc;break;case"wheel":ne=xe;break;case"copy":case"cut":case"paste":ne=Al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=E}var ae=(i&4)!==0,rt=!ae&&n==="scroll",L=ae?G!==null?G+"Capture":null:G;ae=[];for(var x=F,M;x!==null;){M=x;var Z=M.stateNode;if(M.tag===5&&Z!==null&&(M=Z,L!==null&&(Z=nt(x,L),Z!=null&&ae.push(ma(x,Z,M)))),rt)break;x=x.return}0<ae.length&&(G=new ne(G,oe,null,a,Q),J.push({event:G,listeners:ae}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==bi&&(oe=a.relatedTarget||a.fromElement)&&(Gi(oe)||oe[Tr]))break e;if((ne||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(oe=a.relatedTarget||a.toElement,ne=F,oe=oe?Gi(oe):null,oe!==null&&(rt=Cn(oe),oe!==rt||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ne=null,oe=F),ne!==oe)){if(ae=zs,Z="onMouseLeave",L="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ae=E,Z="onPointerLeave",L="onPointerEnter",x="pointer"),rt=ne==null?G:Xs(ne),M=oe==null?G:Xs(oe),G=new ae(Z,x+"leave",ne,a,Q),G.target=rt,G.relatedTarget=M,Z=null,Gi(Q)===F&&(ae=new ae(L,x+"enter",oe,a,Q),ae.target=M,ae.relatedTarget=rt,Z=ae),rt=Z,ne&&oe)t:{for(ae=ne,L=oe,x=0,M=ae;M;M=Ks(M))x++;for(M=0,Z=L;Z;Z=Ks(Z))M++;for(;0<x-M;)ae=Ks(ae),x--;for(;0<M-x;)L=Ks(L),M--;for(;x--;){if(ae===L||L!==null&&ae===L.alternate)break t;ae=Ks(ae),L=Ks(L)}ae=null}else ae=null;ne!==null&&yp(J,G,ne,ae,!1),oe!==null&&rt!==null&&yp(J,rt,oe,ae,!0)}}e:{if(G=F?Xs(F):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var le=q0;else if(Xf(G))if(Jf)le=K0;else{le=W0;var fe=H0}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=G0);if(le&&(le=le(n,F))){Yf(J,le,a,Q);break e}fe&&fe(n,G,F),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&Es(G,"number",G.value)}switch(fe=F?Xs(F):window,n){case"focusin":(Xf(fe)||fe.contentEditable==="true")&&(Ws=fe,$c=F,da=null);break;case"focusout":da=$c=Ws=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,op(J,a,Q);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":op(J,a,Q)}var pe;if(st)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Hs?Kf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Wi&&a.locale!=="ko"&&(Hs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Hs&&(pe=sa()):(on=Q,Ls="value"in on?on.value:on.textContent,Hs=!0)),fe=Vl(F,ye),0<fe.length&&(ye=new la(ye,n,null,a,Q),J.push({event:ye,listeners:fe}),pe?ye.data=pe:(pe=Qf(a),pe!==null&&(ye.data=pe)))),(pe=an?z0(n,a):j0(n,a))&&(F=Vl(F,"onBeforeInput"),0<F.length&&(Q=new la("onBeforeInput","beforeinput",null,a,Q),J.push({event:Q,listeners:F}),Q.data=pe))}mp(J,i)})}function ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Vl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(ma(n,m,d)),m=nt(n,i),m!=null&&c.push(ma(n,m,d))),n=n.return}return c}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var T=a,k=T.alternate,F=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&F!==null&&(T=F,d?(k=nt(a,m),k!=null&&v.unshift(ma(a,k,T))):d||(k=nt(a,m),k!=null&&v.push(ma(a,k,T)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var tw=/\r\n?/g,nw=/\u0000|\uFFFD/g;function _p(n){return(typeof n=="string"?n:""+n).replace(tw,`
`).replace(nw,"")}function bl(n,i,a){if(i=_p(i),_p(n)!==i&&a)throw Error(t(425))}function Ol(){}var Xc=null,Yc=null;function Jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,rw=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,iw=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(n){return vp.resolve(null).then(n).catch(sw)}:Zc;function sw(n){setTimeout(function(){throw n})}function eh(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Dn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Dn(i)}function Xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function wp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Qs,ga="__reactProps$"+Qs,Tr="__reactContainer$"+Qs,th="__reactEvents$"+Qs,ow="__reactListeners$"+Qs,aw="__reactHandles$"+Qs;function Gi(n){var i=n[Zn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Tr]||a[Zn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=wp(n);n!==null;){if(a=n[Zn])return a;n=wp(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[Zn]||n[Tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ll(n){return n[ga]||null}var nh=[],Ys=-1;function Yr(n){return{current:n}}function Ge(n){0>Ys||(n.current=nh[Ys],nh[Ys]=null,Ys--)}function qe(n,i){Ys++,nh[Ys]=n.current,n.current=i}var Jr={},bt=Yr(Jr),Kt=Yr(!1),Ki=Jr;function Js(n,i){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Ml(){Ge(Kt),Ge(bt)}function Ep(n,i,a){if(bt.current!==Jr)throw Error(t(168));qe(bt,i),qe(Kt,a)}function Tp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return B({},a,c)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Ki=bt.current,qe(bt,n),qe(Kt,Kt.current),!0}function Ip(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Tp(n,i,Ki),c.__reactInternalMemoizedMergedChildContext=n,Ge(Kt),Ge(bt),qe(bt,n)):Ge(Kt),qe(Kt,a)}var Ir=null,Ul=!1,rh=!1;function Sp(n){Ir===null?Ir=[n]:Ir.push(n)}function lw(n){Ul=!0,Sp(n)}function Zr(){if(!rh&&Ir!==null){rh=!0;var n=0,i=Pe;try{var a=Ir;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ir=null,Ul=!1}catch(d){throw Ir!==null&&(Ir=Ir.slice(n+1)),xs(Ui,Zr),d}finally{Pe=i,rh=!1}}return null}var Zs=[],eo=0,zl=null,jl=0,yn=[],_n=0,Qi=null,Sr=1,Ar="";function Xi(n,i){Zs[eo++]=jl,Zs[eo++]=zl,zl=n,jl=i}function Ap(n,i,a){yn[_n++]=Sr,yn[_n++]=Ar,yn[_n++]=Qi,Qi=n;var c=Sr;n=Ar;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Sr=1<<32-Bt(i)+d|a<<d|c,Ar=m+n}else Sr=1<<m|a<<d|c,Ar=n}function ih(n){n.return!==null&&(Xi(n,1),Ap(n,1,0))}function sh(n){for(;n===zl;)zl=Zs[--eo],Zs[eo]=null,jl=Zs[--eo],Zs[eo]=null;for(;n===Qi;)Qi=yn[--_n],yn[_n]=null,Ar=yn[--_n],yn[_n]=null,Sr=yn[--_n],yn[_n]=null}var ln=null,un=null,Ye=!1,On=null;function Rp(n,i){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=Xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Qi!==null?{id:Sr,overflow:Ar}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function oh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ah(n){if(Ye){var i=un;if(i){var a=i;if(!Cp(n,i)){if(oh(n))throw Error(t(418));i=Xr(a.nextSibling);var c=ln;i&&Cp(n,i)?Rp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,ln=n)}}else{if(oh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,ln=n}}}function kp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Bl(n){if(n!==ln)return!1;if(!Ye)return kp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Jc(n.type,n.memoizedProps)),i&&(i=un)){if(oh(n))throw Pp(),Error(t(418));for(;i;)Rp(n,i),i=Xr(i.nextSibling)}if(kp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=Xr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?Xr(n.stateNode.nextSibling):null;return!0}function Pp(){for(var n=un;n;)n=Xr(n.nextSibling)}function to(){un=ln=null,Ye=!1}function lh(n){On===null?On=[n]:On.push(n)}var uw=Ee.ReactCurrentBatchConfig;function _a(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var T=d.refs;v===null?delete T[m]:T[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $l(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Np(n){var i=n._init;return i(n._payload)}function xp(n){function i(L,x){if(n){var M=L.deletions;M===null?(L.deletions=[x],L.flags|=16):M.push(x)}}function a(L,x){if(!n)return null;for(;x!==null;)i(L,x),x=x.sibling;return null}function c(L,x){for(L=new Map;x!==null;)x.key!==null?L.set(x.key,x):L.set(x.index,x),x=x.sibling;return L}function d(L,x){return L=ai(L,x),L.index=0,L.sibling=null,L}function m(L,x,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<x?(L.flags|=2,x):M):(L.flags|=2,x)):(L.flags|=1048576,x)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,x,M,Z){return x===null||x.tag!==6?(x=Zh(M,L.mode,Z),x.return=L,x):(x=d(x,M),x.return=L,x)}function k(L,x,M,Z){var le=M.type;return le===D?Q(L,x,M.props.children,Z,M.key):x!==null&&(x.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===vt&&Np(le)===x.type)?(Z=d(x,M.props),Z.ref=_a(L,x,M),Z.return=L,Z):(Z=fu(M.type,M.key,M.props,null,L.mode,Z),Z.ref=_a(L,x,M),Z.return=L,Z)}function F(L,x,M,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=ed(M,L.mode,Z),x.return=L,x):(x=d(x,M.children||[]),x.return=L,x)}function Q(L,x,M,Z,le){return x===null||x.tag!==7?(x=is(M,L.mode,Z,le),x.return=L,x):(x=d(x,M),x.return=L,x)}function J(L,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Zh(""+x,L.mode,M),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ze:return M=fu(x.type,x.key,x.props,null,L.mode,M),M.ref=_a(L,null,x),M.return=L,M;case Te:return x=ed(x,L.mode,M),x.return=L,x;case vt:var Z=x._init;return J(L,Z(x._payload),M)}if(fr(x)||X(x))return x=is(x,L.mode,M,null),x.return=L,x;$l(L,x)}return null}function G(L,x,M,Z){var le=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return le!==null?null:T(L,x,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ze:return M.key===le?k(L,x,M,Z):null;case Te:return M.key===le?F(L,x,M,Z):null;case vt:return le=M._init,G(L,x,le(M._payload),Z)}if(fr(M)||X(M))return le!==null?null:Q(L,x,M,Z,null);$l(L,M)}return null}function ne(L,x,M,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return L=L.get(M)||null,T(x,L,""+Z,le);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ze:return L=L.get(Z.key===null?M:Z.key)||null,k(x,L,Z,le);case Te:return L=L.get(Z.key===null?M:Z.key)||null,F(x,L,Z,le);case vt:var fe=Z._init;return ne(L,x,M,fe(Z._payload),le)}if(fr(Z)||X(Z))return L=L.get(M)||null,Q(x,L,Z,le,null);$l(x,Z)}return null}function oe(L,x,M,Z){for(var le=null,fe=null,pe=x,ye=x=0,St=null;pe!==null&&ye<M.length;ye++){pe.index>ye?(St=pe,pe=null):St=pe.sibling;var Oe=G(L,pe,M[ye],Z);if(Oe===null){pe===null&&(pe=St);break}n&&pe&&Oe.alternate===null&&i(L,pe),x=m(Oe,x,ye),fe===null?le=Oe:fe.sibling=Oe,fe=Oe,pe=St}if(ye===M.length)return a(L,pe),Ye&&Xi(L,ye),le;if(pe===null){for(;ye<M.length;ye++)pe=J(L,M[ye],Z),pe!==null&&(x=m(pe,x,ye),fe===null?le=pe:fe.sibling=pe,fe=pe);return Ye&&Xi(L,ye),le}for(pe=c(L,pe);ye<M.length;ye++)St=ne(pe,L,ye,M[ye],Z),St!==null&&(n&&St.alternate!==null&&pe.delete(St.key===null?ye:St.key),x=m(St,x,ye),fe===null?le=St:fe.sibling=St,fe=St);return n&&pe.forEach(function(li){return i(L,li)}),Ye&&Xi(L,ye),le}function ae(L,x,M,Z){var le=X(M);if(typeof le!="function")throw Error(t(150));if(M=le.call(M),M==null)throw Error(t(151));for(var fe=le=null,pe=x,ye=x=0,St=null,Oe=M.next();pe!==null&&!Oe.done;ye++,Oe=M.next()){pe.index>ye?(St=pe,pe=null):St=pe.sibling;var li=G(L,pe,Oe.value,Z);if(li===null){pe===null&&(pe=St);break}n&&pe&&li.alternate===null&&i(L,pe),x=m(li,x,ye),fe===null?le=li:fe.sibling=li,fe=li,pe=St}if(Oe.done)return a(L,pe),Ye&&Xi(L,ye),le;if(pe===null){for(;!Oe.done;ye++,Oe=M.next())Oe=J(L,Oe.value,Z),Oe!==null&&(x=m(Oe,x,ye),fe===null?le=Oe:fe.sibling=Oe,fe=Oe);return Ye&&Xi(L,ye),le}for(pe=c(L,pe);!Oe.done;ye++,Oe=M.next())Oe=ne(pe,L,ye,Oe.value,Z),Oe!==null&&(n&&Oe.alternate!==null&&pe.delete(Oe.key===null?ye:Oe.key),x=m(Oe,x,ye),fe===null?le=Oe:fe.sibling=Oe,fe=Oe);return n&&pe.forEach(function(Bw){return i(L,Bw)}),Ye&&Xi(L,ye),le}function rt(L,x,M,Z){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ze:e:{for(var le=M.key,fe=x;fe!==null;){if(fe.key===le){if(le=M.type,le===D){if(fe.tag===7){a(L,fe.sibling),x=d(fe,M.props.children),x.return=L,L=x;break e}}else if(fe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===vt&&Np(le)===fe.type){a(L,fe.sibling),x=d(fe,M.props),x.ref=_a(L,fe,M),x.return=L,L=x;break e}a(L,fe);break}else i(L,fe);fe=fe.sibling}M.type===D?(x=is(M.props.children,L.mode,Z,M.key),x.return=L,L=x):(Z=fu(M.type,M.key,M.props,null,L.mode,Z),Z.ref=_a(L,x,M),Z.return=L,L=Z)}return v(L);case Te:e:{for(fe=M.key;x!==null;){if(x.key===fe)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){a(L,x.sibling),x=d(x,M.children||[]),x.return=L,L=x;break e}else{a(L,x);break}else i(L,x);x=x.sibling}x=ed(M,L.mode,Z),x.return=L,L=x}return v(L);case vt:return fe=M._init,rt(L,x,fe(M._payload),Z)}if(fr(M))return oe(L,x,M,Z);if(X(M))return ae(L,x,M,Z);$l(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(a(L,x.sibling),x=d(x,M),x.return=L,L=x):(a(L,x),x=Zh(M,L.mode,Z),x.return=L,L=x),v(L)):a(L,x)}return rt}var no=xp(!0),Dp=xp(!1),ql=Yr(null),Hl=null,ro=null,uh=null;function ch(){uh=ro=Hl=null}function hh(n){var i=ql.current;Ge(ql),n._currentValue=i}function dh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function io(n,i){Hl=n,uh=ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xt=!0),n.firstContext=null)}function vn(n){var i=n._currentValue;if(uh!==n)if(n={context:n,memoizedValue:i,next:null},ro===null){if(Hl===null)throw Error(t(308));ro=n,Hl.dependencies={lanes:0,firstContext:n}}else ro=ro.next=n;return i}var Yi=null;function fh(n){Yi===null?Yi=[n]:Yi.push(n)}function Vp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,fh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function ph(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ti(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,fh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function Wl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}function Op(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Gl(n,i,a,c){var d=n.updateQueue;ei=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,F=k.next;k.next=null,v===null?m=F:v.next=F,v=k;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=F:T.next=F,Q.lastBaseUpdate=k))}if(m!==null){var J=d.baseState;v=0,Q=F=k=null,T=m;do{var G=T.lane,ne=T.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var oe=n,ae=T;switch(G=i,ne=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){J=oe.call(ne,J,G);break e}J=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,G=typeof oe=="function"?oe.call(ne,J,G):oe,G==null)break e;J=B({},J,G);break e;case 2:ei=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[T]:G.push(T))}else ne={eventTime:ne,lane:G,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(F=Q=ne,k=J):Q=Q.next=ne,v|=G;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;G=T,T=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(k=J),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);es|=v,n.lanes=v,n.memoizedState=J}}function Lp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var va={},er=Yr(va),wa=Yr(va),Ea=Yr(va);function Ji(n){if(n===va)throw Error(t(174));return n}function mh(n,i){switch(qe(Ea,i),qe(wa,n),qe(er,va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:dt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=dt(i,n)}Ge(er),qe(er,i)}function so(){Ge(er),Ge(wa),Ge(Ea)}function Mp(n){Ji(Ea.current);var i=Ji(er.current),a=dt(i,n.type);i!==a&&(qe(wa,n),qe(er,a))}function gh(n){wa.current===n&&(Ge(er),Ge(wa))}var Je=Yr(0);function Kl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yh=[];function _h(){for(var n=0;n<yh.length;n++)yh[n]._workInProgressVersionPrimary=null;yh.length=0}var Ql=Ee.ReactCurrentDispatcher,vh=Ee.ReactCurrentBatchConfig,Zi=0,Ze=null,pt=null,Tt=null,Xl=!1,Ta=!1,Ia=0,cw=0;function Ot(){throw Error(t(321))}function wh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function Eh(n,i,a,c,d,m){if(Zi=m,Ze=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ql.current=n===null||n.memoizedState===null?pw:mw,n=a(c,d),Ta){m=0;do{if(Ta=!1,Ia=0,25<=m)throw Error(t(301));m+=1,Tt=pt=null,i.updateQueue=null,Ql.current=gw,n=a(c,d)}while(Ta)}if(Ql.current=Zl,i=pt!==null&&pt.next!==null,Zi=0,Tt=pt=Ze=null,Xl=!1,i)throw Error(t(300));return n}function Th(){var n=Ia!==0;return Ia=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function wn(){if(pt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var i=Tt===null?Ze.memoizedState:Tt.next;if(i!==null)Tt=i,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Tt===null?Ze.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Sa(n,i){return typeof i=="function"?i(n):i}function Ih(n){var i=wn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var T=v=null,k=null,F=m;do{var Q=F.lane;if((Zi&Q)===Q)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var J={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(T=k=J,v=c):k=k.next=J,Ze.lanes|=Q,es|=Q}F=F.next}while(F!==null&&F!==m);k===null?v=c:k.next=T,bn(c,i.memoizedState)||(Xt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ze.lanes|=m,es|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Sh(n){var i=wn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);bn(m,i.memoizedState)||(Xt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Fp(){}function Up(n,i){var a=Ze,c=wn(),d=i(),m=!bn(c.memoizedState,d);if(m&&(c.memoizedState=d,Xt=!0),c=c.queue,Ah(Bp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,Aa(9,jp.bind(null,a,c,d,i),void 0,null),It===null)throw Error(t(349));(Zi&30)!==0||zp(a,i,d)}return d}function zp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function jp(n,i,a,c){i.value=a,i.getSnapshot=c,$p(i)&&qp(n)}function Bp(n,i,a){return a(function(){$p(i)&&qp(n)})}function $p(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function qp(n){var i=Rr(n,1);i!==null&&Un(i,n,1,-1)}function Hp(n){var i=tr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},i.queue=n,n=n.dispatch=fw.bind(null,Ze,n),[i.memoizedState,n]}function Aa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ze.updateQueue,i===null?(i={lastEffect:null,stores:null},Ze.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Wp(){return wn().memoizedState}function Yl(n,i,a,c){var d=tr();Ze.flags|=n,d.memoizedState=Aa(1|i,a,void 0,c===void 0?null:c)}function Jl(n,i,a,c){var d=wn();c=c===void 0?null:c;var m=void 0;if(pt!==null){var v=pt.memoizedState;if(m=v.destroy,c!==null&&wh(c,v.deps)){d.memoizedState=Aa(i,a,m,c);return}}Ze.flags|=n,d.memoizedState=Aa(1|i,a,m,c)}function Gp(n,i){return Yl(8390656,8,n,i)}function Ah(n,i){return Jl(2048,8,n,i)}function Kp(n,i){return Jl(4,2,n,i)}function Qp(n,i){return Jl(4,4,n,i)}function Xp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yp(n,i,a){return a=a!=null?a.concat([n]):null,Jl(4,4,Xp.bind(null,i,n),a)}function Rh(){}function Jp(n,i){var a=wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&wh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Zp(n,i){var a=wn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&wh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function em(n,i,a){return(Zi&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(bn(a,i)||(a=Bi(),Ze.lanes|=a,es|=a,n.baseState=!0),i)}function hw(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=vh.transition;vh.transition={};try{n(!1),i()}finally{Pe=a,vh.transition=c}}function tm(){return wn().memoizedState}function dw(n,i,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},nm(n))rm(i,a);else if(a=Vp(n,i,a,c),a!==null){var d=Ht();Un(a,n,c,d),im(a,i,c)}}function fw(n,i,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(nm(n))rm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,T=m(v,a);if(d.hasEagerState=!0,d.eagerState=T,bn(T,v)){var k=i.interleaved;k===null?(d.next=d,fh(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Vp(n,i,d,c),a!==null&&(d=Ht(),Un(a,n,c,d),im(a,i,c))}}function nm(n){var i=n.alternate;return n===Ze||i!==null&&i===Ze}function rm(n,i){Ta=Xl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function im(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}var Zl={readContext:vn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},pw={readContext:vn,useCallback:function(n,i){return tr().memoizedState=[n,i===void 0?null:i],n},useContext:vn,useEffect:Gp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yl(4194308,4,Xp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yl(4,2,n,i)},useMemo:function(n,i){var a=tr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=tr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=dw.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var i=tr();return n={current:n},i.memoizedState=n},useState:Hp,useDebugValue:Rh,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=Hp(!1),i=n[0];return n=hw.bind(null,n[1]),tr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ze,d=tr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),It===null)throw Error(t(349));(Zi&30)!==0||zp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Gp(Bp.bind(null,c,m,n),[n]),c.flags|=2048,Aa(9,jp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=tr(),i=It.identifierPrefix;if(Ye){var a=Ar,c=Sr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=cw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},mw={readContext:vn,useCallback:Jp,useContext:vn,useEffect:Ah,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:Zp,useReducer:Ih,useRef:Wp,useState:function(){return Ih(Sa)},useDebugValue:Rh,useDeferredValue:function(n){var i=wn();return em(i,pt.memoizedState,n)},useTransition:function(){var n=Ih(Sa)[0],i=wn().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:Up,useId:tm,unstable_isNewReconciler:!1},gw={readContext:vn,useCallback:Jp,useContext:vn,useEffect:Ah,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:Zp,useReducer:Sh,useRef:Wp,useState:function(){return Sh(Sa)},useDebugValue:Rh,useDeferredValue:function(n){var i=wn();return pt===null?i.memoizedState=n:em(i,pt.memoizedState,n)},useTransition:function(){var n=Sh(Sa)[0],i=wn().memoizedState;return[n,i]},useMutableSource:Fp,useSyncExternalStore:Up,useId:tm,unstable_isNewReconciler:!1};function Ln(n,i){if(n&&n.defaultProps){i=B({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ch(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:B({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var eu={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=si(n),m=Cr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ti(n,m,d),i!==null&&(Un(i,n,d,c),Wl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=si(n),m=Cr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ti(n,m,d),i!==null&&(Un(i,n,d,c),Wl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=si(n),d=Cr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ti(n,d,c),i!==null&&(Un(i,n,c,a),Wl(i,n,c))}};function sm(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!ha(a,c)||!ha(d,m):!0}function om(n,i,a){var c=!1,d=Jr,m=i.contextType;return typeof m=="object"&&m!==null?m=vn(m):(d=Qt(i)?Ki:bt.current,c=i.contextTypes,m=(c=c!=null)?Js(n,d):Jr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=eu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function am(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&eu.enqueueReplaceState(i,i.state,null)}function kh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ph(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=vn(m):(m=Qt(i)?Ki:bt.current,d.context=Js(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ch(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&eu.enqueueReplaceState(d,d.state,null),Gl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Ph(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Nh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var yw=typeof WeakMap=="function"?WeakMap:Map;function lm(n,i,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){au||(au=!0,Hh=c),Nh(n,i)},a}function um(n,i,a){a=Cr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Nh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Nh(n,i),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function cm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new yw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=xw.bind(null,n,i,a),i.then(n,n))}function hm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cr(-1,1),i.tag=2,ti(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var _w=Ee.ReactCurrentOwner,Xt=!1;function qt(n,i,a,c){i.child=n===null?Dp(i,null,a,c):no(i,n.child,a,c)}function fm(n,i,a,c,d){a=a.render;var m=i.ref;return io(i,d),c=Eh(n,i,a,c,m,d),a=Th(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,kr(n,i,d)):(Ye&&a&&ih(i),i.flags|=1,qt(n,i,c,d),i.child)}function pm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Jh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,mm(n,i,m,c,d)):(n=fu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(v,c)&&n.ref===i.ref)return kr(n,i,d)}return i.flags|=1,n=ai(m,c),n.ref=i.ref,n.return=i,i.child=n}function mm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ha(m,c)&&n.ref===i.ref)if(Xt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return i.lanes=n.lanes,kr(n,i,d)}return xh(n,i,a,c,d)}function gm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(lo,cn),cn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(lo,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(lo,cn),cn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,qe(lo,cn),cn|=c;return qt(n,i,d,a),i.child}function ym(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xh(n,i,a,c,d){var m=Qt(a)?Ki:bt.current;return m=Js(i,m),io(i,d),a=Eh(n,i,a,c,m,d),c=Th(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,kr(n,i,d)):(Ye&&c&&ih(i),i.flags|=1,qt(n,i,a,d),i.child)}function _m(n,i,a,c,d){if(Qt(a)){var m=!0;Fl(i)}else m=!1;if(io(i,d),i.stateNode===null)nu(n,i),om(i,a,c),kh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,T=i.memoizedProps;v.props=T;var k=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=vn(F):(F=Qt(a)?Ki:bt.current,F=Js(i,F));var Q=a.getDerivedStateFromProps,J=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||k!==F)&&am(i,v,c,F),ei=!1;var G=i.memoizedState;v.state=G,Gl(i,c,v,d),k=i.memoizedState,T!==c||G!==k||Kt.current||ei?(typeof Q=="function"&&(Ch(i,a,Q,c),k=i.memoizedState),(T=ei||sm(i,a,T,c,G,k,F))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),v.props=c,v.state=k,v.context=F,c=T):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,bp(n,i),T=i.memoizedProps,F=i.type===i.elementType?T:Ln(i.type,T),v.props=F,J=i.pendingProps,G=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=vn(k):(k=Qt(a)?Ki:bt.current,k=Js(i,k));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==J||G!==k)&&am(i,v,c,k),ei=!1,G=i.memoizedState,v.state=G,Gl(i,c,v,d);var oe=i.memoizedState;T!==J||G!==oe||Kt.current||ei?(typeof ne=="function"&&(Ch(i,a,ne,c),oe=i.memoizedState),(F=ei||sm(i,a,F,c,G,oe,k)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,k)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),v.props=c,v.state=oe,v.context=k,c=F):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Dh(n,i,a,c,m,d)}function Dh(n,i,a,c,d,m){ym(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Ip(i,a,!1),kr(n,i,m);c=i.stateNode,_w.current=i;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=no(i,n.child,null,m),i.child=no(i,null,T,m)):qt(n,i,T,m),i.memoizedState=c.state,d&&Ip(i,a,!0),i.child}function vm(n){var i=n.stateNode;i.pendingContext?Ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ep(n,i.context,!1),mh(n,i.containerInfo)}function wm(n,i,a,c,d){return to(),lh(d),i.flags|=256,qt(n,i,a,c),i.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,i,a){var c=i.pendingProps,d=Je.current,m=!1,v=(i.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Je,d&1),n===null)return ah(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=pu(v,c,0,null),n=is(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=bh(a),i.memoizedState=Vh,n):Oh(i,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return vw(n,i,v,c,T,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=ai(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?m=ai(T,m):(m=is(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?bh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Vh,c}return m=n.child,n=m.sibling,c=ai(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Oh(n,i){return i=pu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tu(n,i,a,c){return c!==null&&lh(c),no(i,n.child,null,a),n=Oh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function vw(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Ph(Error(t(422))),tu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=pu({mode:"visible",children:c.children},d,0,null),m=is(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&no(i,n.child,null,v),i.child.memoizedState=bh(v),i.memoizedState=Vh,m);if((i.mode&1)===0)return tu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,m=Error(t(419)),c=Ph(m,c,void 0),tu(n,i,v,c)}if(T=(v&n.childLanes)!==0,Xt||T){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Rr(n,d),Un(c,n,d,-1))}return Yh(),c=Ph(Error(t(421))),tu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Dw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,un=Xr(d.nextSibling),ln=i,Ye=!0,On=null,n!==null&&(yn[_n++]=Sr,yn[_n++]=Ar,yn[_n++]=Qi,Sr=n.id,Ar=n.overflow,Qi=i),i=Oh(i,c.children),i.flags|=4096,i)}function Tm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),dh(n.return,i,a)}function Lh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Im(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,i,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tm(n,a,i);else if(n.tag===19)Tm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Je,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Kl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Lh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Kl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Lh(i,!0,a,null,m);break;case"together":Lh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function kr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),es|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ai(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ww(n,i,a){switch(i.tag){case 3:vm(i),to();break;case 5:Mp(i);break;case 1:Qt(i.type)&&Fl(i);break;case 4:mh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(ql,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Je,Je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Em(n,i,a):(qe(Je,Je.current&1),n=kr(n,i,a),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Im(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Je,Je.current),c)break;return null;case 22:case 23:return i.lanes=0,gm(n,i,a)}return kr(n,i,a)}var Sm,Mh,Am,Rm;Sm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mh=function(){},Am=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Ji(er.current);var m=null;switch(a){case"input":d=xi(n,d),c=xi(n,c),m=[];break;case"select":d=B({},d,{value:void 0}),c=B({},c,{value:void 0}),m=[];break;case"textarea":d=zo(n,d),c=zo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ol)}Wo(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var k=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&k!==T&&(k!=null||T!=null))if(F==="style")if(T){for(v in T)!T.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&T[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(F,a)),a=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(m=m||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&We("scroll",n),m||T===k||(m=[])):(m=m||[]).push(F,k))}a&&(m=m||[]).push("style",a);var F=m;(i.updateQueue=F)&&(i.flags|=4)}},Rm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ra(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ew(n,i,a){var c=i.pendingProps;switch(sh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Qt(i.type)&&Ml(),Lt(i),null;case 3:return c=i.stateNode,so(),Ge(Kt),Ge(bt),_h(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,On!==null&&(Kh(On),On=null))),Mh(n,i),Lt(i),null;case 5:gh(i);var d=Ji(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)Am(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=Ji(er.current),Bl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Zn]=i,c[ga]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<fa.length;d++)We(fa[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ws(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":Ts(c,m),We("invalid",c)}Wo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var T=m[v];v==="children"?typeof T=="string"?c.textContent!==T&&(m.suppressHydrationWarning!==!0&&bl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(m.suppressHydrationWarning!==!0&&bl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":dr(c),ol(c,m,!0);break;case"textarea":dr(c),jo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ol)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ht(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Zn]=i,n[ga]=c,Sm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Go(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<fa.length;d++)We(fa[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ws(n,c),d=xi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=B({},c,{value:void 0}),We("invalid",n);break;case"textarea":Ts(n,c),d=zo(n,c),We("invalid",n);break;default:d=c}Wo(a,d),T=d;for(m in T)if(T.hasOwnProperty(m)){var k=T[m];m==="style"?qo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Bo(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ur(n,k):typeof k=="number"&&Ur(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&We("scroll",n):k!=null&&de(n,m,k,v))}switch(a){case"input":dr(n),ol(n,c,!1);break;case"textarea":dr(n),jo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?pr(n,!!c.multiple,m,!1):c.defaultValue!=null&&pr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ol)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)Rm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ji(Ea.current),Ji(er.current),Bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Zn]=i,(m=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:bl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ge(Je),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Pp(),to(),i.flags|=98560,m=!1;else if(m=Bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Zn]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else On!==null&&(Kh(On),On=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Je.current&1)!==0?mt===0&&(mt=3):Yh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return so(),Mh(n,i),n===null&&pa(i.stateNode.containerInfo),Lt(i),null;case 10:return hh(i.type._context),Lt(i),null;case 17:return Qt(i.type)&&Ml(),Lt(i),null;case 19:if(Ge(Je),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Ra(m,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Kl(n),v!==null){for(i.flags|=128,Ra(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Je,Je.current&1|2),i.child}n=n.sibling}m.tail!==null&&$e()>uo&&(i.flags|=128,c=!0,Ra(m,!1),i.lanes=4194304)}else{if(!c)if(n=Kl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ra(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(i),null}else 2*$e()-m.renderingStartTime>uo&&a!==1073741824&&(i.flags|=128,c=!0,Ra(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$e(),i.sibling=null,a=Je.current,qe(Je,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Xh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(cn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Tw(n,i){switch(sh(i),i.tag){case 1:return Qt(i.type)&&Ml(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return so(),Ge(Kt),Ge(bt),_h(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return gh(i),null;case 13:if(Ge(Je),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));to()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(Je),null;case 4:return so(),null;case 10:return hh(i.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var ru=!1,Mt=!1,Iw=typeof WeakSet=="function"?WeakSet:Set,se=null;function ao(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Fh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Cm=!1;function Sw(n,i){if(Xc=Gr,n=sp(),Bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,k=-1,F=0,Q=0,J=n,G=null;t:for(;;){for(var ne;J!==a||d!==0&&J.nodeType!==3||(T=v+d),J!==m||c!==0&&J.nodeType!==3||(k=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(ne=J.firstChild)!==null;)G=J,J=ne;for(;;){if(J===n)break t;if(G===a&&++F===d&&(T=v),G===m&&++Q===c&&(k=v),(ne=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=ne}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},Gr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var oe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,rt=oe.memoizedState,L=i.stateNode,x=L.getSnapshotBeforeUpdate(i.elementType===i.type?ae:Ln(i.type,ae),rt);L.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=i.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){tt(i,i.return,Z)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return oe=Cm,Cm=!1,oe}function Ca(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Fh(i,a,m)}d=d.next}while(d!==c)}}function iu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Uh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function km(n){var i=n.alternate;i!==null&&(n.alternate=null,km(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Zn],delete i[ga],delete i[th],delete i[ow],delete i[aw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pm(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function zh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ol));else if(c!==4&&(n=n.child,n!==null))for(zh(n,i,a),n=n.sibling;n!==null;)zh(n,i,a),n=n.sibling}function jh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(jh(n,i,a),n=n.sibling;n!==null;)jh(n,i,a),n=n.sibling}var kt=null,Mn=!1;function ni(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(zi,a)}catch{}switch(a.tag){case 5:Mt||ao(a,i);case 6:var c=kt,d=Mn;kt=null,ni(n,i,a),kt=c,Mn=d,kt!==null&&(Mn?(n=kt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):kt.removeChild(a.stateNode));break;case 18:kt!==null&&(Mn?(n=kt,a=a.stateNode,n.nodeType===8?eh(n.parentNode,a):n.nodeType===1&&eh(n,a),Dn(n)):eh(kt,a.stateNode));break;case 4:c=kt,d=Mn,kt=a.stateNode.containerInfo,Mn=!0,ni(n,i,a),kt=c,Mn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Fh(a,i,v),d=d.next}while(d!==c)}ni(n,i,a);break;case 1:if(!Mt&&(ao(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){tt(a,i,T)}ni(n,i,a);break;case 21:ni(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ni(n,i,a),Mt=c):ni(n,i,a);break;default:ni(n,i,a)}}function Dm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Iw),i.forEach(function(c){var d=Vw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Fn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 5:kt=T.stateNode,Mn=!1;break e;case 3:kt=T.stateNode.containerInfo,Mn=!0;break e;case 4:kt=T.stateNode.containerInfo,Mn=!0;break e}T=T.return}if(kt===null)throw Error(t(160));xm(m,v,d),kt=null,Mn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){tt(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Vm(i,n),i=i.sibling}function Vm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(i,n),nr(n),c&4){try{Ca(3,n,n.return),iu(3,n)}catch(ae){tt(n,n.return,ae)}try{Ca(5,n,n.return)}catch(ae){tt(n,n.return,ae)}}break;case 1:Fn(i,n),nr(n),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Fn(i,n),nr(n),c&512&&a!==null&&ao(a,a.return),n.flags&32){var d=n.stateNode;try{Ur(d,"")}catch(ae){tt(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&m.type==="radio"&&m.name!=null&&Fo(d,m),Go(T,v);var F=Go(T,m);for(v=0;v<k.length;v+=2){var Q=k[v],J=k[v+1];Q==="style"?qo(d,J):Q==="dangerouslySetInnerHTML"?Bo(d,J):Q==="children"?Ur(d,J):de(d,Q,J,F)}switch(T){case"input":Uo(d,m);break;case"textarea":Is(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?pr(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?pr(d,!!m.multiple,m.defaultValue,!0):pr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ga]=m}catch(ae){tt(n,n.return,ae)}}break;case 6:if(Fn(i,n),nr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ae){tt(n,n.return,ae)}}break;case 3:if(Fn(i,n),nr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(i.containerInfo)}catch(ae){tt(n,n.return,ae)}break;case 4:Fn(i,n),nr(n);break;case 13:Fn(i,n),nr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(qh=$e())),c&4&&Dm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(F=Mt)||Q,Fn(i,n),Mt=F):Fn(i,n),nr(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!Q&&(n.mode&1)!==0)for(se=n,Q=n.child;Q!==null;){for(J=se=Q;se!==null;){switch(G=se,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Ca(4,G,G.return);break;case 1:ao(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,oe.props=i.memoizedProps,oe.state=i.memoizedState,oe.componentWillUnmount()}catch(ae){tt(c,a,ae)}}break;case 5:ao(G,G.return);break;case 22:if(G.memoizedState!==null){Lm(J);continue}}ne!==null?(ne.return=G,se=ne):Lm(J)}Q=Q.sibling}e:for(Q=null,J=n;;){if(J.tag===5){if(Q===null){Q=J;try{d=J.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(T=J.stateNode,k=J.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=$o("display",v))}catch(ae){tt(n,n.return,ae)}}}else if(J.tag===6){if(Q===null)try{J.stateNode.nodeValue=F?"":J.memoizedProps}catch(ae){tt(n,n.return,ae)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===n)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===n)break e;for(;J.sibling===null;){if(J.return===null||J.return===n)break e;Q===J&&(Q=null),J=J.return}Q===J&&(Q=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Fn(i,n),nr(n),c&4&&Dm(n);break;case 21:break;default:Fn(i,n),nr(n)}}function nr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Pm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ur(d,""),c.flags&=-33);var m=Nm(n);jh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Nm(n);zh(n,T,v);break;default:throw Error(t(161))}}catch(k){tt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Aw(n,i,a){se=n,bm(n)}function bm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ru;if(!v){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Mt;T=ru;var F=Mt;if(ru=v,(Mt=k)&&!F)for(se=d;se!==null;)v=se,k=v.child,v.tag===22&&v.memoizedState!==null?Mm(d):k!==null?(k.return=v,se=k):Mm(d);for(;m!==null;)se=m,bm(m),m=m.sibling;se=d,ru=T,Mt=F}Om(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,se=m):Om(n)}}function Om(n){for(;se!==null;){var i=se;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||iu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ln(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Lp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Lp(i,v,a)}break;case 5:var T=i.stateNode;if(a===null&&i.flags&4){a=T;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var J=Q.dehydrated;J!==null&&Dn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Uh(i)}catch(G){tt(i,i.return,G)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Lm(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Mm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{iu(4,i)}catch(k){tt(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){tt(i,d,k)}}var m=i.return;try{Uh(i)}catch(k){tt(i,m,k)}break;case 5:var v=i.return;try{Uh(i)}catch(k){tt(i,v,k)}}}catch(k){tt(i,i.return,k)}if(i===n){se=null;break}var T=i.sibling;if(T!==null){T.return=i.return,se=T;break}se=i.return}}var Rw=Math.ceil,su=Ee.ReactCurrentDispatcher,Bh=Ee.ReactCurrentOwner,En=Ee.ReactCurrentBatchConfig,be=0,It=null,ot=null,Pt=0,cn=0,lo=Yr(0),mt=0,ka=null,es=0,ou=0,$h=0,Pa=null,Yt=null,qh=0,uo=1/0,Pr=null,au=!1,Hh=null,ri=null,lu=!1,ii=null,uu=0,Na=0,Wh=null,cu=-1,hu=0;function Ht(){return(be&6)!==0?$e():cu!==-1?cu:cu=$e()}function si(n){return(n.mode&1)===0?1:(be&2)!==0&&Pt!==0?Pt&-Pt:uw.transition!==null?(hu===0&&(hu=Bi()),hu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:ia(n.type)),n)}function Un(n,i,a,c){if(50<Na)throw Na=0,Wh=null,Error(t(185));$r(n,a,c),((be&2)===0||n!==It)&&(n===It&&((be&2)===0&&(ou|=a),mt===4&&oi(n,Pt)),Jt(n,c),a===1&&be===0&&(i.mode&1)===0&&(uo=$e()+500,Ul&&Zr()))}function Jt(n,i){var a=n.callbackNode;yr(n,i);var c=ji(n,n===It?Pt:0);if(c===0)a!==null&&Zo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Zo(a),i===1)n.tag===0?lw(Um.bind(null,n)):Sp(Um.bind(null,n)),iw(function(){(be&6)===0&&Zr()}),a=null;else{switch(Hr(c)){case 1:a=Ui;break;case 4:a=zr;break;case 16:a=pn;break;case 536870912:a=hl;break;default:a=pn}a=Gm(a,Fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fm(n,i){if(cu=-1,hu=0,(be&6)!==0)throw Error(t(327));var a=n.callbackNode;if(co()&&n.callbackNode!==a)return null;var c=ji(n,n===It?Pt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=du(n,c);else{i=c;var d=be;be|=2;var m=jm();(It!==n||Pt!==i)&&(Pr=null,uo=$e()+500,ns(n,i));do try{Pw();break}catch(T){zm(n,T)}while(!0);ch(),su.current=m,be=d,ot!==null?i=0:(It=null,Pt=0,i=mt)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=Gh(n,d))),i===1)throw a=ka,ns(n,0),oi(n,c),Jt(n,$e()),a;if(i===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Cw(d)&&(i=du(n,c),i===2&&(m=sn(n),m!==0&&(c=m,i=Gh(n,m))),i===1))throw a=ka,ns(n,0),oi(n,c),Jt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:rs(n,Yt,Pr);break;case 3:if(oi(n,c),(c&130023424)===c&&(i=qh+500-$e(),10<i)){if(ji(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Zc(rs.bind(null,n,Yt,Pr),i);break}rs(n,Yt,Pr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Rw(c/1960))-c,10<c){n.timeoutHandle=Zc(rs.bind(null,n,Yt,Pr),c);break}rs(n,Yt,Pr);break;case 5:rs(n,Yt,Pr);break;default:throw Error(t(329))}}}return Jt(n,$e()),n.callbackNode===a?Fm.bind(null,n):null}function Gh(n,i){var a=Pa;return n.current.memoizedState.isDehydrated&&(ns(n,i).flags|=256),n=du(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&Kh(i)),n}function Kh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function Cw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function oi(n,i){for(i&=~$h,i&=~ou,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function Um(n){if((be&6)!==0)throw Error(t(327));co();var i=ji(n,0);if((i&1)===0)return Jt(n,$e()),null;var a=du(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Gh(n,c))}if(a===1)throw a=ka,ns(n,0),oi(n,i),Jt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,Yt,Pr),Jt(n,$e()),null}function Qh(n,i){var a=be;be|=1;try{return n(i)}finally{be=a,be===0&&(uo=$e()+500,Ul&&Zr())}}function ts(n){ii!==null&&ii.tag===0&&(be&6)===0&&co();var i=be;be|=1;var a=En.transition,c=Pe;try{if(En.transition=null,Pe=1,n)return n()}finally{Pe=c,En.transition=a,be=i,(be&6)===0&&Zr()}}function Xh(){cn=lo.current,Ge(lo)}function ns(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,rw(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(sh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ml();break;case 3:so(),Ge(Kt),Ge(bt),_h();break;case 5:gh(c);break;case 4:so();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:hh(c.type._context);break;case 22:case 23:Xh()}a=a.return}if(It=n,ot=n=ai(n.current,null),Pt=cn=i,mt=0,ka=null,$h=ou=es=0,Yt=Pa=null,Yi!==null){for(i=0;i<Yi.length;i++)if(a=Yi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Yi=null}return n}function zm(n,i){do{var a=ot;try{if(ch(),Ql.current=Zl,Xl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xl=!1}if(Zi=0,Tt=pt=Ze=null,Ta=!1,Ia=0,Bh.current=null,a===null||a.return===null){mt=1,ka=i,ot=null;break}e:{var m=n,v=a.return,T=a,k=i;if(i=Pt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,Q=T,J=Q.tag;if((Q.mode&1)===0&&(J===0||J===11||J===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=hm(v);if(ne!==null){ne.flags&=-257,dm(ne,v,T,m,i),ne.mode&1&&cm(m,F,i),i=ne,k=F;var oe=i.updateQueue;if(oe===null){var ae=new Set;ae.add(k),i.updateQueue=ae}else oe.add(k);break e}else{if((i&1)===0){cm(m,F,i),Yh();break e}k=Error(t(426))}}else if(Ye&&T.mode&1){var rt=hm(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),dm(rt,v,T,m,i),lh(oo(k,T));break e}}m=k=oo(k,T),mt!==4&&(mt=2),Pa===null?Pa=[m]:Pa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var L=lm(m,k,i);Op(m,L);break e;case 1:T=k;var x=m.type,M=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ri===null||!ri.has(M)))){m.flags|=65536,i&=-i,m.lanes|=i;var Z=um(m,T,i);Op(m,Z);break e}}m=m.return}while(m!==null)}$m(a)}catch(le){i=le,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function jm(){var n=su.current;return su.current=Zl,n===null?Zl:n}function Yh(){(mt===0||mt===3||mt===2)&&(mt=4),It===null||(es&268435455)===0&&(ou&268435455)===0||oi(It,Pt)}function du(n,i){var a=be;be|=2;var c=jm();(It!==n||Pt!==i)&&(Pr=null,ns(n,i));do try{kw();break}catch(d){zm(n,d)}while(!0);if(ch(),be=a,su.current=c,ot!==null)throw Error(t(261));return It=null,Pt=0,mt}function kw(){for(;ot!==null;)Bm(ot)}function Pw(){for(;ot!==null&&!ul();)Bm(ot)}function Bm(n){var i=Wm(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?$m(n):ot=i,Bh.current=null}function $m(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ew(a,i,cn),a!==null){ot=a;return}}else{if(a=Tw(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ot=null;return}}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);mt===0&&(mt=5)}function rs(n,i,a){var c=Pe,d=En.transition;try{En.transition=null,Pe=1,Nw(n,i,a,c)}finally{En.transition=d,Pe=c}return null}function Nw(n,i,a,c){do co();while(ii!==null);if((be&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(n,m),n===It&&(ot=It=null,Pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||lu||(lu=!0,Gm(pn,function(){return co(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=En.transition,En.transition=null;var v=Pe;Pe=1;var T=be;be|=4,Bh.current=null,Sw(n,a),Vm(a,n),X0(Yc),Gr=!!Xc,Yc=Xc=null,n.current=a,Aw(a),bc(),be=T,Pe=v,En.transition=m}else n.current=a;if(lu&&(lu=!1,ii=n,uu=d),m=n.pendingLanes,m===0&&(ri=null),dl(a.stateNode),Jt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(au)throw au=!1,n=Hh,Hh=null,n;return(uu&1)!==0&&n.tag!==0&&co(),m=n.pendingLanes,(m&1)!==0?n===Wh?Na++:(Na=0,Wh=n):Na=0,Zr(),null}function co(){if(ii!==null){var n=Hr(uu),i=En.transition,a=Pe;try{if(En.transition=null,Pe=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,uu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,se=n.current;se!==null;){var m=se,v=m.child;if((se.flags&16)!==0){var T=m.deletions;if(T!==null){for(var k=0;k<T.length;k++){var F=T[k];for(se=F;se!==null;){var Q=se;switch(Q.tag){case 0:case 11:case 15:Ca(8,Q,m)}var J=Q.child;if(J!==null)J.return=Q,se=J;else for(;se!==null;){Q=se;var G=Q.sibling,ne=Q.return;if(km(Q),Q===F){se=null;break}if(G!==null){G.return=ne,se=G;break}se=ne}}}var oe=m.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var rt=ae.sibling;ae.sibling=null,ae=rt}while(ae!==null)}}se=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,se=v;else e:for(;se!==null;){if(m=se,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ca(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,se=L;break e}se=m.return}}var x=n.current;for(se=x;se!==null;){v=se;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,se=M;else e:for(v=x;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:iu(9,T)}}catch(le){tt(T,T.return,le)}if(T===v){se=null;break e}var Z=T.sibling;if(Z!==null){Z.return=T.return,se=Z;break e}se=T.return}}if(be=d,Zr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(zi,n)}catch{}c=!0}return c}finally{Pe=a,En.transition=i}}return!1}function qm(n,i,a){i=oo(a,i),i=lm(n,i,1),n=ti(n,i,1),i=Ht(),n!==null&&($r(n,1,i),Jt(n,i))}function tt(n,i,a){if(n.tag===3)qm(n,n,a);else for(;i!==null;){if(i.tag===3){qm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=oo(a,n),n=um(i,n,1),i=ti(i,n,1),n=Ht(),i!==null&&($r(i,1,n),Jt(i,n));break}}i=i.return}}function xw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,It===n&&(Pt&a)===a&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>$e()-qh?ns(n,0):$h|=a),Jt(n,i)}function Hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vs,Vs<<=1,(Vs&130023424)===0&&(Vs=4194304)));var a=Ht();n=Rr(n,i),n!==null&&($r(n,i,a),Jt(n,a))}function Dw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Hm(n,a)}function Vw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hm(n,a)}var Wm;Wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Xt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xt=!1,ww(n,i,a);Xt=(n.flags&131072)!==0}else Xt=!1,Ye&&(i.flags&1048576)!==0&&Ap(i,jl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nu(n,i),n=i.pendingProps;var d=Js(i,bt.current);io(i,a),d=Eh(null,i,c,n,d,a);var m=Th();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(m=!0,Fl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ph(i),d.updater=eu,i.stateNode=d,d._reactInternals=i,kh(i,c,n,a),i=Dh(null,i,c,!0,m,a)):(i.tag=0,Ye&&m&&ih(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Ow(c),n=Ln(c,n),d){case 0:i=xh(null,i,c,n,a);break e;case 1:i=_m(null,i,c,n,a);break e;case 11:i=fm(null,i,c,n,a);break e;case 14:i=pm(null,i,c,Ln(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),xh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),_m(n,i,c,d,a);case 3:e:{if(vm(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,bp(n,i),Gl(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=oo(Error(t(423)),i),i=wm(n,i,c,a,d);break e}else if(c!==d){d=oo(Error(t(424)),i),i=wm(n,i,c,a,d);break e}else for(un=Xr(i.stateNode.containerInfo.firstChild),ln=i,Ye=!0,On=null,a=Dp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===d){i=kr(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Mp(i),n===null&&ah(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Jc(c,d)?v=null:m!==null&&Jc(c,m)&&(i.flags|=32),ym(n,i),qt(n,i,v,a),i.child;case 6:return n===null&&ah(i),null;case 13:return Em(n,i,a);case 4:return mh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=no(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),fm(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,qe(ql,c._currentValue),c._currentValue=v,m!==null)if(bn(m.value,v)){if(m.children===d.children&&!Kt.current){i=kr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var T=m.dependencies;if(T!==null){v=m.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Cr(-1,a&-a),k.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?k.next=k:(k.next=Q.next,Q.next=k),F.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),dh(m.return,a,i),T.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),dh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,io(i,a),d=vn(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=Ln(c,i.pendingProps),d=Ln(c.type,d),pm(n,i,c,d,a);case 15:return mm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ln(c,d),nu(n,i),i.tag=1,Qt(c)?(n=!0,Fl(i)):n=!1,io(i,a),om(i,c,d),kh(i,c,d,a),Dh(null,i,c,!0,n,a);case 19:return Im(n,i,a);case 22:return gm(n,i,a)}throw Error(t(156,i.tag))};function Gm(n,i){return xs(n,i)}function bw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(n,i,a,c){return new bw(n,i,a,c)}function Jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ow(n){if(typeof n=="function")return Jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===_t)return 14}return 2}function ai(n,i){var a=n.alternate;return a===null?(a=Tn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Jh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case D:return is(a.children,d,m,i);case I:v=8,d|=8;break;case R:return n=Tn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case A:return n=Tn(13,a,i,d),n.elementType=A,n.lanes=m,n;case Qe:return n=Tn(19,a,i,d),n.elementType=Qe,n.lanes=m,n;case Ve:return pu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case V:v=9;break e;case b:v=11;break e;case _t:v=14;break e;case vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Tn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function is(n,i,a,c){return n=Tn(7,n,c,i),n.lanes=a,n}function pu(n,i,a,c){return n=Tn(22,n,c,i),n.elementType=Ve,n.lanes=a,n.stateNode={isHidden:!1},n}function Zh(n,i,a){return n=Tn(6,n,null,i),n.lanes=a,n}function ed(n,i,a){return i=Tn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Lw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function td(n,i,a,c,d,m,v,T,k){return n=new Lw(n,i,a,T,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Tn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ph(m),n}function Mw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Km(n){if(!n)return Jr;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return Tp(n,a,i)}return i}function Qm(n,i,a,c,d,m,v,T,k){return n=td(a,c,!0,n,d,m,v,T,k),n.context=Km(null),a=n.current,c=Ht(),d=si(a),m=Cr(c,d),m.callback=i??null,ti(a,m,d),n.current.lanes=d,$r(n,d,c),Jt(n,c),n}function mu(n,i,a,c){var d=i.current,m=Ht(),v=si(d);return a=Km(a),i.context===null?i.context=a:i.pendingContext=a,i=Cr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ti(d,i,v),n!==null&&(Un(n,d,v,m),Wl(n,d,v)),v}function gu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function nd(n,i){Xm(n,i),(n=n.alternate)&&Xm(n,i)}function Fw(){return null}var Ym=typeof reportError=="function"?reportError:function(n){console.error(n)};function rd(n){this._internalRoot=n}yu.prototype.render=rd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));mu(n,i,null,null)},yu.prototype.unmount=rd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ts(function(){mu(null,n,null,null)}),i[Tr]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var i=yl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qn.length&&i!==0&&i<Qn[a].priority;a++);Qn.splice(a,0,n),a===0&&wl(n)}};function id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function Uw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=gu(v);m.call(F)}}var v=Qm(i,c,n,0,null,!1,!1,"",Jm);return n._reactRootContainer=v,n[Tr]=v.current,pa(n.nodeType===8?n.parentNode:n),ts(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=gu(k);T.call(F)}}var k=td(n,0,!1,null,null,!1,!1,"",Jm);return n._reactRootContainer=k,n[Tr]=k.current,pa(n.nodeType===8?n.parentNode:n),ts(function(){mu(i,k,a,c)}),k}function vu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var T=d;d=function(){var k=gu(v);T.call(k)}}mu(i,v,n,d)}else v=Uw(a,i,n,d,c);return gu(v)}ml=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=jr(i.pendingLanes);a!==0&&(qr(i,a|1),Jt(i,$e()),(be&6)===0&&(uo=$e()+500,Zr()))}break;case 13:ts(function(){var c=Rr(n,1);if(c!==null){var d=Ht();Un(c,n,1,d)}}),nd(n,1)}},bs=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Ht();Un(i,n,134217728,a)}nd(n,134217728)}},gl=function(n){if(n.tag===13){var i=si(n),a=Rr(n,i);if(a!==null){var c=Ht();Un(a,n,i,c)}nd(n,i)}},yl=function(){return Pe},_l=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},As=function(n,i,a){switch(i){case"input":if(Uo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ll(c);if(!d)throw Error(t(90));vs(c),Uo(c,d)}}}break;case"textarea":Is(n,a);break;case"select":i=a.value,i!=null&&pr(n,!!a.multiple,i,!1)}},Oi=Qh,Qo=ts;var zw={usingClientEntryPoint:!1,Events:[ya,Xs,Ll,Gn,Ko,Qh]},xa={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jo(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||Fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{zi=wu.inject(jw),rn=wu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(i))throw Error(t(200));return Mw(n,i,null,a)},Zt.createRoot=function(n,i){if(!id(n))throw Error(t(299));var a=!1,c="",d=Ym;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=td(n,1,!1,null,null,a,!1,c,d),n[Tr]=i.current,pa(n.nodeType===8?n.parentNode:n),new rd(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jo(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return ts(n)},Zt.hydrate=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!id(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Ym;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Qm(i,null,n,1,a??null,d,!1,m,v),n[Tr]=i.current,pa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new yu(i)},Zt.render=function(n,i,a){if(!_u(i))throw Error(t(200));return vu(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(ts(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[Tr]=null})}),!0):!1},Zt.unstable_batchedUpdates=Qh,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vu(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var ig;function Gw(){if(ig)return od.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=Ww(),od.exports}var sg;function Kw(){if(sg)return Eu;sg=1;var r=Gw();return Eu.createRoot=r.createRoot,Eu.hydrateRoot=r.hydrateRoot,Eu}var Qw=Kw();const Xw=Gy(Qw),Yw=()=>{};var og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Jw=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Xy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,w=l>>2,S=(l&3)<<4|p>>4;let C=(p&15)<<2|_>>6,j=_&63;g||(j=64,h||(C=64)),s.push(t[w],t[S],t[C],t[j])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Qy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Jw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||_==null||S==null)throw new Zw;const C=l<<2|p>>4;if(s.push(C),_!==64){const j=p<<4&240|_>>2;if(s.push(j),S!==64){const K=_<<6&192|S;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eE=function(r){const e=Qy(r);return Xy.encodeByteArray(e,!0)},Uu=function(r){return eE(r).replace(/\./g,"")},Yy=function(r){try{return Xy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=()=>tE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof og>"u")return;const r=og.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},iE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Yy(r[1]);return e&&JSON.parse(e)},ac=()=>{try{return Yw()||nE()||rE()||iE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Jy=r=>{var e,t;return(t=(e=ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},sE=r=>{const e=Jy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zy=()=>{var r;return(r=ac())===null||r===void 0?void 0:r.config},e_=r=>{var e;return(e=ac())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function t_(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Uu(JSON.stringify(t)),Uu(JSON.stringify(h)),""].join(".")}const La={};function lE(){const r={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?r.emulator.push(e):r.prod.push(e);return r}function uE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let ag=!1;function n_(r,e){if(typeof window>"u"||typeof document>"u"||!Po(window.location.host)||La[r]===e||La[r]||ag)return;La[r]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",l=lE().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function p(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,j){C.setAttribute("width","24"),C.setAttribute("id",j),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function _(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{ag=!0,h()},C}function w(C,j){C.setAttribute("id",j),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function S(){const C=uE(s),j=t("text"),K=document.getElementById(j)||document.createElement("span"),Y=t("learnmore"),W=document.getElementById(Y)||document.createElement("a"),me=t("preprendIcon"),ce=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const de=C.element;p(de),w(W,Y);const Ee=_();g(ce,me),de.append(ce,K,W,Ee),document.body.appendChild(de)}l?(K.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,K.innerText="Preview backend running in this workspace."),K.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function hE(){var r;const e=(r=ac())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function mE(){return!hE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i_(){try{return typeof indexedDB=="object"}catch{return!1}}function s_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function gE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="FirebaseError";class Hn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=yE,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?_E(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Hn(o,p,s)}}function _E(r,e){return r.replace(vE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const vE=/\{\$([^}]+)}/g;function wE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Dr(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(lg(l)&&lg(h)){if(!Dr(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function lg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function EE(r,e){const t=new TE(r,e);return t.subscribe.bind(t)}class TE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");IE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ud),o.error===void 0&&(o.error=ud),o.complete===void 0&&(o.complete=ud);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ud(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=1e3,AE=2,RE=14400*1e3,CE=.5;function ug(r,e=SE,t=AE){const s=e*Math.pow(t,r),o=Math.round(CE*s*(Math.random()-.5)*2);return Math.min(RE,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r){return r&&r._delegate?r._delegate:r}class $n{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new oE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NE(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PE(r){return r===ss?void 0:r}function NE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const DE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},VE=Ce.INFO,bE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},OE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=bE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=VE,this._logHandler=OE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const LE=(r,e)=>e.some(t=>r instanceof t);let cg,hg;function ME(){return cg||(cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FE(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o_=new WeakMap,Id=new WeakMap,a_=new WeakMap,cd=new WeakMap,Xd=new WeakMap;function UE(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(mi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&o_.set(t,r)}).catch(()=>{}),Xd.set(e,r),e}function zE(r){if(Id.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Id.set(r,e)}let Sd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Id.get(r);if(e==="objectStoreNames")return r.objectStoreNames||a_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function jE(r){Sd=r(Sd)}function BE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(hd(this),e,...t);return a_.set(s,e.sort?e.sort():[e]),mi(s)}:FE().includes(r)?function(...e){return r.apply(hd(this),e),mi(o_.get(this))}:function(...e){return mi(r.apply(hd(this),e))}}function $E(r){return typeof r=="function"?BE(r):(r instanceof IDBTransaction&&zE(r),LE(r,ME())?new Proxy(r,Sd):r)}function mi(r){if(r instanceof IDBRequest)return UE(r);if(cd.has(r))return cd.get(r);const e=$E(r);return e!==r&&(cd.set(r,e),Xd.set(e,r)),e}const hd=r=>Xd.get(r);function l_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),p=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const qE=["get","getKey","getAll","getAllKeys","count"],HE=["put","add","delete","clear"],dd=new Map;function dg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=HE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||qE.includes(t)))return;const l=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return dd.set(e,l),l}jE(r=>({...r,get:(e,t,s)=>dg(e,t)||r.get(e,t,s),has:(e,t)=>!!dg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(GE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function GE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",fg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new lc("@firebase/app"),KE="@firebase/app-compat",QE="@firebase/analytics-compat",XE="@firebase/analytics",YE="@firebase/app-check-compat",JE="@firebase/app-check",ZE="@firebase/auth",eT="@firebase/auth-compat",tT="@firebase/database",nT="@firebase/data-connect",rT="@firebase/database-compat",iT="@firebase/functions",sT="@firebase/functions-compat",oT="@firebase/installations",aT="@firebase/installations-compat",lT="@firebase/messaging",uT="@firebase/messaging-compat",cT="@firebase/performance",hT="@firebase/performance-compat",dT="@firebase/remote-config",fT="@firebase/remote-config-compat",pT="@firebase/storage",mT="@firebase/storage-compat",gT="@firebase/firestore",yT="@firebase/ai",_T="@firebase/firestore-compat",vT="firebase",wT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",ET={[Ad]:"fire-core",[KE]:"fire-core-compat",[XE]:"fire-analytics",[QE]:"fire-analytics-compat",[JE]:"fire-app-check",[YE]:"fire-app-check-compat",[ZE]:"fire-auth",[eT]:"fire-auth-compat",[tT]:"fire-rtdb",[nT]:"fire-data-connect",[rT]:"fire-rtdb-compat",[iT]:"fire-fn",[sT]:"fire-fn-compat",[oT]:"fire-iid",[aT]:"fire-iid-compat",[lT]:"fire-fcm",[uT]:"fire-fcm-compat",[cT]:"fire-perf",[hT]:"fire-perf-compat",[dT]:"fire-rc",[fT]:"fire-rc-compat",[pT]:"fire-gcs",[mT]:"fire-gcs-compat",[gT]:"fire-fst",[_T]:"fire-fst-compat",[yT]:"fire-vertex","fire-js":"fire-js",[vT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map,TT=new Map,Cd=new Map;function pg(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cr(r){const e=r.name;if(Cd.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,r);for(const t of zu.values())pg(t,r);for(const t of TT.values())pg(t,r);return!0}function gs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function zn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new ms("app","Firebase",IT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=wT;function Yd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=Zy()),!t)throw gi.create("no-options");const l=zu.get(o);if(l){if(Dr(t,l.options)&&Dr(s,l.config))return l;throw gi.create("duplicate-app",{appName:o})}const h=new xE(o);for(const g of Cd.values())h.addComponent(g);const p=new ST(t,s,h);return zu.set(o,p),p}function Jd(r=Rd){const e=zu.get(r);if(!e&&r===Rd&&Zy())return Yd();if(!e)throw gi.create("no-app",{appName:r});return e}function Sn(r,e,t){var s;let o=(s=ET[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${o}" with version "${e}":`];l&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(p.join(" "));return}cr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firebase-heartbeat-database",RT=1,$a="firebase-heartbeat-store";let fd=null;function u_(){return fd||(fd=l_(AT,RT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw gi.create("idb-open",{originalErrorMessage:r.message})})),fd}async function CT(r){try{const t=(await u_()).transaction($a),s=await t.objectStore($a).get(c_(r));return await t.done,s}catch(e){if(e instanceof Hn)Vr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function mg(r,e){try{const s=(await u_()).transaction($a,"readwrite");await s.objectStore($a).put(e,c_(r)),await s.done}catch(t){if(t instanceof Hn)Vr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function c_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=1024,PT=30;class NT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new DT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=gg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>PT){const h=VT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gg(),{heartbeatsToSend:s,unsentEntries:o}=xT(this._heartbeatsCache.heartbeats),l=Uu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function gg(){return new Date().toISOString().substring(0,10)}function xT(r,e=kT){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),yg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),yg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class DT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i_()?s_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return mg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return mg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function yg(r){return Uu(JSON.stringify({version:2,heartbeats:r})).length}function VT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(r){cr(new $n("platform-logger",e=>new WE(e),"PRIVATE")),cr(new $n("heartbeat",e=>new NT(e),"PRIVATE")),Sn(Ad,fg,r),Sn(Ad,fg,"esm2017"),Sn("fire-js","")}bT("");var OT="firebase",LT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(OT,LT,"app");const h_="@firebase/installations",Zd="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=1e4,f_=`w:${Zd}`,p_="FIS_v2",MT="https://firebaseinstallations.googleapis.com/v1",FT=3600*1e3,UT="installations",zT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new ms(UT,zT,jT);function m_(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_({projectId:r}){return`${MT}/projects/${r}/installations`}function y_(r){return{token:r.token,requestStatus:2,expiresIn:$T(r.expiresIn),creationTime:Date.now()}}async function __(r,e){const s=(await e.json()).error;return cs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function v_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function BT(r,{refreshToken:e}){const t=v_(r);return t.append("Authorization",qT(e)),t}async function w_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function $T(r){return Number(r.replace("s","000"))}function qT(r){return`${p_} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=g_(r),o=v_(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:p_,appId:r.appId,sdkVersion:f_},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await w_(()=>fetch(s,p));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:y_(_.authToken)}}else throw await __("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^[cdef][\w-]{21}$/,kd="";function KT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=QT(r);return GT.test(t)?t:kd}catch{return kd}}function QT(r){return WT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;function I_(r,e){const t=uc(r);S_(t,e),XT(t,e)}function S_(r,e){const t=T_.get(r);if(t)for(const s of t)s(e)}function XT(r,e){const t=YT();t&&t.postMessage({key:r,fid:e}),JT()}let os=null;function YT(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=r=>{S_(r.data.key,r.data.fid)}),os}function JT(){T_.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="firebase-installations-database",eI=1,hs="firebase-installations-store";let pd=null;function ef(){return pd||(pd=l_(ZT,eI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(hs)}}})),pd}async function ju(r,e){const t=uc(r),o=(await ef()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&I_(r,e.fid),e}async function A_(r){const e=uc(r),s=(await ef()).transaction(hs,"readwrite");await s.objectStore(hs).delete(e),await s.done}async function cc(r,e){const t=uc(r),o=(await ef()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t),p=e(h);return p===void 0?await l.delete(t):await l.put(p,t),await o.done,p&&(!h||h.fid!==p.fid)&&I_(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(r){let e;const t=await cc(r.appConfig,s=>{const o=tI(s),l=nI(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===kd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function tI(r){const e=r||{fid:KT(),registrationStatus:0};return R_(e)}function nI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=rI(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iI(r)}:{installationEntry:e}}async function rI(r,e){try{const t=await HT(r,e);return ju(r.appConfig,t)}catch(t){throw m_(t)&&t.customData.serverCode===409?await A_(r.appConfig):await ju(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function iI(r){let e=await _g(r.appConfig);for(;e.registrationStatus===1;)await E_(100),e=await _g(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await tf(r);return s||t}return e}function _g(r){return cc(r,e=>{if(!e)throw cs.create("installation-not-found");return R_(e)})}function R_(r){return sI(r)?{fid:r.fid,registrationStatus:0}:r}function sI(r){return r.registrationStatus===1&&r.registrationTime+d_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI({appConfig:r,heartbeatServiceProvider:e},t){const s=aI(r,t),o=BT(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:f_,appId:r.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await w_(()=>fetch(s,p));if(g.ok){const _=await g.json();return y_(_)}else throw await __("Generate Auth Token",g)}function aI(r,{fid:e}){return`${g_(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(r,e=!1){let t;const s=await cc(r.appConfig,l=>{if(!C_(l))throw cs.create("not-registered");const h=l.authToken;if(!e&&cI(h))return l;if(h.requestStatus===1)return t=lI(r,e),l;{if(!navigator.onLine)throw cs.create("app-offline");const p=dI(l);return t=uI(r,p),p}});return t?await t:s.authToken}async function lI(r,e){let t=await vg(r.appConfig);for(;t.authToken.requestStatus===1;)await E_(100),t=await vg(r.appConfig);const s=t.authToken;return s.requestStatus===0?nf(r,e):s}function vg(r){return cc(r,e=>{if(!C_(e))throw cs.create("not-registered");const t=e.authToken;return fI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function uI(r,e){try{const t=await oI(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await ju(r.appConfig,s),t}catch(t){if(m_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await A_(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ju(r.appConfig,s)}throw t}}function C_(r){return r!==void 0&&r.registrationStatus===2}function cI(r){return r.requestStatus===2&&!hI(r)}function hI(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+FT}function dI(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function fI(r){return r.requestStatus===1&&r.requestTime+d_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(r){const e=r,{installationEntry:t,registrationPromise:s}=await tf(e);return s?s.catch(console.error):nf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(r,e=!1){const t=r;return await gI(t),(await nf(t,e)).token}async function gI(r){const{registrationPromise:e}=await tf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(r){if(!r||!r.options)throw md("App Configuration");if(!r.name)throw md("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw md(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function md(r){return cs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="installations",_I="installations-internal",vI=r=>{const e=r.getProvider("app").getImmediate(),t=yI(e),s=gs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wI=r=>{const e=r.getProvider("app").getImmediate(),t=gs(e,k_).getImmediate();return{getId:()=>pI(t),getToken:o=>mI(t,o)}};function EI(){cr(new $n(k_,vI,"PUBLIC")),cr(new $n(_I,wI,"PRIVATE"))}EI();Sn(h_,Zd);Sn(h_,Zd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="analytics",TI="firebase_id",II="origin",SI=60*1e3,AI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new lc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new ms("analytics","Analytics",RI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(r){if(!r.startsWith(rf)){const e=dn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(e.message),""}return r}function P_(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function kI(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function PI(r,e){const t=kI("firebase-js-sdk-policy",{createScriptURL:CI}),s=document.createElement("script"),o=`${rf}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function NI(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function xI(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await P_(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(p){nn.error(p)}r("config",o,l)}async function DI(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await P_(t);for(const g of h){const _=p.find(S=>S.measurementId===g),w=_&&e[_.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){nn.error(l)}}function VI(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[p,g]=h;await DI(r,e,t,p,g)}else if(l==="config"){const[p,g]=h;await xI(r,e,t,s,p,g)}else if(l==="consent"){const[p,g]=h;r("consent",p,g)}else if(l==="get"){const[p,g,_]=h;r("get",p,g,_)}else if(l==="set"){const[p]=h;r("set",p)}else r(l,...h)}catch(p){nn.error(p)}}return o}function bI(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=VI(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function OI(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(rf)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=30,MI=1e3;class FI{constructor(e={},t=MI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const N_=new FI;function UI(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function zI(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:UI(s)},l=AI.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let p="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(p=g.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function jI(r,e=N_,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw dn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new qI;return setTimeout(async()=>{p.abort()},SI),x_({appId:s,apiKey:o,measurementId:l},h,p,e)}async function x_(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=N_){var l;const{appId:h,measurementId:p}=r;try{await BI(s,e)}catch(g){if(p)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:p};throw g}try{const g=await zI(r);return o.deleteThrottleMetadata(h),g}catch(g){const _=g;if(!$I(_)){if(o.deleteThrottleMetadata(h),p)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:p};throw g}const w=Number((l=_==null?void 0:_.customData)===null||l===void 0?void 0:l.httpStatus)===503?ug(t,o.intervalMillis,LI):ug(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,S),nn.debug(`Calling attemptFetch again in ${w} millis`),x_(r,S,s,o)}}function BI(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $I(r){if(!(r instanceof Hn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class qI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function HI(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(){if(i_())try{await s_()}catch(r){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function GI(r,e,t,s,o,l,h){var p;const g=jI(r);g.then(j=>{t[j.measurementId]=j.appId,r.options.measurementId&&j.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${j.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(j=>nn.error(j)),e.push(g);const _=WI().then(j=>{if(j)return s.getId()}),[w,S]=await Promise.all([g,_]);OI(l)||PI(l,w.measurementId),o("js",new Date);const C=(p=h==null?void 0:h.config)!==null&&p!==void 0?p:{};return C[II]="firebase",C.update=!0,S!=null&&(C[TI]=S),o("config",w.measurementId,C),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.app=e}_delete(){return delete Ma[this.app.options.appId],Promise.resolve()}}let Ma={},wg=[];const Eg={};let gd="dataLayer",QI="gtag",Tg,D_,Ig=!1;function XI(){const r=[];if(r_()&&r.push("This is a browser extension environment."),gE()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function YI(r,e,t){XI();const s=r.options.appId;if(!s)throw dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Ma[s]!=null)throw dn.create("already-exists",{id:s});if(!Ig){NI(gd);const{wrappedGtag:l,gtagCore:h}=bI(Ma,wg,Eg,gd,QI);D_=l,Tg=h,Ig=!0}return Ma[s]=GI(r,wg,Eg,e,Tg,gd,t),new KI(r)}function JI(r=Jd()){r=yt(r);const e=gs(r,Bu);return e.isInitialized()?e.getImmediate():ZI(r)}function ZI(r,e={}){const t=gs(r,Bu);if(t.isInitialized()){const o=t.getImmediate();if(Dr(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function eS(r,e,t,s){r=yt(r),HI(D_,Ma[r.app.options.appId],e,t,s).catch(o=>nn.error(o))}const Sg="@firebase/analytics",Ag="0.10.17";function tS(){cr(new $n(Bu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return YI(s,o,t)},"PUBLIC")),cr(new $n("analytics-internal",r,"PRIVATE")),Sn(Sg,Ag),Sn(Sg,Ag,"esm2017");function r(e){try{const t=e.getProvider(Bu).getImmediate();return{logEvent:(s,o,l)=>eS(t,s,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}tS();function sf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function V_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nS=V_,b_=new ms("auth","Firebase",V_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new lc("@firebase/auth");function rS(r,...e){$u.logLevel<=Ce.WARN&&$u.warn(`Auth (${No}): ${r}`,...e)}function ku(r,...e){$u.logLevel<=Ce.ERROR&&$u.error(`Auth (${No}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(r,...e){throw of(r,...e)}function ir(r,...e){return of(r,...e)}function O_(r,e,t){const s=Object.assign(Object.assign({},nS()),{[e]:t});return new ms("auth","Firebase",s).create(e,{appName:r.name})}function yi(r){return O_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function of(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return b_.create(r,...e)}function _e(r,e,...t){if(!r)throw of(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ku(e),new Error(e)}function Or(r,e){r||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iS(){return Rg()==="http:"||Rg()==="https:"}function Rg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iS()||r_()||"connection"in navigator)?navigator.onLine:!0}function oS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.shortDelay=e,this.longDelay=t,Or(t>e,"Short delay should be less than long delay!"),this.isMobile=cE()||fE()}get(){return sS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(r,e){Or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uS=new Ya(3e4,6e4);function hc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function xo(r,e,t,s,o={}){return M_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=Xa(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return dE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Po(r.emulatorConfig.host)&&(_.credentials="include"),L_.fetch()(await U_(r,r.config.apiHost,t,p),_)})}async function M_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},aS),e);try{const o=new cS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Tu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Tu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Tu(r,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw O_(r,w,_);br(r,w)}}catch(o){if(o instanceof Hn)throw o;br(r,"network-request-failed",{message:String(o)})}}async function F_(r,e,t,s,o={}){const l=await xo(r,e,t,s,o);return"mfaPendingCredential"in l&&br(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function U_(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?af(r.config,o):`${r.config.apiScheme}://${o}`;return lS.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class cS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ir(this.auth,"network-request-failed")),uS.get())})}}function Tu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ir(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(r,e){return xo(r,"POST","/v1/accounts:delete",e)}async function qu(r,e){return xo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dS(r,e=!1){const t=yt(r),s=await t.getIdToken(e),o=lf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Fa(yd(o.auth_time)),issuedAtTime:Fa(yd(o.iat)),expirationTime:Fa(yd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function yd(r){return Number(r)*1e3}function lf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=Yy(t);return o?JSON.parse(o):(ku("Failed to decode base64 JWT payload"),null)}catch(o){return ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Cg(r){const e=lf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Hn&&fS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function fS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fa(this.lastLoginAt),this.creationTime=Fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await qa(r,qu(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?z_(l.providerUserInfo):[],p=gS(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(p!=null&&p.length),w=g?_:!1,S={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new Nd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(r,S)}async function mS(r){const e=yt(r);await Hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function z_(r){return r.map(e=>{var{providerId:t}=e,s=sf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(r,e){const t=await M_(r,{},async()=>{const s=Xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await U_(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Po(r.emulatorConfig.host)&&(g.credentials="include"),L_.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _S(r,e){return xo(r,"POST","/v2/accounts:revokeToken",hc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Cg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await yS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new yo;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yo,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Nd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await qa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return dS(this,e)}reload(){return mS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Hu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await qa(this,hS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,p,g,_,w;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,j=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(p=t.tenantId)!==null&&p!==void 0?p:void 0,W=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:de,emailVerified:Ee,isAnonymous:ze,providerData:Te,stsTokenManager:D}=t;_e(de&&D,e,"internal-error");const I=yo.fromJSON(this.name,D);_e(typeof de=="string",e,"internal-error"),ui(S,e.name),ui(C,e.name),_e(typeof Ee=="boolean",e,"internal-error"),_e(typeof ze=="boolean",e,"internal-error"),ui(j,e.name),ui(K,e.name),ui(Y,e.name),ui(W,e.name),ui(me,e.name),ui(ce,e.name);const R=new jn({uid:de,auth:e,email:C,emailVerified:Ee,displayName:S,isAnonymous:ze,photoURL:K,phoneNumber:j,tenantId:Y,stsTokenManager:I,createdAt:me,lastLoginAt:ce});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(P=>Object.assign({},P))),W&&(R._redirectEventId=W),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new yo;o.updateFromServerResponse(t);const l=new jn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Hu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?z_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),p=new yo;p.updateFromIdToken(s);const g=new jn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Nd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Map;function xr(r){Or(r instanceof Function,"Expected a class definition");let e=kg.get(r);return e?(Or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,kg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}j_.type="NONE";const Pg=j_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(r,e,t){return`firebase:${r}:${e}:${t}`}class _o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Pu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Pu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qu(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _o(xr(Pg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||xr(Pg);const h=Pu(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const w=await _._get(h);if(w){let S;if(typeof w=="string"){const C=await qu(e,{idToken:w}).catch(()=>{});if(!C)break;S=await jn._fromGetAccountInfoResponse(e,C,w)}else S=jn._fromJSON(e,w);_!==l&&(p=S),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new _o(l,e,s):(l=g[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new _o(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(G_(e))return"Blackberry";if(K_(e))return"Webos";if($_(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function B_(r=jt()){return/firefox\//i.test(r)}function $_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(r=jt()){return/crios\//i.test(r)}function H_(r=jt()){return/iemobile/i.test(r)}function W_(r=jt()){return/android/i.test(r)}function G_(r=jt()){return/blackberry/i.test(r)}function K_(r=jt()){return/webos/i.test(r)}function uf(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function vS(r=jt()){var e;return uf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wS(){return pE()&&document.documentMode===10}function Q_(r=jt()){return uf(r)||W_(r)||K_(r)||G_(r)||/windows phone/i.test(r)||H_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(r,e=[]){let t;switch(r){case"Browser":t=Ng(jt());break;case"Worker":t=`${Ng(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${No}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const g=e(l);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(r,e={}){return xo(r,"GET","/v2/passwordPolicy",hc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=6;class SS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:IS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xg(this),this.idTokenSubscription=new xg(this),this.beforeStateQueue=new ES(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qu(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(yi(this));const t=e?yt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TS(this),t=new SS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await _S(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function dc(r){return yt(r)}class xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=EE(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RS(r){cf=r}function CS(r){return cf.loadJS(r)}function kS(){return cf.gapiScript}function PS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(r,e){const t=gs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Dr(l,e??{}))return o;br(o,"already-initialized")}return t.initialize({options:e})}function xS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DS(r,e,t){const s=dc(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Y_(e),{host:h,port:p}=VS(e),g=p===null?"":`:${p}`,_={url:`${l}//${h}${g}/`},w=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(Dr(_,s.config.emulator)&&Dr(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Po(h)?(t_(`${l}//${h}${g}`),n_("Auth",!0)):bS()}function Y_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VS(r){const e=Y_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Dg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Dg(h)}}}function Dg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function bS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(r,e){return F_(r,"POST","/v1/accounts:signInWithIdp",hc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="http://localhost";class ds extends J_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):br("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=sf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ds(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:OS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ja{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ja{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ja{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(r,e){return F_(r,"POST","/v1/accounts:signUp",hc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await jn._fromIdTokenResponse(e,s,o),h=Vg(s);return new Ei({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Vg(s);return new Ei({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Vg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(r){var e;if(zn(r.app))return Promise.reject(yi(r));const t=dc(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ei({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await LS(t,{returnSecureToken:!0}),o=await Ei._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu extends Hn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Wu(e,t,s,o)}}function ev(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(r,l,e,s):l})}async function FS(r,e,t=!1){const s=await qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ei._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(r,e,t=!1){const{auth:s}=r;if(zn(s.app))return Promise.reject(yi(s));const o="reauthenticate";try{const l=await qa(r,ev(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=lf(l.idToken);_e(h,s,"internal-error");const{sub:p}=h;return _e(r.uid===p,s,"user-mismatch"),Ei._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&br(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(r,e,t=!1){if(zn(r.app))return Promise.reject(yi(r));const s="signIn",o=await ev(r,s,e),l=await Ei._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function jS(r,e,t,s){return yt(r).onIdTokenChanged(e,t,s)}function BS(r,e,t){return yt(r).beforeAuthStateChanged(e,t)}function $S(r,e,t,s){return yt(r).onAuthStateChanged(e,t,s)}const Gu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=1e3,HS=10;class nv extends tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);wS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nv.type="LOCAL";const WS=nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv extends tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rv.type="SESSION";const iv=rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,l)),g=await GS(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,g)=>{const _=hf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===_)switch(C.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(C.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function QS(r){sr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function XS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function JS(){return sv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="firebaseLocalStorageDb",ZS=1,Ku="firebaseLocalStorage",av="fbase_key";class Za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pc(r,e){return r.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function e1(){const r=indexedDB.deleteDatabase(ov);return new Za(r).toPromise()}function xd(){const r=indexedDB.open(ov,ZS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ku,{keyPath:av})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ku)?e(s):(s.close(),await e1(),e(await xd()))})})}async function bg(r,e,t){const s=pc(r,!0).put({[av]:e,value:t});return new Za(s).toPromise()}async function t1(r,e){const t=pc(r,!1).get(e),s=await new Za(t).toPromise();return s===void 0?null:s.value}function Og(r,e){const t=pc(r,!0).delete(e);return new Za(t).toPromise()}const n1=800,r1=3;class lv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>r1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(JS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XS(),!this.activeServiceWorker)return;this.sender=new KS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xd();return await bg(e,Gu,"1"),await Og(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>bg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>t1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Og(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=pc(o,!1).getAll();return new Za(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lv.type="LOCAL";const i1=lv;new Ya(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(r,e){return e?xr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends J_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function o1(r){return zS(r.auth,new df(r),r.bypassAuthState)}function a1(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),US(t,new df(r),r.bypassAuthState)}async function l1(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),FS(t,new df(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o1;case"linkViaPopup":case"linkViaRedirect":return l1;case"reauthViaPopup":case"reauthViaRedirect":return a1;default:br(this.auth,"internal-error")}}resolve(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=new Ya(2e3,1e4);class go extends uv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Or(this.filter.length===1,"Popup operations only handle one event");const e=hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u1.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="pendingRedirect",Nu=new Map;class h1 extends uv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const s=await d1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function d1(r,e){const t=m1(e),s=p1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function f1(r,e){Nu.set(r._key(),e)}function p1(r){return xr(r._redirectPersistence)}function m1(r){return Pu(c1,r.config.apiKey,r.name)}async function g1(r,e,t=!1){if(zn(r.app))return Promise.reject(yi(r));const s=dc(r),o=s1(s,e),h=await new h1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=600*1e3;class _1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!v1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!cv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lg(e))}saveEventToCache(e){this.cachedEventUids.add(Lg(e)),this.lastProcessedEventTime=Date.now()}}function Lg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function cv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function v1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(r,e={}){return xo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T1=/^https?/;async function I1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await w1(r);for(const t of e)try{if(S1(t))return}catch{}br(r,"unauthorized-domain")}function S1(r){const e=Pd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!T1.test(t))return!1;if(E1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Ya(3e4,6e4);function Mg(){const r=sr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function R1(r){return new Promise((e,t)=>{var s,o,l;function h(){Mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mg(),t(ir(r,"network-request-failed"))},timeout:A1.get()})}if(!((o=(s=sr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=sr().gapi)===null||l===void 0)&&l.load)h();else{const p=PS("iframefcb");return sr()[p]=()=>{gapi.load?h():t(ir(r,"network-request-failed"))},CS(`${kS()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw xu=null,e})}let xu=null;function C1(r){return xu=xu||R1(r),xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=new Ya(5e3,15e3),P1="__/auth/iframe",N1="emulator/auth/iframe",x1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?af(e,N1):`https://${r.config.authDomain}/${P1}`,s={apiKey:e.apiKey,appName:r.name,v:No},o=D1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Xa(s).slice(1)}`}async function b1(r){const e=await C1(r),t=sr().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:V1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=ir(r,"network-request-failed"),p=sr().setTimeout(()=>{l(h)},k1.get());function g(){sr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L1=500,M1=600,F1="_blank",U1="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z1(r,e,t,s=L1,o=M1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},O1),{width:s.toString(),height:o.toString(),top:l,left:h}),_=jt().toLowerCase();t&&(p=q_(_)?F1:t),B_(_)&&(e=e||U1,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[j,K])=>`${C}${j}=${K},`,"");if(vS(_)&&p!=="_self")return j1(e||"",p),new Fg(null);const S=window.open(e||"",p,w);_e(S,r,"popup-blocked");try{S.focus()}catch{}return new Fg(S)}function j1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="__/auth/handler",$1="emulator/auth/handler",q1=encodeURIComponent("fac");async function Ug(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:No,eventId:o};if(e instanceof Z_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",wE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,S]of Object.entries({}))h[w]=S}if(e instanceof Ja){const w=e.getScopes().filter(S=>S!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const g=await r._getAppCheckToken(),_=g?`#${q1}=${encodeURIComponent(g)}`:"";return`${H1(r)}?${Xa(p).slice(1)}${_}`}function H1({config:r}){return r.emulator?af(r,$1):`https://${r.authDomain}/${B1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iv,this._completeRedirectFn=g1,this._overrideRedirectResult=f1}async _openPopup(e,t,s,o){var l;Or((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Ug(e,t,s,Pd(),o);return z1(e,h,hf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Ug(e,t,s,Pd(),o);return QS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Or(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await b1(e),s=new _1(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_d,{type:_d},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[_d];h!==void 0&&t(!!h),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=I1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Q_()||$_()||uf()}}const G1=W1;var zg="@firebase/auth",jg="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function X1(r){cr(new $n("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(r)},_=new AS(s,o,l,g);return xS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),cr(new $n("auth-internal",e=>{const t=dc(e.getProvider("auth").getImmediate());return(s=>new K1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(zg,jg,Q1(r)),Sn(zg,jg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=300,J1=e_("authIdTokenMaxAge")||Y1;let Bg=null;const Z1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>J1)return;const o=t==null?void 0:t.token;Bg!==o&&(Bg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function eA(r=Jd()){const e=gs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=NS(r,{popupRedirectResolver:G1,persistence:[i1,WS,iv]}),s=e_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=Z1(l.toString());BS(t,h,()=>h(t.currentUser)),jS(t,p=>h(p))}}const o=Jy("auth");return o&&DS(t,`http://${o}`),t}function tA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}RS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=ir("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",tA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});X1("Browser");var $g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,hv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(P,V,b){for(var A=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)A[Qe-2]=arguments[Qe];return I.prototype[V].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)P[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)P[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var b=D.g[3],A=I+(b^R&(V^b))+P[0]+3614090360&4294967295;I=R+(A<<7&4294967295|A>>>25),A=b+(V^I&(R^V))+P[1]+3905402710&4294967295,b=I+(A<<12&4294967295|A>>>20),A=V+(R^b&(I^R))+P[2]+606105819&4294967295,V=b+(A<<17&4294967295|A>>>15),A=R+(I^V&(b^I))+P[3]+3250441966&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(b^R&(V^b))+P[4]+4118548399&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(V^I&(R^V))+P[5]+1200080426&4294967295,b=I+(A<<12&4294967295|A>>>20),A=V+(R^b&(I^R))+P[6]+2821735955&4294967295,V=b+(A<<17&4294967295|A>>>15),A=R+(I^V&(b^I))+P[7]+4249261313&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(b^R&(V^b))+P[8]+1770035416&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(V^I&(R^V))+P[9]+2336552879&4294967295,b=I+(A<<12&4294967295|A>>>20),A=V+(R^b&(I^R))+P[10]+4294925233&4294967295,V=b+(A<<17&4294967295|A>>>15),A=R+(I^V&(b^I))+P[11]+2304563134&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(b^R&(V^b))+P[12]+1804603682&4294967295,I=R+(A<<7&4294967295|A>>>25),A=b+(V^I&(R^V))+P[13]+4254626195&4294967295,b=I+(A<<12&4294967295|A>>>20),A=V+(R^b&(I^R))+P[14]+2792965006&4294967295,V=b+(A<<17&4294967295|A>>>15),A=R+(I^V&(b^I))+P[15]+1236535329&4294967295,R=V+(A<<22&4294967295|A>>>10),A=I+(V^b&(R^V))+P[1]+4129170786&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^V&(I^R))+P[6]+3225465664&4294967295,b=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(b^I))+P[11]+643717713&4294967295,V=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(V^b))+P[0]+3921069994&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(V^b&(R^V))+P[5]+3593408605&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^V&(I^R))+P[10]+38016083&4294967295,b=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(b^I))+P[15]+3634488961&4294967295,V=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(V^b))+P[4]+3889429448&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(V^b&(R^V))+P[9]+568446438&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^V&(I^R))+P[14]+3275163606&4294967295,b=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(b^I))+P[3]+4107603335&4294967295,V=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(V^b))+P[8]+1163531501&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(V^b&(R^V))+P[13]+2850285829&4294967295,I=R+(A<<5&4294967295|A>>>27),A=b+(R^V&(I^R))+P[2]+4243563512&4294967295,b=I+(A<<9&4294967295|A>>>23),A=V+(I^R&(b^I))+P[7]+1735328473&4294967295,V=b+(A<<14&4294967295|A>>>18),A=R+(b^I&(V^b))+P[12]+2368359562&4294967295,R=V+(A<<20&4294967295|A>>>12),A=I+(R^V^b)+P[5]+4294588738&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^V)+P[8]+2272392833&4294967295,b=I+(A<<11&4294967295|A>>>21),A=V+(b^I^R)+P[11]+1839030562&4294967295,V=b+(A<<16&4294967295|A>>>16),A=R+(V^b^I)+P[14]+4259657740&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(R^V^b)+P[1]+2763975236&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^V)+P[4]+1272893353&4294967295,b=I+(A<<11&4294967295|A>>>21),A=V+(b^I^R)+P[7]+4139469664&4294967295,V=b+(A<<16&4294967295|A>>>16),A=R+(V^b^I)+P[10]+3200236656&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(R^V^b)+P[13]+681279174&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^V)+P[0]+3936430074&4294967295,b=I+(A<<11&4294967295|A>>>21),A=V+(b^I^R)+P[3]+3572445317&4294967295,V=b+(A<<16&4294967295|A>>>16),A=R+(V^b^I)+P[6]+76029189&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(R^V^b)+P[9]+3654602809&4294967295,I=R+(A<<4&4294967295|A>>>28),A=b+(I^R^V)+P[12]+3873151461&4294967295,b=I+(A<<11&4294967295|A>>>21),A=V+(b^I^R)+P[15]+530742520&4294967295,V=b+(A<<16&4294967295|A>>>16),A=R+(V^b^I)+P[2]+3299628645&4294967295,R=V+(A<<23&4294967295|A>>>9),A=I+(V^(R|~b))+P[0]+4096336452&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~V))+P[7]+1126891415&4294967295,b=I+(A<<10&4294967295|A>>>22),A=V+(I^(b|~R))+P[14]+2878612391&4294967295,V=b+(A<<15&4294967295|A>>>17),A=R+(b^(V|~I))+P[5]+4237533241&4294967295,R=V+(A<<21&4294967295|A>>>11),A=I+(V^(R|~b))+P[12]+1700485571&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~V))+P[3]+2399980690&4294967295,b=I+(A<<10&4294967295|A>>>22),A=V+(I^(b|~R))+P[10]+4293915773&4294967295,V=b+(A<<15&4294967295|A>>>17),A=R+(b^(V|~I))+P[1]+2240044497&4294967295,R=V+(A<<21&4294967295|A>>>11),A=I+(V^(R|~b))+P[8]+1873313359&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~V))+P[15]+4264355552&4294967295,b=I+(A<<10&4294967295|A>>>22),A=V+(I^(b|~R))+P[6]+2734768916&4294967295,V=b+(A<<15&4294967295|A>>>17),A=R+(b^(V|~I))+P[13]+1309151649&4294967295,R=V+(A<<21&4294967295|A>>>11),A=I+(V^(R|~b))+P[4]+4149444226&4294967295,I=R+(A<<6&4294967295|A>>>26),A=b+(R^(I|~V))+P[11]+3174756917&4294967295,b=I+(A<<10&4294967295|A>>>22),A=V+(I^(b|~R))+P[2]+718787259&4294967295,V=b+(A<<15&4294967295|A>>>17),A=R+(b^(V|~I))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(A<<21&4294967295|A>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+b&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,P=this.B,V=this.h,b=0;b<I;){if(V==0)for(;b<=R;)o(this,D,b),b+=this.blockSize;if(typeof D=="string"){for(;b<I;)if(P[V++]=D.charCodeAt(b++),V==this.blockSize){o(this,P),V=0;break}}else for(;b<I;)if(P[V++]=D[b++],V==this.blockSize){o(this,P),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)D[R++]=this.g[I]>>>P&255;return D};function l(D,I){var R=p;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],P=!0,V=D.length-1;0<=V;V--){var b=D[V]|0;P&&b==I||(R[V]=b,P=!1)}this.g=R}var p={};function g(D){return-128<=D&&128>D?l(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function _(D){if(isNaN(D)||!isFinite(D))return S;if(0>D)return W(_(-D));for(var I=[],R=1,P=0;D>=R;P++)I[P]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return W(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(I,8)),P=S,V=0;V<D.length;V+=8){var b=Math.min(8,D.length-V),A=parseInt(D.substring(V,V+b),I);8>b?(b=_(Math.pow(I,b)),P=P.j(b).add(_(A))):(P=P.j(R),P=P.add(_(A)))}return P}var S=g(0),C=g(1),j=g(16777216);r=h.prototype,r.m=function(){if(Y(this))return-W(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);D+=(0<=P?P:4294967296+P)*I,I*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(K(this))return"0";if(Y(this))return"-"+W(this).toString(D);for(var I=_(Math.pow(D,6)),R=this,P="";;){var V=Ee(R,I).g;R=me(R,V.j(I));var b=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,K(R))return b+P;for(;6>b.length;)b="0"+b;P=b+P}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function K(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function Y(D){return D.h==-1}r.l=function(D){return D=me(this,D),Y(D)?-1:K(D)?0:1};function W(D){for(var I=D.g.length,R=[],P=0;P<I;P++)R[P]=~D.g[P];return new h(R,~D.h).add(C)}r.abs=function(){return Y(this)?W(this):this},r.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0,V=0;V<=I;V++){var b=P+(this.i(V)&65535)+(D.i(V)&65535),A=(b>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);P=A>>>16,b&=65535,A&=65535,R[V]=A<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function me(D,I){return D.add(W(I))}r.j=function(D){if(K(this)||K(D))return S;if(Y(this))return Y(D)?W(this).j(W(D)):W(W(this).j(D));if(Y(D))return W(this.j(W(D)));if(0>this.l(j)&&0>D.l(j))return _(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<D.g.length;V++){var b=this.i(P)>>>16,A=this.i(P)&65535,Qe=D.i(V)>>>16,_t=D.i(V)&65535;R[2*P+2*V]+=A*_t,ce(R,2*P+2*V),R[2*P+2*V+1]+=b*_t,ce(R,2*P+2*V+1),R[2*P+2*V+1]+=A*Qe,ce(R,2*P+2*V+1),R[2*P+2*V+2]+=b*Qe,ce(R,2*P+2*V+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function ce(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function de(D,I){this.g=D,this.h=I}function Ee(D,I){if(K(I))throw Error("division by zero");if(K(D))return new de(S,S);if(Y(D))return I=Ee(W(D),I),new de(W(I.g),W(I.h));if(Y(I))return I=Ee(D,W(I)),new de(W(I.g),I.h);if(30<D.g.length){if(Y(D)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,P=I;0>=P.l(D);)R=ze(R),P=ze(P);var V=Te(R,1),b=Te(P,1);for(P=Te(P,2),R=Te(R,2);!K(P);){var A=b.add(P);0>=A.l(D)&&(V=V.add(R),b=A),P=Te(P,1),R=Te(R,1)}return I=me(D,V.j(I)),new de(V,I)}for(V=S;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),b=_(R),A=b.j(I);Y(A)||0<A.l(D);)R-=P,b=_(R),A=b.j(I);K(b)&&(b=C),V=V.add(b),D=me(D,A)}return new de(V,D)}r.A=function(D){return Ee(this,D).h},r.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&D.i(P);return new h(R,this.h&D.h)},r.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|D.i(P);return new h(R,this.h|D.h)},r.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^D.i(P);return new h(R,this.h^D.h)};function ze(D){for(var I=D.g.length+1,R=[],P=0;P<I;P++)R[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(R,D.h)}function Te(D,I){var R=I>>5;I%=32;for(var P=D.g.length-R,V=[],b=0;b<P;b++)V[b]=0<I?D.i(b+R)>>>I|D.i(b+R+1)<<32-I:D.i(b+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,hv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,_i=h}).apply(typeof $g<"u"?$g:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dv,Da,fv,Du,Dd,pv,mv,gv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var O=u[E];if(!(O in y))break e;y=y[O]}u=u[u.length-1],E=y[u],f=f(E),f!=E&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,E=!1,O={next:function(){if(!E&&y<u.length){var U=y++;return{value:f(U,u[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function _(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function w(u,f,y){return u.call.apply(u.bind,arguments)}function S(u,f,y){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),u.apply(f,O)}}return function(){return u.apply(f,arguments)}}function C(u,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:S,C.apply(null,arguments)}function j(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function K(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(E,O,U){for(var ee=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ee[Ue-2]=arguments[Ue];return f.prototype[O].apply(E,ee)}}function Y(u){const f=u.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=u[E];return y}return[]}function W(u,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const O=u.length||0,U=E.length||0;u.length=O+U;for(let ee=0;ee<U;ee++)u[O+ee]=E[ee]}else u.push(E)}}class me{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ce(u){return/^[\s\xa0]*$/.test(u)}function de(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var ze=de().indexOf("Gecko")!=-1&&!(de().toLowerCase().indexOf("webkit")!=-1&&de().indexOf("Edge")==-1)&&!(de().indexOf("Trident")!=-1||de().indexOf("MSIE")!=-1)&&de().indexOf("Edge")==-1;function Te(u,f,y){for(const E in u)f.call(y,u[E],E,u)}function D(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function I(u){const f={};for(const y in u)f[y]=u[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,f){let y,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(y in E)u[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(u[y]=E[y])}}function V(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function b(u){p.setTimeout(()=>{throw u},0)}function A(){var u=X;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class Qe{constructor(){this.h=this.g=null}add(f,y){const E=_t.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var _t=new me(()=>new vt,u=>u.reset());class vt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,te=!1,X=new Qe,B=()=>{const u=p.Promise.resolve(void 0);Ve=()=>{u.then(N)}};var N=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(y){b(y)}var f=_t;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}te=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return u})();function Ae(u,f){if(ue.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(ze){e:{try{Ee(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}K(Ae,ue);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(u,f,y,E,O){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=O,this.key=++Me,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,f,y,E,O){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var ee=Fr(u,f,E,O);return-1<ee?(f=u[ee],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,O),f.fa=y,u.push(f)),f};function vs(u,f){var y=f.type;if(y in u.g){var E=u.g[y],O=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=O)&&Array.prototype.splice.call(E,O,1),U&&(wt(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Fr(u,f,y,E){for(var O=0;O<u.length;++O){var U=u[O];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return O}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),ws={};function Fo(u,f,y,E,O){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Fo(u,f[U],y,E,O);return null}return y=jo(y),u&&u[Le]?u.K(f,y,_(E)?!!E.capture:!1,O):Uo(u,f,y,!1,E,O)}function Uo(u,f,y,E,O,U){if(!f)throw Error("Invalid event type");var ee=_(O)?!!O.capture:!!O,Ue=Ts(u);if(Ue||(u[xi]=Ue=new dr(u)),y=Ue.add(f,y,E,ee,U),y.proxy)return y;if(E=ol(),y.proxy=E,E.src=u,E.listener=y,u.addEventListener)Ie||(O=ee),O===void 0&&(O=!1),u.addEventListener(f.toString(),E,O);else if(u.attachEvent)u.attachEvent(pr(f.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ol(){function u(y){return f.call(u.src,u.listener,y)}const f=zo;return u}function Es(u,f,y,E,O){if(Array.isArray(f))for(var U=0;U<f.length;U++)Es(u,f[U],y,E,O);else E=_(E)?!!E.capture:!!E,y=jo(y),u&&u[Le]?(u=u.i,f=String(f).toString(),f in u.g&&(U=u.g[f],y=Fr(U,y,E,O),-1<y&&(wt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete u.g[f],u.h--)))):u&&(u=Ts(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Fr(f,y,E,O)),(y=-1<u?f[u]:null)&&fr(y))}function fr(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[Le])vs(f.i,u);else{var y=u.type,E=u.proxy;f.removeEventListener?f.removeEventListener(y,E,u.capture):f.detachEvent?f.detachEvent(pr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=Ts(f))?(vs(y,u),y.h==0&&(y.src=null,f[xi]=null)):wt(u)}}}function pr(u){return u in ws?ws[u]:ws[u]="on"+u}function zo(u,f){if(u.da)u=!0;else{f=new Ae(f,this);var y=u.listener,E=u.ha||u.src;u.fa&&fr(u),u=y.call(E,f)}return u}function Ts(u){return u=u[xi],u instanceof dr?u:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function jo(u){return typeof u=="function"?u:(u[Is]||(u[Is]=function(f){return u.handleEvent(f)}),u[Is])}function ht(){$.call(this),this.i=new dr(this),this.M=this,this.F=null}K(ht,$),ht.prototype[Le]=!0,ht.prototype.removeEventListener=function(u,f,y,E){Es(this,u,f,y,E)};function dt(u,f){var y,E=u.F;if(E)for(y=[];E;E=E.F)y.push(E);if(u=u.M,E=f.type||f,typeof f=="string")f=new ue(f,u);else if(f instanceof ue)f.target=f.target||u;else{var O=f;f=new ue(E,u),P(f,O)}if(O=!0,y)for(var U=y.length-1;0<=U;U--){var ee=f.g=y[U];O=mr(ee,E,!0,f)&&O}if(ee=f.g=u,O=mr(ee,E,!0,f)&&O,O=mr(ee,E,!1,f)&&O,y)for(U=0;U<y.length;U++)ee=f.g=y[U],O=mr(ee,E,!1,f)&&O}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],E=0;E<y.length;E++)wt(y[E]);delete u.g[f],u.h--}}this.F=null},ht.prototype.K=function(u,f,y,E){return this.i.add(String(u),f,!1,y,E)},ht.prototype.L=function(u,f,y,E){return this.i.add(String(u),f,!0,y,E)};function mr(u,f,y,E){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,U=0;U<f.length;++U){var ee=f[U];if(ee&&!ee.da&&ee.capture==y){var Ue=ee.listener,ft=ee.ha||ee.src;ee.fa&&vs(u.i,ee),O=Ue.call(ft,E)!==!1&&O}}return O&&!E.defaultPrevented}function Bo(u,f,y){if(typeof u=="function")y&&(u=C(u,y));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(u,f||0)}function Ur(u){u.g=Bo(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Di extends ${constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(u){$.call(this),this.h=u,this.g={}}K(Vi,$);var $o=[];function qo(u){Te(u.g,function(f,y){this.g.hasOwnProperty(y)&&fr(f)},u),u.g={}}Vi.prototype.N=function(){Vi.aa.N.call(this),qo(this)},Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ho=p.JSON.stringify,Wo=p.JSON.parse,Go=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function bi(){}bi.prototype.h=null;function Ss(u){return u.h||(u.h=u.i())}function As(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wn(){ue.call(this,"d")}K(Wn,ue);function Rs(){ue.call(this,"c")}K(Rs,ue);var Gn={},Ko=null;function Oi(){return Ko=Ko||new ht}Gn.La="serverreachability";function Qo(u){ue.call(this,Gn.La,u)}K(Qo,ue);function gr(u){const f=Oi();dt(f,new Qo(f))}Gn.STAT_EVENT="statevent";function Xo(u,f){ue.call(this,Gn.STAT_EVENT,u),this.stat=f}K(Xo,ue);function nt(u){const f=Oi();dt(f,new Xo(f,u))}Gn.Ma="timingevent";function Cs(u,f){ue.call(this,Gn.Ma,u),this.size=f}K(Cs,ue);function An(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},f)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function Mi(u,f,y,E,O,U){u.info(function(){if(u.g)if(U)for(var ee="",Ue=U.split("&"),ft=0;ft<Ue.length;ft++){var xe=Ue[ft].split("=");if(1<xe.length){var Et=xe[0];xe=xe[1];var st=Et.split("_");ee=2<=st.length&&st[1]=="type"?ee+(Et+"="+xe+"&"):ee+(Et+"=redacted&")}}else ee=null;else ee=U;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+y+`
`+ee})}function ks(u,f,y,E,O,U,ee){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+y+`
`+U+" "+ee})}function Rn(u,f,y,E){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Vc(u,y)+(E?" "+E:"")})}function Yo(u,f){u.info(function(){return"TIMEOUT: "+f})}Li.prototype.info=function(){};function Vc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var E=y[u];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var U=O[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ee=1;ee<O.length;ee++)O[ee]=""}}}}return Ho(y)}catch{return f}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},al={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Fi(){}K(Fi,bi),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Cn=new Fi;function kn(u,f,y,E){this.j=u,this.i=f,this.l=y,this.R=E||1,this.U=new Vi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var Jo={},Ns={};function xs(u,f,y){u.L=1,u.v=qr(sn(f)),u.m=y,u.P=!0,Zo(u,null)}function Zo(u,f){u.F=Date.now(),$e(u),u.A=sn(u.v);var y=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Wr(y.i,"t",E),u.C=0,y=u.j.J,u.h=new ll,u.g=Rl(u.j,y?f:null,!u.m),0<u.O&&(u.M=new Di(C(u.Y,u,u.g),u.O)),f=u.U,y=u.g,E=u.ca;var O="readystatechange";Array.isArray(O)||(O&&($o[0]=O.toString()),O=$o);for(var U=0;U<O.length;U++){var ee=Fo(y,O[U],E||f.handleEvent,!1,f.h||f);if(!ee)break;f.g[ee.key]=ee}f=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),gr(),Mi(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const f=this.M;f&&Gt(u)==3?f.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const st=Gt(this.g);var f=this.g.Ba();const gn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||sa(this.g)))){this.J||st!=4||f==7||(f==8||0>=gn?gr(3):gr(2)),Ui(this);var y=this.g.Z();this.X=y;t:if(ul(this)){var E=sa(this.g);u="";var O=E.length,U=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),zr(this);var ee="";break t}this.h.i=new p.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,u+=this.h.i.decode(E[f],{stream:!(U&&f==O-1)});E.length=0,this.h.g+=u,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,ks(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ft=this.g;if((Ue=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(Ue)){var xe=Ue;break t}}xe=null}if(y=xe)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ea(this,y);else{this.o=!1,this.s=3,nt(12),pn(this),zr(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<ee.length;)if(an=bc(this,ee),an==Ns){st==4&&(this.s=4,nt(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Jo){this.s=4,nt(15),Rn(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,an,null),ea(this,an);if(ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||ee.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,ee,"[Invalid Chunked Response]"),pn(this),zr(this);else if(0<ee.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),aa(Et),Et.M=!0,nt(11))}}else Rn(this.i,this.l,ee,null),ea(this,ee);st==4&&pn(this),this.o&&!this.J&&(st==4?Bs(this.j,this):(this.o=!1,$e(this)))}else Ms(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),pn(this),zr(this)}}}catch{}finally{}};function ul(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function bc(u,f){var y=u.C,E=f.indexOf(`
`,y);return E==-1?Ns:(y=Number(f.substring(y,E)),isNaN(y)?Jo:(E+=1,E+y>f.length?Ns:(f=f.slice(E,E+y),u.C=E+y,f)))}kn.prototype.cancel=function(){this.J=!0,pn(this)};function $e(u){u.S=Date.now()+u.I,cl(u,u.I)}function cl(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(C(u.ba,u),f)}function Ui(u){u.B&&(p.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yo(this.i,this.A),this.L!=2&&(gr(),nt(17)),pn(this),this.s=2,zr(this)):cl(this,this.S-u)};function zr(u){u.j.G==0||u.J||Bs(u.j,u)}function pn(u){Ui(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,qo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function ea(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)js(y),Vn(y);else break e;zs(y),nt(18)}}else y.za=O[1],0<y.za-y.T&&37500>O[2]&&y.F&&y.v==0&&!y.C&&(y.C=An(C(y.Za,y),6e3));if(1>=dl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Er(y,11)}else if((u.K||y.g==u)&&js(y),!ce(f))for(O=y.Da.g.parse(f),f=0;f<O.length;f++){let xe=O[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const Et=xe[3];Et!=null&&(y.la=Et,y.j.info("VER="+y.la));const st=xe[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const gn=xe[5];gn!=null&&typeof gn=="number"&&0<gn&&(E=1.5*gn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const an=u.g;if(an){const Wi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wi){var U=E.h;U.g||Wi.indexOf("spdy")==-1&&Wi.indexOf("quic")==-1&&Wi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ta(U,U.h),U.h=null))}if(E.D){const qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(E.ya=qs,je(E.I,E.D,qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var ee=u;if(E.qa=Al(E,E.J?E.ia:null,E.W),ee.K){fl(E.h,ee);var Ue=ee,ft=E.L;ft&&(Ue.I=ft),Ue.B&&(Ui(Ue),$e(Ue)),E.g=ee}else Hi(E);0<y.i.length&&Yn(y)}else xe[0]!="stop"&&xe[0]!="close"||Er(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Er(y,7):Ct(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}gr(4)}catch{}}var hl=class{constructor(u,f){this.g=u,this.map=f}};function zi(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function dl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function ta(u,f){u.g?u.g.add(f):u.h=f}function fl(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}zi.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function pl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return Y(u.i)}function Ds(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,E=0;E<y;E++)f.push(u[E]);return f}f=[],y=0;for(E in u)f[y++]=u[E];return f}function Vs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const E in u)f[y++]=E;return f}}}function jr(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Vs(u),E=Ds(u),O=E.length,U=0;U<O;U++)f.call(void 0,E[U],y&&y[U],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oc(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var E=u[y].indexOf("="),O=null;if(0<=E){var U=u[y].substring(0,E);O=u[y].substring(E+1)}else U=u[y];f(U,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function yr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yr){this.h=u.h,Bi(this,u.j),this.o=u.o,this.g=u.g,Br(this,u.s),this.l=u.l;var f=u.i,y=new Kn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),$r(this,y),this.m=u.m}else u&&(f=String(u).match(ji))?(this.h=!1,Bi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Br(this,f[4]),this.l=Pe(f[5]||"",!0),$r(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}yr.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Hr(f,bs,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Hr(f,bs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Hr(y,y.charAt(0)=="/"?yl:gl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Hr(y,na)),u.join("")};function sn(u){return new yr(u)}function Bi(u,f,y){u.j=y?Pe(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Br(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function $r(u,f,y){f instanceof Kn?(u.i=f,Qn(u.i,u.h)):(y||(f=Hr(f,_l)),u.i=new Kn(f,u.h))}function je(u,f,y){u.i.set(f,y)}function qr(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Hr(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,ml),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ml(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var bs=/[#\/\?@]/g,gl=/[#\?:]/g,yl=/[#\?]/g,_l=/[#\?@]/g,na=/#/g;function Kn(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&Oc(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Kn.prototype,r.add=function(u,f){Rt(this),this.i=null,u=mn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function Pn(u,f){Rt(u),f=mn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Nn(u,f){return Rt(u),f=mn(u,f),u.g.has(f)}r.forEach=function(u,f){Rt(this),this.g.forEach(function(y,E){y.forEach(function(O){u.call(f,O,E,this)},this)},this)},r.na=function(){Rt(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const O=u[E];for(let U=0;U<O.length;U++)y.push(f[E])}return y},r.V=function(u){Rt(this);let f=[];if(typeof u=="string")Nn(this,u)&&(f=f.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return Rt(this),this.i=null,u=mn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function Wr(u,f,y){Pn(u,f),0<y.length&&(u.i=null,u.g.set(mn(u,f),Y(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var O=U;ee[E]!==""&&(O+="="+encodeURIComponent(String(ee[E]))),u.push(O)}}return this.i=u.join("&")};function mn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function Qn(u,f){f&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(y,E){var O=E.toLowerCase();E!=O&&(Pn(this,E),Wr(this,O,y))},u)),u.j=f}function Lc(u,f){const y=new Li;if(p.Image){const E=new Image;E.onload=j(Wt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j(Wt,y,"TestLoadImage: error",!1,f,E),E.onabort=j(Wt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j(Wt,y,"TestLoadImage: timeout",!1,f,E),p.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else f(!1)}function vl(u,f){const y=new Li,E=new AbortController,O=setTimeout(()=>{E.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:E.signal}).then(U=>{clearTimeout(O),U.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Wt(y,"TestPingServer: error",!1,f)})}function Wt(u,f,y,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(y)}catch{}}function Mc(){this.g=new Go}function wl(u,f,y){const E=y||"";try{jr(u,function(O,U){let ee=O;_(O)&&(ee=Ho(O)),f.push(E+U+"="+encodeURIComponent(ee))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function _r(u){this.l=u.Ub||null,this.j=u.eb||!1}K(_r,bi),_r.prototype.g=function(){return new $i(this.l,this.j)},_r.prototype.i=(function(u){return function(){return u}})({});function $i(u,f){ht.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K($i,ht),r=$i.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Dn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;El(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function El(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?xn(this):Dn(this),this.readyState==3&&El(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},r.Qa=function(u){this.g&&(this.response=u,xn(this))},r.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vr(u){let f="";return Te(u,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Gr(u,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=vr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):je(u,f,y))}function Xe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Xe,ht);var Fc=/^https?$/i,ra=["POST","PUT"];r=Xe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ss(this.o):Ss(Cn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(U){qi(this,U);return}if(u=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)y.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),O=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ra,f,void 0))||E||O||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of y)this.g.setRequestHeader(U,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ls(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){qi(this,U)}};function qi(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Os(u),on(u)}function Os(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Xe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ia(this):this.bb())},r.bb=function(){ia(this)};function ia(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Bo(u.Ea,0,u);else if(dt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const ee=u.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=ee===0){var O=String(u.D).match(ji)[1]||null;!O&&p.self&&p.self.location&&(O=p.self.location.protocol.slice(0,-1)),E=!Fc.test(O?O.toLowerCase():"")}y=E}if(y)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var U=2<Gt(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",Os(u)}}finally{on(u)}}}}function on(u,f){if(u.g){Ls(u);const y=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||dt(u,"ready");try{y.onreadystatechange=E}catch{}}}function Ls(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Wo(f)}};function sa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(u){const f={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ce(u[E]))continue;var y=V(u[E]);const O=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[O]||[];f[O]=U,U.push(y)}D(f,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function oa(u){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new Mc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=oa.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,E){nt(0),this.W=u,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=Al(this,null,this.W),Yn(this)};function Ct(u){if(Fs(u),u.G==3){var f=u.U++,y=sn(u.I);if(je(y,"SID",u.K),je(y,"RID",f),je(y,"TYPE","terminate"),wr(u,y),f=new kn(u,u.j,f),f.L=2,f.v=qr(sn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=Rl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}Sl(u)}function Vn(u){u.g&&(aa(u),u.g.cancel(),u.g=null)}function Fs(u){Vn(u),u.u&&(p.clearTimeout(u.u),u.u=null),js(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Yn(u){if(!rn(u.h)&&!u.s){u.s=!0;var f=u.Ga;Ve||B(),te||(Ve(),te=!0),X.add(f,u),u.B=0}}function Uc(u,f){return dl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(C(u.Ga,u,f),Il(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const O=new kn(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(O.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Kr(this,O,f),y=sn(this.I),je(y,"RID",u),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),wr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(vr(U)))+"&"+f:this.m&&Gr(y,this.m,U)),ta(this.h,O),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),O.T=!0,xs(O,y,null)):xs(O,y,f),this.G=2}}else this.G==3&&(u?Us(this,u):this.i.length==0||rn(this.h)||Us(this))};function Us(u,f){var y;f?y=f.l:y=u.U++;const E=sn(u.I);je(E,"SID",u.K),je(E,"RID",y),je(E,"AID",u.T),wr(u,E),u.m&&u.o&&Gr(E,u.m,u.o),y=new kn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=Kr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,y),xs(y,E,f)}function wr(u,f){u.H&&Te(u.H,function(y,E){je(f,E,y)}),u.l&&jr({},function(y,E){je(f,E,y)})}function Kr(u,f,y){y=Math.min(u.i.length,y);var E=u.l?C(u.l.Na,u.l,u):null;e:{var O=u.i;let U=-1;for(;;){const ee=["count="+y];U==-1?0<y?(U=O[0].g,ee.push("ofs="+U)):U=0:ee.push("ofs="+U);let Ue=!0;for(let ft=0;ft<y;ft++){let xe=O[ft].g;const Et=O[ft].map;if(xe-=U,0>xe)U=Math.max(0,O[ft].g-100),Ue=!1;else try{wl(Et,ee,"req"+xe+"_")}catch{E&&E(Et)}}if(Ue){E=ee.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,E}function Hi(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Ve||B(),te||(Ve(),te=!0),X.add(f,u),u.v=0}}function zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(C(u.Fa,u),Il(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Tl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(C(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Vn(this),Tl(this))};function aa(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Tl(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=sn(u.qa);je(f,"RID","rpc"),je(f,"SID",u.K),je(f,"AID",u.T),je(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(f,"TO",u.ja),je(f,"TYPE","xmlhttp"),wr(u,f),u.m&&u.o&&Gr(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=qr(sn(f)),y.m=null,y.P=!0,Zo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Vn(this),zs(this),nt(19))};function js(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Bs(u,f){var y=null;if(u.g==f){js(u),aa(u),u.g=null;var E=2}else if(Bt(u.h,f))y=f.D,fl(u.h,f),E=1;else return;if(u.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var O=u.B;E=Oi(),dt(E,new Cs(E,y)),Yn(u)}else Hi(u);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&Uc(u,f)||E==2&&zs(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),O){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function Il(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function Er(u,f){if(u.j.info("Error code "+f),f==2){var y=C(u.fb,u),E=u.Xa;const O=!E;E=new yr(E||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Bi(E,"https"),qr(E),O?Lc(E.toString(),y):vl(E.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(f),Sl(u),Fs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Sl(u){if(u.G=0,u.ka=[],u.l){const f=pl(u.h);(f.length!=0||u.i.length!=0)&&(W(u.ka,f),W(u.ka,u.i),u.h.i.length=0,Y(u.i),u.i.length=0),u.l.ra()}}function Al(u,f,y){var E=y instanceof yr?sn(y):new yr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Br(E,E.s);else{var O=p.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var U=new yr(null);E&&Bi(U,E),f&&(U.g=f),O&&Br(U,O),y&&(U.l=y),E=U}return y=u.D,f=u.ya,y&&f&&je(E,y,f),je(E,"VER",u.la),wr(u,E),E}function Rl(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Xe(new _r({eb:y})):new Xe(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function la(){}r=la.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function $s(){}$s.prototype.g=function(u,f){return new $t(u,f)};function $t(u,f){ht.call(this),this.g=new oa(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!ce(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ce(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Jn(this)}K($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Ct(this.g)},$t.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ho(u),u=y);f.i.push(new hl(f.Ya++,u)),f.G==3&&Yn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,$t.aa.N.call(this)};function Cl(u){Wn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}K(Cl,Wn);function kl(){Rs.call(this),this.status=1}K(kl,Rs);function Jn(u){this.g=u}K(Jn,la),Jn.prototype.ua=function(){dt(this.g,"a")},Jn.prototype.ta=function(u){dt(this.g,new Cl(u))},Jn.prototype.sa=function(u){dt(this.g,new kl)},Jn.prototype.ra=function(){dt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,gv=function(){return new $s},mv=function(){return Oi()},pv=Gn,Dd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,Du=Ps,al.COMPLETE="complete",fv=al,As.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Da=As,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,dv=Xe}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});const qg="@firebase/firestore",Hg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new lc("@firebase/firestore");function ho(){return fs.logLevel}function re(r,...e){if(fs.logLevel<=Ce.DEBUG){const t=e.map(ff);fs.debug(`Firestore (${Do}): ${r}`,...t)}}function Lr(r,...e){if(fs.logLevel<=Ce.ERROR){const t=e.map(ff);fs.error(`Firestore (${Do}): ${r}`,...t)}}function Ti(r,...e){if(fs.logLevel<=Ce.WARN){const t=e.map(ff);fs.warn(`Firestore (${Do}): ${r}`,...t)}}function ff(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,yv(r,s,t)}function yv(r,e,t){let s=`FIRESTORE (${Do}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Lr(s),new Error(s)}function Fe(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||yv(e,o,s)}function we(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class iA{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ls,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ls)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new _v(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class sA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=l=>{l.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,re("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=lA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Se(r,e){return r<e?-1:r>e?1:0}function Vd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const l=vv(),h=uA(l.encode(Gg(r,t)),l.encode(Gg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(r.length,e.length)}function Gg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function uA(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Se(r[t],e[t]);return Se(r.length,e.length)}function To(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="__name__";class rr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return rr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=rr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const s=rr.isNumericId(e),o=rr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?rr.extractNumericId(e).compare(rr.extractNumericId(t)):Vd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class He extends rr{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const cA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends rr{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return cA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kg}static keyField(){return new Dt([Kg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(He.fromString(e))}static fromName(e){return new he(He.fromString(e).popFirst(5))}static empty(){return new he(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(r,e,t){if(!t)throw new ie(q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function hA(r,e,t,s){if(e===!0&&s===!0)throw new ie(q.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Qg(r){if(!he.isDocumentKey(r))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Xg(r){if(he.isDocumentKey(r))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ev(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ge(12329,{type:typeof r})}function vi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(r);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(r,e){const t={typeString:r};return e&&(t.value=e),t}function el(r,e){if(!Ev(r))throw new ie(q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new ie(q.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=-62135596800,Jg=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Jg);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yg)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ut("string",Ke._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ke(0,0))}static max(){return new ve(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=-1;function dA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new Ii(o,he.empty(),e)}function fA(r){return new Ii(r.readTime,r.key,Ha)}class Ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ii(ve.min(),he.empty(),Ha)}static max(){return new Ii(ve.max(),he.empty(),Ha)}}function pA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(r){if(r.code!==q.FAILED_PRECONDITION||r.message!==mA)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,l=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++p,p===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function yA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}gc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=-1;function yc(r){return r==null}function Qu(r){return r===0&&1/r==-1/0}function _A(r){return typeof r=="number"&&Number.isInteger(r)&&!Qu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="";function vA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Zg(e)),e=wA(r.get(t),e);return Zg(e)}function wA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case Tv:t+="";break;default:t+=l}}return t}function Zg(r){return r+Tv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Pi(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Iv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new xt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ty(this.data.getIterator())}getIteratorFrom(e){return new ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new gt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Sv("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const EA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(r){if(Fe(!!r,39018),typeof r=="string"){let e=0;const t=EA.exec(r);if(Fe(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ai(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="server_timestamp",Rv="__type__",Cv="__previous_value__",kv="__local_write_time__";function gf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rv])===null||t===void 0?void 0:t.stringValue)===Av}function _c(r){const e=r.mapValue.fields[Cv];return gf(e)?_c(e):e}function Wa(r){const e=Si(r.mapValue.fields[kv].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,s,o,l,h,p,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Xu="(default)";class Ga{constructor(e,t){this.projectId=e,this.database=t||Xu}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database===Xu}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="__type__",IA="__max__",Au={mapValue:{}},Nv="__vector__",Yu="value";function Ri(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?gf(r)?4:AA(r)?9007199254740991:SA(r)?10:11:ge(28295,{value:r})}function hr(r,e){if(r===e)return!0;const t=Ri(r);if(t!==Ri(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Wa(r).isEqual(Wa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Si(o.timestampValue),p=Si(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ai(o.bytesValue).isEqual(Ai(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),p=it(l.doubleValue);return h===p?Qu(h)===Qu(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(ey(h)!==ey(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!hr(h[g],p[g])))return!1;return!0})(r,e);default:return ge(52216,{left:r})}}function Ka(r,e){return(r.values||[]).find((t=>hr(t,e)))!==void 0}function Io(r,e){if(r===e)return 0;const t=Ri(r),s=Ri(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const p=it(l.integerValue||l.doubleValue),g=it(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return ny(r.timestampValue,e.timestampValue);case 4:return ny(Wa(r),Wa(e));case 5:return Vd(r.stringValue,e.stringValue);case 6:return(function(l,h){const p=Ai(l),g=Ai(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const p=l.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const w=Se(p[_],g[_]);if(w!==0)return w}return Se(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const p=Se(it(l.latitude),it(h.latitude));return p!==0?p:Se(it(l.longitude),it(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ry(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var p,g,_,w;const S=l.fields||{},C=h.fields||{},j=(p=S[Yu])===null||p===void 0?void 0:p.arrayValue,K=(g=C[Yu])===null||g===void 0?void 0:g.arrayValue,Y=Se(((_=j==null?void 0:j.values)===null||_===void 0?void 0:_.length)||0,((w=K==null?void 0:K.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:ry(j,K)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Au.mapValue&&h===Au.mapValue)return 0;if(l===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const p=l.fields||{},g=Object.keys(p),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let S=0;S<g.length&&S<w.length;++S){const C=Vd(g[S],w[S]);if(C!==0)return C;const j=Io(p[g[S]],_[w[S]]);if(j!==0)return j}return Se(g.length,w.length)})(r.mapValue,e.mapValue);default:throw ge(23264,{le:t})}}function ny(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=Si(r),s=Si(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function ry(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Io(t[o],s[o]);if(l)return l}return Se(t.length,s.length)}function So(r){return bd(r)}function bd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Si(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ai(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return he.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=bd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${bd(t.fields[h])}`;return o+"}"})(r.mapValue):ge(61005,{value:r})}function Vu(r){switch(Ri(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_c(r);return e?16+Vu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ai(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Vu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return Pi(s.fields,((l,h)=>{o+=l.length+Vu(h)})),o})(r.mapValue);default:throw ge(13486,{value:r})}}function iy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Od(r){return!!r&&"integerValue"in r}function yf(r){return!!r&&"arrayValue"in r}function sy(r){return!!r&&"nullValue"in r}function oy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function bu(r){return!!r&&"mapValue"in r}function SA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Pv])===null||t===void 0?void 0:t.stringValue)===Nv}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Pi(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ua(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function AA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===IA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!bu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ua(h):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());bu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];bu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Pi(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new tn(Ua(this.value))}}function xv(r){const e=[];return Pi(r.fields,((t,s)=>{const o=new Dt([t]);if(bu(s)){const l=xv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new zt(e,0,ve.min(),ve.min(),ve.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,ve.min(),ve.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,ve.min(),ve.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t){this.position=e,this.inclusive=t}}function ay(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function ly(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!hr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t="asc"){this.field=e,this.dir=t}}function RA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{}class lt extends Dv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new kA(e,t,s):t==="array-contains"?new xA(e,s):t==="in"?new DA(e,s):t==="not-in"?new VA(e,s):t==="array-contains-any"?new bA(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new PA(e,s):new NA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Ri(this.value)===Ri(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends Dv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new qn(e,t)}matches(e){return Vv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Vv(r){return r.op==="and"}function bv(r){return CA(r)&&Vv(r)}function CA(r){for(const e of r.filters)if(e instanceof qn)return!1;return!0}function Ld(r){if(r instanceof lt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(bv(r))return r.filters.map((e=>Ld(e))).join(",");{const e=r.filters.map((t=>Ld(t))).join(",");return`${r.op}(${e})`}}function Ov(r,e){return r instanceof lt?(function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&hr(s.value,o.value)})(r,e):r instanceof qn?(function(s,o){return o instanceof qn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,p)=>l&&Ov(h,o.filters[p])),!0):!1})(r,e):void ge(19439)}function Lv(r){return r instanceof lt?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(r):r instanceof qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Lv).join(" ,")+"}"})(r):"Filter"}class kA extends lt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class PA extends lt{constructor(e,t){super(e,"in",t),this.keys=Mv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class NA extends lt{constructor(e,t){super(e,"not-in",t),this.keys=Mv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Mv(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>he.fromName(s.referenceValue)))}class xA extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yf(t)&&Ka(t.arrayValue,this.value)}}class DA extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ka(this.value.arrayValue,t)}}class VA extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ka(this.value.arrayValue,t)}}class bA extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ka(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.Pe=null}}function uy(r,e=null,t=[],s=[],o=null,l=null,h=null){return new OA(r,e,t,s,o,l,h)}function _f(r){const e=we(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Ld(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Pe=t}return e.Pe}function vf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!RA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ov(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ly(r.startAt,e.startAt)&&ly(r.endAt,e.endAt)}function Md(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function LA(r,e,t,s,o,l,h,p){return new tl(r,e,t,s,o,l,h,p)}function wf(r){return new tl(r)}function cy(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Fv(r){return r.collectionGroup!==null}function za(r){const e=we(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new gt(Dt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Zu(l,s))})),t.has(Dt.keyField().canonicalString())||e.Te.push(new Zu(Dt.keyField(),s))}return e.Te}function or(r){const e=we(r);return e.Ie||(e.Ie=MA(e,za(r))),e.Ie}function MA(r,e){if(r.limitType==="F")return uy(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Zu(o.field,l)}));const t=r.endAt?new Ju(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ju(r.startAt.position,r.startAt.inclusive):null;return uy(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Fd(r,e){const t=r.filters.concat([e]);return new tl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ud(r,e,t){return new tl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vc(r,e){return vf(or(r),or(e))&&r.limitType===e.limitType}function Uv(r){return`${_f(or(r))}|lt:${r.limitType}`}function fo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Lv(o))).join(", ")}]`),yc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(or(r))}; limitType=${r.limitType})`}function wc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):he.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of za(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const _=ay(h,p,g);return h.inclusive?_<=0:_<0})(s.startAt,za(s),o)||s.endAt&&!(function(h,p,g){const _=ay(h,p,g);return h.inclusive?_>=0:_>0})(s.endAt,za(s),o))})(r,e)}function FA(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function zv(r){return(e,t)=>{let s=!1;for(const o of za(r)){const l=UA(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function UA(r,e,t){const s=r.field.isKeyField()?he.comparator(e.key,t.key):(function(l,h,p){const g=h.data.field(l),_=p.data.field(l);return g!==null&&_!==null?Io(g,_):ge(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return Iv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new et(he.comparator);function Mr(){return zA}const jv=new et(he.comparator);function Va(...r){let e=jv;for(const t of r)e=e.insert(t.key,t);return e}function Bv(r){let e=jv;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function as(){return ja()}function $v(){return ja()}function ja(){return new ys((r=>r.toString()),((r,e)=>r.isEqual(e)))}const jA=new et(he.comparator),BA=new gt(he.comparator);function ke(...r){let e=BA;for(const t of r)e=e.add(t);return e}const $A=new gt(Se);function qA(){return $A}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function qv(r){return{integerValue:""+r}}function HA(r,e){return _A(e)?qv(e):Ef(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this._=void 0}}function WA(r,e,t){return r instanceof ec?(function(o,l){const h={fields:{[Rv]:{stringValue:Av},[kv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&gf(l)&&(l=_c(l)),l&&(h.fields[Cv]=l),{mapValue:h}})(t,e):r instanceof Ao?Wv(r,e):r instanceof Qa?Gv(r,e):(function(o,l){const h=Hv(o,l),p=hy(h)+hy(o.Ee);return Od(h)&&Od(o.Ee)?qv(p):Ef(o.serializer,p)})(r,e)}function GA(r,e,t){return r instanceof Ao?Wv(r,e):r instanceof Qa?Gv(r,e):t}function Hv(r,e){return r instanceof tc?(function(s){return Od(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ec extends Ec{}class Ao extends Ec{constructor(e){super(),this.elements=e}}function Wv(r,e){const t=Kv(e);for(const s of r.elements)t.some((o=>hr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Qa extends Ec{constructor(e){super(),this.elements=e}}function Gv(r,e){let t=Kv(e);for(const s of r.elements)t=t.filter((o=>!hr(o,s)));return{arrayValue:{values:t}}}class tc extends Ec{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function hy(r){return it(r.integerValue||r.doubleValue)}function Kv(r){return yf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t){this.field=e,this.transform=t}}function QA(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ao&&o instanceof Ao||s instanceof Qa&&o instanceof Qa?To(s.elements,o.elements,hr):s instanceof tc&&o instanceof tc?hr(s.Ee,o.Ee):s instanceof ec&&o instanceof ec})(r.transform,e.transform)}class XA{constructor(e,t){this.version=e,this.transformResults=t}}class Bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Tc{}function Qv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Tf(r.key,Bn.none()):new nl(r.key,r.data,Bn.none());{const t=r.data,s=tn.empty();let o=new gt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Ni(r.key,s,new hn(o.toArray()),Bn.none())}}function YA(r,e,t){r instanceof nl?(function(o,l,h){const p=o.value.clone(),g=fy(o.fieldTransforms,l,h.transformResults);p.setAll(g),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Ni?(function(o,l,h){if(!Ou(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=fy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Xv(o)),g.setAll(p),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ba(r,e,t,s){return r instanceof nl?(function(l,h,p,g){if(!Ou(l.precondition,h))return p;const _=l.value.clone(),w=py(l.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Ni?(function(l,h,p,g){if(!Ou(l.precondition,h))return p;const _=py(l.fieldTransforms,g,h),w=h.data;return w.setAll(Xv(l)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((S=>S.field)))})(r,e,t,s):(function(l,h,p){return Ou(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function JA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Hv(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function dy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((l,h)=>QA(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class nl extends Tc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ni extends Tc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Xv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function fy(r,e,t){const s=new Map;Fe(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,GA(h,p,t[o]))}return s}function py(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,WA(l,h,e))}return s}class Tf extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZA extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&YA(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=$v();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const g=Qv(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>dy(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>dy(t,s)))}}class If{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return jA})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new If(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,De;function rR(r){switch(r){case q.OK:return ge(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ge(15467,{code:r})}}function Yv(r){if(r===void 0)return Lr("GRPC error has no .code"),q.UNKNOWN;switch(r){case at.OK:return q.OK;case at.CANCELLED:return q.CANCELLED;case at.UNKNOWN:return q.UNKNOWN;case at.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case at.INTERNAL:return q.INTERNAL;case at.UNAVAILABLE:return q.UNAVAILABLE;case at.UNAUTHENTICATED:return q.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case at.NOT_FOUND:return q.NOT_FOUND;case at.ALREADY_EXISTS:return q.ALREADY_EXISTS;case at.PERMISSION_DENIED:return q.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case at.ABORTED:return q.ABORTED;case at.OUT_OF_RANGE:return q.OUT_OF_RANGE;case at.UNIMPLEMENTED:return q.UNIMPLEMENTED;case at.DATA_LOSS:return q.DATA_LOSS;default:return ge(39323,{code:r})}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=new _i([4294967295,4294967295],0);function my(r){const e=vv().encode(r),t=new hv;return t.update(e),new Uint8Array(t.digest())}function gy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new _i([t,s],0),new _i([o,l],0)]}class Sf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ba(`Invalid padding: ${t}`);if(s<0)throw new ba(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ba(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=_i.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(_i.fromNumber(s)));return o.compare(iR)===1&&(o=new _i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=my(e),[s,o]=gy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Sf(l,o,t);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.fe===0)return;const t=my(e),[s,o]=gy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ic(ve.min(),o,new et(Se),Mr(),ke())}}class rl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new rl(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class Jv{constructor(e,t){this.targetId=e,this.De=t}}class Zv{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class yy{constructor(){this.ve=0,this.Ce=_y(),this.Fe=Vt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),s=ke();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:l})}})),new rl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=_y()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class sR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Mr(),this.je=Ru(),this.Je=Ru(),this.He=new et(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Md(l))if(s===0){const h=new he(l.path);this.Xe(t,h,zt.newNoDocument(h,ve.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const p=this._t(e),g=p?this.ut(p,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,p;try{h=Ai(s).toUint8Array()}catch(g){if(g instanceof Sv)return Ti("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Sf(h,o,l)}catch(g){return Ti(g instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.fe===0?null:p}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const p=this.st(h);if(p){if(l.current&&Md(p.target)){const g=new he(p.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,zt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=ke();this.Je.forEach(((l,h)=>{let p=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new Ic(e,t,this.He,this.ze,s);return this.ze=Mr(),this.je=Ru(),this.Je=Ru(),this.He=new et(Se),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new yy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new gt(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new gt(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new yy),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new et(he.comparator)}function _y(){return new et(he.comparator)}const oR={asc:"ASCENDING",desc:"DESCENDING"},aR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lR={and:"AND",or:"OR"};class uR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zd(r,e){return r.useProto3Json||yc(e)?e:{value:e}}function nc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function cR(r,e){return nc(r,e.toTimestamp())}function ar(r){return Fe(!!r,49232),ve.fromTimestamp((function(t){const s=Si(t);return new Ke(s.seconds,s.nanos)})(r))}function Af(r,e){return jd(r,e).canonicalString()}function jd(r,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function t0(r){const e=He.fromString(r);return Fe(o0(e),10190,{key:e.toString()}),e}function Bd(r,e){return Af(r.databaseId,e.path)}function vd(r,e){const t=t0(e);if(t.get(1)!==r.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new he(r0(t))}function n0(r,e){return Af(r.databaseId,e)}function hR(r){const e=t0(r);return e.length===4?He.emptyPath():r0(e)}function $d(r){return new He(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function r0(r){return Fe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vy(r,e,t){return{name:Bd(r,e),fields:t.value.mapValue.fields}}function dR(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(_){const w=_.code===void 0?q.UNKNOWN:Yv(_.code);return new ie(w,_.message||"")})(h);t=new Zv(s,o,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=vd(r,s.document.name),l=ar(s.document.updateTime),h=s.document.createTime?ar(s.document.createTime):ve.min(),p=new tn({mapValue:{fields:s.document.fields}}),g=zt.newFoundDocument(o,l,h,p),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Lu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=vd(r,s.document),l=s.readTime?ar(s.readTime):ve.min(),h=zt.newNoDocument(o,l),p=s.removedTargetIds||[];t=new Lu([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=vd(r,s.document),l=s.removedTargetIds||[];t=new Lu([],l,o,null)}else{if(!("filter"in e))return ge(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new nR(o,l),p=s.targetId;t=new Jv(p,h)}}return t}function fR(r,e){let t;if(e instanceof nl)t={update:vy(r,e.key,e.value)};else if(e instanceof Tf)t={delete:Bd(r,e.key)};else if(e instanceof Ni)t={update:vy(r,e.key,e.data),updateMask:TR(e.fieldMask)};else{if(!(e instanceof ZA))return ge(16599,{Rt:e.type});t={verify:Bd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const p=h.transform;if(p instanceof ec)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ao)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof tc)return{fieldPath:h.field.canonicalString(),increment:p.Ee};throw ge(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:cR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)})(r,e.precondition)),t}function pR(r,e){return r&&r.length>0?(Fe(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(ve.min())&&(h=ar(l)),new XA(h,o.transformResults||[])})(t,e)))):[]}function mR(r,e){return{documents:[n0(r,e.path)]}}function gR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=n0(r,o);const l=(function(_){if(_.length!==0)return s0(qn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((w=>(function(C){return{field:po(C.field),direction:vR(C.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=zd(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function yR(r){let e=hR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(S){const C=i0(S);return C instanceof qn&&bv(C)?C.getFilters():[C]})(t.where));let h=[];t.orderBy&&(h=(function(S){return S.map((C=>(function(K){return new Zu(mo(K.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(K.direction))})(C)))})(t.orderBy));let p=null;t.limit&&(p=(function(S){let C;return C=typeof S=="object"?S.value:S,yc(C)?null:C})(t.limit));let g=null;t.startAt&&(g=(function(S){const C=!!S.before,j=S.values||[];return new Ju(j,C)})(t.startAt));let _=null;return t.endAt&&(_=(function(S){const C=!S.before,j=S.values||[];return new Ju(j,C)})(t.endAt)),LA(e,o,h,l,p,"F",g,_)}function _R(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function i0(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=mo(t.unaryFilter.field);return lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(r):r.fieldFilter!==void 0?(function(t){return lt.create(mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return qn.create(t.compositeFilter.filters.map((s=>i0(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(r):ge(30097,{filter:r})}function vR(r){return oR[r]}function wR(r){return aR[r]}function ER(r){return lR[r]}function po(r){return{fieldPath:r.canonicalString()}}function mo(r){return Dt.fromServerFormat(r.fieldPath)}function s0(r){return r instanceof lt?(function(t){if(t.op==="=="){if(oy(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(sy(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(oy(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(sy(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:wR(t.op),value:t.value}}})(r):r instanceof qn?(function(t){const s=t.getFilters().map((o=>s0(o)));return s.length===1?s[0]:{compositeFilter:{op:ER(t.op),filters:s}}})(r):ge(54877,{filter:r})}function TR(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function o0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,l=ve.min(),h=ve.min(),p=Vt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.gt=e}}function SR(r){const e=yR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ud(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.Dn=new RR}addToCollectionParentIndex(e,t){return this.Dn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ii.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class RR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(He.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},a0=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(a0,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ro(0)}static ur(){return new Ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="LruGarbageCollector",CR=1048576;function Ty([r,e],[t,s]){const o=Se(r,t);return o===0?Se(e,s):o}class kR{constructor(e){this.Tr=e,this.buffer=new gt(Ty),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ty(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class PR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){re(Ey,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bo(t)?re(Ey,"Ignoring IndexedDB error during garbage collection: ",t):await Vo(t)}await this.Rr(3e5)}))}}class NR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(gc.ue);const s=new kR(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(wy)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wy):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,p,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,p=Date.now(),this.removeTargets(e,s,t)))).next((S=>(l=S,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(_=Date.now(),ho()<=Ce.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${l} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:S}))))}}function xR(r,e){return new NR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(){this.changes=new ys((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ba(s.mutation,o,hn.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=as();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Va();return l.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=as();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,s,o){let l=Mr();const h=ja(),p=(function(){return ja()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Ni)?l=l.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ba(w.mutation,_,w.mutation.getFieldMask(),Ke.now())):h.set(_.key,hn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var S;return p.set(_,new VR(w,(S=h.get(_))!==null&&S!==void 0?S:null))})),p)))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new et(((h,p)=>h-p)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||hn.empty();w=p.applyToLocalView(_,w),s.set(g,w);const S=(o.get(p.batchId)||ke()).add(g);o=o.insert(p.batchId,S)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,w=g.value,S=$v();w.forEach((C=>{if(!l.has(C)){const j=Qv(t.get(C),s.get(C));j!==null&&S.set(C,j),l=l.add(C)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):H.resolve(as());let p=Ha,g=l;return h.next((_=>H.forEach(_,((w,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),l.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((C=>{g=g.insert(w,C)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,ke()))).next((w=>({batchId:p,changes:Bv(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,l).next((p=>H.forEach(p,(g=>{const _=(function(S,C){return new tl(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((S,C)=>{h=h.insert(S,C)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,zt.newInvalidDocument(w)))}));let p=Va();return h.forEach(((g,_)=>{const w=l.get(g);w!==void 0&&Ba(w.mutation,_,hn.empty(),Ke.now()),wc(t,_)&&(p=p.insert(g,_))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return H.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:SR(o.bundledQuery),readTime:ar(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.overlays=new et(he.comparator),this.kr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=as();return H.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=as(),l=t.length+1,h=new he(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=l.get(_.largestBatchId);w===null&&(w=as(),l=l.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const p=as(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>p.set(_,w))),!(p.size()>=o)););return H.resolve(p)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new tR(t,s));let l=this.kr.get(t);l===void 0&&(l=ke(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.qr=new gt(At.Qr),this.$r=new gt(At.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new At(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new At(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new he(new He([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new he(new He([])),s=new At(t,e),o=new At(t,e+1);let l=ke();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new At(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return he.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new gt(At.Qr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new eR(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Yr=this.Yr.add(new At(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return H.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?mf:this.er-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const p=this.Zr(h.Hr);l.push(p)})),H.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(Se);return t.forEach((o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(p=>{s=s.add(p.Hr)}))})),H.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;he.isDocumentKey(l)||(l=l.child(""));const h=new At(new he(l),0);let p=new gt(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Hr)),!0)}),h),H.resolve(this.ei(p))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return H.forEach(t.mutations,(o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new At(t,0),o=this.Yr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.ni=e,this.docs=(function(){return new et(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Mr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Mr();const h=t.path,p=new he(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||pA(fA(w),s)<=0||(o.has(w.key)||wc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return H.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}ri(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new zR(this)}getSize(e){return H.resolve(this.size)}}class zR extends DR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.persistence=e,this.ii=new ys((t=>_f(t)),vf),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new Rf,this.targetCount=0,this._i=Ro.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),H.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ro(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.hr(t),H.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),H.waitFor(l).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t){this.ai={},this.overlays={},this.ui=new gc(0),this.ci=!1,this.ci=!0,this.li=new MR,this.referenceDelegate=e(this),this.hi=new jR(this),this.indexManager=new AR,this.remoteDocumentCache=(function(o){return new UR(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new IR(t),this.Ti=new OR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new LR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new FR(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){re("MemoryPersistence","Starting transaction:",e);const o=new BR(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return H.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class BR extends gA{constructor(e){super(),this.currentSequenceNumber=e}}class Cf{constructor(e){this.persistence=e,this.Ai=new Rf,this.Ri=null}static Vi(e){return new Cf(e)}get mi(){if(this.Ri)return this.Ri;throw ge(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.mi,(s=>{const o=he.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return H.or([()=>H.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.gi=new ys((s=>vA(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=xR(this,t)}static Vi(e,t){return new rc(e,t)}Ii(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return H.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((p=>{p||(s++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),H.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vu(e.data.value)),t}Sr(e,t,s){return H.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new kf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return mE()?8:yA(jt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new $R;return this.ws(e,t,h).next((p=>{if(l.result=p,this.Rs)return this.Ss(e,t,h,p.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(ho()<=Ce.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),H.resolve()):(ho()<=Ce.DEBUG&&re("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ho()<=Ce.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):H.resolve())}ps(e,t){if(cy(t))return H.resolve(null);let s=or(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ud(t,null,"F"),s=or(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=ke(...l);return this.gs.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,p);return this.Ds(t,_,h,g.readTime)?this.ps(e,Ud(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return cy(t)||o.isEqual(ve.min())?H.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?H.resolve(null):(ho()<=Ce.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.vs(e,h,t,dA(o,Ha)).next((p=>p)))}))}bs(e,t){let s=new gt(zv(e));return t.forEach(((o,l)=>{wc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return ho()<=Ce.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",fo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ii.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="LocalStore",HR=3e8;class WR{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new et(Se),this.Ms=new ys((l=>_f(l)),vf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function GR(r,e,t,s){return new WR(r,e,t,s)}async function u0(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],p=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of l){p.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:p})))}))}))}function KR(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,w){const S=_.batch,C=S.keys();let j=H.resolve();return C.forEach((K=>{j=j.next((()=>w.getEntry(g,K))).next((Y=>{const W=_.docVersions.get(K);Fe(W!==null,48541),Y.version.compareTo(W)<0&&(S.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))}))})),j.next((()=>p.mutationQueue.removeMutationBatch(g,S)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=ke();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function c0(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function QR(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const p=[];e.targetChanges.forEach(((w,S)=>{const C=o.get(S);if(!C)return;p.push(t.hi.removeMatchingKeys(l,w.removedDocuments,S).next((()=>t.hi.addMatchingKeys(l,w.addedDocuments,S))));let j=C.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(S)!==null?j=j.withResumeToken(Vt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(S,j),(function(Y,W,me){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=HR?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(C,j,w)&&p.push(t.hi.updateTargetData(l,j))}));let g=Mr(),_=ke();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),p.push(XR(l,h,e.documentUpdates).next((w=>{g=w.Ls,_=w.ks}))),!s.isEqual(ve.min())){const w=t.hi.getLastRemoteSnapshotVersion(l).next((S=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));p.push(w)}return H.waitFor(p).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function XR(r,e,t){let s=ke(),o=ke();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=Mr();return t.forEach(((p,g)=>{const _=l.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):re(Pf,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function YR(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=mf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function JR(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,H.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function qd(r,e,t){const s=we(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!bo(h))throw h;re(Pf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function Iy(r,e,t){const s=we(r);let o=ve.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const S=we(g),C=S.Ms.get(w);return C!==void 0?H.resolve(S.Fs.get(C)):S.hi.getTargetData(_,w)})(s,h,or(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:ke()))).next((p=>(ZR(s,FA(e),p),{documents:p,qs:l})))))}function ZR(r,e,t){let s=r.xs.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class Sy{constructor(){this.activeTargetIds=qA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eC{constructor(){this.Fo=new Sy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Sy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="ConnectivityMonitor";class Ry{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){re(Ay,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){re(Ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu=null;function Hd(){return Cu===null?Cu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cu++,"0x"+Cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="RestConnection",nC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===Xu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Hd(),p=this.Go(e,t.toUriEncodedString());re(wd,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(p),w=Po(_);return this.jo(e,p,g,s,w).then((S=>(re(wd,`Received RPC '${e}' ${h}: `,S),S)),(S=>{throw Ti(wd,`RPC '${e}' ${h} failed with error: `,S,"url: ",p,"request:",s),S}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Do})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=nC[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class sC extends rC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=Hd();return new Promise(((p,g)=>{const _=new dv;_.setWithCredentials(!0),_.listenOnce(fv.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Du.NO_ERROR:const S=_.getResponseJson();re(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(S)),p(S);break;case Du.TIMEOUT:re(Ft,`RPC '${e}' ${h} timed out`),g(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case Du.HTTP_ERROR:const C=_.getStatus();if(re(Ft,`RPC '${e}' ${h} failed with status:`,C,"response text:",_.getResponseText()),C>0){let j=_.getResponseJson();Array.isArray(j)&&(j=j[0]);const K=j==null?void 0:j.error;if(K&&K.status&&K.message){const Y=(function(me){const ce=me.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(ce)>=0?ce:q.UNKNOWN})(K.status);g(new ie(Y,K.message))}else g(new ie(q.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ie(q.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{re(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);re(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}P_(e,t,s){const o=Hd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=gv(),p=mv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");re(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,g);const S=h.createWebChannel(w,g);this.T_(S);let C=!1,j=!1;const K=new iC({Ho:W=>{j?re(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(C||(re(Ft,`Opening RPC '${e}' stream ${o} transport.`),S.open(),C=!0),re(Ft,`RPC '${e}' stream ${o} sending:`,W),S.send(W))},Yo:()=>S.close()}),Y=(W,me,ce)=>{W.listen(me,(de=>{try{ce(de)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return Y(S,Da.EventType.OPEN,(()=>{j||(re(Ft,`RPC '${e}' stream ${o} transport opened.`),K.s_())})),Y(S,Da.EventType.CLOSE,(()=>{j||(j=!0,re(Ft,`RPC '${e}' stream ${o} transport closed`),K.__(),this.I_(S))})),Y(S,Da.EventType.ERROR,(W=>{j||(j=!0,Ti(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),K.__(new ie(q.UNAVAILABLE,"The operation could not be completed")))})),Y(S,Da.EventType.MESSAGE,(W=>{var me;if(!j){const ce=W.data[0];Fe(!!ce,16349);const de=ce,Ee=(de==null?void 0:de.error)||((me=de[0])===null||me===void 0?void 0:me.error);if(Ee){re(Ft,`RPC '${e}' stream ${o} received error:`,Ee);const ze=Ee.status;let Te=(function(R){const P=at[R];if(P!==void 0)return Yv(P)})(ze),D=Ee.message;Te===void 0&&(Te=q.INTERNAL,D="Unknown error status: "+ze+" with message "+Ee.message),j=!0,K.__(new ie(Te,D)),S.close()}else re(Ft,`RPC '${e}' stream ${o} received:`,ce),K.a_(ce)}})),Y(p,pv.STAT_EVENT,(W=>{W.stat===Dd.PROXY?re(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Dd.NOPROXY&&re(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{K.o_()}),0),K}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ed(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r){return new uR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="PersistentStream";class d0{constructor(e,t,s,o,l,h,p,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new h0(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new ie(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return re(Cy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(re(Cy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oC extends d0{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=dR(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?ar(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=$d(this.serializer),t.addTarget=(function(l,h){let p;const g=h.target;if(p=Md(g)?{documents:mR(l,g)}:{query:gR(l,g).Vt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=e0(l,h.resumeToken);const _=zd(l,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){p.readTime=nc(l,h.snapshotVersion.toTimestamp());const _=zd(l,h.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const s=_R(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=$d(this.serializer),t.removeTarget=e,this.k_(t)}}class aC extends d0{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=pR(e.writeResults,e.commitTime),s=ar(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=$d(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>fR(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{}class uC extends lC{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,jd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ie(q.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Jo(e,jd(t,s),o,h,p,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(q.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class cC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Lr(t),this._a=!1):re("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RemoteStore";class hC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{_s(this)&&(re(ps,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ia.add(4),await il(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Ac(_)})(this))}))})),this.Aa=new cC(s,o)}}async function Ac(r){if(_s(r))for(const e of r.da)await e(!0)}async function il(r){for(const e of r.da)await e(!1)}function f0(r,e){const t=we(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Vf(t)?Df(t):Oo(t).x_()&&xf(t,e))}function Nf(r,e){const t=we(r),s=Oo(t);t.Ta.delete(e),s.x_()&&p0(t,e),t.Ta.size===0&&(s.x_()?s.B_():_s(t)&&t.Aa.set("Unknown"))}function xf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oo(r).H_(e)}function p0(r,e){r.Ra.$e(e),Oo(r).Y_(e)}function Df(r){r.Ra=new sR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Oo(r).start(),r.Aa.aa()}function Vf(r){return _s(r)&&!Oo(r).M_()&&r.Ta.size>0}function _s(r){return we(r).Ia.size===0}function m0(r){r.Ra=void 0}async function dC(r){r.Aa.set("Online")}async function fC(r){r.Ta.forEach(((e,t)=>{xf(r,e)}))}async function pC(r,e){m0(r),Vf(r)?(r.Aa.la(e),Df(r)):r.Aa.set("Unknown")}async function mC(r,e,t){if(r.Aa.set("Online"),e instanceof Zv&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const p of l.targetIds)o.Ta.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ta.delete(p),o.Ra.removeTarget(p))})(r,e)}catch(s){re(ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(r,s)}else if(e instanceof Lu?r.Ra.Ye(e):e instanceof Jv?r.Ra.it(e):r.Ra.et(e),!t.isEqual(ve.min()))try{const s=await c0(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const p=l.Ra.Pt(h);return p.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=l.Ta.get(_);w&&l.Ta.set(_,w.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,_)=>{const w=l.Ta.get(g);if(!w)return;l.Ta.set(g,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),p0(l,g);const S=new pi(w.target,g,_,w.sequenceNumber);xf(l,S)})),l.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(s){re(ps,"Failed to raise snapshot:",s),await ic(r,s)}}async function ic(r,e,t){if(!bo(e))throw e;r.Ia.add(1),await il(r),r.Aa.set("Offline"),t||(t=()=>c0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(ps,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ac(r)}))}function g0(r,e){return e().catch((t=>ic(r,t,e)))}async function Rc(r){const e=we(r),t=Ci(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:mf;for(;gC(e);)try{const o=await YR(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,yC(e,o)}catch(o){await ic(e,o)}y0(e)&&_0(e)}function gC(r){return _s(r)&&r.Pa.length<10}function yC(r,e){r.Pa.push(e);const t=Ci(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function y0(r){return _s(r)&&!Ci(r).M_()&&r.Pa.length>0}function _0(r){Ci(r).start()}async function _C(r){Ci(r).na()}async function vC(r){const e=Ci(r);for(const t of r.Pa)e.X_(t.mutations)}async function wC(r,e,t){const s=r.Pa.shift(),o=If.from(s,e,t);await g0(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Rc(r)}async function EC(r,e){e&&Ci(r).Z_&&await(async function(s,o){if((function(h){return rR(h)&&h!==q.ABORTED})(o.code)){const l=s.Pa.shift();Ci(s).N_(),await g0(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Rc(s)}})(r,e),y0(r)&&_0(r)}async function ky(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),re(ps,"RemoteStore received new credentials");const s=_s(t);t.Ia.add(3),await il(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ac(t)}async function TC(r,e){const t=we(r);e?(t.Ia.delete(2),await Ac(t)):e||(t.Ia.add(2),await il(t),t.Aa.set("Unknown"))}function Oo(r){return r.Va||(r.Va=(function(t,s,o){const l=we(t);return l.ia(),new oC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:dC.bind(null,r),e_:fC.bind(null,r),n_:pC.bind(null,r),J_:mC.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Vf(r)?Df(r):r.Aa.set("Unknown")):(await r.Va.stop(),m0(r))}))),r.Va}function Ci(r){return r.ma||(r.ma=(function(t,s,o){const l=we(t);return l.ia(),new aC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:_C.bind(null,r),n_:EC.bind(null,r),ea:vC.bind(null,r),ta:wC.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Rc(r)):(await r.ma.stop(),r.Pa.length>0&&(re(ps,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new bf(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Of(r,e){if(Lr("AsyncQueue",`${e}: ${r}`),bo(r))return new ie(q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.fa=new et(he.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ge(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Co{constructor(e,t,s,o,l,h,p,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new Co(e,t,wo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class SC{constructor(){this.queries=Ny(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=we(t),l=o.queries;o.queries=Ny(),l.forEach(((h,p)=>{for(const g of p.wa)g.onError(s)}))})(this,new ie(q.ABORTED,"Firestore shutting down"))}}function Ny(){return new ys((r=>Uv(r)),vc)}async function AC(r,e){const t=we(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new IC,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Of(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Lf(t)}async function RC(r,e){const t=we(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function CC(r,e){const t=we(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const p of h.wa)p.Ca(o)&&(s=!0);h.ya=o}}s&&Lf(t)}function kC(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Lf(r){r.Da.forEach((e=>{e.next()}))}var Wd,xy;(xy=Wd||(Wd={})).Fa="default",xy.Cache="cache";class PC{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Co(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Wd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.key=e}}class w0{constructor(e){this.key=e}}class NC{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=zv(e),this.eu=new wo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Py,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,S)=>{const C=o.get(w),j=wc(this.query,S)?S:null,K=!!C&&this.mutatedKeys.has(C.key),Y=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let W=!1;C&&j?C.data.isEqual(j.data)?K!==Y&&(s.track({type:3,doc:j}),W=!0):this.iu(C,j)||(s.track({type:2,doc:j}),W=!0,(g&&this.Xa(j,g)>0||_&&this.Xa(j,_)<0)&&(p=!0)):!C&&j?(s.track({type:0,doc:j}),W=!0):C&&!j&&(s.track({type:1,doc:C}),W=!0,(g||_)&&(p=!0)),W&&(j?(h=h.add(j),l=Y?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{eu:h,ru:s,Ds:p,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((w,S)=>(function(j,K){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{At:W})}};return Y(j)-Y(K)})(w.type,S.type)||this.Xa(w.doc,S.doc))),this.su(s),o=o!=null&&o;const p=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Co(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Py,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new w0(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new v0(s))})),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Co.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Mf="SyncEngine";class xC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class DC{constructor(e){this.key=e,this.lu=!1}}class VC{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ys((p=>Uv(p)),vc),this.Tu=new Map,this.Iu=new Set,this.du=new et(he.comparator),this.Eu=new Map,this.Au=new Rf,this.Ru={},this.Vu=new Map,this.mu=Ro.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function bC(r,e,t=!0){const s=R0(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await E0(s,e,t,!0),o}async function OC(r,e){const t=R0(r);await E0(t,e,!0,!1)}async function E0(r,e,t,s){const o=await JR(r.localStore,or(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await LC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&f0(r.remoteStore,o),p}async function LC(r,e,t,s,o){r.gu=(S,C,j)=>(async function(Y,W,me,ce){let de=W.view.nu(me);de.Ds&&(de=await Iy(Y.localStore,W.query,!1).then((({documents:D})=>W.view.nu(D,de))));const Ee=ce&&ce.targetChanges.get(W.targetId),ze=ce&&ce.targetMismatches.get(W.targetId)!=null,Te=W.view.applyChanges(de,Y.isPrimaryClient,Ee,ze);return Vy(Y,W.targetId,Te._u),Te.snapshot})(r,S,C,j);const l=await Iy(r.localStore,e,!0),h=new NC(e,l.qs),p=h.nu(l.documents),g=rl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(p,r.isPrimaryClient,g);Vy(r,t,_._u);const w=new xC(e,t,h);return r.Pu.set(e,w),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function MC(r,e,t){const s=we(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!vc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await qd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Nf(s.remoteStore,o.targetId),Gd(s,o.targetId)})).catch(Vo)):(Gd(s,o.targetId),await qd(s.localStore,o.targetId,!0))}async function FC(r,e){const t=we(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Nf(t.remoteStore,s.targetId))}async function UC(r,e,t){const s=WC(r);try{const o=await(function(h,p){const g=we(h),_=Ke.now(),w=p.reduce(((j,K)=>j.add(K.key)),ke());let S,C;return g.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let K=Mr(),Y=ke();return g.Os.getEntries(j,w).next((W=>{K=W,K.forEach(((me,ce)=>{ce.isValidDocument()||(Y=Y.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(j,K))).next((W=>{S=W;const me=[];for(const ce of p){const de=JA(ce,S.get(ce.key).overlayedDocument);de!=null&&me.push(new Ni(ce.key,de,xv(de.value.mapValue),Bn.exists(!0)))}return g.mutationQueue.addMutationBatch(j,_,me,p)})).next((W=>{C=W;const me=W.applyToLocalDocumentSet(S,Y);return g.documentOverlayCache.saveOverlays(j,W.batchId,me)}))})).then((()=>({batchId:C.batchId,changes:Bv(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new et(Se)),_=_.insert(p,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await sl(s,o.changes),await Rc(s.remoteStore)}catch(o){const l=Of(o,"Failed to persist write");t.reject(l)}}async function T0(r,e){const t=we(r);try{const s=await QR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))})),await sl(t,s,e)}catch(s){await Vo(s)}}function Dy(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=we(h);g.onlineState=p;let _=!1;g.queries.forEach(((w,S)=>{for(const C of S.wa)C.va(p)&&(_=!0)})),_&&Lf(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zC(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new et(he.comparator);h=h.insert(l,zt.newNoDocument(l,ve.min()));const p=ke().add(l),g=new Ic(ve.min(),new Map,new et(Se),h,p);await T0(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Ff(s)}else await qd(s.localStore,e,!1).then((()=>Gd(s,e,t))).catch(Vo)}async function jC(r,e){const t=we(r),s=e.batch.batchId;try{const o=await KR(t.localStore,e);S0(t,s,null),I0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await sl(t,o)}catch(o){await Vo(o)}}async function BC(r,e,t){const s=we(r);try{const o=await(function(h,p){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,p).next((S=>(Fe(S!==null,37113),w=S.keys(),g.mutationQueue.removeMutationBatch(_,S)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);S0(s,e,t),I0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await sl(s,o)}catch(o){await Vo(o)}}function I0(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function S0(r,e,t){const s=we(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Gd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||A0(r,s)}))}function A0(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Nf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Ff(r))}function Vy(r,e,t){for(const s of t)s instanceof v0?(r.Au.addReference(s.key,e),$C(r,s)):s instanceof w0?(re(Mf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||A0(r,s.key)):ge(19791,{yu:s})}function $C(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(re(Mf,"New document in limbo: "+t),r.Iu.add(s),Ff(r))}function Ff(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new he(He.fromString(e)),s=r.mu.next();r.Eu.set(s,new DC(t)),r.du=r.du.insert(t,s),f0(r.remoteStore,new pi(or(wf(t.path)),s,"TargetPurposeLimboResolution",gc.ue))}}async function sl(r,e,t){const s=we(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((p,g)=>{h.push(s.gu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=kf.Es(g.targetId,_);l.push(S)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const w=we(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>H.forEach(_,(C=>H.forEach(C.Is,(j=>w.persistence.referenceDelegate.addReference(S,C.targetId,j))).next((()=>H.forEach(C.ds,(j=>w.persistence.referenceDelegate.removeReference(S,C.targetId,j)))))))))}catch(S){if(!bo(S))throw S;re(Pf,"Failed to update sequence numbers: "+S)}for(const S of _){const C=S.targetId;if(!S.fromCache){const j=w.Fs.get(C),K=j.snapshotVersion,Y=j.withLastLimboFreeSnapshotVersion(K);w.Fs=w.Fs.insert(C,Y)}}})(s.localStore,l))}async function qC(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){re(Mf,"User change. New user:",e.toKey());const s=await u0(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((p=>{p.forEach((g=>{g.reject(new ie(q.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sl(t,s.Bs)}}function HC(r,e){const t=we(r),s=t.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let o=ke();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const p=t.Pu.get(h);o=o.unionWith(p.view.tu)}return o}}function R0(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=T0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zC.bind(null,e),e.hu.J_=CC.bind(null,e.eventManager),e.hu.pu=kC.bind(null,e.eventManager),e}function WC(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BC.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return GR(this.persistence,new qR,e.initialUser,this.serializer)}Du(e){return new l0(Cf.Vi,this.serializer)}bu(e){return new eC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class GC extends sc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof rc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new PR(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new l0((s=>rc.Vi(s,t)),this.serializer)}}class Kd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qC.bind(null,this.syncEngine),await TC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SC})()}createDatastore(e){const t=Sc(e.databaseInfo.databaseId),s=(function(l){return new sC(l)})(e.databaseInfo);return(function(l,h,p,g){return new uC(l,h,p,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,p){return new hC(s,o,l,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Dy(this.syncEngine,t,0)),(function(){return Ry.C()?new Ry:new tC})())}createSyncEngine(e,t){return(function(o,l,h,p,g,_,w){const S=new VC(o,l,h,p,g,_);return w&&(S.fu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=we(o);re(ps,"RemoteStore shutting down."),l.Ia.add(5),await il(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Kd.provider={build:()=>new Kd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="FirestoreClient";class QC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=pf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{re(ki,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(re(ki,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Of(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Td(r,e){r.asyncQueue.verifyOperationInProgress(),re(ki,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await u0(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{Ti("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{re("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{Ti("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function by(r,e){r.asyncQueue.verifyOperationInProgress();const t=await XC(r);re(ki,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>ky(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>ky(e.remoteStore,o))),r._onlineComponents=e}async function XC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(ki,"Using user provided OfflineComponentProvider");try{await Td(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===q.FAILED_PRECONDITION||o.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ti("Error using user provided cache. Falling back to memory cache: "+t),await Td(r,new sc)}}else re(ki,"Using default OfflineComponentProvider"),await Td(r,new GC(void 0));return r._offlineComponents}async function C0(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(ki,"Using user provided OnlineComponentProvider"),await by(r,r._uninitializedComponentsProvider._online)):(re(ki,"Using default OnlineComponentProvider"),await by(r,new Kd))),r._onlineComponents}function YC(r){return C0(r).then((e=>e.syncEngine))}async function Oy(r){const e=await C0(r),t=e.eventManager;return t.onListen=bC.bind(null,e.syncEngine),t.onUnlisten=MC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FC.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="firestore.googleapis.com",My=!0;class Fy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=P0,this.ssl=My}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:My;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CR)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new nA;switch(s.type){case"firstParty":return new oA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ly.get(t);s&&(re("ComponentProvider","Removing Datastore"),Ly.delete(t),s.terminate())})(this),Promise.resolve()}}function JC(r,e,t,s={}){var o;r=vi(r,Cc);const l=Po(e),h=r._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(t_(`https://${g}`),n_("Firestore",!0)),h.host!==P0&&h.host!==g&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!Dr(_,p)&&(r._setSettings(_),s.mockUserToken)){let w,S;if(typeof s.mockUserToken=="string")w=s.mockUserToken,S=Ut.MOCK_USER;else{w=aE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Ut(C)}r._authCredentials=new rA(new _v(w,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class ct{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(el(t,ct._jsonSchema))return new ct(e,s||null,new he(He.fromString(t.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:ut("string",ct._jsonSchemaVersion),referencePath:ut("string")};class wi extends Lo{constructor(e,t,s){super(e,t,wf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new he(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function Uy(r,e,...t){if(r=yt(r),wv("collection","path",e),r instanceof Cc){const s=He.fromString(e,...t);return Xg(s),new wi(r,null,s)}{if(!(r instanceof ct||r instanceof wi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(He.fromString(e,...t));return Xg(s),new wi(r.firestore,null,s)}}function Mu(r,e,...t){if(r=yt(r),arguments.length===1&&(e=pf.newId()),wv("doc","path",e),r instanceof Cc){const s=He.fromString(e,...t);return Qg(s),new ct(r,null,new he(s))}{if(!(r instanceof ct||r instanceof wi))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(He.fromString(e,...t));return Qg(s),new ct(r.firestore,r instanceof wi?r.converter:null,new he(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="AsyncQueue";class jy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new h0(this,"async_queue_retry"),this.oc=()=>{const s=Ed();s&&re(zy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Ed();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ed();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ls;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!bo(e))throw e;re(zy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Lr("INTERNAL UNHANDLED ERROR: ",By(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=bf.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ge(47125,{hc:By(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function By(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class ko extends Cc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new jy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jy(e),this._firestoreClient=void 0,await e}}}function ZC(r,e){const t=typeof r=="object"?r:Jd(),s=typeof r=="string"?r:Xu,o=gs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=sE("firestore");l&&JC(o,...l)}return o}function N0(r){if(r._terminated)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ek(r),r._firestoreClient}function ek(r){var e,t,s;const o=r._freezeSettings(),l=(function(p,g,_,w){return new TA(p,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,k0(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new QC(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(Vt.fromBase64String(e))}catch(t){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new In(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:In._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,In._jsonSchema))return In.fromBase64String(e.bytes)}}In._jsonSchemaVersion="firestore/bytes/1.0",In._jsonSchema={type:ut("string",In._jsonSchemaVersion),bytes:ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lr._jsonSchemaVersion}}static fromJSON(e){if(el(e,lr._jsonSchema))return new lr(e.latitude,e.longitude)}}lr._jsonSchemaVersion="firestore/geoPoint/1.0",lr._jsonSchema={type:ut("string",lr._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ur(e.vectorValues);throw new ie(q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ur._jsonSchemaVersion="firestore/vectorValue/1.0",ur._jsonSchema={type:ut("string",ur._jsonSchemaVersion),vectorValues:ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=/^__.*__$/;class nk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,t,this.fieldTransforms):new nl(e,this.data,t,this.fieldTransforms)}}class x0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ni(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function D0(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ec:r})}}class Nc{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return oc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(D0(this.Ec)&&tk.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Sc(e)}Dc(e,t,s,o=!1){return new Nc({Ec:e,methodName:t,bc:s,path:Dt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uf(r){const e=r._freezeSettings(),t=Sc(r._databaseId);return new rk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ik(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);jf("Data must be an object, but it was:",h,s);const p=V0(s,h);let g,_;if(l.merge)g=new hn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const S of l.mergeFields){const C=Qd(e,S,t);if(!h.contains(C))throw new ie(q.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);O0(w,C)||w.push(C)}g=new hn(w),_=h.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,_=h.fieldTransforms;return new nk(new tn(p),g,_)}class xc extends Pc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function sk(r,e,t){return new Nc({Ec:3,bc:e.settings.bc,methodName:r._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zf extends Pc{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=sk(this,e,!0),s=this.vc.map((l=>Mo(l,t))),o=new Ao(s);return new KA(e.path,o)}isEqual(e){return e instanceof zf&&Dr(this.vc,e.vc)}}function ok(r,e,t,s){const o=r.Dc(1,e,t);jf("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();Pi(s,((g,_)=>{const w=Bf(e,g,t);_=yt(_);const S=o.gc(w);if(_ instanceof xc)l.push(w);else{const C=Mo(_,S);C!=null&&(l.push(w),h.set(w,C))}}));const p=new hn(l);return new x0(h,p,o.fieldTransforms)}function ak(r,e,t,s,o,l){const h=r.Dc(1,e,t),p=[Qd(e,s,t)],g=[o];if(l.length%2!=0)throw new ie(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<l.length;C+=2)p.push(Qd(e,l[C])),g.push(l[C+1]);const _=[],w=tn.empty();for(let C=p.length-1;C>=0;--C)if(!O0(_,p[C])){const j=p[C];let K=g[C];K=yt(K);const Y=h.gc(j);if(K instanceof xc)_.push(j);else{const W=Mo(K,Y);W!=null&&(_.push(j),w.set(j,W))}}const S=new hn(_);return new x0(w,S,h.fieldTransforms)}function lk(r,e,t,s=!1){return Mo(t,r.Dc(s?4:3,e))}function Mo(r,e){if(b0(r=yt(r)))return jf("Unsupported field value:",e,r),V0(r,e);if(r instanceof Pc)return(function(s,o){if(!D0(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const p of s){let g=Mo(p,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return HA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ke.fromDate(s);return{timestampValue:nc(o.serializer,l)}}if(s instanceof Ke){const l=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,l)}}if(s instanceof lr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof In)return{bytesValue:e0(o.serializer,s._byteString)};if(s instanceof ct){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Af(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ur)return(function(h,p){return{mapValue:{fields:{[Pv]:{stringValue:Nv},[Yu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw p.wc("VectorValues must only contain numeric values.");return Ef(p.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${mc(s)}`)})(r,e)}function V0(r,e){const t={};return Iv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(r,((s,o)=>{const l=Mo(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function b0(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ke||r instanceof lr||r instanceof In||r instanceof ct||r instanceof Pc||r instanceof ur)}function jf(r,e,t){if(!b0(t)||!Ev(t)){const s=mc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function Qd(r,e,t){if((e=yt(e))instanceof kc)return e._internalPath;if(typeof e=="string")return Bf(r,e);throw oc("Field path arguments must be of type string or ",r,!1,void 0,t)}const uk=new RegExp("[~\\*/\\[\\]]");function Bf(r,e,t){if(e.search(uk)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kc(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function oc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(q.INVALID_ARGUMENT,p+r+g)}function O0(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($f("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ck extends L0{data(){return super.data()}}function $f(r,e){return typeof e=="string"?Bf(r,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qf{}class dk extends qf{}function fk(r,e,...t){let s=[];e instanceof qf&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof Hf)).length,p=l.filter((g=>g instanceof Dc)).length;if(h>1||h>0&&p>0)throw new ie(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Dc extends dk{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Dc(e,t,s)}_apply(e){const t=this._parse(e);return M0(e._query,t),new Lo(e.firestore,e.converter,Fd(e._query,t))}_parse(e){const t=Uf(e.firestore);return(function(l,h,p,g,_,w,S){let C;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Hy(S,w);const K=[];for(const Y of S)K.push(qy(g,l,Y));C={arrayValue:{values:K}}}else C=qy(g,l,S)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Hy(S,w),C=lk(p,h,S,w==="in"||w==="not-in");return lt.create(_,w,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pk(r,e,t){const s=e,o=$f("where",r);return Dc._create(o,s,t)}class Hf extends qf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Hf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const p=l.getFlattenedFilters();for(const g of p)M0(h,g),h=Fd(h,g)})(e._query,t),new Lo(e.firestore,e.converter,Fd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function qy(r,e,t){if(typeof(t=yt(t))=="string"){if(t==="")throw new ie(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fv(e)&&t.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!he.isDocumentKey(s))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return iy(r,new he(s))}if(t instanceof ct)return iy(r,t._key);throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(t)}.`)}function Hy(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function M0(r,e){const t=(function(o,l){for(const h of o)for(const p of h.getFlattenedFilters())if(l.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class mk{convertValue(e,t="none"){switch(Ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Pi(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Yu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new ur(l)}convertGeoPoint(e){return new lr(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=_c(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wa(e));default:return null}}convertTimestamp(e){const t=Si(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);Fe(o0(s),9688,{name:e});const o=new Ga(s.get(1),s.get(3)),l=new he(s.popFirst(5));return o.isEqual(t)||Lr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(r,e,t){let s;return s=r?r.toFirestore(e):e,s}class Oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends L0{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field($f("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=us._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:ut("string",us._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class Fu extends us{data(e={}){return super.data(e)}}class Eo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Oa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Fu(this._firestore,this._userDataWriter,s.key,s,new Oa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new Fu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Oa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const g=new Fu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Oa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),w=h.indexOf(p.doc.key)),{type:yk(p.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Eo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:r})}}Eo._jsonSchemaVersion="firestore/querySnapshot/1.0",Eo._jsonSchema={type:ut("string",Eo._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class F0 extends mk{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function Wy(r,e,t,...s){r=vi(r,ct);const o=vi(r.firestore,ko),l=Uf(o);let h;return h=typeof(e=yt(e))=="string"||e instanceof kc?ak(l,"updateDoc",r._key,e,t,s):ok(l,"updateDoc",r._key,e),Wf(o,[h.toMutation(r._key,Bn.exists(!0))])}function _k(r){return Wf(vi(r.firestore,ko),[new Tf(r._key,Bn.none())])}function vk(r,e){const t=vi(r.firestore,ko),s=Mu(r),o=gk(r.converter,e);return Wf(t,[ik(Uf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Bn.exists(!1))]).then((()=>s))}function wk(r,...e){var t,s,o;r=yt(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||$y(e[h])||(l=e[h++]);const p={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if($y(e[h])){const S=e[h];e[h]=(t=S.next)===null||t===void 0?void 0:t.bind(S),e[h+1]=(s=S.error)===null||s===void 0?void 0:s.bind(S),e[h+2]=(o=S.complete)===null||o===void 0?void 0:o.bind(S)}let g,_,w;if(r instanceof ct)_=vi(r.firestore,ko),w=wf(r._key.path),g={next:S=>{e[h]&&e[h](Ek(_,r,S))},error:e[h+1],complete:e[h+2]};else{const S=vi(r,Lo);_=vi(S.firestore,ko),w=S._query;const C=new F0(_);g={next:j=>{e[h]&&e[h](new Eo(_,C,S,j))},error:e[h+1],complete:e[h+2]},hk(r._query)}return(function(C,j,K,Y){const W=new KC(Y),me=new PC(j,W,K);return C.asyncQueue.enqueueAndForget((async()=>AC(await Oy(C),me))),()=>{W.Ou(),C.asyncQueue.enqueueAndForget((async()=>RC(await Oy(C),me)))}})(N0(_),w,p,g)}function Wf(r,e){return(function(s,o){const l=new ls;return s.asyncQueue.enqueueAndForget((async()=>UC(await YC(s),o,l))),l.promise})(N0(r),e)}function Ek(r,e,t){const s=t.docs.get(e._key),o=new F0(r);return new us(r,o,e._key,s,new Oa(t.hasPendingWrites,t.fromCache),e.converter)}function Tk(...r){return new zf("arrayUnion",r)}(function(e,t=!0){(function(o){Do=o})(No),cr(new $n("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new ko(new iA(s.getProvider("auth-internal")),new aA(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,w)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),Sn(qg,Hg,e),Sn(qg,Hg,"esm2017")})();const U0={apiKey:"AIzaSyD5xSfvGA86x4Ekc2LsSuUz7f1hpQh7jwg",authDomain:"futsal-pro-9de3a.firebaseapp.com",projectId:"futsal-pro-9de3a",storageBucket:"futsal-pro-9de3a.firebasestorage.app",messagingSenderId:"424044829956",appId:"1:424044829956:web:b3f348f2d8afd2859f8451",measurementId:"G-Z97DHMX05S"},Ik=Yd(U0);JI(Ik);const Sk=[{id:"unicas",nombre:"Únicas",edades:"Plantel Superior",color:"bg-rose-600"},{id:"reserva",nombre:"Reserva",edades:"Sub-23",color:"bg-orange-500"},{id:"4ta",nombre:"4ta.",edades:"2008 / 2009",color:"bg-amber-500"},{id:"5ta",nombre:"5ta.",edades:"2010 / 2011",color:"bg-emerald-500"},{id:"6ta",nombre:"6ta.",edades:"2012 / 2013",color:"bg-cyan-500"},{id:"7ma",nombre:"7ma.",edades:"2014 / 2015",color:"bg-blue-600"},{id:"8va",nombre:"8va.",edades:"2016 / 2017",color:"bg-indigo-600"},{id:"9na",nombre:"9na.",edades:"2018 / 2021",color:"bg-purple-600"}],Ak=[{id:"presente",etiqueta:"Presente",color:"bg-green-600"},{id:"enfermedad",etiqueta:"Enfermedad",color:"bg-blue-500"},{id:"lesion",etiqueta:"Lesión",color:"bg-red-500"},{id:"tarde",etiqueta:"Tarde",color:"bg-yellow-500"},{id:"con_aviso",etiqueta:"Con Aviso",color:"bg-slate-400"},{id:"sin_aviso",etiqueta:"Sin Aviso",color:"bg-slate-900"}],Rk=[{id:"fisico",etiqueta:"Físico",icono:"🏃‍♀️",color:"bg-sky-500"},{id:"tecnico",etiqueta:"Técnico",icono:"⚽",color:"bg-emerald-500"},{id:"tactico",etiqueta:"Táctico",icono:"🧠",color:"bg-purple-500"},{id:"combinado",etiqueta:"Combinado",icono:"⚙️",color:"bg-amber-500"}],Ck=[{id:"cuota",etiqueta:"Cuota Social",icono:"💳"},{id:"inscripcion",etiqueta:"Inscripción",icono:"📝"},{id:"sancion",etiqueta:"Sanción",icono:"⚠️"},{id:"conjunto",etiqueta:"Conjunto",icono:"👕"},{id:"otros",etiqueta:"Otros",icono:"➕"}];function kk(){const[r,e]=Nt.useState(null),[t,s]=Nt.useState(null),[o,l]=Nt.useState([]),[h,p]=Nt.useState("inicio"),[g,_]=Nt.useState(null),[w,S]=Nt.useState(null),[C,j]=Nt.useState(null),[K,Y]=Nt.useState(!1),[W,me]=Nt.useState(!1),[ce,de]=Nt.useState("asistencia"),[Ee,ze]=Nt.useState(null),[Te,D]=Nt.useState(null),[I,R]=Nt.useState(!1),P=Nt.useRef(null);Nt.useEffect(()=>{const X=document.createElement("script");X.src="https://unpkg.com/html5-qrcode",X.onload=()=>R(!0),document.body.appendChild(X);const B=Yd(U0),N=eA(B),$=ZC(B);return s($),MS(N).catch(ue=>console.error("Error Auth:",ue)),$S(N,e)},[]),Nt.useEffect(()=>{if(!r||!t||!g)return;const X=fk(Uy(t,"players"),pk("category","==",g.id));return wk(X,B=>{l(B.docs.map(N=>({id:N.id,...N.data()})))},B=>console.error("Firestore Error:",B))},[r,t,g]);const V=X=>{ze(X),setTimeout(()=>ze(null),3e3)},b=X=>{const B=X.target.files[0];if(B){const N=new FileReader;N.onloadend=()=>D(N.result),N.readAsDataURL(B)}},A=async()=>{if(!I||!window.Html5Qrcode){V("Cargando escáner, espera un momento...");return}me(!0),setTimeout(()=>{const X=new window.Html5Qrcode("reader");P.current=X,X.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:150}},B=>{_t(B),Qe()},()=>{}).catch(B=>{console.error(B),me(!1),V("Error al abrir cámara")})},500)},Qe=()=>{P.current?P.current.stop().then(()=>{P.current=null,me(!1)}).catch(X=>console.error(X)):me(!1)},_t=X=>{try{const B=X.split("|");B.length>=5&&(S(N=>({...N,name:`${B[2].trim()} ${B[1].trim()}`,dni:B[4].trim(),birthDate:B[6].trim()})),V("DNI Escaneado correctamente"))}catch{V("Error al procesar formato DNI")}},vt=async X=>{X.preventDefault();const B=new FormData(X.target),N={name:B.get("nombre"),dni:B.get("dni"),category:g.id,birthDate:B.get("fecha"),telefono:B.get("telefono"),direccion:B.get("direccion"),escuela:B.get("escuela"),nombrePadre:B.get("nombrePadre"),nombreMadre:B.get("nombreMadre"),fotoDni:Te||(w==null?void 0:w.fotoDni)||"",activities:(w==null?void 0:w.activities)||{attendance:[],matches:[],drills:[],payments:[]},data:{dni:B.get("dni"),health:B.get("health")||""},stats:(w==null?void 0:w.stats)||{behavior:5,theory:5}};try{w!=null&&w.id?(await Wy(Mu(t,"players",w.id),N),V("Actualizada")):(await vk(Uy(t,"players"),N),V("Agregada")),Y(!1),S(null),D(null)}catch{V("Error al guardar")}},Ve=async(X,B,N)=>{if(!(!t||!r))try{await Wy(Mu(t,"players",X),{[`activities.${B}`]:Tk({...N,fechaMs:Date.now(),fechaTexto:new Date().toLocaleDateString()})}),V("Registro guardado")}catch($){console.error($)}},te=async X=>{if(window.confirm("¿Deseas eliminar a esta jugadora?"))try{await _k(Mu(t,"players",X)),p("categoria"),j(null),V("Eliminada")}catch(B){console.error(B)}};return r?z.createElement("div",{className:"min-h-screen bg-slate-100 text-slate-900 font-sans"},Ee&&z.createElement("div",{className:"fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl"},Ee),W&&z.createElement("div",{className:"fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"},z.createElement("div",{id:"reader",className:"w-full max-w-sm bg-white rounded-3xl overflow-hidden aspect-video border-4 border-indigo-600 shadow-2xl"}),z.createElement("button",{onClick:Qe,className:"mt-8 bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest"},"Cancelar")),K&&z.createElement("div",{className:"fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"},z.createElement("div",{className:"bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl my-8"},z.createElement("div",{className:"bg-slate-900 p-6 text-white flex justify-between items-center"},z.createElement("h3",{className:"font-black uppercase tracking-widest text-xs italic"},"Ficha Administrativa"),z.createElement("button",{onClick:()=>{Y(!1),S(null),D(null)},className:"text-2xl font-bold"},"×")),z.createElement("form",{onSubmit:vt,className:"p-6 space-y-4 max-h-[75vh] overflow-y-auto"},z.createElement("button",{type:"button",onClick:A,className:"w-full bg-indigo-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2"},"📷 ESCANEAR DNI"),z.createElement("div",{className:"space-y-1"},z.createElement("label",{className:"text-[10px] font-black text-slate-400 uppercase"},"Foto DNI"),z.createElement("input",{type:"file",accept:"image/*",capture:"environment",onChange:b,className:"hidden",id:"foto-dni-input"}),z.createElement("label",{htmlFor:"foto-dni-input",className:"w-full bg-slate-100 p-4 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer"},Te||w!=null&&w.fotoDni?z.createElement("img",{src:Te||(w==null?void 0:w.fotoDni),alt:"DNI",className:"h-24 rounded-lg"}):z.createElement("span",{className:"text-[10px] font-black text-slate-500"},"TAP PARA FOTO DNI"))),z.createElement("div",{className:"space-y-1"},z.createElement("label",{className:"text-[10px] font-black text-slate-400 uppercase"},"Nombre Completo"),z.createElement("input",{name:"nombre",defaultValue:w==null?void 0:w.name,required:!0,className:"w-full bg-slate-100 p-4 rounded-2xl font-bold"})),z.createElement("div",{className:"grid grid-cols-2 gap-3"},z.createElement("input",{name:"dni",placeholder:"DNI",defaultValue:w==null?void 0:w.dni,required:!0,className:"bg-slate-100 p-4 rounded-2xl font-bold"}),z.createElement("input",{name:"fecha",placeholder:"Nacimiento",defaultValue:w==null?void 0:w.birthDate,className:"bg-slate-100 p-4 rounded-2xl font-bold"})),z.createElement("input",{name:"telefono",placeholder:"Teléfono",defaultValue:w==null?void 0:w.telefono,className:"w-full bg-slate-100 p-4 rounded-2xl font-bold"}),z.createElement("input",{name:"direccion",placeholder:"Dirección",defaultValue:w==null?void 0:w.direccion,className:"w-full bg-slate-100 p-4 rounded-2xl font-bold"}),z.createElement("input",{name:"escuela",placeholder:"Escuela",defaultValue:w==null?void 0:w.escuela,className:"w-full bg-slate-100 p-4 rounded-2xl font-bold"}),z.createElement("div",{className:"grid grid-cols-2 gap-3"},z.createElement("input",{name:"nombrePadre",placeholder:"Padre",defaultValue:w==null?void 0:w.nombrePadre,className:"bg-slate-100 p-4 rounded-2xl font-bold text-sm"}),z.createElement("input",{name:"nombreMadre",placeholder:"Madre",defaultValue:w==null?void 0:w.nombreMadre,className:"bg-slate-100 p-4 rounded-2xl font-bold text-sm"})),z.createElement("button",{type:"submit",className:"w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase text-xs"},w?"ACTUALIZAR FICHA":"CREAR JUGADORA")))),h==="inicio"&&z.createElement("div",{className:"p-6 max-w-lg mx-auto"},z.createElement("header",{className:"py-12 text-center"},z.createElement("h1",{className:"text-5xl font-black text-slate-950 italic tracking-tighter mb-2"},"FUTSAL FEM"),z.createElement("p",{className:"text-slate-400 font-bold uppercase text-[9px]"},"Selecciona Categoría")),z.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4"},Sk.map(X=>z.createElement("button",{key:X.id,onClick:()=>{_(X),p("categoria")},className:`${X.color} h-36 rounded-[40px] shadow-lg text-white flex flex-col items-center justify-center active:scale-95 border-b-8 border-black/20`},z.createElement("span",{className:"text-2xl font-black"},X.nombre),z.createElement("span",{className:"text-[10px] font-bold opacity-70"},X.edades))))),h==="categoria"&&z.createElement("div",{className:"flex flex-col h-screen"},z.createElement("header",{className:`${g.color} p-6 text-white shadow-xl flex justify-between items-center rounded-b-[48px] z-10 sticky top-0`},z.createElement("button",{onClick:()=>p("inicio"),className:"bg-white/20 p-3 rounded-2xl"},z.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M15 19l-7-7 7-7"}))),z.createElement("h2",{className:"text-xl font-black uppercase"},g.nombre),z.createElement("button",{onClick:()=>{S(null),Y(!0)},className:"bg-white text-slate-900 px-5 py-2.5 rounded-2xl font-black text-[10px]"},"AGREGA")),z.createElement("div",{className:"flex-grow p-6 overflow-y-auto space-y-4 pb-36"},o.map(X=>z.createElement("div",{key:X.id,className:"bg-white p-5 rounded-[32px] shadow-md border border-slate-200 flex justify-between items-center transition-all hover:border-indigo-300"},z.createElement("div",{className:"flex-grow flex items-center gap-4",onClick:()=>{j(X),p("detalle_jugadora")}},z.createElement("div",{className:"w-12 h-12 bg-slate-100 rounded-full overflow-hidden flex items-center justify-center border border-slate-200"},X.fotoDni?z.createElement("img",{src:X.fotoDni,className:"w-full h-full object-cover",alt:"jugadora"}):z.createElement("span",null,"👤")),z.createElement("div",null,z.createElement("p",{className:"text-lg font-black text-slate-800 uppercase tracking-tighter leading-none mb-1"},X.name),z.createElement("p",{className:"text-[10px] font-black text-indigo-500 uppercase tracking-widest"},"ID: ",X.dni))),z.createElement("div",{className:"flex gap-2 ml-4"},z.createElement("button",{onClick:()=>{S(X),Y(!0)},className:"p-3 bg-slate-100 rounded-xl text-slate-400 active:bg-indigo-100 active:text-indigo-600 transition-all"},z.createElement("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}))),z.createElement("button",{onClick:()=>te(X.id),className:"p-3 bg-red-50 rounded-xl text-red-400 active:bg-red-100 transition-all"},z.createElement("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}))))))),z.createElement("footer",{className:"bg-slate-950 p-4 grid grid-cols-4 gap-2 fixed bottom-0 left-0 right-0 border-t border-white/10 rounded-t-[48px] shadow-2xl z-40"},z.createElement("button",{onClick:()=>{de("asistencia"),p("registro_rapido")},className:"flex flex-col items-center py-2 text-white active:scale-90 transition-transform"},z.createElement("span",{className:"text-2xl mb-1"},"📅")," ",z.createElement("span",{className:"text-[8px] font-black uppercase opacity-70"},"Asistencia")),z.createElement("button",{onClick:()=>{de("partidos"),p("registro_rapido")},className:"flex flex-col items-center py-2 text-white active:scale-90 transition-transform"},z.createElement("span",{className:"text-2xl mb-1"},"🏆")," ",z.createElement("span",{className:"text-[8px] font-black uppercase opacity-70"},"Partidos")),z.createElement("button",{onClick:()=>{de("ejercicios"),p("registro_rapido")},className:"flex flex-col items-center py-2 text-white active:scale-90 transition-transform"},z.createElement("span",{className:"text-2xl mb-1"},"🏋️")," ",z.createElement("span",{className:"text-[8px] font-black uppercase opacity-70"},"Ejercicios")),z.createElement("button",{onClick:()=>{de("pagos"),p("registro_rapido")},className:"flex flex-col items-center py-2 text-green-400 active:scale-90 transition-transform"},z.createElement("span",{className:"text-2xl mb-1"},"💵")," ",z.createElement("span",{className:"text-[8px] font-black uppercase"},"$ Pagos")))),h==="registro_rapido"&&z.createElement("div",{className:"min-h-screen bg-slate-50 flex flex-col"},z.createElement("header",{className:"bg-slate-900 p-6 text-white flex justify-between items-center sticky top-0 z-50 rounded-b-[40px] shadow-xl"},z.createElement("button",{onClick:()=>p("categoria"),className:"bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"},"CERRAR"),z.createElement("h2",{className:"text-[10px] font-black uppercase tracking-[0.2em] italic"},"Control: ",ce),z.createElement("div",{className:"w-10"})),z.createElement("div",{className:"p-4 space-y-4 pb-20 flex-grow overflow-y-auto"},o.map(X=>z.createElement("div",{key:X.id,className:"bg-white p-5 rounded-[32px] shadow-md border border-slate-200"},z.createElement("p",{className:"text-xl font-black text-slate-900 mb-4 border-b pb-2 uppercase italic tracking-tighter"},X.name),ce==="asistencia"&&z.createElement("div",{className:"grid grid-cols-2 gap-2"},Ak.map(B=>z.createElement("button",{key:B.id,onClick:()=>Ve(X.id,"attendance",{status:B.id,etiqueta:B.etiqueta}),className:`${B.color} text-white py-4 rounded-2xl text-[10px] font-black uppercase shadow-lg border-b-4 border-black/20 active:scale-95`},B.etiqueta))),ce==="pagos"&&z.createElement("div",{className:"grid grid-cols-2 gap-2"},Ck.map(B=>z.createElement("button",{key:B.id,onClick:()=>{const N=prompt(`Monto ${B.etiqueta}:`);N&&Ve(X.id,"payments",{tipo:B.id,etiqueta:B.etiqueta,monto:parseFloat(N)})},className:"bg-indigo-50 text-indigo-900 p-4 rounded-2xl flex flex-col items-center border-2 border-indigo-100 active:bg-indigo-200"},z.createElement("span",{className:"text-3xl mb-1"},B.icono),z.createElement("span",{className:"text-[10px] font-black uppercase"},B.etiqueta)))),ce==="ejercicios"&&z.createElement("div",{className:"grid grid-cols-2 gap-2"},Rk.map(B=>z.createElement("button",{key:B.id,onClick:()=>{const N=prompt(`Resultado ${B.etiqueta}:`);N&&Ve(X.id,"drills",{tipo:B.id,etiqueta:B.etiqueta,nota:N})},className:`${B.color} text-white p-5 rounded-2xl flex flex-col items-center shadow-lg active:scale-95`},z.createElement("span",{className:"text-3xl mb-1"},B.icono),z.createElement("span",{className:"text-[10px] font-black uppercase"},B.etiqueta)))),ce==="partidos"&&z.createElement("button",{onClick:()=>{const B=prompt("Goles:"),N=prompt("Minutos:");(B||N)&&Ve(X.id,"matches",{goles:B,min:N})},className:"w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase italic tracking-widest shadow-xl"},"REGISTRAR ESTADÍSTICAS JUEGO"))))),h==="detalle_jugadora"&&C&&z.createElement("div",{className:"min-h-screen bg-slate-50 flex flex-col"},z.createElement("header",{className:"bg-indigo-950 p-6 text-white flex justify-between items-center sticky top-0 z-50 shadow-2xl rounded-b-[40px]"},z.createElement("button",{onClick:()=>p("categoria"),className:"bg-white/10 p-2 rounded-xl"},z.createElement("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M15 19l-7-7 7-7"}))),z.createElement("h2",{className:"text-[10px] font-black uppercase tracking-[0.3em] italic text-center"},"Ficha Integral"),z.createElement("div",{className:"w-10"})),z.createElement("div",{className:"p-4 space-y-6 pb-20 overflow-y-auto flex-grow"},z.createElement("div",{className:"bg-white p-8 rounded-[48px] shadow-xl border border-slate-100 flex flex-col items-center text-center"},z.createElement("div",{className:"w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center text-6xl border-4 border-white shadow-xl overflow-hidden mb-4"},C.fotoDni?z.createElement("img",{src:C.fotoDni,className:"w-full h-full object-cover",alt:"foto dni"}):"👤"),z.createElement("h3",{className:"text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-1"},C.name),z.createElement("p",{className:"text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6"},"DNI: ",C.dni||"PENDIENTE"),z.createElement("div",{className:"flex gap-4 w-full"},z.createElement("button",{onClick:()=>{S(C),Y(!0)},className:"flex-1 bg-slate-100 text-slate-700 py-3 rounded-2xl font-black uppercase text-[10px] shadow-sm"},"Editar"),z.createElement("button",{onClick:()=>te(C.id),className:"flex-1 bg-red-50 text-red-600 py-3 rounded-2xl font-black uppercase text-[10px] shadow-sm"},"Eliminar"))),z.createElement("section",{className:"space-y-3"},z.createElement("h4",{className:"text-[10px] font-black text-slate-500 uppercase ml-4 tracking-[0.2em]"},"Información de Contacto"),z.createElement("div",{className:"bg-white p-6 rounded-[32px] border border-slate-200 space-y-4 shadow-sm"},z.createElement("div",{className:"flex justify-between items-center"},z.createElement("span",{className:"text-[9px] font-black text-slate-400 uppercase"},"Teléfono"),z.createElement("span",{className:"text-sm font-bold text-slate-700 tracking-tight"},C.telefono||"N/A")),z.createElement("div",{className:"flex flex-col border-t pt-3"},z.createElement("span",{className:"text-[9px] font-black text-slate-400 uppercase mb-1"},"Dirección"),z.createElement("span",{className:"text-sm font-bold text-slate-700 leading-tight"},C.direccion||"N/A")),z.createElement("div",{className:"flex justify-between items-center border-t pt-3"},z.createElement("span",{className:"text-[9px] font-black text-slate-400 uppercase"},"Escuela"),z.createElement("span",{className:"text-sm font-bold text-slate-700"},C.escuela||"N/A")))),z.createElement("section",{className:"space-y-3"},z.createElement("h4",{className:"text-[10px] font-black text-slate-500 uppercase ml-4 tracking-[0.2em]"},"Adultos Responsables"),z.createElement("div",{className:"bg-white p-6 rounded-[32px] border border-slate-200 grid grid-cols-2 gap-4 shadow-sm"},z.createElement("div",{className:"flex flex-col"},z.createElement("span",{className:"text-[9px] font-black text-indigo-400 uppercase mb-1"},"Padre"),z.createElement("span",{className:"text-xs font-black text-slate-700 uppercase"},C.nombrePadre||"N/A")),z.createElement("div",{className:"flex flex-col border-l pl-4"},z.createElement("span",{className:"text-[9px] font-black text-rose-400 uppercase mb-1"},"Madre"),z.createElement("span",{className:"text-xs font-black text-slate-700 uppercase"},C.nombreMadre||"N/A"))))))):z.createElement("div",{className:"flex h-screen items-center justify-center font-black text-indigo-600"},"CONECTANDO A BASE DE DATOS...")}Xw.createRoot(document.getElementById("root")).render(z.createElement(z.StrictMode,null,z.createElement(kk,null)));
