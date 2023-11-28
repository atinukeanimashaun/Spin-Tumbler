/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/* SCROLLHEARER */
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') 
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER */
  let swipercollection = new Swiper(".collection--container", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')
        const el =  document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          if(el){
            el.classList.add('active-link')
          }
            
        }else{
          if(el){
            el.classList.remove('active-link')
          }
            
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)