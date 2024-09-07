"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[813],{7713:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(1312),i=n(9022),a=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(i.A,{permalink:n,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,a.jsx)(i.A,{permalink:r,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4096),i=n(2971),a=n(4848);function r(e){let{items:t,component:n=i.A}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(s.in,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var s=n(4164),i=n(1312),a=n(5500),r=n(7559),l=n(6461),o=n(8774),c=n(8027),d=n(7713),g=n(1463),h=n(3892),u=n(2234),p=n(1107),m=n(4848);function b(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.be,{title:n,description:t.description}),(0,m.jsx)(g.A,{tag:"blog_tags_posts"})]})}function x(e){let{tag:t,items:n,sidebar:s,listMetadata:a}=e;const r=(0,l.ZD)(t);return(0,m.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(u.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(h.A,{items:n}),(0,m.jsx)(d.A,{metadata:a})]})}function f(e){return(0,m.jsxs)(a.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,m.jsx)(b,{...e}),(0,m.jsx)(x,{...e})]})}},2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),i=n(4084),a=n(7559),r=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,s.A)(t,a.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,{...e})]})}},6461:(e,t,n)=>{n.d(t,{ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>o});n(6540);var s=n(1312),i=n(3465),a=n(4848);function r(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=r();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=r();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,a.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var s=n(1312),i=n(5260),a=n(4848);function r(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(i.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);