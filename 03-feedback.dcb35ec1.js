!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,i,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function S(e){return c=e,a=setTimeout(h,t),d?y(e):f}function T(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=p();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function w(e){return a=void 0,v&&o?y(e):(o=i=void 0,f)}function O(){var e=p(),n=T(e);if(o=arguments,i=this,l=e,n){if(void 0===a)return S(l);if(s)return a=setTimeout(h,t),y(l)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?g(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=i=a=void 0},O.flush=function(){return void 0===a?f:w(p())},O}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var S,T="feedback-form-state",h=document.querySelector("form"),w=document.querySelector("input"),O=document.querySelector("textarea"),x=document.querySelector("button");console.log(h),console.log(w),console.log(O),console.log(x),console.log(localStorage),h.addEventListener("submit",(function(e){e.preventDefault(),console.log("Відправляємо форму"),e.currentTarget.reset(),localStorage.removeItem(T)})),O.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(T,t)}),500)),(S=localStorage.getItem(T))&&(console.log(S),O.value=S)}();
//# sourceMappingURL=03-feedback.dcb35ec1.js.map
