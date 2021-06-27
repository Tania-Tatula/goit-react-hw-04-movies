(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{71:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=a(40),l=a(15),u=a(16),h=a(18),j=a(17),p=a(0),b=a(41),d=a.n(b),v=a(9),O=a(2),m=a(1),f=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={cast:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t=this.props.match.params.movieId,e.next=4,d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"));case 4:a=e.sent,this.setState({cast:a.data.cast});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cast;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:"Actor-list",children:e.map((function(e){var t=e.id,a=e.profile_path,r=e.name,n=e.character;return Object(m.jsxs)("li",{className:"Actor-item",children:[Object(m.jsx)("div",{className:"Actor-img-block",children:a?Object(m.jsx)("img",{className:"Actor-img",src:"https://image.tmdb.org/t/p/w400"+a,alt:r}):Object(m.jsx)("p",{className:"MoviePage-noimg",children:"No photo"})}),Object(m.jsx)("h2",{children:r}),Object(m.jsxs)("p",{children:["Character: ",n]})]},t)}))})})}}]),a}(p.Component),g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={authors:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t=this.props.match.params.movieId,e.next=4,d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US&page=1"));case 4:a=e.sent,console.log(a.data.results),this.setState({authors:a.data.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.authors;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{children:e.length?e.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsxs)("h2",{children:["Author: ",e.author]}),Object(m.jsxs)("p",{children:["'",e.content,"'"]})]},e.id)})):Object(m.jsx)("h2",{children:"We don't any reviews for this movie"})})})}}]),a}(p.Component),x=a(7),y=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).renderBackUrl=function(){var t,a=e.props,r=a.location;a.history.push((null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from)||x.a.home)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(m.jsx)("button",{variant:"contained",onClick:this.renderBackUrl,className:"BackBtn",children:"Back"})}}]),a}(p.Component),w=Object(O.f)(y),k=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={genres:[],id:null,title:null,poster_path:null,overview:null,popularity:null,release_date:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t=this.props.match.params.movieId,e.next=4,d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"));case 4:a=e.sent,console.log(a.data),this.setState(i({},a.data));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.genres,a=e.id,r=e.title,n=e.poster_path,c=e.overview,s=e.popularity,i=e.release_date,o=this.props.match,l="".concat(i).substr(0,4);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsxs)("div",{className:"MoviePage",children:[Object(m.jsx)("div",{className:"MoviePage-img-block",children:n?Object(m.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n),alt:r,className:"MoviePage-img"}):Object(m.jsx)("p",{className:"MoviePage-noimg",children:"No photo"})}),Object(m.jsxs)("div",{className:"MoviePage-block",children:[Object(m.jsxs)("h1",{children:[r," (",l,")"]}),Object(m.jsxs)("p",{children:["User Score: ",Math.round(s),"%"]}),Object(m.jsx)("h2",{children:"Overview"}),Object(m.jsx)("p",{children:c}),Object(m.jsx)("h3",{children:"Genres"}),Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsx)("li",{children:e.name},e.id)}))})]})]},a),Object(m.jsxs)("div",{className:"MoviePage-menu",children:[Object(m.jsx)("h2",{children:"Additional information"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(v.b,{to:"".concat(o.url,"/cast"),className:"NavLink",activeClassName:"NavLink-activ",children:"Cast"})}),Object(m.jsx)("li",{children:Object(m.jsx)(v.b,{to:"".concat(o.url,"/reviews"),className:"NavLink",activeClassName:"NavLink-activ",children:"Reviews"})})]}),Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{exact:!0,path:"".concat(o.path,"/cast"),component:f}),Object(m.jsx)(O.a,{exact:!0,path:"".concat(o.path,"/reviews"),component:g})]})]})]})}}]),a}(p.Component);t.default=k}}]);
//# sourceMappingURL=6.13b463a7.chunk.js.map