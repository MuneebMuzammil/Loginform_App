const firstname=document.getElementById("firstname");
const lastname=document.getElementById("lastname");
const password=document.getElementById("password");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const address=document.getElementById("address");
const city=document.getElementById("city");
const button=document.getElementById("button");

button.addEventListener("click", () => {
  const fname = firstname.value;
  localStorage.setItem("firstname", fname);
  console.log(fname);

  const lname = lastname.value;
  localStorage.setItem("lastname", lname);
  console.log(lname);

  const psd = password.value;
  localStorage.setItem("password", psd);
  console.log(psd);

  const eml=email.value;
  localStorage.setItem("email",eml);
  console.log(eml);

  const phn=phone.value;
  localStorage.setItem("phone",phn);
  console.log(phn);

  const adrs=address.value;
  localStorage.setItem("address",adrs);
  console.log(adrs);

  const cty=city.value;
  localStorage.setItem("city",cty)
  console.log(cty); 

});

alert("Hello from script.js!");