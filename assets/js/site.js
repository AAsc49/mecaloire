// Menu mobile et repli si une image manque
document.addEventListener('DOMContentLoaded', () => {
  const b = document.querySelector('.burger'), n = document.getElementById('nav');
  if (b && n) b.addEventListener('click', () => {
    const o = n.classList.toggle('ouvert');
    b.setAttribute('aria-expanded', o);
  });
  document.querySelectorAll('img').forEach(img => {
    const ko = () => {
      const brand = img.closest('.brand');
      if (brand) brand.classList.add('sans-logo');
      img.remove();
    };
    if (img.complete && img.naturalWidth === 0) ko(); else img.addEventListener('error', ko);
  });
  document.querySelectorAll('[data-fond]').forEach(el => {
    const t = new Image();
    t.onload = () => { el.style.backgroundImage = `url("${el.dataset.fond}")`; };
    t.src = el.dataset.fond;
  });
});
