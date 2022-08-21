(() => {
  const openFranchiseModalBtn = document.querySelector('.cnt-btn__fr');
  const closeFranchiseModalBtn = document.querySelector('.modal-close-btn-fr');
  const franchiseModal = document.querySelector('[data-modal-fr]');

  const openFranchiseModal = () => {
    franchiseModal.classList.remove('is-hidden');
    bodyScrollLock['disableBodyScroll'](document.body);
  };

  const closeFranchiseModal = () => {
    franchiseModal.classList.add('is-hidden');
    bodyScrollLock['enableBodyScroll'](document.body);
  };

  openFranchiseModalBtn.addEventListener('click', openFranchiseModal);
  closeFranchiseModalBtn.addEventListener('click', closeFranchiseModal);
})();
