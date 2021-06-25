(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{37:function(t,e,a){},38:function(t,e,a){},67:function(t,e,a){},68:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(30),s=a.n(r),i=(a(37),a(38),a(9)),o=a(2),h=a(7),l=a.n(h),j=a(10),u=a(11),p=a(12),d=a(15),b=a(14),v=a(13),m=a.n(v),f=a(0),O=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={moviesPopular:[]},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t.next=3,m.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("0823a515d685f87a50f7a5f1575b73b6"));case 3:e=t.sent,this.setState({moviesPopular:e.data.results});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:this.state.moviesPopular.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(t.props.match.url,"movies/").concat(e.id),children:e.title})},e.id)}))})})}}]),a}(n.Component),x=function(){return Object(f.jsx)("h1",{children:"MoviesPage"})},g=a(32),y=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={cast:[]},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",e=this.props.match.params.movieId,t.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"));case 4:a=t.sent,console.log(a.data.cast),this.setState({cast:a.data.cast});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.cast;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:t.map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w400"+t.profile_path,alt:t.name}),Object(f.jsx)("h2",{children:t.name}),Object(f.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}}]),a}(n.Component),w=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={authors:[]},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",e=this.props.match.params.movieId,t.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US&page=1"));case 4:a=t.sent,console.log(a.data.results),this.setState({authors:a.data.results});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.authors;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:t.length?t.map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsxs)("h2",{children:["Author: ",t.author]}),Object(f.jsxs)("p",{children:["'",t.content,"'"]})]},t.id)})):Object(f.jsx)("h2",{children:"We don't any reviews for this movie"})})})}}]),a}(n.Component),k=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={genres:[],id:null,title:null,backdrop_path:null,overview:null},t}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",e=this.props.match.params.movieId,t.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"));case 4:a=t.sent,console.log(a.data),this.setState(Object(g.a)({},a.data));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.genres,a=t.id,n=t.title,c=t.backdrop_path,r=t.overview,s="https://image.tmdb.org/t/p/w400"+"".concat(c);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:n}),Object(f.jsx)("img",{src:s,alt:n}),Object(f.jsx)("h2",{children:"Overview"}),Object(f.jsx)("p",{children:r}),Object(f.jsx)("h2",{children:"Genres"}),Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)("li",{children:t.name},t.id)}))}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(this.props.match.url,"/cast"),children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(this.props.match.url,"/reviews"),children:"Reviews"})})]}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"".concat(this.props.match.path,"/cast"),component:y}),Object(f.jsx)(o.a,{exact:!0,path:"".concat(this.props.match.path,"/reviews"),component:w})]})]})]},a)})}}]),a}(n.Component),N=(a(67),function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{exact:!0,className:"NavLink",activeClassName:"NavLink-activ",to:"/",children:"Homme"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{exact:!0,className:"NavLink",activeClassName:"NavLink-activ",to:"/movies",children:"Movies"})})]}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:O}),Object(f.jsx)(o.a,{exact:!0,path:"/movies",component:x}),Object(f.jsx)(o.a,{exact:!0,path:"/movies/:movieId",component:k})]})]})});s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(N,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bf1b606e.chunk.js.map