import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function i({logo:a,leftAction:s,rightActions:d=[]}){return e.jsxs("header",{className:`
        w-full
        h-[60px]
        flex
        items-center
        justify-between
        px-4
        bg-[var(--header-bg)]
        border-b
        border-[var(--header-border)]
      `,children:[e.jsx("div",{className:"flex items-center gap-2 min-w-[48px]",children:s}),e.jsx("div",{className:"flex-1 flex justify-center",children:a}),e.jsx("div",{className:"flex items-center gap-2 min-w-[48px] justify-end",children:d.map((l,p)=>e.jsx("span",{children:l},p))})]})}i.__docgenInfo={description:"",methods:[],displayName:"Header",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leftAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightActions:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};function t({icon:a,onClick:s}){return e.jsx("button",{onClick:s,className:`
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-md
        hover:bg-[var(--header-hover)]
      `,children:a})}t.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f={title:"Components/Header",component:i},n={args:{leftAction:e.jsx(t,{icon:e.jsx("span",{children:"☰"})}),logo:e.jsx("span",{className:"font-bold text-lg",children:"ALETA"}),rightActions:[e.jsx(t,{icon:e.jsx("span",{children:"🔍"})},"1"),e.jsx(t,{icon:e.jsx("span",{children:"👤"})},"2")]}};var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    leftAction: <IconButton icon={<span>☰</span>} />,
    logo: <span className="font-bold text-lg">
        ALETA
      </span>,
    rightActions: [<IconButton key="1" icon={<span>🔍</span>} />, <IconButton key="2" icon={<span>👤</span>} />]
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const x=["Default"];export{n as Default,x as __namedExportsOrder,f as default};
