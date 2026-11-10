// Hours: [open, close] in 24h, index 0 = Sunday
const hours=[[8,16],[7,18],[7,18],[7,18],[7,18],[7,20],[8,20]];
const el=document.getElementById("status");
if(el){const n=new Date(),[o,c]=hours[n.getDay()],h=n.getHours()+n.getMinutes()/60;
 const open=h>=o&&h<c;el.classList.toggle("open",open);
 el.querySelector("span:last-child").textContent=open?`Open now, until ${c>12?c-12:c} ${c>=12?"pm":"am"}`:"Closed right now";}
const f=document.getElementById("contact");
if(f)f.addEventListener("submit",e=>{e.preventDefault();f.reset();document.getElementById("ok").style.display="block";});
