import{a as _,b as C,cL as v,b9 as d,bz as g,b4 as h,u as k,c as D,e as y,aB as a,o as b,aD as M,aC as l,l as m,k as $,i as n,n as s,aG as w}from"./index.23e4a303.js";import{c as I}from"./index.1d09b759.js";import"./useContentViewHeight.9df6cabd.js";import"./index.cb21193e.js";var N="/mamba-forever/assets/23.fc9bbe7e.svg";const x=C({name:"UserDropdown",components:{Dropdown:v,Menu:d,MenuItem:I(()=>g(()=>import("./DropMenuItem.ea8194b5.js"),["assets/DropMenuItem.ea8194b5.js","assets/index.23e4a303.js","assets/index.a3ff34c1.css"])),MenuDivider:d.Divider},props:{theme:h.oneOf(["dark","light"])},setup(){const{prefixCls:e}=k("header-user-dropdown"),r=D(),p=y(()=>{const{realName:o="",avatar:t,desc:i}=r.getUserInfo||{};return{realName:o,avatar:t||N,desc:i}});function c(){r.confirmLoginOut()}function u(o){switch(o.key){case"logout":c();break}}return{prefixCls:e,getUserInfo:p,handleMenuClick:u}}}),U=["src"];function B(e,r,p,c,u,o){a("MenuDivider");const t=a("MenuItem"),i=a("Menu"),f=a("Dropdown");return b(),M(f,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:l(()=>[m(i,{onClick:e.handleMenuClick},{default:l(()=>[$("",!0),m(t,{key:"logout",text:"\u9000\u51FA\u7CFB\u7EDF",icon:"ion:power-outline"})]),_:1},8,["onClick"])]),default:l(()=>[n("span",{class:s([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[n("img",{class:s(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,U),n("span",{class:s(`${e.prefixCls}__info hidden md:block`)},[n("span",{class:s([`${e.prefixCls}__name  `,"truncate"])},w(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"])}var E=_(x,[["render",B]]);export{E as default};
