import barba from '@barba/core';
import SplitType from 'split-type';
import { CountUp } from 'countup.js';

//////////////////////////////
// Global Variables

// define variable for global use
let typeSplit;
let scroller;
let mm = gsap.matchMedia();
//GSAP Selectors
const LOAD_H1 = '[gsap-load="h1"]';
const LOAD_EL = '[gsap-load="el"]';
const SCROLL_HEADING = '[gsap-scroll="heading"]';
const SCROLL_EL = '[gsap-scroll="el"]';
const SCROLL_CONTAINER = '[gsap-scroll="container"]';
const SCROLL_LINE = '[gsap-scroll="line"';
const SCROLL_NUMBER = '[gsap-scroll="number"';
const SCROLL_REFRESH = '[scrolltrigger-refresh]';
// Barba JS Global Variables
const ACTIVE_CLASS = 'active-flip-item';
const PROJECT_NAME = '[data-barba="project-name"]';
const PROJECT_TITLE = '[data-barba="project-title"]';
const PROJECT_IMAGE = '[data-barba="project-image"]';
const PROJECT_IMAGE_WRAP = '[data-barba="project-image-wrap"]';

//////////////////////////////
// GSAP Animations

//split text utility
const runSplit = function (text) {
  typeSplit = new SplitType(text, {
    types: 'lines, words',
  });
  return typeSplit;
};
const scrollTL = function (item, toggleDefault = 'play none none none', scrubDefault = true) {
  //get attribute and give it a default type to use as a format guide and backup in case of invalid value
  let toggleSetting = attr(toggleDefault, item.getAttribute('gsap-toggle-actions'));
  let scrubSetting = attr(scrubDefault, item.getAttribute('gsap-scrub'));
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: 'top 90%',
      end: 'top 75%',
      toggleActions: scrubSetting ? 'none none none none' : toggleSetting,
      scrub: scrubSetting ? 0.5 : false,
    },
  });
  return tl;
};

//set global interaction defaults
gsap.defaults({
  duration: 0.6,
  ease: 'power1.out',
});
// ScrollTrigger.defaults({
//   start: 'top 90%',
//   end: 'top 75%',
//   markers: false,
//   scrub: 0.5,
// });

const loadHeader = function (data) {
  const h1 = data.next.container.querySelector(LOAD_H1);
  const elements = data.next.container.querySelectorAll(LOAD_EL);
  const splitText = runSplit(h1);
  if (!h1) return;
  const tl = gsap.timeline({});
  tl.set(h1, { opacity: 1 });
  tl.from(splitText.words, {
    opacity: 0,
    y: '2rem',
    stagger: { each: 0.05, from: 'start' },
  });
  tl.fromTo(
    elements,
    {
      opacity: 0,
      y: '2rem',
    },
    {
      opacity: 1,
      y: '0rem',
      stagger: { each: 0.2, from: 'start' },
    },
    '-=.6'
  );
};

const scrollHeading = function (data) {
  const items = data.next.container.querySelectorAll(SCROLL_HEADING);
  items.forEach((item) => {
    item.style.opacity = 1;
    const splitText = runSplit(item);
    if (!splitText) return;
    const tl = scrollTL(item);
    tl.fromTo(
      splitText.words,
      {
        opacity: 0,
        y: '2rem',
      },
      {
        opacity: 1,
        y: '0rem',
        stagger: { each: 0.2, from: 'start' },
      }
    );
  });
};

const scrollFade = function (data) {
  const items = data.next.container.querySelectorAll(SCROLL_EL);
  items.forEach((item) => {
    item.style.opacity = 1;
    if (!item) return;
    const tl = scrollTL(item);
    tl.fromTo(
      item,
      {
        opacity: 0,
        y: '2rem',
      },
      {
        opacity: 1,
        y: '0rem',
      }
    );
  });
};

const scrollContainer = function (data) {
  const items = data.next.container.querySelectorAll(SCROLL_CONTAINER);
  items.forEach((item) => {
    const children = gsap.utils.toArray(item.children);
    if (children.length === 0) return;
    const tl = scrollTL(item);
    tl.fromTo(
      children,
      {
        opacity: 0,
        y: '2rem',
      },
      {
        opacity: 1,
        y: '0rem',
        stagger: { each: 0.2, from: 'start' },
      }
    );
  });
};

const scrollLine = function (data) {
  const items = data.next.container.querySelectorAll(SCROLL_LINE);
  items.forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        scrub: false,
        toggleActions: 'play none none none',
      },
    });
    tl.fromTo(
      item,
      {
        width: '0%',
      },
      {
        width: '100%',
        duration: 1,
        ease: 'power2.out',
      }
    );
  });
};

// add event listeners to any items that change page height.
const scrollRefresh = function (data) {
  const items = data.next.container.querySelectorAll(SCROLL_REFRESH);
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      ScrollTrigger.refresh();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 800);
    });
  });
};

const setNavbar = function (pageWrap, isDesktop) {
  const navbar = pageWrap.querySelector('.navbar_component');
  let isTransparent;

  if (navbar.getAttribute('navbar-transparent') === 'true') {
    isTransparent = true;
  } else {
    isTransparent = false;
  }
  if (isTransparent && isDesktop) {
    if (window.scrollY === 0 && isTransparent && isDesktop) {
      navbar.setAttribute('navbar-light', 'true');
    }
    document.addEventListener('scroll', (event) => {
      if (window.scrollY !== 0 && isTransparent && isDesktop) {
        navbar.setAttribute('navbar-light', 'false');
      }
      if (window.scrollY === 0 && isTransparent && isDesktop) {
        navbar.setAttribute('navbar-light', 'true');
      }
    });
  } else {
    navbar.setAttribute('navbar-light', 'false');
  }
};

//////////////////////////////
// Other Functions

const countUp = function (data) {
  const items = data.next.container.querySelectorAll(SCROLL_NUMBER);
  items.forEach((item) => {
    const number = +item.textContent;
    if (!number || Number.isNaN(number)) return;
    const countUp = new CountUp(item, number, {
      useGrouping: false,
      duration: 3.0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'top 10%',
        scrub: 1,
        onEnter: () => {
          countUp.start();
        },
      },
    });
  });
};

// attribute value checker
const attr = function (defaultVal, attrVal) {
  const defaultValType = typeof defaultVal;
  if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
  if (attrVal === 'true' && defaultValType === 'boolean') return true;
  if (attrVal === 'false' && defaultValType === 'boolean') return false;
  if (isNaN(attrVal) && defaultValType === 'string') return attrVal;
  if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal;
  return defaultVal;
};

// Run these scripts on page reset
const gsapInit = function (data) {
  mm.add(
    {
      //This is the conditions object
      isMobile: '(max-width: 767px)',
      isTablet: '(min-width: 768px)  and (max-width: 991px)',
      isDesktop: '(min-width: 992px)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      let { isMobile, isTablet, isDesktop, reduceMotion } = context.conditions;
      loadHeader(data);
      scrollHeading(data);
      scrollFade(data);
      scrollContainer(data);
      scrollLine(data);
      scrollRefresh(data);
      setNavbar(data.next.container, isDesktop);
    }
  );
};

// Update on window resize
let windowWidth = window.innerWidth;
window.addEventListener('resize', function () {
  if (window.innerWidth !== windowWidth) {
    windowWidth = window.innerWidth;
    gsap.matchMediaRefresh();
  }
});

//////////////////////////////
// Utility Functions for Barba JS

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
  return gsap.from(data.next.container, { opacity: 0, duration: 1, ease: 'power1.out' });
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

//////////////////////////////
// Barba JS Page transitions

//Hooks
barba.hooks.once((data) => {
  gsapInit(data);
});
// Run after each page transition
barba.hooks.afterEnter((data) => {
  window.scrollTo(0, 0);
});
barba.hooks.after((data) => {
  data.next.container.classList.remove('fixed');
  //remove active class
  document.querySelectorAll(`.${ACTIVE_CLASS}`).forEach((item) => {
    item.classList.remove(ACTIVE_CLASS);
  });
  window.scrollTo(0, 0);
  //add gsap interactions
  gsapInit(data);
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
        return gsap.to(data.current.container, { opacity: 0, duration: 0.8 });
      },
    },
    {
      // Home Page Transition
      sync: true,
      to: { namespace: ['home'] },
      once(data) {
        appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsslider@1/cmsslider.js');
        countUp(data);
      },
      enter(data) {
        defaultTransition(data);
      },
      after(data) {
        appendScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsslider@1/cmsslider.js');
        countUp(data);
      },
    },
    {
      // About Page Transition
      sync: true,
      to: { namespace: ['about'] },
      once(data) {
        countUp(data);
      },
      enter(data) {
        defaultTransition(data);
      },
      after(data) {
        countUp(data);
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
  views: [
    {
      namespace: 'home',
      once(data) {},
    },
  ],
});
