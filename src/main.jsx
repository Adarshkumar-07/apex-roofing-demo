import React,{useEffect,useState} from "react";
import{createRoot}from"react-dom/client";
import"./styles.css";

const Arrow=()=> <span className="arrow">↗</span>;
const Check=()=> <span className="check">✓</span>;
const services=[
["01","Roof Repair","Targeted repairs for leaks, damaged shingles, flashing and weather wear."],
["02","Roof Replacement","A complete, carefully planned replacement built around your home and budget."],
["03","Storm Restoration","Fast inspection and restoration after hail, wind and severe weather."]
];
const areas=["Dallas","Plano","Frisco","Richardson","Irving","Garland"];

function App(){
 const[menu,setMenu]=useState(false);
 useEffect(()=>{
  const items=document.querySelectorAll("[data-reveal]");
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
   });
  },{threshold:.12});
  items.forEach((el,i)=>{el.style.setProperty("--delay",`${Math.min(i%5,4)*70}ms`);observer.observe(el);});
  return()=>observer.disconnect();
 },[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 return <div>
 <div className="top"><span>⌖ Serving Dallas & nearby communities</span><span>Mon–Sat · 7:00 AM–7:00 PM</span></div>
 <header><button className="logo" onClick={()=>go("home")}><b className="mark">⌂</b><span><strong>APEX</strong><small>ROOFING CO.</small></span></button>
 <button className="hamb" onClick={()=>setMenu(!menu)}>{menu?"×":"☰"}</button>
 <nav className={menu?"open":""}><button onClick={()=>go("services")}>Services</button><button onClick={()=>go("why")}>Why Apex</button><button onClick={()=>go("process")}>Process</button><button onClick={()=>go("areas")}>Service Area</button><button className="navcta" onClick={()=>go("contact")}>Free Inspection <Arrow/></button></nav></header>

 <main>
 <section id="home" className="hero"><div className="sun"/><div className="grid"/>
 <div className="wrap heroIn"><div className="heroCopy" data-reveal="fade"><label>— LOCAL ROOFING, DONE PROPERLY.</label>
 <h1>Built to weather<br/><i>whatever comes next.</i></h1>
 <p>Dependable roof repair, replacement and storm restoration for Dallas-area homes — with clear estimates and no guesswork.</p>
 <div className="actions"><button className="primary" onClick={()=>go("contact")}>Book a free inspection <Arrow/></button><a href="tel:+12145550182">☎ (214) 555-0182</a></div>
 <div className="proof"><div><span>JR</span><span>ML</span><span>TK</span></div><p><b>Trusted by Dallas homeowners</b><small>5.0 average from local customers</small></p></div></div>
 <div className="illustration" data-reveal="scale"><div className="sky"><div className="cloud c1"/><div className="cloud c2"/><div className="disc"/></div><div className="roof"/><div className="house"><div className="win w1"/><div className="win w2"/><div className="door"/></div><div className="tree t1"/><div className="tree t2"/><div className="grass"/></div>
 </div></section>
 <div className="trust"><span>LICENSED & INSURED</span><b>•</b><span>FREE ESTIMATES</span><b>•</b><span>5-YEAR WORKMANSHIP WARRANTY</span><b>•</b><span>LOCALLY OWNED</span></div>

 <section id="services" className="section"><div className="wrap"><div className="head"><div><label>— WHAT WE DO</label><h2>One roof.<br/><i>Handled properly.</i></h2></div><p>From a small leak to a full replacement, we keep the process straightforward: inspect the problem, explain the options, and do the work right.</p></div>
 <div className="cards">{services.map(s=><article data-reveal="up" key={s[0]}><small>{s[0]}</small><span className="serviceIcon">⌂</span><h3>{s[1]}</h3><p>{s[2]}</p><button onClick={()=>go("contact")}>Explore service <Arrow/></button></article>)}</div></div></section>

 <section id="why" className="split"><div className="blueprint" data-reveal="scale"><div className="plan"><span>ROOF / PLAN / 01</span><div className="planHouse"/></div></div><div className="splitText" data-reveal="up"><label>— WHY APEX</label><h2>Good roofing is<br/><i>quiet confidence.</i></h2><p className="large">You shouldn't have to wonder if the job was done properly. We document the condition of your roof, explain what matters, and leave you with work you can count on.</p>
 <ul><li><Check/><b>Clear estimates.</b> You know what we're fixing and why.</li><li><Check/><b>Clean job sites.</b> We treat your property like our own.</li><li><Check/><b>Built for Texas weather.</b> Materials and methods suited to local conditions.</li></ul><button className="link" onClick={()=>go("process")}>See how we work <Arrow/></button></div></section>

 <section id="process" className="section process"><div className="wrap"><label>— OUR PROCESS</label><h2>No runaround.<br/><i>Just a clear path.</i></h2><div className="steps">{[["01","Inspect","We assess the roof and document what we find."],["02","Explain","You get straightforward options and a written estimate."],["03","Build","Our crew completes the work with care and cleanup."],["04","Stand behind it","Your workmanship warranty starts when the job is complete."]].map(x=><div data-reveal="up"><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>

 <section className="quote"><div className="wrap qin"><span className="qm">“</span><div data-reveal="up"><div className="stars">★★★★★</div><blockquote>Apex found the leak we'd been chasing for months, explained exactly what needed to happen, and left the place cleaner than they found it.</blockquote><small>MARcus G. · LAKE HIGHLANDS, DALLAS</small></div><strong className="rating">5.0<small>LOCAL CUSTOMER RATING</small></strong></div></section>

 <section id="areas" className="section"><div className="wrap areas"><div><label>— WHERE WE WORK</label><h2>Close to home.<br/><i>Ready when needed.</i></h2><p>We serve homeowners throughout Dallas and nearby communities. Not sure if you're in our service area? Give us a call.</p><a href="tel:+12145550182">☎ (214) 555-0182</a></div><div className="areaList">{areas.map((a,i)=><div data-reveal="up" key={a}><small>0{i+1}</small><b>{a}</b><Arrow/></div>)}</div></div></section>

 <section id="contact" className="contact"><div className="wrap contactGrid"><div data-reveal="up"><label>— START HERE</label><h2>Let's take a look<br/><i>at your roof.</i></h2><p>Tell us a little about your home and what you're seeing. We'll get back to you to arrange a no-pressure inspection.</p><a href="tel:+12145550182">☎ (214) 555-0182</a><a href="mailto:hello@apexroofingco.com">↗ hello@apexroofingco.com</a></div>
 <form data-reveal="up" onSubmit={e=>e.preventDefault()}><div className="two"><label>YOUR NAME<input placeholder="Jane Smith"/></label><label>PHONE<input placeholder="(214) 555-0182"/></label></div><label>EMAIL<input type="email" placeholder="jane@example.com"/></label><label>WHAT DO YOU NEED?<select defaultValue=""><option value="" disabled>Select a service</option><option>Roof repair</option><option>Roof replacement</option><option>Storm restoration</option><option>Roof inspection</option></select></label><label>MESSAGE<textarea rows="4" placeholder="Tell us what you're noticing..."/></label><button className="submit">Request my free inspection <Arrow/></button><small>We'll only use your details to respond to your request.</small></form></div></section>
 <a className="mobileCta" href="tel:+12145550182">Call Apex · (214) 555-0182 <Arrow/></a>
 </main>
 <footer><div className="wrap foot"><div className="logo"><b className="mark">⌂</b><span><strong>APEX</strong><small>ROOFING CO.</small></span></div><p>Built above expectations.<br/>Serving Dallas, Texas.</p><div><a href="#services">Services</a><a href="#why">Why Apex</a><a href="#contact">Contact</a></div></div><div className="wrap bottom">© 2026 Apex Roofing Co. — Concept project by Adarsh.</div></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);