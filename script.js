const nav = document.getElementById('nav');
document.getElementById('menuToggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

let currentLang = 'en';
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'bn' : 'en';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-en][data-bn]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
  document.getElementById('langToggle').textContent = currentLang === 'en' ? 'বাংলা' : 'English';
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = new FormData(this);
  const lines = [
    'Solar enquiry for M/S BISWAS ENTERPRISE',
    'Name: ' + (form.get('name') || ''),
    'Phone: ' + (form.get('mobile') || ''),
    'District / town: ' + (form.get('district') || ''),
    'Interested system size: ' + (form.get('capacity') || 'Not sure'),
    'Message: ' + (form.get('message') || 'Not provided')
  ];
  const whatsappUrl = 'https://wa.me/919734807197?text=' + encodeURIComponent(lines.join('\n'));
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});