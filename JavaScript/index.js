function toggleFooter() {
    var footer = document.querySelector('.footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  }
  
  window.addEventListener('scroll', toggleFooter);