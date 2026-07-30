// Nav toggle for mobile
  const toggle = document.getElementById('navToggle');
  const legend = document.getElementById('legend');
  toggle.addEventListener('click', () => legend.classList.toggle('open'));
  legend.querySelectorAll('a').forEach(a => a.addEventListener('click', () => legend.classList.remove('open')));

  // Trigger skill-chart bar animation once, shortly after load
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      setTimeout(() => document.getElementById('skillchart').classList.add('play'), 200);
    });
  });