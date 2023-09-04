// Webflow is initialized
window.Webflow ||= [];
window.Webflow.push(() => {
  // Run code once webflow is initialized
  console.log('hello webflow');
});

// Barba JS Page transitions
function resetWebflow(data) {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let webflowPageId = $(dom).find('html').attr('data-wf-page');
  $('html').attr('data-wf-page', webflowPageId);
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();
}

function makeItemActive(data) {
  // get the name of the project
  const cmsPageName = data.next.container.querySelector('[data-barba="project-name"]');
  //if name of the project matches add active class
  document.querySelectorAll('.w-dyn-item').forEach((cmsitem) => {
    if (this.querySelector('[data-barba="project-name"]').text() === cmsPageName) {
      this.addClass('active-flip-item');
    }
  });
}

function flip(outgoing, incoming) {
  let state = Flip.getState(outgoing.find('.visual'));
  incoming.find('.visual').remove();
  outgoing.find('.visual').appendTo(incoming);
  Flip.from(state, { duration: 0.5, ease: 'power1.inOut' });
}

// run after each page transition
barba.hooks.after((data) => {
  $(data.next.container).removeClass('fixed');
  $('.active-flip-item').removeClass('active-flip-item');
  $(window).scrollTop(0);
  resetWebflow(data);
});

barba.init({
  preventRunning: true,
  transitions: [
    {
      // General Page Transition
      sync: true,
      enter(data) {
        makeItemActive(data);
        $(data.next.container).addClass('fixed');
        flip($('.active-flip-item'), $('.project-page_img-wrap'));
        return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
      },
    },
    {
      // Home to Work Page Transition
      sync: true,
      from: { namespace: ['home-page'] },
      to: { namespace: ['project-page'] },
      enter(data) {
        $(data.next.container).addClass('fixed');
        gsap.to(data.current.container, { opacity: 0, duration: 1 });
        return gsap.from(data.next.container, { opacity: 0, duration: 1 });
      },
    },
    {
      // Home to Work Page Transition
      sync: true,
      from: { namespace: ['project-page'] },
      to: { namespace: ['home-page'] },
      enter(data) {
        makeItemActive(data);
        createSwiper();
        mySlider.slideTo($('.active-flip-item').index(), 0);
        $(data.next.container).addClass('fixed');
        flip($('.project-page_img-wrap'), $('.active-flip-item .visual_wrap'));
        return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
      },
    },
  ],
});
