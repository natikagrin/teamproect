(() => {
  const openMapModalBtn = document.querySelector('.cnt-btn__loc');
  const closeMapModalBtn = document.querySelector('.modal-close-btn-map');
  const mapModal = document.querySelector('[data-modal-map]');

  const openMapModal = () => {
    mapModal.classList.remove('is-hidden');
    bodyScrollLock['disableBodyScroll'](document.body);
  };

  const closeMapModal = () => {
    mapModal.classList.add('is-hidden');
    bodyScrollLock['enableBodyScroll'](document.body);
  };

  openMapModalBtn.addEventListener('click', openMapModal);
  closeMapModalBtn.addEventListener('click', closeMapModal);
})();
