(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(294)},131:function(e,t,a){},133:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),c=(a(131),a(24)),s=a(25),l=a(27),m=a(26),u=a(28),d=(a(133),a(21)),p=a(51),h=a(52);d.a.init({fallbackLng:"en",debug:!0,resources:{en:{translation:p},ja:{translation:h}}});var v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"intro-wrapper"},r.a.createElement("h2",{className:"section_header"},d.a.t("summary.title")),r.a.createElement("p",null,d.a.t("summary.texts.0")),r.a.createElement("p",null,d.a.t("summary.texts.1")),r.a.createElement("p",null,d.a.t("summary.texts.2")))}}]),t}(n.Component),f=a(112),g=a(122),b=a(47),E=a.n(b);function w(){var e=Object(f.a)(['\n    {\n      repositoryOwner(login: "ken840619") {\n        ... on User {\n          pinnedRepositories(first: 10) {\n            edges {\n              node {\n                name,\n                url,\n                description,\n              }\n            }\n          }\n        }\n      }\n    }']);return w=function(){return e},e}var y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={edges:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new g.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat("36bdc75ae7526cc735c89e66dd9520bdd5811d75")}})}}),a=E()(w());t.query({query:a}).then(function(t){return e.setState({edges:t.data.repositoryOwner.pinnedRepositories.edges})}),console.log(this.state.edges)}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",{className:"section_header"},"My Works"),r.a.createElement("div",{className:"work_wrapper"},this.state.edges.map(function(e,t){return r.a.createElement("div",{className:"work_item",key:t},r.a.createElement("div",{className:"work_item__title"},e.node.name),r.a.createElement("div",{className:"work_item__desc"},e.node.description),r.a.createElement("div",{className:"work_item__link"},r.a.createElement("a",{href:e.node.url},"Check It !")))})))}}]),t}(n.Component),k=a(123),j=a(118),_=a.n(j).a.initializeApp({apiKey:"AIzaSyDYcOaCWEtceAaUD5p05P_PM7D6nWVJ1Bo",authDomain:"my-portfolio-4b370.firebaseapp.com",databaseURL:"https://my-portfolio-4b370.firebaseio.com",projectId:"my-portfolio-4b370",storageBucket:"my-portfolio-4b370.appspot.com",messagingSenderId:"623276247858"}),O=a(41),N=a(119),C=a.n(N),x=Object(O.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"},cssRoot:{color:"#4ea9da",backgroundColor:"#fff","&:hover":{backgroundColor:"#daedf7"}}}})(function(e){var t=e.classes,a=e.children;return r.a.createElement(C.a,{variant:"contained",className:t.cssRoot,size:"medium",onClick:e.click},a)}),S=a(120),I=a.n(S),R=Object(O.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:300}}})(function(e){var t=e.classes,a=e.label;return r.a.createElement(I.a,{id:"standard-name",type:"text",name:"text",value:e.value,label:a,onChange:e.change,className:t.textField,margin:"normal",variant:"outlined"})}),W=_.database().ref("data"),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).commentSubmitHandler=function(e){e.preventDefault(),console.log("the button has been pressed with new comment:".concat(a.state.newComment));var t=[].concat(Object(k.a)(a.state.comments),[a.state.newComment]);W.child("comments").update(t),a.setState({comments:t,newComment:""})},a.handleTextFieldChange=function(e){a.setState({newComment:e.target.value})},a.state={comments:[],newComment:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.commentsRef&&this.commentsRef.off()}},{key:"componentDidMount",value:function(){var e=this;W.on("value",function(t){var a=[];t.val()&&(a=t.val().comments),e.setState({comments:a})}).bind(this)}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h2",{className:"section_header"},"Comments from everyone !"),r.a.createElement("div",{className:"comment_wrapper"},this.state.comments.map(function(e,t){return r.a.createElement("div",{className:"comment_item",key:t},r.a.createElement("div",null,e))})),r.a.createElement("div",{className:"comment_ui_wrapper"},r.a.createElement(R,{id:"standard-name",label:"Leave Your Comment Here...",value:this.state.newComment,margin:"normal",change:this.handleTextFieldChange}),r.a.createElement(x,{click:this.commentSubmitHandler},"Comment")))}}]),t}(n.Component),A=a(300),H=a(297),L=a(299);d.a.init({fallbackLng:"en",debug:!0,resources:{en:{translation:p},ja:{translation:h}}});var F=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(A.a,null,r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__item"},r.a.createElement(H.a,{to:"/about"},"About")),r.a.createElement("div",{className:"nav__item"},r.a.createElement(H.a,{to:"/work"},"Work")),r.a.createElement("div",{className:"nav__item"},r.a.createElement(H.a,{to:"/comment"},"Comment"))),r.a.createElement("div",{className:"intro-wrapper"},r.a.createElement("h2",{className:"intro-name"},d.a.t("greeting")),r.a.createElement("p",{className:"intro-tagline"},r.a.createElement("span",{className:"highlight"},d.a.t("job_title")))),r.a.createElement(L.a,{path:"/about",component:v}),r.a.createElement(L.a,{path:"/work",component:y}),r.a.createElement(L.a,{path:"/comment",component:D})))),r.a.createElement("footer",{className:"footer"},"2019 Kenichi Ukai"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(298);i.a.render(r.a.createElement(B.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e){e.exports={greeting:"Hello, I'm Kenichi",job_title:"Walking on the path of Full Stack Dev",summary:{title:"Little about me",texts:["Has 6+ years experience in proposing, designing and developing many systems for IT fields.","Has also worked as a web designer, planner and IoT developer for enhancing the capability of deliveries.","Am familiar with cutting-edge IT technologies through participating six months intensive program. "]}}},52:function(e){e.exports={greeting:"Hello, I'm Kenichi",job_title:"\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u30a8\u30f3\u30b8\u30cb\u30a2\uff08\u3092\u76ee\u6307\u3057\u3066\u3044\u308b\uff09| \u5143\u30b7\u30b9\u30c6\u30e0\u30a8\u30f3\u30b8\u30cb\u30a2 ",summary:{title:"\u4e3b\u306a\u7d4c\u6b74",texts:["\u5916\u8cc7\u7cfb\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\u4f1a\u793e\u3067\u3001\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8/SE/\u30d7\u30ed\u30b0\u30e9\u30de\u30fc\u3068\u3057\u3066\u52e4\u52d9\uff08Java\u3001MySQL\u4e2d\u5fc3\uff09","\u30c7\u30b6\u30a4\u30f3\u4f1a\u793e\u3067\u306e\u63d0\u6848\u3001\u30c7\u30b6\u30a4\u30f3\u696d\u52d9\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u958b\u767a\u7b49\u3092\u5b9f\u65bd","\u76f4\u8fd1\u306f\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b9\u30af\u30fc\u30eb\u3067\u672c\u683c\u7684\u306bWeb\u7cfb\u3092\u52c9\u5f37\u3057\u3001\u4e0a\u8a18\u306b\u52a0\u3048\u3066Javascript(React.js/Next.js/Vue.js/Nuxt.js)\u306e\u7d4c\u9a13\u3092\u7a4d\u3093\u3067\u3044\u307e\u3059\u3002"]}}}},[[126,2,1]]]);
//# sourceMappingURL=main.7677e42f.chunk.js.map