!function(e){var t={},n={};n.attachEvent=function(t,n,o){return"addEventListener"in e?t.addEventListener(n,o,!1):void 0},n.fireFakeEvent=function(e,t){return document.createEvent?e.target.dispatchEvent(n.createEvent(t)):void 0},n.createEvent=function(t){if(document.createEvent){var n=e.document.createEvent("HTMLEvents");return n.initEvent(t,!0,!0),n.eventName=t,n}},n.getRealEvent=function(e){return e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length?e.originalEvent.touches[0]:e.touches&&e.touches.length?e.touches[0]:e};var o=[{test:("propertyIsEnumerable"in e||"hasOwnProperty"in document)&&(e.propertyIsEnumerable("ontouchstart")||document.hasOwnProperty("ontouchstart")),events:{start:"touchstart",move:"touchmove",end:"touchend"}},{test:e.navigator.msPointerEnabled,events:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},{test:e.navigator.pointerEnabled,events:{start:"pointerdown",move:"pointermove",end:"pointerup"}}];t.options={eventName:"tap",fingerMaxOffset:11};var a,r,i,v,c={};a=function(e){return n.attachEvent(document.documentElement,v[e],i[e])},i={start:function(e){e=n.getRealEvent(e),c.start=[e.pageX,e.pageY],c.offset=[0,0]},move:function(e){return c.start||c.move?(e=n.getRealEvent(e),c.move=[e.pageX,e.pageY],void(c.offset=[Math.abs(c.move[0]-c.start[0]),Math.abs(c.move[1]-c.start[1])])):!1},end:function(o){if(o=n.getRealEvent(o),c.offset[0]<t.options.fingerMaxOffset&&c.offset[1]<t.options.fingerMaxOffset&&!n.fireFakeEvent(o,t.options.eventName)){if(e.navigator.msPointerEnabled||e.navigator.pointerEnabled){var a=function(e){e.preventDefault(),o.target.removeEventListener("click",a)};o.target.addEventListener("click",a,!1)}o.preventDefault()}c={}},click:function(e){return n.fireFakeEvent(e,t.options.eventName)?void 0:e.preventDefault()},emulatedTap:function(e){return c.offset&&n.fireFakeEvent(e,t.options.eventName),e.preventDefault()}},r=function(){for(var e=0;e<o.length;e++)if(o[e].test)return v=o[e].events,a("start"),a("move"),a("end"),n.attachEvent(document.documentElement,"click",i.emulatedTap),!1;return n.attachEvent(document.documentElement,"click",i.click)},n.attachEvent(e,"load",r),"function"==typeof define&&define.amd?define(function(){return r(),t}):e.Tap=t}(window);