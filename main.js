// BLOOM Coffee & Bar — spoločné správanie navigácie a animácií
document.addEventListener('DOMContentLoaded', () => {
  const hdr = document.getElementById('hdr');
  const solid = hdr && hdr.dataset.solid === 'true';
  if (hdr && !solid) {
    window.addEventListener('scroll', () =>
      hdr.classList.toggle('scrolled', window.scrollY > 60));
  }
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('open')));
  }
  const io = new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
