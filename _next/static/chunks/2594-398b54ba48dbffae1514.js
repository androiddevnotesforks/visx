"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2594],{47538:function(n,r){r.Z=Math.random},56426:function(n,r,t){t.r(r),t.d(r,{randomBates:function(){return f},randomBernoulli:function(){return h},randomBeta:function(){return v},randomBinomial:function(){return g},randomCauchy:function(){return M},randomExponential:function(){return l},randomGamma:function(){return m},randomGeometric:function(){return d},randomInt:function(){return u},randomIrwinHall:function(){return c},randomLcg:function(){return Z.Z},randomLogNormal:function(){return a},randomLogistic:function(){return w},randomNormal:function(){return e.Z},randomPareto:function(){return s},randomPoisson:function(){return y},randomUniform:function(){return i},randomWeibull:function(){return p}});var o=t(47538),i=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,1===arguments.length?(t=n,n=0):t-=n,function(){return r()*t+n}}return t.source=n,t}(o.Z),u=function n(r){function t(n,t){return arguments.length<2&&(t=n,n=0),n=Math.floor(n),t=Math.floor(t)-n,function(){return Math.floor(r()*t+n)}}return t.source=n,t}(o.Z),e=t(80086),a=function n(r){var t=e.Z.source(r);function o(){var n=t.apply(this,arguments);return function(){return Math.exp(n())}}return o.source=n,o}(o.Z),c=function n(r){function t(n){return(n=+n)<=0?()=>0:function(){for(var t=0,o=n;o>1;--o)t+=r();return t+o*r()}}return t.source=n,t}(o.Z),f=function n(r){var t=c.source(r);function o(n){if(0===(n=+n))return r;var o=t(n);return function(){return o()/n}}return o.source=n,o}(o.Z),l=function n(r){function t(n){return function(){return-Math.log1p(-r())/n}}return t.source=n,t}(o.Z),s=function n(r){function t(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-r(),n)}}return t.source=n,t}(o.Z),h=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(r()+n)}}return t.source=n,t}(o.Z),d=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-r())/n)})}return t.source=n,t}(o.Z),m=function n(r){var t=e.Z.source(r)();function o(n,o){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(o=null==o?1:+o,1===n)return()=>-Math.log1p(-r())*o;var i=(n<1?n+1:n)-1/3,u=1/(3*Math.sqrt(i)),e=n<1?()=>Math.pow(r(),1/n):()=>1;return function(){do{do{var n=t(),a=1+u*n}while(a<=0);a*=a*a;var c=1-r()}while(c>=1-.0331*n*n*n*n&&Math.log(c)>=.5*n*n+i*(1-a+Math.log(a)));return i*a*e()*o}}return o.source=n,o}(o.Z),v=function n(r){var t=m.source(r);function o(n,r){var o=t(n),i=t(r);return function(){var n=o();return 0===n?0:n/(n+i())}}return o.source=n,o}(o.Z),g=function n(r){var t=d.source(r),o=v.source(r);function i(n,r){return n=+n,(r=+r)>=1?()=>n:r<=0?()=>0:function(){for(var i=0,u=n,e=r;u*e>16&&u*(1-e)>16;){var a=Math.floor((u+1)*e),c=o(a,u-a+1)();c<=e?(i+=a,u-=a,e=(e-c)/(1-c)):(u=a-1,e/=c)}for(var f=e<.5,l=t(f?e:1-e),s=l(),h=0;s<=u;++h)s+=l();return i+(f?h:u-h)}}return i.source=n,i}(o.Z),p=function n(r){function t(n,t,o){var i;return 0===(n=+n)?i=n=>-Math.log(n):(n=1/n,i=r=>Math.pow(r,n)),t=null==t?0:+t,o=null==o?1:+o,function(){return t+o*i(-Math.log1p(-r()))}}return t.source=n,t}(o.Z),M=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){return n+t*Math.tan(Math.PI*r())}}return t.source=n,t}(o.Z),w=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){var o=r();return n+t*Math.log(o/(1-o))}}return t.source=n,t}(o.Z),y=function n(r){var t=m.source(r),o=g.source(r);function i(n){return function(){for(var i=0,u=n;u>16;){var e=Math.floor(.875*u),a=t(e)();if(a>u)return i+o(e-1,u/a)();i+=e,u-=a}for(var c=-Math.log1p(-r()),f=0;c<=u;++f)c-=Math.log1p(-r());return i+f}}return i.source=n,i}(o.Z),Z=t(89422)},80086:function(n,r,t){var o=t(47538);r.Z=function n(r){function t(n,t){var o,i;return n=null==n?0:+n,t=null==t?1:+t,function(){var u;if(null!=o)u=o,o=null;else do{o=2*r()-1,u=2*r()-1,i=o*o+u*u}while(!i||i>1);return n+t*u*Math.sqrt(-2*Math.log(i)/i)}}return t.source=n,t}(o.Z)},58197:function(n,r,t){function o(n,r){if((t=(n=r?n.toExponential(r-1):n.toExponential()).indexOf("e"))<0)return null;var t,o=n.slice(0,t);return[o.length>1?o[0]+o.slice(2):o,+n.slice(t+1)]}t.d(r,{WU:function(){return h}});var i,u=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function e(n){if(!(r=u.exec(n)))throw new Error("invalid format: "+n);var r;return new a({fill:r[1],align:r[2],sign:r[3],symbol:r[4],zero:r[5],width:r[6],comma:r[7],precision:r[8]&&r[8].slice(1),trim:r[9],type:r[10]})}function a(n){this.fill=void 0===n.fill?" ":n.fill+"",this.align=void 0===n.align?">":n.align+"",this.sign=void 0===n.sign?"-":n.sign+"",this.symbol=void 0===n.symbol?"":n.symbol+"",this.zero=!!n.zero,this.width=void 0===n.width?void 0:+n.width,this.comma=!!n.comma,this.precision=void 0===n.precision?void 0:+n.precision,this.trim=!!n.trim,this.type=void 0===n.type?"":n.type+""}function c(n,r){var t=o(n,r);if(!t)return n+"";var i=t[0],u=t[1];return u<0?"0."+new Array(-u).join("0")+i:i.length>u+1?i.slice(0,u+1)+"."+i.slice(u+1):i+new Array(u-i.length+2).join("0")}e.prototype=a.prototype,a.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var f={"%":function(n,r){return(100*n).toFixed(r)},b:function(n){return Math.round(n).toString(2)},c:function(n){return n+""},d:function(n){return Math.round(n).toString(10)},e:function(n,r){return n.toExponential(r)},f:function(n,r){return n.toFixed(r)},g:function(n,r){return n.toPrecision(r)},o:function(n){return Math.round(n).toString(8)},p:function(n,r){return c(100*n,r)},r:c,s:function(n,r){var t=o(n,r);if(!t)return n+"";var u=t[0],e=t[1],a=e-(i=3*Math.max(-8,Math.min(8,Math.floor(e/3))))+1,c=u.length;return a===c?u:a>c?u+new Array(a-c+1).join("0"):a>0?u.slice(0,a)+"."+u.slice(a):"0."+new Array(1-a).join("0")+o(n,Math.max(0,r+a-1))[0]},X:function(n){return Math.round(n).toString(16).toUpperCase()},x:function(n){return Math.round(n).toString(16)}};function l(n){return n}var s,h,d=Array.prototype.map,m=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function v(n){var r,t,u=void 0===n.grouping||void 0===n.thousands?l:(r=d.call(n.grouping,Number),t=n.thousands+"",function(n,o){for(var i=n.length,u=[],e=0,a=r[0],c=0;i>0&&a>0&&(c+a+1>o&&(a=Math.max(1,o-c)),u.push(n.substring(i-=a,i+a)),!((c+=a+1)>o));)a=r[e=(e+1)%r.length];return u.reverse().join(t)}),a=void 0===n.currency?"":n.currency[0]+"",c=void 0===n.currency?"":n.currency[1]+"",s=void 0===n.decimal?".":n.decimal+"",h=void 0===n.numerals?l:function(n){return function(r){return r.replace(/[0-9]/g,(function(r){return n[+r]}))}}(d.call(n.numerals,String)),v=void 0===n.percent?"%":n.percent+"",g=void 0===n.minus?"-":n.minus+"",p=void 0===n.nan?"NaN":n.nan+"";function M(n){var r=(n=e(n)).fill,t=n.align,o=n.sign,l=n.symbol,d=n.zero,M=n.width,w=n.comma,y=n.precision,Z=n.trim,b=n.type;"n"===b?(w=!0,b="g"):f[b]||(void 0===y&&(y=12),Z=!0,b="g"),(d||"0"===r&&"="===t)&&(d=!0,r="0",t="=");var x="$"===l?a:"#"===l&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",k="$"===l?c:/[%p]/.test(b)?v:"",E=f[b],N=/[defgprs%]/.test(b);function S(n){var e,a,c,f=x,l=k;if("c"===b)l=E(n)+l,n="";else{var v=(n=+n)<0||1/n<0;if(n=isNaN(n)?p:E(Math.abs(n),y),Z&&(n=function(n){n:for(var r,t=n.length,o=1,i=-1;o<t;++o)switch(n[o]){case".":i=r=o;break;case"0":0===i&&(i=o),r=o;break;default:if(!+n[o])break n;i>0&&(i=0)}return i>0?n.slice(0,i)+n.slice(r+1):n}(n)),v&&0===+n&&"+"!==o&&(v=!1),f=(v?"("===o?o:g:"-"===o||"("===o?"":o)+f,l=("s"===b?m[8+i/3]:"")+l+(v&&"("===o?")":""),N)for(e=-1,a=n.length;++e<a;)if(48>(c=n.charCodeAt(e))||c>57){l=(46===c?s+n.slice(e+1):n.slice(e))+l,n=n.slice(0,e);break}}w&&!d&&(n=u(n,1/0));var S=f.length+n.length+l.length,z=S<M?new Array(M-S+1).join(r):"";switch(w&&d&&(n=u(z+n,z.length?M-l.length:1/0),z=""),t){case"<":n=f+n+l+z;break;case"=":n=f+z+n+l;break;case"^":n=z.slice(0,S=z.length>>1)+f+n+l+z.slice(S);break;default:n=z+f+n+l}return h(n)}return y=void 0===y?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,y)):Math.max(0,Math.min(20,y)),S.toString=function(){return n+""},S}return{format:M,formatPrefix:function(n,r){var t,i=M(((n=e(n)).type="f",n)),u=3*Math.max(-8,Math.min(8,Math.floor((t=r,((t=o(Math.abs(t)))?t[1]:NaN)/3)))),a=Math.pow(10,-u),c=m[8+u/3];return function(n){return i(a*n)+c}}}}s=v({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),h=s.format,s.formatPrefix}}]);