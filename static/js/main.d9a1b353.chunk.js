(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(8),r=n.n(c),s=n(31),o=n.n(s),l=n(43),d=n(21),u=n(22),j=n(27),h=n(26),b=n(44),p=n.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),m=n(117),x=n(112),v=n(118),O=n(4),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchTerm:""},e.handleChange=function(t){return e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){var n=e.state.searchTerm;(0,e.props.onFormSubmit)(n),t.preventDefault()},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(x.a,{elevation:6,style:{padding:"5px"},children:Object(O.jsx)("form",{onSubmit:this.handleSubmit,children:Object(O.jsx)(v.a,{fullWidth:!0,label:"Search..",onChange:this.handleChange})})})}}]),n}(a.a.Component),g=n(116),y=function(e){var t=e.video;if(!t)return Object(O.jsx)("div",{children:"Loading..."});var n="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x.a,{elevation:6,style:{height:"70%"},children:Object(O.jsx)("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:n})}),Object(O.jsxs)(x.a,{elevation:6,style:{padding:"15px"},children:[Object(O.jsxs)(g.a,{variant:"h4",children:[t.snippet.title," - ",t.snippet.channelTitle]}),Object(O.jsx)(g.a,{variant:"subtitle1",children:t.snippet.channelTitle}),Object(O.jsx)(g.a,{variant:"subtitle2",children:t.snippet.description})]})]})},S=function(e){var t=e.video,n=e.onVideoSelect;return Object(O.jsx)(m.a,{item:!0,xs:12,children:Object(O.jsxs)(x.a,{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return n(t)},children:[Object(O.jsx)("img",{style:{marginRight:"20px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),Object(O.jsx)(g.a,{variant:"subtitle1",children:Object(O.jsx)("b",{children:t.snippet.title})})]})})},w=function(e){var t=e.videos.map((function(t,n){return Object(O.jsx)(S,{onVideoSelect:e.onVideoSelect,video:t},n)}));return Object(O.jsx)(m.a,{container:!0,spacing:10,children:t})},V=function(e){Object(j.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(d.a)(this,i);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.handleSubmit=function(){var t=Object(l.a)(o.a.mark((function t(i){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(79).config(),t.next=3,p.get("search",{params:{part:"snippet",maxResults:5,key:"AIzaSyCZXCSv8bA-J9RK0w_5Xg6jbMa0xD7kF3E",q:i}});case 3:a=t.sent,e.setState({videos:a.data.items,selectedVideo:a.data.items[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(O.jsx)(m.a,{container:!0,justify:"center",spacing:10,children:Object(O.jsx)(m.a,{item:!0,xs:12,children:Object(O.jsxs)(m.a,{container:!0,spacing:10,children:[Object(O.jsx)(m.a,{item:!0,xs:12,children:Object(O.jsx)(f,{onFormSubmit:this.handleSubmit})}),Object(O.jsx)(m.a,{item:!0,xs:8,children:Object(O.jsx)(y,{video:this.state.selectedVideo})}),Object(O.jsx)(m.a,{item:!0,xs:4,children:Object(O.jsx)(w,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})})}}]),i}(a.a.Component);r.a.render(Object(O.jsx)(V,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.d9a1b353.chunk.js.map