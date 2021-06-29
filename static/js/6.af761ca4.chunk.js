(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{72:function(e,t,r){"use strict";r.r(t);var n=r(39),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=r(40),l=r(15),u=r(16),h=r(18),j=r(17),p=r(0),b=r(9),v=r(2),d=r(41),O=r.n(d),m=function(e,t){return O.a.get("".concat("https://api.themoviedb.org/3/movie/").concat(e).concat(t,"?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"))},f=r(1),x=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={cast:[]},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m(t,"/credits");case 3:r=e.sent,this.setState({cast:r.data.cast});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cast;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:"Actor-list",children:e.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.character;return Object(f.jsxs)("li",{className:"Actor-item",children:[Object(f.jsx)("div",{className:"Actor-img-block",children:r?Object(f.jsx)("img",{className:"Actor-img",src:"https://image.tmdb.org/t/p/w400"+r,alt:n}):Object(f.jsx)("p",{className:"MoviePage-noimg",children:"No photo"})}),Object(f.jsx)("h2",{children:n}),Object(f.jsxs)("p",{children:["Character: ",a]})]},t)}))})})}}]),r}(p.Component),g=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={authors:[]},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m(t,"/reviews");case 3:r=e.sent,this.setState({authors:r.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.authors;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:e.length?e.map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsxs)("h2",{children:["Author: ",e.author]}),Object(f.jsxs)("p",{children:["'",e.content,"'"]})]},e.id)})):Object(f.jsx)("h2",{children:"We don't any reviews for this movie"})})})}}]),r}(p.Component),y=r(7),w=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).renderBackUrl=function(){var t,r=e.props,n=r.location;r.history.push((null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||y.a.home)},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(f.jsx)("button",{variant:"contained",onClick:this.renderBackUrl,className:"BackBtn",children:"Back"})}}]),r}(p.Component),k=Object(v.g)(w),N=function(e){Object(h.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={genres:[],id:null,title:null,poster_path:null,overview:null,popularity:null,release_date:null},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m(t,"");case 3:r=e.sent,this.setState(i({},r.data));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.genres,r=e.id,n=e.title,a=e.poster_path,c=e.overview,s=e.popularity,i=e.release_date,o=this.props.match,l="".concat(i).substr(0,4);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(k,{}),Object(f.jsxs)("div",{className:"MoviePage",children:[Object(f.jsx)("div",{className:"MoviePage-img-block",children:a?Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:n,className:"MoviePage-img"}):Object(f.jsx)("p",{className:"MoviePage-noimg",children:"No photo"})}),Object(f.jsxs)("div",{className:"MoviePage-block",children:[Object(f.jsxs)("h1",{children:[n," (",l,")"]}),Object(f.jsxs)("p",{children:["User Score: ",Math.round(s),"%"]}),Object(f.jsx)("h2",{children:"Overview"}),Object(f.jsx)("p",{children:c}),Object(f.jsx)("h3",{children:"Genres"}),Object(f.jsx)("ul",{children:t.map((function(e){return Object(f.jsx)("li",{children:e.name},e.id)}))})]})]},r),Object(f.jsxs)("div",{className:"MoviePage-menu",children:[Object(f.jsx)("h2",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(o.url,"/cast"),className:"NavLink",activeClassName:"NavLink-activ",children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.b,{to:"".concat(o.url,"/reviews"),className:"NavLink",activeClassName:"NavLink-activ",children:"Reviews"})})]}),Object(f.jsxs)(v.d,{children:[Object(f.jsx)(v.b,{exact:!0,path:"".concat(o.path,"/cast"),component:x}),Object(f.jsx)(v.b,{exact:!0,path:"".concat(o.path,"/reviews"),component:g})]})]})]})}}]),r}(p.Component);t.default=N}}]);
//# sourceMappingURL=6.af761ca4.chunk.js.map