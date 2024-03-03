import{j as l,a as s}from"./jsx-runtime-03b4ddbf.js";import"./index-76fb7be0.js";import{P as t}from"./index-8d47fad6.js";function o({task:{id:e,title:c,state:i},onArchiveTask:_,onPinTask:A}){return l("div",{className:`list-item ${i}`,children:[l("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[s("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:i==="TASK_ARCHIVED"}),s("span",{className:"checkbox-custom",onClick:()=>_(e)})]}),s("label",{htmlFor:"title","aria-label":c,className:"title",children:s("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"Input title"})}),i!=="TASK_ARCHIVED"&&s("button",{className:"pin-button",onClick:()=>A(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:s("span",{className:"icon-star"})},`pinTask-${e}`)]})}o.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onArchiveTask:t.func,onPinTask:t.func};o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"",type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1},onArchiveTask:{description:"",type:{name:"func"},required:!1},onPinTask:{description:"",type:{name:"func"},required:!1}}};const b={component:o,title:"Task",tags:["autodocs"]},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...a.args.task,state:"TASK_PINNED"}}},n={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,k,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const N=["Default","Pinned","Archived"],v=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:a,Pinned:r,__namedExportsOrder:N,default:b},Symbol.toStringTag,{value:"Module"}));export{a as D,o as T,v as a};
