import barba from '@barba/core';

// Webflow is initialized
window.Webflow ||= [];
window.Webflow.push(() => {
  // Run code once webflow is initialized
  console.log('hello');
});
//////////////////////////////
// Barba JS Page transitions

// Barba JS Global Variables
const ACTIVE_CLASS = 'active-flip-item';
const PROJECT_NAME = '[data-barba="project-name"]';
const PROJECT_TITLE = '[data-barba="project-title"]';
const PROJECT_IMAGE = '[data-barba="project-image"]';
const PROJECT_IMAGE_WRAP = '[data-barba="project-image-wrap"]';

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
  console.log(cmsPageName);
  // If name of the project matches, add active class
  document.querySelectorAll('.w-dyn-item').forEach((item) => {
    if (
      item.querySelector(PROJECT_NAME) &&
      item.querySelector(PROJECT_NAME).textContent === cmsPageName
    ) {
      item.classList.add(ACTIVE_CLASS);
      console.log(item);
    }
  });
}

function flip(data) {
  //get elements
  const activeCMSItem = data.current.container.querySelector(`.${ACTIVE_CLASS}`);
  const outgoingImage = activeCMSItem.querySelector(PROJECT_IMAGE);
  const incomingImage = data.next.container.querySelector(PROJECT_IMAGE);
  const incomingImageWrap = data.next.container.querySelector(PROJECT_IMAGE_WRAP);

  console.log(activeCMSItem, outgoingImage, incomingImage, incomingImageWrap);
  //set state for flip
  let state = Flip.getState(outgoingImage);

  //move image
  incomingImageWrap.insertAdjacentElement('beforeend', outgoingImage);
  incomingImage.remove();
  Flip.from(state, { duration: 0.8, ease: 'power1.inOut' });
}

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
  resetWebflow(data);
});

barba.init({
  preventRunning: true,
  debug: true,
  transitions: [
    {
      // General Page Transition
      sync: true,
      name: 'opacity-transition',
      enter(data) {
        data.next.container.classList.add('fixed');
        gsap.to(data.current.container, { opacity: 0, duration: 0.8 });
        return gsap.from(data.next.container, { opacity: 0, duration: 0.8 });
      },
    },
    {
      // Home to Project Page Transition
      sync: true,
      name: 'to-project',
      from: { namespace: ['home'] },
      to: { namespace: ['project'] },
      enter(data) {
        makeItemActive(data);
        data.next.container.classList.add('fixed');
        // project title
        flip(data);
        gsap.from(data.next.container.querySelector(PROJECT_TITLE), {
          opacity: 0,
          y: '2rem',
          ease: 'power2.Out',
          duration: 0.6,
        });
        //get image wrappers on old and new pages

        //project image TEMPORARY
        // gsap.from(data.next.container.querySelector(PROJECT_IMAGE), {
        //   opacity: 0,
        //   y: '100%',
        //   ease: 'power1.Out',
        //   delay: 0.2,
        //   duration: 0.6,
        // });
        // flip(
        //   data.current.container.querySelector(PROJECT_IMAGE_WRAP),
        //   data.next.container.querySelector(PROJECT_IMAGE_WRAP)
        // );
        return gsap.to(data.current.container, { opacity: 0, duration: 0.8 });
      },
    },
  ],
});
