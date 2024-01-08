import{u as r,N as n,j as e,C as a,r as s,L as i,O as c}from"./index-qrua0TIO.js";import{G as l}from"./iconBase-VU8qAecx.js";function d(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(t)}const x=r.header`
  background-color: #283149;
`,p=r.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 54px;
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`,f=r.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
`,u=r.nav`
  display: flex;
  gap: 100px;
  align-items: center;
`,o=r(n)`
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
  transition: color 250ms ease, background-color 250ms ease;

  &.active {
    color: #ceff7b;
    &.create {
      color: #fff;
    }
  }

  &.create {
    padding: 12px 20px;
    background-color: #1f7a37;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover,
  :focus {
    color: #98bf56;

    &.create {
      color: #fff;
      background-color: #1b602d;
    }
  }
`,g=r.button`
  cursor: pointer;
  display: flex;
  grid-gap: 5px;
  gap: 5px;
  font-size: 0.875rem;
  padding: 12px 20px;
  border: 1px solid #404b69;
  border-radius: 30px;
  color: #fff;
  height: 40px;
  background-color: transparent;
  transition: border 250ms ease;

  &:hover,
  :focus {
    border: 1px solid #98bf56;
  }
`,b=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(a,{children:e.jsxs(p,{children:[e.jsx(f,{children:"Rentzila"}),e.jsxs(u,{children:[e.jsx(o,{to:"/",activeclassname:"active",children:"Оголошення"}),e.jsxs(o,{to:"create-unit",className:"create",children:[e.jsx(d,{})," Подати оголошення"]})]}),e.jsx(g,{type:"button",children:"УКР / UAH"})]})})}),e.jsx("main",{children:e.jsx(s.Suspense,{fallback:e.jsx(i,{}),children:e.jsx(c,{})})})]});export{b as default};
