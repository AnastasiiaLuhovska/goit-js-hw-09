import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const m=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(l){console.log(`You have an error ${l}`)}},s=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(`You have an error ${t}`)}},a={email:"",message:""},r="feedback-form-state",o=document.querySelector(".feedback-form"),n=()=>{if(!s(r))return;const e=s(r);o.elements.email.value=e.email,o.elements.message.value=e.message,a.email=e.email,a.message=e.message};n();const c=e=>{a[e.target.name]=e.target.value,m(r,a)};o.addEventListener("input",c);const g=e=>{e.preventDefault();const{email:t,message:l}=e.target.elements;if(!t.value.trim()||!l.value.trim())return alert("Fill please all fields");a.email=t.value,a.message=l.value,console.log(a),e.target.reset(),localStorage.removeItem(r),a.email="",a.message=""};o.addEventListener("submit",g);
//# sourceMappingURL=2-form.js.map
