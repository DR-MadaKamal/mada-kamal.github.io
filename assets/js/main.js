// language switcher
const btnAr = document.getElementById('btn-ar');
const btnEn = document.getElementById('btn-en');
const els = document.querySelectorAll('[data-ar]');

function setLang(lang){
  if(lang === 'ar'){
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    btnAr.classList.add('active');
    btnEn.classList.remove('active');
  } else {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    btnEn.classList.add('active');
    btnAr.classList.remove('active');
  }
  els.forEach(el => {
    el.textContent = el.getAttribute(lang === 'ar' ? 'data-ar' : 'data-en');
  });
  // adjust fonts for english headings if needed
  if(lang === 'en'){
    document.querySelectorAll('h1, .name').forEach(h => h.style.fontFamily = 'Anton, sans-serif');
  } else {
    document.querySelectorAll('h1, .name').forEach(h => h.style.fontFamily = 'Anton, "Cairo", sans-serif');
  }
  // save preference
  localStorage.setItem('site_lang', lang);
}

btnAr.addEventListener('click', ()=> setLang('ar'));
btnEn.addEventListener('click', ()=> setLang('en'));

// init
const saved = localStorage.getItem('site_lang') || 'ar';
setLang(saved);

document.getElementById('year').textContent = new Date().getFullYear();
