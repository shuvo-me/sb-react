import{a as e,j as n}from"./jsx-runtime-03b4ddbf.js";import{r as f}from"./index-76fb7be0.js";import{u as g,a as x,f as S,T as b,P as j,s as w,M as I}from"./TaskList.stories-5fe1860e.js";import{r as k}from"./index-03d05a58.js";import"./_commonjsHelpers-de833af9.js";import"./Task.stories-ea6827b5.js";import"./index-8d47fad6.js";function u(){const s=g(),{error:r}=x(t=>t.taskbox);return f.useEffect(()=>{s(S())},[]),r?e("div",{className:"page lists-show",children:n("div",{className:"wrapper-message",children:[e("span",{className:"icon-face-sad"}),e("p",{className:"title-message",children:"Oh no!"}),e("p",{className:"subtitle-message",children:"Something went wrong"})]})}):n("div",{className:"page lists-show",children:[e("nav",{children:e("h1",{className:"title-page",children:"Taskbox"})}),e(b,{})]})}u.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};var h=k();const D={component:u,title:"InboxScreen",decorators:[s=>e(j,{store:w,children:s()})],tags:["autodocs"]},a={parameters:{msw:{handlers:[h.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(s,r,t)=>r(t.json(I.tasks)))]}}},o={parameters:{msw:{handlers:[h.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(s,r,t)=>r(t.status(403)))]}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,m,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const M=["Default","Error"];export{a as Default,o as Error,M as __namedExportsOrder,D as default};
