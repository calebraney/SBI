import barba from '@barba/core';
import SplitType from 'split-type';

console.log('dev loaded');

//////////////////////////////
// Global Variables

// define variable for global use
let typeSplit;
let scroller;
let items;
//GSAP Selectors
const SCROLL_TEXT = '[gsap-scroll="text"]';
// Barba JS Global Variables
const ACTIVE_CLASS = 'active-flip-item';
const PROJECT_NAME = '[data-barba="project-name"]';
const PROJECT_TITLE = '[data-barba="project-title"]';
const PROJECT_IMAGE = '[data-barba="project-image"]';
const PROJECT_IMAGE_WRAP = '[data-barba="project-image-wrap"]';

//////////////////////////////
// GSAP Animations
function runSplit() {
  typeSplit = new SplitType(SCROLL_TEXT, {
    types: 'lines, words',
  });
}

const textScrollIn = function () {
  items = document.querySelectorAll(SCROLL_TEXT);
  items.forEach((item) => {
    const words = item.querySelectorAll('.word');
    if (words.length === 0) return;
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: 'power2.out',
      },
    });
    tl.from(words, {
      opacity: 0,
      yPercent: -50,
      stagger: { each: 0.05, from: 'end' },
    });
    scroller = ScrollTrigger.create({
      trigger: item,
      animation: tl,
      start: 'top 15%',
      end: 'top 20%',
      toggleActions: 'play none none restart',
    });
    console.log(scroller);
  });
};

// Run these scripts on page reset
const pageReset = function () {
  //GSAP Animations
  textScrollIn();
  // gsap media query will only run on desktop
  mm.add('(min-width: 992px)', () => {
    setNavbar(data.next.container);
    return () => {};
  });
  // Update on window resize
  let windowWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth !== windowWidth) {
      windowWidth = window.innerWidth;
      //input code you want run after the browser width is changed
      console.log(typeSplit);
      typeSplit.revert();
      runSplit();
    }
  });
};

//////////////////////////////
// Other Functions

const setNavbar = function (pageWrap) {
  const navbar = pageWrap.querySelector('.navbar_component');
  let isTransparent;
  if (navbar.getAttribute('navbar-light') === 'true') {
    isTransparent = true;
  } else {
    isTransparent = false;
  }
  if (isTransparent) {
    document.addEventListener('scroll', (event) => {
      if (window.scrollY !== 0) {
        navbar.setAttribute('navbar-light', 'false');
      }
      if (window.scrollY === 0) {
        navbar.setAttribute('navbar-light', 'true');
      }
    });
  }
};

//////////////////////////////
// Barba JS Page transitions

//Create Scripts
function appendScript(url) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.head.append(script);
  //or try data.next.container
}

// Create Finsweet CMS filter scripts
function appendCMSFilters() {
  appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js');
  appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsnest@1/cmsnest.js');
  appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js');
}

// Default Page Transition
function defaultTransition(data) {
  data.next.container.classList.add('fixed');
  gsap.to(data.current.container, { opacity: 0, duration: 1, ease: 'power1.in' });
  return gsap.from(data.next.container, { opacity: 0, duration: 1, ease: 'power1.in' });
}

// Reset Webflow
function resetWebflow(data) {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let webflowPageId = dom.querySelector('html').getAttribute('data-wf-page');
  document.documentElement.setAttribute('data-wf-page', webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
}

function makeItemActive(data) {
  // Get the name of the project
  const cmsPageName = data.next.container.querySelector(PROJECT_NAME).textContent;
  // If name of the project matches, add active class
  document.querySelectorAll('.w-dyn-item').forEach((item) => {
    if (
      item.querySelector(PROJECT_NAME) &&
      item.querySelector(PROJECT_NAME).textContent === cmsPageName
    ) {
      item.classList.add(ACTIVE_CLASS);
    }
  });
}

function flipProjectImage(outgoingWrap, incomingWrap) {
  //get elements
  const outgoingImage = outgoingWrap.querySelector(PROJECT_IMAGE);
  const incomingImage = incomingWrap.querySelector(PROJECT_IMAGE);
  //guard clause
  if ((!outgoingImage, !incomingImage)) return;
  //set state for flip
  let state = Flip.getState(outgoingImage);
  //move image
  incomingWrap.insertAdjacentElement('beforeend', outgoingImage);
  incomingImage.remove();
  Flip.from(state, { duration: 0.8, ease: 'power2.inOut' });
}

//Hooks
barba.hooks.once((data) => {
  pageReset();
});
barba.hooks.beforeEnter((data) => {
  pageReset();
});
// Run after each page transition
barba.hooks.afterEnter((data) => {
  window.scrollTo(0, 0);
  pageReset();
});
barba.hooks.after((data) => {
  data.next.container.classList.remove('fixed');
  //remove active class
  document.querySelectorAll(`.${ACTIVE_CLASS}`).forEach((item) => {
    item.classList.remove(ACTIVE_CLASS);
  });
  window.scrollTo(0, 0);
  resetWebflow(data);
});

barba.init({
  preventRunning: true,
  transitions: [
    {
      // General Page Transition
      sync: true,
      name: 'opacity-transition',
      enter(data) {
        defaultTransition(data);
      },
    },
    {
      // To Project Page
      sync: true,
      name: 'to-project',
      from: { namespace: ['home', 'work', 'project'] },
      to: { namespace: ['project'] },
      enter(data) {
        makeItemActive(data);
        data.next.container.classList.add('fixed');
        flipProjectImage(
          data.current.container.querySelector(`.${ACTIVE_CLASS} ${PROJECT_IMAGE_WRAP}`),
          data.next.container.querySelector(PROJECT_IMAGE_WRAP)
        );
        gsap.from(data.next.container.querySelector(PROJECT_TITLE), {
          opacity: 0,
          y: '2rem',
          ease: 'power2.Out',
          duration: 0.6,
        });
        gsap.from(data.next.container.querySelector('.case-overview_component'), {
          opacity: 0,
          y: '2rem',
          ease: 'power2.Out',
          delay: 0.2,
          duration: 0.6,
        });
        return gsap.to(data.current.container, { opacity: 0, duration: 0.8 });
      },
    },
    {
      // Home Page Transition
      sync: true,
      to: { namespace: ['home'] },
      once(data) {
        appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsslider@1/cmsslider.js');
      },
      enter(data) {
        defaultTransition(data);
      },
      after(data) {
        appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsslider@1/cmsslider.js');
      },
    },
    {
      // Work Page Transition
      sync: true,
      to: { namespace: ['work'] },
      once(data) {
        appendCMSFilters();
      },
      enter(data) {
        defaultTransition(data);
      },
      after(data) {
        appendCMSFilters();
      },
    },
    {
      // Blog Page Transition
      sync: true,
      to: { namespace: ['blog'] },
      once(data) {
        appendCMSFilters();
      },
      enter(data) {
        defaultTransition(data);
      },
      after(data) {
        appendCMSFilters();
      },
    },
  ],
});
