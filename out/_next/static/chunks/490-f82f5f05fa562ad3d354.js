(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[490],{2137:function(e,n,t){"use strict";function r(e,n,t,r,i,u,o){try{var a=e[u](o),s=a.value}catch(l){return void t(l)}a.done?n(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,u){var o=e.apply(n,t);function a(e){r(o,i,u,a,s,"next",e)}function s(e){r(o,i,u,a,s,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})},427:function(e,n,t){"use strict";t.d(n,{W:function(){return r}});var r=(0,t(9867).I)({d:"M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z",displayName:"SearchIcon"})},3955:function(e,n,t){"use strict";t.d(n,{x:function(){return p}});var r=t(9384),i=t(63),u=t(9676),o=t(3808),a=t(4461),s=t(7294);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var f=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),d=(0,i.G)(((e,n)=>{var t,r,{placement:i="left"}=e,o=c(e,["placement"]),a=(0,u.yK)().field,d={["left"===i?"insetStart":"insetEnd"]:"0",width:null!=(t=null==a?void 0:a.height)?t:null==a?void 0:a.h,height:null!=(r=null==a?void 0:a.height)?r:null==a?void 0:a.h,fontSize:null==a?void 0:a.fontSize};return s.createElement(f,l({ref:n,__css:d},o))}));d.id="InputElement",o.Ts&&(d.displayName="InputElement");var v=(0,i.G)(((e,n)=>{var{className:t}=e,r=c(e,["className"]),i=(0,a.cx)("chakra-input__left-element",t);return s.createElement(d,l({ref:n,placement:"left",className:i},r))}));v.id="InputLeftElement",o.Ts&&(v.displayName="InputLeftElement");var p=(0,i.G)(((e,n)=>{var{className:t}=e,r=c(e,["className"]),i=(0,a.cx)("chakra-input__right-element",t);return s.createElement(d,l({ref:n,placement:"right",className:i},r))}));p.id="InputRightElement",o.Ts&&(p.displayName="InputRightElement")},8488:function(e,n,t){"use strict";t.d(n,{B:function(){return v}});var r=t(63),i=t(3806),u=t(5284),o=t(9384),a=t(9676),s=t(4461),l=t(3808),c=t(4255),f=t(7294);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var v=(0,r.G)(((e,n)=>{var t=(0,i.j)("Input",e),r=(0,u.Lr)(e),{children:l,className:v}=r,p=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(r,["children","className"]),h=(0,s.cx)("chakra-input__group",v),y={},g=(0,c.W)(l),m=t.field;g.forEach((e=>{if(t){var n,r;if(m&&"InputLeftElement"===e.type.id)y.paddingStart=null!=(n=m.height)?n:m.h;if(m&&"InputRightElement"===e.type.id)y.paddingEnd=null!=(r=m.height)?r:m.h;"InputRightAddon"===e.type.id&&(y.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(y.borderStartRadius=0)}}));var b=g.map((n=>{var t,r,i={size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant};return"Input"!==n.type.id?f.cloneElement(n,i):f.cloneElement(n,Object.assign(i,y,n.props))}));return f.createElement(o.m$.div,d({className:h,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},p),f.createElement(a.Fo,{value:t},b))}));l.Ts&&(v.displayName="InputGroup")},3637:function(e,n,t){"use strict";t.d(n,{I:function(){return k}});var r=t(4461),i=t(658),u=t(4577),o=t(7294);var a=t(63),s=t(3806),l=t(5284),c=t(9676),f=t(9384),d=t(3808),v=t(8500),p=t(2947);function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function y(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var[g,m]=(0,v.k)({strict:!1,name:"FormControlContext"});function b(e){var{id:n,isRequired:t,isInvalid:a,isDisabled:s,isReadOnly:l}=e,c=y(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),f=(0,u.M)(),d=n||"field-"+f,v=d+"-label",g=d+"-feedback",m=d+"-helptext",[b,O]=o.useState(!1),[w,I]=o.useState(!1),[R,x]=function(e){void 0===e&&(e=!1);var[n,t]=(0,o.useState)(e);return[n,{on:(0,o.useCallback)((()=>{t(!0)}),[]),off:(0,o.useCallback)((()=>{t(!1)}),[]),toggle:(0,o.useCallback)((()=>{t((e=>!e))}),[])}]}(),E=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({id:m},e,{ref:(0,p.l)(n,(e=>{e&&I(!0)}))})}),[m]),k=o.useCallback((function(e,n){var t,i;return void 0===e&&(e={}),void 0===n&&(n=null),h({},e,{ref:n,"data-focus":(0,r.PB)(R),"data-disabled":(0,r.PB)(s),"data-invalid":(0,r.PB)(a),"data-readonly":(0,r.PB)(l),id:null!=(t=e.id)?t:v,htmlFor:null!=(i=e.htmlFor)?i:d})}),[d,s,R,a,l,v]),P=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({id:g},e,{ref:(0,p.l)(n,(e=>{e&&O(!0)})),"aria-live":"polite"})}),[g]),T=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({},e,c,{ref:n,role:"group"})}),[c]),j=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),h({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),N=o.useCallback((()=>{(0,i.A4)(x.on)}),[x]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!l,isDisabled:!!s,isFocused:!!R,onFocus:N,onBlur:x.off,hasFeedbackText:b,setHasFeedbackText:O,hasHelpText:w,setHasHelpText:I,id:d,labelId:v,feedbackId:g,helpTextId:m,htmlProps:c,getHelpTextProps:E,getErrorMessageProps:P,getRootProps:T,getLabelProps:k,getRequiredIndicatorProps:j}}var O=(0,a.G)(((e,n)=>{var t=(0,s.j)("Form",e),i=b((0,l.Lr)(e)),{getRootProps:u}=i,a=y(i,["getRootProps","htmlProps"]),d=(0,r.cx)("chakra-form-control",e.className),v=o.useMemo((()=>a),[a]);return o.createElement(g,{value:v},o.createElement(c.Fo,{value:t},o.createElement(f.m$.div,h({},u({},n),{className:d,__css:{width:"100%",position:"relative"}}))))}));d.Ts&&(O.displayName="FormControl");var w=(0,a.G)(((e,n)=>{var t=m(),i=(0,c.yK)(),u=(0,r.cx)("chakra-form__helper-text",e.className);return o.createElement(f.m$.div,h({},null==t?void 0:t.getHelpTextProps(e,n),{__css:i.helperText,className:u}))}));function I(){return(I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function R(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function x(e){var n=function(e){var n,t,r,u=m(),{id:o,disabled:a,readOnly:s,required:l,isRequired:c,isInvalid:f,isReadOnly:d,isDisabled:v,onFocus:p,onBlur:h}=e,y=R(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),g=[];null!=u&&u.hasFeedbackText&&null!=u&&u.isInvalid&&g.push(u.feedbackId);null!=u&&u.hasHelpText&&g.push(u.helpTextId);return I({},y,{"aria-describedby":g.join(" ")||void 0,id:null!=o?o:null==u?void 0:u.id,isDisabled:null!=(n=null!=a?a:v)?n:null==u?void 0:u.isDisabled,isReadOnly:null!=(t=null!=s?s:d)?t:null==u?void 0:u.isReadOnly,isRequired:null!=(r=null!=l?l:c)?r:null==u?void 0:u.isRequired,isInvalid:null!=f?f:null==u?void 0:u.isInvalid,onFocus:(0,i.v0)(null==u?void 0:u.onFocus,p),onBlur:(0,i.v0)(null==u?void 0:u.onBlur,h)})}(e),{isDisabled:t,isInvalid:u,isReadOnly:o,isRequired:a}=n;return I({},R(n,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:t,readOnly:o,required:a,"aria-invalid":(0,r.Qm)(u),"aria-required":(0,r.Qm)(a),"aria-readonly":(0,r.Qm)(o)})}function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}d.Ts&&(w.displayName="FormHelperText");var k=(0,a.G)(((e,n)=>{var t=(0,s.j)("Input",e),i=x((0,l.Lr)(e)),u=(0,r.cx)("chakra-input",e.className);return o.createElement(f.m$.input,E({},i,{__css:t.field,ref:n,className:u}))}));d.Ts&&(k.displayName="Input"),k.id="Input"},9174:function(e){"use strict";function n(e,n,t){const r=t||".";let i;{let n;switch(typeof e){case"string":if(e.length<("-"===e[0]?5:4))return e;i=e,n=Number("."!==r?i.replace(r,"."):i);break;case"number":i=String(e),n=e,"."===r||Number.isInteger(e)||(i=i.replace(".",r));break;default:return e}if(-1e3<n&&n<1e3||isNaN(n)||!isFinite(n))return i}{const e=i.lastIndexOf(r);let t;e>-1&&(t=i.slice(e),i=i.slice(0,e));const u=function(e,n){let t=(e.length-1)%3+1;1===t&&"-"===e[0]&&(t=4);const r=[e.slice(0,t)];for(;t<e.length;t+=3)r.push(n,e.substr(t,3));return r}(i,n||",");return t&&u.push(t),u.join("")}}e.exports=n,e.exports.bindWith=function(e,t){return function(r){return n(r,e,t)}}},5723:function(e,n,t){"use strict";t.d(n,{ZP:function(){return S}});var r=t(7294),i=Object.prototype.hasOwnProperty;var u=new WeakMap,o=0;var a=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var n=this.serializeKey(e)[0];return this.cache.get(n)},e.prototype.set=function(e,n){var t=this.serializeKey(e)[0];this.cache.set(t,n),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var n=this.serializeKey(e)[0];return this.cache.has(n)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var n=this.serializeKey(e)[0];this.cache.delete(n),this.notify()},e.prototype.serializeKey=function(e){var n=null;if("function"===typeof e)try{e=e()}catch(t){e=""}return Array.isArray(e)?(n=e,e=function(e){if(!e.length)return"";for(var n="arg",t=0;t<e.length;++t)if(null!==e[t]){var r=void 0;"object"!==typeof e[t]&&"function"!==typeof e[t]?r="string"===typeof e[t]?'"'+e[t]+'"':String(e[t]):u.has(e[t])?r=u.get(e[t]):(r=o,u.set(e[t],o++)),n+="@"+r}else n+="@null";return n}(e)):e=String(e||""),[e,n,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var n=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var t=!0;return this.subs.push(e),function(){if(t){t=!1;var r=n.subs.indexOf(e);r>-1&&(n.subs[r]=n.subs[n.subs.length-1],n.subs.length--)}}},e.prototype.notify=function(){for(var e=0,n=this.subs;e<n.length;e++){(0,n[e])()}},e}(),s=!0,l={isOnline:function(){return s},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){s=!0,e()}),!1),window.addEventListener("offline",(function(){return s=!1}),!1))}},c=function(){return(c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},f=new a;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),v=c({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,n,t,r,i){if(t.isDocumentVisible()&&!("number"===typeof t.errorRetryCount&&i.retryCount>t.errorRetryCount)){var u=Math.min(i.retryCount,8),o=~~((Math.random()+.5)*(1<<u))*t.errorRetryInterval;setTimeout(r,o,i)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(n,t){var r,u;if(n===t)return!0;if(n&&t&&(r=n.constructor)===t.constructor){if(r===Date)return n.getTime()===t.getTime();if(r===RegExp)return n.toString()===t.toString();if(r===Array){if((u=n.length)===t.length)for(;u--&&e(n[u],t[u]););return-1===u}if(!r||"object"===typeof n){for(r in u=0,n){if(i.call(n,r)&&++u&&!i.call(t,r))return!1;if(!(r in t)||!e(n[r],t[r]))return!1}return Object.keys(t).length===u}}return n!==n&&t!==t},isPaused:function(){return!1}},l),p="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),h=p?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},y=p?r.useEffect:r.useLayoutEffect,g=(0,r.createContext)({});g.displayName="SWRConfigContext";var m=g,b=function(e,n,t,r){return new(t||(t=Promise))((function(i,u){function o(e){try{s(r.next(e))}catch(n){u(n)}}function a(e){try{s(r.throw(e))}catch(n){u(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}s((r=r.apply(e,n||[])).next())}))},O=function(e,n){var t,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(a){u=[6,a],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},w={},I={},R={},x={},E={},k={},P={},T=function(){var e=0;return function(){return++e}}();if(!p){var j=function(e){if(v.isDocumentVisible()&&v.isOnline())for(var n in e)e[n][0]&&e[n][0]()};"function"===typeof v.registerOnFocus&&v.registerOnFocus((function(){return j(R)})),"function"===typeof v.registerOnReconnect&&v.registerOnReconnect((function(){return j(x)}))}var N=function(e,n){void 0===n&&(n=!0);var t=f.serializeKey(e),r=t[0],i=t[2],u=t[3];if(!r)return Promise.resolve();var o=E[r];if(r&&o){for(var a=f.get(r),s=f.get(i),l=f.get(u),c=[],d=0;d<o.length;++d)c.push(o[d](n,a,s,l,d>0));return Promise.all(c).then((function(){return f.get(r)}))}return Promise.resolve(f.get(r))},C=function(e,n,t,r){var i=E[e];if(e&&i)for(var u=0;u<i.length;++u)i[u](!1,n,t,r)},F=function(e,n,t){return void 0===t&&(t=!0),b(void 0,void 0,void 0,(function(){var r,i,u,o,a,s,l,c,d,v,p,h,y;return O(this,(function(g){switch(g.label){case 0:if(r=f.serializeKey(e),i=r[0],u=r[2],!i)return[2];if("undefined"===typeof n)return[2,N(e,t)];if(k[i]=T()-1,P[i]=0,o=k[i],a=I[i],c=!1,n&&"function"===typeof n)try{n=n(f.get(i))}catch(m){n=void 0,l=m}if(!n||"function"!==typeof n.then)return[3,5];c=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,n];case 2:return s=g.sent(),[3,4];case 3:return d=g.sent(),l=d,[3,4];case 4:return[3,6];case 5:s=n,g.label=6;case 6:if((v=function(){if(o!==k[i]||a!==I[i]){if(l)throw l;return!0}})())return[2,s];if("undefined"!==typeof s&&f.set(i,s),f.set(u,l),P[i]=T()-1,!c&&v())return[2,s];if(p=E[i]){for(h=[],y=0;y<p.length;++y)h.push(p[y](!!t,s,l,void 0,y>0));return[2,Promise.all(h).then((function(){if(l)throw l;return f.get(i)}))]}if(l)throw l;return[2,s]}}))}))};Object.defineProperty(m.Provider,"default",{value:v});m.Provider;var S=function(){for(var e=this,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var i=n[0],u=Object.assign({},v,(0,r.useContext)(m),n.length>2?n[2]:2===n.length&&"object"===typeof n[1]?n[1]:{}),o=n.length>2||2===n.length&&"function"===typeof n[1]||null===n[1]?n[1]:u.fetcher,a=f.serializeKey(i),s=a[0],l=a[1],c=a[2],d=a[3],g=(0,r.useRef)(u);y((function(){g.current=u}));var j=function(){return u.revalidateOnMount||!u.initialData&&void 0===u.revalidateOnMount},N=function(){var e=f.get(s);return"undefined"===typeof e?u.initialData:e},S=function(){return!!f.get(d)||s&&j()},_=N(),D=f.get(c),L=S(),V=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),q=(0,r.useRef)({data:_,error:D,isValidating:L});(0,r.useDebugValue)(q.current.data);var z,M,A=(0,r.useState)({})[1],H=(0,r.useCallback)((function(e){var n=!1;for(var t in e)q.current[t]!==e[t]&&(q.current[t]=e[t],V.current[t]&&(n=!0));if(n){if(W.current||!K.current)return;A({})}}),[]),W=(0,r.useRef)(!1),B=(0,r.useRef)(s),K=(0,r.useRef)(!1),G=(0,r.useCallback)((function(e){for(var n,t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];W.current||K.current&&s===B.current&&(n=g.current)[e].apply(n,t)}),[s]),$=(0,r.useCallback)((function(e,n){return F(B.current,e,n)}),[]),Z=function(e,n){return e[s]?e[s].push(n):e[s]=[n],function(){var t=e[s],r=t.indexOf(n);r>=0&&(t[r]=t[t.length-1],t.pop())}},Q=(0,r.useCallback)((function(n){return void 0===n&&(n={}),b(e,void 0,void 0,(function(){var e,t,r,i,a,v,p,h,y,m;return O(this,(function(b){switch(b.label){case 0:if(!s||!o)return[2,!1];if(W.current)return[2,!1];if(g.current.isPaused())return[2,!1];e=n.retryCount,t=void 0===e?0:e,r=n.dedupe,i=void 0!==r&&r,a=!0,v="undefined"!==typeof w[s]&&i,b.label=1;case 1:return b.trys.push([1,6,,7]),H({isValidating:!0}),f.set(d,!0),v||C(s,q.current.data,q.current.error,!0),p=void 0,h=void 0,v?(h=I[s],[4,w[s]]):[3,3];case 2:return p=b.sent(),[3,5];case 3:return u.loadingTimeout&&!f.get(s)&&setTimeout((function(){a&&G("onLoadingSlow",s,u)}),u.loadingTimeout),w[s]=null!==l?o.apply(void 0,l):o(s),I[s]=h=T(),[4,w[s]];case 4:p=b.sent(),setTimeout((function(){delete w[s],delete I[s]}),u.dedupingInterval),G("onSuccess",p,s,u),b.label=5;case 5:return I[s]>h?[2,!1]:k[s]&&(h<=k[s]||h<=P[s]||0===P[s])?(H({isValidating:!1}),[2,!1]):(f.set(c,void 0),f.set(d,!1),y={isValidating:!1},"undefined"!==typeof q.current.error&&(y.error=void 0),u.compare(q.current.data,p)||(y.data=p),u.compare(f.get(s),p)||f.set(s,p),H(y),v||C(s,p,y.error,!1),[3,7]);case 6:return m=b.sent(),delete w[s],delete I[s],g.current.isPaused()?(H({isValidating:!1}),[2,!1]):(f.set(c,m),q.current.error!==m&&(H({isValidating:!1,error:m}),v||C(s,void 0,m,!1)),G("onError",m,s,u),u.shouldRetryOnError&&G("onErrorRetry",m,s,u,Q,{retryCount:t+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[s]);if(y((function(){if(s){W.current=!1;var e=K.current;K.current=!0;var n=q.current.data,t=N();B.current=s,u.compare(n,t)||H({data:t});var r=function(){return Q({dedupe:!0})};(e||j())&&("undefined"===typeof t||p?r():h(r));var i=!1,o=Z(R,(function(){!i&&g.current.revalidateOnFocus&&(i=!0,r(),setTimeout((function(){return i=!1}),g.current.focusThrottleInterval))})),a=Z(x,(function(){g.current.revalidateOnReconnect&&r()})),l=Z(E,(function(e,n,t,i,o){void 0===e&&(e=!0),void 0===o&&(o=!0);var a={},s=!1;return"undefined"===typeof n||u.compare(q.current.data,n)||(a.data=n,s=!0),q.current.error!==t&&(a.error=t,s=!0),"undefined"!==typeof i&&q.current.isValidating!==i&&(a.isValidating=i,s=!0),s&&H(a),!!e&&(o?r():Q())}));return function(){H=function(){return null},W.current=!0,o(),a(),l()}}}),[s,Q]),y((function(){var n=null,t=function(){return b(e,void 0,void 0,(function(){return O(this,(function(e){switch(e.label){case 0:return q.current.error||!g.current.refreshWhenHidden&&!g.current.isDocumentVisible()||!g.current.refreshWhenOffline&&!g.current.isOnline()?[3,2]:[4,Q({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return g.current.refreshInterval&&n&&(n=setTimeout(t,g.current.refreshInterval)),[2]}}))}))};return g.current.refreshInterval&&(n=setTimeout(t,g.current.refreshInterval)),function(){n&&(clearTimeout(n),n=null)}}),[u.refreshInterval,u.refreshWhenHidden,u.refreshWhenOffline,Q]),u.suspense){if(z=f.get(s),M=f.get(c),"undefined"===typeof z&&(z=_),"undefined"===typeof M&&(M=D),"undefined"===typeof z&&"undefined"===typeof M){if(w[s]||Q(),w[s]&&"function"===typeof w[s].then)throw w[s];z=w[s]}if("undefined"===typeof z&&M)throw M}var J=(0,r.useMemo)((function(){var e={revalidate:Q,mutate:$};return Object.defineProperties(e,{error:{get:function(){return V.current.error=!0,u.suspense?M:B.current===s?q.current.error:D},enumerable:!0},data:{get:function(){return V.current.data=!0,u.suspense?z:B.current===s?q.current.data:_},enumerable:!0},isValidating:{get:function(){return V.current.isValidating=!0,!!s&&q.current.isValidating},enumerable:!0}}),e}),[Q,_,D,$,s,u.suspense,M,z]);return J}}}]);