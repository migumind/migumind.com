// JavaScript for Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('email-form');
  const purchaseButtons = document.querySelectorAll('.purchase-btn');
  const closeModal = document.querySelector('.close-btn');

  purchaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
