import{r as d,j as e,u as s,a as C,b as _,c as x,C as M}from"./index-teyth2c4.js";import{P as t,c as g,L as f,M as A,a as R,b as L,r as h,o as I,d as v,e as T,g as k}from"./firebase-config-rFzgnKRD.js";import{G as j}from"./iconBase-4AfL8uZu.js";var P={VITE_API_TEST:"",BASE_URL:"/test_task_luxe_quality",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const S=P.VITE_MAP_API_KEY,b=({locationMarker:n,getAdvertisement:i})=>{const p=d.useRef(null),o=d.useRef(null),c={lng:31.16558,lat:48.379433},[l]=d.useState(5.2);return g.apiKey=S,g.secondaryLanguage=f.FRENCH,g.primaryLanguage=f.UKRAINIAN,d.useEffect(()=>{o.current=new A({container:p.current,style:R.STREETS,center:[c.lng,c.lat],zoom:l});const a=n.map(({location:r,id:u})=>{const m=new L({color:"#ceff7b"}).setLngLat(r).addTo(o.current);return m.getElement().addEventListener("click",()=>i(u)),m});o.current.on("zoomend",()=>{let r=[];a.forEach((u,m)=>{o.current.getBounds().contains(u.getLngLat())&&r.push(n[m].id)}),i(r)})},[c.lng,c.lat,l,n,i]),e.jsx("div",{className:"map-wrap",children:e.jsx("div",{ref:p,className:"map"})})};b.propTypes={locationMarker:t.arrayOf(t.shape({id:t.string,location:t.arrayOf(t.number)})).isRequired,getAdvertisement:t.func.isRequired};const z=s.div`
  display: flex;
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  position: relative;
`,N=s.div`
  width: 279px;
  height: calc(100vh - 108px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  gap: 8px;
  padding: 20px 0 100px 12px;
`,O=s.h3`
  font-weight: 500;
  font-size: 1.125rem;
  max-width: 220px;
`;function B(n){return j({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"}}]})(n)}function D(n){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"}}]})(n)}const q=s.ul``,H=s.li`
  max-width: 240px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 5px 1px #efeeee;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`,K=s.div`
  position: relative;
  width: 240px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,V=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,W=s.button`
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
`,G=s.div`
  padding: 12px;
`,U=s.p`
  font-weight: 500;
  letter-spacing: -0.02em;
  font-size: 1rem;
  margin-bottom: 8px;
`,F=s.p`
  font-size: 0.875rem;
  color: #404b69;
  margin-bottom: 8px;
`,Y=s.p``,Z=s.p`
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
`,y=({items:n})=>e.jsx(q,{children:n.map(({city:i,minimal_price_UAH:p,id:o,model_name:c,name:l,rating:a,images:r})=>e.jsxs(H,{children:[e.jsxs(K,{children:[e.jsx(V,{src:r,alt:l}),e.jsx(W,{type:"button",children:e.jsx(D,{})})]}),e.jsxs(G,{children:[e.jsx(U,{children:l}),e.jsx(F,{children:c}),e.jsxs(Y,{children:["rating ",a]}),e.jsx(Z,{children:"Мiнiмальна вартiсть послуги"}),e.jsxs($,{children:[p," грн"]}),e.jsxs(J,{children:[e.jsx(B,{}),i]})]})]},o))});y.propTypes={items:t.arrayOf(t.shape({city:t.string,minimal_price_UAH:t.number,image:t.string,id:t.oneOfType([t.number,t.string]),model_name:t.string,name:t.string,rating:t.number})).isRequired};const Q=()=>{const n=C(i=>i.card.card);return e.jsxs(N,{children:[e.jsxs(O,{children:["Знайдено ",n.length," оголошень на видимій території"]}),e.jsx(y,{items:n})]})},re=()=>{const n=h(v),i=_(),[p,o]=d.useState([]);d.useEffect(()=>{async function a(){try{const r=await k(T(n,"advertisement"));r.exists()?(o(r.val()),i(x(Object.values(r.val())))):console.log("No data available for advertisement")}catch(r){console.error("Error fetching advertisement:",r)}}a()},[n,i]);const c=Object.entries(p).map(a=>({location:[a[1].lng,a[1].lat],id:a[0]})),l=d.useCallback(a=>{let r=[];return Array.isArray(a)||(a=[a]),a.forEach(u=>{const m=h(v,`/advertisement/${u}`);I(m,w=>{const E=w.val();r=[...r,E]})}),i(x(r))},[i]);return e.jsx("section",{children:e.jsx(M,{children:e.jsxs(z,{children:[e.jsx(b,{locationMarker:c,getAdvertisement:l}),e.jsx(Q,{})]})})})};export{re as default};
