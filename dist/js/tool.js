(()=>{var e,t={268:(e,t,n)=>{Nova.booting((function(e,t){Nova.inertia("commenter",n(115).Z)}))},238:()=>{},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});const o=Vue;var r=(0,o.createElementVNode)("h4",{class:"text-90 font-normal text-2xl mb-3"}," Comments ",-1),a={class:"card mb-6 overflow-hidden"},c={class:"flex border-b border-40 remove-bottom-border px-8"},m={class:"w-full pt-6 pb-2"},s=(0,o.createElementVNode)("h4",{class:"font-normal text-80"}," Write new comment ",-1),i={class:"flex justify-between px-8 pb-4 border-b border-40"},l=(0,o.createElementVNode)("div",{class:"help-text"}," On MacOS, press ⌘ + Enter to save ",-1),u={key:0,class:"flex border-b border-40 remove-bottom-border px-8"},d={class:"w-full py-6"},p=(0,o.createElementVNode)("h3",{class:"text-90 font-bold text-lg mb-4"},"Comments",-1),f={key:1,class:"bg-20 rounded-b"},h={class:"flex justify-between items-center"},v=["disabled"],b=["disabled"];var k={class:"commenter__comment py-4 border-t border-40"},x={class:"font-light text-80 text-sm"},y=["href","textContent"],C=(0,o.createTextVNode)(" said "),g=(0,o.createTextVNode)(" Written "),N=["innerHTML"];const E={props:{comment:{type:Object,required:!0}},computed:{commentString:function(){return _.find(this.comment.fields,{attribute:"comment"}).value},commenter:function(){return _.find(this.comment.fields,{attribute:"commenter"}).value},commenterUrl:function(){var e=_.find(this.comment.fields,{attribute:"commenter"}).belongsToId;return"/nova/resources/users/".concat(e)},date:function(){var e=moment(),t=moment.utc(_.find(this.comment.fields,{attribute:"created_at"}).value).tz(moment.tz.guess());return t.isSame(e,"minute")?"just now":t.isSame(e,"day")?"at ".concat(t.format("LT")):t.isSame(e,"year")?"on ".concat(t.format("MMM D")):"on ".concat(t.format("ll"))},hasCommenter:function(){return Boolean(this.commenter)}}};var V=n(744);const B={props:["resourceName","resourceId","field"],components:{Comment:(0,V.Z)(E,[["render",function(e,t,n,r,a,c){return(0,o.openBlock)(),(0,o.createElementBlock)("div",k,[(0,o.createElementVNode)("div",x,[c.hasCommenter?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.createElementVNode)("a",{class:"no-underline dim text-primary font-bold",href:c.commenterUrl,textContent:(0,o.toDisplayString)(c.commenter)},null,8,y),C],64)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[g],64)),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(c.date),1)]),(0,o.createElementVNode)("div",{class:"mt-2",innerHTML:c.commentString},null,8,N)])}]])},data:function(){return{baseCommentUri:"/nova-api/comments",comment:"",data:{next_page_url:"",prev_page_url:"",resources:{}}}},mounted:function(){this.getComments(this.commentsUri)},computed:{commentsUri:function(){return"".concat(this.baseCommentUri,"?page=1")},hasComments:function(){return Boolean(this.data.resources.length)},hasNextLink:function(){return Boolean(this.data.next_page_url)},hasPrevLink:function(){return Boolean(this.data.prev_page_url)},hasPagination:function(){return this.hasNextLink||this.hasPrevLink},queryParams:function(){return"&orderBy=created_at&orderByDirection=desc&viaResource=".concat(this.resourceName,"&viaResourceId=").concat(this.resourceId,"&viaRelationship=comments&relationshipType=hasMany")}},methods:{createComment:function(){var e=this;if(!this.comment)return!1;var t={comment:this.comment,viaResource:this.resourceName,viaResourceId:this.resourceId,viaRelationship:"comments"};axios.post(this.baseCommentUri,t).then((function(){e.getComments(e.commentsUri),e.resetComment(),e.$toasted.show("A new comment has been created.",{type:"success"})})).catch((function(t){return e.$toasted.show(t,{type:"error"})}))},getComments:function(e){var t=this;axios.get("".concat(e).concat(this.queryParams)).then((function(e){var n=e.data;return t.data=n}))},paginationClass:function(e){return e?"text-primary dim":"text-80 opacity-50"},resetComment:function(){this.comment=""}}},w=(0,V.Z)(B,[["render",function(e,t,n,k,x,y){var C=(0,o.resolveComponent)("comment");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[r,(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",m,[s,(0,o.withDirectives)((0,o.createElementVNode)("textarea",{class:"w-full form-control form-input form-input-bordered py-3 h-auto mt-2",id:"commenter",dusk:"commenter",rows:"5","onUpdate:modelValue":t[0]||(t[0]=function(e){return x.comment=e}),onKeyup:t[1]||(t[1]=(0,o.withKeys)((function(){return y.createComment&&y.createComment.apply(y,arguments)}),["enter","93"]))},"\n                    ",544),[[o.vModelText,x.comment]])])]),(0,o.createElementVNode)("div",i,[l,(0,o.createElementVNode)("button",{class:"btn btn-default btn-primary inline-flex items-center relative mt-4",type:"submit",onClick:t[2]||(t[2]=function(){return y.createComment&&y.createComment.apply(y,arguments)})}," Save Comment ")]),y.hasComments?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createElementVNode)("div",d,[p,((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(x.data.resources,(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)(C,{comment:e,key:t},null,8,["comment"])})),128))])])):(0,o.createCommentVNode)("",!0),y.hasPagination?((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[(0,o.createElementVNode)("nav",h,[(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(["btn btn-link py-3 px-4",y.paginationClass(y.hasNextLink)]),disabled:!y.hasNextLink,onClick:t[3]||(t[3]=function(e){return y.getComments(x.data.next_page_url)})}," Older ",10,v),(0,o.createElementVNode)("button",{class:(0,o.normalizeClass)(["btn btn-link py-3 px-4",y.paginationClass(y.hasPrevLink)]),disabled:!y.hasPrevLink,onClick:t[4]||(t[4]=function(e){return y.getComments(x.data.prev_page_url)})}," Newer ",10,b)])])):(0,o.createCommentVNode)("",!0)])])}]])}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,r,a)=>{if(!n){var c=1/0;for(l=0;l<e.length;l++){for(var[n,r,a]=e[l],m=!0,s=0;s<n.length;s++)(!1&a||c>=a)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(m=!1,a<c&&(c=a));if(m){e.splice(l--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,r,a]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[c,m,s]=n,i=0;if(c.some((t=>0!==e[t]))){for(r in m)o.o(m,r)&&(o.m[r]=m[r]);if(s)var l=s(o)}for(t&&t(n);i<c.length;i++)a=c[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},n=self.webpackChunkamukhin_cyberhull_nova_comments=self.webpackChunkamukhin_cyberhull_nova_comments||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.O(void 0,[990],(()=>o(268)));var r=o.O(void 0,[990],(()=>o(238)));r=o.O(r)})();