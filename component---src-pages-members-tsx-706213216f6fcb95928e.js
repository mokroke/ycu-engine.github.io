(self.webpackChunkore_ore_gatsbyjs_template=self.webpackChunkore_ore_gatsbyjs_template||[]).push([[652],{4506:function(e,t,n){"use strict";n.d(t,{f:function(){return m}});var r=n(410),a=n(7294),m=function(e){return function(e){return"string"!=typeof e.publicURL}(e)?a.createElement(r.G,e):a.createElement("img",Object.assign({},e,{src:e.publicURL}))}},3901:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(9756),a=n(5444),m=n(7294),l=n(4506),i=function(e){var t=e.memberName,n=e.size,i=(0,r.Z)(e,["memberName","size"]),u=(0,a.K2)("1717575382"),c=m.useMemo((function(){var e=u.allFile.nodes.find((function(e){return e.name===t}));if(e)return e;var n=u.allFile.nodes.find((function(e){return"default"===e.name}));if(n)return n;throw Error("Default Image not found")}),[t,u]),s=m.useMemo((function(){var e=c[n];if(!e)throw Error("Image can't resolved");return e}),[c,n]);return m.createElement(a.rU,{to:"/members/"+t},m.createElement(l.f,Object.assign({},i,{image:s.gatsbyImageData,alt:t+"のアイコン"})))}},691:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(9756),a=n(5444),m=n(7294),l=n(4506),i=function(e){var t=e.pageName,n=(0,r.Z)(e,["pageName"]),i=(0,a.K2)("4204291425"),u=m.useMemo((function(){var e=i.allFile.nodes.find((function(e){return e.name===t+"-header"}));if(null!=e&&e.childImageSharp)return e.childImageSharp;throw Error("Image site/"+t+"-header.{png,jpeg...} not found!")}),[i,t]);return m.createElement(l.f,Object.assign({},n,{image:u.gatsbyImageData,alt:""}))},u=n(3901),c=function(e){var t=e.teamName,n=e.size,i=(0,r.Z)(e,["teamName","size"]),u=(0,a.K2)("1634794392"),c=m.useMemo((function(){var e=u.allFile.nodes.find((function(e){return e.name===t}));if(e)return e;var n=u.allFile.nodes.find((function(e){return"default"===e.name}));if(n)return n;throw Error("Default Image not found")}),[t,u]),s=m.useMemo((function(){var e=c[n];if(!e)throw Error("Image can't resolved");return e}),[c,n]);return m.createElement(l.f,Object.assign({},i,{image:s.gatsbyImageData,alt:t+"のアイコン"}))},s=function(e){var t=e.member;return m.createElement("div",{className:"flex"},m.createElement("div",{className:"flex justify-center items-center p-3"},m.createElement(u.g,{className:"rounded-full",memberName:t.name,size:"lg"})),m.createElement("div",{className:"flex flex-col p-3 pl-4"},m.createElement("div",{className:"text-lg"},m.createElement(a.rU,{to:"/members/"+t.name},t.nameJa," ▷")),m.createElement("div",null,t.teams?t.teams.map((function(e){return m.createElement(c,{className:"mr-3",key:e.id,teamName:e.team.name,size:"sm"})})):null)))},o=function(e){var t=e.tabs,n=e.items,r=e.children,a=m.useState(t[0]),l=a[0],i=a[1];return m.createElement(m.Fragment,null,m.createElement("div",{className:"flex flex-row"},t.map((function(e){return m.createElement("button",{key:e,className:"flex-grow-0 px-8 py-2 text-lg border rounded-t focus:outline-none hover:bg-accent "+(e===l?"border-b-0":""),onClick:function(){return i(e)}},e)})),m.createElement("div",{className:"flex-grow border-b"})),m.createElement("div",{className:"border border-t-0 rounded-b",style:{minHeight:100}},t.map((function(e){return m.createElement("div",{key:e,className:"divide-y-2 "+(e!==l?"hidden":"")},n[e].map((function(e,t){return r(e,t)})))}))))},d=n(8902),f=n(5414),g=function(e){var t,n,r=e.data;return m.createElement("div",null,m.createElement(f.q,null,m.createElement("title",null,"メンバー | "+(null===(t=r.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n?void 0:n.title))),m.createElement(i,{pageName:"members"}),m.createElement("div",{className:"flex flex-col my-5 mx-5"},m.createElement("h1",{className:"text-center text-3xl"},"メンバー一覧"),m.createElement("p",{className:"text-base px-8 md:px-16 lg:px-32"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quod eveniet repellendus delectus doloribus excepturi recusandae, provident porro modi adipisci facilis reiciendis accusamus tempore, quisquam cumque magni ea. Aliquam, debitis.")),m.createElement("div",{className:"container px-4 mx-auto"},m.createElement(o,{tabs:["現役","OB"],items:{"現役":r.activeMemvers.nodes,OB:r.graduatedMembers.nodes}},(function(e){return m.createElement(s,{member:e,key:e.id})})),m.createElement(d.ZP,{to:"/"},"Go to Top")))}}}]);
//# sourceMappingURL=component---src-pages-members-tsx-706213216f6fcb95928e.js.map