(() => {
  const openAboutBtn = document.querySelector('[data-about-modal-open]');
  const closeAboutBtn = document.querySelector('[data-about-modal-close]');
  const aboutModal = document.querySelector('[data-about-modal]');

  const openAboutModal = () => {
    aboutModal.classList.remove('is-hidden');
    bodyScrollLock['disableBodyScroll'](document.body);
  };

  const closeAboutModal = () => {
    aboutModal.classList.add('is-hidden');
    bodyScrollLock['enableBodyScroll'](document.body);
  };

  openAboutBtn.addEventListener('click', openAboutModal);
  closeAboutBtn.addEventListener('click', closeAboutModal);
})();
