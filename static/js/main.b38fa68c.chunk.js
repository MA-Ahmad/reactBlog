(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{50:function(e){e.exports=JSON.parse('[{"id":1,"title":"Rails ActiveAdmin","authorName":"Ali","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":2,"title":"Future of ROR","authorName":"Ahmad","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":3,"title":"ReactJs with Chakra","authorName":"Taimoor","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":4,"title":"ReactJS with Rails","authorName":"Hassan","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{"id":5,"title":"React on Rails","authorName":"Umar","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}]')},71:function(e,t,a){e.exports=a(94)},76:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),i=a.n(r),o=a(19),l=a.n(o),s=a(31),c=a(10),m=a(23),u=(a(58),a(6)),d=a(47),p=a(96),h=a(97),g=a(105),b=a(67),f=(a(76),function(e){var t=i.a.useState(!1),a=Object(m.a)(t,2),n=a[0],r=a[1];return i.a.createElement(u.a,{as:"nav",bg:"teal.500"},i.a.createElement(d.a,{as:"nav",align:"center",justify:"space-between",wrap:"wrap",padding:"1.5rem",bg:"teal.500",color:"white",maxWidth:"1200px",mx:"auto",my:"auto"},i.a.createElement(d.a,{align:"center",mr:5},i.a.createElement(p.a,{as:"h1",size:"lg",letterSpacing:"-.1rem",color:"gray.600"},"Blog")),i.a.createElement(u.a,{display:{base:"block",md:"none"},onClick:function(){return r(!n)}},i.a.createElement("svg",{fill:"white",width:"12px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Menu"),i.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))),i.a.createElement(u.a,{display:{sm:n?"block":"none",md:"flex"},width:{sm:"full",md:"auto"},alignItems:"center",flexGrow:1},i.a.createElement(u.a,null,i.a.createElement(p.a,{fontSize:"20px"},i.a.createElement(s.c,{to:"/new",activeClassName:"active"},"New"))),i.a.createElement(u.a,{ml:{base:0,md:3}},i.a.createElement(p.a,{fontSize:"20px"},i.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"active"},"List")))),i.a.createElement(u.a,{display:{sm:n?"block":"none",md:"block"},mt:{base:4,md:0}},i.a.createElement(h.a,{href:"https://github.com/MA-Ahmad/reactBlog",isExternal:!0,style:{textDecoration:"none"}},i.a.createElement(g.a,{leftIcon:b.a,bg:"transparent",border:"1px"},"View Source")))))}),E=a(102),y=a(98),v=a(38),x=a(99),w=a(69),k=a(100),I=a(101),O=a(50),j=i.a.createContext({blogs:O,createBlog:function(e){},deleteBlog:function(e){}}),L=a(53),B=a(64),N=function(e){var t=e.match,a=e.history,n=e.editMode,o=Object(r.useState)({title:"",authorName:"",content:""}),l=Object(m.a)(o,2),s=l[0],c=l[1],h=Object(r.useState)(t.params.id),b=Object(m.a)(h,2),f=b[0],O=(b[1],Object(r.useContext)(j)),N=Object(E.a)();function C(e){var t;return e?e.length<5&&(t="Must be 5 characters or more"):t="Title is required",t}function S(e){var t;return e?e.length<5&&(t="Must be 5 characters or more"):t="Name is required",t}return Object(r.useEffect)((function(){if(n){var e=O.blogs.filter((function(e){return e.id===Number(f)}))[0];c(e)}else c({title:"",authorName:"",content:""})}),[n]),i.a.createElement(B.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateX(-50%)"}},i.a.createElement(u.a,{maxWidth:"1200px",mx:"auto",my:"auto",paddingTop:"20px",paddingBottom:"20px",height:"100%"},i.a.createElement(d.a,{alignItems:"center",justifyContent:"center",flexDirection:"column"},i.a.createElement(p.a,{as:"h1",color:"teal.500",size:"lg",p:5},n?"Update":"Create"," a Blog"),i.a.createElement(u.a,{p:5,shadow:"md",borderWidth:"1px",rounded:"md",width:{base:"60%",md:"40%"}},i.a.createElement(y.a,{isInline:!0,spacing:8,align:"center"},i.a.createElement(L.b,{enableReinitialize:!0,initialValues:s,onSubmit:function(e,t){setTimeout((function(){n?(e.id=Number(f),O.editBlog(e),c(e)):(O.createBlog(e),t.resetForm({})),a.push("/"),t.setSubmitting(!1),N({position:"bottom",title:"Notification",description:n?"Blog post updated successfully":"You've successfully created a blog post.",status:"success",duration:2e3,isClosable:!0})}),200)}},(function(e){var t=e.values,a=e.handleChange,r=e.handleSubmit,o=e.isSubmitting;return i.a.createElement("form",{onSubmit:r,style:{width:"100%"}},i.a.createElement(u.a,{paddingBottom:3},i.a.createElement(L.a,{name:"title",validate:C,width:"100%"},(function(e){var n=e.field,r=e.form;return i.a.createElement(v.a,{isInvalid:r.errors.title&&r.touched.title},i.a.createElement(x.a,{htmlFor:"title"},"Title"),i.a.createElement(w.a,Object.assign({},n,{id:"title",placeholder:"Title",value:t.title,onChange:a})),i.a.createElement(k.a,null,r.errors.title))}))),i.a.createElement(u.a,{paddingBottom:3},i.a.createElement(L.a,{name:"authorName",validate:S,width:"100%"},(function(e){var n=e.field,r=e.form;return i.a.createElement(v.a,{isInvalid:r.errors.authorName&&r.touched.authorName},i.a.createElement(x.a,{htmlFor:"authorName"},"Name"),i.a.createElement(w.a,Object.assign({},n,{id:"authorName",placeholder:"Author Name",value:t.authorName,onChange:a})),i.a.createElement(k.a,null,r.errors.authorName))}))),i.a.createElement(u.a,{paddingBottom:5},i.a.createElement(x.a,{htmlFor:"content"},"Content"),i.a.createElement(I.a,{height:"20vh",name:"content",value:t.content,onChange:a})),i.a.createElement(g.a,{mt:4,variantColor:"teal",isLoading:o,type:"submit",float:"right"},n?"Update":"Create"))})))))))},C=a(104),S=a(106),T=a(65),A=a.n(T),M=a(68),z=function(){return i.a.createElement(d.a,{position:"fixed",left:0,right:0,bottom:0,top:0,alignItems:"center",justifyContent:"center",bg:"white",zIndex:999},i.a.createElement(M.a,{thickness:"4px",color:"gray.400"}))},R=a(66),F=function(){var e=Object(r.useContext)(j),t=Object(r.useState)(""),a=Object(m.a)(t,2),n=a[0],o=a[1],l=Object(E.a)();Object(r.useEffect)((function(){e.deleteBlog(n)}),[n]);return i.a.createElement(u.a,{maxWidth:"1200px",mx:"auto",my:"auto",p:5},i.a.createElement(C.a,{columns:[1,2,3,3],spacing:"15px"},e.blogs.map((function(e){return i.a.createElement(u.a,{position:"relative",key:e.id},i.a.createElement(u.a,{as:"span",fontSize:"sm",position:"absolute",right:"5px",margin:"5px",zIndex:"1"},i.a.createElement(S.a,{rounded:"full",p:"2px 8px",variantColor:"red",as:"button",onClick:function(){return t=e.id,l({position:"bottom",title:"Notification",description:"Blog deleted successfully",status:"success",duration:2e3,isClosable:!0}),void o(t);var t}},"Delete")),i.a.createElement(s.b,{to:"/edit/".concat(e.id)},i.a.createElement(u.a,{maxW:"sm",borderWidth:"1px",shadow:"md",rounded:"lg",overflow:"hidden",position:"relative"},i.a.createElement(R.Img,{src:"https://bit.ly/2Z4KKcF",alt:"Blog image",loader:i.a.createElement(z,null)}),i.a.createElement(u.a,{p:"6"},i.a.createElement(u.a,{d:"flex",alignItems:"baseline"},i.a.createElement(u.a,{fontWeight:"semibold",as:"h2",letterSpacing:"wide",textTransform:"uppercase",ml:"2"},e.title)),i.a.createElement(u.a,null,i.a.createElement(u.a,{as:"span",color:"gray.600",fontSize:"sm"},i.a.createElement(S.a,{rounded:"full",px:"2",variantColor:"teal"},e.authorName))),i.a.createElement(A.a,{clamp:3},i.a.createElement(u.a,{mt:"1",fontWeight:"semibold",as:"p",lineHeight:"tight",color:"gray.600",fontSize:"sm"},e.content))))))}))))},W=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement(c.d,null,i.a.createElement(c.b,{exact:!0,path:"/",component:F}),i.a.createElement(c.b,{exact:!0,path:"/new",render:function(e){return i.a.createElement(N,Object.assign({},e,{editMode:!1}))}}),i.a.createElement(c.b,{exact:!0,path:"/edit/:id",render:function(e){return i.a.createElement(N,Object.assign({},e,{editMode:!0}))}}),i.a.createElement(c.a,{to:"/"})))},D=a(24),G=function(e,t){return e.blogs.findIndex((function(e){return e.id===t}))},P=function(e,t){switch(t.type){case"CREATE_BLOG":return function(e,t){var a=Object(D.a)(t.blogs);return a.push(Object(n.a)(Object(n.a)({},e),{},{id:a.length+1})),Object(n.a)(Object(n.a)({},t),{},{blogs:a})}(t.blog,e);case"EDIT_BLOG":return function(e,t){var a=Object(D.a)(t.blogs);return a[G(t,e.id)]=e,Object(n.a)(Object(n.a)({},t),{},{blogs:a})}(t.blog,e);case"DELETE_BLOG":return function(e,t){var a=Object(D.a)(t.blogs);return Object(n.a)(Object(n.a)({},t),{},{blogs:a.filter((function(t){return t.id!==e}))})}(t.blogId,e);default:return e}},_=function(e){var t=O,a=Object(r.useReducer)(P,{blogs:t}),n=Object(m.a)(a,2),o=n[0],l=n[1];return i.a.createElement(j.Provider,{value:{blogs:o.blogs,createBlog:function(e){l({type:"CREATE_BLOG",blog:e})},editBlog:function(e){l({type:"EDIT_BLOG",blog:e})},deleteBlog:function(e){l({type:"DELETE_BLOG",blogId:e})}}},e.children)};var H=function(){return i.a.createElement(_,null,i.a.createElement(s.a,null,i.a.createElement(W,null)))},J=a(103),V=a(15),U=a(107),q=["360px","768px","1024px","1440px"];q.sm=q[0],q.md=q[1],q.lg=q[2],q.xl=q[3];var K=Object(n.a)(Object(n.a)({},J.a),{},{breakpoints:q});l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V.a,{theme:K},i.a.createElement(U.a,null),i.a.createElement(H,null))),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b38fa68c.chunk.js.map