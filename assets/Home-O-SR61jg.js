import{r as m,j as e,u as s,a as E,b as L,c as g,C as M,Q as R}from"./index-qrua0TIO.js";import{c as b,L as k,P as r,M as z,a as T,b as A,r as x,o as I,d as h,e as N,g as O,s as P}from"./toastify-hYx1KPbd.js";import{G as j}from"./iconBase-VU8qAecx.js";const v={lng:31.16558,lat:48.379433};b.apiKey="iu29tgeTe6X0Pbx8qmxf";b.primaryLanguage=k.UKRAINIAN;const y=({locationMarker:n,getAdvertisement:a})=>{const f=m.useRef(null),o=m.useRef(null),c=m.useRef([]),d=5.2;return m.useEffect(()=>{o.current||(o.current=new z({container:f.current,style:T.STREETS,center:[v.lng,v.lat],zoom:d}));const i=n.map(({location:t,id:l},p)=>{if(!c.current[p]){const u=new A({color:"#ceff7b"}).setLngLat(t).addTo(o.current);u.getElement().addEventListener("click",async()=>{await a(l)}),c.current[p]=u}return c.current[p]});return c.current.forEach((t,l)=>{n[l]||(t.remove(),t.getElement().removeEventListener("click"),c.current[l]=null)}),o.current.on("zoomend",()=>{let t=[];i.forEach((l,p)=>{o.current.getBounds().contains(l.getLngLat())&&t.push(n[p].id)}),a(t)}),()=>{o.current.off("zoomend")}},[n,a,d]),e.jsx("div",{className:"map-wrap",children:e.jsx("div",{ref:f,className:"map"})})};y.propTypes={locationMarker:r.arrayOf(r.shape({id:r.string,location:r.arrayOf(r.number)})).isRequired,getAdvertisement:r.func.isRequired};const S=s.div`
  display: flex;
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  position: relative;
`,q=s.div`
  width: 279px;
  height: calc(100vh - 108px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
  padding: 20px 0 100px 12px;
`,B=s.h3`
  font-weight: 500;
  font-size: 1.125rem;
  max-width: 220px;
`;function W(n){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"}}]})(n)}function G(n){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"}}]})(n)}const H=s.ul``,_=s.li`
  max-width: 240px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 5px 1px #efeeee;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`,D=s.div`
  position: relative;
  width: 240px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,K=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,U=s.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 10px;
  border: none;
  transition: color 250ms ease;

  &:hover,
  :focus {
    color: red;
  }
`,Z=s.div`
  padding: 12px;
`,F=s.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: 1rem;
  margin-bottom: 8px;
`,Q=s.p`
  font-size: 0.875rem;
  color: #404b69;
  margin-bottom: 8px;
`,V=s.p``,X=s.p`
  margin-top: 8px;
  font-size: 0.75rem;
  color: rgba(64, 75, 105, 0.6);
  opacity: 0.6;
`,$=s.p`
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  margin-top: 5px;
`,J=s.p`
  font-size: 0.875rem;
  color: #404b69;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  margin-top: 8px;
`,w=({items:n})=>e.jsx(H,{children:n.map(({city:a,minimal_price_UAH:f,id:o,model_name:c,name:d,rating:i,images:t})=>e.jsxs(_,{children:[e.jsxs(D,{children:[e.jsx(K,{src:t,alt:d}),e.jsx(U,{type:"button",children:e.jsx(G,{})})]}),e.jsxs(Z,{children:[e.jsx(F,{children:d}),e.jsx(Q,{children:c}),e.jsxs(V,{children:["rating ",i]}),e.jsx(X,{children:"Мiнiмальна вартiсть послуги"}),e.jsxs($,{children:[f," грн"]}),e.jsxs(J,{children:[e.jsx(W,{}),a]})]})]},o))});w.propTypes={items:r.arrayOf(r.shape({city:r.string,minimal_price_UAH:r.number,image:r.string,id:r.oneOfType([r.number,r.string]),model_name:r.string,name:r.string,rating:r.number})).isRequired};const Y=()=>{const n=E(a=>a.card.card);return e.jsxs(q,{children:[e.jsxs(B,{children:["Знайдено ",n.length," оголошень на видимій території"]}),e.jsx(w,{items:n})]})},ne=()=>{const n=x(h),a=L(),[f,o]=m.useState([]);m.useEffect(()=>{async function i(){try{const t=await O(N(n,"advertisement"));t.exists()?(o(t.val()),a(g(Object.values(t.val())))):console.log("No data available for advertisement")}catch(t){R.error("Error fetching advertisement",P),console.log("Error fetching advertisement:",t)}}i()},[n,a]);const c=Object.entries(f).map(i=>({location:[i[1].lng,i[1].lat],id:i[0]})),d=m.useCallback(i=>{let t=[];return Array.isArray(i)||(i=[i]),i.forEach(l=>{const p=x(h,`/advertisement/${l}`);I(p,u=>{const C=u.val();t=[...t,C]})}),a(g(t))},[a]);return e.jsx("section",{children:e.jsx(M,{children:e.jsxs(S,{children:[e.jsx(y,{locationMarker:c,getAdvertisement:d}),e.jsx(Y,{})]})})})};export{ne as default};
