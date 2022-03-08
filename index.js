let button = document.querySelector('.back_to_top')

window.addEventListener('scroll', trackScroll)
button.addEventListener('click', backToTop)

function trackScroll() {
    let scrolled = window.pageYOffset
    let coords = document.documentElement.clientHeight

    if (scrolled > coords) {
      button.classList.add('back_to_top_show')
    }
    if (scrolled < coords) {
      button.classList.remove('back_to_top_show')
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -50);
      setTimeout(backToTop, 0);
    }
  }