/*================MENU SHOW============ */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close')

      /*==============MENU SHOW============== */
      if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })

      }

      if(navToggle){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })

      }

      /*===========REMOVE MENu MOBILE============== */
      
      const navLink = document.querySelectorAll('.nav_link')

           function linkAction(){
           const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
           navMenu.classList.remove('show-menu')
         }
           navLink.forEach(n => n.addEventListener('click', linkAction))

        const skillsContent = document.getElementsByClassName("skills_content");
        const skillsHeader = document.querySelectorAll(".skills_header");

        skillsHeader.forEach((el) => {
             el.addEventListener("click", (e) => {
                    e.stopPropagation();
        for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].classList.remove("skills_open");
        skillsContent[i].classList.add("skills_close");
        }
        el.parentElement.classList.add("skills_open");
        });
     });

       /*           ============================== QUALIFICATION TABS ================================== */
       const tabs = document.querySelectorAll('[data-target]'),
             tabContents = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', ()=>{
                const target = document.querySelector(tab.dataset.target)

                tabContents.forEach(tabContent =>{
                    tabContent.classList.remove('qualification_active')
                })
                target.classList.add('qualification_active')
                tabs.forEach(tab =>{
                    tab.classList.remove('qualification_active')
                })

                tab.classList.add('qualification_active')
            })
        })

               /*           ============================== SERVICES MODAL ================================== */

               const modalViews = document.querySelectorAll('.services_modal'),
                     modalBtns = document.querySelectorAll('.services_button'),
                     modalCloses = document.querySelectorAll('.services_modal-close')

                let modal = function(modalClick){
                    modalViews[modalClick].classList.add('active-modal')
                }

                    modalBtns.forEach((modalBtn, i) => {
                modalBtn.addEventListener('click', () => {
                    modal(i)
                })
            })

                modalCloses.forEach((modalCloses) => {
                     modalCloses.addEventListener('click', () =>{
                     modalViews.forEach((modalView) =>{
                     modalView.classList.remove('active-modal')
                })
            })
        })


        /*============================ PORTFOLIO SWIPER ============================== */
         const swiper = new Swiper('.portfolio_container', {
              // Optional parameters
       
              loop: true,

              // If we need pagination
              pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
             },

             // Navigation arrows
             navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
             },
     
        });

        /*================================== SCROLL SECTION ACTIVE LINK ====================== */
        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
         const scrollY = window.pageYOffset

        sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
           })
        }
         window.addEventListener('scroll', scrollActive)

         /*==================== CHANGE BACKGROUND HEADER ======================= */
         function scrollHeader(){
         const nav = document.getElementById('header')
         // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
          if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
        }
         window.addEventListener('scroll', scrollHeader)

         /*========================== SHOW SCROLL UP ====================== */
        function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
         // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
         if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
        }
        window.addEventListener('scroll', scrollUp)

        /*======================================== DARK LIGHT THEME ========================== */
        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme = 'uil-sun'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

        if(selectedTheme){
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
            themeButton.classList[selectedIcon ===  'uil-moon' ? 'add' : 'remove'](iconTheme)
        }

        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())

        })





