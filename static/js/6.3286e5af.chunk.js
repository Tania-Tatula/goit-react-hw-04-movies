(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{71:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=a(40),l=a(15),u=a(16),h=a(18),j=a(17),p=a(0),b=a(41),d=a.n(b),v=a(9),f=a(2),O=a(1),m=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={cast:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t=this.props.match.params.movieId,e.next=4,d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"));case 4:a=e.sent,this.setState({cast:a.data.cast});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cast;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{className:"Actor-list",children:e.map((function(e){return Object(O.jsxs)("li",{className:"Actor-item",children:[Object(O.jsx)("img",{className:"Actor-img",src:"https://image.tmdb.org/t/p/w400"+e.profile_path,alt:e.name}),Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}}]),a}(p.Component),g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={authors:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t=this.props.match.params.movieId,e.next=4,d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US&page=1"));case 4:a=e.sent,console.log(a.data.results),this.setState({authors:a.data.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.authors;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{children:e.length?e.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("h2",{children:["Author: ",e.author]}),Object(O.jsxs)("p",{children:["'",e.content,"'"]})]},e.id)})):Object(O.jsx)("h2",{children:"We don't any reviews for this movie"})})})}}]),a}(p.Component),x=a(7),y=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).renderBackUrl=function(){var t,a=e.props,r=a.location;a.history.push((null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from)||x.a.home)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(O.jsx)("button",{variant:"contained",onClick:this.renderBackUrl,className:"BackBtn",children:"Back"})}}]),a}(p.Component),w=Object(f.f)(y),k=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={genres:[],id:null,title:null,poster_path:null,overview:null,popularity:null,release_date:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0823a515d685f87a50f7a5f1575b73b6",t=this.props.match.params.movieId,e.next=4,d.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("0823a515d685f87a50f7a5f1575b73b6","&language=en-US"));case 4:a=e.sent,console.log(a.data),this.setState(i({},a.data));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.genres,a=e.id,r=e.title,n=e.poster_path,c=e.overview,s=e.popularity,i=e.release_date,o="https://image.tmdb.org/t/p/w300"+"".concat(n),l=this.props.match,u="".concat(i).substr(0,4);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsxs)("div",{className:"MoviePage",children:[Object(O.jsx)("div",{className:"MoviePage-block",children:Object(O.jsx)("img",{src:o,alt:r,className:"MoviePage-img"})}),Object(O.jsxs)("div",{className:"MoviePage-block",children:[Object(O.jsxs)("h1",{children:[r," (",u,")"]}),Object(O.jsxs)("p",{children:["User Score: ",Math.round(s),"%"]}),Object(O.jsx)("h2",{children:"Overview"}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("h3",{children:"Genres"}),Object(O.jsx)("ul",{children:t.map((function(e){return Object(O.jsx)("li",{children:e.name},e.id)}))})]})]},a),Object(O.jsxs)("div",{className:"MoviePage-menu",children:[Object(O.jsx)("h2",{children:"Additional information"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(v.b,{to:"".concat(l.url,"/cast"),className:"NavLink",activeClassName:"NavLink-activ",children:"Cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(v.b,{to:"".concat(l.url,"/reviews"),className:"NavLink",activeClassName:"NavLink-activ",children:"Reviews"})})]}),Object(O.jsxs)(f.c,{children:[Object(O.jsx)(f.a,{exact:!0,path:"".concat(l.path,"/cast"),component:m}),Object(O.jsx)(f.a,{exact:!0,path:"".concat(l.path,"/reviews"),component:g})]})]})]})}}]),a}(p.Component);t.default=k}}]);
//# sourceMappingURL=6.3286e5af.chunk.js.map