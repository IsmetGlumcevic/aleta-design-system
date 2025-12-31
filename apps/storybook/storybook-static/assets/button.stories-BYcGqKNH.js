import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function d({children:c,variant:m="primary"}){const p={primary:"bg-[var(--color-brand)] text-[var(--color-onBrand)]",secondary:"border border-[var(--color-border)]",danger:"bg-[var(--color-danger)] text-white"};return l.jsx("button",{className:`px-4 py-2 rounded-md text-sm font-medium ${p[m]}`,children:c})}d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const y={title:"Components/Button",component:d},r={args:{children:"Primary button",variant:"primary"}},e={args:{children:"Danger button",variant:"danger"}};var a,n,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: "Primary button",
    variant: "primary"
  }
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Danger button",
    variant: "danger"
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Primary","Danger"];export{e as Danger,r as Primary,v as __namedExportsOrder,y as default};
