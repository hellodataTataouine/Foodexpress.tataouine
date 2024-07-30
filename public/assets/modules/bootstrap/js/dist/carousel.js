!function(c,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],e):(c=c||self,c.Carousel=e(c.jQuery,c.Util))}(this,function(c,e){"use strict";function t(c,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}function l(c,e,l){return e&&t(c.prototype,e),l&&t(c,l),c}function n(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function a(c){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),l.forEach(function(e){n(c,e,t[e])})}return c}c=c&&c.hasOwnProperty("default")?c["default"]:c,e=e&&e.hasOwnProperty("default")?e["default"]:e;var i="carousel",s="4.3.1",h="bs.carousel",r="."+h,o=".data-api",v=c.fn[i],f=37,m=39,u=500,z=40,d={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},g={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},p={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},C={SLIDE:"slide"+r,SLID:"slid"+r,KEYDOWN:"keydown"+r,MOUSEENTER:"mouseenter"+r,MOUSELEAVE:"mouseleave"+r,TOUCHSTART:"touchstart"+r,TOUCHMOVE:"touchmove"+r,TOUCHEND:"touchend"+r,POINTERDOWN:"pointerdown"+r,POINTERUP:"pointerup"+r,DRAG_START:"dragstart"+r,LOAD_DATA_API:"load"+r+o,CLICK_DATA_API:"click"+r+o},M={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item",POINTER_EVENT:"pointer-event"},H={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",ITEM_IMG:".carousel-item img",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},_={TOUCH:"touch",PEN:"pen"},V=function(){function t(c,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=c,this._indicatorsElement=this._element.querySelector(H.INDICATORS),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide(p.NEXT)},n.nextWhenVisible=function(){!document.hidden&&c(this._element).is(":visible")&&"hidden"!==c(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(p.PREV)},n.pause=function(c){c||(this._isPaused=!0),this._element.querySelector(H.NEXT_PREV)&&(e.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(c){c||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(e){var t=this;this._activeElement=this._element.querySelector(H.ACTIVE_ITEM);var l=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||0>e)){if(this._isSliding)return void c(this._element).one(C.SLID,function(){return t.to(e)});if(l===e)return this.pause(),void this.cycle();var n=e>l?p.NEXT:p.PREV;this._slide(n,this._items[e])}},n.dispose=function(){c(this._element).off(r),c.removeData(this._element,h),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(c){return c=a({},d,c),e.typeCheckConfig(i,c,g),c},n._handleSwipe=function(){var c=Math.abs(this.touchDeltaX);if(!(z>=c)){var e=c/this.touchDeltaX;e>0&&this.prev(),0>e&&this.next()}},n._addEventListeners=function(){var e=this;this._config.keyboard&&c(this._element).on(C.KEYDOWN,function(c){return e._keydown(c)}),"hover"===this._config.pause&&c(this._element).on(C.MOUSEENTER,function(c){return e.pause(c)}).on(C.MOUSELEAVE,function(c){return e.cycle(c)}),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function(c){e._pointerEvent&&_[c.originalEvent.pointerType.toUpperCase()]?e.touchStartX=c.originalEvent.clientX:e._pointerEvent||(e.touchStartX=c.originalEvent.touches[0].clientX)},l=function(c){c.originalEvent.touches&&c.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=c.originalEvent.touches[0].clientX-e.touchStartX},n=function(c){e._pointerEvent&&_[c.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=c.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(c){return e.cycle(c)},u+e._config.interval))};c(this._element.querySelectorAll(H.ITEM_IMG)).on(C.DRAG_START,function(c){return c.preventDefault()}),this._pointerEvent?(c(this._element).on(C.POINTERDOWN,function(c){return t(c)}),c(this._element).on(C.POINTERUP,function(c){return n(c)}),this._element.classList.add(M.POINTER_EVENT)):(c(this._element).on(C.TOUCHSTART,function(c){return t(c)}),c(this._element).on(C.TOUCHMOVE,function(c){return l(c)}),c(this._element).on(C.TOUCHEND,function(c){return n(c)}))}},n._keydown=function(c){if(!/input|textarea/i.test(c.target.tagName))switch(c.which){case f:c.preventDefault(),this.prev();break;case m:c.preventDefault(),this.next()}},n._getItemIndex=function(c){return this._items=c&&c.parentNode?[].slice.call(c.parentNode.querySelectorAll(H.ITEM)):[],this._items.indexOf(c)},n._getItemByDirection=function(c,e){var t=c===p.NEXT,l=c===p.PREV,n=this._getItemIndex(e),a=this._items.length-1,i=l&&0===n||t&&n===a;if(i&&!this._config.wrap)return e;var s=c===p.PREV?-1:1,h=(n+s)%this._items.length;return-1===h?this._items[this._items.length-1]:this._items[h]},n._triggerSlideEvent=function(e,t){var l=this._getItemIndex(e),n=this._getItemIndex(this._element.querySelector(H.ACTIVE_ITEM)),a=c.Event(C.SLIDE,{relatedTarget:e,direction:t,from:n,to:l});return c(this._element).trigger(a),a},n._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(H.ACTIVE));c(t).removeClass(M.ACTIVE);var l=this._indicatorsElement.children[this._getItemIndex(e)];l&&c(l).addClass(M.ACTIVE)}},n._slide=function(t,l){var n,a,i,s=this,h=this._element.querySelector(H.ACTIVE_ITEM),r=this._getItemIndex(h),o=l||h&&this._getItemByDirection(t,h),v=this._getItemIndex(o),f=Boolean(this._interval);if(t===p.NEXT?(n=M.LEFT,a=M.NEXT,i=p.LEFT):(n=M.RIGHT,a=M.PREV,i=p.RIGHT),o&&c(o).hasClass(M.ACTIVE))return void(this._isSliding=!1);var m=this._triggerSlideEvent(o,i);if(!m.isDefaultPrevented()&&h&&o){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(o);var u=c.Event(C.SLID,{relatedTarget:o,direction:i,from:r,to:v});if(c(this._element).hasClass(M.SLIDE)){c(o).addClass(a),e.reflow(o),c(h).addClass(n),c(o).addClass(n);var z=parseInt(o.getAttribute("data-interval"),10);z?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=z):this._config.interval=this._config.defaultInterval||this._config.interval;var d=e.getTransitionDurationFromElement(h);c(h).one(e.TRANSITION_END,function(){c(o).removeClass(n+" "+a).addClass(M.ACTIVE),c(h).removeClass(M.ACTIVE+" "+a+" "+n),s._isSliding=!1,setTimeout(function(){return c(s._element).trigger(u)},0)}).emulateTransitionEnd(d)}else c(h).removeClass(M.ACTIVE),c(o).addClass(M.ACTIVE),this._isSliding=!1,c(this._element).trigger(u);f&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var l=c(this).data(h),n=a({},d,c(this).data());"object"==typeof e&&(n=a({},n,e));var i="string"==typeof e?e:n.slide;if(l||(l=new t(this,n),c(this).data(h,l)),"number"==typeof e)l.to(e);else if("string"==typeof i){if("undefined"==typeof l[i])throw new TypeError('No method named "'+i+'"');l[i]()}else n.interval&&n.ride&&(l.pause(),l.cycle())})},t._dataApiClickHandler=function(l){var n=e.getSelectorFromElement(this);if(n){var i=c(n)[0];if(i&&c(i).hasClass(M.CAROUSEL)){var s=a({},c(i).data(),c(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(c(i),s),r&&c(i).data(h).to(r),l.preventDefault()}}},l(t,null,[{key:"VERSION",get:function(){return s}},{key:"Default",get:function(){return d}}]),t}();return c(document).on(C.CLICK_DATA_API,H.DATA_SLIDE,V._dataApiClickHandler),c(window).on(C.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(H.DATA_RIDE)),t=0,l=e.length;l>t;t++){var n=c(e[t]);V._jQueryInterface.call(n,n.data())}}),c.fn[i]=V._jQueryInterface,c.fn[i].Constructor=V,c.fn[i].noConflict=function(){return c.fn[i]=v,V._jQueryInterface},V});