import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form");e.addEventListener("input",m);e.addEventListener("submit",s);//! === SIMPLE ===
const t=JSON.parse(localStorage.getItem("feedback-form-state"))??{email:"",message:""};e.elements.message.value=t.message;e.elements.email.value=t.email;function m(a){let l=a.target.name;t[l]=a.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}function s(a){a.preventDefault(),e.elements.message.value===""||e.elements.email.value===""?alert("Fill please all fields"):(console.log(JSON.stringify(t)),localStorage.removeItem("feedback-form-state"),e.reset(),t.message="",t.email="")}//! === SCALABLE === (the number and names of text fields is unknown)
//# sourceMappingURL=commonHelpers2.js.map
