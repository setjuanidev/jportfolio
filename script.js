window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('alertModal');
  const closeBtn = document.getElementById('closeAlert');

  // Mostrar al cargar la pag
    modal.classList.add('show');

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});
