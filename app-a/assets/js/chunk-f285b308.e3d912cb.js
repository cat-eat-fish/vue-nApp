(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f285b308"],{"319e":function(t,o,l){"use strict";l.r(o);var e=function(){var t=this,o=t.$createElement,l=t._self._c||o;return l("div",{staticClass:"scroll-wrapper",attrs:{slot:"content"},slot:"content"},[l("div",{ref:"scrollWrap",staticClass:"scroll-list-wrap"},[l("cube-scroll",{ref:"scroll",attrs:{data:t.items,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp}},[l("div",{staticClass:"foods-wrapper"},t._l(t.items,function(o,e){return l("div",{key:e,staticClass:"app-scroll-item"},[l("div",{staticClass:"app-scroll-item"},[l("router-link",{attrs:{to:"/text3"}},[t._v("\n                            "+t._s(o.name)+"\n                        ")])],1)])}),0)])],1)])},n=[],s=l("e814"),a=l.n(s),i=l("5c40"),r={name:"text5",data:function(){return{items:[],pullDownRefresh:!0,pullDownRefreshThreshold:60,pullDownRefreshStop:40,pullDownRefreshTxt:"刷新成功",pullUpLoad:!0,pullUpLoadThreshold:0,pullUpLoadMoreTxt:"加载更多",pullUpLoadNoMoreTxt:"没有更多了",customPullDown:!1,page:1}},computed:{options:function(){return{pullDownRefresh:this.pullDownRefreshObj,pullUpLoad:this.pullUpLoadObj,scrollbar:!0}},pullDownRefreshObj:function(){return!!this.pullDownRefresh&&{threshold:a()(this.pullDownRefreshThreshold),txt:this.pullDownRefreshTxt}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:a()(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},created:function(){this.upDate()},methods:{upDate:function(){var t=this;this.page=1,Object(i["a"])(1,this.page).then(function(o){200==o.data.code&&(t.items=o.data.data,t.$nextTick(function(){t.$refs.scrollWrap.style.cssText="height:"+window.screen.height+"px"}))}).catch(function(t){console.log(t)})},onPullingDown:function(){this.upDate()},onPullingUp:function(){var t=this;t.page++,Object(i["a"])(1,this.page).then(function(o){200==o.data.code&&(t.items=t.items.concat(o.data.data))}).catch(function(t){console.log(t)})}}},p=r,u=(l("9d95"),l("2877")),c=Object(u["a"])(p,e,n,!1,null,null,null);o["default"]=c.exports},"9d95":function(t,o,l){"use strict";var e=l("cd25"),n=l.n(e);n.a},cd25:function(t,o,l){}}]);
//# sourceMappingURL=chunk-f285b308.e3d912cb.js.map