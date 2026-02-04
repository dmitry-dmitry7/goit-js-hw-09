const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
let formData = { email: "", message: "" };

const savedForm = localStorage.getItem(localStorageKey) ?? "";
// console.log(savedForm);
if (savedForm != "") {
  formData.email = JSON.parse(savedForm).email;
  formData.message = JSON.parse(savedForm).message;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
  
}

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
  
  const feedForm = event.target.form;
  // console.log(event);
  const email = feedForm.elements.email.value;
  const message = feedForm.elements.message.value;

  formData = {
    email: email.trim(),
    message: message.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));  
  // console.log(formData);
  
}

function handleSubmit(event) {
  event.preventDefault();
  // console.log(event.target);

  if (formData.email === "" || formData.message === "") {
    return window.alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
    
}