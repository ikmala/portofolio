(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function nE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var bx={exports:{}},ld={},Cx={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu=Symbol.for("react.element"),iE=Symbol.for("react.portal"),rE=Symbol.for("react.fragment"),sE=Symbol.for("react.strict_mode"),oE=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),uE=Symbol.for("react.forward_ref"),cE=Symbol.for("react.suspense"),fE=Symbol.for("react.memo"),dE=Symbol.for("react.lazy"),d0=Symbol.iterator;function hE(n){return n===null||typeof n!="object"?null:(n=d0&&n[d0]||n["@@iterator"],typeof n=="function"?n:null)}var Rx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Px=Object.assign,Lx={};function sl(n,e,t){this.props=n,this.context=e,this.refs=Lx,this.updater=t||Rx}sl.prototype.isReactComponent={};sl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};sl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Dx(){}Dx.prototype=sl.prototype;function Pm(n,e,t){this.props=n,this.context=e,this.refs=Lx,this.updater=t||Rx}var Lm=Pm.prototype=new Dx;Lm.constructor=Pm;Px(Lm,sl.prototype);Lm.isPureReactComponent=!0;var h0=Array.isArray,Nx=Object.prototype.hasOwnProperty,Dm={current:null},Ix={key:!0,ref:!0,__self:!0,__source:!0};function Ux(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Nx.call(e,i)&&!Ix.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zu,type:n,key:s,ref:o,props:r,_owner:Dm.current}}function pE(n,e){return{$$typeof:zu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Nm(n){return typeof n=="object"&&n!==null&&n.$$typeof===zu}function mE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var p0=/\/+/g;function Fd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?mE(""+n.key):e.toString(36)}function qc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case zu:case iE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Fd(o,0):i,h0(r)?(t="",n!=null&&(t=n.replace(p0,"$&/")+"/"),qc(r,e,t,"",function(u){return u})):r!=null&&(Nm(r)&&(r=pE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(p0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",h0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Fd(s,a);o+=qc(s,e,t,l,r)}else if(l=hE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Fd(s,a++),o+=qc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qu(n,e,t){if(n==null)return n;var i=[],r=0;return qc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function gE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var qn={current:null},$c={transition:null},_E={ReactCurrentDispatcher:qn,ReactCurrentBatchConfig:$c,ReactCurrentOwner:Dm};function Ox(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:qu,forEach:function(n,e,t){qu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return qu(n,function(){e++}),e},toArray:function(n){return qu(n,function(e){return e})||[]},only:function(n){if(!Nm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=sl;ot.Fragment=rE;ot.Profiler=oE;ot.PureComponent=Pm;ot.StrictMode=sE;ot.Suspense=cE;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_E;ot.act=Ox;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Px({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Nx.call(e,l)&&!Ix.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:zu,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:lE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:aE,_context:n},n.Consumer=n};ot.createElement=Ux;ot.createFactory=function(n){var e=Ux.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:uE,render:n}};ot.isValidElement=Nm;ot.lazy=function(n){return{$$typeof:dE,_payload:{_status:-1,_result:n},_init:gE}};ot.memo=function(n,e){return{$$typeof:fE,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=$c.transition;$c.transition={};try{n()}finally{$c.transition=e}};ot.unstable_act=Ox;ot.useCallback=function(n,e){return qn.current.useCallback(n,e)};ot.useContext=function(n){return qn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return qn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return qn.current.useEffect(n,e)};ot.useId=function(){return qn.current.useId()};ot.useImperativeHandle=function(n,e,t){return qn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return qn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return qn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return qn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return qn.current.useReducer(n,e,t)};ot.useRef=function(n){return qn.current.useRef(n)};ot.useState=function(n){return qn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return qn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return qn.current.useTransition()};ot.version="18.3.1";Cx.exports=ot;var st=Cx.exports;const ys=nE(st);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=st,xE=Symbol.for("react.element"),yE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,ME=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EE={key:!0,ref:!0,__self:!0,__source:!0};function kx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)SE.call(e,i)&&!EE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xE,type:n,key:s,ref:o,props:r,_owner:ME.current}}ld.Fragment=yE;ld.jsx=kx;ld.jsxs=kx;bx.exports=ld;var D=bx.exports,Fx={exports:{}},Ri={},zx={exports:{}},Bx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,z){var C=U.length;U.push(z);e:for(;0<C;){var Z=C-1>>>1,J=U[Z];if(0<r(J,z))U[Z]=z,U[C]=J,C=Z;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var z=U[0],C=U.pop();if(C!==z){U[0]=C;e:for(var Z=0,J=U.length,$=J>>>1;Z<$;){var Q=2*(Z+1)-1,se=U[Q],me=Q+1,de=U[me];if(0>r(se,C))me<J&&0>r(de,se)?(U[Z]=de,U[me]=C,Z=me):(U[Z]=se,U[Q]=C,Z=Q);else if(me<J&&0>r(de,C))U[Z]=de,U[me]=C,Z=me;else break e}}return z}function r(U,z){var C=U.sortIndex-z.sortIndex;return C!==0?C:U.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var z=t(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=U)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=t(u)}}function y(U){if(g=!1,v(U),!x)if(t(l)!==null)x=!0,B(w);else{var z=t(u);z!==null&&Y(y,z.startTime-U)}}function w(U,z){x=!1,g&&(g=!1,f(P),P=-1),p=!0;var C=h;try{for(v(z),d=t(l);d!==null&&(!(d.expirationTime>z)||U&&!O());){var Z=d.callback;if(typeof Z=="function"){d.callback=null,h=d.priorityLevel;var J=Z(d.expirationTime<=z);z=n.unstable_now(),typeof J=="function"?d.callback=J:d===t(l)&&i(l),v(z)}else i(l);d=t(l)}if(d!==null)var $=!0;else{var Q=t(u);Q!==null&&Y(y,Q.startTime-z),$=!1}return $}finally{d=null,h=C,p=!1}}var T=!1,M=null,P=-1,S=5,E=-1;function O(){return!(n.unstable_now()-E<S)}function I(){if(M!==null){var U=n.unstable_now();E=U;var z=!0;try{z=M(!0,U)}finally{z?K():(T=!1,M=null)}}else T=!1}var K;if(typeof _=="function")K=function(){_(I)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,k=L.port2;L.port1.onmessage=I,K=function(){k.postMessage(null)}}else K=function(){m(I,0)};function B(U){M=U,T||(T=!0,K())}function Y(U,z){P=m(function(){U(n.unstable_now())},z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,B(w))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var C=h;h=z;try{return U()}finally{h=C}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var C=h;h=U;try{return z()}finally{h=C}},n.unstable_scheduleCallback=function(U,z,C){var Z=n.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?Z+C:Z):C=Z,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=C+J,U={id:c++,callback:z,priorityLevel:U,startTime:C,expirationTime:J,sortIndex:-1},C>Z?(U.sortIndex=C,e(u,U),t(l)===null&&U===t(u)&&(g?(f(P),P=-1):g=!0,Y(y,C-Z))):(U.sortIndex=J,e(l,U),x||p||(x=!0,B(w))),U},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(U){var z=h;return function(){var C=h;h=z;try{return U.apply(this,arguments)}finally{h=C}}}})(Bx);zx.exports=Bx;var TE=zx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=st,Ai=TE;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hx=new Set,lu={};function Fo(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(lu[n]=e,n=0;n<e.length;n++)Hx.add(e[n])}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),np=Object.prototype.hasOwnProperty,AE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m0={},g0={};function bE(n){return np.call(g0,n)?!0:np.call(m0,n)?!1:AE.test(n)?g0[n]=!0:(m0[n]=!0,!1)}function CE(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function RE(n,e,t,i){if(e===null||typeof e>"u"||CE(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $n(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Mn[n]=new $n(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Mn[e]=new $n(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Mn[n]=new $n(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Mn[n]=new $n(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Mn[n]=new $n(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Mn[n]=new $n(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Mn[n]=new $n(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Mn[n]=new $n(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Mn[n]=new $n(n,5,!1,n.toLowerCase(),null,!1,!1)});var Im=/[\-:]([a-z])/g;function Um(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Im,Um);Mn[e]=new $n(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Im,Um);Mn[e]=new $n(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Im,Um);Mn[e]=new $n(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Mn[n]=new $n(n,1,!1,n.toLowerCase(),null,!1,!1)});Mn.xlinkHref=new $n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Mn[n]=new $n(n,1,!1,n.toLowerCase(),null,!0,!0)});function Om(n,e,t,i){var r=Mn.hasOwnProperty(e)?Mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RE(e,t,r,i)&&(t=null),i||r===null?bE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qr=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$u=Symbol.for("react.element"),ua=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),ip=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Vx=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),rp=Symbol.for("react.suspense"),sp=Symbol.for("react.suspense_list"),zm=Symbol.for("react.memo"),os=Symbol.for("react.lazy"),Wx=Symbol.for("react.offscreen"),_0=Symbol.iterator;function hl(n){return n===null||typeof n!="object"?null:(n=_0&&n[_0]||n["@@iterator"],typeof n=="function"?n:null)}var Bt=Object.assign,zd;function Rl(n){if(zd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zd=e&&e[1]||""}return`
`+zd+n}var Bd=!1;function Hd(n,e){if(!n||Bd)return"";Bd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Rl(n):""}function PE(n){switch(n.tag){case 5:return Rl(n.type);case 16:return Rl("Lazy");case 13:return Rl("Suspense");case 19:return Rl("SuspenseList");case 0:case 2:case 15:return n=Hd(n.type,!1),n;case 11:return n=Hd(n.type.render,!1),n;case 1:return n=Hd(n.type,!0),n;default:return""}}function op(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ca:return"Fragment";case ua:return"Portal";case ip:return"Profiler";case km:return"StrictMode";case rp:return"Suspense";case sp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Vx:return(n.displayName||"Context")+".Consumer";case Gx:return(n._context.displayName||"Context")+".Provider";case Fm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case zm:return e=n.displayName||null,e!==null?e:op(n.type)||"Memo";case os:e=n._payload,n=n._init;try{return op(n(e))}catch{}}return null}function LE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return op(e);case 8:return e===km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Os(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DE(n){var e=Xx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ku(n){n._valueTracker||(n._valueTracker=DE(n))}function jx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Xx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function _f(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ap(n,e){var t=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function v0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Os(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yx(n,e){e=e.checked,e!=null&&Om(n,"checked",e,!1)}function lp(n,e){Yx(n,e);var t=Os(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?up(n,e.type,t):e.hasOwnProperty("defaultValue")&&up(n,e.type,Os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function x0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function up(n,e,t){(e!=="number"||_f(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Pl=Array.isArray;function Aa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Os(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function cp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function y0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(Pl(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Os(t)}}function qx(n,e){var t=Os(e.value),i=Os(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function S0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function $x(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?$x(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Zu,Kx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Zu=Zu||document.createElement("div"),Zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function uu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Bl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NE=["Webkit","ms","Moz","O"];Object.keys(Bl).forEach(function(n){NE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Bl[e]=Bl[n]})});function Zx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Bl.hasOwnProperty(n)&&Bl[n]?(""+e).trim():e+"px"}function Qx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Zx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var IE=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dp(n,e){if(e){if(IE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function hp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pp=null;function Bm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mp=null,ba=null,Ca=null;function M0(n){if(n=Gu(n)){if(typeof mp!="function")throw Error(re(280));var e=n.stateNode;e&&(e=hd(e),mp(n.stateNode,n.type,e))}}function Jx(n){ba?Ca?Ca.push(n):Ca=[n]:ba=n}function ey(){if(ba){var n=ba,e=Ca;if(Ca=ba=null,M0(n),e)for(n=0;n<e.length;n++)M0(e[n])}}function ty(n,e){return n(e)}function ny(){}var Gd=!1;function iy(n,e,t){if(Gd)return n(e,t);Gd=!0;try{return ty(n,e,t)}finally{Gd=!1,(ba!==null||Ca!==null)&&(ny(),ey())}}function cu(n,e){var t=n.stateNode;if(t===null)return null;var i=hd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var gp=!1;if(Xr)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){gp=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{gp=!1}function UE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Hl=!1,vf=null,xf=!1,_p=null,OE={onError:function(n){Hl=!0,vf=n}};function kE(n,e,t,i,r,s,o,a,l){Hl=!1,vf=null,UE.apply(OE,arguments)}function FE(n,e,t,i,r,s,o,a,l){if(kE.apply(this,arguments),Hl){if(Hl){var u=vf;Hl=!1,vf=null}else throw Error(re(198));xf||(xf=!0,_p=u)}}function zo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ry(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function E0(n){if(zo(n)!==n)throw Error(re(188))}function zE(n){var e=n.alternate;if(!e){if(e=zo(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return E0(r),n;if(s===i)return E0(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function sy(n){return n=zE(n),n!==null?oy(n):null}function oy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=oy(n);if(e!==null)return e;n=n.sibling}return null}var ay=Ai.unstable_scheduleCallback,T0=Ai.unstable_cancelCallback,BE=Ai.unstable_shouldYield,HE=Ai.unstable_requestPaint,Xt=Ai.unstable_now,GE=Ai.unstable_getCurrentPriorityLevel,Hm=Ai.unstable_ImmediatePriority,ly=Ai.unstable_UserBlockingPriority,yf=Ai.unstable_NormalPriority,VE=Ai.unstable_LowPriority,uy=Ai.unstable_IdlePriority,ud=null,yr=null;function WE(n){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(ud,n,void 0,(n.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:YE,XE=Math.log,jE=Math.LN2;function YE(n){return n>>>=0,n===0?32:31-(XE(n)/jE|0)|0}var Qu=64,Ju=4194304;function Ll(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ll(a):(s&=o,s!==0&&(i=Ll(s)))}else o=t&~r,o!==0?i=Ll(o):s!==0&&(i=Ll(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-or(e),r=1<<t,i|=n[t],e&=~r;return i}function qE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $E(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-or(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=qE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function vp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function cy(){var n=Qu;return Qu<<=1,!(Qu&4194240)&&(Qu=64),n}function Vd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Bu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-or(e),n[e]=t}function KE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-or(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Gm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-or(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function fy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var dy,Vm,hy,py,my,xp=!1,ec=[],Ss=null,Ms=null,Es=null,fu=new Map,du=new Map,us=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w0(n,e){switch(n){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":Ms=null;break;case"mouseover":case"mouseout":Es=null;break;case"pointerover":case"pointerout":fu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function ml(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Gu(e),e!==null&&Vm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function QE(n,e,t,i,r){switch(e){case"focusin":return Ss=ml(Ss,n,e,t,i,r),!0;case"dragenter":return Ms=ml(Ms,n,e,t,i,r),!0;case"mouseover":return Es=ml(Es,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return fu.set(s,ml(fu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,du.set(s,ml(du.get(s)||null,n,e,t,i,r)),!0}return!1}function gy(n){var e=uo(n.target);if(e!==null){var t=zo(e);if(t!==null){if(e=t.tag,e===13){if(e=ry(t),e!==null){n.blockedOn=e,my(n.priority,function(){hy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=yp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);pp=i,t.target.dispatchEvent(i),pp=null}else return e=Gu(t),e!==null&&Vm(e),n.blockedOn=t,!1;e.shift()}return!0}function A0(n,e,t){Kc(n)&&t.delete(e)}function JE(){xp=!1,Ss!==null&&Kc(Ss)&&(Ss=null),Ms!==null&&Kc(Ms)&&(Ms=null),Es!==null&&Kc(Es)&&(Es=null),fu.forEach(A0),du.forEach(A0)}function gl(n,e){n.blockedOn===e&&(n.blockedOn=null,xp||(xp=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,JE)))}function hu(n){function e(r){return gl(r,n)}if(0<ec.length){gl(ec[0],n);for(var t=1;t<ec.length;t++){var i=ec[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ss!==null&&gl(Ss,n),Ms!==null&&gl(Ms,n),Es!==null&&gl(Es,n),fu.forEach(e),du.forEach(e),t=0;t<us.length;t++)i=us[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<us.length&&(t=us[0],t.blockedOn===null);)gy(t),t.blockedOn===null&&us.shift()}var Ra=Qr.ReactCurrentBatchConfig,Mf=!0;function eT(n,e,t,i){var r=vt,s=Ra.transition;Ra.transition=null;try{vt=1,Wm(n,e,t,i)}finally{vt=r,Ra.transition=s}}function tT(n,e,t,i){var r=vt,s=Ra.transition;Ra.transition=null;try{vt=4,Wm(n,e,t,i)}finally{vt=r,Ra.transition=s}}function Wm(n,e,t,i){if(Mf){var r=yp(n,e,t,i);if(r===null)Jd(n,e,i,Ef,t),w0(n,i);else if(QE(r,n,e,t,i))i.stopPropagation();else if(w0(n,i),e&4&&-1<ZE.indexOf(n)){for(;r!==null;){var s=Gu(r);if(s!==null&&dy(s),s=yp(n,e,t,i),s===null&&Jd(n,e,i,Ef,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jd(n,e,i,null,t)}}var Ef=null;function yp(n,e,t,i){if(Ef=null,n=Bm(i),n=uo(n),n!==null)if(e=zo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ry(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ef=n,null}function _y(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GE()){case Hm:return 1;case ly:return 4;case yf:case VE:return 16;case uy:return 536870912;default:return 16}default:return 16}}var fs=null,Xm=null,Zc=null;function vy(){if(Zc)return Zc;var n,e=Xm,t=e.length,i,r="value"in fs?fs.value:fs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Zc=r.slice(n,1<i?1-i:void 0)}function Qc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function tc(){return!0}function b0(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tc:b0,this.isPropagationStopped=b0,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=tc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=tc)},persist:function(){},isPersistent:tc}),e}var ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jm=Pi(ol),Hu=Bt({},ol,{view:0,detail:0}),nT=Pi(Hu),Wd,Xd,_l,cd=Bt({},Hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ym,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_l&&(_l&&n.type==="mousemove"?(Wd=n.screenX-_l.screenX,Xd=n.screenY-_l.screenY):Xd=Wd=0,_l=n),Wd)},movementY:function(n){return"movementY"in n?n.movementY:Xd}}),C0=Pi(cd),iT=Bt({},cd,{dataTransfer:0}),rT=Pi(iT),sT=Bt({},Hu,{relatedTarget:0}),jd=Pi(sT),oT=Bt({},ol,{animationName:0,elapsedTime:0,pseudoElement:0}),aT=Pi(oT),lT=Bt({},ol,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uT=Pi(lT),cT=Bt({},ol,{data:0}),R0=Pi(cT),fT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=hT[n])?!!e[n]:!1}function Ym(){return pT}var mT=Bt({},Hu,{key:function(n){if(n.key){var e=fT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Qc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ym,charCode:function(n){return n.type==="keypress"?Qc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gT=Pi(mT),_T=Bt({},cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P0=Pi(_T),vT=Bt({},Hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ym}),xT=Pi(vT),yT=Bt({},ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),ST=Pi(yT),MT=Bt({},cd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=Pi(MT),TT=[9,13,27,32],qm=Xr&&"CompositionEvent"in window,Gl=null;Xr&&"documentMode"in document&&(Gl=document.documentMode);var wT=Xr&&"TextEvent"in window&&!Gl,xy=Xr&&(!qm||Gl&&8<Gl&&11>=Gl),L0=" ",D0=!1;function yy(n,e){switch(n){case"keyup":return TT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function AT(n,e){switch(n){case"compositionend":return Sy(e);case"keypress":return e.which!==32?null:(D0=!0,L0);case"textInput":return n=e.data,n===L0&&D0?null:n;default:return null}}function bT(n,e){if(fa)return n==="compositionend"||!qm&&yy(n,e)?(n=vy(),Zc=Xm=fs=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xy&&e.locale!=="ko"?null:e.data;default:return null}}var CT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function N0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!CT[n.type]:e==="textarea"}function My(n,e,t,i){Jx(i),e=Tf(e,"onChange"),0<e.length&&(t=new jm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Vl=null,pu=null;function RT(n){Ny(n,0)}function fd(n){var e=pa(n);if(jx(e))return n}function PT(n,e){if(n==="change")return e}var Ey=!1;if(Xr){var Yd;if(Xr){var qd="oninput"in document;if(!qd){var I0=document.createElement("div");I0.setAttribute("oninput","return;"),qd=typeof I0.oninput=="function"}Yd=qd}else Yd=!1;Ey=Yd&&(!document.documentMode||9<document.documentMode)}function U0(){Vl&&(Vl.detachEvent("onpropertychange",Ty),pu=Vl=null)}function Ty(n){if(n.propertyName==="value"&&fd(pu)){var e=[];My(e,pu,n,Bm(n)),iy(RT,e)}}function LT(n,e,t){n==="focusin"?(U0(),Vl=e,pu=t,Vl.attachEvent("onpropertychange",Ty)):n==="focusout"&&U0()}function DT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fd(pu)}function NT(n,e){if(n==="click")return fd(e)}function IT(n,e){if(n==="input"||n==="change")return fd(e)}function UT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var lr=typeof Object.is=="function"?Object.is:UT;function mu(n,e){if(lr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!np.call(e,r)||!lr(n[r],e[r]))return!1}return!0}function O0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function k0(n,e){var t=O0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=O0(t)}}function wy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?wy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ay(){for(var n=window,e=_f();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=_f(n.document)}return e}function $m(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function OT(n){var e=Ay(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&wy(t.ownerDocument.documentElement,t)){if(i!==null&&$m(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=k0(t,s);var o=k0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kT=Xr&&"documentMode"in document&&11>=document.documentMode,da=null,Sp=null,Wl=null,Mp=!1;function F0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Mp||da==null||da!==_f(i)||(i=da,"selectionStart"in i&&$m(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wl&&mu(Wl,i)||(Wl=i,i=Tf(Sp,"onSelect"),0<i.length&&(e=new jm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=da)))}function nc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ha={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},$d={},by={};Xr&&(by=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function dd(n){if($d[n])return $d[n];if(!ha[n])return n;var e=ha[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in by)return $d[n]=e[t];return n}var Cy=dd("animationend"),Ry=dd("animationiteration"),Py=dd("animationstart"),Ly=dd("transitionend"),Dy=new Map,z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){Dy.set(n,e),Fo(e,[n])}for(var Kd=0;Kd<z0.length;Kd++){var Zd=z0[Kd],FT=Zd.toLowerCase(),zT=Zd[0].toUpperCase()+Zd.slice(1);Gs(FT,"on"+zT)}Gs(Cy,"onAnimationEnd");Gs(Ry,"onAnimationIteration");Gs(Py,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(Ly,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function B0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,FE(i,e,void 0,n),n.currentTarget=null}function Ny(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;B0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;B0(r,a,u),s=l}}}if(xf)throw n=_p,xf=!1,_p=null,n}function Rt(n,e){var t=e[bp];t===void 0&&(t=e[bp]=new Set);var i=n+"__bubble";t.has(i)||(Iy(e,n,2,!1),t.add(i))}function Qd(n,e,t){var i=0;e&&(i|=4),Iy(t,n,i,e)}var ic="_reactListening"+Math.random().toString(36).slice(2);function gu(n){if(!n[ic]){n[ic]=!0,Hx.forEach(function(t){t!=="selectionchange"&&(BT.has(t)||Qd(t,!1,n),Qd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ic]||(e[ic]=!0,Qd("selectionchange",!1,e))}}function Iy(n,e,t,i){switch(_y(e)){case 1:var r=eT;break;case 4:r=tT;break;default:r=Wm}t=r.bind(null,e,t,n),r=void 0,!gp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Jd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=uo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}iy(function(){var u=s,c=Bm(t),d=[];e:{var h=Dy.get(n);if(h!==void 0){var p=jm,x=n;switch(n){case"keypress":if(Qc(t)===0)break e;case"keydown":case"keyup":p=gT;break;case"focusin":x="focus",p=jd;break;case"focusout":x="blur",p=jd;break;case"beforeblur":case"afterblur":p=jd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=C0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xT;break;case Cy:case Ry:case Py:p=aT;break;case Ly:p=ST;break;case"scroll":p=nT;break;case"wheel":p=ET;break;case"copy":case"cut":case"paste":p=uT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=P0}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=cu(_,f),y!=null&&g.push(_u(_,y,v)))),m)break;_=_.return}0<g.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==pp&&(x=t.relatedTarget||t.fromElement)&&(uo(x)||x[jr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?uo(x):null,x!==null&&(m=zo(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(g=C0,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(g=P0,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:pa(p),v=x==null?h:pa(x),h=new g(y,_+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,uo(c)===u&&(g=new g(f,_+"enter",x,t,c),g.target=v,g.relatedTarget=m,y=g),m=y,p&&x)t:{for(g=p,f=x,_=0,v=g;v;v=Ho(v))_++;for(v=0,y=f;y;y=Ho(y))v++;for(;0<_-v;)g=Ho(g),_--;for(;0<v-_;)f=Ho(f),v--;for(;_--;){if(g===f||f!==null&&g===f.alternate)break t;g=Ho(g),f=Ho(f)}g=null}else g=null;p!==null&&H0(d,h,p,g,!1),x!==null&&m!==null&&H0(d,m,x,g,!0)}}e:{if(h=u?pa(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=PT;else if(N0(h))if(Ey)w=IT;else{w=DT;var T=LT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=NT);if(w&&(w=w(n,u))){My(d,w,t,c);break e}T&&T(n,h,u),n==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&up(h,"number",h.value)}switch(T=u?pa(u):window,n){case"focusin":(N0(T)||T.contentEditable==="true")&&(da=T,Sp=u,Wl=null);break;case"focusout":Wl=Sp=da=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,F0(d,t,c);break;case"selectionchange":if(kT)break;case"keydown":case"keyup":F0(d,t,c)}var M;if(qm)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else fa?yy(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(xy&&t.locale!=="ko"&&(fa||P!=="onCompositionStart"?P==="onCompositionEnd"&&fa&&(M=vy()):(fs=c,Xm="value"in fs?fs.value:fs.textContent,fa=!0)),T=Tf(u,P),0<T.length&&(P=new R0(P,n,null,t,c),d.push({event:P,listeners:T}),M?P.data=M:(M=Sy(t),M!==null&&(P.data=M)))),(M=wT?AT(n,t):bT(n,t))&&(u=Tf(u,"onBeforeInput"),0<u.length&&(c=new R0("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Ny(d,e)})}function _u(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Tf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=cu(n,t),s!=null&&i.unshift(_u(n,s,r)),s=cu(n,e),s!=null&&i.push(_u(n,s,r))),n=n.return}return i}function Ho(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function H0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=cu(t,s),l!=null&&o.unshift(_u(t,l,a))):r||(l=cu(t,s),l!=null&&o.push(_u(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var HT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function G0(n){return(typeof n=="string"?n:""+n).replace(HT,`
`).replace(GT,"")}function rc(n,e,t){if(e=G0(e),G0(n)!==e&&t)throw Error(re(425))}function wf(){}var Ep=null,Tp=null;function wp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ap=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(n){return V0.resolve(null).then(n).catch(XT)}:Ap;function XT(n){setTimeout(function(){throw n})}function eh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),hu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);hu(e)}function Ts(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function W0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var al=Math.random().toString(36).slice(2),mr="__reactFiber$"+al,vu="__reactProps$"+al,jr="__reactContainer$"+al,bp="__reactEvents$"+al,jT="__reactListeners$"+al,YT="__reactHandles$"+al;function uo(n){var e=n[mr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[mr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=W0(n);n!==null;){if(t=n[mr])return t;n=W0(n)}return e}n=t,t=n.parentNode}return null}function Gu(n){return n=n[mr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function pa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function hd(n){return n[vu]||null}var Cp=[],ma=-1;function Vs(n){return{current:n}}function Lt(n){0>ma||(n.current=Cp[ma],Cp[ma]=null,ma--)}function bt(n,e){ma++,Cp[ma]=n.current,n.current=e}var ks={},Un=Vs(ks),ti=Vs(!1),bo=ks;function Ga(n,e){var t=n.type.contextTypes;if(!t)return ks;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ni(n){return n=n.childContextTypes,n!=null}function Af(){Lt(ti),Lt(Un)}function X0(n,e,t){if(Un.current!==ks)throw Error(re(168));bt(Un,e),bt(ti,t)}function Uy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,LE(n)||"Unknown",r));return Bt({},t,i)}function bf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ks,bo=Un.current,bt(Un,n),bt(ti,ti.current),!0}function j0(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=Uy(n,e,bo),i.__reactInternalMemoizedMergedChildContext=n,Lt(ti),Lt(Un),bt(Un,n)):Lt(ti),bt(ti,t)}var Nr=null,pd=!1,th=!1;function Oy(n){Nr===null?Nr=[n]:Nr.push(n)}function qT(n){pd=!0,Oy(n)}function Ws(){if(!th&&Nr!==null){th=!0;var n=0,e=vt;try{var t=Nr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Nr=null,pd=!1}catch(r){throw Nr!==null&&(Nr=Nr.slice(n+1)),ay(Hm,Ws),r}finally{vt=e,th=!1}}return null}var ga=[],_a=0,Cf=null,Rf=0,Ii=[],Ui=0,Co=null,kr=1,Fr="";function eo(n,e){ga[_a++]=Rf,ga[_a++]=Cf,Cf=n,Rf=e}function ky(n,e,t){Ii[Ui++]=kr,Ii[Ui++]=Fr,Ii[Ui++]=Co,Co=n;var i=kr;n=Fr;var r=32-or(i)-1;i&=~(1<<r),t+=1;var s=32-or(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,kr=1<<32-or(e)+r|t<<r|i,Fr=s+n}else kr=1<<s|t<<r|i,Fr=n}function Km(n){n.return!==null&&(eo(n,1),ky(n,1,0))}function Zm(n){for(;n===Cf;)Cf=ga[--_a],ga[_a]=null,Rf=ga[--_a],ga[_a]=null;for(;n===Co;)Co=Ii[--Ui],Ii[Ui]=null,Fr=Ii[--Ui],Ii[Ui]=null,kr=Ii[--Ui],Ii[Ui]=null}var Mi=null,yi=null,Nt=!1,nr=null;function Fy(n,e){var t=Hi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Y0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,yi=Ts(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Co!==null?{id:kr,overflow:Fr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,yi=null,!0):!1;default:return!1}}function Rp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pp(n){if(Nt){var e=yi;if(e){var t=e;if(!Y0(n,e)){if(Rp(n))throw Error(re(418));e=Ts(t.nextSibling);var i=Mi;e&&Y0(n,e)?Fy(i,t):(n.flags=n.flags&-4097|2,Nt=!1,Mi=n)}}else{if(Rp(n))throw Error(re(418));n.flags=n.flags&-4097|2,Nt=!1,Mi=n}}}function q0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function sc(n){if(n!==Mi)return!1;if(!Nt)return q0(n),Nt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!wp(n.type,n.memoizedProps)),e&&(e=yi)){if(Rp(n))throw zy(),Error(re(418));for(;e;)Fy(n,e),e=Ts(e.nextSibling)}if(q0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=Ts(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=Mi?Ts(n.stateNode.nextSibling):null;return!0}function zy(){for(var n=yi;n;)n=Ts(n.nextSibling)}function Va(){yi=Mi=null,Nt=!1}function Qm(n){nr===null?nr=[n]:nr.push(n)}var $T=Qr.ReactCurrentBatchConfig;function vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function oc(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function $0(n){var e=n._init;return e(n._payload)}function By(n){function e(f,_){if(n){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Cs(f,_),f.index=0,f.sibling=null,f}function s(f,_,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,y){return _===null||_.tag!==6?(_=lh(v,f.mode,y),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,y){var w=v.type;return w===ca?c(f,_,v.props.children,y,v.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===os&&$0(w)===_.type)?(y=r(_,v.props),y.ref=vl(f,_,v),y.return=f,y):(y=of(v.type,v.key,v.props,null,f.mode,y),y.ref=vl(f,_,v),y.return=f,y)}function u(f,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=uh(v,f.mode,y),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function c(f,_,v,y,w){return _===null||_.tag!==7?(_=go(v,f.mode,y,w),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=lh(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $u:return v=of(_.type,_.key,_.props,null,f.mode,v),v.ref=vl(f,null,_),v.return=f,v;case ua:return _=uh(_,f.mode,v),_.return=f,_;case os:var y=_._init;return d(f,y(_._payload),v)}if(Pl(_)||hl(_))return _=go(_,f.mode,v,null),_.return=f,_;oc(f,_)}return null}function h(f,_,v,y){var w=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:a(f,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $u:return v.key===w?l(f,_,v,y):null;case ua:return v.key===w?u(f,_,v,y):null;case os:return w=v._init,h(f,_,w(v._payload),y)}if(Pl(v)||hl(v))return w!==null?null:c(f,_,v,y,null);oc(f,v)}return null}function p(f,_,v,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(_,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case $u:return f=f.get(y.key===null?v:y.key)||null,l(_,f,y,w);case ua:return f=f.get(y.key===null?v:y.key)||null,u(_,f,y,w);case os:var T=y._init;return p(f,_,v,T(y._payload),w)}if(Pl(y)||hl(y))return f=f.get(v)||null,c(_,f,y,w,null);oc(_,y)}return null}function x(f,_,v,y){for(var w=null,T=null,M=_,P=_=0,S=null;M!==null&&P<v.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=h(f,M,v[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(f,M),_=s(E,_,P),T===null?w=E:T.sibling=E,T=E,M=S}if(P===v.length)return t(f,M),Nt&&eo(f,P),w;if(M===null){for(;P<v.length;P++)M=d(f,v[P],y),M!==null&&(_=s(M,_,P),T===null?w=M:T.sibling=M,T=M);return Nt&&eo(f,P),w}for(M=i(f,M);P<v.length;P++)S=p(M,f,P,v[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),_=s(S,_,P),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(O){return e(f,O)}),Nt&&eo(f,P),w}function g(f,_,v,y){var w=hl(v);if(typeof w!="function")throw Error(re(150));if(v=w.call(v),v==null)throw Error(re(151));for(var T=w=null,M=_,P=_=0,S=null,E=v.next();M!==null&&!E.done;P++,E=v.next()){M.index>P?(S=M,M=null):S=M.sibling;var O=h(f,M,E.value,y);if(O===null){M===null&&(M=S);break}n&&M&&O.alternate===null&&e(f,M),_=s(O,_,P),T===null?w=O:T.sibling=O,T=O,M=S}if(E.done)return t(f,M),Nt&&eo(f,P),w;if(M===null){for(;!E.done;P++,E=v.next())E=d(f,E.value,y),E!==null&&(_=s(E,_,P),T===null?w=E:T.sibling=E,T=E);return Nt&&eo(f,P),w}for(M=i(f,M);!E.done;P++,E=v.next())E=p(M,f,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),_=s(E,_,P),T===null?w=E:T.sibling=E,T=E);return n&&M.forEach(function(I){return e(f,I)}),Nt&&eo(f,P),w}function m(f,_,v,y){if(typeof v=="object"&&v!==null&&v.type===ca&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case $u:e:{for(var w=v.key,T=_;T!==null;){if(T.key===w){if(w=v.type,w===ca){if(T.tag===7){t(f,T.sibling),_=r(T,v.props.children),_.return=f,f=_;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===os&&$0(w)===T.type){t(f,T.sibling),_=r(T,v.props),_.ref=vl(f,T,v),_.return=f,f=_;break e}t(f,T);break}else e(f,T);T=T.sibling}v.type===ca?(_=go(v.props.children,f.mode,y,v.key),_.return=f,f=_):(y=of(v.type,v.key,v.props,null,f.mode,y),y.ref=vl(f,_,v),y.return=f,f=y)}return o(f);case ua:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=uh(v,f.mode,y),_.return=f,f=_}return o(f);case os:return T=v._init,m(f,_,T(v._payload),y)}if(Pl(v))return x(f,_,v,y);if(hl(v))return g(f,_,v,y);oc(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,v),_.return=f,f=_):(t(f,_),_=lh(v,f.mode,y),_.return=f,f=_),o(f)):t(f,_)}return m}var Wa=By(!0),Hy=By(!1),Pf=Vs(null),Lf=null,va=null,Jm=null;function eg(){Jm=va=Lf=null}function tg(n){var e=Pf.current;Lt(Pf),n._currentValue=e}function Lp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Pa(n,e){Lf=n,Jm=va=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ei=!0),n.firstContext=null)}function Yi(n){var e=n._currentValue;if(Jm!==n)if(n={context:n,memoizedValue:e,next:null},va===null){if(Lf===null)throw Error(re(308));va=n,Lf.dependencies={lanes:0,firstContext:n}}else va=va.next=n;return e}var co=null;function ng(n){co===null?co=[n]:co.push(n)}function Gy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ng(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yr(n,i)}function Yr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var as=!1;function ig(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ws(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yr(n,t)}return r=i.interleaved,r===null?(e.next=e,ng(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yr(n,t)}function Jc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gm(n,t)}}function K0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Df(n,e,t,i){var r=n.updateQueue;as=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,g=a;switch(h=e,p=t,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=Bt({},d,h);break e;case 2:as=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Po|=o,n.lanes=o,n.memoizedState=d}}function Z0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Vu={},Sr=Vs(Vu),xu=Vs(Vu),yu=Vs(Vu);function fo(n){if(n===Vu)throw Error(re(174));return n}function rg(n,e){switch(bt(yu,e),bt(xu,n),bt(Sr,Vu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=fp(e,n)}Lt(Sr),bt(Sr,e)}function Xa(){Lt(Sr),Lt(xu),Lt(yu)}function Wy(n){fo(yu.current);var e=fo(Sr.current),t=fp(e,n.type);e!==t&&(bt(xu,n),bt(Sr,t))}function sg(n){xu.current===n&&(Lt(Sr),Lt(xu))}var Ot=Vs(0);function Nf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nh=[];function og(){for(var n=0;n<nh.length;n++)nh[n]._workInProgressVersionPrimary=null;nh.length=0}var ef=Qr.ReactCurrentDispatcher,ih=Qr.ReactCurrentBatchConfig,Ro=0,zt=null,tn=null,fn=null,If=!1,Xl=!1,Su=0,KT=0;function Tn(){throw Error(re(321))}function ag(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!lr(n[t],e[t]))return!1;return!0}function lg(n,e,t,i,r,s){if(Ro=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ef.current=n===null||n.memoizedState===null?ew:tw,n=t(i,r),Xl){s=0;do{if(Xl=!1,Su=0,25<=s)throw Error(re(301));s+=1,fn=tn=null,e.updateQueue=null,ef.current=nw,n=t(i,r)}while(Xl)}if(ef.current=Uf,e=tn!==null&&tn.next!==null,Ro=0,fn=tn=zt=null,If=!1,e)throw Error(re(300));return n}function ug(){var n=Su!==0;return Su=0,n}function fr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?zt.memoizedState=fn=n:fn=fn.next=n,fn}function qi(){if(tn===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var e=fn===null?zt.memoizedState:fn.next;if(e!==null)fn=e,tn=n;else{if(n===null)throw Error(re(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},fn===null?zt.memoizedState=fn=n:fn=fn.next=n}return fn}function Mu(n,e){return typeof e=="function"?e(n):e}function rh(n){var e=qi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=tn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ro&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,zt.lanes|=c,Po|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,lr(i,e.memoizedState)||(ei=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,zt.lanes|=s,Po|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function sh(n){var e=qi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);lr(s,e.memoizedState)||(ei=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Xy(){}function jy(n,e){var t=zt,i=qi(),r=e(),s=!lr(i.memoizedState,r);if(s&&(i.memoizedState=r,ei=!0),i=i.queue,cg($y.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||fn!==null&&fn.memoizedState.tag&1){if(t.flags|=2048,Eu(9,qy.bind(null,t,i,r,e),void 0,null),dn===null)throw Error(re(349));Ro&30||Yy(t,e,r)}return r}function Yy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function qy(n,e,t,i){e.value=t,e.getSnapshot=i,Ky(e)&&Zy(n)}function $y(n,e,t){return t(function(){Ky(e)&&Zy(n)})}function Ky(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!lr(n,t)}catch{return!0}}function Zy(n){var e=Yr(n,1);e!==null&&ar(e,n,1,-1)}function Q0(n){var e=fr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mu,lastRenderedState:n},e.queue=n,n=n.dispatch=JT.bind(null,zt,n),[e.memoizedState,n]}function Eu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Qy(){return qi().memoizedState}function tf(n,e,t,i){var r=fr();zt.flags|=n,r.memoizedState=Eu(1|e,t,void 0,i===void 0?null:i)}function md(n,e,t,i){var r=qi();i=i===void 0?null:i;var s=void 0;if(tn!==null){var o=tn.memoizedState;if(s=o.destroy,i!==null&&ag(i,o.deps)){r.memoizedState=Eu(e,t,s,i);return}}zt.flags|=n,r.memoizedState=Eu(1|e,t,s,i)}function J0(n,e){return tf(8390656,8,n,e)}function cg(n,e){return md(2048,8,n,e)}function Jy(n,e){return md(4,2,n,e)}function e1(n,e){return md(4,4,n,e)}function t1(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function n1(n,e,t){return t=t!=null?t.concat([n]):null,md(4,4,t1.bind(null,e,n),t)}function fg(){}function i1(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ag(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function r1(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ag(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function s1(n,e,t){return Ro&21?(lr(t,e)||(t=cy(),zt.lanes|=t,Po|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=t)}function ZT(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=ih.transition;ih.transition={};try{n(!1),e()}finally{vt=t,ih.transition=i}}function o1(){return qi().memoizedState}function QT(n,e,t){var i=bs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},a1(n))l1(e,t);else if(t=Gy(n,e,t,i),t!==null){var r=Yn();ar(t,n,i,r),u1(t,e,i)}}function JT(n,e,t){var i=bs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(a1(n))l1(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,lr(a,o)){var l=e.interleaved;l===null?(r.next=r,ng(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Gy(n,e,r,i),t!==null&&(r=Yn(),ar(t,n,i,r),u1(t,e,i))}}function a1(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function l1(n,e){Xl=If=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function u1(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Gm(n,t)}}var Uf={readContext:Yi,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},ew={readContext:Yi,useCallback:function(n,e){return fr().memoizedState=[n,e===void 0?null:e],n},useContext:Yi,useEffect:J0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,tf(4194308,4,t1.bind(null,e,n),t)},useLayoutEffect:function(n,e){return tf(4194308,4,n,e)},useInsertionEffect:function(n,e){return tf(4,2,n,e)},useMemo:function(n,e){var t=fr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=fr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=QT.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=fr();return n={current:n},e.memoizedState=n},useState:Q0,useDebugValue:fg,useDeferredValue:function(n){return fr().memoizedState=n},useTransition:function(){var n=Q0(!1),e=n[0];return n=ZT.bind(null,n[1]),fr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=fr();if(Nt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),dn===null)throw Error(re(349));Ro&30||Yy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,J0($y.bind(null,i,s,n),[n]),i.flags|=2048,Eu(9,qy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=fr(),e=dn.identifierPrefix;if(Nt){var t=Fr,i=kr;t=(i&~(1<<32-or(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Su++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=KT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},tw={readContext:Yi,useCallback:i1,useContext:Yi,useEffect:cg,useImperativeHandle:n1,useInsertionEffect:Jy,useLayoutEffect:e1,useMemo:r1,useReducer:rh,useRef:Qy,useState:function(){return rh(Mu)},useDebugValue:fg,useDeferredValue:function(n){var e=qi();return s1(e,tn.memoizedState,n)},useTransition:function(){var n=rh(Mu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:Xy,useSyncExternalStore:jy,useId:o1,unstable_isNewReconciler:!1},nw={readContext:Yi,useCallback:i1,useContext:Yi,useEffect:cg,useImperativeHandle:n1,useInsertionEffect:Jy,useLayoutEffect:e1,useMemo:r1,useReducer:sh,useRef:Qy,useState:function(){return sh(Mu)},useDebugValue:fg,useDeferredValue:function(n){var e=qi();return tn===null?e.memoizedState=n:s1(e,tn.memoizedState,n)},useTransition:function(){var n=sh(Mu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:Xy,useSyncExternalStore:jy,useId:o1,unstable_isNewReconciler:!1};function er(n,e){if(n&&n.defaultProps){e=Bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Dp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var gd={isMounted:function(n){return(n=n._reactInternals)?zo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Yn(),r=bs(n),s=Gr(i,r);s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(ar(e,n,r,i),Jc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Yn(),r=bs(n),s=Gr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ws(n,s,r),e!==null&&(ar(e,n,r,i),Jc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Yn(),i=bs(n),r=Gr(t,i);r.tag=2,e!=null&&(r.callback=e),e=ws(n,r,i),e!==null&&(ar(e,n,i,t),Jc(e,n,i))}};function e_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mu(t,i)||!mu(r,s):!0}function c1(n,e,t){var i=!1,r=ks,s=e.contextType;return typeof s=="object"&&s!==null?s=Yi(s):(r=ni(e)?bo:Un.current,i=e.contextTypes,s=(i=i!=null)?Ga(n,r):ks),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function t_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&gd.enqueueReplaceState(e,e.state,null)}function Np(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},ig(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yi(s):(s=ni(e)?bo:Un.current,r.context=Ga(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gd.enqueueReplaceState(r,r.state,null),Df(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ja(n,e){try{var t="",i=e;do t+=PE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function oh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ip(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var iw=typeof WeakMap=="function"?WeakMap:Map;function f1(n,e,t){t=Gr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){kf||(kf=!0,Wp=i),Ip(n,e)},t}function d1(n,e,t){t=Gr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ip(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ip(n,e),typeof i!="function"&&(As===null?As=new Set([this]):As.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function n_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new iw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=_w.bind(null,n,e,t),e.then(n,n))}function i_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function r_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gr(-1,1),e.tag=2,ws(t,e,1))),t.lanes|=1),n)}var rw=Qr.ReactCurrentOwner,ei=!1;function Hn(n,e,t,i){e.child=n===null?Hy(e,null,t,i):Wa(e,n.child,t,i)}function s_(n,e,t,i,r){t=t.render;var s=e.ref;return Pa(e,r),i=lg(n,e,t,i,s,r),t=ug(),n!==null&&!ei?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(Nt&&t&&Km(e),e.flags|=1,Hn(n,e,i,r),e.child)}function o_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!xg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,h1(n,e,s,i,r)):(n=of(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:mu,t(o,i)&&n.ref===e.ref)return qr(n,e,r)}return e.flags|=1,n=Cs(s,i),n.ref=e.ref,n.return=e,e.child=n}function h1(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mu(s,i)&&n.ref===e.ref)if(ei=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ei=!0);else return e.lanes=n.lanes,qr(n,e,r)}return Up(n,e,t,i,r)}function p1(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(ya,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,bt(ya,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,bt(ya,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,bt(ya,pi),pi|=i;return Hn(n,e,r,t),e.child}function m1(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Up(n,e,t,i,r){var s=ni(t)?bo:Un.current;return s=Ga(e,s),Pa(e,r),t=lg(n,e,t,i,s,r),i=ug(),n!==null&&!ei?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qr(n,e,r)):(Nt&&i&&Km(e),e.flags|=1,Hn(n,e,t,r),e.child)}function a_(n,e,t,i,r){if(ni(t)){var s=!0;bf(e)}else s=!1;if(Pa(e,r),e.stateNode===null)nf(n,e),c1(e,t,i),Np(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Yi(u):(u=ni(t)?bo:Un.current,u=Ga(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&t_(e,o,i,u),as=!1;var h=e.memoizedState;o.state=h,Df(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ti.current||as?(typeof c=="function"&&(Dp(e,t,c,i),l=e.memoizedState),(a=as||e_(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Vy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:er(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Yi(l):(l=ni(t)?bo:Un.current,l=Ga(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&t_(e,o,i,l),as=!1,h=e.memoizedState,o.state=h,Df(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||ti.current||as?(typeof p=="function"&&(Dp(e,t,p,i),x=e.memoizedState),(u=as||e_(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Op(n,e,t,i,s,r)}function Op(n,e,t,i,r,s){m1(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&j0(e,t,!1),qr(n,e,s);i=e.stateNode,rw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Wa(e,n.child,null,s),e.child=Wa(e,null,a,s)):Hn(n,e,a,s),e.memoizedState=i.state,r&&j0(e,t,!0),e.child}function g1(n){var e=n.stateNode;e.pendingContext?X0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&X0(n,e.context,!1),rg(n,e.containerInfo)}function l_(n,e,t,i,r){return Va(),Qm(r),e.flags|=256,Hn(n,e,t,i),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Fp(n){return{baseLanes:n,cachePool:null,transitions:null}}function _1(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),bt(Ot,r&1),n===null)return Pp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xd(o,i,0,null),n=go(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Fp(t),e.memoizedState=kp,n):dg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cs(a,s):(s=go(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Fp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=kp,i}return s=n.child,n=s.sibling,i=Cs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function dg(n,e){return e=xd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ac(n,e,t,i){return i!==null&&Qm(i),Wa(e,n.child,null,t),n=dg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function sw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=oh(Error(re(422))),ac(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xd({mode:"visible",children:i.children},r,0,null),s=go(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Wa(e,n.child,null,o),e.child.memoizedState=Fp(o),e.memoizedState=kp,s);if(!(e.mode&1))return ac(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=oh(s,i,void 0),ac(n,e,o,i)}if(a=(o&n.childLanes)!==0,ei||a){if(i=dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yr(n,r),ar(i,n,r,-1))}return vg(),i=oh(Error(re(421))),ac(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=vw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=Ts(r.nextSibling),Mi=e,Nt=!0,nr=null,n!==null&&(Ii[Ui++]=kr,Ii[Ui++]=Fr,Ii[Ui++]=Co,kr=n.id,Fr=n.overflow,Co=e),e=dg(e,i.children),e.flags|=4096,e)}function u_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Lp(n.return,e,t)}function ah(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function v1(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Hn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&u_(n,t,e);else if(n.tag===19)u_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(bt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Nf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ah(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Nf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ah(e,!0,t,null,s);break;case"together":ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Po|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=Cs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Cs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ow(n,e,t){switch(e.tag){case 3:g1(e),Va();break;case 5:Wy(e);break;case 1:ni(e.type)&&bf(e);break;case 4:rg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(Pf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?_1(n,e,t):(bt(Ot,Ot.current&1),n=qr(n,e,t),n!==null?n.sibling:null);bt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return v1(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,p1(n,e,t)}return qr(n,e,t)}var x1,zp,y1,S1;x1=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};zp=function(){};y1=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fo(Sr.current);var s=null;switch(t){case"input":r=ap(n,r),i=ap(n,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=cp(n,r),i=cp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=wf)}dp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};S1=function(n,e,t,i){t!==i&&(e.flags|=4)};function xl(n,e){if(!Nt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function aw(n,e,t){var i=e.pendingProps;switch(Zm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return ni(e.type)&&Af(),wn(e),null;case 3:return i=e.stateNode,Xa(),Lt(ti),Lt(Un),og(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(sc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nr!==null&&(Yp(nr),nr=null))),zp(n,e),wn(e),null;case 5:sg(e);var r=fo(yu.current);if(t=e.type,n!==null&&e.stateNode!=null)y1(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return wn(e),null}if(n=fo(Sr.current),sc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[mr]=e,i[vu]=s,n=(e.mode&1)!==0,t){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Dl.length;r++)Rt(Dl[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":v0(i,s),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",i);break;case"textarea":y0(i,s),Rt("invalid",i)}dp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&rc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rc(i.textContent,a,n),r=["children",""+a]):lu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Rt("scroll",i)}switch(t){case"input":Ku(i),x0(i,s,!0);break;case"textarea":Ku(i),S0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$x(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[mr]=e,n[vu]=i,x1(n,e,!1,!1),e.stateNode=n;e:{switch(o=hp(t,i),t){case"dialog":Rt("cancel",n),Rt("close",n),r=i;break;case"iframe":case"object":case"embed":Rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Dl.length;r++)Rt(Dl[r],n);r=i;break;case"source":Rt("error",n),r=i;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),r=i;break;case"details":Rt("toggle",n),r=i;break;case"input":v0(n,i),r=ap(n,i),Rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),Rt("invalid",n);break;case"textarea":y0(n,i),r=cp(n,i),Rt("invalid",n);break;default:r=i}dp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&uu(n,l):typeof l=="number"&&uu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Rt("scroll",n):l!=null&&Om(n,s,l,o))}switch(t){case"input":Ku(n),x0(n,i,!1);break;case"textarea":Ku(n),S0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Os(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Aa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Aa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=wf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(n&&e.stateNode!=null)S1(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=fo(yu.current),fo(Sr.current),sc(e)){if(i=e.stateNode,t=e.memoizedProps,i[mr]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:rc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&rc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[mr]=e,e.stateNode=i}return wn(e),null;case 13:if(Lt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Nt&&yi!==null&&e.mode&1&&!(e.flags&128))zy(),Va(),e.flags|=98560,s=!1;else if(s=sc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[mr]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else nr!==null&&(Yp(nr),nr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?rn===0&&(rn=3):vg())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return Xa(),zp(n,e),n===null&&gu(e.stateNode.containerInfo),wn(e),null;case 10:return tg(e.type._context),wn(e),null;case 17:return ni(e.type)&&Af(),wn(e),null;case 19:if(Lt(Ot),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xl(s,!1);else{if(rn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Nf(n),o!==null){for(e.flags|=128,xl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return bt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>Ya&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Nf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Nt)return wn(e),null}else 2*Xt()-s.renderingStartTime>Ya&&t!==1073741824&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Ot.current,bt(Ot,i?t&1|2:t&1),e):(wn(e),null);case 22:case 23:return _g(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function lw(n,e){switch(Zm(e),e.tag){case 1:return ni(e.type)&&Af(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Xa(),Lt(ti),Lt(Un),og(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return sg(e),null;case 13:if(Lt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Va()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Lt(Ot),null;case 4:return Xa(),null;case 10:return tg(e.type._context),null;case 22:case 23:return _g(),null;case 24:return null;default:return null}}var lc=!1,Pn=!1,uw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function xa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Bp(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var c_=!1;function cw(n,e){if(Ep=Mf,n=Ay(),$m(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tp={focusedElem:n,selectionRange:t},Mf=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:er(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return x=c_,c_=!1,x}function jl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bp(e,t,s)}r=r.next}while(r!==i)}}function _d(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Hp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function M1(n){var e=n.alternate;e!==null&&(n.alternate=null,M1(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[mr],delete e[vu],delete e[bp],delete e[jT],delete e[YT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function E1(n){return n.tag===5||n.tag===3||n.tag===4}function f_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||E1(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=wf));else if(i!==4&&(n=n.child,n!==null))for(Gp(n,e,t),n=n.sibling;n!==null;)Gp(n,e,t),n=n.sibling}function Vp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Vp(n,e,t),n=n.sibling;n!==null;)Vp(n,e,t),n=n.sibling}var pn=null,tr=!1;function Jr(n,e,t){for(t=t.child;t!==null;)T1(n,e,t),t=t.sibling}function T1(n,e,t){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(ud,t)}catch{}switch(t.tag){case 5:Pn||xa(t,e);case 6:var i=pn,r=tr;pn=null,Jr(n,e,t),pn=i,tr=r,pn!==null&&(tr?(n=pn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):pn.removeChild(t.stateNode));break;case 18:pn!==null&&(tr?(n=pn,t=t.stateNode,n.nodeType===8?eh(n.parentNode,t):n.nodeType===1&&eh(n,t),hu(n)):eh(pn,t.stateNode));break;case 4:i=pn,r=tr,pn=t.stateNode.containerInfo,tr=!0,Jr(n,e,t),pn=i,tr=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bp(t,e,o),r=r.next}while(r!==i)}Jr(n,e,t);break;case 1:if(!Pn&&(xa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}Jr(n,e,t);break;case 21:Jr(n,e,t);break;case 22:t.mode&1?(Pn=(i=Pn)||t.memoizedState!==null,Jr(n,e,t),Pn=i):Jr(n,e,t);break;default:Jr(n,e,t)}}function d_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new uw),e.forEach(function(i){var r=xw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function $i(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pn=a.stateNode,tr=!1;break e;case 3:pn=a.stateNode.containerInfo,tr=!0;break e;case 4:pn=a.stateNode.containerInfo,tr=!0;break e}a=a.return}if(pn===null)throw Error(re(160));T1(s,o,r),pn=null,tr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w1(e,n),e=e.sibling}function w1(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if($i(e,n),cr(n),i&4){try{jl(3,n,n.return),_d(3,n)}catch(g){Gt(n,n.return,g)}try{jl(5,n,n.return)}catch(g){Gt(n,n.return,g)}}break;case 1:$i(e,n),cr(n),i&512&&t!==null&&xa(t,t.return);break;case 5:if($i(e,n),cr(n),i&512&&t!==null&&xa(t,t.return),n.flags&32){var r=n.stateNode;try{uu(r,"")}catch(g){Gt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yx(r,s),hp(a,o);var u=hp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Qx(r,d):c==="dangerouslySetInnerHTML"?Kx(r,d):c==="children"?uu(r,d):Om(r,c,d,u)}switch(a){case"input":lp(r,s);break;case"textarea":qx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Aa(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Aa(r,!!s.multiple,s.defaultValue,!0):Aa(r,!!s.multiple,s.multiple?[]:"",!1))}r[vu]=s}catch(g){Gt(n,n.return,g)}}break;case 6:if($i(e,n),cr(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Gt(n,n.return,g)}}break;case 3:if($i(e,n),cr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{hu(e.containerInfo)}catch(g){Gt(n,n.return,g)}break;case 4:$i(e,n),cr(n);break;case 13:$i(e,n),cr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mg=Xt())),i&4&&d_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Pn=(u=Pn)||c,$i(e,n),Pn=u):$i(e,n),cr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(d=Se=c;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:jl(4,h,h.return);break;case 1:xa(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){Gt(i,t,g)}}break;case 5:xa(h,h.return);break;case 22:if(h.memoizedState!==null){p_(d);continue}}p!==null?(p.return=h,Se=p):p_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zx("display",o))}catch(g){Gt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Gt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$i(e,n),cr(n),i&4&&d_(n);break;case 21:break;default:$i(e,n),cr(n)}}function cr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(E1(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uu(r,""),i.flags&=-33);var s=f_(n);Vp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=f_(n);Gp(n,a,o);break;default:throw Error(re(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function fw(n,e,t){Se=n,A1(n)}function A1(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||lc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=lc;var u=Pn;if(lc=o,(Pn=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?m_(r):l!==null?(l.return=o,Se=l):m_(r);for(;s!==null;)Se=s,A1(s),s=s.sibling;Se=r,lc=a,Pn=u}h_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):h_(n)}}function h_(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||_d(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:er(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Z0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Z0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&hu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Pn||e.flags&512&&Hp(e)}catch(h){Gt(e,e.return,h)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function p_(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function m_(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{_d(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Hp(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Hp(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var dw=Math.ceil,Of=Qr.ReactCurrentDispatcher,hg=Qr.ReactCurrentOwner,Xi=Qr.ReactCurrentBatchConfig,ct=0,dn=null,Zt=null,vn=0,pi=0,ya=Vs(0),rn=0,Tu=null,Po=0,vd=0,pg=0,Yl=null,Qn=null,mg=0,Ya=1/0,Lr=null,kf=!1,Wp=null,As=null,uc=!1,ds=null,Ff=0,ql=0,Xp=null,rf=-1,sf=0;function Yn(){return ct&6?Xt():rf!==-1?rf:rf=Xt()}function bs(n){return n.mode&1?ct&2&&vn!==0?vn&-vn:$T.transition!==null?(sf===0&&(sf=cy()),sf):(n=vt,n!==0||(n=window.event,n=n===void 0?16:_y(n.type)),n):1}function ar(n,e,t,i){if(50<ql)throw ql=0,Xp=null,Error(re(185));Bu(n,t,i),(!(ct&2)||n!==dn)&&(n===dn&&(!(ct&2)&&(vd|=t),rn===4&&cs(n,vn)),ii(n,i),t===1&&ct===0&&!(e.mode&1)&&(Ya=Xt()+500,pd&&Ws()))}function ii(n,e){var t=n.callbackNode;$E(n,e);var i=Sf(n,n===dn?vn:0);if(i===0)t!==null&&T0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&T0(t),e===1)n.tag===0?qT(g_.bind(null,n)):Oy(g_.bind(null,n)),WT(function(){!(ct&6)&&Ws()}),t=null;else{switch(fy(i)){case 1:t=Hm;break;case 4:t=ly;break;case 16:t=yf;break;case 536870912:t=uy;break;default:t=yf}t=I1(t,b1.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function b1(n,e){if(rf=-1,sf=0,ct&6)throw Error(re(327));var t=n.callbackNode;if(La()&&n.callbackNode!==t)return null;var i=Sf(n,n===dn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=zf(n,i);else{e=i;var r=ct;ct|=2;var s=R1();(dn!==n||vn!==e)&&(Lr=null,Ya=Xt()+500,mo(n,e));do try{mw();break}catch(a){C1(n,a)}while(!0);eg(),Of.current=s,ct=r,Zt!==null?e=0:(dn=null,vn=0,e=rn)}if(e!==0){if(e===2&&(r=vp(n),r!==0&&(i=r,e=jp(n,r))),e===1)throw t=Tu,mo(n,0),cs(n,i),ii(n,Xt()),t;if(e===6)cs(n,i);else{if(r=n.current.alternate,!(i&30)&&!hw(r)&&(e=zf(n,i),e===2&&(s=vp(n),s!==0&&(i=s,e=jp(n,s))),e===1))throw t=Tu,mo(n,0),cs(n,i),ii(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:to(n,Qn,Lr);break;case 3:if(cs(n,i),(i&130023424)===i&&(e=mg+500-Xt(),10<e)){if(Sf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Yn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ap(to.bind(null,n,Qn,Lr),e);break}to(n,Qn,Lr);break;case 4:if(cs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-or(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dw(i/1960))-i,10<i){n.timeoutHandle=Ap(to.bind(null,n,Qn,Lr),i);break}to(n,Qn,Lr);break;case 5:to(n,Qn,Lr);break;default:throw Error(re(329))}}}return ii(n,Xt()),n.callbackNode===t?b1.bind(null,n):null}function jp(n,e){var t=Yl;return n.current.memoizedState.isDehydrated&&(mo(n,e).flags|=256),n=zf(n,e),n!==2&&(e=Qn,Qn=t,e!==null&&Yp(e)),n}function Yp(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function hw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!lr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cs(n,e){for(e&=~pg,e&=~vd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-or(e),i=1<<t;n[t]=-1,e&=~i}}function g_(n){if(ct&6)throw Error(re(327));La();var e=Sf(n,0);if(!(e&1))return ii(n,Xt()),null;var t=zf(n,e);if(n.tag!==0&&t===2){var i=vp(n);i!==0&&(e=i,t=jp(n,i))}if(t===1)throw t=Tu,mo(n,0),cs(n,e),ii(n,Xt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,to(n,Qn,Lr),ii(n,Xt()),null}function gg(n,e){var t=ct;ct|=1;try{return n(e)}finally{ct=t,ct===0&&(Ya=Xt()+500,pd&&Ws())}}function Lo(n){ds!==null&&ds.tag===0&&!(ct&6)&&La();var e=ct;ct|=1;var t=Xi.transition,i=vt;try{if(Xi.transition=null,vt=1,n)return n()}finally{vt=i,Xi.transition=t,ct=e,!(ct&6)&&Ws()}}function _g(){pi=ya.current,Lt(ya)}function mo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,VT(t)),Zt!==null)for(t=Zt.return;t!==null;){var i=t;switch(Zm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Af();break;case 3:Xa(),Lt(ti),Lt(Un),og();break;case 5:sg(i);break;case 4:Xa();break;case 13:Lt(Ot);break;case 19:Lt(Ot);break;case 10:tg(i.type._context);break;case 22:case 23:_g()}t=t.return}if(dn=n,Zt=n=Cs(n.current,null),vn=pi=e,rn=0,Tu=null,pg=vd=Po=0,Qn=Yl=null,co!==null){for(e=0;e<co.length;e++)if(t=co[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}co=null}return n}function C1(n,e){do{var t=Zt;try{if(eg(),ef.current=Uf,If){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}If=!1}if(Ro=0,fn=tn=zt=null,Xl=!1,Su=0,hg.current=null,t===null||t.return===null){rn=1,Tu=e,Zt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=i_(o);if(p!==null){p.flags&=-257,r_(p,o,a,s,e),p.mode&1&&n_(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){n_(s,u,e),vg();break e}l=Error(re(426))}}else if(Nt&&a.mode&1){var m=i_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),r_(m,o,a,s,e),Qm(ja(l,a));break e}}s=l=ja(l,a),rn!==4&&(rn=2),Yl===null?Yl=[s]:Yl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=f1(s,l,e);K0(s,f);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(As===null||!As.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=d1(s,a,e);K0(s,y);break e}}s=s.return}while(s!==null)}L1(t)}catch(w){e=w,Zt===t&&t!==null&&(Zt=t=t.return);continue}break}while(!0)}function R1(){var n=Of.current;return Of.current=Uf,n===null?Uf:n}function vg(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||!(Po&268435455)&&!(vd&268435455)||cs(dn,vn)}function zf(n,e){var t=ct;ct|=2;var i=R1();(dn!==n||vn!==e)&&(Lr=null,mo(n,e));do try{pw();break}catch(r){C1(n,r)}while(!0);if(eg(),ct=t,Of.current=i,Zt!==null)throw Error(re(261));return dn=null,vn=0,rn}function pw(){for(;Zt!==null;)P1(Zt)}function mw(){for(;Zt!==null&&!BE();)P1(Zt)}function P1(n){var e=N1(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?L1(n):Zt=e,hg.current=null}function L1(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=lw(t,e),t!==null){t.flags&=32767,Zt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,Zt=null;return}}else if(t=aw(t,e,pi),t!==null){Zt=t;return}if(e=e.sibling,e!==null){Zt=e;return}Zt=e=n}while(e!==null);rn===0&&(rn=5)}function to(n,e,t){var i=vt,r=Xi.transition;try{Xi.transition=null,vt=1,gw(n,e,t,i)}finally{Xi.transition=r,vt=i}return null}function gw(n,e,t,i){do La();while(ds!==null);if(ct&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(KE(n,s),n===dn&&(Zt=dn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||uc||(uc=!0,I1(yf,function(){return La(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xi.transition,Xi.transition=null;var o=vt;vt=1;var a=ct;ct|=4,hg.current=null,cw(n,t),w1(t,n),OT(Tp),Mf=!!Ep,Tp=Ep=null,n.current=t,fw(t),HE(),ct=a,vt=o,Xi.transition=s}else n.current=t;if(uc&&(uc=!1,ds=n,Ff=r),s=n.pendingLanes,s===0&&(As=null),WE(t.stateNode),ii(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(kf)throw kf=!1,n=Wp,Wp=null,n;return Ff&1&&n.tag!==0&&La(),s=n.pendingLanes,s&1?n===Xp?ql++:(ql=0,Xp=n):ql=0,Ws(),null}function La(){if(ds!==null){var n=fy(Ff),e=Xi.transition,t=vt;try{if(Xi.transition=null,vt=16>n?16:n,ds===null)var i=!1;else{if(n=ds,ds=null,Ff=0,ct&6)throw Error(re(331));var r=ct;for(ct|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:jl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Se=d;else for(;Se!==null;){c=Se;var h=c.sibling,p=c.return;if(M1(c),c===u){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var _=n.current;for(Se=_;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_d(9,a)}}catch(w){Gt(a,a.return,w)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(ct=r,Ws(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(ud,n)}catch{}i=!0}return i}finally{vt=t,Xi.transition=e}}return!1}function __(n,e,t){e=ja(t,e),e=f1(n,e,1),n=ws(n,e,1),e=Yn(),n!==null&&(Bu(n,1,e),ii(n,e))}function Gt(n,e,t){if(n.tag===3)__(n,n,t);else for(;e!==null;){if(e.tag===3){__(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(As===null||!As.has(i))){n=ja(t,n),n=d1(e,n,1),e=ws(e,n,1),n=Yn(),e!==null&&(Bu(e,1,n),ii(e,n));break}}e=e.return}}function _w(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Yn(),n.pingedLanes|=n.suspendedLanes&t,dn===n&&(vn&t)===t&&(rn===4||rn===3&&(vn&130023424)===vn&&500>Xt()-mg?mo(n,0):pg|=t),ii(n,e)}function D1(n,e){e===0&&(n.mode&1?(e=Ju,Ju<<=1,!(Ju&130023424)&&(Ju=4194304)):e=1);var t=Yn();n=Yr(n,e),n!==null&&(Bu(n,e,t),ii(n,t))}function vw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),D1(n,t)}function xw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),D1(n,t)}var N1;N1=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ti.current)ei=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ei=!1,ow(n,e,t);ei=!!(n.flags&131072)}else ei=!1,Nt&&e.flags&1048576&&ky(e,Rf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nf(n,e),n=e.pendingProps;var r=Ga(e,Un.current);Pa(e,t),r=lg(null,e,i,n,r,t);var s=ug();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ni(i)?(s=!0,bf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ig(e),r.updater=gd,e.stateNode=r,r._reactInternals=e,Np(e,i,n,t),e=Op(null,e,i,!0,s,t)):(e.tag=0,Nt&&s&&Km(e),Hn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(nf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sw(i),n=er(i,n),r){case 0:e=Up(null,e,i,n,t);break e;case 1:e=a_(null,e,i,n,t);break e;case 11:e=s_(null,e,i,n,t);break e;case 14:e=o_(null,e,i,er(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),Up(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),a_(n,e,i,r,t);case 3:e:{if(g1(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Vy(n,e),Df(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ja(Error(re(423)),e),e=l_(n,e,i,t,r);break e}else if(i!==r){r=ja(Error(re(424)),e),e=l_(n,e,i,t,r);break e}else for(yi=Ts(e.stateNode.containerInfo.firstChild),Mi=e,Nt=!0,nr=null,t=Hy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Va(),i===r){e=qr(n,e,t);break e}Hn(n,e,i,t)}e=e.child}return e;case 5:return Wy(e),n===null&&Pp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,wp(i,r)?o=null:s!==null&&wp(i,s)&&(e.flags|=32),m1(n,e),Hn(n,e,o,t),e.child;case 6:return n===null&&Pp(e),null;case 13:return _1(n,e,t);case 4:return rg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Wa(e,null,i,t):Hn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),s_(n,e,i,r,t);case 7:return Hn(n,e,e.pendingProps,t),e.child;case 8:return Hn(n,e,e.pendingProps.children,t),e.child;case 12:return Hn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,bt(Pf,i._currentValue),i._currentValue=o,s!==null)if(lr(s.value,o)){if(s.children===r.children&&!ti.current){e=qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Lp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Lp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Hn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Pa(e,t),r=Yi(r),i=i(r),e.flags|=1,Hn(n,e,i,t),e.child;case 14:return i=e.type,r=er(i,e.pendingProps),r=er(i.type,r),o_(n,e,i,r,t);case 15:return h1(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:er(i,r),nf(n,e),e.tag=1,ni(i)?(n=!0,bf(e)):n=!1,Pa(e,t),c1(e,i,r),Np(e,i,r,t),Op(null,e,i,!0,n,t);case 19:return v1(n,e,t);case 22:return p1(n,e,t)}throw Error(re(156,e.tag))};function I1(n,e){return ay(n,e)}function yw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(n,e,t,i){return new yw(n,e,t,i)}function xg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sw(n){if(typeof n=="function")return xg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Fm)return 11;if(n===zm)return 14}return 2}function Cs(n,e){var t=n.alternate;return t===null?(t=Hi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function of(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")xg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ca:return go(t.children,r,s,e);case km:o=8,r|=8;break;case ip:return n=Hi(12,t,e,r|2),n.elementType=ip,n.lanes=s,n;case rp:return n=Hi(13,t,e,r),n.elementType=rp,n.lanes=s,n;case sp:return n=Hi(19,t,e,r),n.elementType=sp,n.lanes=s,n;case Wx:return xd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Gx:o=10;break e;case Vx:o=9;break e;case Fm:o=11;break e;case zm:o=14;break e;case os:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Hi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function go(n,e,t,i){return n=Hi(7,n,i,e),n.lanes=t,n}function xd(n,e,t,i){return n=Hi(22,n,i,e),n.elementType=Wx,n.lanes=t,n.stateNode={isHidden:!1},n}function lh(n,e,t){return n=Hi(6,n,null,e),n.lanes=t,n}function uh(n,e,t){return e=Hi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Mw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vd(0),this.expirationTimes=Vd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yg(n,e,t,i,r,s,o,a,l){return n=new Mw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ig(s),n}function Ew(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ua,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function U1(n){if(!n)return ks;n=n._reactInternals;e:{if(zo(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ni(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(ni(t))return Uy(n,t,e)}return e}function O1(n,e,t,i,r,s,o,a,l){return n=yg(t,i,!0,n,r,s,o,a,l),n.context=U1(null),t=n.current,i=Yn(),r=bs(t),s=Gr(i,r),s.callback=e??null,ws(t,s,r),n.current.lanes=r,Bu(n,r,i),ii(n,i),n}function yd(n,e,t,i){var r=e.current,s=Yn(),o=bs(r);return t=U1(t),e.context===null?e.context=t:e.pendingContext=t,e=Gr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ws(r,e,o),n!==null&&(ar(n,r,o,s),Jc(n,r,o)),o}function Bf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function v_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Sg(n,e){v_(n,e),(n=n.alternate)&&v_(n,e)}function Tw(){return null}var k1=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mg(n){this._internalRoot=n}Sd.prototype.render=Mg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));yd(n,e,null,null)};Sd.prototype.unmount=Mg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Lo(function(){yd(null,n,null,null)}),e[jr]=null}};function Sd(n){this._internalRoot=n}Sd.prototype.unstable_scheduleHydration=function(n){if(n){var e=py();n={blockedOn:null,target:n,priority:e};for(var t=0;t<us.length&&e!==0&&e<us[t].priority;t++);us.splice(t,0,n),t===0&&gy(n)}};function Eg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function x_(){}function ww(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Bf(o);s.call(u)}}var o=O1(e,i,n,0,null,!1,!1,"",x_);return n._reactRootContainer=o,n[jr]=o.current,gu(n.nodeType===8?n.parentNode:n),Lo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Bf(l);a.call(u)}}var l=yg(n,0,!1,null,null,!1,!1,"",x_);return n._reactRootContainer=l,n[jr]=l.current,gu(n.nodeType===8?n.parentNode:n),Lo(function(){yd(e,l,t,i)}),l}function Ed(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Bf(o);a.call(l)}}yd(e,o,n,r)}else o=ww(t,e,n,r,i);return Bf(o)}dy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ll(e.pendingLanes);t!==0&&(Gm(e,t|1),ii(e,Xt()),!(ct&6)&&(Ya=Xt()+500,Ws()))}break;case 13:Lo(function(){var i=Yr(n,1);if(i!==null){var r=Yn();ar(i,n,1,r)}}),Sg(n,1)}};Vm=function(n){if(n.tag===13){var e=Yr(n,134217728);if(e!==null){var t=Yn();ar(e,n,134217728,t)}Sg(n,134217728)}};hy=function(n){if(n.tag===13){var e=bs(n),t=Yr(n,e);if(t!==null){var i=Yn();ar(t,n,e,i)}Sg(n,e)}};py=function(){return vt};my=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};mp=function(n,e,t){switch(e){case"input":if(lp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=hd(i);if(!r)throw Error(re(90));jx(i),lp(i,r)}}}break;case"textarea":qx(n,t);break;case"select":e=t.value,e!=null&&Aa(n,!!t.multiple,e,!1)}};ty=gg;ny=Lo;var Aw={usingClientEntryPoint:!1,Events:[Gu,pa,hd,Jx,ey,gg]},yl={findFiberByHostInstance:uo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bw={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sy(n),n===null?null:n.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||Tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ud=cc.inject(bw),yr=cc}catch{}}Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;Ri.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eg(e))throw Error(re(200));return Ew(n,e,null,t)};Ri.createRoot=function(n,e){if(!Eg(n))throw Error(re(299));var t=!1,i="",r=k1;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yg(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,gu(n.nodeType===8?n.parentNode:n),new Mg(e)};Ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=sy(e),n=n===null?null:n.stateNode,n};Ri.flushSync=function(n){return Lo(n)};Ri.hydrate=function(n,e,t){if(!Md(e))throw Error(re(200));return Ed(null,n,e,!0,t)};Ri.hydrateRoot=function(n,e,t){if(!Eg(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=k1;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=O1(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,gu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Sd(e)};Ri.render=function(n,e,t){if(!Md(e))throw Error(re(200));return Ed(null,n,e,!1,t)};Ri.unmountComponentAtNode=function(n){if(!Md(n))throw Error(re(40));return n._reactRootContainer?(Lo(function(){Ed(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};Ri.unstable_batchedUpdates=gg;Ri.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Md(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return Ed(n,e,t,!1,i)};Ri.version="18.3.1-next-f1338f8080-20240426";function F1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(F1)}catch(n){console.error(n)}}F1(),Fx.exports=Ri;var Cw=Fx.exports,z1,y_=Cw;z1=y_.createRoot,y_.hydrateRoot;function Dr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function B1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},Tg,xn,It,Gi=1e8,Et=1/Gi,qp=Math.PI*2,Rw=qp/4,Pw=0,H1=Math.sqrt,Lw=Math.cos,Dw=Math.sin,hn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},wg=function(e){return typeof e>"u"},Tr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Ag=function(){return typeof window<"u"},fc=function(e){return Vt(e)||hn(e)},G1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,$p=/(?:-?\.?\d|\.)+/gi,V1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ch=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W1=/[+-]=-?[.\d]+/,X1=/[^,'"\[\]\s]+/gi,Nw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,dr,Kp,bg,bi={},Hf={},j1,Y1=function(e){return(Hf=$a(e,bi))&&ui},Cg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wu=function(e,t){return!t&&console.warn(e)},q1=function(e,t){return e&&(bi[e]=t)&&Hf&&(Hf[e]=t)||bi},Au=function(){return 0},Iw={suppressEvents:!0,isStart:!0,kill:!1},af={suppressEvents:!0,kill:!1},Uw={suppressEvents:!0},Rg={},Rs=[],Zp={},$1,gi={},fh={},S_=30,lf=[],Pg="",Lg=function(e){var t=e[0],i,r;if(Tr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=lf.length;r--&&!lf[r].targetTest(t););i=lf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xS(e[r],i)))||e.splice(r,1);return e},_o=function(e){return e._gsap||Lg(Vi(e))[0]._gsap},K1=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():wg(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},Da=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Ow=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Gf=function(){var e=Rs.length,t=Rs.slice(0),i,r;for(Zp={},Rs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Dg=function(e){return!!(e._initted||e._startAt||e.add)},Z1=function(e,t,i,r){Rs.length&&!xn&&Gf(),e.render(t,i,!!(xn&&t<0&&Dg(e))),Rs.length&&!xn&&Gf()},Q1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(X1).length<2?t:hn(e)?e.trim():e},J1=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},kw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},$a=function(e,t){for(var i in t)e[i]=t[i];return e},M_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Tr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Vf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},$l=function(e){var t=e.parent||kt,i=e.keyframes?kw(In(e.keyframes)):Ci;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Fw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},eS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Td=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},zw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qp=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(af):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Bw=function n(e){return!e||e._ts&&n(e.parent)},E_=function(e){return e._repeat?Ka(e._tTime,e=e.duration()+e._rDelay)*e:0},Ka=function(e,t){var i=Math.floor(e=Kt(e/t));return e&&i===e?i-1:i},Wf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wd=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Ad=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Kt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wd(e),i._dirty||vo(i,e)),e},tS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Wf(e.rawTime(),t),(!t._dur||Wu(0,t.totalDuration(),i)-t._tTime>Et)&&t.render(i,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Et}},gr=function(e,t,i,r){return t.parent&&Fs(t),t._start=Kt(($r(i)?i:i||e!==kt?Ni(e,i,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eS(e,t,"_first","_last",e._sort?"_start":0),Jp(t)||(e._recent=t),r||tS(e,t),e._ts<0&&Ad(e,e._tTime),e},nS=function(e,t){return(bi.ScrollTrigger||Cg("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},iS=function(e,t,i,r,s){if(Ig(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$1!==vi.frame)return Rs.push(e),e._lazy=[s,r],1},Hw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Jp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Hw(e)&&!(!e._initted&&Jp(e))||(e._ts<0||e._dp._ts<0)&&!Jp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Wu(0,e._tDur,t),c=Ka(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ka(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||r||e._zTime===Et||!t&&e._zTime){if(!e._initted&&iS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Et:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Qp(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fs(e,1),!i&&!xn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Za=function(e,t,i,r){var s=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Kt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ad(e,e._tTime=e._tDur*a),e.parent&&wd(e),i||vo(e.parent,e),e},T_=function(e){return e instanceof Xn?vo(e):Za(e,e._dur)},Ww={_start:0,endTime:Au,totalDuration:Au},Ni=function n(e,t,i){var r=e.labels,s=e._recent||Ww,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,u;return hn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(In(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Kl=function(e,t,i){var r=$r(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},Wu=function(e,t,i){return i<e?e:i>t?t:i},Ln=function(e,t){return!hn(e)||!(t=Nw.exec(e))?"":t[1]},Xw=function(e,t,i){return Xs(i,function(r){return Wu(e,t,r)})},em=[].slice,rS=function(e,t){return e&&Tr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Tr(e[0]))&&!e.nodeType&&e!==dr},jw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return hn(r)&&!t||rS(r,1)?(s=i).push.apply(s,Vi(r)):i.push(r)})||i},Vi=function(e,t,i){return It&&!t&&It.selector?It.selector(e):hn(e)&&!i&&(Kp||!Qa())?em.call((t||bg).querySelectorAll(e),0):In(e)?jw(e,i):rS(e)?em.call(e,0):e?[e]:[]},tm=function(e){return e=Vi(e)[0]||wu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vi(t,i.querySelectorAll?i:i===e?wu("Invalid scope")||bg.createElement("div"):e)}},sS=function(e){return e.sort(function(){return .5-Math.random()})},oS=function(e){if(Vt(e))return e;var t=Tr(e)?e:{each:e},i=xo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return hn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var g=(x||t).length,m=o[g],f,_,v,y,w,T,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!S){for(M=-Gi;M<(M=x[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],f=l?Math.min(S,g)*c-.5:r%S,_=S===Gi?0:l?g*d/S-.5:r/S|0,M=0,P=Gi,T=0;T<g;T++)v=T%S-f,y=_-(T/S|0),m[T]=w=u?Math.abs(u==="y"?y:v):H1(v*v+y*y),w>M&&(M=w),w<P&&(P=w);r==="random"&&sS(m),m.max=M-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ln(t.amount||t.each)||0,i=i&&g<0?gS(i):i}return g=(m[h]-m.min)/m.max||0,Kt(m.b+(i?i(g):g)*m.v)+m.u}},nm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Kt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+($r(i)?0:Ln(i))}},aS=function(e,t){var i=In(e),r,s;return!i&&Tr(e)&&(r=i=e.radius||Gi,e.values?(e=Vi(e.values),(s=!$r(e[0]))&&(r*=r)):e=nm(e.increment)),Xs(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Gi,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||$r(o)?c:c+Ln(o)}:nm(e))},lS=function(e,t,i,r){return Xs(In(e)?!t:i===!0?!!(i=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Yw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},qw=function(e,t){return function(i){return e(parseFloat(i))+(t||Ln(i))}},$w=function(e,t,i){return cS(e,t,0,1,i)},uS=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},Kw=function n(e,t,i){var r=t-e;return In(e)?uS(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},Zw=function n(e,t,i){var r=t-e,s=r*2;return In(e)?uS(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},bu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?X1:$p),i+=e.substr(t,r-t)+lS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},cS=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},Qw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=hn(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var g=Math.min(h,~~x);return c[g](x-g)},i=t}else r||(e=$a(In(e)?[]:{},e));if(!c){for(l in t)Ng.call(a,e,l,"get",t[l]);s=function(x){return kg(x,a)||(o?e.p:e)}}}return Xs(i,s)},w_=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=It,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Rs.length&&Gf(),a&&(It=a),c=l?s.apply(u,l):s.call(u),It=o,c},Nl=function(e){return Fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&Si(e,"onInterrupt"),e},Ma,fS=[],dS=function(e){if(e)if(e=!e.name&&e.default||e,Ag()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Au,render:kg,add:Ng,kill:p2,modifier:h2,rawVars:0},o={targetTest:0,get:0,getSetter:Og,aliases:{},register:0};if(Qa(),e!==r){if(gi[t])return;Ci(r,Ci(Vf(e,s),o)),$a(r.prototype,$a(s,Vf(e,o))),gi[r.prop=t]=r,e.targetTest&&(lf.push(r),Rg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}q1(t,r),e.register&&e.register(ui,r,oi)}else fS.push(e)},Mt=255,Il={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},dh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Mt+.5|0},hS=function(e,t,i){var r=e?$r(e)?[e>>16,e>>8&Mt,e&Mt]:0:Il.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Il[e])r=Il[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Mt,r&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match($p),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=dh(l+1/3,s,o),r[1]=dh(l,s,o),r[2]=dh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(V1),i&&r.length<4&&(r[3]=1),r}else r=e.match($p)||Il.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Mt,o=r[1]/Mt,a=r[2]/Mt,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},pS=function(e){var t=[],i=[],r=-1;return e.split(Ps).forEach(function(s){var o=s.match(Sa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},A_=function(e,t,i){var r="",s=(e+r).match(Ps),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=hS(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=pS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ps,"1").split(Sa),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ps),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ps=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Il)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Jw=/hsl[a]?\(/,mS=function(e){var t=e.join(" "),i;if(Ps.lastIndex=0,Ps.test(t))return i=Jw.test(t),e[1]=A_(e[1],i),e[0]=A_(e[0],i,pS(e[1])),!0},Cu,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function g(m){var f=n()-r,_=m===!0,v,y,w,T;if((f>e||f<0)&&(i+=f-t),r+=f,w=r-i,v=w-o,(v>0||_)&&(T=++d.frame,h=w-d.time*1e3,d.time=w=w/1e3,o+=v+(v>=s?4:s-v),y=1),_||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](w,h,T,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){j1&&(!Kp&&Ag()&&(dr=Kp=window,bg=dr.document||{},bi.gsap=ui,(dr.gsapVersions||(dr.gsapVersions=[])).push(ui.version),Y1(Hf||dr.GreenSockGlobals||!dr.gsap&&dr||{}),fS.forEach(dS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Cu=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Cu=0,u=Au},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,_){var v=f?function(y,w,T,M){m(y,w,T,M),d.remove(v)}:m;return d.remove(m),a[_?"unshift":"push"](v),Qa(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Qa=function(){return!Cu&&vi.wake()},lt={},e2=/^[\d.\-M][\d.\-,\s]/,t2=/["']/g,n2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(t2,"").trim():+u,r=l.substr(a+1).trim();return t},i2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},r2=function(e){var t=(e+"").split("("),i=lt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[n2(t[1])]:i2(e).split(",").map(Q1)):lt._CE&&e2.test(e)?lt._CE("",e):i},gS=function(e){return function(t){return 1-e(1-t)}},_S=function n(e,t){for(var i=e._first,r;i;)i instanceof Xn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},xo=function(e,t){return e&&(Vt(e)?e:lt[e]||r2(e))||t},Bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){lt[a]=bi[a]=s,lt[o=a.toLowerCase()]=i;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},vS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/qp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Dw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:vS(a);return s=qp/s,l.config=function(u,c){return n(e,u,c)},l},ph=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:vS(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Bo("Elastic",hh("in"),hh("out"),hh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Bo("Circ",function(n){return-(H1(1-n*n)-1)});Bo("Sine",function(n){return n===1?1:-Lw(n*Rw)+1});Bo("Back",ph("in"),ph("out"),ph());lt.SteppedEase=lt.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((r*Wu(0,o,a)|0)+s)*i}}};qa.ease=lt["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Pg+=n+","+n+"Params,"});var xS=function(e,t){this.id=Pw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:K1,this.set=t?t.getSetter:Og},Ru=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Za(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Cu||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Za(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Qa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ad(this,i),!s._dp||s.parent||tS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Et||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Z1(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+E_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+E_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ka(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Wf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Et?0:this._rts,this.totalTime(Wu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),wd(this),zw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Uw);var r=xn;return xn=i,Dg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,T_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,T_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ni(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Et),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Vt(i)?i:J1,a=function(){var u=r.then;r.then=null,Vt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Nl(this)},n}();Ci(Ru.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Xn=function(n){B1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),kt&&gr(i.parent||kt,Dr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&nS(Dr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Kl(0,arguments,this),this},t.from=function(r,s,o){return Kl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Kl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,$l(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(r,s,Ni(this,o),1),this},t.call=function(r,s,o){return gr(this,$t.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new $t(r,o,Ni(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,$l(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,$l(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Kt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,g,m,f,_,v,y,w,T,M;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,f=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Kt(c%m),c===l?(g=this._repeat,h=u):(w=Kt(c/m),g=~~w,g&&g===w&&(h=u,g--),h>u&&(h=u)),w=Ka(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),T&&g&1&&(h=u-h,M=1),g!==w&&!this._lock){var P=T&&w&1,S=P===(T&&g&1);if(g<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Kt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;_S(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Vw(this,Kt(a),Kt(h)),_&&(c-=h-(h=_._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!s&&!w&&(Si(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){_=0,x&&(c+=this._zTime=-Et);break}}p=x}else{p=this._last;for(var E=r<0?r:h;p;){if(x=p._prev,(p._act||E<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||xn&&Dg(p)),h!==this._time||!this._ts&&!f){_=0,x&&(c+=this._zTime=E?-Et:Et);break}}p=x}}if(_&&!s&&(this.pause(),_.render(h>=a?0:-Et)._zTime=h>=a?1:-1,this._ts))return this._start=y,wd(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Fs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if($r(s)||(s=Ni(this,s,r)),!(r instanceof Ru)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(hn(r))return this.addLabel(r,s);if(Vt(r))r=$t.delayedCall(0,r);else return this}return this!==r?gr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof $t?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return hn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&Td(this,r),r===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ni(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=$t.delayedCall(0,s||Au,o);return a.data="isPause",this._hasPause=1,gr(this,a,Ni(this,r))},t.removePause=function(r){var s=this._first;for(r=Ni(this,r);s;)s._start===r&&s.data==="isPause"&&Fs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)hs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Vi(r),l=this._first,u=$r(s),c;l;)l instanceof $t?Ow(l._targets,a)&&(u?(!hs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ni(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=$t.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Za(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Ni(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),w_(this,Ni(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),w_(this,Ni(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return vo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Za(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(Z1(kt,Wf(r,kt)),$1=vi.frame),vi.frame>=S_){S_+=Ei.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Ei.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Ru);Ci(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var s2=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,wS,null,s),u=0,c=0,d,h,p,x,g,m,f,_;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=bu(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),h=i.match(ch)||[];d=ch.exec(r);)x=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:x.charAt(1)==="="?Da(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=ch.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(W1.test(r)||f)&&(l.e=0),this._pt=l,l},Ng=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:Vt(d)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Vt(d)?u?c2:ES:Ug,x;if(hn(r)&&(~r.indexOf("random(")&&(r=bu(r)),r.charAt(1)==="="&&(x=Da(h,r)+(Ln(h)||0),(x||x===0)&&(r=x))),!c||h!==r||im)return!isNaN(h*r)&&r!==""?(x=new oi(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?d2:TS,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&Cg(t,r),s2.call(this,e,t,h,r,p,l||Ei.stringFilter,u))},o2=function(e,t,i,r,s){if(Vt(e)&&(e=Zl(e,s,t,i,r)),!Tr(e)||e.style&&e.nodeType||In(e)||G1(e))return hn(e)?Zl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Zl(e[a],s,t,i,r);return o},yS=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:o2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ma))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},hs,im,Ig=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,g=e._startAt,m=e._targets,f=e.parent,_=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!Tg,y=e.timeline,w,T,M,P,S,E,O,I,K,L,k,B,Y;if(y&&(!h||!s)&&(s="none"),e._ease=xo(s,qa.ease),e._yEase=d?gS(xo(d===!0?s:d,qa.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(I=m[0]?_o(m[0]).harness:0,B=I&&r[I.prop],w=Vf(r,Rg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&x?af:Iw),g._lazy=0),o){if(Fs(e._startAt=$t.set(m,Ci({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!p)&&e._startAt.revert(af),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!g){if(t&&(a=!1),M=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ri(l),immediateRender:a,stagger:0,parent:f},w),B&&(M[I.prop]=B),Fs(e._startAt=$t.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(af):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&ri(l)||l&&!x,T=0;T<m.length;T++){if(S=m[T],O=S._gsap||Lg(m)[T]._gsap,e._ptLookup[T]=L={},Zp[O.id]&&Rs.length&&Gf(),k=_===m?T:_.indexOf(S),I&&(K=new I).init(S,B||w,e,k,_)!==!1&&(e._pt=P=new oi(e._pt,S,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(U){L[U]=P}),K.priority&&(E=1)),!I||B)for(M in w)gi[M]&&(K=yS(M,w,e,k,S,_))?K.priority&&(E=1):L[M]=P=Ng.call(e,S,M,"get",w[M],k,_,0,r.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),v&&e._pt&&(hs=e,kt.killTweensOf(S,L,e.globalTime(t)),Y=!e.parent,hs=0),e._pt&&l&&(Zp[O.id]=1)}E&&AS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&y.render(Gi,!0,!0)},a2=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return im=1,e.vars[t]="+=0",Ig(e,a),im=0,l?wu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Wt(i)+Ln(d.e)),d.b&&(d.b=c.s+Ln(d.b))},l2=function(e,t){var i=e[0]?_o(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=$a({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},u2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Zl=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):hn(e)&&~e.indexOf("random(")?bu(e):e},SS=Pg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",MS={};si(SS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return MS[n]=1});var $t=function(n){B1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:$l(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,_=r.parent||kt,v=(In(i)||G1(i)?$r(i[0]):"length"in r)?[i]:Vi(i),y,w,T,M,P,S,E,O;if(a._targets=v.length?Lg(v):wu("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||fc(u)||fc(c)){if(r=a.vars,y=a.timeline=new Xn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Dr(a),y._start=0,h||fc(u)||fc(c)){if(M=v.length,E=h&&oS(h),Tr(h))for(P in h)~SS.indexOf(P)&&(O||(O={}),O[P]=h[P]);for(w=0;w<M;w++)T=Vf(r,MS),T.stagger=0,f&&(T.yoyoEase=f),O&&$a(T,O),S=v[w],T.duration=+Zl(u,Dr(a),w,S,v),T.delay=(+Zl(c,Dr(a),w,S,v)||0)-a._delay,!h&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(S,T,E?E(w,S,v):0),y._ease=lt.none;y.duration()?u=c=0:a.timeline=0}else if(x){$l(Ci(y.vars.defaults,{ease:"none"})),y._ease=xo(x.ease||r.ease||"none");var I=0,K,L,k;if(In(x))x.forEach(function(B){return y.to(v,B,">")}),y.duration();else{T={};for(P in x)P==="ease"||P==="easeEach"||u2(P,x[P],T,x.easeEach);for(P in T)for(K=T[P].sort(function(B,Y){return B.t-Y.t}),I=0,w=0;w<K.length;w++)L=K[w],k={ease:L.e,duration:(L.t-(w?K[w-1].t:0))/100*u},k[P]=L.v,y.to(v,k,I),I+=k.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Tg&&(hs=Dr(a),kt.killTweensOf(v),hs=0),gr(_,Dr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===Kt(_._time)&&ri(d)&&Bw(Dr(a))&&_.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-c)||0)),m&&nS(Dr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Et&&!c?l:r<Et?0:r,h,p,x,g,m,f,_,v,y;if(!u)Gw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=Kt(d%g),d===l?(x=this._repeat,h=u):(m=Kt(d/g),x=~~m,x&&x===m?(h=u,x--):h>u&&(h=u)),f=this._yoyo&&x&1,f&&(y=this._yEase,h=u-h),m=Ka(this._tTime,g),h===a&&!o&&this._initted&&x===m)return this._tTime=d,this;x!==m&&(v&&this._yEase&&_S(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Kt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(iS(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(h/u),this._from&&(this.ratio=_=1-_),!a&&d&&!s&&!m&&(Si(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Qp(this,r,s,o),Si(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Qp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fs(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Cu||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ig(this,u),c=this._ease(u/this._dur),a2(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ad(this,0),this.parent||eS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Nl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,hs&&hs.vars.overwrite!==!0)._first||Nl(this),this.parent&&o!==this.timeline.totalDuration()&&Za(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Vi(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,g,m,f;if((!s||s==="all")&&Fw(a,l))return s==="all"&&(this._pt=0),Nl(this);for(d=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},si(s,function(_){return g[_]=1}),s=g),s=l2(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(g in x)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Td(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Nl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Kl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Kl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Ru);Ci($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){$t[n]=function(){var e=new Xn,t=em.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Ug=function(e,t,i){return e[t]=i},ES=function(e,t,i){return e[t](i)},c2=function(e,t,i,r){return e[t](r.fp,i)},f2=function(e,t,i){return e.setAttribute(t,i)},Og=function(e,t){return Vt(e[t])?ES:wg(e[t])&&e.setAttribute?f2:Ug},TS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},kg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},h2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},p2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Td(this,t,"_pt"):t.dep||(i=1),t=r;return!i},m2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},AS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||TS,this.d=l||this,this.set=u||Ug,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=m2,this.m=i,this.mt=s,this.tween=r},n}();si(Pg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Rg[n]=1});bi.TweenMax=bi.TweenLite=$t;bi.TimelineLite=bi.TimelineMax=Xn;kt=new Xn({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=mS;var yo=[],uf={},g2=[],b_=0,_2=0,mh=function(e){return(uf[e]||g2).map(function(t){return t()})},rm=function(){var e=Date.now(),t=[];e-b_>2&&(mh("matchMediaInit"),yo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=dr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),mh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),b_=e,mh("matchMedia"))},bS=function(){function n(t,i){this.selector=i&&tm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=_2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=It,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=tm(s)),It=o,d=r.apply(o,arguments),Vt(d)&&o._r.push(d),It=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=It;It=null,i(this),It=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof $t&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Xn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof $t)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=yo.length;o--;)yo[o].id===this.id&&yo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),v2=function(){function n(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Tr(i)||(i={matches:i});var o=new bS(0,s||this.scope),a=o.conditions={},l,u,c;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=dr.matchMedia(i[u]),l&&(yo.indexOf(o)<0&&yo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(rm):l.addEventListener("change",rm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Xf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return dS(r)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){hn(e)&&(e=Vi(e)[0]);var s=_o(e||{}).get,o=i?J1:Q1;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Vi(e),e.length>1){var r=e.map(function(c){return ui.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=gi[t],a=_o(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ma._pt=0,d.init(e,i?c+i:c,Ma,0,[e]),d.render(1,d),Ma._pt&&kg(1,Ma)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ui.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xo(e.ease,qa.ease)),M_(qa,e||{})},config:function(e){return M_(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!bi[a]&&wu(t+" effect requires "+a+" plugin.")}),fh[t]=function(a,l,u){return i(Vi(a),Ci(l||{},s),u)},o&&(Xn.prototype[t]=function(a,l,u){return this.add(fh[t](a,Tr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){lt[e]=xo(t)},parseEase:function(e,t){return arguments.length?xo(e,t):lt},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]))&&gr(i,r,r._start-r._delay),r=s;return gr(kt,i,0),i},context:function(e,t){return e?new bS(e,t):It},matchMedia:function(e){return new v2(e)},matchMediaRefresh:function(){return yo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||rm()},addEventListener:function(e,t){var i=uf[e]||(uf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=uf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Kw,wrapYoyo:Zw,distribute:oS,random:lS,snap:aS,normalize:$w,getUnit:Ln,clamp:Xw,splitColor:hS,toArray:Vi,selector:tm,mapRange:cS,pipe:Yw,unitize:qw,interpolate:Qw,shuffle:sS},install:Y1,effects:fh,ticker:vi,updateRoot:Xn.updateRoot,plugins:gi,globalTimeline:kt,core:{PropTween:oi,globals:q1,Tween:$t,Timeline:Xn,Animation:Ru,getCache:_o,_removeLinkedListItem:Td,reverting:function(){return xn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Tg=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Xf[n]=$t[n]});vi.add(Xn.updateRoot);Ma=Xf.to({},{duration:0});var x2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},y2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=x2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},gh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(hn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}y2(a,s)}}}},ui=Xf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},gh("roundProps",nm),gh("modifiers"),gh("snap",aS))||Xf;$t.version=Xn.version=ui.version="3.13.0";j1=1;Ag()&&Qa();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var C_,ps,Na,Fg,ho,R_,zg,S2=function(){return typeof window<"u"},Kr={},no=180/Math.PI,Ia=Math.PI/180,Go=Math.atan2,P_=1e8,Bg=/([A-Z])/g,M2=/(left|right|width|margin|padding|x)/i,E2=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},w2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},CS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},RS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b2=function(e,t,i){return e.style[t]=i},C2=function(e,t,i){return e.style.setProperty(t,i)},R2=function(e,t,i){return e._gsap[t]=i},P2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},L2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},D2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",ai=Ft+"Origin",N2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ir(r,a)}):this.tfm[e]=o.x?o[e]:Ir(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},PS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},I2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zg(),(!s||!s.isStart)&&!i[Ft]&&(PS(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},LS=function(e,t){var i={target:e,props:[],revert:I2,save:N2};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},DS,om=function(e,t){var i=ps.createElementNS?ps.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ps.createElement(e);return i&&i.style?i:ps.createElement(e)},Wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Bg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ja(t)||t,1)||""},L_="O,Moz,ms,Ms,Webkit".split(","),Ja=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(L_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?L_[o]:"")+e},am=function(){S2()&&window.document&&(C_=window,ps=C_.document,Na=ps.documentElement,ho=om("div")||{style:{}},om("div"),Ft=Ja(Ft),ai=Ft+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",DS=!!Ja("perspective"),zg=ui.core.reverting,Fg=1)},D_=function(e){var t=e.ownerSVGElement,i=om("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Na.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Na.removeChild(i),s},N_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},NS=function(e){var t,i;try{t=e.getBBox()}catch{t=D_(e),i=1}return t&&(t.width||t.height)||i||(t=D_(e)),t&&!t.width&&!t.x&&!t.y?{x:+N_(e,["x","cx","x1"])||0,y:+N_(e,["y","cy","y1"])||0,width:0,height:0}:t},IS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&NS(e))},Do=function(e,t){if(t){var i=e.style,r;t in Kr&&t!==ai&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Bg,"-$1").toLowerCase())):i.removeAttribute(t)}},ms=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?RS:CS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},I_={deg:1,rad:1,turn:1},U2={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=M2.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,g,m,f;if(r===o||!s||I_[r]||I_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&IS(e),(p||o==="%")&&(Kr[t]||~t.indexOf("adius")))return x=f?e.getBBox()[l?"width":"height"]:e[c],Wt(p?s/x*d:s/100*x);if(a[l?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ps||!g.appendChild)&&(g=ps.body),m=g._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Wt(s/m.width*d);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=d+r,x=e[c],_?e.style[t]=_:Do(e,t)}else(p||o==="%")&&!U2[Wi(g,"display")]&&(a.position=Wi(e,"position")),g===e&&(a.position="static"),g.appendChild(ho),x=ho[c],g.removeChild(ho),a.position="absolute";return l&&p&&(m=_o(g),m.time=vi.time,m.width=g[c]),Wt(h?x*s/d:x&&s?d/x*s:0)},Ir=function(e,t,i,r){var s;return Fg||am(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=Lu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yf(Wi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=jf[t]&&jf[t](e,t,i)||Wi(e,t)||K1(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},O2=function(e,t,i,r){if(!i||i==="none"){var s=Ja(t,e,1),o=s&&Wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Wi(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,wS),l=0,u=0,c,d,h,p,x,g,m,f,_,v,y,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Wi(e,t)||r,g?e.style[t]=g:Do(e,t)),c=[i,r],mS(c),i=c[0],r=c[1],h=i.match(Sa)||[],w=r.match(Sa)||[],w.length){for(;d=Sa.exec(r);)m=d[0],_=r.substring(l,d.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Da(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=Sa.lastIndex-v.length,v||(v=v||Ei.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=zs(e,t,g,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?RS:CS;return W1.test(r)&&(a.e=0),this._pt=a,a},U_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},k2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=U_[i]||i,t[1]=U_[r]||r,t.join(" ")},F2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Kr[a]&&(l=1,a=a==="transformOrigin"?ai:Ft),Do(i,a);l&&(Do(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Lu(i,1),o.uncache=1,PS(r)))}},jf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,F2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Pu=[1,0,0,1,0,0],US={},OS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},O_=function(e){var t=Wi(e,Ft);return OS(t)?Pu:t.substr(7).match(V1).map(Wt)},Hg=function(e,t){var i=e._gsap||_o(e),r=e.style,s=O_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pu:s):(s===Pu&&!e.offsetParent&&e!==Na&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Na.appendChild(e)),s=O_(e),l?r.display=l:Do(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Na.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Hg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],g=l[2],m=l[3],f=l[4],_=l[5],v=t.split(" "),y=parseFloat(v[0])||0,w=parseFloat(v[1])||0,T,M,P,S;i?l!==Pu&&(M=p*m-x*g)&&(P=y*(m/M)+w*(-g/M)+(g*_-m*f)/M,S=y*(-x/M)+w*(p/M)-(p*_-x*f)/M,y=P,w=S):(T=NS(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(v[1]||v[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(f=y-u,_=w-c,a.xOffset=d+(f*p+_*g)-f,a.yOffset=h+(f*x+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(ms(o,a,"xOrigin",u,y),ms(o,a,"yOrigin",c,w),ms(o,a,"xOffset",d,a.xOffset),ms(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Lu=function(e,t){var i=e._gsap||new xS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Wi(e,ai)||"0",c,d,h,p,x,g,m,f,_,v,y,w,T,M,P,S,E,O,I,K,L,k,B,Y,U,z,C,Z,J,$,Q,se;return c=d=h=g=m=f=_=v=y=0,p=x=1,i.svg=!!(e.getCTM&&IS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=Hg(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),lm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Pu&&(O=M[0],I=M[1],K=M[2],L=M[3],c=k=M[4],d=B=M[5],M.length===6?(p=Math.sqrt(O*O+I*I),x=Math.sqrt(L*L+K*K),g=O||I?Go(I,O)*no:0,_=K||L?Go(K,L)*no+g:0,_&&(x*=Math.abs(Math.cos(_*Ia))),i.svg&&(c-=w-(w*O+T*K),d-=T-(w*I+T*L))):(se=M[6],$=M[7],C=M[8],Z=M[9],J=M[10],Q=M[11],c=M[12],d=M[13],h=M[14],P=Go(se,J),m=P*no,P&&(S=Math.cos(-P),E=Math.sin(-P),Y=k*S+C*E,U=B*S+Z*E,z=se*S+J*E,C=k*-E+C*S,Z=B*-E+Z*S,J=se*-E+J*S,Q=$*-E+Q*S,k=Y,B=U,se=z),P=Go(-K,J),f=P*no,P&&(S=Math.cos(-P),E=Math.sin(-P),Y=O*S-C*E,U=I*S-Z*E,z=K*S-J*E,Q=L*E+Q*S,O=Y,I=U,K=z),P=Go(I,O),g=P*no,P&&(S=Math.cos(P),E=Math.sin(P),Y=O*S+I*E,U=k*S+B*E,I=I*S-O*E,B=B*S-k*E,O=Y,k=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=Wt(Math.sqrt(O*O+I*I+K*K)),x=Wt(Math.sqrt(B*B+se*se)),P=Go(k,B),_=Math.abs(P)>2e-4?P*no:0,y=Q?1/(Q<0?-Q:Q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!OS(Wi(e,Ft)),Y&&e.setAttribute("transform",Y))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Wt(p),i.scaleY=Wt(x),i.rotation=Wt(g)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(f)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=Yf(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?B2:DS?kS:z2,i.uncache=0,i},Yf=function(e){return(e=e.split(" "))[0]+" "+e[1]},_h=function(e,t,i){var r=Ln(t);return Wt(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},z2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kS(e,t)},qs="0deg",Sl="0px",$s=") ",kS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,_=i.target,v=i.zOrigin,y="",w=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==qs||c!==qs)){var T=parseFloat(c)*Ia,M=Math.sin(T),P=Math.cos(T),S;T=parseFloat(d)*Ia,S=Math.cos(T),o=_h(_,o,M*S*-v),a=_h(_,a,-Math.sin(T)*-v),l=_h(_,l,P*S*-v+v)}m!==Sl&&(y+="perspective("+m+$s),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==Sl||a!==Sl||l!==Sl)&&(y+=l!==Sl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$s),u!==qs&&(y+="rotate("+u+$s),c!==qs&&(y+="rotateY("+c+$s),d!==qs&&(y+="rotateX("+d+$s),(h!==qs||p!==qs)&&(y+="skew("+h+", "+p+$s),(x!==1||g!==1)&&(y+="scale("+x+", "+g+$s),_.style[Ft]=y||"translate(0, 0)"},B2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,_=i.forceCSS,v=parseFloat(o),y=parseFloat(a),w,T,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ia,u*=Ia,w=Math.cos(l)*d,T=Math.sin(l)*d,M=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Ia,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=Wt(w),T=Wt(T),M=Wt(M),P=Wt(P)):(w=d,P=h,T=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=zs(p,"x",o,"px"),y=zs(p,"y",a,"px")),(x||g||m||f)&&(v=Wt(v+x-(x*w+g*M)+m),y=Wt(y+g-(x*T+g*P)+f)),(r||s)&&(S=p.getBBox(),v=Wt(v+r/100*S.width),y=Wt(y+s/100*S.height)),S="matrix("+w+","+T+","+M+","+P+","+v+","+y+")",p.setAttribute("transform",S),_&&(p.style[Ft]=S)},H2=function(e,t,i,r,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*P_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*P_)%o-~~(u/o)*o)),e._pt=h=new oi(e._pt,t,i,r,u,T2),h.e=c,h.u="deg",e._props.push(i),h},k_=function(e,t){for(var i in t)e[i]=t[i];return e},G2=function(e,t,i){var r=k_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Lu(i,1),Do(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Lu(i,1),o[Ft]=u);for(l in Kr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Ln(u),x=Ln(c),d=p!==x?zs(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new oi(e._pt,a,l,d,h-d,sm),e._pt.u=x||0,e._props.push(l));k_(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});jf[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return Ir(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,g){return p[x]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var FS={name:"css",register:am,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,g,m,f,_,v,y,w,T,M,P;Fg||am(),this.styles=this.styles||LS(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(gi[g]&&yS(g,t,i,r,e,s)))){if(p=typeof c,x=jf[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=bu(c)),x)x(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ps.lastIndex=0,Ps.test(u)||(m=Ln(u),f=Ln(c)),f?m!==f&&(u=zs(e,g,u,f)+f):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],hn(u)&&~u.indexOf("random(")&&(u=bu(u)),Ln(u+"")||u==="auto"||(u+=Ei.units[g]||Ln(Ir(e,g))||""),(u+"").charAt(1)==="="&&(u=Ir(e,g))):u=Ir(e,g),h=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),d=parseFloat(c),g in _r&&(g==="autoAlpha"&&(h===1&&Ir(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),ms(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=_r[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Kr,v){if(this.styles.save(g),p==="string"&&c.substring(0,6)==="var(--"&&(c=Wi(e,c.substring(4,c.indexOf(")"))),d=parseFloat(c)),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Lu(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new oi(this._pt,a,Ft,0,1,w.renderTransform,w,0,-1),y.dep=1),g==="scale")this._pt=new oi(this._pt,w,"scaleY",w.scaleY,(_?Da(w.scaleY,_+d):d)-w.scaleY||0,sm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ai,0,a[ai]),c=k2(c),w.svg?lm(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==w.zOrigin&&ms(this,w,"zOrigin",w.zOrigin,f),ms(this,a,g,Yf(u),Yf(c)));continue}else if(g==="svgOrigin"){lm(e,c,1,T,0,this);continue}else if(g in US){H2(this,w,g,h,_?Da(h,_+c):c);continue}else if(g==="smoothOrigin"){ms(this,w,"smooth",w.smooth,c);continue}else if(g==="force3D"){w[g]=c;continue}else if(g==="transform"){G2(this,c,e);continue}}else g in a||(g=Ja(g)||g);if(v||(d||d===0)&&(h||h===0)&&!E2.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=Ln(c)||(g in Ei.units?Ei.units[g]:m),m!==f&&(h=zs(e,g,u,f)),this._pt=new oi(this._pt,v?w:a,g,h,(_?Da(h,_+d):d)-h,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?A2:sm),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=w2);else if(g in a)O2.call(this,e,g,u,_?_+c:c);else if(g in e)this.add(e,g,u||e[g],_?_+c:c,r,s);else if(g!=="parseTransform"){Cg(g,c);continue}v||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}M&&AS(this)},render:function(e,t){if(t.tween._time||!zg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ir,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in Kr&&t!==ai&&(e._gsap.x||Ir(e,"x"))?i&&R_===i?t==="scale"?P2:R2:(R_=i||{})&&(t==="scale"?L2:D2):e.style&&!wg(e.style[t])?b2:~t.indexOf("-")?C2:Og(e,t)},core:{_removeProperty:Do,_getMatrix:Hg}};ui.utils.checkPrefix=Ja;ui.core.getStyleSaver=LS;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){Kr[s]=1});si(e,function(s){Ei.units[s]="deg",US[s]=1}),_r[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});ui.registerPlugin(FS);var yn=ui.registerPlugin(FS)||ui;yn.core.Tween;function V2(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function W2(n,e,t){return e&&V2(n.prototype,e),n}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gn,cf,xi,gs,_s,Ua,zS,io,Ql,BS,zr,Ji,HS,GS=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},VS=1,Ea=[],rt=[],Mr=[],Jl=Date.now,um=function(e,t){return t},X2=function(){var e=Ql.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,Mr),rt=i,Mr=r,um=function(o,a){return t[o](a)}},Ls=function(e,t){return~Mr.indexOf(e)&&Mr[Mr.indexOf(e)+1][t]},eu=function(e){return!!~BS.indexOf(e)},Fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},kn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},dc="scrollLeft",hc="scrollTop",cm=function(){return zr&&zr.isPressed||rt.cache++},qf=function(e,t){var i=function r(s){if(s||s===0){VS&&(xi.history.scrollRestoration="manual");var o=zr&&zr.isPressed;s=r.v=Math.round(s)||(zr&&zr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&um("ss",s)}else(t||rt.cache!==r.cacheID||um("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},jn={s:dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:qf(function(n){return arguments.length?xi.scrollTo(n,nn.sc()):xi.pageXOffset||gs[dc]||_s[dc]||Ua[dc]||0})},nn={s:hc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:qf(function(n){return arguments.length?xi.scrollTo(jn.sc(),n):xi.pageYOffset||gs[hc]||_s[hc]||Ua[hc]||0})},Zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},j2=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;eu(e)&&(e=gs.scrollingElement||_s);var s=rt.indexOf(e),o=r===nn.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Fn(e,"scroll",cm);var a=rt[s+o],l=a||(rt[s+o]=qf(Ls(e,i),!0)||(eu(e)?r:qf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},fm=function(e,t,i){var r=e,s=e,o=Jl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(x,g){var m=Jl();g||m-o>l?(s=r,r=x,a=o,o=m):i?r+=x:r=s+(x-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},h=function(x){var g=a,m=s,f=Jl();return(x||x===0)&&x!==r&&c(x),o===a||f-a>u?0:(r+(i?m:-m))/((i?f:o)-g)*1e3};return{update:c,reset:d,getVelocity:h}},Ml=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},F_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},WS=function(){Ql=gn.core.globals().ScrollTrigger,Ql&&Ql.core&&X2()},XS=function(e){return gn=e||GS(),!cf&&gn&&typeof document<"u"&&document.body&&(xi=window,gs=document,_s=gs.documentElement,Ua=gs.body,BS=[xi,gs,_s,Ua],gn.utils.clamp,HS=gn.core.context||function(){},io="onpointerenter"in Ua?"pointer":"mouse",zS=jt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=jt.eventTypes=("ontouchstart"in _s?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _s?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return VS=0},500),WS(),cf=1),cf};jn.op=nn;rt.cache=0;var jt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){cf||XS(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Ql||WS();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,h=i.onStopDelay,p=i.ignore,x=i.wheelSpeed,g=i.event,m=i.onDragStart,f=i.onDragEnd,_=i.onDrag,v=i.onPress,y=i.onRelease,w=i.onRight,T=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,O=i.onChange,I=i.onToggleX,K=i.onToggleY,L=i.onHover,k=i.onHoverEnd,B=i.onMove,Y=i.ignoreCheck,U=i.isNormalizer,z=i.onGestureStart,C=i.onGestureEnd,Z=i.onWheel,J=i.onEnable,$=i.onDisable,Q=i.onClick,se=i.scrollSpeed,me=i.capture,de=i.allowClicks,De=i.lockAxis,Ne=i.onLockAxis;this.target=a=Zn(a)||_s,this.vars=i,p&&(p=gn.utils.toArray(p)),r=r||1e-9,s=s||0,x=x||1,se=se||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(xi.getComputedStyle(Ua).lineHeight)||22);var Oe,We,V,Xe,ve,Ie,xe,W=this,Be=0,R=0,A=i.passive||!c&&i.passive!==!1,H=Bs(a,jn),ne=Bs(a,nn),te=H(),ie=ne(),_e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ji[0]==="pointerdown",he=eu(a),fe=a.ownerDocument||gs,Ce=[0,0,0],Ve=[0,0,0],ee=0,ut=function(){return ee=Jl()},Pe=function(Me,Le){return(W.event=Me)&&p&&j2(Me.target,p)||Le&&_e&&Me.pointerType!=="touch"||Y&&Y(Me,Le)},je=function(){W._vx.reset(),W._vy.reset(),We.pause(),d&&d(W)},Ae=function(){var Me=W.deltaX=F_(Ce),Le=W.deltaY=F_(Ve),oe=Math.abs(Me)>=r,ze=Math.abs(Le)>=r;O&&(oe||ze)&&O(W,Me,Le,Ce,Ve),oe&&(w&&W.deltaX>0&&w(W),T&&W.deltaX<0&&T(W),S&&S(W),I&&W.deltaX<0!=Be<0&&I(W),Be=W.deltaX,Ce[0]=Ce[1]=Ce[2]=0),ze&&(P&&W.deltaY>0&&P(W),M&&W.deltaY<0&&M(W),E&&E(W),K&&W.deltaY<0!=R<0&&K(W),R=W.deltaY,Ve[0]=Ve[1]=Ve[2]=0),(Xe||V)&&(B&&B(W),V&&(m&&V===1&&m(W),_&&_(W),V=0),Xe=!1),Ie&&!(Ie=!1)&&Ne&&Ne(W),ve&&(Z(W),ve=!1),Oe=0},ye=function(Me,Le,oe){Ce[oe]+=Me,Ve[oe]+=Le,W._vx.update(Me),W._vy.update(Le),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},Ye=function(Me,Le){De&&!xe&&(W.axis=xe=Math.abs(Me)>Math.abs(Le)?"x":"y",Ie=!0),xe!=="y"&&(Ce[2]+=Me,W._vx.update(Me,!0)),xe!=="x"&&(Ve[2]+=Le,W._vy.update(Le,!0)),u?Oe||(Oe=requestAnimationFrame(Ae)):Ae()},et=function(Me){if(!Pe(Me,1)){Me=Ml(Me,c);var Le=Me.clientX,oe=Me.clientY,ze=Le-W.x,ke=oe-W.y,$e=W.isDragging;W.x=Le,W.y=oe,($e||(ze||ke)&&(Math.abs(W.startX-Le)>=s||Math.abs(W.startY-oe)>=s))&&(V=$e?2:1,$e||(W.isDragging=!0),Ye(ze,ke))}},pt=W.onPress=function(be){Pe(be,1)||be&&be.button||(W.axis=xe=null,We.pause(),W.isPressed=!0,be=Ml(be),Be=R=0,W.startX=W.x=be.clientX,W.startY=W.y=be.clientY,W._vx.reset(),W._vy.reset(),Fn(U?a:fe,Ji[1],et,A,!0),W.deltaX=W.deltaY=0,v&&v(W))},ge=W.onRelease=function(be){if(!Pe(be,1)){kn(U?a:fe,Ji[1],et,!0);var Me=!isNaN(W.y-W.startY),Le=W.isDragging,oe=Le&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),ze=Ml(be);!oe&&Me&&(W._vx.reset(),W._vy.reset(),c&&de&&gn.delayedCall(.08,function(){if(Jl()-ee>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(fe.createEvent){var ke=fe.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,xi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(ke)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&Le&&!U&&We.restart(!0),V&&Ae(),f&&Le&&f(W),y&&y(W,oe)}},ae=function(Me){return Me.touches&&Me.touches.length>1&&(W.isGesturing=!0)&&z(Me,W.isDragging)},N=function(){return(W.isGesturing=!1)||C(W)},le=function(Me){if(!Pe(Me)){var Le=H(),oe=ne();ye((Le-te)*se,(oe-ie)*se,1),te=Le,ie=oe,d&&We.restart(!0)}},ue=function(Me){if(!Pe(Me)){Me=Ml(Me,c),Z&&(ve=!0);var Le=(Me.deltaMode===1?l:Me.deltaMode===2?xi.innerHeight:1)*x;ye(Me.deltaX*Le,Me.deltaY*Le,0),d&&!U&&We.restart(!0)}},Fe=function(Me){if(!Pe(Me)){var Le=Me.clientX,oe=Me.clientY,ze=Le-W.x,ke=oe-W.y;W.x=Le,W.y=oe,Xe=!0,d&&We.restart(!0),(ze||ke)&&Ye(ze,ke)}},Ue=function(Me){W.event=Me,L(W)},at=function(Me){W.event=Me,k(W)},dt=function(Me){return Pe(Me)||Ml(Me,c)&&Q(W)};We=W._dc=gn.delayedCall(h||.25,je).pause(),W.deltaX=W.deltaY=0,W._vx=fm(0,50,!0),W._vy=fm(0,50,!0),W.scrollX=H,W.scrollY=ne,W.isDragging=W.isGesturing=W.isPressed=!1,HS(this),W.enable=function(be){return W.isEnabled||(Fn(he?fe:a,"scroll",cm),o.indexOf("scroll")>=0&&Fn(he?fe:a,"scroll",le,A,me),o.indexOf("wheel")>=0&&Fn(a,"wheel",ue,A,me),(o.indexOf("touch")>=0&&zS||o.indexOf("pointer")>=0)&&(Fn(a,Ji[0],pt,A,me),Fn(fe,Ji[2],ge),Fn(fe,Ji[3],ge),de&&Fn(a,"click",ut,!0,!0),Q&&Fn(a,"click",dt),z&&Fn(fe,"gesturestart",ae),C&&Fn(fe,"gestureend",N),L&&Fn(a,io+"enter",Ue),k&&Fn(a,io+"leave",at),B&&Fn(a,io+"move",Fe)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Xe=V=!1,W._vx.reset(),W._vy.reset(),te=H(),ie=ne(),be&&be.type&&pt(be),J&&J(W)),W},W.disable=function(){W.isEnabled&&(Ea.filter(function(be){return be!==W&&eu(be.target)}).length||kn(he?fe:a,"scroll",cm),W.isPressed&&(W._vx.reset(),W._vy.reset(),kn(U?a:fe,Ji[1],et,!0)),kn(he?fe:a,"scroll",le,me),kn(a,"wheel",ue,me),kn(a,Ji[0],pt,me),kn(fe,Ji[2],ge),kn(fe,Ji[3],ge),kn(a,"click",ut,!0),kn(a,"click",dt),kn(fe,"gesturestart",ae),kn(fe,"gestureend",N),kn(a,io+"enter",Ue),kn(a,io+"leave",at),kn(a,io+"move",Fe),W.isEnabled=W.isPressed=W.isDragging=!1,$&&$(W))},W.kill=W.revert=function(){W.disable();var be=Ea.indexOf(W);be>=0&&Ea.splice(be,1),zr===W&&(zr=0)},Ea.push(W),U&&eu(a)&&(zr=W),W.enable(g)},W2(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();jt.version="3.13.0";jt.create=function(n){return new jt(n)};jt.register=XS;jt.getAll=function(){return Ea.slice()};jt.getById=function(n){return Ea.filter(function(e){return e.vars.id===n})[0]};GS()&&gn.registerPlugin(jt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,aa,nt,At,_i,mt,Gg,$f,Du,tu,Ul,pc,Cn,bd,dm,Gn,z_,B_,la,jS,vh,YS,Bn,hm,qS,$S,ss,pm,Vg,Oa,Wg,Kf,mm,xh,mc=1,Rn=Date.now,yh=Rn(),ji=0,Ol=0,H_=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},G_=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Y2=function n(){return Ol&&requestAnimationFrame(n)},V_=function(){return bd=1},W_=function(){return bd=0},hr=function(e){return e},kl=function(e){return Math.round(e*1e5)/1e5||0},KS=function(){return typeof window<"u"},ZS=function(){return Ee||KS()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},No=function(e){return!!~Gg.indexOf(e)},QS=function(e){return(e==="Height"?Wg:nt["inner"+e])||_i["client"+e]||mt["client"+e]},JS=function(e){return Ls(e,"getBoundingClientRect")||(No(e)?function(){return mf.width=nt.innerWidth,mf.height=Wg,mf}:function(){return Ur(e)})},q2=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?QS(s):e["client"+s])||0}},$2=function(e,t){return!t||~Mr.indexOf(e)?JS(e):function(){return mf}},vr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-JS(e)()[s]:No(e)?(_i[i]||mt[i])-QS(r):e[i]-e["offset"+r])},gc=function(e,t){for(var i=0;i<la.length;i+=3)(!t||~t.indexOf(la[i+1]))&&e(la[i],la[i+1],la[i+2])},mi=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},Fl=function(e){return typeof e=="number"},ro=function(e){return typeof e=="object"},El=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Sh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Vo=Math.abs,eM="left",tM="top",Xg="right",jg="bottom",So="width",Mo="height",nu="Right",iu="Left",ru="Top",su="Bottom",qt="padding",Oi="margin",el="Width",Yg="Height",en="px",ki=function(e){return nt.getComputedStyle(e)},K2=function(e){var t=ki(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},X_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&ki(e)[dm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Zf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},nM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},Z2=function(e){return function(t){return Ee.utils.snap(nM(e),t)}},qg=function(e){var t=Ee.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},Q2=function(e){return function(t,i){return qg(nM(e))(t,i.direction)}},_c=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},cn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},vc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},j_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xc={toggleActions:"play",anticipatePin:0},Qf={top:0,left:0,center:.5,bottom:1,right:1},ff=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Qf?Qf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,h=s.indent,p=s.fontWeight,x=At.createElement("div"),g=No(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,f=g?mt:i,_=e.indexOf("start")!==-1,v=_?u:c,y="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===nn?Xg:jg)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),x._isStart=_,x.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),x.style.cssText=y,x.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(x,f.children[0]):f.appendChild(x),x._offset=x["offset"+r.op.d2],df(x,0,r,_),x},df=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+el]=1,s["border"+a+el]=0,s[i.p]=t+"px",Ee.set(e,s)},Je=[],gm={},Nu,Y_=function(){return Rn()-ji>34&&(Nu||(Nu=requestAnimationFrame(Vr)))},Wo=function(){(!Bn||!Bn.isPressed||Bn.startX>mt.clientWidth)&&(rt.cache++,Bn?Nu||(Nu=requestAnimationFrame(Vr)):Vr(),ji||Uo("scrollStart"),ji=Rn())},Mh=function(){$S=nt.innerWidth,qS=nt.innerHeight},zl=function(e){rt.cache++,(e===!0||!Cn&&!YS&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!hm||$S!==nt.innerWidth||Math.abs(nt.innerHeight-qS)>nt.innerHeight*.25))&&$f.restart(!0)},Io={},J2=[],iM=function n(){return un(Qe,"scrollEnd",n)||po(!0)},Uo=function(e){return Io[e]&&Io[e].map(function(t){return t()})||J2},hi=[],rM=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},$g=function(e,t){var i;for(Gn=0;Gn<Je.length;Gn++)i=Je[Gn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Kf=!0,t&&rM(t),t||Uo("revert")},sM=function(e,t){rt.cache++,(t||!Vn)&&rt.forEach(function(i){return Dn(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(nt.history.scrollRestoration=Vg=e)},Vn,Eo=0,q_,eA=function(){if(q_!==Eo){var e=q_=Eo;requestAnimationFrame(function(){return e===Eo&&po(!0)})}},oM=function(){mt.appendChild(Oa),Wg=!Bn&&Oa.offsetHeight||nt.innerHeight,mt.removeChild(Oa)},$_=function(e){return Du(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},po=function(e,t){if(_i=At.documentElement,mt=At.body,Gg=[nt,At,_i,mt],ji&&!e&&!Kf){cn(Qe,"scrollEnd",iM);return}oM(),Vn=Qe.isRefreshing=!0,rt.forEach(function(r){return Dn(r)&&++r.cacheID&&(r.rec=r())});var i=Uo("refreshInit");jS&&Qe.sort(),t||$g(),rt.forEach(function(r){Dn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),Kf=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),mm=1,$_(!0),Je.forEach(function(r){var s=vr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),$_(!1),mm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Dn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),sM(Vg,1),$f.pause(),Eo++,Vn=2,Vr(2),Je.forEach(function(r){return Dn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Vn=Qe.isRefreshing=!1,Uo("refresh")},_m=0,hf=1,ou,Vr=function(e){if(e===2||!Vn&&!Kf){Qe.isUpdating=!0,ou&&ou.update(0);var t=Je.length,i=Rn(),r=i-yh>=50,s=t&&Je[0].scroll();if(hf=_m>s?-1:1,Vn||(_m=s),r&&(ji&&!bd&&i-ji>200&&(ji=0,Uo("scrollEnd")),Ul=yh,yh=i),hf<0){for(Gn=t;Gn-- >0;)Je[Gn]&&Je[Gn].update(0,r);hf=1}else for(Gn=0;Gn<t;Gn++)Je[Gn]&&Je[Gn].update(0,r);Qe.isUpdating=!1}Nu=0},vm=[eM,tM,jg,Xg,Oi+su,Oi+nu,Oi+ru,Oi+iu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],pf=vm.concat([So,Mo,"boxSizing","max"+el,"max"+Yg,"position",Oi,qt,qt+ru,qt+nu,qt+su,qt+iu]),tA=function(e,t,i){ka(i);var r=e._gsap;if(r.spacerIsNative)ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Eh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=vm.length,o=t.style,a=e.style,l;s--;)l=vm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[jg]=a[Xg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[So]=Zf(e,jn)+en,o[Mo]=Zf(e,nn)+en,o[qt]=a[Oi]=a[tM]=a[eM]="0",ka(r),a[So]=a["max"+el]=i[So],a[Mo]=a["max"+Yg]=i[Mo],a[qt]=i[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},nA=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(nA,"-$1").toLowerCase())}},Sc=function(e){for(var t=pf.length,i=e.style,r=[],s=0;s<t;s++)r.push(pf[s],i[pf[s]]);return r.t=e,r},iA=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},mf={left:0,top:0},K_=function(e,t,i,r,s,o,a,l,u,c,d,h,p,x){Dn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ff("0"+e.substr(3),i):0));var g=p?p.time():0,m,f,_;if(p&&p.seek(0),isNaN(e)||(e=+e),Fl(e))p&&(e=Ee.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&df(a,i,r,!0);else{Dn(t)&&(t=t(l));var v=(e||"0").split(" "),y,w,T,M;_=Zn(t,l)||mt,y=Ur(_)||{},(!y||!y.left&&!y.top)&&ki(_).display==="none"&&(M=_.style.display,_.style.display="block",y=Ur(_),M?_.style.display=M:_.style.removeProperty("display")),w=ff(v[0],y[r.d]),T=ff(v[1]||"0",i),e=y[r.p]-u[r.p]-c+w+s-T,a&&df(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(x&&(l[x]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,df(o,P,r,S&&P>20||!S&&(d?Math.max(mt[m],_i[m]):o.parentNode[m])<=P+1),d&&(u=Ur(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+en))}return p&&_&&(m=Ur(_),p.seek(h),f=Ur(_),p._caScrollDist=m[r.p]-f[r.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},rA=/(webkit|moz|length|cssText|inset)/i,Z_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=ki(e);for(o in a)!+o&&!rA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},aM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Mc=function(e,t,i){var r={};r[t.p]="+="+i,Ee.set(e,r)},Q_=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var h=o.tween,p=l.onComplete,x={};u=u||i();var g=aM(i,u,function(){h.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=x,x[r]=function(){return g(u+c*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=Ee.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",i.wheelHandler),Qe.isTouch&&cn(e,"touchmove",i.wheelHandler),s},Qe=function(){function n(t,i){aa||n.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ol){this.update=this.refresh=this.kill=hr;return}i=X_(mi(i)||Fl(i)||i.nodeType?{trigger:i}:i,xc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,h=s.trigger,p=s.pin,x=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,_=s.onSnapComplete,v=s.once,y=s.snap,w=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:nn,O=!d&&d!==0,I=Zn(i.scroller||nt),K=Ee.core.getCache(I),L=No(I),k=("pinType"in i?i.pinType:Ls(I,"pinType")||L&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=O&&i.toggleActions.split(" "),U="markers"in i?i.markers:xc.markers,z=L?0:parseFloat(ki(I)["border"+E.p2+el])||0,C=this,Z=i.onRefreshInit&&function(){return i.onRefreshInit(C)},J=q2(I,L,E),$=$2(I,L),Q=0,se=0,me=0,de=Bs(I,E),De,Ne,Oe,We,V,Xe,ve,Ie,xe,W,Be,R,A,H,ne,te,ie,_e,he,fe,Ce,Ve,ee,ut,Pe,je,Ae,ye,Ye,et,pt,ge,ae,N,le,ue,Fe,Ue,at;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=I,C.scroll=M?M.time.bind(M):de,We=de(),C.vars=i,r=r||i.animation,"refreshPriority"in i&&(jS=1,i.refreshPriority===-9999&&(ou=C)),K.tweenScroll=K.tweenScroll||{top:Q_(I,nn),left:Q_(I,jn)},C.tweenTo=De=K.tweenScroll[E.p],C.scrubDuration=function(oe){ae=Fl(oe)&&oe,ae?ge?ge.duration(oe):ge=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return f&&f(C)}}):(ge&&ge.progress(1).kill(),ge=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(d),et=0,l||(l=r.vars.id)),y&&((!ro(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in mt.style&&Ee.set(L?[mt,_i]:I,{scrollBehavior:"auto"}),rt.forEach(function(oe){return Dn(oe)&&oe.target===(L?At.scrollingElement||_i:I)&&(oe.smooth=!1)}),Oe=Dn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Z2(r):y.snapTo==="labelsDirectional"?Q2(r):y.directional!==!1?function(oe,ze){return qg(y.snapTo)(oe,Rn()-se<500?0:ze.direction)}:Ee.utils.snap(y.snapTo),N=y.duration||{min:.1,max:2},N=ro(N)?tu(N.min,N.max):tu(N,N),le=Ee.delayedCall(y.delay||ae/2||.1,function(){var oe=de(),ze=Rn()-se<500,ke=De.tween;if((ze||Math.abs(C.getVelocity())<10)&&!ke&&!bd&&Q!==oe){var $e=(oe-Xe)/H,Ut=r&&!O?r.totalProgress():$e,tt=ze?0:(Ut-pt)/(Rn()-Ul)*1e3||0,Tt=Ee.utils.clamp(-$e,1-$e,Vo(tt/2)*tt/.185),Qt=$e+(y.inertia===!1?0:Tt),Ct,wt,gt=y,ci=gt.onStart,b=gt.onInterrupt,F=gt.onComplete;if(Ct=Oe(Qt,C),Fl(Ct)||(Ct=Qt),wt=Math.max(0,Math.round(Xe+Ct*H)),oe<=ve&&oe>=Xe&&wt!==oe){if(ke&&!ke._initted&&ke.data<=Vo(wt-oe))return;y.inertia===!1&&(Tt=Ct-$e),De(wt,{duration:N(Vo(Math.max(Vo(Qt-Ut),Vo(Ct-Ut))*.185/tt/.05||0)),ease:y.ease||"power3",data:Vo(wt-oe),onInterrupt:function(){return le.restart(!0)&&b&&b(C)},onComplete:function(){C.update(),Q=de(),r&&!O&&(ge?ge.resetTo("totalProgress",Ct,r._tTime/r._tDur):r.progress(Ct)),et=pt=r&&!O?r.totalProgress():C.progress,_&&_(C),F&&F(C)}},oe,Tt*H,wt-oe-Tt*H),ci&&ci(C,De.tween)}}else C.isActive&&Q!==oe&&le.restart(!0)}).pause()),l&&(gm[l]=C),h=C.trigger=Zn(h||p!==!0&&p),at=h&&h._gsap&&h._gsap.stRevert,at&&(at=at(C)),p=p===!0?h:Zn(p),mi(a)&&(a={targets:h,className:a}),p&&(x===!1||x===Oi||(x=!x&&p.parentNode&&p.parentNode.style&&ki(p.parentNode).display==="flex"?!1:qt),C.pin=p,Ne=Ee.core.getCache(p),Ne.spacer?ne=Ne.pinState:(T&&(T=Zn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ne.spacerIsNative=!!T,T&&(Ne.spacerState=Sc(T))),Ne.spacer=_e=T||At.createElement("div"),_e.classList.add("pin-spacer"),l&&_e.classList.add("pin-spacer-"+l),Ne.pinState=ne=Sc(p)),i.force3D!==!1&&Ee.set(p,{force3D:!0}),C.spacer=_e=Ne.spacer,Ye=ki(p),ut=Ye[x+E.os2],fe=Ee.getProperty(p),Ce=Ee.quickSetter(p,E.a,en),Eh(p,_e,Ye),ie=Sc(p)),U){R=ro(U)?X_(U,j_):j_,W=yc("scroller-start",l,I,E,R,0),Be=yc("scroller-end",l,I,E,R,0,W),he=W["offset"+E.op.d2];var dt=Zn(Ls(I,"content")||I);Ie=this.markerStart=yc("start",l,dt,E,R,he,0,M),xe=this.markerEnd=yc("end",l,dt,E,R,he,0,M),M&&(Ue=Ee.quickSetter([Ie,xe],E.a,en)),!k&&!(Mr.length&&Ls(I,"fixedMarkers")===!0)&&(K2(L?mt:I),Ee.set([W,Be],{force3D:!0}),je=Ee.quickSetter(W,E.a,en),ye=Ee.quickSetter(Be,E.a,en))}if(M){var be=M.vars.onUpdate,Me=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){C.update(0,0,1),be&&be.apply(M,Me||[])})}if(C.previous=function(){return Je[Je.indexOf(C)-1]},C.next=function(){return Je[Je.indexOf(C)+1]},C.revert=function(oe,ze){if(!ze)return C.kill(!0);var ke=oe!==!1||!C.enabled,$e=Cn;ke!==C.isReverted&&(ke&&(ue=Math.max(de(),C.scroll.rec||0),me=C.progress,Fe=r&&r.progress()),Ie&&[Ie,xe,W,Be].forEach(function(Ut){return Ut.style.display=ke?"none":"block"}),ke&&(Cn=C,C.update(ke)),p&&(!w||!C.isActive)&&(ke?tA(p,_e,ne):Eh(p,_e,ki(p),Pe)),ke||C.update(ke),Cn=$e,C.isReverted=ke)},C.refresh=function(oe,ze,ke,$e){if(!((Cn||!C.enabled)&&!ze)){if(p&&oe&&ji){cn(n,"scrollEnd",iM);return}!Vn&&Z&&Z(C),Cn=C,De.tween&&!ke&&(De.tween.kill(),De.tween=0),ge&&ge.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)})),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ut=J(),tt=$(),Tt=M?M.duration():vr(I,E),Qt=H<=.01||!H,Ct=0,wt=$e||0,gt=ro(ke)?ke.end:i.end,ci=i.endTrigger||h,b=ro(ke)?ke.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),F=C.pinnedContainer=i.pinnedContainer&&Zn(i.pinnedContainer,C),q=h&&Math.max(0,Je.indexOf(C))||0,j=q,G,ce,Te,He,we,Re,Ge,Ke,Dt,Jt,_t,On,xt;for(U&&ro(ke)&&(On=Ee.getProperty(W,E.p),xt=Ee.getProperty(Be,E.p));j-- >0;)Re=Je[j],Re.end||Re.refresh(0,1)||(Cn=C),Ge=Re.pin,Ge&&(Ge===h||Ge===p||Ge===F)&&!Re.isReverted&&(Jt||(Jt=[]),Jt.unshift(Re),Re.revert(!0,!0)),Re!==Je[j]&&(q--,j--);for(Dn(b)&&(b=b(C)),b=H_(b,"start",C),Xe=K_(b,h,Ut,E,de(),Ie,W,C,tt,z,k,Tt,M,C._startClamp&&"_startClamp")||(p?-.001:0),Dn(gt)&&(gt=gt(C)),mi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(mi(b)?b.split(" ")[0]:"")+gt:(Ct=ff(gt.substr(2),Ut),gt=mi(b)?b:(M?Ee.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Xe):Xe)+Ct,ci=h)),gt=H_(gt,"end",C),ve=Math.max(Xe,K_(gt||(ci?"100% 0":Tt),ci,Ut,E,de()+Ct,xe,Be,C,tt,z,k,Tt,M,C._endClamp&&"_endClamp"))||-.001,Ct=0,j=q;j--;)Re=Je[j],Ge=Re.pin,Ge&&Re.start-Re._pinPush<=Xe&&!M&&Re.end>0&&(G=Re.end-(C._startClamp?Math.max(0,Re.start):Re.start),(Ge===h&&Re.start-Re._pinPush<Xe||Ge===F)&&isNaN(b)&&(Ct+=G*(1-Re.progress)),Ge===p&&(wt+=G));if(Xe+=Ct,ve+=Ct,C._startClamp&&(C._startClamp+=Ct),C._endClamp&&!Vn&&(C._endClamp=ve||-.001,ve=Math.min(ve,vr(I,E))),H=ve-Xe||(Xe-=.01)&&.001,Qt&&(me=Ee.utils.clamp(0,1,Ee.utils.normalize(Xe,ve,ue))),C._pinPush=wt,Ie&&Ct&&(G={},G[E.a]="+="+Ct,F&&(G[E.p]="-="+de()),Ee.set([Ie,xe],G)),p&&!(mm&&C.end>=vr(I,E)))G=ki(p),He=E===nn,Te=de(),Ve=parseFloat(fe(E.a))+wt,!Tt&&ve>1&&(_t=(L?At.scrollingElement||_i:I).style,_t={style:_t,value:_t["overflow"+E.a.toUpperCase()]},L&&ki(mt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(_t.style["overflow"+E.a.toUpperCase()]="scroll")),Eh(p,_e,G),ie=Sc(p),ce=Ur(p,!0),Ke=k&&Bs(I,He?jn:nn)(),x?(Pe=[x+E.os2,H+wt+en],Pe.t=_e,j=x===qt?Zf(p,E)+H+wt:0,j&&(Pe.push(E.d,j+en),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=j+en)),ka(Pe),F&&Je.forEach(function(qe){qe.pin===F&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),k&&de(ue)):(j=Zf(p,E),j&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=j+en)),k&&(we={top:ce.top+(He?Te-Xe:Ke)+en,left:ce.left+(He?Ke:Te-Xe)+en,boxSizing:"border-box",position:"fixed"},we[So]=we["max"+el]=Math.ceil(ce.width)+en,we[Mo]=we["max"+Yg]=Math.ceil(ce.height)+en,we[Oi]=we[Oi+ru]=we[Oi+nu]=we[Oi+su]=we[Oi+iu]="0",we[qt]=G[qt],we[qt+ru]=G[qt+ru],we[qt+nu]=G[qt+nu],we[qt+su]=G[qt+su],we[qt+iu]=G[qt+iu],te=iA(ne,we,w),Vn&&de(0)),r?(Dt=r._initted,vh(1),r.render(r.duration(),!0,!0),ee=fe(E.a)-Ve+H+wt,Ae=Math.abs(H-ee)>1,k&&Ae&&te.splice(te.length-2,2),r.render(0,!0,!0),Dt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),vh(0)):ee=H,_t&&(_t.value?_t.style["overflow"+E.a.toUpperCase()]=_t.value:_t.style.removeProperty("overflow-"+E.a));else if(h&&de()&&!M)for(ce=h.parentNode;ce&&ce!==mt;)ce._pinOffset&&(Xe-=ce._pinOffset,ve-=ce._pinOffset),ce=ce.parentNode;Jt&&Jt.forEach(function(qe){return qe.revert(!1,!0)}),C.start=Xe,C.end=ve,We=V=Vn?ue:de(),!M&&!Vn&&(We<ue&&de(ue),C.scroll.rec=0),C.revert(!1,!0),se=Rn(),le&&(Q=-1,le.restart(!0)),Cn=0,r&&O&&(r._initted||Fe)&&r.progress()!==Fe&&r.progress(Fe||0,!0).render(r.time(),!0,!0),(Qt||me!==C.progress||M||g||r&&!r._initted)&&(r&&!O&&(r._initted||me||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Xe<-.001&&!me?Ee.utils.normalize(Xe,ve,0):me,!0),C.progress=Qt||(We-Xe)/H===me?0:me),p&&x&&(_e._pinOffset=Math.round(C.progress*ee)),ge&&ge.invalidate(),isNaN(On)||(On-=Ee.getProperty(W,E.p),xt-=Ee.getProperty(Be,E.p),Mc(W,E,On),Mc(Ie,E,On-($e||0)),Mc(Be,E,xt),Mc(xe,E,xt-($e||0))),Qt&&!Vn&&C.update(),c&&!Vn&&!A&&(A=!0,c(C),A=!1)}},C.getVelocity=function(){return(de()-V)/(Rn()-Ul)*1e3||0},C.endAnimation=function(){El(C.callbackAnimation),r&&(ge?ge.progress(1):r.paused()?O||El(r,C.direction<0,1):El(r,r.reversed()))},C.labelToScroll=function(oe){return r&&r.labels&&(Xe||C.refresh()||Xe)+r.labels[oe]/r.duration()*H||0},C.getTrailing=function(oe){var ze=Je.indexOf(C),ke=C.direction>0?Je.slice(0,ze).reverse():Je.slice(ze+1);return(mi(oe)?ke.filter(function($e){return $e.vars.preventOverlaps===oe}):ke).filter(function($e){return C.direction>0?$e.end<=Xe:$e.start>=ve})},C.update=function(oe,ze,ke){if(!(M&&!ke&&!oe)){var $e=Vn===!0?ue:C.scroll(),Ut=oe?0:($e-Xe)/H,tt=Ut<0?0:Ut>1?1:Ut||0,Tt=C.progress,Qt,Ct,wt,gt,ci,b,F,q;if(ze&&(V=We,We=M?de():$e,y&&(pt=et,et=r&&!O?r.totalProgress():tt)),m&&p&&!Cn&&!mc&&ji&&(!tt&&Xe<$e+($e-V)/(Rn()-Ul)*m?tt=1e-4:tt===1&&ve>$e+($e-V)/(Rn()-Ul)*m&&(tt=.9999)),tt!==Tt&&C.enabled){if(Qt=C.isActive=!!tt&&tt<1,Ct=!!Tt&&Tt<1,b=Qt!==Ct,ci=b||!!tt!=!!Tt,C.direction=tt>Tt?1:-1,C.progress=tt,ci&&!Cn&&(wt=tt&&!Tt?0:tt===1?1:Tt===1?2:3,O&&(gt=!b&&Y[wt+1]!=="none"&&Y[wt+1]||Y[wt],q=r&&(gt==="complete"||gt==="reset"||gt in r))),S&&(b||q)&&(q||d||!r)&&(Dn(S)?S(C):C.getTrailing(S).forEach(function(Te){return Te.endAnimation()})),O||(ge&&!Cn&&!mc?(ge._dp._time-ge._start!==ge._time&&ge.render(ge._dp._time-ge._start),ge.resetTo?ge.resetTo("totalProgress",tt,r._tTime/r._tDur):(ge.vars.totalProgress=tt,ge.invalidate().restart())):r&&r.totalProgress(tt,!!(Cn&&(se||oe)))),p){if(oe&&x&&(_e.style[x+E.os2]=ut),!k)Ce(kl(Ve+ee*tt));else if(ci){if(F=!oe&&tt>Tt&&ve+1>$e&&$e+1>=vr(I,E),w)if(!oe&&(Qt||F)){var j=Ur(p,!0),G=$e-Xe;Z_(p,mt,j.top+(E===nn?G:0)+en,j.left+(E===nn?0:G)+en)}else Z_(p,_e);ka(Qt||F?te:ie),Ae&&tt<1&&Qt||Ce(Ve+(tt===1&&!F?ee:0))}}y&&!De.tween&&!Cn&&!mc&&le.restart(!0),a&&(b||v&&tt&&(tt<1||!xh))&&Du(a.targets).forEach(function(Te){return Te.classList[Qt||v?"add":"remove"](a.className)}),o&&!O&&!oe&&o(C),ci&&!Cn?(O&&(q&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(C)),(b||!xh)&&(u&&b&&Sh(C,u),B[wt]&&Sh(C,B[wt]),v&&(tt===1?C.kill(!1,1):B[wt]=0),b||(wt=tt===1?1:3,B[wt]&&Sh(C,B[wt]))),P&&!Qt&&Math.abs(C.getVelocity())>(Fl(P)?P:2500)&&(El(C.callbackAnimation),ge?ge.progress(1):El(r,gt==="reverse"?1:!tt,1))):O&&o&&!Cn&&o(C)}if(ye){var ce=M?$e/M.duration()*(M._caScrollDist||0):$e;je(ce+(W._isFlipped?1:0)),ye(ce)}Ue&&Ue(-$e/M.duration()*(M._caScrollDist||0))}},C.enable=function(oe,ze){C.enabled||(C.enabled=!0,cn(I,"resize",zl),L||cn(I,"scroll",Wo),Z&&cn(n,"refreshInit",Z),oe!==!1&&(C.progress=me=0,We=V=Q=de()),ze!==!1&&C.refresh())},C.getTween=function(oe){return oe&&De?De.tween:ge},C.setPositions=function(oe,ze,ke,$e){if(M){var Ut=M.scrollTrigger,tt=M.duration(),Tt=Ut.end-Ut.start;oe=Ut.start+Tt*oe/tt,ze=Ut.start+Tt*ze/tt}C.refresh(!1,!1,{start:G_(oe,ke&&!!C._startClamp),end:G_(ze,ke&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(oe){if(Pe&&oe){var ze=Pe.indexOf(E.d)+1;Pe[ze]=parseFloat(Pe[ze])+oe+en,Pe[1]=parseFloat(Pe[1])+oe+en,ka(Pe)}},C.disable=function(oe,ze){if(C.enabled&&(oe!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,ze||ge&&ge.pause(),ue=0,Ne&&(Ne.uncache=1),Z&&un(n,"refreshInit",Z),le&&(le.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!L)){for(var ke=Je.length;ke--;)if(Je[ke].scroller===I&&Je[ke]!==C)return;un(I,"resize",zl),L||un(I,"scroll",Wo)}},C.kill=function(oe,ze){C.disable(oe,ze),ge&&!ze&&ge.kill(),l&&delete gm[l];var ke=Je.indexOf(C);ke>=0&&Je.splice(ke,1),ke===Gn&&hf>0&&Gn--,ke=0,Je.forEach(function($e){return $e.scroller===C.scroller&&(ke=1)}),ke||Vn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,oe&&r.revert({kill:!1}),ze||r.kill()),Ie&&[Ie,xe,W,Be].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),ou===C&&(ou=0),p&&(Ne&&(Ne.uncache=1),ke=0,Je.forEach(function($e){return $e.pin===p&&ke++}),ke||(Ne.spacer=0)),i.onKill&&i.onKill(C)},Je.push(C),C.enable(!1,!1),at&&at(C),r&&r.add&&!H){var Le=C.update;C.update=function(){C.update=Le,rt.cache++,Xe||ve||C.refresh()},Ee.delayedCall(.01,C.update),H=.01,Xe=ve=0}else C.refresh();p&&eA()},n.register=function(i){return aa||(Ee=i||ZS(),KS()&&window.document&&n.enable(),aa=Ol),aa},n.defaults=function(i){if(i)for(var r in i)xc[r]=i[r];return xc},n.disable=function(i,r){Ol=0,Je.forEach(function(o){return o[r?"kill":"disable"](i)}),un(nt,"wheel",Wo),un(At,"scroll",Wo),clearInterval(pc),un(At,"touchcancel",hr),un(mt,"touchstart",hr),_c(un,At,"pointerdown,touchstart,mousedown",V_),_c(un,At,"pointerup,touchend,mouseup",W_),$f.kill(),gc(un);for(var s=0;s<rt.length;s+=3)vc(un,rt[s],rt[s+1]),vc(un,rt[s],rt[s+2])},n.enable=function(){if(nt=window,At=document,_i=At.documentElement,mt=At.body,Ee&&(Du=Ee.utils.toArray,tu=Ee.utils.clamp,pm=Ee.core.context||hr,vh=Ee.core.suppressOverwrites||hr,Vg=nt.history.scrollRestoration||"auto",_m=nt.pageYOffset||0,Ee.core.globals("ScrollTrigger",n),mt)){Ol=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",oM(),Y2(),jt.register(Ee),n.isTouch=jt.isTouch,ss=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hm=jt.isTouch===1,cn(nt,"wheel",Wo),Gg=[nt,At,_i,mt],Ee.matchMedia?(n.matchMedia=function(u){var c=Ee.matchMedia(),d;for(d in u)c.add(d,u[d]);return c},Ee.addEventListener("matchMediaInit",function(){return $g()}),Ee.addEventListener("matchMediaRevert",function(){return rM()}),Ee.addEventListener("matchMedia",function(){po(0,1),Uo("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Mh(),Mh})):console.warn("Requires GSAP 3.11.0 or later"),Mh(),cn(At,"scroll",Wo);var i=mt.hasAttribute("style"),r=mt.style,s=r.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ur(mt),nn.m=Math.round(a.top+nn.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(mt.setAttribute("style",""),mt.removeAttribute("style")),pc=setInterval(Y_,250),Ee.delayedCall(.5,function(){return mc=0}),cn(At,"touchcancel",hr),cn(mt,"touchstart",hr),_c(cn,At,"pointerdown,touchstart,mousedown",V_),_c(cn,At,"pointerup,touchend,mouseup",W_),dm=Ee.utils.checkPrefix("transform"),pf.push(dm),aa=Rn(),$f=Ee.delayedCall(.2,po).pause(),la=[At,"visibilitychange",function(){var u=nt.innerWidth,c=nt.innerHeight;At.hidden?(z_=u,B_=c):(z_!==u||B_!==c)&&zl()},At,"DOMContentLoaded",po,nt,"load",po,nt,"resize",zl],gc(cn),Je.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)vc(un,rt[l],rt[l+1]),vc(un,rt[l],rt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(xh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(pc)||(pc=r)&&setInterval(Y_,r),"ignoreMobileResize"in i&&(hm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(gc(un)||gc(cn,i.autoRefreshEvents||"none"),YS=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Zn(i),o=rt.indexOf(s),a=No(s);~o&&rt.splice(o,a?6:2),r&&(a?Mr.unshift(nt,r,mt,r,_i,r):Mr.unshift(s,r))},n.clearMatchMedia=function(i){Je.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?Zn(i):i).getBoundingClientRect(),a=o[s?So:Mo]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=Zn(i));var o=i.getBoundingClientRect(),a=o[s?So:Mo],l=r==null?a/2:r in Qf?Qf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Io.killAll||[];Io={},r.forEach(function(s){return s()})}},n}();Qe.version="3.13.0";Qe.saveStyles=function(n){return n?Du(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),pm())}}):hi};Qe.revert=function(n,e){return $g(!n,e)};Qe.create=function(n,e){return new Qe(n,e)};Qe.refresh=function(n){return n?zl(!0):(aa||Qe.register())&&po(!0)};Qe.update=function(n){return++rt.cache&&Vr(n===!0?2:0)};Qe.clearScrollMemory=sM;Qe.maxScroll=function(n,e){return vr(n,e?jn:nn)};Qe.getScrollFunc=function(n,e){return Bs(Zn(n),e?jn:nn)};Qe.getById=function(n){return gm[n]};Qe.getAll=function(){return Je.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!ji};Qe.snapDirectional=qg;Qe.addEventListener=function(n,e){var t=Io[n]||(Io[n]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(n,e){var t=Io[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Qe.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],h=[],p=Ee.delayedCall(r,function(){c(d,h),d=[],h=[]}).pause();return function(x){d.length||p.restart(!0),d.push(x.trigger),h.push(x),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(s)&&(s=s(),cn(Qe,"refresh",function(){return s=e.batchMax()})),Du(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Qe.create(u))}),t};var J_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Th=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===_i&&n(mt,t)},Ec={auto:1,scroll:1},sA=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=Rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ec[(l=ki(s)).overflowY]||Ec[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!No(s)&&(Ec[(l=ki(s)).overflowY]||Ec[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},lM=function(e,t,i,r){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&sA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&cn(At,jt.eventTypes[0],tv,!1,!0)},onDisable:function(){return un(At,jt.eventTypes[0],tv,!0)}})},oA=/(input|label|select|textarea)/i,ev,tv=function(e){var t=oA.test(e.target.tagName);(t||ev)&&(e._gsapAllow=!0,ev=t)},aA=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Zn(e.target)||_i,c=Ee.core.globals().ScrollSmoother,d=c&&c.get(),h=ss&&(e.content&&Zn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Bs(u,nn),x=Bs(u,jn),g=1,m=(jt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,f=0,_=Dn(r)?function(){return r(a)}:function(){return r||2.8},v,y,w=lM(u,e.type,!0,s),T=function(){return y=!1},M=hr,P=hr,S=function(){l=vr(u,nn),P=tu(ss?1:0,l),i&&(M=tu(0,vr(u,jn))),v=Eo},E=function(){h._gsap.y=kl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},O=function(){if(y){requestAnimationFrame(T);var U=kl(a.deltaY/2),z=P(p.v-U);if(h&&z!==p.v+p.offset){p.offset=z-p.v;var C=kl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",p.cacheID=rt.cache,Vr()}return!0}p.offset&&E(),y=!0},I,K,L,k,B=function(){S(),I.isActive()&&I.vars.scrollY>l&&(p()>l?I.progress(1)&&p(l):I.resetTo("scrollY",l))};return h&&Ee.set(h,{y:"+=0"}),e.ignoreCheck=function(Y){return ss&&Y.type==="touchmove"&&O()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){y=!1;var Y=g;g=kl((nt.visualViewport&&nt.visualViewport.scale||1)/m),I.pause(),Y!==g&&Th(u,g>1.01?!0:i?!1:"x"),K=x(),L=p(),S(),v=Eo},e.onRelease=e.onGestureStart=function(Y,U){if(p.offset&&E(),!U)k.restart(!0);else{rt.cache++;var z=_(),C,Z;i&&(C=x(),Z=C+z*.05*-Y.velocityX/.227,z*=J_(x,C,Z,vr(u,jn)),I.vars.scrollX=M(Z)),C=p(),Z=C+z*.05*-Y.velocityY/.227,z*=J_(p,C,Z,vr(u,nn)),I.vars.scrollY=P(Z),I.invalidate().duration(z).play(.01),(ss&&I.vars.scrollY>=l||C>=l-1)&&Ee.to({},{onUpdate:B,duration:z})}o&&o(Y)},e.onWheel=function(){I._ts&&I.pause(),Rn()-f>1e3&&(v=0,f=Rn())},e.onChange=function(Y,U,z,C,Z){if(Eo!==v&&S(),U&&i&&x(M(C[2]===U?K+(Y.startX-Y.x):x()+U-C[1])),z){p.offset&&E();var J=Z[2]===z,$=J?L+Y.startY-Y.y:p()+z-Z[1],Q=P($);J&&$!==Q&&(L+=Q-$),p(Q)}(z||U)&&Vr()},e.onEnable=function(){Th(u,i?!1:"x"),Qe.addEventListener("refresh",B),cn(nt,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=x.smooth=!1),w.enable()},e.onDisable=function(){Th(u,!0),un(nt,"resize",B),Qe.removeEventListener("refresh",B),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=ss,ss&&!p()&&p(1),ss&&Ee.ticker.add(hr),k=a._dc,I=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:aM(p,p(),function(){return I.pause()})},onUpdate:Vr,onComplete:k.vars.onComplete}),a};Qe.sort=function(n){if(Dn(n))return Je.sort(n);var e=nt.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),Je.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(n){return new jt(n)};Qe.normalizeScroll=function(n){if(typeof n>"u")return Bn;if(n===!0&&Bn)return Bn.enable();if(n===!1){Bn&&Bn.kill(),Bn=n;return}var e=n instanceof jt?n:aA(n);return Bn&&Bn.target===e.target&&Bn.kill(),No(e.target)&&(Bn=e),e};Qe.core={_getVelocityProp:fm,_inputObserver:lM,_scrollers:rt,_proxies:Mr,bridge:{ss:function(){ji||Uo("scrollStart"),ji=Rn()},ref:function(){return Cn}}};ZS()&&Ee.registerPlugin(Qe);/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn,uM,Wr,xr,Ds,cM,Fa,Tc,fM=function(){return typeof window<"u"},dM=function(){return Nn||fM()&&(Nn=window.gsap)&&Nn.registerPlugin&&Nn},hM=function(e){return typeof e=="string"},nv=function(e){return typeof e=="function"},Iu=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===Wr||e===xr||e===Ds?Math.max(xr[r],Ds[r])-(Wr["inner"+i]||xr[s]||Ds[s]):e[r]-e["offset"+i]},Uu=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===Wr&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=xr[i]!=null?xr:Ds),function(){return e[i]}},lA=function(e,t,i,r){if(nv(e)&&(e=e(t,i,r)),typeof e!="object")return hM(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&nv(e[o])?e[o](t,i,r):e[o];return s},pM=function(e,t){if(e=cM(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===Wr||t===Ds,s=r?{top:xr.clientTop-(Wr.pageYOffset||xr.scrollTop||Ds.scrollTop||0),left:xr.clientLeft-(Wr.pageXOffset||xr.scrollLeft||Ds.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=Uu(t,"x")(),o.y+=Uu(t,"y")()),o},iv=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:hM(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?Iu(t,i)-s:Math.min(Iu(t,i),pM(e,t)[i]-s)},xm=function(){Nn=dM(),fM()&&Nn&&typeof document<"u"&&document.body&&(Wr=window,Ds=document.body,xr=document.documentElement,cM=Nn.utils.toArray,Nn.config({autoKillThreshold:7}),Fa=Nn.config(),uM=1)},ll={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){Nn=e,xm()},init:function(e,t,i,r,s){uM||xm();var o=this,a=Nn.getProperty(e,"scrollSnapType");o.isWin=e===Wr,o.target=e,o.tween=i,t=lA(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Fa).autoKill,o.getX=Uu(e,"x"),o.getY=Uu(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Tc||(Tc=Nn.core.globals().ScrollTrigger),Nn.getProperty(e,"scrollBehavior")==="smooth"&&Nn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,iv(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,iv(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,u=t.isWin,c=t.snap,d=t.snapInline,h,p,x,g,m;i;)i.r(e,i.d),i=i._next;h=u||!t.skipX?t.getX():a,p=u||!t.skipY?t.getY():l,x=p-l,g=h-a,m=Fa.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>m||g<-m)&&h<Iu(r,"x")&&(t.skipX=1),!t.skipY&&(x>m||x<-m)&&p<Iu(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),u?Wr.scrollTo(t.skipX?h:t.x,t.skipY?p:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),c&&(e===1||e===0)&&(p=r.scrollTop,h=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=p+1,r.scrollLeft=h+1,r.scrollTop=p,r.scrollLeft=h),t.xPrev=t.x,t.yPrev=t.y,Tc&&Tc.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};ll.max=Iu;ll.getOffset=pM;ll.buildGetter=Uu;ll.config=function(n){Fa||xm()||(Fa=Nn.config());for(var e in n)Fa[e]=n[e]};dM()&&Nn.registerPlugin(ll);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ft=(n,e)=>{const t=st.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>st.createElement("svg",{ref:c,...uA,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${cA(n)}`,a].join(" "),...u},[...e.map(([d,h])=>st.createElement(d,h)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=ft("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=ft("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=ft("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=ft("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=ft("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=ft("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=ft("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=ft("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=ft("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=ft("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=ft("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=ft("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=ft("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=ft("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=ft("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=ft("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=ft("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=ft("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=ft("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=ft("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=ft("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=ft("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=ft("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=ft("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=ft("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=ft("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=ft("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=ft("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=ft("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=ft("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),kA=()=>{const n=st.useRef(null),[e,t]=ys.useState(!1);st.useEffect(()=>{n.current&&yn.fromTo(n.current,{y:-100,opacity:0},{y:0,opacity:1,duration:1,delay:.2,ease:"power3.out"})},[]);const i=s=>{const o=document.getElementById(s);o&&yn.to(window,{duration:1.5,scrollTo:{y:o.offsetTop-80,autoKill:!1},ease:"power3.inOut"}),t(!1)},r=[{id:"about",label:"About",icon:IA},{id:"skills",label:"Skills",icon:Jf},{id:"projects",label:"Projects",icon:hA},{id:"contact",label:"Contact",icon:Zg}];return D.jsx("header",{ref:n,className:"fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50",children:D.jsxs("div",{className:"container mx-auto px-6 py-4",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("div",{className:"text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Ikmal Al Ais"}),D.jsx("nav",{className:"hidden md:flex items-center space-x-8",children:r.map(({id:s,label:o,icon:a})=>D.jsxs("button",{onClick:()=>i(s),className:"flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 group",children:[D.jsx(a,{size:18,className:"group-hover:scale-110 transition-transform duration-300"}),D.jsx("span",{children:o})]},s))}),D.jsx("button",{onClick:()=>t(!e),className:"md:hidden text-white hover:text-cyan-400 transition-colors duration-300",children:e?D.jsx(vM,{size:24}):D.jsx(EA,{size:24})})]}),e&&D.jsx("nav",{className:"md:hidden mt-4 pb-4 space-y-4",children:r.map(({id:s,label:o,icon:a})=>D.jsxs("button",{onClick:()=>i(s),className:"flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300 w-full text-left",children:[D.jsx(a,{size:18}),D.jsx("span",{children:o})]},s))})]})})},FA=()=>{const n=st.useRef(null),e=st.useRef(null),t=st.useRef(null),i=st.useRef(null);st.useEffect(()=>{const s=yn.timeline({delay:.5});e.current&&s.fromTo(e.current.children,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.1,ease:"power3.out"}),t.current&&s.fromTo(t.current,{y:50,opacity:0},{y:0,opacity:1,duration:.8,ease:"power3.out"},"-=0.5"),i.current&&s.fromTo(i.current.children,{y:30,opacity:0},{y:0,opacity:1,duration:.6,stagger:.1,ease:"power3.out"},"-=0.3"),yn.to(".scroll-indicator",{y:10,duration:2,repeat:-1,yoyo:!0,ease:"power2.inOut"})},[]);const r=()=>{const s=document.getElementById("about");s&&yn.to(window,{duration:1.5,scrollTo:{y:s.offsetTop-80,autoKill:!1},ease:"power3.inOut"})};return D.jsx("section",{ref:n,className:"min-h-screen flex items-center justify-center px-6 relative",children:D.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[D.jsxs("h1",{ref:e,className:"text-5xl md:text-7xl font-bold mb-6 leading-tight",children:[D.jsx("span",{className:"block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent",children:"IoT & Full-Stack"}),D.jsx("span",{className:"block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent",children:"Engineer"})]}),D.jsx("p",{ref:t,className:"text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed",children:"From network-focused vocational training to hands-on hardware and robotics builds, I craft IoT ecosystems, AI-driven robots, and multi-platform apps that connect devices with outstanding user experiences."}),D.jsxs("div",{ref:i,className:"flex flex-col sm:flex-row items-center justify-center gap-6 mb-16",children:[D.jsx("button",{onClick:r,className:"bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:"Explore My Work"}),D.jsxs("div",{className:"flex items-center space-x-4",children:[D.jsx("a",{href:"https://github.com/ikmala",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg",children:D.jsx(Kg,{size:24})}),D.jsx("a",{href:"https://www.linkedin.com/in/ikmal-al-ais-32a2432b7/",target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg",children:D.jsx(_M,{size:24})}),D.jsx("a",{href:"mailto:ikmalalais@gmail.com?subject=Subject%20Text&body=Body%20Text",className:"p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg",children:D.jsx(Zg,{size:24})})]})]}),D.jsx("div",{className:"scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer",onClick:r,children:D.jsx(mA,{size:32,className:"text-cyan-400 animate-pulse"})})]})})},zA=()=>{const n=st.useRef(null),e=st.useRef(null);st.useEffect(()=>{e.current&&yn.fromTo(e.current.children,{y:50,opacity:0},{y:0,opacity:1,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})},[]);const t=[{icon:gM,title:"IoT Systems Integration",description:"Delivering end-to-end IoT solutions from device firmware to cloud dashboards"},{icon:mM,title:"AI & Robotics",description:"Building ROS2-powered robots, computer vision pipelines, and intelligent edge devices"},{icon:UA,title:"Hardware Engineering",description:"Assembling, repairing, and optimizing hardware tailored for connected environments"},{icon:wA,title:"Network Architecture",description:"Designing resilient wired and wireless networks that keep devices online"},{icon:Jf,title:"Full-Stack Development",description:"Building full-stack products across web, mobile, and desktop experiences"}];return D.jsx("section",{id:"about",ref:n,className:"py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800",children:D.jsx("div",{className:"max-w-6xl mx-auto",children:D.jsxs("div",{ref:e,children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:D.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",children:"About Me"})}),D.jsx("p",{className:"text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed",children:"I'm a builder at heart, trained in Computer & Network Engineering at SMK and sharpened through countless hardware repairs, IoT deploys, and custom software builds for clients who need everything to just work. Today I continue my journey in a Computer Engineering degree focused on AI and robotics experimentation."}),D.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:t.map(({icon:i,title:r,description:s},o)=>D.jsxs("div",{className:"bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10",children:[D.jsx("div",{className:"bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg mb-4 w-fit",children:D.jsx(i,{size:24,className:"text-white"})}),D.jsx("h3",{className:"text-xl font-semibold mb-3 text-white",children:r}),D.jsx("p",{className:"text-slate-300 leading-relaxed",children:s})]},o))}),D.jsx("div",{className:"mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50",children:D.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-2xl font-bold mb-4 text-cyan-400",children:"My Journey"}),D.jsx("p",{className:"text-slate-300 leading-relaxed mb-4",children:"I started in vocational school mastering network topologies, cabling, and hardware diagnostics. Outside class, I took on repair jobs that taught me how devices behave in the real world and how to fix them fast."}),D.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Those experiences naturally evolved into building IoT systems: configuring microcontrollers, stitching sensors to the cloud, and writing the web, mobile, or desktop software that keeps everything visible. In my Computer Engineering studies I dig into ROS2, computer vision, and machine learning so robotics projects can see, decide, and act autonomously. Today I combine hardware instincts with full-stack development to deliver dependable connected products, shipping web apps in React on the front and Laravel or Node.js on the backend depending on what each client needs."})]}),D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"text-slate-300",children:"IoT & Embedded"}),D.jsx("div",{className:"w-32 bg-slate-700 rounded-full h-2",children:D.jsx("div",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[90%]"})})]}),D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"text-slate-300",children:"AI & Robotics"}),D.jsx("div",{className:"w-32 bg-slate-700 rounded-full h-2",children:D.jsx("div",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[88%]"})})]}),D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"text-slate-300",children:"Full-Stack Applications"}),D.jsx("div",{className:"w-32 bg-slate-700 rounded-full h-2",children:D.jsx("div",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[82%]"})})]}),D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("span",{className:"text-slate-300",children:"Network & Infrastructure"}),D.jsx("div",{className:"w-32 bg-slate-700 rounded-full h-2",children:D.jsx("div",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[95%]"})})]})]})]})})]})})})},BA=()=>{const n=st.useRef(null),e=st.useRef(null);st.useEffect(()=>{e.current&&yn.fromTo(e.current.children,{y:30,opacity:0,scale:.8},{y:0,opacity:1,scale:1,duration:.8,stagger:.1,ease:"back.out(1.7)",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})},[]);const t=[{name:"JavaScript & TypeScript",level:92},{name:"Node.js & Express",level:88},{name:"React & Next.js",level:86},{name:"C/C++ (Embedded & Robotics)",level:91},{name:"Python, MicroPython & CircuitPython",level:88},{name:"ROS2 & Robot Operating Systems",level:84},{name:"Computer Vision (YOLOv8, OpenCV)",level:83},{name:"TensorFlow & PyTorch",level:80},{name:"MQTT & Realtime Networks",level:87},{name:"SQL & NoSQL Databases",level:83},{name:"DevOps & Docker",level:75},{name:"Circuit & PCB Design",level:70}];return D.jsx("section",{id:"skills",ref:n,className:"py-20 px-6 bg-slate-900",children:D.jsxs("div",{className:"max-w-6xl mx-auto",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:D.jsx("span",{className:"bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Core Skills"})}),D.jsx("p",{className:"text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto",children:"Technologies and stacks I rely on to ship production-ready IoT, robotics, and software solutions"}),D.jsx("div",{ref:e,className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:t.map((i,r)=>{const s=`skill-gradient-${r}`;return D.jsx("div",{className:"group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer",children:D.jsxs("div",{className:"text-center",children:[D.jsxs("div",{className:"relative w-20 h-20 mx-auto mb-4",children:[D.jsxs("svg",{className:"w-20 h-20 transform -rotate-90",children:[D.jsx("circle",{cx:"40",cy:"40",r:"36",stroke:"currentColor",strokeWidth:"8",fill:"none",className:"text-slate-700"}),D.jsx("circle",{cx:"40",cy:"40",r:"36",stroke:`url(#${s})`,strokeWidth:"8",fill:"none",strokeDasharray:`${2*Math.PI*36}`,strokeDashoffset:`${2*Math.PI*36*(1-i.level/100)}`,className:"transition-all duration-1000 ease-out",strokeLinecap:"round"}),D.jsx("defs",{children:D.jsxs("linearGradient",{id:s,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[D.jsx("stop",{offset:"0%",stopColor:"#a855f7"}),D.jsx("stop",{offset:"100%",stopColor:"#ec4899"})]})})]}),D.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:D.jsxs("span",{className:"text-sm font-bold text-white",children:[i.level,"%"]})})]}),D.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300",children:i.name})]})},i.name)})})]})})},HA=()=>{const n=st.useRef(null),e=st.useRef(null);st.useEffect(()=>{e.current&&yn.fromTo(e.current.children,{y:50,opacity:0,rotationY:15},{y:0,opacity:1,rotationY:0,duration:1,stagger:.1,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})},[]);const t=[{title:"AI & Robotics",tools:[{name:"ROS2, Gazebo & RViz",icon:mM,description:"Robot control, simulation, and visualization pipelines for autonomous systems"},{name:"YOLOv8, OpenCV & DeepStream",icon:pA,description:"Real-time computer vision for detection, tracking, and spatial awareness"},{name:"TensorFlow, PyTorch & ONNX",icon:dA,description:"Model training, optimization, and deployment to edge hardware"},{name:"LLMs, LangChain & RAG",icon:DA,description:"Conversational interfaces and intelligent agents for robotics and IoT workflows"}]},{title:"IoT & Hardware",tools:[{name:"Arduino IDE & PlatformIO",icon:gM,description:"Firmware development and rapid prototyping for microcontroller projects"},{name:"ESP32 / ESPHome",icon:bA,description:"Wireless connectivity, OTA updates, and sensor integrations for IoT nodes"},{name:"Raspberry Pi & Linux",icon:gA,description:"Edge computing, gateways, and on-premise controllers for connected systems"},{name:"KiCad & PCB Prototyping",icon:fA,description:"Schematic design and custom PCB layouts tailored to hardware requirements"}]},{title:"Backend & Cloud",tools:[{name:"Node.js, Express & NestJS",icon:RA,description:"Robust APIs, device management backends, and automation services"},{name:"Laravel & PHP Ecosystem",icon:vA,description:"Modular backend services, REST APIs, and dashboard tooling when projects call for PHP"},{name:"Python & FastAPI",icon:NA,description:"Data pipelines, integrations, and IoT orchestration scripts"},{name:"Firebase & Supabase",icon:_A,description:"Realtime dashboards, authentication, and secure data storage"},{name:"Docker & CI/CD",icon:SA,description:"Containerized deployments and repeatable release workflows"}]},{title:"Frontend & Apps",tools:[{name:"React, Next.js & Vite",icon:Jf,description:"Fast web interfaces for monitoring, control, and client portals"},{name:"React Native & Flutter",icon:LA,description:"Cross-platform mobile apps that interact with connected devices"},{name:"Tailwind CSS & Shadcn UI",icon:AA,description:"Design systems that stay consistent across dashboards and apps"},{name:"Electron & Tauri",icon:TA,description:"Desktop tools for on-site configuration and hardware diagnostics"}]}];return D.jsx("section",{id:"tools",ref:n,className:"py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900",children:D.jsxs("div",{className:"max-w-6xl mx-auto",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:D.jsx("span",{className:"bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent",children:"Tools & Technologies"})}),D.jsx("p",{className:"text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto",children:"Tooling that lets me connect hardware in the field with reliable cloud services and polished interfaces."}),D.jsx("div",{ref:e,className:"space-y-12",children:t.map(i=>D.jsxs("div",{className:"space-y-6",children:[D.jsx("h3",{className:"text-2xl font-bold text-center text-green-400",children:i.title}),D.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:i.tools.map(r=>{const s=r.icon;return D.jsx("div",{className:"group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 cursor-pointer",children:D.jsxs("div",{className:"flex flex-col items-center text-center",children:[D.jsx("div",{className:"bg-gradient-to-br from-green-500 to-blue-500 p-4 rounded-lg mb-4 group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300",children:D.jsx(s,{size:32,className:"text-white"})}),D.jsx("h4",{className:"text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300",children:r.name}),D.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:r.description})]})},r.name)})})]},i.title))}),D.jsxs("div",{className:"mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50",children:[D.jsx("h3",{className:"text-2xl font-bold text-center mb-6 text-green-400",children:"Workflow Philosophy"}),D.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto",children:D.jsx(Jf,{size:24,className:"text-white"})}),D.jsx("h4",{className:"text-lg font-semibold text-white mb-2",children:"End-to-End Ownership"}),D.jsx("p",{className:"text-slate-300 text-sm",children:"Following every signal path from sensors to AI models to cloud endpoints to keep projects cohesive"})]}),D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto",children:D.jsx(OA,{size:24,className:"text-white"})}),D.jsx("h4",{className:"text-lg font-semibold text-white mb-2",children:"Iterate Fast"}),D.jsx("p",{className:"text-slate-300 text-sm",children:"Rapid prototypes, field feedback, and continuous improvements to reach reliable releases"})]}),D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto",children:D.jsx(PA,{size:24,className:"text-white"})}),D.jsx("h4",{className:"text-lg font-semibold text-white mb-2",children:"Reliability First"}),D.jsx("p",{className:"text-slate-300 text-sm",children:"Stress-testing hardware, firmware, and AI logic so deployments and robot missions stay resilient in the field"})]})]})]})]})})},GA=()=>{const n=st.useRef(null),e=st.useRef(null);st.useEffect(()=>{e.current&&yn.fromTo(e.current.children,{y:80,opacity:0,scale:.9},{y:0,opacity:1,scale:1,duration:1.2,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})},[]);const t=[{title:"E-Commerce Platform",description:"Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",tech:["React","Node.js","PostgreSQL","Stripe","AWS"],image:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",features:["Real-time inventory","Payment processing","Admin dashboard","Mobile responsive"],icon:yA,gradient:"from-blue-500 to-purple-600"}];return D.jsx("section",{id:"projects",ref:n,className:"py-20 px-6 bg-slate-900",children:D.jsxs("div",{className:"max-w-7xl mx-auto",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:D.jsx("span",{className:"bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent",children:"Featured Projects"})}),D.jsx("p",{className:"text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto",children:"A showcase of my recent work, demonstrating expertise across full-stack development and network engineering"}),D.jsx("div",{ref:e,className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:t.map((i,r)=>D.jsxs("div",{className:"group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10",children:[D.jsxs("div",{className:"relative overflow-hidden",children:[D.jsx("img",{src:i.image,alt:i.title,className:"w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"}),D.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"}),D.jsx("div",{className:"absolute top-4 left-4",children:D.jsx("div",{className:`bg-gradient-to-r ${i.gradient} p-2 rounded-lg`,children:D.jsx(i.icon,{size:20,className:"text-white"})})})]}),D.jsxs("div",{className:"p-6",children:[D.jsx("h3",{className:"text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300",children:i.title}),D.jsx("p",{className:"text-slate-300 mb-4 leading-relaxed",children:i.description}),D.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:i.tech.map(s=>D.jsx("span",{className:"px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50",children:s},s))}),D.jsx("div",{className:"grid grid-cols-2 gap-2 mb-6",children:i.features.map(s=>D.jsxs("div",{className:"flex items-center text-sm text-slate-400",children:[D.jsx("div",{className:"w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"}),s]},s))}),D.jsx("div",{className:"flex items-center justify-between",children:D.jsxs("div",{className:"flex space-x-3",children:[D.jsxs("button",{className:"flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105",children:[D.jsx(xA,{size:16}),D.jsx("span",{children:"Live Demo"})]}),D.jsxs("button",{className:"flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105",children:[D.jsx(Kg,{size:16}),D.jsx("span",{children:"Code"})]})]})})]})]},i.title))}),D.jsx("div",{className:"mt-16 text-center",children:D.jsx("a",{href:"https://github.com/ikmala",target:"_blank",rel:"noopener noreferrer",children:D.jsx("button",{className:"bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25",children:"View All Projects on GitHub"})})})]})})};var xM={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rv=ys.createContext&&ys.createContext(xM),VA=["attr","size","title"];function WA(n,e){if(n==null)return{};var t=XA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function XA(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function ed(){return ed=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ed.apply(this,arguments)}function sv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function td(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sv(Object(t),!0).forEach(function(i){jA(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):sv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function jA(n,e,t){return e=YA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function YA(n){var e=qA(n,"string");return typeof e=="symbol"?e:e+""}function qA(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function yM(n){return n&&n.map((e,t)=>ys.createElement(e.tag,td({key:t},e.attr),yM(e.child)))}function $A(n){return e=>ys.createElement(KA,ed({attr:td({},n.attr)},e),yM(n.child))}function KA(n){var e=t=>{var{attr:i,size:r,title:s}=n,o=WA(n,VA),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),ys.createElement("svg",ed({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:td(td({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ys.createElement("title",null,s),n.children)};return rv!==void 0?ys.createElement(rv.Consumer,null,t=>e(t)):e(xM)}function ZA(n){return $A({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}const Ou={_origin:"https://api.emailjs.com"},QA=(n,e="https://api.emailjs.com")=>{Ou._userID=n,Ou._origin=e},SM=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ov{constructor(e){this.status=e.status,this.text=e.responseText}}const MM=(n,e,t={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new ov(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new ov(o))}),s.open("POST",Ou._origin+n,!0),Object.keys(t).forEach(o=>{s.setRequestHeader(o,t[o])}),s.send(e)}),JA=(n,e,t,i)=>{const r=i||Ou._userID;return SM(r,n,e),MM("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},eb=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},tb=(n,e,t,i)=>{const r=i||Ou._userID,s=eb(t);SM(r,n,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",n),o.append("template_id",e),o.append("user_id",r),MM("/api/v1.0/email/send-form",o)},nb={init:QA,send:JA,sendForm:tb},ib=()=>{const n=st.useRef(null),e=st.useRef(null),[t,i]=st.useState({name:"",email:"",subject:"",message:""});st.useEffect(()=>{n.current&&yn.fromTo(".contact-item",{y:50,opacity:0},{y:0,opacity:1,duration:1,stagger:.2,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 80%",end:"bottom 20%",toggleActions:"play none none reverse"}})},[]);const r=l=>{i({...t,[l.target.name]:l.target.value})},s=l=>{l.preventDefault(),yn.to(".submit-btn",{scale:.95,duration:.1,yoyo:!0,repeat:1,ease:"power2.out"}),console.log("Form submitted:",t),nb.sendForm("service_qg8yudo","template_ni3drgp",e.current,"pwjcPQOHn2ct6F_kb").then(u=>{console.log("Email sent successfully:",u.text),i({name:"",email:"",subject:"",message:""})},u=>{console.error("Error sending email:",u.text)})},o=[{icon:Zg,title:"Email",value:"ikmalalais@gmail.com",link:"mailto:ikmalalais@gmail.com"},{icon:ZA,title:"Whatsapp",value:"+62 82125488212",link:"https://wa.me/6282125488212"},{icon:MA,title:"Location",value:"Surabaya",link:"https://www.google.com/maps/place/Ketintang,+Kec.+Gayungan,+Surabaya,+Jawa+Timur/@-7.3185784,112.7163752,15z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb6551205733:0x32a9d1800d0cfc47!8m2!3d-7.3154135!4d112.7301098!16s%2Fg%2F122zkcyz?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"}],a=[{icon:Kg,href:"https://github.com/ikmala",label:"GitHub"},{icon:_M,href:"https://www.linkedin.com/in/ikmal-al-ais-32a2432b7/",label:"LinkedIn"},{icon:vM,href:"https://x.com/IkmalAis",label:"Twitter"}];return D.jsx("section",{id:"contact",ref:n,className:"py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800",children:D.jsxs("div",{className:"max-w-6xl mx-auto",children:[D.jsxs("div",{className:"contact-item",children:[D.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4",children:D.jsx("span",{className:"bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent",children:"Let's Work Together"})}),D.jsx("p",{className:"text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto",children:"Have a project in mind or want to discuss opportunities? I'd love to hear from you."})]}),D.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[D.jsxs("div",{className:"contact-item space-y-8",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Get In Touch"}),D.jsx("p",{className:"text-slate-300 leading-relaxed mb-8",children:"I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development. Feel free to reach out!"})]}),D.jsx("div",{className:"space-y-6",children:o.map((l,u)=>D.jsxs("a",{href:l.link,className:"flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 group",children:[D.jsx("div",{className:"bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-lg group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300",children:D.jsx(l.icon,{size:20,className:"text-white"})}),D.jsxs("div",{children:[D.jsx("h4",{className:"text-lg font-semibold text-white group-hover:text-pink-400 transition-colors duration-300",children:l.title}),D.jsx("p",{className:"text-slate-300",children:l.value})]})]},l.title))}),D.jsxs("div",{className:"pt-8",children:[D.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Follow Me"}),D.jsx("div",{className:"flex space-x-4",children:a.map(l=>D.jsx("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 group",children:D.jsx(l.icon,{size:20,className:"text-slate-300 group-hover:text-pink-400 transition-colors duration-300"})},l.label))})]})]}),D.jsx("div",{className:"contact-item",children:D.jsxs("form",{ref:e,onSubmit:s,className:"bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50",children:[D.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[D.jsxs("div",{children:[D.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-slate-300 mb-2",children:"Name"}),D.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:r,required:!0,className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300",placeholder:"Your name"})]}),D.jsxs("div",{children:[D.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-slate-300 mb-2",children:"Email"}),D.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:r,required:!0,className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300",placeholder:"your@email.com"})]})]}),D.jsxs("div",{className:"mb-6",children:[D.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-slate-300 mb-2",children:"Subject"}),D.jsx("input",{type:"text",id:"subject",name:"subject",value:t.subject,onChange:r,required:!0,className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300",placeholder:"What's this about?"})]}),D.jsxs("div",{className:"mb-6",children:[D.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-slate-300 mb-2",children:"Message"}),D.jsx("textarea",{id:"message",name:"message",value:t.message,onChange:r,required:!0,rows:5,className:"w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none",placeholder:"Tell me about your project..."})]}),D.jsxs("button",{type:"submit",className:"submit-btn w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 flex items-center justify-center space-x-2",children:[D.jsx(CA,{size:20}),D.jsx("span",{children:"Send Message"})]})]})})]}),D.jsx("div",{className:"contact-item mt-16 text-center",children:D.jsxs("div",{className:"bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50",children:[D.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"Ready to Start Your Project?"}),D.jsx("p",{className:"text-slate-300 mb-6 max-w-2xl mx-auto",children:"Whether you need a full-stack web application, network infrastructure setup, or technical consultation, I'm here to help bring your ideas to life."}),D.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:D.jsx("button",{className:"bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105",children:"Download Resume"})})]})})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qg="160",rb=0,av=1,sb=2,EM=1,ob=2,Pr=3,Hs=0,li=1,Or=2,Ns=0,za=1,lv=2,uv=3,cv=4,ab=5,ao=100,lb=101,ub=102,fv=103,dv=104,cb=200,fb=201,db=202,hb=203,ym=204,Sm=205,pb=206,mb=207,gb=208,_b=209,vb=210,xb=211,yb=212,Sb=213,Mb=214,Eb=0,Tb=1,wb=2,nd=3,Ab=4,bb=5,Cb=6,Rb=7,TM=0,Pb=1,Lb=2,Is=0,Db=1,Nb=2,Ib=3,Ub=4,Ob=5,kb=6,wM=300,tl=301,nl=302,Mm=303,Em=304,Cd=306,Tm=1e3,rr=1001,wm=1002,Wn=1003,hv=1004,wh=1005,Fi=1006,Fb=1007,ku=1008,Us=1009,zb=1010,Bb=1011,Jg=1012,AM=1013,vs=1014,xs=1015,Fu=1016,bM=1017,CM=1018,To=1020,Hb=1021,sr=1023,Gb=1024,Vb=1025,wo=1026,il=1027,Wb=1028,RM=1029,Xb=1030,PM=1031,LM=1033,Ah=33776,bh=33777,Ch=33778,Rh=33779,pv=35840,mv=35841,gv=35842,_v=35843,DM=36196,vv=37492,xv=37496,yv=37808,Sv=37809,Mv=37810,Ev=37811,Tv=37812,wv=37813,Av=37814,bv=37815,Cv=37816,Rv=37817,Pv=37818,Lv=37819,Dv=37820,Nv=37821,Ph=36492,Iv=36494,Uv=36495,jb=36283,Ov=36284,kv=36285,Fv=36286,NM=3e3,Ao=3001,Yb=3200,qb=3201,$b=0,Kb=1,Bi="",mn="srgb",Zr="srgb-linear",e0="display-p3",Rd="display-p3-linear",id="linear",Pt="srgb",rd="rec709",sd="p3",Xo=7680,zv=519,Zb=512,Qb=513,Jb=514,IM=515,eC=516,tC=517,nC=518,iC=519,Bv=35044,Hv="300 es",Am=1035,Br=2e3,od=2001;class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=Math.PI/180,bm=180/Math.PI;function Xu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Jn(n,e,t){return Math.max(e,Math.min(t,n))}function rC(n,e){return(n%e+e)%e}function Dh(n,e,t){return(1-t)*n+t*e}function Gv(n){return(n&n-1)===0&&n!==0}function Cm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],f=r[6],_=r[1],v=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=o*g+a*_+l*w,s[3]=o*m+a*v+l*T,s[6]=o*f+a*y+l*M,s[1]=u*g+c*_+d*w,s[4]=u*m+c*v+d*T,s[7]=u*f+c*y+d*M,s[2]=h*g+p*_+x*w,s[5]=h*m+p*v+x*T,s[8]=h*f+p*y+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nh.makeScale(e,t)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new it;function UM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ad(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sC(){const n=ad("canvas");return n.style.display="block",n}const Vv={};function au(n){n in Vv||(Vv[n]=!0,console.warn(n))}const Wv=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xv=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wc={[Zr]:{transfer:id,primaries:rd,toReference:n=>n,fromReference:n=>n},[mn]:{transfer:Pt,primaries:rd,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Rd]:{transfer:id,primaries:sd,toReference:n=>n.applyMatrix3(Xv),fromReference:n=>n.applyMatrix3(Wv)},[e0]:{transfer:Pt,primaries:sd,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Xv),fromReference:n=>n.applyMatrix3(Wv).convertLinearToSRGB()}},oC=new Set([Zr,Rd]),yt={enabled:!0,_workingColorSpace:Zr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!oC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=wc[e].toReference,r=wc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wc[n].primaries},getTransfer:function(n){return n===Bi?id:wc[n].transfer}};function Ba(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ih(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jo;class OM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jo===void 0&&(jo=ad("canvas")),jo.width=e.width,jo.height=e.height;const i=jo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ad("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ba(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ba(t[i]/255)*255):t[i]=Ba(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aC=0;class kM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aC++}),this.uuid=Xu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uh(r[o].image)):s.push(Uh(r[o]))}else s=Uh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Uh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lC=0;class Ti extends ul{constructor(e=Ti.DEFAULT_IMAGE,t=Ti.DEFAULT_MAPPING,i=rr,r=rr,s=Fi,o=ku,a=sr,l=Us,u=Ti.DEFAULT_ANISOTROPY,c=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=Xu(),this.name="",this.source=new kM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(au("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ao?mn:Bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tm:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case wm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tm:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case wm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return au("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mn?Ao:NM}set encoding(e){au("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ao?mn:Bi}}Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=wM;Ti.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,t=0,i=0,r=1){_n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,w=(f+1)/2,T=(c+h)/4,M=(d+g)/4,P=(x+m)/4;return v>y&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=P/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(d-g)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uC extends ul{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _n(0,0,e,t),this.scissorTest=!1,this.viewport=new _n(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(au("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ao?mn:Bi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ti(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oo extends uC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class FM extends Ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cC extends Ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*g,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,f*_);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+g*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=w,u*=w,c*=w,d*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new X,jv=new ju;class Yu{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ac.copy(i.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),bc.subVectors(this.max,wl),Yo.subVectors(e.a,wl),qo.subVectors(e.b,wl),$o.subVectors(e.c,wl),es.subVectors(qo,Yo),ts.subVectors($o,qo),Ks.subVectors(Yo,$o);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ks.z,Ks.y,es.z,0,-es.x,ts.z,0,-ts.x,Ks.z,0,-Ks.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ks.y,Ks.x,0];return!kh(t,Yo,qo,$o,bc)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Yo,qo,$o,bc))?!1:(Cc.crossVectors(es,ts),t=[Cc.x,Cc.y,Cc.z],kh(t,Yo,qo,$o,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new X,new X,new X,new X,new X,new X,new X,new X],Ki=new X,Ac=new Yu,Yo=new X,qo=new X,$o=new X,es=new X,ts=new X,Ks=new X,wl=new X,bc=new X,Cc=new X,Zs=new X;function kh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const fC=new Yu,Al=new X,Fh=new X;class t0{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Al.subVectors(e,this.center);const t=Al.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Al,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Al.copy(e.center).add(Fh)),this.expandByPoint(Al.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ar=new X,zh=new X,Rc=new X,ns=new X,Bh=new X,Pc=new X,Hh=new X;class dC{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zh.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(zh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rc),a=ns.dot(this.direction),l=-ns.dot(Rc),u=ns.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zh).addScaledVector(Rc,h),p}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const i=Ar.dot(this.direction),r=Ar.dot(Ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,i,r,s){Bh.subVectors(t,e),Pc.subVectors(i,e),Hh.crossVectors(Bh,Pc);let o=this.direction.dot(Hh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const l=a*this.direction.dot(Pc.crossVectors(ns,Pc));if(l<0)return null;const u=a*this.direction.dot(Bh.cross(ns));if(u<0||l+u>o)return null;const c=-a*ns.dot(Hh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),s=1/Ko.setFromMatrixColumn(e,1).length(),o=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h+g*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,g=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hC,e,pC)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),is.crossVectors(i,fi),is.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),is.crossVectors(i,fi)),is.normalize(),Lc.crossVectors(fi,is),r[0]=is.x,r[4]=Lc.x,r[8]=fi.x,r[1]=is.y,r[5]=Lc.y,r[9]=fi.y,r[2]=is.z,r[6]=Lc.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],_=i[3],v=i[7],y=i[11],w=i[15],T=r[0],M=r[4],P=r[8],S=r[12],E=r[1],O=r[5],I=r[9],K=r[13],L=r[2],k=r[6],B=r[10],Y=r[14],U=r[3],z=r[7],C=r[11],Z=r[15];return s[0]=o*T+a*E+l*L+u*U,s[4]=o*M+a*O+l*k+u*z,s[8]=o*P+a*I+l*B+u*C,s[12]=o*S+a*K+l*Y+u*Z,s[1]=c*T+d*E+h*L+p*U,s[5]=c*M+d*O+h*k+p*z,s[9]=c*P+d*I+h*B+p*C,s[13]=c*S+d*K+h*Y+p*Z,s[2]=x*T+g*E+m*L+f*U,s[6]=x*M+g*O+m*k+f*z,s[10]=x*P+g*I+m*B+f*C,s[14]=x*S+g*K+m*Y+f*Z,s[3]=_*T+v*E+y*L+w*U,s[7]=_*M+v*O+y*k+w*z,s[11]=_*P+v*I+y*B+w*C,s[15]=_*S+v*K+y*Y+w*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],f=e[15],_=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-x*d*u+x*a*p-o*g*p-c*a*f+o*d*f,w=x*d*l-c*g*l-x*a*h+o*g*h+c*a*m-o*d*m,T=t*_+i*v+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=_*M,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*M,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(x*d*s-c*g*s-x*i*p+t*g*p+c*i*f-t*d*f)*M,e[10]=(o*g*s-x*a*s+x*i*u-t*g*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*g*r-x*d*r+x*i*h-t*g*h-c*i*m+t*d*m)*M,e[14]=(x*a*r-o*g*r-x*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,g=o*c,m=o*d,f=a*d,_=l*u,v=l*c,y=l*d,w=i.x,T=i.y,M=i.z;return r[0]=(1-(g+f))*w,r[1]=(p+y)*w,r[2]=(x-v)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+f))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(x+v)*M,r[9]=(m-_)*M,r[10]=(1-(h+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ko.set(r[0],r[1],r[2]).length();const o=Ko.set(r[4],r[5],r[6]).length(),a=Ko.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zi.copy(this);const u=1/s,c=1/o,d=1/a;return Zi.elements[0]*=u,Zi.elements[1]*=u,Zi.elements[2]*=u,Zi.elements[4]*=c,Zi.elements[5]*=c,Zi.elements[6]*=c,Zi.elements[8]*=d,Zi.elements[9]*=d,Zi.elements[10]*=d,t.setFromRotationMatrix(Zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Br){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Br)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===od)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,g;if(a===Br)x=(o+s)*d,g=-2*d;else if(a===od)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ko=new X,Zi=new Sn,hC=new X(0,0,0),pC=new X(1,1,1),is=new X,Lc=new X,fi=new X,Yv=new Sn,qv=new ju;class Pd{constructor(e=0,t=0,i=0,r=Pd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qv.setFromEuler(this),this.setFromQuaternion(qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pd.DEFAULT_ORDER="XYZ";class zM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mC=0;const $v=new X,Zo=new ju,br=new Sn,Dc=new X,bl=new X,gC=new X,_C=new ju,Kv=new X(1,0,0),Zv=new X(0,1,0),Qv=new X(0,0,1),vC={type:"added"},xC={type:"removed"};class wi extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=Xu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wi.DEFAULT_UP.clone();const e=new X,t=new Pd,i=new ju,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Sn},normalMatrix:{value:new it}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=wi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(Kv,e)}rotateY(e){return this.rotateOnAxis(Zv,e)}rotateZ(e){return this.rotateOnAxis(Qv,e)}translateOnAxis(e,t){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kv,e)}translateY(e){return this.translateOnAxis(Zv,e)}translateZ(e){return this.translateOnAxis(Qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dc.copy(e):Dc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(bl,Dc,this.up):br.lookAt(Dc,bl,this.up),this.quaternion.setFromRotationMatrix(br),r&&(br.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(br),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xC)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,gC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,_C,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wi.DEFAULT_UP=new X(0,1,0);wi.DEFAULT_MATRIX_AUTO_UPDATE=!0;wi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new X,Cr=new X,Gh=new X,Rr=new X,Qo=new X,Jo=new X,Jv=new X,Vh=new X,Wh=new X,Xh=new X;let Nc=!1;class ir{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qi.subVectors(e,t),r.cross(Qi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qi.subVectors(r,t),Cr.subVectors(i,t),Gh.subVectors(e,t);const o=Qi.dot(Qi),a=Qi.dot(Cr),l=Qi.dot(Gh),u=Cr.dot(Cr),c=Cr.dot(Gh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getUV(e,t,i,r,s,o,a,l){return Nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static isFrontFacing(e,t,i,r){return Qi.subVectors(i,t),Cr.subVectors(e,t),Qi.cross(Cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Qi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ir.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ir.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nc=!0),ir.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ir.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ir.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ir.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),Jo.subVectors(s,i),Vh.subVectors(e,i);const l=Qo.dot(Vh),u=Jo.dot(Vh);if(l<=0&&u<=0)return t.copy(i);Wh.subVectors(e,r);const c=Qo.dot(Wh),d=Jo.dot(Wh);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Qo,o);Xh.subVectors(e,s);const p=Qo.dot(Xh),x=Jo.dot(Xh);if(x>=0&&p<=x)return t.copy(s);const g=p*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Jo,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return Jv.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(Jv,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(Qo,o).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const BM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function jh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=rC(e,1),t=Jn(t,0,1),i=Jn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jh(o,s,e+1/3),this.g=jh(o,s,e),this.b=jh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=BM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=Ih(e.r),this.g=Ih(e.g),this.b=Ih(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return yt.fromWorkingColorSpace(bn.copy(this),e),Math.round(Jn(bn.r*255,0,255))*65536+Math.round(Jn(bn.g*255,0,255))*256+Math.round(Jn(bn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=mn){yt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Ic);const i=Dh(rs.h,Ic.h,t),r=Dh(rs.s,Ic.s,t),s=Dh(rs.l,Ic.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new St;St.NAMES=BM;let yC=0;class Ld extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=Xu(),this.name="",this.type="Material",this.blending=za,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ym,this.blendDst=Sm,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=nd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==za&&(i.blending=this.blending),this.side!==Hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ym&&(i.blendSrc=this.blendSrc),this.blendDst!==Sm&&(i.blendDst=this.blendDst),this.blendEquation!==ao&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ls extends Ld{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=TM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,Uc=new ht;class Er{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uc.fromBufferAttribute(this,t),Uc.applyMatrix3(e),this.setXY(t,Uc.x,Uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),r=Kn(r,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bv&&(e.usage=this.usage),e}}class HM extends Er{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class GM extends Er{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class sn extends Er{constructor(e,t,i){super(new Float32Array(e),t,i)}}let SC=0;const Di=new Sn,Yh=new wi,ea=new X,di=new Yu,Cl=new Yu,ln=new X;class ur extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=Xu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(UM(e)?GM:HM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new t0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cl.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(di.min,Cl.min),di.expandByPoint(ln),ln.addVectors(di.max,Cl.max),di.expandByPoint(ln)):(di.expandByPoint(Cl.min),di.expandByPoint(Cl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ln.fromBufferAttribute(a,u),l&&(ea.fromBufferAttribute(e,u),ln.add(ea)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Er(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new X,c[E]=new X;const d=new X,h=new X,p=new X,x=new ht,g=new ht,m=new ht,f=new X,_=new X;function v(E,O,I){d.fromArray(r,E*3),h.fromArray(r,O*3),p.fromArray(r,I*3),x.fromArray(o,E*2),g.fromArray(o,O*2),m.fromArray(o,I*2),h.sub(d),p.sub(d),g.sub(x),m.sub(x);const K=1/(g.x*m.y-m.x*g.y);isFinite(K)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(K),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(K),u[E].add(f),u[O].add(f),u[I].add(f),c[E].add(_),c[O].add(_),c[I].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,O=y.length;E<O;++E){const I=y[E],K=I.start,L=I.count;for(let k=K,B=K+L;k<B;k+=3)v(i[k+0],i[k+1],i[k+2])}const w=new X,T=new X,M=new X,P=new X;function S(E){M.fromArray(s,E*3),P.copy(M);const O=u[E];w.copy(O),w.sub(M.multiplyScalar(M.dot(O))).normalize(),T.crossVectors(P,O);const K=T.dot(c[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=K}for(let E=0,O=y.length;E<O;++E){const I=y[E],K=I.start,L=I.count;for(let k=K,B=K+L;k<B;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Er(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new Er(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ex=new Sn,Qs=new dC,Oc=new t0,tx=new X,ta=new X,na=new X,ia=new X,qh=new X,kc=new X,Fc=new ht,zc=new ht,Bc=new ht,nx=new X,ix=new X,rx=new X,Hc=new X,Gc=new X;class Hr extends wi{constructor(e=new ur,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(qh.fromBufferAttribute(d,e),o?kc.addScaledVector(qh,c):kc.addScaledVector(qh.sub(t),c))}t.add(kc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Oc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Oc,tx)===null||Qs.origin.distanceToSquared(tx)>(e.far-e.near)**2))&&(ex.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(ex),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=v;y<w;y+=3){const T=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Vc(this,f,e,i,u,c,d,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Vc(this,o,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=v;y<w;y+=3){const T=y,M=y+1,P=y+2;r=Vc(this,f,e,i,u,c,d,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){const _=m,v=m+1,y=m+2;r=Vc(this,o,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function MC(n,e,t,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hs,a),l===null)return null;Gc.copy(a),Gc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Gc);return u<t.near||u>t.far?null:{distance:u,point:Gc.clone(),object:n}}function Vc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ta),n.getVertexPosition(l,na),n.getVertexPosition(u,ia);const c=MC(n,e,t,i,ta,na,ia,Hc);if(c){r&&(Fc.fromBufferAttribute(r,a),zc.fromBufferAttribute(r,l),Bc.fromBufferAttribute(r,u),c.uv=ir.getInterpolation(Hc,ta,na,ia,Fc,zc,Bc,new ht)),s&&(Fc.fromBufferAttribute(s,a),zc.fromBufferAttribute(s,l),Bc.fromBufferAttribute(s,u),c.uv1=ir.getInterpolation(Hc,ta,na,ia,Fc,zc,Bc,new ht),c.uv2=c.uv1),o&&(nx.fromBufferAttribute(o,a),ix.fromBufferAttribute(o,l),rx.fromBufferAttribute(o,u),c.normal=ir.getInterpolation(Hc,ta,na,ia,nx,ix,rx,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new X,materialIndex:0};ir.getNormal(ta,na,ia,d.normal),c.face=d}return c}class cl extends ur{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(c,3)),this.setAttribute("uv",new sn(d,2));function x(g,m,f,_,v,y,w,T,M,P,S){const E=y/M,O=w/P,I=y/2,K=w/2,L=T/2,k=M+1,B=P+1;let Y=0,U=0;const z=new X;for(let C=0;C<B;C++){const Z=C*O-K;for(let J=0;J<k;J++){const $=J*E-I;z[g]=$*_,z[m]=Z*v,z[f]=L,u.push(z.x,z.y,z.z),z[g]=0,z[m]=0,z[f]=T>0?1:-1,c.push(z.x,z.y,z.z),d.push(J/M),d.push(1-C/P),Y+=1}}for(let C=0;C<P;C++)for(let Z=0;Z<M;Z++){const J=h+Z+k*C,$=h+Z+k*(C+1),Q=h+(Z+1)+k*(C+1),se=h+(Z+1)+k*C;l.push(J,$,se),l.push($,Q,se),U+=6}a.addGroup(p,U,S),p+=U,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zn(n){const e={};for(let t=0;t<n.length;t++){const i=rl(n[t]);for(const r in i)e[r]=i[r]}return e}function EC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VM(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const TC={clone:rl,merge:zn};var wC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ko extends Ld{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wC,this.fragmentShader=AC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rl(e.uniforms),this.uniformsGroups=EC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class WM extends wi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zi extends WM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bm*2*Math.atan(Math.tan(Lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ra=-90,sa=1;class bC extends wi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zi(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new zi(ra,sa,e,t);s.layers=this.layers,this.add(s);const o=new zi(ra,sa,e,t);o.layers=this.layers,this.add(o);const a=new zi(ra,sa,e,t);a.layers=this.layers,this.add(a);const l=new zi(ra,sa,e,t);l.layers=this.layers,this.add(l);const u=new zi(ra,sa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===od)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class XM extends Ti{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:tl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CC extends Oo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(au("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ao?mn:Bi),this.texture=new XM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cl(5,5,5),s=new ko({name:"CubemapFromEquirect",uniforms:rl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Ns});s.uniforms.tEquirect.value=t;const o=new Hr(r,s),a=t.minFilter;return t.minFilter===ku&&(t.minFilter=Fi),new bC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const $h=new X,RC=new X,PC=new it;class so{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$h.subVectors(i,t).cross(RC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($h),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||PC.getNormalMatrix(e),r=this.coplanarPoint($h).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new t0,Wc=new X;class jM{constructor(e=new so,t=new so,i=new so,r=new so,s=new so,o=new so){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],f=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+_).normalize(),i[3].setComponents(l-o,h-c,m-x,y-_).normalize(),i[4].setComponents(l-a,h-d,m-g,y-v).normalize(),t===Br)i[5].setComponents(l+a,h+d,m+g,y+v).normalize();else if(t===od)i[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wc.x=r.normal.x>0?e.max.x:e.min.x,Wc.y=r.normal.y>0?e.max.y:e.min.y,Wc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function YM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function LC(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&x.length===0&&n.bufferSubData(d,0,h),x.length!==0){for(let g=0,m=x.length;g<m;g++){const f=x[g];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class n0 extends ur{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],g=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+u*f,y=_+u*(f+1),w=_+1+u*(f+1),T=_+1+u*f;p.push(v,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n0(e.width,e.height,e.widthSegments,e.heightSegments)}}var DC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BC=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lR="gl_FragColor = linearToOutputTexel( gl_FragColor );",uR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ER=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,FR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,YR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_P=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,HP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$P=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,u3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:DC,alphahash_pars_fragment:NC,alphamap_fragment:IC,alphamap_pars_fragment:UC,alphatest_fragment:OC,alphatest_pars_fragment:kC,aomap_fragment:FC,aomap_pars_fragment:zC,batching_pars_vertex:BC,batching_vertex:HC,begin_vertex:GC,beginnormal_vertex:VC,bsdfs:WC,iridescence_fragment:XC,bumpmap_pars_fragment:jC,clipping_planes_fragment:YC,clipping_planes_pars_fragment:qC,clipping_planes_pars_vertex:$C,clipping_planes_vertex:KC,color_fragment:ZC,color_pars_fragment:QC,color_pars_vertex:JC,color_vertex:eR,common:tR,cube_uv_reflection_fragment:nR,defaultnormal_vertex:iR,displacementmap_pars_vertex:rR,displacementmap_vertex:sR,emissivemap_fragment:oR,emissivemap_pars_fragment:aR,colorspace_fragment:lR,colorspace_pars_fragment:uR,envmap_fragment:cR,envmap_common_pars_fragment:fR,envmap_pars_fragment:dR,envmap_pars_vertex:hR,envmap_physical_pars_fragment:wR,envmap_vertex:pR,fog_vertex:mR,fog_pars_vertex:gR,fog_fragment:_R,fog_pars_fragment:vR,gradientmap_pars_fragment:xR,lightmap_fragment:yR,lightmap_pars_fragment:SR,lights_lambert_fragment:MR,lights_lambert_pars_fragment:ER,lights_pars_begin:TR,lights_toon_fragment:AR,lights_toon_pars_fragment:bR,lights_phong_fragment:CR,lights_phong_pars_fragment:RR,lights_physical_fragment:PR,lights_physical_pars_fragment:LR,lights_fragment_begin:DR,lights_fragment_maps:NR,lights_fragment_end:IR,logdepthbuf_fragment:UR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:kR,logdepthbuf_vertex:FR,map_fragment:zR,map_pars_fragment:BR,map_particle_fragment:HR,map_particle_pars_fragment:GR,metalnessmap_fragment:VR,metalnessmap_pars_fragment:WR,morphcolor_vertex:XR,morphnormal_vertex:jR,morphtarget_pars_vertex:YR,morphtarget_vertex:qR,normal_fragment_begin:$R,normal_fragment_maps:KR,normal_pars_fragment:ZR,normal_pars_vertex:QR,normal_vertex:JR,normalmap_pars_fragment:eP,clearcoat_normal_fragment_begin:tP,clearcoat_normal_fragment_maps:nP,clearcoat_pars_fragment:iP,iridescence_pars_fragment:rP,opaque_fragment:sP,packing:oP,premultiplied_alpha_fragment:aP,project_vertex:lP,dithering_fragment:uP,dithering_pars_fragment:cP,roughnessmap_fragment:fP,roughnessmap_pars_fragment:dP,shadowmap_pars_fragment:hP,shadowmap_pars_vertex:pP,shadowmap_vertex:mP,shadowmask_pars_fragment:gP,skinbase_vertex:_P,skinning_pars_vertex:vP,skinning_vertex:xP,skinnormal_vertex:yP,specularmap_fragment:SP,specularmap_pars_fragment:MP,tonemapping_fragment:EP,tonemapping_pars_fragment:TP,transmission_fragment:wP,transmission_pars_fragment:AP,uv_pars_fragment:bP,uv_pars_vertex:CP,uv_vertex:RP,worldpos_vertex:PP,background_vert:LP,background_frag:DP,backgroundCube_vert:NP,backgroundCube_frag:IP,cube_vert:UP,cube_frag:OP,depth_vert:kP,depth_frag:FP,distanceRGBA_vert:zP,distanceRGBA_frag:BP,equirect_vert:HP,equirect_frag:GP,linedashed_vert:VP,linedashed_frag:WP,meshbasic_vert:XP,meshbasic_frag:jP,meshlambert_vert:YP,meshlambert_frag:qP,meshmatcap_vert:$P,meshmatcap_frag:KP,meshnormal_vert:ZP,meshnormal_frag:QP,meshphong_vert:JP,meshphong_frag:e3,meshphysical_vert:t3,meshphysical_frag:n3,meshtoon_vert:i3,meshtoon_frag:r3,points_vert:s3,points_frag:o3,shadow_vert:a3,shadow_frag:l3,sprite_vert:u3,sprite_frag:c3},pe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},pr={basic:{uniforms:zn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:zn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new St(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:zn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:zn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:zn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new St(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:zn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:zn([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:zn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:zn([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:zn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:zn([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:zn([pe.common,pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:zn([pe.lights,pe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};pr.physical={uniforms:zn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Xc={r:0,b:0,g:0};function f3(n,e,t,i,r,s,o){const a=new St(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let _=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cd)?(c===void 0&&(c=new Hr(new cl(1,1,1),new ko({name:"BackgroundCubeMaterial",uniforms:rl(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(v.colorSpace)!==Pt,(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Hr(new n0(2,2),new ko({name:"BackgroundMaterial",uniforms:rl(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(v.colorSpace)!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Xc,VM(n)),i.buffers.color.setClear(Xc.r,Xc.g,Xc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function d3(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(L,k,B,Y,U){let z=!1;if(o){const C=g(Y,B,k);u!==C&&(u=C,p(u.object)),z=f(L,Y,B,U),z&&_(L,Y,B,U)}else{const C=k.wireframe===!0;(u.geometry!==Y.id||u.program!==B.id||u.wireframe!==C)&&(u.geometry=Y.id,u.program=B.id,u.wireframe=C,z=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,P(L,k,B,Y),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,k,B){const Y=B.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let z=U[k.id];z===void 0&&(z={},U[k.id]=z);let C=z[Y];return C===void 0&&(C=m(h()),z[Y]=C),C}function m(L){const k=[],B=[],Y=[];for(let U=0;U<r;U++)k[U]=0,B[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,k,B,Y){const U=u.attributes,z=k.attributes;let C=0;const Z=B.getAttributes();for(const J in Z)if(Z[J].location>=0){const Q=U[J];let se=z[J];if(se===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;C++}return u.attributesNum!==C||u.index!==Y}function _(L,k,B,Y){const U={},z=k.attributes;let C=0;const Z=B.getAttributes();for(const J in Z)if(Z[J].location>=0){let Q=z[J];Q===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),U[J]=se,C++}u.attributes=U,u.attributesNum=C,u.index=Y}function v(){const L=u.newAttributes;for(let k=0,B=L.length;k<B;k++)L[k]=0}function y(L){w(L,0)}function w(L,k){const B=u.newAttributes,Y=u.enabledAttributes,U=u.attributeDivisors;B[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),U[L]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),U[L]=k)}function T(){const L=u.newAttributes,k=u.enabledAttributes;for(let B=0,Y=k.length;B<Y;B++)k[B]!==L[B]&&(n.disableVertexAttribArray(B),k[B]=0)}function M(L,k,B,Y,U,z,C){C===!0?n.vertexAttribIPointer(L,k,B,U,z):n.vertexAttribPointer(L,k,B,Y,U,z)}function P(L,k,B,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=Y.attributes,z=B.getAttributes(),C=k.defaultAttributeValues;for(const Z in z){const J=z[Z];if(J.location>=0){let $=U[Z];if($===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){const Q=$.normalized,se=$.itemSize,me=t.get($);if(me===void 0)continue;const de=me.buffer,De=me.type,Ne=me.bytesPerElement,Oe=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||$.gpuType===AM);if($.isInterleavedBufferAttribute){const We=$.data,V=We.stride,Xe=$.offset;if(We.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)w(J.location+ve,We.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ve=0;ve<J.locationSize;ve++)y(J.location+ve);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ve=0;ve<J.locationSize;ve++)M(J.location+ve,se/J.locationSize,De,Q,V*Ne,(Xe+se/J.locationSize*ve)*Ne,Oe)}else{if($.isInstancedBufferAttribute){for(let We=0;We<J.locationSize;We++)w(J.location+We,$.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let We=0;We<J.locationSize;We++)y(J.location+We);n.bindBuffer(n.ARRAY_BUFFER,de);for(let We=0;We<J.locationSize;We++)M(J.location+We,se/J.locationSize,De,Q,se*Ne,se/J.locationSize*We*Ne,Oe)}}else if(C!==void 0){const Q=C[Z];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(J.location,Q);break;case 3:n.vertexAttrib3fv(J.location,Q);break;case 4:n.vertexAttrib4fv(J.location,Q);break;default:n.vertexAttrib1fv(J.location,Q)}}}}T()}function S(){I();for(const L in a){const k=a[L];for(const B in k){const Y=k[B];for(const U in Y)x(Y[U].object),delete Y[U];delete k[B]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const B in k){const Y=k[B];for(const U in Y)x(Y[U].object),delete Y[U];delete k[B]}delete a[L.id]}function O(L){for(const k in a){const B=a[k];if(B[L.id]===void 0)continue;const Y=B[L.id];for(const U in Y)x(Y[U].object),delete Y[U];delete B[L.id]}}function I(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function h3(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],d[x]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function p3(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),w=v&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function m3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new so,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,v=_*4;let y=f.clippingState||null;l.value=y,y=c(x,h,v,p);for(let w=0;w!==v;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const f=p+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function g3(n){let e=new WeakMap;function t(o,a){return a===Mm?o.mapping=tl:a===Em&&(o.mapping=nl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mm||a===Em)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new CC(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _3 extends WM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ta=4,sx=[.125,.215,.35,.446,.526,.582],lo=20,Kh=new _3,ox=new St;let Zh=null,Qh=0,Jh=0;const oo=(1+Math.sqrt(5))/2,oa=1/oo,ax=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,oo,oa),new X(0,oo,-oa),new X(oa,0,oo),new X(-oa,0,oo),new X(oo,oa,0),new X(-oo,oa,0)];class lx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zh,Qh,Jh),e.scissorTest=!1,jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tl||e.mapping===nl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Fu,format:sr,colorSpace:Zr,depthBuffer:!1},r=ux(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ux(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v3(s)),this._blurMaterial=x3(s,e,t)}return r}_compileMaterial(e){const t=new Hr(this._lodPlanes[0],e);this._renderer.compile(t,Kh)}_sceneToCubeUV(e,t,i,r){const a=new zi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(ox),c.toneMapping=Is,c.autoClear=!1;const p=new ls({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),x=new Hr(new cl,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(ox),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;jc(r,_*v,f>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===tl||e.mapping===nl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;jc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ax[(r-1)%ax.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Hr(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lo-1),g=s/x,m=isFinite(s)?1+Math.floor(c*g):lo;m>lo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lo}`);const f=[];let _=0;for(let M=0;M<lo;++M){const P=M/g,S=Math.exp(-P*P/2);f.push(S),M===0?_+=S:M<m&&(_+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],w=3*y*(r>v-Ta?r-v+Ta:0),T=4*(this._cubeSize-y);jc(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Kh)}}function v3(n){const e=[],t=[],i=[];let r=n;const s=n-Ta+1+sx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ta?l=sx[o-n+Ta-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,g=3,m=2,f=1,_=new Float32Array(g*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,P=T>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];_.set(S,g*x*T),v.set(h,m*x*T);const E=[T,T,T,T,T,T];y.set(E,f*x*T)}const w=new ur;w.setAttribute("position",new Er(_,g)),w.setAttribute("uv",new Er(v,m)),w.setAttribute("faceIndex",new Er(y,f)),e.push(w),r>Ta&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ux(n,e,t){const i=new Oo(n,e,t);return i.texture.mapping=Cd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function x3(n,e,t){const i=new Float32Array(lo),r=new X(0,1,0);return new ko({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:i0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function cx(){return new ko({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:i0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function fx(){return new ko({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:i0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function i0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y3(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Mm||l===Em,c=l===tl||l===nl;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new lx(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new lx(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function S3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function M3(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const g=h.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const g=p[x];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let v=0,y=_.length;v<y;v+=3){const w=_[v+0],T=_[v+1],M=_[v+2];h.push(w,T,T,M,M,w)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const w=v+0,T=v+1,M=v+2;h.push(w,T,T,M,M,w)}}else return;const m=new(UM(h)?GM:HM)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function E3(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function d(p,x,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,g),t.update(x,s,g)}function h(p,x,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,g);let f=0;for(let _=0;_<g;_++)f+=x[_];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function T3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function w3(n,e){return n[0]-e[0]}function A3(n,e){return Math.abs(e[1])-Math.abs(n[1])}function b3(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _n,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let k=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let E=c.attributes.position.count*S,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const I=new Float32Array(E*O*4*g),K=new FM(I,E,O,g);K.type=xs,K.needsUpdate=!0;const L=S*4;for(let B=0;B<g;B++){const Y=T[B],U=M[B],z=P[B],C=E*O*4*B;for(let Z=0;Z<Y.count;Z++){const J=Z*L;v===!0&&(o.fromBufferAttribute(Y,Z),I[C+J+0]=o.x,I[C+J+1]=o.y,I[C+J+2]=o.z,I[C+J+3]=0),y===!0&&(o.fromBufferAttribute(U,Z),I[C+J+4]=o.x,I[C+J+5]=o.y,I[C+J+6]=o.z,I[C+J+7]=0),w===!0&&(o.fromBufferAttribute(z,Z),I[C+J+8]=o.x,I[C+J+9]=o.y,I[C+J+10]=o.z,I[C+J+11]=z.itemSize===4?o.w:1)}}m={count:g,texture:K,size:new ht(E,O)},s.set(c,m),c.addEventListener("dispose",k)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==x){g=[];for(let y=0;y<x;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<x;y++){const w=g[y];w[0]=y,w[1]=h[y]}g.sort(A3);for(let y=0;y<8;y++)y<x&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(w3);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),f&&c.getAttribute("morphNormal"+y)!==f[T]&&c.setAttribute("morphNormal"+y,f[T]),r[y]=M,_+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function C3(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class qM extends Ti{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:wo,c!==wo&&c!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===wo&&(i=vs),i===void 0&&c===il&&(i=To),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wn,this.minFilter=l!==void 0?l:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $M=new Ti,KM=new qM(1,1);KM.compareFunction=IM;const ZM=new FM,QM=new cC,JM=new XM,dx=[],hx=[],px=new Float32Array(16),mx=new Float32Array(9),gx=new Float32Array(4);function fl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dx[r];if(s===void 0&&(s=new Float32Array(r),dx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dd(n,e){let t=hx[e];t===void 0&&(t=new Int32Array(e),hx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function L3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function D3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function N3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;gx.set(i),n.uniformMatrix2fv(this.addr,!1,gx),an(t,i)}}function I3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;mx.set(i),n.uniformMatrix3fv(this.addr,!1,mx),an(t,i)}}function U3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;px.set(i),n.uniformMatrix4fv(this.addr,!1,px),an(t,i)}}function O3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function F3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function B3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function H3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function G3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function V3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function W3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?KM:$M;t.setTexture2D(e||s,r)}function X3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||QM,r)}function j3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||JM,r)}function Y3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ZM,r)}function q3(n){switch(n){case 5126:return R3;case 35664:return P3;case 35665:return L3;case 35666:return D3;case 35674:return N3;case 35675:return I3;case 35676:return U3;case 5124:case 35670:return O3;case 35667:case 35671:return k3;case 35668:case 35672:return F3;case 35669:case 35673:return z3;case 5125:return B3;case 36294:return H3;case 36295:return G3;case 36296:return V3;case 35678:case 36198:case 36298:case 36306:case 35682:return W3;case 35679:case 36299:case 36307:return X3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return Y3}}function $3(n,e){n.uniform1fv(this.addr,e)}function K3(n,e){const t=fl(e,this.size,2);n.uniform2fv(this.addr,t)}function Z3(n,e){const t=fl(e,this.size,3);n.uniform3fv(this.addr,t)}function Q3(n,e){const t=fl(e,this.size,4);n.uniform4fv(this.addr,t)}function J3(n,e){const t=fl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eL(n,e){const t=fl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tL(n,e){const t=fl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nL(n,e){n.uniform1iv(this.addr,e)}function iL(n,e){n.uniform2iv(this.addr,e)}function rL(n,e){n.uniform3iv(this.addr,e)}function sL(n,e){n.uniform4iv(this.addr,e)}function oL(n,e){n.uniform1uiv(this.addr,e)}function aL(n,e){n.uniform2uiv(this.addr,e)}function lL(n,e){n.uniform3uiv(this.addr,e)}function uL(n,e){n.uniform4uiv(this.addr,e)}function cL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$M,s[o])}function fL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||QM,s[o])}function dL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||JM,s[o])}function hL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ZM,s[o])}function pL(n){switch(n){case 5126:return $3;case 35664:return K3;case 35665:return Z3;case 35666:return Q3;case 35674:return J3;case 35675:return eL;case 35676:return tL;case 5124:case 35670:return nL;case 35667:case 35671:return iL;case 35668:case 35672:return rL;case 35669:case 35673:return sL;case 5125:return oL;case 36294:return aL;case 36295:return lL;case 36296:return uL;case 35678:case 36198:case 36298:case 36306:case 35682:return cL;case 35679:case 36299:case 36307:return fL;case 35680:case 36300:case 36308:case 36293:return dL;case 36289:case 36303:case 36311:case 36292:return hL}}class mL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=q3(t.type)}}class gL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pL(t.type)}}class _L{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function _x(n,e){n.seq.push(e),n.map[e.id]=e}function vL(n,e,t){const i=n.name,r=i.length;for(ep.lastIndex=0;;){const s=ep.exec(i),o=ep.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_x(t,u===void 0?new mL(a,n,e):new gL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new _L(a),_x(t,d)),t=d}}}class gf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function vx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xL=37297;let yL=0;function SL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ML(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===sd&&t===rd?i="LinearDisplayP3ToLinearSRGB":e===rd&&t===sd&&(i="LinearSRGBToLinearDisplayP3"),n){case Zr:case Rd:return[i,"LinearTransferOETF"];case mn:case e0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+SL(n.getShaderSource(e),o)}else return r}function EL(n,e){const t=ML(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function TL(n,e){let t;switch(e){case Db:t="Linear";break;case Nb:t="Reinhard";break;case Ib:t="OptimizedCineon";break;case Ub:t="ACESFilmic";break;case kb:t="AgX";break;case Ob:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wa).join(`
`)}function AL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wa).join(`
`)}function bL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wa(n){return n!==""}function yx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rm(n){return n.replace(RL,LL)}const PL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LL(n,e){let t=Ze[e];if(t===void 0){const i=PL.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rm(t)}const DL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mx(n){return n.replace(DL,NL)}function NL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ex(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===EM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ob?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function UL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tl:case nl:e="ENVMAP_TYPE_CUBE";break;case Cd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nl:e="ENVMAP_MODE_REFRACTION";break}return e}function kL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case TM:e="ENVMAP_BLENDING_MULTIPLY";break;case Pb:e="ENVMAP_BLENDING_MIX";break;case Lb:e="ENVMAP_BLENDING_ADD";break}return e}function FL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function zL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IL(t),u=UL(t),c=OL(t),d=kL(t),h=FL(t),p=t.isWebGL2?"":wL(t),x=AL(t),g=bL(s),m=r.createProgram();let f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wa).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wa).join(`
`),_.length>0&&(_+=`
`)):(f=[Ex(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),_=[p,Ex(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Is?TL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,EL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),o=Rm(o),o=yx(o,t),o=Sx(o,t),a=Rm(a),a=yx(a,t),a=Sx(a,t),o=Mx(o),a=Mx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+f+o,w=v+_+a,T=vx(r,r.VERTEX_SHADER,y),M=vx(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(I){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(M).trim();let B=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,M);else{const U=xx(r,T,"vertex"),z=xx(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+U+`
`+z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||k==="")&&(Y=!1);Y&&(I.diagnostics={runnable:B,programLog:K,vertexShader:{log:L,prefix:f},fragmentShader:{log:k,prefix:_}})}r.deleteShader(T),r.deleteShader(M),S=new gf(r,m),E=CL(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,xL)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}let BL=0;class HL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GL(e),t.set(e,i)),i}}class GL{constructor(e){this.id=BL++,this.code=e,this.usedTimes=0}}function VL(n,e,t,i,r,s,o){const a=new zM,l=new HL,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,O,I,K){const L=I.fog,k=K.geometry,B=S.isMeshStandardMaterial?I.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),U=Y&&Y.mapping===Cd?Y.image.height:null,z=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const C=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Z=C!==void 0?C.length:0;let J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let $,Q,se,me;if(z){const Me=pr[z];$=Me.vertexShader,Q=Me.fragmentShader}else $=S.vertexShader,Q=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const de=n.getRenderTarget(),De=K.isInstancedMesh===!0,Ne=K.isBatchedMesh===!0,Oe=!!S.map,We=!!S.matcap,V=!!Y,Xe=!!S.aoMap,ve=!!S.lightMap,Ie=!!S.bumpMap,xe=!!S.normalMap,W=!!S.displacementMap,Be=!!S.emissiveMap,R=!!S.metalnessMap,A=!!S.roughnessMap,H=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,_e=S.transmission>0,he=H&&!!S.anisotropyMap,fe=ne&&!!S.clearcoatMap,Ce=ne&&!!S.clearcoatNormalMap,Ve=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,ut=te&&!!S.iridescenceThicknessMap,Pe=ie&&!!S.sheenColorMap,je=ie&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ye=!!S.specularColorMap,Ye=!!S.specularIntensityMap,et=_e&&!!S.transmissionMap,pt=_e&&!!S.thicknessMap,ge=!!S.gradientMap,ae=!!S.alphaMap,N=S.alphaTest>0,le=!!S.alphaHash,ue=!!S.extensions,Fe=!!k.attributes.uv1,Ue=!!k.attributes.uv2,at=!!k.attributes.uv3;let dt=Is;return S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:c,shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:$,fragmentShader:Q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ne,instancing:De,instancingColor:De&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Zr,map:Oe,matcap:We,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:U,aoMap:Xe,lightMap:ve,bumpMap:Ie,normalMap:xe,displacementMap:h&&W,emissiveMap:Be,normalMapObjectSpace:xe&&S.normalMapType===Kb,normalMapTangentSpace:xe&&S.normalMapType===$b,metalnessMap:R,roughnessMap:A,anisotropy:H,anisotropyMap:he,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ve,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:ut,sheen:ie,sheenColorMap:Pe,sheenRoughnessMap:je,specularMap:Ae,specularColorMap:ye,specularIntensityMap:Ye,transmission:_e,transmissionMap:et,thicknessMap:pt,gradientMap:ge,opaque:S.transparent===!1&&S.blending===za,alphaMap:ae,alphaTest:N,alphaHash:le,combine:S.combine,mapUv:Oe&&g(S.map.channel),aoMapUv:Xe&&g(S.aoMap.channel),lightMapUv:ve&&g(S.lightMap.channel),bumpMapUv:Ie&&g(S.bumpMap.channel),normalMapUv:xe&&g(S.normalMap.channel),displacementMapUv:W&&g(S.displacementMap.channel),emissiveMapUv:Be&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:he&&g(S.anisotropyMap.channel),clearcoatMapUv:fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(S.sheenRoughnessMap.channel),specularMapUv:Ae&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:Ye&&g(S.specularIntensityMap.channel),transmissionMapUv:et&&g(S.transmissionMap.channel),thicknessMapUv:pt&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(xe||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ue,vertexUv3s:at,pointsUvs:K.isPoints===!0&&!!k.attributes.uv&&(Oe||ae),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Or,flipSided:S.side===li,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ue&&S.extensions.derivatives===!0,extensionFragDepth:ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)E.push(O),E.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(_(E,S),v(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=x[S.type];let O;if(E){const I=pr[E];O=TC.clone(I.uniforms)}else O=S.uniforms;return O}function w(S,E){let O;for(let I=0,K=u.length;I<K;I++){const L=u[I];if(L.cacheKey===E){O=L,++O.usedTimes;break}}return O===void 0&&(O=new zL(n,E,S,s),u.push(O)),O}function T(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:P}}function WL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function XL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Tx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,g,m){const f=o(d,h,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||XL),i.length>1&&i.sort(h||Tx),r.length>1&&r.sort(h||Tx)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function jL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new wx,n.set(i,[o])):r>=s.length?(o=new wx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function YL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new St};break;case"SpotLight":t={position:new X,direction:new X,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function qL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $L=0;function KL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZL(n,e){const t=new YL,i=qL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,o=new Sn,a=new Sn;function l(c,d){let h=0,p=0,x=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let g=0,m=0,f=0,_=0,v=0,y=0,w=0,T=0,M=0,P=0,S=0;c.sort(KL);const E=d===!0?Math.PI:1;for(let I=0,K=c.length;I<K;I++){const L=c[I],k=L.color,B=L.intensity,Y=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*B*E,p+=k.g*B*E,x+=k.b*B*E;else if(L.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(L.sh.coefficients[z],B);S++}else if(L.isDirectionalLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const C=L.shadow,Z=i.get(L);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,r.directionalShadow[g]=Z,r.directionalShadowMap[g]=U,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=z,g++}else if(L.isSpotLight){const z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(k).multiplyScalar(B*E),z.distance=Y,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,r.spot[f]=z;const C=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,C.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=C.matrix,L.castShadow){const Z=i.get(L);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,r.spotShadow[f]=Z,r.spotShadowMap[f]=U,T++}f++}else if(L.isRectAreaLight){const z=t.get(L);z.color.copy(k).multiplyScalar(B),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=z,_++}else if(L.isPointLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*E),z.distance=L.distance,z.decay=L.decay,L.castShadow){const C=L.shadow,Z=i.get(L);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=z,m++}else if(L.isHemisphereLight){const z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(B*E),z.groundColor.copy(L.groundColor).multiplyScalar(B*E),r.hemi[v]=z,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const O=r.hash;(O.directionalLength!==g||O.pointLength!==m||O.spotLength!==f||O.rectAreaLength!==_||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==w||O.numSpotShadows!==T||O.numSpotMaps!==M||O.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,O.directionalLength=g,O.pointLength=m,O.spotLength=f,O.rectAreaLength=_,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=w,O.numSpotShadows=T,O.numSpotMaps=M,O.numLightProbes=S,r.version=$L++)}function u(c,d){let h=0,p=0,x=0,g=0,m=0;const f=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Ax(n,e){const t=new ZL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function QL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ax(n,e),t.set(s,[l])):o>=a.length?(l=new Ax(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class JL extends Ld{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eD extends Ld{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iD(n,e,t){let i=new jM;const r=new ht,s=new ht,o=new _n,a=new JL({depthPacking:qb}),l=new eD,u={},c=t.maxTextureSize,d={[Hs]:li,[li]:Hs,[Or]:Or},h=new ko({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:tD,fragmentShader:nD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ur;x.setAttribute("position",new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Hr(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=EM;let f=this.type;this.render=function(T,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ns),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const K=f!==Pr&&this.type===Pr,L=f===Pr&&this.type!==Pr;for(let k=0,B=T.length;k<B;k++){const Y=T[k],U=Y.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const z=U.getFrameExtents();if(r.multiply(z),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/z.y),r.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null||K===!0||L===!0){const Z=this.type!==Pr?{minFilter:Wn,magFilter:Wn}:{};U.map!==null&&U.map.dispose(),U.map=new Oo(r.x,r.y,Z),U.map.texture.name=Y.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const C=U.getViewportCount();for(let Z=0;Z<C;Z++){const J=U.getViewport(Z);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),I.viewport(o),U.updateMatrices(Y,Z),i=U.getFrustum(),y(M,P,U.camera,Y,this.type)}U.isPointLightShadow!==!0&&this.type===Pr&&_(U,P),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,O)};function _(T,M){const P=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Oo(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,P,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,P,p,g,null)}function v(T,M,P,S){let E=null;const O=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)E=O;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=E.uuid,K=M.uuid;let L=u[I];L===void 0&&(L={},u[I]=L);let k=L[K];k===void 0&&(k=E.clone(),L[K]=k,M.addEventListener("dispose",w)),E=k}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Pr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:d[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=n.properties.get(E);I.light=P}return E}function y(T,M,P,S,E){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Pr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const K=e.update(T),L=T.material;if(Array.isArray(L)){const k=K.groups;for(let B=0,Y=k.length;B<Y;B++){const U=k[B],z=L[U.materialIndex];if(z&&z.visible){const C=v(T,z,S,E);T.onBeforeShadow(n,T,M,P,K,C,U),n.renderBufferDirect(P,null,K,C,T,U),T.onAfterShadow(n,T,M,P,K,C,U)}}}else if(L.visible){const k=v(T,L,S,E);T.onBeforeShadow(n,T,M,P,K,k,null),n.renderBufferDirect(P,null,K,k,T,null),T.onAfterShadow(n,T,M,P,K,k,null)}}const I=T.children;for(let K=0,L=I.length;K<L;K++)y(I[K],M,P,S,E)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const S=u[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function rD(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const le=new _n;let ue=null;const Fe=new _n(0,0,0,0);return{setMask:function(Ue){ue!==Ue&&!N&&(n.colorMask(Ue,Ue,Ue,Ue),ue=Ue)},setLocked:function(Ue){N=Ue},setClear:function(Ue,at,dt,be,Me){Me===!0&&(Ue*=be,at*=be,dt*=be),le.set(Ue,at,dt,be),Fe.equals(le)===!1&&(n.clearColor(Ue,at,dt,be),Fe.copy(le))},reset:function(){N=!1,ue=null,Fe.set(-1,0,0,0)}}}function s(){let N=!1,le=null,ue=null,Fe=null;return{setTest:function(Ue){Ue?Ne(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(Ue){le!==Ue&&!N&&(n.depthMask(Ue),le=Ue)},setFunc:function(Ue){if(ue!==Ue){switch(Ue){case Eb:n.depthFunc(n.NEVER);break;case Tb:n.depthFunc(n.ALWAYS);break;case wb:n.depthFunc(n.LESS);break;case nd:n.depthFunc(n.LEQUAL);break;case Ab:n.depthFunc(n.EQUAL);break;case bb:n.depthFunc(n.GEQUAL);break;case Cb:n.depthFunc(n.GREATER);break;case Rb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ue}},setLocked:function(Ue){N=Ue},setClear:function(Ue){Fe!==Ue&&(n.clearDepth(Ue),Fe=Ue)},reset:function(){N=!1,le=null,ue=null,Fe=null}}}function o(){let N=!1,le=null,ue=null,Fe=null,Ue=null,at=null,dt=null,be=null,Me=null;return{setTest:function(Le){N||(Le?Ne(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Le){le!==Le&&!N&&(n.stencilMask(Le),le=Le)},setFunc:function(Le,oe,ze){(ue!==Le||Fe!==oe||Ue!==ze)&&(n.stencilFunc(Le,oe,ze),ue=Le,Fe=oe,Ue=ze)},setOp:function(Le,oe,ze){(at!==Le||dt!==oe||be!==ze)&&(n.stencilOp(Le,oe,ze),at=Le,dt=oe,be=ze)},setLocked:function(Le){N=Le},setClear:function(Le){Me!==Le&&(n.clearStencil(Le),Me=Le)},reset:function(){N=!1,le=null,ue=null,Fe=null,Ue=null,at=null,dt=null,be=null,Me=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,v=null,y=null,w=null,T=null,M=null,P=null,S=new St(0,0,0),E=0,O=!1,I=null,K=null,L=null,k=null,B=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(C)[1]),U=z>=1):C.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),U=z>=2);let Z=null,J={};const $=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),se=new _n().fromArray($),me=new _n().fromArray(Q);function de(N,le,ue,Fe){const Ue=new Uint8Array(4),at=n.createTexture();n.bindTexture(N,at),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<ue;dt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(le+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return at}const De={};De[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ne(n.DEPTH_TEST),l.setFunc(nd),Be(!1),R(av),Ne(n.CULL_FACE),xe(Ns);function Ne(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Oe(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function We(N,le){return p[N]!==le?(n.bindFramebuffer(N,le),p[N]=le,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function V(N,le){let ue=g,Fe=!1;if(N)if(ue=x.get(le),ue===void 0&&(ue=[],x.set(le,ue)),N.isWebGLMultipleRenderTargets){const Ue=N.texture;if(ue.length!==Ue.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let at=0,dt=Ue.length;at<dt;at++)ue[at]=n.COLOR_ATTACHMENT0+at;ue.length=Ue.length,Fe=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,Fe=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Xe(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ve={[ao]:n.FUNC_ADD,[lb]:n.FUNC_SUBTRACT,[ub]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[fv]=n.MIN,ve[dv]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ve[fv]=N.MIN_EXT,ve[dv]=N.MAX_EXT)}const Ie={[cb]:n.ZERO,[fb]:n.ONE,[db]:n.SRC_COLOR,[ym]:n.SRC_ALPHA,[vb]:n.SRC_ALPHA_SATURATE,[gb]:n.DST_COLOR,[pb]:n.DST_ALPHA,[hb]:n.ONE_MINUS_SRC_COLOR,[Sm]:n.ONE_MINUS_SRC_ALPHA,[_b]:n.ONE_MINUS_DST_COLOR,[mb]:n.ONE_MINUS_DST_ALPHA,[xb]:n.CONSTANT_COLOR,[yb]:n.ONE_MINUS_CONSTANT_COLOR,[Sb]:n.CONSTANT_ALPHA,[Mb]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(N,le,ue,Fe,Ue,at,dt,be,Me,Le){if(N===Ns){f===!0&&(Oe(n.BLEND),f=!1);return}if(f===!1&&(Ne(n.BLEND),f=!0),N!==ab){if(N!==_||Le!==O){if((v!==ao||T!==ao)&&(n.blendEquation(n.FUNC_ADD),v=ao,T=ao),Le)switch(N){case za:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lv:n.blendFunc(n.ONE,n.ONE);break;case uv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,w=null,M=null,P=null,S.set(0,0,0),E=0,_=N,O=Le}return}Ue=Ue||le,at=at||ue,dt=dt||Fe,(le!==v||Ue!==T)&&(n.blendEquationSeparate(ve[le],ve[Ue]),v=le,T=Ue),(ue!==y||Fe!==w||at!==M||dt!==P)&&(n.blendFuncSeparate(Ie[ue],Ie[Fe],Ie[at],Ie[dt]),y=ue,w=Fe,M=at,P=dt),(be.equals(S)===!1||Me!==E)&&(n.blendColor(be.r,be.g,be.b,Me),S.copy(be),E=Me),_=N,O=!1}function W(N,le){N.side===Or?Oe(n.CULL_FACE):Ne(n.CULL_FACE);let ue=N.side===li;le&&(ue=!ue),Be(ue),N.blending===za&&N.transparent===!1?xe(Ns):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Fe=N.stencilWrite;u.setTest(Fe),Fe&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),H(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){I!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),I=N)}function R(N){N!==rb?(Ne(n.CULL_FACE),N!==K&&(N===av?n.cullFace(n.BACK):N===sb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),K=N}function A(N){N!==L&&(U&&n.lineWidth(N),L=N)}function H(N,le,ue){N?(Ne(n.POLYGON_OFFSET_FILL),(k!==le||B!==ue)&&(n.polygonOffset(le,ue),k=le,B=ue)):Oe(n.POLYGON_OFFSET_FILL)}function ne(N){N?Ne(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function te(N){N===void 0&&(N=n.TEXTURE0+Y-1),Z!==N&&(n.activeTexture(N),Z=N)}function ie(N,le,ue){ue===void 0&&(Z===null?ue=n.TEXTURE0+Y-1:ue=Z);let Fe=J[ue];Fe===void 0&&(Fe={type:void 0,texture:void 0},J[ue]=Fe),(Fe.type!==N||Fe.texture!==le)&&(Z!==ue&&(n.activeTexture(ue),Z=ue),n.bindTexture(N,le||De[N]),Fe.type=N,Fe.texture=le)}function _e(){const N=J[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(N){se.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function et(N){me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function pt(N,le){let ue=d.get(le);ue===void 0&&(ue=new WeakMap,d.set(le,ue));let Fe=ue.get(N);Fe===void 0&&(Fe=n.getUniformBlockIndex(le,N.name),ue.set(N,Fe))}function ge(N,le){const Fe=d.get(le).get(N);c.get(le)!==Fe&&(n.uniformBlockBinding(le,Fe,N.__bindingPointIndex),c.set(le,Fe))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,J={},p={},x=new WeakMap,g=[],m=null,f=!1,_=null,v=null,y=null,w=null,T=null,M=null,P=null,S=new St(0,0,0),E=0,O=!1,I=null,K=null,L=null,k=null,B=null,se.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ne,disable:Oe,bindFramebuffer:We,drawBuffers:V,useProgram:Xe,setBlending:xe,setMaterial:W,setFlipSided:Be,setCullFace:R,setLineWidth:A,setPolygonOffset:H,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:he,compressedTexImage3D:fe,texImage2D:Ae,texImage3D:ye,updateUBOMapping:pt,uniformBlockBinding:ge,texStorage2D:Pe,texStorage3D:je,texSubImage2D:Ce,texSubImage3D:Ve,compressedTexSubImage2D:ee,compressedTexSubImage3D:ut,scissor:Ye,viewport:et,reset:ae}}function sD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,A){return p?new OffscreenCanvas(R,A):ad("canvas")}function g(R,A,H,ne){let te=1;if((R.width>ne||R.height>ne)&&(te=ne/Math.max(R.width,R.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=A?Cm:Math.floor,_e=ie(te*R.width),he=ie(te*R.height);d===void 0&&(d=x(_e,he));const fe=H?x(_e,he):d;return fe.width=_e,fe.height=he,fe.getContext("2d").drawImage(R,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+he+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Gv(R.width)&&Gv(R.height)}function f(R){return a?!1:R.wrapS!==rr||R.wrapT!==rr||R.minFilter!==Wn&&R.minFilter!==Fi}function _(R,A){return R.generateMipmaps&&A&&R.minFilter!==Wn&&R.minFilter!==Fi}function v(R){n.generateMipmap(R)}function y(R,A,H,ne,te=!1){if(a===!1)return A;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=A;if(A===n.RED&&(H===n.FLOAT&&(ie=n.R32F),H===n.HALF_FLOAT&&(ie=n.R16F),H===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.R8UI),H===n.UNSIGNED_SHORT&&(ie=n.R16UI),H===n.UNSIGNED_INT&&(ie=n.R32UI),H===n.BYTE&&(ie=n.R8I),H===n.SHORT&&(ie=n.R16I),H===n.INT&&(ie=n.R32I)),A===n.RG&&(H===n.FLOAT&&(ie=n.RG32F),H===n.HALF_FLOAT&&(ie=n.RG16F),H===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const _e=te?id:yt.getTransfer(ne);H===n.FLOAT&&(ie=n.RGBA32F),H===n.HALF_FLOAT&&(ie=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ie=_e===Pt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(R,A,H){return _(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==Wn&&R.minFilter!==Fi?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===Wn||R===hv||R===wh?n.NEAREST:n.LINEAR}function M(R){const A=R.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(R){const A=R.target;A.removeEventListener("dispose",P),O(A)}function S(R){const A=i.get(R);if(A.__webglInit===void 0)return;const H=R.source,ne=h.get(H);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(R),Object.keys(ne).length===0&&h.delete(H)}i.remove(R)}function E(R){const A=i.get(R);n.deleteTexture(A.__webglTexture);const H=R.source,ne=h.get(H);delete ne[A.__cacheKey],o.memory.textures--}function O(R){const A=R.texture,H=i.get(R),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let ie=0;ie<H.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(H.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)n.deleteFramebuffer(H.__webglFramebuffer[te]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const _e=i.get(A[te]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(R)}let I=0;function K(){I=0}function L(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function k(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function B(R,A){const H=i.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,R,A);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+A)}function Y(R,A){const H=i.get(R);if(R.version>0&&H.__version!==R.version){se(H,R,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+A)}function U(R,A){const H=i.get(R);if(R.version>0&&H.__version!==R.version){se(H,R,A);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+A)}function z(R,A){const H=i.get(R);if(R.version>0&&H.__version!==R.version){me(H,R,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+A)}const C={[Tm]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[wm]:n.MIRRORED_REPEAT},Z={[Wn]:n.NEAREST,[hv]:n.NEAREST_MIPMAP_NEAREST,[wh]:n.NEAREST_MIPMAP_LINEAR,[Fi]:n.LINEAR,[Fb]:n.LINEAR_MIPMAP_NEAREST,[ku]:n.LINEAR_MIPMAP_LINEAR},J={[Zb]:n.NEVER,[iC]:n.ALWAYS,[Qb]:n.LESS,[IM]:n.LEQUAL,[Jb]:n.EQUAL,[nC]:n.GEQUAL,[eC]:n.GREATER,[tC]:n.NOTEQUAL};function $(R,A,H){if(H?(n.texParameteri(R,n.TEXTURE_WRAP_S,C[A.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,C[A.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,C[A.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[A.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[A.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==rr||A.wrapT!==rr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Wn&&A.minFilter!==Fi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Wn||A.minFilter!==wh&&A.minFilter!==ku||A.type===xs&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Fu&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Q(R,A){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const ie=k(A);if(ie!==R.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[ie].usedTimes++;const _e=te[R.__cacheKey];_e!==void 0&&(te[R.__cacheKey].usedTimes--,_e.usedTimes===0&&E(A)),R.__cacheKey=ie,R.__webglTexture=te[ie].texture}return H}function se(R,A,H){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=Q(R,A),ie=A.source;t.bindTexture(ne,R.__webglTexture,n.TEXTURE0+H);const _e=i.get(ie);if(ie.version!==_e.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const he=yt.getPrimaries(yt.workingColorSpace),fe=A.colorSpace===Bi?null:yt.getPrimaries(A.colorSpace),Ce=A.colorSpace===Bi||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ve=f(A)&&m(A.image)===!1;let ee=g(A.image,Ve,!1,r.maxTextureSize);ee=Be(A,ee);const ut=m(ee)||a,Pe=s.convert(A.format,A.colorSpace);let je=s.convert(A.type),Ae=y(A.internalFormat,Pe,je,A.colorSpace,A.isVideoTexture);$(ne,A,ut);let ye;const Ye=A.mipmaps,et=a&&A.isVideoTexture!==!0&&Ae!==DM,pt=_e.__version===void 0||te===!0,ge=w(A,ee,ut);if(A.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?A.type===xs?Ae=n.DEPTH_COMPONENT32F:A.type===vs?Ae=n.DEPTH_COMPONENT24:A.type===To?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:A.type===xs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===wo&&Ae===n.DEPTH_COMPONENT&&A.type!==Jg&&A.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=vs,je=s.convert(A.type)),A.format===il&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,A.type!==To&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=To,je=s.convert(A.type))),pt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,Pe,je,null));else if(A.isDataTexture)if(Ye.length>0&&ut){et&&pt&&t.texStorage2D(n.TEXTURE_2D,ge,Ae,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],et?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Pe,je,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,Pe,je,ye.data);A.generateMipmaps=!1}else et?(pt&&t.texStorage2D(n.TEXTURE_2D,ge,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Pe,je,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,Pe,je,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ae,Ye[0].width,Ye[0].height,ee.depth);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],A.format!==sr?Pe!==null?et?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,Pe,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,ee.depth,Pe,je,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ae,ye.width,ye.height,ee.depth,0,Pe,je,ye.data)}else{et&&pt&&t.texStorage2D(n.TEXTURE_2D,ge,Ae,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],A.format!==sr?Pe!==null?et?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Pe,je,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Ae,ye.width,ye.height,0,Pe,je,ye.data)}else if(A.isDataArrayTexture)et?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Pe,je,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,Pe,je,ee.data);else if(A.isData3DTexture)et?(pt&&t.texStorage3D(n.TEXTURE_3D,ge,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Pe,je,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,Pe,je,ee.data);else if(A.isFramebufferTexture){if(pt)if(et)t.texStorage2D(n.TEXTURE_2D,ge,Ae,ee.width,ee.height);else{let ae=ee.width,N=ee.height;for(let le=0;le<ge;le++)t.texImage2D(n.TEXTURE_2D,le,Ae,ae,N,0,Pe,je,null),ae>>=1,N>>=1}}else if(Ye.length>0&&ut){et&&pt&&t.texStorage2D(n.TEXTURE_2D,ge,Ae,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],et?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Pe,je,ye):t.texImage2D(n.TEXTURE_2D,ae,Ae,Pe,je,ye);A.generateMipmaps=!1}else et?(pt&&t.texStorage2D(n.TEXTURE_2D,ge,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,je,ee)):t.texImage2D(n.TEXTURE_2D,0,Ae,Pe,je,ee);_(A,ut)&&v(ne),_e.__version=ie.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function me(R,A,H){if(A.image.length!==6)return;const ne=Q(R,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const _e=yt.getPrimaries(yt.workingColorSpace),he=A.colorSpace===Bi?null:yt.getPrimaries(A.colorSpace),fe=A.colorSpace===Bi||_e===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ce=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!Ce&&!Ve?ee[ae]=g(A.image[ae],!1,!0,r.maxCubemapSize):ee[ae]=Ve?A.image[ae].image:A.image[ae],ee[ae]=Be(A,ee[ae]);const ut=ee[0],Pe=m(ut)||a,je=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),ye=y(A.internalFormat,je,Ae,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,et=ie.__version===void 0||ne===!0;let pt=w(A,ut,Pe);$(n.TEXTURE_CUBE_MAP,A,Pe);let ge;if(Ce){Ye&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,ut.width,ut.height);for(let ae=0;ae<6;ae++){ge=ee[ae].mipmaps;for(let N=0;N<ge.length;N++){const le=ge[N];A.format!==sr?je!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,je,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,je,Ae,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,ye,le.width,le.height,0,je,Ae,le.data)}}}else{ge=A.mipmaps,Ye&&et&&(ge.length>0&&pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pt,ye,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(Ve){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,je,Ae,ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,ee[ae].width,ee[ae].height,0,je,Ae,ee[ae].data);for(let N=0;N<ge.length;N++){const ue=ge[N].image[ae].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,ue.width,ue.height,je,Ae,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,ye,ue.width,ue.height,0,je,Ae,ue.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je,Ae,ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,je,Ae,ee[ae]);for(let N=0;N<ge.length;N++){const le=ge[N];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,je,Ae,le.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,ye,je,Ae,le.image[ae])}}}_(A,Pe)&&v(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function de(R,A,H,ne,te,ie){const _e=s.convert(H.format,H.colorSpace),he=s.convert(H.type),fe=y(H.internalFormat,_e,he,H.colorSpace);if(!i.get(A).__hasExternalTextures){const Ve=Math.max(1,A.width>>ie),ee=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,fe,Ve,ee,A.depth,0,_e,he,null):t.texImage2D(te,ie,fe,Ve,ee,0,_e,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,0,Ie(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,A,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||xe(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===xs?ne=n.DEPTH_COMPONENT32F:te.type===vs&&(ne=n.DEPTH_COMPONENT24));const ie=Ie(A);xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ne=Ie(A);H&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],_e=s.convert(ie.format,ie.colorSpace),he=s.convert(ie.type),fe=y(ie.internalFormat,_e,he,ie.colorSpace),Ce=Ie(A);H&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,fe,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=Ie(A);if(A.depthTexture.format===wo)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===il)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const A=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,R)}else if(H){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),De(A.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),De(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(R,A,H){const ne=i.get(R);A!==void 0&&de(ne.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Oe(R)}function V(R){const A=R.texture,H=i.get(R),ne=i.get(A);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,_e=m(R)||a;if(te){H.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[he]=[];for(let fe=0;fe<A.mipmaps.length;fe++)H.__webglFramebuffer[he][fe]=n.createFramebuffer()}else H.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)H.__webglFramebuffer[he]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const he=R.texture;for(let fe=0,Ce=he.length;fe<Ce;fe++){const Ve=i.get(he[fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const he=ie?A:[A];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const Ce=he[fe];H.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const Ve=s.convert(Ce.format,Ce.colorSpace),ee=s.convert(Ce.type),ut=y(Ce.internalFormat,Ve,ee,Ce.colorSpace,R.isXRRenderTarget===!0),Pe=Ie(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ut,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),De(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),$(n.TEXTURE_CUBE_MAP,A,_e);for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(H.__webglFramebuffer[he][fe],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else de(H.__webglFramebuffer[he],R,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(A,_e)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const he=R.texture;for(let fe=0,Ce=he.length;fe<Ce;fe++){const Ve=he[fe],ee=i.get(Ve);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),$(n.TEXTURE_2D,Ve,_e),de(H.__webglFramebuffer,R,Ve,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),_(Ve,_e)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?he=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),$(he,A,_e),a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)de(H.__webglFramebuffer[fe],R,A,n.COLOR_ATTACHMENT0,he,fe);else de(H.__webglFramebuffer,R,A,n.COLOR_ATTACHMENT0,he,0);_(A,_e)&&v(he),t.unbindTexture()}R.depthBuffer&&Oe(R)}function Xe(R){const A=m(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,te=H.length;ne<te;ne++){const ie=H[ne];if(_(ie,A)){const _e=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ie).__webglTexture;t.bindTexture(_e,he),v(_e),t.unbindTexture()}}}function ve(R){if(a&&R.samples>0&&xe(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ne=R.height;let te=n.COLOR_BUFFER_BIT;const ie=[],_e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),fe=R.isWebGLMultipleRenderTargets===!0;if(fe)for(let Ce=0;Ce<A.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ce=0;Ce<A.length;Ce++){ie.push(n.COLOR_ATTACHMENT0+Ce),R.depthBuffer&&ie.push(_e);const Ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ve===!1&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),fe){const ee=i.get(A[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<A.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,he.__webglColorRenderbuffer[Ce]);const Ve=i.get(A[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ie(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const A=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function W(R){const A=o.render.frame;c.get(R)!==A&&(c.set(R,A),R.update())}function Be(R,A){const H=R.colorSpace,ne=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Am||H!==Zr&&H!==Bi&&(yt.getTransfer(H)===Pt?a===!1?e.has("EXT_sRGB")===!0&&ne===sr?(R.format=Am,R.minFilter=Fi,R.generateMipmaps=!1):A=OM.sRGBToLinear(A):(ne!==sr||te!==Us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=We,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe}function oD(n,e,t){const i=t.isWebGL2;function r(s,o=Bi){let a;const l=yt.getTransfer(o);if(s===Us)return n.UNSIGNED_BYTE;if(s===bM)return n.UNSIGNED_SHORT_4_4_4_4;if(s===CM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===zb)return n.BYTE;if(s===Bb)return n.SHORT;if(s===Jg)return n.UNSIGNED_SHORT;if(s===AM)return n.INT;if(s===vs)return n.UNSIGNED_INT;if(s===xs)return n.FLOAT;if(s===Fu)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hb)return n.ALPHA;if(s===sr)return n.RGBA;if(s===Gb)return n.LUMINANCE;if(s===Vb)return n.LUMINANCE_ALPHA;if(s===wo)return n.DEPTH_COMPONENT;if(s===il)return n.DEPTH_STENCIL;if(s===Am)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Wb)return n.RED;if(s===RM)return n.RED_INTEGER;if(s===Xb)return n.RG;if(s===PM)return n.RG_INTEGER;if(s===LM)return n.RGBA_INTEGER;if(s===Ah||s===bh||s===Ch||s===Rh)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ah)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ah)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ch)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pv||s===mv||s===gv||s===_v)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===pv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_v)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===DM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vv||s===xv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vv)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yv||s===Sv||s===Mv||s===Ev||s===Tv||s===wv||s===Av||s===bv||s===Cv||s===Rv||s===Pv||s===Lv||s===Dv||s===Nv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ev)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Av)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nv)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph||s===Iv||s===Uv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ph)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Iv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jb||s===Ov||s===kv||s===Fv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ph)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ov)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===To?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class aD extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yc extends wi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lD={type:"move"};class tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class uD extends ul{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],v=[],y=new ht;let w=null;const T=new zi;T.layers.enable(1),T.viewport=new _n;const M=new zi;M.layers.enable(2),M.viewport=new _n;const P=[T,M],S=new aD;S.layers.enable(1),S.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=_[$];return Q===void 0&&(Q=new tp,_[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=_[$];return Q===void 0&&(Q=new tp,_[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=_[$];return Q===void 0&&(Q=new tp,_[$]=Q),Q.getHandSpace()};function I($){const Q=v.indexOf($.inputSource);if(Q===-1)return;const se=_[Q];se!==void 0&&(se.update($.inputSource,$.frame,u||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let $=0;$<_.length;$++){const Q=v[$];Q!==null&&(v[$]=null,_[$].disconnect(Q))}E=null,O=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Oo(p.framebufferWidth,p.framebufferHeight,{format:sr,type:Us,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,se=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=g.stencil?il:wo,se=g.stencil?To:vs);const de={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Oo(h.textureWidth,h.textureHeight,{format:sr,type:Us,depthTexture:new qM(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L($){for(let Q=0;Q<$.removed.length;Q++){const se=$.removed[Q],me=v.indexOf(se);me>=0&&(v[me]=null,_[me].disconnect(se))}for(let Q=0;Q<$.added.length;Q++){const se=$.added[Q];let me=v.indexOf(se);if(me===-1){for(let De=0;De<_.length;De++)if(De>=v.length){v.push(se),me=De;break}else if(v[De]===null){v[De]=se,me=De;break}if(me===-1)break}const de=_[me];de&&de.connect(se)}}const k=new X,B=new X;function Y($,Q,se){k.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);const me=k.distanceTo(B),de=Q.projectionMatrix.elements,De=se.projectionMatrix.elements,Ne=de[14]/(de[10]-1),Oe=de[14]/(de[10]+1),We=(de[9]+1)/de[5],V=(de[9]-1)/de[5],Xe=(de[8]-1)/de[0],ve=(De[8]+1)/De[0],Ie=Ne*Xe,xe=Ne*ve,W=me/(-Xe+ve),Be=W*-Xe;Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(W),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Ne+W,A=Oe+W,H=Ie-Be,ne=xe+(me-Be),te=We*Oe/A*R,ie=V*Oe/A*R;$.projectionMatrix.makePerspective(H,ne,te,ie,R,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function U($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;S.near=M.near=T.near=$.near,S.far=M.far=T.far=$.far,(E!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,O=S.far);const Q=$.parent,se=S.cameras;U(S,Q);for(let me=0;me<se.length;me++)U(se[me],Q);se.length===2?Y(S,T,M):S.projectionMatrix.copy(T.projectionMatrix),z($,S,Q)};function z($,Q,se){se===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=bm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)};let C=null;function Z($,Q){if(c=Q.getViewerPose(u||o),x=Q,c!==null){const se=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let me=!1;se.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let de=0;de<se.length;de++){const De=se[de];let Ne=null;if(p!==null)Ne=p.getViewport(De);else{const We=d.getViewSubImage(h,De);Ne=We.viewport,de===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Oe=P[de];Oe===void 0&&(Oe=new zi,Oe.layers.enable(de),Oe.viewport=new _n,P[de]=Oe),Oe.matrix.fromArray(De.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(De.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),de===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(Oe)}}for(let se=0;se<_.length;se++){const me=v[se],de=_[se];me!==null&&de!==void 0&&de.update(me,Q,u||o)}C&&C($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}const J=new YM;J.setAnimationLoop(Z),this.setAnimationLoop=function($){C=$},this.dispose=function(){}}}function cD(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,VM(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===li&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===li&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===li&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function fD(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(_,w);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function c(_){const v=d();_.__bindingPointIndex=v;const y=n.createBuffer(),w=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,M=y.length;T<M;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const O=P[S];if(p(O,T,S,w)===!0){const I=O.__offset,K=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let k=0;k<K.length;k++){const B=K[k],Y=g(B);typeof B=="number"||typeof B=="boolean"?(O.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+L,O.__data)):B.isMatrix3?(O.__data[0]=B.elements[0],O.__data[1]=B.elements[1],O.__data[2]=B.elements[2],O.__data[3]=0,O.__data[4]=B.elements[3],O.__data[5]=B.elements[4],O.__data[6]=B.elements[5],O.__data[7]=0,O.__data[8]=B.elements[6],O.__data[9]=B.elements[7],O.__data[10]=B.elements[8],O.__data[11]=0):(B.toArray(O.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,w){const T=_.value,M=v+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const P=w[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function x(_){const v=_.uniforms;let y=0;const w=16;for(let M=0,P=v.length;M<P;M++){const S=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,O=S.length;E<O;E++){const I=S[E],K=Array.isArray(I.value)?I.value:[I.value];for(let L=0,k=K.length;L<k;L++){const B=K[L],Y=g(B),U=y%w;U!==0&&w-U<Y.boundary&&(y+=w-U),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Y.storage}}}const T=y%w;return T>0&&(y+=w-T),_.__size=y,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class eE{constructor(e={}){const{canvas:t=sC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this._useLegacyLights=!1,this.toneMapping=Is,this.toneMappingExposure=1;const v=this;let y=!1,w=0,T=0,M=null,P=-1,S=null;const E=new _n,O=new _n;let I=null;const K=new St(0);let L=0,k=t.width,B=t.height,Y=1,U=null,z=null;const C=new _n(0,0,k,B),Z=new _n(0,0,k,B);let J=!1;const $=new jM;let Q=!1,se=!1,me=null;const de=new Sn,De=new ht,Ne=new X,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?Y:1}let V=i;function Xe(b,F){for(let q=0;q<b.length;q++){const j=b[q],G=t.getContext(j,F);if(G!==null)return G}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qg}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",le,!1),V===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),V=Xe(F,b),V===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,Ie,xe,W,Be,R,A,H,ne,te,ie,_e,he,fe,Ce,Ve,ee,ut,Pe,je,Ae,ye,Ye,et;function pt(){ve=new S3(V),Ie=new p3(V,ve,e),ve.init(Ie),ye=new oD(V,ve,Ie),xe=new rD(V,ve,Ie),W=new T3(V),Be=new WL,R=new sD(V,ve,xe,Be,Ie,ye,W),A=new g3(v),H=new y3(v),ne=new LC(V,Ie),Ye=new d3(V,ve,ne,Ie),te=new M3(V,ne,W,Ye),ie=new C3(V,te,ne,W),Pe=new b3(V,Ie,R),Ve=new m3(Be),_e=new VL(v,A,H,ve,Ie,Ye,Ve),he=new cD(v,Be),fe=new jL,Ce=new QL(ve,Ie),ut=new f3(v,A,H,xe,ie,h,l),ee=new iD(v,ie,Ie),et=new fD(V,W,Ie,xe),je=new h3(V,ve,W,Ie),Ae=new E3(V,ve,W,Ie),W.programs=_e.programs,v.capabilities=Ie,v.extensions=ve,v.properties=Be,v.renderLists=fe,v.shadowMap=ee,v.state=xe,v.info=W}pt();const ge=new uD(v,V);this.xr=ge,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(k,B,!1))},this.getSize=function(b){return b.set(k,B)},this.setSize=function(b,F,q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,B=F,t.width=Math.floor(b*Y),t.height=Math.floor(F*Y),q===!0&&(t.style.width=b+"px",t.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(k*Y,B*Y).floor()},this.setDrawingBufferSize=function(b,F,q){k=b,B=F,Y=q,t.width=Math.floor(b*q),t.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,F,q,j){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,F,q,j),xe.viewport(E.copy(C).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,F,q,j){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,F,q,j),xe.scissor(O.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){xe.setScissorTest(J=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){z=b},this.getClearColor=function(b){return b.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(b=!0,F=!0,q=!0){let j=0;if(b){let G=!1;if(M!==null){const ce=M.texture.format;G=ce===LM||ce===PM||ce===RM}if(G){const ce=M.texture.type,Te=ce===Us||ce===vs||ce===Jg||ce===To||ce===bM||ce===CM,He=ut.getClearColor(),we=ut.getClearAlpha(),Re=He.r,Ge=He.g,Ke=He.b;Te?(p[0]=Re,p[1]=Ge,p[2]=Ke,p[3]=we,V.clearBufferuiv(V.COLOR,0,p)):(x[0]=Re,x[1]=Ge,x[2]=Ke,x[3]=we,V.clearBufferiv(V.COLOR,0,x))}else j|=V.COLOR_BUFFER_BIT}F&&(j|=V.DEPTH_BUFFER_BIT),q&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Ce.dispose(),Be.dispose(),A.dispose(),H.dispose(),ie.dispose(),Ye.dispose(),et.dispose(),_e.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Me),ge.removeEventListener("sessionend",Le),me&&(me.dispose(),me=null),oe.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=W.autoReset,F=ee.enabled,q=ee.autoUpdate,j=ee.needsUpdate,G=ee.type;pt(),W.autoReset=b,ee.enabled=F,ee.autoUpdate=q,ee.needsUpdate=j,ee.type=G}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const F=b.target;F.removeEventListener("dispose",ue),Fe(F)}function Fe(b){Ue(b),Be.remove(b)}function Ue(b){const F=Be.get(b).programs;F!==void 0&&(F.forEach(function(q){_e.releaseProgram(q)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,j,G,ce){F===null&&(F=Oe);const Te=G.isMesh&&G.matrixWorld.determinant()<0,He=wt(b,F,q,j,G);xe.setMaterial(j,Te);let we=q.index,Re=1;if(j.wireframe===!0){if(we=te.getWireframeAttribute(q),we===void 0)return;Re=2}const Ge=q.drawRange,Ke=q.attributes.position;let Dt=Ge.start*Re,Jt=(Ge.start+Ge.count)*Re;ce!==null&&(Dt=Math.max(Dt,ce.start*Re),Jt=Math.min(Jt,(ce.start+ce.count)*Re)),we!==null?(Dt=Math.max(Dt,0),Jt=Math.min(Jt,we.count)):Ke!=null&&(Dt=Math.max(Dt,0),Jt=Math.min(Jt,Ke.count));const _t=Jt-Dt;if(_t<0||_t===1/0)return;Ye.setup(G,j,He,q,we);let On,xt=je;if(we!==null&&(On=ne.get(we),xt=Ae,xt.setIndex(On)),G.isMesh)j.wireframe===!0?(xe.setLineWidth(j.wireframeLinewidth*We()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(G.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),xe.setLineWidth(qe*We()),G.isLineSegments?xt.setMode(V.LINES):G.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else G.isPoints?xt.setMode(V.POINTS):G.isSprite&&xt.setMode(V.TRIANGLES);if(G.isBatchedMesh)xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)xt.renderInstances(Dt,_t,G.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Id=Math.min(q.instanceCount,qe);xt.renderInstances(Dt,_t,Id)}else xt.render(Dt,_t)};function at(b,F,q){b.transparent===!0&&b.side===Or&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,Tt(b,F,q),b.side=Hs,b.needsUpdate=!0,Tt(b,F,q),b.side=Or):Tt(b,F,q)}this.compile=function(b,F,q=null){q===null&&(q=b),m=Ce.get(q),m.init(),_.push(m),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const j=new Set;return b.traverse(function(G){const ce=G.material;if(ce)if(Array.isArray(ce))for(let Te=0;Te<ce.length;Te++){const He=ce[Te];at(He,q,G),j.add(He)}else at(ce,q,G),j.add(ce)}),_.pop(),m=null,j},this.compileAsync=function(b,F,q=null){const j=this.compile(b,F,q);return new Promise(G=>{function ce(){if(j.forEach(function(Te){Be.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){G(b);return}setTimeout(ce,10)}ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let dt=null;function be(b){dt&&dt(b)}function Me(){oe.stop()}function Le(){oe.start()}const oe=new YM;oe.setAnimationLoop(be),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(b){dt=b,ge.setAnimationLoop(b),b===null?oe.stop():oe.start()},ge.addEventListener("sessionstart",Me),ge.addEventListener("sessionend",Le),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(F),F=ge.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,M),m=Ce.get(b,_.length),m.init(),_.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(de),se=this.localClippingEnabled,Q=Ve.init(this.clippingPlanes,se),g=fe.get(b,f.length),g.init(),f.push(g),ze(b,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(U,z),this.info.render.frame++,Q===!0&&Ve.beginShadows();const q=m.state.shadowsArray;if(ee.render(q,b,F),Q===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(g,b),m.setupLights(v._useLegacyLights),F.isArrayCamera){const j=F.cameras;for(let G=0,ce=j.length;G<ce;G++){const Te=j[G];ke(g,b,Te,Te.viewport)}}else ke(g,b,F);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(v,b,F),Ye.resetDefaultState(),P=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function ze(b,F,q,j){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){j&&Ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Te=ie.update(b),He=b.material;He.visible&&g.push(b,Te,He,q,Ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Te=ie.update(b),He=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ne.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ne.copy(Te.boundingSphere.center)),Ne.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(He)){const we=Te.groups;for(let Re=0,Ge=we.length;Re<Ge;Re++){const Ke=we[Re],Dt=He[Ke.materialIndex];Dt&&Dt.visible&&g.push(b,Te,Dt,q,Ne.z,Ke)}}else He.visible&&g.push(b,Te,He,q,Ne.z,null)}}const ce=b.children;for(let Te=0,He=ce.length;Te<He;Te++)ze(ce[Te],F,q,j)}function ke(b,F,q,j){const G=b.opaque,ce=b.transmissive,Te=b.transparent;m.setupLightsView(q),Q===!0&&Ve.setGlobalState(v.clippingPlanes,q),ce.length>0&&$e(G,ce,F,q),j&&xe.viewport(E.copy(j)),G.length>0&&Ut(G,F,q),ce.length>0&&Ut(ce,F,q),Te.length>0&&Ut(Te,F,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function $e(b,F,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const ce=Ie.isWebGL2;me===null&&(me=new Oo(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Fu:Us,minFilter:ku,samples:ce?4:0})),v.getDrawingBufferSize(De),ce?me.setSize(De.x,De.y):me.setSize(Cm(De.x),Cm(De.y));const Te=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=Is,Ut(b,q,j),R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me);let we=!1;for(let Re=0,Ge=F.length;Re<Ge;Re++){const Ke=F[Re],Dt=Ke.object,Jt=Ke.geometry,_t=Ke.material,On=Ke.group;if(_t.side===Or&&Dt.layers.test(j.layers)){const xt=_t.side;_t.side=li,_t.needsUpdate=!0,tt(Dt,q,j,Jt,_t,On),_t.side=xt,_t.needsUpdate=!0,we=!0}}we===!0&&(R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me)),v.setRenderTarget(Te),v.setClearColor(K,L),v.toneMapping=He}function Ut(b,F,q){const j=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ce=b.length;G<ce;G++){const Te=b[G],He=Te.object,we=Te.geometry,Re=j===null?Te.material:j,Ge=Te.group;He.layers.test(q.layers)&&tt(He,F,q,we,Re,Ge)}}function tt(b,F,q,j,G,ce){b.onBeforeRender(v,F,q,j,G,ce),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(v,F,q,j,b,ce),G.transparent===!0&&G.side===Or&&G.forceSinglePass===!1?(G.side=li,G.needsUpdate=!0,v.renderBufferDirect(q,F,j,G,b,ce),G.side=Hs,G.needsUpdate=!0,v.renderBufferDirect(q,F,j,G,b,ce),G.side=Or):v.renderBufferDirect(q,F,j,G,b,ce),b.onAfterRender(v,F,q,j,G,ce)}function Tt(b,F,q){F.isScene!==!0&&(F=Oe);const j=Be.get(b),G=m.state.lights,ce=m.state.shadowsArray,Te=G.state.version,He=_e.getParameters(b,G.state,ce,F,q),we=_e.getProgramCacheKey(He);let Re=j.programs;j.environment=b.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(b.isMeshStandardMaterial?H:A).get(b.envMap||j.environment),Re===void 0&&(b.addEventListener("dispose",ue),Re=new Map,j.programs=Re);let Ge=Re.get(we);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===Te)return Ct(b,He),Ge}else He.uniforms=_e.getUniforms(b),b.onBuild(q,He,v),b.onBeforeCompile(He,v),Ge=_e.acquireProgram(He,we),Re.set(we,Ge),j.uniforms=He.uniforms;const Ke=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=Ve.uniform),Ct(b,He),j.needsLights=ci(b),j.lightsStateVersion=Te,j.needsLights&&(Ke.ambientLightColor.value=G.state.ambient,Ke.lightProbe.value=G.state.probe,Ke.directionalLights.value=G.state.directional,Ke.directionalLightShadows.value=G.state.directionalShadow,Ke.spotLights.value=G.state.spot,Ke.spotLightShadows.value=G.state.spotShadow,Ke.rectAreaLights.value=G.state.rectArea,Ke.ltc_1.value=G.state.rectAreaLTC1,Ke.ltc_2.value=G.state.rectAreaLTC2,Ke.pointLights.value=G.state.point,Ke.pointLightShadows.value=G.state.pointShadow,Ke.hemisphereLights.value=G.state.hemi,Ke.directionalShadowMap.value=G.state.directionalShadowMap,Ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ke.spotShadowMap.value=G.state.spotShadowMap,Ke.spotLightMatrix.value=G.state.spotLightMatrix,Ke.spotLightMap.value=G.state.spotLightMap,Ke.pointShadowMap.value=G.state.pointShadowMap,Ke.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function Qt(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=gf.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ct(b,F){const q=Be.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function wt(b,F,q,j,G){F.isScene!==!0&&(F=Oe),R.resetTextureUnits();const ce=F.fog,Te=j.isMeshStandardMaterial?F.environment:null,He=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Zr,we=(j.isMeshStandardMaterial?H:A).get(j.envMap||Te),Re=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ke=!!q.morphAttributes.position,Dt=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color;let _t=Is;j.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_t=v.toneMapping);const On=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=On!==void 0?On.length:0,qe=Be.get(j),Id=m.state.lights;if(Q===!0&&(se===!0||b!==S)){const Li=b===S&&j.id===P;Ve.setState(j,b,Li)}let Ht=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Id.state.version||qe.outputColorSpace!==He||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||qe.envMap!==we||j.fog===!0&&qe.fog!==ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==Re||qe.vertexTangents!==Ge||qe.morphTargets!==Ke||qe.morphNormals!==Dt||qe.morphColors!==Jt||qe.toneMapping!==_t||Ie.isWebGL2===!0&&qe.morphTargetsCount!==xt)&&(Ht=!0):(Ht=!0,qe.__version=j.version);let js=qe.currentProgram;Ht===!0&&(js=Tt(j,F,G));let c0=!1,dl=!1,Ud=!1;const En=js.getUniforms(),Ys=qe.uniforms;if(xe.useProgram(js.program)&&(c0=!0,dl=!0,Ud=!0),j.id!==P&&(P=j.id,dl=!0),c0||S!==b){En.setValue(V,"projectionMatrix",b.projectionMatrix),En.setValue(V,"viewMatrix",b.matrixWorldInverse);const Li=En.map.cameraPosition;Li!==void 0&&Li.setValue(V,Ne.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&En.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&En.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,dl=!0,Ud=!0)}if(G.isSkinnedMesh){En.setOptional(V,G,"bindMatrix"),En.setOptional(V,G,"bindMatrixInverse");const Li=G.skeleton;Li&&(Ie.floatVertexTextures?(Li.boneTexture===null&&Li.computeBoneTexture(),En.setValue(V,"boneTexture",Li.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(En.setOptional(V,G,"batchingTexture"),En.setValue(V,"batchingTexture",G._matricesTexture,R));const Od=q.morphAttributes;if((Od.position!==void 0||Od.normal!==void 0||Od.color!==void 0&&Ie.isWebGL2===!0)&&Pe.update(G,q,js),(dl||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,En.setValue(V,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ys.envMap.value=we,Ys.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),dl&&(En.setValue(V,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&gt(Ys,Ud),ce&&j.fog===!0&&he.refreshFogUniforms(Ys,ce),he.refreshMaterialUniforms(Ys,j,Y,B,me),gf.upload(V,Qt(qe),Ys,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gf.upload(V,Qt(qe),Ys,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&En.setValue(V,"center",G.center),En.setValue(V,"modelViewMatrix",G.modelViewMatrix),En.setValue(V,"normalMatrix",G.normalMatrix),En.setValue(V,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Li=j.uniformsGroups;for(let kd=0,tE=Li.length;kd<tE;kd++)if(Ie.isWebGL2){const f0=Li[kd];et.update(f0,js),et.bind(f0,js)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return js}function gt(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ci(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,F,q){Be.get(b.texture).__webglTexture=F,Be.get(b.depthTexture).__webglTexture=q;const j=Be.get(b);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const q=Be.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,q=0){M=b,w=F,T=q;let j=!0,G=null,ce=!1,Te=!1;if(b){const we=Be.get(b);we.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):we.__webglFramebuffer===void 0?R.setupRenderTarget(b):we.__hasExternalTextures&&R.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Te=!0);const Ge=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?G=Ge[F][q]:G=Ge[F],ce=!0):Ie.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?G=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[q]:G=Ge,E.copy(b.viewport),O.copy(b.scissor),I=b.scissorTest}else E.copy(C).multiplyScalar(Y).floor(),O.copy(Z).multiplyScalar(Y).floor(),I=J;if(xe.bindFramebuffer(V.FRAMEBUFFER,G)&&Ie.drawBuffers&&j&&xe.drawBuffers(b,G),xe.viewport(E),xe.scissor(O),xe.setScissorTest(I),ce){const we=Be.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,q)}else if(Te){const we=Be.get(b.texture),Re=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,we.__webglTexture,q||0,Re)}P=-1},this.readRenderTargetPixels=function(b,F,q,j,G,ce,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(He=He[Te]),He){xe.bindFramebuffer(V.FRAMEBUFFER,He);try{const we=b.texture,Re=we.format,Ge=we.type;if(Re!==sr&&ye.convert(Re)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ge===Fu&&(ve.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==Us&&ye.convert(Ge)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===xs&&(Ie.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-j&&q>=0&&q<=b.height-G&&V.readPixels(F,q,j,G,ye.convert(Re),ye.convert(Ge),ce)}finally{const we=M!==null?Be.get(M).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(b,F,q=0){const j=Math.pow(2,-q),G=Math.floor(F.image.width*j),ce=Math.floor(F.image.height*j);R.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,b.x,b.y,G,ce),xe.unbindTexture()},this.copyTextureToTexture=function(b,F,q,j=0){const G=F.image.width,ce=F.image.height,Te=ye.convert(q.format),He=ye.convert(q.type);R.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,b.x,b.y,G,ce,Te,He,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,b.x,b.y,Te,He,F.image),j===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,F,q,j,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=b.max.x-b.min.x+1,Te=b.max.y-b.min.y+1,He=b.max.z-b.min.z+1,we=ye.convert(j.format),Re=ye.convert(j.type);let Ge;if(j.isData3DTexture)R.setTexture3D(j,0),Ge=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),Ge=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Ke=V.getParameter(V.UNPACK_ROW_LENGTH),Dt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Jt=V.getParameter(V.UNPACK_SKIP_PIXELS),_t=V.getParameter(V.UNPACK_SKIP_ROWS),On=V.getParameter(V.UNPACK_SKIP_IMAGES),xt=q.isCompressedTexture?q.mipmaps[G]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,b.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Ge,G,F.x,F.y,F.z,ce,Te,He,we,Re,xt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ge,G,F.x,F.y,F.z,ce,Te,He,we,xt.data)):V.texSubImage3D(Ge,G,F.x,F.y,F.z,ce,Te,He,we,Re,xt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Dt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,_t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,On),G===0&&j.generateMipmaps&&V.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,xe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===e0?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Rd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mn?Ao:NM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ao?mn:Zr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dD extends eE{}dD.prototype.isWebGL1Renderer=!0;class hD extends wi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class r0 extends ur{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],d=[],h=[],p=[];let x=0;const g=[],m=i/2;let f=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(p,2));function _(){const y=new X,w=new X;let T=0;const M=(t-e)/i;for(let P=0;P<=s;P++){const S=[],E=P/s,O=E*(t-e)+e;for(let I=0;I<=r;I++){const K=I/r,L=K*l+a,k=Math.sin(L),B=Math.cos(L);w.x=O*k,w.y=-E*i+m,w.z=O*B,d.push(w.x,w.y,w.z),y.set(k,M,B).normalize(),h.push(y.x,y.y,y.z),p.push(K,1-E),S.push(x++)}g.push(S)}for(let P=0;P<r;P++)for(let S=0;S<s;S++){const E=g[S][P],O=g[S+1][P],I=g[S+1][P+1],K=g[S][P+1];c.push(E,O,K),c.push(O,I,K),T+=6}u.addGroup(f,T,0),f+=T}function v(y){const w=x,T=new ht,M=new X;let P=0;const S=y===!0?e:t,E=y===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*E,0),h.push(0,E,0),p.push(.5,.5),x++;const O=x;for(let I=0;I<=r;I++){const L=I/r*l+a,k=Math.cos(L),B=Math.sin(L);M.x=S*B,M.y=m*E,M.z=S*k,d.push(M.x,M.y,M.z),h.push(0,E,0),T.x=k*.5+.5,T.y=B*.5*E+.5,p.push(T.x,T.y),x++}for(let I=0;I<r;I++){const K=w+I,L=O+I;y===!0?c.push(L,L+1,K):c.push(L+1,L,K),P+=3}u.addGroup(f,P,y===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class s0 extends r0{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nd extends ur{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new X,y=new X,w=new X;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],y),p(t[T+2],w),l(v,y,w,_)}function l(_,v,y,w){const T=w+1,M=[];for(let P=0;P<=T;P++){M[P]=[];const S=_.clone().lerp(y,P/T),E=v.clone().lerp(y,P/T),O=T-P;for(let I=0;I<=O;I++)I===0&&P===T?M[P][I]=S:M[P][I]=S.clone().lerp(E,I/O)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const E=Math.floor(S/2);S%2===0?(h(M[P][E+1]),h(M[P+1][E]),h(M[P][E])):(h(M[P][E+1]),h(M[P+1][E+1]),h(M[P+1][E]))}}function u(_){const v=new X;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(_),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function c(){const _=new X;for(let v=0;v<s.length;v+=3){_.x=s[v+0],_.y=s[v+1],_.z=s[v+2];const y=m(_)/2/Math.PI+.5,w=f(_)/Math.PI+.5;o.push(y,1-w)}x(),d()}function d(){for(let _=0;_<o.length;_+=6){const v=o[_+0],y=o[_+2],w=o[_+4],T=Math.max(v,y,w),M=Math.min(v,y,w);T>.9&&M<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),w<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,v){const y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){const _=new X,v=new X,y=new X,w=new X,T=new ht,M=new ht,P=new ht;for(let S=0,E=0;S<s.length;S+=9,E+=6){_.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[E+0],o[E+1]),M.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),w.copy(_).add(v).add(y).divideScalar(3);const O=m(w);g(T,E+0,_,O),g(M,E+2,v,O),g(P,E+4,y,O)}}function g(_,v,y,w){w<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.vertices,e.indices,e.radius,e.details)}}class o0 extends Nd{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new o0(e.radius,e.detail)}}class a0 extends ur{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new X,h=new X,p=[],x=[],g=[],m=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(T+y,1-v),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const v=c[f][_+1],y=c[f][_],w=c[f+1][_],T=c[f+1][_+1];(f!==0||o>0)&&p.push(v,y,T),(f!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class l0 extends Nd{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new l0(e.radius,e.detail)}}class u0 extends ur{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new X,d=new X,h=new X;for(let p=0;p<=i;p++)for(let x=0;x<=r;x++){const g=x/r*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),c.x=e*Math.cos(g),c.y=e*Math.sin(g),h.subVectors(d,c).normalize(),l.push(h.x,h.y,h.z),u.push(x/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=r;x++){const g=(r+1)*p+x-1,m=(r+1)*(p-1)+x-1,f=(r+1)*(p-1)+x,_=(r+1)*p+x;o.push(g,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new sn(a,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new u0(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qg);const pD=()=>{const n=st.useRef(null),e=st.useRef(null),t=st.useRef(null),i=st.useRef(null),r=st.useRef([]);return st.useEffect(()=>{if(!n.current)return;const s=new hD,o=new zi(75,window.innerWidth/window.innerHeight,.1,1e3),a=new eE({alpha:!0,antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(window.devicePixelRatio),n.current.appendChild(a.domElement),e.current=s,t.current=o,i.current=a;const l=[new cl(1,1,1),new a0(.7,32,32),new o0(.8),new u0(.6,.3,16,100),new s0(.6,1.2,8),new l0(.8)],u=[new ls({color:3900150,wireframe:!0,transparent:!0,opacity:.3}),new ls({color:440020,wireframe:!0,transparent:!0,opacity:.2}),new ls({color:9133302,wireframe:!0,transparent:!0,opacity:.25}),new ls({color:16096779,wireframe:!0,transparent:!0,opacity:.2}),new ls({color:15680580,wireframe:!0,transparent:!0,opacity:.22}),new ls({color:1096065,wireframe:!0,transparent:!0,opacity:.24})],c=[];for(let g=0;g<25;g++){const m=l[Math.floor(Math.random()*l.length)],f=u[Math.floor(Math.random()*u.length)],_=new Hr(m,f),v=Math.floor(g/8),y=-10-v*15;_.position.set((Math.random()-.5)*(60+v*20),(Math.random()-.5)*(40+v*10),y+(Math.random()-.5)*10),_.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const w=Math.random()*1.5+.5,T=1-v*.2,M=w*T;_.scale.set(M,M,M),_.layer=v,_.originalPosition=_.position.clone(),s.add(_),c.push(_)}r.current=c,o.position.z=30,Qe.create({trigger:document.body,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:g=>{const m=g.progress;c.forEach(f=>{const _=f.layer,v=f.originalPosition,y=(_+1)*.5;f.position.y=v.y+m*20*y,f.position.x=v.x+Math.sin(m*Math.PI*2)*5*y,f.rotation.z=v.z+m*Math.PI*y}),o.position.y=m*-10,o.rotation.z=m*.1}});let d;const h=()=>{d=requestAnimationFrame(h),c.forEach((g,m)=>{g.rotation.x+=.005+m*.001,g.rotation.y+=.01+m*5e-4;const f=Date.now()*.001,_=Math.sin(f+m)*.02;g.position.z+=_}),a.render(s,o)};h();const p=()=>{o&&a&&(o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",p);const x=g=>{const m=g.clientX/window.innerWidth*2-1,f=-(g.clientY/window.innerHeight)*2+1;yn.to(o.position,{x:m*3,y:f*2,duration:2,ease:"power2.out"}),c.forEach((_,v)=>{const w=(3-_.layer)*.1;yn.to(_.rotation,{x:_.rotation.x+f*w,y:_.rotation.y+m*w,duration:1.5,ease:"power2.out"})}),o.lookAt(s.position)};return window.addEventListener("mousemove",x),()=>{window.removeEventListener("resize",p),window.removeEventListener("mousemove",x),d&&cancelAnimationFrame(d),Qe.getAll().forEach(g=>{g.trigger===document.body&&g.kill()}),n.current&&a.domElement&&n.current.removeChild(a.domElement),c.forEach(g=>{g.geometry&&g.geometry.dispose(),g.material&&(Array.isArray(g.material)?g.material.forEach(m=>m.dispose()):g.material.dispose())}),a.dispose()}},[]),D.jsx("div",{ref:n,className:"fixed inset-0 z-0 pointer-events-none",style:{background:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"}})};yn.registerPlugin(Qe,ll);function mD(){return st.useEffect(()=>(yn.set("body",{overflow:"hidden"}),yn.to("body",{overflow:"auto",duration:.1,delay:.5}),()=>{Qe.getAll().forEach(n=>n.kill())}),[]),D.jsxs("div",{className:"min-h-screen bg-slate-900 text-white relative overflow-x-hidden",children:[D.jsx(pD,{}),D.jsxs("div",{className:"relative z-10",children:[D.jsx(kA,{}),D.jsxs("main",{children:[D.jsx(FA,{}),D.jsx(zA,{}),D.jsx(BA,{}),D.jsx(HA,{}),D.jsx(GA,{}),D.jsx(ib,{})]})]})]})}z1(document.getElementById("root")).render(D.jsx(st.StrictMode,{children:D.jsx(mD,{})}));
