(function(t){function e(e){for(var n,i,s=e[0],u=e[1],o=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,s=1;s<a.length;s++){var u=a[s];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={index:0},c=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var l=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0dc3":function(t,e,a){},2879:function(t,e,a){},"50f5":function(t,e,a){"use strict";a("67e6")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"67e6":function(t,e,a){},"6a13":function(t,e,a){},"6ace":function(t,e,a){"use strict";a("0dc3")},"6dd0":function(t,e,a){"use strict";a("6a13")},"9c0c":function(t,e,a){},"9cc9":function(t,e,a){"use strict";a("d192")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("game")],1)},c=[],i=a("d4ec"),s=a("262e"),u=a("2caf"),o=a("9ab4"),l=a("1b40"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("board",[a("template",{slot:"deck"},t._l(t.deck.getCards(),(function(e){return a("playing-card",{key:""+e,attrs:{card:e,stacked:!t.hasDealt}})})),1),t._l(t.players,(function(t,e){return a("player-hand",{key:t.getName(),attrs:{slot:"player-"+(e+1),player:t,vertical:e%2===1},slot:"player-"+(e+1)})})),a("app-button",{attrs:{slot:"actions",disabled:t.hasDealt},on:{click:t.deal},slot:"actions"},[t._v(" Deal ")]),a("app-button",{attrs:{slot:"actions"},on:{click:t.resetGame},slot:"actions"},[t._v(" Reset ")])],2)},f=[],p=a("1da1"),b=a("2909"),h=a("bee2");a("96cf"),a("159b"),a("d81d"),a("d3b7");function v(t){return y.apply(this,arguments)}function y(){return y=Object(p["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}a("4de4"),a("4e82");var O,j=a("ade3");a("07ac");(function(t){t["two"]="2",t["three"]="3",t["four"]="4",t["five"]="5",t["six"]="6",t["seven"]="7",t["eight"]="8",t["nine"]="9",t["ten"]="10",t["jack"]="J",t["queen"]="Q",t["king"]="K",t["ace"]="A"})(O||(O={}));var k,g,_=Object.values(O),m=(k={},Object(j["a"])(k,O.two,0),Object(j["a"])(k,O.three,0),Object(j["a"])(k,O.four,0),Object(j["a"])(k,O.five,0),Object(j["a"])(k,O.six,0),Object(j["a"])(k,O.seven,0),Object(j["a"])(k,O.eight,0),Object(j["a"])(k,O.nine,0),Object(j["a"])(k,O.ten,0),Object(j["a"])(k,O.jack,1),Object(j["a"])(k,O.queen,2),Object(j["a"])(k,O.king,3),Object(j["a"])(k,O.ace,4),k),C=function(){function t(){Object(i["a"])(this,t)}return Object(h["a"])(t,[{key:"score",value:function(t){return t.reduce((function(t,e){return t+m[e.getFace()]}),0)}}]),t}();(function(t){t["club"]="♣",t["diamond"]="♦",t["heart"]="♥",t["spade"]="♠"})(g||(g={}));var x=Object.values(g),w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new C;Object(i["a"])(this,t),this.cards=[],this.cards=e,this.scorer=a}return Object(h["a"])(t,[{key:"getCards",value:function(t){return t?this.cards.filter((function(e){return e.getSuit()===t})):this.cards}},{key:"getSortedCards",value:function(){return Object(b["a"])(this.cards).sort((function(t,e){var a=x.indexOf(e.getSuit())-x.indexOf(t.getSuit());return a||_.indexOf(e.getFace())-_.indexOf(t.getFace())}))}},{key:"setCards",value:function(t){return this.cards=t,this}},{key:"addCard",value:function(t){return this.cards.push(t),this}},{key:"addCards",value:function(t){var e;return(e=this.cards).push.apply(e,Object(b["a"])(t)),this}},{key:"popCard",value:function(){return this.cards.pop()}},{key:"getSize",value:function(){return this.cards.length}},{key:"getPointValue",value:function(){return this.scorer.score(this.cards)}},{key:"getPointValueForSuit",value:function(t){return this.scorer.score(this.getCards(t))}}]),t}(),S=(a("99af"),function(){function t(e,a){Object(i["a"])(this,t),this.face=e,this.suit=a}return Object(h["a"])(t,[{key:"getFace",value:function(){return this.face}},{key:"getSuit",value:function(){return this.suit}},{key:"toString",value:function(){return"".concat(this.getFace()).concat(this.getSuit())}}]),t}()),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["card",{"card--stacked":t.stacked}],style:t.style},[a("card-number",{staticClass:"card__section",attrs:{face:t.card.face,suit:t.card.suit}}),a("card-number",{staticClass:"card__section",attrs:{face:t.card.face,suit:t.card.suit,size:3,hideSuit:!0}}),a("card-number",{staticClass:"card__section",attrs:{face:t.card.face,suit:t.card.suit}})],1)},D=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-number",style:t.style},[a("span",{staticClass:"card-number__face"},[t._v(t._s(t.face))]),t.hideSuit?t._e():a("span",{staticClass:"card-number__suit"},[t._v(t._s(t.suit))])])},z=[],H=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(h["a"])(a,[{key:"style",get:function(){return{fontSize:"".concat(this.size,"em"),color:[g.diamond,g.heart].indexOf(this.suit)>=0?"red":"black"}}}]),a}(l["c"]);Object(o["a"])([Object(l["b"])({required:!0})],H.prototype,"face",void 0),Object(o["a"])([Object(l["b"])({required:!0})],H.prototype,"suit",void 0),Object(o["a"])([Object(l["b"])({default:1.25})],H.prototype,"size",void 0),Object(o["a"])([Object(l["b"])({default:!1})],H.prototype,"hideSuit",void 0),H=Object(o["a"])([Object(l["a"])({name:"CardNumber"})],H);var $=H,M=$,q=(a("e6bc"),a("2877")),F=Object(q["a"])(M,E,z,!1,null,"8eabfc6a",null),N=F.exports,R=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(h["a"])(a,[{key:"style",get:function(){return{fontSize:"".concat(this.size,"em")}}}]),a}(l["c"]);Object(o["a"])([Object(l["b"])({required:!0})],R.prototype,"card",void 0),Object(o["a"])([Object(l["b"])({default:.75})],R.prototype,"size",void 0),Object(o["a"])([Object(l["b"])({default:!1})],R.prototype,"stacked",void 0),R=Object(o["a"])([Object(l["a"])({name:"PlayingCard",components:{CardNumber:N}})],R);var B=R,G=B,T=(a("6dd0"),Object(q["a"])(G,P,D,!1,null,"2a7cd19e",null)),A=T.exports,J=(a("b0c0"),function(){function t(e){Object(i["a"])(this,t),this.name=e,this.hand=new w}return Object(h["a"])(t,[{key:"giveCard",value:function(t){return this.hand.addCard(t),this}},{key:"takeCards",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[],a=!t||t>this.hand.getCards().length?this.hand.getCards().length:t,n=0;n<a;n+=1){var r=this.getHand().popCard();r&&e.push(r)}return e}},{key:"getName",value:function(){return this.name}},{key:"getHand",value:function(){return this.hand}}]),t}()),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["player-hand",{"player-hand--vertical":t.vertical,"player-hand--stacked":t.stackedHand}]},[a("div",{staticClass:"player-hand__header"},[a("h2",{staticClass:"player-hand__name"},[t._v(" "+t._s(t.player.getName())+" ")]),a("span",{staticClass:"player-hand__score"},[t._v(" "+t._s(t.score)+" ")])]),a("div",{staticClass:"player-hand__cards"},t._l(t.cards,(function(e){return a("playing-card",{key:""+e,staticClass:"player-hand__card",attrs:{card:e,stacked:t.stackedHand}})})),1)])},K=[],Q=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(h["a"])(a,[{key:"cards",get:function(){return this.player.getHand().getSortedCards()}},{key:"score",get:function(){return this.player.getHand().getPointValue()}}]),a}(l["c"]);Object(o["a"])([Object(l["b"])({required:!0})],Q.prototype,"player",void 0),Object(o["a"])([Object(l["b"])({default:!1})],Q.prototype,"stackedHand",void 0),Object(o["a"])([Object(l["b"])({default:!1})],Q.prototype,"vertical",void 0),Q=Object(o["a"])([Object(l["a"])({name:"PlayerHand",components:{PlayingCard:A}})],Q);var W=Q,I=W,L=(a("50f5"),Object(q["a"])(I,V,K,!1,null,"6ae2ec70",null)),U=L.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"app-button",on:{click:function(e){return t.$emit("click",e)}}},[a("div",{staticClass:"app-button__content"},[t._t("default")],2)])},Y=[],Z=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);Z=Object(o["a"])([Object(l["a"])({name:"AppButton"})],Z);var tt=Z,et=tt,at=(a("6ace"),Object(q["a"])(et,X,Y,!1,null,"7e49010a",null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[a("div",{staticClass:"board__control"},[a("div",{staticClass:"board__deck"},[t._t("deck")],2),a("div",{staticClass:"board__actions"},[t._t("actions")],2)]),a("div",{staticClass:"player player--1"},[t._t("player-1")],2),a("div",{staticClass:"player player--2"},[t._t("player-2")],2),a("div",{staticClass:"player player--3"},[t._t("player-3")],2),a("div",{staticClass:"player player--4"},[t._t("player-4")],2)])},ct=[],it=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);it=Object(o["a"])([Object(l["a"])({name:"Board"})],it);var st=it,ut=st,ot=(a("9cc9"),Object(q["a"])(ut,rt,ct,!1,null,"91c1f34a",null)),lt=ot.exports,dt=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.deck=new w,t.players=[],t.hasDealt=!1,t.dealDelay=50,t}return Object(h["a"])(a,[{key:"beforeMount",value:function(){this.createDeck(),this.createPlayers()}},{key:"createDeck",value:function(){var t=new w;x.forEach((function(e){var a=e;_.forEach((function(e){var n=e;t.addCard(new S(n,a))}))})),this.deck=t}},{key:"createPlayers",value:function(){this.players=["North","East","South","West"].map((function(t){return new J(t)}))}},{key:"resetGame",value:function(){var t=this;this.players.forEach((function(e){t.deck.addCards(e.takeCards())})),this.hasDealt=!1}},{key:"shuffleDeck",value:function(){for(var t=Object(b["a"])(this.deck.getCards()),e=0;e<t.length-1;e+=1){var a=e+Math.floor(Math.random()*(t.length-e)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}this.deck.setCards(t)}},{key:"deal",value:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.shuffleDeck(),e=0;case 2:if(!(this.deck.getSize()>0)){t.next=12;break}if(a=this.players[e%this.players.length],n=this.deck.popCard(),n&&a.giveCard(n),e+=1,!this.dealDelay){t.next=10;break}return t.next=10,v(this.dealDelay);case 10:t.next=2;break;case 12:this.hasDealt=!0;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),a}(l["c"]);dt=Object(o["a"])([Object(l["a"])({name:"Game",components:{Board:lt,AppButton:nt,PlayingCard:A,PlayerHand:U}})],dt);var ft=dt,pt=ft,bt=Object(q["a"])(pt,d,f,!1,null,null,null),ht=bt.exports,vt=function(t){Object(s["a"])(a,t);var e=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(l["c"]);vt=Object(o["a"])([Object(l["a"])({components:{Game:ht}})],vt);var yt=vt,Ot=yt,jt=(a("5c0b"),Object(q["a"])(Ot,r,c,!1,null,null,null)),kt=jt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(kt)}}).$mount("#app")},d192:function(t,e,a){},e6bc:function(t,e,a){"use strict";a("2879")}});
//# sourceMappingURL=index.be115286.js.map