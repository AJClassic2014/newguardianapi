(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},111:function(e,t,n){e.exports=n(281)},116:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),l=n.n(i),s=(n(116),n(30)),c=n(19),o=n(20),d=n(22),u=n(21),m=n(23),h=n(9),g=n(24),p=n.n(g),f=(n(69),n(12)),b=n(66),y=function(e){var t=[],n={};return e.map(function(e){if(n[e.sectionId]){for(var a=0;a<t.length;a++)if(t[a].section===e.sectionId){t.splice(a+1,0,{id:e.id,title:e.webTitle,link:e.webUrl,date:b(e.webPublicationDate).format("DD/MM/YYYY"),section:e.sectionId});break}}else n[e.sectionId]=e.sectionId,t.push({id:e.id,title:e.webTitle,link:e.webUrl,date:b(e.webPublicationDate).format("DD/MM/YYYY"),section:e.sectionId})}),t},v=n(67),O=n.n(v),j=function(e,t){if(0===e.length&&0===t)return O.a.get("https://content.guardianapis.com/search?api-key=cc56c111-e5a6-4922-92b8-181826199202&format=json&show-fields=starRating,headline,thumbnail,short-url,body&order-by=newest&show-elements=all&page-size=15");var n=function(e){var t=e;return t=(t=(t=t.replace(/[&/\\#,+()$~%.:*?<>{}]/g,"%20")).replace(/["]/g,"%22")).replace(/[ ]/g,"%20")}(e);return O.a.get("https://content.guardianapis.com/search?page=".concat(t,"&q=").concat(n,"&api-key=cc56c111-e5a6-4922-92b8-181826199202&format=json&show-fields=starRating,headline,thumbnail,short-url,body&show-elements=all&order-by=newest&page-size=15"))},E=n(31),w=n.n(E),k=n(107),P=n.n(k),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleUserTypes=function(e){n.props.handleUserTypes(e.target.value)},n.handleSearch=function(){n.props.handleSearch()},n.handleUserTypes=n.handleUserTypes.bind(Object(h.a)(Object(h.a)(n))),n.handleSearch=n.handleSearch.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userTypes,n=e.classes;return r.a.createElement("div",{className:n.searchField},r.a.createElement(P.a,{id:"outlined-name",className:n.textField,margin:"normal",value:t,onChange:this.handleUserTypes,variant:"outlined",InputProps:{classes:{input:this.props.classes.inputHeight}}}),r.a.createElement(w.a,{variant:"contained",color:"primary",className:n.button,onClick:this.handleSearch},"Search"))}}]),t}(r.a.Component),S=Object(f.withStyles)(function(e){return{textField:{backgroundColor:"#ffffff",marginLeft:e.spacing.unit,marginRight:e.spacing.unit,marginBottom:10,width:500},button:{margin:e.spacing.unit,marginTop:"13px",width:110,backgroundColor:"#404040"},inputHeight:{height:4,fontSize:"1em"},searchField:{marginTop:"10px",display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"center"}}})(N),L=Object(f.withStyles)(function(){return{root:{color:"#ea4335",textAlign:"center"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},"No results by your search,",r.a.createElement("br",null),"please try other key words")}),T=n(29),x=n.n(T),C=n(36),z=n.n(C),W=n(46),D=n.n(W),F=n(37),U=n.n(F),R=n(47),I=n.n(R),B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(e){return function(){var t=n.props,a=t.pinnedList,r=t.handlePinnedList,i=a.indexOf(e),l=Object(s.a)(a);-1===i?l.push(e):l.splice(i,1),r(l),n.setState({checked:l}),console.log(l)}},n.state={checked:[1]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.results;t.pinnedList;return r.a.createElement(x.a,{dense:!0,className:n.root},a.map(function(t){return r.a.createElement(z.a,{key:t.id},r.a.createElement(U.a,{primary:r.a.createElement(p.a,{className:n.title,color:"textPrimary"},r.a.createElement("a",{href:t.link,className:n.link},t.title)),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{component:"span",color:"textPrimary"},"Published: ",t.date,"  \xa0\xa0   ",r.a.createElement("span",{className:n.section},"Section:")," ",t.section),r.a.createElement("a",{href:t.link},t.link))}),r.a.createElement(D.a,null,r.a.createElement(I.a,{onChange:e.handleToggle(t),checked:-1!==e.state.checked.indexOf(t)})))}))}}]),t}(r.a.Component),Y=Object(f.withStyles)(function(e){return{root:{width:800,backgroundColor:e.palette.background.paper},inline:{display:"inline"},title:{fontSize:"1rem",fontWeight:550},section:{color:"#ff6600"},pinned:{backgroundColor:"#70c5ca85"},pinnedBar:{fontSize:"1rem",fontWeight:550,backgroundColor:"#ed8836a3"},pinnedTitle:{fontSize:"1rem",fontWeight:550,color:"white"},link:{color:"#000000",textDecoration:"none"}}})(B),A=n(109),M=n.n(A),H=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).setPage=function(e){n.props.handlePage(e)},n.setPage=n.setPage.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.total,a=t.classes,i=t.currentPage,l=t.allPages;return l>1&&r.a.createElement(M.a,{className:a.root},r.a.createElement("div",{className:a.menuLeft},"".concat(15*(i-1)+1,"-").concat(15*i>n?n:15*i," of ").concat(n)),r.a.createElement("div",{className:a.menuRight},r.a.createElement(w.a,{size:"small",variant:"contained",className:a.margin,onClick:function(){return e.setPage(1)},disabled:1===i},"First"),r.a.createElement(w.a,{size:"small",variant:"contained",className:a.margin,onClick:function(){return e.setPage(i-1)},disabled:i<=1},"Prev"),"Current Page\uff1a".concat(i),r.a.createElement(w.a,{size:"small",variant:"contained",className:a.margin,onClick:function(){return e.setPage(i+1)},disabled:i===l},"Next"),r.a.createElement(w.a,{size:"small",variant:"contained",className:a.margin,onClick:function(){return e.setPage(l)},disabled:i===l},"Last")))}}]),t}(r.a.Component),_=Object(f.withStyles)(function(e){return{root:{width:"100%"},margin:{margin:e.spacing.unit},grow:{flexGrow:1},menuLeft:{color:"#000000",fontSize:"1rem",fontWeight:550},menuRight:{marginLeft:"4%",color:"#000000",fontSize:"1rem",fontWeight:550}}})(H),J=Object(f.withStyles)(function(){return{root:{marginTop:"10px"}}})(function(e){var t=e.classes,n=e.results,a=e.pinnedList,i=e.handlePinnedList,l=e.currentPage,s=e.allPages,c=e.total,o=e.handlePage;return r.a.createElement("div",{className:t.root},r.a.createElement(Y,{results:n,pinnedList:a,handlePinnedList:i}),r.a.createElement(_,{currentPage:l,allPages:s,total:c,handlePage:o}))}),G=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(e){return function(){var t=n.props,a=t.pinnedList,r=t.handlePinnedList,i=a.indexOf(e),l=Object(s.a)(a);-1===i?l.push(e):l.splice(i,1),r(l),n.setState({checked:l}),console.log(l)}},n.state={checked:[1]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.pinnedList;return r.a.createElement(x.a,{dense:!0,className:n.root},r.a.createElement("div",{className:n.pinnedBar},r.a.createElement("span",{className:n.pinnedTitle},"Pinned Items")),a.map(function(t){return r.a.createElement(z.a,{className:n.pinned,key:t.id},r.a.createElement(U.a,{primary:r.a.createElement(p.a,{className:n.title,color:"textPrimary"},t.title)}),r.a.createElement(D.a,null,r.a.createElement(I.a,{onChange:e.handleToggle(t),checked:-1!==e.state.checked.indexOf(t)})))}))}}]),t}(r.a.Component),X=Object(f.withStyles)(function(e){return{root:{width:400,marginTop:40,backgroundColor:e.palette.background.paper},inline:{display:"inline"},title:{fontSize:"1rem",fontWeight:550},section:{color:"#ff6600"},pinned:{backgroundColor:"#f2f2f2"},pinnedBar:{display:"flex",alignContent:"center",minHeight:"3rem",fontSize:"1rem",fontWeight:550,backgroundColor:"#feb301"},pinnedTitle:{margin:"auto",fontSize:"1rem",fontWeight:550,color:"white"},link:{textDecoration:"none"}}})(G),$=function(e){function t(e){return Object(c.a)(this,t),Object(d.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.latestNews;return r.a.createElement(x.a,{dense:!0,className:t.root},r.a.createElement("div",{className:t.newsBar},r.a.createElement("div",{className:t.newsTitle},"Latest News")),n.map(function(e){return r.a.createElement(z.a,{key:e.id},r.a.createElement(U.a,{primary:r.a.createElement(p.a,{className:t.title,color:"#000000"},r.a.createElement("a",{href:e.link,className:t.link},e.title))}))}))}}]),t}(r.a.Component),q=Object(f.withStyles)(function(e){return{root:{width:400,marginTop:40,backgroundColor:e.palette.background.paper},inline:{display:"inline"},title:{fontSize:14,fontWeight:550},section:{color:"#ff6600"},pinned:{backgroundColor:"#70c5ca85"},newsBar:{display:"flex",alignContent:"center",minHeight:"3rem",fontSize:"1rem",fontWeight:550,backgroundColor:"#ee0017"},newsTitle:{margin:"auto",fontSize:"1rem",fontWeight:550,color:"white"},link:{color:"#000000",textDecoration:"none"}}})($),K=n(110),Q=n.n(K),V=Object(f.withStyles)(function(){return{root:{color:"#000000",textAlign:"center"},loading:{color:"#ea4335",margin:"auto"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("img",{src:Q.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:t.loading},"Loading..."))}),Z=Object(f.withStyles)(function(){return{root:{color:"#000000",textAlign:"center"},message:{color:"#ea4335"}}})(function(e){var t=e.classes,n=e.error;return r.a.createElement("div",{className:t.root},r.a.createElement("div",null,"X_X"),r.a.createElement("div",{className:t.message},n),"System goes wrong, please try again later")}),ee=Object(f.withStyles)(function(){return{root:{marginTop:"20px",marginBottom:"5px",textAlign:"center",color:"#666",fontSize:"16px"},link:{color:"#ca0c16"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},"Developed by\xa0",r.a.createElement("a",{className:t.link,href:"https://yinfei-profile.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer"},"Yinfei"),"\xa0\xa0 Learn Source code\xa0",r.a.createElement("a",{className:t.link,href:"https://github.com/AJClassic2014/guardian_api/tree/deployment/v3",target:"_blank",rel:"noopener noreferrer"},"here"))}),te=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleUserTypes=function(e){n.setState({userTypes:e})},n.handlePinnedList=function(e){n.setState({pinnedList:e})},n.getLatestNews=function(){n.setState(function(){j("",0).then(function(e){var t=e.data.response,a=y(t.results).slice(0,5);n.setState({latestNews:Object(s.a)(a),error:""})}).catch(function(e){console.log(e),n.setState({error:e.message})})})},n.getResultList=function(e,t){n.setState({loading:!0},function(){j(e,t).then(function(e){var t=e.data.response,a=y(t.results);n.setState({results:Object(s.a)(a),currentPage:t.currentPage,allPages:t.pages,total:t.total,loading:!1,error:""})}).catch(function(e){console.log(e),n.setState({error:e.message})})})},n.handlePage=function(e){e>=1&&n.getResultList(n.state.userTypes,e)},n.handleSearch=function(){n.getResultList(n.state.userTypes,1)},n.componentDidMount=function(){n.getResultList(n.state.userTypes,n.state.currentPage),n.getLatestNews()},n.state={loading:!0,error:"",userTypes:"",results:[],latestNews:[],pinnedList:[],currentPage:0,allPages:0,total:0},n.componentDidMount=n.componentDidMount.bind(Object(h.a)(Object(h.a)(n))),n.handleSearch=n.handleSearch.bind(Object(h.a)(Object(h.a)(n))),n.handleUserTypes=n.handleUserTypes.bind(Object(h.a)(Object(h.a)(n))),n.handlePage=n.handlePage.bind(Object(h.a)(Object(h.a)(n))),n.handlePinnedList=n.handlePinnedList.bind(Object(h.a)(Object(h.a)(n))),n.getResultList=n.getResultList.bind(Object(h.a)(Object(h.a)(n))),n.getLatestNews=n.getLatestNews.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.userTypes,a=t.results,i=t.latestNews,l=t.currentPage,s=t.allPages,c=t.total,o=t.pinnedList,d=t.loading,u=t.error;console.log(a);var m=null,h=null;return d&&0===u.length?m=r.a.createElement(V,null):0!==u.length?m=r.a.createElement(Z,{error:u}):0===a.length?m=r.a.createElement(L,null):(m=r.a.createElement(J,{results:a,pinnedList:o,currentPage:l,allPages:s,total:c,handlePage:this.handlePage,handlePinnedList:this.handlePinnedList}),h=r.a.createElement(q,{latestNews:i})),r.a.createElement("div",null,r.a.createElement("div",{className:"Header"},r.a.createElement(p.a,{className:e.title},"Gnews"),r.a.createElement(S,{userTypes:n,handleSearch:this.handleSearch,handleUserTypes:this.handleUserTypes})),r.a.createElement("div",{className:"App"},r.a.createElement("div",null),r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Total"},"About ",c," results "),m,r.a.createElement(ee,null)),r.a.createElement("div",null,h,r.a.createElement(X,{results:a,pinnedList:o,handlePinnedList:this.handlePinnedList}))))}}]),t}(a.Component),ne=Object(f.withStyles)(function(){return{title:{padding:"15px 0 0 85px",fontSize:"2rem",fontWeight:700,width:"100px",color:"#FFFFFF",backgroundColor:"#0f1010"}}})(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.cbce8e95.chunk.js.map