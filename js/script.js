'use strict';

const app = {};

// make navbar color dark when scroll down
app.navScroll = function () {
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  // console.log(navbarHeight);
  document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > navbarHeight) {
      navbar.classList.add('navbar--dark');
    } else {
      navbar.classList.remove('navbar--dark');
    }
  });
};

// selector function
app.scrollSelector = function (item) {
  const scrollTo = document.querySelector(item);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  app.intersection.selectNavItem(app.intersection.navItems[app.intersection.sectionId.indexOf(item)]);
};

// scroll into each sections when navbar is clicked
app.scrollPage = function () {
  const navbarMenu = document.querySelector('.navbar__menu');
  navbarMenu.addEventListener('click', (e) => {
    const target = e.target;
    const link = target.dataset.link;
    if (link === null) {
      return;
    }
    navbarMenu.classList.remove('show');
    app.scrollSelector(link);
    app.intersection.selectNavItem(target);
  });
};

// scroll into contact section when home button is clicked 
app.scrollContact = function () {
  const btn = document.querySelector('.home__button');
  btn.addEventListener('click', () => {
    app.scrollSelector('#contact');
  });
};

// change home section's content opacity when scroll down
app.homeTransparent = function () {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll', () => {
    // console.log(homeHeight);
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = (1 - window.scrollY / homeHeight);
  })
}

// show arrow up button when scroll down
app.arrowBtn = function () {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  const arrowUp = document.querySelector('.arrow__up')
  document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
      arrowUp.classList.add('arrow__up--show');
    } else {
      arrowUp.classList.remove('arrow__up--show');
    }
  });
};

// scroll up when arrow up button is clicked 
app.arrowBtnHandle = function () {
  const arrowUp = document.querySelector('.arrow__up');
  arrowUp.addEventListener('click', () => {
    app.scrollSelector('#home');
  });
};

// projects part
app.project = function () {
  const workContainer = document.querySelector('.work__categories');
  const projectContainer = document.querySelector('.work__projects');
  const projects = document.querySelectorAll('.project');
  workContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter === null) {
      return;
    }
    // remove active button state
    const active = document.querySelector('.work__button.work__active');
    active.classList.remove('work__active');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('work__active');

    // add animation and filtering
    projectContainer.classList.add('work__projects--animation');
    setTimeout(() => {
      projects.forEach(item => {
        if (filter === 'all' || filter === item.dataset.type) {
          item.classList.remove('project--hidden');
        } else {
          item.classList.add('project--hidden');
        }
      });
      projectContainer.classList.remove('work__projects--animation');
    }, 300);
  });
};

// scroll to home when logo is clicked 
app.logoHandle = function () {
  const logo = document.querySelector('.navbar__logo');
  logo.addEventListener('click', () => {
    app.scrollSelector('#home');
  });
};

// navbar display in mobile view 
app.navbarDisplay = function () {
  const toggleBtn = document.querySelector('.navbar__togglebtn');
  toggleBtn.addEventListener('click', () => {
    // console.log('click');
    const menu = document.querySelector('.navbar__menu');
    menu.classList.toggle('show');
  });
};

// intersection 
app.intersection = function () {
  const sectionId = ['#home', '#about', '#skills', '#work', '#contact'];
  const sections = sectionId.map(id => document.querySelector(id));
  const navItems = sectionId.map(id => document.querySelector(`[data-link="${id}"]`));
  // console.log(navItems);
  this.intersection.navItems = navItems;
  this.intersection.sectionId = sectionId;

  const selectNavItem = function (selected) {
    selectedNavItem.classList.remove('navbar__active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('navbar__active');
  }
  this.intersection.selectNavItem = selectNavItem;

  let selectedNavIndex = 0;
  let selectedNavItem = navItems[0];
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  const callback = (entries, observer) => {
    entries.forEach(item => {
      // console.log(item.target);
      if (!item.isIntersecting && item.intersectionRatio > 0) {
        const index = sectionId.indexOf(`#${item.target.id}`);
        // console.log(index, item.target.id);
        if (item.boundingClientRect.y < 0) {
          selectedNavIndex = index + 1;
        } else {
          selectedNavIndex = index - 1;
        }
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  sections.forEach(item => observer.observe(item));

  window.addEventListener('wheel', () => {
    if (window.scrollY === 0) {
      selectedNavIndex = 0;
    } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
      selectedNavIndex = navItems.length - 1;
    }
    selectNavItem(navItems[selectedNavIndex]);
  })
};

// call functions
app.init = function () {
  // AOS.init({ disable: 'mobile' });
  // AOS.init();
  app.navScroll();
  app.scrollPage();
  app.scrollContact();
  app.homeTransparent();
  app.arrowBtn();
  app.arrowBtnHandle();
  app.project();
  app.logoHandle();
  app.navbarDisplay();
  app.intersection();
};

app.init();
