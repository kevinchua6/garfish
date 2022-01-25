"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[109],{5867:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var l=a(1513),i=a(1275),n=(a(7711),a(4635)),r=["components"],o={title:"Garfish.getGlobalObject",slug:"/api/getGlobalObject",order:7},s=void 0,c={unversionedId:"guide/API/getGlobal",id:"guide/API/getGlobal",isDocsHomePage:!1,title:"Garfish.getGlobalObject",description:"\u7528\u4e8e\u83b7\u53d6\u771f\u5b9e window \u7684\u503c\u5728 Garfish \u9ed8\u8ba4\u542f\u52a8\u4e86\u6c99\u7bb1\u7684\u9694\u79bb\u80fd\u529b\uff0c\u6240\u4ee5\u5728\u5b50\u5e94\u7528\u4e2d\u5168\u5c40\u53d8\u91cf\u9ed8\u8ba4\u662f\u9694\u79bb\u7684\uff0c\u901a\u8fc7\u8be5\u65b9\u6cd5\u53ef\u4ee5\u8bfb\u53d6\u771f\u5b9e window \u7684\u503c\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\u5e76\u4e0d\u5efa\u8bae\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u8be5 API\uff0c\u82e5\u5b50\u5e94\u7528\u8981\u83b7\u53d6\u771f\u5b9e\u7684 window \u4e0a\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u8003\u8651\u5c06\u5176\u52a0\u5165 protectVariable \u5217\u8868\u4e2d",source:"@site/docs/guide/API/getGlobal.md",sourceDirName:"guide/API",slug:"/api/getGlobalObject",permalink:"/api/getGlobalObject",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/API/getGlobal.md",tags:[],version:"current",lastUpdatedBy:"danpeen",lastUpdatedAt:1643088881,formattedLastUpdatedAt:"2022/1/25",frontMatter:{title:"Garfish.getGlobalObject",slug:"/api/getGlobalObject",order:7},sidebar:"guide",previous:{title:"Garfish.setExternal",permalink:"/api/setExternal"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3},{value:"setGlobalValue",id:"setglobalvalue",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",children:[],level:3}],level:2},{value:"clearEscapeEffect",id:"clearescapeeffect",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u7528\u4e8e\u83b7\u53d6\u771f\u5b9e window \u7684\u503c\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"Garfish")," \u9ed8\u8ba4\u542f\u52a8\u4e86\u6c99\u7bb1\u7684\u9694\u79bb\u80fd\u529b\uff0c\u6240\u4ee5\u5728\u5b50\u5e94\u7528\u4e2d\u5168\u5c40\u53d8\u91cf\u9ed8\u8ba4\u662f\u9694\u79bb\u7684\uff0c\u901a\u8fc7\u8be5\u65b9\u6cd5\u53ef\u4ee5\u8bfb\u53d6\u771f\u5b9e window \u7684\u503c\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\u5e76\u4e0d\u5efa\u8bae\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u8be5 API\uff0c\u82e5\u5b50\u5e94\u7528\u8981\u83b7\u53d6\u771f\u5b9e\u7684 window \u4e0a\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u8003\u8651\u5c06\u5176\u52a0\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"protectVariable")," \u5217\u8868\u4e2d"),(0,n.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\n\nconst nativeWindow = Garfish.getGlobalObject();\n")),(0,n.kt)("h2",{id:"setglobalvalue"},"setGlobalValue"),(0,n.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u771f\u5b9e window \u7684\u503c\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"Garfish")," \u4e2d\u9ed8\u8ba4\u542f\u52a8\u4e86\u6c99\u7bb1\u7684\u9694\u79bb\u80fd\u529b\uff0c\u6240\u4ee5\u5728\u5b50\u5e94\u7528\u4e2d\u5168\u5c40\u53d8\u91cf\u9ed8\u8ba4\u662f\u9694\u79bb\u7684\uff0c\u901a\u8fc7\u8be5\u65b9\u6cd5\u53ef\u4ee5\u8bfb\u53d6\u771f\u5b9e window \u7684\u503c\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\u5e76\u4e0d\u5efa\u8bae\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u8be5 API\uff0c\u82e5\u5b50\u5e94\u7528\u8981\u83b7\u53d6\u771f\u5b9e\u7684 window \u4e0a\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u8003\u8651\u5c06\u5176\u52a0\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"protectVariable")," \u5217\u8868\u4e2d"),(0,n.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\n\nGarfish.setGlobalValue(key: string | symbol, value: any)\n")),(0,n.kt)("h2",{id:"clearescapeeffect"},"clearEscapeEffect"),(0,n.kt)("p",null,"\u82e5\u53d1\u73b0\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u884c\u4e3a\u4f1a\u9003\u9038\u6c99\u7bb1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u6cd5\u6765\u6e05\u9664\u9003\u9038\u7684\u53d8\u91cf"),(0,n.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Garfish.clearEscapeEffect('webpackJsonp');\n")))}u.isMDXComponent=!0}}]);