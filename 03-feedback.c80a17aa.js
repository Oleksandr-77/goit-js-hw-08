function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,u,f,a,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):u}function S(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=i}function T(){var e=v();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return s?g(n,i-(e-c)):n}(e))}function h(e){return f=void 0,p&&o?b(e):(o=r=void 0,u)}function w(){var e=v(),n=S(e);if(o=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(s)return f=setTimeout(T,t),b(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},w.flush=function(){return void 0===f?u:h(v())},w}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector("form"),j=document.querySelector("input"),S=document.querySelector("textarea"),T=document.querySelector("button");console.log(b),console.log(j),console.log(S),console.log(T),console.log(localStorage),b.addEventListener("submit",(function(e){e.preventDefault(),console.log("Відправляємо форму"),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),S.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)}),500)),function(){const e=localStorage.getItem("feedback-form-state");e&&(console.log(e),S.value=e)}();
//# sourceMappingURL=03-feedback.c80a17aa.js.map
