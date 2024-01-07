import{u as r,N as n,j as e,C as a,r as s,O as i}from"./index-DB6AzB2n.js";import{G as c}from"./iconBase-SElpl6JA.js";function l(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(t)}const d=r.header`
  background-color: #283149;
`,x=r.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: 54px;
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`,p=r.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: #fff;
`,f=r.nav`
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
  }

  &.create {
    padding: 12px 20px;
    background-color: #ceff7b;
    border-radius: 30px;
    color: #000;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover,
  :focus {
    color: #98bf56;

    &.create {
      color: #000;
      background-color: #98bf56;
    }
  }
`,u=r.button`
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
`,m=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{children:e.jsxs(x,{children:[e.jsx(p,{children:"Rentzila"}),e.jsxs(f,{children:[e.jsx(o,{to:"/",activeclassname:"active",children:"Оголошення"}),e.jsxs(o,{to:"create-unit",className:"create",children:[e.jsx(l,{})," Подати оголошення"]})]}),e.jsx(u,{type:"button",children:"УКР / UAH"})]})})}),e.jsx("main",{children:e.jsx(s.Suspense,{fallback:e.jsx("p",{children:"Loading..."}),children:e.jsx(i,{})})})]});export{m as default};
