(this.webpackJsonpwebchat=this.webpackJsonpwebchat||[]).push([[0],{1006:function(e,t){},1009:function(e,t){},1014:function(e,t){},1016:function(e,t){},1640:function(e,t){},1641:function(e,t){},1642:function(e,t){},1775:function(e,t){},1785:function(e,t){},1786:function(e,t){},1787:function(e,t){},1802:function(e,t){},1805:function(e,t,a){},1806:function(e,t,a){},1807:function(e,t,a){},1808:function(e,t,a){},1809:function(e,t,a){},1811:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(176),r=a.n(i),s=(a(742),a(1816)),l=a(33),o=a.n(l),u=a(77),m=a(57),p=a(12),d=a.n(p),v=a(178),b=a.n(v),f=a(1815),h=a(67),E=a.n(h),y=a(0),k=a(68),g=(a(1805),function(e){var t=e.className,a=e.onFetchToken,i=e.store,r=e.token,s=e.styleOptions,l=e.activityMiddleware,o=e.activityStatusMiddleware,u=Object(n.useMemo)((function(){return Object(v.createDirectLine)({token:r})}),[r]);return Object(n.useEffect)((function(){a()}),[a]),r?c.a.createElement(b.a,{className:"".concat(t||""," web-chat"),directLine:u,store:i,styleOptions:s,activityMiddleware:l,activityStatusMiddleware:o,locale:"en-US"}):c.a.createElement("div",{className:"".concat(t||""," connect-spinner")},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"icon"},c.a.createElement(k.f,null)),c.a.createElement("p",null,"Please wait while we are connecting.")))}),N=a(2),O=a(3),j=a(66),C=a(4),S=a(5),w=(a(1806),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).submitDataPrivacy=n.submitDataPrivacy.bind(Object(j.a)(n)),n}return Object(O.a)(a,[{key:"submitDataPrivacy",value:function(){var e=null;E.a.getJSON("http://gd.geobytes.com/GetCityDetails?callback=?",(function(t){e=t.geobytesipaddress})),this.props.onChange(!0,e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"data_privacy"},c.a.createElement("div",{className:"data_privacy_header"},"Declaration of Consent"),c.a.createElement("div",{className:"data_privacy_text"},"I have read the ",c.a.createElement("a",{href:"https://issd.iism.kit.edu/1527.php",target:"_blank",rel:"noopener noreferrer"},"privacy policy")," and hereby agree that the content of my messages to the chatbot is sent to Microsoft servers for language processing purposes. I further agree that my anonymized data can be used for scientific purposes. I am aware that I can revoke my consent at any time."),c.a.createElement("button",{className:"accept",type:"button",onClick:this.submitDataPrivacy},"Accept"))}}]),a}(c.a.Component)),_=(a(1807),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var n;Object(N.a)(this,a),n=t.call(this,e);var c=e.cookies;return n.state={botName:c.get("botName")||"ISSDBot",gender:c.get("gender")||"female",avatar:c.get("avatar")||"true",typing:c.get("typing")||"true",responseTime:c.get("responseTime")||"medium"},n.applyChanges=n.applyChanges.bind(Object(j.a)(n)),n.handleInput=n.handleInput.bind(Object(j.a)(n)),n}return Object(O.a)(a,[{key:"applyChanges",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,c,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.cookies,a=E()("#bot-name")[0].value,n=E()("#gender")[0].value,c=E()("#avatar")[0].value,i=E()("#typing")[0].value,r=E()("#response-time")[0].value,t.set("botName",a,{path:"/"}),t.set("gender",n,{path:"/"}),t.set("avatar",c,{path:"/"}),t.set("typing",i,{path:"/"}),t.set("responseTime",r,{path:"/"}),e.next=13,this.setState({botName:a,gender:n,avatar:c,typing:i,responseTime:r});case 13:this.props.onChange(this.state,!0);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderGenderSelect",value:function(){switch(this.state.gender){case"female":return c.a.createElement("select",{id:"gender"},c.a.createElement("option",{value:"none"},"None"),c.a.createElement("option",{value:"male"},"Male"),c.a.createElement("option",{selected:"selected",value:"female"},"Female"));case"male":return c.a.createElement("select",{id:"gender"},c.a.createElement("option",{value:"none"},"None"),c.a.createElement("option",{selected:"selected",value:"male"},"Male"),c.a.createElement("option",{value:"female"},"Female"));default:return c.a.createElement("select",{id:"gender"},c.a.createElement("option",{selected:"selected",value:"none"},"None"),c.a.createElement("option",{value:"male"},"Male"),c.a.createElement("option",{value:"female"},"Female"))}}},{key:"renderAvatarSelect",value:function(){return"true"===this.state.avatar?c.a.createElement("select",{id:"avatar"},c.a.createElement("option",{selected:"selected",value:"true"},"Yes"),c.a.createElement("option",{value:"false"},"No")):c.a.createElement("select",{id:"avatar"},c.a.createElement("option",{value:"true"},"Yes"),c.a.createElement("option",{selected:"selected",value:"false"},"No"))}},{key:"renderTypingSelect",value:function(){return"true"===this.state.typing?c.a.createElement("select",{id:"typing"},c.a.createElement("option",{selected:"selected",value:"true"},"Yes"),c.a.createElement("option",{value:"false"},"No")):c.a.createElement("select",{id:"typing"},c.a.createElement("option",{value:"true"},"Yes"),c.a.createElement("option",{selected:"selected",value:"false"},"No"))}},{key:"renderResponseSelect",value:function(){switch(this.state.responseTime){case"fast":return c.a.createElement("select",{id:"response-time"},c.a.createElement("option",{selected:"selected",value:"fast"},"Fast"),c.a.createElement("option",{value:"medium"},"Medium"),c.a.createElement("option",{value:"slow"},"Slow"));case"medium":return c.a.createElement("select",{id:"response-time"},c.a.createElement("option",{value:"fast"},"Fast"),c.a.createElement("option",{selected:"selected",value:"medium"},"Medium"),c.a.createElement("option",{value:"slow"},"Slow"));default:return c.a.createElement("select",{id:"response-time"},c.a.createElement("option",{value:"fast"},"Fast"),c.a.createElement("option",{value:"medium"},"Medium"),c.a.createElement("option",{selected:"selected",value:"slow"},"Slow"))}}},{key:"handleInput",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.cookies,a=E()("#bot-name")[0],t.set("botName",a.value,{path:"/"}),e.next=5,this.setState({botName:a.value});case 5:this.props.onChange(this.state,!1);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",{className:"edit"},c.a.createElement("label",{for:"bot-name"},"Bot Name:"),c.a.createElement("input",{type:"text",id:"bot-name",name:"bot-name",onChange:this.handleInput,defaultValue:this.state.botName}),c.a.createElement("br",null),c.a.createElement("label",{for:"gender"},"Gender: "),this.renderGenderSelect(),c.a.createElement("br",null),c.a.createElement("label",{for:"avatar"},"Avatar: "),this.renderAvatarSelect(),c.a.createElement("br",null),c.a.createElement("label",{for:"typing"},"Typing Indicator: "),this.renderTypingSelect(),c.a.createElement("br",null),c.a.createElement("label",{for:"response-time"},"Response Time: "),this.renderResponseSelect(),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{class:"center"},c.a.createElement("button",{className:"apply",onClick:this.applyChanges},"Apply")))}}]),a}(c.a.Component)),T=Object(f.a)(_),x=(a(1808),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={likeCliked:!1,dislikeClicked:!1},n.clickLike=n.clickLike.bind(Object(j.a)(n)),n.clickDislike=n.clickDislike.bind(Object(j.a)(n)),n.saveFeedback=n.saveFeedback.bind(Object(j.a)(n)),n}return Object(O.a)(a,[{key:"saveFeedback",value:function(e){this.props.store.dispatch({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/saveFeedback",value:e}})}},{key:"clickLike",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.likeClicked||this.state.dislikeClicked){e.next=6;break}return t=this.props.activity.text?this.props.activity.text:JSON.stringify(this.props.activity.attachments),a={conversationID:this.props.activity.conversation.id,message:t,feedback:"Like",timestamp:this.props.activity.timestamp},e.next=5,this.setState({likeClicked:!0});case 5:this.saveFeedback(a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clickDislike",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.likeClicked||this.state.dislikeClicked){e.next=6;break}return t=this.props.activity.text?this.props.activity.text:JSON.stringify(this.props.activity.attachments),a={conversationID:this.props.activity.conversation.id,message:t,feedback:"Dislike",timestamp:this.props.activity.timestamp},e.next=5,this.setState({dislikeClicked:!0});case 5:this.saveFeedback(a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.likeClicked?"feedbackButton__buttonClicked":"feedbackButton__button",t=this.state.dislikeClicked?"feedbackButton__buttonClicked":"feedbackButton__button";return c.a.createElement("div",{className:"feedbackButton"},c.a.createElement("div",{className:"feedbackButton__content"},this.props.children),c.a.createElement("div",{className:"feedbackButton__bar"},c.a.createElement("button",{id:"like",className:e,onClick:this.clickLike},c.a.createElement(k.h,null)),c.a.createElement("button",{id:"dislike",className:t,onClick:this.clickDislike},c.a.createElement(k.g,null))))}}]),a}(c.a.Component)),F=(a(1809),Object(f.a)((function(e){var t=e.cookies,a=Object(n.useState)(t.get("botName")||"ISSDBot"),i=Object(m.a)(a,2),r=i[0],s=i[1],l=!1,p=Object(n.useMemo)((function(){return Object(v.createStore)({},(function(e){var t=e.dispatch;e.getState;return function(e){return function(a){return"DIRECT_LINE/CONNECT_FULFILLED"===a.type?t({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/join",value:{language:window.navigator.language}}}):"DIRECT_LINE/INCOMING_ACTIVITY"===a.type&&"bot"===a.payload.activity.from.role&&E.a.getJSON("http://gd.geobytes.com/GetCityDetails?callback=?",(function(e){l||(p.dispatch({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/saveConsent",value:{ip:e.geobytesipaddress}}}),l=!0)})),e(a)}}}))}),[l]),b=Object(n.useState)(!1),f=Object(m.a)(b,2),h=f[0],N=f[1],O=Object(n.useState)(!0),j=Object(m.a)(O,2),C=j[0],S=j[1],_=Object(n.useState)(!1),F=Object(m.a)(_,2),B=F[0],D=F[1],I=Object(n.useState)(!1),A=Object(m.a)(I,2),M=A[0],L=A[1],W=Object(n.useState)(),V=Object(m.a)(W,2),z=V[0],P=V[1],U=function(e){switch(e){case"female":return"https://img.icons8.com/officel/40/000000/user-female.png";case"male":return"https://img.icons8.com/officel/40/000000/user-male.png";default:return"https://img.icons8.com/ultraviolet/40/000000/bot.png"}},G=Object(n.useState)(!1),H=Object(m.a)(G,2),J=H[0],Y=H[1],R=Object(n.useState)(U(t.get("gender")||"female")),q=Object(m.a)(R,2),X=q[0],K=q[1],$=Object(n.useState)(!t.get("avatar")||"true"===t.get("avatar")),Q=Object(m.a)($,2),Z=Q[0],ee=Q[1],te=Object(n.useState)(!t.get("typing")||"true"===t.get("typing")),ae=Object(m.a)(te,2),ne=ae[0],ce=ae[1],ie=Object(n.useState)(t.get("responseTime")||"medium"),re=Object(m.a)(ie,2),se=re[0],le=re[1],oe=Z?{hideUploadButton:!0,bubbleBackground:"#F9F9F9",bubbleFromUserBackground:"#EF7B00",bubbleFromUserTextColor:"White",botAvatarImage:X,timestampFormat:"absolute",groupTimestamp:2e3}:{hideUploadButton:!0,bubbleBackground:"#F9F9F9",bubbleFromUserBackground:"#EF7B00",bubbleFromUserTextColor:"White",botAvatarInitials:r[0],timestampFormat:"absolute",groupTimestamp:2e3},ue=function(){var e=Object(u.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n="true"===t)!==ne&&(ce(n),p.dispatch({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/sendTypingIndicator",value:{typingIndicator:t}}})),n&&a!==se&&(le(a),p.dispatch({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/sendTypingSpeed",value:{speed:a}}}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),me=Object(n.useCallback)(Object(u.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=9;break}return e.next=3,fetch("https://directline.botframework.com/v3/directline/tokens/generate",{method:"POST",headers:{Authorization:"Bearer C3lV9aXOawY.W51C_66Rz6x5X6UfTywGq0LDNV81q5rk0HBrAnWK5vE"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.token,P(n);case 9:case"end":return e.stop()}}),e)}))),[P,z]),pe=Object(n.useCallback)(Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),S(!1),D(!1);case 3:case"end":return e.stop()}}),e)}))),[S,D]),de=Object(n.useCallback)((function(){S(!0),D(!1)}),[S,D]),ve=Object(n.useCallback)((function(){Y(!J),D(!1)}),[Y,J,D]);return c.a.createElement("div",{className:"main-web-chat"},C&&c.a.createElement("button",{className:"maximize",onClick:pe},c.a.createElement(k.d,null),B&&c.a.createElement(y.b.Provider,{value:{className:"blue-dot"}},c.a.createElement(k.c,null))),h&&c.a.createElement("div",{className:d()("chat-box",C?"hide":"")},c.a.createElement("header",null,c.a.createElement("div",{className:"filler"}),c.a.createElement(y.b.Provider,{value:{size:"1.5em"}},c.a.createElement("button",{className:"minimize",onClick:de},c.a.createElement(k.a,null," Customize ")),M?[c.a.createElement("button",{className:"customize",onClick:ve},"Customize\xa0\xa0",J?c.a.createElement(k.b,null):c.a.createElement(k.e,null))]:null)),M?[c.a.createElement(g,{className:"react-web-chat",onFetchToken:me,store:p,styleOptions:oe,token:z,activityMiddleware:function(){return function(e){return function(t){if("bot"===t.activity.from.role&&(t.activity.text||t.activity.attachments)){var a=t.activity.text?t.activity.text:JSON.stringify(t.activity.attachments);return p.dispatch({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/saveMessage",value:{sender:t.activity.from.id,conversationID:t.activity.conversation.id,message:a,timestamp:t.activity.timestamp}}}),function(a){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{store:p,activity:t.activity},e(t)(a)))}}return function(a){return c.a.createElement(c.a.Fragment,null,e(t)(a))}}}},activityStatusMiddleware:function(){return function(e){return function(t){var a=t.activity.from.role,n=t.sendState,i=t.sameTimestampGroup;return"sending"===n?c.a.createElement("span",{className:"activityStatus activityStatus__sendStatus"},"Sending\u2026"):"send failed"===n?c.a.createElement("span",{className:"activityStatus"},"Send failed."):i?e(t):c.a.createElement("span",{className:"activityStatus activityStatus__timestamp"},c.a.createElement("span",{className:"activityStatus__timestampPretext"},"user"===a?"You on ":r+" on "),c.a.createElement("span",null,e(t)))}}}}),J?c.a.createElement(T,{onChange:function(e,t){var a,n,c,i;t&&(c=e,p.dispatch({type:"WEB_CHAT/SEND_EVENT",payload:{name:"webchat/saveConfig",value:c}}),Y(!1),a=e.avatar,n=e.gender,"true"===a?(K(U(n)),ee(!0)):ee(!1),ue(e.typing,e.responseTime)),""!==(i=e.botName)&&s(i)}}):null]:c.a.createElement(w,{onChange:function(e,t){L(e)}})))}))),B=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},371:function(e,t){},372:function(e,t){},733:function(e,t){},737:function(e,t,a){e.exports=a(1811)},742:function(e,t,a){},904:function(e,t){},906:function(e,t){},928:function(e,t){},930:function(e,t){},958:function(e,t){},960:function(e,t){},961:function(e,t){},967:function(e,t){},969:function(e,t){},987:function(e,t){},990:function(e,t){}},[[737,1,2]]]);
//# sourceMappingURL=main.49da021c.chunk.js.map