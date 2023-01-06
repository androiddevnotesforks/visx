"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6543],{26543:function(t,e,n){n.d(e,{Z:function(){return w}});n(13980);var r=n(2784),i=n(72779),o=n.n(i),a=n(89549),s=n(42290),c=n(49663),u=n(31866),l=n(33030),f=n(34237);function d(){return(d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t){var e=t.hideTicks,n=t.horizontal,i=t.orientation,s=t.tickClassName,c=t.tickComponent,h=t.tickLabelProps,v=t.tickStroke,m=void 0===v?"#222":v,p=t.tickTransform,y=t.ticks,g=t.strokeWidth,b=t.tickLineProps;return y.map((function(t){var v,y=t.value,k=t.index,x=t.from,O=t.to,w=t.formattedValue,Z=null!=(v=h[k])?v:{},j=Math.max(10,"number"===typeof Z.fontSize&&Z.fontSize||0),N=O.y+(n&&i!==f.Z.top?j:0);return r.createElement(a.Z,{key:"visx-tick-"+y+"-"+k,className:o()("visx-axis-tick",s),transform:p},!e&&r.createElement(u.Z,d({from:x,to:O,stroke:m,strokeWidth:g,strokeLinecap:"square"},b)),c?c(d({},Z,{x:O.x,y:N,formattedValue:w})):r.createElement(l.Z,d({x:O.x,y:N},Z),w))}))}function v(){return(v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var m={textAnchor:"middle",fontFamily:"Arial",fontSize:10,fill:"#222"};function p(t){var e=t.axisFromPoint,n=t.axisLineClassName,i=t.axisToPoint,a=t.hideAxisLine,s=t.hideTicks,c=t.horizontal,d=t.label,p=void 0===d?"":d,y=t.labelClassName,g=t.labelOffset,b=void 0===g?14:g,k=t.labelProps,x=void 0===k?m:k,O=t.orientation,w=void 0===O?f.Z.bottom:O,Z=t.scale,j=t.stroke,N=void 0===j?"#222":j,P=t.strokeDasharray,L=t.strokeWidth,T=void 0===L?1:L,S=t.tickClassName,A=t.tickComponent,E=t.tickLineProps,C=t.tickLabelProps,F=void 0===C?function(){return m}:C,z=t.tickLength,W=void 0===z?8:z,_=t.tickStroke,M=void 0===_?"#222":_,R=t.tickTransform,H=t.ticks,V=t.ticksComponent,D=void 0===V?h:V,B=H.map((function(t){var e=t.value,n=t.index;return F(e,n,H)})),q=Math.max.apply(Math,[10].concat(B.map((function(t){return"number"===typeof t.fontSize?t.fontSize:0}))));return r.createElement(r.Fragment,null,D({hideTicks:s,horizontal:c,orientation:w,scale:Z,tickClassName:S,tickComponent:A,tickLabelProps:B,tickStroke:M,tickTransform:R,ticks:H,strokeWidth:T,tickLineProps:E}),!a&&r.createElement(u.Z,{className:o()("visx-axis-line",n),from:e,to:i,stroke:N,strokeWidth:T,strokeDasharray:P}),p&&r.createElement(l.Z,v({className:o()("visx-axis-label",y)},function(t){var e,n,r,i=t.labelOffset,o=t.labelProps,a=t.orientation,s=t.range,c=t.tickLabelFontSize,u=t.tickLength,l=a===f.Z.left||a===f.Z.top?-1:1;if(a===f.Z.top||a===f.Z.bottom){var d=a===f.Z.bottom&&"number"===typeof o.fontSize?o.fontSize:0;e=(Number(s[0])+Number(s[s.length-1]))/2,n=l*(u+i+c+d)}else e=l*((Number(s[0])+Number(s[s.length-1]))/2),n=-(u+i),r="rotate("+90*l+")";return{x:e,y:n,transform:r}}({labelOffset:b,labelProps:x,orientation:w,range:Z.range(),tickLabelFontSize:q,tickLength:W}),x),p))}var y=n(55657);var g=n(79196);function b(t,e){var n=t.x,r=t.y;return new g.Z(e?{x:n,y:r}:{x:r,y:n})}function k(){return(k=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var x=["children","axisClassName","hideAxisLine","hideTicks","hideZero","left","numTicks","orientation","rangePadding","scale","tickFormat","tickLength","tickValues","top"];function O(){return(O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function w(t){var e,n=t.children,i=void 0===n?p:n,u=t.axisClassName,l=t.hideAxisLine,d=void 0!==l&&l,h=t.hideTicks,v=void 0!==h&&h,m=t.hideZero,g=void 0!==m&&m,w=t.left,Z=void 0===w?0:w,j=t.numTicks,N=void 0===j?10:j,P=t.orientation,L=void 0===P?f.Z.bottom:P,T=t.rangePadding,S=void 0===T?0:T,A=t.scale,E=t.tickFormat,C=t.tickLength,F=void 0===C?8:C,z=t.tickValues,W=t.top,_=void 0===W?0:W,M=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,x),R=null!=E?E:function(t){return"tickFormat"in t?t.tickFormat():y.Z}(A),H=L===f.Z.left,V=L===f.Z.top,D=V||L===f.Z.bottom,B=function(t,e){void 0===e&&(e="center");var n=t;if("start"!==e&&"bandwidth"in n){var r=n.bandwidth();return"center"===e&&(r/=2),n.round()&&(r=Math.round(r)),function(t){var e=n(t);return"number"===typeof e?e+r:e}}return t}(A),q=H||V?-1:1,I=A.range(),J=(void 0===(e=S)&&(e=0),"number"===typeof e?{start:e,end:e}:k({start:0,end:0},e)),G=b({x:Number(I[0])+.5-J.start,y:0},D),K=b({x:Number(I[I.length-1])+.5+J.end,y:0},D),Q=(null!=z?z:(0,s.Z)(A,N)).filter((function(t){return!g||0!==t&&"0"!==t})).map((function(t,e){return{value:t,index:e}})),U=Q.map((function(t){var e=t.value,n=t.index,r=(0,c.Z)(B(e));return{value:e,index:n,from:b({x:r,y:0},D),to:b({x:r,y:F*q},D),formattedValue:R(e,n,Q)}}));return r.createElement(a.Z,{className:o()("visx-axis",u),top:_,left:Z},i(O({},M,{axisFromPoint:G,axisToPoint:K,hideAxisLine:d,hideTicks:v,hideZero:g,horizontal:D,numTicks:N,orientation:L,rangePadding:S,scale:A,tickFormat:R,tickLength:F,tickPosition:B,tickSign:q,ticks:U})))}},34237:function(t,e){e.Z={top:"top",left:"left",right:"right",bottom:"bottom"}},89549:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(13980),i=n.n(r),o=n(2784),a=n(72779),s=n.n(a),c=["top","left","transform","className","children","innerRef"];function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t){var e=t.top,n=void 0===e?0:e,r=t.left,i=void 0===r?0:r,a=t.transform,l=t.className,f=t.children,d=t.innerRef,h=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,c);return o.createElement("g",u({ref:d,className:s()("visx-group",l),transform:a||"translate("+i+", "+n+")"},h),f)}l.propTypes={top:i().number,left:i().number,transform:i().string,className:i().string,children:i().node,innerRef:i().oneOfType([i().string,i().func,i().object])}},79196:function(t,e,n){n.d(e,{Z:function(){return r}});var r=function(){function t(t){var e=t.x,n=void 0===e?0:e,r=t.y,i=void 0===r?0:r;this.x=0,this.y=0,this.x=n,this.y=i}var e=t.prototype;return e.value=function(){return{x:this.x,y:this.y}},e.toArray=function(){return[this.x,this.y]},t}()},49663:function(t,e,n){function r(t){if(("function"===typeof t||"object"===typeof t&&t)&&"valueOf"in t){var e=t.valueOf();if("number"===typeof e)return e}return t}n.d(e,{Z:function(){return r}})},42290:function(t,e,n){function r(t,e){var n=t;return"ticks"in n?n.ticks(e):n.domain().filter((function(t,n,r){return null==e||r.length<=e||n%Math.round((r.length-1)/e)===0}))}n.d(e,{Z:function(){return r}})},55657:function(t,e,n){function r(t){return null==t?void 0:t.toString()}n.d(e,{Z:function(){return r}})},31866:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(2784),i=n(72779),o=n.n(i),a=["from","to","fill","className","innerRef"];function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){var e=t.from,n=void 0===e?{x:0,y:0}:e,i=t.to,c=void 0===i?{x:1,y:1}:i,u=t.fill,l=void 0===u?"transparent":u,f=t.className,d=t.innerRef,h=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,a),v=n.x===c.x||n.y===c.y;return r.createElement("line",s({ref:d,className:o()("visx-line",f),x1:n.x,y1:n.y,x2:c.x,y2:c.y,fill:l,shapeRendering:v?"crispEdges":"auto"},h))}},33030:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(2784),i=n(44481),o=["dx","dy","textAnchor","innerRef","innerTextRef","verticalAnchor","angle","lineHeight","scaleToFit","capHeight","width"];function a(){return(a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var s={overflow:"visible"};function c(t){var e=t.dx,n=void 0===e?0:e,c=t.dy,u=void 0===c?0:c,l=t.textAnchor,f=void 0===l?"start":l,d=t.innerRef,h=t.innerTextRef,v=(t.verticalAnchor,t.angle,t.lineHeight),m=void 0===v?"1em":v,p=(t.scaleToFit,t.capHeight,t.width,function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,o)),y=p.x,g=void 0===y?0:y,b=p.fontSize,k=(0,i.Z)(t),x=k.wordsByLines,O=k.startDy,w=k.transform;return r.createElement("svg",{ref:d,x:n,y:u,fontSize:b,style:s},x.length>0?r.createElement("text",a({ref:h,transform:w},p,{textAnchor:f}),x.map((function(t,e){return r.createElement("tspan",{key:e,x:g,dy:0===e?O:m},t.words.join(" "))}))):null)}},44481:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(2784),i=n(32718),o=n.n(i),a=n(79795),s=["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"];function c(t){return"number"===typeof t}function u(t){return"number"===typeof t&&Number.isFinite(t)||"string"===typeof t}function l(t){var e=t.verticalAnchor,n=void 0===e?"end":e,i=t.scaleToFit,l=void 0!==i&&i,f=t.angle,d=t.width,h=t.lineHeight,v=void 0===h?"1em":h,m=t.capHeight,p=void 0===m?"0.71em":m,y=t.children,g=t.style,b=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,s),k=b.x,x=void 0===k?0:k,O=b.y,w=void 0===O?0:O,Z=!u(x)||!u(w),j=(0,r.useMemo)((function(){return{wordsWithWidth:(null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(t){return{word:t,wordWidth:(0,a.Z)(t,g)||0}})),spaceWidth:(0,a.Z)("\xa0",g)||0}}),[y,g]),N=j.wordsWithWidth,P=j.spaceWidth,L=(0,r.useMemo)((function(){return Z?[]:d||l?N.reduce((function(t,e){var n=e.word,r=e.wordWidth,i=t[t.length-1];if(i&&(null==d||l||(i.width||0)+r+P<d))i.words.push(n),i.width=i.width||0,i.width+=r+P;else{var o={words:[n],width:r};t.push(o)}return t}),[]):[{words:null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[Z,d,l,y,N,P]),T=(0,r.useMemo)((function(){return Z?"":"start"===n?o()("calc("+p+")"):"middle"===n?o()("calc("+(L.length-1)/2+" * -"+v+" + ("+p+" / 2))"):o()("calc("+(L.length-1)+" * -"+v+")")}),[Z,n,p,L.length,v]),S=(0,r.useMemo)((function(){var t=[];if(Z)return"";if(c(x)&&c(w)&&c(d)&&l&&L.length>0){var e=L[0].width||1,n="shrink-only"===l?Math.min(d/e,1):d/e,r=n,i=x-n*x,o=w-r*w;t.push("matrix("+n+", 0, 0, "+r+", "+i+", "+o+")")}return f&&t.push("rotate("+f+", "+x+", "+w+")"),t.length>0?t.join(" "):""}),[Z,x,w,d,l,L,f]);return{wordsByLines:L,startDy:T,transform:S}}},79795:function(t,e,n){var r=n(51726),i=n.n(r),o="__react_svg_text_measurement_id";e.Z=i()((function(t,e){try{var n=document.getElementById(o);if(!n){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("aria-hidden","true"),r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(n=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id",o),r.appendChild(n),document.body.appendChild(r)}return Object.assign(n.style,e),n.textContent=t,n.getComputedTextLength()}catch(i){return null}}),(function(t,e){return t+"_"+JSON.stringify(e)}))}}]);