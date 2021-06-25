/* Menu ativo conforme a secao visivel na pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.remove('show')
  }
}

/* Animação vindo da direita */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '-10px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image , #home .text,
#about .image, #about .text,
#services header, #services .card, 
#testimonials header,
#contact .text , #contact .links
footer .brand, footer .social
`,
  { interval: 100 }
)

/* abre e fecha o menu qnado clica no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar no link ele fecha */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* header nav sombra ao deslizar */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeMeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials Swipe.js : Slider-Carousel */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

window.addEventListener('scroll', function () {
  changeMeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
