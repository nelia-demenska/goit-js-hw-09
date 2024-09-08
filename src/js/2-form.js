let formData = {
email: "",
message: ""
};

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
formData = JSON.parse(savedData);

document.querySelector('input[name="email"]').value = formData.email || '';
document.querySelector('textarea[name="message"]').value = formData.message || '';
}

document.querySelector('.feedback-form').addEventListener('input', (event) => {
formData[event.target.name] = event.target.value.trim();

localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
event.preventDefault();

if (!formData.email || !formData.message) {
alert('Fill please all fields');
return;
}

console.log(formData);

localStorage.removeItem('feedback-form-state');
formData = { email: "", message: "" };
event.target.reset();
});