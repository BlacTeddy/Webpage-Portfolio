function loadComponent(selector, url, callback) {
  const target = document.querySelector(selector);
  if (!target) return;

  fetch(url)
    .then(res => res.text())
    .then(html => {
      target.innerHTML = html;
      if (typeof callback === "function") callback();
    });
}

loadComponent('[data-component="nav"]', './components/nav.html', initNav);
loadComponent('[data-component="footer"]', './components/footer.html', initFooter);
loadComponent('[data-component="head"]', './components/head.html');
loadComponent('[data-component="float"]', './components/float.html');

// loadComponent("nav", "components/nav.html", initNav);
// loadComponent("footer", "components/footer.html", initFooter);
// loadComponent("head", "components/head.html");

// NAV BAR FUNCTION
function initNav() {
  const mobileBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileBtn || !mobileMenu) return;
    
  mobileBtn.addEventListener('click', () => {
    const isOpen = mobileBtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
  });

    const mobileLinks = document.querySelectorAll('.mobile-nav-link'); 
    mobileLinks.forEach(link => { 
      link.addEventListener('click', () => { 
        mobileBtn.classList.remove('is-open'); 
        mobileMenu.classList.remove('is-open'); 
      }); 
    }); 
   // Make it available globally if needed 
    // window.initNav = initNav;

  // if (mobileBtn && mobileMenu) {
  //   mobileBtn.addEventListener("click", () => {
  //     mobileMenu.classList.toggle("hidden");
  //   });
  // }
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("underline", "font-semibold");
    }
  });

    // CUSTOM STICKY HEADER
  function handleStickyHeader() {
    const header = document.getElementById("site-header");
    if (!header) return;

    if (window.scrollY > 10) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  }
  window.addEventListener("scroll", handleStickyHeader);
  handleStickyHeader(); // run once on load
}


// FOOTER FUNCTION
function initFooter() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* prompt
can we change header: from fixed  to sticky 
how can we incorpate your nav.js and loadComponents.js into my loadComponents.js:
*/

/*
//////////////////////////////////////////////////////////////////////////
// JS/NAV.JS
document.addEventListener('DOMContentLoaded', () => {                   //
  const mobileButton = document.getElementById('menu-btn');             //
  const mobileMenu = document.getElementById('mobile-menu');            //
                                                                        //
  if (!mobileButton || !mobileMenu) return;                             //
                                                                        //
  mobileButton.addEventListener('click', () => {                        // 
    const isOpen = mobileButton.classList.toggle('is-open');            //
    if (isOpen) {                                                       //
      mobileMenu.classList.add('is-open');                              //
    } else {                                                            //
      mobileMenu.classList.remove('is-open');                           //
    }                                                                   //
  });                                                                   //
  // Optional: close menu when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');    //
  mobileLinks.forEach(link => {                                         //
    link.addEventListener('click', () => {                              //
      mobileButton.classList.remove('is-open');                         //
      mobileMenu.classList.remove('is-open');                           //
    });                                                                 //
  });                                                                   //
});                                                                     //
//////////////////////////////////////////////////////////////////////////
*/