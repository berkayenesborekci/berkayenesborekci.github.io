const WEB3FORMS_KEY = '28099a61-5599-47a4-9dd3-76b1f0582cc9';
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const sendBtn = form.querySelector('button');
function setStatus(msg, type) {
  status.textContent = msg;
  status.className = 'form-status ' + (type || '');
}
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  if (!WEB3FORMS_KEY) {
    setStatus('Contact form is not configured yet. Please email me directly.', 'error');
    return;
  }
  const data = Object.fromEntries(new FormData(form));
  data.access_key = WEB3FORMS_KEY;
  data.subject = 'Portfolio message from ' + data.name;
  sendBtn.disabled = true;
  setStatus('Sending...', '');
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.success) {
      form.reset();
      setStatus('Thanks! Your message has been sent.', 'success');
    } else {
      setStatus('Something went wrong. Please try again or email me directly.', 'error');
    }
  } catch (err) {
    setStatus('Network error. Please try again or email me directly.', 'error');
  }
  sendBtn.disabled = false;
});
